"use strict";

const MAX_SLOTS = 4;
const state = {
  mode: 2,
  splitX: 0.5,
  splitY: 0.5,
  fit: "contain",
  pickerStartIndex: 0,
  slots: Array.from({ length: MAX_SLOTS }, () => null),
};

const elements = {
  stage: document.querySelector("#compareStage"),
  viewer: document.querySelector("#viewer"),
  imageLayers: document.querySelector("#imageLayers"),
  dropZones: document.querySelector("#dropZones"),
  startHint: document.querySelector("#startHint"),
  statusText: document.querySelector("#statusText"),
  fileInput: document.querySelector("#fileInput"),
  modeButtons: [...document.querySelectorAll(".mode-button")],
  fitMode: document.querySelector("#fitMode"),
  resetSplit: document.querySelector("#resetSplit"),
  clearAll: document.querySelector("#clearAll"),
  fullscreenButton: document.querySelector("#fullscreenButton"),
  verticalControl: document.querySelector("#verticalControl"),
  horizontalControl: document.querySelector("#horizontalControl"),
  crossHandle: document.querySelector("#crossHandle"),
  colorInfoButton: document.querySelector("#colorInfoButton"),
  colorDialog: document.querySelector("#colorDialog"),
};

const layers = [];
const zones = [];

for (let index = 0; index < MAX_SLOTS; index += 1) {
  const layer = document.createElement("div");
  layer.className = "image-layer";
  const image = document.createElement("img");
  image.alt = "";
  image.decoding = "async";
  image.draggable = false;
  layer.append(image);
  elements.imageLayers.append(layer);
  layers.push({ layer, image });

  const zone = document.createElement("div");
  zone.className = "drop-zone";
  zone.dataset.index = String(index);
  zone.setAttribute("role", "button");
  zone.tabIndex = 0;
  elements.dropZones.append(zone);
  zones.push(zone);

  zone.addEventListener("click", (event) => {
    if (event.target.closest(".zone-remove")) return;
    openPicker(index);
  });

  zone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPicker(index);
    }
  });

  zone.addEventListener("dragenter", (event) => {
    event.preventDefault();
    zone.classList.add("is-dragover");
  });

  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
    zone.classList.add("is-dragover");
  });

  zone.addEventListener("dragleave", (event) => {
    if (!zone.contains(event.relatedTarget)) zone.classList.remove("is-dragover");
  });

  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    event.stopPropagation();
    zone.classList.remove("is-dragover");
    loadFiles(event.dataTransfer?.files, index);
  });
}

function activeIndices() {
  return Array.from({ length: state.mode }, (_, index) => index);
}

