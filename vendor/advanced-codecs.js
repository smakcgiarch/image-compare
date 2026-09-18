var AdvancedCodecs=(()=>{var Zp=Object.create;var ua=Object.defineProperty;var qp=Object.getOwnPropertyDescriptor;var $p=Object.getOwnPropertyNames;var Jp=Object.getPrototypeOf,Kp=Object.prototype.hasOwnProperty;var yh=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var gt=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}},Qp=(t,e)=>{for(var n in e)ua(t,n,{get:e[n],enumerable:!0})},wh=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of $p(e))!Kp.call(t,r)&&r!==n&&ua(t,r,{get:()=>e[r],enumerable:!(i=qp(e,r))||i.enumerable});return t};var fa=(t,e,n)=>(n=t!=null?Zp(Jp(t)):{},wh(e||!t||!t.__esModule?ua(n,"default",{value:t,enumerable:!0}):n,t)),jp=t=>wh(ua({},"__esModule",{value:!0}),t);var Pn=gt(Lt=>{"use strict";var e0=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";function t0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}Lt.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var n=e.shift();if(n){if(typeof n!="object")throw new TypeError(n+"must be non-object");for(var i in n)t0(n,i)&&(t[i]=n[i])}}return t};Lt.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n0={arraySet:function(t,e,n,i,r){if(e.subarray&&t.subarray){t.set(e.subarray(n,n+i),r);return}for(var s=0;s<i;s++)t[r+s]=e[n+s]},flattenChunks:function(t){var e,n,i,r,s,a;for(i=0,e=0,n=t.length;e<n;e++)i+=t[e].length;for(a=new Uint8Array(i),r=0,e=0,n=t.length;e<n;e++)s=t[e],a.set(s,r),r+=s.length;return a}},i0={arraySet:function(t,e,n,i,r){for(var s=0;s<i;s++)t[r+s]=e[n+s]},flattenChunks:function(t){return[].concat.apply([],t)}};Lt.setTyped=function(t){t?(Lt.Buf8=Uint8Array,Lt.Buf16=Uint16Array,Lt.Buf32=Int32Array,Lt.assign(Lt,n0)):(Lt.Buf8=Array,Lt.Buf16=Array,Lt.Buf32=Array,Lt.assign(Lt,i0))};Lt.setTyped(e0)});var Wh=gt(ur=>{"use strict";var r0=Pn(),s0=4,Sh=0,bh=1,a0=2;function hr(t){for(var e=t.length;--e>=0;)t[e]=0}var o0=0,Rh=1,l0=2,c0=3,h0=258,Fo=29,hs=256,as=hs+1+Fo,cr=30,Oo=19,Ih=2*as+1,Ui=15,Io=16,u0=7,Bo=256,Ph=16,Lh=17,Uh=18,Do=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],da=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],f0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Dh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],d0=512,Ln=new Array((as+2)*2);hr(Ln);var ss=new Array(cr*2);hr(ss);var os=new Array(d0);hr(os);var ls=new Array(h0-c0+1);hr(ls);var ko=new Array(Fo);hr(ko);var pa=new Array(cr);hr(pa);function Po(t,e,n,i,r){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=i,this.max_length=r,this.has_stree=t&&t.length}var Nh,Fh,Oh;function Lo(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function Bh(t){return t<256?os[t]:os[256+(t>>>7)]}function cs(t,e){t.pending_buf[t.pending++]=e&255,t.pending_buf[t.pending++]=e>>>8&255}function Ft(t,e,n){t.bi_valid>Io-n?(t.bi_buf|=e<<t.bi_valid&65535,cs(t,t.bi_buf),t.bi_buf=e>>Io-t.bi_valid,t.bi_valid+=n-Io):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)}function xn(t,e,n){Ft(t,n[e*2],n[e*2+1])}function kh(t,e){var n=0;do n|=t&1,t>>>=1,n<<=1;while(--e>0);return n>>>1}function p0(t){t.bi_valid===16?(cs(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=t.bi_buf&255,t.bi_buf>>=8,t.bi_valid-=8)}function m0(t,e){var n=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length,l,h,u,f,m,p,g=0;for(f=0;f<=Ui;f++)t.bl_count[f]=0;for(n[t.heap[t.heap_max]*2+1]=0,l=t.heap_max+1;l<Ih;l++)h=t.heap[l],f=n[n[h*2+1]*2+1]+1,f>c&&(f=c,g++),n[h*2+1]=f,!(h>i)&&(t.bl_count[f]++,m=0,h>=o&&(m=a[h-o]),p=n[h*2],t.opt_len+=p*(f+m),s&&(t.static_len+=p*(r[h*2+1]+m)));if(g!==0){do{for(f=c-1;t.bl_count[f]===0;)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[c]--,g-=2}while(g>0);for(f=c;f!==0;f--)for(h=t.bl_count[f];h!==0;)u=t.heap[--l],!(u>i)&&(n[u*2+1]!==f&&(t.opt_len+=(f-n[u*2+1])*n[u*2],n[u*2+1]=f),h--)}}function zh(t,e,n){var i=new Array(Ui+1),r=0,s,a;for(s=1;s<=Ui;s++)i[s]=r=r+n[s-1]<<1;for(a=0;a<=e;a++){var o=t[a*2+1];o!==0&&(t[a*2]=kh(i[o]++,o))}}function g0(){var t,e,n,i,r,s=new Array(Ui+1);for(n=0,i=0;i<Fo-1;i++)for(ko[i]=n,t=0;t<1<<Do[i];t++)ls[n++]=i;for(ls[n-1]=i,r=0,i=0;i<16;i++)for(pa[i]=r,t=0;t<1<<da[i];t++)os[r++]=i;for(r>>=7;i<cr;i++)for(pa[i]=r<<7,t=0;t<1<<da[i]-7;t++)os[256+r++]=i;for(e=0;e<=Ui;e++)s[e]=0;for(t=0;t<=143;)Ln[t*2+1]=8,t++,s[8]++;for(;t<=255;)Ln[t*2+1]=9,t++,s[9]++;for(;t<=279;)Ln[t*2+1]=7,t++,s[7]++;for(;t<=287;)Ln[t*2+1]=8,t++,s[8]++;for(zh(Ln,as+1,s),t=0;t<cr;t++)ss[t*2+1]=5,ss[t*2]=kh(t,5);Nh=new Po(Ln,Do,hs+1,as,Ui),Fh=new Po(ss,da,0,cr,Ui),Oh=new Po(new Array(0),f0,0,Oo,u0)}function Gh(t){var e;for(e=0;e<as;e++)t.dyn_ltree[e*2]=0;for(e=0;e<cr;e++)t.dyn_dtree[e*2]=0;for(e=0;e<Oo;e++)t.bl_tree[e*2]=0;t.dyn_ltree[Bo*2]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function Vh(t){t.bi_valid>8?cs(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function _0(t,e,n,i){Vh(t),i&&(cs(t,n),cs(t,~n)),r0.arraySet(t.pending_buf,t.window,e,n,t.pending),t.pending+=n}function Mh(t,e,n,i){var r=e*2,s=n*2;return t[r]<t[s]||t[r]===t[s]&&i[e]<=i[n]}function Uo(t,e,n){for(var i=t.heap[n],r=n<<1;r<=t.heap_len&&(r<t.heap_len&&Mh(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!Mh(e,i,t.heap[r],t.depth));)t.heap[n]=t.heap[r],n=r,r<<=1;t.heap[n]=i}function Eh(t,e,n){var i,r,s=0,a,o;if(t.last_lit!==0)do i=t.pending_buf[t.d_buf+s*2]<<8|t.pending_buf[t.d_buf+s*2+1],r=t.pending_buf[t.l_buf+s],s++,i===0?xn(t,r,e):(a=ls[r],xn(t,a+hs+1,e),o=Do[a],o!==0&&(r-=ko[a],Ft(t,r,o)),i--,a=Bh(i),xn(t,a,n),o=da[a],o!==0&&(i-=pa[a],Ft(t,i,o)));while(s<t.last_lit);xn(t,Bo,e)}function No(t,e){var n=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems,a,o,c=-1,l;for(t.heap_len=0,t.heap_max=Ih,a=0;a<s;a++)n[a*2]!==0?(t.heap[++t.heap_len]=c=a,t.depth[a]=0):n[a*2+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=c<2?++c:0,n[l*2]=1,t.depth[l]=0,t.opt_len--,r&&(t.static_len-=i[l*2+1]);for(e.max_code=c,a=t.heap_len>>1;a>=1;a--)Uo(t,n,a);l=s;do a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],Uo(t,n,1),o=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=o,n[l*2]=n[a*2]+n[o*2],t.depth[l]=(t.depth[a]>=t.depth[o]?t.depth[a]:t.depth[o])+1,n[a*2+1]=n[o*2+1]=l,t.heap[1]=l++,Uo(t,n,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],m0(t,e),zh(n,c,t.bl_count)}function Ah(t,e,n){var i,r=-1,s,a=e[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(n+1)*2+1]=65535,i=0;i<=n;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?t.bl_tree[s*2]+=o:s!==0?(s!==r&&t.bl_tree[s*2]++,t.bl_tree[Ph*2]++):o<=10?t.bl_tree[Lh*2]++:t.bl_tree[Uh*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))}function Th(t,e,n){var i,r=-1,s,a=e[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=n;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do xn(t,s,t.bl_tree);while(--o!==0);else s!==0?(s!==r&&(xn(t,s,t.bl_tree),o--),xn(t,Ph,t.bl_tree),Ft(t,o-3,2)):o<=10?(xn(t,Lh,t.bl_tree),Ft(t,o-3,3)):(xn(t,Uh,t.bl_tree),Ft(t,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}}function x0(t){var e;for(Ah(t,t.dyn_ltree,t.l_desc.max_code),Ah(t,t.dyn_dtree,t.d_desc.max_code),No(t,t.bl_desc),e=Oo-1;e>=3&&t.bl_tree[Dh[e]*2+1]===0;e--);return t.opt_len+=3*(e+1)+5+5+4,e}function v0(t,e,n,i){var r;for(Ft(t,e-257,5),Ft(t,n-1,5),Ft(t,i-4,4),r=0;r<i;r++)Ft(t,t.bl_tree[Dh[r]*2+1],3);Th(t,t.dyn_ltree,e-1),Th(t,t.dyn_dtree,n-1)}function y0(t){var e=4093624447,n;for(n=0;n<=31;n++,e>>>=1)if(e&1&&t.dyn_ltree[n*2]!==0)return Sh;if(t.dyn_ltree[18]!==0||t.dyn_ltree[20]!==0||t.dyn_ltree[26]!==0)return bh;for(n=32;n<hs;n++)if(t.dyn_ltree[n*2]!==0)return bh;return Sh}var Ch=!1;function w0(t){Ch||(g0(),Ch=!0),t.l_desc=new Lo(t.dyn_ltree,Nh),t.d_desc=new Lo(t.dyn_dtree,Fh),t.bl_desc=new Lo(t.bl_tree,Oh),t.bi_buf=0,t.bi_valid=0,Gh(t)}function Hh(t,e,n,i){Ft(t,(o0<<1)+(i?1:0),3),_0(t,e,n,!0)}function S0(t){Ft(t,Rh<<1,3),xn(t,Bo,Ln),p0(t)}function b0(t,e,n,i){var r,s,a=0;t.level>0?(t.strm.data_type===a0&&(t.strm.data_type=y0(t)),No(t,t.l_desc),No(t,t.d_desc),a=x0(t),r=t.opt_len+3+7>>>3,s=t.static_len+3+7>>>3,s<=r&&(r=s)):r=s=n+5,n+4<=r&&e!==-1?Hh(t,e,n,i):t.strategy===s0||s===r?(Ft(t,(Rh<<1)+(i?1:0),3),Eh(t,Ln,ss)):(Ft(t,(l0<<1)+(i?1:0),3),v0(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),Eh(t,t.dyn_ltree,t.dyn_dtree)),Gh(t),i&&Vh(t)}function M0(t,e,n){return t.pending_buf[t.d_buf+t.last_lit*2]=e>>>8&255,t.pending_buf[t.d_buf+t.last_lit*2+1]=e&255,t.pending_buf[t.l_buf+t.last_lit]=n&255,t.last_lit++,e===0?t.dyn_ltree[n*2]++:(t.matches++,e--,t.dyn_ltree[(ls[n]+hs+1)*2]++,t.dyn_dtree[Bh(e)*2]++),t.last_lit===t.lit_bufsize-1}ur._tr_init=w0;ur._tr_stored_block=Hh;ur._tr_flush_block=b0;ur._tr_tally=M0;ur._tr_align=S0});var zo=gt((Aw,Xh)=>{"use strict";function E0(t,e,n,i){for(var r=t&65535|0,s=t>>>16&65535|0,a=0;n!==0;){a=n>2e3?2e3:n,n-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0}Xh.exports=E0});var Go=gt((Tw,Yh)=>{"use strict";function A0(){for(var t,e=[],n=0;n<256;n++){t=n;for(var i=0;i<8;i++)t=t&1?3988292384^t>>>1:t>>>1;e[n]=t}return e}var T0=A0();function C0(t,e,n,i){var r=T0,s=i+n;t^=-1;for(var a=i;a<s;a++)t=t>>>8^r[(t^e[a])&255];return t^-1}Yh.exports=C0});var ma=gt((Cw,Zh)=>{"use strict";Zh.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}});var nu=gt(wn=>{"use strict";var Ut=Pn(),$t=Wh(),Kh=zo(),Qn=Go(),R0=ma(),Oi=0,I0=1,P0=3,ii=4,qh=5,yn=0,$h=1,Jt=-2,L0=-3,Vo=-5,U0=-1,D0=1,ga=2,N0=3,F0=4,O0=0,B0=2,ya=8,k0=9,z0=15,G0=8,V0=29,H0=256,Wo=H0+1+V0,W0=30,X0=19,Y0=2*Wo+1,Z0=15,Ze=3,ti=258,an=ti+Ze+1,q0=32,wa=42,Xo=69,_a=73,xa=91,va=103,Di=113,fs=666,St=1,ds=2,Ni=3,pr=4,$0=3;function ni(t,e){return t.msg=R0[e],e}function Jh(t){return(t<<1)-(t>4?9:0)}function ei(t){for(var e=t.length;--e>=0;)t[e]=0}function jn(t){var e=t.state,n=e.pending;n>t.avail_out&&(n=t.avail_out),n!==0&&(Ut.arraySet(t.output,e.pending_buf,e.pending_out,n,t.next_out),t.next_out+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,e.pending===0&&(e.pending_out=0))}function Tt(t,e){$t._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,jn(t.strm)}function $e(t,e){t.pending_buf[t.pending++]=e}function us(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=e&255}function J0(t,e,n,i){var r=t.avail_in;return r>i&&(r=i),r===0?0:(t.avail_in-=r,Ut.arraySet(e,t.input,t.next_in,r,n),t.state.wrap===1?t.adler=Kh(t.adler,e,r,n):t.state.wrap===2&&(t.adler=Qn(t.adler,e,r,n)),t.next_in+=r,t.total_in+=r,r)}function Qh(t,e){var n=t.max_chain_length,i=t.strstart,r,s,a=t.prev_length,o=t.nice_match,c=t.strstart>t.w_size-an?t.strstart-(t.w_size-an):0,l=t.window,h=t.w_mask,u=t.prev,f=t.strstart+ti,m=l[i+a-1],p=l[i+a];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do if(r=e,!(l[r+a]!==p||l[r+a-1]!==m||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<f);if(s=ti-(f-i),i=f-ti,s>a){if(t.match_start=e,a=s,s>=o)break;m=l[i+a-1],p=l[i+a]}}while((e=u[e&h])>c&&--n!==0);return a<=t.lookahead?a:t.lookahead}function Fi(t){var e=t.w_size,n,i,r,s,a;do{if(s=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-an)){Ut.arraySet(t.window,t.window,e,e,0),t.match_start-=e,t.strstart-=e,t.block_start-=e,i=t.hash_size,n=i;do r=t.head[--n],t.head[n]=r>=e?r-e:0;while(--i);i=e,n=i;do r=t.prev[--n],t.prev[n]=r>=e?r-e:0;while(--i);s+=e}if(t.strm.avail_in===0)break;if(i=J0(t.strm,t.window,t.strstart+t.lookahead,s),t.lookahead+=i,t.lookahead+t.insert>=Ze)for(a=t.strstart-t.insert,t.ins_h=t.window[a],t.ins_h=(t.ins_h<<t.hash_shift^t.window[a+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[a+Ze-1])&t.hash_mask,t.prev[a&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=a,a++,t.insert--,!(t.lookahead+t.insert<Ze)););}while(t.lookahead<an&&t.strm.avail_in!==0)}function K0(t,e){var n=65535;for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Fi(t),t.lookahead===0&&e===Oi)return St;if(t.lookahead===0)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+n;if((t.strstart===0||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,Tt(t,!1),t.strm.avail_out===0)||t.strstart-t.block_start>=t.w_size-an&&(Tt(t,!1),t.strm.avail_out===0))return St}return t.insert=0,e===ii?(Tt(t,!0),t.strm.avail_out===0?Ni:pr):(t.strstart>t.block_start&&(Tt(t,!1),t.strm.avail_out===0),St)}function Ho(t,e){for(var n,i;;){if(t.lookahead<an){if(Fi(t),t.lookahead<an&&e===Oi)return St;if(t.lookahead===0)break}if(n=0,t.lookahead>=Ze&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+Ze-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),n!==0&&t.strstart-n<=t.w_size-an&&(t.match_length=Qh(t,n)),t.match_length>=Ze)if(i=$t._tr_tally(t,t.strstart-t.match_start,t.match_length-Ze),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=Ze){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+Ze-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(--t.match_length!==0);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=$t._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(Tt(t,!1),t.strm.avail_out===0))return St}return t.insert=t.strstart<Ze-1?t.strstart:Ze-1,e===ii?(Tt(t,!0),t.strm.avail_out===0?Ni:pr):t.last_lit&&(Tt(t,!1),t.strm.avail_out===0)?St:ds}function fr(t,e){for(var n,i,r;;){if(t.lookahead<an){if(Fi(t),t.lookahead<an&&e===Oi)return St;if(t.lookahead===0)break}if(n=0,t.lookahead>=Ze&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+Ze-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=Ze-1,n!==0&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-an&&(t.match_length=Qh(t,n),t.match_length<=5&&(t.strategy===D0||t.match_length===Ze&&t.strstart-t.match_start>4096)&&(t.match_length=Ze-1)),t.prev_length>=Ze&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-Ze,i=$t._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-Ze),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=r&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+Ze-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(--t.prev_length!==0);if(t.match_available=0,t.match_length=Ze-1,t.strstart++,i&&(Tt(t,!1),t.strm.avail_out===0))return St}else if(t.match_available){if(i=$t._tr_tally(t,0,t.window[t.strstart-1]),i&&Tt(t,!1),t.strstart++,t.lookahead--,t.strm.avail_out===0)return St}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=$t._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<Ze-1?t.strstart:Ze-1,e===ii?(Tt(t,!0),t.strm.avail_out===0?Ni:pr):t.last_lit&&(Tt(t,!1),t.strm.avail_out===0)?St:ds}function Q0(t,e){for(var n,i,r,s,a=t.window;;){if(t.lookahead<=ti){if(Fi(t),t.lookahead<=ti&&e===Oi)return St;if(t.lookahead===0)break}if(t.match_length=0,t.lookahead>=Ze&&t.strstart>0&&(r=t.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=t.strstart+ti;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);t.match_length=ti-(s-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=Ze?(n=$t._tr_tally(t,1,t.match_length-Ze),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=$t._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(Tt(t,!1),t.strm.avail_out===0))return St}return t.insert=0,e===ii?(Tt(t,!0),t.strm.avail_out===0?Ni:pr):t.last_lit&&(Tt(t,!1),t.strm.avail_out===0)?St:ds}function j0(t,e){for(var n;;){if(t.lookahead===0&&(Fi(t),t.lookahead===0)){if(e===Oi)return St;break}if(t.match_length=0,n=$t._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(Tt(t,!1),t.strm.avail_out===0))return St}return t.insert=0,e===ii?(Tt(t,!0),t.strm.avail_out===0?Ni:pr):t.last_lit&&(Tt(t,!1),t.strm.avail_out===0)?St:ds}function vn(t,e,n,i,r){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=i,this.func=r}var dr;dr=[new vn(0,0,0,0,K0),new vn(4,4,8,4,Ho),new vn(4,5,16,8,Ho),new vn(4,6,32,32,Ho),new vn(4,4,16,16,fr),new vn(8,16,32,32,fr),new vn(8,16,128,128,fr),new vn(8,32,128,256,fr),new vn(32,128,258,1024,fr),new vn(32,258,258,4096,fr)];function em(t){t.window_size=2*t.w_size,ei(t.head),t.max_lazy_match=dr[t.level].max_lazy,t.good_match=dr[t.level].good_length,t.nice_match=dr[t.level].nice_length,t.max_chain_length=dr[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=Ze-1,t.match_available=0,t.ins_h=0}function tm(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ya,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Ut.Buf16(Y0*2),this.dyn_dtree=new Ut.Buf16((2*W0+1)*2),this.bl_tree=new Ut.Buf16((2*X0+1)*2),ei(this.dyn_ltree),ei(this.dyn_dtree),ei(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Ut.Buf16(Z0+1),this.heap=new Ut.Buf16(2*Wo+1),ei(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Ut.Buf16(2*Wo+1),ei(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function jh(t){var e;return!t||!t.state?ni(t,Jt):(t.total_in=t.total_out=0,t.data_type=B0,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?wa:Di,t.adler=e.wrap===2?0:1,e.last_flush=Oi,$t._tr_init(e),yn)}function eu(t){var e=jh(t);return e===yn&&em(t.state),e}function nm(t,e){return!t||!t.state||t.state.wrap!==2?Jt:(t.state.gzhead=e,yn)}function tu(t,e,n,i,r,s){if(!t)return Jt;var a=1;if(e===U0&&(e=6),i<0?(a=0,i=-i):i>15&&(a=2,i-=16),r<1||r>k0||n!==ya||i<8||i>15||e<0||e>9||s<0||s>F0)return ni(t,Jt);i===8&&(i=9);var o=new tm;return t.state=o,o.strm=t,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=r+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+Ze-1)/Ze),o.window=new Ut.Buf8(o.w_size*2),o.head=new Ut.Buf16(o.hash_size),o.prev=new Ut.Buf16(o.w_size),o.lit_bufsize=1<<r+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Ut.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=e,o.strategy=s,o.method=n,eu(t)}function im(t,e){return tu(t,e,ya,z0,G0,O0)}function rm(t,e){var n,i,r,s;if(!t||!t.state||e>qh||e<0)return t?ni(t,Jt):Jt;if(i=t.state,!t.output||!t.input&&t.avail_in!==0||i.status===fs&&e!==ii)return ni(t,t.avail_out===0?Vo:Jt);if(i.strm=t,n=i.last_flush,i.last_flush=e,i.status===wa)if(i.wrap===2)t.adler=0,$e(i,31),$e(i,139),$e(i,8),i.gzhead?($e(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),$e(i,i.gzhead.time&255),$e(i,i.gzhead.time>>8&255),$e(i,i.gzhead.time>>16&255),$e(i,i.gzhead.time>>24&255),$e(i,i.level===9?2:i.strategy>=ga||i.level<2?4:0),$e(i,i.gzhead.os&255),i.gzhead.extra&&i.gzhead.extra.length&&($e(i,i.gzhead.extra.length&255),$e(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=Qn(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=Xo):($e(i,0),$e(i,0),$e(i,0),$e(i,0),$e(i,0),$e(i,i.level===9?2:i.strategy>=ga||i.level<2?4:0),$e(i,$0),i.status=Di);else{var a=ya+(i.w_bits-8<<4)<<8,o=-1;i.strategy>=ga||i.level<2?o=0:i.level<6?o=1:i.level===6?o=2:o=3,a|=o<<6,i.strstart!==0&&(a|=q0),a+=31-a%31,i.status=Di,us(i,a),i.strstart!==0&&(us(i,t.adler>>>16),us(i,t.adler&65535)),t.adler=1}if(i.status===Xo)if(i.gzhead.extra){for(r=i.pending;i.gzindex<(i.gzhead.extra.length&65535)&&!(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>r&&(t.adler=Qn(t.adler,i.pending_buf,i.pending-r,r)),jn(t),r=i.pending,i.pending===i.pending_buf_size));)$e(i,i.gzhead.extra[i.gzindex]&255),i.gzindex++;i.gzhead.hcrc&&i.pending>r&&(t.adler=Qn(t.adler,i.pending_buf,i.pending-r,r)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=_a)}else i.status=_a;if(i.status===_a)if(i.gzhead.name){r=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>r&&(t.adler=Qn(t.adler,i.pending_buf,i.pending-r,r)),jn(t),r=i.pending,i.pending===i.pending_buf_size)){s=1;break}i.gzindex<i.gzhead.name.length?s=i.gzhead.name.charCodeAt(i.gzindex++)&255:s=0,$e(i,s)}while(s!==0);i.gzhead.hcrc&&i.pending>r&&(t.adler=Qn(t.adler,i.pending_buf,i.pending-r,r)),s===0&&(i.gzindex=0,i.status=xa)}else i.status=xa;if(i.status===xa)if(i.gzhead.comment){r=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>r&&(t.adler=Qn(t.adler,i.pending_buf,i.pending-r,r)),jn(t),r=i.pending,i.pending===i.pending_buf_size)){s=1;break}i.gzindex<i.gzhead.comment.length?s=i.gzhead.comment.charCodeAt(i.gzindex++)&255:s=0,$e(i,s)}while(s!==0);i.gzhead.hcrc&&i.pending>r&&(t.adler=Qn(t.adler,i.pending_buf,i.pending-r,r)),s===0&&(i.status=va)}else i.status=va;if(i.status===va&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&jn(t),i.pending+2<=i.pending_buf_size&&($e(i,t.adler&255),$e(i,t.adler>>8&255),t.adler=0,i.status=Di)):i.status=Di),i.pending!==0){if(jn(t),t.avail_out===0)return i.last_flush=-1,yn}else if(t.avail_in===0&&Jh(e)<=Jh(n)&&e!==ii)return ni(t,Vo);if(i.status===fs&&t.avail_in!==0)return ni(t,Vo);if(t.avail_in!==0||i.lookahead!==0||e!==Oi&&i.status!==fs){var c=i.strategy===ga?j0(i,e):i.strategy===N0?Q0(i,e):dr[i.level].func(i,e);if((c===Ni||c===pr)&&(i.status=fs),c===St||c===Ni)return t.avail_out===0&&(i.last_flush=-1),yn;if(c===ds&&(e===I0?$t._tr_align(i):e!==qh&&($t._tr_stored_block(i,0,0,!1),e===P0&&(ei(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),jn(t),t.avail_out===0))return i.last_flush=-1,yn}return e!==ii?yn:i.wrap<=0?$h:(i.wrap===2?($e(i,t.adler&255),$e(i,t.adler>>8&255),$e(i,t.adler>>16&255),$e(i,t.adler>>24&255),$e(i,t.total_in&255),$e(i,t.total_in>>8&255),$e(i,t.total_in>>16&255),$e(i,t.total_in>>24&255)):(us(i,t.adler>>>16),us(i,t.adler&65535)),jn(t),i.wrap>0&&(i.wrap=-i.wrap),i.pending!==0?yn:$h)}function sm(t){var e;return!t||!t.state?Jt:(e=t.state.status,e!==wa&&e!==Xo&&e!==_a&&e!==xa&&e!==va&&e!==Di&&e!==fs?ni(t,Jt):(t.state=null,e===Di?ni(t,L0):yn))}function am(t,e){var n=e.length,i,r,s,a,o,c,l,h;if(!t||!t.state||(i=t.state,a=i.wrap,a===2||a===1&&i.status!==wa||i.lookahead))return Jt;for(a===1&&(t.adler=Kh(t.adler,e,n,0)),i.wrap=0,n>=i.w_size&&(a===0&&(ei(i.head),i.strstart=0,i.block_start=0,i.insert=0),h=new Ut.Buf8(i.w_size),Ut.arraySet(h,e,n-i.w_size,i.w_size,0),e=h,n=i.w_size),o=t.avail_in,c=t.next_in,l=t.input,t.avail_in=n,t.next_in=0,t.input=e,Fi(i);i.lookahead>=Ze;){r=i.strstart,s=i.lookahead-(Ze-1);do i.ins_h=(i.ins_h<<i.hash_shift^i.window[r+Ze-1])&i.hash_mask,i.prev[r&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=r,r++;while(--s);i.strstart=r,i.lookahead=Ze-1,Fi(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=Ze-1,i.match_available=0,t.next_in=c,t.input=l,t.avail_in=o,i.wrap=a,yn}wn.deflateInit=im;wn.deflateInit2=tu;wn.deflateReset=eu;wn.deflateResetKeep=jh;wn.deflateSetHeader=nm;wn.deflate=rm;wn.deflateEnd=sm;wn.deflateSetDictionary=am;wn.deflateInfo="pako deflate (from Nodeca project)"});var Yo=gt(mr=>{"use strict";var Sa=Pn(),iu=!0,ru=!0;try{String.fromCharCode.apply(null,[0])}catch{iu=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{ru=!1}var ps=new Sa.Buf8(256);for(Un=0;Un<256;Un++)ps[Un]=Un>=252?6:Un>=248?5:Un>=240?4:Un>=224?3:Un>=192?2:1;var Un;ps[254]=ps[254]=1;mr.string2buf=function(t){var e,n,i,r,s,a=t.length,o=0;for(r=0;r<a;r++)n=t.charCodeAt(r),(n&64512)===55296&&r+1<a&&(i=t.charCodeAt(r+1),(i&64512)===56320&&(n=65536+(n-55296<<10)+(i-56320),r++)),o+=n<128?1:n<2048?2:n<65536?3:4;for(e=new Sa.Buf8(o),s=0,r=0;s<o;r++)n=t.charCodeAt(r),(n&64512)===55296&&r+1<a&&(i=t.charCodeAt(r+1),(i&64512)===56320&&(n=65536+(n-55296<<10)+(i-56320),r++)),n<128?e[s++]=n:n<2048?(e[s++]=192|n>>>6,e[s++]=128|n&63):n<65536?(e[s++]=224|n>>>12,e[s++]=128|n>>>6&63,e[s++]=128|n&63):(e[s++]=240|n>>>18,e[s++]=128|n>>>12&63,e[s++]=128|n>>>6&63,e[s++]=128|n&63);return e};function su(t,e){if(e<65534&&(t.subarray&&ru||!t.subarray&&iu))return String.fromCharCode.apply(null,Sa.shrinkBuf(t,e));for(var n="",i=0;i<e;i++)n+=String.fromCharCode(t[i]);return n}mr.buf2binstring=function(t){return su(t,t.length)};mr.binstring2buf=function(t){for(var e=new Sa.Buf8(t.length),n=0,i=e.length;n<i;n++)e[n]=t.charCodeAt(n);return e};mr.buf2string=function(t,e){var n,i,r,s,a=e||t.length,o=new Array(a*2);for(i=0,n=0;n<a;){if(r=t[n++],r<128){o[i++]=r;continue}if(s=ps[r],s>4){o[i++]=65533,n+=s-1;continue}for(r&=s===2?31:s===3?15:7;s>1&&n<a;)r=r<<6|t[n++]&63,s--;if(s>1){o[i++]=65533;continue}r<65536?o[i++]=r:(r-=65536,o[i++]=55296|r>>10&1023,o[i++]=56320|r&1023)}return su(o,i)};mr.utf8border=function(t,e){var n;for(e=e||t.length,e>t.length&&(e=t.length),n=e-1;n>=0&&(t[n]&192)===128;)n--;return n<0||n===0?e:n+ps[t[n]]>e?n:e}});var Zo=gt((Pw,au)=>{"use strict";function om(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}au.exports=om});var hu=gt(_s=>{"use strict";var ms=nu(),gs=Pn(),$o=Yo(),Jo=ma(),lm=Zo(),cu=Object.prototype.toString,cm=0,qo=4,gr=0,ou=1,lu=2,hm=-1,um=0,fm=8;function Bi(t){if(!(this instanceof Bi))return new Bi(t);this.options=gs.assign({level:hm,method:fm,chunkSize:16384,windowBits:15,memLevel:8,strategy:um,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new lm,this.strm.avail_out=0;var n=ms.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(n!==gr)throw new Error(Jo[n]);if(e.header&&ms.deflateSetHeader(this.strm,e.header),e.dictionary){var i;if(typeof e.dictionary=="string"?i=$o.string2buf(e.dictionary):cu.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,n=ms.deflateSetDictionary(this.strm,i),n!==gr)throw new Error(Jo[n]);this._dict_set=!0}}Bi.prototype.push=function(t,e){var n=this.strm,i=this.options.chunkSize,r,s;if(this.ended)return!1;s=e===~~e?e:e===!0?qo:cm,typeof t=="string"?n.input=$o.string2buf(t):cu.call(t)==="[object ArrayBuffer]"?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(n.avail_out===0&&(n.output=new gs.Buf8(i),n.next_out=0,n.avail_out=i),r=ms.deflate(n,s),r!==ou&&r!==gr)return this.onEnd(r),this.ended=!0,!1;(n.avail_out===0||n.avail_in===0&&(s===qo||s===lu))&&(this.options.to==="string"?this.onData($o.buf2binstring(gs.shrinkBuf(n.output,n.next_out))):this.onData(gs.shrinkBuf(n.output,n.next_out)))}while((n.avail_in>0||n.avail_out===0)&&r!==ou);return s===qo?(r=ms.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===gr):(s===lu&&(this.onEnd(gr),n.avail_out=0),!0)};Bi.prototype.onData=function(t){this.chunks.push(t)};Bi.prototype.onEnd=function(t){t===gr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=gs.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};function Ko(t,e){var n=new Bi(e);if(n.push(t,!0),n.err)throw n.msg||Jo[n.err];return n.result}function dm(t,e){return e=e||{},e.raw=!0,Ko(t,e)}function pm(t,e){return e=e||{},e.gzip=!0,Ko(t,e)}_s.Deflate=Bi;_s.deflate=Ko;_s.deflateRaw=dm;_s.gzip=pm});var fu=gt((Uw,uu)=>{"use strict";var ba=30,mm=12;uu.exports=function(e,n){var i,r,s,a,o,c,l,h,u,f,m,p,g,S,y,_,v,T,x,C,M,E,A,R,I;i=e.state,r=e.next_in,R=e.input,s=r+(e.avail_in-5),a=e.next_out,I=e.output,o=a-(n-e.avail_out),c=a+(e.avail_out-257),l=i.dmax,h=i.wsize,u=i.whave,f=i.wnext,m=i.window,p=i.hold,g=i.bits,S=i.lencode,y=i.distcode,_=(1<<i.lenbits)-1,v=(1<<i.distbits)-1;e:do{g<15&&(p+=R[r++]<<g,g+=8,p+=R[r++]<<g,g+=8),T=S[p&_];t:for(;;){if(x=T>>>24,p>>>=x,g-=x,x=T>>>16&255,x===0)I[a++]=T&65535;else if(x&16){C=T&65535,x&=15,x&&(g<x&&(p+=R[r++]<<g,g+=8),C+=p&(1<<x)-1,p>>>=x,g-=x),g<15&&(p+=R[r++]<<g,g+=8,p+=R[r++]<<g,g+=8),T=y[p&v];n:for(;;){if(x=T>>>24,p>>>=x,g-=x,x=T>>>16&255,x&16){if(M=T&65535,x&=15,g<x&&(p+=R[r++]<<g,g+=8,g<x&&(p+=R[r++]<<g,g+=8)),M+=p&(1<<x)-1,M>l){e.msg="invalid distance too far back",i.mode=ba;break e}if(p>>>=x,g-=x,x=a-o,M>x){if(x=M-x,x>u&&i.sane){e.msg="invalid distance too far back",i.mode=ba;break e}if(E=0,A=m,f===0){if(E+=h-x,x<C){C-=x;do I[a++]=m[E++];while(--x);E=a-M,A=I}}else if(f<x){if(E+=h+f-x,x-=f,x<C){C-=x;do I[a++]=m[E++];while(--x);if(E=0,f<C){x=f,C-=x;do I[a++]=m[E++];while(--x);E=a-M,A=I}}}else if(E+=f-x,x<C){C-=x;do I[a++]=m[E++];while(--x);E=a-M,A=I}for(;C>2;)I[a++]=A[E++],I[a++]=A[E++],I[a++]=A[E++],C-=3;C&&(I[a++]=A[E++],C>1&&(I[a++]=A[E++]))}else{E=a-M;do I[a++]=I[E++],I[a++]=I[E++],I[a++]=I[E++],C-=3;while(C>2);C&&(I[a++]=I[E++],C>1&&(I[a++]=I[E++]))}}else if((x&64)===0){T=y[(T&65535)+(p&(1<<x)-1)];continue n}else{e.msg="invalid distance code",i.mode=ba;break e}break}}else if((x&64)===0){T=S[(T&65535)+(p&(1<<x)-1)];continue t}else if(x&32){i.mode=mm;break e}else{e.msg="invalid literal/length code",i.mode=ba;break e}break}}while(r<s&&a<c);C=g>>3,r-=C,g-=C<<3,p&=(1<<g)-1,e.next_in=r,e.next_out=a,e.avail_in=r<s?5+(s-r):5-(r-s),e.avail_out=a<c?257+(c-a):257-(a-c),i.hold=p,i.bits=g}});var vu=gt((Dw,xu)=>{"use strict";var du=Pn(),_r=15,pu=852,mu=592,gu=0,Qo=1,_u=2,gm=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],_m=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],xm=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],vm=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];xu.exports=function(e,n,i,r,s,a,o,c){var l=c.bits,h=0,u=0,f=0,m=0,p=0,g=0,S=0,y=0,_=0,v=0,T,x,C,M,E,A=null,R=0,I,O=new du.Buf16(_r+1),U=new du.Buf16(_r+1),z=null,N=0,j,Y,G;for(h=0;h<=_r;h++)O[h]=0;for(u=0;u<r;u++)O[n[i+u]]++;for(p=l,m=_r;m>=1&&O[m]===0;m--);if(p>m&&(p=m),m===0)return s[a++]=1<<24|64<<16|0,s[a++]=1<<24|64<<16|0,c.bits=1,0;for(f=1;f<m&&O[f]===0;f++);for(p<f&&(p=f),y=1,h=1;h<=_r;h++)if(y<<=1,y-=O[h],y<0)return-1;if(y>0&&(e===gu||m!==1))return-1;for(U[1]=0,h=1;h<_r;h++)U[h+1]=U[h]+O[h];for(u=0;u<r;u++)n[i+u]!==0&&(o[U[n[i+u]]++]=u);if(e===gu?(A=z=o,I=19):e===Qo?(A=gm,R-=257,z=_m,N-=257,I=256):(A=xm,z=vm,I=-1),v=0,u=0,h=f,E=a,g=p,S=0,C=-1,_=1<<p,M=_-1,e===Qo&&_>pu||e===_u&&_>mu)return 1;for(;;){j=h-S,o[u]<I?(Y=0,G=o[u]):o[u]>I?(Y=z[N+o[u]],G=A[R+o[u]]):(Y=96,G=0),T=1<<h-S,x=1<<g,f=x;do x-=T,s[E+(v>>S)+x]=j<<24|Y<<16|G|0;while(x!==0);for(T=1<<h-1;v&T;)T>>=1;if(T!==0?(v&=T-1,v+=T):v=0,u++,--O[h]===0){if(h===m)break;h=n[i+o[u]]}if(h>p&&(v&M)!==C){for(S===0&&(S=p),E+=f,g=h-S,y=1<<g;g+S<m&&(y-=O[g+S],!(y<=0));)g++,y<<=1;if(_+=1<<g,e===Qo&&_>pu||e===_u&&_>mu)return 1;C=v&M,s[C]=p<<24|g<<16|E-a|0}}return v!==0&&(s[E+v]=h-S<<24|64<<16|0),c.bits=p,0}});var ef=gt(on=>{"use strict";var Vt=Pn(),rl=zo(),Sn=Go(),ym=fu(),xs=vu(),wm=0,Xu=1,Yu=2,yu=4,Sm=5,Ma=6,ki=0,bm=1,Mm=2,Kt=-2,Zu=-3,sl=-4,Em=-5,wu=8,qu=1,Su=2,bu=3,Mu=4,Eu=5,Au=6,Tu=7,Cu=8,Ru=9,Iu=10,Ta=11,Dn=12,jo=13,Pu=14,el=15,Lu=16,Uu=17,Du=18,Nu=19,Ea=20,Aa=21,Fu=22,Ou=23,Bu=24,ku=25,zu=26,tl=27,Gu=28,Vu=29,mt=30,al=31,Am=32,Tm=852,Cm=592,Rm=15,Im=Rm;function Hu(t){return(t>>>24&255)+(t>>>8&65280)+((t&65280)<<8)+((t&255)<<24)}function Pm(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Vt.Buf16(320),this.work=new Vt.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function $u(t){var e;return!t||!t.state?Kt:(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=e.wrap&1),e.mode=qu,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Vt.Buf32(Tm),e.distcode=e.distdyn=new Vt.Buf32(Cm),e.sane=1,e.back=-1,ki)}function Ju(t){var e;return!t||!t.state?Kt:(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,$u(t))}function Ku(t,e){var n,i;return!t||!t.state||(i=t.state,e<0?(n=0,e=-e):(n=(e>>4)+1,e<48&&(e&=15)),e&&(e<8||e>15))?Kt:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=n,i.wbits=e,Ju(t))}function Qu(t,e){var n,i;return t?(i=new Pm,t.state=i,i.window=null,n=Ku(t,e),n!==ki&&(t.state=null),n):Kt}function Lm(t){return Qu(t,Im)}var Wu=!0,nl,il;function Um(t){if(Wu){var e;for(nl=new Vt.Buf32(512),il=new Vt.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(xs(Xu,t.lens,0,288,nl,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;xs(Yu,t.lens,0,32,il,0,t.work,{bits:5}),Wu=!1}t.lencode=nl,t.lenbits=9,t.distcode=il,t.distbits=5}function ju(t,e,n,i){var r,s=t.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Vt.Buf8(s.wsize)),i>=s.wsize?(Vt.arraySet(s.window,e,n-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),Vt.arraySet(s.window,e,n-i,r,s.wnext),i-=r,i?(Vt.arraySet(s.window,e,n-i,i,0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0}function Dm(t,e){var n,i,r,s,a,o,c,l,h,u,f,m,p,g,S=0,y,_,v,T,x,C,M,E,A=new Vt.Buf8(4),R,I,O=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&t.avail_in!==0)return Kt;n=t.state,n.mode===Dn&&(n.mode=jo),a=t.next_out,r=t.output,c=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,l=n.hold,h=n.bits,u=o,f=c,E=ki;e:for(;;)switch(n.mode){case qu:if(n.wrap===0){n.mode=jo;break}for(;h<16;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(n.wrap&2&&l===35615){n.check=0,A[0]=l&255,A[1]=l>>>8&255,n.check=Sn(n.check,A,2,0),l=0,h=0,n.mode=Su;break}if(n.flags=0,n.head&&(n.head.done=!1),!(n.wrap&1)||(((l&255)<<8)+(l>>8))%31){t.msg="incorrect header check",n.mode=mt;break}if((l&15)!==wu){t.msg="unknown compression method",n.mode=mt;break}if(l>>>=4,h-=4,M=(l&15)+8,n.wbits===0)n.wbits=M;else if(M>n.wbits){t.msg="invalid window size",n.mode=mt;break}n.dmax=1<<M,t.adler=n.check=1,n.mode=l&512?Iu:Dn,l=0,h=0;break;case Su:for(;h<16;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(n.flags=l,(n.flags&255)!==wu){t.msg="unknown compression method",n.mode=mt;break}if(n.flags&57344){t.msg="unknown header flags set",n.mode=mt;break}n.head&&(n.head.text=l>>8&1),n.flags&512&&(A[0]=l&255,A[1]=l>>>8&255,n.check=Sn(n.check,A,2,0)),l=0,h=0,n.mode=bu;case bu:for(;h<32;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}n.head&&(n.head.time=l),n.flags&512&&(A[0]=l&255,A[1]=l>>>8&255,A[2]=l>>>16&255,A[3]=l>>>24&255,n.check=Sn(n.check,A,4,0)),l=0,h=0,n.mode=Mu;case Mu:for(;h<16;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}n.head&&(n.head.xflags=l&255,n.head.os=l>>8),n.flags&512&&(A[0]=l&255,A[1]=l>>>8&255,n.check=Sn(n.check,A,2,0)),l=0,h=0,n.mode=Eu;case Eu:if(n.flags&1024){for(;h<16;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}n.length=l,n.head&&(n.head.extra_len=l),n.flags&512&&(A[0]=l&255,A[1]=l>>>8&255,n.check=Sn(n.check,A,2,0)),l=0,h=0}else n.head&&(n.head.extra=null);n.mode=Au;case Au:if(n.flags&1024&&(m=n.length,m>o&&(m=o),m&&(n.head&&(M=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),Vt.arraySet(n.head.extra,i,s,m,M)),n.flags&512&&(n.check=Sn(n.check,i,m,s)),o-=m,s+=m,n.length-=m),n.length))break e;n.length=0,n.mode=Tu;case Tu:if(n.flags&2048){if(o===0)break e;m=0;do M=i[s+m++],n.head&&M&&n.length<65536&&(n.head.name+=String.fromCharCode(M));while(M&&m<o);if(n.flags&512&&(n.check=Sn(n.check,i,m,s)),o-=m,s+=m,M)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=Cu;case Cu:if(n.flags&4096){if(o===0)break e;m=0;do M=i[s+m++],n.head&&M&&n.length<65536&&(n.head.comment+=String.fromCharCode(M));while(M&&m<o);if(n.flags&512&&(n.check=Sn(n.check,i,m,s)),o-=m,s+=m,M)break e}else n.head&&(n.head.comment=null);n.mode=Ru;case Ru:if(n.flags&512){for(;h<16;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(l!==(n.check&65535)){t.msg="header crc mismatch",n.mode=mt;break}l=0,h=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),t.adler=n.check=0,n.mode=Dn;break;case Iu:for(;h<32;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}t.adler=n.check=Hu(l),l=0,h=0,n.mode=Ta;case Ta:if(n.havedict===0)return t.next_out=a,t.avail_out=c,t.next_in=s,t.avail_in=o,n.hold=l,n.bits=h,Mm;t.adler=n.check=1,n.mode=Dn;case Dn:if(e===Sm||e===Ma)break e;case jo:if(n.last){l>>>=h&7,h-=h&7,n.mode=tl;break}for(;h<3;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}switch(n.last=l&1,l>>>=1,h-=1,l&3){case 0:n.mode=Pu;break;case 1:if(Um(n),n.mode=Ea,e===Ma){l>>>=2,h-=2;break e}break;case 2:n.mode=Uu;break;case 3:t.msg="invalid block type",n.mode=mt}l>>>=2,h-=2;break;case Pu:for(l>>>=h&7,h-=h&7;h<32;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){t.msg="invalid stored block lengths",n.mode=mt;break}if(n.length=l&65535,l=0,h=0,n.mode=el,e===Ma)break e;case el:n.mode=Lu;case Lu:if(m=n.length,m){if(m>o&&(m=o),m>c&&(m=c),m===0)break e;Vt.arraySet(r,i,s,m,a),o-=m,s+=m,c-=m,a+=m,n.length-=m;break}n.mode=Dn;break;case Uu:for(;h<14;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(n.nlen=(l&31)+257,l>>>=5,h-=5,n.ndist=(l&31)+1,l>>>=5,h-=5,n.ncode=(l&15)+4,l>>>=4,h-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=mt;break}n.have=0,n.mode=Du;case Du:for(;n.have<n.ncode;){for(;h<3;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}n.lens[O[n.have++]]=l&7,l>>>=3,h-=3}for(;n.have<19;)n.lens[O[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,R={bits:n.lenbits},E=xs(wm,n.lens,0,19,n.lencode,0,n.work,R),n.lenbits=R.bits,E){t.msg="invalid code lengths set",n.mode=mt;break}n.have=0,n.mode=Nu;case Nu:for(;n.have<n.nlen+n.ndist;){for(;S=n.lencode[l&(1<<n.lenbits)-1],y=S>>>24,_=S>>>16&255,v=S&65535,!(y<=h);){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(v<16)l>>>=y,h-=y,n.lens[n.have++]=v;else{if(v===16){for(I=y+2;h<I;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(l>>>=y,h-=y,n.have===0){t.msg="invalid bit length repeat",n.mode=mt;break}M=n.lens[n.have-1],m=3+(l&3),l>>>=2,h-=2}else if(v===17){for(I=y+3;h<I;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}l>>>=y,h-=y,M=0,m=3+(l&7),l>>>=3,h-=3}else{for(I=y+7;h<I;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}l>>>=y,h-=y,M=0,m=11+(l&127),l>>>=7,h-=7}if(n.have+m>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=mt;break}for(;m--;)n.lens[n.have++]=M}}if(n.mode===mt)break;if(n.lens[256]===0){t.msg="invalid code -- missing end-of-block",n.mode=mt;break}if(n.lenbits=9,R={bits:n.lenbits},E=xs(Xu,n.lens,0,n.nlen,n.lencode,0,n.work,R),n.lenbits=R.bits,E){t.msg="invalid literal/lengths set",n.mode=mt;break}if(n.distbits=6,n.distcode=n.distdyn,R={bits:n.distbits},E=xs(Yu,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,R),n.distbits=R.bits,E){t.msg="invalid distances set",n.mode=mt;break}if(n.mode=Ea,e===Ma)break e;case Ea:n.mode=Aa;case Aa:if(o>=6&&c>=258){t.next_out=a,t.avail_out=c,t.next_in=s,t.avail_in=o,n.hold=l,n.bits=h,ym(t,f),a=t.next_out,r=t.output,c=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,l=n.hold,h=n.bits,n.mode===Dn&&(n.back=-1);break}for(n.back=0;S=n.lencode[l&(1<<n.lenbits)-1],y=S>>>24,_=S>>>16&255,v=S&65535,!(y<=h);){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(_&&(_&240)===0){for(T=y,x=_,C=v;S=n.lencode[C+((l&(1<<T+x)-1)>>T)],y=S>>>24,_=S>>>16&255,v=S&65535,!(T+y<=h);){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}l>>>=T,h-=T,n.back+=T}if(l>>>=y,h-=y,n.back+=y,n.length=v,_===0){n.mode=zu;break}if(_&32){n.back=-1,n.mode=Dn;break}if(_&64){t.msg="invalid literal/length code",n.mode=mt;break}n.extra=_&15,n.mode=Fu;case Fu:if(n.extra){for(I=n.extra;h<I;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}n.length+=l&(1<<n.extra)-1,l>>>=n.extra,h-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=Ou;case Ou:for(;S=n.distcode[l&(1<<n.distbits)-1],y=S>>>24,_=S>>>16&255,v=S&65535,!(y<=h);){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if((_&240)===0){for(T=y,x=_,C=v;S=n.distcode[C+((l&(1<<T+x)-1)>>T)],y=S>>>24,_=S>>>16&255,v=S&65535,!(T+y<=h);){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}l>>>=T,h-=T,n.back+=T}if(l>>>=y,h-=y,n.back+=y,_&64){t.msg="invalid distance code",n.mode=mt;break}n.offset=v,n.extra=_&15,n.mode=Bu;case Bu:if(n.extra){for(I=n.extra;h<I;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}n.offset+=l&(1<<n.extra)-1,l>>>=n.extra,h-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=mt;break}n.mode=ku;case ku:if(c===0)break e;if(m=f-c,n.offset>m){if(m=n.offset-m,m>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=mt;break}m>n.wnext?(m-=n.wnext,p=n.wsize-m):p=n.wnext-m,m>n.length&&(m=n.length),g=n.window}else g=r,p=a-n.offset,m=n.length;m>c&&(m=c),c-=m,n.length-=m;do r[a++]=g[p++];while(--m);n.length===0&&(n.mode=Aa);break;case zu:if(c===0)break e;r[a++]=n.length,c--,n.mode=Aa;break;case tl:if(n.wrap){for(;h<32;){if(o===0)break e;o--,l|=i[s++]<<h,h+=8}if(f-=c,t.total_out+=f,n.total+=f,f&&(t.adler=n.check=n.flags?Sn(n.check,r,f,a-f):rl(n.check,r,f,a-f)),f=c,(n.flags?l:Hu(l))!==n.check){t.msg="incorrect data check",n.mode=mt;break}l=0,h=0}n.mode=Gu;case Gu:if(n.wrap&&n.flags){for(;h<32;){if(o===0)break e;o--,l+=i[s++]<<h,h+=8}if(l!==(n.total&4294967295)){t.msg="incorrect length check",n.mode=mt;break}l=0,h=0}n.mode=Vu;case Vu:E=bm;break e;case mt:E=Zu;break e;case al:return sl;case Am:default:return Kt}return t.next_out=a,t.avail_out=c,t.next_in=s,t.avail_in=o,n.hold=l,n.bits=h,(n.wsize||f!==t.avail_out&&n.mode<mt&&(n.mode<tl||e!==yu))&&ju(t,t.output,t.next_out,f-t.avail_out)?(n.mode=al,sl):(u-=t.avail_in,f-=t.avail_out,t.total_in+=u,t.total_out+=f,n.total+=f,n.wrap&&f&&(t.adler=n.check=n.flags?Sn(n.check,r,f,t.next_out-f):rl(n.check,r,f,t.next_out-f)),t.data_type=n.bits+(n.last?64:0)+(n.mode===Dn?128:0)+(n.mode===Ea||n.mode===el?256:0),(u===0&&f===0||e===yu)&&E===ki&&(E=Em),E)}function Nm(t){if(!t||!t.state)return Kt;var e=t.state;return e.window&&(e.window=null),t.state=null,ki}function Fm(t,e){var n;return!t||!t.state||(n=t.state,(n.wrap&2)===0)?Kt:(n.head=e,e.done=!1,ki)}function Om(t,e){var n=e.length,i,r,s;return!t||!t.state||(i=t.state,i.wrap!==0&&i.mode!==Ta)?Kt:i.mode===Ta&&(r=1,r=rl(r,e,n,0),r!==i.check)?Zu:(s=ju(t,e,n,n),s?(i.mode=al,sl):(i.havedict=1,ki))}on.inflateReset=Ju;on.inflateReset2=Ku;on.inflateResetKeep=$u;on.inflateInit=Lm;on.inflateInit2=Qu;on.inflate=Dm;on.inflateEnd=Nm;on.inflateGetHeader=Fm;on.inflateSetDictionary=Om;on.inflateInfo="pako inflate (from Nodeca project)"});var ol=gt((Fw,tf)=>{"use strict";tf.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}});var rf=gt((Ow,nf)=>{"use strict";function Bm(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}nf.exports=Bm});var af=gt(ys=>{"use strict";var xr=ef(),vs=Pn(),Ca=Yo(),xt=ol(),ll=ma(),km=Zo(),zm=rf(),sf=Object.prototype.toString;function zi(t){if(!(this instanceof zi))return new zi(t);this.options=vs.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(t&&t.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15)===0&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new km,this.strm.avail_out=0;var n=xr.inflateInit2(this.strm,e.windowBits);if(n!==xt.Z_OK)throw new Error(ll[n]);if(this.header=new zm,xr.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Ca.string2buf(e.dictionary):sf.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(n=xr.inflateSetDictionary(this.strm,e.dictionary),n!==xt.Z_OK)))throw new Error(ll[n])}zi.prototype.push=function(t,e){var n=this.strm,i=this.options.chunkSize,r=this.options.dictionary,s,a,o,c,l,h=!1;if(this.ended)return!1;a=e===~~e?e:e===!0?xt.Z_FINISH:xt.Z_NO_FLUSH,typeof t=="string"?n.input=Ca.binstring2buf(t):sf.call(t)==="[object ArrayBuffer]"?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(n.avail_out===0&&(n.output=new vs.Buf8(i),n.next_out=0,n.avail_out=i),s=xr.inflate(n,xt.Z_NO_FLUSH),s===xt.Z_NEED_DICT&&r&&(s=xr.inflateSetDictionary(this.strm,r)),s===xt.Z_BUF_ERROR&&h===!0&&(s=xt.Z_OK,h=!1),s!==xt.Z_STREAM_END&&s!==xt.Z_OK)return this.onEnd(s),this.ended=!0,!1;n.next_out&&(n.avail_out===0||s===xt.Z_STREAM_END||n.avail_in===0&&(a===xt.Z_FINISH||a===xt.Z_SYNC_FLUSH))&&(this.options.to==="string"?(o=Ca.utf8border(n.output,n.next_out),c=n.next_out-o,l=Ca.buf2string(n.output,o),n.next_out=c,n.avail_out=i-c,c&&vs.arraySet(n.output,n.output,o,c,0),this.onData(l)):this.onData(vs.shrinkBuf(n.output,n.next_out))),n.avail_in===0&&n.avail_out===0&&(h=!0)}while((n.avail_in>0||n.avail_out===0)&&s!==xt.Z_STREAM_END);return s===xt.Z_STREAM_END&&(a=xt.Z_FINISH),a===xt.Z_FINISH?(s=xr.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===xt.Z_OK):(a===xt.Z_SYNC_FLUSH&&(this.onEnd(xt.Z_OK),n.avail_out=0),!0)};zi.prototype.onData=function(t){this.chunks.push(t)};zi.prototype.onEnd=function(t){t===xt.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=vs.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};function cl(t,e){var n=new zi(e);if(n.push(t,!0),n.err)throw n.msg||ll[n.err];return n.result}function Gm(t,e){return e=e||{},e.raw=!0,cl(t,e)}ys.Inflate=zi;ys.inflate=cl;ys.inflateRaw=Gm;ys.ungzip=cl});var cf=gt((kw,lf)=>{"use strict";var Vm=Pn().assign,Hm=hu(),Wm=af(),Xm=ol(),of={};Vm(of,Hm,Wm,Xm);lf.exports=of});var hf=gt((zw,hl)=>{(function(){var t={};typeof hl=="object"?hl.exports=t:self.UTIF=t;var e;typeof yh=="function"?e=cf():e=self.pako;function n(){typeof process>"u"&&console.log.apply(console,arguments)}(function(i,r){(function(){var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a=(function(){function c(l){this.message="JPEG error: "+l}return c.prototype=Error(),c.prototype.name="JpegError",c.constructor=c})(),o=(function(){function c(l,h){this.message=l,this.g=h}return c.prototype=Error(),c.prototype.name="DNLMarkerError",c.constructor=c})();(function(){function c(){this.M=null,this.B=-1}function l(p,g){for(var S=0,y=[],_,v,T=16;0<T&&!p[T-1];)T--;y.push({children:[],index:0});var x=y[0],C;for(_=0;_<T;_++){for(v=0;v<p[_];v++){for(x=y.pop(),x.children[x.index]=g[S];0<x.index;)x=y.pop();for(x.index++,y.push(x);y.length<=_;)y.push(C={children:[],index:0}),x.children[x.index]=C.children,x=C;S++}_+1<T&&(y.push(C={children:[],index:0}),x.children[x.index]=C.children,x=C)}return y[0].children}function h(p,g,S,y,_,v,T,x,C){function M(){if(0<W)return W--,D>>W&1;if(D=p[g++],D===255){var we=p[g++];if(we){if(we===220&&j){g+=2;var Oe=p[g++]<<8|p[g++];if(0<Oe&&Oe!==S.g)throw new o("Found DNL marker (0xFFDC) while parsing scan data",Oe)}throw new a("unexpected marker "+(D<<8|we).toString(16))}}return W=7,D>>>7}function E(we){for(;;){if(we=we[M()],typeof we=="number")return we;if((typeof we>"u"?"undefined":s(we))!=="object")throw new a("invalid huffman sequence")}}function A(we){for(var Oe=0;0<we;)Oe=Oe<<1|M(),we--;return Oe}function R(we){if(we===1)return M()===1?1:-1;var Oe=A(we);return Oe>=1<<we-1?Oe:Oe+(-1<<we)+1}function I(we,Oe){var B=E(we.D);for(B=B===0?0:R(B),we.a[Oe]=we.m+=B,B=1;64>B;){var oe=E(we.o),pe=oe&15;if(oe>>=4,pe===0){if(15>oe)break;B+=16}else B+=oe,we.a[Oe+m[B]]=R(pe),B++}}function O(we,Oe){var B=E(we.D);B=B===0?0:R(B)<<C,we.a[Oe]=we.m+=B}function U(we,Oe){we.a[Oe]|=M()<<C}function z(we,Oe){if(0<Z)Z--;else for(var B=v;B<=T;){var oe=E(we.o),pe=oe&15;if(oe>>=4,pe===0){if(15>oe){Z=A(oe)+(1<<oe)-1;break}B+=16}else B+=oe,we.a[Oe+m[B]]=R(pe)*(1<<C),B++}}function N(we,Oe){for(var B=v,oe=0,pe;B<=T;){pe=Oe+m[B];var xe=0>we.a[pe]?-1:1;switch(te){case 0:if(oe=E(we.o),pe=oe&15,oe>>=4,pe===0)15>oe?(Z=A(oe)+(1<<oe),te=4):(oe=16,te=1);else{if(pe!==1)throw new a("invalid ACn encoding");ne=R(pe),te=oe?2:3}continue;case 1:case 2:we.a[pe]?we.a[pe]+=xe*(M()<<C):(oe--,oe===0&&(te=te===2?3:0));break;case 3:we.a[pe]?we.a[pe]+=xe*(M()<<C):(we.a[pe]=ne<<C,te=0);break;case 4:we.a[pe]&&(we.a[pe]+=xe*(M()<<C))}B++}te===4&&(Z--,Z===0&&(te=0))}for(var j=9<arguments.length&&arguments[9]!==void 0?arguments[9]:!1,Y=S.P,G=g,D=0,W=0,Z=0,te=0,ne,F=y.length,Q,Ce,V,ce,ve=S.S?v===0?x===0?O:U:x===0?z:N:I,ye=0,ie=F===1?y[0].c*y[0].l:Y*S.O,re,Fe;ye<ie;){var Me=_?Math.min(ie-ye,_):ie;for(Q=0;Q<F;Q++)y[Q].m=0;if(Z=0,F===1){var ue=y[0];for(ce=0;ce<Me;ce++)ve(ue,64*((ue.c+1)*(ye/ue.c|0)+ye%ue.c)),ye++}else for(ce=0;ce<Me;ce++){for(Q=0;Q<F;Q++)for(ue=y[Q],re=ue.h,Fe=ue.j,Ce=0;Ce<Fe;Ce++)for(V=0;V<re;V++)ve(ue,64*((ue.c+1)*((ye/Y|0)*ue.j+Ce)+(ye%Y*ue.h+V)));ye++}if(W=0,(ue=f(p,g))&&ue.f&&((0,_util.warn)("decodeScan - unexpected MCU data, current marker is: "+ue.f),g=ue.offset),ue=ue&&ue.F,!ue||65280>=ue)throw new a("marker was not found");if(65488<=ue&&65495>=ue)g+=2;else break}return(ue=f(p,g))&&ue.f&&((0,_util.warn)("decodeScan - unexpected Scan data, current marker is: "+ue.f),g=ue.offset),g-G}function u(p,g){for(var S=g.c,y=g.l,_=new Int16Array(64),v=0;v<y;v++)for(var T=0;T<S;T++){var x=64*((g.c+1)*v+T),C=_,M=g.G,E=g.a;if(!M)throw new a("missing required Quantization Table.");for(var A=0;64>A;A+=8){var R=E[x+A],I=E[x+A+1],O=E[x+A+2],U=E[x+A+3],z=E[x+A+4],N=E[x+A+5],j=E[x+A+6],Y=E[x+A+7];if(R*=M[A],(I|O|U|z|N|j|Y)===0)R=5793*R+512>>10,C[A]=R,C[A+1]=R,C[A+2]=R,C[A+3]=R,C[A+4]=R,C[A+5]=R,C[A+6]=R,C[A+7]=R;else{I*=M[A+1],O*=M[A+2],U*=M[A+3],z*=M[A+4],N*=M[A+5],j*=M[A+6],Y*=M[A+7];var G=5793*R+128>>8,D=5793*z+128>>8,W=O,Z=j;z=2896*(I-Y)+128>>8,Y=2896*(I+Y)+128>>8,U<<=4,N<<=4,G=G+D+1>>1,D=G-D,R=3784*W+1567*Z+128>>8,W=1567*W-3784*Z+128>>8,Z=R,z=z+N+1>>1,N=z-N,Y=Y+U+1>>1,U=Y-U,G=G+Z+1>>1,Z=G-Z,D=D+W+1>>1,W=D-W,R=2276*z+3406*Y+2048>>12,z=3406*z-2276*Y+2048>>12,Y=R,R=799*U+4017*N+2048>>12,U=4017*U-799*N+2048>>12,N=R,C[A]=G+Y,C[A+7]=G-Y,C[A+1]=D+N,C[A+6]=D-N,C[A+2]=W+U,C[A+5]=W-U,C[A+3]=Z+z,C[A+4]=Z-z}}for(M=0;8>M;++M)R=C[M],I=C[M+8],O=C[M+16],U=C[M+24],z=C[M+32],N=C[M+40],j=C[M+48],Y=C[M+56],(I|O|U|z|N|j|Y)===0?(R=5793*R+8192>>14,R=-2040>R?0:2024<=R?255:R+2056>>4,E[x+M]=R,E[x+M+8]=R,E[x+M+16]=R,E[x+M+24]=R,E[x+M+32]=R,E[x+M+40]=R,E[x+M+48]=R,E[x+M+56]=R):(G=5793*R+2048>>12,D=5793*z+2048>>12,W=O,Z=j,z=2896*(I-Y)+2048>>12,Y=2896*(I+Y)+2048>>12,G=(G+D+1>>1)+4112,D=G-D,R=3784*W+1567*Z+2048>>12,W=1567*W-3784*Z+2048>>12,Z=R,z=z+N+1>>1,N=z-N,Y=Y+U+1>>1,U=Y-U,G=G+Z+1>>1,Z=G-Z,D=D+W+1>>1,W=D-W,R=2276*z+3406*Y+2048>>12,z=3406*z-2276*Y+2048>>12,Y=R,R=799*U+4017*N+2048>>12,U=4017*U-799*N+2048>>12,N=R,R=G+Y,Y=G-Y,I=D+N,j=D-N,O=W+U,N=W-U,U=Z+z,z=Z-z,R=16>R?0:4080<=R?255:R>>4,I=16>I?0:4080<=I?255:I>>4,O=16>O?0:4080<=O?255:O>>4,U=16>U?0:4080<=U?255:U>>4,z=16>z?0:4080<=z?255:z>>4,N=16>N?0:4080<=N?255:N>>4,j=16>j?0:4080<=j?255:j>>4,Y=16>Y?0:4080<=Y?255:Y>>4,E[x+M]=R,E[x+M+8]=I,E[x+M+16]=O,E[x+M+24]=U,E[x+M+32]=z,E[x+M+40]=N,E[x+M+48]=j,E[x+M+56]=Y)}return g.a}function f(p,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:g,y=p.length-1;if(S=S<g?S:g,g>=y)return null;var _=p[g]<<8|p[g+1];if(65472<=_&&65534>=_)return{f:null,F:_,offset:g};for(var v=p[S]<<8|p[S+1];!(65472<=v&&65534>=v);){if(++S>=y)return null;v=p[S]<<8|p[S+1]}return{f:_.toString(16),F:v,offset:S}}var m=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]);c.prototype={parse:function(p){function g(){var W=p[T]<<8|p[T+1];return T+=2,W}function S(){var W=g();W=T+W-2;var Z=f(p,W,T);return Z&&Z.f&&((0,_util.warn)("readDataBlock - incorrect length, current marker is: "+Z.f),W=Z.offset),W=p.subarray(T,W),T+=W.length,W}function y(W){for(var Z=Math.ceil(W.v/8/W.s),te=Math.ceil(W.g/8/W.u),ne=0;ne<W.b.length;ne++){G=W.b[ne];var F=Math.ceil(Math.ceil(W.v/8)*G.h/W.s),Q=Math.ceil(Math.ceil(W.g/8)*G.j/W.u);G.a=new Int16Array(64*te*G.j*(Z*G.h+1)),G.c=F,G.l=Q}W.P=Z,W.O=te}var _=(1<arguments.length&&arguments[1]!==void 0?arguments[1]:{}).N,v=_===void 0?null:_,T=0,x=null,C=0;_=[];var M=[],E=[],A=g();if(A!==65496)throw new a("SOI not found");for(A=g();A!==65497;){switch(A){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var R=S();A===65518&&R[0]===65&&R[1]===100&&R[2]===111&&R[3]===98&&R[4]===101&&(x={version:R[5]<<8|R[6],Y:R[7]<<8|R[8],Z:R[9]<<8|R[10],W:R[11]});break;case 65499:A=g()+T-2;for(var I;T<A;){var O=p[T++],U=new Uint16Array(64);if(O>>4===0)for(R=0;64>R;R++)I=m[R],U[I]=p[T++];else if(O>>4===1)for(R=0;64>R;R++)I=m[R],U[I]=g();else throw new a("DQT - invalid table spec");_[O&15]=U}break;case 65472:case 65473:case 65474:if(z)throw new a("Only single frame JPEGs supported");g();var z={};for(z.X=A===65473,z.S=A===65474,z.precision=p[T++],A=g(),z.g=v||A,z.v=g(),z.b=[],z.C={},R=p[T++],A=U=O=0;A<R;A++){I=p[T];var N=p[T+1]>>4,j=p[T+1]&15;O<N&&(O=N),U<j&&(U=j),N=z.b.push({h:N,j,T:p[T+2],G:null}),z.C[I]=N-1,T+=3}z.s=O,z.u=U,y(z);break;case 65476:for(I=g(),A=2;A<I;){for(O=p[T++],U=new Uint8Array(16),R=N=0;16>R;R++,T++)N+=U[R]=p[T];for(j=new Uint8Array(N),R=0;R<N;R++,T++)j[R]=p[T];A+=17+N,(O>>4===0?E:M)[O&15]=l(U,j)}break;case 65501:g();var Y=g();break;case 65498:for(R=++C===1&&!v,g(),O=p[T++],I=[],A=0;A<O;A++){U=z.C[p[T++]];var G=z.b[U];U=p[T++],G.D=E[U>>4],G.o=M[U&15],I.push(G)}A=p[T++],O=p[T++],U=p[T++];try{var D=h(p,T,z,I,Y,A,O,U>>4,U&15,R);T+=D}catch(W){if(W instanceof o)return(0,_util.warn)('Attempting to re-parse JPEG image using "scanLines" parameter found in DNL marker (0xFFDC) segment.'),this.parse(p,{N:W.g});throw W}break;case 65500:T+=4;break;case 65535:p[T]!==255&&T--;break;default:if(p[T-3]===255&&192<=p[T-2]&&254>=p[T-2])T-=3;else if((R=f(p,T-2))&&R.f)(0,_util.warn)("JpegImage.parse - unexpected data, current marker is: "+R.f),T=R.offset;else throw new a("unknown marker "+A.toString(16))}A=g()}for(this.width=z.v,this.height=z.g,this.A=x,this.b=[],A=0;A<z.b.length;A++)G=z.b[A],(Y=_[G.T])&&(G.G=Y),this.b.push({R:u(z,G),U:G.h/z.s,V:G.j/z.u,c:G.c,l:G.l});this.i=this.b.length},L:function(p,g){var S=this.width/p,y=this.height/g,_,v,T=this.b.length,x=p*g*T,C=new Uint8ClampedArray(x),M=new Uint32Array(p);for(v=0;v<T;v++){var E=this.b[v],A=E.U*S,R=E.V*y,I=v,O=E.R,U=E.c+1<<3;for(_=0;_<p;_++)E=0|_*A,M[_]=(E&4294967288)<<3|E&7;for(A=0;A<g;A++)for(E=0|A*R,E=U*(E&4294967288)|(E&7)<<3,_=0;_<p;_++)C[I]=O[E+M[_]],I+=T}if(y=this.M)for(v=0;v<x;)for(S=E=0;E<T;E++,v++,S+=2)C[v]=(C[v]*y[S]>>8)+y[S+1];return C},w:function(){return this.A?!!this.A.W:this.i===3?this.B!==0:this.B===1},I:function(p){for(var g,S,y,_=0,v=p.length;_<v;_+=3)g=p[_],S=p[_+1],y=p[_+2],p[_]=g-179.456+1.402*y,p[_+1]=g+135.459-.344*S-.714*y,p[_+2]=g-226.816+1.772*S;return p},K:function(p){for(var g,S,y,_,v=0,T=0,x=p.length;T<x;T+=4)g=p[T],S=p[T+1],y=p[T+2],_=p[T+3],p[v++]=-122.67195406894+S*(-660635669420364e-19*S+.000437130475926232*y-54080610064599e-18*g+.00048449797120281*_-.154362151871126)+y*(-.000957964378445773*y+.000817076911346625*g-.00477271405408747*_+1.53380253221734)+g*(.000961250184130688*g-.00266257332283933*_+.48357088451265)+_*(-.000336197177618394*_+.484791561490776),p[v++]=107.268039397724+S*(219927104525741e-19*S-.000640992018297945*y+.000659397001245577*g+.000426105652938837*_-.176491792462875)+y*(-.000778269941513683*y+.00130872261408275*g+.000770482631801132*_-.151051492775562)+g*(.00126935368114843*g-.00265090189010898*_+.25802910206845)+_*(-.000318913117588328*_-.213742400323665),p[v++]=-20.810012546947+S*(-.000570115196973677*S-263409051004589e-19*y+.0020741088115012*g-.00288260236853442*_+.814272968359295)+y*(-153496057440975e-19*y-.000132689043961446*g+.000560833691242812*_-.195152027534049)+g*(.00174418132927582*g-.00255243321439347*_+.116935020465145)+_*(-.000343531996510555*_+.24165260232407);return p.subarray(0,v)},J:function(p){for(var g,S,y,_=0,v=p.length;_<v;_+=4)g=p[_],S=p[_+1],y=p[_+2],p[_]=434.456-g-1.402*y,p[_+1]=119.541-g+.344*S+.714*y,p[_+2]=481.816-g-1.772*S;return p},H:function(p){for(var g,S,y,_,v=0,T=1/255,x=0,C=p.length;x<C;x+=4)g=p[x]*T,S=p[x+1]*T,y=p[x+2]*T,_=p[x+3]*T,p[v++]=255+g*(-4.387332384609988*g+54.48615194189176*S+18.82290502165302*y+212.25662451639585*_-285.2331026137004)+S*(1.7149763477362134*S-5.6096736904047315*y-17.873870861415444*_-5.497006427196366)+y*(-2.5217340131683033*y-21.248923337353073*_+17.5119270841813)-_*(21.86122147463605*_+189.48180835922747),p[v++]=255+g*(8.841041422036149*g+60.118027045597366*S+6.871425592049007*y+31.159100130055922*_-79.2970844816548)+S*(-15.310361306967817*S+17.575251261109482*y+131.35250912493976*_-190.9453302588951)+y*(4.444339102852739*y+9.8632861493405*_-24.86741582555878)-_*(20.737325471181034*_+187.80453709719578),p[v++]=255+g*(.8842522430003296*g+8.078677503112928*S+30.89978309703729*y-.23883238689178934*_-14.183576799673286)+S*(10.49593273432072*S+63.02378494754052*y+50.606957656360734*_-112.23884253719248)+y*(.03296041114873217*y+115.60384449646641*_-193.58209356861505)-_*(22.33816807309886*_+180.12613974708367);return p.subarray(0,v)},getData:function(p,g,S){if(4<this.i)throw new a("Unsupported color mode");if(p=this.L(p,g),this.i===1&&S){S=p.length,g=new Uint8ClampedArray(3*S);for(var y=0,_=0;_<S;_++){var v=p[_];g[y++]=v,g[y++]=v,g[y++]=v}return g}if(this.i===3&&this.w())return this.I(p);if(this.i===4){if(this.w())return S?this.K(p):this.J(p);if(S)return this.H(p)}return p}},i.JpegDecoder=c})()})(),i.encodeImage=function(s,a,o,c){var l={t256:[a],t257:[o],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[o],t279:[a*o*4],t282:[1],t283:[1],t284:[1],t286:[0],t287:[0],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(c)for(var h in c)l[h]=c[h];for(var u=new Uint8Array(i.encode([l])),f=new Uint8Array(s),m=new Uint8Array(1e3+a*o*4),h=0;h<u.length;h++)m[h]=u[h];for(var h=0;h<f.length;h++)m[1e3+h]=f[h];return m.buffer},i.encode=function(s){var a=new Uint8Array(2e4),o=4,c=i._binBE;a[0]=77,a[1]=77,a[3]=42;var l=8;c.writeUint(a,o,l),o+=4;for(var h=0;h<s.length;h++){var u=i._writeIFD(c,a,l,s[h]);l=u[1],h<s.length-1&&c.writeUint(a,u[0],l)}return a.slice(0,l).buffer},i.decode=function(s){i.decode._decodeG3.allow2D=null;var a=new Uint8Array(s),o=0,c=i._binBE.readASCII(a,o,2);o+=2;var l=c=="II"?i._binLE:i._binBE,h=l.readUshort(a,o);o+=2;var u=l.readUint(a,o);o+=4;for(var f=[];;){var m=i._readIFD(l,a,u,f,0,!1);if(u=l.readUint(a,m),u==0)break}return f},i.decodeImage=function(s,a,o){var c=new Uint8Array(s),l=i._binBE.readASCII(c,0,2);if(a.t256!=null){a.isLE=l=="II",a.width=a.t256[0],a.height=a.t257[0];var h=a.t259?a.t259[0]:1,u=a.t266?a.t266[0]:1;a.t284&&a.t284[0]==2&&n("PlanarConfiguration 2 should not be used!");var f;a.t258?f=Math.min(32,a.t258[0])*a.t258.length:f=a.t277?a.t277[0]:1,h==1&&a.t279!=null&&a.t278&&a.t262[0]==32803&&(f=Math.round(a.t279[0]*8/(a.width*a.t278[0])));var m=Math.ceil(a.width*f/8)*8,p=a.t273;p==null&&(p=a.t324);var g=a.t279;h==1&&p.length==1&&(g=[a.height*(m>>>3)]),g==null&&(g=a.t325);var S=new Uint8Array(a.height*(m>>>3)),y=0;if(a.t322!=null){for(var _=a.t322[0],v=a.t323[0],T=Math.floor((a.width+_-1)/_),x=Math.floor((a.height+v-1)/v),C=new Uint8Array(Math.ceil(_*v*f/8)|0),M=0;M<x;M++)for(var E=0;E<T;E++){for(var A=M*T+E,R=0;R<C.length;R++)C[R]=0;i.decode._decompress(a,o,c,p[A],g[A],h,C,0,u),h==6?S=C:i._copyTile(C,Math.ceil(_*f/8)|0,v,S,Math.ceil(a.width*f/8)|0,a.height,Math.ceil(E*_*f/8)|0,M*v)}y=S.length*8}else{var I=a.t278?a.t278[0]:a.height;I=Math.min(I,a.height);for(var A=0;A<p.length;A++)i.decode._decompress(a,o,c,p[A],g[A],h,S,Math.ceil(y/8)|0,u),y+=m*I;y=Math.min(y,S.length*8)}a.data=new Uint8Array(S.buffer,0,Math.ceil(y/8)|0)}},i.decode._decompress=function(s,a,o,c,l,h,u,f,m){if(h==1||l==u.length&&h!=32767)for(var p=0;p<l;p++)u[f+p]=o[c+p];else if(h==3)i.decode._decodeG3(o,c,l,u,f,s.width,m);else if(h==4)i.decode._decodeG4(o,c,l,u,f,s.width,m);else if(h==5)i.decode._decodeLZW(o,c,u,f);else if(h==6)i.decode._decodeOldJPEG(s,o,c,l,u,f);else if(h==7)i.decode._decodeNewJPEG(s,o,c,l,u,f);else if(h==8)for(var g=new Uint8Array(o.buffer,c,l),S=r.inflate(g),y=0;y<S.length;y++)u[f+y]=S[y];else h==32767?i.decode._decodeARW(s,o,c,l,u,f):h==32773?i.decode._decodePackBits(o,c,l,u,f):h==32809?i.decode._decodeThunder(o,c,l,u,f):h==34713?i.decode._decodeNikon(s,a,o,c,l,u,f):n("Unknown compression",h);var _=s.t258?Math.min(32,s.t258[0]):1,v=s.t277?s.t277[0]:1,T=_*v>>>3,x=s.t278?s.t278[0]:s.height,C=Math.ceil(_*v*s.width/8);if(_==16&&!s.isLE&&s.t33422==null)for(var M=0;M<x;M++)for(var E=f+M*C,A=1;A<C;A+=2){var R=u[E+A];u[E+A]=u[E+A-1],u[E+A-1]=R}if(s.t317&&s.t317[0]==2)for(var M=0;M<x;M++){var I=f+M*C;if(_==16)for(var p=T;p<C;p+=2){var O=(u[I+p+1]<<8|u[I+p])+(u[I+p-T+1]<<8|u[I+p-T]);u[I+p]=O&255,u[I+p+1]=O>>>8&255}else if(v==3)for(var p=3;p<C;p+=3)u[I+p]=u[I+p]+u[I+p-3]&255,u[I+p+1]=u[I+p+1]+u[I+p-2]&255,u[I+p+2]=u[I+p+2]+u[I+p-1]&255;else for(var p=T;p<C;p++)u[I+p]=u[I+p]+u[I+p-T]&255}},i.decode._ljpeg_diff=function(s,a,o){var c=i.decode._getbithuff,l,h;return l=c(s,a,o[0],o),h=c(s,a,l,0),(h&1<<l-1)==0&&(h-=(1<<l)-1),h},i.decode._decodeARW=function(s,a,o,c,l,h){var u=s.t256[0],f=s.t257[0],m=s.t258[0],p=s.isLE?i._binLE:i._binBE,g=u*f==c||u*f*1.5==c;if(!g){f+=8;var S=[o,0,0,0],y=new Uint16Array(32770),_=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],te,v,T,z,U,x=0,C=i.decode._ljpeg_diff;for(y[0]=15,T=te=0;te<18;te++)for(var M=32768>>>(_[te]>>>8),v=0;v<M;v++)y[++T]=_[te];for(z=u;z--;)for(U=0;U<f+1;U+=2)if(U==f&&(U=1),x+=C(a,S,y),U<f){var E=x&4095;i.decode._putsF(l,(U*u+z)*m,E<<16-m)}return}if(u*f*1.5==c){for(var te=0;te<c;te+=3){var A=a[o+te+0],R=a[o+te+1],I=a[o+te+2];l[h+te]=R<<4|A>>>4,l[h+te+1]=A<<4|I>>>4,l[h+te+2]=I<<4|R>>>4}return}var O=new Uint16Array(16),U,z,N,j,Y,G,D,W,Z,te,ne,F=new Uint8Array(u+1);for(U=0;U<f;U++){for(var Q=0;Q<u;Q++)F[Q]=a[o++];for(ne=0,z=0;z<u-30;ne+=16){for(j=2047&(N=p.readUint(F,ne)),Y=2047&N>>>11,G=15&N>>>22,D=15&N>>>26,W=0;W<4&&128<<W<=j-Y;W++);for(Z=30,te=0;te<16;te++)te==G?O[te]=j:te==D?O[te]=Y:(O[te]=((p.readUshort(F,ne+(Z>>3))>>>(Z&7)&127)<<W)+Y,O[te]>2047&&(O[te]=2047),Z+=7);for(te=0;te<16;te++,z+=2){var E=O[te]<<1;i.decode._putsF(l,(U*u+z)*m,E<<16-m)}z-=z&1?1:31}}},i.decode._decodeNikon=function(s,a,o,c,l,h,u){var f=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],m=s.t256[0],p=s.t257[0],g=s.t258[0],S=0,y=0,_=i.decode._make_decoder,v=i.decode._getbithuff,T=a[0].exifIFD.makerNote,x=T.t150?T.t150:T.t140,C=0,M=x[C++],E=x[C++];(M==73||E==88)&&(C+=2110),M==70&&(S=2),g==14&&(S+=3);for(var A=[[0,0],[0,0]],R=s.isLE?i._binLE:i._binBE,N=0;N<2;N++)for(var I=0;I<2;I++)A[N][I]=R.readShort(x,C),C+=2;var O=1<<g&32767,U=0,z=R.readShort(x,C);C+=2,z>1&&(U=Math.floor(O/(z-1))),M==68&&E==32&&U>0&&(y=R.readShort(x,562));var N,j,Y,G,D,W,Z=0,te=[0,0],ne=_(f[S]),F=[c,0,0,0];for(Z=j=0;j<p;j++)for(y&&j==y&&(ne=_(f[S+1])),Y=0;Y<m;Y++){N=v(o,F,ne[0],ne),G=N&15,D=N>>>4,W=(v(o,F,G-D,0)<<1)+1<<D>>>1,(W&1<<G-1)==0&&(W-=(1<<G)-(D==0?1:0)),Y<2?te[Y]=A[j&1][Y]+=W:te[Y&1]+=W;var Q=Math.min(Math.max(te[Y&1],0),(1<<g)-1),Ce=(j*m+Y)*g;i.decode._putsF(h,Ce,Q<<16-g)}},i.decode._putsF=function(s,a,o){o=o<<8-(a&7);var c=a>>>3;s[c]|=o>>>16,s[c+1]|=o>>>8,s[c+2]|=o},i.decode._getbithuff=function(s,a,o,c){var l=0,h=i.decode._get_byte,u,f=a[0],m=a[1],p=a[2],g=a[3];if(o==0||p<0)return 0;for(;!g&&p<o&&(u=s[f++])!=-1&&!(g=l&&u==255&&s[f++]);)m=(m<<8)+u,p+=8;if(u=m<<32-p>>>32-o,c?(p-=c[u+1]>>>8,u=c[u+1]&255):p-=o,p<0)throw"e";return a[0]=f,a[1]=m,a[2]=p,a[3]=g,u},i.decode._make_decoder=function(s){var a,o,c,l,h,u=[];for(a=16;a!=0&&!s[a];a--);var f=17;for(u[0]=a,c=o=1;o<=a;o++)for(l=0;l<s[o];l++,++f)for(h=0;h<1<<a-o;h++)c<=1<<a&&(u[c++]=o<<8|s[f]);return u},i.decode._decodeNewJPEG=function(s,a,o,c,l,h){var u=s.t347,f=u?u.length:0,m=new Uint8Array(f+c);if(u){for(var p=216,g=217,S=0,y=0;y<f-1&&!(u[y]==255&&u[y+1]==g);y++)m[S++]=u[y];var _=a[o],v=a[o+1];(_!=255||v!=p)&&(m[S++]=_,m[S++]=v);for(var y=2;y<c;y++)m[S++]=a[o+y]}else for(var y=0;y<c;y++)m[y]=a[o+y];if(s.t262[0]==32803||s.t262[0]==34892){var T=s.t258[0],x=i.LosslessJpegDecode(m),C=x.length;if(T==16)if(s.isLE)for(var y=0;y<C;y++)l[h+(y<<1)]=x[y]&255,l[h+(y<<1)+1]=x[y]>>>8;else for(var y=0;y<C;y++)l[h+(y<<1)]=x[y]>>>8,l[h+(y<<1)+1]=x[y]&255;else if(T==14||T==12)for(var M=16-T,y=0;y<C;y++)i.decode._putsF(l,y*T,x[y]<<M);else throw new Error("unsupported bit depth "+T)}else{var E=new i.JpegDecoder;E.parse(m);for(var A=E.getData(E.width,E.height),y=0;y<A.length;y++)l[h+y]=A[y]}s.t262[0]==6&&(s.t262[0]=2)},i.decode._decodeOldJPEGInit=function(s,a,o,c){var l=216,h=217,u=219,f=196,m=221,p=192,g=218,S=0,y=0,_,v,T=!1,x,C,M,E=s.t513,A=E?E[0]:0,R=s.t514,I=R?R[0]:0,O=s.t324||s.t273||E,U=s.t530,z=0,N=0,j=s.t277?s.t277[0]:1,Y=s.t515;if(O&&(y=O[0],T=O.length>1),!T){if(a[o]==255&&a[o+1]==l)return{jpegOffset:o};if(E!=null&&(a[o+A]==255&&a[o+A+1]==l?S=o+A:n("JPEGInterchangeFormat does not point to SOI"),R==null?n("JPEGInterchangeFormatLength field is missing"):(A>=y||A+I<=y)&&n("JPEGInterchangeFormatLength field value is invalid"),S!=null))return{jpegOffset:S}}if(U!=null&&(z=U[0],N=U[1]),E!=null&&R!=null)if(I>=2&&A+I<=y){for(a[o+A+I-2]==255&&a[o+A+I-1]==l?_=new Uint8Array(I-2):_=new Uint8Array(I),x=0;x<_.length;x++)_[x]=a[o+A+x];n("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else n("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(_==null){var G=0,D=[];D[G++]=255,D[G++]=l;var W=s.t519;if(W==null)throw new Error("JPEGQTables tag is missing");for(x=0;x<W.length;x++)for(D[G++]=255,D[G++]=u,D[G++]=0,D[G++]=67,D[G++]=x,C=0;C<64;C++)D[G++]=a[o+W[x]+C];for(M=0;M<2;M++){var Z=s[M==0?"t520":"t521"];if(Z==null)throw new Error((M==0?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(x=0;x<Z.length;x++){D[G++]=255,D[G++]=f;var te=19;for(C=0;C<16;C++)te+=a[o+Z[x]+C];for(D[G++]=te>>>8,D[G++]=te&255,D[G++]=x|M<<4,C=0;C<16;C++)D[G++]=a[o+Z[x]+C];for(C=0;C<te;C++)D[G++]=a[o+Z[x]+16+C]}}if(D[G++]=255,D[G++]=p,D[G++]=0,D[G++]=8+3*j,D[G++]=8,D[G++]=s.height>>>8&255,D[G++]=s.height&255,D[G++]=s.width>>>8&255,D[G++]=s.width&255,D[G++]=j,j==1)D[G++]=1,D[G++]=17,D[G++]=0;else for(x=0;x<3;x++)D[G++]=x+1,D[G++]=x!=0?17:(z&15)<<4|N&15,D[G++]=x;Y!=null&&Y[0]!=0&&(D[G++]=255,D[G++]=m,D[G++]=0,D[G++]=4,D[G++]=Y[0]>>>8&255,D[G++]=Y[0]&255),_=new Uint8Array(D)}var ne=-1;for(x=0;x<_.length-1;){if(_[x]==255&&_[x+1]==p){ne=x;break}x++}if(ne==-1){var F=new Uint8Array(_.length+10+3*j);F.set(_);var Q=_.length;if(ne=_.length,_=F,_[Q++]=255,_[Q++]=p,_[Q++]=0,_[Q++]=8+3*j,_[Q++]=8,_[Q++]=s.height>>>8&255,_[Q++]=s.height&255,_[Q++]=s.width>>>8&255,_[Q++]=s.width&255,_[Q++]=j,j==1)_[Q++]=1,_[Q++]=17,_[Q++]=0;else for(x=0;x<3;x++)_[Q++]=x+1,_[Q++]=x!=0?17:(z&15)<<4|N&15,_[Q++]=x}if(a[y]==255&&a[y+1]==g){var Ce=a[y+2]<<8|a[y+3];for(v=new Uint8Array(Ce+2),v[0]=a[y],v[1]=a[y+1],v[2]=a[y+2],v[3]=a[y+3],x=0;x<Ce-2;x++)v[x+4]=a[y+x+4]}else{v=new Uint8Array(8+2*j);var V=0;if(v[V++]=255,v[V++]=g,v[V++]=0,v[V++]=6+2*j,v[V++]=j,j==1)v[V++]=1,v[V++]=0;else for(x=0;x<3;x++)v[V++]=x+1,v[V++]=x<<4|x;v[V++]=0,v[V++]=63,v[V++]=0}return{jpegOffset:o,tables:_,sosMarker:v,sofPosition:ne}},i.decode._decodeOldJPEG=function(s,a,o,c,l,h){var u,f,m,p,g,S=i.decode._decodeOldJPEGInit(s,a,o,c);if(S.jpegOffset!=null)for(f=o+c-S.jpegOffset,p=new Uint8Array(f),u=0;u<f;u++)p[u]=a[S.jpegOffset+u];else{for(m=S.tables.length,p=new Uint8Array(m+S.sosMarker.length+c+2),p.set(S.tables),g=m,p[S.sofPosition+5]=s.height>>>8&255,p[S.sofPosition+6]=s.height&255,p[S.sofPosition+7]=s.width>>>8&255,p[S.sofPosition+8]=s.width&255,(a[o]!=255||a[o+1]!=SOS)&&(p.set(S.sosMarker,g),g+=sosMarker.length),u=0;u<c;u++)p[g++]=a[o+u];p[g++]=255,p[g++]=EOI}var y=new i.JpegDecoder;y.parse(p);for(var _=y.getData(y.width,y.height),u=0;u<_.length;u++)l[h+u]=_[u];s.t262&&s.t262[0]==6&&(s.t262[0]=2)},i.decode._decodePackBits=function(s,a,o,c,l){for(var h=new Int8Array(s.buffer),u=new Int8Array(c.buffer),f=a+o;a<f;){var m=h[a];if(a++,m>=0&&m<128)for(var p=0;p<m+1;p++)u[l]=h[a],l++,a++;if(m>=-127&&m<0){for(var p=0;p<-m+1;p++)u[l]=h[a],l++;a++}}},i.decode._decodeThunder=function(s,a,o,c,l){for(var h=[0,1,0,-1],u=[0,1,2,3,0,-3,-2,-1],f=a+o,m=l*2,p=0;a<f;){var g=s[a],S=g>>>6,y=g&63;if(a++,S==3&&(p=y&15,c[m>>>1]|=p<<4*(1-m&1),m++),S==0)for(var _=0;_<y;_++)c[m>>>1]|=p<<4*(1-m&1),m++;if(S==2)for(var _=0;_<2;_++){var v=y>>>3*(1-_)&7;v!=4&&(p+=u[v],c[m>>>1]|=p<<4*(1-m&1),m++)}if(S==1)for(var _=0;_<3;_++){var v=y>>>2*(2-_)&3;v!=2&&(p+=h[v],c[m>>>1]|=p<<4*(1-m&1),m++)}}},i.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3},i.decode._lens=(function(){var s=function(m,p,g,S){for(var y=0;y<p.length;y++)m[p[y]]=g+y*S},a="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",o="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",c="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",l="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",h="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";a=a.split(","),o=o.split(","),c=c.split(","),l=l.split(","),h=h.split(",");var u={},f={};return s(u,a,0,1),s(u,c,64,64),s(u,h,1792,64),s(f,o,0,1),s(f,l,64,64),s(f,h,1792,64),[u,f]})(),i.decode._decodeG4=function(s,a,o,c,l,h,u){for(var f=i.decode,m=a<<3,p=0,g="",S=[],y=[],_=0;_<h;_++)y.push(0);y=f._makeDiff(y);for(var v=0,T=0,x=0,C=0,M=0,E=0,A=0,R="",I=0,O=Math.ceil(h/8)*8;m>>>3<a+o;){C=f._findDiff(y,v+(v==0?0:1),1-E),M=f._findDiff(y,C,E);var U=0;if(u==1&&(U=s[m>>>3]>>>7-(m&7)&1),u==2&&(U=s[m>>>3]>>>(m&7)&1),m++,g+=U,R=="H"){if(f._lens[E][g]!=null){var z=f._lens[E][g];g="",p+=z,z<64&&(f._addNtimes(S,p,E),v+=p,E=1-E,p=0,I--,I==0&&(R=""))}}else g=="0001"&&(g="",f._addNtimes(S,M-v,E),v=M),g=="001"&&(g="",R="H",I=2),f._dmap[g]!=null&&(T=C+f._dmap[g],f._addNtimes(S,T-v,E),v=T,g="",E=1-E);S.length==h&&R==""&&(f._writeBits(S,c,l*8+A*O),E=0,A++,v=0,y=f._makeDiff(S),S=[])}},i.decode._findDiff=function(s,a,o){for(var c=0;c<s.length;c+=2)if(s[c]>=a&&s[c+1]==o)return s[c]},i.decode._makeDiff=function(s){var a=[];s[0]==1&&a.push(0,1);for(var o=1;o<s.length;o++)s[o-1]!=s[o]&&a.push(o,s[o]);return a.push(s.length,0,s.length,1),a},i.decode._decodeG3=function(s,a,o,c,l,h,u){for(var f=i.decode,m=a<<3,p=0,g="",S=[],y=[],_=0;_<h;_++)S.push(0);for(var v=0,T=0,x=0,C=0,M=0,E=0,A=-1,R="",I=0,O=!1,U=Math.ceil(h/8)*8;m>>>3<a+o;){C=f._findDiff(y,v+(v==0?0:1),1-E),M=f._findDiff(y,C,E);var z=0;if(u==1&&(z=s[m>>>3]>>>7-(m&7)&1),u==2&&(z=s[m>>>3]>>>(m&7)&1),m++,g+=z,O){if(f._lens[E][g]!=null){var N=f._lens[E][g];g="",p+=N,N<64&&(f._addNtimes(S,p,E),E=1-E,p=0)}}else if(R=="H"){if(f._lens[E][g]!=null){var N=f._lens[E][g];g="",p+=N,N<64&&(f._addNtimes(S,p,E),v+=p,E=1-E,p=0,I--,I==0&&(R=""))}}else g=="0001"&&(g="",f._addNtimes(S,M-v,E),v=M),g=="001"&&(g="",R="H",I=2),f._dmap[g]!=null&&(T=C+f._dmap[g],f._addNtimes(S,T-v,E),v=T,g="",E=1-E);g.endsWith("000000000001")&&(A>=0&&f._writeBits(S,c,l*8+A*U),u==1&&(O=(s[m>>>3]>>>7-(m&7)&1)==1),u==2&&(O=(s[m>>>3]>>>(m&7)&1)==1),m++,f._decodeG3.allow2D==null&&(f._decodeG3.allow2D=O),f._decodeG3.allow2D||(O=!0,m--),g="",E=0,A++,v=0,y=f._makeDiff(S),S=[])}S.length==h&&f._writeBits(S,c,l*8+A*U)},i.decode._addNtimes=function(s,a,o){for(var c=0;c<a;c++)s.push(o)},i.decode._writeBits=function(s,a,o){for(var c=0;c<s.length;c++)a[o+c>>>3]|=s[c]<<7-(o+c&7)},i.decode._decodeLZW=function(s,a,o,c){if(i.decode._lzwTab==null){for(var l=new Uint32Array(65535),h=new Uint16Array(65535),g=new Uint8Array(2e6),u=0;u<256;u++)g[u<<2]=u,l[u]=u<<2,h[u]=1;i.decode._lzwTab=[l,h,g]}for(var f=i.decode._copyData,m=i.decode._lzwTab[0],p=i.decode._lzwTab[1],g=i.decode._lzwTab[2],S=258,y=1032,_=9,v=a<<3,T=256,x=257,C=0,M=0,E=0;C=s[v>>>3]<<16|s[v+8>>>3]<<8|s[v+16>>>3],M=C>>24-(v&7)-_&(1<<_)-1,v+=_,M!=x;){if(M==T){if(_=9,S=258,y=1032,C=s[v>>>3]<<16|s[v+8>>>3]<<8|s[v+16>>>3],M=C>>24-(v&7)-_&(1<<_)-1,v+=_,M==x)break;o[c]=M,c++}else if(M<S){var A=m[M],R=p[M];if(f(g,A,o,c,R),c+=R,E>=S)m[S]=y,g[m[S]]=A[0],p[S]=1,y=y+1+3&-4,S++;else{m[S]=y;var I=m[E],O=p[E];f(g,I,g,y,O),g[y+O]=g[A],O++,p[S]=O,S++,y=y+O+3&-4}S+1==1<<_&&_++}else{if(E>=S)m[S]=y,p[S]=0,S++;else{m[S]=y;var I=m[E],O=p[E];f(g,I,g,y,O),g[y+O]=g[y],O++,p[S]=O,S++,f(g,y,o,c,O),c+=O,y=y+O+3&-4}S+1==1<<_&&_++}E=M}},i.decode._copyData=function(s,a,o,c,l){for(var h=0;h<l;h+=4)o[c+h]=s[a+h],o[c+h+1]=s[a+h+1],o[c+h+2]=s[a+h+2],o[c+h+3]=s[a+h+3]},i.tags={},i.ttypes={256:3,257:3,258:3,259:3,262:3,273:4,274:3,277:3,278:4,279:4,282:5,283:5,284:3,286:5,287:5,296:3,305:2,306:2,338:3,513:4,514:4,34665:4},i._readIFD=function(s,a,o,c,l,h){var u=s.readUshort(a,o);o+=2;var f={};c.push(f),h&&n("   ".repeat(l),c.length-1,">>>----------------");for(var m=0;m<u;m++){var p=s.readUshort(a,o);o+=2;var g=s.readUshort(a,o);o+=2;var S=s.readUint(a,o);o+=4;var y=s.readUint(a,o);o+=4;var _=[];if((g==1||g==7)&&(_=new Uint8Array(a.buffer,S<5?o-4:y,S)),g==2){var v=S<5?o-4:y,T=a[v];T<128?_.push(s.readASCII(a,v,S-1)):_=new Uint8Array(a.buffer,v,S-1)}if(g==3)for(var x=0;x<S;x++)_.push(s.readUshort(a,(S<3?o-4:y)+2*x));if(g==4)for(var x=0;x<S;x++)_.push(s.readUint(a,(S<2?o-4:y)+4*x));if(g==5)for(var x=0;x<S;x++)_.push(s.readUint(a,y+x*8)/s.readUint(a,y+x*8+4));if(g==8)for(var x=0;x<S;x++)_.push(s.readShort(a,(S<3?o-4:y)+2*x));if(g==9)for(var x=0;x<S;x++)_.push(s.readInt(a,(S<2?o-4:y)+4*x));if(g==10)for(var x=0;x<S;x++)_.push(s.readInt(a,y+x*8)/s.readInt(a,y+x*8+4));if(g==11)for(var x=0;x<S;x++)_.push(s.readFloat(a,y+x*4));if(g==12)for(var x=0;x<S;x++)_.push(s.readDouble(a,y+x*8));if(f["t"+p]=_,S!=0&&_.length==0&&n("unknown TIFF tag type: ",g,"num:",S),h&&n("   ".repeat(l),p,g,i.tags[p],_),!(p==330&&f.t272&&f.t272[0]=="DSLR-A100")){if(p==330||p==34665||p==50740&&s.readUshort(a,s.readUint(_,0))<300){for(var C=p==50740?[s.readUint(_,0)]:_,M=[],x=0;x<C.length;x++)i._readIFD(s,a,C[x],M,l+1,h);p==330&&(f.subIFD=M),p==34665&&(f.exifIFD=M[0]),p==50740&&(f.dngPrvt=M[0])}}if(p==37500){var E=_;if(s.readASCII(E,0,5)=="Nikon")f.makerNote=i.decode(E.slice(10).buffer)[0];else if(s.readUshort(a,y)<300){var A=[];i._readIFD(s,a,y,A,l+1,h),f.makerNote=A[0]}}}return h&&n("   ".repeat(l),"<<<---------------"),o},i._writeIFD=function(s,a,o,c){var l=Object.keys(c);s.writeUshort(a,o,l.length),o+=2;for(var h=o+l.length*12+4,u=0;u<l.length;u++){var f=l[u],m=parseInt(f.slice(1)),p=i.ttypes[m];if(p==null)throw new Error("unknown type of tag: "+m);var g=c[f];p==2&&(g=g[0]+"\0");var S=g.length;s.writeUshort(a,o,m),o+=2,s.writeUshort(a,o,p),o+=2,s.writeUint(a,o,S),o+=4;var y=[-1,1,1,2,4,8,0,0,0,0,0,0,8][p]*S,_=o;if(y>4&&(s.writeUint(a,o,h),_=h),p==2&&s.writeASCII(a,_,g),p==3)for(var v=0;v<S;v++)s.writeUshort(a,_+2*v,g[v]);if(p==4)for(var v=0;v<S;v++)s.writeUint(a,_+4*v,g[v]);if(p==5)for(var v=0;v<S;v++)s.writeUint(a,_+8*v,Math.round(g[v]*1e4)),s.writeUint(a,_+8*v+4,1e4);if(p==12)for(var v=0;v<S;v++)s.writeDouble(a,_+8*v,g[v]);y>4&&(y+=y&1,h+=y),o+=4}return[o,h]},i.toRGBA8=function(s){var a=s.width,o=s.height,c=a*o,l=c*4,h=s.data,u=new Uint8Array(c*4),f=s.t262?s.t262[0]:2,m=s.t258?Math.min(32,s.t258[0]):1;if(f==0)for(var p=Math.ceil(m*a/8),g=0;g<o;g++){var S=g*p,y=g*a;if(m==1)for(var _=0;_<a;_++){var v=y+_<<2,T=h[S+(_>>3)]>>7-(_&7)&1;u[v]=u[v+1]=u[v+2]=(1-T)*255,u[v+3]=255}if(m==4)for(var _=0;_<a;_++){var v=y+_<<2,T=h[S+(_>>1)]>>4-4*(_&1)&15;u[v]=u[v+1]=u[v+2]=(15-T)*17,u[v+3]=255}if(m==8)for(var _=0;_<a;_++){var v=y+_<<2,T=h[S+_];u[v]=u[v+1]=u[v+2]=255-T,u[v+3]=255}}else if(f==1)for(var p=Math.ceil(m*a/8),g=0;g<o;g++){var S=g*p,y=g*a;if(m==1)for(var _=0;_<a;_++){var v=y+_<<2,T=h[S+(_>>3)]>>7-(_&7)&1;u[v]=u[v+1]=u[v+2]=T*255,u[v+3]=255}if(m==2)for(var _=0;_<a;_++){var v=y+_<<2,T=h[S+(_>>2)]>>6-2*(_&3)&3;u[v]=u[v+1]=u[v+2]=T*85,u[v+3]=255}if(m==8)for(var _=0;_<a;_++){var v=y+_<<2,T=h[S+_];u[v]=u[v+1]=u[v+2]=T,u[v+3]=255}if(m==16)for(var _=0;_<a;_++){var v=y+_<<2,T=h[S+(2*_+1)];u[v]=u[v+1]=u[v+2]=Math.min(255,T),u[v+3]=255}}else if(f==2){var x=s.t258?s.t258.length:3;if(m==8){if(x==4)for(var _=0;_<l;_++)u[_]=h[_];if(x==3)for(var _=0;_<c;_++){var v=_<<2,C=_*3;u[v]=h[C],u[v+1]=h[C+1],u[v+2]=h[C+2],u[v+3]=255}}else{if(x==4)for(var _=0;_<c;_++){var v=_<<2,C=_*8+1;u[v]=h[C],u[v+1]=h[C+2],u[v+2]=h[C+4],u[v+3]=h[C+6]}if(x==3)for(var _=0;_<c;_++){var v=_<<2,C=_*6+1;u[v]=h[C],u[v+1]=h[C+2],u[v+2]=h[C+4],u[v+3]=255}}}else if(f==3)for(var M=s.t320,_=0;_<c;_++){var v=_<<2,E=h[_];u[v]=M[E]>>8,u[v+1]=M[256+E]>>8,u[v+2]=M[512+E]>>8,u[v+3]=255}else if(f==5)for(var x=s.t258?s.t258.length:4,A=x>4?1:0,_=0;_<c;_++){var v=_<<2,R=_*x,I=255-h[R],O=255-h[R+1],U=255-h[R+2],z=(255-h[R+3])*(1/255);u[v]=~~(I*z+.5),u[v+1]=~~(O*z+.5),u[v+2]=~~(U*z+.5),u[v+3]=255*(1-A)+h[R+4]*A}else n("Unknown Photometric interpretation: "+f);return u},i.replaceIMG=function(s){s==null&&(s=document.getElementsByTagName("img"));for(var a=["tif","tiff","dng","cr2","nef"],o=0;o<s.length;o++){var c=s[o],l=c.getAttribute("src");if(l!=null){var h=l.split(".").pop().toLowerCase();if(a.indexOf(h)!=-1){var u=new XMLHttpRequest;i._xhrs.push(u),i._imgs.push(c),u.open("GET",l),u.responseType="arraybuffer",u.onload=i._imgLoaded,u.send()}}}},i._xhrs=[],i._imgs=[],i._imgLoaded=function(s){var a=s.target.response,o=i.decode(a),c=o,l=0,h=c[0];o[0].subIFD&&(c=c.concat(o[0].subIFD));for(var u=0;u<c.length;u++){var y=c[u];if(!(y.t258==null||y.t258.length<3)){var f=y.t256*y.t257;f>l&&(l=f,h=y)}}i.decodeImage(a,h,o);var m=i.toRGBA8(h),p=h.width,g=h.height,S=i._xhrs.indexOf(s.target),y=i._imgs[S];i._xhrs.splice(S,1),i._imgs.splice(S,1);var _=document.createElement("canvas");_.width=p,_.height=g;for(var v=_.getContext("2d"),T=v.createImageData(p,g),u=0;u<m.length;u++)T.data[u]=m[u];v.putImageData(T,0,0),y.setAttribute("src",_.toDataURL())},i._binBE={nextZero:function(s,a){for(;s[a]!=0;)a++;return a},readUshort:function(s,a){return s[a]<<8|s[a+1]},readShort:function(s,a){var o=i._binBE.ui8;return o[0]=s[a+1],o[1]=s[a+0],i._binBE.i16[0]},readInt:function(s,a){var o=i._binBE.ui8;return o[0]=s[a+3],o[1]=s[a+2],o[2]=s[a+1],o[3]=s[a+0],i._binBE.i32[0]},readUint:function(s,a){var o=i._binBE.ui8;return o[0]=s[a+3],o[1]=s[a+2],o[2]=s[a+1],o[3]=s[a+0],i._binBE.ui32[0]},readASCII:function(s,a,o){for(var c="",l=0;l<o;l++)c+=String.fromCharCode(s[a+l]);return c},readFloat:function(s,a){for(var o=i._binBE.ui8,c=0;c<4;c++)o[c]=s[a+3-c];return i._binBE.fl32[0]},readDouble:function(s,a){for(var o=i._binBE.ui8,c=0;c<8;c++)o[c]=s[a+7-c];return i._binBE.fl64[0]},writeUshort:function(s,a,o){s[a]=o>>8&255,s[a+1]=o&255},writeUint:function(s,a,o){s[a]=o>>24&255,s[a+1]=o>>16&255,s[a+2]=o>>8&255,s[a+3]=o>>0&255},writeASCII:function(s,a,o){for(var c=0;c<o.length;c++)s[a+c]=o.charCodeAt(c)},writeDouble:function(s,a,o){i._binBE.fl64[0]=o;for(var c=0;c<8;c++)s[a+c]=i._binBE.ui8[7-c]}},i._binBE.ui8=new Uint8Array(8),i._binBE.i16=new Int16Array(i._binBE.ui8.buffer),i._binBE.i32=new Int32Array(i._binBE.ui8.buffer),i._binBE.ui32=new Uint32Array(i._binBE.ui8.buffer),i._binBE.fl32=new Float32Array(i._binBE.ui8.buffer),i._binBE.fl64=new Float64Array(i._binBE.ui8.buffer),i._binLE={nextZero:i._binBE.nextZero,readUshort:function(s,a){return s[a+1]<<8|s[a]},readShort:function(s,a){var o=i._binBE.ui8;return o[0]=s[a+0],o[1]=s[a+1],i._binBE.i16[0]},readInt:function(s,a){var o=i._binBE.ui8;return o[0]=s[a+0],o[1]=s[a+1],o[2]=s[a+2],o[3]=s[a+3],i._binBE.i32[0]},readUint:function(s,a){var o=i._binBE.ui8;return o[0]=s[a+0],o[1]=s[a+1],o[2]=s[a+2],o[3]=s[a+3],i._binBE.ui32[0]},readASCII:i._binBE.readASCII,readFloat:function(s,a){for(var o=i._binBE.ui8,c=0;c<4;c++)o[c]=s[a+c];return i._binBE.fl32[0]},readDouble:function(s,a){for(var o=i._binBE.ui8,c=0;c<8;c++)o[c]=s[a+c];return i._binBE.fl64[0]}},i._copyTile=function(s,a,o,c,l,h,u,f){for(var m=Math.min(a,l-u),p=Math.min(o,h-f),g=0;g<p;g++)for(var S=(f+g)*l+u,y=g*a,_=0;_<m;_++)c[S+_]=s[y+_]},i.LosslessJpegDecode=(function(){function s(l){this.w=l,this.N=0,this._=0,this.G=0}s.prototype={t:function(l){this.N=Math.max(0,Math.min(this.w.length,l))},i:function(){return this.w[this.N++]},l:function(){var l=this.N;return this.N+=2,this.w[l]<<8|this.w[l+1]},J:function(){return this._==0&&(this.G=this.w[this.N],this.N+=1+(this.G+1>>>8),this._=8),this.G>>>--this._&1},Z:function(l){var h=this._,u=this.G,f=Math.min(h,l);l-=f,h-=f;for(var m=u>>>h&(1<<f)-1;l>0;)u=this.w[this.N],this.N+=1+(u+1>>>8),f=Math.min(8,l),l-=f,h=8-f,m<<=f,m|=u>>>h&(1<<f)-1;return this._=h,this.G=u,m}};var a={};a.X=function(){return[0,0,-1]},a.s=function(l,h,u){l[a.Y(l,0,u)+2]=h},a.Y=function(l,h,u){if(l[h+2]!=-1)return 0;if(u==0)return h;for(var f=0;f<2;f++){l[h+f]==0&&(l[h+f]=l.length,l.push(0),l.push(0),l.push(-1));var m=a.Y(l,l[h+f],u-1);if(m!=0)return m}return 0},a.B=function(l,h){for(var u=0,f=0,m=0,p=h._,g=h.G,S=h.N;;)if(p==0&&(g=h.w[S],S+=1+(g+1>>>8),p=8),m=g>>>--p&1,u=l[u+m],f=l[u+2],f!=-1)return h._=p,h.G=g,h.N=S,f;return-1};function o(l){this.z=new s(l),this.D(this.z)}o.prototype={$:function(l,h){this.Q=l.i(),this.F=l.l(),this.o=l.l();var u=this.O=l.i();this.L=[];for(var f=0;f<u;f++){var m=l.i(),p=l.i();l.i(),this.L[m]=f}l.t(l.N+h-(6+u*3))},e:function(){var l=0,h=this.z.i();this.H==null&&(this.H={});for(var u=this.H[h]=a.X(),f=[],m=0;m<16;m++)f[m]=this.z.i(),l+=f[m];for(var m=0;m<16;m++)for(var p=0;p<f[m];p++)a.s(u,this.z.i(),m+1);return l+17},W:function(l){for(;l>0;)l-=this.e()},p:function(l,h){var u=l.i();this.U||(this.U=[]);for(var f=0;f<u;f++){var m=l.i(),p=l.i();this.U[this.L[m]]=this.H[p>>>4]}this.g=l.i(),l.t(l.N+h-(2+u*2))},D:function(l){var h=!1,u=l.l();if(u===o.q)do{var u=l.l(),f=l.l()-2;switch(u){case o.m:this.$(l,f);break;case o.K:this.W(f);break;case o.V:this.p(l,f),h=!0;break;default:l.t(l.N+f);break}}while(!h)},I:function(l,h){var u=a.B(h,l);if(u==16)return-32768;var f=l.Z(u);return(f&1<<u-1)==0&&(f-=(1<<u)-1),f},B:function(l,h){for(var u=this.z,f=this.O,m=this.F,p=this.I,g=this.g,S=this.o*f,y=this.U,_=0;_<f;_++)l[_]=p(u,y[_])+(1<<this.Q-1);for(var v=f;v<S;v+=f)for(var _=0;_<f;_++)l[v+_]=p(u,y[_])+l[v+_-f];for(var T=h,x=1;x<m;x++){for(var _=0;_<f;_++)l[T+_]=p(u,y[_])+l[T+_-h];for(var v=f;v<S;v+=f)for(var _=0;_<f;_++){var C=T+v+_,M=l[C-f];g==6&&(M=l[C-h]+(M-l[C-f-h]>>>1)),l[C]=M+p(u,y[_])}T+=h}}},o.m=65475,o.K=65476,o.q=65496,o.V=65498;function c(l){var h=new o(l),u=h.Q>8?Uint16Array:Uint8Array,f=new u(h.o*h.F*h.O),m=h.o*h.O;return h.B(f,m),f}return c})()})(t,e)})()});var nd=gt($a=>{"use strict";$a.byteLength=t_;$a.toByteArray=i_;$a.fromByteArray=a_;var En=[],jt=[],e_=typeof Uint8Array<"u"?Uint8Array:Array,Nl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Xi=0,ed=Nl.length;Xi<ed;++Xi)En[Xi]=Nl[Xi],jt[Nl.charCodeAt(Xi)]=Xi;var Xi,ed;jt[45]=62;jt[95]=63;function td(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var i=n===e?0:4-n%4;return[n,i]}function t_(t){var e=td(t),n=e[0],i=e[1];return(n+i)*3/4-i}function n_(t,e,n){return(e+n)*3/4-n}function i_(t){var e,n=td(t),i=n[0],r=n[1],s=new e_(n_(t,i,r)),a=0,o=r>0?i-4:i,c;for(c=0;c<o;c+=4)e=jt[t.charCodeAt(c)]<<18|jt[t.charCodeAt(c+1)]<<12|jt[t.charCodeAt(c+2)]<<6|jt[t.charCodeAt(c+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=e&255;return r===2&&(e=jt[t.charCodeAt(c)]<<2|jt[t.charCodeAt(c+1)]>>4,s[a++]=e&255),r===1&&(e=jt[t.charCodeAt(c)]<<10|jt[t.charCodeAt(c+1)]<<4|jt[t.charCodeAt(c+2)]>>2,s[a++]=e>>8&255,s[a++]=e&255),s}function r_(t){return En[t>>18&63]+En[t>>12&63]+En[t>>6&63]+En[t&63]}function s_(t,e,n){for(var i,r=[],s=e;s<n;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(t[s+2]&255),r.push(r_(i));return r.join("")}function a_(t){for(var e,n=t.length,i=n%3,r=[],s=16383,a=0,o=n-i;a<o;a+=s)r.push(s_(t,a,a+s>o?o:a+s));return i===1?(e=t[n-1],r.push(En[e>>2]+En[e<<4&63]+"==")):i===2&&(e=(t[n-2]<<8)+t[n-1],r.push(En[e>>10]+En[e>>4&63]+En[e<<2&63]+"=")),r.join("")}});var id=gt(Fl=>{Fl.read=function(t,e,n,i,r){var s,a,o=r*8-i-1,c=(1<<o)-1,l=c>>1,h=-7,u=n?r-1:0,f=n?-1:1,m=t[e+u];for(u+=f,s=m&(1<<-h)-1,m>>=-h,h+=o;h>0;s=s*256+t[e+u],u+=f,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=i;h>0;a=a*256+t[e+u],u+=f,h-=8);if(s===0)s=1-l;else{if(s===c)return a?NaN:(m?-1:1)*(1/0);a=a+Math.pow(2,i),s=s-l}return(m?-1:1)*a*Math.pow(2,s-i)};Fl.write=function(t,e,n,i,r,s){var a,o,c,l=s*8-r-1,h=(1<<l)-1,u=h>>1,f=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:s-1,p=i?1:-1,g=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,a=h):(a=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+u>=1?e+=f/c:e+=f*Math.pow(2,1-u),e*c>=2&&(a++,c/=2),a+u>=h?(o=0,a=h):a+u>=1?(o=(e*c-1)*Math.pow(2,r),a=a+u):(o=e*Math.pow(2,u-1)*Math.pow(2,r),a=0));r>=8;t[n+m]=o&255,m+=p,o/=256,r-=8);for(a=a<<r|o,l+=r;l>0;t[n+m]=a&255,m+=p,a/=256,l-=8);t[n+m-p]|=g*128}});var yd=gt(Ur=>{"use strict";var Ol=nd(),Pr=id(),rd=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ur.Buffer=H;Ur.SlowBuffer=f_;Ur.INSPECT_MAX_BYTES=50;var Ja=2147483647;Ur.kMaxLength=Ja;H.TYPED_ARRAY_SUPPORT=o_();!H.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o_(){try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch{return!1}}Object.defineProperty(H.prototype,"parent",{enumerable:!0,get:function(){if(H.isBuffer(this))return this.buffer}});Object.defineProperty(H.prototype,"offset",{enumerable:!0,get:function(){if(H.isBuffer(this))return this.byteOffset}});function Gn(t){if(t>Ja)throw new RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,H.prototype),e}function H(t,e,n){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Gl(t)}return ld(t,e,n)}H.poolSize=8192;function ld(t,e,n){if(typeof t=="string")return c_(t,e);if(ArrayBuffer.isView(t))return h_(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(An(t,ArrayBuffer)||t&&An(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(An(t,SharedArrayBuffer)||t&&An(t.buffer,SharedArrayBuffer)))return kl(t,e,n);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=t.valueOf&&t.valueOf();if(i!=null&&i!==t)return H.from(i,e,n);let r=u_(t);if(r)return r;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return H.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}H.from=function(t,e,n){return ld(t,e,n)};Object.setPrototypeOf(H.prototype,Uint8Array.prototype);Object.setPrototypeOf(H,Uint8Array);function cd(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function l_(t,e,n){return cd(t),t<=0?Gn(t):e!==void 0?typeof n=="string"?Gn(t).fill(e,n):Gn(t).fill(e):Gn(t)}H.alloc=function(t,e,n){return l_(t,e,n)};function Gl(t){return cd(t),Gn(t<0?0:Vl(t)|0)}H.allocUnsafe=function(t){return Gl(t)};H.allocUnsafeSlow=function(t){return Gl(t)};function c_(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!H.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let n=hd(t,e)|0,i=Gn(n),r=i.write(t,e);return r!==n&&(i=i.slice(0,r)),i}function Bl(t){let e=t.length<0?0:Vl(t.length)|0,n=Gn(e);for(let i=0;i<e;i+=1)n[i]=t[i]&255;return n}function h_(t){if(An(t,Uint8Array)){let e=new Uint8Array(t);return kl(e.buffer,e.byteOffset,e.byteLength)}return Bl(t)}function kl(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&n===void 0?i=new Uint8Array(t):n===void 0?i=new Uint8Array(t,e):i=new Uint8Array(t,e,n),Object.setPrototypeOf(i,H.prototype),i}function u_(t){if(H.isBuffer(t)){let e=Vl(t.length)|0,n=Gn(e);return n.length===0||t.copy(n,0,0,e),n}if(t.length!==void 0)return typeof t.length!="number"||Wl(t.length)?Gn(0):Bl(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Bl(t.data)}function Vl(t){if(t>=Ja)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ja.toString(16)+" bytes");return t|0}function f_(t){return+t!=t&&(t=0),H.alloc(+t)}H.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==H.prototype};H.compare=function(e,n){if(An(e,Uint8Array)&&(e=H.from(e,e.offset,e.byteLength)),An(n,Uint8Array)&&(n=H.from(n,n.offset,n.byteLength)),!H.isBuffer(e)||!H.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;let i=e.length,r=n.length;for(let s=0,a=Math.min(i,r);s<a;++s)if(e[s]!==n[s]){i=e[s],r=n[s];break}return i<r?-1:r<i?1:0};H.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};H.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return H.alloc(0);let i;if(n===void 0)for(n=0,i=0;i<e.length;++i)n+=e[i].length;let r=H.allocUnsafe(n),s=0;for(i=0;i<e.length;++i){let a=e[i];if(An(a,Uint8Array))s+a.length>r.length?(H.isBuffer(a)||(a=H.from(a)),a.copy(r,s)):Uint8Array.prototype.set.call(r,a,s);else if(H.isBuffer(a))a.copy(r,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=a.length}return r};function hd(t,e){if(H.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||An(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&n===0)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return zl(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return vd(t).length;default:if(r)return i?-1:zl(t).length;e=(""+e).toLowerCase(),r=!0}}H.byteLength=hd;function d_(t,e,n){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return b_(this,e,n);case"utf8":case"utf-8":return fd(this,e,n);case"ascii":return w_(this,e,n);case"latin1":case"binary":return S_(this,e,n);case"base64":return v_(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M_(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}H.prototype._isBuffer=!0;function Yi(t,e,n){let i=t[e];t[e]=t[n],t[n]=i}H.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<e;n+=2)Yi(this,n,n+1);return this};H.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<e;n+=4)Yi(this,n,n+3),Yi(this,n+1,n+2);return this};H.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<e;n+=8)Yi(this,n,n+7),Yi(this,n+1,n+6),Yi(this,n+2,n+5),Yi(this,n+3,n+4);return this};H.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?fd(this,0,e):d_.apply(this,arguments)};H.prototype.toLocaleString=H.prototype.toString;H.prototype.equals=function(e){if(!H.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:H.compare(this,e)===0};H.prototype.inspect=function(){let e="",n=Ur.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};rd&&(H.prototype[rd]=H.prototype.inspect);H.prototype.compare=function(e,n,i,r,s){if(An(e,Uint8Array)&&(e=H.from(e,e.offset,e.byteLength)),!H.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),i===void 0&&(i=e?e.length:0),r===void 0&&(r=0),s===void 0&&(s=this.length),n<0||i>e.length||r<0||s>this.length)throw new RangeError("out of range index");if(r>=s&&n>=i)return 0;if(r>=s)return-1;if(n>=i)return 1;if(n>>>=0,i>>>=0,r>>>=0,s>>>=0,this===e)return 0;let a=s-r,o=i-n,c=Math.min(a,o),l=this.slice(r,s),h=e.slice(n,i);for(let u=0;u<c;++u)if(l[u]!==h[u]){a=l[u],o=h[u];break}return a<o?-1:o<a?1:0};function ud(t,e,n,i,r){if(t.length===0)return-1;if(typeof n=="string"?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Wl(n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0)if(r)n=0;else return-1;if(typeof e=="string"&&(e=H.from(e,i)),H.isBuffer(e))return e.length===0?-1:sd(t,e,n,i,r);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):sd(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function sd(t,e,n,i,r){let s=1,a=t.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(t.length<2||e.length<2)return-1;s=2,a/=2,o/=2,n/=2}function c(h,u){return s===1?h[u]:h.readUInt16BE(u*s)}let l;if(r){let h=-1;for(l=n;l<a;l++)if(c(t,l)===c(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===o)return h*s}else h!==-1&&(l-=l-h),h=-1}else for(n+o>a&&(n=a-o),l=n;l>=0;l--){let h=!0;for(let u=0;u<o;u++)if(c(t,l+u)!==c(e,u)){h=!1;break}if(h)return l}return-1}H.prototype.includes=function(e,n,i){return this.indexOf(e,n,i)!==-1};H.prototype.indexOf=function(e,n,i){return ud(this,e,n,i,!0)};H.prototype.lastIndexOf=function(e,n,i){return ud(this,e,n,i,!1)};function p_(t,e,n,i){n=Number(n)||0;let r=t.length-n;i?(i=Number(i),i>r&&(i=r)):i=r;let s=e.length;i>s/2&&(i=s/2);let a;for(a=0;a<i;++a){let o=parseInt(e.substr(a*2,2),16);if(Wl(o))return a;t[n+a]=o}return a}function m_(t,e,n,i){return Ka(zl(e,t.length-n),t,n,i)}function g_(t,e,n,i){return Ka(C_(e),t,n,i)}function __(t,e,n,i){return Ka(vd(e),t,n,i)}function x_(t,e,n,i){return Ka(R_(e,t.length-n),t,n,i)}H.prototype.write=function(e,n,i,r){if(n===void 0)r="utf8",i=this.length,n=0;else if(i===void 0&&typeof n=="string")r=n,i=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(i)?(i=i>>>0,r===void 0&&(r="utf8")):(r=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let s=this.length-n;if((i===void 0||i>s)&&(i=s),e.length>0&&(i<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let a=!1;for(;;)switch(r){case"hex":return p_(this,e,n,i);case"utf8":case"utf-8":return m_(this,e,n,i);case"ascii":case"latin1":case"binary":return g_(this,e,n,i);case"base64":return __(this,e,n,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x_(this,e,n,i);default:if(a)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),a=!0}};H.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function v_(t,e,n){return e===0&&n===t.length?Ol.fromByteArray(t):Ol.fromByteArray(t.slice(e,n))}function fd(t,e,n){n=Math.min(t.length,n);let i=[],r=e;for(;r<n;){let s=t[r],a=null,o=s>239?4:s>223?3:s>191?2:1;if(r+o<=n){let c,l,h,u;switch(o){case 1:s<128&&(a=s);break;case 2:c=t[r+1],(c&192)===128&&(u=(s&31)<<6|c&63,u>127&&(a=u));break;case 3:c=t[r+1],l=t[r+2],(c&192)===128&&(l&192)===128&&(u=(s&15)<<12|(c&63)<<6|l&63,u>2047&&(u<55296||u>57343)&&(a=u));break;case 4:c=t[r+1],l=t[r+2],h=t[r+3],(c&192)===128&&(l&192)===128&&(h&192)===128&&(u=(s&15)<<18|(c&63)<<12|(l&63)<<6|h&63,u>65535&&u<1114112&&(a=u))}}a===null?(a=65533,o=1):a>65535&&(a-=65536,i.push(a>>>10&1023|55296),a=56320|a&1023),i.push(a),r+=o}return y_(i)}var ad=4096;function y_(t){let e=t.length;if(e<=ad)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=ad));return n}function w_(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]&127);return i}function S_(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function b_(t,e,n){let i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let s=e;s<n;++s)r+=I_[t[s]];return r}function M_(t,e,n){let i=t.slice(e,n),r="";for(let s=0;s<i.length-1;s+=2)r+=String.fromCharCode(i[s]+i[s+1]*256);return r}H.prototype.slice=function(e,n){let i=this.length;e=~~e,n=n===void 0?i:~~n,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),n<0?(n+=i,n<0&&(n=0)):n>i&&(n=i),n<e&&(n=e);let r=this.subarray(e,n);return Object.setPrototypeOf(r,H.prototype),r};function Mt(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}H.prototype.readUintLE=H.prototype.readUIntLE=function(e,n,i){e=e>>>0,n=n>>>0,i||Mt(e,n,this.length);let r=this[e],s=1,a=0;for(;++a<n&&(s*=256);)r+=this[e+a]*s;return r};H.prototype.readUintBE=H.prototype.readUIntBE=function(e,n,i){e=e>>>0,n=n>>>0,i||Mt(e,n,this.length);let r=this[e+--n],s=1;for(;n>0&&(s*=256);)r+=this[e+--n]*s;return r};H.prototype.readUint8=H.prototype.readUInt8=function(e,n){return e=e>>>0,n||Mt(e,1,this.length),this[e]};H.prototype.readUint16LE=H.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||Mt(e,2,this.length),this[e]|this[e+1]<<8};H.prototype.readUint16BE=H.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||Mt(e,2,this.length),this[e]<<8|this[e+1]};H.prototype.readUint32LE=H.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||Mt(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};H.prototype.readUint32BE=H.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||Mt(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};H.prototype.readBigUInt64LE=ui(function(e){e=e>>>0,Lr(e,"offset");let n=this[e],i=this[e+7];(n===void 0||i===void 0)&&Ls(e,this.length-8);let r=n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(r)+(BigInt(s)<<BigInt(32))});H.prototype.readBigUInt64BE=ui(function(e){e=e>>>0,Lr(e,"offset");let n=this[e],i=this[e+7];(n===void 0||i===void 0)&&Ls(e,this.length-8);let r=n*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(r)<<BigInt(32))+BigInt(s)});H.prototype.readIntLE=function(e,n,i){e=e>>>0,n=n>>>0,i||Mt(e,n,this.length);let r=this[e],s=1,a=0;for(;++a<n&&(s*=256);)r+=this[e+a]*s;return s*=128,r>=s&&(r-=Math.pow(2,8*n)),r};H.prototype.readIntBE=function(e,n,i){e=e>>>0,n=n>>>0,i||Mt(e,n,this.length);let r=n,s=1,a=this[e+--r];for(;r>0&&(s*=256);)a+=this[e+--r]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*n)),a};H.prototype.readInt8=function(e,n){return e=e>>>0,n||Mt(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};H.prototype.readInt16LE=function(e,n){e=e>>>0,n||Mt(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};H.prototype.readInt16BE=function(e,n){e=e>>>0,n||Mt(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};H.prototype.readInt32LE=function(e,n){return e=e>>>0,n||Mt(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};H.prototype.readInt32BE=function(e,n){return e=e>>>0,n||Mt(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};H.prototype.readBigInt64LE=ui(function(e){e=e>>>0,Lr(e,"offset");let n=this[e],i=this[e+7];(n===void 0||i===void 0)&&Ls(e,this.length-8);let r=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(r)<<BigInt(32))+BigInt(n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});H.prototype.readBigInt64BE=ui(function(e){e=e>>>0,Lr(e,"offset");let n=this[e],i=this[e+7];(n===void 0||i===void 0)&&Ls(e,this.length-8);let r=(n<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});H.prototype.readFloatLE=function(e,n){return e=e>>>0,n||Mt(e,4,this.length),Pr.read(this,e,!0,23,4)};H.prototype.readFloatBE=function(e,n){return e=e>>>0,n||Mt(e,4,this.length),Pr.read(this,e,!1,23,4)};H.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||Mt(e,8,this.length),Pr.read(this,e,!0,52,8)};H.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||Mt(e,8,this.length),Pr.read(this,e,!1,52,8)};function kt(t,e,n,i,r,s){if(!H.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<s)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}H.prototype.writeUintLE=H.prototype.writeUIntLE=function(e,n,i,r){if(e=+e,n=n>>>0,i=i>>>0,!r){let o=Math.pow(2,8*i)-1;kt(this,e,n,i,o,0)}let s=1,a=0;for(this[n]=e&255;++a<i&&(s*=256);)this[n+a]=e/s&255;return n+i};H.prototype.writeUintBE=H.prototype.writeUIntBE=function(e,n,i,r){if(e=+e,n=n>>>0,i=i>>>0,!r){let o=Math.pow(2,8*i)-1;kt(this,e,n,i,o,0)}let s=i-1,a=1;for(this[n+s]=e&255;--s>=0&&(a*=256);)this[n+s]=e/a&255;return n+i};H.prototype.writeUint8=H.prototype.writeUInt8=function(e,n,i){return e=+e,n=n>>>0,i||kt(this,e,n,1,255,0),this[n]=e&255,n+1};H.prototype.writeUint16LE=H.prototype.writeUInt16LE=function(e,n,i){return e=+e,n=n>>>0,i||kt(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};H.prototype.writeUint16BE=H.prototype.writeUInt16BE=function(e,n,i){return e=+e,n=n>>>0,i||kt(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};H.prototype.writeUint32LE=H.prototype.writeUInt32LE=function(e,n,i){return e=+e,n=n>>>0,i||kt(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};H.prototype.writeUint32BE=H.prototype.writeUInt32BE=function(e,n,i){return e=+e,n=n>>>0,i||kt(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function dd(t,e,n,i,r){xd(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s=s>>8,t[n++]=s,s=s>>8,t[n++]=s,s=s>>8,t[n++]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=a,a=a>>8,t[n++]=a,a=a>>8,t[n++]=a,a=a>>8,t[n++]=a,n}function pd(t,e,n,i,r){xd(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s=s>>8,t[n+6]=s,s=s>>8,t[n+5]=s,s=s>>8,t[n+4]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=a,a=a>>8,t[n+2]=a,a=a>>8,t[n+1]=a,a=a>>8,t[n]=a,n+8}H.prototype.writeBigUInt64LE=ui(function(e,n=0){return dd(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))});H.prototype.writeBigUInt64BE=ui(function(e,n=0){return pd(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))});H.prototype.writeIntLE=function(e,n,i,r){if(e=+e,n=n>>>0,!r){let c=Math.pow(2,8*i-1);kt(this,e,n,i,c-1,-c)}let s=0,a=1,o=0;for(this[n]=e&255;++s<i&&(a*=256);)e<0&&o===0&&this[n+s-1]!==0&&(o=1),this[n+s]=(e/a>>0)-o&255;return n+i};H.prototype.writeIntBE=function(e,n,i,r){if(e=+e,n=n>>>0,!r){let c=Math.pow(2,8*i-1);kt(this,e,n,i,c-1,-c)}let s=i-1,a=1,o=0;for(this[n+s]=e&255;--s>=0&&(a*=256);)e<0&&o===0&&this[n+s+1]!==0&&(o=1),this[n+s]=(e/a>>0)-o&255;return n+i};H.prototype.writeInt8=function(e,n,i){return e=+e,n=n>>>0,i||kt(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};H.prototype.writeInt16LE=function(e,n,i){return e=+e,n=n>>>0,i||kt(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};H.prototype.writeInt16BE=function(e,n,i){return e=+e,n=n>>>0,i||kt(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};H.prototype.writeInt32LE=function(e,n,i){return e=+e,n=n>>>0,i||kt(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};H.prototype.writeInt32BE=function(e,n,i){return e=+e,n=n>>>0,i||kt(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};H.prototype.writeBigInt64LE=ui(function(e,n=0){return dd(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});H.prototype.writeBigInt64BE=ui(function(e,n=0){return pd(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function md(t,e,n,i,r,s){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function gd(t,e,n,i,r){return e=+e,n=n>>>0,r||md(t,e,n,4,34028234663852886e22,-34028234663852886e22),Pr.write(t,e,n,i,23,4),n+4}H.prototype.writeFloatLE=function(e,n,i){return gd(this,e,n,!0,i)};H.prototype.writeFloatBE=function(e,n,i){return gd(this,e,n,!1,i)};function _d(t,e,n,i,r){return e=+e,n=n>>>0,r||md(t,e,n,8,17976931348623157e292,-17976931348623157e292),Pr.write(t,e,n,i,52,8),n+8}H.prototype.writeDoubleLE=function(e,n,i){return _d(this,e,n,!0,i)};H.prototype.writeDoubleBE=function(e,n,i){return _d(this,e,n,!1,i)};H.prototype.copy=function(e,n,i,r){if(!H.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!r&&r!==0&&(r=this.length),n>=e.length&&(n=e.length),n||(n=0),r>0&&r<i&&(r=i),r===i||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-n<r-i&&(r=e.length-n+i);let s=r-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,i,r):Uint8Array.prototype.set.call(e,this.subarray(i,r),n),s};H.prototype.fill=function(e,n,i,r){if(typeof e=="string"){if(typeof n=="string"?(r=n,n=0,i=this.length):typeof i=="string"&&(r=i,i=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!H.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){let a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<i)throw new RangeError("Out of range index");if(i<=n)return this;n=n>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let s;if(typeof e=="number")for(s=n;s<i;++s)this[s]=e;else{let a=H.isBuffer(e)?e:H.from(e,r),o=a.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<i-n;++s)this[s+n]=a[s%o]}return this};var Ir={};function Hl(t,e,n){Ir[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(r){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:r,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}Hl("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Hl("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError);Hl("ERR_OUT_OF_RANGE",function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=od(String(n)):typeof n=="bigint"&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=od(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i},RangeError);function od(t){let e="",n=t.length,i=t[0]==="-"?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function E_(t,e,n){Lr(e,"offset"),(t[e]===void 0||t[e+n]===void 0)&&Ls(e,t.length-(n+1))}function xd(t,e,n,i,r,s){if(t>n||t<e){let a=typeof e=="bigint"?"n":"",o;throw s>3?e===0||e===BigInt(0)?o=`>= 0${a} and < 2${a} ** ${(s+1)*8}${a}`:o=`>= -(2${a} ** ${(s+1)*8-1}${a}) and < 2 ** ${(s+1)*8-1}${a}`:o=`>= ${e}${a} and <= ${n}${a}`,new Ir.ERR_OUT_OF_RANGE("value",o,t)}E_(i,r,s)}function Lr(t,e){if(typeof t!="number")throw new Ir.ERR_INVALID_ARG_TYPE(e,"number",t)}function Ls(t,e,n){throw Math.floor(t)!==t?(Lr(t,n),new Ir.ERR_OUT_OF_RANGE(n||"offset","an integer",t)):e<0?new Ir.ERR_BUFFER_OUT_OF_BOUNDS:new Ir.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}var A_=/[^+/0-9A-Za-z-_]/g;function T_(t){if(t=t.split("=")[0],t=t.trim().replace(A_,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function zl(t,e){e=e||1/0;let n,i=t.length,r=null,s=[];for(let a=0;a<i;++a){if(n=t.charCodeAt(a),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(a+1===i){(e-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),r=n;continue}n=(r-55296<<10|n-56320)+65536}else r&&(e-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return s}function C_(t){let e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n)&255);return e}function R_(t,e){let n,i,r,s=[];for(let a=0;a<t.length&&!((e-=2)<0);++a)n=t.charCodeAt(a),i=n>>8,r=n%256,s.push(r),s.push(i);return s}function vd(t){return Ol.toByteArray(T_(t))}function Ka(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function An(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Wl(t){return t!==t}var I_=(function(){let t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){let i=n*16;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e})();function ui(t){return typeof BigInt>"u"?P_:t}function P_(){throw new Error("BigInt not supported")}});var Ed=gt((Fb,Qa)=>{var Md=Md||function(t){return Buffer.from(t).toString("base64")};function L_(t){var e=this,n=Math.round,i=Math.floor,r=new Array(64),s=new Array(64),a=new Array(64),o=new Array(64),c,l,h,u,f=new Array(65535),m=new Array(65535),p=new Array(64),g=new Array(64),S=[],y=0,_=7,v=new Array(64),T=new Array(64),x=new Array(64),C=new Array(256),M=new Array(2048),E,A=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],R=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],I=[0,1,2,3,4,5,6,7,8,9,10,11],O=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],U=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],z=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],N=[0,1,2,3,4,5,6,7,8,9,10,11],j=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],Y=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function G(B){for(var oe=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],pe=0;pe<64;pe++){var xe=i((oe[pe]*B+50)/100);xe<1?xe=1:xe>255&&(xe=255),r[A[pe]]=xe}for(var Ae=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],Ne=0;Ne<64;Ne++){var Xe=i((Ae[Ne]*B+50)/100);Xe<1?Xe=1:Xe>255&&(Xe=255),s[A[Ne]]=Xe}for(var ke=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],ut=0,nt=0;nt<8;nt++)for(var se=0;se<8;se++)a[ut]=1/(r[A[ut]]*ke[nt]*ke[se]*8),o[ut]=1/(s[A[ut]]*ke[nt]*ke[se]*8),ut++}function D(B,oe){for(var pe=0,xe=0,Ae=new Array,Ne=1;Ne<=16;Ne++){for(var Xe=1;Xe<=B[Ne];Xe++)Ae[oe[xe]]=[],Ae[oe[xe]][0]=pe,Ae[oe[xe]][1]=Ne,xe++,pe++;pe*=2}return Ae}function W(){c=D(R,I),l=D(z,N),h=D(O,U),u=D(j,Y)}function Z(){for(var B=1,oe=2,pe=1;pe<=15;pe++){for(var xe=B;xe<oe;xe++)m[32767+xe]=pe,f[32767+xe]=[],f[32767+xe][1]=pe,f[32767+xe][0]=xe;for(var Ae=-(oe-1);Ae<=-B;Ae++)m[32767+Ae]=pe,f[32767+Ae]=[],f[32767+Ae][1]=pe,f[32767+Ae][0]=oe-1+Ae;B<<=1,oe<<=1}}function te(){for(var B=0;B<256;B++)M[B]=19595*B,M[B+256>>0]=38470*B,M[B+512>>0]=7471*B+32768,M[B+768>>0]=-11059*B,M[B+1024>>0]=-21709*B,M[B+1280>>0]=32768*B+8421375,M[B+1536>>0]=-27439*B,M[B+1792>>0]=-5329*B}function ne(B){for(var oe=B[0],pe=B[1]-1;pe>=0;)oe&1<<pe&&(y|=1<<_),pe--,_--,_<0&&(y==255?(F(255),F(0)):F(y),_=7,y=0)}function F(B){S.push(B)}function Q(B){F(B>>8&255),F(B&255)}function Ce(B,oe){var pe,xe,Ae,Ne,Xe,ke,ut,nt,se=0,Se,Le=8,ct=64;for(Se=0;Se<Le;++Se){pe=B[se],xe=B[se+1],Ae=B[se+2],Ne=B[se+3],Xe=B[se+4],ke=B[se+5],ut=B[se+6],nt=B[se+7];var Ue=pe+nt,ze=pe-nt,it=xe+ut,Re=xe-ut,Ie=Ae+ke,Je=Ae-ke,st=Ne+Xe,_t=Ne-Xe,rt=Ue+st,pt=Ue-st,Kn=it+Ie,fe=it-Ie;B[se]=rt+Kn,B[se+4]=rt-Kn;var sn=(fe+pt)*.707106781;B[se+2]=pt+sn,B[se+6]=pt-sn,rt=_t+Je,Kn=Je+Re,fe=Re+ze;var bi=(rt-fe)*.382683433,sr=.5411961*rt+bi,Mi=1.306562965*fe+bi,Ei=Kn*.707106781,Ai=ze+Ei,Ti=ze-Ei;B[se+5]=Ti+sr,B[se+3]=Ti-sr,B[se+1]=Ai+Mi,B[se+7]=Ai-Mi,se+=8}for(se=0,Se=0;Se<Le;++Se){pe=B[se],xe=B[se+8],Ae=B[se+16],Ne=B[se+24],Xe=B[se+32],ke=B[se+40],ut=B[se+48],nt=B[se+56];var Ks=pe+nt,es=pe-nt,Qs=xe+ut,js=xe-ut,ea=Ae+ke,ta=Ae-ke,na=Ne+Xe,ia=Ne-Xe,Ci=Ks+na,ts=Ks-na,ar=Qs+ea,Ri=Qs-ea;B[se]=Ci+ar,B[se+32]=Ci-ar;var ra=(Ri+ts)*.707106781;B[se+16]=ts+ra,B[se+48]=ts-ra,Ci=ia+ta,ar=ta+js,Ri=js+es;var ns=(Ci-Ri)*.382683433,sa=.5411961*Ci+ns,aa=1.306562965*Ri+ns,Ii=ar*.707106781,Pi=es+Ii,oa=es-Ii;B[se+40]=oa+sa,B[se+24]=oa-sa,B[se+8]=Pi+aa,B[se+56]=Pi-aa,se++}var In;for(Se=0;Se<ct;++Se)In=B[Se]*oe[Se],p[Se]=In>0?In+.5|0:In-.5|0;return p}function V(){Q(65504),Q(16),F(74),F(70),F(73),F(70),F(0),F(1),F(1),F(0),Q(1),Q(1),F(0),F(0)}function ce(B){if(B){Q(65505),B[0]===69&&B[1]===120&&B[2]===105&&B[3]===102?Q(B.length+2):(Q(B.length+5+2),F(69),F(120),F(105),F(102),F(0));for(var oe=0;oe<B.length;oe++)F(B[oe])}}function ve(B,oe){Q(65472),Q(17),F(8),Q(oe),Q(B),F(3),F(1),F(17),F(0),F(2),F(17),F(1),F(3),F(17),F(1)}function ye(){Q(65499),Q(132),F(0);for(var B=0;B<64;B++)F(r[B]);F(1);for(var oe=0;oe<64;oe++)F(s[oe])}function ie(){Q(65476),Q(418),F(0);for(var B=0;B<16;B++)F(R[B+1]);for(var oe=0;oe<=11;oe++)F(I[oe]);F(16);for(var pe=0;pe<16;pe++)F(O[pe+1]);for(var xe=0;xe<=161;xe++)F(U[xe]);F(1);for(var Ae=0;Ae<16;Ae++)F(z[Ae+1]);for(var Ne=0;Ne<=11;Ne++)F(N[Ne]);F(17);for(var Xe=0;Xe<16;Xe++)F(j[Xe+1]);for(var ke=0;ke<=161;ke++)F(Y[ke])}function re(B){typeof B>"u"||B.constructor!==Array||B.forEach(oe=>{if(typeof oe=="string"){Q(65534);var pe=oe.length;Q(pe+2);var xe;for(xe=0;xe<pe;xe++)F(oe.charCodeAt(xe))}})}function Fe(){Q(65498),Q(12),F(3),F(1),F(0),F(2),F(17),F(3),F(17),F(0),F(63),F(0)}function Me(B,oe,pe,xe,Ae){for(var Ne=Ae[0],Xe=Ae[240],ke,ut=16,nt=63,se=64,Se=Ce(B,oe),Le=0;Le<se;++Le)g[A[Le]]=Se[Le];var ct=g[0]-pe;pe=g[0],ct==0?ne(xe[0]):(ke=32767+ct,ne(xe[m[ke]]),ne(f[ke]));for(var Ue=63;Ue>0&&g[Ue]==0;Ue--);if(Ue==0)return ne(Ne),pe;for(var ze=1,it;ze<=Ue;){for(var Re=ze;g[ze]==0&&ze<=Ue;++ze);var Ie=ze-Re;if(Ie>=ut){it=Ie>>4;for(var Je=1;Je<=it;++Je)ne(Xe);Ie=Ie&15}ke=32767+g[ze],ne(Ae[(Ie<<4)+m[ke]]),ne(f[ke]),ze++}return Ue!=nt&&ne(Ne),pe}function ue(){for(var B=String.fromCharCode,oe=0;oe<256;oe++)C[oe]=B(oe)}this.encode=function(B,oe){var pe=new Date().getTime();oe&&we(oe),S=new Array,y=0,_=7,Q(65496),V(),re(B.comments),ce(B.exifBuffer),ye(),ve(B.width,B.height),ie(),Fe();var xe=0,Ae=0,Ne=0;y=0,_=7,this.encode.displayName="_encode_";for(var Xe=B.data,ke=B.width,ut=B.height,nt=ke*4,se=ke*3,Se,Le=0,ct,Ue,ze,it,Re,Ie,Je,st;Le<ut;){for(Se=0;Se<nt;){for(it=nt*Le+Se,Re=it,Ie=-1,Je=0,st=0;st<64;st++)Je=st>>3,Ie=(st&7)*4,Re=it+Je*nt+Ie,Le+Je>=ut&&(Re-=nt*(Le+1+Je-ut)),Se+Ie>=nt&&(Re-=Se+Ie-nt+4),ct=Xe[Re++],Ue=Xe[Re++],ze=Xe[Re++],v[st]=(M[ct]+M[Ue+256>>0]+M[ze+512>>0]>>16)-128,T[st]=(M[ct+768>>0]+M[Ue+1024>>0]+M[ze+1280>>0]>>16)-128,x[st]=(M[ct+1280>>0]+M[Ue+1536>>0]+M[ze+1792>>0]>>16)-128;xe=Me(v,a,xe,c,h),Ae=Me(T,o,Ae,l,u),Ne=Me(x,o,Ne,l,u),Se+=32}Le+=8}if(_>=0){var _t=[];_t[1]=_+1,_t[0]=(1<<_+1)-1,ne(_t)}if(Q(65497),typeof Qa>"u")return new Uint8Array(S);return Buffer.from(S);var rt,pt};function we(B){if(B<=0&&(B=1),B>100&&(B=100),E!=B){var oe=0;B<50?oe=Math.floor(5e3/B):oe=Math.floor(200-B*2),G(oe),E=B}}function Oe(){var B=new Date().getTime();t||(t=50),ue(),W(),Z(),te(),we(t);var oe=new Date().getTime()-B}Oe()}typeof Qa<"u"?Qa.exports=bd:typeof window<"u"&&(window["jpeg-js"]=window["jpeg-js"]||{},window["jpeg-js"].encode=bd);function bd(t,e){typeof e>"u"&&(e=50);var n=new L_(e),i=n.encode(t,e);return{data:i,width:t.width,height:t.height}}});var Td=gt((Ob,Yl)=>{var Xl=(function(){"use strict";var e=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),n=4017,i=799,r=3406,s=2276,a=1567,o=3784,c=5793,l=2896;function h(){}function u(_,v){for(var T=0,x=[],C,M,E=16;E>0&&!_[E-1];)E--;x.push({children:[],index:0});var A=x[0],R;for(C=0;C<E;C++){for(M=0;M<_[C];M++){for(A=x.pop(),A.children[A.index]=v[T];A.index>0;){if(x.length===0)throw new Error("Could not recreate Huffman Table");A=x.pop()}for(A.index++,x.push(A);x.length<=C;)x.push(R={children:[],index:0}),A.children[A.index]=R.children,A=R;T++}C+1<E&&(x.push(R={children:[],index:0}),A.children[A.index]=R.children,A=R)}return x[0].children}function f(_,v,T,x,C,M,E,A,R,I){var O=T.precision,U=T.samplesPerLine,z=T.scanLines,N=T.mcusPerLine,j=T.progressive,Y=T.maxH,G=T.maxV,D=v,W=0,Z=0;function te(){if(Z>0)return Z--,W>>Z&1;if(W=_[v++],W==255){var se=_[v++];if(se)throw new Error("unexpected marker: "+(W<<8|se).toString(16))}return Z=7,W>>>7}function ne(se){for(var Se=se,Le;(Le=te())!==null;){if(Se=Se[Le],typeof Se=="number")return Se;if(typeof Se!="object")throw new Error("invalid huffman sequence")}return null}function F(se){for(var Se=0;se>0;){var Le=te();if(Le===null)return;Se=Se<<1|Le,se--}return Se}function Q(se){var Se=F(se);return Se>=1<<se-1?Se:Se+(-1<<se)+1}function Ce(se,Se){var Le=ne(se.huffmanTableDC),ct=Le===0?0:Q(Le);Se[0]=se.pred+=ct;for(var Ue=1;Ue<64;){var ze=ne(se.huffmanTableAC),it=ze&15,Re=ze>>4;if(it===0){if(Re<15)break;Ue+=16;continue}Ue+=Re;var Ie=e[Ue];Se[Ie]=Q(it),Ue++}}function V(se,Se){var Le=ne(se.huffmanTableDC),ct=Le===0?0:Q(Le)<<R;Se[0]=se.pred+=ct}function ce(se,Se){Se[0]|=te()<<R}var ve=0;function ye(se,Se){if(ve>0){ve--;return}for(var Le=M,ct=E;Le<=ct;){var Ue=ne(se.huffmanTableAC),ze=Ue&15,it=Ue>>4;if(ze===0){if(it<15){ve=F(it)+(1<<it)-1;break}Le+=16;continue}Le+=it;var Re=e[Le];Se[Re]=Q(ze)*(1<<R),Le++}}var ie=0,re;function Fe(se,Se){for(var Le=M,ct=E,Ue=0;Le<=ct;){var ze=e[Le],it=Se[ze]<0?-1:1;switch(ie){case 0:var Re=ne(se.huffmanTableAC),Ie=Re&15,Ue=Re>>4;if(Ie===0)Ue<15?(ve=F(Ue)+(1<<Ue),ie=4):(Ue=16,ie=1);else{if(Ie!==1)throw new Error("invalid ACn encoding");re=Q(Ie),ie=Ue?2:3}continue;case 1:case 2:Se[ze]?Se[ze]+=(te()<<R)*it:(Ue--,Ue===0&&(ie=ie==2?3:0));break;case 3:Se[ze]?Se[ze]+=(te()<<R)*it:(Se[ze]=re<<R,ie=0);break;case 4:Se[ze]&&(Se[ze]+=(te()<<R)*it);break}Le++}ie===4&&(ve--,ve===0&&(ie=0))}function Me(se,Se,Le,ct,Ue){var ze=Le/N|0,it=Le%N,Re=ze*se.v+ct,Ie=it*se.h+Ue;se.blocks[Re]===void 0&&I.tolerantDecoding||Se(se,se.blocks[Re][Ie])}function ue(se,Se,Le){var ct=Le/se.blocksPerLine|0,Ue=Le%se.blocksPerLine;se.blocks[ct]===void 0&&I.tolerantDecoding||Se(se,se.blocks[ct][Ue])}var we=x.length,Oe,B,oe,pe,xe,Ae;j?M===0?Ae=A===0?V:ce:Ae=A===0?ye:Fe:Ae=Ce;var Ne=0,Xe,ke;we==1?ke=x[0].blocksPerLine*x[0].blocksPerColumn:ke=N*T.mcusPerColumn,C||(C=ke);for(var ut,nt;Ne<ke;){for(B=0;B<we;B++)x[B].pred=0;if(ve=0,we==1)for(Oe=x[0],xe=0;xe<C;xe++)ue(Oe,Ae,Ne),Ne++;else for(xe=0;xe<C;xe++){for(B=0;B<we;B++)for(Oe=x[B],ut=Oe.h,nt=Oe.v,oe=0;oe<nt;oe++)for(pe=0;pe<ut;pe++)Me(Oe,Ae,Ne,oe,pe);if(Ne++,Ne===ke)break}if(Ne===ke)do{if(_[v]===255&&_[v+1]!==0)break;v+=1}while(v<_.length-2);if(Z=0,Xe=_[v]<<8|_[v+1],Xe<65280)throw new Error("marker was not found");if(Xe>=65488&&Xe<=65495)v+=2;else break}return v-D}function m(_,v){var T=[],x=v.blocksPerLine,C=v.blocksPerColumn,M=x<<3,E=new Int32Array(64),A=new Uint8Array(64);function R(D,W,Z){var te=v.quantizationTable,ne,F,Q,Ce,V,ce,ve,ye,ie,re=Z,Fe;for(Fe=0;Fe<64;Fe++)re[Fe]=D[Fe]*te[Fe];for(Fe=0;Fe<8;++Fe){var Me=8*Fe;if(re[1+Me]==0&&re[2+Me]==0&&re[3+Me]==0&&re[4+Me]==0&&re[5+Me]==0&&re[6+Me]==0&&re[7+Me]==0){ie=c*re[0+Me]+512>>10,re[0+Me]=ie,re[1+Me]=ie,re[2+Me]=ie,re[3+Me]=ie,re[4+Me]=ie,re[5+Me]=ie,re[6+Me]=ie,re[7+Me]=ie;continue}ne=c*re[0+Me]+128>>8,F=c*re[4+Me]+128>>8,Q=re[2+Me],Ce=re[6+Me],V=l*(re[1+Me]-re[7+Me])+128>>8,ye=l*(re[1+Me]+re[7+Me])+128>>8,ce=re[3+Me]<<4,ve=re[5+Me]<<4,ie=ne-F+1>>1,ne=ne+F+1>>1,F=ie,ie=Q*o+Ce*a+128>>8,Q=Q*a-Ce*o+128>>8,Ce=ie,ie=V-ve+1>>1,V=V+ve+1>>1,ve=ie,ie=ye+ce+1>>1,ce=ye-ce+1>>1,ye=ie,ie=ne-Ce+1>>1,ne=ne+Ce+1>>1,Ce=ie,ie=F-Q+1>>1,F=F+Q+1>>1,Q=ie,ie=V*s+ye*r+2048>>12,V=V*r-ye*s+2048>>12,ye=ie,ie=ce*i+ve*n+2048>>12,ce=ce*n-ve*i+2048>>12,ve=ie,re[0+Me]=ne+ye,re[7+Me]=ne-ye,re[1+Me]=F+ve,re[6+Me]=F-ve,re[2+Me]=Q+ce,re[5+Me]=Q-ce,re[3+Me]=Ce+V,re[4+Me]=Ce-V}for(Fe=0;Fe<8;++Fe){var ue=Fe;if(re[8+ue]==0&&re[16+ue]==0&&re[24+ue]==0&&re[32+ue]==0&&re[40+ue]==0&&re[48+ue]==0&&re[56+ue]==0){ie=c*Z[Fe+0]+8192>>14,re[0+ue]=ie,re[8+ue]=ie,re[16+ue]=ie,re[24+ue]=ie,re[32+ue]=ie,re[40+ue]=ie,re[48+ue]=ie,re[56+ue]=ie;continue}ne=c*re[0+ue]+2048>>12,F=c*re[32+ue]+2048>>12,Q=re[16+ue],Ce=re[48+ue],V=l*(re[8+ue]-re[56+ue])+2048>>12,ye=l*(re[8+ue]+re[56+ue])+2048>>12,ce=re[24+ue],ve=re[40+ue],ie=ne-F+1>>1,ne=ne+F+1>>1,F=ie,ie=Q*o+Ce*a+2048>>12,Q=Q*a-Ce*o+2048>>12,Ce=ie,ie=V-ve+1>>1,V=V+ve+1>>1,ve=ie,ie=ye+ce+1>>1,ce=ye-ce+1>>1,ye=ie,ie=ne-Ce+1>>1,ne=ne+Ce+1>>1,Ce=ie,ie=F-Q+1>>1,F=F+Q+1>>1,Q=ie,ie=V*s+ye*r+2048>>12,V=V*r-ye*s+2048>>12,ye=ie,ie=ce*i+ve*n+2048>>12,ce=ce*n-ve*i+2048>>12,ve=ie,re[0+ue]=ne+ye,re[56+ue]=ne-ye,re[8+ue]=F+ve,re[48+ue]=F-ve,re[16+ue]=Q+ce,re[40+ue]=Q-ce,re[24+ue]=Ce+V,re[32+ue]=Ce-V}for(Fe=0;Fe<64;++Fe){var we=128+(re[Fe]+8>>4);W[Fe]=we<0?0:we>255?255:we}}y(M*C*8);for(var I,O,U=0;U<C;U++){var z=U<<3;for(I=0;I<8;I++)T.push(new Uint8Array(M));for(var N=0;N<x;N++){R(v.blocks[U][N],A,E);var j=0,Y=N<<3;for(O=0;O<8;O++){var G=T[z+O];for(I=0;I<8;I++)G[Y+I]=A[j++]}}}return T}function p(_){return _<0?0:_>255?255:_}h.prototype={load:function(v){var T=new XMLHttpRequest;T.open("GET",v,!0),T.responseType="arraybuffer",T.onload=(function(){var x=new Uint8Array(T.response||T.mozResponseArrayBuffer);this.parse(x),this.onload&&this.onload()}).bind(this),T.send(null)},parse:function(v){var T=this.opts.maxResolutionInMP*1e3*1e3,x=0,C=v.length;function M(){var Re=v[x]<<8|v[x+1];return x+=2,Re}function E(){var Re=M(),Ie=v.subarray(x,x+Re-2);return x+=Ie.length,Ie}function A(Re){var Ie=1,Je=1,st,_t;for(_t in Re.components)Re.components.hasOwnProperty(_t)&&(st=Re.components[_t],Ie<st.h&&(Ie=st.h),Je<st.v&&(Je=st.v));var rt=Math.ceil(Re.samplesPerLine/8/Ie),pt=Math.ceil(Re.scanLines/8/Je);for(_t in Re.components)if(Re.components.hasOwnProperty(_t)){st=Re.components[_t];var Kn=Math.ceil(Math.ceil(Re.samplesPerLine/8)*st.h/Ie),fe=Math.ceil(Math.ceil(Re.scanLines/8)*st.v/Je),sn=rt*st.h,bi=pt*st.v,sr=bi*sn,Mi=[];y(sr*256);for(var Ei=0;Ei<bi;Ei++){for(var Ai=[],Ti=0;Ti<sn;Ti++)Ai.push(new Int32Array(64));Mi.push(Ai)}st.blocksPerLine=Kn,st.blocksPerColumn=fe,st.blocks=Mi}Re.maxH=Ie,Re.maxV=Je,Re.mcusPerLine=rt,Re.mcusPerColumn=pt}var R=null,I=null,O=null,U,z,N=[],j=[],Y=[],G=[],D=M(),W=-1;if(this.comments=[],D!=65496)throw new Error("SOI not found");for(D=M();D!=65497;){var Z,te,ne;switch(D){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var F=E();if(D===65534){var Q=String.fromCharCode.apply(null,F);this.comments.push(Q)}D===65504&&F[0]===74&&F[1]===70&&F[2]===73&&F[3]===70&&F[4]===0&&(R={version:{major:F[5],minor:F[6]},densityUnits:F[7],xDensity:F[8]<<8|F[9],yDensity:F[10]<<8|F[11],thumbWidth:F[12],thumbHeight:F[13],thumbData:F.subarray(14,14+3*F[12]*F[13])}),D===65505&&F[0]===69&&F[1]===120&&F[2]===105&&F[3]===102&&F[4]===0&&(this.exifBuffer=F.subarray(5,F.length)),D===65518&&F[0]===65&&F[1]===100&&F[2]===111&&F[3]===98&&F[4]===101&&F[5]===0&&(I={version:F[6],flags0:F[7]<<8|F[8],flags1:F[9]<<8|F[10],transformCode:F[11]});break;case 65499:for(var Ce=M(),V=Ce+x-2;x<V;){var ce=v[x++];y(256);var ve=new Int32Array(64);if(ce>>4===0)for(te=0;te<64;te++){var ye=e[te];ve[ye]=v[x++]}else if(ce>>4===1)for(te=0;te<64;te++){var ye=e[te];ve[ye]=M()}else throw new Error("DQT: invalid table spec");N[ce&15]=ve}break;case 65472:case 65473:case 65474:M(),U={},U.extended=D===65473,U.progressive=D===65474,U.precision=v[x++],U.scanLines=M(),U.samplesPerLine=M(),U.components={},U.componentsOrder=[];var ie=U.scanLines*U.samplesPerLine;if(ie>T){var re=Math.ceil((ie-T)/1e6);throw new Error(`maxResolutionInMP limit exceeded by ${re}MP`)}var Fe=v[x++],Me,ue=0,we=0;for(Z=0;Z<Fe;Z++){Me=v[x];var Oe=v[x+1]>>4,B=v[x+1]&15,oe=v[x+2];if(Oe<=0||B<=0)throw new Error("Invalid sampling factor, expected values above 0");U.componentsOrder.push(Me),U.components[Me]={h:Oe,v:B,quantizationIdx:oe},x+=3}A(U),j.push(U);break;case 65476:var pe=M();for(Z=2;Z<pe;){var xe=v[x++],Ae=new Uint8Array(16),Ne=0;for(te=0;te<16;te++,x++)Ne+=Ae[te]=v[x];y(16+Ne);var Xe=new Uint8Array(Ne);for(te=0;te<Ne;te++,x++)Xe[te]=v[x];Z+=17+Ne,(xe>>4===0?G:Y)[xe&15]=u(Ae,Xe)}break;case 65501:M(),z=M();break;case 65500:M(),M();break;case 65498:var ke=M(),ut=v[x++],nt=[],se;for(Z=0;Z<ut;Z++){se=U.components[v[x++]];var Se=v[x++];se.huffmanTableDC=G[Se>>4],se.huffmanTableAC=Y[Se&15],nt.push(se)}var Le=v[x++],ct=v[x++],Ue=v[x++],ze=f(v,x,U,nt,z,Le,ct,Ue>>4,Ue&15,this.opts);x+=ze;break;case 65535:v[x]!==255&&x--;break;default:if(v[x-3]==255&&v[x-2]>=192&&v[x-2]<=254){x-=3;break}else if(D===224||D==225){if(W!==-1)throw new Error(`first unknown JPEG marker at offset ${W.toString(16)}, second unknown JPEG marker ${D.toString(16)} at offset ${(x-1).toString(16)}`);W=x-1;let Re=M();if(v[x+Re-2]===255){x+=Re-2;break}}throw new Error("unknown JPEG marker "+D.toString(16))}D=M()}if(j.length!=1)throw new Error("only single frame JPEGs supported");for(var Z=0;Z<j.length;Z++){var it=j[Z].components;for(var te in it)it[te].quantizationTable=N[it[te].quantizationIdx],delete it[te].quantizationIdx}this.width=U.samplesPerLine,this.height=U.scanLines,this.jfif=R,this.adobe=I,this.components=[];for(var Z=0;Z<U.componentsOrder.length;Z++){var se=U.components[U.componentsOrder[Z]];this.components.push({lines:m(U,se),scaleX:se.h/U.maxH,scaleY:se.v/U.maxV})}},getData:function(v,T){var x=this.width/v,C=this.height/T,M,E,A,R,I,O,U,z,N,j,Y=0,G,D,W,Z,te,ne,F,Q,Ce,V,ce,ve=v*T*this.components.length;y(ve);var ye=new Uint8Array(ve);switch(this.components.length){case 1:for(M=this.components[0],j=0;j<T;j++)for(I=M.lines[0|j*M.scaleY*C],N=0;N<v;N++)G=I[0|N*M.scaleX*x],ye[Y++]=G;break;case 2:for(M=this.components[0],E=this.components[1],j=0;j<T;j++)for(I=M.lines[0|j*M.scaleY*C],O=E.lines[0|j*E.scaleY*C],N=0;N<v;N++)G=I[0|N*M.scaleX*x],ye[Y++]=G,G=O[0|N*E.scaleX*x],ye[Y++]=G;break;case 3:for(ce=!0,this.adobe&&this.adobe.transformCode?ce=!0:typeof this.opts.colorTransform<"u"&&(ce=!!this.opts.colorTransform),M=this.components[0],E=this.components[1],A=this.components[2],j=0;j<T;j++)for(I=M.lines[0|j*M.scaleY*C],O=E.lines[0|j*E.scaleY*C],U=A.lines[0|j*A.scaleY*C],N=0;N<v;N++)ce?(G=I[0|N*M.scaleX*x],D=O[0|N*E.scaleX*x],W=U[0|N*A.scaleX*x],Q=p(G+1.402*(W-128)),Ce=p(G-.3441363*(D-128)-.71413636*(W-128)),V=p(G+1.772*(D-128))):(Q=I[0|N*M.scaleX*x],Ce=O[0|N*E.scaleX*x],V=U[0|N*A.scaleX*x]),ye[Y++]=Q,ye[Y++]=Ce,ye[Y++]=V;break;case 4:if(!this.adobe)throw new Error("Unsupported color mode (4 components)");for(ce=!1,this.adobe&&this.adobe.transformCode?ce=!0:typeof this.opts.colorTransform<"u"&&(ce=!!this.opts.colorTransform),M=this.components[0],E=this.components[1],A=this.components[2],R=this.components[3],j=0;j<T;j++)for(I=M.lines[0|j*M.scaleY*C],O=E.lines[0|j*E.scaleY*C],U=A.lines[0|j*A.scaleY*C],z=R.lines[0|j*R.scaleY*C],N=0;N<v;N++)ce?(G=I[0|N*M.scaleX*x],D=O[0|N*E.scaleX*x],W=U[0|N*A.scaleX*x],Z=z[0|N*R.scaleX*x],te=255-p(G+1.402*(W-128)),ne=255-p(G-.3441363*(D-128)-.71413636*(W-128)),F=255-p(G+1.772*(D-128))):(te=I[0|N*M.scaleX*x],ne=O[0|N*E.scaleX*x],F=U[0|N*A.scaleX*x],Z=z[0|N*R.scaleX*x]),ye[Y++]=255-te,ye[Y++]=255-ne,ye[Y++]=255-F,ye[Y++]=255-Z;break;default:throw new Error("Unsupported color mode")}return ye},copyToImageData:function(v,T){var x=v.width,C=v.height,M=v.data,E=this.getData(x,C),A=0,R=0,I,O,U,z,N,j,Y,G,D;switch(this.components.length){case 1:for(O=0;O<C;O++)for(I=0;I<x;I++)U=E[A++],M[R++]=U,M[R++]=U,M[R++]=U,T&&(M[R++]=255);break;case 3:for(O=0;O<C;O++)for(I=0;I<x;I++)Y=E[A++],G=E[A++],D=E[A++],M[R++]=Y,M[R++]=G,M[R++]=D,T&&(M[R++]=255);break;case 4:for(O=0;O<C;O++)for(I=0;I<x;I++)N=E[A++],j=E[A++],U=E[A++],z=E[A++],Y=255-p(N*(1-z/255)+z),G=255-p(j*(1-z/255)+z),D=255-p(U*(1-z/255)+z),M[R++]=Y,M[R++]=G,M[R++]=D,T&&(M[R++]=255);break;default:throw new Error("Unsupported color mode")}}};var g=0,S=0;function y(_=0){var v=g+_;if(v>S){var T=Math.ceil((v-S)/1024/1024);throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${T}MB`)}g=v}return h.resetMaxMemoryUsage=function(_){g=0,S=_},h.getBytesAllocated=function(){return g},h.requestMemoryAllocation=y,h})();typeof Yl<"u"?Yl.exports=Ad:typeof window<"u"&&(window["jpeg-js"]=window["jpeg-js"]||{},window["jpeg-js"].decode=Ad);function Ad(t,e={}){var n={colorTransform:void 0,useTArray:!1,formatAsRGBA:!0,tolerantDecoding:!0,maxResolutionInMP:100,maxMemoryUsageInMB:512},i={...n,...e},r=new Uint8Array(t),s=new Xl;s.opts=i,Xl.resetMaxMemoryUsage(i.maxMemoryUsageInMB*1024*1024),s.parse(r);var a=i.formatAsRGBA?4:3,o=s.width*s.height*a;try{Xl.requestMemoryAllocation(o);var c={width:s.width,height:s.height,exifBuffer:s.exifBuffer,data:i.useTArray?new Uint8Array(o):Buffer.alloc(o)};s.comments.length>0&&(c.comments=s.comments)}catch(l){throw l instanceof RangeError?new Error("Could not allocate enough memory for the image. Required: "+o):l instanceof ReferenceError&&l.message==="Buffer is not defined"?new Error("Buffer is not globally defined in this environment. Consider setting useTArray to true"):l}return s.copyToImageData(c,i.formatAsRGBA),c}});var Zl=gt((Bb,Cd)=>{var U_=Ed(),D_=Td();Cd.exports={encode:U_,decode:D_}});var Sw={};Qp(Sw,{decodeHdr:()=>hw,decodeTiff:()=>cw,encodePngRgba:()=>pw,extractHeifColorInfo:()=>mw,inspectIccProfile:()=>xh,renderHdr:()=>fw});var Co=fa(hf());var ws={redX:.64,redY:.33,greenX:.3,greenY:.6,blueX:.15,blueY:.06,whiteX:.3127,whiteY:.329},ul={redX:.68,redY:.32,greenX:.265,greenY:.69,blueX:.15,blueY:.06,whiteX:.3127,whiteY:.329},Ra={redX:.708,redY:.292,greenX:.17,greenY:.797,blueX:.131,blueY:.046,whiteX:.3127,whiteY:.329};var ff=["linear-rec709","linear-p3","linear-rec2020"];var Gi={"linear-rec709":ws,"linear-p3":ul,"linear-rec2020":Ra};var uf=.01;function Ia(t,e){return Math.abs(t.x-e.x)<=uf&&Math.abs(t.y-e.y)<=uf}function Ss(t){let e={x:t.redX,y:t.redY},n={x:t.greenX,y:t.greenY},i={x:t.blueX,y:t.blueY},r={x:t.whiteX,y:t.whiteY};for(let s of ff){let a=Gi[s];if(Ia(e,{x:a.redX,y:a.redY})&&Ia(n,{x:a.greenX,y:a.greenY})&&Ia(i,{x:a.blueX,y:a.blueY})&&Ia(r,{x:a.whiteX,y:a.whiteY}))return s}}function df(t){let e=t.redX/t.redY,n=1,i=(1-t.redX-t.redY)/t.redY,r=t.greenX/t.greenY,s=1,a=(1-t.greenX-t.greenY)/t.greenY,o=t.blueX/t.blueY,c=1,l=(1-t.blueX-t.blueY)/t.blueY,h=t.whiteX/t.whiteY,u=1,f=(1-t.whiteX-t.whiteY)/t.whiteY,m=e*(s*l-c*a)-r*(n*l-c*i)+o*(n*a-s*i),p=(h*(s*l-c*a)-r*(u*l-c*f)+o*(u*a-s*f))/m,g=(e*(u*l-c*f)-h*(n*l-c*i)+o*(n*f-u*i))/m,S=(e*(s*f-u*a)-r*(n*f-u*i)+h*(n*a-s*i))/m;return[[p*e,g*r,S*o],[p*n,g*s,S*c],[p*i,g*a,S*l]]}function vr(t,e){let n=df(t),i=df(e),r=Zm(i);return Ym(r,n)}function Ym(t,e){return[[t[0][0]*e[0][0]+t[0][1]*e[1][0]+t[0][2]*e[2][0],t[0][0]*e[0][1]+t[0][1]*e[1][1]+t[0][2]*e[2][1],t[0][0]*e[0][2]+t[0][1]*e[1][2]+t[0][2]*e[2][2]],[t[1][0]*e[0][0]+t[1][1]*e[1][0]+t[1][2]*e[2][0],t[1][0]*e[0][1]+t[1][1]*e[1][1]+t[1][2]*e[2][1],t[1][0]*e[0][2]+t[1][1]*e[1][2]+t[1][2]*e[2][2]],[t[2][0]*e[0][0]+t[2][1]*e[1][0]+t[2][2]*e[2][0],t[2][0]*e[0][1]+t[2][1]*e[1][1]+t[2][2]*e[2][1],t[2][0]*e[0][2]+t[2][1]*e[1][2]+t[2][2]*e[2][2]]]}function Zm(t){let e=t[0][0],n=t[0][1],i=t[0][2],r=t[1][0],s=t[1][1],a=t[1][2],o=t[2][0],c=t[2][1],l=t[2][2],u=1/(e*(s*l-a*c)-n*(r*l-a*o)+i*(r*c-s*o));return[[(s*l-a*c)*u,(i*c-n*l)*u,(n*a-i*s)*u],[(a*o-r*l)*u,(e*l-i*o)*u,(i*r-e*a)*u],[(r*c-s*o)*u,(n*o-e*c)*u,(e*s-n*r)*u]]}function yr(t){return[t[0][0],t[0][1],t[0][2],t[1][0],t[1][1],t[1][2],t[2][0],t[2][1],t[2][2]]}function ri(t,e,n,i=0,r=0){let s=e[i],a=e[i+1],o=e[i+2];n[r]=t[0]*s+t[1]*a+t[2]*o,n[r+1]=t[3]*s+t[4]*a+t[5]*o,n[r+2]=t[6]*s+t[7]*a+t[8]*o}var Pa=Gi["linear-rec709"],La=Gi["linear-p3"],Ua=Gi["linear-rec2020"],qm=vr(Pa,La),fl=vr(Pa,Ua),$m=vr(La,Pa),Jm=vr(La,Ua),dl=vr(Ua,Pa),Km=vr(Ua,La),Qm={"linear-rec709-linear-p3":qm,"linear-rec709-linear-rec2020":fl,"linear-p3-linear-rec709":$m,"linear-p3-linear-rec2020":Jm,"linear-rec2020-linear-rec709":dl,"linear-rec2020-linear-p3":Km};function pf(t,e){if(t===e)return null;let n=`${t}-${e}`;return Qm[n]}var qw=1/1.055,jm=1/2.4,eg=.0031308;function Vi(t){return t<=eg?t*12.92:1.055*t**jm-.055}var Kw=1/2.4,Qw=1/12.92,jw=1/1.055;function wr(t,e,n,i,r){let s=pf(i,r);if(s===null)return t;let a=new Float32Array(t.length);a.set(t);let o=yr(s);for(let c=0;c<t.length;c+=4)ri(o,t,a,c,c);return a}var Da={none:0,rle:1,zips:2,zip:3,piz:4,pxr24:5,b44:6,b44a:7,dwaa:8,dwab:9},Na=Object.keys(Da),ml=Object.fromEntries(Na.map(t=>[Da[t],t])),bn=0,ot=1,Ke=2,gl=20000630;var mf=new Float32Array(1),ng=new Int32Array(mf.buffer);function Nn(t){mf[0]=t;let e=ng[0],n=e>>16&32768,i=e>>12&2047,r=e>>23&255;if(r<103)return n;if(r>142)return r===255&&e&8388607?n|32256:n|31744;if(r<113){let s=i|2048;return n|(s>>114-r)+(s>>113-r&1)}return n|(r-112<<10|i>>1)+(i&1)}function Fn(t){let e=(t&32768)>>15,n=(t&31744)>>10,i=t&1023;if(n===0)return i===0?e===0?0:-0:(e===0?1:-1)*2**-14*(i/1024);if(n===31)return i===0?e===0?1/0:-1/0:NaN;let r=2**(n-15)*(1+i/1024);return e===0?r:-r}var _l=null;function Fa(){if(_l)return _l;let t=new Float32Array(65536);for(let e=0;e<65536;e++)t[e]=Fn(e);return _l=t,t}var xl,Oa;function ig(t){return(t&31744)===31744?0:t>=21900&&t<32768?31743:Nn(Math.exp(Fn(t)/8))}function rg(t){return(t&31744)===31744||t>32768?0:Nn(8*Math.log(Fn(t)))}function sg(){if(!(xl&&Oa)){xl=new Uint16Array(65536),Oa=new Uint16Array(65536);for(let t=0;t<65536;t++)xl[t]=ig(t),Oa[t]=rg(t)}}function gf(t){sg();for(let e=0;e<16;e++)t[e]=Oa[t[e]]}function ag(t){for(let e=0;e<16;e++){let n=t[e];t[e]=n&32768?n&32767:~n&65535}}function _f(t,e){e[0]=(t[0]<<8|t[1])&65535;let n=t[2]>>2,i=32<<n&65535;e[4]=e[0]+(((t[2]<<4|t[3]>>4)&63)<<n)-i&65535,e[8]=e[4]+(((t[3]<<2|t[4]>>6)&63)<<n)-i&65535,e[12]=e[8]+((t[4]&63)<<n)-i&65535,e[1]=e[0]+(t[5]>>2<<n)-i&65535,e[5]=e[4]+(((t[5]<<4|t[6]>>4)&63)<<n)-i&65535,e[9]=e[8]+(((t[6]<<2|t[7]>>6)&63)<<n)-i&65535,e[13]=e[12]+((t[7]&63)<<n)-i&65535,e[2]=e[1]+(t[8]>>2<<n)-i&65535,e[6]=e[5]+(((t[8]<<4|t[9]>>4)&63)<<n)-i&65535,e[10]=e[9]+(((t[9]<<2|t[10]>>6)&63)<<n)-i&65535,e[14]=e[13]+((t[10]&63)<<n)-i&65535,e[3]=e[2]+(t[11]>>2<<n)-i&65535,e[7]=e[6]+(((t[11]<<4|t[12]>>4)&63)<<n)-i&65535,e[11]=e[10]+(((t[12]<<2|t[13]>>6)&63)<<n)-i&65535,e[15]=e[14]+((t[13]&63)<<n)-i&65535,ag(e)}function xf(t,e){let n=t[0]<<8|t[1];e[0]=n&32768?n&32767:~n&65535;for(let i=1;i<16;i++)e[i]=e[0]}function vf(t){switch(t){case bn:return 4;case ot:return 2;case Ke:return 4;default:return 2}}function yf(t,e,n,i,r){let s=n.length,a=new Uint16Array(16),o=0,c=[];for(let f=0;f<s;f++){let m=n[f],p=vf(m.pixelType),g=e*r*p,S=new Uint8Array(g);if(c.push(S),g===0)continue;if(m.pixelType!==ot){if(o+g>t.length)throw new Error("B44: not enough data for uncompressed channel");S.set(t.subarray(o,o+g)),o+=g;continue}let y=new Uint16Array(S.buffer);for(let _=0;_<r;_+=4)for(let v=0;v<e;v+=4){if(o+3>t.length)throw new Error("B44: truncated block data");if(t[o+2]>=52)xf(t.subarray(o,o+3),a),o+=3;else{if(o+14>t.length)throw new Error("B44: truncated block data");_f(t.subarray(o,o+14),a),o+=14}m.pLinear&&gf(a);let T=Math.min(4,e-v),x=Math.min(4,r-_);for(let C=0;C<x;C++){let M=(_+C)*e;for(let E=0;E<T;E++)y[M+v+E]=a[C*4+E]}}}let l=c.reduce((f,m)=>f+m.length,0),h=new Uint8Array(l),u=0;for(let f=0;f<r;f++)for(let m=0;m<s;m++){let p=n[m],g=vf(p.pixelType),S=c[m],y=f*e*g,_=e*g;h.set(S.subarray(y,y+_),u),u+=_}return h}var Qt=Uint8Array,Sr=Uint16Array,og=Int32Array,wf=new Qt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Sf=new Qt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),lg=new Qt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),bf=function(t,e){for(var n=new Sr(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new og(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},Mf=bf(wf,2),Ef=Mf.b,cg=Mf.r;Ef[28]=258,cg[258]=28;var Af=bf(Sf,0),hg=Af.b,pS=Af.r,wl=new Sr(32768);for(Qe=0;Qe<32768;++Qe)On=(Qe&43690)>>1|(Qe&21845)<<1,On=(On&52428)>>2|(On&13107)<<2,On=(On&61680)>>4|(On&3855)<<4,wl[Qe]=((On&65280)>>8|(On&255)<<8)>>1;var On,Qe,bs=(function(t,e,n){for(var i=t.length,r=0,s=new Sr(e);r<i;++r)t[r]&&++s[t[r]-1];var a=new Sr(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(n){o=new Sr(1<<e);var c=15-e;for(r=0;r<i;++r)if(t[r])for(var l=r<<4|t[r],h=e-t[r],u=a[t[r]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[wl[u]>>c]=l}else for(o=new Sr(i),r=0;r<i;++r)t[r]&&(o[r]=wl[a[t[r]-1]++]>>15-t[r]);return o}),Ms=new Qt(288);for(Qe=0;Qe<144;++Qe)Ms[Qe]=8;var Qe;for(Qe=144;Qe<256;++Qe)Ms[Qe]=9;var Qe;for(Qe=256;Qe<280;++Qe)Ms[Qe]=7;var Qe;for(Qe=280;Qe<288;++Qe)Ms[Qe]=8;var Qe,Tf=new Qt(32);for(Qe=0;Qe<32;++Qe)Tf[Qe]=5;var Qe;var ug=bs(Ms,9,1);var fg=bs(Tf,5,1),vl=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},ln=function(t,e,n){var i=e/8|0;return(t[i]|t[i+1]<<8)>>(e&7)&n},yl=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},dg=function(t){return(t+7)/8|0},pg=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new Qt(t.subarray(e,n))};var mg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],cn=function(t,e,n){var i=new Error(e||mg[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,cn),!n)throw i;return i},gg=function(t,e,n,i){var r=t.length,s=i?i.length:0;if(!r||e.f&&!e.l)return n||new Qt(0);var a=!n,o=a||e.i!=2,c=e.i;a&&(n=new Qt(r*3));var l=function(ie){var re=n.length;if(ie>re){var Fe=new Qt(Math.max(re*2,ie));Fe.set(n),n=Fe}},h=e.f||0,u=e.p||0,f=e.b||0,m=e.l,p=e.d,g=e.m,S=e.n,y=r*8;do{if(!m){h=ln(t,u,1);var _=ln(t,u+1,3);if(u+=3,_)if(_==1)m=ug,p=fg,g=9,S=5;else if(_==2){var C=ln(t,u,31)+257,M=ln(t,u+10,15)+4,E=C+ln(t,u+5,31)+1;u+=14;for(var A=new Qt(E),R=new Qt(19),I=0;I<M;++I)R[lg[I]]=ln(t,u+I*3,7);u+=M*3;for(var O=vl(R),U=(1<<O)-1,z=bs(R,O,1),I=0;I<E;){var N=z[ln(t,u,U)];u+=N&15;var v=N>>4;if(v<16)A[I++]=v;else{var j=0,Y=0;for(v==16?(Y=3+ln(t,u,3),u+=2,j=A[I-1]):v==17?(Y=3+ln(t,u,7),u+=3):v==18&&(Y=11+ln(t,u,127),u+=7);Y--;)A[I++]=j}}var G=A.subarray(0,C),D=A.subarray(C);g=vl(G),S=vl(D),m=bs(G,g,1),p=bs(D,S,1)}else cn(1);else{var v=dg(u)+4,T=t[v-4]|t[v-3]<<8,x=v+T;if(x>r){c&&cn(0);break}o&&l(f+T),n.set(t.subarray(v,x),f),e.b=f+=T,e.p=u=x*8,e.f=h;continue}if(u>y){c&&cn(0);break}}o&&l(f+131072);for(var W=(1<<g)-1,Z=(1<<S)-1,te=u;;te=u){var j=m[yl(t,u)&W],ne=j>>4;if(u+=j&15,u>y){c&&cn(0);break}if(j||cn(2),ne<256)n[f++]=ne;else if(ne==256){te=u,m=null;break}else{var F=ne-254;if(ne>264){var I=ne-257,Q=wf[I];F=ln(t,u,(1<<Q)-1)+Ef[I],u+=Q}var Ce=p[yl(t,u)&Z],V=Ce>>4;Ce||cn(3),u+=Ce&15;var D=hg[V];if(V>3){var Q=Sf[V];D+=yl(t,u)&(1<<Q)-1,u+=Q}if(u>y){c&&cn(0);break}o&&l(f+131072);var ce=f+F;if(f<D){var ve=s-D,ye=Math.min(D,ce);for(ve+f<0&&cn(3);f<ye;++f)n[f]=i[ve+f]}for(;f<ce;++f)n[f]=n[f-D]}}e.l=m,e.p=te,e.b=f,e.f=h,m&&(h=1,e.m=g,e.d=p,e.n=S)}while(!h);return f!=n.length&&a?pg(n,0,f):n.subarray(0,f)};var _g=new Qt(0);var xg=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&cn(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&cn(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function Bn(t,e){return gg(t.subarray(xg(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var vg=typeof TextDecoder<"u"&&new TextDecoder,yg=0;try{vg.decode(_g,{stream:!0}),yg=1}catch{}var wg=["UNKNOWN","DCT","RLE"];var Cf=[{suffix:"r",scheme:"DCT",types:[ot,Ke],cscIdx:0,caseInsensitive:!0},{suffix:"red",scheme:"DCT",types:[ot,Ke],cscIdx:0,caseInsensitive:!0},{suffix:"g",scheme:"DCT",types:[ot,Ke],cscIdx:1,caseInsensitive:!0},{suffix:"grn",scheme:"DCT",types:[ot,Ke],cscIdx:1,caseInsensitive:!0},{suffix:"green",scheme:"DCT",types:[ot,Ke],cscIdx:1,caseInsensitive:!0},{suffix:"b",scheme:"DCT",types:[ot,Ke],cscIdx:2,caseInsensitive:!0},{suffix:"blu",scheme:"DCT",types:[ot,Ke],cscIdx:2,caseInsensitive:!0},{suffix:"blue",scheme:"DCT",types:[ot,Ke],cscIdx:2,caseInsensitive:!0},{suffix:"y",scheme:"DCT",types:[ot,Ke],cscIdx:-1,caseInsensitive:!0},{suffix:"by",scheme:"DCT",types:[ot,Ke],cscIdx:-1,caseInsensitive:!0},{suffix:"ry",scheme:"DCT",types:[ot,Ke],cscIdx:-1,caseInsensitive:!0},{suffix:"a",scheme:"RLE",types:[bn,ot,Ke],cscIdx:-1,caseInsensitive:!0}];function Rf(t){let e=t.lastIndexOf(".");return e>=0?t.slice(e+1):t}function Sg(t,e,n){return t.types.includes(n)?t.caseInsensitive?t.suffix.toLowerCase()===e.toLowerCase():t.suffix===e:!1}function bg(t,e,n){let i=Rf(t);for(let r of n)if(Sg(r,i,e))return{scheme:r.scheme,cscIdx:r.cscIdx};return{scheme:"UNKNOWN",cscIdx:-1}}function If(t){if(t.length<2)throw new Error("DWA: truncated channel rule block");let e=t[0]|t[1]<<8;if(e<2||e>t.length)throw new Error("DWA: invalid channel rule size");let n=[],i=2;for(;i<e;){let r=t.indexOf(0,i);if(r<0||r+2>=e)throw new Error("DWA: corrupt channel rule");let s=t[r+1],a=t[r+2],o=(s>>4)-1,c=wg[s>>2&3];if(!c||o<-1||o>2||a>Ke)throw new Error("DWA: corrupt channel rule");n.push({suffix:new TextDecoder().decode(t.subarray(i,r)),scheme:c,types:[a],cscIdx:o,caseInsensitive:(s&1)===1}),i=r+3}return{rules:n,size:e}}function Sl(t,e){let n=t.map(a=>bg(a.name,a.pixelType,e)),i=new Map;for(let a=0;a<t.length;a++){let o=n[a];if(o.scheme!=="DCT"||o.cscIdx<0)continue;let c=t[a],l=Rf(c.name),h=c.name.slice(0,c.name.length-l.length),u=i.get(h);u||(u=[-1,-1,-1],i.set(h,u)),u[o.cscIdx]=a}let r=[],s=new Set;for(let[a,o,c]of i.values()){if(a<0||o<0||c<0)continue;let l=t[a],h=t[o],u=t[c];l.xSampling===h.xSampling&&l.xSampling===u.xSampling&&l.ySampling===h.ySampling&&l.ySampling===u.ySampling&&(r.push([a,o,c]),s.add(a),s.add(o),s.add(c))}return{classes:n,cscGroups:r,grouped:s}}function br(t){let e=t.length;if(!(e<2)){(e&1)===0&&(t[1]=t[1]+(t[0]^128)&255);for(let n=2;n<e-1;n+=2){let i=t[n-1]+t[n]&255;t[n]=i,t[n+1]=t[n+1]+i&255,t[n]=(i^128)&255}}}function Mr(t,e){let n=Math.floor(e.length/2),i=e.subarray(0,n),r=e.subarray(n,n*2);for(let s=0;s<n;s++)t[s*2]=i[s],t[s*2+1]=r[s]}function bl(t,e){let n=new Uint8Array(e),i=0,r=0;for(;i<t.length&&r<e;){let s=t[i++]<<24>>24;if(s<0){let a=-s;if(i+a>t.length)throw new Error(`RLE decompression: truncated literal run (need ${a} bytes, ${t.length-i} available)`);for(let o=0;o<a&&r<e;o++)n[r++]=t[i++]}else{if(i>=t.length)throw new Error("RLE decompression: truncated repeat run (missing value byte)");let a=t[i++];for(let o=0;o<=s&&r<e;o++)n[r++]=a}}if(r!==e)throw new Error(`RLE decompression produced wrong size: expected ${e}, got ${r}`);return n}function Pf(t,e){let n=bl(t,e);br(n);let i=new Uint8Array(e);return Mr(i,n),i}var Mg=Math.pow(Math.E,2.2),Ml=null;function Lf(){if(Ml)return Ml;let t=new Uint16Array(65536);for(let e=0;e<65536;e++){if(e===0||(e&31744)===31744){t[e]=0;continue}let n=Fn(e),i=n<0?-1:1,r=Math.abs(n),s=r<=1?r:Mg,a=r<=1?2.2:r-1;t[e]=Nn(i*Math.pow(s,a))}return Ml=t,t}function Ag(t){for(let e=0;e<16384;e++)t[e]={len:0,lit:0,p:null}}function El(t,e){let n=t.getUint32(e.value,!0);return e.value+=4,n}function Bf(t,e){let n=t[e.value];if(e.value+=1,n===void 0)throw new Error("Unexpected end of data");return n}var kn={l:0,c:0,lc:0};function Nf(t,e,n,i,r){let s=e,a=n;for(;a<t;)s=s<<8|Bf(i,r),a+=8;a-=t,kn.l=s>>a&(1<<t)-1,kn.c=s,kn.lc=a}var Hi=new Array(59);function Tg(t){for(let n=0;n<=58;++n)Hi[n]=0;for(let n=0;n<65537;++n){let i=t[n];if(i!==void 0){let r=Hi[i];r!==void 0&&(Hi[i]=r+1)}}let e=0;for(let n=58;n>0;--n){let i=Hi[n];if(i!==void 0){let r=e+i>>1;Hi[n]=e,e=r}}for(let n=0;n<65537;++n){let i=t[n];if(i!==void 0&&i>0){let r=Hi[i];r!==void 0&&(t[n]=i|r<<6,Hi[i]=r+1)}}}function Cg(t,e,n,i,r,s){let a=e,o=0,c=0,l=i;for(;l<=r;l++){if(a.value-e.value>n)return;Nf(6,o,c,t,a);let h=kn.l;if(o=kn.c,c=kn.lc,s[l]=h,h===63){if(a.value-e.value>n)throw new Error("Something wrong with hufUnpackEncTable");Nf(8,o,c,t,a);let u=kn.l+6;if(o=kn.c,c=kn.lc,l+u>r+1)throw new Error("Something wrong with hufUnpackEncTable");let f=u;for(;f-- >0;)s[l++]=0;l--}else if(h>=59){let u=h-59+2;if(l+u>r+1)throw new Error("Something wrong with hufUnpackEncTable");let f=u;for(;f-- >0;)s[l++]=0;l--}}Tg(s)}function kf(t){return t&63}function zf(t){return t>>6}function Rg(t,e,n,i){let r=e;for(;r<=n;r++){let s=t[r];if(s===void 0)continue;let a=zf(s),o=kf(s);if(a>>o)throw new Error("Invalid table entry");if(o>14){let c=a>>o-14,l=i[c];if(!l)throw new Error("Invalid table entry");if(l.len)throw new Error("Invalid table entry");if(l.lit++,l.p){let h=l.p;l.p=new Array(l.lit);for(let u=0;u<l.lit-1;++u){let f=h[u];f!==void 0&&(l.p[u]=f)}}else l.p=new Array(1);l.p[l.lit-1]=r}else if(o){let c=0;for(let l=1<<14-o;l>0;l--){let h=(a<<14-o)+c,u=i[h];if(!u)throw new Error("Invalid table entry");if(u.len||u.p)throw new Error("Invalid table entry");u.len=o,u.lit=r,c++}}}return!0}var si={c:0,lc:0};function Tl(t,e,n,i){let r=t<<8|Bf(n,i),s=e+8;si.c=r,si.lc=s}var Mn={c:0,lc:0};function Al(t,e,n,i,r,s,a,o,c){let l=n,h=i;if(t===e){h<8&&(Tl(l,h,r,s),l=si.c,h=si.lc),h-=8;let u=l>>h;if(u=new Uint8Array([u])[0],o.value+u>c){Mn.c=l,Mn.lc=h;return}let m=a[o.value-1];if(m!==void 0){let p=u;for(;p-- >0;)a[o.value++]=m}}else o.value<c&&(a[o.value++]=t);Mn.c=l,Mn.lc=h}function Ig(t,e,n,i,r,s,a,o,c){let l=0,h=0,u=a,f=Math.trunc(i.value+(r+7)/8);for(;i.value<f;)for(Tl(l,h,n,i),l=si.c,h=si.lc;h>=14;){let p=l>>h-14&16383,g=e[p];if(!g)throw new Error("hufDecode issues: invalid table index");if(g.len)h-=g.len,Al(g.lit,s,l,h,n,i,o,c,u),l=Mn.c,h=Mn.lc;else{if(!g.p)throw new Error("hufDecode issues");let S=0;for(S=0;S<g.lit;S++){let y=g.p[S];if(y===void 0)continue;let _=t[y];if(_===void 0)continue;let v=kf(_);for(;h<v&&i.value<f;)Tl(l,h,n,i),l=si.c,h=si.lc;if(h>=v&&zf(_)===(l>>h-v&(1<<v)-1)){h-=v,Al(y,s,l,h,n,i,o,c,u),l=Mn.c,h=Mn.lc;break}}if(S>=g.lit)throw new Error("hufDecode issues")}}let m=8-r&7;for(l>>=m,h-=m;h>0;){let p=l<<14-h&16383,g=e[p];if(!g)throw new Error("hufDecode issues: invalid table index");if(g.len)h-=g.len,Al(g.lit,s,l,h,n,i,o,c,u),l=Mn.c,h=Mn.lc;else throw new Error("hufDecode issues")}}var MS=261;function Ba(t,e,n,i,r,s){let a={value:0},o=n.value,c=El(e,n),l=El(e,n);n.value+=4;let h=El(e,n);if(n.value+=4,c<0||c>=65537||l<0||l>=65537)throw new Error(`Something wrong with HUF_ENCSIZE: im=${c}, iM=${l}, HUF_ENCSIZE=${65537}, compressedSize=${i}, offset=${n.value}`);let u=new Array(65537),f=new Array(16384);Ag(f);let m=i-(n.value-o);if(Cg(t,n,m,c,l,u),h>8*(i-(n.value-o)))throw new Error("Something wrong with hufUncompress");Rg(u,c,l,f),Ig(u,f,t,n,h,l,s,r,a)}function Vf(t){return t===ot?2:4}var Hf=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63];function Pg(t,e){for(let n=0;n<64;n++)e[n]=Fn(t[Hf[n]])}var ka=.5*Math.cos(Math.PI/4),ai=.5*Math.cos(Math.PI/16),za=.5*Math.cos(Math.PI/8),oi=.5*Math.cos(3*Math.PI/16),li=.5*Math.cos(5*Math.PI/16),Ga=.5*Math.cos(3*Math.PI/8),ci=.5*Math.cos(7*Math.PI/16);function Lg(t){let e=new Float64Array(4),n=new Float64Array(4),i=new Float64Array(4),r=new Float64Array(4);for(let s=0;s<8;s++){let a=s*8;e[0]=za*t[a+2],e[1]=Ga*t[a+2],e[2]=za*t[a+6],e[3]=Ga*t[a+6],n[0]=ai*t[a+1]+oi*t[a+3]+li*t[a+5]+ci*t[a+7],n[1]=oi*t[a+1]-ci*t[a+3]-ai*t[a+5]-li*t[a+7],n[2]=li*t[a+1]-ai*t[a+3]+ci*t[a+5]+oi*t[a+7],n[3]=ci*t[a+1]-li*t[a+3]+oi*t[a+5]-ai*t[a+7],i[0]=ka*(t[a]+t[a+4]),i[3]=ka*(t[a]-t[a+4]),i[1]=e[0]+e[3],i[2]=e[1]-e[2],r[0]=i[0]+i[1],r[1]=i[3]+i[2],r[2]=i[3]-i[2],r[3]=i[0]-i[1],t[a]=r[0]+n[0],t[a+1]=r[1]+n[1],t[a+2]=r[2]+n[2],t[a+3]=r[3]+n[3],t[a+4]=r[3]-n[3],t[a+5]=r[2]-n[2],t[a+6]=r[1]-n[1],t[a+7]=r[0]-n[0]}for(let s=0;s<8;s++)e[0]=za*t[16+s],e[1]=Ga*t[16+s],e[2]=za*t[48+s],e[3]=Ga*t[48+s],n[0]=ai*t[8+s]+oi*t[24+s]+li*t[40+s]+ci*t[56+s],n[1]=oi*t[8+s]-ci*t[24+s]-ai*t[40+s]-li*t[56+s],n[2]=li*t[8+s]-ai*t[24+s]+ci*t[40+s]+oi*t[56+s],n[3]=ci*t[8+s]-li*t[24+s]+oi*t[40+s]-ai*t[56+s],i[0]=ka*(t[s]+t[32+s]),i[3]=ka*(t[s]-t[32+s]),i[1]=e[0]+e[3],i[2]=e[1]-e[2],r[0]=i[0]+i[1],r[1]=i[3]+i[2],r[2]=i[3]-i[2],r[3]=i[0]-i[1],t[s]=r[0]+n[0],t[8+s]=r[1]+n[1],t[16+s]=r[2]+n[2],t[24+s]=r[3]+n[3],t[32+s]=r[3]-n[3],t[40+s]=r[2]-n[2],t[48+s]=r[1]-n[1],t[56+s]=r[0]-n[0]}function Ug(t,e,n){for(let i=0;i<64;i++){let r=t[i],s=e[i],a=n[i];t[i]=r+1.5747*a,e[i]=r-.1873*s-.4682*a,n[i]=r+1.8556*s}}function Dg(t,e,n){let i=1;for(;i<64;){if(e.value>=t.length)throw new Error("DWA: AC stream truncated");let r=t[e.value++];if((r&65280)===65280){let s=r&255;i+=s===0?64:s}else n[i]=r,i++}}function Gf(t,e,n,i,r,s,a,o,c,l){let h=t.length,u=Math.ceil(e/8),f=Math.ceil(n/8),m=e-(u-1)*8,p=n-(f-1)*8,g=[];for(let x=0;x<h;x++)g.push(a.value+x*u*f);a.value+=h*u*f;let S=Array.from({length:h},()=>new Float64Array(64)),y=Array.from({length:h},()=>new Uint16Array(64)),_=Array.from({length:h},()=>new Uint16Array(e*n));for(let x=0;x<f;x++){let C=x===f-1?p:8;for(let M=0;M<u;M++){let E=M===u-1?m:8;for(let A=0;A<h;A++){let R=y[A];R.fill(0),R[0]=s[g[A]],g[A]=g[A]+1,Dg(i,r,R);let I=S[A];Pg(R,I),Lg(I)}h===3&&Ug(S[0],S[1],S[2]);for(let A=0;A<h;A++){let R=S[A],I=_[A];for(let O=0;O<C;O++){let z=(x*8+O)*e+M*8;for(let N=0;N<E;N++)I[z+N]=Nn(R[O*8+N])}}}}let v=l?Lf():null,T=Fa();for(let x=0;x<h;x++){let C=o[t[x]],M=_[x],E=c[t[x]],A=e*n;if(C.pixelType===Ke){let R=new Float32Array(E.buffer,E.byteOffset,A);for(let I=0;I<A;I++){let O=v?v[M[I]]:M[I];R[I]=T[O]}}else{let R=new Uint16Array(E.buffer,E.byteOffset,A);for(let I=0;I<A;I++)R[I]=v?v[M[I]]:M[I]}}}function Wf(t,e,n,i,r){let s=new DataView(t.buffer,t.byteOffset,t.byteLength),o=11*8;if(t.length<o)throw new Error("DWA: chunk too small for header");let c=V=>Number(s.getBigUint64(V*8,!0)),l=c(0),h=c(1),u=c(2),f=c(3),m=c(4),p=c(5),g=c(6),S=c(7),y=c(8),_=c(9),v=c(10);if(l>2)throw new Error(`DWA: unsupported version ${l}`);let T=l<2,x=o,C=Cf;if(!T){let V=If(t.subarray(x));C=V.rules,x+=V.size}if(x+u+f+m+p>t.length)throw new Error("DWA: chunk data shorter than declared sizes");let M=t.subarray(x,x+u);x+=u;let E=t.subarray(x,x+f);x+=f;let A=t.subarray(x,x+m);x+=m;let R=t.subarray(x,x+p);x+=p;let I=u>0?Bn(M):new Uint8Array(0);if(I.length<h)throw new Error("DWA: unknown-data stream shorter than declared");let O;if(f>0)if(v===0)O=new Uint16Array(y),Ba(E,new DataView(E.buffer,E.byteOffset,E.byteLength),{value:0},f,O,y);else{let V=Bn(E);O=new Uint16Array(V.buffer,V.byteOffset,Math.floor(V.length/2))}else O=new Uint16Array(0);let U;if(m>0){let V=_*2,ce=Bn(A);if(ce.length<V)throw new Error("DWA: DC stream shorter than declared");br(ce);let ve=new Uint8Array(V);Mr(ve,ce.subarray(0,V)),U=new Uint16Array(ve.buffer,ve.byteOffset,_)}else U=new Uint16Array(0);let z;if(S>0){let V=Bn(R);if(V.length<g)throw new Error("DWA: RLE stream shorter than declared");z=bl(V.subarray(0,g),S)}else z=new Uint8Array(0);let{classes:N,cscGroups:j,grouped:Y}=Sl(n,C),G=n.map(V=>Vf(V.pixelType)),D=n.map((V,ce)=>new Uint8Array(e*r*G[ce])),W={value:0},Z={value:0};for(let V of j)Gf(V,e,r,O,W,U,Z,n,D,!0);let te=0,ne=0;for(let V=0;V<n.length;V++){if(Y.has(V))continue;let ce=N[V],ve=n[V];if(ce.scheme==="DCT")Gf([V],e,r,O,W,U,Z,n,D,!ve.pLinear);else if(ce.scheme==="RLE"){let ye=G[V],ie=e*r,re=z.subarray(te,te+ye*ie);te+=ye*ie;let Fe=D[V];for(let Me=0;Me<ie;Me++)for(let ue=0;ue<ye;ue++)Fe[Me*ye+ue]=re[ue*ie+Me]}else{let ye=G[V],ie=e*r*ye;D[V].set(I.subarray(ne,ne+ie)),ne+=ie}}let F=0;for(let V=0;V<n.length;V++)F+=e*r*G[V];let Q=new Uint8Array(F),Ce=0;for(let V=0;V<r;V++)for(let ce=0;ce<n.length;ce++){let ve=G[ce],ye=D[ce],ie=V*e*ve;Q.set(ye.subarray(ie,ie+e*ve),Ce),Ce+=e*ve}return Q}function Xf(t){return t===Ke?4:2}function Pl(t){return t&65535}function Yf(t){let e=Pl(t);return e>32767?e-65536:e}var Ot={a:0,b:0},Bt={a:0,b:0};function Ar(t,e){let n=Yf(t),r=Yf(e),s=n+(r&1)+(r>>1);Ot.a=s,Ot.b=s-r}function Tr(t,e){let n=Pl(t),i=Pl(e),r=n-(i>>1)&65535,s=i+r-32768&65535;Bt.a=s,Bt.b=r}function Ng(t,e){let n=0;for(let r=0;r<65536;++r){let s=r>>3,a=t[s];if(a===void 0)break;(r===0||a&1<<(r&7))&&(e[n++]=r)}let i=n-1;for(;n<65536;)e[n++]=0;return i}function Fg(t,e,n){for(let i=0;i<n;++i){let r=e[i];if(r!==void 0){let s=t[r];s!==void 0&&(e[i]=s)}}}function Cl(t,e,n,i,r,s,a){let o=a<16384,c=n>r?r:n,l=1,h,u=0;for(;l<=c;)l<<=1;for(l>>=1,h=l,l>>=1;l>=1;){u=0;let f=u+s*(r-h),m=s*l,p=s*h,g=i*l,S=i*h,y,_,v,T;for(;u<=f;u+=p){let x=u,C=u+i*(n-h);for(;x<=C;x+=S){let M=x+g,E=x+m,A=E+g,R=t[x+e],I=t[E+e],O=t[M+e],U=t[A+e];R===void 0||I===void 0||O===void 0||U===void 0||(o?(Ar(R,I),y=Ot.a,v=Ot.b,Ar(O,U),_=Ot.a,T=Ot.b,Ar(y,_),t[x+e]=Ot.a,t[M+e]=Ot.b,Ar(v,T),t[E+e]=Ot.a,t[A+e]=Ot.b):(Tr(R,I),y=Bt.a,v=Bt.b,Tr(O,U),_=Bt.a,T=Bt.b,Tr(y,_),t[x+e]=Bt.a,t[M+e]=Bt.b,Tr(v,T),t[E+e]=Bt.a,t[A+e]=Bt.b))}if(n&l){let M=x+m,E=t[x+e],A=t[M+e];E!==void 0&&A!==void 0&&(o?Ar(E,A):Tr(E,A),y=o?Ot.a:Bt.a,t[M+e]=o?Ot.b:Bt.b,t[x+e]=y)}}if(r&l){let x=u,C=u+i*(n-h);for(;x<=C;x+=S){let M=x+g,E=t[x+e],A=t[M+e];E!==void 0&&A!==void 0&&(o?Ar(E,A):Tr(E,A),y=o?Ot.a:Bt.a,t[M+e]=o?Ot.b:Bt.b,t[x+e]=y)}}h=l,l>>=1}}function qf(t,e,n,i,r=32){let s=new DataView(t.buffer,t.byteOffset,t.byteLength),a=0,o=s.getUint16(a,!0);a+=2;let c=s.getUint16(a,!0);if(a+=2,c>=8192)throw new Error("Invalid PIZ data: maxNonZero out of range");let l=new Uint8Array(8192);if(o<=c)for(let R=0;R<c-o+1;R++){let I=s.getUint8(a);a+=1,l[R+o]=I}let h=new Uint16Array(65536),u=Ng(l,h);if(a+4>t.length)throw new Error(`Invalid PIZ data: not enough data for compressed size at offset ${a}`);let f=s.getUint32(a,!0);if(a+=4,f<=0||f>t.length-a)throw new Error(`Invalid PIZ compressed size: ${f}, available: ${t.length-a}, offset: ${a}, total length: ${t.length}`);let m=new Uint8Array(t.buffer,t.byteOffset+a,f),p=n.length;if(!n[0])throw new Error("Invalid PIZ data: no channels");let g=e*r,S=n.map(R=>Xf(R.pixelType)/2),y=[],_=0;for(let R=0;R<p;R++)y.push(_),_+=g*S[R];let v=new Uint16Array(_);Ba(m,new DataView(m.buffer,m.byteOffset,m.byteLength),{value:0},f,v,_);for(let R=0;R<p;R++){let I=y[R];S[R]===1?Cl(v,I,e,1,r,e,u):(Cl(v,I,e,2,r,e*2,u),Cl(v,I+1,e,2,r,e*2,u))}Fg(h,v,_);let T=n.map(R=>Xf(R.pixelType)),x=[],C=0;for(let R of T)x.push(C),C+=e*R;let M=r*C,E=new Uint8Array(M),A=new DataView(E.buffer,E.byteOffset,E.byteLength);for(let R=0;R<r;R++)for(let I=0;I<p;I++){let O=T[I],U=R*C+x[I];for(let z=0;z<e;z++){let N=y[I]+(R*e+z)*S[I];O===2?A.setUint16(U+z*2,v[N],!0):A.setUint32(U+z*4,v[N+1]<<16|v[N],!0)}}return E}function Og(t){switch(t){case bn:return 4;case ot:return 2;case Ke:return 3;default:return 2}}function Bg(t){switch(t){case bn:return 4;case ot:return 2;case Ke:return 4;default:return 2}}function $f(t,e,n,i,r){let s=Bn(t),a=n.map(p=>Og(p.pixelType)),o=n.map(p=>Bg(p.pixelType)),c=0;for(let p of o)c+=e*p;let l=new Uint8Array(c*r),h=new Uint16Array(l.buffer),u=new Uint32Array(l.buffer),f=0,m=0;for(let p=0;p<r;p++)for(let g=0;g<n.length;g++){let S=n[g].pixelType,y=e*a[g];if(f+y>s.length)throw new Error("PXR24: not enough data in decompressed stream");let _=f,v=_+e,T=v+e,x=T+e;f+=y;let C=0;if(S===ot){let M=m>>1;for(let E=0;E<e;E++)C=C+(s[_+E]<<8|s[v+E])&65535,h[M+E]=C}else if(S===Ke){let M=m>>2;for(let E=0;E<e;E++)C=C+(s[_+E]<<16|s[v+E]<<8|s[T+E])&16777215,u[M+E]=C<<8}else{let M=m>>2;for(let E=0;E<e;E++)C=C+(s[_+E]<<24|s[v+E]<<16|s[T+E]<<8|s[x+E])>>>0,u[M+E]=C}m+=e*o[g]}if(f!==s.length)throw new Error(`PXR24: unexpected trailing data (read ${f}, total ${s.length})`);return l}function Jf(t){let e=Bn(t);br(e);let n=new Uint8Array(e.length);return Mr(n,e),n}function kg(t){return t.trim().toLowerCase().replace(/[^a-z0-9]/g,"")}function Cr(t){let e=kg(t);return e==="r"||e==="red"?"r":e==="g"||e==="green"?"g":e==="b"||e==="blue"?"b":e==="a"||e==="alpha"?"a":e==="y"||e==="l"||e==="lum"||e==="luma"||e==="luminance"||e==="gray"||e==="grey"?"luma":e}function Ha(t,e){let n=[],i=e;for(;i<t.length;){let r=t[i];if(r===void 0||r===0)break;n.push(r),i++}return new TextDecoder().decode(new Uint8Array(n))}function Kf(t){let e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=0,i=e.getUint32(n,!0);if(n+=4,i!==gl)throw new Error("Invalid EXR file: incorrect magic number");let r=e.getUint32(n,!0);n+=4;let s=(r&4096)!==0,a=(r&512)!==0,o=(r&2048)!==0;if(s||a||o)throw new Error("Multi-part, tiled, and deep data EXR files are not supported. This reader supports single-part scanline images only.");let c={};for(;;){let m=Ha(t,n);if(n+=m.length+1,m==="")break;let p=Ha(t,n);n+=p.length+1;let g=e.getUint32(n,!0);n+=4;let S;if(p==="string")S=Ha(t,n),n+=g;else if(p==="int")S=e.getInt32(n,!0),n+=4;else if(p==="float")S=e.getFloat32(n,!0),n+=4;else if(p==="v2i")S={x:e.getInt32(n,!0),y:e.getInt32(n+4,!0)},n+=8;else if(p==="v2f")S={x:e.getFloat32(n,!0),y:e.getFloat32(n+4,!0)},n+=8;else if(p==="box2i")S={xMin:e.getInt32(n,!0),yMin:e.getInt32(n+4,!0),xMax:e.getInt32(n+8,!0),yMax:e.getInt32(n+12,!0)},n+=16;else if(p==="chlist"){let y=[],_=n,v=n+g;for(;n<v;){let T=Ha(t,n),x=n+T.length;if(T===""||x>=v||(n=x+1,n+12>v))break;let C=e.getInt32(n,!0),M=C>=0&&C<=2?C:e.getUint8(n);n+=4;let E=e.getUint8(n);n+=1;let A=e.getUint16(n,!0);n+=2,n<v&&t[n]===0&&n+1<v&&(n+=1);let R=e.getInt32(n,!0);n+=4;let I=e.getInt32(n,!0);for(n+=4,y.push({name:T,pixelType:M,pLinear:E,reserved:A,xSampling:R,ySampling:I});n<v;){let O=t[n];if(O===void 0||O>=32&&O<=126)break;if(O===0&&n+1<v){let U=t[n+1];if(U!==void 0&&U>=32&&U<=126){n+=1;break}}n+=1}}n=_+g,S=y}else if(p==="compression"){let y=e.getUint8(n);n+=g,S=y}else p==="chromaticities"&&(S={redX:e.getFloat32(n,!0),redY:e.getFloat32(n+4,!0),greenX:e.getFloat32(n+8,!0),greenY:e.getFloat32(n+12,!0),blueX:e.getFloat32(n+16,!0),blueY:e.getFloat32(n+20,!0),whiteX:e.getFloat32(n+24,!0),whiteY:e.getFloat32(n+28,!0)}),n+=g;c[m]=S}let l=c.displayWindow,h=c.dataWindow,u=c.channels,f=c.compression??0;if(!(f in ml))throw new Error(`Unsupported EXR compression: unknown (${f}). This reader supports: ${Na.join(", ")}.`);if(!l||!h||!u||u.length===0){let m=l!=null,p=h!=null,g=u!=null&&u.length>0;throw new Error(`Invalid EXR file: missing required header attributes. displayWindow: ${m}, dataWindow: ${p}, channels: ${g?u.length:0}, header keys: ${Object.keys(c).join(", ")}`)}return{header:{header:c,displayWindow:l,dataWindow:h,channels:u,compression:f},offset:n}}function zg(t){switch(t){case bn:return 4;case ot:return 2;case Ke:return 4;default:throw new Error(`Unknown pixel type: ${t}`)}}function Ll(t,e){let n=new DataView(t.buffer,t.byteOffset,t.byteLength),{header:i,offset:r}=Kf(t),{header:s,dataWindow:a,channels:o,compression:c}=i,l=a.xMax-a.xMin+1,h=a.yMax-a.yMin+1,u=o.some(D=>Cr(D.name)==="r"),f=o.some(D=>Cr(D.name)==="g"),m=o.some(D=>Cr(D.name)==="b"),p=o.some(D=>Cr(D.name)==="luma"),g=u&&f&&m,S=!g&&p;if(!g&&!S)throw new Error("Non-RGB EXR files are not supported. This reader requires R, G, and B channels, or a luminance (Y/L/luma) channel.");let y=c===4||c===8||c===6||c===7?32:c===3||c===5?16:c===9?256:1,_=Math.ceil(h/y),v=[],T=r,x=r,C=_;for(let D=0;D<C&&x+8<=t.length;D++){let W=Number(n.getBigUint64(x,!0));if(W>t.length&&W<Number.MAX_SAFE_INTEGER){let ne=n.getUint32(x,!0),F=n.getUint32(x+4,!0);F===0&&ne<t.length?W=ne:ne===0&&F<t.length&&(W=F)}let Z=W>=0&&W+8<=t.length,te=W>=T;if(Z&&te)v.push(W);else if(v.length>0)break;x+=8}let M=y;if(v.length>=2){let D=v[0],W=v[1];if(D!==void 0&&W!==void 0&&D<t.length&&W<t.length&&D>=0&&W>=0)try{let Z=n.getInt32(D,!0);n.getInt32(W,!0)===Z+1&&(M=1,v.length>h&&(v.length=h))}catch{}}let E=v.length;if(E===0)throw new Error("Invalid EXR file: no valid scanline block offsets found");let A=new Float32Array(l*h*4),R=o.map(D=>zg(D.pixelType)),I=[],O=[],U=0,z=!1;for(let D=0;D<o.length;D++){let W=Cr(o[D].name),Z=g?{r:0,g:1,b:2,a:3}[W]:W==="luma"?0:W==="a"?3:void 0;O.push(Z??-1),Z===3&&(z=!0),I.push(U),U+=l*R[D]}if(!z)for(let D=3;D<A.length;D+=4)A[D]=1;let N=e?.sanitize!==!1,j=Fa();for(let D=0;D<E;D++){let W=v[D];if(W===void 0)throw new Error(`Missing scanline block offset for block ${D}`);if(W>=t.length||W<0)throw new Error(`Invalid scanline block offset ${W} for block ${D} (file size: ${t.length})`);let Z=W;if(Z+4>t.length)throw new Error(`Invalid scanline block: not enough data for Y coordinate at offset ${Z}`);let te=n.getInt32(Z,!0);if(Z+=4,Z+4>t.length)throw new Error(`Invalid scanline block: not enough data for data size at offset ${Z}`);let ne=n.getUint32(Z,!0);Z+=4;let F=t.length-Z;if(ne<=0||ne>F)throw ne>t.length||ne>104857600?new Error(`Unsupported or invalid EXR format: scanline block ${D} has invalid data size (${ne} bytes, ${F} available). This file may use a compression or layout not supported by this reader. Supported: none, RLE, ZIPS, ZIP, PIZ, PXR24, B44, B44A, DWAA, DWAB.`):new Error(`Invalid scanline block data size: ${ne} at offset ${Z-4} (file size: ${t.length}, available: ${F})`);let Q=Math.min(M,h-te),Ce=Q*U,V=new Uint8Array(t.buffer,t.byteOffset+Z,ne),ce;if(c===0||ne===Ce)ce=V;else if(c===3||c===2)ce=Jf(V);else if(c===1)ce=Pf(V,Ce);else if(c===4)ce=qf(V,l,o,ne,Q);else if(c===5)ce=$f(V,l,o,ne,Q);else if(c===8||c===9)ce=Wf(V,l,o,ne,Q);else if(c===6||c===7)ce=yf(V,l,o,ne,Q);else throw new Error(`Unsupported compression type: ${c}`);ce.byteOffset&3&&(ce=ce.slice());let ve=ce.buffer,ye=ce.byteOffset;for(let ie=0;ie<Q;ie++){let re=te+ie;if(re>=h)break;let Fe=ye+ie*U,Me=re*l*4;for(let ue=0;ue<o.length;ue++){let we=O[ue];if(we<0)continue;let Oe=Fe+I[ue],B=o[ue].pixelType,oe;B===ot?oe=new Uint16Array(ve,Oe,l):B===Ke?oe=new Float32Array(ve,Oe,l):oe=new Uint32Array(ve,Oe,l);let pe=Me+we;if(B===ot)for(let xe=0;xe<l;xe++,pe+=4){let Ae=j[oe[xe]];A[pe]=N&&!(Ae>=0&&Ae<1/0)?0:Ae}else for(let xe=0;xe<l;xe++,pe+=4){let Ae=oe[xe];A[pe]=N&&!(Ae>=0&&Ae<1/0)?0:Ae}if(S&&we===0)for(let xe=0,Ae=Me;xe<l;xe++,Ae+=4)A[Ae+1]=A[Ae],A[Ae+2]=A[Ae]}}}let Y=s.chromaticities,G=Y&&typeof Y.redX=="number"&&typeof Y.redY=="number"&&typeof Y.greenX=="number"&&typeof Y.greenY=="number"&&typeof Y.blueX=="number"&&typeof Y.blueY=="number"&&typeof Y.whiteX=="number"&&typeof Y.whiteY=="number"?Ss(Y)??"linear-rec709":"linear-rec709";return{width:l,height:h,data:A,linearColorSpace:G,metadata:s}}function zn(t){for(let e=0;e<t.length;e++){let n=t[e];(n===void 0||n<0||!Number.isFinite(n))&&(t[e]=0)}}var u2={0:1,1:1,2:1,3:16,4:32,5:16,6:32,7:32,8:32,9:256};function Ul(t){let e=t*(t+.0245786)-90537e-9,n=t*(.983729*t+.432951)+.238081;return e/n}function Wg(t,e,n){for(let x=0;x<n;x++){let C=x*3,M=t[C],E=t[C+1],A=t[C+2],R=.59719*M+.35458*E+.04823*A,I=.076*M+.90834*E+.01566*A,O=.0284*M+.13383*E+.83777*A,U=Ul(R),z=Ul(I),N=Ul(O);e[C]=1.60475*U+-.53108*z+-.07367*N,e[C+1]=-.10208*U+1.10813*z+-.00605*N,e[C+2]=-.00327*U+-.07276*z+1.07602*N}}function Xg(t,e,n){for(let i=0;i<n;i++){let r=i*3,s=t[r],a=t[r+1],o=t[r+2];e[r]=s/(1+s),e[r+1]=a/(1+a),e[r+2]=o/(1+o)}}function Yg(t,e,n){for(let s=0;s<n;s++){let a=s*3,o=t[a],c=t[a+1],l=t[a+2],h=Math.min(o,Math.min(c,l)),u=h<.08?h-6.25*h*h:.04;o-=u,c-=u,l-=u;let f=Math.max(o,Math.max(c,l));if(f<.76){e[a]=o,e[a+1]=c,e[a+2]=l;continue}let m=1-.76,p=1-m*m/(f+m-.76);o*=p/f,c*=p/f,l*=p/f;let g=1-1/(.15*(f-p)+1);e[a]=o*(1-g)+p*g,e[a+1]=c*(1-g)+p*g,e[a+2]=l*(1-g)+p*g}}function Dl(t){let e=t*t,n=e*e;return 15.5*n*e-40.14*n*t+31.96*n-6.868*e*t+.4298*e+.1191*t-.00232}var Zg=yr(fl),qg=yr(dl),$g=[.856627153315983,.0951212405381588,.0482516061458583,.137318972929847,.761241990602591,.101439036467562,.11189821299995,.0767994186031903,.811302368396859],Jg=[1.1271005818144368,-.11060664309660323,-.016493938717834573,-.1413297634984383,1.157823702216272,-.016493938717834257,-.14132976349843826,-.11060664309660294,1.2519364065950405],Za=-12.47393,Kg=4.026069,Rt=[0,0,0],Ht=[0,0,0];function Qg(t,e,n){for(let i=0;i<n;i++){let r=i*3;Rt[0]=t[r],Rt[1]=t[r+1],Rt[2]=t[r+2],ri(Zg,Rt,Ht);let s=Ht[0],a=Ht[1],o=Ht[2];ri($g,Ht,Rt),s=Rt[0],a=Rt[1],o=Rt[2],s=Math.max(s,1e-10),a=Math.max(a,1e-10),o=Math.max(o,1e-10);let c=1/(Kg-Za);s=Math.max(0,Math.min(1,(Math.log2(s)-Za)*c)),a=Math.max(0,Math.min(1,(Math.log2(a)-Za)*c)),o=Math.max(0,Math.min(1,(Math.log2(o)-Za)*c)),s=Dl(s),a=Dl(a),o=Dl(o),Rt[0]=s,Rt[1]=a,Rt[2]=o,ri(Jg,Rt,Ht),s=Ht[0],a=Ht[1],o=Ht[2],s=Math.max(0,s)**2.2,a=Math.max(0,a)**2.2,o=Math.max(0,o)**2.2,Rt[0]=s,Rt[1]=a,Rt[2]=o,ri(qg,Rt,Ht),e[r]=Ht[0],e[r+1]=Ht[1],e[r+2]=Ht[2]}}var jg={aces:Wg,reinhard:Xg,neutral:Yg,agx:Qg};function qa(t){return jg[t]}var Ib=[1/64,1/64,1/64];var Sd=fa(yd(),1),wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:{};typeof wd.Buffer>"u"&&(wd.Buffer=Sd.Buffer);var N_=fa(Zl(),1);var F_="AAAByAAAAAAEMAAAbW50clJHQiBYWVogB+AAAQABAAAAAAAAYWNzcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAPbWAAEAAAAA0y0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZGVzYwAAAPAAAAAkclhZWgAAARQAAAAUZ1hZWgAAASgAAAAUYlhZWgAAATwAAAAUd3RwdAAAAVAAAAAUclRSQwAAAWQAAAAoZ1RSQwAAAWQAAAAoYlRSQwAAAWQAAAAoY3BydAAAAYwAAAA8bWx1YwAAAAAAAAABAAAADGVuVVMAAAAIAAAAHABzAFIARwBCWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPWFlaIAAAAAAAAPbWAAEAAAAA0y1wYXJhAAAAAAAEAAAAAmZmAADypwAADVkAABPQAAAKWwAAAAAAAAAAbWx1YwAAAAAAAAABAAAADGVuVVMAAAAgAAAAHABHAG8AbwBnAGwAZQAgAEkAbgBjAC4AIAAyADAAMQA2",Rd=new TextEncoder().encode("ICC_PROFILE\0");function O_(t){let e=atob(t),n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}var ql=null;function Id(){if(ql)return ql;let t=O_(F_),e=new Uint8Array(Rd.length+2+t.length);return e.set(Rd,0),e[12]=1,e[13]=1,e.set(t,14),ql=e,e}var $l=null;function B_(){return $l||($l=Id()),$l}var Pd=B_();var Wb=new TextEncoder().encode("ICC_PROFILE\0"),k_=12,Xb=k_+2;var z_=fa(Zl(),1);var cM={SIGNATURE:new Uint8Array([77,80,70,0]),BIG_ENDIAN:new Uint8Array([77,77]),LITTLE_ENDIAN:new Uint8Array([73,73]),TIFF_MAGIC:42,NUM_PICTURES:2,TAG_COUNT:3,TAG_SIZE:12,MP_ENTRY_SIZE:16};var hM=new Uint8Array([48,49,48,48]);var fi=.01;function Y_(t){let e=ws;return Math.abs(t.redX-e.redX)<=fi&&Math.abs(t.redY-e.redY)<=fi&&Math.abs(t.greenX-e.greenX)<=fi&&Math.abs(t.greenY-e.greenY)<=fi&&Math.abs(t.blueX-e.blueX)<=fi&&Math.abs(t.blueY-e.blueY)<=fi&&Math.abs(t.whiteX-e.whiteX)<=fi&&Math.abs(t.whiteY-e.whiteY)<=fi}function Jl(t,e={}){if(!t)return;let n=t.chromaticities;if(!n){if(e.strict)throw new Error("EXR file has no chromaticities attribute. Tone mapping assumes Rec. 709 / sRGB primaries. Use strict: false to allow images without chromaticities, or ensure the EXR declares chromaticities.");return}let i=n;if(!(typeof i.redX!="number"||typeof i.redY!="number"||typeof i.greenX!="number"||typeof i.greenY!="number"||typeof i.blueX!="number"||typeof i.blueY!="number"||typeof i.whiteX!="number"||typeof i.whiteY!="number")&&!Y_(i))throw new Error("EXR chromaticities (red, green, blue, white) do not match Rec. 709. Tone mapping assumes Rec. 709 / sRGB primaries. Use an image with Rec. 709 chromaticities or convert color space before tone mapping.")}function ja(t,e,n,i={}){let r=i.sourceColorSpace??"linear-rec709",s=t;zn(s),r!=="linear-rec709"?s=wr(s,e,n,r,"linear-rec709"):i.metadata&&Jl(i.metadata);let a=i.toneMapping??"reinhard",o=i.exposure??1,c=qa(a),l=e*n,h=new Float32Array(l*3),u=new Uint8Array(l*3);for(let f=0;f<l;f++){let m=f*4,p=f*3;if(m+2>=s.length)break;h[p]=s[m]*o,h[p+1]=s[m+1]*o,h[p+2]=s[m+2]*o}c(h,h,l);for(let f=0;f<l;f++){let m=f*3,p=f*3,g=Vi(h[m]),S=Vi(h[m+1]),y=Vi(h[m+2]);u[p]=Math.max(0,Math.min(255,g*255+.5)),u[p+1]=Math.max(0,Math.min(255,S*255+.5)),u[p+2]=Math.max(0,Math.min(255,y*255+.5))}return u}function Kl(t,e={}){let{headerStrict:n=!0,output:i="raw"}=e,r=t,s={offset:0},a=Q_(r,s,{headerStrict:n}),o=a.width,c=a.height,l=n1(r.subarray(s.offset),o,c),h=l.length/4,u=new Float32Array(h*4);for(let f=0;f<h;f++)Z_(l,f*4,u,f*4);if(i==="physicalRadiance"&&a.exposure!==1){let f=1/a.exposure;for(let m=0;m<u.length;m++)m%4!==3&&(u[m]=u[m]*f)}return zn(u),{width:o,height:c,data:u,linearColorSpace:"linear-rec709",metadata:a.metadata}}function Z_(t,e,n,i){let r=t[e+3];if(r===0)n[i+0]=0,n[i+1]=0,n[i+2]=0;else{let s=2**(r-128)/255;n[i+0]=(t[e+0]+.5)*s,n[i+1]=(t[e+1]+.5)*s,n[i+2]=(t[e+2]+.5)*s}n[i+3]=1}var q_=/^#\?(\S+)/,$_=/^\s*([-+])([XY])\s+(\d+)\s+([-+])([XY])\s+(\d+)\s*$/,J_=/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/;function di(t,e){switch(t){case 1:throw new Error(`HDR Read Error: ${e||""}`);case 2:throw new Error(`HDR Write Error: ${e||""}`);case 3:throw new Error(`HDR Bad File Format: ${e||""}`);case 4:throw new Error(`HDR Memory Error: ${e||""}`);default:throw new Error(`HDR Memory Error: ${e||""}`)}}function K_(t){let e=t.trim(),n=parseFloat(e);return!Number.isNaN(n)&&e===String(n)?n:e}function Q_(t,e,n){let o={},c={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0,metadata:o};function l(){let m=e.offset;if(m>=t.byteLength)return!1;let p=Math.min(m+1024,t.byteLength),g="";for(;m<p;){let S=t[m];if(S===void 0)break;if(S===10)return e.offset=m+1,g;g+=String.fromCharCode(S),m++}return e.offset=m,g.length>0?g:!1}e.offset>=t.byteLength&&di(1,"no header found");let h=l();h===!1&&di(3,"no header found");let u=h.match(q_);for((!u||!u[1])&&di(3,"bad initial token"),n.headerStrict&&u[1]!=="RADIANCE"&&di(3,`expected #?RADIANCE, got #?${u[1]}`),c.valid|=1,c.programtype=u[1],c.string+=`${h}
`;h=l(),h!==!1;){if(c.string+=`${h}
`,h.charAt(0)==="#"){c.comments+=`${h}
`;continue}let f=h.match(J_);if(f?.[1]){let p=f[1],g=K_(f[2]??"");o[p]=g,p==="GAMMA"&&typeof g=="number"?c.gamma=g:p==="EXPOSURE"&&typeof g=="number"?(c.exposure*=g,o[p]=c.exposure):p==="FORMAT"&&(c.valid|=2,c.format=String(g),c.format==="32-bit_rle_xyze"&&di(3,"XYZ format is not supported; only RGBE format is supported"));continue}let m=h.match($_);if(m){let p=m[1],g=m[2],S=m[3],y=m[4],_=m[5],v=m[6];if(g==="Y"&&p==="-"&&_==="X"&&y==="+"){c.valid|=4,c.height=parseInt(S??"0",10),c.width=parseInt(v??"0",10),o.RESOLUTION=h.trim();break}throw new Error(`Unsupported resolution format: ${h.trim()}. Only -Y N +X M (standard orientation) is supported.`)}}return c.valid&2||di(3,"missing format specifier"),c.valid&4||di(3,"missing image size specifier"),(c.width===0||c.height===0)&&di(3,"invalid image dimensions"),c}function j_(t,e){return t[e]===255&&t[e+1]===255&&t[e+2]===255}function e1(t){for(let e=0;e<t.length;e+=4)if(e+4<=t.length&&j_(t,e))return!0;return!1}function t1(t,e,n){let i=new Uint8Array(4*e*n),r=0,s=0,a=new Uint8Array(4);for(;r<i.length&&s<t.length;){if(s+4>t.length)throw new Error("HDR Bad File Format: truncated old RLE data");let o=t[s++],c=t[s++],l=t[s++],h=t[s++];if(o===255&&c===255&&l===255){let u=h,f=1;for(;s+4<=t.length;){let m=t[s],p=t[s+1],g=t[s+2],S=t[s+3];if(m!==255||p!==255||g!==255)break;s+=4,u+=S<<8*f,f++}for(let m=0;m<u&&r<i.length;m++)i[r++]=a[0],i[r++]=a[1],i[r++]=a[2],i[r++]=a[3]}else{let u=o&255,f=c&255,m=l&255,p=h&255;a[0]=u,a[1]=f,a[2]=m,a[3]=p,i[r++]=u,i[r++]=f,i[r++]=m,i[r++]=p}}if(r!==i.length)throw new Error("HDR Bad File Format: old RLE did not produce expected pixel count");return i}function n1(t,e,n){let i=e,r=t;for(;r.length>0&&r[0]===10;)r=r.subarray(1);if(i<8||i>32767||r.length<4||r[0]!==2||r[1]!==2||r[2]&128){let m=4*e*n;if(r.length<m&&e1(r))return t1(r,e,n);if(r.length===m+1&&r[0]===10&&(r=r.subarray(1)),r.length!==m)throw new Error(`HDR Bad File Format: expected ${m} bytes (${e}x${n}), got ${r.length}`);return new Uint8Array(r)}let s=r[2]<<8|r[3];if(i!==s)throw new Error(`HDR Bad File Format: wrong scanline width (expected ${i}, got ${s})`);let a=new Uint8Array(4*e*n);if(!a.length)throw new Error("HDR Memory Error: unable to allocate buffer space");let o=0,c=0,l=4*i,h=new Uint8Array(4),u=new Uint8Array(l),f=n;for(;f>0&&c<r.byteLength;){if(c+4>r.byteLength)throw new Error("HDR Read Error");if(h[0]=r[c++],h[1]=r[c++],h[2]=r[c++],h[3]=r[c++],h[0]!==2||h[1]!==2||(h[2]<<8|h[3])!==i)throw new Error("HDR Bad File Format: bad rgbe scanline format");let m=0,p;for(;m<l&&c<r.byteLength;){let S=r[c++];if(S===void 0)throw new Error("HDR Read Error: unexpected end of data");p=S;let y=p>128;if(y&&(p-=128),p===0||m+p>l)throw new Error("HDR Bad File Format: bad scanline data");if(y){let _=r[c++];if(_===void 0)throw new Error("HDR Read Error: unexpected end of data");for(let v=0;v<p;v++)u[m++]=_}else u.set(r.subarray(c,c+p),m),m+=p,c+=p}let g=i;for(let S=0;S<g;S++){let y=0;a[o]=u[S+y],y+=i,a[o+1]=u[S+y],y+=i,a[o+2]=u[S+y],y+=i,a[o+3]=u[S+y],o+=4}f--}return a}var Ld=4,Ud=0,Dd=1,i1=2;function Br(t){let e=t.length;for(;--e>=0;)t[e]=0}var r1=0,Vd=1,s1=2,Hd=29,hc=256,Wd=286,Nr=30,uc=19,Xd=573,Fs=15,Ql=16,a1=7,fc=256,Yd=16,Zd=17,qd=18,ic=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),eo=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),o1=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),$d=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),l1=512,Vn=new Array(288*2);Br(Vn);var Os=new Array(Nr*2);Br(Os);var Bs=new Array(l1);Br(Bs);var ks=new Array(256);Br(ks);var dc=new Array(Hd);Br(dc);var no=new Array(Nr);Br(no);var jl=class{constructor(t,e,n,i,r){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=i,this.max_length=r,this.has_stree=t&&t.length}},Jd,Kd,Qd,ec=class{constructor(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}},jd=t=>t<256?Bs[t]:Bs[256+(t>>>7)],zs=(t,e)=>{t.pending_buf[t.pending++]=e&255,t.pending_buf[t.pending++]=e>>>8&255},zt=(t,e,n)=>{t.bi_valid>Ql-n?(t.bi_buf|=e<<t.bi_valid&65535,zs(t,t.bi_buf),t.bi_buf=e>>Ql-t.bi_valid,t.bi_valid+=n-Ql):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)},Cn=(t,e,n)=>{zt(t,n[e*2],n[e*2+1])},ep=(t,e)=>{let n=0;do n|=t&1,t>>>=1,n<<=1;while(--e>0);return n>>>1},c1=t=>{t.bi_valid===16?(zs(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=t.bi_buf&255,t.bi_buf>>=8,t.bi_valid-=8)},h1=(t,e)=>{let n=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length,l,h,u,f,m,p,g=0;for(f=0;f<=Fs;f++)t.bl_count[f]=0;for(n[t.heap[t.heap_max]*2+1]=0,l=t.heap_max+1;l<Xd;l++)h=t.heap[l],f=n[n[h*2+1]*2+1]+1,f>c&&(f=c,g++),n[h*2+1]=f,!(h>i)&&(t.bl_count[f]++,m=0,h>=o&&(m=a[h-o]),p=n[h*2],t.opt_len+=p*(f+m),s&&(t.static_len+=p*(r[h*2+1]+m)));if(g!==0){do{for(f=c-1;t.bl_count[f]===0;)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[c]--,g-=2}while(g>0);for(f=c;f!==0;f--)for(h=t.bl_count[f];h!==0;)u=t.heap[--l],!(u>i)&&(n[u*2+1]!==f&&(t.opt_len+=(f-n[u*2+1])*n[u*2],n[u*2+1]=f),h--)}},tp=(t,e,n)=>{let i=new Array(16),r=0,s,a;for(s=1;s<=Fs;s++)r=r+n[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=t[a*2+1];o!==0&&(t[a*2]=ep(i[o]++,o))}},u1=()=>{let t,e,n,i,r,s=new Array(16);for(n=0,i=0;i<Hd-1;i++)for(dc[i]=n,t=0;t<1<<ic[i];t++)ks[n++]=i;for(ks[n-1]=i,r=0,i=0;i<16;i++)for(no[i]=r,t=0;t<1<<eo[i];t++)Bs[r++]=i;for(r>>=7;i<Nr;i++)for(no[i]=r<<7,t=0;t<1<<eo[i]-7;t++)Bs[256+r++]=i;for(e=0;e<=Fs;e++)s[e]=0;for(t=0;t<=143;)Vn[t*2+1]=8,t++,s[8]++;for(;t<=255;)Vn[t*2+1]=9,t++,s[9]++;for(;t<=279;)Vn[t*2+1]=7,t++,s[7]++;for(;t<=287;)Vn[t*2+1]=8,t++,s[8]++;for(tp(Vn,287,s),t=0;t<Nr;t++)Os[t*2+1]=5,Os[t*2]=ep(t,5);Jd=new jl(Vn,ic,257,Wd,Fs),Kd=new jl(Os,eo,0,Nr,Fs),Qd=new jl(new Array(0),o1,0,uc,a1)},np=t=>{let e;for(e=0;e<Wd;e++)t.dyn_ltree[e*2]=0;for(e=0;e<Nr;e++)t.dyn_dtree[e*2]=0;for(e=0;e<uc;e++)t.bl_tree[e*2]=0;t.dyn_ltree[fc*2]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},ip=t=>{t.bi_valid>8?zs(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},Nd=(t,e,n,i)=>{let r=e*2,s=n*2;return t[r]<t[s]||t[r]===t[s]&&i[e]<=i[n]},tc=(t,e,n)=>{let i=t.heap[n],r=n<<1;for(;r<=t.heap_len&&(r<t.heap_len&&Nd(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!Nd(e,i,t.heap[r],t.depth));)t.heap[n]=t.heap[r],n=r,r<<=1;t.heap[n]=i},Fd=(t,e,n)=>{let i,r,s=0,a,o;if(t.sym_next!==0)do i=t.pending_buf[t.sym_buf+s++]&255,i+=(t.pending_buf[t.sym_buf+s++]&255)<<8,r=t.pending_buf[t.sym_buf+s++],i===0?Cn(t,r,e):(a=ks[r],Cn(t,a+hc+1,e),o=ic[a],o!==0&&(r-=dc[a],zt(t,r,o)),i--,a=jd(i),Cn(t,a,n),o=eo[a],o!==0&&(i-=no[a],zt(t,i,o)));while(s<t.sym_next);Cn(t,fc,e)},rc=(t,e)=>{let n=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems,a,o,c=-1,l;for(t.heap_len=0,t.heap_max=Xd,a=0;a<s;a++)n[a*2]!==0?(t.heap[++t.heap_len]=c=a,t.depth[a]=0):n[a*2+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=c<2?++c:0,n[l*2]=1,t.depth[l]=0,t.opt_len--,r&&(t.static_len-=i[l*2+1]);for(e.max_code=c,a=t.heap_len>>1;a>=1;a--)tc(t,n,a);l=s;do a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],tc(t,n,1),o=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=o,n[l*2]=n[a*2]+n[o*2],t.depth[l]=(t.depth[a]>=t.depth[o]?t.depth[a]:t.depth[o])+1,n[a*2+1]=n[o*2+1]=l,t.heap[1]=l++,tc(t,n,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],h1(t,e),tp(n,c,t.bl_count)},Od=(t,e,n)=>{let i,r=-1,s,a=e[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(n+1)*2+1]=65535,i=0;i<=n;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?t.bl_tree[s*2]+=o:s!==0?(s!==r&&t.bl_tree[s*2]++,t.bl_tree[Yd*2]++):o<=10?t.bl_tree[Zd*2]++:t.bl_tree[qd*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},Bd=(t,e,n)=>{let i,r=-1,s,a=e[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=n;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do Cn(t,s,t.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Cn(t,s,t.bl_tree),o--),Cn(t,Yd,t.bl_tree),zt(t,o-3,2)):o<=10?(Cn(t,Zd,t.bl_tree),zt(t,o-3,3)):(Cn(t,qd,t.bl_tree),zt(t,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},f1=t=>{let e;for(Od(t,t.dyn_ltree,t.l_desc.max_code),Od(t,t.dyn_dtree,t.d_desc.max_code),rc(t,t.bl_desc),e=uc-1;e>=3&&t.bl_tree[$d[e]*2+1]===0;e--);return t.opt_len+=3*(e+1)+5+5+4,e},d1=(t,e,n,i)=>{let r;for(zt(t,e-257,5),zt(t,n-1,5),zt(t,i-4,4),r=0;r<i;r++)zt(t,t.bl_tree[$d[r]*2+1],3);Bd(t,t.dyn_ltree,e-1),Bd(t,t.dyn_dtree,n-1)},p1=t=>{let e=4093624447,n;for(n=0;n<=31;n++,e>>>=1)if(e&1&&t.dyn_ltree[n*2]!==0)return Ud;if(t.dyn_ltree[18]!==0||t.dyn_ltree[20]!==0||t.dyn_ltree[26]!==0)return Dd;for(n=32;n<hc;n++)if(t.dyn_ltree[n*2]!==0)return Dd;return Ud},kd=!1,m1=t=>{kd||(u1(),kd=!0),t.l_desc=new ec(t.dyn_ltree,Jd),t.d_desc=new ec(t.dyn_dtree,Kd),t.bl_desc=new ec(t.bl_tree,Qd),t.bi_buf=0,t.bi_valid=0,np(t)},io=(t,e,n,i)=>{zt(t,(r1<<1)+(i?1:0),3),ip(t),zs(t,n),zs(t,~n),n&&t.pending_buf.set(t.window.subarray(e,e+n),t.pending),t.pending+=n},g1=t=>{zt(t,Vd<<1,3),Cn(t,fc,Vn),c1(t)},_1=(t,e,n,i)=>{let r,s,a=0;t.level>0?(t.strm.data_type===i1&&(t.strm.data_type=p1(t)),rc(t,t.l_desc),rc(t,t.d_desc),a=f1(t),r=t.opt_len+3+7>>>3,s=t.static_len+3+7>>>3,(s<=r||t.strategy===Ld)&&(r=s)):r=s=n+5,n+4<=r&&e!==-1?io(t,e,n,i):t.strategy===Ld||s===r?(zt(t,(Vd<<1)+(i?1:0),3),Fd(t,Vn,Os)):(zt(t,(s1<<1)+(i?1:0),3),d1(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),Fd(t,t.dyn_ltree,t.dyn_dtree)),np(t),i&&ip(t)},gi=(t,e,n)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=n,e===0?t.dyn_ltree[n*2]++:(t.matches++,e--,t.dyn_ltree[(ks[n]+hc+1)*2]++,t.dyn_dtree[jd(e)*2]++),t.sym_next===t.sym_end),rp=(t,e,n,i)=>{let r=t&65535|0,s=t>>>16&65535|0,a=0;for(;n!==0;){a=n>2e3?2e3:n,n-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0},x1=()=>{let t,e=[];for(var n=0;n<256;n++){t=n;for(var i=0;i<8;i++)t=t&1?3988292384^t>>>1:t>>>1;e[n]=t}return e},v1=new Uint32Array(x1()),pi=(t,e,n,i)=>{let r=v1,s=i+n;t^=-1;for(let a=i;a<s;a++)t=t>>>8^r[(t^e[a])&255];return t^-1},to={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var y1=9;var w1=573,et=3,Zi=258,Rn=262,S1=32,Fr=42,pc=57,sc=69,ac=73,oc=91,lc=103,qi=113,Ds=666,Dt=1,kr=2,Ji=3,zr=4,b1=3,$i=(t,e)=>(t.msg=to[e],e),zd=t=>t*2-(t>4?9:0),mi=t=>{let e=t.length;for(;--e>=0;)t[e]=0},M1=t=>{let e,n,i,r=t.w_size;e=t.hash_size,i=e;do n=t.head[--i],t.head[i]=n>=r?n-r:0;while(--e);e=r,i=e;do n=t.prev[--i],t.prev[i]=n>=r?n-r:0;while(--e)},mc=(t,e,n)=>(e<<t.hash_shift^n)&t.hash_mask,Ki=(t,e)=>{let n;if(t.legacy_hash)n=t.ins_h=mc(t,t.ins_h,t.window[e+et-1]);else{let r=t.window,s=r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24;n=t.ins_h=Math.imul(s,66521)+66521>>>16&t.hash_mask}let i=t.prev[e&t.w_mask]=t.head[n];return t.head[n]=e,i},Wt=t=>{let e=t.state,n=e.pending;n>t.avail_out&&(n=t.avail_out),n!==0&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+n),t.next_out),t.next_out+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,e.pending===0&&(e.pending_out=0))},Xt=(t,e)=>{_1(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,Wt(t.strm)},je=(t,e)=>{t.pending_buf[t.pending++]=e},Us=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=e&255},cc=(t,e,n,i)=>{let r=t.avail_in;return r>i&&(r=i),r===0?0:(t.avail_in-=r,e.set(t.input.subarray(t.next_in,t.next_in+r),n),t.state.wrap===1?t.adler=rp(t.adler,e,r,n):t.state.wrap===2&&(t.adler=pi(t.adler,e,r,n)),t.next_in+=r,t.total_in+=r,r)},sp=(t,e)=>{let n=t.max_chain_length,i=t.strstart,r,s,a=t.prev_length,o=t.nice_match,c=t.strstart>t.w_size-Rn?t.strstart-(t.w_size-Rn):0,l=t.window,h=t.w_mask,u=t.prev,f=t.strstart+Zi,m=l[i+a-1],p=l[i+a];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do if(r=e,!(l[r+a]!==p||l[r+a-1]!==m||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<f);if(s=Zi-(f-i),i=f-Zi,s>a){if(t.match_start=e,a=s,s>=o)break;m=l[i+a-1],p=l[i+a]}}while((e=u[e&h])>c&&--n!==0);return a<=t.lookahead?a:t.lookahead},Or=t=>{let e=t.w_size,n,i,r;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-Rn)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),M1(t),i+=e),t.strm.avail_in===0)break;if(n=cc(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=n,t.legacy_hash){if(t.lookahead+t.insert>=et)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=mc(t,t.ins_h,t.window[r+1]);t.insert&&(Ki(t,r),r++,t.insert--,!(t.lookahead+t.insert<et)););}else if(t.lookahead+t.insert>et)for(r=t.strstart-t.insert;t.insert&&(Ki(t,r),r++,t.insert--,!(t.lookahead+t.insert<=et)););}while(t.lookahead<Rn&&t.strm.avail_in!==0)},ap=(t,e)=>{let n=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,i,r,s,a=0,o=t.strm.avail_in;do{if(i=65535,s=t.bi_valid+42>>3,t.strm.avail_out<s||(s=t.strm.avail_out-s,r=t.strstart-t.block_start,i>r+t.strm.avail_in&&(i=r+t.strm.avail_in),i>s&&(i=s),i<n&&(i===0&&e!==4||e===0||i!==r+t.strm.avail_in)))break;a=e===4&&i===r+t.strm.avail_in?1:0,io(t,0,0,a),t.pending_buf[t.pending-4]=i,t.pending_buf[t.pending-3]=i>>8,t.pending_buf[t.pending-2]=~i,t.pending_buf[t.pending-1]=~i>>8,Wt(t.strm),r&&(r>i&&(r=i),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+r),t.strm.next_out),t.strm.next_out+=r,t.strm.avail_out-=r,t.strm.total_out+=r,t.block_start+=r,i-=r),i&&(cc(t.strm,t.strm.output,t.strm.next_out,i),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i)}while(a===0);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),a?zr:e!==0&&e!==4&&t.strm.avail_in===0&&t.strstart===t.block_start?kr:(s=t.window_size-t.strstart,t.strm.avail_in>s&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,s+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),s>t.strm.avail_in&&(s=t.strm.avail_in),s&&(cc(t.strm,t.window,t.strstart,s),t.strstart+=s,t.insert+=s>t.w_size-t.insert?t.w_size-t.insert:s),t.high_water<t.strstart&&(t.high_water=t.strstart),s=t.bi_valid+42>>3,s=t.pending_buf_size-s>65535?65535:t.pending_buf_size-s,n=s>t.w_size?t.w_size:s,r=t.strstart-t.block_start,(r>=n||(r||e===4)&&e!==0&&t.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===4&&t.strm.avail_in===0&&i===r?1:0,io(t,t.block_start,i,a),t.block_start+=i,Wt(t.strm)),a?Ji:Dt)},nc=(t,e)=>{let n,i;for(;;){if(t.lookahead<Rn){if(Or(t),t.lookahead<Rn&&e===0)return Dt;if(t.lookahead===0)break}if(n=0,t.lookahead>=et&&(n=Ki(t,t.strstart)),n!==0&&t.strstart-n<=t.w_size-Rn&&(t.match_length=sp(t,n)),t.match_length>=et)if(i=gi(t,t.strstart-t.match_start,t.match_length-et),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=et){t.match_length--;do t.strstart++,n=Ki(t,t.strstart);while(--t.match_length!==0);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.legacy_hash&&(t.ins_h=t.window[t.strstart],t.ins_h=mc(t,t.ins_h,t.window[t.strstart+1]));else i=gi(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(Xt(t,!1),t.strm.avail_out===0))return Dt}return t.insert=t.strstart<et-1?t.strstart:et-1,e===4?(Xt(t,!0),t.strm.avail_out===0?Ji:zr):t.sym_next&&(Xt(t,!1),t.strm.avail_out===0)?Dt:kr},Dr=(t,e)=>{let n,i,r;for(;;){if(t.lookahead<Rn){if(Or(t),t.lookahead<Rn&&e===0)return Dt;if(t.lookahead===0)break}if(n=0,t.lookahead>=et&&(n=Ki(t,t.strstart)),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=et-1,n!==0&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-Rn&&(t.match_length=sp(t,n),t.match_length<=5&&(t.strategy===1||t.match_length===et&&t.strstart-t.match_start>4096)&&(t.match_length=et-1)),t.prev_length>=et&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-et,i=gi(t,t.strstart-1-t.prev_match,t.prev_length-et),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=r&&(n=Ki(t,t.strstart));while(--t.prev_length!==0);if(t.match_available=0,t.match_length=et-1,t.strstart++,i&&(Xt(t,!1),t.strm.avail_out===0))return Dt}else if(t.match_available){if(i=gi(t,0,t.window[t.strstart-1]),i&&Xt(t,!1),t.strstart++,t.lookahead--,t.strm.avail_out===0)return Dt}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=gi(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<et-1?t.strstart:et-1,e===4?(Xt(t,!0),t.strm.avail_out===0?Ji:zr):t.sym_next&&(Xt(t,!1),t.strm.avail_out===0)?Dt:kr},E1=(t,e)=>{let n,i,r,s,a=t.window;for(;;){if(t.lookahead<=Zi){if(Or(t),t.lookahead<=Zi&&e===0)return Dt;if(t.lookahead===0)break}if(t.match_length=0,t.lookahead>=et&&t.strstart>0&&(r=t.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=t.strstart+Zi;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);t.match_length=Zi-(s-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=et?(n=gi(t,1,t.match_length-et),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=gi(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(Xt(t,!1),t.strm.avail_out===0))return Dt}return t.insert=0,e===4?(Xt(t,!0),t.strm.avail_out===0?Ji:zr):t.sym_next&&(Xt(t,!1),t.strm.avail_out===0)?Dt:kr},A1=(t,e)=>{let n;for(;;){if(t.lookahead===0&&(Or(t),t.lookahead===0)){if(e===0)return Dt;break}if(t.match_length=0,n=gi(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(Xt(t,!1),t.strm.avail_out===0))return Dt}return t.insert=0,e===4?(Xt(t,!0),t.strm.avail_out===0?Ji:zr):t.sym_next&&(Xt(t,!1),t.strm.avail_out===0)?Dt:kr},Tn=class{constructor(t,e,n,i,r){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=i,this.func=r}},Ns=[new Tn(0,0,0,0,ap),new Tn(4,4,8,4,nc),new Tn(4,5,16,8,nc),new Tn(4,6,32,32,nc),new Tn(4,4,16,16,Dr),new Tn(8,16,32,32,Dr),new Tn(8,16,128,128,Dr),new Tn(8,32,128,256,Dr),new Tn(32,128,258,1024,Dr),new Tn(32,258,258,4096,Dr)],T1=t=>{t.window_size=2*t.w_size,mi(t.head),t.max_lazy_match=Ns[t.level].max_lazy,t.good_match=Ns[t.level].good_length,t.nice_match=Ns[t.level].nice_length,t.max_chain_length=Ns[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=et-1,t.match_available=0,t.ins_h=0},C1=class{constructor(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(w1*2),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),mi(this.dyn_ltree),mi(this.dyn_dtree),mi(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),mi(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),mi(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}},ro=t=>{if(!t)return 1;let e=t.state;return!e||e.strm!==t||e.status!==Fr&&e.status!==pc&&e.status!==sc&&e.status!==ac&&e.status!==oc&&e.status!==lc&&e.status!==qi&&e.status!==Ds?1:0},R1=t=>{if(ro(t))return $i(t,-2);t.total_in=t.total_out=0,t.data_type=2;let e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?pc:e.wrap?Fr:qi,t.adler=e.wrap===2?0:1,e.last_flush=-2,m1(e),0},I1=t=>{let e=R1(t);return e===0&&T1(t.state),e};var P1=(t,e,n,i,r,s,a)=>{if(!t)return-2;let o=1;if(e===-1&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),r<1||r>y1||n!==8||i<8||i>15||e<0||e>9||s<0||s>4||i===8&&o!==1)return $i(t,-2);i===8&&(i=9);let c=new C1;return t.state=c,c.strm=t,c.status=Fr,c.wrap=o,c.gzhead=null,c.w_bits=i,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.legacy_hash=a?1:0,c.hash_bits=r+7,!c.legacy_hash&&c.hash_bits<15&&(c.hash_bits=15),c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+et-1)/et),c.window=new Uint8Array(c.w_size*2),c.head=new Uint16Array(c.hash_size),c.prev=new Uint16Array(c.w_size),c.lit_bufsize=1<<r+6,c.pending_buf_size=c.lit_bufsize*4,c.pending_buf=new Uint8Array(c.pending_buf_size),c.sym_buf=c.lit_bufsize,c.sym_end=(c.lit_bufsize-1)*3,c.level=e,c.strategy=s,c.method=n,I1(t)};var L1=(t,e)=>{if(ro(t)||e>5||e<0)return t?$i(t,-2):-2;let n=t.state;if(!t.output||t.avail_in!==0&&!t.input||n.status===Ds&&e!==4)return $i(t,t.avail_out===0?-5:-2);let i=n.last_flush;if(n.last_flush=e,n.pending!==0){if(Wt(t),t.avail_out===0)return n.last_flush=-1,0}else if(t.avail_in===0&&zd(e)<=zd(i)&&e!==4)return $i(t,-5);if(n.status===Ds&&t.avail_in!==0)return $i(t,-5);if(n.status===Fr&&n.wrap===0&&(n.status=qi),n.status===Fr){let r=8+(n.w_bits-8<<4)<<8,s=-1;if(n.strategy>=2||n.level<2?s=0:n.level<6?s=1:n.level===6?s=2:s=3,r|=s<<6,n.strstart!==0&&(r|=S1),r+=31-r%31,Us(n,r),n.strstart!==0&&(Us(n,t.adler>>>16),Us(n,t.adler&65535)),t.adler=1,n.status=qi,Wt(t),n.pending!==0)return n.last_flush=-1,0}if(n.status===pc){if(t.adler=0,je(n,31),je(n,139),je(n,8),n.gzhead)je(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),je(n,n.gzhead.time&255),je(n,n.gzhead.time>>8&255),je(n,n.gzhead.time>>16&255),je(n,n.gzhead.time>>24&255),je(n,n.level===9?2:n.strategy>=2||n.level<2?4:0),je(n,n.gzhead.os&255),n.gzhead.extra&&n.gzhead.extra.length&&(je(n,n.gzhead.extra.length&255),je(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=pi(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=sc;else if(je(n,0),je(n,0),je(n,0),je(n,0),je(n,0),je(n,n.level===9?2:n.strategy>=2||n.level<2?4:0),je(n,b1),n.status=qi,Wt(t),n.pending!==0)return n.last_flush=-1,0}if(n.status===sc){if(n.gzhead.extra){let r=n.pending,s=(n.gzhead.extra.length&65535)-n.gzindex;for(;n.pending+s>n.pending_buf_size;){let o=n.pending_buf_size-n.pending;if(n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex,n.gzindex+o),n.pending),n.pending=n.pending_buf_size,n.gzhead.hcrc&&n.pending>r&&(t.adler=pi(t.adler,n.pending_buf,n.pending-r,r)),n.gzindex+=o,Wt(t),n.pending!==0)return n.last_flush=-1,0;r=0,s-=o}let a=new Uint8Array(n.gzhead.extra);n.pending_buf.set(a.subarray(n.gzindex,n.gzindex+s),n.pending),n.pending+=s,n.gzhead.hcrc&&n.pending>r&&(t.adler=pi(t.adler,n.pending_buf,n.pending-r,r)),n.gzindex=0}n.status=ac}if(n.status===ac){if(n.gzhead.name){let r=n.pending,s;do{if(n.pending===n.pending_buf_size){if(n.gzhead.hcrc&&n.pending>r&&(t.adler=pi(t.adler,n.pending_buf,n.pending-r,r)),Wt(t),n.pending!==0)return n.last_flush=-1,0;r=0}n.gzindex<n.gzhead.name.length?s=n.gzhead.name.charCodeAt(n.gzindex++)&255:s=0,je(n,s)}while(s!==0);n.gzhead.hcrc&&n.pending>r&&(t.adler=pi(t.adler,n.pending_buf,n.pending-r,r)),n.gzindex=0}n.status=oc}if(n.status===oc){if(n.gzhead.comment){let r=n.pending,s;do{if(n.pending===n.pending_buf_size){if(n.gzhead.hcrc&&n.pending>r&&(t.adler=pi(t.adler,n.pending_buf,n.pending-r,r)),Wt(t),n.pending!==0)return n.last_flush=-1,0;r=0}n.gzindex<n.gzhead.comment.length?s=n.gzhead.comment.charCodeAt(n.gzindex++)&255:s=0,je(n,s)}while(s!==0);n.gzhead.hcrc&&n.pending>r&&(t.adler=pi(t.adler,n.pending_buf,n.pending-r,r))}n.status=lc}if(n.status===lc){if(n.gzhead.hcrc){if(n.pending+2>n.pending_buf_size&&(Wt(t),n.pending!==0))return n.last_flush=-1,0;je(n,t.adler&255),je(n,t.adler>>8&255),t.adler=0}if(n.status=qi,Wt(t),n.pending!==0)return n.last_flush=-1,0}if(t.avail_in!==0||n.lookahead!==0||e!==0&&n.status!==Ds){let r=n.level===0?ap(n,e):n.strategy===2?A1(n,e):n.strategy===3?E1(n,e):Ns[n.level].func(n,e);if((r===Ji||r===zr)&&(n.status=Ds),r===Dt||r===Ji)return t.avail_out===0&&(n.last_flush=-1),0;if(r===kr&&(e===1?g1(n):e!==5&&(io(n,0,0,!1),e===3&&(mi(n.head),n.lookahead===0&&(n.strstart=0,n.block_start=0,n.insert=0))),Wt(t),t.avail_out===0))return n.last_flush=-1,0}return e!==4?0:n.wrap<=0?1:(n.wrap===2?(je(n,t.adler&255),je(n,t.adler>>8&255),je(n,t.adler>>16&255),je(n,t.adler>>24&255),je(n,t.total_in&255),je(n,t.total_in>>8&255),je(n,t.total_in>>16&255),je(n,t.total_in>>24&255)):(Us(n,t.adler>>>16),Us(n,t.adler&65535)),Wt(t),n.wrap>0&&(n.wrap=-n.wrap),n.pending!==0?0:1)},U1=t=>{if(ro(t))return-2;let e=t.state.status;return t.state=null,e===qi?$i(t,-3):0},D1=(t,e)=>{let n=e.length;if(ro(t))return-2;let i=t.state,r=i.wrap;if(r===2||r===1&&i.status!==Fr||i.lookahead)return-2;if(r===1&&(t.adler=rp(t.adler,e,n,0)),i.wrap=0,n>=i.w_size){r===0&&(mi(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(n-i.w_size,n),0),e=c,n=i.w_size}let s=t.avail_in,a=t.next_in,o=t.input;for(t.avail_in=n,t.next_in=0,t.input=e,Or(i);i.lookahead>=et;){let c=i.strstart,l=i.lookahead-(et-1);do Ki(i,c),c++;while(--l);i.strstart=c,i.lookahead=et-1,Or(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=et-1,i.match_available=0,t.next_in=a,t.input=o,t.avail_in=s,i.wrap=r,0};var cA=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),hA=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),uA=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),fA=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var N1=class{constructor(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}};var F1=t=>{let e=new Uint8Array(t.reduce((i,r)=>i+r.length,0)),n=0;for(let i of t)e.set(i,n),n+=i.length;return e},Gd=Object.prototype.toString,O1={level:-1,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,raw:!1,gzip:!1,legacyHash:!1,dictionary:new Uint8Array(0)},B1=class{options;err;msg;ended;started;chunks;strm;result;constructor(t={}){this.options=Object.assign({},O1,t);let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.started=!1,this.chunks=[],this.result=new Uint8Array(0),this.strm=new N1,this.strm.avail_out=0;let n=P1(this.strm,e.level,8,e.windowBits,e.memLevel,e.strategy,e.legacyHash);if(n!==0)throw new Error(to[n]);Gd.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary));let i=e.dictionary;if(i.length){if(e.gzip)throw new Error("dictionary is not supported with gzip");if(n=D1(this.strm,i),n!==0)throw new Error(to[n])}}push(t,e=!1){let n=this.strm,i=this.options.chunkSize,r,s;if(this.ended)return!1;for(typeof e=="number"?s=e:s=e===!0?4:0,typeof t=="string"?n.input=new TextEncoder().encode(t):Gd.call(t)==="[object ArrayBuffer]"?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length,this.started||(this.started=!0,this.onStart(n));;){if(n.avail_out===0&&(n.output=new Uint8Array(i),n.next_out=0,n.avail_out=i),(s===2||s===3)&&n.avail_out<=6){this.onData(n.output.subarray(0,n.next_out)),n.avail_out=0;continue}if(r=L1(n,s),r===-2)break;if(r===1){n.next_out>0&&this.onData(n.output.subarray(0,n.next_out)),r=U1(this.strm);break}if(n.avail_out===0){this.onData(n.output);continue}if(s>0&&n.next_out>0){this.onData(n.output.subarray(0,n.next_out)),n.avail_out=0;continue}if(n.avail_in===0)return!0}return this.err=r,this.msg=n.msg||to[r],this.ended=!0,this.onEnd(r),r===0}onStart(t){}onData(t){this.chunks.push(t)}onEnd(t){t===0&&(this.result=F1(this.chunks)),this.chunks=[]}};function gc(t,e={}){let n=new B1(e);if(n.push(t,!0),n.err)throw new Error(n.msg);return n.result}var dA={chunkSize:1024*64,windowBits:15,raw:!1,dictionary:new Uint8Array(0)};var wp=1;var Sp=3;var Ec=0,Ac=1,Tc=2,Cc=3,Rc=4,Ic=5,Pc=6,Lc=7,bp=0,Mp=1,Ep=2;var qc=1,$c=2,Jc=3,Kc=4,Qc=5,jc=6,eh=7;var th=300,Ap=301,nh=302;var Tp=306,Uc=1e3,Qi=1001,Dc=1002,Nc=1003;var vi=1006;var ih=1008;var Cp=1009;var er=1015,tr=1016;var nn=1023;var Jr=1028;var nr=1030;var Hs=2300,ho=2301,lo=2302,Fc=2303,Oc=2400,Bc=2401,kc=2402;var rh="",tn="srgb",fn="srgb-linear",zc="linear",co="srgb";var Vs=2e3,Gc=2001;function k1(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Vc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}var op={},uo=null;function Rp(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Et(...t){t=Rp(t);let e="THREE."+t.shift();if(uo)uo("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function bt(...t){t=Rp(t);let e="THREE."+t.shift();if(uo)uo("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Yr(...t){let e=t.join(" ");e in op||(op[e]=!0,Et(...t))}var z1={[Ec]:Ac,[Tc]:Pc,[Rc]:Lc,[Cc]:Ic,[Ac]:Ec,[Pc]:Tc,[Lc]:Rc,[Ic]:Cc},Ws=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wA=Math.PI/180,G1=180/Math.PI;function sh(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function He(t,e,n){return Math.max(e,Math.min(n,t))}function V1(t,e){return(t%e+e)%e}function _c(t,e,n){return(1-n)*t+n*e}var lh=class lh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;var un=lh,qn=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=s[a+0],m=s[a+1],p=s[a+2],g=s[a+3];if(u!==g||c!==f||l!==m||h!==p){let S=c*f+l*m+h*p+u*g;S<0&&(f=-f,m=-m,p=-p,g=-g,S=-S);let y=1-o;if(S<.9995){let _=Math.acos(S),v=Math.sin(_);y=Math.sin(y*_)/v,o=Math.sin(o*_)/v,c=c*y+f*o,l=l*y+m*o,h=h*y+p*o,u=u*y+g*o}else{c=c*y+f*o,l=l*y+m*o,h=h*y+p*o,u=u*y+g*o;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[n]=c,e[n+1]=l,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],f=s[a+1],m=s[a+2],p=s[a+3];return e[n]=o*p+h*u+c*m-l*f,e[n+1]=c*p+h*f+l*u-o*m,e[n+2]=l*p+h*m+o*f-c*u,e[n+3]=h*p-o*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),f=c(i/2),m=c(r/2),p=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*m*p,this._y=l*m*u-f*h*p,this._z=l*h*p+f*m*u,this._w=l*h*u-f*m*p;break;case"YXZ":this._x=f*h*u+l*m*p,this._y=l*m*u-f*h*p,this._z=l*h*p-f*m*u,this._w=l*h*u+f*m*p;break;case"ZXY":this._x=f*h*u-l*m*p,this._y=l*m*u+f*h*p,this._z=l*h*p+f*m*u,this._w=l*h*u-f*m*p;break;case"ZYX":this._x=f*h*u-l*m*p,this._y=l*m*u+f*h*p,this._z=l*h*p-f*m*u,this._w=l*h*u+f*m*p;break;case"YZX":this._x=f*h*u+l*m*p,this._y=l*m*u+f*h*p,this._z=l*h*p-f*m*u,this._w=l*h*u-f*m*p;break;case"XZY":this._x=f*h*u-l*m*p,this._y=l*m*u-f*h*p,this._z=l*h*p+f*m*u,this._w=l*h*u+f*m*p;break;default:Et("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],u=n[10],f=i+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,n=Math.sin(n*l)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ch=class ch{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lp.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*n-s*r),u=2*(s*i-a*n);return this.x=n+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;var dt=ch,xc=new dt,lp=new qn,hh=class hh{constructor(e,n,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],m=i[5],p=i[8],g=r[0],S=r[3],y=r[6],_=r[1],v=r[4],T=r[7],x=r[2],C=r[5],M=r[8];return s[0]=a*g+o*_+c*x,s[3]=a*S+o*v+c*C,s[6]=a*y+o*T+c*M,s[1]=l*g+h*_+u*x,s[4]=l*S+h*v+u*C,s[7]=l*y+h*T+u*M,s[2]=f*g+m*_+p*x,s[5]=f*S+m*v+p*C,s[8]=f*y+m*T+p*M,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return n*a*h-n*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*s,m=l*s-a*c,p=n*u+i*f+r*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=u*g,e[1]=(r*l-h*i)*g,e[2]=(o*i-r*a)*g,e[3]=f*g,e[4]=(h*n-r*c)*g,e[5]=(r*s-o*n)*g,e[6]=m*g,e[7]=(i*c-l*n)*g,e[8]=(a*n-i*s)*g,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return Yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vc.makeScale(e,n)),this}rotate(e){return Yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vc.makeRotation(-e)),this}translate(e,n){return Yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;var Be=hh,vc=new Be,cp=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hp=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H1(){let t={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===co&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===co&&(r.r=Zr(r.r),r.g=Zr(r.g),r.b=Zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rh?zc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[fn]:{primaries:e,whitePoint:i,transfer:zc,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:co,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),t}var en=H1();function Yn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Gr,fo=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gr===void 0&&(Gr=Vc("canvas")),Gr.width=e.width,Gr.height=e.height;let r=Gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Vc("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yn(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yn(n[i]/255)*255):n[i]=Yn(n[i]);return{data:n,width:e.width,height:e.height}}else return Et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},W1=0,po=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=sh(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yc(r[a].image)):s.push(yc(r[a]))}else s=yc(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function yc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fo.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Et("Texture: Unable to serialize Texture."),{})}var X1=0,wc=new dt,ji=class t extends Ws{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Qi,r=Qi,s=vi,a=ih,o=nn,c=Cp,l=t.DEFAULT_ANISOTROPY,h=rh){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=sh(),this.name="",this.source=new po(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new un(0,0),this.repeat=new un(1,1),this.center=new un(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Et(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Et(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uc:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uc:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ji.DEFAULT_IMAGE=null;ji.DEFAULT_MAPPING=th;ji.DEFAULT_ANISOTROPY=1;var uh=class uh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],p=c[9],g=c[2],S=c[6],y=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(p-S)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(p+S)<.1&&Math.abs(l+m+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(l+1)/2,T=(m+1)/2,x=(y+1)/2,C=(h+f)/4,M=(u+g)/4,E=(p+S)/4;return v>T&&v>x?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=M/i):T>x?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=C/r,s=E/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=M/s,r=E/s),this.set(i,r,s,n),this}let _=Math.sqrt((S-p)*(S-p)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(S-p)/_,this.y=(u-g)/_,this.z=(f-h)/_,this.w=Math.acos((l+m+y-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this.w=He(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this.w=He(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;var Hc=uh;var Ao=class Ao{constructor(e,n,i,r,s,a,o,c,l,h,u,f,m,p,g,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,h,u,f,m,p,g,S)}set(e,n,i,r,s,a,o,c,l,h,u,f,m,p,g,S){let y=this.elements;return y[0]=e,y[4]=n,y[8]=i,y[12]=r,y[1]=s,y[5]=a,y[9]=o,y[13]=c,y[2]=l,y[6]=h,y[10]=u,y[14]=f,y[3]=m,y[7]=p,y[11]=g,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ao().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=a*h,m=a*u,p=o*h,g=o*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=m+p*l,n[5]=f-g*l,n[9]=-o*c,n[2]=g-f*l,n[6]=p+m*l,n[10]=a*c}else if(e.order==="YXZ"){let f=c*h,m=c*u,p=l*h,g=l*u;n[0]=f+g*o,n[4]=p*o-m,n[8]=a*l,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=m*o-p,n[6]=g+f*o,n[10]=a*c}else if(e.order==="ZXY"){let f=c*h,m=c*u,p=l*h,g=l*u;n[0]=f-g*o,n[4]=-a*u,n[8]=p+m*o,n[1]=m+p*o,n[5]=a*h,n[9]=g-f*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){let f=a*h,m=a*u,p=o*h,g=o*u;n[0]=c*h,n[4]=p*l-m,n[8]=f*l+g,n[1]=c*u,n[5]=g*l+f,n[9]=m*l-p,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*l,p=o*c,g=o*l;n[0]=c*h,n[4]=g-f*u,n[8]=p*u+m,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=m*u+p,n[10]=f-g*u}else if(e.order==="XZY"){let f=a*c,m=a*l,p=o*c,g=o*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=f*u+g,n[5]=a*h,n[9]=m*u-p,n[2]=p*u-m,n[6]=o*h,n[10]=g*u+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y1,e,Z1)}lookAt(e,n,i){let r=this.elements;return Yt.subVectors(e,n),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),_i.crossVectors(i,Yt),_i.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),_i.crossVectors(i,Yt)),_i.normalize(),so.crossVectors(Yt,_i),r[0]=_i.x,r[4]=so.x,r[8]=Yt.x,r[1]=_i.y,r[5]=so.y,r[9]=Yt.y,r[2]=_i.z,r[6]=so.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],m=i[13],p=i[2],g=i[6],S=i[10],y=i[14],_=i[3],v=i[7],T=i[11],x=i[15],C=r[0],M=r[4],E=r[8],A=r[12],R=r[1],I=r[5],O=r[9],U=r[13],z=r[2],N=r[6],j=r[10],Y=r[14],G=r[3],D=r[7],W=r[11],Z=r[15];return s[0]=a*C+o*R+c*z+l*G,s[4]=a*M+o*I+c*N+l*D,s[8]=a*E+o*O+c*j+l*W,s[12]=a*A+o*U+c*Y+l*Z,s[1]=h*C+u*R+f*z+m*G,s[5]=h*M+u*I+f*N+m*D,s[9]=h*E+u*O+f*j+m*W,s[13]=h*A+u*U+f*Y+m*Z,s[2]=p*C+g*R+S*z+y*G,s[6]=p*M+g*I+S*N+y*D,s[10]=p*E+g*O+S*j+y*W,s[14]=p*A+g*U+S*Y+y*Z,s[3]=_*C+v*R+T*z+x*G,s[7]=_*M+v*I+T*N+x*D,s[11]=_*E+v*O+T*j+x*W,s[15]=_*A+v*U+T*Y+x*Z,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],p=e[3],g=e[7],S=e[11],y=e[15],_=c*m-l*f,v=o*m-l*u,T=o*f-c*u,x=a*m-l*h,C=a*f-c*h,M=a*u-o*h;return n*(g*_-S*v+y*T)-i*(p*_-S*x+y*C)+r*(p*v-g*x+y*M)-s*(p*T-g*C+S*M)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return n*(a*h-o*l)-i*(s*h-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],p=e[12],g=e[13],S=e[14],y=e[15],_=n*o-i*a,v=n*c-r*a,T=n*l-s*a,x=i*c-r*o,C=i*l-s*o,M=r*l-s*c,E=h*g-u*p,A=h*S-f*p,R=h*y-m*p,I=u*S-f*g,O=u*y-m*g,U=f*y-m*S,z=_*U-v*O+T*I+x*R-C*A+M*E;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/z;return e[0]=(o*U-c*O+l*I)*N,e[1]=(r*O-i*U-s*I)*N,e[2]=(g*M-S*C+y*x)*N,e[3]=(f*C-u*M-m*x)*N,e[4]=(c*R-a*U-l*A)*N,e[5]=(n*U-r*R+s*A)*N,e[6]=(S*T-p*M-y*v)*N,e[7]=(h*M-f*T+m*v)*N,e[8]=(a*O-o*R+l*E)*N,e[9]=(i*R-n*O-s*E)*N,e[10]=(p*C-g*T+y*_)*N,e[11]=(u*T-h*C-m*_)*N,e[12]=(o*A-a*I-c*E)*N,e[13]=(n*I-i*A+r*E)*N,e[14]=(g*v-p*x-S*_)*N,e[15]=(h*x-u*v+f*_)*N,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,h=a+a,u=o+o,f=s*l,m=s*h,p=s*u,g=a*h,S=a*u,y=o*u,_=c*l,v=c*h,T=c*u,x=i.x,C=i.y,M=i.z;return r[0]=(1-(g+y))*x,r[1]=(m+T)*x,r[2]=(p-v)*x,r[3]=0,r[4]=(m-T)*C,r[5]=(1-(f+y))*C,r[6]=(S+_)*C,r[7]=0,r[8]=(p+v)*M,r[9]=(S-_)*M,r[10]=(1-(f+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Vr.set(r[0],r[1],r[2]).length(),o=Vr.set(r[4],r[5],r[6]).length(),c=Vr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),hn.copy(this);let l=1/a,h=1/o,u=1/c;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,n.setFromRotationMatrix(hn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=Vs,c=!1){let l=this.elements,h=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r),p,g;if(c)p=s/(a-s),g=a*s/(a-s);else if(o===Vs)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Gc)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Vs,c=!1){let l=this.elements,h=2/(n-e),u=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r),p,g;if(c)p=1/(a-s),g=a/(a-s);else if(o===Vs)p=-2/(a-s),g=-(a+s)/(a-s);else if(o===Gc)p=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ao.prototype.isMatrix4=!0;var Zn=Ao,Vr=new dt,hn=new Zn,Y1=new dt(0,0,0),Z1=new dt(1,1,1),_i=new dt,so=new dt,Yt=new dt,up=new Zn,fp=new qn,Xs=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Et("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fp.setFromEuler(this),this.setFromQuaternion(fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xs.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},q1=0,dp=new dt,Hr=new qn,Hn=new Zn,ao=new dt,Gs=new dt,$1=new dt,J1=new qn,pp=new dt(1,0,0),mp=new dt(0,1,0),gp=new dt(0,0,1),_p={type:"added"},K1={type:"removed"},Wr={type:"childadded",child:null},Sc={type:"childremoved",child:null},qr=class t extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=sh(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new dt,n=new Xs,i=new qn,r=new dt(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zn},normalMatrix:{value:new Be}}),this.matrix=new Zn,this.matrixWorld=new Zn,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,n){return dp.copy(e).applyQuaternion(this.quaternion),this.position.add(dp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ao.copy(e):ao.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Gs,ao,this.up):Hn.lookAt(ao,Gs,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(Hn),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_p),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(K1),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_p),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,$1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,J1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qr.DEFAULT_UP=new dt(0,1,0);qr.DEFAULT_MATRIX_AUTO_UPDATE=!0;qr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function bc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var At=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=en.workingColorSpace){return this.r=e,this.g=n,this.b=i,en.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=en.workingColorSpace){if(e=V1(e,1),n=He(n,0,1),i=He(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=bc(a,s,e+1/3),this.g=bc(a,s,e),this.b=bc(a,s,e-1/3)}return en.colorSpaceToWorking(this,r),this}setStyle(e,n=tn){function i(s){s!==void 0&&parseFloat(s)<1&&Et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=tn){let i=Ip[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return en.workingToColorSpace(Pt.copy(this),e),Math.round(He(Pt.r*255,0,255))*65536+Math.round(He(Pt.g*255,0,255))*256+Math.round(He(Pt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=en.workingColorSpace){en.workingToColorSpace(Pt.copy(this),n);let i=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,n=en.workingColorSpace){return en.workingToColorSpace(Pt.copy(this),n),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=tn){en.workingToColorSpace(Pt.copy(this),e);let n=Pt.r,i=Pt.g,r=Pt.b;return e!==tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+n,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xi),e.getHSL(oo);let i=_c(xi.h,oo.h,n),r=_c(xi.s,oo.s,n),s=_c(xi.l,oo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new At;At.NAMES=Ip;var Xn=Q1();function Q1(){let t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function j1(t){Math.abs(t)>65504&&Et("DataUtils.toHalfFloat(): Value out of range."),t=He(t,-65504,65504),Xn.floatView[0]=t;let e=Xn.uint32View[0],n=e>>23&511;return Xn.baseTable[n]+((e&8388607)>>Xn.shiftTable[n])}function ex(t){let e=t>>10;return Xn.uint32View[0]=Xn.mantissaTable[Xn.offsetTable[e]+(t&1023)]+Xn.exponentTable[e],Xn.floatView[0]}var dn=class{static toHalfFloat(e){return j1(e)}static fromHalfFloat(e){return ex(e)}};var Ys=class extends ji{constructor(e=null,n=1,i=1,r,s,a,o,c,l=Nc,h=Nc,u,f){super(null,a,o,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};function Pp(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];if(xp(r))r.isRenderTargetTexture?(Et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(xp(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Nt(t){let e={};for(let n=0;n<t.length;n++){let i=Pp(t[n]);for(let r in i)e[r]=i[r]}return e}function xp(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Xr(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Mc(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var yi=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=n[++i],e<r)break t}a=n.length;break n}if(!(e>=s)){let o=n[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=n[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)n[a]=i[s+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},go=class extends yi{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bc:s=e,o=2*n-i;break;case kc:s=r.length-2,o=n+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Bc:a=e,c=2*i-n;break;case kc:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=n}let l=(i-n)*.5,h=this.valueSize;this._weightPrev=l/(n-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,p=(i-n)/(r-n),g=p*p,S=g*p,y=-f*S+2*f*g-f*p,_=(1+f)*S+(-1.5-2*f)*g+(-.5+f)*p+1,v=(-1-m)*S+(1.5+m)*g+.5*p,T=m*S-m*g;for(let x=0;x!==o;++x)s[x]=y*a[h+x]+_*a[l+x]+v*a[c+x]+T*a[u+x];return s}},_o=class extends yi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-n)/(r-n),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}},xo=class extends yi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},vo=class extends yi{interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-n)/(r-n),g=1-p;for(let S=0;S!==o;++S)s[S]=a[l+S]*g+a[c+S]*p;return s}let f=o*2,m=e-1;for(let p=0;p!==o;++p){let g=a[l+p],S=a[c+p],y=m*f+p*2,_=u[y],v=u[y+1],T=e*f+p*2,x=h[T],C=h[T+1],M=nx(i,n,_,x,r);s[p]=Lp(M,g,v,C,S)}return s}};function Lp(t,e,n,i,r){let s=1-t;return s*s*s*e+3*s*s*t*n+3*s*t*t*i+t*t*t*r}function tx(t,e,n,i,r){let s=1-t;return 3*s*s*(n-e)+6*s*t*(i-n)+3*t*t*(r-i)}function nx(t,e,n,i,r){let s=(t-e)/(r-e);for(let a=0;a<8;a++){let o=Lp(s,e,n,i,r)-t;if(Math.abs(o)<1e-10)break;let c=tx(s,e,n,i,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Zt=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xr(n,this.TimeBufferType),this.values=Xr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Xr(e.times,Array),values:Xr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Mc(e.settings)&&(i.settings={inTangents:Xr(e.settings.inTangents,Array),outTangents:Xr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Hs:n=this.InterpolantFactoryMethodDiscrete;break;case ho:n=this.InterpolantFactoryMethodLinear;break;case lo:n=this.InterpolantFactoryMethodSmooth;break;case Fc:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Et("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return lo;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e;Mc(this.settings)&&(vp(this.settings.inTangents,e),vp(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>n;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(bt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(bt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){bt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){bt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&k1(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){bt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===lo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{let u=o*i,f=u-i,m=u+i;for(let p=0;p!==i;++p){let g=n[u+p];if(g!==n[f+p]||g!==n[m+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let m=0;m!==i;++m)n[f+m]=n[u+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)n[c+l]=n[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,Mc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function vp(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}Zt.prototype.ValueTypeName="";Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=ho;var wi=class extends Zt{constructor(e,n,i){super(e,n,i)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Hs;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends Zt{constructor(e,n,i,r){super(e,n,i,r)}};yo.prototype.ValueTypeName="color";var wo=class extends Zt{constructor(e,n,i,r){super(e,n,i,r)}};wo.prototype.ValueTypeName="number";var So=class extends yi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-n)/(r-n),l=e*o;for(let h=l+o;l!==h;l+=4)qn.slerpFlat(s,0,a,l-o,a,l,c);return s}},Zs=class extends Zt{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends Zt{constructor(e,n,i){super(e,n,i)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Hs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends Zt{constructor(e,n,i,r){super(e,n,i,r)}};bo.prototype.ValueTypeName="vector";var Wc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(yp(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!yp(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function yp(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Mo=class{constructor(e,n,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],p=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Up=new Mo,$r=class{constructor(e){this.manager=e!==void 0?e:Up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$r.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wn={},Xc=class extends Error{constructor(e,n){super(e),this.response=n}},Eo=class extends $r{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Wc.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(Wn[e]!==void 0){Wn[e].push({onLoad:n,onProgress:i,onError:r});return}Wn[e]=[],Wn[e].push({onLoad:n,onProgress:i,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Et("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Wn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=f?parseInt(f):0,p=m!==0,g=0,S=new ReadableStream({start(y){_();function _(){u.read().then(({done:v,value:T})=>{if(v)y.close();else{g+=T.byteLength;let x=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:m});for(let C=0,M=h.length;C<M;C++){let E=h[C];E.onProgress&&E.onProgress(x)}y.enqueue(T),_()}},v=>{y.error(v)})}}});return new Response(S)}else throw new Xc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(p=>m.decode(p))}}}).then(l=>{Wc.add(`file:${e}`,l);let h=Wn[e];delete Wn[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=Wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wn[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var qs=class extends $r{constructor(e){super(e)}load(e,n,i,r){let s=this,a=new Ys,o=new Eo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(h){r!==void 0?r(h):bt(h);return}s._applyTexData(a,l),n&&n(a,l)},i,r),a}createDataTexture(e){let n=new Ys;return this._applyTexData(n,this.parse(e)),n}_applyTexData(e,n){n.image!==void 0?e.image=n.image:n.data!==void 0&&(e.image.width=n.width,e.image.height=n.height,e.image.data=n.data),e.wrapS=n.wrapS!==void 0?n.wrapS:Qi,e.wrapT=n.wrapT!==void 0?n.wrapT:Qi,e.magFilter=n.magFilter!==void 0?n.magFilter:vi,e.minFilter=n.minFilter!==void 0?n.minFilter:vi,e.anisotropy=n.anisotropy!==void 0?n.anisotropy:1,n.colorSpace!==void 0&&(e.colorSpace=n.colorSpace),n.flipY!==void 0&&(e.flipY=n.flipY),n.format!==void 0&&(e.format=n.format),n.type!==void 0&&(e.type=n.type),n.mipmaps!==void 0&&(e.mipmaps=n.mipmaps,e.minFilter=ih),n.mipmapCount===1&&(e.minFilter=vi),n.generateMipmaps!==void 0&&(e.generateMipmaps=n.generateMipmaps),e.needsUpdate=!0}};var ah="\\[\\]\\.:\\/",ix=new RegExp("["+ah+"]","g"),oh="[^"+ah+"]",rx="[^"+ah.replace("\\.","")+"]",sx=/((?:WC+[\/:])*)/.source.replace("WC",oh),ax=/(WCOD+)?/.source.replace("WCOD",rx),ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),cx=new RegExp("^"+sx+ax+ox+lx+"$"),hx=["material","materials","bones","map"],Yc=class{constructor(e,n,i){let r=i||ft.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},ft=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(e){let n=cx.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);hx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===n||o.uuid===n)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Et("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=n.nodeName;bt("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Yc;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SA=new Float32Array(1);var fh=class fh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){let s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};fh.prototype.isMatrix2=!0;var Zc=fh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ex=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,iv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ay=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,My=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ly=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:ux,alphahash_pars_fragment:fx,alphamap_fragment:dx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:gx,aomap_fragment:_x,aomap_pars_fragment:xx,batching_pars_vertex:vx,batching_vertex:yx,begin_vertex:wx,beginnormal_vertex:Sx,bsdfs:bx,iridescence_fragment:Mx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:Ax,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:Rx,color_fragment:Ix,color_pars_fragment:Px,color_pars_vertex:Lx,color_vertex:Ux,common:Dx,cube_uv_reflection_fragment:Nx,defaultnormal_vertex:Fx,displacementmap_pars_vertex:Ox,displacementmap_vertex:Bx,emissivemap_fragment:kx,emissivemap_pars_fragment:zx,colorspace_fragment:Gx,colorspace_pars_fragment:Vx,envmap_fragment:Hx,envmap_common_pars_fragment:Wx,envmap_pars_fragment:Xx,envmap_pars_vertex:Yx,envmap_physical_pars_fragment:iv,envmap_vertex:Zx,fog_vertex:qx,fog_pars_vertex:$x,fog_fragment:Jx,fog_pars_fragment:Kx,gradientmap_pars_fragment:Qx,lightmap_pars_fragment:jx,lights_lambert_fragment:ev,lights_lambert_pars_fragment:tv,lights_pars_begin:nv,lights_toon_fragment:rv,lights_toon_pars_fragment:sv,lights_phong_fragment:av,lights_phong_pars_fragment:ov,lights_physical_fragment:lv,lights_physical_pars_fragment:cv,lights_fragment_begin:hv,lights_fragment_maps:uv,lights_fragment_end:fv,lightprobes_pars_fragment:dv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:gv,logdepthbuf_vertex:_v,map_fragment:xv,map_pars_fragment:vv,map_particle_fragment:yv,map_particle_pars_fragment:wv,metalnessmap_fragment:Sv,metalnessmap_pars_fragment:bv,morphinstance_vertex:Mv,morphcolor_vertex:Ev,morphnormal_vertex:Av,morphtarget_pars_vertex:Tv,morphtarget_vertex:Cv,normal_fragment_begin:Rv,normal_fragment_maps:Iv,normal_pars_fragment:Pv,normal_pars_vertex:Lv,normal_vertex:Uv,normalmap_pars_fragment:Dv,clearcoat_normal_fragment_begin:Nv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Ov,iridescence_pars_fragment:Bv,opaque_fragment:kv,packing:zv,premultiplied_alpha_fragment:Gv,project_vertex:Vv,dithering_fragment:Hv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:Yv,shadowmap_pars_fragment:Zv,shadowmap_pars_vertex:qv,shadowmap_vertex:$v,shadowmask_pars_fragment:Jv,skinbase_vertex:Kv,skinning_pars_vertex:Qv,skinning_vertex:jv,skinnormal_vertex:ey,specularmap_fragment:ty,specularmap_pars_fragment:ny,tonemapping_fragment:iy,tonemapping_pars_fragment:ry,transmission_fragment:sy,transmission_pars_fragment:ay,uv_pars_fragment:oy,uv_pars_vertex:ly,uv_vertex:cy,worldpos_vertex:hy,background_vert:uy,background_frag:fy,backgroundCube_vert:dy,backgroundCube_frag:py,cube_vert:my,cube_frag:gy,depth_vert:_y,depth_frag:xy,distance_vert:vy,distance_frag:yy,equirect_vert:wy,equirect_frag:Sy,linedashed_vert:by,linedashed_frag:My,meshbasic_vert:Ey,meshbasic_frag:Ay,meshlambert_vert:Ty,meshlambert_frag:Cy,meshmatcap_vert:Ry,meshmatcap_frag:Iy,meshnormal_vert:Py,meshnormal_frag:Ly,meshphong_vert:Uy,meshphong_frag:Dy,meshphysical_vert:Ny,meshphysical_frag:Fy,meshtoon_vert:Oy,meshtoon_frag:By,points_vert:ky,points_frag:zy,shadow_vert:Gy,shadow_frag:Vy,sprite_vert:Hy,sprite_frag:Wy},me={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new un(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new dt},probesMax:{value:new dt},probesResolution:{value:new dt}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new un(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Dp={basic:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Nt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Nt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new At(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Nt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Nt([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Nt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Nt([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Nt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Nt([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Nt([me.common,me.displacementmap,{referencePosition:{value:new dt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Nt([me.lights,me.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Dp.physical={uniforms:Nt([Dp.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new un(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new un},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new un},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Xy=new Be;Xy.set(-1,0,0,0,1,0,0,0,1);var JP={[qc]:"LINEAR_TONE_MAPPING",[$c]:"REINHARD_TONE_MAPPING",[Jc]:"CINEON_TONE_MAPPING",[Kc]:"ACES_FILMIC_TONE_MAPPING",[jc]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};var KP=new Float32Array(16),QP=new Float32Array(9),jP=new Float32Array(4);var e4={[qc]:"Linear",[$c]:"Reinhard",[Jc]:"Cineon",[Kc]:"ACESFilmic",[jc]:"AgX",[eh]:"Neutral",[Qc]:"Custom"};var t4={[wp]:"SHADOWMAP_TYPE_PCF",[Sp]:"SHADOWMAP_TYPE_VSM"};var n4={[Ap]:"ENVMAP_TYPE_CUBE",[nh]:"ENVMAP_TYPE_CUBE",[Tp]:"ENVMAP_TYPE_CUBE_UV"};var i4={[nh]:"ENVMAP_MODE_REFRACTION"};var r4={[bp]:"ENVMAP_BLENDING_MULTIPLY",[Mp]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};var Yy=new Be;Yy.set(-1,0,0,0,1,0,0,0,1);var s4=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var rn=Uint8Array,Kr=Uint16Array,Zy=Int32Array,Np=new rn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Fp=new rn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),qy=new rn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Op=function(t,e){for(var n=new Kr(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new Zy(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},Bp=Op(Np,2),kp=Bp.b,$y=Bp.r;kp[28]=258,$y[258]=28;var zp=Op(Fp,0),Jy=zp.b,l4=zp.r,mh=new Kr(32768);for(tt=0;tt<32768;++tt)$n=(tt&43690)>>1|(tt&21845)<<1,$n=($n&52428)>>2|($n&13107)<<2,$n=($n&61680)>>4|($n&3855)<<4,mh[tt]=(($n&65280)>>8|($n&255)<<8)>>1;var $n,tt,$s=(function(t,e,n){for(var i=t.length,r=0,s=new Kr(e);r<i;++r)t[r]&&++s[t[r]-1];var a=new Kr(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(n){o=new Kr(1<<e);var c=15-e;for(r=0;r<i;++r)if(t[r])for(var l=r<<4|t[r],h=e-t[r],u=a[t[r]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[mh[u]>>c]=l}else for(o=new Kr(i),r=0;r<i;++r)t[r]&&(o[r]=mh[a[t[r]-1]++]>>15-t[r]);return o}),Js=new rn(288);for(tt=0;tt<144;++tt)Js[tt]=8;var tt;for(tt=144;tt<256;++tt)Js[tt]=9;var tt;for(tt=256;tt<280;++tt)Js[tt]=7;var tt;for(tt=280;tt<288;++tt)Js[tt]=8;var tt,Gp=new rn(32);for(tt=0;tt<32;++tt)Gp[tt]=5;var tt;var Ky=$s(Js,9,1);var Qy=$s(Gp,5,1),dh=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},pn=function(t,e,n){var i=e/8|0;return(t[i]|t[i+1]<<8)>>(e&7)&n},ph=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},jy=function(t){return(t+7)/8|0},ew=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new rn(t.subarray(e,n))};var tw=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],mn=function(t,e,n){var i=new Error(e||tw[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,mn),!n)throw i;return i},nw=function(t,e,n,i){var r=t.length,s=i?i.length:0;if(!r||e.f&&!e.l)return n||new rn(0);var a=!n,o=a||e.i!=2,c=e.i;a&&(n=new rn(r*3));var l=function(ie){var re=n.length;if(ie>re){var Fe=new rn(Math.max(re*2,ie));Fe.set(n),n=Fe}},h=e.f||0,u=e.p||0,f=e.b||0,m=e.l,p=e.d,g=e.m,S=e.n,y=r*8;do{if(!m){h=pn(t,u,1);var _=pn(t,u+1,3);if(u+=3,_)if(_==1)m=Ky,p=Qy,g=9,S=5;else if(_==2){var C=pn(t,u,31)+257,M=pn(t,u+10,15)+4,E=C+pn(t,u+5,31)+1;u+=14;for(var A=new rn(E),R=new rn(19),I=0;I<M;++I)R[qy[I]]=pn(t,u+I*3,7);u+=M*3;for(var O=dh(R),U=(1<<O)-1,z=$s(R,O,1),I=0;I<E;){var N=z[pn(t,u,U)];u+=N&15;var v=N>>4;if(v<16)A[I++]=v;else{var j=0,Y=0;for(v==16?(Y=3+pn(t,u,3),u+=2,j=A[I-1]):v==17?(Y=3+pn(t,u,7),u+=3):v==18&&(Y=11+pn(t,u,127),u+=7);Y--;)A[I++]=j}}var G=A.subarray(0,C),D=A.subarray(C);g=dh(G),S=dh(D),m=$s(G,g,1),p=$s(D,S,1)}else mn(1);else{var v=jy(u)+4,T=t[v-4]|t[v-3]<<8,x=v+T;if(x>r){c&&mn(0);break}o&&l(f+T),n.set(t.subarray(v,x),f),e.b=f+=T,e.p=u=x*8,e.f=h;continue}if(u>y){c&&mn(0);break}}o&&l(f+131072);for(var W=(1<<g)-1,Z=(1<<S)-1,te=u;;te=u){var j=m[ph(t,u)&W],ne=j>>4;if(u+=j&15,u>y){c&&mn(0);break}if(j||mn(2),ne<256)n[f++]=ne;else if(ne==256){te=u,m=null;break}else{var F=ne-254;if(ne>264){var I=ne-257,Q=Np[I];F=pn(t,u,(1<<Q)-1)+kp[I],u+=Q}var Ce=p[ph(t,u)&Z],V=Ce>>4;Ce||mn(3),u+=Ce&15;var D=Jy[V];if(V>3){var Q=Fp[V];D+=ph(t,u)&(1<<Q)-1,u+=Q}if(u>y){c&&mn(0);break}o&&l(f+131072);var ce=f+F;if(f<D){var ve=s-D,ye=Math.min(D,ce);for(ve+f<0&&mn(3);f<ye;++f)n[f]=i[ve+f]}for(;f<ce;++f)n[f]=n[f-D]}}e.l=m,e.p=te,e.b=f,e.f=h,m&&(h=1,e.m=g,e.d=p,e.n=S)}while(!h);return f!=n.length&&a?ew(n,0,f):n.subarray(0,f)};var iw=new rn(0);var rw=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&mn(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&mn(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function Qr(t,e){return nw(t.subarray(rw(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var sw=typeof TextDecoder<"u"&&new TextDecoder,aw=0;try{sw.decode(iw,{stream:!0}),aw=1}catch{}var To=class extends qs{constructor(e){super(e),this.type=tr,this.outputFormat=nn,this.part=0}parse(e){let A=Math.pow(2.7182818,2.2),R=null;function I(d,w){let b=0;for(let k=0;k<65536;++k)(k==0||d[k>>3]&1<<(k&7))&&(w[b++]=k);let L=b-1;for(;b<65536;)w[b++]=0;return L}function O(d){for(let w=0;w<16384;w++)d[w]={},d[w].len=0,d[w].lit=0,d[w].p=null}let U={l:0,c:0,lc:0};function z(d,w,b,L,k){for(;b<d;)w=w<<8|st(L,k),b+=8;b-=d,U.l=w>>b&(1<<d)-1,U.c=w,U.lc=b}let N=new Array(59);function j(d){for(let b=0;b<=58;++b)N[b]=0;for(let b=0;b<65537;++b)N[d[b]]+=1;let w=0;for(let b=58;b>0;--b){let L=w+N[b]>>1;N[b]=w,w=L}for(let b=0;b<65537;++b){let L=d[b];L>0&&(d[b]=L|N[L]++<<6)}}function Y(d,w,b,L,k,q){let P=w,J=0,X=0;for(;L<=k;L++){if(P.value-w.value>b)return!1;z(6,J,X,d,P);let $=U.l;if(J=U.c,X=U.lc,q[L]=$,$==63){if(P.value-w.value>b)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");z(8,J,X,d,P);let K=U.l+6;if(J=U.c,X=U.lc,L+K>k+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;K--;)q[L++]=0;L--}else if($>=59){let K=$-59+2;if(L+K>k+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;K--;)q[L++]=0;L--}}j(q)}function G(d){return d&63}function D(d){return d>>6}function W(d,w,b,L){for(;w<=b;w++){let k=D(d[w]),q=G(d[w]);if(k>>q)throw new Error("THREE.EXRLoader: Invalid table entry");if(q>14){let P=L[k>>q-14];if(P.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(P.lit++,P.p){let J=P.p;P.p=new Array(P.lit);for(let X=0;X<P.lit-1;++X)P.p[X]=J[X]}else P.p=new Array(1);P.p[P.lit-1]=w}else if(q){let P=0;for(let J=1<<14-q;J>0;J--){let X=L[(k<<14-q)+P];if(X.len||X.p)throw new Error("THREE.EXRLoader: Invalid table entry");X.len=q,X.lit=w,P++}}}return!0}let Z={c:0,lc:0};function te(d,w,b,L){d=d<<8|st(b,L),w+=8,Z.c=d,Z.lc=w}let ne={c:0,lc:0};function F(d,w,b,L,k,q,P,J,X){if(d==w){L<8&&(te(b,L,k,q),b=Z.c,L=Z.lc),L-=8;let $=b>>L;if($=new Uint8Array([$])[0],J.value+$>X)return!1;let K=P[J.value-1];for(;$-- >0;)P[J.value++]=K}else if(J.value<X)P[J.value++]=d;else return!1;ne.c=b,ne.lc=L}function Q(d){return d&65535}function Ce(d){let w=Q(d);return w>32767?w-65536:w}let V={a:0,b:0};function ce(d,w){let b=Ce(d),k=Ce(w),q=b+(k&1)+(k>>1),P=q,J=q-k;V.a=P,V.b=J}function ve(d,w){let b=Q(d),L=Q(w),k=b-(L>>1)&65535,q=L+k-32768&65535;V.a=q,V.b=k}function ye(d,w,b,L,k,q,P){let J=P<16384,X=b>k?k:b,$=1,K,ae;for(;$<=X;)$<<=1;for($>>=1,K=$,$>>=1;$>=1;){ae=0;let ee=ae+q*(k-K),he=q*$,ge=q*K,le=L*$,de=L*K,Te,Ge,Pe,Ye;for(;ae<=ee;ae+=ge){let be=ae,_e=ae+L*(b-K);for(;be<=_e;be+=de){let Ee=be+le,at=be+he,qe=at+le;J?(ce(d[be+w],d[at+w]),Te=V.a,Pe=V.b,ce(d[Ee+w],d[qe+w]),Ge=V.a,Ye=V.b,ce(Te,Ge),d[be+w]=V.a,d[Ee+w]=V.b,ce(Pe,Ye),d[at+w]=V.a,d[qe+w]=V.b):(ve(d[be+w],d[at+w]),Te=V.a,Pe=V.b,ve(d[Ee+w],d[qe+w]),Ge=V.a,Ye=V.b,ve(Te,Ge),d[be+w]=V.a,d[Ee+w]=V.b,ve(Pe,Ye),d[at+w]=V.a,d[qe+w]=V.b)}if(b&$){let Ee=be+he;J?ce(d[be+w],d[Ee+w]):ve(d[be+w],d[Ee+w]),Te=V.a,d[Ee+w]=V.b,d[be+w]=Te}}if(k&$){let be=ae,_e=ae+L*(b-K);for(;be<=_e;be+=de){let Ee=be+le;J?ce(d[be+w],d[Ee+w]):ve(d[be+w],d[Ee+w]),Te=V.a,d[Ee+w]=V.b,d[be+w]=Te}}K=$,$>>=1}return ae}function ie(d,w,b,L,k,q,P,J,X){let $=0,K=0,ae=P,ee=Math.trunc(L.value+(k+7)/8);for(;L.value<ee;)for(te($,K,b,L),$=Z.c,K=Z.lc;K>=14;){let ge=$>>K-14&16383,le=w[ge];if(le.len)K-=le.len,F(le.lit,q,$,K,b,L,J,X,ae),$=ne.c,K=ne.lc;else{if(!le.p)throw new Error("THREE.EXRLoader: hufDecode issues");let de;for(de=0;de<le.lit;de++){let Te=G(d[le.p[de]]);for(;K<Te&&L.value<ee;)te($,K,b,L),$=Z.c,K=Z.lc;if(K>=Te&&D(d[le.p[de]])==($>>K-Te&(1<<Te)-1)){K-=Te,F(le.p[de],q,$,K,b,L,J,X,ae),$=ne.c,K=ne.lc;break}}if(de==le.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}let he=8-k&7;for($>>=he,K-=he;K>0;){let ge=w[$<<14-K&16383];if(ge.len)K-=ge.len,F(ge.lit,q,$,K,b,L,J,X,ae),$=ne.c,K=ne.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function re(d,w,b,L,k,q){let P={value:0},J=b.value,X=Je(w,b),$=Je(w,b);b.value+=4;let K=Je(w,b);if(b.value+=4,X<0||X>=65537||$<0||$>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");let ae=new Array(65537),ee=new Array(16384);O(ee);let he=L-(b.value-J);if(Y(d,b,he,X,$,ae),K>8*(L-(b.value-J)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");W(ae,X,$,ee),ie(ae,ee,d,b,K,$,q,k,P)}function Fe(d,w,b){for(let L=0;L<b;++L)w[L]=d[w[L]]}function Me(d){for(let w=1;w<d.length;w++){let b=d[w-1]+d[w]-128;d[w]=b}}function ue(d,w){let b=0,L=Math.floor((d.length+1)/2),k=0,q=d.length-1;for(;!(k>q||(w[k++]=d[b++],k>q));)w[k++]=d[L++]}function we(d){let w=d.byteLength,b=new Array,L=0,k=new DataView(d);for(;w>0;){let q=k.getInt8(L++);if(q<0){let P=-q;w-=P+1;for(let J=0;J<P;J++)b.push(k.getUint8(L++))}else{let P=q;w-=2;let J=k.getUint8(L++);for(let X=0;X<P+1;X++)b.push(J)}}return b}function Oe(d,w,b,L,k,q){let P=new DataView(q.buffer),J=b[d.idx[0]].width,X=b[d.idx[0]].height,$=3,K=Math.floor(J/8),ae=Math.ceil(J/8),ee=Math.ceil(X/8),he=J-(ae-1)*8,ge=X-(ee-1)*8,le={value:0},de=new Array($),Te=new Array($),Ge=new Array($),Pe=new Array($),Ye=new Array($);for(let _e=0;_e<$;++_e)Ye[_e]=w[d.idx[_e]],de[_e]=_e<1?0:de[_e-1]+ae*ee,Te[_e]=new Float32Array(64),Ge[_e]=new Uint16Array(64),Pe[_e]=new Uint16Array(ae*64);for(let _e=0;_e<ee;++_e){let Ee=8;_e==ee-1&&(Ee=ge);let at=8;for(let De=0;De<ae;++De){De==ae-1&&(at=he);for(let Ve=0;Ve<$;++Ve)Ge[Ve].fill(0),Ge[Ve][0]=k[de[Ve]++],oe(le,L,Ge[Ve]),pe(Ge[Ve],Te[Ve]),xe(Te[Ve]);$==3&&Ae(Te);for(let Ve=0;Ve<$;++Ve)Ne(Te[Ve],Pe[Ve],De*64)}let qe=0;for(let De=0;De<$;++De){let Ve=b[d.idx[De]].type;for(let vt=8*_e;vt<8*_e+Ee;++vt){qe=Ye[De][vt];for(let Gt=0;Gt<K;++Gt){let ht=Gt*64+(vt&7)*8;P.setUint16(qe+0*Ve,Pe[De][ht+0],!0),P.setUint16(qe+2*Ve,Pe[De][ht+1],!0),P.setUint16(qe+4*Ve,Pe[De][ht+2],!0),P.setUint16(qe+6*Ve,Pe[De][ht+3],!0),P.setUint16(qe+8*Ve,Pe[De][ht+4],!0),P.setUint16(qe+10*Ve,Pe[De][ht+5],!0),P.setUint16(qe+12*Ve,Pe[De][ht+6],!0),P.setUint16(qe+14*Ve,Pe[De][ht+7],!0),qe+=16*Ve}}if(K!=ae)for(let vt=8*_e;vt<8*_e+Ee;++vt){let Gt=Ye[De][vt]+8*K*2*Ve,ht=K*64+(vt&7)*8;for(let gn=0;gn<at;++gn)P.setUint16(Gt+gn*2*Ve,Pe[De][ht+gn],!0)}}}let be=new Uint16Array(J);P=new DataView(q.buffer);for(let _e=0;_e<$;++_e){b[d.idx[_e]].decoded=!0;let Ee=b[d.idx[_e]].type;if(b[_e].type==2)for(let at=0;at<X;++at){let qe=Ye[_e][at];for(let De=0;De<J;++De)be[De]=P.getUint16(qe+De*2*Ee,!0);for(let De=0;De<J;++De)P.setFloat32(qe+De*2*Ee,fe(be[De]),!0)}}}function B(d,w,b,L,k,q){let P=new DataView(q.buffer),J=b[d],X=J.width,$=J.height,K=Math.ceil(X/8),ae=Math.ceil($/8),ee=Math.floor(X/8),he=X-(K-1)*8,ge=$-(ae-1)*8,le={value:0},de=0,Te=new Float32Array(64),Ge=new Uint16Array(64),Pe=new Uint16Array(K*64);for(let Ye=0;Ye<ae;++Ye){let be=8;Ye==ae-1&&(be=ge);for(let _e=0;_e<K;++_e)Ge.fill(0),Ge[0]=k[de++],oe(le,L,Ge),pe(Ge,Te),xe(Te),Ne(Te,Pe,_e*64);for(let _e=8*Ye;_e<8*Ye+be;++_e){let Ee=w[d][_e];for(let at=0;at<ee;++at){let qe=at*64+(_e&7)*8;for(let De=0;De<8;++De)P.setUint16(Ee+De*2*J.type,Pe[qe+De],!0);Ee+=16*J.type}if(K!=ee){let at=ee*64+(_e&7)*8;for(let qe=0;qe<he;++qe)P.setUint16(Ee+qe*2*J.type,Pe[at+qe],!0)}}}J.decoded=!0}function oe(d,w,b){let L,k=1;for(;k<64;)L=w[d.value],L==65280?k=64:L>>8==255?k+=L&255:(b[k]=L,k++),d.value++}function pe(d,w){w[0]=fe(d[0]),w[1]=fe(d[1]),w[2]=fe(d[5]),w[3]=fe(d[6]),w[4]=fe(d[14]),w[5]=fe(d[15]),w[6]=fe(d[27]),w[7]=fe(d[28]),w[8]=fe(d[2]),w[9]=fe(d[4]),w[10]=fe(d[7]),w[11]=fe(d[13]),w[12]=fe(d[16]),w[13]=fe(d[26]),w[14]=fe(d[29]),w[15]=fe(d[42]),w[16]=fe(d[3]),w[17]=fe(d[8]),w[18]=fe(d[12]),w[19]=fe(d[17]),w[20]=fe(d[25]),w[21]=fe(d[30]),w[22]=fe(d[41]),w[23]=fe(d[43]),w[24]=fe(d[9]),w[25]=fe(d[11]),w[26]=fe(d[18]),w[27]=fe(d[24]),w[28]=fe(d[31]),w[29]=fe(d[40]),w[30]=fe(d[44]),w[31]=fe(d[53]),w[32]=fe(d[10]),w[33]=fe(d[19]),w[34]=fe(d[23]),w[35]=fe(d[32]),w[36]=fe(d[39]),w[37]=fe(d[45]),w[38]=fe(d[52]),w[39]=fe(d[54]),w[40]=fe(d[20]),w[41]=fe(d[22]),w[42]=fe(d[33]),w[43]=fe(d[38]),w[44]=fe(d[46]),w[45]=fe(d[51]),w[46]=fe(d[55]),w[47]=fe(d[60]),w[48]=fe(d[21]),w[49]=fe(d[34]),w[50]=fe(d[37]),w[51]=fe(d[47]),w[52]=fe(d[50]),w[53]=fe(d[56]),w[54]=fe(d[59]),w[55]=fe(d[61]),w[56]=fe(d[35]),w[57]=fe(d[36]),w[58]=fe(d[48]),w[59]=fe(d[49]),w[60]=fe(d[57]),w[61]=fe(d[58]),w[62]=fe(d[62]),w[63]=fe(d[63])}function xe(d){let w=.5*Math.cos(.7853975),b=.5*Math.cos(3.14159/16),L=.5*Math.cos(3.14159/8),k=.5*Math.cos(3*3.14159/16),q=.5*Math.cos(5*3.14159/16),P=.5*Math.cos(3*3.14159/8),J=.5*Math.cos(7*3.14159/16),X=new Array(4),$=new Array(4),K=new Array(4),ae=new Array(4);for(let ee=0;ee<8;++ee){let he=ee*8;X[0]=L*d[he+2],X[1]=P*d[he+2],X[2]=L*d[he+6],X[3]=P*d[he+6],$[0]=b*d[he+1]+k*d[he+3]+q*d[he+5]+J*d[he+7],$[1]=k*d[he+1]-J*d[he+3]-b*d[he+5]-q*d[he+7],$[2]=q*d[he+1]-b*d[he+3]+J*d[he+5]+k*d[he+7],$[3]=J*d[he+1]-q*d[he+3]+k*d[he+5]-b*d[he+7],K[0]=w*(d[he+0]+d[he+4]),K[3]=w*(d[he+0]-d[he+4]),K[1]=X[0]+X[3],K[2]=X[1]-X[2],ae[0]=K[0]+K[1],ae[1]=K[3]+K[2],ae[2]=K[3]-K[2],ae[3]=K[0]-K[1],d[he+0]=ae[0]+$[0],d[he+1]=ae[1]+$[1],d[he+2]=ae[2]+$[2],d[he+3]=ae[3]+$[3],d[he+4]=ae[3]-$[3],d[he+5]=ae[2]-$[2],d[he+6]=ae[1]-$[1],d[he+7]=ae[0]-$[0]}for(let ee=0;ee<8;++ee)X[0]=L*d[16+ee],X[1]=P*d[16+ee],X[2]=L*d[48+ee],X[3]=P*d[48+ee],$[0]=b*d[8+ee]+k*d[24+ee]+q*d[40+ee]+J*d[56+ee],$[1]=k*d[8+ee]-J*d[24+ee]-b*d[40+ee]-q*d[56+ee],$[2]=q*d[8+ee]-b*d[24+ee]+J*d[40+ee]+k*d[56+ee],$[3]=J*d[8+ee]-q*d[24+ee]+k*d[40+ee]-b*d[56+ee],K[0]=w*(d[ee]+d[32+ee]),K[3]=w*(d[ee]-d[32+ee]),K[1]=X[0]+X[3],K[2]=X[1]-X[2],ae[0]=K[0]+K[1],ae[1]=K[3]+K[2],ae[2]=K[3]-K[2],ae[3]=K[0]-K[1],d[0+ee]=ae[0]+$[0],d[8+ee]=ae[1]+$[1],d[16+ee]=ae[2]+$[2],d[24+ee]=ae[3]+$[3],d[32+ee]=ae[3]-$[3],d[40+ee]=ae[2]-$[2],d[48+ee]=ae[1]-$[1],d[56+ee]=ae[0]-$[0]}function Ae(d){for(let w=0;w<64;++w){let b=d[0][w],L=d[1][w],k=d[2][w];d[0][w]=b+1.5747*k,d[1][w]=b-.1873*L-.4682*k,d[2][w]=b+1.8556*L}}function Ne(d,w,b){for(let L=0;L<64;++L)w[b+L]=dn.toHalfFloat(Xe(d[L]))}function Xe(d){return d<=1?Math.sign(d)*Math.pow(Math.abs(d),2.2):Math.sign(d)*Math.pow(A,Math.abs(d)-1)}function ke(d){return new DataView(d.array.buffer,d.offset.value,d.size)}function ut(d){let w=d.viewer.buffer.slice(d.offset.value,d.offset.value+d.size),b=new Uint8Array(we(w)),L=new Uint8Array(b.length);return Me(b),ue(b,L),new DataView(L.buffer)}function nt(d){let w=d.array.slice(d.offset.value,d.offset.value+d.size),b=Qr(w),L=new Uint8Array(b.length);return Me(b),ue(b,L),new DataView(L.buffer)}function se(d){let w=d.viewer,b={value:d.offset.value},L=new Uint16Array(d.columns*d.lines*(d.inputChannels.length*d.type)),k=new Uint8Array(8192),q=0,P=new Array(d.inputChannels.length);for(let ge=0,le=d.inputChannels.length;ge<le;ge++)P[ge]={},P[ge].start=q,P[ge].end=P[ge].start,P[ge].nx=d.columns,P[ge].ny=d.lines,P[ge].size=d.type,q+=P[ge].nx*P[ge].ny*P[ge].size;let J=sn(w,b),X=sn(w,b);if(X>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(J<=X)for(let ge=0;ge<X-J+1;ge++)k[ge+J]=_t(w,b);let $=new Uint16Array(65536),K=I(k,$),ae=Je(w,b);re(d.array,w,b,ae,L,q);for(let ge=0;ge<d.inputChannels.length;++ge){let le=P[ge];for(let de=0;de<P[ge].size;++de)ye(L,le.start+de,le.nx,le.size,le.ny,le.nx*le.size,K)}Fe($,L,q);let ee=0,he=new Uint8Array(L.buffer.byteLength);for(let ge=0;ge<d.lines;ge++)for(let le=0;le<d.inputChannels.length;le++){let de=P[le],Te=de.nx*de.size,Ge=new Uint8Array(L.buffer,de.end*2,Te*2);he.set(Ge,ee),ee+=Te*2,de.end+=Te}return new DataView(he.buffer)}function Se(d){let w=d.array.slice(d.offset.value,d.offset.value+d.size),b=Qr(w),L=d.inputChannels.length*d.lines*d.columns*d.totalBytes,k=new ArrayBuffer(L),q=new DataView(k),P=0,J=0,X=new Array(4);for(let $=0;$<d.lines;$++)for(let K=0;K<d.inputChannels.length;K++){let ae=0;switch(d.inputChannels[K].pixelType){case 1:X[0]=P,X[1]=X[0]+d.columns,P=X[1]+d.columns;for(let he=0;he<d.columns;++he){let ge=b[X[0]++]<<8|b[X[1]++];ae+=ge,q.setUint16(J,ae,!0),J+=2}break;case 2:X[0]=P,X[1]=X[0]+d.columns,X[2]=X[1]+d.columns,P=X[2]+d.columns;for(let he=0;he<d.columns;++he){let ge=b[X[0]++]<<24|b[X[1]++]<<16|b[X[2]++]<<8;ae+=ge,q.setUint32(J,ae,!0),J+=4}break}}return q}function Le(d){let w=d.array,b=d.offset.value,L=d.columns,k=d.lines,q=d.inputChannels,P=d.totalBytes,J=Ct.compression==="B44A_COMPRESSION",X=new Uint8Array(k*L*P),$=new Uint16Array(16),K=0;for(let ae=0;ae<q.length;ae++){let ee=q[ae],he=ee.pixelType*2,ge=Math.ceil(L/ee.xSampling),le=Math.ceil(k/ee.ySampling),de=ee.xSampling===1&&ee.ySampling===1;if(ee.pixelType!==1){for(let Pe=0;Pe<le;Pe++)if(de){let Ye=Pe*L*P+K*L;for(let be=0;be<ge*he;be++)X[Ye+be]=w[b++]}else b+=ge*he;K+=he;continue}let Te=Math.ceil(ge/4),Ge=Math.ceil(le/4);for(let Pe=0;Pe<Ge;Pe++)for(let Ye=0;Ye<Te;Ye++){if(J&&w[b+2]>=52){let be=w[b]<<8|w[b+1],_e=be&32768?be&32767:~be&65535;$.fill(_e),b+=3}else{let be=w[b]<<8|w[b+1],_e=w[b+2]>>2,Ee=32<<_e,at=be+((w[b+2]<<4|w[b+3]>>4)&63)*(1<<_e)-Ee&65535,qe=at+((w[b+3]<<2|w[b+4]>>6)&63)*(1<<_e)-Ee&65535,De=qe+(w[b+4]&63)*(1<<_e)-Ee&65535,Ve=be+(w[b+5]>>2&63)*(1<<_e)-Ee&65535,vt=at+((w[b+5]<<4|w[b+6]>>4)&63)*(1<<_e)-Ee&65535,Gt=qe+((w[b+6]<<2|w[b+7]>>6)&63)*(1<<_e)-Ee&65535,ht=De+(w[b+7]&63)*(1<<_e)-Ee&65535,gn=Ve+(w[b+8]>>2&63)*(1<<_e)-Ee&65535,or=vt+((w[b+8]<<4|w[b+9]>>4)&63)*(1<<_e)-Ee&65535,is=Gt+((w[b+9]<<2|w[b+10]>>6)&63)*(1<<_e)-Ee&65535,_n=ht+(w[b+10]&63)*(1<<_e)-Ee&65535,Li=gn+(w[b+11]>>2&63)*(1<<_e)-Ee&65535,la=or+((w[b+11]<<4|w[b+12]>>4)&63)*(1<<_e)-Ee&65535,ca=is+((w[b+12]<<2|w[b+13]>>6)&63)*(1<<_e)-Ee&65535,ha=_n+(w[b+13]&63)*(1<<_e)-Ee&65535,rs=[be,Ve,gn,Li,at,vt,or,la,qe,Gt,is,ca,De,ht,_n,ha];for(let lr=0;lr<16;lr++)$[lr]=rs[lr]&32768?rs[lr]&32767:~rs[lr]&65535;b+=14}if(ee.pLinear){if(R===null){R=new Uint16Array(65536);for(let be=0;be<65536;be++)if((be&31744)===31744||be>32768)R[be]=0;else{let _e=fe(be);R[be]=_e<=0?0:dn.toHalfFloat(8*Math.log(_e))}}for(let be=0;be<16;be++)$[be]=R[$[be]]}for(let be=0;be<4;be++){let _e=Pe*4+be;if(!(_e>=le))for(let Ee=0;Ee<4;Ee++){let at=Ye*4+Ee;if(at>=ge)continue;let qe=$[be*4+Ee];for(let De=0;De<ee.ySampling;De++){let Ve=_e*ee.ySampling+De;if(!(Ve>=k))for(let vt=0;vt<ee.xSampling;vt++){let Gt=at*ee.xSampling+vt;if(Gt>=L)continue;let ht=Ve*L*P+K*L+Gt*2;X[ht]=qe&255,X[ht+1]=qe>>8&255}}}}}K+=2}return new DataView(X.buffer)}function ct(d){let w=d.viewer,b={value:d.offset.value},L=new Uint8Array(d.columns*d.lines*(d.inputChannels.length*d.type*2)),k={version:rt(w,b),unknownUncompressedSize:rt(w,b),unknownCompressedSize:rt(w,b),acCompressedSize:rt(w,b),dcCompressedSize:rt(w,b),rleCompressedSize:rt(w,b),rleUncompressedSize:rt(w,b),rleRawSize:rt(w,b),totalAcUncompressedCount:rt(w,b),totalDcUncompressedCount:rt(w,b),acCompression:rt(w,b)};if(k.version<2)throw new Error("THREE.EXRLoader: "+Ct.compression+" version "+k.version+" is unsupported");let q=new Array,P=sn(w,b)-2;for(;P>0;){let le=Ue(w.buffer,b),de=_t(w,b),Te=de>>2&3,Ge=(de>>4)-1,Pe=new Int8Array([Ge])[0],Ye=_t(w,b);q.push({name:le,index:Pe,type:Ye,compression:Te}),P-=le.length+3}let J=Ct.channels,X=new Array(d.inputChannels.length);for(let le=0;le<d.inputChannels.length;++le){let de=X[le]={},Te=J[le];de.name=Te.name,de.compression=0,de.decoded=!1,de.type=Te.pixelType,de.pLinear=Te.pLinear,de.width=d.columns,de.height=d.lines}let $={idx:new Array(3)};for(let le=0;le<d.inputChannels.length;++le){let de=X[le],Te=de.name.lastIndexOf("."),Ge=Te>=0?de.name.substring(Te+1):de.name;for(let Pe=0;Pe<q.length;++Pe){let Ye=q[Pe];Ge===Ye.name&&de.type===Ye.type&&(de.compression=Ye.compression,Ye.index>=0&&($.idx[Ye.index]=le),de.offset=le)}}let K,ae,ee;if(k.acCompressedSize>0)switch(k.acCompression){case 0:K=new Uint16Array(k.totalAcUncompressedCount),re(d.array,w,b,k.acCompressedSize,K,k.totalAcUncompressedCount);break;case 1:let le=d.array.slice(b.value,b.value+k.totalAcUncompressedCount),de=Qr(le);K=new Uint16Array(de.buffer),b.value+=k.totalAcUncompressedCount;break}if(k.dcCompressedSize>0){let le={array:d.array,offset:b,size:k.dcCompressedSize};ae=new Uint16Array(nt(le).buffer),b.value+=k.dcCompressedSize}if(k.rleRawSize>0){let le=d.array.slice(b.value,b.value+k.rleCompressedSize),de=Qr(le);ee=we(de.buffer),b.value+=k.rleCompressedSize}let he=0,ge=new Array(X.length);for(let le=0;le<ge.length;++le)ge[le]=new Array;for(let le=0;le<d.lines;++le)for(let de=0;de<X.length;++de)ge[de].push(he),he+=X[de].width*d.type*2;$.idx[0]!==void 0&&X[$.idx[0]]&&Oe($,ge,X,K,ae,L);for(let le=0;le<X.length;++le){let de=X[le];if(!de.decoded)switch(de.compression){case 2:let Te=0,Ge=0;for(let Pe=0;Pe<d.lines;++Pe){let Ye=ge[le][Te];for(let be=0;be<de.width;++be){for(let _e=0;_e<2*de.type;++_e)L[Ye++]=ee[Ge+_e*de.width*de.height];Ge++}Te++}break;case 1:B(le,ge,X,K,ae,L);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(L.buffer)}function Ue(d,w){let b=new Uint8Array(d),L=0;for(;b[w.value+L]!=0;)L+=1;let k=new TextDecoder().decode(b.slice(w.value,w.value+L));return w.value=w.value+L+1,k}function ze(d,w,b){let L=new TextDecoder().decode(new Uint8Array(d).slice(w.value,w.value+b));return w.value=w.value+b,L}function it(d,w){let b=Ie(d,w),L=Je(d,w);return[b,L]}function Re(d,w){let b=Je(d,w),L=Je(d,w);return[b,L]}function Ie(d,w){let b=d.getInt32(w.value,!0);return w.value=w.value+4,b}function Je(d,w){let b=d.getUint32(w.value,!0);return w.value=w.value+4,b}function st(d,w){let b=d[w.value];return w.value=w.value+1,b}function _t(d,w){let b=d.getUint8(w.value);return w.value=w.value+1,b}let rt=function(d,w){let b=Number(d.getBigInt64(w.value,!0));return w.value+=8,b};function pt(d,w){let b=d.getFloat32(w.value,!0);return w.value+=4,b}function Kn(d,w){return dn.toHalfFloat(pt(d,w))}function fe(d){let w=(d&31744)>>10,b=d&1023;return(d>>15?-1:1)*(w?w===31?b?NaN:1/0:Math.pow(2,w-15)*(1+b/1024):6103515625e-14*(b/1024))}function sn(d,w){let b=d.getUint16(w.value,!0);return w.value+=2,b}function bi(d,w){return fe(sn(d,w))}function sr(d,w,b,L){let k=b.value,q=[];for(;b.value<k+L-1;){let P=Ue(w,b),J=Ie(d,b),X=_t(d,b);b.value+=3;let $=Ie(d,b),K=Ie(d,b);q.push({name:P,pixelType:J,pLinear:X,xSampling:$,ySampling:K})}return b.value+=1,q}function Mi(d,w){let b=pt(d,w),L=pt(d,w),k=pt(d,w),q=pt(d,w),P=pt(d,w),J=pt(d,w),X=pt(d,w),$=pt(d,w);return{redX:b,redY:L,greenX:k,greenY:q,blueX:P,blueY:J,whiteX:X,whiteY:$}}function Ei(d,w){let b=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],L=_t(d,w);return b[L]}function Ai(d,w){let b=Ie(d,w),L=Ie(d,w),k=Ie(d,w),q=Ie(d,w);return{xMin:b,yMin:L,xMax:k,yMax:q}}function Ti(d,w){let b=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],L=_t(d,w);return b[L]}function Ks(d,w){let b=["ENVMAP_LATLONG","ENVMAP_CUBE"],L=_t(d,w);return b[L]}function es(d,w){let b=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],L=["ROUND_DOWN","ROUND_UP"],k=Je(d,w),q=Je(d,w),P=_t(d,w);return{xSize:k,ySize:q,levelMode:b[P&15],roundingMode:L[P>>4]}}function Qs(d,w){let b=pt(d,w),L=pt(d,w);return[b,L]}function js(d,w){let b=pt(d,w),L=pt(d,w),k=pt(d,w);return[b,L,k]}function ea(d,w,b,L,k){if(L==="string"||L==="stringvector"||L==="iccProfile")return ze(w,b,k);if(L==="chlist")return sr(d,w,b,k);if(L==="chromaticities")return Mi(d,b);if(L==="compression")return Ei(d,b);if(L==="box2i")return Ai(d,b);if(L==="envmap")return Ks(d,b);if(L==="tiledesc")return es(d,b);if(L==="lineOrder")return Ti(d,b);if(L==="float")return pt(d,b);if(L==="v2f")return Qs(d,b);if(L==="v3f")return js(d,b);if(L==="int")return Ie(d,b);if(L==="rational")return it(d,b);if(L==="timecode")return Re(d,b);if(L==="preview"||L==="deepImageState"||L==="idmanifest")return b.value+=k,"skipped";b.value+=k}function ta(d,w){let b=Math.log2(d);return w=="ROUND_DOWN"?Math.floor(b):Math.ceil(b)}function na(d,w,b){let L=0;switch(d.levelMode){case"ONE_LEVEL":L=1;break;case"MIPMAP_LEVELS":L=ta(Math.max(w,b),d.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return L}function ia(d,w,b,L){let k=new Array(d);for(let q=0;q<d;q++){let P=1<<q,J=w/P|0;L=="ROUND_UP"&&J*P<w&&(J+=1);let X=Math.max(J,1);k[q]=(X+b-1)/b|0}return k}function Ci(){let d=this,w=d.offset,b={value:0};for(let L=0;L<d.tileCount;L++){let k=Ie(d.viewer,w),q=Ie(d.viewer,w);w.value+=8,d.size=Je(d.viewer,w);let P=k*d.blockWidth,J=q*d.blockHeight;d.columns=P+d.blockWidth>d.width?d.width-P:d.blockWidth,d.lines=J+d.blockHeight>d.height?d.height-J:d.blockHeight;let X=d.columns*d.totalBytes,K=d.size<d.lines*X?d.uncompress(d):ke(d);w.value+=d.size;for(let ae=0;ae<d.lines;ae++){let ee=ae*d.columns*d.totalBytes;for(let he=0;he<d.inputChannels.length;he++){let ge=Ct.channels[he].name,le=d.channelByteOffsets[ge]*d.columns,de=d.decodeChannels[ge];if(de===void 0)continue;b.value=ee+le;let Te=(d.height-(1+J+ae))*d.outLineWidth;for(let Ge=0;Ge<d.columns;Ge++){let Pe=Te+(Ge+P)*d.outputChannels+de;d.byteArray[Pe]=d.getter(K,b)}}}}}function ts(){let d=this,w=d.offset,b={value:0};for(let L=0;L<d.height/d.blockHeight;L++){let k=Ie(d.viewer,w)-Ct.dataWindow.yMin;d.size=Je(d.viewer,w),d.lines=k+d.blockHeight>d.height?d.height-k:d.blockHeight;let q=d.columns*d.totalBytes,J=d.size<d.lines*q?d.uncompress(d):ke(d);w.value+=d.size;for(let X=0;X<d.lines;X++){let $=k+X,K=X*q,ae=(d.height-1-$)*d.outLineWidth;for(let ee=0;ee<d.inputChannels.length;ee++){let he=Ct.channels[ee].name,ge=d.channelByteOffsets[he]*d.columns,le=d.decodeChannels[he];if(le!==void 0){b.value=K+ge;for(let de=0;de<d.columns;de++){let Te=ae+de*d.outputChannels+le;d.byteArray[Te]=d.getter(J,b)}}}}}}function ar(){let d=this,w=d.chunkOffsets,b={value:0};for(let L=0;L<w.length;L++){let k={value:w[L]};k.value+=4;let q=Ie(d.viewer,k)-Ct.dataWindow.yMin;d.size=Je(d.viewer,k),d.lines=q+d.blockHeight>d.height?d.height-q:d.blockHeight;let P=d.columns*d.totalBytes,J=d.size<d.lines*P,X=d.offset;d.offset=k;let $=J?d.uncompress(d):ke(d);d.offset=X;for(let K=0;K<d.lines;K++){let ae=q+K,ee=K*P,he=(d.height-1-ae)*d.outLineWidth;for(let ge=0;ge<d.inputChannels.length;ge++){let le=Ct.channels[ge].name,de=d.channelByteOffsets[le]*d.columns,Te=d.decodeChannels[le];if(Te!==void 0){b.value=ee+de;for(let Ge=0;Ge<d.columns;Ge++){let Pe=he+Ge*d.outputChannels+Te;d.byteArray[Pe]=d.getter($,b)}}}}}}function Ri(d,w,b,L){if(b===0)return null;let k=d.slice(w,w+b);switch(L){case"NO_COMPRESSION":return new DataView(k.buffer,k.byteOffset,k.byteLength);case"RLE_COMPRESSION":{let q=new Uint8Array(we(k.buffer.slice(k.byteOffset,k.byteOffset+k.byteLength))),P=new Uint8Array(q.length);return Me(q),ue(q,P),new DataView(P.buffer)}case"ZIPS_COMPRESSION":{let q=Qr(k),P=new Uint8Array(q.length);return Me(q),ue(q,P),new DataView(P.buffer)}default:throw new Error("THREE.EXRLoader: "+L+" is unsupported for deep data")}}function ra(){let d=this,w=d.chunkOffsets,b=d.width,L=d.height,k=d.deepChannels,q=Ct.compression,P=d.multiPart,J=d.decodeChannels,X=d.outputChannels,$=d.byteArray instanceof Uint16Array,K=-1;for(let ae=0;ae<k.length;ae++)if(k[ae].name==="A"){K=ae;break}for(let ae=0;ae<w.length;ae++){let ee={value:w[ae]};P&&(ee.value+=4);let he=Ie(d.viewer,ee)-Ct.dataWindow.yMin,ge=rt(d.viewer,ee),le=rt(d.viewer,ee);rt(d.viewer,ee);let de=Ri(d.array,ee.value,ge,q);if(ee.value+=ge,de===null)continue;let Te=new Uint32Array(b);for(let Ee=0;Ee<b;Ee++)Te[Ee]=de.getUint32(Ee*4,!0);let Ge=Te[b-1];if(Ge===0){ee.value+=le;continue}let Pe=Ri(d.array,ee.value,le,q),Ye=[],be=0;for(let Ee=0;Ee<k.length;Ee++)Ye.push(be),be+=Ge*k[Ee].bytesPerSample;let _e=(L-1-he)*d.outLineWidth;for(let Ee=0;Ee<b;Ee++){let at=Ee===0?0:Te[Ee-1],De=Te[Ee]-at;if(De===0)continue;let Ve=new Float32Array(X),vt=0;for(let ht=0;ht<De;ht++){let gn=at+ht,or=1-vt;if(or<=0)break;let is=1;if(K>=0){let _n=k[K].bytesPerSample,Li=Ye[K]+gn*_n;is=_n===2?fe(Pe.getUint16(Li,!0)):Pe.getFloat32(Li,!0)}for(let _n=0;_n<k.length;_n++){let Li=k[_n],la=J[Li.name];if(la===void 0)continue;let ca=Li.bytesPerSample,ha=Ye[_n]+gn*ca,rs=ca===2?fe(Pe.getUint16(ha,!0)):Pe.getFloat32(ha,!0);Ve[la]+=rs*or}vt+=is*or}J.A!==void 0&&(Ve[J.A]=vt);let Gt=_e+Ee*X;for(let ht=0;ht<X;ht++)d.byteArray[Gt+ht]=$?dn.toHalfFloat(Ve[ht]):Ve[ht]}}}function ns(d,w,b){let L={},k=!1;for(;;){let q=Ue(w,b);if(q==="")break;k=!0;let P=Ue(w,b),J=Je(d,b),X=ea(d,w,b,P,J);X===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${P}'.`):L[q]=X}return k?L:null}function sa(d,w,b){if(d.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");let L=d.getUint8(4),k=d.getUint8(5),q={singleTile:!!(k&2),longName:!!(k&4),deepFormat:!!(k&8),multiPart:!!(k&16)};b.value=8;let P=[];if(q.multiPart){for(;;){let J=ns(d,w,b);if(J===null)break;J.version=L,J.spec=q,P.push(J)}if(P.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{let J=ns(d,w,b);J.version=L,J.spec=q,P.push(J)}return P}function aa(d,w,b,L,k,q){let P={size:0,viewer:w,array:b,offset:L,width:d.dataWindow.xMax-d.dataWindow.xMin+1,height:d.dataWindow.yMax-d.dataWindow.yMin+1,inputChannels:d.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:fn};switch(d.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=ke;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=ut;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=nt;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=nt;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=se;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=Se;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":P.blockHeight=32,P.uncompress=Le;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=ct;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=ct;break;default:throw new Error("THREE.EXRLoader: "+d.compression+" is unsupported")}let J={};for(let ee of d.channels)switch(ee.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":J[ee.name]=!0,P.type=ee.pixelType}let X=!1,$=!1;if(J.Y&&J.RY&&J.BY)P.outputChannels=4,P.yCbCr=!0;else if(J.R&&J.G&&J.B)P.outputChannels=4;else if(J.Y)P.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(P.outputChannels){case 4:q==nn?(X=!J.A,P.format=nn,P.colorSpace=fn,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3}):q==nr?(P.format=nr,P.colorSpace=fn,P.outputChannels=2,P.decodeChannels={R:0,G:1}):q==Jr?(P.format=Jr,P.colorSpace=fn,P.outputChannels=1,P.decodeChannels={R:0}):$=!0;break;case 1:q==nn?(X=!0,P.format=nn,P.colorSpace=fn,P.outputChannels=4,P.shouldExpand=!0,P.decodeChannels={Y:0}):q==nr?(P.format=nr,P.colorSpace=fn,P.outputChannels=2,P.shouldExpand=!0,P.decodeChannels={Y:0}):q==Jr?(P.format=Jr,P.colorSpace=fn,P.outputChannels=1,P.decodeChannels={Y:0}):$=!0;break;default:$=!0}if($)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(P.yCbCr&&(P.format=nn,P.outputChannels=4,P.decodeChannels={Y:0,RY:1,BY:2},X=!0),P.type==1)switch(k){case er:P.getter=bi;break;case tr:P.getter=sn;break}else if(P.type==2)switch(k){case er:P.getter=pt;break;case tr:P.getter=Kn}else throw new Error("THREE.EXRLoader: unsupported pixelType "+P.type+" for "+d.compression+".");P.columns=P.width;let K=P.width*P.height*P.outputChannels;switch(k){case er:P.byteArray=new Float32Array(K),X&&P.byteArray.fill(1,0,K);break;case tr:P.byteArray=new Uint16Array(K),X&&P.byteArray.fill(15360,0,K);break;default:console.error("THREE.EXRLoader: unsupported type: ",k);break}let ae=0;for(let ee of d.channels)P.decodeChannels[ee.name]!==void 0&&(P.channelByteOffsets[ee.name]=ae),ae+=ee.pixelType*2;if(P.totalBytes=ae,P.outLineWidth=P.width*P.outputChannels,d.spec.deepFormat){P.deepChannels=[];let ee=0;for(let he of d.channels){let ge=he.pixelType===0?4:he.pixelType*2;P.deepChannels.push({name:he.name,pixelType:he.pixelType,bytesPerSample:ge}),ee+=ge}P.deepBytesPerSample=ee,P.chunkOffsets=d._chunkOffsets,P.multiPart=d.spec.multiPart,P.decode=ra.bind(P)}else if(d.spec.singleTile){P.blockHeight=d.tiles.ySize,P.blockWidth=d.tiles.xSize;let ee=na(d.tiles,P.width,P.height),he=ia(ee,P.width,d.tiles.xSize,d.tiles.roundingMode),ge=ia(ee,P.height,d.tiles.ySize,d.tiles.roundingMode);P.tileCount=he[0]*ge[0];for(let le=0;le<ee;le++)for(let de=0;de<ge[le];de++)for(let Te=0;Te<he[le];Te++)rt(w,L);P.decode=Ci.bind(P)}else if(d.spec.multiPart)P.blockWidth=P.width,P.chunkOffsets=d._chunkOffsets,P.decode=ar.bind(P);else{P.blockWidth=P.width;let ee=Math.ceil(P.height/P.blockHeight);for(let he=0;he<ee;he++)rt(w,L);P.decode=ts.bind(P)}return P}let Ii={value:0},Pi=new DataView(e),oa=new Uint8Array(e),In=sa(Pi,e,Ii),vh=Math.max(0,Math.min(this.part,In.length-1)),Ct=In[vh];if(Ct.spec.multiPart||Ct.spec.deepFormat)for(let d=0;d<In.length;d++){let w=In[d].chunkCount;if(d===vh){Ct._chunkOffsets=[];for(let b=0;b<w;b++)Ct._chunkOffsets.push(rt(Pi,Ii))}else for(let b=0;b<w;b++)rt(Pi,Ii)}let qt=aa(Ct,Pi,oa,Ii,this.type,this.outputFormat);if(qt.decode(),qt.shouldExpand){let d=qt.byteArray;if(this.outputFormat==nn)for(let w=0;w<d.length;w+=4)d[w+2]=d[w+1]=d[w];else if(this.outputFormat==nr)for(let w=0;w<d.length;w+=2)d[w+1]=d[w]}if(qt.yCbCr){let d=qt.byteArray,w=qt.width*qt.height;if(this.type===tr)for(let b=0;b<w;b++){let L=b*4,k=fe(d[L]),q=fe(d[L+1]),P=fe(d[L+2]),J=(1+q)*k,X=(1+P)*k,$=(k-J*.2126-X*.0722)/.7152;d[L]=dn.toHalfFloat(Math.max(0,J)),d[L+1]=dn.toHalfFloat(Math.max(0,$)),d[L+2]=dn.toHalfFloat(Math.max(0,X))}else for(let b=0;b<w;b++){let L=b*4,k=d[L],q=d[L+1],P=d[L+2],J=(1+q)*k,X=(1+P)*k;d[L]=Math.max(0,J),d[L+1]=Math.max(0,(k-J*.2126-X*.0722)/.7152),d[L+2]=Math.max(0,X)}}return{header:Ct,width:qt.width,height:qt.height,data:qt.byteArray,format:qt.format,colorSpace:qt.colorSpace,type:this.type,minFilter:vi,magFilter:vi,generateMipmaps:!1,flipY:!1}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}};var ow=new Uint8Array([137,80,78,71,13,10,26,10]),lw=_w();function cw(t){let e=Jn(t),n=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength),i=Co.default.decode(n),r=i.find(g=>Number(g.t256?.[0]??0)>0&&Number(g.t257?.[0]??0)>0)??i[0];if(!r)throw new Error("TIFF \u043D\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F");Co.default.decodeImage(n,r,i);let s=Number(r.width??r.t256?.[0]??0),a=Number(r.height??r.t257?.[0]??0);if(!s||!a)throw new Error("TIFF \u043C\u0430\u0454 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438");let o=Co.default.toRGBA8(r),c=Number(r.t274?.[0]??1),l=gw(o,s,a,c),h=Math.max(...(r.t258??[8]).map(Number)),u=r.t34675?Jn(r.t34675):null,f=xh(u),m=!f||f.colorSpace==="RGB",p=u&&m?u:null;return{width:l.width,height:l.height,rgba:l.rgba,bits:h,icc:p,profile:f,colorLabel:f?m?`ICC: ${f.name}`:`${f.name} (${f.colorSpace}, \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0443 RGB)`:"\u0411\u0435\u0437 ICC \xB7 \u043F\u0440\u0438\u043F\u0443\u0449\u0435\u043D\u043E sRGB",warning:u&&!m?`\u0412\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 ${f.colorSpace}-\u043F\u0440\u043E\u0444\u0456\u043B\u044C \u043D\u0435 \u043C\u043E\u0436\u043D\u0430 \u043F\u0440\u0438\u043A\u0440\u0456\u043F\u0438\u0442\u0438 \u0434\u043E RGB preview; \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043E \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0434\u0435\u043A\u043E\u0434\u0435\u0440\u0430.`:""}}function hw(t,e){let n=Jn(t);if(e==="exr")try{return Vp(Ll(n),"HDRify","exr")}catch(i){try{return uw(n)}catch(r){let s=Hp(i),a=Hp(r);throw new Error(`\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0434\u0435\u043A\u043E\u0434\u0443\u0432\u0430\u0442\u0438 EXR. HDRify: ${s}; Three.js: ${a}`)}}return Vp(Kl(n),"HDRify","hdr")}function Vp(t,e,n){let i=Wp(n,t.metadata??{});return{width:t.width,height:t.height,data:t.data,metadata:t.metadata??{},sourceColorSpace:t.linearColorSpace??"linear-rec709",decoder:e,format:n,suggestedDisplayTransform:i.mode,displayTransformEvidence:i.evidence}}function uw(t){let e=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength),n=new To().setDataType(er).setOutputFormat(nn).parse(e);if(!n?.width||!n?.height||!(n.data instanceof Float32Array))throw new Error("\u0434\u0435\u043A\u043E\u0434\u0435\u0440 \u043D\u0435 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0432 Float32 RGBA");let i=n.header?.chromaticities,r=Wp("exr",n.header??{});return{width:n.width,height:n.height,data:n.data,metadata:n.header??{},sourceColorSpace:Ss(i??{})??"linear-rec709",decoder:"Three.js",format:"exr",suggestedDisplayTransform:r.mode,displayTransformEvidence:r.evidence}}function Hp(t){return t instanceof Error?t.message:String(t)}function fw(t,e=0,n="aces",i="tonemap"){let r=new Float32Array(t.data);if(i==="linear-srgb"||i==="encoded-srgb"){let o=i==="linear-srgb"&&t.sourceColorSpace!=="linear-rec709"?wr(r,t.width,t.height,t.sourceColorSpace??"linear-rec709","linear-rec709"):r;return dw(t,o,i)}let s=ja(r,t.width,t.height,{exposure:2**Number(e||0),toneMapping:n,metadata:t.metadata,sourceColorSpace:t.sourceColorSpace??"linear-rec709"}),a=new Uint8Array(t.width*t.height*4);for(let o=0,c=0,l=0;o<t.width*t.height;o+=1){a[l++]=s[c++],a[l++]=s[c++],a[l++]=s[c++];let h=t.data[o*4+3];a[l++]=Number.isFinite(h)?Math.round(Ro(h)*255):255}return a}function dw(t,e,n){let i=new Uint8Array(t.width*t.height*4);for(let r=0;r<t.width*t.height;r+=1){let s=r*4;i[s]=gh(e[s],n),i[s+1]=gh(e[s+1],n),i[s+2]=gh(e[s+2],n);let a=t.data[s+3];i[s+3]=Number.isFinite(a)?Math.round(Ro(a)*255):255}return i}function gh(t,e){let n=Ro(Number.isFinite(t)?t:0),i=e==="linear-srgb"?n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055:n;return Math.round(Ro(i)*255)}function Wp(t,e){if(t==="hdr")return{mode:"tonemap",evidence:"Radiance HDR"};let n=[["unreal/colorSpace/destination",e?.["unreal/colorSpace/destination"]],["oiio:ColorSpace",e?.["oiio:ColorSpace"]],["ColorSpace",e?.ColorSpace],["colorSpace",e?.colorSpace]];for(let[i,r]of n){if(typeof r!="string"||!r.trim())continue;let s=r.trim().toLowerCase();if(s.includes("linear")||s.includes("acescg"))return{mode:"linear-srgb",evidence:`${i}: ${r.trim()}`};if(s==="srgb"||s.startsWith("srgb\0")||s.includes("display srgb"))return{mode:"encoded-srgb",evidence:`${i}: ${r.trim()}`}}return{mode:"linear-srgb",evidence:"EXR metadata unresolved \xB7 scene-linear fallback"}}function pw(t,e,n,i={}){let r=Jn(t);if(r.byteLength!==e*n*4)throw new Error("\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 RGBA-\u0431\u0443\u0444\u0435\u0440");let s=e*4,a=new Uint8Array((s+1)*n);for(let u=0;u<n;u+=1){let f=u*(s+1);a[f]=0,a.set(r.subarray(u*s,(u+1)*s),f+1)}let o=new Uint8Array(13),c=new DataView(o.buffer);c.setUint32(0,e,!1),c.setUint32(4,n,!1),o.set([8,6,0,0,0],8);let l=[jr("IHDR",o)],h=i.icc?Jn(i.icc):null;if(h?.byteLength){let u=Yp((i.profileName||"Embedded ICC").slice(0,79)),f=gc(h,{level:6});l.push(jr("iCCP",Xp(u,new Uint8Array([0,0]),f)))}else i.cicp?l.push(jr("cICP",new Uint8Array(i.cicp))):l.push(jr("sRGB",new Uint8Array([0])));return l.push(jr("IDAT",gc(a,{level:6}))),l.push(jr("IEND",new Uint8Array)),new Blob([ow,...l],{type:"image/png"})}function mw(t){let e=Jn(t);for(let n=4;n+12<=e.length;n+=1){if(rr(e,n,4)!=="colr")continue;let i=n-4,r=ir(e,i);if(r<12||i+r>e.length)continue;let s=rr(e,n+4,4);if(s==="prof"||s==="rICC"){let a=e.slice(n+8,i+r),o=xh(a);return{icc:a,cicp:null,profile:o,colorLabel:o?`ICC: ${o.name}`:"\u0412\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 ICC"}}if(s==="nclx"&&n+15<=i+r){let a=_h(e,n+8),o=_h(e,n+10),c=_h(e,n+12),l=(e[n+14]&128)!==0;return{icc:null,cicp:[a&255,o&255,c&255,l?1:0],profile:null,colorLabel:`NCLX: ${yw(a)} \xB7 ${ww(o)}`}}}return{icc:null,cicp:null,profile:null,colorLabel:"\u0411\u0435\u0437 \u043F\u0440\u043E\u0444\u0456\u043B\u044E \xB7 \u043F\u0440\u0438\u043F\u0443\u0449\u0435\u043D\u043E sRGB"}}function xh(t){if(!t)return null;let e=Jn(t);if(e.length<132)return null;let n=rr(e,16,4).trim(),i=rr(e,20,4).trim(),r="Embedded ICC";try{let s=ir(e,128);for(let a=0;a<Math.min(s,256);a+=1){let o=132+a*12;if(o+12>e.length||rr(e,o,4)!=="desc")continue;let c=ir(e,o+4),l=ir(e,o+8);if(c+l>e.length||l<12)continue;let h=rr(e,c,4);if(h==="desc"){let u=Math.min(ir(e,c+8),l-12);r=rr(e,c+12,Math.max(0,u-1)).replace(/\0/g,"").trim()||r}else if(h==="mluc"&&l>=28){let u=ir(e,c+20),f=ir(e,c+24),m=c+f;m+u<=c+l&&(r=vw(e.subarray(m,m+u)).trim()||r)}break}}catch{}return{name:r,colorSpace:n,pcs:i,byteLength:e.byteLength}}function gw(t,e,n,i){if(i<2||i>8)return{rgba:t,width:e,height:n};let r=i>=5,s=r?n:e,a=r?e:n,o=new Uint8Array(t.length);for(let c=0;c<n;c+=1)for(let l=0;l<e;l+=1){let h=l,u=c;i===2?[h,u]=[e-1-l,c]:i===3?[h,u]=[e-1-l,n-1-c]:i===4?[h,u]=[l,n-1-c]:i===5?[h,u]=[c,l]:i===6?[h,u]=[n-1-c,l]:i===7?[h,u]=[n-1-c,e-1-l]:i===8&&([h,u]=[c,e-1-l]);let f=(c*e+l)*4,m=(u*s+h)*4;o.set(t.subarray(f,f+4),m)}return{rgba:o,width:s,height:a}}function _w(){let t=new Uint32Array(256);for(let e=0;e<256;e+=1){let n=e;for(let i=0;i<8;i+=1)n=n&1?3988292384^n>>>1:n>>>1;t[e]=n>>>0}return t}function xw(t){let e=4294967295;for(let n of t)e=lw[(e^n)&255]^e>>>8;return(e^4294967295)>>>0}function jr(t,e){let n=Jn(e),i=Yp(t),r=new Uint8Array(12+n.length),s=new DataView(r.buffer);return s.setUint32(0,n.length,!1),r.set(i,4),r.set(n,8),s.setUint32(8+n.length,xw(Xp(i,n)),!1),r}function Xp(...t){let e=t.map(Jn),n=new Uint8Array(e.reduce((r,s)=>r+s.length,0)),i=0;for(let r of e)n.set(r,i),i+=r.length;return n}function Jn(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t??[])}function _h(t,e){return new DataView(t.buffer,t.byteOffset,t.byteLength).getUint16(e,!1)}function ir(t,e){return new DataView(t.buffer,t.byteOffset,t.byteLength).getUint32(e,!1)}function rr(t,e,n){let i="";for(let r=0;r<n&&e+r<t.length;r+=1)i+=String.fromCharCode(t[e+r]);return i}function Yp(t){return Uint8Array.from(t,e=>e.charCodeAt(0)&255)}function vw(t){let e="";for(let n=0;n+1<t.length;n+=2)e+=String.fromCharCode(t[n]<<8|t[n+1]);return e}function Ro(t){return Math.min(1,Math.max(0,t))}function yw(t){return{1:"BT.709 / sRGB",9:"BT.2020",11:"Display P3 DCI",12:"Display P3 D65"}[t]??`primaries ${t}`}function ww(t){return{1:"BT.709",13:"sRGB",16:"PQ",18:"HLG"}[t]??`transfer ${t}`}return jp(Sw);})();
/*! For license information please see advanced-codecs.js.LEGAL.txt */