function isImageFile(file) {
  if (file.type.startsWith("image/")) return true;
  return /\.(avif|bmp|gif|jpe?g|png|svg|webp)$/i.test(file.name);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function openPicker(index) {
  state.pickerStartIndex = index;
  elements.fileInput.value = "";
  elements.fileInput.click();
}

function getFillOrder(startIndex) {
  const active = activeIndices();
  const startPosition = Math.max(0, active.indexOf(startIndex));
  return [...active.slice(startPosition), ...active.slice(0, startPosition)];
}

function loadFiles(fileList, startIndex = 0) {
  const files = [...(fileList ?? [])].filter(isImageFile);
  if (!files.length) {
    setTemporaryStatus("Цей файл не підтримується як зображення");
    return;
  }

  const order = getFillOrder(startIndex);
  files.slice(0, order.length).forEach((file, offset) => setSlot(order[offset], file));
}

function setSlot(index, file) {
  clearSlot(index, false);
  const url = URL.createObjectURL(file);
  state.slots[index] = {
    file,
    url,
    width: 0,
    height: 0,
  };

  const image = layers[index].image;
  image.onload = () => {
    const slot = state.slots[index];
    if (!slot || slot.url !== url) return;
    slot.width = image.naturalWidth;
    slot.height = image.naturalHeight;
    render();
  };
  image.onerror = () => {
    const slot = state.slots[index];
    if (!slot || slot.url !== url) return;
    clearSlot(index);
    setTemporaryStatus(`Не вдалося відкрити «${file.name}»`);
  };
  image.src = url;
  render();
}

function clearSlot(index, shouldRender = true) {
  const previous = state.slots[index];
  if (previous?.url) URL.revokeObjectURL(previous.url);
  state.slots[index] = null;
  const image = layers[index].image;
  image.onload = null;
  image.onerror = null;
  image.removeAttribute("src");
  if (shouldRender) render();
}

function clearAllSlots() {
  for (let index = 0; index < MAX_SLOTS; index += 1) clearSlot(index, false);
  render();
}

function getGeometry() {
  const x = state.splitX * 100;
  const y = state.splitY * 100;

  if (state.mode === 2) {
    return [
      { clip: `polygon(0 0, ${x}% 0, ${x}% 100%, 0 100%)`, cx: x / 2, cy: 50 },
      { clip: `polygon(${x}% 0, 100% 0, 100% 100%, ${x}% 100%)`, cx: (x + 100) / 2, cy: 50 },
    ];
  }

  if (state.mode === 3) {
    return [
      { clip: `polygon(0 0, ${x}% 0, ${x}% ${y}%, 0 ${y}%)`, cx: x / 2, cy: y / 2 },
      { clip: `polygon(${x}% 0, 100% 0, 100% ${y}%, ${x}% ${y}%)`, cx: (x + 100) / 2, cy: y / 2 },
      { clip: `polygon(0 ${y}%, 100% ${y}%, 100% 100%, 0 100%)`, cx: 50, cy: (y + 100) / 2 },
    ];
  }

  return [
    { clip: `polygon(0 0, ${x}% 0, ${x}% ${y}%, 0 ${y}%)`, cx: x / 2, cy: y / 2 },
    { clip: `polygon(${x}% 0, 100% 0, 100% ${y}%, ${x}% ${y}%)`, cx: (x + 100) / 2, cy: y / 2 },
    { clip: `polygon(0 ${y}%, ${x}% ${y}%, ${x}% 100%, 0 100%)`, cx: x / 2, cy: (y + 100) / 2 },
    { clip: `polygon(${x}% ${y}%, 100% ${y}%, 100% 100%, ${x}% 100%)`, cx: (x + 100) / 2, cy: (y + 100) / 2 },
  ];
}

function zoneMarkup(index, slot) {
  if (!slot) {
    return `
      <div class="zone-card">
        <span class="zone-number">${index + 1}</span>
        <strong>Додати зображення</strong>
        <small>Перетягніть файл сюди<br />або натисніть для вибору</small>
      </div>`;
  }

  const dimensions = slot.width && slot.height ? `${slot.width} × ${slot.height} · ` : "";
  return `
    <div class="zone-card">
      <span class="zone-number">${index + 1}</span>
      <strong title="${escapeHtml(slot.file.name)}">${escapeHtml(slot.file.name)}</strong>
      <small>${dimensions}${formatBytes(slot.file.size)}<br />Натисніть, щоб замінити</small>
      <button class="zone-remove" type="button" data-remove="${index}">Прибрати</button>
    </div>`;
}

function escapeHtml(value) {
  const element = document.createElement("span");
  element.textContent = value;
  return element.innerHTML;
}

function render() {
  const geometry = getGeometry();
  elements.stage.dataset.mode = String(state.mode);
  elements.stage.style.setProperty("--split-x", `${state.splitX * 100}%`);
  elements.stage.style.setProperty("--split-y", `${state.splitY * 100}%`);
  elements.stage.style.setProperty("--image-fit", state.fit);

  for (let index = 0; index < MAX_SLOTS; index += 1) {
    const active = index < state.mode;
    const slot = state.slots[index];
    const geometryItem = geometry[index];
    const layer = layers[index].layer;
    const zone = zones[index];

    layer.classList.toggle("is-active", active && Boolean(slot));
    zone.classList.toggle("is-active", active);
    zone.classList.toggle("has-image", Boolean(slot));
    zone.setAttribute("aria-label", slot ? `Зображення ${index + 1}: ${slot.file.name}. Натисніть, щоб замінити.` : `Додати зображення ${index + 1}`);

    if (active && geometryItem) {
      layer.style.clipPath = geometryItem.clip;
      zone.style.clipPath = geometryItem.clip;
      zone.style.setProperty("--zone-cx", `${geometryItem.cx}%`);
      zone.style.setProperty("--zone-cy", `${geometryItem.cy}%`);
      zone.innerHTML = zoneMarkup(index, slot);
      zone.querySelector(".zone-remove")?.addEventListener("click", (event) => {
        event.stopPropagation();
        clearSlot(index);
      });
    } else {
      layer.style.clipPath = "none";
      zone.style.clipPath = "none";
      zone.innerHTML = "";
    }
  }

  elements.modeButtons.forEach((button) => {
    const active = Number(button.dataset.mode) === state.mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const loaded = activeIndices().filter((index) => state.slots[index]).length;
  elements.startHint.classList.toggle("is-hidden", loaded > 0);
  elements.statusText.textContent = loaded
    ? `Завантажено ${loaded} з ${state.mode} · режим ${state.mode} · ${state.fit === "contain" ? "вписано" : "заповнено"}`
    : `Очікування зображень · режим ${state.mode}`;
}

let statusTimer = 0;
function setTemporaryStatus(message) {
  window.clearTimeout(statusTimer);
  elements.statusText.textContent = message;
  statusTimer = window.setTimeout(render, 2800);
}

elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = Number(button.dataset.mode);
    render();
  });
});

elements.fitMode.addEventListener("change", () => {
  state.fit = elements.fitMode.value;
  render();
});

elements.resetSplit.addEventListener("click", () => {
  state.splitX = 0.5;
  state.splitY = 0.5;
  render();
});

elements.clearAll.addEventListener("click", clearAllSlots);

elements.fileInput.addEventListener("change", () => {
  loadFiles(elements.fileInput.files, state.pickerStartIndex);
});

elements.fullscreenButton.addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch {
    setTemporaryStatus("Браузер не дозволив повноекранний режим");
  }
});

elements.colorInfoButton.addEventListener("click", () => elements.colorDialog.showModal());
elements.colorDialog.addEventListener("click", (event) => {
  if (event.target === elements.colorDialog) elements.colorDialog.close();
});

document.addEventListener("dragover", (event) => event.preventDefault());
document.addEventListener("drop", (event) => event.preventDefault());

let dividerDrag = null;

function updateSplitFromPointer(event, axis) {
  const bounds = elements.stage.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  const x = Math.min(0.98, Math.max(0.02, (event.clientX - bounds.left) / bounds.width));
  const y = Math.min(0.98, Math.max(0.02, (event.clientY - bounds.top) / bounds.height));

  if (axis === "x" || axis === "both") state.splitX = x;
  if (state.mode > 2 && (axis === "y" || axis === "both")) state.splitY = y;
  render();
}

function startDividerDrag(event, axis) {
  if (event.button !== 0) return;
  event.preventDefault();
  event.stopPropagation();
  dividerDrag = { pointerId: event.pointerId, axis, target: event.currentTarget };
  dividerDrag.target.setPointerCapture(event.pointerId);
  document.body.classList.add("is-dragging-divider");
  updateSplitFromPointer(event, axis);
}

function moveDivider(event) {
  if (!dividerDrag || event.pointerId !== dividerDrag.pointerId) return;
  updateSplitFromPointer(event, dividerDrag.axis);
}

function stopDividerDrag(event) {
  if (!dividerDrag || event.pointerId !== dividerDrag.pointerId) return;
  dividerDrag.target.releasePointerCapture?.(event.pointerId);
  dividerDrag = null;
  document.body.classList.remove("is-dragging-divider");
}

elements.verticalControl.addEventListener("pointerdown", (event) => startDividerDrag(event, "x"));
elements.horizontalControl.addEventListener("pointerdown", (event) => startDividerDrag(event, "y"));
elements.crossHandle.addEventListener("pointerdown", (event) => startDividerDrag(event, state.mode === 2 ? "x" : "both"));

[elements.verticalControl, elements.horizontalControl, elements.crossHandle].forEach((control) => {
  control.addEventListener("pointermove", moveDivider);
  control.addEventListener("pointerup", stopDividerDrag);
  control.addEventListener("pointercancel", stopDividerDrag);
  control.addEventListener("dblclick", () => {
    state.splitX = 0.5;
    state.splitY = 0.5;
    render();
  });
});

elements.stage.addEventListener("keydown", (event) => {
  const step = event.shiftKey ? 0.05 : 0.01;
  let handled = true;

  if (event.key === "ArrowLeft") state.splitX = Math.max(0.02, state.splitX - step);
  else if (event.key === "ArrowRight") state.splitX = Math.min(0.98, state.splitX + step);
  else if (event.key === "ArrowUp" && state.mode > 2) state.splitY = Math.max(0.02, state.splitY - step);
  else if (event.key === "ArrowDown" && state.mode > 2) state.splitY = Math.min(0.98, state.splitY + step);
  else if (event.key.toLowerCase() === "r") {
    state.splitX = 0.5;
    state.splitY = 0.5;
  } else handled = false;

  if (handled) {
    event.preventDefault();
    render();
  }
});

window.addEventListener("beforeunload", () => {
  state.slots.forEach((slot) => {
    if (slot?.url) URL.revokeObjectURL(slot.url);
  });
});

render();
