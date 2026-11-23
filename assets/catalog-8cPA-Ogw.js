import{r as Zt,j as ai}from"./index-Uwm3Jlh9.js";const dl="187",Vh=0,ql=1,Wh=2,qs=1,qh=2,Hs=3,Oi=0,Cn=1,An=2,bs=0,ys=1,Js=2,Xl=3,Yl=4,Xh=5,vs=100,Yh=101,$h=102,Kh=103,Zh=104,Jh=200,jh=201,Qh=202,ef=203,E0=204,A0=205,tf=206,nf=207,sf=208,af=209,of=210,rf=211,lf=212,cf=213,hf=214,hr=0,fr=1,dr=2,js=3,ur=4,pr=5,mr=6,gr=7,T0=0,ff=1,df=2,_i=0,R0=1,C0=2,P0=3,L0=4,I0=5,D0=6,ul=7,$l="attached",uf="detached",N0=300,Ss=301,Qs=302,Mo=303,So=304,xr=1e3,xi=1001,vr=1002,mn=1003,pf=1004,da=1005,Dn=1006,wo=1007,Ni=1008,Fn=1009,U0=1010,F0=1011,ea=1012,pl=1013,li=1014,Jn=1015,ci=1016,ml=1017,gl=1018,ws=1020,k0=35902,O0=35899,z0=1021,B0=1022,jn=1023,zi=1026,Ui=1027,H0=1028,xl=1029,$i=1030,vl=1031,_l=1033,$a=33776,Ka=33777,Za=33778,Ja=33779,_r=35840,br=35841,yr=35842,Mr=35843,Sr=36196,wr=37492,Er=37496,Ar=37488,Tr=37489,no=37490,Rr=37491,Cr=37808,Pr=37809,Lr=37810,Ir=37811,Dr=37812,Nr=37813,Ur=37814,Fr=37815,kr=37816,Or=37817,zr=37818,Br=37819,Hr=37820,Gr=37821,Vr=36492,Wr=36494,qr=36495,Xr=36283,Yr=36284,io=36285,$r=36286,mf=3200,Kr=0,gf=1,Di="",In="srgb",so="srgb-linear",ao="linear",zt="srgb",Eo=7680,xf=519,vf=512,_f=513,bf=514,G0=515,yf=516,Mf=517,V0=518,W0=519,Sf=35044,Kl="300 es",Qn=2e3,ta=2001;function wf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ef(){const i=oo("canvas");return i.style.display="block",i}const Zl={};function Jl(...i){const e="THREE."+i.shift();console.log(e,...i)}function q0(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function rt(...i){i=q0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Nt(...i){i=q0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ja(...i){const e=i.join(" ");e in Zl||(Zl[e]=!0,rt(...i))}function Af(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Tf={[hr]:hr,[dr]:mr,[ur]:ur,[js]:pr,[fr]:fr,[mr]:dr,[gr]:gr,[pr]:js};class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jl=1234567;const Xs=Math.PI/180,na=180/Math.PI;function Ji(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function bl(i,e){return(i%e+e)%e}function Rf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Cf(i,e,t){return i!==e?(t-i)/(e-i):0}function Ys(i,e,t){return(1-t)*i+t*e}function Pf(i,e,t,n){return Ys(i,e,1-Math.exp(-t*n))}function Lf(i,e=1){return e-Math.abs(bl(i,e*2)-e)}function If(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Df(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Uf(i,e){return i+Math.random()*(e-i)}function Ff(i){return i*(.5-Math.random())}function kf(i){i!==void 0&&(jl=i);let e=jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Of(i){return i*Xs}function zf(i){return i*na}function Bf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Hf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function X0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gf(i,e,t,n,s){const a=Math.cos,o=Math.sin,r=a(t/2),l=o(t/2),c=a((e+n)/2),h=o((e+n)/2),u=a((e-n)/2),f=o((e-n)/2),p=a((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(r*h,l*u,l*f,r*c);break;case"YZY":i.set(l*f,r*h,l*u,r*c);break;case"ZXZ":i.set(l*u,l*f,r*h,r*c);break;case"XZX":i.set(r*h,l*g,l*p,r*c);break;case"YXY":i.set(l*p,r*h,l*g,r*c);break;case"ZYZ":i.set(l*g,l*p,r*h,r*c);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Y0(i,e){if(e.constructor===Float32Array)return i;const t=yl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function $0(i,e){if(e.constructor===Float32Array)return i;const t=yl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Vf={DEG2RAD:Xs,RAD2DEG:na,generateUUID:Ji,clamp:Tt,euclideanModulo:bl,mapLinear:Rf,inverseLerp:Cf,lerp:Ys,damp:Pf,pingpong:Lf,smoothstep:If,smootherstep:Df,randInt:Nf,randFloat:Uf,randFloatSpread:Ff,seededRandom:kf,degToRad:Of,radToDeg:zf,isPowerOfTwo:Bf,ceilPowerOfTwo:Hf,floorPowerOfTwo:X0,setQuaternionFromProperEuler:Gf,normalize:$0,denormalize:Y0};class _t{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*s+e.x,this.y=a*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,o,r){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=a[o+0],p=a[o+1],g=a[o+2],x=a[o+3];if(u!==x||l!==f||c!==p||h!==g){let d=l*f+c*p+h*g+u*x;d<0&&(f=-f,p=-p,g=-g,x=-x,d=-d);let m=1-r;if(d<.9995){const M=Math.acos(d),b=Math.sin(M);m=Math.sin(m*M)/b,r=Math.sin(r*M)/b,l=l*m+f*r,c=c*m+p*r,h=h*m+g*r,u=u*m+x*r}else{l=l*m+f*r,c=c*m+p*r,h=h*m+g*r,u=u*m+x*r;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,o){const r=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=a[o],f=a[o+1],p=a[o+2],g=a[o+3];return e[t]=r*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-r*p,e[t+2]=c*g+h*p+r*f-l*u,e[t+3]=h*g-r*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(s/2),u=r(a/2),f=l(n/2),p=l(s/2),g=l(a/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],o=t[1],r=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+r+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(o-s)*p}else if(n>r&&n>u){const p=2*Math.sqrt(1+n-r-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(a+c)/p}else if(r>u){const p=2*Math.sqrt(1+r-n-u);this._w=(a-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-r);this._w=(o-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,o=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*r+s*c-a*l,this._y=s*h+o*l+a*r-n*c,this._z=a*h+o*c+n*l-s*r,this._w=o*h-n*r-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,o=e._w,r=this.dot(e);r<0&&(n=-n,s=-s,a=-a,o=-o,r=-r);let l=1-t;if(r<.9995){const c=Math.acos(r),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*s-r*n),h=2*(r*t-a*s),u=2*(a*n-o*t);return this.x=t+l*c+o*u-r*h,this.y=n+l*h+r*c-a*u,this.z=s+l*u+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,o=t.x,r=t.y,l=t.z;return this.x=s*l-a*r,this.y=a*o-n*l,this.z=n*r-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new ie,Ql=new hi;class ut{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,a,o,r,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,o,r,l,c)}set(e,t,n,s,a,o,r,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=r,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],d=s[3],m=s[6],M=s[1],b=s[4],v=s[7],R=s[2],S=s[5],_=s[8];return a[0]=o*x+r*M+l*R,a[3]=o*d+r*b+l*S,a[6]=o*m+r*v+l*_,a[1]=c*x+h*M+u*R,a[4]=c*d+h*b+u*S,a[7]=c*m+h*v+u*_,a[2]=f*x+p*M+g*R,a[5]=f*d+p*b+g*S,a[8]=f*m+p*v+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*r*c-n*a*h+n*r*l+s*a*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=h*o-r*c,f=r*l-h*a,p=c*a-o*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(r*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*a-r*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,o,r){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*r)+o+e,-s*c,s*l,-s*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return ja("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(To.makeScale(e,t)),this}rotate(e){return ja("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(To.makeRotation(-e)),this}translate(e,t){return ja("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new ut,ec=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tc=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){const i={enabled:!0,workingColorSpace:so,spaces:{},convert:function(s,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===zt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===zt&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[so]:{primaries:e,whitePoint:n,transfer:ao,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:n,transfer:zt,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),i}const Ct=Wf();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class qf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=oo("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=bi(a[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xf=0;class Ml{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(Ro(s[o].image)):a.push(Ro(s[o]))}else a=Ro(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Yf=0;const Co=new ie;class yn extends Zi{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=xi,s=xi,a=Dn,o=Ni,r=jn,l=Fn,c=yn.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ji(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=N0;yn.DEFAULT_ANISOTROPY=1;class Bt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],d=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(p+1)/2,R=(m+1)/2,S=(h+f)/4,_=(u+x)/4,T=(g+d)/4;return b>v&&b>R?b<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(b),s=S/n,a=_/n):v>R?v<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),n=S/s,a=T/s):R<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),n=_/a,s=T/a),this.set(n,s,a,t),this}let M=Math.sqrt((d-g)*(d-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $f extends Zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=new yn({width:e,height:t,depth:n.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ml(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends $f{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class K0 extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kf extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class wt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,a,o,r,l,c,h,u,f,p,g,x,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,o,r,l,c,h,u,f,p,g,x,d)}set(e,t,n,s,a,o,r,l,c,h,u,f,p,g,x,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=a,m[5]=o,m[9]=r,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=x,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),a=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const f=o*h,p=o*u,g=r*h,x=r*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-r*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,x=c*u;t[0]=f+x*r,t[4]=g*r-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-r,t[2]=p*r-g,t[6]=x+f*r,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,x=c*u;t[0]=f-x*r,t[4]=-o*u,t[8]=g+p*r,t[1]=p+g*r,t[5]=o*h,t[9]=x-f*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,g=r*h,x=r*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=r*l,x=r*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-r*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,p=o*c,g=r*l,x=r*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=r*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,Jf)}lookAt(e,t,n){const s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),wi.crossVectors(n,Nn),wi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),wi.crossVectors(n,Nn)),wi.normalize(),ua.crossVectors(Nn,wi),s[0]=wi.x,s[4]=ua.x,s[8]=Nn.x,s[1]=wi.y,s[5]=ua.y,s[9]=Nn.y,s[2]=wi.z,s[6]=ua.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],d=n[10],m=n[14],M=n[3],b=n[7],v=n[11],R=n[15],S=s[0],_=s[4],T=s[8],N=s[12],P=s[1],z=s[5],H=s[9],C=s[13],I=s[2],X=s[6],O=s[10],D=s[14],te=s[3],U=s[7],J=s[11],j=s[15];return a[0]=o*S+r*P+l*I+c*te,a[4]=o*_+r*z+l*X+c*U,a[8]=o*T+r*H+l*O+c*J,a[12]=o*N+r*C+l*D+c*j,a[1]=h*S+u*P+f*I+p*te,a[5]=h*_+u*z+f*X+p*U,a[9]=h*T+u*H+f*O+p*J,a[13]=h*N+u*C+f*D+p*j,a[2]=g*S+x*P+d*I+m*te,a[6]=g*_+x*z+d*X+m*U,a[10]=g*T+x*H+d*O+m*J,a[14]=g*N+x*C+d*D+m*j,a[3]=M*S+b*P+v*I+R*te,a[7]=M*_+b*z+v*X+R*U,a[11]=M*T+b*H+v*O+R*J,a[15]=M*N+b*C+v*D+R*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],o=e[1],r=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],d=e[11],m=e[15],M=l*p-c*f,b=r*p-c*u,v=r*f-l*u,R=o*p-c*h,S=o*f-l*h,_=o*u-r*h;return t*(x*M-d*b+m*v)-n*(g*M-d*R+m*S)+s*(g*b-x*R+m*_)-a*(g*v-x*S+d*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],o=e[5],r=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-r*c)-n*(a*h-r*l)+s*(a*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],d=e[14],m=e[15],M=t*r-n*o,b=t*l-s*o,v=t*c-a*o,R=n*l-s*r,S=n*c-a*r,_=s*c-a*l,T=h*x-u*g,N=h*d-f*g,P=h*m-p*g,z=u*d-f*x,H=u*m-p*x,C=f*m-p*d,I=M*C-b*H+v*z+R*P-S*N+_*T;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/I;return e[0]=(r*C-l*H+c*z)*X,e[1]=(s*H-n*C-a*z)*X,e[2]=(x*_-d*S+m*R)*X,e[3]=(f*S-u*_-p*R)*X,e[4]=(l*P-o*C-c*N)*X,e[5]=(t*C-s*P+a*N)*X,e[6]=(d*v-g*_-m*b)*X,e[7]=(h*_-f*v+p*b)*X,e[8]=(o*H-r*P+c*T)*X,e[9]=(n*P-t*H-a*T)*X,e[10]=(g*S-x*v+m*M)*X,e[11]=(u*v-h*S-p*M)*X,e[12]=(r*N-o*z-l*T)*X,e[13]=(t*z-n*N+s*T)*X,e[14]=(x*b-g*R-d*M)*X,e[15]=(h*R-u*b+f*M)*X,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,o=e.x,r=e.y,l=e.z,c=a*o,h=a*r;return this.set(c*o+n,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+n,h*l-s*o,0,c*l-s*r,h*l+s*o,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,o){return this.set(1,n,a,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,o=t._y,r=t._z,l=t._w,c=a+a,h=o+o,u=r+r,f=a*c,p=a*h,g=a*u,x=o*h,d=o*u,m=r*u,M=l*c,b=l*h,v=l*u,R=n.x,S=n.y,_=n.z;return s[0]=(1-(x+m))*R,s[1]=(p+v)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(f+m))*S,s[6]=(d+M)*S,s[7]=0,s[8]=(g+b)*_,s[9]=(d-M)*_,s[10]=(1-(f+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let o=ns.set(s[0],s[1],s[2]).length();const r=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();a<0&&(o=-o),Xn.copy(this);const c=1/o,h=1/r,u=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),n.x=o,n.y=r,n.z=l,this}makePerspective(e,t,n,s,a,o,r=Qn,l=!1){const c=this.elements,h=2*a/(t-e),u=2*a/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let g,x;if(l)g=a/(o-a),x=o*a/(o-a);else if(r===Qn)g=-(o+a)/(o-a),x=-2*o*a/(o-a);else if(r===ta)g=-o/(o-a),x=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,o,r=Qn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,x;if(l)g=1/(o-a),x=o/(o-a);else if(r===Qn)g=-2/(o-a),x=-(o+a)/(o-a);else if(r===ta)g=-1/(o-a),x=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new ie,Xn=new wt,Zf=new ie(0,0,0),Jf=new ie(1,1,1),wi=new ie,ua=new ie,Nn=new ie,nc=new wt,ic=new hi;class ei{constructor(e=0,t=0,n=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],o=s[4],r=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jf=0;const sc=new ie,is=new hi,di=new wt,pa=new ie,Cs=new ie,Qf=new ie,ed=new hi,ac=new ie(1,0,0),oc=new ie(0,1,0),rc=new ie(0,0,1),lc={type:"added"},td={type:"removed"},ss={type:"childadded",child:null},Po={type:"childremoved",child:null};class sn extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new ie,t=new ei,n=new hi,s=new ie(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new ut}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(ac,e)}rotateY(e){return this.rotateOnAxis(oc,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return sc.copy(e).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ac,e)}translateY(e){return this.translateOnAxis(oc,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pa.copy(e):pa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Cs,pa,this.up):di.lookAt(pa,Cs,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),is.setFromRotationMatrix(di),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lc),ss.child=e,this.dispatchEvent(ss),ss.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lc),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let o=0,r=a.length;o<r;o++)a[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(r=>({...r})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(a(e.materials,this.material[l]));s.material=r}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(a(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}sn.DEFAULT_UP=new ie(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class kn extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nd={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,n),m=this._getHandJoint(c,x);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));r!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.quaternion,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(nd)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=bl(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Io(o,a,e+1/3),this.g=Io(o,a,e),this.b=Io(o,a,e-1/3)}return Ct.colorSpaceToWorking(this,s),this}setStyle(e,t=In){function n(a){a!==void 0&&parseFloat(a)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const n=Z0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Ct.workingToColorSpace(_n.copy(this),e),Math.round(Tt(_n.r*255,0,255))*65536+Math.round(Tt(_n.g*255,0,255))*256+Math.round(Tt(_n.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(_n.copy(this),t);const n=_n.r,s=_n.g,a=_n.b,o=Math.max(n,s,a),r=Math.min(n,s,a);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const u=o-r;switch(c=h<=.5?u/(o+r):u/(2-o-r),o){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=In){Ct.workingToColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,s=_n.b;return e!==In?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(ma);const n=Ys(Ei.h,ma.h,t),s=Ys(Ei.s,ma.s,t),a=Ys(Ei.l,ma.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new tt;tt.NAMES=Z0;class J0 extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yn=new ie,ui=new ie,Do=new ie,pi=new ie,as=new ie,os=new ie,cc=new ie,No=new ie,Uo=new ie,Fo=new ie,ko=new Bt,Oo=new Bt,zo=new Bt;class Zn{constructor(e=new ie,t=new ie,n=new ie){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yn.subVectors(e,t),s.cross(Yn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Yn.subVectors(s,t),ui.subVectors(n,t),Do.subVectors(e,t);const o=Yn.dot(Yn),r=Yn.dot(ui),l=Yn.dot(Do),c=ui.dot(ui),h=ui.dot(Do),u=o*c-r*r;if(u===0)return a.set(0,0,0),null;const f=1/u,p=(c*l-r*h)*f,g=(o*h-r*l)*f;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,a,o,r,l){return this.getBarycoord(e,t,n,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(r,pi.z),l)}static getInterpolatedAttribute(e,t,n,s,a,o){return ko.setScalar(0),Oo.setScalar(0),zo.setScalar(0),ko.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,n),zo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ko,a.x),o.addScaledVector(Oo,a.y),o.addScaledVector(zo,a.z),o}static isFrontFacing(e,t,n,s){return Yn.subVectors(n,t),ui.subVectors(e,t),Yn.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Yn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Zn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let o,r;as.subVectors(s,n),os.subVectors(a,n),No.subVectors(e,n);const l=as.dot(No),c=os.dot(No);if(l<=0&&c<=0)return t.copy(n);Uo.subVectors(e,s);const h=as.dot(Uo),u=os.dot(Uo);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(as,o);Fo.subVectors(e,a);const p=as.dot(Fo),g=os.dot(Fo);if(g>=0&&p<=g)return t.copy(a);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(os,r);const d=h*g-p*u;if(d<=0&&u-h>=0&&p-g>=0)return cc.subVectors(a,s),r=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(cc,r);const m=1/(d+x+f);return o=x*m,r=f*m,t.copy(n).addScaledVector(as,o).addScaledVector(os,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ji{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,r=a.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(a,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const s=e.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),xa.subVectors(this.max,Ps),rs.subVectors(e.a,Ps),ls.subVectors(e.b,Ps),cs.subVectors(e.c,Ps),Ai.subVectors(ls,rs),Ti.subVectors(cs,ls),Vi.subVectors(rs,cs);let t=[0,-Ai.z,Ai.y,0,-Ti.z,Ti.y,0,-Vi.z,Vi.y,Ai.z,0,-Ai.x,Ti.z,0,-Ti.x,Vi.z,0,-Vi.x,-Ai.y,Ai.x,0,-Ti.y,Ti.x,0,-Vi.y,Vi.x,0];return!Bo(t,rs,ls,cs,xa)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,rs,ls,cs,xa))?!1:(va.crossVectors(Ai,Ti),t=[va.x,va.y,va.z],Bo(t,rs,ls,cs,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],$n=new ie,ga=new ji,rs=new ie,ls=new ie,cs=new ie,Ai=new ie,Ti=new ie,Vi=new ie,Ps=new ie,xa=new ie,va=new ie,Wi=new ie;function Bo(i,e,t,n,s){for(let a=0,o=i.length-3;a<=o;a+=3){Wi.fromArray(i,a);const r=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const tn=new ie,_a=new _t;let id=0;class yi extends Zi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:id++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sf,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?yl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Y0(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):$0(e,this.array)}}class ro extends yi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wl extends yi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends yi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const sd=new ji,Ls=new ie,Ho=new ie;class Qi{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sd.setFromPoints(e).getCenter(n);let s=0;for(let a=0,o=e.length;a<o;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Ho)),this.expandByPoint(Ls.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ad=0;const Bn=new wt,Go=new sn,hs=new ie,Un=new ji,Is=new ji,cn=new ie;class Pn extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wf(e)?wl:ro)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ut().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Un.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const r=t[a];Is.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(Un.min,Is.min),Un.expandByPoint(cn),cn.addVectors(Un.max,Is.max),Un.expandByPoint(cn)):(Un.expandByPoint(Is.min),Un.expandByPoint(Is.max))}Un.getCenter(n);let s=0;for(let a=0,o=e.count;a<o;a++)cn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(cn));if(t)for(let a=0,o=t.length;a<o;a++){const r=t[a],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)cn.fromBufferAttribute(r,c),l&&(hs.fromBufferAttribute(e,c),cn.add(hs)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new yi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const r=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)r[N]=new ie,l[N]=new ie;const h=new ie,u=new ie,f=new ie,p=new _t,g=new _t,x=new _t,d=new ie,m=new ie;function M(N,P,z){c[N]=c[P]=c[z]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,z),p.fromBufferAttribute(a,N),g.fromBufferAttribute(a,P),x.fromBufferAttribute(a,z),u.sub(h),f.sub(h),g.sub(p),x.sub(p);const H=1/(g.x*x.y-x.x*g.y);isFinite(H)&&(d.copy(u).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(H),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(H),r[N].add(d),r[P].add(d),r[z].add(d),l[N].add(m),l[P].add(m),l[z].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,P=b.length;N<P;++N){const z=b[N],H=z.start,C=z.count;for(let I=H,X=H+C;I<X;I+=3)M(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const v=new ie,R=new ie,S=new ie,_=new ie;function T(N){S.fromBufferAttribute(s,N),_.copy(S);const P=r[N];v.copy(P),v.sub(S.multiplyScalar(S.dot(P))).normalize(),R.crossVectors(_,P);const H=R.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,H)}for(let N=0,P=n.count;N<P;++N)c[N]&&T(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new ie,a=new ie,o=new ie,r=new ie,l=new ie,c=new ie,h=new ie,u=new ie;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),o.fromBufferAttribute(t,d),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,d),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,u=r.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,d=l.length;x<d;x++){r.isInterleavedBufferAttribute?p=l[x]*r.data.stride+r.offset:p=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new yi(f,h,u)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=e(l,n);t.setAttribute(r,c)}const a=this.morphAttributes;for(const r in a){const l=[],c=a[r];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vo=new ie,od=new ie,rd=new ut;class Ii{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Vo.subVectors(n,t).cross(od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Vo),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rd.getNormalMatrix(e),s=this.coplanarPoint(Vo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ld=0;class es extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=ys,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=E0,this.blendDst=A0,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const r in a){const l=a[r];delete l.metadata,o.push(l)}return o}if(t){const a=s(e.textures),o=s(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ii().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gi=new ie,Wo=new ie,ba=new ie,ya=new ie;class uo{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wo.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),ya.copy(this.origin).sub(Wo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(ba),r=ya.dot(this.direction),l=-ya.dot(ba),c=ya.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-r,f=o*r-l,g=a*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,p=u*(u+o*f+2*r)+f*(o*u+f+2*l)+c}else f=a,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*l)+c;else f=-a,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*a+r)),f=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(u=Math.max(0,-(o*a+r)),f=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+f*(f+2*l)+c);else f=o>0?-a:a,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wo).addScaledVector(ba,f),p}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,a=e.radius*e.radius;if(s>a)return null;const o=Math.sqrt(a-s),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),u>=0?(r=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(r=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,a){const o=this.origin,r=this.direction,l=r.x,c=r.y,h=r.z,u=e.x-o.x,f=e.y-o.y,p=e.z-o.z,g=t.x-o.x,x=t.y-o.y,d=t.z-o.z,m=n.x-o.x,M=n.y-o.y,b=n.z-o.z,v=Math.abs(l),R=Math.abs(c),S=Math.abs(h);let _,T,N,P,z,H,C,I,X,O,D,te;if(v>=R&&v>=S?(N=l,H=u,X=g,te=m,l>=0?(_=c,T=h,P=f,z=p,C=x,I=d,O=M,D=b):(_=h,T=c,P=p,z=f,C=d,I=x,O=b,D=M)):R>=S?(N=c,H=f,X=x,te=M,c>=0?(_=h,T=l,P=p,z=u,C=d,I=g,O=b,D=m):(_=l,T=h,P=u,z=p,C=g,I=d,O=m,D=b)):(N=h,H=p,X=d,te=b,h>=0?(_=l,T=c,P=u,z=f,C=g,I=x,O=m,D=M):(_=c,T=l,P=f,z=u,C=x,I=g,O=M,D=m)),N===0)return null;const U=_/N,J=T/N,j=1/N,ae=P-U*H,ve=z-J*H,A=C-U*X,w=I-J*X,G=O-U*te,B=D-J*te,V=G*w-B*A,Q=ae*B-ve*G,re=A*ve-w*ae;if(s){if(V<0||Q<0||re<0)return null}else if((V<0||Q<0||re<0)&&(V>0||Q>0||re>0))return null;const le=V+Q+re;if(le===0)return null;const k=j*(V*H+Q*X+re*te);return(le>0?k<0:k>0)?null:this.at(k/le,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ia extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=T0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hc=new wt,qi=new uo,Ma=new Qi,fc=new ie,Sa=new ie,wa=new ie,Ea=new ie,qo=new ie,Aa=new ie,dc=new ie,Ta=new ie;class Qt extends sn{constructor(e=new Pn,t=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const r=this.morphTargetInfluences;if(a&&r){Aa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=r[l],u=a[l];h!==0&&(qo.fromBufferAttribute(u,e),o?Aa.addScaledVector(qo,h):Aa.addScaledVector(qo.sub(t),h))}t.add(Aa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(a),qi.copy(e.ray).recast(e.near),!(Ma.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Ma,fc)===null||qi.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(hc.copy(a).invert(),qi.copy(e.ray).applyMatrix4(hc),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let s;const a=this.geometry,o=this.material,r=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,p=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const d=f[g],m=o[d.materialIndex],M=Math.max(d.start,p.start),b=Math.min(r.count,Math.min(d.start+d.count,p.start+p.count));for(let v=M,R=b;v<R;v+=3){const S=r.getX(v),_=r.getX(v+1),T=r.getX(v+2);s=Ra(this,m,e,n,c,h,u,S,_,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(r.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){const M=r.getX(d),b=r.getX(d+1),v=r.getX(d+2);s=Ra(this,o,e,n,c,h,u,M,b,v),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const d=f[g],m=o[d.materialIndex],M=Math.max(d.start,p.start),b=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let v=M,R=b;v<R;v+=3){const S=v,_=v+1,T=v+2;s=Ra(this,m,e,n,c,h,u,S,_,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){const M=d,b=d+1,v=d+2;s=Ra(this,o,e,n,c,h,u,M,b,v),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function cd(i,e,t,n,s,a,o,r){let l;if(e.side===Cn?l=n.intersectTriangle(o,a,s,!0,r):l=n.intersectTriangle(s,a,o,e.side===Oi,r),l===null)return null;Ta.copy(r),Ta.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:i}}function Ra(i,e,t,n,s,a,o,r,l,c){i.getVertexPosition(r,Sa),i.getVertexPosition(l,wa),i.getVertexPosition(c,Ea);const h=cd(i,e,t,n,Sa,wa,Ea,dc);if(h){const u=new ie;Zn.getBarycoord(dc,Sa,wa,Ea,u),s&&(h.uv=Zn.getInterpolatedAttribute(s,r,l,c,u,new _t)),a&&(h.uv1=Zn.getInterpolatedAttribute(a,r,l,c,u,new _t)),o&&(h.normal=Zn.getInterpolatedAttribute(o,r,l,c,u,new ie),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:l,c,normal:new ie,materialIndex:0};Zn.getNormal(Sa,wa,Ea,f.normal),h.face=f,h.barycoord=u}return h}const Ds=new Bt,uc=new Bt,pc=new Bt,hd=new Bt,mc=new wt,Ca=new ie,Xo=new Qi,gc=new wt,Yo=new uo;class fd extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$l,this.bindMatrix=new wt,this.bindMatrixInverse=new wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ji),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ca),this.boundingBox.expandByPoint(Ca)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ca),this.boundingSphere.expandByPoint(Ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(s),e.ray.intersectsSphere(Xo)!==!1&&(gc.copy(s).invert(),Yo.copy(e.ray).applyMatrix4(gc),!(this.boundingBox!==null&&Yo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uf?this.bindMatrixInverse.copy(this.bindMatrix).invert():rt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;uc.fromBufferAttribute(s.attributes.skinIndex,e),pc.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ds.copy(t),t.set(0,0,0,0)):(Ds.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ds.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){const o=pc.getComponent(a);if(o!==0){const r=uc.getComponent(a);mc.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),t.addScaledVector(hd.copy(Ds).applyMatrix4(mc),o)}}return t.isVector4&&(t.w=Ds.w),t.applyMatrix4(this.bindMatrixInverse)}}class j0 extends sn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Q0 extends yn{constructor(e=null,t=1,n=1,s,a,o,r,l,c=mn,h=mn,u,f){super(null,o,r,l,c,h,s,a,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xc=new wt,dd=new wt;class El{constructor(e=[],t=[]){this.uuid=Ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){rt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new wt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new wt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,o=e.length;a<o;a++){const r=e[a]?e[a].matrixWorld:dd;xc.multiplyMatrices(r,t[a]),xc.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new El(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Q0(t,e,e,jn,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let o=t[a];o===void 0&&(rt("Skeleton: No bone found with UUID:",a),o=new j0),this.bones.push(o),this.boneInverses.push(new wt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const o=t[s];e.bones.push(o.uuid);const r=n[s];e.boneInverses.push(r.toArray())}return e}}const Xi=new Qi,ud=new _t(.5,.5),Pa=new ie;class sa{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,a=new Ii,o=new Ii){this.planes=[e,t,n,s,a,o]}set(e,t,n,s,a,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){const s=this.planes,a=e.elements,o=a[0],r=a[1],l=a[2],c=a[3],h=a[4],u=a[5],f=a[6],p=a[7],g=a[8],x=a[9],d=a[10],m=a[11],M=a[12],b=a[13],v=a[14],R=a[15];if(s[0].setComponents(c-o,p-h,m-g,R-M).normalize(),s[1].setComponents(c+o,p+h,m+g,R+M).normalize(),s[2].setComponents(c+r,p+u,m+x,R+b).normalize(),s[3].setComponents(c-r,p-u,m-x,R-b).normalize(),n)s[4].setComponents(l,f,d,v).normalize(),s[5].setComponents(c-l,p-f,m-d,R-v).normalize();else if(s[4].setComponents(c-l,p-f,m-d,R-v).normalize(),t===Qn)s[5].setComponents(c+l,p+f,m+d,R+v).normalize();else if(t===ta)s[5].setComponents(l,f,d,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const t=ud.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Pa.x=s.normal.x>0?e.max.x:e.min.x,Pa.y=s.normal.y>0?e.max.y:e.min.y,Pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const vc=new wt;class Al{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const a=t[s];vc.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),n[s]===void 0&&(n[s]=new sa),n[s].setFromProjectionMatrix(vc,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new sa),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Al().copy(this)}}class pd extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _c=new wt,Zr=new uo,La=new Qi,Ia=new ie;class eh extends sn{constructor(e=new Pn,t=new pd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=a,e.ray.intersectsSphere(La)===!1)return;_c.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(_c);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){const d=c.getX(g);Ia.fromBufferAttribute(u,d),bc(Ia,d,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Ia.fromBufferAttribute(u,g),bc(Ia,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function bc(i,e,t,n,s,a,o){const r=Zr.distanceSqToPoint(i);if(r<t){const l=new ie;Zr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class th extends yn{constructor(e=[],t=Ss,n,s,a,o,r,l,c,h){super(e,t,n,s,a,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class md extends yn{constructor(e,t,n,s,a,o,r,l,c){super(e,t,n,s,a,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Es extends yn{constructor(e,t,n=li,s,a,o,r=mn,l=mn,c,h=zi,u=1){if(h!==zi&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,a,o,r,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class nh extends Es{constructor(e,t=li,n=Ss,s,a,o=mn,r=mn,l,c=zi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,a,o,r,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ih extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ra extends Pn{constructor(e=1,t=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,a,0),g("z","y","x",1,-1,n,t,-e,o,a,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function g(x,d,m,M,b,v,R,S,_,T,N){const P=v/_,z=R/T,H=v/2,C=R/2,I=S/2,X=_+1,O=T+1;let D=0,te=0;const U=new ie;for(let J=0;J<O;J++){const j=J*z-C;for(let ae=0;ae<X;ae++){const ve=ae*P-H;U[x]=ve*M,U[d]=j*b,U[m]=I,c.push(U.x,U.y,U.z),U[x]=0,U[d]=0,U[m]=S>0?1:-1,h.push(U.x,U.y,U.z),u.push(ae/_),u.push(1-J/T),D+=1}}for(let J=0;J<T;J++)for(let j=0;j<_;j++){const ae=f+j+X*J,ve=f+j+X*(J+1),A=f+(j+1)+X*(J+1),w=f+(j+1)+X*J;l.push(ae,ve,w),l.push(ve,A,w),te+=6}r.addGroup(p,te,N),p+=te,f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Tl extends Pn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],o=[],r=[],l=[],c=new ie,h=new _t;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(r,3)),this.setAttribute("uv",new kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ki extends Pn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,o=t/2,r=Math.floor(n),l=Math.floor(s),c=r+1,h=l+1,u=e/r,f=t/l,p=[],g=[],x=[],d=[];for(let m=0;m<h;m++){const M=m*f-o;for(let b=0;b<c;b++){const v=b*u-a;g.push(v,-M,0),x.push(0,0,1),d.push(b/r),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<r;M++){const b=M+c*m,v=M+c*(m+1),R=M+1+c*(m+1),S=M+1+c*m;p.push(b,v,S),p.push(v,R,S)}this.setIndex(p),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class po extends Pn{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+r,Math.PI);let c=0;const h=[],u=new ie,f=new ie,p=[],g=[],x=[],d=[];for(let m=0;m<=n;m++){const M=[],b=m/n,v=o+b*r,R=e*Math.cos(v),S=Math.sqrt(e*e-R*R);let _=0;m===0&&o===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){const N=T/t,P=s+N*a;u.x=-S*Math.cos(P),u.y=R,u.z=S*Math.sin(P),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),d.push(N+_,1-b),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const b=h[m][M+1],v=h[m][M],R=h[m+1][M],S=h[m+1][M+1];(m!==0||o>0)&&p.push(b,v,S),(m!==n-1||l<Math.PI)&&p.push(v,R,S)}this.setIndex(p),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gd extends es{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new tt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function As(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(yc(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(yc(s[0])){const a=[];for(let o=0,r=s.length;o<r;o++)a[o]=s[o].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function wn(i){const e={};for(let t=0;t<i.length;t++){const n=As(i[t]);for(const s in n)e[s]=n[s]}return e}function yc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const vd={clone:As,merge:wn};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(s.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yd extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Md extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sd extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wd extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rl extends sn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ed extends Rl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const $o=new wt,Mc=new ie,Sc=new ie;class ah{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mc),Sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){$o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix($o,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,o=s?s.z/a.x:1,r=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===ta||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*r,0,.5*r+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*r,0,.5*r+c,0,0,.5,.5,0,0,0,1),t.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Da=new ie,Na=new hi,ni=new ie;class oh extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Da,Na,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Da,Na,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new ie,wc=new _t,Ec=new _t;class Vn extends oh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,wc,Ec),t.subVectors(Ec,wc)}setViewOffset(e,t,n,s,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(a+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ad extends ah{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ac extends Rl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ad}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class rh extends oh{constructor(e=-1,t=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,o=n+e,r=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Td extends ah{constructor(){super(new rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tc extends Rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Td}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const fs=-90,ds=1;class Jr extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vn(fs,ds,e,t);s.layers=this.layers,this.add(s);const a=new Vn(fs,ds,e,t);a.layers=this.layers,this.add(a);const o=new Vn(fs,ds,e,t);o.layers=this.layers,this.add(o);const r=new Vn(fs,ds,e,t);r.layers=this.layers,this.add(r);const l=new Vn(fs,ds,e,t);l.layers=this.layers,this.add(l);const c=new Vn(fs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,o,r,l]=t;for(const c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rd extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Rc=new wt;class Cd{constructor(e,t,n=0,s=1/0){this.ray=new uo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rc),this}intersectObject(e,t=!0,n=[]){return jr(e,this,n,t),n.sort(Cc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)jr(e[s],this,n,t);return n.sort(Cc),n}}function Cc(i,e){return i.distance-e.distance}function jr(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let o=0,r=a.length;o<r;o++)jr(a[o],e,t,!0)}}function Pc(i,e,t,n){const s=Pd(n);switch(t){case z0:return i*e;case H0:return i*e/s.components*s.byteLength;case xl:return i*e/s.components*s.byteLength;case $i:return i*e*2/s.components*s.byteLength;case vl:return i*e*2/s.components*s.byteLength;case B0:return i*e*3/s.components*s.byteLength;case jn:return i*e*4/s.components*s.byteLength;case _l:return i*e*4/s.components*s.byteLength;case $a:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case br:case Mr:return Math.max(i,16)*Math.max(e,8)/4;case _r:case yr:return Math.max(i,8)*Math.max(e,8)/2;case Sr:case wr:case Ar:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Er:case no:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ir:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ur:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Or:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Br:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vr:case Wr:case qr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xr:case Yr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case io:case $r:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pd(i){switch(i){case Fn:case U0:return{byteLength:1,components:1};case ea:case F0:case ci:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case li:case pl:case Jn:return{byteLength:4,components:1};case k0:case O0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);function lh(){let i=null,e=!1,t=null,n=null;function s(a,o){n=i.requestAnimationFrame(s),t(a,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Ld(i){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),r.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,r),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(i.deleteBuffer(l.buffer),e.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:s,remove:a,update:o}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
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
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
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
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Xd=`#ifdef USE_BUMPMAP
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tu=`#define PI 3.141592653589793
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
} // validated`,nu=`vec3 transformedNormal = objectNormal;
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
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",lu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cu=`#ifdef USE_ENVMAP
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
#endif`,hu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
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
#endif`,du=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vu=`#ifdef USE_GRADIENTMAP
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
}`,_u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Su=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ru=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,Cu=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,Pu=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,Iu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Du=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,Nu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ou=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hu=`#if defined( USE_POINTS_UV )
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
#endif`,Gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qu=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yu=`#ifdef USE_MORPHTARGETS
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
#endif`,$u=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gp=`float getShadowMask() {
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
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ip=`uniform sampler2D t2D;
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,zp=`#define DISTANCE
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
}`,Bp=`#define DISTANCE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,qp=`#include <common>
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,$p=`#define LAMBERT
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
}`,Kp=`#define MATCAP
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
}`,Zp=`#define MATCAP
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
}`,Jp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,Qp=`#define PHONG
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
}`,em=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,nm=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,im=`#define TOON
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
}`,sm=`#define TOON
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
}`,am=`uniform float size;
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
}`,om=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,lm=`uniform vec3 color;
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
}`,cm=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:Id,alphahash_pars_fragment:Dd,alphamap_fragment:Nd,alphamap_pars_fragment:Ud,alphatest_fragment:Fd,alphatest_pars_fragment:kd,aomap_fragment:Od,aomap_pars_fragment:zd,batching_pars_vertex:Bd,batching_vertex:Hd,begin_vertex:Gd,beginnormal_vertex:Vd,bsdfs:Wd,iridescence_fragment:qd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:jd,color_pars_vertex:Qd,color_vertex:eu,common:tu,defaultnormal_vertex:nu,displacementmap_pars_vertex:iu,displacementmap_vertex:su,emissivemap_fragment:au,emissivemap_pars_fragment:ou,colorspace_fragment:ru,colorspace_pars_fragment:lu,envmap_fragment:cu,envmap_common_pars_fragment:hu,envmap_pars_fragment:fu,envmap_pars_vertex:du,envmap_physical_pars_fragment:Su,envmap_vertex:uu,fog_vertex:pu,fog_pars_vertex:mu,fog_fragment:gu,fog_pars_fragment:xu,gradientmap_pars_fragment:vu,lightmap_pars_fragment:_u,lights_lambert_fragment:bu,lights_lambert_pars_fragment:yu,lights_pars_begin:Mu,lights_toon_fragment:wu,lights_toon_pars_fragment:Eu,lights_phong_fragment:Au,lights_phong_pars_fragment:Tu,lights_physical_fragment:Ru,lights_physical_pars_fragment:Cu,lights_fragment_begin:Pu,lights_fragment_maps:Lu,lights_fragment_end:Iu,lightprobes_pars_fragment:Du,logdepthbuf_fragment:Nu,logdepthbuf_pars_fragment:Uu,logdepthbuf_pars_vertex:Fu,logdepthbuf_vertex:ku,map_fragment:Ou,map_pars_fragment:zu,map_particle_fragment:Bu,map_particle_pars_fragment:Hu,metalnessmap_fragment:Gu,metalnessmap_pars_fragment:Vu,morphinstance_vertex:Wu,morphcolor_vertex:qu,morphnormal_vertex:Xu,morphtarget_pars_vertex:Yu,morphtarget_vertex:$u,normal_fragment_begin:Ku,normal_fragment_maps:Zu,normal_pars_fragment:Ju,normal_pars_vertex:ju,normal_vertex:Qu,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:ap,packing:op,premultiplied_alpha_fragment:rp,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:xp,skinning_pars_vertex:vp,skinning_vertex:_p,skinnormal_vertex:bp,specularmap_fragment:yp,specularmap_pars_fragment:Mp,tonemapping_fragment:Sp,tonemapping_pars_fragment:wp,transmission_fragment:Ep,transmission_pars_fragment:Ap,uv_pars_fragment:Tp,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Lp,background_frag:Ip,backgroundCube_vert:Dp,backgroundCube_frag:Np,cube_vert:Up,cube_frag:Fp,depth_vert:kp,depth_frag:Op,distance_vert:zp,distance_frag:Bp,equirect_vert:Hp,equirect_frag:Gp,linedashed_vert:Vp,linedashed_frag:Wp,meshbasic_vert:qp,meshbasic_frag:Xp,meshlambert_vert:Yp,meshlambert_frag:$p,meshmatcap_vert:Kp,meshmatcap_frag:Zp,meshnormal_vert:Jp,meshnormal_frag:jp,meshphong_vert:Qp,meshphong_frag:em,meshphysical_vert:tm,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:am,points_frag:om,shadow_vert:rm,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},Oe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},si={basic:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:wn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:wn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new tt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:wn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:wn([Oe.points,Oe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:wn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:wn([Oe.common,Oe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:wn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:wn([Oe.sprite,Oe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:wn([Oe.common,Oe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:wn([Oe.lights,Oe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};si.physical={uniforms:wn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Ua={r:0,b:0,g:0},fm=new wt,ch=new ut;ch.set(-1,0,0,0,1,0,0,0,1);function dm(i,e,t,n,s,a){const o=new tt(0);let r=s===!0?0:1,l,c,h=null,u=0,f=null;function p(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const v=M.backgroundBlurriness>0;b=e.get(b,v)}return b}function g(M){let b=!1;const v=p(M);v===null?d(o,r):v&&v.isColor&&(d(v,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,b){const v=p(b);v&&v.isCubeTexture?(c===void 0&&(c=new Qt(new ra(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:As(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ch),c.material.toneMapped=Ct.getTransfer(v.colorSpace)!==zt,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Qt(new ki(2,2),new On({name:"BackgroundMaterial",uniforms:As(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ct.getTransfer(v.colorSpace)!==zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,b){M.getRGB(Ua,sh(i)),t.buffers.color.setClear(Ua.r,Ua.g,Ua.b,b,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),r=b,d(o,r)},getClearAlpha:function(){return r},setClearAlpha:function(M){r=M,d(o,r)},render:g,addToRenderList:x,dispose:m}}function um(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let a=s,o=!1;function r(z,H,C,I,X){let O=!1;const D=u(z,I,C,H);a!==D&&(a=D,c(a.object)),O=p(z,I,C,X),O&&g(z,I,C,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(z,H,C,I),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function h(z){return i.deleteVertexArray(z)}function u(z,H,C,I){const X=I.wireframe===!0;let O=n[H.id];O===void 0&&(O={},n[H.id]=O);const D=z.isInstancedMesh===!0?z.id:0;let te=O[D];te===void 0&&(te={},O[D]=te);let U=te[C.id];U===void 0&&(U={},te[C.id]=U);let J=U[X];return J===void 0&&(J=f(l()),U[X]=J),J}function f(z){const H=[],C=[],I=[];for(let X=0;X<t;X++)H[X]=0,C[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:C,attributeDivisors:I,object:z,attributes:{},index:null}}function p(z,H,C,I){const X=a.attributes,O=H.attributes;let D=0;const te=C.getAttributes();for(const U in te)if(te[U].location>=0){const j=X[U];let ae=O[U];if(ae===void 0&&(U==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),U==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor)),j===void 0||j.attribute!==ae||ae&&j.data!==ae.data)return!0;D++}return a.attributesNum!==D||a.index!==I}function g(z,H,C,I){const X={},O=H.attributes;let D=0;const te=C.getAttributes();for(const U in te)if(te[U].location>=0){let j=O[U];j===void 0&&(U==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),U==="instanceColor"&&z.instanceColor&&(j=z.instanceColor));const ae={};ae.attribute=j,j&&j.data&&(ae.data=j.data),X[U]=ae,D++}a.attributes=X,a.attributesNum=D,a.index=I}function x(){const z=a.newAttributes;for(let H=0,C=z.length;H<C;H++)z[H]=0}function d(z){m(z,0)}function m(z,H){const C=a.newAttributes,I=a.enabledAttributes,X=a.attributeDivisors;C[z]=1,I[z]===0&&(i.enableVertexAttribArray(z),I[z]=1),X[z]!==H&&(i.vertexAttribDivisor(z,H),X[z]=H)}function M(){const z=a.newAttributes,H=a.enabledAttributes;for(let C=0,I=H.length;C<I;C++)H[C]!==z[C]&&(i.disableVertexAttribArray(C),H[C]=0)}function b(z,H,C,I,X,O,D){D===!0?i.vertexAttribIPointer(z,H,C,X,O):i.vertexAttribPointer(z,H,C,I,X,O)}function v(z,H,C,I){x();const X=I.attributes,O=C.getAttributes(),D=H.defaultAttributeValues;for(const te in O){const U=O[te];if(U.location>=0){let J=X[te];if(J===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),J!==void 0){const j=J.normalized,ae=J.itemSize,ve=e.get(J);if(ve===void 0)continue;const A=ve.buffer,w=ve.type,G=ve.bytesPerElement,B=w===i.INT||w===i.UNSIGNED_INT||J.gpuType===pl;if(J.isInterleavedBufferAttribute){const V=J.data,Q=V.isInterleavedBuffer===!0?V.stride:V.itemSize,re=J.offset;if(V.isInstancedInterleavedBuffer||V.isInstancedBufferAttribute){for(let le=0;le<U.locationSize;le++)m(U.location+le,V.meshPerAttribute);z.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let le=0;le<U.locationSize;le++)d(U.location+le);i.bindBuffer(i.ARRAY_BUFFER,A);for(let le=0;le<U.locationSize;le++)b(U.location+le,ae/U.locationSize,w,j,Q*G,(re+ae/U.locationSize*le)*G,B)}else{if(J.isInstancedBufferAttribute){for(let V=0;V<U.locationSize;V++)m(U.location+V,J.meshPerAttribute);z.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let V=0;V<U.locationSize;V++)d(U.location+V);i.bindBuffer(i.ARRAY_BUFFER,A);for(let V=0;V<U.locationSize;V++)b(U.location+V,ae/U.locationSize,w,j,ae*G,ae/U.locationSize*V*G,B)}}else if(D!==void 0){const j=D[te];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(U.location,j);break;case 3:i.vertexAttrib3fv(U.location,j);break;case 4:i.vertexAttrib4fv(U.location,j);break;default:i.vertexAttrib1fv(U.location,j)}}}}M()}function R(){N();for(const z in n){const H=n[z];for(const C in H){const I=H[C];for(const X in I){const O=I[X];for(const D in O)h(O[D].object),delete O[D];delete I[X]}}delete n[z]}}function S(z){if(n[z.id]===void 0)return;const H=n[z.id];for(const C in H){const I=H[C];for(const X in I){const O=I[X];for(const D in O)h(O[D].object),delete O[D];delete I[X]}}delete n[z.id]}function _(z){for(const H in n){const C=n[H];for(const I in C){const X=C[I];if(X[z.id]===void 0)continue;const O=X[z.id];for(const D in O)h(O[D].object),delete O[D];delete X[z.id]}}}function T(z){for(const H in n){const C=n[H],I=z.isInstancedMesh===!0?z.id:0,X=C[I];if(X!==void 0){for(const O in X){const D=X[O];for(const te in D)h(D[te].object),delete D[te];delete X[O]}delete C[I],Object.keys(C).length===0&&delete n[H]}}}function N(){P(),o=!0,a!==s&&(a=s,c(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:N,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:d,disableUnusedAttributes:M}}function pm(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function r(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=r}function mm(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==jn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(_){const T=_===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Fn&&_!==Jn&&!T&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,maxSamples:R,samples:S}}function gm(i){const e=this;let t=null,n=0,s=!1,a=!1;const o=new Ii,r=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||a&&!d)a?h(null):c();else{const M=a?0:n,b=M*4;let v=m.clippingState||null;l.value=v,v=h(g,f,b,p);for(let R=0;R!==b;++R)v[R]=t[R];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const x=u!==null?u.length:0;let d=null;if(x!==0){if(d=l.value,g!==!0||d===null){const m=p+x*4,M=f.matrixWorldInverse;r.getNormalMatrix(M),(d===null||d.length<m)&&(d=new Float32Array(m));for(let b=0,v=p;b!==x;++b,v+=4)o.copy(u[b]).applyMatrix4(M,r),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}class Cl extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new th(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ra(5,5,5),a=new On({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:bs});a.uniforms.tEquirect.value=t;const o=new Qt(s,a),r=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Dn),new Jr(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(a)}}const Lc=256,xm=3,vm=20,hh=256,fh=16,_m=3,bm=new ie,ym=new tt;class aa{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Jr(1,10,null),this._boxMesh=new Qt(new ra(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){const{size:o=256,position:r=bm}=a,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(ym));const d=new Jr(n,s,h);return d.position.copy(r),d.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Lc,X0(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===Qs?this._setSize(e.image.length===0?Lc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Ic(e,!1,!1),n=Math.log2(e)-xm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ic(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,a=this._cubeCamera;s.material=n,a.renderTarget=e,a.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),a.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===Qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Mm(),this._integrationMaterial=Sm());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/fh);for(let o=0;o<=n;o++){const r=aa.lodToRoughness(o,n);if(o>n-_m)a.roughness.value=r,this._renderCube(e,o,this._integrationMaterial);else{const l=r>0?Math.log2(t)+.5*Math.log2(6/(hh*Math.pow(r,4)))+.5:0;s.roughness.value=r,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=wm());const n=this._blurMaterial,s=n.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(a,0,n)}}function Ic(i,e,t){return new Cl(i,{minFilter:Ni,generateMipmaps:e,type:ci,colorSpace:so,depthBuffer:t})}function la(i,e,t){return new On({name:i,uniforms:e,vertexShader:vt.cube_vert,fragmentShader:t,side:Cn,blending:bs,depthTest:!1,depthWrite:!1})}function Mm(){return la("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Sm(){return la("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function wm(){return la("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Dc(){return la("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Nc(){return la("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Em(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?o(f):a(f)}function a(f){if(f&&f.isTexture){const p=f.mapping;if(p===Mo||p===So)if(e.has(f)){const g=e.get(f).texture;return r(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const x=new Cl(g.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),r(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const p=f.mapping,g=p===Mo||p===So,x=p===Ss||p===Qs;if(g||x){let d=t.get(f);const m=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new aa(i)),d=g?n.fromEquirectangular(f,d):n.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),d.texture;if(d!==void 0)return d.texture;{const M=f.image;return g&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new aa(i)),d=g?n.fromEquirectangular(f):n.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),f.addEventListener("dispose",h),d.texture):null}}}return f}function r(f,p){return p===Mo?f.mapping=Ss:p===So&&(f.mapping=Qs),f}function l(f){let p=0;const g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(f){const p=f.target;p.removeEventListener("dispose",h);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Am(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ja("WebGLRenderer: "+n+" extension not supported."),s}}}function Tm(i,e,t,n){const s={},a=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function r(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const d in g.attributes)e.remove(g.attributes[d]);g.removeEventListener("dispose",r),delete s[g.id],o.unregister(g);const x=a.get(g);x&&(e.remove(x),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",r),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(g){const x=g.attributes;for(const d in x)e.update(x[d],i.ARRAY_BUFFER)}function u(g){const x=g.index,d=g.attributes.position;let m=0;if(d===void 0)return;const M=x!==null?x.array.length:d.array.length/3-1,b=d.count>=65535?wl:ro,v=new b(Math.ceil(M/3)*6,1),R=v.array;if(x!==null){const _=x.array;m=x.version;for(let T=0,N=0;T<M;T+=3){const P=_[T+0],z=_[T+1],H=_[T+2];R[N++]=P,R[N++]=z,R[N++]=z,R[N++]=H,R[N++]=H,R[N++]=P}}else{m=d.version;for(let _=0,T=0;_<M;_+=3){const N=_+0,P=_+1,z=_+2;R[T++]=N,R[T++]=P,R[T++]=P,R[T++]=z,R[T++]=z,R[T++]=N}}v.version=m;const S=a.get(g);S&&e.remove(S),a.set(g,v)}function f(g){const x=a.get(g);if(x){const d=g.index;d!==null&&x.version<d.version&&u(g)}else u(g);return a.get(g)}function p(){for(const g in s){const x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:p}}function Rm(i,e,t){let n;function s(u){n=u}let a,o;function r(u){a=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,a,u*o),t.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,a,u*o,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,u,0,p);let x=0;for(let d=0;d<p;d++)x+=f[d];t.update(x,n,1)}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Cm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,r){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=r*(a/3);break;case i.LINES:t.lines+=r*(a/2);break;case i.LINE_STRIP:t.lines+=r*(a-1);break;case i.LINE_LOOP:t.lines+=r*a;break;case i.POINTS:t.points+=r*a;break;default:Nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pm(i,e,t){const n=new WeakMap,s=new Bt;function a(o,r,l){const c=o.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(r);if(f===void 0||f.count!==u){let N=function(){_.dispose(),n.delete(r),r.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();const p=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,x=r.morphAttributes.color!==void 0,d=r.morphAttributes.position||[],m=r.morphAttributes.normal||[],M=r.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let v=r.attributes.position.count*b,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const S=new Float32Array(v*R*4*u),_=new K0(S,v,R,u);_.type=Jn,_.needsUpdate=!0;const T=b*4;for(let P=0;P<u;P++){const z=d[P],H=m[P],C=M[P],I=v*R*4*P;for(let X=0;X<z.count;X++){const O=X*T;p===!0&&(s.fromBufferAttribute(z,X),S[I+O+0]=s.x,S[I+O+1]=s.y,S[I+O+2]=s.z,S[I+O+3]=0),g===!0&&(s.fromBufferAttribute(H,X),S[I+O+4]=s.x,S[I+O+5]=s.y,S[I+O+6]=s.z,S[I+O+7]=0),x===!0&&(s.fromBufferAttribute(C,X),S[I+O+8]=s.x,S[I+O+9]=s.y,S[I+O+10]=s.z,S[I+O+11]=C.itemSize===4?s.w:1)}}f={count:u,texture:_,size:new _t(v,R)},n.set(r,f),r.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=r.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Lm(i,e,t,n,s){let a=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,f=e.get(c,u);if(a.get(f)!==h&&(e.update(f),a.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;a.get(p)!==h&&(p.update(),a.set(p,h))}return f}function r(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:r}}const Im={[R0]:"LINEAR_TONE_MAPPING",[C0]:"REINHARD_TONE_MAPPING",[P0]:"CINEON_TONE_MAPPING",[L0]:"ACES_FILMIC_TONE_MAPPING",[D0]:"AGX_TONE_MAPPING",[ul]:"NEUTRAL_TONE_MAPPING",[I0]:"CUSTOM_TONE_MAPPING"};function Dm(i,e,t,n,s,a){const o=new ri(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let r=null,l=null,c=null;const h=new Pn;h.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new kt([0,2,0,0,2,0],2));const u=new yd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Qt(h,u),p=new rh(-1,1,1,-1,0,1);let g=null,x=null,d=!1,m,M=null,b=[],v=!1;this.setSize=function(R,S){o.setSize(R,S),r!==null&&r.setSize(R,S),l!==null&&l.setSize(R,S);for(let _=0;_<b.length;_++){const T=b[_];T.setSize&&T.setSize(R,S)}},this.setEffects=function(R){b=R,v=b.length>0&&b[0].isRenderPass===!0;const S=o.width,_=o.height;b.length>0&&r===null&&(r=new ri(S,_,{type:ci,depthBuffer:!1,stencilBuffer:!1}),l=new ri(S,_,{type:ci,depthBuffer:!1,stencilBuffer:!1}));const T=s===!0&&b.some(N=>N.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&c===null&&(c=new Es(S,_),a===!0&&(c.format=Ui,c.type=ws)),o.dispose(),o.depthTexture=T?c:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let N=0;N<b.length;N++){const P=b[N];P.setSize&&P.setSize(S,_),T&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,S){if(d||R.toneMapping===_i&&b.length===0)return!1;if(M=S,S!==null){const _=S.width,T=S.height;(o.width!==_||o.height!==T)&&this.setSize(_,T)}return v===!1&&R.setRenderTarget(o),m=R.toneMapping,R.toneMapping=_i,!0},this.hasRenderPass=function(){return v},this.end=function(R,S){R.toneMapping=m,d=!0;let _=o,T=r;for(let N=0;N<b.length;N++){const P=b[N];P.enabled!==!1&&(P.render(R,T,_,S),P.needsSwap!==!1&&(_=T,T=T===r?l:r))}if(g!==R.outputColorSpace||x!==R.toneMapping){g=R.outputColorSpace,x=R.toneMapping,u.defines={},Ct.getTransfer(g)===zt&&(u.defines.SRGB_TRANSFER="");const N=Im[x];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(M),R.render(f,p),M=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){o.dispose(),r!==null&&r.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const dh=new yn,uh=new Es(1,1),ph=new nh(1),mh=new K0,gh=new Kf,xh=new th,Uc=[],Fc=[],kc=new Float32Array(16),Oc=new Float32Array(9),zc=new Float32Array(4);function Ts(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Uc[s];if(a===void 0&&(a=new Float32Array(s),Uc[s]=a),e!==0){n.toArray(a,0);for(let o=1,r=0;o!==e;++o)r+=t,i[o].toArray(a,r)}return a}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mo(i,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function Om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;zc.set(n),i.uniformMatrix2fv(this.addr,!1,zc),on(t,n)}}function zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Oc.set(n),i.uniformMatrix3fv(this.addr,!1,Oc),on(t,n)}}function Bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;kc.set(n),i.uniformMatrix4fv(this.addr,!1,kc),on(t,n)}}function Hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function go(i){return i.version===0&&(i.compareFunction=W0,i.needsUpdate=!0),i}function Km(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?a=go(uh):a=dh,t.setTexture2D(e||a,s)}function Zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gh,s)}function Jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_CUBE_SHADOW?a=go(ph):a=xh,t.setTextureCube(e||a,s)}function jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||mh,s)}function Qm(i){switch(i){case 5126:return Nm;case 35664:return Um;case 35665:return Fm;case 35666:return km;case 35674:return Om;case 35675:return zm;case 35676:return Bm;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return qm;case 36294:return Xm;case 36295:return Ym;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return jm}}function eg(i,e){i.uniform1fv(this.addr,e)}function tg(i,e){const t=Ts(e,this.size,2);i.uniform2fv(this.addr,t)}function ng(i,e){const t=Ts(e,this.size,3);i.uniform3fv(this.addr,t)}function ig(i,e){const t=Ts(e,this.size,4);i.uniform4fv(this.addr,t)}function sg(i,e){const t=Ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ag(i,e){const t=Ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function og(i,e){const t=Ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rg(i,e){i.uniform1iv(this.addr,e)}function lg(i,e){i.uniform2iv(this.addr,e)}function cg(i,e){i.uniform3iv(this.addr,e)}function hg(i,e){i.uniform4iv(this.addr,e)}function fg(i,e){i.uniform1uiv(this.addr,e)}function dg(i,e){i.uniform2uiv(this.addr,e)}function ug(i,e){i.uniform3uiv(this.addr,e)}function pg(i,e){i.uniform4uiv(this.addr,e)}function mg(i,e,t){const n=this.cache,s=e.length,a=mo(t,s);an(n,a)||(i.uniform1iv(this.addr,a),on(n,a));let o;this.type===i.SAMPLER_2D_SHADOW?o=go(uh):o=dh;for(let r=0;r!==s;++r)t.setTexture2D(e[r]||o,a[r])}function gg(i,e,t){const n=this.cache,s=e.length,a=mo(t,s);an(n,a)||(i.uniform1iv(this.addr,a),on(n,a));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gh,a[o])}function xg(i,e,t){const n=this.cache,s=e.length,a=mo(t,s);an(n,a)||(i.uniform1iv(this.addr,a),on(n,a));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=go(ph):o=xh;for(let r=0;r!==s;++r)t.setTextureCube(e[r]||o,a[r])}function vg(i,e,t){const n=this.cache,s=e.length,a=mo(t,s);an(n,a)||(i.uniform1iv(this.addr,a),on(n,a));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||mh,a[o])}function _g(i){switch(i){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return rg;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return fg;case 36294:return dg;case 36295:return ug;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return vg}}class bg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qm(t.type)}}class yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_g(t.type)}}class Mg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const r=s[a];r.setValue(e,t[r.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Bc(i,e){i.seq.push(e),i.map[e.id]=e}function Sg(i,e,t){const n=i.name,s=n.length;for(Ko.lastIndex=0;;){const a=Ko.exec(n),o=Ko.lastIndex;let r=a[1];const l=a[2]==="]",c=a[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===s){Bc(t,c===void 0?new bg(r,i,e):new yg(r,i,e));break}else{let u=t.map[r];u===void 0&&(u=new Mg(r),Bc(t,u)),t=u}}}class Qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const r=e.getActiveUniform(t,o),l=e.getUniformLocation(t,r.name);Sg(r,l,this)}const s=[],a=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):a.push(o);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,o=t.length;a!==o;++a){const r=t[a],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Hc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wg=37297;let Eg=0;function Ag(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=s;o<a;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}const Gc=new ut;function Tg(i){Ct._getMatrix(Gc,Ct.workingColorSpace,i);const e=`mat3( ${Gc.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case ao:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Ag(i.getShaderSource(e),r)}else return a}function Rg(i,e){const t=Tg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Cg={[R0]:"Linear",[C0]:"Reinhard",[P0]:"Cineon",[L0]:"ACESFilmic",[D0]:"AgX",[ul]:"Neutral",[I0]:"Custom"};function Pg(i,e){const t=Cg[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fa=new ie;function Lg(){Ct.getLuminanceCoefficients(Fa);const i=Fa.x.toFixed(4),e=Fa.y.toFixed(4),t=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Dg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ng(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),o=a.name;let r=1;a.type===i.FLOAT_MAT2&&(r=2),a.type===i.FLOAT_MAT3&&(r=3),a.type===i.FLOAT_MAT4&&(r=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:r}}return t}function Gs(i){return i!==""}function Wc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function qc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qr(i){return i.replace(Ug,Fg)}function Fg(i,e){const t=vt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Qr(t)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(i){return i.replace(kg,Og)}function Og(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Yc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const zg={[qs]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function Bg(i){return zg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hg={[Qs]:"ENVMAP_MODE_REFRACTION"};function Gg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vg={[T0]:"ENVMAP_BLENDING_MULTIPLY",[ff]:"ENVMAP_BLENDING_MIX",[df]:"ENVMAP_BLENDING_ADD"};function Wg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vg[i.combine]||"ENVMAP_BLENDING_NONE"}function qg(i,e,t,n){const s=i.getContext(),a=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=Bg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Gg(t),u=Wg(t),f=Ig(t),p=Dg(a),g=s.createProgram();let x,d,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Gs).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Gs).join(`
`),d.length>0&&(d+=`
`)):(x=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),d=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?vt.tonemapping_pars_fragment:"",t.toneMapping!==_i?Pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Rg("linearToOutputTexel",t.outputColorSpace),Lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Qr(o),o=Wc(o,t),o=qc(o,t),r=Qr(r),r=Wc(r,t),r=qc(r,t),o=Xc(o),r=Xc(r),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",t.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=m+x+o,b=m+d+r,v=Hc(s,s.VERTEX_SHADER,M),R=Hc(s,s.FRAGMENT_SHADER,b);s.attachShader(g,v),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(P){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(g)||"",H=s.getShaderInfoLog(v)||"",C=s.getShaderInfoLog(R)||"",I=z.trim(),X=H.trim(),O=C.trim();let D=!0,te=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,R);else{const U=Vc(s,v,"vertex"),J=Vc(s,R,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+U+`
`+J)}else I!==""?rt("WebGLProgram: Program Info Log:",I):(X===""||O==="")&&(te=!1);te&&(P.diagnostics={runnable:D,programLog:I,vertexShader:{log:X,prefix:x},fragmentShader:{log:O,prefix:d}})}s.deleteShader(v),s.deleteShader(R),_=new Qa(s,g),T=Ng(s,g)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,wg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=R,this}let Xg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $g(e),t.set(e,n)),n}}class $g{constructor(e){this.id=Xg++,this.code=e,this.usedTimes=0}}function Kg(i){return i===$i||i===no||i===io}function Zg(i,e,t,n,s,a){const o=new Sl,r=new Yg,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,T,N,P,z,H){const C=P.fog,I=z.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,D=e.get(_.envMap||X,O),te=f[_.type];let U=n.precision;_.precision!==null&&(U=n.getMaxPrecision(_.precision),U!==_.precision&&rt("WebGLProgram.getParameters:",_.precision,"not supported, using",U,"instead."));const J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=J!==void 0?J.length:0;let ae=0;I.morphAttributes.position!==void 0&&(ae=1),I.morphAttributes.normal!==void 0&&(ae=2),I.morphAttributes.color!==void 0&&(ae=3);let ve,A,w,G;if(te){const ke=si[te];ve=ke.vertexShader,A=ke.fragmentShader}else{ve=_.vertexShader,A=_.fragmentShader;const ke=r.getVertexShaderStage(_),Ot=r.getFragmentShaderStage(_);r.update(_,ke,Ot),w=ke.id,G=Ot.id}const B=i.getRenderTarget(),V=i.state.buffers.depth.getReversed(),Q=z.isInstancedMesh===!0,re=z.isBatchedMesh===!0,le=!!_.map,k=!!_.matcap,W=!!D,Y=W&&D.isPMREMTexture===!0,ee=!!_.aoMap,me=!!_.lightMap,be=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,_e=!!_.displacementMap,xe=!!_.emissiveMap,Be=!!_.metalnessMap,ze=!!_.roughnessMap,Qe=_.anisotropy>0,$=_.clearcoat>0,je=_.diffuseRoughness>0,at=_.dispersion>0,it=_.retroreflectivity>0,Me=_.iridescence>0,Pt=_.sheen>0,He=_.transmission>0,Ke=Qe&&!!_.anisotropyMap,L=$&&!!_.clearcoatMap,y=$&&!!_.clearcoatNormalMap,ne=$&&!!_.clearcoatRoughnessMap,ye=je&&!!_.diffuseRoughnessMap,fe=Me&&!!_.iridescenceMap,Ae=Me&&!!_.iridescenceThicknessMap,De=Pt&&!!_.sheenColorMap,de=Pt&&!!_.sheenRoughnessMap,ue=!!_.specularMap,Pe=!!_.specularColorMap,q=!!_.specularIntensityMap,pe=He&&!!_.transmissionMap,he=He&&!!_.thicknessMap,Le=!!_.gradientMap,Ee=!!_.alphaMap,Ce=_.alphaTest>0,et=!!_.alphaHash,xt=!!_.extensions;let we=_i;_.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(we=i.toneMapping);const st=Y?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,mt={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:ve,fragmentShader:A,defines:_.defines,customVertexShaderID:w,customFragmentShaderID:G,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:U,batching:re,batchingColor:re&&z._colorsTexture!==null,instancing:Q,instancingColor:Q&&z.instanceColor!==null,instancingMorph:Q&&z.morphTexture!==null,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:le,matcap:k,envMap:W,envMapMode:W&&D.mapping,envMapPMREM:Y,envMapMaxLod:Y?st.length-1:null,envMapSize:Y?st[0].width:null,aoMap:ee,lightMap:me,bumpMap:be,normalMap:ge,displacementMap:_e,emissiveMap:xe,normalMapObjectSpace:ge&&_.normalMapType===gf,normalMapTangentSpace:ge&&_.normalMapType===Kr,packedNormalMap:ge&&_.normalMapType===Kr&&Kg(_.normalMap.format),metalnessMap:Be,roughnessMap:ze,anisotropy:Qe,anisotropyMap:Ke,clearcoat:$,clearcoatMap:L,clearcoatNormalMap:y,clearcoatRoughnessMap:ne,diffuseRoughness:je,diffuseRoughnessMap:ye,dispersion:at,retroreflection:it,iridescence:Me,iridescenceMap:fe,iridescenceThicknessMap:Ae,sheen:Pt,sheenColorMap:De,sheenRoughnessMap:de,specularMap:ue,specularColorMap:Pe,specularIntensityMap:q,transmission:He,transmissionMap:pe,thicknessMap:he,gradientMap:Le,opaque:_.transparent===!1&&_.blending===ys&&_.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Ce,alphaHash:et,combine:_.combine,mapUv:le&&p(_.map.channel),aoMapUv:ee&&p(_.aoMap.channel),lightMapUv:me&&p(_.lightMap.channel),bumpMapUv:be&&p(_.bumpMap.channel),normalMapUv:ge&&p(_.normalMap.channel),displacementMapUv:_e&&p(_.displacementMap.channel),emissiveMapUv:xe&&p(_.emissiveMap.channel),metalnessMapUv:Be&&p(_.metalnessMap.channel),roughnessMapUv:ze&&p(_.roughnessMap.channel),anisotropyMapUv:Ke&&p(_.anisotropyMap.channel),clearcoatMapUv:L&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:fe&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:de&&p(_.sheenRoughnessMap.channel),specularMapUv:ue&&p(_.specularMap.channel),specularColorMapUv:Pe&&p(_.specularColorMap.channel),specularIntensityMapUv:q&&p(_.specularIntensityMap.channel),transmissionMapUv:pe&&p(_.transmissionMap.channel),thicknessMapUv:he&&p(_.thicknessMap.channel),alphaMapUv:Ee&&p(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ge||Qe),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!I.attributes.uv&&(le||Ee),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:V,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ae,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.filter(ke=>ke.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:le&&_.map.isVideoTexture===!0&&Ct.getTransfer(_.map.colorSpace)===zt,decodeVideoTextureEmissive:xe&&_.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(_.emissiveMap.colorSpace)===zt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===An,flipSided:_.side===Cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xt&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&_.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function x(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)T.push(N),T.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(d(T,_),m(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function d(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function m(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){const T=f[_.type];let N;if(T){const P=si[T];N=vd.clone(P.uniforms)}else N=_.uniforms;return N}function b(_,T){let N=h.get(T);return N!==void 0?++N.usedTimes:(N=new qg(i,T,_,s),c.push(N),h.set(T,N)),N}function v(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){r.remove(_)}function S(){r.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:M,acquireProgram:b,releaseProgram:v,releaseShaderCache:R,programs:c,dispose:S}}function Jg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function n(o){i.delete(o)}function s(o,r,l){i.get(o)[r]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function jg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function $c(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kc(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function r(f,p,g,x,d,m){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:p,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:d,group:m},i[e]=M):(M.id=f.id,M.object=f,M.geometry=p,M.material=g,M.materialVariant=o(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=d,M.group=m),e++,M}function l(f,p,g,x,d,m,M){M.reversedDepth===!0&&(d=-d);const b=r(f,p,g,x,d,m);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(f,p,g,x,d,m){const M=r(f,p,g,x,d,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(f,p){t.length>1&&t.sort(f||jg),n.length>1&&n.sort(p||$c),s.length>1&&s.sort(p||$c)}function u(){for(let f=e,p=i.length;f<p;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:u,sort:h}}function Qg(){let i=new WeakMap;function e(n,s){const a=i.get(n);let o;return a===void 0?(o=new Kc,i.set(n,[o])):s>=a.length?(o=new Kc,a.push(o)):o=a[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function e1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ie,color:new tt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function t1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let n1=0;function i1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function s1(i){const e=new e1,t=t1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new ie);const s=new ie,a=new wt,o=new wt;function r(c){let h=0,u=0,f=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let p=0,g=0,x=0,d=0,m=0,M=0,b=0,v=0,R=0,S=0,_=0,T=0,N=0,P=0;c.sort(i1);for(let H=0,C=c.length;H<C;H++){const I=c[H],X=I.color,O=I.intensity,D=I.distance;let te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===$i?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=X.r*O,u+=X.g*O,f+=X.b*O;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],O);P++}else if(I.isSunLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,j=t.get(I);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=te;const ae=J.getViewportCount();for(let ve=0;ve<ae;ve++)n.sunShadowMatrix[x+ve]=J.getMatrix(ve),n.sunShadowCascade[x+ve]=J._cascadeData[ve];x+=ae,g++}n.sun[p]=U,p++}else if(I.isDirectionalLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,j=t.get(I);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=te,n.directionalShadowMatrix[d]=I.shadow.matrix,R++}n.directional[d]=U,d++}else if(I.isSpotLight){const U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(X).multiplyScalar(O),U.distance=D,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[M]=U;const J=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,J.updateMatrices(I),I.castShadow&&N++),n.spotLightMatrix[M]=J.matrix,I.castShadow){const j=t.get(I);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=te,_++}M++}else if(I.isRectAreaLight){const U=e.get(I);U.color.copy(X).multiplyScalar(O),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=U,b++}else if(I.isPointLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){const J=I.shadow,j=t.get(I);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=I.shadow.matrix,S++}n.point[m]=U,m++}else if(I.isHemisphereLight){const U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(O),U.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[v]=U,v++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const z=n.hash;(z.sunLength!==p||z.directionalLength!==d||z.pointLength!==m||z.spotLength!==M||z.rectAreaLength!==b||z.hemiLength!==v||z.numSunShadows!==g||z.numDirectionalShadows!==R||z.numPointShadows!==S||z.numSpotShadows!==_||z.numSpotMaps!==T||z.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=d,n.spot.length=M,n.rectArea.length=b,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+T-N,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,z.sunLength=p,z.directionalLength=d,z.pointLength=m,z.spotLength=M,z.rectAreaLength=b,z.hemiLength=v,z.numSunShadows=g,z.numDirectionalShadows=R,z.numPointShadows=S,z.numSpotShadows=_,z.numSpotMaps=T,z.numLightProbes=P,n.version=n1++)}function l(c,h){let u=0,f=0,p=0,g=0,x=0,d=0;const m=h.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){const v=c[M];if(v.isSunLight){const R=n.sun[u];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(m),u++}else if(v.isDirectionalLight){const R=n.directional[f];R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),f++}else if(v.isSpotLight){const R=n.spot[g];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const R=n.rectArea[x];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(m),o.identity(),a.copy(v.matrixWorld),a.premultiply(m),o.extractRotation(a),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const R=n.point[p];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const R=n.hemi[d];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(m),d++}}}return{setup:r,setupView:l,state:n}}function Zc(i){const e=new s1(i),t=[],n=[],s=[];function a(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function r(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function a1(i){let e=new WeakMap;function t(s,a=0){const o=e.get(s);let r;return o===void 0?(r=new Zc(i),e.set(s,[r])):a>=o.length?(r=new Zc(i),o.push(r)):r=o[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}const o1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,l1=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],c1=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Jc=new wt,Ns=new ie,Zo=new ie;function h1(i,e,t){let n=new sa;const s=new _t,a=new _t,o=new Bt,r=new Sd,l=new wd,c={},h=t.maxTextureSize,u={[Oi]:Cn,[Cn]:Oi,[An]:An},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:o1,fragmentShader:r1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let m=this.type;this.render=function(S,_,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;this.type===qh&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);const N=i.getRenderTarget(),P=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),H=i.state;H.setBlending(bs),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const C=m!==this.type;C&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(X=>X.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,X=S.length;I<X;I++){const O=S[I],D=O.shadow;if(D===void 0){rt("WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const te=D.getFrameExtents();s.multiply(te),a.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/te.x),s.x=a.x*te.x,D.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/te.y),s.y=a.y*te.y,D.mapSize.y=a.y));const U=i.state.buffers.depth.getReversed();if(D.camera._reversedDepth=U,D.map===null||C===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Hs){if(O.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new ri(s.x,s.y,{format:$i,type:ci,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),D.map.texture.name=O.name+".shadowMap",D.map.depthTexture=new Es(s.x,s.y,Jn),D.map.depthTexture.name=O.name+".shadowMapDepth",D.map.depthTexture.format=zi,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=mn,D.map.depthTexture.magFilter=mn}else O.isPointLight?(D.map=new Cl(s.x),D.map.depthTexture=new nh(s.x,li)):(D.map=new ri(s.x,s.y),D.map.depthTexture=new Es(s.x,s.y,li)),D.map.depthTexture.name=O.name+".shadowMap",D.map.depthTexture.format=zi,this.type===qs?(D.map.depthTexture.compareFunction=U?V0:G0,D.map.depthTexture.minFilter=Dn,D.map.depthTexture.magFilter=Dn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=mn,D.map.depthTexture.magFilter=mn);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==s.x||D.map.height!==s.y)&&D.map.setSize(s.x,s.y);const J=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();O.isPointLight!==!0&&D.updateMatrices(O,T);const j=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:T.layers;for(let ae=0;ae<J;ae++){const ve=D.getCamera(ae);if(O.isPointLight){const A=D.camera,w=D.matrix,G=O.distance||A.far;G!==A.far&&(A.far=G,A.updateProjectionMatrix()),Ns.setFromMatrixPosition(O.matrixWorld),A.position.copy(Ns),Zo.copy(A.position),Zo.add(l1[ae]),A.up.copy(c1[ae]),A.lookAt(Zo),A.updateMatrixWorld(),w.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Jc.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Jc,A.coordinateSystem,A.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)i.setRenderTarget(D.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(D.map),i.clear());const A=D.getViewport(ae);o.set(a.x*A.x,a.y*A.y,a.x*A.z,a.y*A.w),H.viewport(o)}n=D.getFrustum(ae),v(_,T,ve,O,j,this.type)}D.isPointLightShadow!==!0&&this.type===Hs&&M(D,T),D.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(N,P,z)};function M(S,_){const T=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new ri(s.x,s.y,{format:$i,type:ci}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,T,f,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,T,p,x,null)}function b(S,_,T,N){let P=null;const z=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(z!==void 0)P=z;else if(P=T.isPointLight===!0?l:r,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const H=P.uuid,C=_.uuid;let I=c[H];I===void 0&&(I={},c[H]=I);let X=I[C];X===void 0&&(X=P.clone(),I[C]=X,_.addEventListener("dispose",R)),P=X}if(P.visible=_.visible,P.wireframe=_.wireframe,N===Hs?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const H=i.properties.get(P);H.light=T}return P}function v(S,_,T,N,P,z){if(S.visible===!1)return;if(S.layers.test(P)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&z===Hs)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const I=e.update(S),X=S.material;if(Array.isArray(X)){const O=I.groups;for(let D=0,te=O.length;D<te;D++){const U=O[D],J=X[U.materialIndex];if(J&&J.visible){const j=b(S,J,N,z);S.onBeforeShadow(i,S,_,T,I,j,U),i.renderBufferDirect(T,null,I,j,S,U),S.onAfterShadow(i,S,_,T,I,j,U)}}}else if(X.visible){const O=b(S,X,N,z);S.onBeforeShadow(i,S,_,T,I,O,null),i.renderBufferDirect(T,null,I,O,S,null),S.onAfterShadow(i,S,_,T,I,O,null)}}const C=S.children;for(let I=0,X=C.length;I<X;I++)v(C[I],_,T,N,P,z)}function R(S){S.target.removeEventListener("dispose",R);for(const T in c){const N=c[T],P=S.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function f1(i,e){function t(){let q=!1;const pe=new Bt;let he=null;const Le=new Bt(0,0,0,0);return{setMask:function(Ee){he!==Ee&&!q&&(i.colorMask(Ee,Ee,Ee,Ee),he=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,Ce,et,xt,we){we===!0&&(Ee*=xt,Ce*=xt,et*=xt),pe.set(Ee,Ce,et,xt),Le.equals(pe)===!1&&(i.clearColor(Ee,Ce,et,xt),Le.copy(pe))},reset:function(){q=!1,he=null,Le.set(-1,0,0,0)}}}function n(){let q=!1,pe=!1,he=null,Le=null,Ee=null;return{setReversed:function(Ce){if(pe!==Ce){const et=e.get("EXT_clip_control");Ce?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),pe=Ce;const xt=Ee;Ee=null,this.setClear(xt)}},getReversed:function(){return pe},setTest:function(Ce){Ce?V(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(Ce){he!==Ce&&!q&&(i.depthMask(Ce),he=Ce)},setFunc:function(Ce){if(pe&&(Ce=Tf[Ce]),Le!==Ce){switch(Ce){case hr:i.depthFunc(i.NEVER);break;case fr:i.depthFunc(i.ALWAYS);break;case dr:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case ur:i.depthFunc(i.EQUAL);break;case pr:i.depthFunc(i.GEQUAL);break;case mr:i.depthFunc(i.GREATER);break;case gr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=Ce}},setLocked:function(Ce){q=Ce},setClear:function(Ce){Ee!==Ce&&(Ee=Ce,pe&&(Ce=1-Ce),i.clearDepth(Ce))},reset:function(){q=!1,he=null,Le=null,Ee=null,pe=!1}}}function s(){let q=!1,pe=null,he=null,Le=null,Ee=null,Ce=null,et=null,xt=null,we=null;return{setTest:function(st){q||(st?V(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(st){pe!==st&&!q&&(i.stencilMask(st),pe=st)},setFunc:function(st,mt,ke){(he!==st||Le!==mt||Ee!==ke)&&(i.stencilFunc(st,mt,ke),he=st,Le=mt,Ee=ke)},setOp:function(st,mt,ke){(Ce!==st||et!==mt||xt!==ke)&&(i.stencilOp(st,mt,ke),Ce=st,et=mt,xt=ke)},setLocked:function(st){q=st},setClear:function(st){we!==st&&(i.clearStencil(st),we=st)},reset:function(){q=!1,pe=null,he=null,Le=null,Ee=null,Ce=null,et=null,xt=null,we=null}}}const a=new t,o=new n,r=new s;let l={};const c=new WeakMap;let h={},u={},f={},p=new WeakMap,g=[],x=null,d=!1,m=null,M=null,b=null,v=null,R=null,S=null,_=null,T=new tt(0,0,0),N=0,P=!1,z=null,H=null,C=null,I=null,X=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,te=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(U)[1]),D=te>=1):U.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),D=te>=2);let J=null,j={};const ae=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),A=new Bt().fromArray(ae),w=new Bt().fromArray(ve);function G(q,pe,he,Le){const Ee=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(q,Ce),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<he;et++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(pe+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Ce}const B={};B[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),r.setClear(0),V(i.DEPTH_TEST),o.setFunc(js),be(!1),ge(ql),V(i.CULL_FACE),ee(bs);function V(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function Q(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function re(q,pe){return f[q]!==pe?(i.bindFramebuffer(q,pe),f[q]=pe,q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function le(q,pe){let he=g,Le=!1;if(q){he=p.get(pe),he===void 0&&(he=[],p.set(pe,he));const Ee=q.textures;if(he.length!==Ee.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,et=Ee.length;Ce<et;Ce++)he[Ce]=i.COLOR_ATTACHMENT0+Ce;he.length=Ee.length,Le=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,Le=!0);Le&&i.drawBuffers(he)}function k(q){return x!==q?(i.useProgram(q),x=q,!0):!1}const W={[vs]:i.FUNC_ADD,[Yh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};W[Kh]=i.MIN,W[Zh]=i.MAX;const Y={[Jh]:i.ZERO,[jh]:i.ONE,[Qh]:i.SRC_COLOR,[E0]:i.SRC_ALPHA,[of]:i.SRC_ALPHA_SATURATE,[sf]:i.DST_COLOR,[tf]:i.DST_ALPHA,[ef]:i.ONE_MINUS_SRC_COLOR,[A0]:i.ONE_MINUS_SRC_ALPHA,[af]:i.ONE_MINUS_DST_COLOR,[nf]:i.ONE_MINUS_DST_ALPHA,[rf]:i.CONSTANT_COLOR,[lf]:i.ONE_MINUS_CONSTANT_COLOR,[cf]:i.CONSTANT_ALPHA,[hf]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(q,pe,he,Le,Ee,Ce,et,xt,we,st){if(q===bs){d===!0&&(Q(i.BLEND),d=!1);return}if(d===!1&&(V(i.BLEND),d=!0),q!==Xh){if(q!==m||st!==P){if((M!==vs||R!==vs)&&(i.blendEquation(i.FUNC_ADD),M=vs,R=vs),st)switch(q){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Js:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",q);break}else switch(q){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xl:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",q);break}b=null,v=null,S=null,_=null,T.set(0,0,0),N=0,m=q,P=st}return}Ee=Ee||pe,Ce=Ce||he,et=et||Le,(pe!==M||Ee!==R)&&(i.blendEquationSeparate(W[pe],W[Ee]),M=pe,R=Ee),(he!==b||Le!==v||Ce!==S||et!==_)&&(i.blendFuncSeparate(Y[he],Y[Le],Y[Ce],Y[et]),b=he,v=Le,S=Ce,_=et),(xt.equals(T)===!1||we!==N)&&(i.blendColor(xt.r,xt.g,xt.b,we),T.copy(xt),N=we),m=q,P=!1}function me(q,pe){q.side===An?Q(i.CULL_FACE):V(i.CULL_FACE);let he=q.side===Cn;pe&&(he=!he),be(he),q.blending===ys&&q.transparent===!1?ee(bs):ee(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),a.setMask(q.colorWrite);const Le=q.stencilWrite;r.setTest(Le),Le&&(r.setMask(q.stencilWriteMask),r.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),r.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),xe(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(q){z!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),z=q)}function ge(q){q!==Vh?(V(i.CULL_FACE),q!==H&&(q===ql?i.cullFace(i.BACK):q===Wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),H=q}function _e(q){q!==C&&(D&&i.lineWidth(q),C=q)}function xe(q,pe,he){q?(V(i.POLYGON_OFFSET_FILL),(I!==pe||X!==he)&&(I=pe,X=he,o.getReversed()&&(pe=-pe,he=-he),i.polygonOffset(pe,he))):Q(i.POLYGON_OFFSET_FILL)}function Be(q){q?V(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function ze(q){q===void 0&&(q=i.TEXTURE0+O-1),J!==q&&(i.activeTexture(q),J=q)}function Qe(q,pe,he){he===void 0&&(J===null?he=i.TEXTURE0+O-1:he=J);let Le=j[he];Le===void 0&&(Le={type:void 0,texture:void 0},j[he]=Le),(Le.type!==q||Le.texture!==pe)&&(J!==he&&(i.activeTexture(he),J=he),i.bindTexture(q,pe||B[q]),Le.type=q,Le.texture=pe)}function $(){const q=j[J];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(q){Nt("WebGLState:",q)}}function at(){try{i.compressedTexImage3D(...arguments)}catch(q){Nt("WebGLState:",q)}}function it(){try{i.texSubImage2D(...arguments)}catch(q){Nt("WebGLState:",q)}}function Me(){try{i.texSubImage3D(...arguments)}catch(q){Nt("WebGLState:",q)}}function Pt(){try{i.compressedTexSubImage2D(...arguments)}catch(q){Nt("WebGLState:",q)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(q){Nt("WebGLState:",q)}}function Ke(){try{i.texStorage2D(...arguments)}catch(q){Nt("WebGLState:",q)}}function L(){try{i.texStorage3D(...arguments)}catch(q){Nt("WebGLState:",q)}}function y(){try{i.texImage2D(...arguments)}catch(q){Nt("WebGLState:",q)}}function ne(){try{i.texImage3D(...arguments)}catch(q){Nt("WebGLState:",q)}}function ye(q){return u[q]!==void 0?u[q]:i.getParameter(q)}function fe(q,pe){u[q]!==pe&&(i.pixelStorei(q,pe),u[q]=pe)}function Ae(q){A.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),A.copy(q))}function De(q){w.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),w.copy(q))}function de(q,pe){let he=c.get(pe);he===void 0&&(he=new WeakMap,c.set(pe,he));let Le=he.get(q);Le===void 0&&(Le=i.getUniformBlockIndex(pe,q.name),i.uniformBlockBinding(pe,Le,Le),he.set(q,Le))}function ue(q,pe,he){const Ee=c.get(pe).get(q);l[Ee]!==he&&(i.bindBufferBase(i.UNIFORM_BUFFER,Ee,he),l[Ee]=he)}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,j={},f={},l={},p=new WeakMap,g=[],x=null,d=!1,m=null,M=null,b=null,v=null,R=null,S=null,_=null,T=new tt(0,0,0),N=0,P=!1,z=null,H=null,C=null,I=null,X=null,A.set(0,0,i.canvas.width,i.canvas.height),w.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),r.reset()}return{buffers:{color:a,depth:o,stencil:r},enable:V,disable:Q,bindFramebuffer:re,drawBuffers:le,useProgram:k,setBlending:ee,setMaterial:me,setFlipSided:be,setCullFace:ge,setLineWidth:_e,setPolygonOffset:xe,setScissorTest:Be,activeTexture:ze,bindTexture:Qe,unbindTexture:$,compressedTexImage2D:je,compressedTexImage3D:at,texImage2D:y,texImage3D:ne,pixelStorei:fe,getParameter:ye,updateUBOMapping:de,uniformBlockBinding:ue,texStorage2D:Ke,texStorage3D:L,texSubImage2D:it,texSubImage3D:Me,compressedTexSubImage2D:Pt,compressedTexSubImage3D:He,scissor:Ae,viewport:De,reset:Pe}}function d1(i,e,t,n,s,a,o){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,u=new Set;let f;const p=new WeakMap,g=new Set,x=new FinalizationRegistry(L=>g.delete(L));let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,y){return d?new OffscreenCanvas(L,y):oo("canvas")}function M(L,y,ne){let ye=1;const fe=Ke(L);if((fe.width>ne||fe.height>ne)&&(ye=ne/Math.max(fe.width,fe.height)),ye<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ae=Math.floor(ye*fe.width),De=Math.floor(ye*fe.height);f===void 0&&(f=m(Ae,De));const de=y?m(Ae,De):f;return de.width=Ae,de.height=De,de.getContext("2d").drawImage(L,0,0,Ae,De),rt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ae+"x"+De+")."),de}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),L;return L}function b(L){return L.generateMipmaps}function v(L){i.generateMipmap(L)}function R(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(L,y,ne,ye,fe,Ae=!1){if(L!==null){if(i[L]!==void 0)return i[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let De;ye&&(De=e.get("EXT_texture_norm16"),De||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=y;if(y===i.RED&&(ne===i.FLOAT&&(de=i.R32F),ne===i.HALF_FLOAT&&(de=i.R16F),ne===i.UNSIGNED_BYTE&&(de=i.R8),ne===i.UNSIGNED_SHORT&&De&&(de=De.R16_EXT),ne===i.SHORT&&De&&(de=De.R16_SNORM_EXT)),y===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(de=i.R8UI),ne===i.UNSIGNED_SHORT&&(de=i.R16UI),ne===i.UNSIGNED_INT&&(de=i.R32UI),ne===i.BYTE&&(de=i.R8I),ne===i.SHORT&&(de=i.R16I),ne===i.INT&&(de=i.R32I)),y===i.RG&&(ne===i.FLOAT&&(de=i.RG32F),ne===i.HALF_FLOAT&&(de=i.RG16F),ne===i.UNSIGNED_BYTE&&(de=i.RG8),ne===i.UNSIGNED_SHORT&&De&&(de=De.RG16_EXT),ne===i.SHORT&&De&&(de=De.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(ne===i.UNSIGNED_BYTE&&(de=i.RG8UI),ne===i.UNSIGNED_SHORT&&(de=i.RG16UI),ne===i.UNSIGNED_INT&&(de=i.RG32UI),ne===i.BYTE&&(de=i.RG8I),ne===i.SHORT&&(de=i.RG16I),ne===i.INT&&(de=i.RG32I)),y===i.RGB_INTEGER&&(ne===i.UNSIGNED_BYTE&&(de=i.RGB8UI),ne===i.UNSIGNED_SHORT&&(de=i.RGB16UI),ne===i.UNSIGNED_INT&&(de=i.RGB32UI),ne===i.BYTE&&(de=i.RGB8I),ne===i.SHORT&&(de=i.RGB16I),ne===i.INT&&(de=i.RGB32I)),y===i.RGBA_INTEGER&&(ne===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),ne===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),ne===i.UNSIGNED_INT&&(de=i.RGBA32UI),ne===i.BYTE&&(de=i.RGBA8I),ne===i.SHORT&&(de=i.RGBA16I),ne===i.INT&&(de=i.RGBA32I)),y===i.RGB&&(ne===i.UNSIGNED_SHORT&&De&&(de=De.RGB16_EXT),ne===i.SHORT&&De&&(de=De.RGB16_SNORM_EXT),ne===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),ne===i.UNSIGNED_INT_10F_11F_11F_REV&&(de=i.R11F_G11F_B10F)),y===i.RGBA){const ue=Ae?ao:Ct.getTransfer(fe);ne===i.FLOAT&&(de=i.RGBA32F),ne===i.HALF_FLOAT&&(de=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(de=ue===zt?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT&&De&&(de=De.RGBA16_EXT),ne===i.SHORT&&De&&(de=De.RGBA16_SNORM_EXT),ne===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function _(L,y){let ne;return L?y===null||y===li||y===ws?ne=i.DEPTH24_STENCIL8:y===Jn?ne=i.DEPTH32F_STENCIL8:y===ea&&(ne=i.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===li||y===ws?ne=i.DEPTH_COMPONENT24:y===Jn?ne=i.DEPTH_COMPONENT32F:y===ea&&(ne=i.DEPTH_COMPONENT16),ne}function T(L,y){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==mn&&L.minFilter!==Dn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function N(L){const y=new WeakRef(L);n.get(L).__ref=y,g.add(y),x.register(L,y,y)}function P(L){const y=n.get(L).__ref;y!==void 0&&(g.delete(y),x.unregister(y))}function z(L){C(L.target)}function H(L){I(L.target)}function C(L){L.removeEventListener("dispose",z),P(L),O(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function I(L){L.removeEventListener("dispose",H),P(L),te(L)}function X(){for(const L of g){const y=L.deref();y!==void 0&&(y.isRenderTarget===!0?I(y):C(y))}g.clear(),u.clear()}function O(L){const y=n.get(L);if(y.__webglInit===void 0)return;const ne=L.source,ye=p.get(ne);if(ye){const fe=ye[y.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&D(L),Object.keys(ye).length===0&&p.delete(ne)}n.remove(L)}function D(L){const y=n.get(L);i.deleteTexture(y.__webglTexture);const ne=L.source,ye=p.get(ne);delete ye[y.__cacheKey],o.memory.textures--}function te(L){const y=n.get(L);y.__depthDisposeCallback&&y.__depthDisposeCallback();const ne=L.depthTexture;if(ne&&ne.renderTarget===L&&C(ne),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(y.__webglFramebuffer[fe]))for(let Ae=0;Ae<y.__webglFramebuffer[fe].length;Ae++)i.deleteFramebuffer(y.__webglFramebuffer[fe][Ae]);else i.deleteFramebuffer(y.__webglFramebuffer[fe]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[fe])}else{if(Array.isArray(y.__webglFramebuffer))for(let fe=0;fe<y.__webglFramebuffer.length;fe++)i.deleteFramebuffer(y.__webglFramebuffer[fe]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let fe=0;fe<y.__webglColorRenderbuffer.length;fe++)y.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[fe]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const ye=L.textures;for(let fe=0,Ae=ye.length;fe<Ae;fe++){const De=n.get(ye[fe]);De.__webglTexture&&(i.deleteTexture(De.__webglTexture),o.memory.textures--),n.remove(ye[fe])}n.remove(L)}let U=0;function J(){U=0}function j(){return U}function ae(L){U=L}function ve(){const L=U;return L>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,L}function A(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.mipmapsAutoUpdate),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function w(L,y){const ne=n.get(L);if(L.isVideoTexture&&Pt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ne.__version!==L.version){const ye=L.image;if(ye===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{me(ne,L,y);return}}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+y)}function G(L,y){const ne=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){me(ne,L,y);return}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+y)}function B(L,y){const ne=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){me(ne,L,y);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+y)}function V(L,y){const ne=n.get(L);if(L.version>0&&ne.__version!==L.version){be(ne,L,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+y)}const Q={[xr]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[vr]:i.MIRRORED_REPEAT},re={[mn]:i.NEAREST,[pf]:i.NEAREST_MIPMAP_NEAREST,[da]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},le={[vf]:i.NEVER,[W0]:i.ALWAYS,[_f]:i.LESS,[G0]:i.LEQUAL,[bf]:i.EQUAL,[V0]:i.GEQUAL,[yf]:i.GREATER,[Mf]:i.NOTEQUAL};function k(L,y){if(y.type===Jn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Dn||y.magFilter===wo||y.magFilter===da||y.magFilter===Ni||y.minFilter===Dn||y.minFilter===wo||y.minFilter===da||y.minFilter===Ni)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Q[y.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Q[y.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Q[y.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,re[y.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,re[y.minFilter]),y.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===mn||y.minFilter!==da&&y.minFilter!==Ni||y.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function W(L,y){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",z),N(y));const ye=y.source;let fe=p.get(ye);fe===void 0&&(fe={},p.set(ye,fe));const Ae=A(y);if(Ae!==L.__cacheKey){fe[Ae]===void 0&&(fe[Ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),fe[Ae].usedTimes++;const De=fe[L.__cacheKey];De!==void 0&&(fe[L.__cacheKey].usedTimes--,De.usedTimes===0&&D(y)),L.__cacheKey=Ae,L.__webglTexture=fe[Ae].texture}return ne}function Y(L,y,ne){return Math.floor(Math.floor(L/ne)/y)}function ee(L,y,ne,ye){const Ae=L.updateRanges;if(Ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,ne,ye,y.data);else{Ae.sort((q,pe)=>q.start-pe.start);let De=0;for(let q=1;q<Ae.length;q++){const pe=Ae[De],he=Ae[q],Le=pe.start+pe.count,Ee=Y(he.start,y.width,4),Ce=Y(pe.start,y.width,4);he.start<=Le+1&&Ee===Ce&&Y(he.start+he.count-1,y.width,4)===Ee?pe.count=Math.max(pe.count,he.start+he.count-pe.start):(++De,Ae[De]=he)}Ae.length=De+1;const de=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),Pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let q=0,pe=Ae.length;q<pe;q++){const he=Ae[q],Le=Math.floor(he.start/4),Ee=Math.ceil(he.count/4),Ce=Le%y.width,et=Math.floor(Le/y.width),xt=Ee,we=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,et),t.texSubImage2D(i.TEXTURE_2D,0,Ce,et,xt,we,ne,ye,y.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,de),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function me(L,y,ne){let ye=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ye=i.TEXTURE_3D);const fe=W(L,y),Ae=y.source;t.bindTexture(ye,L.__webglTexture,i.TEXTURE0+ne);const De=n.get(Ae);if(Ae.version!==De.__version||fe===!0){if(t.activeTexture(i.TEXTURE0+ne),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const we=Ct.getPrimaries(Ct.workingColorSpace),st=y.colorSpace===Di?null:Ct.getPrimaries(y.colorSpace),mt=y.colorSpace===Di||we===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ue=M(y.image,!1,s.maxTextureSize);ue=He(y,ue);const Pe=a.convert(y.format,y.colorSpace),q=a.convert(y.type);let pe=S(y.internalFormat,Pe,q,y.normalized,y.colorSpace,y.isVideoTexture);k(ye,y);let he;const Le=y.mipmaps,Ee=y.isVideoTexture!==!0,Ce=De.__version===void 0||fe===!0,et=Ae.dataReady,xt=T(y,ue);if(y.isDepthTexture)pe=_(y.format===Ui,y.type),Ce&&(Ee?t.texStorage2D(i.TEXTURE_2D,1,pe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,pe,ue.width,ue.height,0,Pe,q,null));else if(y.isDataTexture)if(Le.length>0){Ee&&Ce&&t.texStorage2D(i.TEXTURE_2D,xt,pe,Le[0].width,Le[0].height);for(let we=0,st=Le.length;we<st;we++)he=Le[we],Ee?et&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,he.width,he.height,Pe,q,he.data):t.texImage2D(i.TEXTURE_2D,we,pe,he.width,he.height,0,Pe,q,he.data);y.generateMipmaps=!1}else Ee?(Ce&&t.texStorage2D(i.TEXTURE_2D,xt,pe,ue.width,ue.height),et&&ee(y,ue,Pe,q)):t.texImage2D(i.TEXTURE_2D,0,pe,ue.width,ue.height,0,Pe,q,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ee&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xt,pe,Le[0].width,Le[0].height,ue.depth);for(let we=0,st=Le.length;we<st;we++)if(he=Le[we],y.format!==jn)if(Pe!==null)if(Ee){if(et)if(y.layerUpdates.size>0){const mt=Pc(he.width,he.height,y.format,y.type);for(const ke of y.layerUpdates){const Ot=he.data.subarray(ke*mt/he.data.BYTES_PER_ELEMENT,(ke+1)*mt/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,ke,he.width,he.height,1,Pe,Ot)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,he.width,he.height,ue.depth,Pe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,pe,he.width,he.height,ue.depth,0,he.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?et&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,he.width,he.height,ue.depth,Pe,q,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,pe,he.width,he.height,ue.depth,0,Pe,q,he.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ee&&Ce&&t.texStorage2D(i.TEXTURE_2D,xt,pe,Le[0].width,Le[0].height);for(let we=0,st=Le.length;we<st;we++)he=Le[we],y.format!==jn?Pe!==null?Ee?et&&t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,he.width,he.height,Pe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,we,pe,he.width,he.height,0,he.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?et&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,he.width,he.height,Pe,q,he.data):t.texImage2D(i.TEXTURE_2D,we,pe,he.width,he.height,0,Pe,q,he.data)}else if(y.isDataArrayTexture)if(Ee){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xt,pe,ue.width,ue.height,ue.depth),et)if(y.layerUpdates.size>0){const we=Pc(ue.width,ue.height,y.format,y.type);for(const st of y.layerUpdates){const mt=ue.data.subarray(st*we/ue.data.BYTES_PER_ELEMENT,(st+1)*we/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ue.width,ue.height,1,Pe,q,mt)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Pe,q,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,ue.width,ue.height,ue.depth,0,Pe,q,ue.data);else if(y.isData3DTexture)Ee?(Ce&&t.texStorage3D(i.TEXTURE_3D,xt,pe,ue.width,ue.height,ue.depth),et&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Pe,q,ue.data)):t.texImage3D(i.TEXTURE_3D,0,pe,ue.width,ue.height,ue.depth,0,Pe,q,ue.data);else if(y.isFramebufferTexture){if(Ce)if(Ee)t.texStorage2D(i.TEXTURE_2D,xt,pe,ue.width,ue.height);else{let we=ue.width,st=ue.height;for(let mt=0;mt<xt;mt++)t.texImage2D(i.TEXTURE_2D,mt,pe,we,st,0,Pe,q,null),we>>=1,st>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const we=i.canvas;if(we.hasAttribute("layoutsubtree")||we.setAttribute("layoutsubtree","true"),ue.parentNode!==we){we.appendChild(ue),u.add(y),we.onpaint=st=>{const mt=st.changedElements;for(const ke of u)mt.includes(ke.image)&&(ke.needsUpdate=!0)},we.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{const mt=i.RGBA,ke=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,ke,Ot,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ee&&Ce){const we=Ke(Le[0]);t.texStorage2D(i.TEXTURE_2D,xt,pe,we.width,we.height)}for(let we=0,st=Le.length;we<st;we++)he=Le[we],Ee?et&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Pe,q,he):t.texImage2D(i.TEXTURE_2D,we,pe,Pe,q,he);y.generateMipmaps=!1}else if(Ee){if(Ce){const we=Ke(ue);t.texStorage2D(i.TEXTURE_2D,xt,pe,we.width,we.height)}et&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,q,ue)}else t.texImage2D(i.TEXTURE_2D,0,pe,Pe,q,ue);b(y)&&y.mipmapsAutoUpdate===!0&&v(ye),De.__version=Ae.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function be(L,y,ne){if(y.image.length!==6)return;const ye=W(L,y),fe=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+ne);const Ae=n.get(fe);if(fe.version!==Ae.__version||ye===!0){t.activeTexture(i.TEXTURE0+ne);const De=Ct.getPrimaries(Ct.workingColorSpace),de=y.colorSpace===Di?null:Ct.getPrimaries(y.colorSpace),ue=y.colorSpace===Di||De===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Pe=y.isCompressedTexture||y.image[0].isCompressedTexture,q=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let ke=0;ke<6;ke++)!Pe&&!q?pe[ke]=M(y.image[ke],!0,s.maxCubemapSize):pe[ke]=q?y.image[ke].image:y.image[ke],pe[ke]=He(y,pe[ke]);const he=pe[0],Le=a.convert(y.format,y.colorSpace),Ee=a.convert(y.type);let Ce=S(y.internalFormat,Le,Ee,y.normalized,y.colorSpace);const et=y.isVideoTexture!==!0,xt=Ae.__version===void 0||ye===!0,we=fe.dataReady;let st=T(y,he);k(i.TEXTURE_CUBE_MAP,y);let mt;if(y.isDepthTexture){if(Ce=_(y.format===Ui,y.type),xt)if(et)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ce,he.width,he.height);else for(let ke=0;ke<6;ke++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ce,he.width,he.height,0,Le,Ee,null)}else if(Pe){et&&xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ce,he.width,he.height);for(let ke=0;ke<6;ke++){mt=pe[ke].mipmaps;for(let Ot=0;Ot<mt.length;Ot++){const rn=mt[Ot];y.format!==jn?Le!==null?et?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ot,0,0,rn.width,rn.height,Le,rn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ot,Ce,rn.width,rn.height,0,rn.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ot,0,0,rn.width,rn.height,Le,Ee,rn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ot,Ce,rn.width,rn.height,0,Le,Ee,rn.data)}}}else{if(mt=y.mipmaps,et&&xt){mt.length>0&&st++;const ke=Ke(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ce,ke.width,ke.height)}for(let ke=0;ke<6;ke++)if(q){et?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,pe[ke].width,pe[ke].height,Le,Ee,pe[ke].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ce,pe[ke].width,pe[ke].height,0,Le,Ee,pe[ke].data);for(let Ot=0;Ot<mt.length;Ot++){const Mi=mt[Ot].image[ke].image;et?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ot+1,0,0,Mi.width,Mi.height,Le,Ee,Mi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ot+1,Ce,Mi.width,Mi.height,0,Le,Ee,Mi.data)}}else{et?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,Le,Ee,pe[ke]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ce,Le,Ee,pe[ke]);for(let Ot=0;Ot<mt.length;Ot++){const rn=mt[Ot];et?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ot+1,0,0,Le,Ee,rn.image[ke]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ot+1,Ce,Le,Ee,rn.image[ke])}}}b(y)&&y.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),Ae.__version=fe.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function ge(L,y,ne,ye,fe,Ae){const De=a.convert(ne.format,ne.colorSpace),de=a.convert(ne.type),ue=S(ne.internalFormat,De,de,ne.normalized,ne.colorSpace),Pe=n.get(y),q=n.get(ne);if(q.__renderTarget=y,!Pe.__hasExternalTextures){const pe=Math.max(1,y.width>>Ae),he=Math.max(1,y.height>>Ae);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,Ae,ue,pe,he,y.depth,0,De,de,null):t.texImage2D(fe,Ae,ue,pe,he,0,De,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Me(y)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,fe,q.__webglTexture,0,it(y)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,fe,q.__webglTexture,Ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(L,y,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,L),y.depthBuffer){const ye=y.depthTexture,fe=ye&&ye.isDepthTexture?ye.type:null,Ae=_(y.stencilBuffer,fe),De=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(y)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(y),Ae,y.width,y.height):ne?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(y),Ae,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,L)}else{const ye=y.textures;for(let fe=0;fe<ye.length;fe++){const Ae=ye[fe],De=a.convert(Ae.format,Ae.colorSpace),de=a.convert(Ae.type),ue=S(Ae.internalFormat,De,de,Ae.normalized,Ae.colorSpace);Me(y)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(y),ue,y.width,y.height):ne?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(y),ue,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ue,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(L,y,ne){const ye=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=n.get(y.depthTexture);fe.__renderTarget=y;const Ae=ye?y.depthTexture.image[0]:y.depthTexture.image;(!fe.__webglTexture||Ae.width!==y.width||Ae.height!==y.height)&&(Ae.width=y.width,Ae.height=y.height,y.depthTexture.needsUpdate=!0),ye?V(y.depthTexture,0):w(y.depthTexture,0);const De=fe.__webglTexture,de=it(y),ue=ye?i.TEXTURE_CUBE_MAP_POSITIVE_X+ne:i.TEXTURE_2D,Pe=y.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===zi)Me(y)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,ue,De,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,Pe,ue,De,0);else if(y.depthTexture.format===Ui)Me(y)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,ue,De,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,Pe,ue,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(L){const y=n.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){const ye=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ye){const fe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ye.removeEventListener("dispose",fe)};ye.addEventListener("dispose",fe),y.__depthDisposeCallback=fe}y.__boundDepthTexture=ye}if(L.depthTexture&&!y.__autoAllocateDepthBuffer)if(ne)for(let ye=0;ye<6;ye++)xe(y.__webglFramebuffer[ye],L,ye);else L.texture.mipmaps.length>0?xe(y.__webglFramebuffer[0],L,0):xe(y.__webglFramebuffer,L,0);else if(ne){y.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ye]),y.__webglDepthbuffer[ye]===void 0)y.__webglDepthbuffer[ye]=i.createRenderbuffer(),_e(y.__webglDepthbuffer[ye],L,!1);else{const fe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=y.__webglDepthbuffer[ye];i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,Ae)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),_e(y.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,Ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(L,y,ne){const ye=n.get(L);y!==void 0&&ge(ye.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&Be(L)}function Qe(L){const y=L.texture,ne=n.get(L),ye=n.get(y);L.addEventListener("dispose",H),N(L);const fe=L.textures,Ae=L.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=y.version,o.memory.textures++),Ae){ne.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps.length>0){ne.__webglFramebuffer[de]=[];for(let ue=0;ue<y.mipmaps.length;ue++)ne.__webglFramebuffer[de][ue]=i.createFramebuffer()}else ne.__webglFramebuffer[de]=i.createFramebuffer()}else{if(y.mipmaps.length>0){ne.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)ne.__webglFramebuffer[de]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(De)for(let de=0,ue=fe.length;de<ue;de++){const Pe=n.get(fe[de]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Me(L)===!1){ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let de=0;de<fe.length;de++){const ue=fe[de];ne.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[de]);const Pe=a.convert(ue.format,ue.colorSpace),q=a.convert(ue.type),pe=S(ue.internalFormat,Pe,q,ue.normalized,ue.colorSpace,L.isXRRenderTarget===!0),he=it(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,pe,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ne.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(ne.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),k(i.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)ge(ne.__webglFramebuffer[de][ue],L,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ue);else ge(ne.__webglFramebuffer[de],L,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);b(y)?v(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(De){for(let de=0,ue=fe.length;de<ue;de++){const Pe=fe[de],q=n.get(Pe);let pe=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,q.__webglTexture),k(pe,Pe),ge(ne.__webglFramebuffer,L,Pe,i.COLOR_ATTACHMENT0+de,pe,0),b(Pe)&&v(pe)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ye.__webglTexture),k(de,y),y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)ge(ne.__webglFramebuffer[ue],L,y,i.COLOR_ATTACHMENT0,de,ue);else ge(ne.__webglFramebuffer,L,y,i.COLOR_ATTACHMENT0,de,0);b(y)?v(de):y.mipmaps.length>0&&i.texParameteri(de,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Be(L)}function $(L){const y=L.textures;for(let ne=0,ye=y.length;ne<ye;ne++){const fe=y[ne];if(b(fe)&&fe.mipmapsAutoUpdate===!0){const Ae=R(L),De=n.get(fe).__webglTexture;t.bindTexture(Ae,De),v(Ae),t.unbindTexture()}}}const je=[];function at(L){if(L.samples>0){if(Me(L)===!1){const y=L.textures,ne=L.width,ye=L.height;let fe=i.COLOR_BUFFER_BIT;const Ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(L),de=y.length>1;if(de)for(let Pe=0;Pe<y.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Pe=0;Pe<y.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);const q=n.get(y[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,q,0)}i.blitFramebuffer(0,0,ne,ye,0,0,ne,ye,fe,i.NEAREST),l===!0&&(je.length=0,je.push(i.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&je.push(Ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Pe=0;Pe<y.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);const q=n.get(y[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const y=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function it(L){return Math.min(s.maxSamples,L.samples)}function Me(L){const y=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pt(L){const y=o.render.frame;h.get(L)!==y&&(h.set(L,y),L.update())}function He(L,y){const ne=L.colorSpace,ye=L.format,fe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ne!==so&&ne!==Di&&(Ct.getTransfer(ne)===zt?(ye!==jn||fe!==Fn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",ne)),y}function Ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=ve,this.resetTextureUnits=J,this.getTextureUnits=j,this.setTextureUnits=ae,this.setTexture2D=w,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=ze,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Me,this.dispose=X}function u1(i,e){function t(n,s=Di){let a;const o=Ct.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===k0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===O0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===U0)return i.BYTE;if(n===F0)return i.SHORT;if(n===ea)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===ci)return i.HALF_FLOAT;if(n===z0)return i.ALPHA;if(n===B0)return i.RGB;if(n===jn)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===H0)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===$a||n===Ka||n===Za||n===Ja)if(o===zt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===$a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===$a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_r||n===br||n===yr||n===Mr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===_r)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===br)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sr||n===wr||n===Er||n===Ar||n===Tr||n===no||n===Rr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Sr||n===wr)return o===zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Er)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ar)return a.COMPRESSED_R11_EAC;if(n===Tr)return a.COMPRESSED_SIGNED_R11_EAC;if(n===no)return a.COMPRESSED_RG11_EAC;if(n===Rr)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cr||n===Pr||n===Lr||n===Ir||n===Dr||n===Nr||n===Ur||n===Fr||n===kr||n===Or||n===zr||n===Br||n===Hr||n===Gr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Cr)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pr)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lr)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ir)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dr)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nr)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ur)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fr)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kr)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Or)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zr)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Br)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hr)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gr)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===Wr||n===qr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Vr)return o===zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xr||n===Yr||n===io||n===$r)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Xr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Yr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$r)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const p1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ih(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:p1,fragmentShader:m1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x1 extends Zi{constructor(e,t){super();const n=this;let s=null,a=1,o=null,r="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",d=new g1,m={},M=t.getContextAttributes();let b=null,v=null;const R=[],S=[],_=new _t;let T=null,N=null;const P=new Vn;P.viewport=new Bt;const z=new Vn;z.viewport=new Bt;const H=[P,z],C=new Rd;let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let w=R[A];return w===void 0&&(w=new Lo,R[A]=w),w.getTargetRaySpace()},this.getControllerGrip=function(A){let w=R[A];return w===void 0&&(w=new Lo,R[A]=w),w.getGripSpace()},this.getHand=function(A){let w=R[A];return w===void 0&&(w=new Lo,R[A]=w),w.getHandSpace()};function O(A){const w=S.indexOf(A.inputSource);if(w===-1)return;const G=R[w];G!==void 0&&(G.update(A.inputSource,A.frame,c||o),G.dispatchEvent({type:A.type,data:A.inputSource}))}function D(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",te);for(let A=0;A<R.length;A++){const w=S[A];w!==null&&(S[A]=null,R[A].disconnect(w))}I=null,X=null,d.reset();for(const A in m)delete m[A];if(e.setRenderTarget(b),p=null,f=null,u=null,s=null,v=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),N!==null){const A=N.camera;A.fov=N.fov,A.zoom=N.zoom,A.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){a=A,n.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){r=A,n.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(A){c=A},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(A){if(s=A,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",D),s.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,B=null,V=null;M.depth&&(V=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=M.stencil?Ui:zi,B=M.stencil?ws:li);const Q={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:a};u=this.getBinding(),f=u.createProjectionLayer(Q),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ri(f.textureWidth,f.textureHeight,{format:jn,type:Fn,depthTexture:new Es(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const G={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ri(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(r),ve.setContext(s),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function te(A){for(let w=0;w<A.removed.length;w++){const G=A.removed[w],B=S.indexOf(G);B>=0&&(S[B]=null,R[B].disconnect(G))}for(let w=0;w<A.added.length;w++){const G=A.added[w];let B=S.indexOf(G);if(B===-1){for(let Q=0;Q<R.length;Q++)if(Q>=S.length){S.push(G),B=Q;break}else if(S[Q]===null){S[Q]=G,B=Q;break}if(B===-1)break}const V=R[B];V&&V.connect(G)}}function U(A,w){w===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(w.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(s===null)return;let w=A.near,G=A.far;d.texture!==null&&(d.depthNear>0&&(w=d.depthNear),d.depthFar>0&&(G=d.depthFar)),C.near=z.near=P.near=w,C.far=z.far=P.far=G,(I!==C.near||X!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,X=C.far),C.layers.mask=A.layers.mask|6,P.layers.mask=C.layers.mask&-5,z.layers.mask=C.layers.mask&-3;const B=A.parent,V=C.cameras;U(C,B);for(let Q=0;Q<V.length;Q++)U(V[Q],B);C.projectionMatrix.copy(P.projectionMatrix),C.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&A.isPerspectiveCamera&&(N={camera:A,fov:A.fov,zoom:A.zoom}),J(A,C,B)};function J(A,w,G){G===null?A.matrix.copy(w.matrixWorld):(A.matrix.copy(G.matrixWorld),A.matrix.invert(),A.matrix.multiply(w.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(w.projectionMatrix),A.projectionMatrixInverse.copy(w.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=na*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(A){l=A,f!==null&&(f.fixedFoveation=A),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=A)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(C)},this.getCameraTexture=function(A){return m[A]};let j=null;function ae(A,w){if(h=w.getViewerPose(c||o),g=w,h!==null){const G=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let B=!1;G.length!==C.cameras.length&&(C.cameras.length=0,B=!0);for(let le=0;le<G.length;le++){const k=G[le];let W=null;if(p!==null)W=p.getViewport(k);else{const ee=u.getViewSubImage(f,k);W=ee.viewport,le===0&&(e.setRenderTargetTextures(v,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(v))}let Y=H[le];Y===void 0&&(Y=new Vn,Y.layers.enable(le),Y.viewport=new Bt,H[le]=Y),Y.matrix.fromArray(k.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(k.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(W.x,W.y,W.width,W.height),le===0&&(C.matrix.copy(Y.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),B===!0&&C.cameras.push(Y)}const V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const le=u.getDepthInformation(G[0]);le&&le.isValid&&le.texture&&d.init(le,s.renderState)}if(V&&V.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let le=0;le<G.length;le++){const k=G[le].camera;if(k){let W=m[k];W||(W=new ih,m[k]=W);const Y=u.getCameraImage(k);W.sourceTexture=Y}}}}for(let G=0;G<R.length;G++){const B=S[G],V=R[G];B!==null&&V!==void 0&&V.update(B,w,c||o)}j&&j(A,w),w.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:w}),g=null}const ve=new lh;ve.setAnimationLoop(ae),this.setAnimationLoop=function(A){j=A},this.dispose=function(){}}}const v1=new wt,vh=new ut;vh.set(-1,0,0,0,1,0,0,0,1);function _1(i,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,sh(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,M,b,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(d,m):m.isMeshLambertMaterial?(a(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(d,m),u(d,m)):m.isMeshPhongMaterial?(a(d,m),h(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,v)):m.isMeshMatcapMaterial?(a(d,m),g(d,m)):m.isMeshDepthMaterial?a(d,m):m.isMeshDistanceMaterial?(a(d,m),x(d,m)):m.isMeshNormalMaterial?a(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&r(d,m)):m.isPointsMaterial?l(d,m,M,b):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Cn&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Cn&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const M=e.get(m),b=M.envMap,v=M.envMapRotation;b&&(d.envMap.value=b,d.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(vh),d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function r(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,M,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*M,d.scale.value=b*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,M){d.ior.value=m.ior,m.diffuseRoughness>0&&(d.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Cn&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.retroreflectivity>0&&(d.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function x(d,m){const M=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b1(i,e,t,n){let s={},a={};function o(M,b){const v=b.program;n.uniformBlockBinding(M,v,s[M.id])}function r(M,b){let v=s[M.id];v===void 0&&(g(M),v=l(M),s[M.id]=v,M.addEventListener("dispose",d));const R=b.program;n.updateUBOMapping(M,R);const S=e.render.frame;a[M.id]!==S&&(c(M),a[M.id]=S)}function l(M){const b=i.createBuffer(),v=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,v,R),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(M){const b=s[M.id],v=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,_=v.length;S<_;S++){const T=v[S];if(Array.isArray(T))for(let N=0,P=T.length;N<P;N++)h(T[N],S,N,R);else h(T,S,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,b,v,R){if(f(M,b,v,R)===!0){const S=M.__offset,_=M.value;if(Array.isArray(_)){let T=0;for(let N=0;N<_.length;N++){const P=_[N],z=x(P,!0);u(P,M.__data,T),T+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,M.__data)}}function u(M,b,v){typeof M=="number"||typeof M=="boolean"?b[v]=M:M.isMatrix3?(b[v]=M.elements[0],b[v+1]=M.elements[1],b[v+2]=M.elements[2],b[v+3]=0,b[v+4]=M.elements[3],b[v+5]=M.elements[4],b[v+6]=M.elements[5],b[v+7]=0,b[v+8]=M.elements[6],b[v+9]=M.elements[7],b[v+10]=M.elements[8],b[v+11]=0):ArrayBuffer.isView(M)?b.set(M.subarray(0,b.length-v),v):M.toArray(b,v)}function f(M,b,v,R){const S=M.value,_=b+"_"+v;if(Array.isArray(S)){R[_]===void 0&&(R[_]=[]);const T=R[_];let N=!1;for(let P=0;P<S.length;P++)p(S[P],T,P)===!0&&(N=!0);return N}return p(S,R,_)}function p(M,b,v){if(b[v]===void 0)return typeof M=="number"||typeof M=="boolean"?b[v]=M:ArrayBuffer.isView(M)?b[v]=M.slice():b[v]=M.clone(),!0;{const R=b[v];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return b[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function g(M){const b=M.uniforms;let v=0;const R=16;for(let _=0,T=b.length;_<T;_++){const N=Array.isArray(b[_])?b[_]:[b[_]];for(let P=0,z=N.length;P<z;P++){const H=N[P],C=Array.isArray(H.value)?H.value:[H.value],I=Array.isArray(b[_])||Array.isArray(H.value);let X=v;for(let D=0,te=C.length;D<te;D++){const U=C[D],J=x(U,I),j=v%R,ae=j%J.boundary,ve=j+ae;v+=ae,ve!==0&&R-ve<J.storage&&(v+=R-ve),D===0&&(X=v),v+=J.storage}const O=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new O((v-X)/Float32Array.BYTES_PER_ELEMENT),H.__offset=X}}const S=v%R;return S>0&&(v+=R-S),M.__size=v,M.__cache={},this}function x(M,b){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",M),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function d(M){const b=M.target;b.removeEventListener("dispose",d),i.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);s={},a={}}return{bind:o,update:r,dispose:m}}const y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function M1(){return ii===null&&(ii=new Q0(y1,16,16,$i,ci),ii.name="DFG_LUT",ii.minFilter=Dn,ii.magFilter=Dn,ii.wrapS=xi,ii.wrapT=xi,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class S1{constructor(e={}){const{canvas:t=Ef(),context:n=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Fn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=p,d=new Set([_l,vl,xl]),m=new Set([Fn,li,ea,ws,ml,gl]),M=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let R=null,S=null;const _=[],T=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let z=!1,H=null,C=null,I=null,X=null;this._outputColorSpace=In;let O=0,D=0,te=null,U=-1,J=null;const j=new Bt,ae=new Bt;let ve=null;const A=new tt(0);let w=0,G=t.width,B=t.height,V=1,Q=null,re=null;const le=new Bt(0,0,G,B),k=new Bt(0,0,G,B);let W=!1;const Y=new sa,ee=new Al;let me=!1,be=!1;const ge=new wt,_e=new ie,xe=new Bt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Qe(){return te===null?V:1}let $=n;function je(E,Z){return t.getContext(E,Z)}let at,it,Me,Pt,He,Ke,L,y,ne,ye,fe,Ae,De,de,ue,Pe,q,pe,he,Le,Ee,Ce,et;try{const E={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dl}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",ke,!1),$===null){const Z="webgl2";if($=je(Z,E),$===null)throw je(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xt()}catch(E){throw t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Nt("WebGLRenderer: "+E.message),E}function xt(){at=new Am($),at.init(),Ee=new u1($,at),it=new mm($,at,e,Ee),Me=new f1($,at),it.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),C=$.createFramebuffer(),I=$.createFramebuffer(),X=$.createFramebuffer(),Pt=new Cm($),He=new Jg,Ke=new d1($,at,Me,He,it,Ee,Pt),L=new Em(P),y=new Ld($),Ce=new um($,y),ne=new Tm($,y,Pt,Ce),ye=new Lm($,ne,y,Ce,Pt),pe=new Pm($,it,Ke),ue=new gm(He),fe=new Zg(P,L,at,it,Ce,ue),Ae=new _1(P,He),De=new Qg,de=new a1(at),q=new dm(P,L,Me,ye,g,l),Pe=new h1(P,ye,it),et=new b1($,Pt,it,Me),he=new pm($,at,Pt),Le=new Rm($,at,Pt),Pt.programs=fe.programs,P.capabilities=it,P.extensions=at,P.properties=He,P.renderLists=De,P.shadowMap=Pe,P.state=Me,P.info=Pt}x!==Fn&&(N=new Dm(x,t.width,t.height,r,s,a));const we=new x1(P,$);this.xr=we,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,B,!1))},this.getSize=function(E){return E.set(G,B)},this.setSize=function(E,Z,ce=!0){if(we.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,B=Z,t.width=Math.floor(E*V),t.height=Math.floor(Z*V),ce===!0&&(t.style.width=E+"px",t.style.height=Z+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,E,Z)},this.getDrawingBufferSize=function(E){return E.set(G*V,B*V).floor()},this.setDrawingBufferSize=function(E,Z,ce){G=E,B=Z,V=ce,t.width=Math.floor(E*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,E,Z)},this.setEffects=function(E){if(x===Fn){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let Z=0;Z<E.length;Z++)if(E[Z].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,Z,ce,se){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,Z,ce,se),Me.viewport(j.copy(le).multiplyScalar(Qe()).round())},this.getScissor=function(E){return E.copy(k)},this.setScissor=function(E,Z,ce,se){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,Z,ce,se),Me.scissor(ae.copy(k).multiplyScalar(Qe()).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(E){Me.setScissorTest(W=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor(...arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha(...arguments)},this.clear=function(E=!0,Z=!0,ce=!0){let se=0;if(E){let oe=!1;if(te!==null){const Ne=te.texture.format;oe=d.has(Ne)}if(oe){const Ne=te.texture.type,We=m.has(Ne),Ie=q.getClearColor(),Ge=q.getClearAlpha(),Ze=Ie.r,ft=Ie.g,Et=Ie.b;We?(M[0]=Ze,M[1]=ft,M[2]=Et,M[3]=Ge,$.clearBufferuiv($.COLOR,0,M)):(b[0]=Ze,b[1]=ft,b[2]=Et,b[3]=Ge,$.clearBufferiv($.COLOR,0,b))}else se|=$.COLOR_BUFFER_BIT}Z&&(se|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(se|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&$.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),H=E},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),q.dispose(),De.dispose(),de.dispose(),Ke.dispose(),He.dispose(),L.dispose(),ye.dispose(),ne.dispose(),Ce.dispose(),et.dispose(),fe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ul),we.removeEventListener("sessionend",Fl),Bi.stop()};function st(E){E.preventDefault(),Jl("WebGLRenderer: Context Lost."),z=!0}function mt(){Jl("WebGLRenderer: Context Restored."),z=!1;const E=Pt.autoReset,Z=Pe.enabled,ce=Pe.autoUpdate,se=Pe.needsUpdate,oe=Pe.type;xt(),Pt.autoReset=E,Pe.enabled=Z,Pe.autoUpdate=ce,Pe.needsUpdate=se,Pe.type=oe}function ke(E){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ot(E){const Z=E.target;Z.removeEventListener("dispose",Ot),rn(Z)}function rn(E){Mi(E),He.remove(E)}function Mi(E){const Z=He.get(E).programs;Z!==void 0&&(Z.forEach(function(ce){fe.releaseProgram(ce)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,Z,ce,se,oe,Ne){Z===null&&(Z=Be);const We=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ie=Bh(E,Z,ce,se,oe);Me.setMaterial(se,We);let Ge=ce.index,Ze=1;if(se.wireframe===!0){if(Ge=ne.getWireframeAttribute(ce),Ge===void 0)return;Ze=2}const ft=ce.drawRange,Et=ce.attributes.position;let qe=ft.start*Ze,At=(ft.start+ft.count)*Ze;Ne!==null&&(qe=Math.max(qe,Ne.start*Ze),At=Math.min(At,(Ne.start+Ne.count)*Ze)),Ge!==null?(qe=Math.max(qe,0),At=Math.min(At,Ge.count)):Et!=null&&(qe=Math.max(qe,0),At=Math.min(At,Et.count));const en=At-qe;if(en<0||en===1/0)return;Ce.setup(oe,se,Ie,ce,Ge);let Wt,Ht=he;if(Ge!==null&&(Wt=y.get(Ge),Ht=Le,Ht.setIndex(Wt)),oe.isMesh)se.wireframe===!0?(Me.setLineWidth(se.wireframeLinewidth*Qe()),Ht.setMode($.LINES)):Ht.setMode($.TRIANGLES);else if(oe.isLine){let gn=se.linewidth;gn===void 0&&(gn=1),Me.setLineWidth(gn*Qe()),oe.isLineSegments?Ht.setMode($.LINES):oe.isLineLoop?Ht.setMode($.LINE_LOOP):Ht.setMode($.LINE_STRIP)}else oe.isPoints?Ht.setMode($.POINTS):oe.isSprite&&Ht.setMode($.TRIANGLES);if(oe.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Ht.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const gn=oe._multiDrawStarts,Xe=oe._multiDrawCounts,Mn=oe._multiDrawCount,Ut=Ge?y.get(Ge).bytesPerElement:1,Hi=He.get(se).currentProgram.getUniforms();for(let xn=0;xn<Mn;xn++)Hi.setValue($,"_gl_DrawID",xn),Ht.render(gn[xn]/Ut,Xe[xn])}else if(oe.isInstancedMesh)Ht.renderInstances(qe,en,oe.count);else if(ce.isInstancedBufferGeometry){const gn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Xe=Math.min(ce.instanceCount,gn);Ht.renderInstances(qe,en,Xe)}else Ht.render(qe,en)};function Nl(E,Z,ce,se){H!==null&&E.isNodeMaterial&&H.setObject(se,E),me===!0&&ue.setState(E,ce,!1),E.transparent===!0&&E.side===An&&E.forceSinglePass===!1?(E.side=Cn,E.needsUpdate=!0,Rs(E,Z,se),E.side=Oi,E.needsUpdate=!0,Rs(E,Z,se),E.side=An):Rs(E,Z,se)}this.compile=function(E,Z,ce=null){ce===null&&(ce=E),H!==null&&H.renderStart(E,Z,ce),S=de.get(ce),S.init(Z),T.push(S),ce.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Z.layers)&&(S.pushLight(oe),oe.castShadow&&S.pushShadow(oe))}),E!==ce&&E.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Z.layers)&&(S.pushLight(oe),oe.castShadow&&S.pushShadow(oe))}),S.setupLights(),H!==null&&H.updateLights(S.state.lightsArray),be=this.localClippingEnabled,me=ue.init(this.clippingPlanes,be),me===!0&&ue.setGlobalState(this.clippingPlanes,Z),H!==null&&Pe.render(S.state.shadowsArray,ce,Z);const se=new Set;return E.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Ne=oe.material;if(Ne)if(Array.isArray(Ne))for(let We=0;We<Ne.length;We++){const Ie=Ne[We];Nl(Ie,ce,Z,oe),se.add(Ie)}else Nl(Ne,ce,Z,oe),se.add(Ne)}),S=T.pop(),H!==null&&H.renderEnd(),se},this.compileAsync=function(E,Z,ce=null){const se=this.compile(E,Z,ce);return new Promise(oe=>{function Ne(){if(se.forEach(function(We){const Ge=He.get(We).currentProgram;(Ge===void 0||Ge.isReady())&&se.delete(We)}),se.size===0){oe(E);return}setTimeout(Ne,10)}at.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let bo=null;function Oh(E){bo&&bo(E)}function Ul(){Bi.stop()}function Fl(){Bi.start()}const Bi=new lh;Bi.setAnimationLoop(Oh),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(E){bo=E,we.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},we.addEventListener("sessionstart",Ul),we.addEventListener("sessionend",Fl),this.render=function(E,Z){if(Z!==void 0&&Z.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;H!==null&&H.renderStart(E,Z);const ce=we.enabled===!0&&we.isPresenting===!0,se=N!==null&&(te===null||ce)&&N.begin(P,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(Z),Z=we.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,Z,te),S=de.get(E,T.length),S.init(Z),S.state.textureUnits=Ke.getTextureUnits(),T.push(S),ge.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Z.isArrayCamera?ee.setFromArrayCamera(Z):Y.setFromProjectionMatrix(ge,Qn,Z.reversedDepth),be=this.localClippingEnabled,me=ue.init(this.clippingPlanes,be),R=De.get(E,_.length),R.init(),_.push(R),this.info.render.frame++,we.enabled===!0&&we.isPresenting===!0){const We=P.xr.getDepthSensingMesh();We!==null&&yo(We,Z,-1/0,P.sortObjects)}yo(E,Z,0,P.sortObjects),R.finish(),H!==null&&H.updateLights(S.state.lightsArray),P.sortObjects===!0&&R.sort(Q,re),ze=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ze&&q.addToRenderList(R,E),this.info.autoReset===!0&&this.info.reset(),me===!0&&ue.beginShadows();const oe=S.state.shadowsArray;if(Pe.render(oe,E,Z),me===!0&&ue.endShadows(),(se&&N.hasRenderPass())===!1){const We=R.opaque,Ie=R.transmissive;if(S.setupLights(),Z.isArrayCamera){const Ge=Z.cameras;if(Ie.length>0)for(let Ze=0,ft=Ge.length;Ze<ft;Ze++){const Et=Ge[Ze];Ol(We,Ie,E,Et)}ze&&q.render(E);for(let Ze=0,ft=Ge.length;Ze<ft;Ze++){const Et=Ge[Ze];kl(R,E,Et,Et.viewport)}}else Ie.length>0&&Ol(We,Ie,E,Z),ze&&q.render(E),kl(R,E,Z)}te!==null&&D===0&&(Ke.updateMultisampleRenderTarget(te),Ke.updateRenderTargetMipmap(te)),se&&N.end(P),E.isScene===!0&&E.onAfterRender(P,E,Z),Ce.resetDefaultState(),U=-1,J=null,T.pop(),T.length>0?(S=T[T.length-1],Ke.setTextureUnits(S.state.textureUnits),me===!0&&ue.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,H!==null&&H.renderEnd()};function yo(E,Z,ce,se){if(E.visible===!1)return;if(E.layers.test(Z.layers)){if(E.isGroup)ce=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(Z);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){const We=Z.isArrayCamera?ee:Y;if(!E.frustumCulled||E.intersectsFrustum(We)){se&&xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);const Ie=ye.update(E),Ge=E.material;Ge.visible&&R.push(E,Ie,Ge,ce,xe.z,null,Z)}}else if(E.isMesh||E.isLine||E.isPoints){const We=Z.isArrayCamera?ee:Y;if(!E.frustumCulled||E.intersectsFrustum(We)){const Ie=ye.update(E),Ge=E.material;if(se&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),xe.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),xe.copy(Ie.boundingSphere.center)),xe.applyMatrix4(E.matrixWorld).applyMatrix4(ge)),Array.isArray(Ge)){const Ze=Ie.groups;for(let ft=0,Et=Ze.length;ft<Et;ft++){const qe=Ze[ft],At=Ge[qe.materialIndex];At&&At.visible&&R.push(E,Ie,At,ce,xe.z,qe,Z)}}else Ge.visible&&R.push(E,Ie,Ge,ce,xe.z,null,Z)}}}const Ne=E.children;for(let We=0,Ie=Ne.length;We<Ie;We++)yo(Ne[We],Z,ce,se)}function kl(E,Z,ce,se){const{opaque:oe,transmissive:Ne,transparent:We}=E;S.setupLightsView(ce),me===!0&&ue.setGlobalState(P.clippingPlanes,ce),se&&Me.viewport(j.copy(se)),oe.length>0&&ha(oe,Z,ce),Ne.length>0&&ha(Ne,Z,ce),We.length>0&&ha(We,Z,ce),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ol(E,Z,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[se.id]===void 0){const qe=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[se.id]=new ri(1,1,{generateMipmaps:!0,type:qe?ci:Fn,minFilter:Ni,samples:Math.max(4,it.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ne=S.state.transmissionRenderTarget[se.id],We=se.viewport||j;Ne.setSize(We.z*P.transmissionResolutionScale,We.w*P.transmissionResolutionScale);const Ie=P.getRenderTarget(),Ge=P.getActiveCubeFace(),Ze=P.getActiveMipmapLevel();P.setRenderTarget(Ne),P.getClearColor(A),w=P.getClearAlpha(),w<1&&P.setClearColor(16777215,.5),P.clear(),ze&&q.render(ce);const ft=P.toneMapping;P.toneMapping=_i;const Et=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),S.setupLightsView(se),me===!0&&ue.setGlobalState(P.clippingPlanes,se),ha(E,ce,se),Ke.updateMultisampleRenderTarget(Ne),Ke.updateRenderTargetMipmap(Ne),at.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let At=0,en=Z.length;At<en;At++){const Wt=Z[At],{object:Ht,geometry:gn,material:Xe,group:Mn}=Wt;if(Xe.side===An&&Ht.layers.test(se.layers)){const Ut=Xe.side;Xe.side=Cn,Xe.needsUpdate=!0,zl(Ht,ce,se,gn,Xe,Mn),Xe.side=Ut,Xe.needsUpdate=!0,qe=!0}}qe===!0&&(Ke.updateMultisampleRenderTarget(Ne),Ke.updateRenderTargetMipmap(Ne))}P.setRenderTarget(Ie,Ge,Ze),P.setClearColor(A,w),Et!==void 0&&(se.viewport=Et),P.toneMapping=ft}function ha(E,Z,ce){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let oe=0,Ne=E.length;oe<Ne;oe++){const We=E[oe],{object:Ie,geometry:Ge,group:Ze}=We;let ft=We.material;ft.allowOverride===!0&&se!==null&&(ft=se),Ie.layers.test(ce.layers)&&zl(Ie,Z,ce,Ge,ft,Ze)}}function zl(E,Z,ce,se,oe,Ne){H!==null&&oe.isNodeMaterial&&H.setObject(E,oe),E.onBeforeRender(P,Z,ce,se,oe,Ne),E.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),oe.onBeforeRender(P,Z,ce,se,E,Ne),oe.transparent===!0&&oe.side===An&&oe.forceSinglePass===!1?(oe.side=Cn,oe.needsUpdate=!0,P.renderBufferDirect(ce,Z,se,oe,E,Ne),oe.side=Oi,oe.needsUpdate=!0,P.renderBufferDirect(ce,Z,se,oe,E,Ne),oe.side=An):P.renderBufferDirect(ce,Z,se,oe,E,Ne),E.onAfterRender(P,Z,ce,se,oe,Ne)}function Bl(E){let Z=0;for(const ce of E)ce.texture!==null&&Z++;return Z}function Rs(E,Z,ce){Z.isScene!==!0&&(Z=Be);const se=He.get(E),oe=S.state.lights,Ne=S.state.shadowsArray,We=oe.state.version,Ie=fe.getParameters(E,oe.state,Ne,Z,ce,S.state.lightProbeGridArray),Ge=fe.getProgramCacheKey(Ie);let Ze=se.programs;se.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?Z.environment:null,se.fog=Z.fog;const ft=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;se.envMap=L.get(E.envMap||se.environment,ft),se.envMapRotation=se.environment!==null&&E.envMap===null?Z.environmentRotation:E.envMapRotation,Ze===void 0&&(E.addEventListener("dispose",Ot),Ze=new Map,se.programs=Ze,se.programVariants=new Map);let Et=Ze.get(Ge);if(Et!==void 0){if(se.currentProgram===Et&&se.lightsStateVersion===We)return Gl(E,Ie),Et}else Ie.uniforms=fe.getUniforms(E),H!==null&&E.isNodeMaterial&&H.build(E,ce,Ie),E.onBeforeCompile(Ie,P),Et=fe.acquireProgram(Ie,Ge),Ze.set(Ge,Et),se.uniforms=Ie.uniforms;const qe=se.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=ue.uniform),Gl(E,Ie),se.needsLights=Gh(E),se.lightsStateVersion=We,se.needsLights&&(qe.ambientLightColor.value=oe.state.ambient,qe.lightProbe.value=oe.state.probe,qe.sunLights.value=oe.state.sun,qe.sunLightShadows.value=oe.state.sunShadow,qe.directionalLights.value=oe.state.directional,qe.directionalLightShadows.value=oe.state.directionalShadow,qe.spotLights.value=oe.state.spot,qe.spotLightShadows.value=oe.state.spotShadow,qe.rectAreaLights.value=oe.state.rectArea,qe.ltc_1.value=oe.state.rectAreaLTC1,qe.ltc_2.value=oe.state.rectAreaLTC2,qe.pointLights.value=oe.state.point,qe.pointLightShadows.value=oe.state.pointShadow,qe.hemisphereLights.value=oe.state.hemi,qe.sunShadowMatrix.value=oe.state.sunShadowMatrix,qe.sunShadowCascade.value=oe.state.sunShadowCascade,qe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,qe.spotLightMatrix.value=oe.state.spotLightMatrix,qe.spotLightMap.value=oe.state.spotLightMap,qe.pointShadowMatrix.value=oe.state.pointShadowMatrix),se.numLightProbeGrids=Bl(S.state.lightProbeGridArray),se.currentProgram=Et,se.uniformsList=null,Et}function zh(E,Z,ce,se,oe){const Ne=He.get(E),We=Ne.currentProgram.id+","+se+","+oe;let Ie=Ne.programVariants.get(We);return Ie===void 0?(Ie=Rs(E,Z,ce),Ne.programVariants.set(We,Ie)):(Ne.currentProgram=Ie,Ne.uniformsList=null,Ne.outputColorSpace=se,Ne.toneMapping=oe),Ie}function Hl(E){if(E.uniformsList===null){const Z=E.currentProgram.getUniforms();E.uniformsList=Qa.seqWithValue(Z.seq,E.uniforms)}return E.uniformsList}function Gl(E,Z){const ce=He.get(E);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function Bh(E,Z,ce,se,oe){Z.isScene!==!0&&(Z=Be),Ke.resetTextureUnits();const Ne=Z.fog,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?Z.environment:null,Ie=te===null?P.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ct.workingColorSpace,Ge=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Ze=L.get(se.envMap||We,Ge),ft=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Et=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),qe=!!ce.morphAttributes.position,At=!!ce.morphAttributes.normal,en=!!ce.morphAttributes.color;let Wt=_i;se.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Wt=P.toneMapping);const Ht=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,gn=Ht!==void 0?Ht.length:0,Xe=He.get(se),Mn=S.state.lights;if(me===!0&&(be===!0||E!==J)){const Kt=E===J&&se.id===U;ue.setState(se,E,Kt)}let Ut=!1,Hi=!1;se.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==Mn.state.version||oe.isBatchedMesh&&Xe.batching===!1||!oe.isBatchedMesh&&Xe.batching===!0||oe.isBatchedMesh&&Xe.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Xe.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Xe.instancing===!1||!oe.isInstancedMesh&&Xe.instancing===!0||oe.isSkinnedMesh&&Xe.skinning===!1||!oe.isSkinnedMesh&&Xe.skinning===!0||oe.isInstancedMesh&&Xe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Xe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Xe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Xe.instancingMorph===!1&&oe.morphTexture!==null||Xe.envMap!==Ze||se.fog===!0&&Xe.fog!==Ne||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ue.numPlanes||Xe.numIntersection!==ue.numIntersection)||Xe.vertexAlphas!==ft||Xe.vertexTangents!==Et||Xe.morphTargets!==qe||Xe.morphNormals!==At||Xe.morphColors!==en||Xe.morphTargetsCount!==gn||Xe.numLightProbeGrids!==Bl(S.state.lightProbeGridArray)?Ut=!0:(Xe.outputColorSpace!==Ie||Xe.toneMapping!==Wt)&&(Hi=!0):(Ut=!0,Xe.__version=se.version);let xn=Xe.currentProgram;(Ut===!0||Hi===!0)&&(xn=Hi===!0?zh(se,Z,oe,Ie,Wt):Rs(se,Z,oe),H&&se.isNodeMaterial&&H.onUpdateProgram(se,xn,Xe));let fa=!1,Si=!1,Gi=!1;const It=xn.getUniforms(),dn=Xe.uniforms;if(Me.useProgram(xn.program)&&(fa=!0,Si=!0,Gi=!0),se.id!==U&&(U=se.id,Si=!0),fa||J!==E){Me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),It.setValue($,"projectionMatrix",E.projectionMatrix),It.setValue($,"viewMatrix",E.matrixWorldInverse);const ln=It.map.cameraPosition;ln!==void 0&&ln.setValue($,_e.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&It.setValue($,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue($,"isOrthographic",E.isOrthographicCamera===!0),J!==E&&(J=E,Si=!0,Gi=!0)}if(Xe.needsLights&&(Mn.state.sunShadowMap.length>0&&It.setValue($,"sunShadowMap",Mn.state.sunShadowMap,Ke),Mn.state.directionalShadowMap.length>0&&It.setValue($,"directionalShadowMap",Mn.state.directionalShadowMap,Ke),Mn.state.spotShadowMap.length>0&&It.setValue($,"spotShadowMap",Mn.state.spotShadowMap,Ke),Mn.state.pointShadowMap.length>0&&It.setValue($,"pointShadowMap",Mn.state.pointShadowMap,Ke)),oe.isSkinnedMesh){It.setOptional($,oe,"bindMatrix"),It.setOptional($,oe,"bindMatrixInverse");const Kt=oe.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),It.setValue($,"boneTexture",Kt.boneTexture,Ke))}oe.isBatchedMesh&&(It.setOptional($,oe,"batchingTexture"),It.setValue($,"batchingTexture",oe._matricesTexture,Ke),It.setOptional($,oe,"batchingIdTexture"),It.setValue($,"batchingIdTexture",oe._indirectTexture,Ke),It.setOptional($,oe,"batchingColorTexture"),oe._colorsTexture!==null&&It.setValue($,"batchingColorTexture",oe._colorsTexture,Ke));const qn=ce.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&pe.update(oe,ce,xn),(Si||Xe.receiveShadow!==oe.receiveShadow)&&(Xe.receiveShadow=oe.receiveShadow,It.setValue($,"receiveShadow",oe.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&Z.environment!==null&&(dn.envMapIntensity.value=Z.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=M1()),Si){if(It.setValue($,"toneMappingExposure",P.toneMappingExposure),Xe.needsLights&&Hh(dn,Gi),Ne&&se.fog===!0&&Ae.refreshFogUniforms(dn,Ne),Ae.refreshMaterialUniforms(dn,se,V,B,S.state.transmissionRenderTarget[E.id]),Xe.needsLights&&Xe.numLightProbeGrids>0){const Kt=v;let ln=0;for(const fi of S.state.lightProbeGridArray)fi.texture!==null&&(Kt.textures[ln]=fi.texture,Kt.min[ln]=fi.boundingBox.min,Kt.max[ln]=fi.boundingBox.max,Kt.resolution[ln]=fi.resolution,ln++);for(const fi in Kt)Kt[fi].length=ln;dn.probesSH.value=Kt.textures,dn.probesMin.value=Kt.min,dn.probesMax.value=Kt.max,dn.probesResolution.value=Kt.resolution}Qa.upload($,Hl(Xe),dn,Ke)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Qa.upload($,Hl(Xe),dn,Ke),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue($,"center",oe.center),It.setValue($,"modelViewMatrix",oe.modelViewMatrix),It.setValue($,"normalMatrix",oe.normalMatrix),It.setValue($,"modelMatrix",oe.matrixWorld),se.uniformsGroups!==void 0){const Kt=se.uniformsGroups;for(let ln=0,fi=Kt.length;ln<fi;ln++){const Wl=Kt[ln];et.update(Wl,xn),et.bind(Wl,xn)}}return xn}function Hh(E,Z){E.ambientLightColor.needsUpdate=Z,E.lightProbe.needsUpdate=Z,E.sunLights.needsUpdate=Z,E.sunLightShadows.needsUpdate=Z,E.directionalLights.needsUpdate=Z,E.directionalLightShadows.needsUpdate=Z,E.pointLights.needsUpdate=Z,E.pointLightShadows.needsUpdate=Z,E.spotLights.needsUpdate=Z,E.spotLightShadows.needsUpdate=Z,E.rectAreaLights.needsUpdate=Z,E.hemisphereLights.needsUpdate=Z}function Gh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,Z,ce){const se=He.get(E);se.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),He.get(E.texture).__webglTexture=Z,He.get(E.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,Z){const ce=He.get(E);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(E,Z=0,ce=0){te=E,O=Z,D=ce;let se=null,oe=!1,Ne=!1;if(E){const Ie=He.get(E);if(Ie.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer($.FRAMEBUFFER,Ie.__webglFramebuffer),j.copy(E.viewport),ae.copy(E.scissor),ve=E.scissorTest,Me.viewport(j),Me.scissor(ae),Me.setScissorTest(ve),U=-1;return}else if(Ie.__webglFramebuffer===void 0)Ke.setupRenderTarget(E);else if(Ie.__hasExternalTextures)Ke.rebindTextures(E,He.get(E.texture).__webglTexture,He.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ft=E.depthTexture;if(Ie.__boundDepthTexture!==ft){if(ft!==null&&He.has(ft)&&(E.width!==ft.image.width||E.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(E)}}const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ne=!0);const Ze=He.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ze[Z])?se=Ze[Z][ce]:se=Ze[Z],oe=!0):E.samples>0&&Ke.useMultisampledRTT(E)===!1?se=He.get(E).__webglMultisampledFramebuffer:Array.isArray(Ze)?se=Ze[ce]:se=Ze,j.copy(E.viewport),ae.copy(E.scissor),ve=E.scissorTest}else j.copy(le).multiplyScalar(V).floor(),ae.copy(k).multiplyScalar(V).floor(),ve=W;if(ce!==0&&(se=C),Me.bindFramebuffer($.FRAMEBUFFER,se)&&Me.drawBuffers(E,se),Me.viewport(j),Me.scissor(ae),Me.setScissorTest(ve),oe){const Ie=He.get(E.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie.__webglTexture,ce)}else if(Ne){const Ie=Z;for(let Ge=0;Ge<E.textures.length;Ge++){const Ze=He.get(E.textures[Ge]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ge,Ze.__webglTexture,ce,Ie)}}else if(E!==null&&ce!==0){const Ie=He.get(E.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ie.__webglTexture,ce)}U=-1};function Vl(E){const Z=He.get(E);return(Z.__readFormat!==E.format||Z.__readType!==E.type)&&(Z.__readFormat=E.format,Z.__readType=E.type,Z.__formatReadable=it.textureFormatReadable(E.format),Z.__typeReadable=it.textureTypeReadable(E.type)),Z}this.readRenderTargetPixels=function(E,Z,ce,se,oe,Ne,We,Ie=0){if(!(E&&E.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=He.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&We!==void 0&&(Ge=Ge[We],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){Me.bindFramebuffer($.FRAMEBUFFER,Ge);try{const Ze=E.textures[Ie],ft=Ze.format,Et=Ze.type;E.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ie);const qe=Vl(Ze);if(qe.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=E.width-se&&ce>=0&&ce<=E.height-oe&&$.readPixels(Z,ce,se,oe,Ee.convert(ft),Ee.convert(Et),Ne)}finally{const Ze=te!==null?He.get(te).__webglFramebuffer:null;Me.bindFramebuffer($.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(E,Z,ce,se,oe,Ne,We,Ie=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=He.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&We!==void 0&&(Ge=Ge[We],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(Z>=0&&Z<=E.width-se&&ce>=0&&ce<=E.height-oe){Me.bindFramebuffer($.FRAMEBUFFER,Ge);const Ze=E.textures[Ie],ft=Ze.format,Et=Ze.type;E.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ie);const qe=Vl(Ze);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,At),$.bufferData($.PIXEL_PACK_BUFFER,Ne.byteLength,$.STREAM_READ),$.readPixels(Z,ce,se,oe,Ee.convert(ft),Ee.convert(Et),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const en=te!==null?He.get(te).__webglFramebuffer:null;Me.bindFramebuffer($.FRAMEBUFFER,en);const Wt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Af($,Wt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,At),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ne),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(At),$.deleteSync(Wt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,Z=null,ce=0){const se=Math.pow(2,-ce),oe=Math.floor(E.image.width*se),Ne=Math.floor(E.image.height*se),We=Z!==null?Z.x:0,Ie=Z!==null?Z.y:0;Ke.setTexture2D(E,0),$.copyTexSubImage2D($.TEXTURE_2D,ce,0,0,We,Ie,oe,Ne),Me.unbindTexture()},this.copyTextureToTexture=function(E,Z,ce=null,se=null,oe=0,Ne=0){let We,Ie,Ge,Ze,ft,Et,qe,At,en;const Wt=E.isCompressedTexture?E.mipmaps[Ne]:E.image;if(ce!==null)We=ce.max.x-ce.min.x,Ie=ce.max.y-ce.min.y,Ge=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,ft=ce.min.y,Et=ce.isBox3?ce.min.z:0;else{const It=Math.pow(2,-oe);We=Math.floor(Wt.width*It),Ie=Math.floor(Wt.height*It),E.isDataArrayTexture?Ge=Wt.depth:E.isData3DTexture?Ge=Math.floor(Wt.depth*It):Ge=1,Ze=0,ft=0,Et=0}se!==null?(qe=se.x,At=se.y,en=se.z):(qe=0,At=0,en=0);const Ht=Ee.convert(Z.format),gn=Ee.convert(Z.type);let Xe;Z.isData3DTexture?(Ke.setTexture3D(Z,0),Xe=$.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Ke.setTexture2DArray(Z,0),Xe=$.TEXTURE_2D_ARRAY):(Ke.setTexture2D(Z,0),Xe=$.TEXTURE_2D),Me.activeTexture($.TEXTURE0),Me.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Z.flipY),Me.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Me.pixelStorei($.UNPACK_ALIGNMENT,Z.unpackAlignment);const Mn=Me.getParameter($.UNPACK_ROW_LENGTH),Ut=Me.getParameter($.UNPACK_IMAGE_HEIGHT),Hi=Me.getParameter($.UNPACK_SKIP_PIXELS),xn=Me.getParameter($.UNPACK_SKIP_ROWS),fa=Me.getParameter($.UNPACK_SKIP_IMAGES);Me.pixelStorei($.UNPACK_ROW_LENGTH,Wt.width),Me.pixelStorei($.UNPACK_IMAGE_HEIGHT,Wt.height),Me.pixelStorei($.UNPACK_SKIP_PIXELS,Ze),Me.pixelStorei($.UNPACK_SKIP_ROWS,ft),Me.pixelStorei($.UNPACK_SKIP_IMAGES,Et);const Si=E.isDataArrayTexture||E.isData3DTexture,Gi=Z.isDataArrayTexture||Z.isData3DTexture;if(E.isDepthTexture){const It=He.get(E),dn=He.get(Z),qn=He.get(It.__renderTarget),Kt=He.get(dn.__renderTarget);Me.bindFramebuffer($.READ_FRAMEBUFFER,qn.__webglFramebuffer),Me.bindFramebuffer($.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let ln=0;ln<Ge;ln++)Si&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,He.get(E).__webglTexture,oe,Et+ln),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,He.get(Z).__webglTexture,Ne,en+ln)),$.blitFramebuffer(Ze,ft,Ze+We,ft+Ie,qe,At,qe+We,At+Ie,$.DEPTH_BUFFER_BIT,$.NEAREST);Me.bindFramebuffer($.READ_FRAMEBUFFER,null),Me.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(oe!==0||E.isRenderTargetTexture||He.has(E)){const It=He.get(E),dn=He.get(Z);Me.bindFramebuffer($.READ_FRAMEBUFFER,I),Me.bindFramebuffer($.DRAW_FRAMEBUFFER,X);for(let qn=0;qn<Ge;qn++)Si?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,It.__webglTexture,oe,Et+qn):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,It.__webglTexture,oe),Gi?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,dn.__webglTexture,Ne,en+qn):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,dn.__webglTexture,Ne),oe!==0?$.blitFramebuffer(Ze,ft,Ze+We,ft+Ie,qe,At,qe+We,At+Ie,$.COLOR_BUFFER_BIT,$.NEAREST):Gi?$.copyTexSubImage3D(Xe,Ne,qe,At,en+qn,Ze,ft,We,Ie):$.copyTexSubImage2D(Xe,Ne,qe,At,Ze,ft,We,Ie);Me.bindFramebuffer($.READ_FRAMEBUFFER,null),Me.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Gi?E.isDataTexture||E.isData3DTexture?$.texSubImage3D(Xe,Ne,qe,At,en,We,Ie,Ge,Ht,gn,Wt.data):Z.isCompressedArrayTexture?$.compressedTexSubImage3D(Xe,Ne,qe,At,en,We,Ie,Ge,Ht,Wt.data):$.texSubImage3D(Xe,Ne,qe,At,en,We,Ie,Ge,Ht,gn,Wt):E.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ne,qe,At,We,Ie,Ht,gn,Wt.data):E.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ne,qe,At,Wt.width,Wt.height,Ht,Wt.data):$.texSubImage2D($.TEXTURE_2D,Ne,qe,At,We,Ie,Ht,gn,Wt);Me.pixelStorei($.UNPACK_ROW_LENGTH,Mn),Me.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ut),Me.pixelStorei($.UNPACK_SKIP_PIXELS,Hi),Me.pixelStorei($.UNPACK_SKIP_ROWS,xn),Me.pixelStorei($.UNPACK_SKIP_IMAGES,fa),Ne===0&&Z.generateMipmaps===!0&&Z.mipmapsAutoUpdate===!0&&$.generateMipmap(Xe),Me.unbindTexture()},this.initRenderTarget=function(E){He.get(E).__webglFramebuffer===void 0&&Ke.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ke.setTextureCube(E,0):E.isData3DTexture?Ke.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ke.setTexture2DArray(E,0):Ke.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){O=0,D=0,te=null,Me.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const _h=`
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
vec2 h22(vec2 p){ float n = h21(p); return vec2(n, h21(p + n + 7.13)); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = .5, s = 0.; for (int i = 0; i < 4; i++) { s += a * vn(p); p = p * 2.03 + 17.; a *= .5; } return s; }
float aa(float d){ return clamp(.5 - d / max(fwidth(d), 1e-5), 0., 1.); }
vec3 hue(float h){ return clamp(abs(fract(h + vec3(0., 2. / 3., 1. / 3.)) * 6. - 3.) - 1., 0., 1.); }
float sdStar(vec2 p, float r){ const vec2 k1 = vec2(.809016994, -.587785252); const vec2 k2 = vec2(-k1.x, k1.y);
  p.x = abs(p.x); p -= 2. * max(dot(k1, p), 0.) * k1; p -= 2. * max(dot(k2, p), 0.) * k2; p.x = abs(p.x); p.y -= r;
  vec2 ba = vec2(-.309016994, .951056516) * .45 - vec2(0, 1); float h = clamp(dot(p, ba) / dot(ba, ba), 0., r);
  return length(p - ba * h) * sign(p.y * ba.x - p.x * ba.y); }
float sdHeart(vec2 p){ p.x = abs(p.x); p.y += .55;
  if (p.y + p.x > 1.) return sqrt(dot(p - vec2(.25, .75), p - vec2(.25, .75))) - sqrt(2.) / 4.;
  return sqrt(min(dot(p - vec2(0, 1), p - vec2(0, 1)), dot(p - .5 * max(p.x + p.y, 0.), p - .5 * max(p.x + p.y, 0.)))) * sign(p.x - p.y); }
float sdSeg(vec2 p, vec2 a, vec2 b){ vec2 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.); return length(pa - ba * h); }
float sdBox(vec2 p, vec2 b){ vec2 d = abs(p) - b; return length(max(d, 0.)) + min(max(d.x, d.y), 0.); }
`,w1=`
// Returns the surface color. e receives emissive strength (0..1).
vec3 p3dPattern(int id, vec2 uvm, float sc, vec3 c1, vec3 c2, float t, out float e){
  e = 0.;
  if (id == 0) return c1;
  vec2 p = uvm * sc * 14.;
  float m = 0.;
  if (id == 1) { m = aa(abs(fract(p.y * .5) - .5) - .25); }
  else if (id == 2) { m = aa(abs(fract(p.x) - .5) - .07); }
  else if (id == 3) { float a = aa(abs(fract(p.x * .35) - .5) - .22), b = aa(abs(fract(p.y * .35) - .5) - .22);
    float l = max(aa(abs(fract(p.x * .35 + .5) - .5) - .03), aa(abs(fract(p.y * .35 + .5) - .5) - .03));
    vec3 c = mix(c1, c2, (a + b) * .5); return mix(c, mix(c2, vec3(1), .55), l * .8); }
  else if (id == 4) { vec2 q = p * .5; vec2 f = abs(fract(q) - .5); float d = (.25 - min(f.x, f.y)); m = mod(floor(q.x) + floor(q.y), 2.);
    float w = fwidth(q.x) + fwidth(q.y); m = mix(m, .5, clamp(w * 1.5 - .2, 0., 1.)); }
  else if (id == 5) { vec2 q = p * .6; q.x += step(1., mod(q.y, 2.)) * .5; m = aa(length(fract(q) - .5) - .26); }
  else if (id == 6) { float n = fbm(p * .22 + 3.), n2 = fbm(p * .3 + 40.);
    vec3 c = mix(c1, c2, smoothstep(.48, .5, n)); return mix(c, mix(c1, vec3(0), .55), smoothstep(.56, .58, n2)); }
  else if (id == 7) { vec2 q = p * .45; vec2 i = floor(q); vec2 f = fract(q) - .5; vec2 r = h22(i);
    float a = r.x * 6.283; f = mat2(cos(a), -sin(a), sin(a), cos(a)) * (f + (r - .5) * .3); m = aa(sdStar(f, .2 + r.y * .14)); }
  else if (id == 8) { vec2 q = p * .45; q.x += step(1., mod(q.y, 2.)) * .5; vec2 f = fract(q) - .5; m = aa(sdHeart(f * 3.2) / 3.2); }
  else if (id == 9) { m = aa(abs(fract(p.y * .5 + abs(fract(p.x * .5) - .5)) - .5) - .25); }
  else if (id == 10) { vec2 q = uvm * sc * 3.; float a = atan(q.y - .3, q.x), r = length(q - vec2(0, .3));
    float s = sin(r * 22. + sin(a * 5.) * 1.5 + fbm(q * 4.) * 5.); vec3 c = mix(c1, c2, smoothstep(-.3, .3, s));
    return mix(c, vec3(1), smoothstep(.6, .95, sin(r * 22. * .5 + a * 2. + 2.)) * .55); }
  else if (id == 11) { m = smoothstep(.05, .5, uvm.y * sc); }
  else if (id == 12) { m = aa(-uvm.x); }
  else if (id == 13) { vec2 q = p * .32; vec2 f = abs(fract(q) - .5); float d = f.x + f.y; m = aa(d - .5) ;
    m = mod(floor(q.x) + floor(q.y), 2.) > .5 ? m : 1. - m; float l = min(abs(fract(q.x + q.y) - .5), abs(fract(q.x - q.y) - .5));
    vec3 c = mix(c1, c2, m * .85); return mix(c, vec3(1), aa(l - .02) * .5); }
  else if (id == 14) { vec2 q = p * .5; vec2 f = fract(q); float ch = mod(floor(q.x) + floor(q.y), 2.);
    float tooth = step(fract((q.x + q.y) * 2.), .5); float odd = mod(floor(q.x), 2.);
    m = mod(floor(q.x), 2.) == mod(floor(q.y), 2.) ? ch : tooth; m = mix(m, odd == 0. ? tooth : m, .5); m = step(.5, m); }
  else if (id == 15) { vec2 q = p * .3; vec2 i = floor(q); float best = 9.; float rr = 0.;
    for (int x = -1; x <= 1; x++) for (int y = -1; y <= 1; y++) { vec2 g = i + vec2(x, y); vec2 o = h22(g);
      float d = length(q - g - o); if (d < best) { best = d; rr = o.x; } }
    float n = fbm(q * 3.) * .12; float ring = aa(abs(best - .2 - n) - .07 - rr * .03); float core = aa(best - .14);
    vec3 c = mix(c1, mix(c1, c2, .45), core); return mix(c, c2, ring * step(.25, fbm(q * 2.2 + 9.))); }
  else if (id == 16) { float s = sin(p.x * 1.6 + fbm(p * .25) * 9. + sin(p.y * .5) * 1.2); m = aa(-s * .3 - .02); }
  else if (id == 17) { vec2 q = p * .42; vec2 r = vec2(1., 1.732); vec2 a = mod(q, r) - r * .5, b = mod(q - r * .5, r) - r * .5;
    vec2 g = dot(a, a) < dot(b, b) ? a : b; float d = .5 - max(abs(g.x), dot(abs(g), normalize(r))); m = aa(d - .06); }
  else if (id == 18) { m = aa(abs(fract(p.y * .5 + sin(p.x * 1.4) * .16) - .5) - .25); }
  else if (id == 19) { float row = floor(p.y * .35); float fy = fract(p.y * .35); float kind = mod(row, 3.);
    vec2 f = vec2(fract(p.x * .7) - .5, fy - .5);
    if (kind < .5) m = aa(abs(f.x) + abs(f.y) - .34); else if (kind < 1.5) m = aa(abs(fy - .5) - .1); else m = aa(min(abs(f.x), abs(f.y)) - .08) * aa(max(abs(f.x), abs(f.y)) - .36); }
  else if (id == 20) { vec2 q = uvm * sc * 5.; float n = fbm(vec2(q.x * 1.6, q.y * 1.1 - t * .9)); float f = n + (1. - clamp(uvm.y * sc * 2.2, 0., 1.)) * .55;
    vec3 c = mix(c1, c2, smoothstep(.55, .8, f)); c = mix(c, vec3(1., .95, .6), smoothstep(.95, 1.15, f)); e = smoothstep(.5, 1., f) * .8; return c; }
  else if (id == 21) { vec2 q = uvm * sc * 4.; float n = fbm(q * 1.5 + vec2(t * .02, 0.)); float n2 = fbm(q * 2.4 + 20.);
    vec3 c = mix(vec3(.02, .02, .07), c1 * .55, smoothstep(.3, .75, n)); c = mix(c, c2 * .7, smoothstep(.45, .8, n2) * .7);
    vec2 g = floor(q * 22.); float st = step(.965, h21(g)) * (.6 + .4 * sin(t * 2.5 + h21(g + 3.) * 30.)) * aa(length(fract(q * 22.) - .5) - .28);
    e = st + .12; return c + vec3(st); }
  else if (id == 22) { vec2 q = p * .6; vec2 i = floor(q); vec2 f = fract(q) - .5; float r = h21(i);
    float d = r < .5 ? min(abs(f.x), max(abs(f.y), -f.x + .0) ) : abs(f.y); d = r > .78 ? min(abs(f.x), abs(f.y)) : d;
    float line = aa(d - .06); float node = aa(length(f) - .17) * step(.6, h21(i + 5.));
    float pulse = .55 + .45 * sin(t * 2. + r * 20. + i.x * .7); e = (line * .6 + node) * pulse; return mix(c1, c2, max(line, node)); }
  else if (id == 23) { vec2 q = uvm * sc * 5.; float n = fbm(q * 1.3 + vec2(0., t * .05)); float cr = abs(n - .5) * 2.; float glow = smoothstep(.22, 0., cr);
    e = glow * (.8 + .2 * sin(t * 1.7 + n * 20.)); return mix(c1 * .35, mix(c2, vec3(1., .9, .5), glow * .5), glow); }
  else if (id == 24) { return hue(uvm.y * sc * 1.6 + uvm.x * sc * .25) * .85 + .1; }
  else if (id == 25) { vec2 q = p * .35; float row = floor(q.y * 2.); float sh = step(.82, h21(vec2(row, floor(t * 6.)))) * (h21(vec2(row, 2.)) - .5) * 3.;
    float b = step(.5, h21(floor(vec2(q.x * 2. + sh, row)))); vec3 c = mix(c1, c2, b); float ca = step(.9, h21(vec2(row * 3., floor(t * 9.))));
    e = ca * .5; return mix(c, vec3(c.g, c.b, c.r) + .2, ca); }
  else if (id == 26) { vec2 q = floor(p * .9); float n = h21(q); return mix(c1, c2, floor(n * 4.) / 3.); }
  else if (id == 27) { vec2 q = p * vec2(1.6, .9); float col = floor(q.x); float sp = .6 + h21(vec2(col, 1.)) * 1.2; float y = q.y + t * sp + h21(vec2(col, 9.)) * 20.;
    float cell = floor(y); float glyph = step(.35, h21(vec2(col, cell))) * aa(sdBox(fract(vec2(q.x, y)) - .5, vec2(.26, .34)));
    float head = pow(fract(y * .11), 6.); e = glyph * (.25 + head); return mix(c1, c2, glyph * (.35 + head * .65)); }
  else if (id == 28) { vec2 q = p * .4; q.x += step(1., mod(q.y, 2.)) * .5; vec2 i = floor(q); vec2 f = fract(q) - .5; float a = atan(f.y, f.x) + h21(i) * 6.;
    float r = length(f); float pet = aa(r - (.2 + .12 * cos(a * 5.))); float ctr = aa(r - .08); vec3 c = mix(c1, c2, pet); return mix(c, vec3(1., .86, .3), ctr); }
  // --- room surfaces ---
  else if (id == 40) { vec2 q = uvm * sc * vec2(7., 1.1); float row = floor(q.x); q.y += h21(vec2(row, 3.)) * 5.; float pl = floor(q.y);
    float tone = h21(vec2(row, pl)); float grain = fbm(vec2(uvm.x * 90., uvm.y * 6.) * sc + tone * 40.);
    float gap = max(aa(.5 - abs(fract(q.x) - .5) - .012), aa(.5 - abs(fract(q.y) - .5) - .004));
    vec3 c = mix(c1, c2, tone * .55 + grain * .3); return c * (1. - gap * .45); }
  else if (id == 41) { vec2 q = uvm * sc * vec2(4., 9.); q.x += step(1., mod(q.y, 2.)) * .5; vec2 i = floor(q); vec2 f = abs(fract(q) - .5);
    float mort = max(aa(.5 - f.x - .03), aa(.5 - f.y - .07)); vec3 c = mix(c1, c1 * .78, h21(i)) * (.92 + fbm(uvm * 60.) * .16); return mix(c, c2, mort); }
  else if (id == 42) { vec2 q = uvm * sc * 3.2; vec2 i = floor(q); vec2 f = abs(fract(q) - .5); float g = aa(.5 - max(f.x, f.y) - .012);
    float ch = mod(i.x + i.y, 2.); vec3 c = mix(c1, c2, ch); return c * (1. - g * .35); }
  else if (id == 43) { vec2 q = uvm * sc * 1.6; float n = fbm(q * 2. + fbm(q * 3.) * 2.); float v = smoothstep(.02, 0., abs(n - .5) - .012);
    return mix(c1 * (.94 + fbm(q * 8.) * .1), c2, v * .7); }
  else if (id == 44) { float n = h21(floor(uvm * sc * 900.)); float n2 = fbm(uvm * sc * 30.); return c1 * (.86 + n * .16 + n2 * .1); }
  else if (id == 45) { vec2 q = uvm * sc * 1.2; float n = fbm(q * 3.) * .6 + fbm(q * 14.) * .4; return mix(c1, c2, n * .5) * (.9 + h21(floor(uvm * 400.)) * .08); }
  else if (id == 46) { vec2 q = uvm * sc * 2.4; vec2 f = fract(q) - .5; float d = min(abs(f.x), abs(f.y)); float l = aa(d - .012); float l2 = smoothstep(.12, 0., d);
    float pulse = .7 + .3 * sin(t * 1.2 + q.x + q.y); e = (l + l2 * .35) * pulse; return mix(c1, c2, clamp(l + l2 * .4, 0., 1.)); }
  else if (id == 47) { vec2 q = uvm * sc * 1.3; float n = fbm(q * 1.4 + vec2(t * .03, 0.)); float n2 = fbm(q * 3. - vec2(t * .02, 0.));
    float c = smoothstep(.35, .7, n * .7 + n2 * .3); e = .12; return mix(c1, c2, c); }
  else if (id == 48) { vec2 q = uvm * sc * 2.; float w = sin(q.x * 3. + t * .8 + fbm(q + t * .1) * 4.) * .5 + .5; float c = pow(abs(sin((q.y + fbm(q * 2. + t * .15)) * 6.)), 8.);
    e = c * .35 + .08; return mix(c1, c2, w * .5) + c * .25; }
  else if (id == 49) { vec2 q = uvm * sc * 2.6; q.x += step(1., mod(floor(q.y * 2.), 2.)) * .25; vec2 f = fract(q * vec2(1., 2.)) - .5; vec2 i = floor(q * vec2(1., 2.));
    float d = aa(length(f * vec2(1., .6)) - .12) * step(.4, h21(i)); float l = aa(abs(fract(uvm.x * sc * 2.6) - .5) - .47);
    return mix(mix(c1, c2, d), mix(c1, c2, .35), l * .5); }
  else if (id == 50) { vec2 q = uvm * sc * 8.; float n = fbm(q * 2. + 3.); float blades = fbm(vec2(uvm.x * sc * 160., uvm.y * sc * 30.)); return mix(c1, c2, n * .6 + blades * .4); }
  return mix(c1, c2, m);
}
`,E1=`
// Applies a finish to roughness, metalness, emissive, alpha, and returns a bump height.
void p3dFinish(int f, vec2 uvm, vec3 viewN, vec3 viewDir, float t, inout vec3 col, inout float rough, inout float metal, inout vec3 emis, inout float alpha, out float bump, out float rim){
  bump = 0.; rim = .16;
  float fres = pow(1. - clamp(dot(viewN, viewDir), 0., 1.), 3.);
  if (f == 0) { rough = .82; vec2 w = uvm * 900.; bump = (sin(w.x) * sin(w.y)) * .00006; }
  else if (f == 1) { rough = .78; float tw = sin((uvm.x + uvm.y) * 1100.); bump = tw * .00012; col *= .93 + tw * .05 + fbm(uvm * 40.) * .08; }
  else if (f == 2) { rough = .34; bump = fbm(uvm * 260.) * .0005; rim = .3; }
  else if (f == 3) { rough = .92; float r = sin(uvm.x * 420.); bump = r * .0009; col *= .93 + r * .07; }
  else if (f == 4) { rough = .28; rim = .5; col *= .95 + .12 * sin(uvm.y * 60. + sin(uvm.x * 40.) * 2.); }
  else if (f == 5) { rough = .24; metal = 1.; rim = .25; }
  else if (f == 6) { rough = .06; metal = 1.; col = mix(col, vec3(.95), .75); rim = .3; }
  else if (f == 7) { rough = .16; metal = .85; col = mix(col, hue(fres * 1.4 + uvm.y * 2.5 + uvm.x * 1.2 + t * .05), .78); rim = .5; emis += col * .12; }
  else if (f == 8) { rough = .5; emis += col * 1.35; rim = .6; }
  else if (f == 9) { rough = .04; metal = .1; alpha = .28 + fres * .7; rim = .9; emis += col * .08; }
  else if (f == 10) { rough = .4; vec2 g = floor(uvm * 520.); float sp = step(.86, h21(g)); float tw = pow(abs(sin(h21(g + 9.) * 40. + dot(viewDir.xy, vec2(31., 23.)) + t * 1.5)), 12.);
    emis += vec3(1.) * sp * tw * .9; metal = .5; col *= .9 + sp * .25; }
  else if (f == 11) { rough = 1.; rim = .85; col *= .82; }
  else if (f == 12) { rough = .3; rim = .22; }
  else if (f == 13) { rough = .56; rim = .0; emis += col * vec3(1., .42, .3) * fres * .22; }
  else if (f == 14) { rough = .6; }
  else if (f == 15) { rough = .9; rim = .08; }
  else if (f == 16) { rough = .6; alpha = .16 + fres * .85; emis += col * (.5 + fres); rim = 1.; }
  else if (f == 17) { rough = 1.; rim = .7; float n = fbm(uvm * 500.); col *= .86 + n * .22; bump = n * .0012; }
  else if (f == 18) { rough = .05; metal = .25; emis += col * (.18 + fres * .9); alpha = .75 + fres * .25; rim = 1.; }
  else if (f == 19) { rough = .25; emis += col * 1.05; rim = .0; }
  else if (f == 20) { rough = .5; metal = .0; rim = .1; }
}
`,A1=`
uniform vec4 uEye;        // x spacing, y height, size, tilt
uniform vec4 uEyeShape;   // upper open, lower open, upper power, lower power
uniform vec4 uEyeShape2;  // skew, iris radius, lash thickness, lash style
uniform vec3 uIrisL; uniform vec3 uIrisR;
uniform vec4 uPupil;      // shape, size, glow, sclera tint
uniform vec4 uExpr;       // eyes open, smile, mouth open, squint
uniform vec4 uBrowAnim;   // raise, anger, sad, wide eyes
uniform vec2 uGaze;
uniform vec4 uBrow;       // x, height, half length, thickness
uniform vec4 uBrow2;      // arch, tilt, peak, taper
uniform vec4 uBrowCol;    // rgb, slit side
uniform vec4 uMouth;      // y, half width, upper lip, lower lip
uniform vec4 uMouth2;     // rest smile, rest open, cupid, asym
uniform vec4 uLip;        // rgb, strength
uniform vec4 uTeeth;      // style, -, -, -
uniform vec4 uBlush;      // rgb, amount
uniform vec4 uShadow;     // rgb, amount
uniform vec4 uMakeup;     // liner style, freckles, moles, highlight
uniform vec4 uPaint;      // style, glow, -, -
uniform vec3 uPaintA; uniform vec3 uPaintB;
uniform vec4 uScar;       // brow slit side handled in uBrowCol.w; cheek, bandage, bolt, chin
uniform vec4 uBeard;      // style, density, -, -
uniform vec3 uBeardCol;
uniform vec4 uNoseP;      // tip y, nostril half spacing, size, -
`,T1=`
float p3dEyeOpenU(float x){ float k = max(1. - x * x, 0.); return uEyeShape.x * pow(k, uEyeShape.z) * (1. + uEyeShape2.x * x); }
float p3dEyeOpenL(float x){ float k = max(1. - x * x, 0.); return uEyeShape.y * pow(k, uEyeShape.w); }

void p3dEye(vec2 uv, float s, vec3 irisCol, inout vec3 col, inout float rough, inout vec3 emis){
  vec2 q = uv - vec2(s * uEye.x, uEye.y);
  q.x *= s;
  float ct = cos(uEye.w), st = sin(uEye.w);
  q = vec2(ct * q.x + st * q.y, -st * q.x + ct * q.y) / uEye.z;
  if (abs(q.x) > 1.9 || abs(q.y) > 1.6) return;
  float x = clamp(q.x, -1., 1.);
  float k = 1. - x * x;
  float smile = max(uExpr.y, 0.);
  float open = clamp(uExpr.x, 0., 1.);
  float squint = clamp(uExpr.w + smile * .3, 0., 1.);
  float U = p3dEyeOpenU(x) * (1. + uBrowAnim.w * .25);
  float L = p3dEyeOpenL(x);
  float yLo = -L * (1. - squint * .75);
  float closedY = mix(-L * .45, U * .3, smile) ;
  float yUp = mix(closedY, U, open);
  yUp = max(yUp, yLo + .0);
  float d = max(max(q.y - yUp, yLo - q.y), abs(q.x) - 1.);
  float inside = aa(d) * step(.03, yUp - yLo + (1. - step(1., abs(q.x))) * 0.);
  inside *= smoothstep(0., .04, yUp - yLo);

  // sclera with soft lid shadow
  vec3 scl = mix(vec3(.97, .965, .955), vec3(.8, .86, .95), uPupil.w);
  scl *= 1. - .34 * smoothstep(yUp - .34, yUp + .02, q.y);
  scl *= 1. - .16 * smoothstep(.55, 1., abs(x));
  // iris
  vec2 ic = vec2(uGaze.x * s, uGaze.y) * .2 + vec2(-.03, .0);
  vec2 iq = q - ic;
  float R = uEyeShape2.y;
  float r = length(iq);
  float iris = aa(r - R);
  float rr = r / R;
  float ang = atan(iq.y, iq.x);
  vec3 ic3 = irisCol * mix(1.18, .5, smoothstep(.55, 1., rr));
  ic3 = mix(ic3, irisCol * 1.7 + .06, smoothstep(.15, -.75, iq.y / R) * .55 * smoothstep(1., .5, rr));
  ic3 *= .86 + .28 * vn(vec2(ang * 6., rr * 2.5 + 3.));
  ic3 *= 1. - .3 * smoothstep(yUp - .3, yUp, q.y);
  float pr = R * uPupil.y;
  int ps = int(uPupil.x + .5);
  float pup;
  if (ps == 1) pup = aa(length(iq * vec2(2.7, .78)) - pr);
  else if (ps == 2) pup = aa(sdStar(iq / (pr * 1.9), .5) * pr * 1.9);
  else if (ps == 3) pup = aa(sdHeart(iq / (pr * 1.9) + vec2(0., .1)) * pr * 1.9);
  else if (ps == 4) pup = aa(abs(r - pr * .95) - pr * .28);
  else if (ps == 5) pup = aa(min(abs(iq.x), abs(iq.y)) - pr * .3) * aa(max(abs(iq.x), abs(iq.y)) - pr * 1.05);
  else pup = aa(r - pr);
  ic3 = mix(ic3, vec3(.035, .025, .03), pup);
  vec3 eye = mix(scl, ic3, iris);
  float hl = max(aa(length(iq - vec2(.34 * s, .36) * R) - R * .24), aa(length(iq - vec2(-.32 * s, -.34) * R) - R * .11) * .75);
  eye = mix(eye, vec3(1.), hl * (1. - .3 * smoothstep(yUp - .1, yUp, q.y)));
  col = mix(col, eye, inside);
  rough = mix(rough, .1, inside);
  emis += eye * .1 * inside;
  emis += irisCol * uPupil.z * iris * (1. - pup) * inside;

  // eyeshadow and lid tint
  float dU = q.y - yUp;
  float inX = smoothstep(1.28, 1.0, abs(q.x));
  float lidArea = smoothstep(.62, .0, dU) * step(0., dU) * inX;
  col = mix(col, uShadow.rgb, lidArea * uShadow.a);
  col *= 1. - .1 * smoothstep(.3, 0., dU) * step(0., dU) * inX;
  // crease
  float cy = p3dEyeOpenU(x) + .2 + .08 * k;
  col *= 1. - .2 * aa(abs(q.y - mix(yUp + .08, cy, open)) - .014) * smoothstep(1.05, .7, abs(q.x));
  // upper lash line
  vec3 lashCol = vec3(.06, .045, .05);
  float lt = uEyeShape2.z * (.55 + .6 * smoothstep(-1., 1., q.x));
  int ls = int(uEyeShape2.w + .5);
  float lash = aa(max(dU - lt, -dU - .02)) * smoothstep(-1.06, -.9, q.x) * smoothstep(1.08, 1.0, q.x);
  if (ls >= 2 || uMakeup.x > 1.5) {
    float wl = sdSeg(q, vec2(.92, yUp + lt * .4), vec2(1.34, .3 + lt));
    lash = max(lash, aa(wl - lt * .55 * smoothstep(1.4, .9, q.x)));
  }
  if (ls >= 3) {
    float sx = q.x * 6.5 - dU * 1.6;
    float tri = abs(fract(sx) - .5) * 2.;
    float h = lt + (.16 + .1 * float(ls - 3)) * (1. - tri) * smoothstep(-.3, .8, q.x);
    lash = max(lash, aa(dU - h) * step(-.01, dU) * smoothstep(1.2, 1.05, q.x) * smoothstep(-.4, -.1, q.x));
  }
  if (uMakeup.x > .5) lash = max(lash, aa(abs(q.y - yLo + .03) - .022) * smoothstep(1., .8, abs(q.x)) * smoothstep(-.6, .5, q.x) * .8);
  col = mix(col, lashCol, lash * (ls == 0 ? .55 : .96));
  // lower lid line
  col *= 1. - .16 * aa(abs(q.y - yLo + .035) - .014) * smoothstep(1., .6, abs(q.x));
}

void p3dBrow(vec2 uv, float s, inout vec3 col){
  vec2 b = uv - vec2(s * uBrow.x, uEye.y + uBrow.y + uBrowAnim.x * .07);
  b.x *= s; b /= uBrow.z;
  if (abs(b.x) > 1.3 || abs(b.y) > 1.2) return;
  float bx = clamp(b.x, -1., 1.);
  float tilt = uBrow2.y + uBrowAnim.y * .3 - uBrowAnim.z * .28;
  float pk = uBrow2.z;
  float span = bx < pk ? (pk + 1.) : (1. - pk);
  float u = (bx - pk) / max(span, .2);
  float cy = uBrow2.x * (1. - u * u) + tilt * bx - uBrowAnim.y * .08 * (1. - bx);
  float th = uBrow.w * mix(1., uBrow2.w, smoothstep(-.4, 1., bx));
  float d = abs(b.y - cy) - th;
  float ex = abs(b.x) - 1.;
  d = ex > 0. ? length(vec2(ex, max(d + th * .6, 0.))) - th * .4 : d;
  float brow = aa(d);
  brow *= .8 + .2 * vn(vec2(b.x * 26. - b.y * 30., b.y * 6.));
  if (uBrowCol.w * s > .5) brow *= 1. - aa(abs(b.x - .42 - b.y * .6) - .07);
  col = mix(col, uBrowCol.rgb, brow * .96);
}

void p3dMouth(vec2 uv, inout vec3 col, inout float rough){
  float smile = clamp(uMouth2.x + uExpr.y * .9, -1., 1.4);
  float open = clamp(uMouth2.y + uExpr.z, 0., 1.);
  vec2 m = (uv - vec2(0., uMouth.x)) / (uMouth.y * (1. + .1 * smile));
  if (abs(m.x) > 1.4 || abs(m.y) > 1.5) return;
  float x = clamp(m.x, -1., 1.);
  float k = 1. - x * x;
  float line = smile * .34 * (x * x - .42) + uMouth2.w * x * .16;
  float y = m.y - line;
  float oU = open * .2 * pow(k, .8), oL = open * .62 * pow(k, .7);
  float tU = uMouth.z * pow(k, .6) * (1. - uMouth2.z * exp(-x * x / .028));
  float tL = uMouth.w * pow(k, .5);
  float inX = aa(abs(m.x) - 1.);
  vec3 skin = col;
  vec3 lipNat = skin * vec3(.86, .6, .6) + vec3(.07, .01, .015);
  vec3 lipc = mix(lipNat, uLip.rgb, uLip.a);
  float up = aa(max(y - (oU + tU), oU - y - .01)) * inX;
  float lo = aa(max((-oL - tL) - y, y + oL - .01)) * inX;
  col = mix(col, lipc * .88, up * (.55 + .45 * uLip.a));
  col = mix(col, lipc, lo * (.55 + .45 * uLip.a));
  float gl = aa(length(vec2(m.x * .55, (y + oL + tL * .45) * 2.4)) - .2) * lo;
  col += gl * (.07 + .16 * uLip.a);
  rough = mix(rough, .3, max(up, lo) * (.3 + .6 * uLip.a));
  // mouth interior
  float cav = aa(max(y - oU, -oL - y)) * inX * smoothstep(.02, .08, open);
  vec3 inner = vec3(.3, .07, .09);
  float tongue = aa(length(vec2(m.x * 1.25, (y + oL) * 1.5)) - oL * 1.1);
  inner = mix(inner, vec3(.86, .4, .44), tongue * .9);
  float teethH = .2;
  float teeth = aa(oU - teethH - y);
  vec3 tcol = vec3(.97, .96, .93) * (1. - .12 * smoothstep(oU - .08, oU, y));
  int ts = int(uTeeth.x + .5);
  if (ts == 1) tcol = mix(tcol, vec3(.2, .08, .1), aa(abs(m.x) - .035));
  if (ts == 2) { float wire = aa(abs(y - oU + teethH * .5) - .014); float br = aa(sdBox(vec2(fract(m.x * 4.5) - .5, (y - oU + teethH * .5) * 6.), vec2(.2, .25)));
    tcol = mix(tcol, vec3(.55, .6, .68), max(wire, br)); }
  if (ts == 4) tcol = mix(tcol, vec3(1., .78, .2), aa(abs(m.x - .2) - .1));
  inner = mix(inner, tcol, teeth);
  if (ts == 3) { float fx = abs(abs(m.x) - .36); float fang = aa(fx * 2.4 + (oU - teethH - y) * 1. - .16) * aa(oU - teethH - .3 - y + 0.) ;
    fang = aa(max(fx * 2.6 - (y - (oU - teethH - .2)), y - oU)); inner = mix(inner, vec3(.97, .96, .93), fang); }
  col = mix(col, inner, cav);
  rough = mix(rough, .25, cav);
  // seam and corners
  float seam = aa(abs(y) - .022 - .014 * (1. - k)) * inX * (1. - smoothstep(.02, .08, open));
  col = mix(col, lipc * .38, seam * .95);
  float corner = aa(length(vec2(abs(m.x) - 1., y) * vec2(1., 1.)) - .045);
  col = mix(col, lipc * .45, corner * .7);
  // soft shadow under the lower lip
  col *= 1. - .12 * smoothstep(.22, 0., abs(y + oL + tL + .1)) * smoothstep(1., .3, abs(m.x));
}

float p3dBeardMask(vec2 uv){
  int st = int(uBeard.x + .5);
  if (st == 0) return 0.;
  float my = uMouth.x; float mw = uMouth.y;
  vec2 a = vec2(abs(uv.x), uv.y);
  float jaw = -.44 + .62 * uv.x * uv.x;
  float lips = aa(length((uv - vec2(0., my - .01)) / vec2(mw * 1.08, .085)) - 1.);
  float region = smoothstep(.05, -.06, uv.y - jaw) * (1. - lips);
  float must = aa(sdSeg(a, vec2(.0, my + .135), vec2(mw * 1.05, my + .06)) - .055 * (1. - .5 * smoothstep(0., mw * 1.1, a.x)));
  float m = 0.;
  if (st == 1) m = region * .5;
  else if (st == 2) m = must;
  else if (st == 3) m = max(must, aa(sdSeg(a, vec2(mw * 1.0, my + .06), vec2(mw * 1.4, my + .2)) - .028));
  else if (st == 4) { float ring = aa(length((uv - vec2(0., my - .1)) / vec2(mw * 1.25, .36)) - 1.); m = max(must, ring * (1. - lips) * step(uv.y, my + .1)); }
  else if (st == 5) m = aa(length((uv - vec2(0., my - .2)) / vec2(.07, .09)) - 1.);
  else if (st == 6) { float band = smoothstep(.0, -.05, uv.y - jaw) * smoothstep(-.3, -.2, uv.y - jaw); m = band; }
  else if (st == 10) { m = smoothstep(.5, .62, a.x) * smoothstep(.15, .05, uv.y) * smoothstep(-.12, -.02, uv.y - jaw + .5) ; m = max(m, 0.) * region; m = smoothstep(.5, .62, a.x) * region; }
  else m = max(region, must);
  return m;
}

void p3dFace(vec2 uv, float mask, inout vec3 col, inout float rough, inout vec3 emis){
  if (mask < .01) return;
  vec3 skin = col;
  // blush
  vec2 bq = (vec2(abs(uv.x), uv.y) - vec2(uEye.x + .12, uEye.y - .36)) / vec2(.26, .17);
  col = mix(col, uBlush.rgb, uBlush.a * .6 * smoothstep(1., 0., length(bq)));
  // freckles and moles
  if (uMakeup.y > 0.) { vec2 g = uv * 38.; vec2 i = floor(g); vec2 o = h22(i);
    float dot_ = aa(length(fract(g) - .2 - o * .6) - (.1 + o.x * .1)) * step(1. - uMakeup.y * .6, h21(i + 4.));
    float band = smoothstep(.5, 0., abs(uv.y - uEye.y + .32)) * smoothstep(.95, .5, abs(uv.x));
    col = mix(col, skin * vec3(.66, .5, .42), dot_ * band * .75); }
  if (uMakeup.z > .5) col = mix(col, vec3(.2, .12, .1), aa(length(uv - vec2(.34, uMouth.x + .16)) - .022));
  if (uMakeup.z > 1.5) col = mix(col, vec3(.2, .12, .1), aa(length(uv - vec2(-.5, uEye.y - .2)) - .02));
  // nose hints
  vec2 nq = vec2(abs(uv.x) - uNoseP.y, uv.y - uNoseP.x);
  col *= 1. - .1 * smoothstep(.045, .0, length(nq * vec2(1., 1.8)));
  // face paint (under eyes and brows)
  int ps = int(uPaint.x + .5);
  if (ps > 0) {
    float pm = 0.; vec3 pc = uPaintA; vec2 a = vec2(abs(uv.x), uv.y);
    float ey = uEye.y; float ex = uEye.x;
    if (ps == 1) pm = aa(sdBox(a - vec2(ex, ey - .27), vec2(.14, .035)) - .02);
    else if (ps == 2) pm = aa(sdStar((uv - vec2(ex + .12, ey - .36)) / .12, .45) * .12);
    else if (ps == 3) pm = aa(sdHeart((uv - vec2(ex + .12, ey - .38)) / .1) * .1);
    else if (ps == 4) { pm = aa(sdSeg(a, vec2(.22, uNoseP.x - .0), vec2(.62, uNoseP.x + .08)) - .012);
      pm = max(pm, aa(sdSeg(a, vec2(.22, uNoseP.x - .05), vec2(.64, uNoseP.x - .05)) - .012));
      pm = max(pm, aa(sdSeg(a, vec2(.22, uNoseP.x - .1), vec2(.6, uNoseP.x - .18)) - .012));
      pm = max(pm, aa(length((uv - vec2(0., uNoseP.x + .03)) / vec2(.07, .05)) - 1.)); }
    else if (ps == 5) { for (int i = 0; i < 3; i++) { float fy = ey - .2 - float(i) * .17; float w = .05 * (1. - smoothstep(.45, .95, a.x) * .0);
        float tri = (a.x - .42) * .16; pm = max(pm, aa(max(abs(uv.y - fy) - tri, .42 - a.x))); }
      pm = max(pm, aa(max(abs(uv.x) - (uv.y - ey - .42) * .3, ey + .42 - uv.y)) * step(uv.y, ey + .9)); }
    else if (ps == 6) { pm = aa(abs(uv.y - ey + .3) - .03) * step(a.x, .72); pm = max(pm, aa(abs(uv.y - ey + .4) - .018) * step(a.x, .66)); pc = uv.y > ey - .35 ? uPaintA : uPaintB; }
    else if (ps == 7) { float md = length((a - vec2(ex, ey + .02)) / vec2(.3, .24)) - 1.; md = min(md, sdBox(a - vec2(0., ey + .03), vec2(ex, .1)));
      pm = aa(md * .2); pc = mix(uPaintA, uPaintA * 1.5 + .1, smoothstep(.0, .5, uv.y - ey)); }
    else if (ps == 8) { vec2 q = (uv - vec2(-ex, ey)) / .34; float d = min(min(sdSeg(q, vec2(.15, 1.1), vec2(-.2, .2)), sdSeg(q, vec2(-.2, .2), vec2(.2, .1))), sdSeg(q, vec2(.2, .1), vec2(-.15, -1.)));
      pm = aa((d - .13 * (1. - smoothstep(.6, 1.1, abs(q.y)))) * .34); pc = mix(uPaintA, uPaintB, smoothstep(-.6, .8, q.y)); }
    else if (ps == 9) { float half_ = smoothstep(-.04, .04, uv.x + sin(uv.y * 9.) * .04); float n = fbm(uv * 3.5 + uTime * .02);
      pc = mix(uPaintA * .5, uPaintB, smoothstep(.35, .75, n)); vec2 g = floor(uv * 60.); float st = step(.95, h21(g)) * aa(length(fract(uv * 60.) - .5) - .3) * (.6 + .4 * sin(uTime * 2. + h21(g) * 40.));
      pc += st; pm = half_ * .92; emis += (pc * .25 + st) * pm * mask; }
    else if (ps == 10) { vec2 q = uv * 9.; vec2 i = floor(q); vec2 f = fract(q) - .5; float r = h21(i); float d = r < .5 ? abs(f.x) : abs(f.y);
      float cheek = smoothstep(.34, .2, length((a - vec2(ex + .18, ey - .42)) / vec2(1., 1.2))) ; pm = aa((d - .07) / 9.) * cheek * step(.3, r);
      pm = max(pm, aa((length(f) - .2) / 9.) * cheek * step(.7, h21(i + 2.))); emis += uPaintA * pm * (1.2 + .5 * sin(uTime * 2.5 + r * 30.)) * mask; }
    else if (ps == 11) { vec2 q = uv - vec2(0., ey + .62); float d = abs(length(q) - .13) - .012; d = min(d, sdSeg(q, vec2(0., -.13), vec2(0., .13)) - .01);
      d = min(d, sdSeg(q, vec2(-.11, .06), vec2(.11, -.06)) - .01); vec2 c = a - vec2(ex + .16, ey - .36);
      d = min(d, abs(abs(c.x) + abs(c.y) - .07) - .01); pm = aa(d); emis += uPaintA * pm * (1.3 + .5 * sin(uTime * 1.6)) * mask; }
    else if (ps == 12) { float bands = uv.y - ey + .26 + a.x * a.x * .12; pm = aa(abs(bands) - .075) * step(a.x, .78); pc = hue(.02 + (bands + .075) / .15 * .8); }
    else if (ps == 13) { for (int i = 0; i < 5; i++) { vec2 c = vec2(ex - .18 + float(i) * .09, ey - .24 - sin(float(i) * .78) * .05); pm = max(pm, aa(length(a - c) - .022)); }
      pc = uPaintA; }
    col = mix(col, pc, pm * (ps == 9 ? 1. : .94));
  }
  // scars
  if (uScar.x > .5) { vec2 q = uv - vec2(.52, uEye.y - .34); float d = sdSeg(q, vec2(-.12, .1), vec2(.1, -.12)) - .014; col = mix(col, skin * vec3(1.12, .82, .8) + .04, aa(d) * .85);
    col = mix(col, skin * .8, aa(abs(sdSeg(q, vec2(-.12, .1), vec2(.1, -.12)) - .022) - .004) * .3); }
  if (uScar.w > .5) { vec2 q = uv - vec2(-.12, uMouth.x - .34); col = mix(col, skin * vec3(1.12, .82, .8) + .04, aa(sdSeg(q, vec2(-.06, .05), vec2(.06, -.04)) - .012) * .85); }
  if (uScar.z > .5) { vec2 q = (uv - vec2(.28, uEye.y + .62)) / .3; float d = min(min(sdSeg(q, vec2(.1, .9), vec2(-.15, .25)), sdSeg(q, vec2(-.15, .25), vec2(.15, .15))), sdSeg(q, vec2(.15, .15), vec2(-.1, -.7)));
    col = mix(col, skin * vec3(1.15, .8, .78) + .05, aa((d - .06) * .3) * .9); }
  // eyes, brows, mouth
  p3dEye(uv, 1., uIrisL, col, rough, emis);
  p3dEye(uv, -1., uIrisR, col, rough, emis);
  // facial hair sits under the mouth shapes but over skin
  float bm = p3dBeardMask(uv);
  if (bm > 0.) { float tex = vn(vec2(uv.x * 70., uv.y * 22.)) ; float sp = uBeard.x < 1.5 ? step(.45, h21(floor(uv * 260.))) * .9 + .1 : 1.;
    col = mix(col, uBeardCol * (.75 + .5 * tex), bm * uBeard.y * sp); rough = mix(rough, .8, bm); }
  p3dMouth(uv, col, rough);
  p3dBrow(uv, 1., col);
  p3dBrow(uv, -1., col);
  // bandage across the nose bridge
  if (uScar.y > .5) { vec2 q = uv - vec2(0., uEye.y - .2); float ca = cos(.12), sa = sin(.12); q = vec2(ca * q.x - sa * q.y, sa * q.x + ca * q.y);
    float d = sdBox(q, vec2(.2, .05)) - .02; vec3 bc = vec3(.93, .8, .66); bc *= 1. - .12 * step(abs(q.x), .08) * (.5 + .5 * step(.5, fract(q.x * 60.)));
    col = mix(col, bc, aa(d)); rough = mix(rough, .8, aa(d)); }
  col = mix(skin, col, mask);
}
`,R1=`
float p3dEmblem(int id, vec2 q){
  if (id == 1) return aa(sdStar(q, .5));
  if (id == 2) return aa(sdHeart(q * 1.1 + vec2(0., .1)) / 1.1);
  if (id == 3) { float d = min(min(sdSeg(q, vec2(.25, .95), vec2(-.3, .05)), sdSeg(q, vec2(-.3, .05), vec2(.3, .05))), sdSeg(q, vec2(.3, .05), vec2(-.2, -.95))); return aa(d - .17 * (1. - smoothstep(.5, 1., abs(q.y)))); }
  if (id == 4) { float f = aa(length(q) - .85); float eyes = aa(length(vec2(abs(q.x) - .3, q.y - .22) * vec2(1., .7)) - .1);
    float sm = aa(abs(length(q - vec2(0., .05)) - .5) - .07) * step(q.y, -.12); return f * (1. - max(eyes, sm)); }
  if (id == 5) { vec2 a = vec2(abs(q.x), q.y); float br = min(sdSeg(a, vec2(.55, .5), vec2(.95, 0.)), sdSeg(a, vec2(.95, 0.), vec2(.55, -.5))); float sl = sdSeg(q, vec2(.2, .65), vec2(-.2, -.65));
    return aa(min(br, sl) - .09); }
  if (id == 6) { float pl = aa(length(q) - .5); vec2 r = vec2(q.x * .95 + q.y * .3, (q.y - q.x * .3) * 3.); float ring = aa(abs(length(r) - .9) - .09) * (1. - pl * step(0., q.y - q.x * .3)); return max(pl, ring); }
  if (id == 7) return aa(abs(q.y) - .32) ;
  if (id == 8) { float m = aa(length(q) - .75) * (1. - aa(length(q - vec2(.32, .2)) - .62)); return m; }
  if (id == 9) { vec2 g = floor((q + vec2(0., .1)) * 4.5 + .5); float h = 0.; float ax = abs(g.x);
    if (g.y == 2.) h = (ax == 1. || ax == 2.) ? 1. : 0.; else if (g.y == 1. || g.y == 0.) h = ax <= 3. ? 1. : 0.; else if (g.y == -1.) h = ax <= 2. ? 1. : 0.; else if (g.y == -2.) h = ax <= 1. ? 1. : 0.; else if (g.y == -3.) h = ax == 0. ? 1. : 0.;
    return h; }
  if (id == 10) { vec2 a = vec2(abs(q.x), q.y); float base = aa(sdBox(q + vec2(0., .45), vec2(.7, .16))); float d = max(a.y - .55 + a.x * 0. , -.3 - a.y);
    float pts = aa(max(q.y - (.6 - abs(fract(q.x * 1.45 + .5) - .5) * 1.5), -.35 - q.y)) * step(a.x, .72); return max(base, pts); }
  if (id == 11) { float fl = aa(length(q * vec2(1., .8) + vec2(0., .25)) - .55); float tip = aa(max(abs(q.x) - (.75 - q.y) * .45, -q.y - .1)); float inner_ = aa(length(q * vec2(1.3, 1.) + vec2(0., .4)) - .3);
    return max(fl, tip) * (1. - inner_ * .0); }
  if (id == 12) { float d = abs(length(q) - .62) - .1; d = min(d, sdSeg(q, vec2(0.), vec2(0., .42)) - .06); d = min(d, sdSeg(q, vec2(0.), vec2(.3, -.12)) - .06); return aa(d); }
  return 0.;
}
`,Fi={uTime:{value:0},uRimColor:{value:new tt(1,1,1)}};function C1(){const i=(t=0,n=0,s=0,a=0)=>({value:new Bt(t,n,s,a)}),e=(t=0,n=0,s=0)=>({value:new tt(t,n,s)});return{uEye:i(.36,0,.17,0),uEyeShape:i(.6,.42,.75,.7),uEyeShape2:i(0,.52,.08,1),uIrisL:e(.3,.2,.1),uIrisR:e(.3,.2,.1),uPupil:i(0,.42,0,0),uExpr:i(1,0,0,0),uBrowAnim:i(),uGaze:{value:new _t},uBrow:i(.36,.2,.2,.035),uBrow2:i(.1,0,0,.5),uBrowCol:i(.1,.07,.05,0),uMouth:i(-.62,.22,.12,.16),uMouth2:i(.4,0,.3,0),uLip:i(.7,.3,.3,0),uTeeth:i(),uBlush:i(1,.5,.5,0),uShadow:i(.4,.3,.5,0),uMakeup:i(),uPaint:i(),uPaintA:e(1,1,1),uPaintB:e(1,1,1),uScar:i(),uBeard:i(),uBeardCol:e(.1,.07,.05),uNoseP:i(-.34,.07,1,0)}}const P1=`
attribute vec3 aColor2; attribute vec4 aFx; attribute vec4 aAux;
varying vec3 vColor2; varying vec4 vFx; varying vec4 vAux; varying vec2 vPUv; varying vec3 vObjPos; varying vec3 vObjN;
`,L1=`
vColor2 = aColor2; vFx = aFx; vAux = aAux; vPUv = uv; vObjPos = position; vObjN = normal;
`;function I1(i){return`
uniform float uTime; uniform vec3 uRimColor;
varying vec3 vColor2; varying vec4 vFx; varying vec4 vAux; varying vec2 vPUv; varying vec3 vObjPos; varying vec3 vObjN;
${_h}
${w1}
${E1}
${R1}
${i.face?A1+T1:""}
${i.hair?"uniform vec4 uHair;":""}
vec3 p3dBump(vec3 N, vec3 vp, float h){
  vec3 dpdx = dFdx(vp), dpdy = dFdy(vp); float dhx = dFdx(h), dhy = dFdy(h);
  vec3 r1 = cross(dpdy, N), r2 = cross(N, dpdx); float det = dot(dpdx, r1);
  vec3 g = sign(det) * (dhx * r1 + dhy * r2);
  return normalize(abs(det) * N - g);
}
float p3dIgn(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(.06711056, .00583715)))); }
`}function D1(i){return`
#include <color_fragment>
int p3dPat = int(vFx.x + .5); int p3dFin = int(vFx.z + .5);
float p3dE = 0.;
vec3 p3dCol = p3dPattern(p3dPat, vPUv, vFx.y, diffuseColor.rgb, vColor2, uTime, p3dE);
${i.hair?`
{
  if (vAux.w < .1) discard;
  int hm = int(uHair.x + .5);
  float flow = vAux.x, tl = vAux.y;
  if (vFx.w > .5 && h21(floor(vec2(flow * 2200., tl * 800.))) < .25) discard;
  vec3 c2 = vColor2;
  if (hm == 1) p3dCol = mix(p3dCol, c2, smoothstep(.45, .85, tl));
  else if (hm == 2) p3dCol = mix(p3dCol, c2, step(.62, h21(vec2(floor(flow * 11.), 3.))));
  else if (hm == 3) p3dCol = mix(p3dCol, c2, smoothstep(-.004, .004, vAux.z));
  else if (hm == 4) p3dCol = mix(c2, p3dCol, smoothstep(.1, .38, tl));
  else if (hm == 5) p3dCol = hue(flow * .9 + tl * .35) * .8 + .12;
  else if (hm == 6) { float n = fbm(vec2(flow * 14., tl * 5. - uTime * 1.2)); float f = tl * .9 + n * .5; p3dCol = mix(p3dCol, c2, smoothstep(.35, .8, f)); p3dCol = mix(p3dCol, vec3(1., .95, .6), smoothstep(.95, 1.25, f)); p3dE = .35 + smoothstep(.3, 1., f) * .9; }
  else if (hm == 7) { float n = fbm(vec2(flow * 6., tl * 3.) + uTime * .03); p3dCol = mix(p3dCol * .5, c2, smoothstep(.35, .7, n)); vec2 g = floor(vec2(flow * 60., tl * 40.)); float st = step(.95, h21(g)) * (.5 + .5 * sin(uTime * 2.5 + h21(g + 2.) * 40.)); p3dCol += st; p3dE = .2 + st; }
  else if (hm == 8) { p3dCol = mix(p3dCol, c2, smoothstep(.3, .9, tl + vn(vec2(flow * 30., tl * 4.)) * .3)); p3dE = .12; }
  float strand = vn(vec2(flow * 70., tl * 2.5)) * .6 + vn(vec2(flow * 190., tl * 5.)) * .4;
  p3dCol *= .8 + .36 * strand;
}`:""}
${i.face?"":`
if (vFx.w > .5 && vAux.z > 0. && vObjN.z > .15) {
  float em = p3dEmblem(int(vFx.w + .5), (vObjPos.xy - vAux.xy) / vAux.z);
  p3dCol = mix(p3dCol, vColor2, em * smoothstep(.15, .4, vObjN.z));
}`}
diffuseColor.rgb = p3dCol;
`}function N1(i){return`
#include <normal_fragment_begin>
vec3 p3dEmis = vec3(0.); float p3dAlpha = 1.; float p3dBumpH = 0.; float p3dRim = 0.;
vec3 p3dView = normalize(vViewPosition);
p3dFinish(p3dFin, vPUv, normal, p3dView, uTime, diffuseColor.rgb, roughnessFactor, metalnessFactor, p3dEmis, p3dAlpha, p3dBumpH, p3dRim);
${i.hair?"p3dBumpH += vn(vec2(vAux.x * 150., vAux.y * 4.)) * .0016; roughnessFactor = .46; p3dRim = .32;":""}
if (p3dBumpH != 0.) normal = p3dBump(normal, -vViewPosition, p3dBumpH);
${i.face?"p3dFace(vAux.xy, vAux.z, diffuseColor.rgb, roughnessFactor, p3dEmis); diffuseColor.rgb *= vAux.w;":""}
${i.transparent?"diffuseColor.a = p3dAlpha;":"if (p3dAlpha < .999 && p3dAlpha < p3dIgn(gl_FragCoord.xy)) discard;"}
`}function vi(i={}){const e=new Md({vertexColors:!0,roughness:.8,metalness:0,side:i.side??Oi,envMapIntensity:i.flat?.35:1}),t=`p3d-${i.face?"face":""}${i.hair?"hair":""}${i.flat?"flat":""}${i.transparent?"tr":""}`;return i.transparent&&(e.transparent=!0,e.depthWrite=!1),e.customProgramCacheKey=()=>t,e.onBeforeCompile=n=>{n.uniforms.uTime=Fi.uTime,n.uniforms.uRimColor=Fi.uRimColor,i.face&&Object.assign(n.uniforms,i.face),i.hair&&(n.uniforms.uHair=i.hair),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
${P1}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${L1}`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
${I1(i)}`).replace("#include <color_fragment>",D1(i)).replace("#include <normal_fragment_begin>",N1(i)).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += p3dEmis + diffuseColor.rgb * p3dE;`).replace("#include <opaque_fragment>",`${i.flat?"":"outgoingLight += uRimColor * p3dRim * pow(1. - saturate(dot(normal, p3dView)), 3.2) * (.3 + .7 * diffuseColor.rgb);"}
#include <opaque_fragment>`)},e}const Lt=i=>{const e=new tt(i);return[e.r,e.g,e.b]};function U1(i,e,t,n){const s=new J0,a=new po(10,24,16),o=[],r=new tt(e),l=new tt(t),c=a.attributes.position;for(let p=0;p<c.count;p++){const g=Vf.smoothstep(c.getY(p)/10,-.4,.6),x=l.clone().lerp(r,g);o.push(x.r,x.g,x.b)}a.setAttribute("color",new kt(o,3)),s.add(new Qt(a,new ia({vertexColors:!0,side:Cn})));const h=(p,g,x,d,m,M,b)=>{const v=new Qt(new ki(d,m),new ia({color:new tt(M).multiplyScalar(b),side:An}));v.position.set(p,g,x),v.lookAt(0,0,0),s.add(v)};h(-5,6,5,6,4,n,5),h(6,3,2,3,5,e,2.5),h(0,4,-7,8,3,e,2),h(2,8,0,4,4,"#ffffff",3);const u=new aa(i),f=u.fromScene(s,.03).texture;return u.dispose(),a.dispose(),f}class F1{renderer;scene=new J0;camera=new Vn(30,1,.1,200);key=new Tc("#fff1dc",2.2);rim=new Tc("#bcd6ff",1.6);hemi=new Ed("#e6ecff","#c9a892",1.5);stats={fps:0,frameMs:0,drawCalls:0,triangles:0,dpr:1};maxDpr=1.25;minDpr=.6;adaptive=!0;raf=0;last=0;acc=0;frames=0;slow=0;fast=0;dpr=1;updaters=[];time=0;running=!1;constructor(e,t={}){this.renderer=new S1({canvas:e,antialias:!0,alpha:!!t.alpha,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve}),this.renderer.outputColorSpace=In,this.renderer.toneMapping=ul,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qs,this.key.position.set(-2.2,4.2,3.4),this.key.castShadow=!0,this.key.shadow.mapSize.set(1024,1024);const n=this.key.shadow.camera;n.left=-1.3,n.right=1.3,n.top=2.4,n.bottom=-.4,n.near=.5,n.far=12,this.key.shadow.bias=-6e-4,this.key.shadow.normalBias=.012,this.key.shadow.radius=4,this.rim.position.set(2.5,2.6,-3),this.scene.add(this.key,this.key.target,this.rim,this.hemi),this.dpr=Math.min(this.maxDpr,typeof window<"u"&&window.devicePixelRatio||1),this.renderer.setPixelRatio(this.dpr)}setEnvironment(e,t,n){this.scene.environment?.dispose(),this.scene.environment=U1(this.renderer,e,t,n)}resize(e,t){e<2||t<2||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}onUpdate(e){this.updaters.push(e)}renderOnce(e=0){this.time+=e,Fi.uTime.value=this.time;for(const t of this.updaters)t(e,this.time);this.renderer.render(this.scene,this.camera),this.stats.drawCalls=this.renderer.info.render.calls,this.stats.triangles=this.renderer.info.render.triangles}start(){if(this.running)return;this.running=!0,this.last=performance.now();const e=t=>{if(!this.running)return;this.raf=requestAnimationFrame(e);const n=t-this.last;this.last=t;const s=Math.min(n/1e3,.1);if(this.renderOnce(s),this.acc+=n,this.frames++,this.acc>=500){const a=this.acc/this.frames;if(this.stats.fps=Math.round(1e3/a),this.stats.frameMs=Math.round(a*10)/10,this.stats.dpr=Math.round(this.dpr*100)/100,this.adaptive){a>19.5?(this.slow++,this.fast=0):a<17.2?(this.fast++,this.slow=0):(this.slow=0,this.fast=0);const o=Math.min(this.maxDpr,window.devicePixelRatio||1);this.slow>=2&&this.dpr>this.minDpr?(this.dpr=Math.max(this.minDpr,this.dpr-.15),this.renderer.setPixelRatio(this.dpr),this.slow=0):this.fast>=8&&this.dpr<o&&(this.dpr=Math.min(o,this.dpr+.1),this.renderer.setPixelRatio(this.dpr),this.fast=0)}this.acc=0,this.frames=0}};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}dispose(){this.stop(),this.scene.environment?.dispose(),this.renderer.dispose()}}const F=(i,e={})=>({color:i,color2:e.color2??i,pattern:e.pattern??0,scale:e.scale??1,finish:e.finish??0,extra:e.extra??0});function k1(i,e,t=!0){const n=new Array(i.length).fill(0);for(let s=0;s<e.length;s+=3){const a=e[s]*3,o=e[s+1]*3,r=e[s+2]*3,l=i[a],c=i[a+1],h=i[a+2],u=i[o]-l,f=i[o+1]-c,p=i[o+2]-h,g=i[r]-l,x=i[r+1]-c,d=i[r+2]-h,m=f*d-p*x,M=p*g-u*d,b=u*x-f*g;n[a]=n[a]+m,n[a+1]=n[a+1]+M,n[a+2]=n[a+2]+b,n[o]=n[o]+m,n[o+1]=n[o+1]+M,n[o+2]=n[o+2]+b,n[r]=n[r]+m,n[r+1]=n[r+1]+M,n[r+2]=n[r+2]+b}if(t){const s=new Map;for(let a=0;a<i.length;a+=3){const o=`${Math.round(i[a]*2e4)},${Math.round(i[a+1]*2e4)},${Math.round(i[a+2]*2e4)}`,r=s.get(o);r?r.push(a):s.set(o,[a])}for(const a of s.values()){if(a.length<2)continue;let o=0,r=0,l=0;for(const c of a)o+=n[c],r+=n[c+1],l+=n[c+2];for(const c of a)n[c]=o,n[c+1]=r,n[c+2]=l}}for(let s=0;s<n.length;s+=3){const a=Math.hypot(n[s],n[s+1],n[s+2])||1;n[s]=n[s]/a,n[s+1]=n[s+1]/a,n[s+2]=n[s+2]/a}return n}class En{pos=[];nor=[];uv=[];col=[];col2=[];fx=[];skinI=[];skinW=[];aux=[];idx=[];get vertexCount(){return this.pos.length/3}get triCount(){return this.idx.length/3}add(e,t,n={}){const s=this.pos.length/3,a=e.pos.length/3;let o=e.pos,r=e.idx;const l=n.matrix?n.matrix.determinant()<0!=!!n.flip:!!n.flip;if(l){r=r.slice();for(let h=0;h<r.length;h+=3){const u=r[h+1];r[h+1]=r[h+2],r[h+2]=u}}if(n.matrix){const h=n.matrix.elements;o=new Array(e.pos.length);for(let u=0;u<e.pos.length;u+=3){const f=e.pos[u],p=e.pos[u+1],g=e.pos[u+2];o[u]=h[0]*f+h[4]*p+h[8]*g+h[12],o[u+1]=h[1]*f+h[5]*p+h[9]*g+h[13],o[u+2]=h[2]*f+h[6]*p+h[10]*g+h[14]}}const c=e.nor&&!n.matrix&&!l?e.nor:k1(o,r);for(let h=0;h<o.length;h++)this.pos.push(o[h]),this.nor.push(c[h]);for(let h=0;h<a;h++)this.uv.push(e.uv?e.uv[h*2]:0,e.uv?e.uv[h*2+1]:0),this.col.push(t.color[0],t.color[1],t.color[2]),this.col2.push(t.color2[0],t.color2[1],t.color2[2]),this.fx.push(t.pattern,t.scale,t.finish,t.extra),e.skinI&&e.skinW?(this.skinI.push(e.skinI[h*4],e.skinI[h*4+1],e.skinI[h*4+2],e.skinI[h*4+3]),this.skinW.push(e.skinW[h*4],e.skinW[h*4+1],e.skinW[h*4+2],e.skinW[h*4+3])):(this.skinI.push(n.bone??0,0,0,0),this.skinW.push(1,0,0,0)),this.aux.push(n.aux?n.aux[h*4]:0,n.aux?n.aux[h*4+1]:0,n.aux?n.aux[h*4+2]:0,n.aux?n.aux[h*4+3]:0);for(let h=0;h<r.length;h++)this.idx.push(r[h]+s);return this}bounds(){const e=[1/0,1/0,1/0],t=[-1/0,-1/0,-1/0];for(let n=0;n<this.pos.length;n+=3)for(let s=0;s<3;s++){const a=this.pos[n+s];a<e[s]&&(e[s]=a),a>t[s]&&(t[s]=a)}return{min:e,max:t}}hasNaN(){for(let e=0;e<this.pos.length;e++)if(!Number.isFinite(this.pos[e]))return!0;for(let e=0;e<this.nor.length;e++)if(!Number.isFinite(this.nor[e]))return!0;return!1}toGeometry(e,t=!0){const n=new Pn;return n.setAttribute("position",new kt(this.pos,3)),n.setAttribute("normal",new kt(this.nor,3)),n.setAttribute("uv",new kt(this.uv,2)),n.setAttribute("color",new kt(this.col,3)),n.setAttribute("aColor2",new kt(this.col2,3)),n.setAttribute("aFx",new kt(this.fx,4)),t&&n.setAttribute("aAux",new kt(this.aux,4)),e&&(n.setAttribute("skinIndex",new ro(this.skinI,4)),n.setAttribute("skinWeight",new kt(this.skinW,4))),n.setIndex(this.vertexCount>65535?new wl(this.idx,1):new ro(this.idx,1)),n.computeBoundingSphere(),n}}const lo=(i,e,t)=>t===2?1:Math.pow(Math.pow(Math.abs(i),t)+Math.pow(Math.abs(e),t),-1/t),el=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],Jo=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],jo=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Pl=i=>Math.hypot(i[0],i[1],i[2]),$s=i=>{const e=Pl(i)||1;return[i[0]/e,i[1]/e,i[2]/e]},Qo=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]];function bh(i,e,t){const n=(i??[[0,1]]).slice(0,4);let s=0;for(const a of n)s+=a[1];for(let a=0;a<4;a++)e.push(n[a]?n[a][0]:0),t.push(n[a]?n[a][1]/(s||1):0)}function Mt(i,e={}){const t=e.seg??20,n=e.capBulge??.7,s=[],a=(v,R,S)=>{if(!S||S==="none")return[];const _=$s(el(v.c,R.c)),T=Math.min(v.rx,v.rz),N=[];if(S==="flat")N.push({...v,rx:v.rx*.92,rz:v.rz*.92,c:Jo(v.c,jo(_,T*.06))}),N.push({...v,rx:1e-4,rz:1e-4,c:Jo(v.c,jo(_,T*.07))});else for(let z=1;z<=4;z++){const H=z/4*Math.PI/2,C=Math.max(Math.cos(H),.001);N.push({...v,rx:v.rx*C,rz:v.rz*C,c:Jo(v.c,jo(_,T*n*Math.sin(H)))})}return N};if(i.length<2)return{pos:[],idx:[]};s.push(...a(i[0],i[1],e.capStart).reverse()),s.push(...i),s.push(...a(i[i.length-1],i[i.length-2],e.capEnd));const o=e.arc?e.arc[0]:0,r=e.arc?e.arc[1]:Math.PI*2,l=[],c=[],h=[],u=[],f=[];let p=0;for(let v=0;v<s.length;v++){const R=s[v];v>0&&(p+=Pl(el(R.c,s[v-1].c)));const S=R.ax??[1,0,0],_=R.az??[0,0,1],T=R.n??2,N=Math.PI*(R.rx+R.rz);for(let P=0;P<=t;P++){const z=o+(r-o)*(P/t),H=R.fn?R.fn(z):1,C=lo(Math.cos(z),Math.sin(z),T),I=Math.sin(z)*C*R.rx*H,X=-Math.cos(z)*C*R.rz*H;l.push(R.c[0]+S[0]*I+_[0]*X,R.c[1]+S[1]*I+_[1]*X,R.c[2]+S[2]*I+_[2]*X),c.push((z/(Math.PI*2)-.5)*N,p),bh(e.weightFn?e.weightFn(v,z,R.w??[[0,1]]):R.w,u,f)}}const g=t+1;for(let v=0;v<s.length-1;v++)for(let R=0;R<t;R++){const S=v*g+R,_=S+1,T=S+g,N=T+1;h.push(S,T,_,_,T,N)}let x=0,d=0,m=0;for(const v of s)x+=v.c[0],d+=v.c[1],m+=v.c[2];x/=s.length,d/=s.length,m/=s.length;let M=0;for(let v=0;v<h.length;v+=3){const R=h[v]*3,S=h[v+1]*3,_=h[v+2]*3,T=l[R]-x,N=l[R+1]-d,P=l[R+2]-m,z=l[S]-x,H=l[S+1]-d,C=l[S+2]-m,I=l[_]-x,X=l[_+1]-d,O=l[_+2]-m;M+=T*(H*O-C*X)+N*(C*I-z*O)+P*(z*X-H*I)}if(M<0)for(let v=0;v<h.length;v+=3){const R=h[v+1];h[v+1]=h[v+2],h[v+2]=R}return!!e.weightFn||i.some(v=>v.w)?{pos:l,idx:h,uv:c,skinI:u,skinW:f}:{pos:l,idx:h,uv:c}}function K(i,e,t={}){const n=t.seg??14,s=Math.max(6,Math.round(n*.7)),a=t.n??2,o=t.ny??t.n??2,r=[],l=[],c=[],h=[],u=[];for(let p=0;p<=s;p++){const g=-Math.PI/2+p/s*Math.PI,x=lo(Math.cos(g),Math.sin(g),o),d=Math.sin(g)*x,m=Math.cos(g)*x;for(let M=0;M<=n;M++){const b=M/n*Math.PI*2,v=lo(Math.cos(b),Math.sin(b),a);let R=[Math.sin(b)*v*m*e[0],d*e[1],-Math.cos(b)*v*m*e[2]];t.bend&&(R=t.bend(R)),r.push(i[0]+R[0],i[1]+R[1],i[2]+R[2]),l.push((M/n-.5)*Math.PI*(e[0]+e[2]),p/s*Math.PI*e[1]),bh(t.w,h,u)}}const f=n+1;for(let p=0;p<s;p++)for(let g=0;g<n;g++){const x=p*f+g,d=x+1,m=x+f,M=m+1;c.push(x,m,d,d,m,M)}return t.w?{pos:r,idx:c,uv:l,skinI:h,skinW:u}:{pos:r,idx:c,uv:l}}const Re=(i,e,t=6,n=12)=>K(i,e,{n:t,seg:n});function Te(i,e,t={}){const n=t.seg??8,s=[];let a=[0,0,1],o=null;for(let r=0;r<i.length;r++){const l=i[r],c=$s(el(i[Math.min(r+1,i.length-1)],i[Math.max(r-1,0)]));o||(a=Math.abs(c[2])>.9?[0,1,0]:[0,0,1]);let h=$s(Qo(a,c));Pl(Qo(a,c))<1e-5&&(h=[1,0,0]);const u=$s(Qo(c,h));a=u,o=c;const f=i.length>1?r/(i.length-1):0,p=Math.max(e(f),1e-4);s.push({c:l,rx:p,rz:p*(t.flat??1),ax:h,az:u,w:t.w?t.w(f):void 0})}return Mt(s,{seg:n,capStart:t.cap===!1?"none":"round",capEnd:t.cap===!1?"none":"round"})}function pt(i,e={}){const t=e.c??[0,0,0],n=i.map(([s,a])=>({c:[t[0],t[1]+a,t[2]],rx:Math.max(s,1e-4)*(e.sx??1),rz:Math.max(s,1e-4)*(e.sz??1),n:e.n}));return Mt(n,{seg:e.seg??16})}function Vt(i,e,t,n={}){const s=n.seg??24,a=n.tube??8,o=n.arc??Math.PI*2,r=[];for(let l=0;l<=s;l++){const c=l/s*o;r.push([i[0]+Math.sin(c)*e,i[1],i[2]+Math.cos(c)*e])}if(o>=Math.PI*2-1e-6){const l=r.map((c,h)=>{const u=h/s*o,f=[Math.sin(u),0,Math.cos(u)];return{c,rx:t,rz:t*(n.sy??1),ax:f,az:[0,1,0]}});return Mt(l,{seg:a})}return Te(r,()=>t,{seg:a})}function Wn(i,e,t,n,s={}){const a=s.seg??28,o=[];for(let r=0;r<=a;r++){const l=r/a*Math.PI*2,c=lo(Math.cos(l),Math.sin(l),s.n??2.25),h=Math.sin(l)*c,u=-Math.cos(l)*c,f=$s([h*t,0,u*e]);o.push({c:[i[0]+h*e,i[1],i[2]+u*t],rx:n,rz:n*(s.sy??1),ax:f,az:[0,1,0],w:s.w})}return Mt(o,{seg:s.tube??8})}function Fe(i=[0,0,0],e=[0,0,0],t=1){const n=typeof t=="number"?new ie(t,t,t):new ie(...t);return new wt().compose(new ie(...i),new hi().setFromEuler(new ei(e[0],e[1],e[2])),n)}new wt().makeScale(-1,1,1);const bn={solid:0,stripes:1,pinstripes:2,plaid:3,checker:4,"polka-dots":5,camo:6,stars:7,hearts:8,zigzag:9,"tie-dye":10,ombre:11,"color-block":12,argyle:13,houndstooth:14,leopard:15,zebra:16,honeycomb:17,waves:18,nordic:19,flames:20,galaxy:21,circuit:22,lava:23,rainbow:24,glitch:25,pixel:26,matrix:27,floral:28,planks:40,bricks:41,tiles:42,marble:43,carpet:44,concrete:45,"neon-grid":46,clouds:47,water:48,wallpaper:49,grass:50},ht={cotton:0,denim:1,leather:2,knit:3,silk:4,metal:5,chrome:6,holo:7,glow:8,glass:9,glitter:10,velvet:11,plastic:12,skin:13,wood:14,rubber:15,ghost:16,fur:17,crystal:18,screen:19,matte:20},O1={none:0,star:1,heart:2,bolt:3,smiley:4,code:5,planet:6,"chest-stripe":7,moon:8,"pixel-heart":9,crown:10,flame:11,clock:12},z1={none:0,"eye-black":1,star:2,heart:3,whiskers:4,tiger:5,"war-stripes":6,"hero-mask":7,bolt:8,galaxy:9,circuit:10,runes:11,rainbow:12,"festival-dots":13},B1={none:0,stubble:1,mustache:2,handlebar:3,goatee:4,"soul-patch":5,"chin-strap":6,"short-beard":7,"full-beard":8,"long-beard":9,"mutton-chops":10,"wizard-beard":9},H1={round:0,cat:1,star:2,heart:3,ring:4,plus:5},G1={plain:0,gap:1,braces:2,fangs:3,"gold-tooth":4},V1={none:0,tips:1,streaks:2,split:3,roots:4,rainbow:5,fire:6,galaxy:7,frost:8},tl=["root","hips","spine","chest","neck","head","armL","foreL","handL","armR","foreR","handR","legL","shinL","footL","legR","shinR","footR"],Se=Object.fromEntries(tl.map((i,e)=>[i,e])),W1={root:null,hips:"root",spine:"hips",chest:"spine",neck:"chest",head:"neck",armL:"chest",foreL:"armL",handL:"foreL",armR:"chest",foreR:"armR",handR:"foreR",legL:"hips",shinL:"legL",footL:"shinL",legR:"hips",shinR:"legR",footR:"shinR"};function q1(i){const e=i.body,t=1.5+.36*e.height,n=(.292+.055*e.headSize)*(.97+.06*e.height),s=n/2,a=t-n,o=a-(.02+.034*e.neck),r=o*(.585+.07*e.legs),l=o-r,c=e.build,h=e.waist,u=.14+.045*e.shoulders+.022*c,f=.136+.03*c+.02*h-(.08+.028*c+.006*h)+.004,p=.2+.07*c,g=l*.6,x=l*.53,d=.1+.012*e.height,m=.075+(r-.075)*.5,M=.075,b=Math.sin(p),v=Math.cos(p),R=[u-.02,o-.058,-.008],S=[R[0]+b*g,R[1]-v*g,R[2]],_=[S[0]+b*x,S[1]-v*x,S[2]+.004],T=[0,a+n*.14,-.012],N=[0,a+n*.5,.004],P=H=>[-H[0],H[1],H[2]],z={root:[0,0,0],hips:[0,r+.03,0],spine:[0,r+l*.3,0],chest:[0,r+l*.6,0],neck:[0,o+.005,-.012],head:T,armL:R,foreL:S,handL:_,armR:P(R),foreR:P(S),handR:P(_),legL:[f,r,0],shinL:[f,m,.004],footL:[f,M,0],legR:[-f,r,0],shinR:[-f,m,.004],footR:[-f,M,0]};return{H:t,headH:n,hs:s,headCenter:N,chinY:a,shoulderY:o,neckR:.05+.013*c+.005*e.headSize,sw:u,hipY:r,hipX:f,crotchY:r-.055,waistY:r+l*.33,ribY:r+l*.58,chestY:r+l*.8,kneeY:m,ankleY:M,armAngle:p,upperArm:g,foreArm:x,handLen:d,hipR:[.136+.03*c+.02*h,.09+.03*c+.006*h],waistR:[.112+.046*c-.018*h,.081+.042*c-.004*h],ribR:[.128+.04*c,.09+.036*c],chestR:[Math.max(u*.84,.13+.04*c),.094+.036*c],shoulderR:[u+.004,.082+.026*c],armR:[.045+.018*c,.038+.013*c,.029+.008*c],legR:[.08+.028*c+.006*h,.056+.016*c,.054+.016*c,.038+.008*c],build:c,joints:z}}function X1(i){const e={},t=[],n=[];for(const a of tl){const o=new j0;o.name=a,e[a]=o,t.push(o)}for(const a of tl){const o=W1[a],r=i.joints[a];if(o){const l=i.joints[o];e[a].position.set(r[0]-l[0],r[1]-l[1],r[2]-l[2]),e[o].add(e[a])}else e[a].position.set(r[0],r[1],r[2]);n.push(e[a].position.clone())}e.root.updateMatrixWorld(!0);const s=new El(t);return{bones:t,skeleton:s,byName:e,rest:n}}const Kn=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Ci=(i,e,t)=>Math.exp(-(((i-e)/t)**2)),yh=(i,e,t)=>i+(e-i)*t,jc={oval:{rx:.79,jaw:.08,jawY:-.5,chinLen:.03,chinPoint:.12,sq:2.1,cheek:.012,top:0,rzF:.83},round:{rx:.8,jaw:.16,jawY:-.48,chinLen:-.07,chinPoint:.02,sq:2.05,cheek:.04,top:-.02,rzF:.85},square:{rx:.75,jaw:.3,jawY:-.6,chinLen:-.03,chinPoint:-.12,sq:2.5,cheek:0,top:-.02,rzF:.83},heart:{rx:.77,jaw:-.05,jawY:-.45,chinLen:.03,chinPoint:.34,sq:2.1,cheek:.03,top:.03,rzF:.83},long:{rx:.67,jaw:.08,jawY:-.55,chinLen:.1,chinPoint:.14,sq:2.15,cheek:0,top:.05,rzF:.82},diamond:{rx:.72,jaw:-.04,jawY:-.42,chinLen:.05,chinPoint:.3,sq:2.2,cheek:.05,top:-.01,rzF:.83},blocky:{rx:.78,jaw:.4,jawY:-.68,chinLen:-.1,chinPoint:-.3,sq:3.3,cheek:0,top:-.06,rzF:.84},bean:{rx:.7,jaw:.24,jawY:-.6,chinLen:.12,chinPoint:-.1,sq:2,cheek:.03,top:.14,rzF:.82}},Qc={button:{bridge:.04,bw:.07,tip:.075,tw:.075,wing:.028,wx:.085,up:.01,len:-.03,pB:1.8},straight:{bridge:.085,bw:.06,tip:.085,tw:.075,wing:.035,wx:.085,up:0,len:0,pB:1},wide:{bridge:.055,bw:.085,tip:.09,tw:.11,wing:.055,wx:.12,up:0,len:0,pB:1.5},pointed:{bridge:.09,bw:.05,tip:.115,tw:.058,wing:.025,wx:.07,up:-.01,len:.02,pB:1},round:{bridge:.06,bw:.075,tip:.115,tw:.105,wing:.045,wx:.1,up:0,len:0,pB:1.6},upturned:{bridge:.055,bw:.06,tip:.105,tw:.075,wing:.035,wx:.085,up:.035,len:-.03,pB:2},strong:{bridge:.12,bw:.065,tip:.1,tw:.08,wing:.04,wx:.09,up:-.015,len:.03,pB:.7},flat:{bridge:.03,bw:.09,tip:.075,tw:.11,wing:.06,wx:.125,up:.005,len:-.01,pB:1.8},tiny:{bridge:.02,bw:.06,tip:.06,tw:.06,wing:.01,wx:.06,up:.01,len:-.06,pB:2.2},clown:{bridge:.03,bw:.07,tip:.05,tw:.08,wing:.02,wx:.08,up:0,len:-.03,pB:2}},e0={almond:{U:.56,L:.36,pu:.72,pl:.8,skew:.06,iris:.5,tilt:.05,size:1},round:{U:.74,L:.5,pu:.6,pl:.62,skew:0,iris:.56,tilt:0,size:.96},wide:{U:.5,L:.34,pu:.62,pl:.7,skew:.02,iris:.47,tilt:.02,size:1.1},sleepy:{U:.4,L:.36,pu:.55,pl:.75,skew:-.08,iris:.5,tilt:-.04,size:1.02},upturned:{U:.56,L:.36,pu:.72,pl:.85,skew:.16,iris:.5,tilt:.17,size:1},downturned:{U:.56,L:.38,pu:.7,pl:.8,skew:-.12,iris:.5,tilt:-.12,size:1},narrow:{U:.38,L:.26,pu:.6,pl:.7,skew:.06,iris:.44,tilt:.06,size:1.06},sharp:{U:.5,L:.3,pu:.5,pl:.95,skew:.2,iris:.46,tilt:.14,size:1.04},doll:{U:.92,L:.56,pu:.62,pl:.6,skew:0,iris:.64,tilt:.02,size:1.08},hero:{U:.46,L:.42,pu:.34,pl:.8,skew:.04,iris:.5,tilt:.03,size:1.04}},t0={soft:{arch:.2,th:.105,peak:.1,taper:.5,len:1},arched:{arch:.36,th:.095,peak:.25,taper:.4,len:1.02},straight:{arch:.04,th:.11,peak:0,taper:.7,len:1},thick:{arch:.16,th:.165,peak:.1,taper:.62,len:1.05},thin:{arch:.24,th:.055,peak:.2,taper:.5,len:1},angled:{arch:.3,th:.11,peak:.45,taper:.35,len:1.04},bushy:{arch:.14,th:.2,peak:0,taper:.85,len:1.1},rounded:{arch:.42,th:.09,peak:0,taper:.6,len:.96},none:{arch:0,th:0,peak:0,taper:1,len:1}},nl={smile:{smile:.55,open:0,w:1,up:1,lo:1,cupid:.3,asym:0},grin:{smile:.75,open:.26,w:1.08,up:.9,lo:.9,cupid:.25,asym:0},smirk:{smile:.3,open:0,w:.95,up:1,lo:1,cupid:.3,asym:.55},neutral:{smile:.16,open:0,w:.95,up:1,lo:1,cupid:.3,asym:0},pout:{smile:.05,open:0,w:.78,up:1.35,lo:1.45,cupid:.45,asym:0},"big-smile":{smile:.9,open:.6,w:1.12,up:.85,lo:.9,cupid:.2,asym:0},small:{smile:.3,open:0,w:.66,up:.95,lo:1,cupid:.35,asym:0},serious:{smile:-.3,open:0,w:.95,up:1,lo:1,cupid:.3,asym:0},"cat-smile":{smile:.8,open:0,w:.9,up:.6,lo:.7,cupid:.95,asym:0}},Mh=i=>{const e=2/(1+Math.max(i[2],-.72));return[i[0]*e,i[1]*e]},Y1=(i,e)=>{const t=(i*i+e*e)/4;return[i/(1+t),e/(1+t),(1-t)/(1+t)]},oi=(i,e)=>[Math.sin(i)*Math.cos(e),Math.sin(e),Math.cos(i)*Math.cos(e)];function $1(i,e){const t=jc[i.head.shape]??jc.oval,n=Qc[i.nose.shape]??Qc.button,s=e0[i.eyes.shape]??e0.almond,a=i.head,o=t.jaw+(a.jaw-.5)*.24,r=t.cheek+(a.cheeks-.5)*.09,l=t.chinLen+(a.chin-.5)*.2,c=t.chinPoint+(a.chin-.5)*.24,h=t.top+(a.forehead-.5)*.1,u=-.12+(i.eyes.height-.5)*.18-h*.3,f=.43+(i.eyes.spacing-.5)*.14,p=(.225+(i.eyes.size-.5)*.08)*s.size,g=.75+i.nose.size*.5,x=u-.4-(i.nose.size-.5)*.05-n.len,d=.8+i.nose.width*.45,m=x-.215-l*.2,M=(.31+(i.mouth.width-.5)*.14)*(nl[i.mouth.shape]?.w??1),b={eyeX:f,eyeY:u,eyeSize:p,eyeTilt:s.tilt+(i.eyes.tilt-.5)*.5,browY:s.U*p+.11+(i.brows.height-.5)*.1,noseTipY:x,noseW:d,mouthY:m,mouthW:M,eye:s,nose:n,noseSize:g,lips:i.mouth.lips},v=.022+i.mouth.lips*.03,R=z=>{const H=z[0],C=z[1],I=z[2],X=Math.max(Math.hypot(H,I),1e-5),O=X<=1e-5?0:H/X,D=X<=1e-5?1:I/X,te=yh(2,t.sq,Kn(.5,-.3,C)*.75+.25),U=Math.pow(Math.pow(Math.abs(O),te)+Math.pow(Math.abs(D),te),-1/te);let J=O*U*X*t.rx,j=D*U*X*(I>0?t.rzF:.9),ae=C;const ve=Kn(0,.6,D);if(J*=1+o*Ci(C,t.jawY,.3)-c*Kn(-.62,-1,C)*.9,I>0)j*=1+.36*Kn(0,-.85,C)*ve;else{const w=Kn(-.25,-.95,C);J*=1-.2*w,j*=1-.3*w}ae*=1+l*Kn(-.35,-1,C),C>0&&(ae*=1+h*Kn(.05,.9,C)),j+=.03*ve*Ci(C,.45,.3);const A=r*Math.exp(-((Math.abs(H)-.5)**2+(C+.3)**2+(I-.78)**2)/.09);if(J+=Math.sign(H)*A*.9,j+=A*1.1,I>.15){const[w,G]=Mh(z),B=Kn(.15,.5,I),V=Math.abs(w);if(j-=B*.034*Math.exp(-(((V-f)/.2)**2)-((G-u)/.13)**2),j+=B*.016*Math.exp(-(((V-f)/.13)**2)-((G-u)/.1)**2),j+=B*.02*Ci(G,u+.25,.08)*Ci(w,0,.62),V<.4&&G<u+.3&&G>x-.3){const Q=u+.03,re=(Q-G)/(Q-x),le=G>Q?.22*Ci(G,Q,.1):G>=x?.22+.78*Math.pow(Math.max(re,0),n.pB):Ci(G,x,.045),k=n.bw*d*(.8+.5*Math.min(Math.max(re,0),1));let W=n.bridge*le*Math.exp(-((w/k)**2));W+=n.tip*Math.exp(-((w/(n.tw*d))**2)-((G-x-.012)/(G>x?.085:.05))**2),W+=n.wing*Math.exp(-(((V-n.wx*d)/(.05*d))**2)-((G-x-.012)/.05)**2),j+=B*W*g,ae+=B*n.up*Ci(G,x,.08)*Ci(w,0,.12)*g}j+=B*.018*Math.exp(-(((G-m)/.2)**2)-(w/.36)**2),j+=B*v*Math.exp(-(((G-m-.035)/.05)**2)-(w/(M*1.05))**4),j+=B*v*1.1*Math.exp(-(((G-m+.055)/.055)**2)-(w/(M*.95))**4),j-=B*.012*Math.exp(-(((G-m)/.02)**2)-(w/M)**4),j+=B*(.05+c*.04)*Math.exp(-(((G-m+.27)/.15)**2)-(w/.3)**2)}return[J,ae,j]},S=e.hs,_=e.headCenter,T=z=>{const H=R(z);return[_[0]+H[0]*S,_[1]+H[1]*S,_[2]+H[2]*S]};return{layout:b,sculpt:R,at:T,atUv:(z,H)=>T(Y1(z,H)),normal:z=>{const H=Math.atan2(z[0],z[2]),C=Math.asin(Math.max(-1,Math.min(1,z[1]))),I=.02,X=T(oi(H-I,C)),O=T(oi(H+I,C)),D=T(oi(H,Math.max(C-I,-1.55))),te=T(oi(H,Math.min(C+I,1.55))),U=[O[0]-X[0],O[1]-X[1],O[2]-X[2]],J=[te[0]-D[0],te[1]-D[1],te[2]-D[2]],j=J[1]*U[2]-J[2]*U[1],ae=J[2]*U[0]-J[0]*U[2],ve=J[0]*U[1]-J[1]*U[0],A=Math.hypot(j,ae,ve)||1,w=[-j/A,-ae/A,-ve/A];return w[0]*z[0]+w[1]*z[1]+w[2]*z[2]<0?[-w[0],-w[1],-w[2]]:w},dims:e}}const ka=132,er=92;function K1(i,e,t,n){const s=e.layout,a=[],o=[],r=[];for(let c=0;c<=er;c++){const h=c/er*2-1,u=Math.PI/2*(h-.2*Math.sin(Math.PI*h))*.9999;for(let f=0;f<=ka;f++){const p=f/ka*2-1,g=Math.PI*Math.sign(p)*Math.pow(Math.abs(p),1.3),x=oi(g,u),d=e.at(x);a.push(d[0],d[1],d[2]);const[m,M]=Mh(x),b=Kn(-.05,.3,x[2]),v=Math.abs(m);let R=1;R-=.13*Math.exp(-(((v-s.eyeX)/.2)**2)-((M-s.eyeY-.02)/.15)**2),R-=.1*Math.exp(-((m/(.13*s.noseW))**2)-((M-s.noseTipY+.07)/.04)**2),R-=.1*Math.exp(-((m/.2)**2)-((M-s.mouthY+.15)/.05)**2),R-=.1*Kn(-.86,-1,x[1]),r.push(m,M,b,b>0?yh(1,R,b):1-.1*Kn(-.86,-1,x[1]))}}const l=ka+1;for(let c=0;c<er;c++)for(let h=0;h<ka;h++){const u=c*l+h,f=u+1,p=u+l,g=p+1;o.push(u,f,p,f,g,p)}i.add({pos:a,idx:o},F(t,{finish:n}),{bone:Se.head,aux:r})}function Z1(i,e,t,n,s){const a=e.dims.hs,o=(.8+t.ears.size*.45)*(t.ears.shape==="small"?.8:t.ears.shape==="big"?1.2:1),r=t.ears.shape==="big"?.75:t.ears.shape==="small"?.25:.45,l=e.layout,c=Math.asin(Math.max(-.9,Math.min(.9,(l.eyeY+l.noseTipY)*.5*.5)));for(const h of[1,-1]){const u=oi(h*(Math.PI/2+.16),c),f=e.at(u),p=[n[0]*.72,n[1]*.6,n[2]*.58];if(t.ears.shape==="robot"){const b=Fe([f[0]+h*.01*a,f[1],f[2]],[0,0,Math.PI/2]);i.add(K([0,0,0],[.16*a,.07*a,.16*a],{n:4,ny:6,seg:14}),F([.6,.63,.7],{finish:ht.metal}),{bone:Se.head,matrix:b}),i.add(Te([[f[0]+h*.04*a,f[1],f[2]],[f[0]+h*.14*a,f[1]+.34*a,f[2]]],()=>.018*a,{seg:6}),F([.6,.63,.7],{finish:ht.metal}),{bone:Se.head}),i.add(K([f[0]+h*.14*a,f[1]+.36*a,f[2]],[.045*a,.045*a,.045*a]),F([1,.3,.25],{finish:ht.glow}),{bone:Se.head});continue}const g=t.ears.shape==="elf",x=b=>{const v=Math.max(0,b[1]/(.2*a*o)),R=g?v*v:0;return[b[0]+(g?R*.02*a:0),b[1]*(1+(g?.9*v:0)),b[2]-R*.1*a-.02*a*v]},d=b=>{const v=x(b),R=Math.max(0,b[1]/(.2*a*o)),S=g?1-.75*R*R:1-.15*Math.max(0,-b[1]/(.2*a*o));return[v[0]*S,v[1],v[2]*S]},m=Fe([f[0]-h*.012*a,f[1],f[2]-.02*a],[0,h*(.5+r*.6),h*-.12]);i.add(K([0,0,0],[.045*a*o,.2*a*o,.12*a*o],{seg:12,bend:d}),F(n,{finish:s}),{bone:Se.head,matrix:m});const M=Fe([f[0]+h*.012*a,f[1]-.01*a,f[2]+.012*a],[0,h*(.5+r*.6),h*-.12]);i.add(K([0,0,0],[.03*a*o,.13*a*o,.07*a*o],{seg:10,bend:d}),F(p,{finish:s}),{bone:Se.head,matrix:M})}if(t.nose.shape==="clown"){const h=e.atUv(0,l.noseTipY+.02);i.add(K([h[0],h[1],h[2]+.02*a],[.13*a,.13*a,.13*a],{seg:14}),F([.85,.08,.08],{finish:ht.plastic}),{bone:Se.head})}}function tr(i,e){const t=i.layout,n=i.dims.hs,s=Math.asin(Math.max(-.9,Math.min(.9,(t.eyeY+t.noseTipY)*.5*.5))),a=i.at(oi(e*(Math.PI/2+.16),s));return{center:a,lobe:[a[0]+e*.03*n,a[1]-.17*n,a[2]+0],top:[a[0]+e*.04*n,a[1]+.15*n,a[2]-.02*n]}}const hn=(i,e,t,n,s,a)=>i[e].value.set(t,n,s,a),Us=(i,e,t)=>i[e].value.set(t),n0={happy:{open:1,smile:.12,squint:.05,brow:.1,anger:0},calm:{open:.95,smile:0,squint:0,brow:0,anger:0},excited:{open:1.12,smile:.3,squint:0,brow:.5,anger:0},cool:{open:.72,smile:.05,squint:.1,brow:-.2,anger:.15},curious:{open:1.05,smile:.05,squint:0,brow:.45,anger:0},serious:{open:.9,smile:-.15,squint:.1,brow:-.3,anger:.4},sleepy:{open:.5,smile:.05,squint:0,brow:-.1,anger:0},mischief:{open:.82,smile:.3,squint:.2,brow:.1,anger:.5}},J1=i=>n0[i.motion.expression]??n0.happy;function j1(i,e,t){const n=t.layout,s=n.eye,a=e.hair.color;hn(i,"uEye",n.eyeX,n.eyeY,n.eyeSize,n.eyeTilt),hn(i,"uEyeShape",s.U,s.L,s.pu,s.pl);const o={none:0,natural:1,winged:2,long:3,dramatic:4}[e.eyes.lashes]??1;hn(i,"uEyeShape2",s.skew,s.iris,.05+o*.016,o),Us(i,"uIrisL",e.eyes.color),Us(i,"uIrisR",e.eyes.colorRight||e.eyes.color),hn(i,"uPupil",H1[e.eyes.pupil]??0,e.eyes.pupil==="cat"?.5:.42,e.eyes.glow*1.6,0);const r=t0[e.brows.shape]??t0.soft,l=r.th*(.6+e.brows.thickness*.8);hn(i,"uBrow",n.eyeX+.01,n.browY,n.eyeSize*1.3*r.len,l),hn(i,"uBrow2",r.arch,(e.brows.tilt-.5)*.5+.06,r.peak,r.taper);const c=new tt(e.brows.color||a);e.brows.color||c.multiplyScalar(.72);const h=e.face.scars.includes("brow-slit")?1:e.face.scars.includes("brow-slit-right")?-1:0;hn(i,"uBrowCol",c.r,c.g,c.b,h);const u=nl[e.mouth.shape]??nl.smile,f=.5+e.mouth.lips;hn(i,"uMouth",n.mouthY,n.mouthW,.15*f*u.up,.2*f*u.lo),hn(i,"uMouth2",u.smile,u.open,u.cupid,u.asym);const p=new tt(e.mouth.lipColor||"#b05050");hn(i,"uLip",p.r,p.g,p.b,e.mouth.lipColor?.92:0),hn(i,"uTeeth",G1[e.mouth.teeth]??0,0,0,0);const g=new tt(e.face.blushColor);hn(i,"uBlush",g.r,g.g,g.b,e.face.blush);const x=new tt(e.face.eyeshadowColor);hn(i,"uShadow",x.r,x.g,x.b,e.face.eyeshadow*.85),hn(i,"uMakeup",{none:0,thin:1,wing:2}[e.face.eyeliner]??0,e.face.freckles,Math.round(e.face.moles),0);const d=["galaxy","circuit","runes"].includes(e.face.paint)?1:0;hn(i,"uPaint",z1[e.face.paint]??0,d,0,0),Us(i,"uPaintA",e.face.paintColor),Us(i,"uPaintB",e.face.paintColor2),hn(i,"uScar",e.face.scars.includes("cheek")?1:0,e.face.scars.includes("bandage")?1:0,e.face.scars.includes("bolt-scar")?1:0,e.face.scars.includes("chin")?1:0),hn(i,"uBeard",B1[e.facialHair.style]??0,e.facialHair.style==="stubble"?e.facialHair.density*.75:.55+e.facialHair.density*.42,0,0),Us(i,"uBeardCol",e.facialHair.color||a),hn(i,"uNoseP",n.noseTipY-.035,n.nose.wx*n.noseW*.72,n.noseSize,0)}const Gn=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},bt=(i,e,t)=>i+(e-i)*t,Li=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function _s(i,e={}){return F(Lt(i.color),{color2:Lt(i.color2),pattern:bn[i.pattern??"solid"]??0,scale:1/(i.scale??1),finish:ht[i.material??"cotton"]??0,...e})}const i0={tee:{inf:.011,sleeve:.36,hem:0,collar:"crew"},"long-sleeve":{inf:.009,sleeve:1,hem:-.01,collar:"crew",cuff:!0},tank:{inf:.008,sleeve:0,hem:-.005,collar:"v"},hoodie:{inf:.02,sleeve:1,hem:-.015,collar:"hood",cuff:!0,rib:!0},sweater:{inf:.017,sleeve:1,hem:-.02,collar:"crew",cuff:!0,rib:!0},polo:{inf:.01,sleeve:.36,hem:-.01,collar:"polo",placket:!0},"button-up":{inf:.01,sleeve:1,hem:-.02,collar:"polo",placket:!0,cuff:!0},jersey:{inf:.014,sleeve:.3,hem:-.015,collar:"v",sleeveFlare:1.25},turtleneck:{inf:.01,sleeve:1,hem:-.01,collar:"turtle",cuff:!0},dress:{inf:.009,sleeve:.24,hem:0,collar:"crew",skirt:.5},tuxedo:{inf:.014,sleeve:1,hem:-.012,collar:"polo",cuff:!0},"hero-suit":{inf:.004,sleeve:1,hem:0,collar:"turtle"},"space-suit":{inf:.03,sleeve:1,hem:-.02,collar:"ring",cuff:!0},armor:{inf:.016,sleeve:1,hem:-.01,collar:"ring"},"wizard-robe":{inf:.016,sleeve:1,hem:0,collar:"v",skirt:.93,sleeveFlare:2.1}},s0={jeans:{inf:.008,len:.985,flare:1.3},shorts:{inf:.013,len:.5,flare:1.18},joggers:{inf:.013,len:.95,flare:.95,cuff:!0},cargo:{inf:.019,len:.985,flare:1.45},skirt:{inf:.006,len:.3,flare:1,skirt:.47,skirtFlare:1.5},"long-skirt":{inf:.006,len:.3,flare:1,skirt:.92,skirtFlare:1.55},leggings:{inf:.003,len:.96,flare:1},"wide-leg":{inf:.012,len:.99,flare:2.2},overalls:{inf:.012,len:.985,flare:1.35},"gym-shorts":{inf:.015,len:.34,flare:1.22},kilt:{inf:.006,len:.3,flare:1,skirt:.45,skirtFlare:1.5,pleats:14},"space-pants":{inf:.028,len:.96,flare:1,cuff:!0},tutu:{inf:.006,len:.26,flare:1,skirt:.2,skirtFlare:2.3,pleats:22}},Q1={bomber:{inf:.014,sleeve:1,hem:-.02,open:.3,collar:"rib",rib:!0,cuff:!0},"denim-jacket":{inf:.012,sleeve:1,hem:0,open:.34,collar:"flap",cuff:!0},"zip-hoodie":{inf:.016,sleeve:1,hem:-.04,open:.3,collar:"hood",rib:!0,cuff:!0},vest:{inf:.022,sleeve:0,hem:-.01,open:.3,collar:"rib"},blazer:{inf:.012,sleeve:1,hem:-.06,open:.36,collar:"flap"},letterman:{inf:.016,sleeve:1,hem:-.02,open:.28,collar:"rib",rib:!0,sleeveColor2:!0,cuff:!0},cardigan:{inf:.012,sleeve:1,hem:-.07,open:.4,collar:"none",cuff:!0},"long-coat":{inf:.014,sleeve:1,hem:0,open:.3,collar:"flap",skirt:.52},"lab-coat":{inf:.012,sleeve:1,hem:0,open:.34,collar:"flap",skirt:.5},poncho:{inf:.02,sleeve:0,hem:0,open:0,collar:"none"},"royal-mantle":{inf:.018,sleeve:1,hem:0,open:.42,collar:"fur",skirt:.9}},a0={sneakers:{sole:.022,shaft:0,bulk:1,toe:1},"high-tops":{sole:.022,shaft:.06,bulk:1.02,toe:1},boots:{sole:.028,shaft:.13,bulk:1.06,toe:1.02},slides:{sole:.02,shaft:0,bulk:1,toe:1,open:!0},loafers:{sole:.014,shaft:0,bulk:.94,toe:.9},"rain-boots":{sole:.024,shaft:.2,bulk:1.08,toe:1.05},platforms:{sole:.06,shaft:.02,bulk:1.02,toe:1},"cowboy-boots":{sole:.018,shaft:.17,bulk:.98,toe:.7,heel:.03},"bunny-slippers":{sole:.012,shaft:0,bulk:1.2,toe:1.25},"roller-skates":{sole:.02,shaft:.07,bulk:1.02,toe:1},"rocket-boots":{sole:.035,shaft:.12,bulk:1.12,toe:1.05},"cloud-shoes":{sole:.02,shaft:0,bulk:1.05,toe:1}};function e2(i,e,t){const n=F(Lt(e.skin.tone),{finish:ht[e.skin.material]??ht.skin}),s=i0[e.top.style]??i0.tee,a=s0[e.bottom.style]??s0.jeans,o=e.outerwear.style!=="none"?Q1[e.outerwear.style]:void 0,r=a0[e.shoes.style]??a0.sneakers,l=t.joints,c=[{y:t.crotchY,rx:t.hipR[0]*.66,rz:t.hipR[1]*.78,cz:0},{y:t.hipY+.012,rx:t.hipR[0],rz:t.hipR[1],cz:-.004},{y:t.waistY,rx:t.waistR[0],rz:t.waistR[1],cz:0},{y:t.ribY,rx:t.ribR[0],rz:t.ribR[1],cz:.002},{y:t.chestY,rx:t.chestR[0],rz:t.chestR[1],cz:.002},{y:t.shoulderY-.056,rx:t.shoulderR[0],rz:t.shoulderR[1],cz:-.004},{y:t.shoulderY-.016,rx:t.sw*.8,rz:t.shoulderR[1]*.88,cz:-.008},{y:t.shoulderY+.006,rx:t.sw*.46,rz:t.neckR*1.4,cz:-.01},{y:t.shoulderY+.024,rx:t.neckR*1.22,rz:t.neckR*1.2,cz:-.012}],h=k=>{if(k<=c[0].y)return c[0];for(let W=0;W<c.length-1;W++){const Y=c[W],ee=c[W+1];if(k<=ee.y){const me=Gn(0,1,(k-Y.y)/(ee.y-Y.y));return{y:k,rx:bt(Y.rx,ee.rx,me),rz:bt(Y.rz,ee.rz,me),cz:bt(Y.cz,ee.cz,me)}}}return c[c.length-1]},u=k=>{const W=Gn(t.hipY+.02,t.waistY+.02,k),Y=Gn(t.waistY+.03,t.ribY+.03,k);return[[Se.hips,1-W],[Se.spine,W*(1-Y)],[Se.chest,Y]]},f=(k,W,Y,ee=12,me=2.25)=>{const be=[];for(let ge=0;ge<=ee;ge++){const _e=bt(k,W,ge/ee),xe=h(_e);be.push({c:[0,_e,xe.cz],rx:xe.rx+Y,rz:xe.rz+Y,n:me,w:u(_e)})}return be},p=(k,W,Y,ee,me,be,ge,_e,xe,Be)=>{const ze=Math.hypot(W[0]-k[0],W[1]-k[1],W[2]-k[2]),Qe=Math.hypot(Y[0]-W[0],Y[1]-W[1],Y[2]-W[2]),$=ze+Qe,je=ze/$,at=[];for(let it=0;it<=xe;it++){const Me=bt(be,ge,it/xe);let Pt,He;if(Me<=je){const fe=Me/je;Pt=[bt(k[0],W[0],fe),bt(k[1],W[1],fe),bt(k[2],W[2],fe)],He=bt(ee[0],ee[1],fe)+Be*ee[0]*Math.sin(Math.PI*Math.min(fe*1.15,1))*.5}else{const fe=(Me-je)/(1-je);Pt=[bt(W[0],Y[0],fe),bt(W[1],Y[1],fe),bt(W[2],Y[2],fe)],He=bt(ee[1],ee[2],fe)+Be*ee[1]*Math.sin(Math.PI*Math.min(fe*1.6,1))*.55}const Ke=(Me-je)*$,L=Gn(-.045,.045,Ke),y=Me<=je?[(W[0]-k[0])/ze,(W[1]-k[1])/ze,(W[2]-k[2])/ze]:[(Y[0]-W[0])/Qe,(Y[1]-W[1])/Qe,(Y[2]-W[2])/Qe],ne=[-y[1],y[0],0],ye=Math.hypot(ne[0],ne[1])||1;at.push({c:Pt,rx:He+_e,rz:He+_e,ax:[ne[0]/ye,ne[1]/ye,0],az:[0,0,1],w:[[me[0],1-L],[me[1],L]]})}return at},g=_s(e.top,{extra:O1[e.top.emblem]??0}),x=_s(e.top),d=F(Li(g.color,.8),{finish:g.finish}),m=_s(e.bottom),M=!!o,b=e.outerwear.style==="poncho",v=_s(e.outerwear),R=o?s.inf+o.inf:0,S=r.shaft>.05;i.add(Mt([{c:[0,t.shoulderY-.03,-.012],rx:t.neckR*1.25,rz:t.neckR*1.2,w:[[Se.chest,1]]},{c:[0,t.shoulderY+.012,-.012],rx:t.neckR*1.08,rz:t.neckR*1.05,w:[[Se.chest,.6],[Se.neck,.4]]},{c:[0,bt(t.shoulderY,t.chinY,.6),-.01],rx:t.neckR,rz:t.neckR,w:[[Se.neck,1]]},{c:[0,t.chinY+t.headH*.12,-.006],rx:t.neckR*1.02,rz:t.neckR*1.05,w:[[Se.neck,.4],[Se.head,.6]]},{c:[0,t.chinY+t.headH*.3,-.004],rx:t.neckR*.95,rz:t.neckR,w:[[Se.head,1]]}],{seg:16}),n),i.add(Mt(f(t.chestY-.02,t.shoulderY+.022,.001,5),{seg:20}),n);const _=(k,W,Y)=>{const ee=[];for(let me=0;me<Y;me++)ee.push(0,k,W,0);return ee},T=!s.skirt&&a.inf>=s.inf-.0025,N=T?t.waistY-.004:t.hipY+s.hem+(a.skirt?.04:0),P=t.shoulderY+(s.collar==="v"?.006:.016);{const k=f(N,P,s.inf,14);s.rib&&!T&&(k[0]={...k[0],rx:k[0].rx-.006,rz:k[0].rz-.006});const W=h(N);T||k.unshift({c:[0,N+.003,W.cz],rx:W.rx+a.inf+.0015,rz:W.rz+a.inf+.0015,n:2.25,w:u(N)});const Y=Mt(k,{seg:24});i.add(Y,g,{aux:_(bt(t.ribY,t.chestY,.55),.058+t.build*.012,Y.pos.length/3)})}let z=null;const H=[],C=k=>{let W=0,Y=0;for(const ee of H)if(k<=ee.top+.01&&k>=ee.hem-.01){const me=ee.at(k);W=Math.max(W,me[0]),Y=Math.max(Y,me[1])}return[W,Y]},I=(k,W,Y,ee,me=0)=>{const be=t.hipY-k*(t.hipY-t.ankleY),ge=[],_e=10;for(let xe=0;xe<=_e;xe++){const Be=xe/_e,ze=bt(ee,be,Be),Qe=h(Math.max(ze,t.hipY+.012)),$=1+(W-1)*Math.pow(Be,.85),je=Gn(.15,1,Be),at=me?He=>1+.035*je*Math.sin(He*me):void 0;let it=(Qe.rx+Y)*$+.012*Gn(0,.25,Be),Me=(Qe.rz+Y)*bt(1,$*1.12,je)+.012*Gn(0,.25,Be);const Pt=C(ze);Pt[0]>0&&(it=Math.max(it,Pt[0]+.014),Me=Math.max(Me,Pt[1]+.014)),ge.push({c:[0,ze,Qe.cz],rx:it,rz:Me,n:2.2,fn:at,w:[[Se.hips,1]]})}return{rings:ge,hem:be}},X=(k,W)=>{const Y=k.map(ee=>ee.c[1]);H.push({top:Y[0],hem:W,at:ee=>{for(let be=1;be<k.length;be++)if(ee>=Y[be]-1e-6){const ge=(ee-Y[be])/Math.max(Y[be-1]-Y[be],1e-6),_e=k[be],xe=k[be-1],Be=1.04;return[bt(_e.rx,xe.rx,Math.min(1,ge))*Be,bt(_e.rz,xe.rz,Math.min(1,ge))*Be]}const me=k[k.length-1];return[me.rx,me.rz]}})},O=(k,W,Y,ee,me,be=0,ge=0)=>{const{rings:_e,hem:xe}=I(k,W,Y,me,be);z=z===null?xe:Math.min(z,xe);const Be=_e.length-1;X(_e,xe);const ze=_e[Be];_e.push({...ze,c:[0,xe+.006,ze.c[2]],rx:ze.rx-.012,rz:ze.rz-.012});const Qe=Mt(_e,{seg:28,arc:ge?[ge+Math.PI,Math.PI*3-ge]:void 0,weightFn:($,je,at)=>{const it=Math.min($/Be,1),Me=Gn(.2,1,it)*.5,Pt=Math.sin(je);return Pt>.25?[[Se.hips,1-Me],[Se.legL,Me]]:Pt<-.25?[[Se.hips,1-Me],[Se.legR,Me]]:at}});i.add(Qe,ee)};if(a.skirt&&!s.skirt){const k=I(a.skirt,a.skirtFlare??1.5,a.inf,t.waistY+.012,a.pleats??0);if(X(k.rings,k.hem),e.bottom.style==="tutu"){const W=I(a.skirt*.8,2,a.inf+.003,t.waistY+.016,18);X(W.rings,W.hem)}}s.skirt&&O(s.skirt,e.top.style==="wizard-robe"?1.5:1.55,Math.max(s.inf-.012,a.inf+.01),x,t.hipY+.004);const D=h(P),te=(k,W,Y,ee,me=1)=>i.add(Vt([0,k,D.cz],W,Y,{seg:20,tube:8,sy:me}),ee,{bone:Se.chest}),U=t.neckR;s.collar==="crew"&&te(P+.002,U*1.2+s.inf,.006+s.inf*.25,d),s.collar==="v"&&te(P,U*1.3+s.inf,.005,F(g.color2,{finish:g.finish})),s.collar==="turtle"&&i.add(Mt([{c:[0,P-.01,-.012],rx:U*1.3+.012,rz:U*1.3+.012,w:[[Se.chest,1]]},{c:[0,P+.02,-.011],rx:U+.012,rz:U+.012,w:[[Se.chest,.4],[Se.neck,.6]]},{c:[0,bt(t.shoulderY,t.chinY,.72),-.01],rx:U+.011,rz:U+.011,w:[[Se.neck,1]]},{c:[0,bt(t.shoulderY,t.chinY,.76),-.01],rx:U+.002,rz:U+.002,w:[[Se.neck,1]]}],{seg:16}),x),s.collar==="ring"&&te(P+.008,U*1.5+s.inf*.5,.016,F([.72,.75,.8],{finish:ht.metal}),.7);const J=(k,W,Y,ee=1)=>{for(const me of[1,-1]){const be=Fe([me*(U*1.05+W),Y,D.cz+U*.95+W*.5],[.5,me*-.5,me*-.5]);i.add(K([0,0,0],[.03*ee,.008,.022*ee],{n:3,seg:10}),k,{bone:Se.chest,matrix:be})}i.add(Vt([0,Y+.004,D.cz-.004],U*1.25+W,.009,{seg:16,tube:6,sy:1.6}),k,{bone:Se.chest})};s.collar==="polo"&&J(e.top.style==="tuxedo"?F(g.color2):x,s.inf,P+.004);const j=(k,W)=>{i.add(K([0,t.shoulderY+.02,-t.shoulderR[1]-W-.012],[t.neckR*2.1,.06,.04],{seg:14,bend:Y=>[Y[0],Y[1]-Math.abs(Y[0])*.35,Y[2]]}),k,{bone:Se.chest}),i.add(Vt([0,t.shoulderY+.022,D.cz],U*1.5+W,.015,{seg:20,tube:8,sy:1.3}),k,{bone:Se.chest})};if(s.collar==="hood"&&!M){j(x,s.inf);for(const k of[1,-1])i.add(Te([[k*.022,P-.004,D.rz+s.inf+.004],[k*.026,P-.07,t.chestR[1]+s.inf+.006]],()=>.003,{seg:5}),F(g.color2),{bone:Se.chest})}const ae=(k,W)=>{const Y=h(k);return Y.cz+Y.rz+W};if(s.placket){const k=P-.012,W=e.top.style==="polo"?t.chestY-.03:N+.02,Y=e.top.style==="polo"?2:5;for(let ee=0;ee<Y;ee++){const me=bt(k-.02,W,ee/(Y-1));i.add(K([0,me,ae(me,s.inf)+.001],[.0055,.0055,.003],{seg:8}),F(g.color2,{finish:ht.plastic}),{bone:me>t.ribY?Se.chest:Se.spine})}}if(e.top.style==="hoodie"&&!M){const k=bt(t.hipY,t.waistY,.75);i.add(K([0,k,ae(k,s.inf)-.006],[t.waistR[0]*.62,.042,.014],{n:3.5,seg:12}),d,{bone:Se.spine})}if(e.top.style==="tuxedo"){const k=F(g.color2),W=t.chestY-.01;i.add(K([0,W,ae(W,s.inf)-.004],[.03,.085,.008],{n:2.4,seg:10,bend:Y=>[Y[0]*(1+Y[1]*5),Y[1],Y[2]]}),k,{bone:Se.chest});for(const Y of[1,-1])i.add(K([Y*.018,P-.012,ae(P-.012,s.inf)+.006],[.018,.011,.007],{seg:8,bend:ee=>[ee[0],ee[1]*(.5+Math.abs(ee[0])*60),ee[2]]}),F([.05,.05,.06],{finish:ht.silk}),{bone:Se.chest})}if(e.top.style==="hero-suit"){const k=t.hipY+.045,W=h(k);i.add(Wn([0,k,W.cz],W.rx+.01,W.rz+.01,.012,{sy:1.6}),F(g.color2,{finish:ht.leather}),{bone:Se.hips}),i.add(K([0,k,W.cz+W.rz+.014],[.02,.016,.006],{n:4,seg:8}),F([.9,.75,.25],{finish:ht.metal}),{bone:Se.hips})}if(e.top.style==="space-suit"){const k=t.chestY-.02;i.add(K([0,k,ae(k,s.inf)],[.05,.036,.012],{n:5,seg:10}),F([.82,.84,.88],{finish:ht.plastic}),{bone:Se.chest}),[[1,.25,.2],[.25,.9,.4],[.3,.6,1]].forEach((Y,ee)=>i.add(K([-.026+ee*.026,k,ae(k,s.inf)+.012],[.007,.007,.004],{seg:8}),F(Y,{finish:ht.glow}),{bone:Se.chest}))}if(e.top.style==="armor"){const k=F(g.color,{color2:g.color2,finish:g.finish===0?ht.metal:g.finish}),W=Mt(f(t.waistY+.02,P-.004,s.inf+.012,8,2.6),{seg:24,capStart:"flat"});i.add(W,{...k,extra:g.extra},{aux:_(bt(t.ribY,t.chestY,.55),.06,W.pos.length/3)});for(const me of[1,-1])i.add(K([me*(t.sw+.012),t.shoulderY-.02,-.008],[.068+t.build*.012,.05,.066+t.build*.012],{seg:14,w:[[me>0?Se.armL:Se.armR,.6],[Se.chest,.4]]}),k);const Y=t.waistY,ee=h(Y);i.add(Wn([0,Y,ee.cz],ee.rx+s.inf+.008,ee.rz+s.inf+.008,.014,{sy:1.5}),F(g.color2,{finish:ht.leather}),{bone:Se.spine})}if(e.top.style==="wizard-robe"){const k=t.waistY,W=h(k);i.add(Wn([0,k,W.cz],W.rx+s.inf+.006,W.rz+s.inf+.006,.008,{sy:1}),F(g.color2,{finish:ht.knit}),{bone:Se.spine})}const ve=o?o.sleeve:0;for(const k of[1,-1]){const W=l[k>0?"armL":"armR"],Y=l[k>0?"foreL":"foreR"],ee=l[k>0?"handL":"handR"],me=k>0?[Se.armL,Se.foreL]:[Se.armR,Se.foreR],be=s.sleeve,ge=Math.max(be,ve);ge<1&&i.add(Mt(p(W,Y,ee,t.armR,me,Math.max(ge-.05,0),1,0,12,.22),{seg:14,capStart:ge<=0?"round":"none"}),n);const _e=(je,at,it,Me,Pt)=>{const He=p(W,Y,ee,t.armR,me,0,je,at,Math.max(4,Math.round(12*je)),.18),Ke=He.length;Me!==1&&He.forEach((ye,fe)=>{const Ae=1+(Me-1)*Math.pow(fe/(Ke-1),1.6);ye.rx=(ye.rx-at)*Ae+at,ye.rz=(ye.rz-at)*Ae*(Me>1.5?1.25:1)+at});const L=He[Ke-1];Pt&&(He[Ke-1]={...L,rx:L.rx+.003,rz:L.rz+.003},Ke>2&&(He[Ke-2]={...He[Ke-2],rx:He[Ke-2].rx-.004,rz:He[Ke-2].rz-.004}));const y=He[Ke-1],ne=[y.c[0]-He[Ke-2].c[0],y.c[1]-He[Ke-2].c[1],y.c[2]-He[Ke-2].c[2]];He.push({...y,c:[y.c[0]-ne[0]*.15,y.c[1]-ne[1]*.15,y.c[2]-ne[2]*.15],rx:Math.max(y.rx-at-.004,.012),rz:Math.max(y.rz-at-.004,.012)}),i.add(Mt(He,{seg:16,capStart:"round",capBulge:1}),it)};be>0&&be>ve-.01&&_e(be,s.inf,e.top.style==="armor"?F(g.color2,{finish:ht.knit}):x,s.sleeveFlare??1,!!s.cuff),o&&ve>0&&_e(ve,R,o.sleeveColor2?F(v.color2,{finish:ht.leather}):v,be>0&&(s.sleeveFlare??1)>1?(s.sleeveFlare??1)+.1:1,!!o.cuff),e.top.style==="space-suit"&&!M&&i.add(Vt([0,0,0],t.armR[2]+s.inf+.004,.009,{seg:14,tube:6}),F([.72,.75,.8],{finish:ht.metal}),{bone:k>0?Se.foreL:Se.foreR,matrix:Fe([bt(Y[0],ee[0],.9),bt(Y[1],ee[1],.9),ee[2]],[0,0,k*t.armAngle])});const Be=e.top.style==="hero-suit"||e.top.style==="space-suit"||e.top.style==="armor"?F(g.color2,{finish:e.top.style==="armor"?ht.metal:ht.leather}):n,ze=t.handLen,Qe=.04+t.build*.009,$=Fe([ee[0],ee[1],ee[2]],[0,0,k*t.armAngle]);i.add(K([0,-ze*.55,.004],[Qe,ze*.62,.021+t.build*.004],{seg:12,n:2.3,bend:je=>[je[0]*(1+je[1]*1.2),je[1],je[2]+je[1]*je[1]*3]}),Be,{bone:k>0?Se.handL:Se.handR,matrix:$}),i.add(K([0,-ze*.42,.028],[.014,ze*.3,.015],{seg:8}),Be,{bone:k>0?Se.handL:Se.handR,matrix:Fe([ee[0],ee[1],ee[2]],[.5,0,k*t.armAngle])})}if(o&&!b){const k=t.hipY+o.hem,W=(ge,_e)=>ge.map(xe=>{const Be=C(xe.c[1]);return Be[0]>0?{...xe,rx:Math.max(xe.rx,Be[0]+_e),rz:Math.max(xe.rz,Be[1]+_e)}:xe}),Y=W(f(k,t.shoulderY+.012,R,14),.014);o.rib&&(Y[0]={...Y[0],rx:Y[0].rx-.005,rz:Y[0].rz-.005});const ee=o.open;i.add(Mt(Y,{seg:26,arc:[ee+Math.PI,Math.PI*3-ee]}),v);const me=F(Li(v.color,.6),{finish:v.finish});i.add(Mt(W(f(k,t.shoulderY+.012,R-.004,14),.01),{seg:26,arc:[ee+Math.PI,Math.PI*3-ee]}),me,{flip:!0}),o.skirt&&O(o.skirt,Math.max(1.3,a.skirt?(a.skirtFlare??1.5)+.12:0,s.skirt?1.67:0),Math.max(R-.012,a.inf+.016,s.inf+.008),v,k+.004,0,ee);const be=t.shoulderY+.016;o.collar==="flap"&&J(v,R,be,1.25),o.collar==="rib"&&i.add(Vt([0,be-.008,D.cz],U*1.3+R,.009,{seg:20,tube:8,sy:1.5}),F(Li(v.color2,.9),{finish:ht.knit}),{bone:Se.chest}),o.collar==="hood"&&j(v,R),o.collar==="fur"&&i.add(Wn([0,be-.006,D.cz],t.sw*.8,t.shoulderR[1]+R+.01,.03,{sy:1}),F([.96,.95,.92],{finish:ht.fur,color2:[.1,.1,.1],pattern:bn["polka-dots"],scale:1.6}),{bone:Se.chest})}if(b&&o){const k=[];for(let Y=0;Y<=8;Y++){const ee=Y/8,me=bt(t.shoulderY+.02,t.waistY-.02,ee);k.push({c:[0,me,-.006],rx:bt(t.neckR*1.5,t.sw+.1,Math.pow(ee,.55))+R,rz:bt(t.neckR*1.5,t.chestR[1]+.06,Math.pow(ee,.6))+R,n:2.3,fn:be=>1+.03*ee*Math.sin(be*8),w:[[Se.chest,1]]})}const W=k[8];k.push({...W,c:[0,W.c[1]+.008,-.006],rx:W.rx-.014,rz:W.rz-.014}),i.add(Mt(k,{seg:28}),v)}const A=a.inf,w=a.skirt?F(Li(m.color,.7),{finish:m.finish}):m;if(i.add(Mt(f(t.crotchY,t.waistY+.012,A,8),{seg:22,capStart:"round",capBulge:.35}),w),!a.skirt&&T){const k=t.waistY+.004,W=h(k);i.add(Wn([0,k,W.cz],W.rx+A-.002,W.rz+A-.002,.005,{sy:2.4}),F(Li(m.color,.82),{color2:m.color2,pattern:m.pattern,scale:m.scale,finish:m.finish}),{bone:Se.hips})}if(a.skirt&&!s.skirt){H.length=0,O(a.skirt,a.skirtFlare??1.5,A,m,t.waistY+.012,a.pleats??0),e.bottom.style==="tutu"&&(H.length=0,O(a.skirt*.8,2,A+.003,m,t.waistY+.016,18));const k=t.waistY+.006,W=h(k);i.add(Wn([0,k,W.cz],W.rx+A-.003,W.rz+A-.003,.005,{sy:2.4}),F(Li(m.color,.8),{finish:m.finish}),{bone:Se.hips})}const G=a.skirt?Math.min(a.len,.3):a.len,B=S&&a.flare<1.8?1:a.flare,V=r.sole+(r.heel??0)*.3;for(const k of[1,-1]){const W=l[k>0?"legL":"legR"],Y=l[k>0?"shinL":"shinR"],ee=l[k>0?"footL":"footR"],me=k>0?[Se.legL,Se.shinL]:[Se.legR,Se.shinR],be=[t.legR[0],t.legR[1],t.legR[3]],ge=p(W,Y,ee,be,me,0,G,A,Math.max(5,Math.round(14*G)),.2),_e=ge.length;if(ge.forEach((ze,Qe)=>{const $=Qe/(_e-1),je=1+(B-1)*Gn(G>.7?.45:0,1,$);ze.rx=(ze.rx-A)*je+A,ze.rz=(ze.rz-A)*je+A}),a.cuff){const ze=ge[_e-1];ge[_e-1]={...ze,rx:ze.rx*.9,rz:ze.rz*.9},ge.push({...ze,c:[ze.c[0],ze.c[1]-.022,ze.c[2]],rx:ze.rx*.88,rz:ze.rz*.88})}const xe=ge[ge.length-1];if(ge.push({...xe,c:[xe.c[0],xe.c[1]+.01,xe.c[2]],rx:Math.max(xe.rx-A-.012,.02),rz:Math.max(xe.rz-A-.012,.02)}),i.add(Mt(ge,{seg:16,capStart:"round"}),w===m?m:w),G<.93){const ze=[t.legR[0],t.legR[1],t.legR[3]];i.add(Mt(p(W,Y,ee,ze,me,Math.max(G-.06,0),1,0,12,.3),{seg:14}),n)}if(e.bottom.style==="cargo"){const ze=bt(W[1],Y[1],.78);i.add(K([W[0]+k*(t.legR[0]*.92+A),ze,0],[.012,.045,.04],{n:4,seg:10}),F(Li(m.color,.9),{color2:m.color2,pattern:m.pattern,scale:m.scale,finish:m.finish}),{bone:me[0]})}e.bottom.style==="space-pants"&&i.add(Vt([ee[0],ee[1]+.05,ee[2]],t.legR[3]+A+.004,.011,{seg:14,tube:6}),F([.72,.75,.8],{finish:ht.metal}),{bone:me[1]}),t2(i,e,t,k,r,A,n)}if(e.bottom.style==="overalls"&&!s.skirt){const k=t.waistY,W=t.chestY-.015,Y=[];for(let ee=0;ee<=5;ee++){const me=bt(k,W,ee/5),be=h(me);Y.push({c:[0,me,be.cz],rx:be.rx+s.inf+.006,rz:be.rz+s.inf+.006,n:2.25,w:u(me)})}i.add(Mt(Y,{seg:10,arc:[Math.PI-.55,Math.PI+.55]}),m);for(const ee of[1,-1]){const me=[];for(let be=0;be<=10;be++){const ge=be/10,_e=bt(W,t.shoulderY+.012,Math.sin(ge*Math.PI)**.9)*(ge<=.5,1),xe=Math.cos(ge*Math.PI);h(Math.min(_e,t.shoulderY));const Be=ee*bt(t.chestR[0]*.42,t.sw*.42,Math.sin(ge*Math.PI)),ze=ge<=.5?bt(W,t.shoulderY+.012,Gn(0,.5,ge)):bt(t.shoulderY+.012,t.ribY,Gn(.5,1,ge)),Qe=h(ze);me.push([Be,ze+(Math.abs(xe)<.3?.006:0),Qe.cz+xe*(Qe.rz*Math.sqrt(Math.max(.05,1-(Be/(Qe.rx+.03))**2))+s.inf+.008)])}i.add(Te(me,()=>.013,{seg:6,flat:.35}),m,{bone:Se.chest}),i.add(K([ee*t.chestR[0]*.42,W-.004,ae(W,s.inf)+.006],[.008,.008,.004],{seg:8}),F([.85,.7,.3],{finish:ht.metal}),{bone:Se.chest})}}const Q=(o?R:s.inf)+.004,re=[1,-1].map(k=>({a:l[k>0?"armL":"armR"],b:l[k>0?"foreL":"foreR"],r:t.armR[0]+Q}));return{torsoAt:h,layer:Q,clear:(k,W)=>{let[Y,ee,me]=k;if(ee<t.shoulderY+.03&&ee>t.crotchY){const be=h(ee),ge=be.rx+Q+W,_e=be.rz+Q+W,xe=Math.sqrt((Y/ge)**2+((me-be.cz)/_e)**2);xe<1&&xe>1e-4?(Y=Y/xe,me=be.cz+(me-be.cz)/xe):xe<=1e-4&&(me=be.cz-_e)}for(const be of re){const ge=[be.b[0]-be.a[0],be.b[1]-be.a[1],be.b[2]-be.a[2]],_e=Math.min(1,Math.max(0,((Y-be.a[0])*ge[0]+(ee-be.a[1])*ge[1]+(me-be.a[2])*ge[2])/(ge[0]**2+ge[1]**2+ge[2]**2))),xe=[be.a[0]+ge[0]*_e,be.a[1]+ge[1]*_e,be.a[2]+ge[2]*_e],Be=Y-xe[0],ze=ee-xe[1],Qe=me-xe[2],$=Math.hypot(Be,ze,Qe),je=be.r+W;$<je&&$>1e-5&&(Y=xe[0]+Be/$*je,ee=xe[1]+ze/$*je,me=xe[2]+Qe/$*je)}return[Y,ee,me]},skirtHem:z,lift:V,shaft:r.shaft}}function t2(i,e,t,n,s,a,o){const r=e.shoes.style,l=F(Lt(e.shoes.color),{color2:Lt(e.shoes.color2),finish:ht[e.shoes.material]??0}),c=F(Lt(e.shoes.color2),{finish:l.finish}),h=F(r==="sneakers"||r==="high-tops"||r==="platforms"?[.93,.92,.9]:Li(l.color,.35),{finish:ht.rubber}),u=n>0?Se.footL:Se.footR,f=t.joints[n>0?"footL":"footR"],p=(.052+t.build*.009)*s.bulk,g=.235+t.H*.035,x=-.075,d=s.sole,m=n*.14,M=Fe([f[0],0,f[2]],[0,m,0]),b=(N,P)=>i.add(N,P,{bone:u,matrix:M}),v=(N,P=1)=>{const z=bt(x,x+g,N),H=p*(.82+.3*Math.sin(Math.PI*Math.min(N*.95+.12,1))**.8)*(N>.75?bt(1,.78*s.toe,(N-.75)/.25):1),C=bt(.056,.034,Gn(.25,.9,N))*(N>.9?bt(1,.72,(N-.9)/.1):1)*s.bulk;return{c:[0,d+C*P-.004,z],rx:H*P,rz:C*P,ax:[1,0,0],az:[0,1,0],n:2.6}},R=[];for(let N=0;N<=10;N++)R.push(v(N/10));const S=[];for(let N=0;N<=10;N++){const P=v(N/10);S.push({c:[0,d*.5+(s.heel&&N<3,0),P.c[2]],rx:P.rx*1.06,rz:d*.5+(s.heel&&N<3?s.heel*.5:0),ax:[1,0,0],az:[0,1,0],n:4})}if(r==="slides"){b(Mt(S,{seg:14,capStart:"round",capEnd:"round",capBulge:.3}),l);const N=[];for(let P=0;P<=10;P++)N.push(v(P/10,.86));b(Mt(N,{seg:12,capStart:"round",capEnd:"round",capBulge:.5}),o),b(K([0,d+.036,x+g*.62],[p*1.04,.024,.036],{n:3,seg:12}),c)}else if(b(Mt(R,{seg:14,capStart:"round",capEnd:"round",capBulge:.6}),l),b(Mt(S,{seg:14,capStart:"round",capEnd:"round",capBulge:.3}),h),r==="sneakers"||r==="high-tops"||r==="platforms"||r==="roller-skates"){const N=[];for(let P=7;P<=10;P++){const z=v(P/10,1.035);N.push(z)}b(Mt(N,{seg:14,capEnd:"round",capBulge:.6}),F([.95,.94,.92],{finish:ht.rubber}));for(const P of[1,-1])b(K([P*p*.97,d+.03,x+g*.42],[.004,.012,.04],{seg:8,n:3}),c)}const _=t.ankleY+s.shaft,T=t.legR[3];if(s.open)i.add(Mt([{c:[f[0],d+.03,f[2]-.01],rx:T*1.05,rz:T*1.15},{c:[f[0],t.ankleY+.03,f[2]],rx:T,rz:T}],{seg:12}),o,{bone:n>0?Se.shinL:Se.shinR});else{const N=T+(s.shaft>.05?a+.01:.012),P=[{c:[0,d+.03,-.012],rx:N*1.12,rz:N*1.25,n:2.2},{c:[0,t.ankleY,-.004],rx:N,rz:N*1.05},{c:[0,Math.max(_,t.ankleY+.022),0],rx:N*(s.shaft>.1?1.12:1.02),rz:N*(s.shaft>.1?1.14:1.04)},{c:[0,Math.max(_,t.ankleY+.022)-.006,0],rx:T*.9,rz:T*.9}];i.add(Mt(P,{seg:14}),l,{bone:n>0?Se.shinL:Se.shinR,matrix:Fe([f[0],0,f[2]])}),s.shaft>.05&&r!=="rain-boots"&&i.add(Vt([f[0],Math.max(_,t.ankleY+.022)-.004,f[2]],N*1.12,.006,{seg:14,tube:6}),c,{bone:n>0?Se.shinL:Se.shinR})}if(r==="bunny-slippers"){for(const N of[1,-1])b(K([N*.018,d+.075,x+g*.72],[.012,.04,.008],{seg:8}),l);for(const N of[1,-1])b(K([N*.02,d+.045,x+g*.93],[.006,.007,.004],{seg:6}),F([.08,.08,.1],{finish:ht.plastic}));b(K([0,d+.032,x+g*.985],[.007,.006,.005],{seg:6}),F([1,.5,.6]))}if(r==="roller-skates")for(const N of[.18,.78])for(const P of[1,-1])i.add(K([0,0,0],[.02,.012,.02],{n:2,ny:5,seg:10}),c,{bone:u,matrix:M.clone().multiply(Fe([P*p*.7,.004,x+g*N],[0,0,Math.PI/2]))});if(r==="rocket-boots"){for(const N of[1,-1])b(K([N*(p+.012),d+.03,x+.02],[.014,.02,.04],{seg:8,n:3}),F([.75,.77,.82],{finish:ht.metal}));for(const N of[1,-1])b(K([N*(p+.012),d+.026,x-.03],[.011,.014,.022],{seg:8}),F([1,.6,.15],{finish:ht.glow}))}if(r==="cloud-shoes")for(let N=0;N<5;N++)b(K([Math.sin(N*2.4)*p*.9,.012+N%2*.008,x+g*(.1+N*.2)],[.03,.02,.034],{seg:8}),F([1,1,1],{finish:ht.glow}));r==="cowboy-boots"&&b(K([0,d+.02,x+g*.25],[p*1.02,.004,.03],{seg:8}),c)}const Ft=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Fs=(i,e,t)=>Math.exp(-(((i-e)/t)**2)),pn=(i,e,t)=>i+(e-i)*t,un=i=>{const e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function fn(i,e,t){const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)}function Oa(i,e,t){const n=Math.floor(i),s=Math.floor(e),a=Math.floor(t),o=i-n,r=e-s,l=t-a,c=o*o*(3-2*o),h=r*r*(3-2*r),u=l*l*(3-2*l),f=(p,g,x)=>p+(g-p)*x;return f(f(f(fn(n,s,a),fn(n+1,s,a),c),f(fn(n,s+1,a),fn(n+1,s+1,a),c),h),f(f(fn(n,s,a+1),fn(n+1,s,a+1),c),f(fn(n,s+1,a+1),fn(n+1,s+1,a+1),c),h),u)}const St={F:.6,T:.34,S:-.02,E:.12,N:-.44},nr={top:.06,side:.04,back:.045,front:.045},il={bald:{line:St,thick:nr,noShell:!0},buzz:{line:{...St,F:.62,S:.06},thick:{top:.022,side:.018,back:.018,front:.02},fuzz:!0},crop:{line:St,thick:{top:.1,side:.05,back:.055,front:.085,bumps:[.012,9]}},"side-part":{line:{...St,F:.52,slope:.14},thick:{top:.115,side:.05,back:.06,front:.1,part:.3,lift:.04}},quiff:{line:{...St,F:.62},thick:{top:.13,side:.04,back:.05,front:.1,lift:.2}},"curly-top":{line:{...St,sidesHigh:.25},thick:{top:.19,side:.03,back:.035,front:.16,bumps:[.06,8]}},afro:{line:{...St,F:.56,S:0},thick:{top:.3,side:.3,back:.3,front:.2,sphere:[1.42,.18],bumps:[.045,7]}},"afro-puffs":{line:{...St,F:.58},thick:{...nr,rows:0},addons:[{k:"bun",dir:[.62,.72,-.2],r:.4,both:!0,puff:!0}]},"flat-top":{line:{...St,F:.6,sidesHigh:.1},thick:{top:.2,side:.04,back:.045,front:.16,flat:1.3,bumps:[.012,14]}},cornrows:{line:{...St,F:.6},thick:{top:.035,side:.03,back:.03,front:.03,rows:.022}},locs:{line:{...St,F:.56},thick:{top:.07,side:.05,back:.05,front:.05,rows:.012},addons:[{k:"locs",n:34,len:1.05,r:.034}]},bob:{line:{...St,F:.5,slope:.1},thick:{top:.11,side:.1,back:.1,front:.09,part:.22},drape:{len:.62,flare:.05,az0:1,curlIn:.08}},lob:{line:{...St,F:.52},thick:{top:.1,side:.09,back:.09,front:.08,part:0},drape:{len:1.05,flare:.03,az0:.98,wave:.015}},"long-straight":{line:{...St,F:.54},thick:{top:.095,side:.085,back:.09,front:.075,part:0},drape:{len:1.95,flare:0,az0:1}},"long-wavy":{line:{...St,F:.52,slope:.1},thick:{top:.11,side:.1,back:.1,front:.09,part:.24,bumps:[.015,5]},drape:{len:1.8,flare:.06,az0:.98,wave:.045}},curtains:{line:{...St,F:.62,curtain:.42},thick:{top:.1,side:.085,back:.08,front:.1,part:0},drape:{len:.42,flare:.04,az0:.86,jag:.03}},shaggy:{line:{...St,F:.34,curtain:.08},thick:{top:.13,side:.1,back:.1,front:.1,bumps:[.04,10]},drape:{len:.8,flare:.08,az0:.92,jag:.1,wave:.03}},ponytail:{line:St,thick:{top:.07,side:.045,back:.05,front:.06},addons:[{k:"tail",dir:[0,.28,-1],len:1.25,r:.15}]},"high-ponytail":{line:St,thick:{top:.07,side:.045,back:.05,front:.06},addons:[{k:"tail",dir:[0,.82,-.6],len:1.45,r:.15,droop:1.3}]},pigtails:{line:{...St,F:.56},thick:{top:.07,side:.05,back:.05,front:.06,part:0},addons:[{k:"tail",dir:[.88,0,-.42],len:.95,r:.12,both:!0}]},"space-buns":{line:{...St,F:.56},thick:{top:.07,side:.05,back:.05,front:.06,part:0},addons:[{k:"bun",dir:[.55,.8,-.12],r:.25,both:!0}]},"top-bun":{line:St,thick:{top:.07,side:.045,back:.05,front:.06},addons:[{k:"bun",dir:[0,.94,-.3],r:.3}]},braids:{line:{...St,F:.56},thick:{top:.075,side:.055,back:.055,front:.065,part:0},addons:[{k:"braid",dir:[.8,-.28,-.3],len:1.5,r:.1,both:!0,forward:1}]},mohawk:{line:{...St,strip:.2},thick:{top:.05,side:.05,back:.05,front:.05,ridge:[.5,.13]},fuzz:!0},spiky:{line:St,thick:{top:.09,side:.045,back:.05,front:.075,spikes:[.2,6.5]}},undercut:{line:{...St,F:.5,sidesHigh:.42,slope:.2},thick:{top:.15,side:.1,back:.08,front:.13,lift:.06,part:.34},fuzz:!0},bowl:{line:{F:.18,T:.16,S:.1,E:.1,N:.02},thick:{top:.13,side:.125,back:.12,front:.11}},pixie:{line:{...St,F:.34,slope:.3},thick:{top:.105,side:.055,back:.05,front:.095,bumps:[.016,8]}},"anime-spikes":{line:{...St,F:.3,curtain:-.12},thick:{top:.12,side:.07,back:.08,front:.1},addons:[{k:"spikes",n:11,h:.62,r:.24}]},"twin-drills":{line:{...St,F:.2},thick:{top:.09,side:.07,back:.07,front:.09,part:0},addons:[{k:"drill",dir:[.9,.05,-.3],len:1.25,r:.15}]},"side-ponytail":{line:{...St,F:.46,slope:-.14},thick:{top:.08,side:.05,back:.05,front:.075},addons:[{k:"tail",dir:[.85,.42,-.35],len:1.2,r:.14,droop:1.2}]},hime:{line:{...St,F:.16,T:.16},thick:{top:.095,side:.085,back:.09,front:.085,part:0},drape:{len:2.05,flare:0,az0:.62,frontLen:.5}},"big-curls":{line:{...St,F:.5,slope:.1},thick:{top:.15,side:.14,back:.14,front:.12,bumps:[.05,6]},drape:{len:1.45,flare:.14,az0:.95,wave:.085}},"flame-hair":{line:{...St,F:.5},thick:{top:.1,side:.06,back:.07,front:.08},addons:[{k:"spikes",n:13,h:.7,r:.2,up:.75,flame:!0}],tone:"fire"},"cloud-hair":{line:St,thick:nr,noShell:!0,addons:[{k:"cloud"}]},"crystal-hair":{line:{...St,F:.56},thick:{top:.05,side:.04,back:.04,front:.04},addons:[{k:"spikes",n:12,h:.5,r:.16,crystal:!0}],finish:"crystal"},"pixel-hair":{line:{...St,F:.42},thick:{top:.14,side:.1,back:.1,front:.12},noShell:!0,addons:[{k:"pixel"}]},tentacles:{line:{...St,F:.56},thick:{top:.07,side:.05,back:.05,front:.05},addons:[{k:"tentacles",n:11}]}},za=112,ir=80;function n2(i,e,t,n,s){const a=il[e.hair.style]??il.crop,o=t.dims.hs,r=t.dims.headCenter,l=(C,I=0)=>{const X=un(C),O=t.sculpt(X),D=un([O[0],O[1]*.85,O[2]]);return[r[0]+(O[0]+D[0]*I)*o,r[1]+(O[1]+D[1]*I)*o,r[2]+(O[2]+D[2]*I)*o]},c={topY:t.dims.H,backZ:0,surf:l};if(s?.hideAll)return c;const h=.72+e.hair.volume*.56,u=Lt(e.hair.color),f=Lt(e.hair.color2),p=ht[a.finish??"matte"]??ht.matte,g=F(u,{color2:f,finish:p}),x=a.line,d=a.thick,m=t.dims.headH*.5,M=C=>{const I=Math.abs(C);let X=x.F+(x.slope??0)*C+(x.peak??0)*Fs(C,0,.12);return x.curtain&&(X-=x.curtain*(1-Fs(C,0,.3))*Ft(1,.3,I)),I<.95?pn(X,x.T,Ft(.35,.95,I)):I<1.3?pn(x.T,x.S,Ft(.95,1.22,I)):I<1.5?pn(x.S,x.E,Ft(1.3,1.5,I)):I<1.95?x.E:pn(x.E,x.N,Ft(1.95,2.6,I))},b=(C,I)=>{let X=Ft(-.07,.07,C[1]-M(I));return x.sidesHigh!==void 0&&(X=Math.min(X,Ft(-.06,.06,C[1]-x.sidesHigh))),x.strip!==void 0&&(X=Math.min(X,Ft(x.strip+.05,x.strip-.05,Math.abs(C[0])))),X},v=(C,I)=>Ft(-.07,.07,C[1]-M(I)),R=(C,I,X)=>{const O=Ft(.15,.85,C[1]),D=Ft(.1,-.7,C[2])*(1-O),te=Ft(.2,.9,C[2])*(1-O*.6);let U=pn(d.side,d.top,O);if(U=pn(U,d.back,D),U=pn(U,d.front,te*.8),U*=h,d.sphere){const J=d.sphere[0]*(.82+e.hair.volume*.36),j=[0,d.sphere[1],-.06],ae=C[0]*(X[0]-j[0])+C[1]*(X[1]-j[1])+C[2]*(X[2]-j[2]),ve=(X[0]-j[0])**2+(X[1]-j[1])**2+(X[2]-j[2])**2-J*J,A=ae*ae-ve;U=A>0?Math.max(.05,-ae+Math.sqrt(A))*Ft(-.75,-.2,C[1])+.05:U}if(d.lift&&(U+=d.lift*h*Fs(C[1],.62,.3)*Ft(0,.7,C[2])*(1-.4*Math.abs(C[0]))),d.part!==void 0&&C[1]>.3&&(U*=1-.42*Fs(C[0],d.part,.07)*Ft(-.6,.3,C[2])),d.bumps&&(U+=d.bumps[0]*h*(Oa(X[0]*d.bumps[1],X[1]*d.bumps[1],X[2]*d.bumps[1])-.35)*2),d.rows&&(U+=d.rows*Math.abs(Math.sin(C[0]*21))*Ft(-.3,.2,C[1])),d.spikes){const J=d.spikes[1],j=Oa(C[0]*J+5,C[1]*J,C[2]*J);U+=d.spikes[0]*h*Math.pow(Math.max(0,j-.35)/.65,1.6)*Ft(-.2,.4,C[1])*2}if(d.ridge&&(U=Math.max(U*0+.02,d.ridge[0]*h*Fs(C[0],0,d.ridge[1])*Ft(-.75,-.1,C[1]+(C[2]<0?.3:0))*(.82+.18*Math.sin(Math.atan2(C[1],C[2])*14)))),d.flat){const J=d.flat*(.94+e.hair.volume*.12);C[1]>.25&&(U=Math.max(U*.5,Math.min((J-X[1])/Math.max(C[1],.3),.6)))}return Math.max(U,.034)},S=(C,I,X,O)=>{const D=[],te=[],U=[],J=[],j=[],ae=[],A=[];for(let G=ir;G>=0;G--){const B=(-Math.PI/2+G/ir*Math.PI)*.999;for(let V=0;V<=za;V++){const Q=-Math.PI+V/za*Math.PI*2,re=oi(Q,B);let le=C(re,Q);const k=t.sculpt(re);let W=I?I(re,Q,k):.02;s&&(W=Math.min(W,s.maxT+Math.max(0,s.line-re[1])*.55)),W=pn(-.05,Math.max(W,.03),Ft(.3,.68,le));const Y=un([k[0],k[1]*.85,k[2]]);let ee=[r[0]+(k[0]+Y[0]*W)*o,r[1]+(k[1]+Y[1]*W)*o,r[2]+(k[2]+Y[2]*W)*o],me=(1-re[1])*.3,be=0;if(O&&B<-.08&&Math.abs(Q)>O.az0-.12){A[V]||(A[V]=ee);const ge=A[V],_e=(-.08-B)/(-.08+Math.PI/2),xe=Ft(O.az0+.5,O.az0,Math.abs(Q)),Be=(O.frontLen!==void 0?pn(O.len,O.frontLen,Ft(1.35,1.05,Math.abs(Q))):O.len)*h*.5+O.len*.5,ze=un([ge[0]-r[0],0,ge[2]-r[2]-.2*o]),Qe=(O.flare??0)*Math.sin(_e*Math.PI*.5)-(O.curlIn??0)*_e*_e,$=(O.wave??0)*Math.sin(_e*9+Q*3)*_e,je=O.jag?O.jag*(Oa(Q*5,1,2)-.5)*2:0,at=Be*(1+je)*o*_e;ee=[ge[0]+ze[0]*(Qe+$)*o,ge[1]-at,ge[2]+ze[2]*(Qe+$)*o],ee=n.clear(ee,.012+.012*xe),le=Ft(O.az0-.1,O.az0+.02,Math.abs(Q)),me=.4+.6*_e,be=Ft(m*.9,m*2.2,at)*.9}else O&&B<-.08&&(le=Math.min(le,Ft(-.07,.07,re[1]-M(Q))));D.push(ee[0],ee[1],ee[2]),U.push(Q/(Math.PI*2)+.5,me,ee[0],le),ae.push(le),J.push(Se.head,Se.chest,0,0),j.push(1-be,be,0,0),ee[1]>c.topY&&(c.topY=ee[1]),ee[2]<c.backZ&&(c.backZ=ee[2])}}const w=za+1;for(let G=0;G<ir;G++)for(let B=0;B<za;B++){const V=G*w+B,Q=V+1,re=V+w,le=re+1;ae[V]<.12&&ae[Q]<.12&&ae[re]<.12&&ae[le]<.12||te.push(V,Q,re,Q,le,re)}i.add({pos:D,idx:te,skinI:J,skinW:j},X,{aux:U})};a.fuzz&&S(v,null,F(u,{color2:f,finish:p,extra:1})),a.noShell||S(b,R,g,a.drape);const _=(C,I=0)=>{const X=un(C),O=t.sculpt(X),D=Math.atan2(X[0],X[2]);let te=a.noShell||b(X,D)<.5?0:R(X,D,O);s&&X[1]>s.line&&(te=Math.min(te,s.maxT));const U=un([O[0],O[1]*.85,O[2]]);return[r[0]+(O[0]+U[0]*(te+I))*o,r[1]+(O[1]+U[1]*(te+I))*o,r[2]+(O[2]+U[2]*(te+I))*o]};c.surf=_;const T=(C,I,X=.3,O=1,D=0)=>{const te=[];for(let U=0;U<C;U++)te.push(I+U%9*.013,pn(X,O,U/Math.max(C-1,1)),D,1);return te},N=(C,I,X=.3,O=1,D=0,te=g,U=Se.head)=>i.add(C,te,{bone:C.skinI?void 0:U,aux:T(C.pos.length/3,I,X,O,D)}),P=(C,I)=>N(K(C,[I,I*.6,I],{seg:10}),.5,0,0,0,F(f,{finish:ht.matte})),z=(C,I,X,O,D=9)=>{const te=[];let U=C,J=un(I);const j=X*o/D;for(let ae=0;ae<=D;ae++)te.push(n.clear(U,.02)),J=un([J[0]*.8,J[1]-.34*O,J[2]*.8]),U=[U[0]+J[0]*j,U[1]+J[1]*j,U[2]+J[2]*j];return te},H=C=>I=>{const X=C[Math.min(C.length-1,Math.round(I*(C.length-1)))][1],O=Ft(t.dims.chinY,t.dims.chinY-t.dims.headH*.6,X)*.85;return[[Se.head,1-O],[Se.chest,O]]};for(const C of a.addons??[]){const I="both"in C&&C.both?[1,-1]:[1];for(const X of I)if(C.k==="tail"){let O=[C.dir[0]*X,C.dir[1],C.dir[2]];s&&un(O)[1]>s.line-.25&&(O=[O[0],Math.min(O[1],(s.line-.4)*1),O[2]-.3]);const D=_(O,-.03),te=un([O[0]*.9,.25,O[2]]),U=z(D,te,C.len*(.8+e.hair.volume*.4),C.droop??1),J=C.r*o*h;N(Te(U,j=>J*(.45+1*Math.sin(Math.PI*Math.min(j*1.25+.08,1))**.7)*(j>.8?pn(1,.35,(j-.8)/.2):1),{seg:10,flat:.8,w:H(U)}),X*.21+.3,.35,1,D[0]),P(U[1]??D,J*.62)}else if(C.k==="bun"){const O=[C.dir[0]*X,C.dir[1],C.dir[2]];if(s?.noTop&&un(O)[1]>s.line)continue;const D=_(O,C.r*.55*h),te=C.r*o*h;C.puff?N(K(D,[te,te,te],{seg:18,bend:U=>{const J=1+.16*(Oa(U[0]*60+X*9,U[1]*60,U[2]*60)-.4);return[U[0]*J,U[1]*J,U[2]*J]}}),X*.3,.3,.9,D[0]):(N(K(D,[te,te*.85,te],{seg:14}),X*.3,.4,.9,D[0]),P(_(O,.01),te*.5))}else if(C.k==="braid"){const O=[C.dir[0]*X,C.dir[1],C.dir[2]],D=_(O,-.02),te=12,U=z(D,[X*.5,-.4,(C.forward??0)*.9],C.len*(.8+e.hair.volume*.4),1.1,te),J=H(U);for(let ae=0;ae<te;ae++){const ve=ae/te,A=U[ae],w=U[ae+1],G=C.r*o*(1-ve*.45),B=[(A[0]+w[0])/2+(ae%2?1:-1)*G*.28,(A[1]+w[1])/2,(A[2]+w[2])/2],V=K(B,[G,G*1.05,G*.85],{seg:9,w:J(ve)});i.add(V,g,{aux:T(V.pos.length/3,X*.2+ae*.07,.4+ve*.5,.5+ve*.5,B[0])})}P(U[te],C.r*o*.5);const j=U[te];N(K([j[0],j[1]-C.r*o*.7,j[2]],[C.r*o*.5,C.r*o*.8,C.r*o*.45],{seg:8,w:J(1)}),.7,.9,1,j[0])}else if(C.k==="drill")for(const O of[1,-1]){const D=[C.dir[0]*O,C.dir[1],C.dir[2]],te=_(D,0),U=[],J=3.2,j=40,ae=C.len*o;for(let ve=0;ve<=j;ve++){const A=ve/j,w=C.r*o*(1-A*.55),G=A*J*Math.PI*2;U.push(n.clear([te[0]+O*.02+Math.cos(G)*w,te[1]-A*ae,te[2]+Math.sin(G)*w],.02))}N(Te(U,ve=>C.r*o*.5*(1-ve*.6),{seg:8,w:H(U)}),O*.3,.3,1,te[0]),P(te,C.r*o*.45)}else if(C.k==="locs"){const O=Math.round(C.n*(.8+e.hair.volume*.4));for(let D=0;D<O;D++){const te=fn(D,1,7),U=fn(D,5,3),J=(te*2-1)*Math.PI;if(Math.abs(J)<.85)continue;const j=pn(.05,.75,U);if(s&&j>s.line)continue;const ae=un([Math.sin(J)*Math.sqrt(1-j*j),j,Math.cos(J)*Math.sqrt(1-j*j)]),ve=_(ae,-.03),A=C.len*(.85+fn(D,2,2)*.3)*(.75+e.hair.volume*.5)+j*.5,w=z(ve,[ae[0],.1,ae[2]],A,1.5,7);N(Te(w,G=>C.r*o*(1-G*.25),{seg:6,w:H(w)}),D*.071,.3,1,ve[0])}}else if(C.k==="spikes"){const O=C.n;for(let D=0;D<O;D++){const te=(D+.5)/O,U=D*2.39996;let J=pn(C.flame?.35:.15,.98,fn(D,3,1)*.5+te*.5);const j=Math.sqrt(Math.max(0,1-J*J));let ae=[Math.cos(U)*j,J,Math.sin(U)*j*.9-.12];if(ae=un(ae),ae[2]>.55&&ae[1]<.75&&(ae=un([ae[0],ae[1]+.5,ae[2]*.6]),J=ae[1]),s&&ae[1]>s.line)continue;const ve=_(ae,-.04),A=C.up??.25,w=un([ae[0],ae[1]+A,ae[2]-(C.flame?0:.15)]),G=C.h*o*h*(.7+fn(D,8,8)*.6),B=C.r*o*(.8+fn(D,4,4)*.4),V=[],Q=6;for(let le=0;le<=Q;le++){const k=le/Q,W=C.flame?Math.sin(k*3+D)*.12*G*k:0;V.push([ve[0]+w[0]*G*k+W,ve[1]+w[1]*G*k,ve[2]+w[2]*G*k+(C.flame?0:-.15*G*k*k)])}const re=Te(V,le=>B*Math.pow(1-le,C.crystal?1:.8)+.002,{seg:C.crystal?5:8});N(re,D*.11,.15,1,ve[0])}}else if(C.k==="cloud"){const O=F(u,{color2:f,finish:ht.glow}),D=[[0,.95,-.1,.5],[.5,.8,0,.4],[-.5,.8,0,.4],[.3,.75,.45,.34],[-.3,.75,.45,.34],[.72,.4,-.2,.36],[-.72,.4,-.2,.36],[0,.6,-.7,.46],[.45,.2,-.7,.36],[-.45,.2,-.7,.36],[0,1.25,-.05,.3]];for(const[te,U,J,j]of D){if(s&&U>s.line+.2)continue;const ae=_([te,U,J],j*.35);N(K(ae,[j*o*h,j*o*h*.85,j*o*h],{seg:14}),.5,.3,.6,ae[0],O)}}else if(C.k==="pixel")for(let D=-5;D<=5;D++)for(let te=-2;te<=7;te++)for(let U=-6;U<=5;U++){const J=[D*.21,te*.21,U*.21],j=Math.hypot(J[0],J[1],J[2]);if(j<.3)continue;const ae=[J[0]/j,J[1]/j,J[2]/j],ve=Math.atan2(ae[0],ae[2]);if(b(ae,ve)<.5)continue;const A=t.sculpt(ae),w=Math.hypot(A[0],A[1],A[2]);let G=R(ae,ve,A)*1.2+.21*.6;if(s&&ae[1]>s.line&&(G=Math.min(G,s.maxT)),j<w-.21*.1||j>w+G)continue;const B=[r[0]+J[0]*o,r[1]+J[1]*o,r[2]+J[2]*o];N(K(B,[.21*o*.52,.21*o*.52,.21*o*.52],{n:10,seg:8}),fn(D,te,U),.2+fn(D,U,te)*.6,.5,B[0])}else if(C.k==="tentacles")for(let O=0;O<C.n;O++){const D=Math.PI*(.38+O/(C.n-1)*1.24)*(O%2?1:-1),te=.15+fn(O,1,1)*.5;if(s&&te>s.line)continue;const U=un([Math.sin(D),te,Math.cos(D)]),J=_(U,-.03),ae=z(J,[U[0],.5,U[2]],1.5+fn(O,2,5)*.5,.75,12).map((A,w)=>n.clear([A[0]+Math.sin(w*.9+O)*.014*w*.4,A[1],A[2]+Math.cos(w*.8+O*2)*.012*w*.4],.02));N(Te(ae,A=>.085*o*(1-A*.8)+.003,{seg:8,w:H(ae)}),O*.09,.2,1,J[0]);const ve=ae[ae.length-1];N(K(ve,[.012,.012,.012],{seg:6,w:H(ae)(1)}),.5,1,1,ve[0],F(f,{finish:ht.glow}))}}return c}function i2(i,e,t,n){const s=e.facialHair.style,a=s==="long-beard"||s==="wizard-beard";if(s!=="full-beard"&&!a)return;const o=t.dims.hs,r=t.dims.headCenter,l=t.layout,c=Lt(e.facialHair.color||e.hair.color),h=F(c,{color2:c,finish:ht.matte}),u=[],f=[],p=[],g=[],x=[],d=36,m=22,M=s==="wizard-beard"?1.5:a?.85:0;for(let v=0;v<=m;v++)for(let R=0;R<=d;R++){const S=pn(-1.42,1.42,R/d),_=v/m,T=pn(l.mouthY+.2,l.eyeY-.12,Ft(.5,1.3,Math.abs(S))),N=Math.sin(Math.atan(T/2)*2),P=pn(N,-.98,_),z=Math.sqrt(Math.max(1e-4,1-P*P)),H=[Math.sin(S)*z,P,Math.cos(S)*z],C=t.sculpt(H),I=Ft(1.4,.2,Math.abs(S));let X=(.05+.1*e.facialHair.density)*Math.sin(Math.min(_*1.4,1)*Math.PI*.5)*(.5+.5*I)*Ft(0,.12,_);const O=un([C[0],C[1]*.4-.25,C[2]]);let D=[r[0]+(C[0]+O[0]*X)*o,r[1]+(C[1]+O[1]*X)*o,r[2]+(C[2]+O[2]*X)*o],te=0;if(M>0){const U=M*o*I*I*Ft(.35,1,_)*(1-.5*Math.abs(S)/1.42);D=[D[0]*(1-.5*Ft(.5,1,_)*I),D[1]-U,D[2]+.2*U],D=n.clear(D,.012),te=Ft(.05,.3,U)*.6}u.push(D[0],D[1],D[2]),p.push(S*.3+.5,.2+_*.7,D[0],1),g.push(Se.head,Se.chest,0,0),x.push(1-te,te,0,0)}const b=d+1;for(let v=0;v<m;v++)for(let R=0;R<d;R++){const S=pn(-1.42,1.42,(R+.5)/d),_=(v+.5)/m;if(Math.abs(S)<l.mouthW*1.5&&_>.06&&_<.3)continue;const T=v*b+R;f.push(T,T+b,T+1,T+1,T+b,T+b+1)}i.add({pos:u,idx:f,skinI:g,skinW:x},h,{aux:p})}const Ue=ht,jt=(i,e,t)=>i+(e-i)*t,ks=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Ba=i=>{const e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]},Os=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],sr=[.83,.62,.18],zs=[.62,.65,.7],Ha={line:.28,maxT:.06,noTop:!0},Pi={line:.38,maxT:.06,noTop:!0},Sh={none:null,beanie:{line:.2,maxT:.07,noTop:!0},cap:Ha,"backwards-cap":Ha,bucket:Ha,beret:{line:.42,maxT:.07,noTop:!0},fedora:Pi,cowboy:Pi,headband:{line:.3,maxT:.1,noTop:!1},bandana:{line:.34,maxT:.05,noTop:!0},hijab:{line:-2,maxT:.03,noTop:!0,hideAll:!0},turban:{line:.26,maxT:.04,noTop:!0},durag:{line:.28,maxT:.035,noTop:!0},headphones:null,bow:null,"flower-crown":null,"top-hat":Pi,"wizard-hat":Pi,"chef-hat":Pi,"party-hat":null,"pirate-hat":Pi,"space-helmet":{line:-2,maxT:.34,noTop:!1},"propeller-cap":Ha,"traffic-cone":Pi,"mushroom-cap":Pi,"ufo-hat":null};function s2(i){return Sh[i.hat.style]??null}function a2(i,e,t,n,s,a,o){const r=n.dims,l=r.hs,c=r.headCenter,h=n.layout,u={bone:Se.head},f=(A,w,G)=>i.add(A,w,G?{bone:Se.head,matrix:G}:u),p=(A,w)=>{const G=Ba(A),B=n.sculpt(G),V=Ba([B[0],B[1]*.85,B[2]]);return[c[0]+(B[0]+V[0]*w)*l,c[1]+(B[1]+V[1]*w)*l,c[2]+(B[2]+V[2]*w)*l]},g=(A,w)=>{const G=Math.sqrt(Math.max(1e-4,1-A*A)),B=p([0,A,G],w),V=p([G,A,0],w),Q=p([0,A,-G],w);return{y:(B[1]+V[1]+Q[1])/3,rx:V[0]-c[0],rz:(B[2]-Q[2])/2,cz:(B[2]+Q[2])/2}};let x=a.topY;const d=(o?.maxT??.06)+.04,m=(A,w,G,B)=>{const re=[],le=[];for(let Y=-1;Y<=16;Y++)for(let ee=0;ee<=44;ee++){const me=-Math.PI+ee/44*Math.PI*2,be=Math.max(Y,0)/16,ge=jt(A(me),.9999,Math.sin(be*Math.PI/2)),_e=Math.sqrt(Math.max(1e-6,1-ge*ge)),xe=p([Math.sin(me)*_e,ge,Math.cos(me)*_e],(Y<0?w-.035:w)+(B&&Y>=0?B(me,be):0));re.push(xe[0],xe[1],xe[2]),xe[1]>x&&(x=xe[1])}const k=45;for(let Y=0;Y<17;Y++)for(let ee=0;ee<44;ee++){const me=Y*k+ee;le.push(me,me+1,me+k,me+1,me+k+1,me+k)}const W=[];for(let Y=-1;Y<=16;Y++)for(let ee=0;ee<=44;ee++)W.push((ee/44-.5)*.6,Math.max(Y,0)/16*.22);i.add({pos:re,idx:le,uv:W},G,u)},M=(A,w,G,B,V={})=>{const Q=g(A,w),re=G.map(([le,k])=>({c:[c[0],Q.y+k*l,Q.cz-(V.lean??0)*k*l],rx:Math.max(Q.rx*le,.001),rz:Math.max(Q.rz*le,.001),n:V.n}));for(const le of re)le.c[1]>x&&(x=le.c[1]);return i.add(Mt(re,{seg:28}),B,u),Q},b=t.hat.style,v=_s(t.hat),R=F(Lt(t.hat.color2),{finish:v.finish});if(b==="beanie"){m(()=>.2,d+.02,{...v,finish:Ue.knit});const A=g(.24,d+.035);f(Wn([c[0],A.y,A.cz],A.rx,A.rz,.028*l*2.2,{sy:1.5}),F(Os(v.color,.85),{finish:Ue.knit}));const w=p([0,1,-.1],d+.1);f(K(w,[.18*l,.17*l,.18*l],{seg:12}),F(v.color2,{finish:Ue.fur})),x=Math.max(x,w[1]+.17*l)}else if(b==="cap"||b==="backwards-cap"||b==="propeller-cap"){const A=b==="backwards-cap";m(Q=>.3+.1*Math.cos(Q)*(A?-1:1),d,v);const w=A?-1:1,G=g(.36,d),B=w>0?G.cz+G.rz:G.cz-G.rz;f(K([0,0,0],[G.rx*.8,.012*l,.5*l],{seg:16,n:2.3,bend:Q=>[Q[0],Q[1]-Q[0]*Q[0]*3.5,Q[2]]}),R,Fe([c[0],G.y-.03*l,B+w*.3*l],[w*.2,0,0]));const V=p([0,1,0],d+.01);f(K(V,[.05*l,.03*l,.05*l],{seg:8}),R),b==="propeller-cap"&&(f(Te([V,[V[0],V[1]+.16*l,V[2]]],()=>.02*l,{seg:6}),F(zs,{finish:Ue.metal})),[[.9,.15,.15],[.15,.4,.9],[1,.8,.1]].forEach((re,le)=>f(K([.2*l,0,0],[.22*l,.012*l,.07*l],{seg:10}),F(re,{finish:Ue.plastic}),Fe([V[0],V[1]+.17*l,V[2]],[0,le*Math.PI*2/3,.15]))),x=Math.max(x,V[1]+.2*l))}else if(b==="bucket"){m(()=>.34,d,v);const A=g(.34,d);i.add(Mt([{c:[c[0],A.y+.01,A.cz],rx:A.rx,rz:A.rz},{c:[c[0],A.y-.16*l,A.cz],rx:A.rx+.3*l,rz:A.rz+.3*l},{c:[c[0],A.y-.185*l,A.cz],rx:A.rx+.31*l,rz:A.rz+.31*l},{c:[c[0],A.y-.03*l,A.cz],rx:A.rx-.01,rz:A.rz-.01}],{seg:28}),v,u)}else if(b==="beret"){m(()=>.44,d,v);const A=p([.25,.9,-.05],d+.04);f(K([0,0,0],[.82*l,.17*l,.8*l],{seg:18}),{...v,finish:Ue.velvet},Fe(A,[.1,0,-.3])),f(Te([[A[0],A[1]+.14*l,A[2]],[A[0],A[1]+.24*l,A[2]]],()=>.018*l,{seg:5}),v),x=Math.max(x,A[1]+.26*l)}else if(b==="fedora"||b==="cowboy"||b==="top-hat"||b==="pirate-hat"||b==="mushroom-cap"||b==="traffic-cone"||b==="wizard-hat"||b==="chef-hat"){m(()=>.4,d-.01,v);const w={fedora:[[1.02,0],[1.02,.36],[.92,.5],[.6,.52],[.05,.47]],cowboy:[[1.02,0],[1,.4],[.9,.58],[.55,.56],[.05,.46]],"top-hat":[[1,0],[1.02,.85],[1,.88],[.05,.88]],"pirate-hat":[[1.03,0],[1.08,.4],[.8,.55],[.05,.56]],"mushroom-cap":[[1,0],[1.9,.05],[1.95,.2],[1.6,.55],[.9,.78],[.05,.84]],"traffic-cone":[[1.02,0],[.34,1.5],[.3,1.54],[.05,1.54]],"wizard-hat":[[1.02,0],[.8,.5],[.45,1.1],[.16,1.6],[.02,1.9]],"chef-hat":[[1,0],[1,.5],[1.5,.75],[1.55,1],[1.2,1.22],[.05,1.28]]},G=b==="traffic-cone"?F([1,.42,.05],{color2:[1,1,1],pattern:bn.stripes,scale:.5,finish:Ue.plastic}):b==="mushroom-cap"?F(v.color,{color2:v.color2,pattern:bn["polka-dots"],scale:.45,finish:Ue.plastic}):b==="chef-hat"?F([.97,.97,.95]):v,B=M(.4,d,w[b],G,{lean:b==="wizard-hat"?.35:.06,n:b==="chef-hat"?2:2.1}),Q={fedora:.36,cowboy:.62,"top-hat":.3,"pirate-hat":.5,"traffic-cone":.34,"wizard-hat":.62}[b];if(Q){const re=b==="cowboy"?.3:b==="pirate-hat"?.5:.04,le=[0,.5,1,1.04,.5,0].map((W,Y)=>({c:[c[0],B.y+(Y<3?.012:-.004)*l,B.cz],rx:B.rx+Q*l*W,rz:B.rz+Q*l*W*(b==="pirate-hat"?.6:1),n:b==="traffic-cone"?6:2.1,fn:ee=>1})),k=Mt(le,{seg:32});for(let W=0;W<k.pos.length;W+=3){const Y=(k.pos[W]-c[0])/(B.rx+Q*l);k.pos[W+1]=k.pos[W+1]+re*l*Y*Y*(b==="pirate-hat"?1:Math.abs(Y))}if(i.add(k,b==="traffic-cone"?F([1,.42,.05],{finish:Ue.plastic}):v,u),b!=="traffic-cone"&&f(Wn([c[0],B.y+.07*l,B.cz-.004],B.rx*1.03,B.rz*1.03,.012,{sy:2.6}),R),b==="pirate-hat"&&f(K([c[0],B.y+.3*l,B.cz+B.rz*1.06],[.1*l,.1*l,.02*l],{seg:10}),F([.95,.95,.9],{finish:Ue.plastic})),b==="wizard-hat")for(let W=0;W<5;W++)f(K(p([Math.sin(W*1.3)*.6,.75,Math.cos(W*1.3)*.6],d+.14+W*.05),[.04*l,.04*l,.02*l],{seg:6}),F(v.color2,{finish:Ue.glow}))}}else if(b==="headband"){const A=g(.42,(o?.maxT??.1)+.02);f(Wn([0,0,0],A.rx,A.rz,.02,{sy:2.4}),{...v,finish:Ue.knit},Fe([c[0],A.y,A.cz],[-.22,0,0]))}else if(b==="bandana"){m(w=>.36+.08*Math.cos(w),d-.02,v);const A=p([.15,.3,-1],d);f(K(A,[.09*l,.07*l,.06*l],{seg:8}),v);for(const w of[1,-1])f(K([0,-.1*l,0],[.05*l,.16*l,.02*l],{seg:8}),v,Fe(A,[.3,0,w*.5]))}else if(b==="durag"){m(w=>.3+.12*Math.cos(w),d-.03,{...v,finish:Ue.silk});const A=p([0,.15,-1],d-.03);i.add(Te([A,[A[0],A[1]-.25*l,A[2]-.08*l],s.clear([A[0],A[1]-.75*l,A[2]-.02*l],.02)],w=>.1*l*(1-w*.4),{seg:8,flat:.25}),{...v,finish:Ue.silk},u)}else if(b==="turban")m(A=>.26+.2*Math.max(0,Math.cos(A))**2,d+.1,v,(A,w)=>.045*Math.sin((A*1+w*5)*5)*(1-w)+.12*Math.sin(w*Math.PI)),f(K(p([0,.72,.7],d+.16),[.12*l,.1*l,.08*l],{seg:10}),R);else if(b==="hijab"){const G=[],B=[],V=[],Q=[],re=[],le=h.eyeY+h.browY+.34,k=h.mouthY-.3,W=(le+k)/2,Y=(le-k)/2,ee=h.eyeX+h.eyeSize+.3;for(let be=0;be<=30;be++)for(let ge=0;ge<=56;ge++){const _e=-Math.PI+ge/56*Math.PI*2,xe=jt(Math.PI/2*.999,-1.15,be/30),Be=oi(_e,xe);let ze=1;if(Be[2]>0){const je=2/(1+Be[2]),at=Be[0]*je,it=Be[1]*je;ze=ks(.88,1.12,Math.hypot(at/ee,(it-W)/Y))}let Qe=p(Be,jt(-.08,.07+.03*ks(.2,-.6,Be[1]),ze)),$=0;if(xe<-.55){const je=(-.55-xe)/.6,at=p(oi(_e,-.55),.1);Qe=[at[0]*(1+.5*je),at[1]-je*(at[1]-r.shoulderY+.07),at[2]*(1+.25*je)+.01*je],Qe=s.clear(Qe,.012),$=ks(.1,.9,je),Be[2]>0&&ze<1&&(ze=Math.max(ze,ks(0,.25,je)))}G.push(Qe[0],Qe[1],Qe[2]),re.push(ze),V.push(Se.head,Se.chest,0,0),Q.push(1-$,$,0,0),Qe[1]>x&&(x=Qe[1])}const me=57;for(let be=0;be<30;be++)for(let ge=0;ge<56;ge++){const _e=be*me+ge;re[_e]+re[_e+1]+re[_e+me]+re[_e+me+1]<.05||B.push(_e,_e+me,_e+1,_e+1,_e+me,_e+me+1)}i.add({pos:G,idx:B,skinI:V,skinW:Q},v)}else if(b==="headphones"){const A=[],w=tr(n,1).center,G=Math.max(x-w[1]+.02,.6*l),B=Math.abs(w[0])+.03+.1*l;for(let V=0;V<=16;V++){const Q=jt(-Math.PI/2,Math.PI/2,V/16);A.push([c[0]+Math.sin(Q)*B,w[1]+Math.cos(Q)*G,w[2]-.005])}i.add(Te(A,()=>.012,{seg:6,flat:1.8}),v,u);for(const V of[1,-1])f(K([0,0,0],[.035,.26*l,.2*l],{seg:14,n:2.6}),v,Fe([c[0]+V*B,w[1],w[2]-.005])),f(K([0,0,0],[.012,.16*l,.12*l],{seg:10}),R,Fe([c[0]+V*(B+.03),w[1],w[2]-.005]));x=Math.max(x,w[1]+G+.012)}else if(b==="bow"){const A=a.surf([.45,.8,.2],.06);for(const w of[1,-1])f(K([w*.17*l,0,0],[.18*l,.14*l,.06*l],{seg:12,bend:G=>[G[0],G[1]*(.35+Math.abs(G[0])/(.18*l)*.9),G[2]]}),v,Fe(A,[0,.3,-.35]));f(K(A,[.05*l,.06*l,.05*l],{seg:8}),R),x=Math.max(x,A[1]+.15*l)}else if(b==="flower-crown")for(let w=0;w<11;w++){const G=w/11*Math.PI*2,B=a.surf([Math.sin(G)*.86,.5,Math.cos(G)*.86],.03);f(K(B,[.085*l,.06*l,.085*l],{seg:9,bend:Q=>{const re=1+.3*Math.cos(Math.atan2(Q[2],Q[0])*5);return[Q[0]*re,Q[1],Q[2]*re]}}),w%2?v:R),f(K([B[0],B[1]+.03*l,B[2]],[.03*l,.03*l,.03*l],{seg:6}),F([1,.85,.25]));const V=a.surf([Math.sin(G+.28)*.86,.48,Math.cos(G+.28)*.86],.02);f(K(V,[.05*l,.02*l,.03*l],{seg:6}),F([.2,.6,.25]))}else if(b==="party-hat"){const A=a.surf([.2,.95,.1],-.02);f(Mt([{c:[0,0,0],rx:.3*l,rz:.3*l},{c:[0,.75*l,0],rx:.015*l,rz:.015*l}],{seg:16,capStart:"flat"}),F(v.color,{color2:v.color2,pattern:v.pattern||bn.stripes,scale:.5,finish:Ue.plastic}),Fe(A,[.05,0,-.2])),f(K([A[0]-.15*l,A[1]+.76*l,A[2]],[.08*l,.08*l,.08*l],{seg:8}),F(v.color2,{finish:Ue.fur})),x=Math.max(x,A[1]+.85*l)}else if(b==="space-helmet"){const A=1.62*l;e.add(K([c[0],c[1]+.1*l,c[2]-.02],[A,A,A],{seg:28}),F([.75,.9,1],{finish:Ue.glass}),u),i.add(Wn([0,r.shoulderY+.03,-.01],r.neckR*1.9,r.neckR*1.9,.02,{sy:1.2}),F([.85,.87,.9],{finish:Ue.metal}),{bone:Se.chest}),x=Math.max(x,c[1]+.1*l+A)}else if(b==="ufo-hat"){const A=x+.07;f(K([c[0],A,c[2]],[.85*l,.1*l,.85*l],{seg:22}),F(zs,{finish:Ue.metal})),e.add(K([c[0],A+.08*l,c[2]],[.36*l,.26*l,.36*l],{seg:14}),F(v.color,{finish:Ue.glass}),u);for(let w=0;w<8;w++){const G=w/8*Math.PI*2;f(K([c[0]+Math.sin(G)*.7*l,A-.02*l,c[2]+Math.cos(G)*.7*l],[.05*l,.04*l,.05*l],{seg:6}),F(v.color2,{finish:Ue.glow}))}x=A+.34*l}const S=t.headpiece.style,_=Lt(t.headpiece.color),T=Lt(t.headpiece.color2),N=!!o?.noTop||b==="space-helmet",P=(A,w=0)=>o&&!o.hideAll&&Ba(A)[1]>o.line?p(A,d+w):o?.hideAll?p(A,.08+w):a.surf(A,w);if(S==="crown"||S==="tiara"||S==="flame-crown"){if(!N||b==="beanie"||b==="bandana"||b==="durag"||b==="hijab"||b==="turban"){const A=S==="tiara"?9:12,w=[],G=S==="tiara"?.62:1;for(let V=0;V<=28;V++){const Q=(V/28-.5)*Math.PI*2*G;w.push(P([Math.sin(Q)*.74,.68,Math.cos(Q)*.74-.05],.015))}const B=F(_,{finish:S==="flame-crown"?Ue.glow:Ue.metal});i.add(Te(w,()=>.035*l,{seg:6,flat:1.9,cap:G<1}),B,u);for(let V=0;V<A;V++){const Q=((V+.5)/A-.5)*Math.PI*2*G,re=P([Math.sin(Q)*.74,.68,Math.cos(Q)*.74-.05],.015),le=(S==="tiara"?.2*Math.cos(Q*1.2)**2+.05:S==="flame-crown"?.3+.2*Math.abs(Math.sin(V*2.3)):.24)*l,k=Ba([Math.sin(Q)*.25,1,Math.cos(Q)*.25]);i.add(Te([re,[re[0]+k[0]*le,re[1]+k[1]*le,re[2]+k[2]*le]],W=>.06*l*(1-W)+.004,{seg:5}),S==="flame-crown"?F(_,{color2:T,pattern:bn.flames,finish:Ue.glow}):B,u),S!=="flame-crown"&&V%(S==="tiara"?4:3)===(S==="tiara"?0:1)&&f(K([re[0]+k[0]*.02,re[1]+.012,re[2]+k[2]*.02],[.035*l,.04*l,.035*l],{seg:6}),F(T,{finish:Ue.crystal})),x=Math.max(x,re[1]+le)}}}else if(S==="horns"||S==="antlers"||S==="unicorn"||S==="antenna"){const A=S==="unicorn"?[0]:[1,-1];for(const w of A){const G=S==="unicorn"?[0,.8,.6]:S==="antenna"?[w*.35,.93,.05]:[w*.55,.78,.2],B=P(G,-.03),V=[],Q=10,re=(S==="antlers"?.8:S==="antenna"?.6:S==="unicorn"?.8:.55)*l;for(let W=0;W<=Q;W++){const Y=W/Q,ee=S==="horns"?[w*(.5*Math.sin(Y*2.2)),Y-.25*Y*Y,-.2*Y*Y]:S==="antenna"?[w*.25*Y*Y,Y,.1*Math.sin(Y*3)]:S==="unicorn"?[0,Y*.8,Y*.6]:[w*.45*Y,Y,-.1*Y];V.push([B[0]+ee[0]*re,B[1]+ee[1]*re,B[2]+ee[2]*re])}const le=S==="antenna"?()=>.02*l:W=>(S==="antlers"?.06:.1)*l*(1-W*.9)*(S==="unicorn"?1+.18*Math.sin(W*40):1)+.003;i.add(Te(V,le,{seg:8}),F(_,{finish:S==="unicorn"?Ue.holo:Ue.plastic}),u);const k=V[Q];if(S==="antenna"&&f(K(k,[.07*l,.07*l,.07*l],{seg:8}),F(T,{finish:Ue.glow})),S==="antlers")for(const W of[.4,.7]){const Y=V[Math.round(W*Q)];i.add(Te([Y,[Y[0]+w*.22*l,Y[1]+.22*l,Y[2]+.08*l]],ee=>.04*l*(1-ee)+.003,{seg:6}),F(_,{finish:Ue.plastic}),u)}x=Math.max(x,k[1]+.02)}}else if(S==="cat-ears"||S==="fox-ears"||S==="bunny-ears")for(const A of[1,-1]){const w=S==="bunny-ears",G=P([A*(w?.3:.55),w?.93:.8,.02],-.04),B=(w?1:S==="fox-ears"?.52:.4)*l,V=(w?.15:S==="fox-ears"?.26:.22)*l,Q=le=>{const k=Math.min(1,Math.max(0,le[1]/B+.5)),W=w?1-.5*k*k:1-.92*k;return[le[0]*W+(w?A*.25*l*k*k:0),le[1],le[2]*(w?1:W)]},re=Fe([G[0],G[1]+B*.42,G[2]],[w?-.1:0,0,A*(w?-.12:-.25)]);f(K([0,0,0],[V,B*.5,.07*l],{seg:12,bend:Q}),F(_,{finish:Ue.fur}),re),f(K([0,-.02*l,.035*l],[V*.6,B*.4,.05*l],{seg:10,bend:Q}),F(T,{finish:Ue.velvet}),re),x=Math.max(x,G[1]+B*.9)}const z=x+.07;if(S==="halo"&&(f(Vt([c[0],z,c[2]-.01],.56*l,.035*l,{seg:28,tube:8}),F(_,{finish:Ue.glow})),x=z+.02),S==="orbit-gems")for(let A=0;A<5;A++){const w=A/5*Math.PI*2;f(K([0,0,0],[.06*l,.11*l,.06*l],{seg:5,n:1.3}),F(A%2?_:T,{finish:Ue.crystal}),Fe([c[0]+Math.sin(w)*1.25*l,c[1]+.75*l+Math.sin(w*2)*.08*l,c[2]+Math.cos(w)*1.25*l],[.2,w,.3]))}const H=t.glasses.style;if(H!=="none"){const A=F(Lt(t.glasses.color),{finish:Ue.plastic}),w=Lt(t.glasses.lens),G=H.includes("shades")||H==="goggles"&&!1,B=H==="laser-visor"?F([1,.1,.1],{finish:Ue.glow}):G?F(Os(w,.22+.2*(1-t.glasses.tint)),{finish:Ue.plastic}):H==="visor"?F(w,{finish:Ue.holo}):F(o2([1,1,1],w,.35+t.glasses.tint*.6),{finish:Ue.glass}),V=n.atUv(h.eyeX,h.eyeY),Q=n.atUv(0,h.eyeY+.02),re=Math.max(V[2],Q[2])+.014+.004,le=h.eyeSize*l*(H==="goggles"?1.5:H==="thick"?1.32:1.28),k=V[1]-.004,W=Math.max(V[0],le+.012),Y=(ge,_e)=>xe=>{const Be=2/ge,ze=Math.cos(xe),Qe=Math.sin(xe);return[Math.sign(ze)*Math.abs(ze)**Be,Math.sign(Qe)*Math.abs(Qe)**Be*_e]},ee={round:Y(2,.94),rimless:Y(2.4,.8),square:Y(4.5,.74),thick:Y(3.6,.8),shades:Y(3.2,.78),goggles:Y(2,1),monocle:Y(2,1),aviator:ge=>{const _e=Math.cos(ge),xe=Math.sin(ge);return[_e*(1-.18*Math.max(0,-xe))+.08*Math.max(0,-xe),xe*(xe>0?.7:.98)]},"cat-eye":ge=>{const _e=Math.cos(ge),xe=Math.sin(ge);return[_e*1.05,xe*.66+.3*Math.max(0,_e)**2*Math.max(0,xe+.4)]},"heart-shades":ge=>{const _e=ge-Math.PI/2,xe=16*Math.sin(_e)**3,Be=13*Math.cos(_e)-5*Math.cos(2*_e)-2*Math.cos(3*_e)-Math.cos(4*_e);return[-xe/16,Be/16+.1]},"star-shades":ge=>{const _e=.62+.38*Math.cos(5*(ge-Math.PI/2));return[Math.cos(ge)*_e*1.15,Math.sin(ge)*_e*1.15]}},me=H==="visor"||H==="laser-visor"||H==="pixel-shades",be=tr(n,1).top;if(me){const ge=H==="laser-visor"?.035:.075,_e=[];for(let xe=0;xe<=12;xe++){const Be=xe/12*2-1;_e.push([Be*(W+le*1.15),k,re-.03*Be*Be*2.2])}if(H==="pixel-shades"){for(const xe of[1,-1])f(K([xe*W,k,re],[le*1,le*.52,.006],{n:10,seg:8}),F([.04,.04,.05],{finish:Ue.plastic})),f(K([xe*(W-le*.5),k+le*.2,re+.004],[le*.2,le*.14,.004],{n:10,seg:8}),F([1,1,1],{finish:Ue.glow})),f(K([xe*(W-le*.2),k-le*.66,re],[le*.7,le*.16,.006],{n:10,seg:8}),F([.04,.04,.05],{finish:Ue.plastic}));f(K([0,k+le*.3,re],[W,le*.17,.006],{n:10,seg:8}),F([.04,.04,.05],{finish:Ue.plastic}))}else i.add(Te(_e,()=>ge*.5,{seg:8,flat:.16}),B,{bone:Se.head,matrix:Fe([0,0,0],[0,0,0],[1,1,1])}),i.add(Te(_e.map(xe=>[xe[0],xe[1]+ge*.5,xe[2]-.002]),()=>.005,{seg:5}),A,u);for(const xe of[1,-1])i.add(Te([[xe*(W+le*1.12),k,re-.03*2.2],[xe*be[0],be[1]-.01,be[2]]],()=>.005,{seg:5}),me&&H!=="pixel-shades"?A:F([.04,.04,.05],{finish:Ue.plastic}),u)}else{const ge=ee[H]??ee.round,_e=H==="thick"||H==="goggles"?.0085:H==="rimless"?.0015:G?.006:.0045,xe=H==="monocle"?[1]:[1,-1];for(const Be of xe){const Qe=[];for(let it=0;it<=28;it++){const[Me,Pt]=ge(it/28*Math.PI*2);Qe.push([Be*W+Be*Me*le,k+Pt*le,re-.02*(Me+1)*(Me+1)*.5])}i.add(Te(Qe,()=>_e,{seg:6,cap:!1}),A,u);const $=[Be*W,k,re-.01],je=[];for(let it=0;it<=28;it++)$.push(...Qe[it]),it<28&&(Be>0?je.push(0,it+1,it+2):je.push(0,it+2,it+1));(B.finish===Ue.glass?e:i).add({pos:$,idx:je},B,u),H==="goggles"&&i.add(Te(Qe.map(it=>[it[0],it[1],it[2]-.012]),()=>_e*1.3,{seg:6,cap:!1}),A,u);const at=[Be*(W+le*.98),k+le*.2,re-.04];H==="monocle"?i.add(Te([[Be*W,k-le,re],[Be*(W+.02),k-.1,re-.02],[Be*W*.8,r.chinY-.02,re-.05]],()=>.0018,{seg:4}),F(sr,{finish:Ue.metal}),u):i.add(Te([at,[Be*be[0],be[1]-.012,be[2]+.01],[Be*(be[0]-.004),be[1]-.05,be[2]-.02]],()=>H==="goggles"?.012:.004,{seg:5,flat:H==="goggles"?.3:1}),H==="goggles"?F(Os(A.color,.7),{finish:Ue.rubber}):A,u)}H!=="monocle"&&i.add(Te([[W-le*.9,k+le*.25,re-.004],[0,k+le*.38,re+.004],[-(W-le*.9),k+le*.25,re-.004]],()=>Math.max(_e*.9,.003),{seg:5}),A,u)}}const C=t.earrings.style;if(C!=="none"&&t.ears.shape!=="robot"&&!Sh[b]?.hideAll){const A=F(Lt(t.earrings.color),{finish:Ue.metal});for(const w of t.earrings.side==="both"?[1,-1]:t.earrings.side==="left"?[1]:[-1]){const G=tr(n,w),B=G.lobe;if(C==="studs")f(K([B[0]+w*.004,B[1],B[2]+.004],[.009,.009,.009],{seg:8}),A);else if(C==="hoops")f(Vt([0,0,0],.024,.0035,{seg:16,tube:5}),A,Fe([B[0]+w*.004,B[1]-.022,B[2]],[0,0,Math.PI/2]));else if(C==="drops")i.add(Te([B,[B[0]+w*.003,B[1]-.03,B[2]]],()=>.0018,{seg:4}),A,u),f(K([B[0]+w*.003,B[1]-.04,B[2]],[.009,.014,.009],{seg:8}),F(A.color,{finish:Ue.crystal}));else if(C==="cuffs")f(Vt([0,0,0],.012,.004,{seg:12,tube:5}),A,Fe([G.top[0]+w*.004,G.top[1]-.012,G.top[2]-.004],[.4,0,Math.PI/2+w*.4]));else if(C==="stars")i.add(Te([B,[B[0],B[1]-.025,B[2]]],()=>.0015,{seg:4}),A,u),f(K([0,0,0],[.017,.017,.006],{seg:10,bend:V=>{const Q=.62+.38*Math.cos(5*Math.atan2(V[1],V[0])-Math.PI/2);return[V[0]*Q*1.3,V[1]*Q*1.3,V[2]]}}),A,Fe([B[0]+w*.004,B[1]-.04,B[2]],[0,w*.8,0]));else if(C==="planets"){i.add(Te([B,[B[0],B[1]-.02,B[2]]],()=>.0015,{seg:4}),A,u);const V=[B[0]+w*.004,B[1]-.034,B[2]];f(K(V,[.012,.012,.012],{seg:8}),F(A.color,{finish:Ue.plastic})),f(Vt([0,0,0],.02,.0022,{seg:14,tube:4}),F(sr,{finish:Ue.metal}),Fe(V,[.5,0,.3]))}else C==="bolts"&&i.add(Te([B,[B[0]+w*.008,B[1]-.02,B[2]],[B[0]-w*.002,B[1]-.028,B[2]],[B[0]+w*.006,B[1]-.055,B[2]]],V=>.0045*(1-V*.7),{seg:4}),F(A.color,{finish:Ue.glow}),u)}}const I=F(Lt(t.piercings.color),{finish:Ue.metal}),X=h.nose.wx*h.noseW;for(const A of t.piercings.items)if(A==="nose-stud"){const w=n.atUv(X*1,h.noseTipY+.03);f(K([w[0]+.002,w[1],w[2]+.002],[.0045,.0045,.0045],{seg:6}),I)}else if(A==="nose-ring"){const w=n.atUv(-X*.9,h.noseTipY-.02);f(Vt([0,0,0],.008,.0016,{seg:12,tube:4}),I,Fe([w[0]-.001,w[1]-.003,w[2]+.002],[Math.PI/2,0,.5]))}else if(A==="brow-ring"){const w=n.atUv(h.eyeX+h.eyeSize*.95,h.eyeY+h.browY);f(Vt([0,0,0],.007,.0016,{seg:12,tube:4}),I,Fe([w[0],w[1],w[2]+.004],[Math.PI/2,.3,0]))}else if(A==="lip-ring"){const w=n.atUv(h.mouthW*.45,h.mouthY-.07);f(Vt([0,0,0],.007,.0016,{seg:12,tube:4}),I,Fe([w[0],w[1]-.002,w[2]+.004],[Math.PI/2,0,Math.PI/2]))}const O=t.back.style,D=_s(t.back),te=F(D.color2,{finish:D.finish}),U=s.torsoAt(r.chestY);s.torsoAt(r.waistY);const J=U.cz-U.rz-s.layer-.004,j={bone:Se.chest},ae=(A,w,G)=>i.add(A,w,G?{bone:Se.chest,matrix:G}:j);if(O==="backpack"){const A=jt(r.waistY,r.chestY,.55),w=(r.chestY-r.waistY)*.85+.05;ae(K([0,A,J-.055],[U.rx*.8,w,.06],{n:3.2,seg:16}),D),ae(K([0,A-w*.35,J-.118],[U.rx*.55,w*.38,.02],{n:3.2,seg:12}),te);for(const G of[1,-1]){const B=[];for(let V=0;V<=12;V++){const Q=V/12,re=jt(-.25,Math.PI+.35,Q),le=jt(A-w*.3,r.shoulderY-.012,Math.sin(re)*.5+.5),k=s.torsoAt(le),W=-Math.cos(re);B.push([G*U.rx*.58,le+(Math.abs(W)<.4?.012:0),k.cz+W*(k.rz*.92+s.layer+.004)])}i.add(Te(B,()=>.015,{seg:6,flat:.4}),F(Os(D.color,.8),{finish:D.finish}),j)}}else if(O==="cape"||O==="royal-cape"){const A=O==="royal-cape",w=r.shoulderY+.004,G=A?r.ankleY+.05:jt(r.kneeY,r.hipY,.25),B=[],V=12;for(let Q=0;Q<=V;Q++){const re=Q/V,le=jt(w,G,re),k=s.torsoAt(Math.max(le,r.hipY)),W=jt(r.sw*.82,r.sw*(A?1.7:1.35),Math.pow(re,.8)),Y=ks(.25,.8,re);B.push({c:[0,le,k.cz-.02*re],rx:W+s.layer,rz:k.rz+s.layer+.012+.09*re+(A?.05*re:0),fn:ee=>1+.03*re*Math.sin(ee*9),w:[[Se.chest,1-Y*.7],[Se.hips,Y*.7]]})}if(i.add(Mt(B,{seg:22,arc:[-Math.PI*.5,Math.PI*.5]}),D),i.add(Mt(B.map(Q=>({...Q,rx:Q.rx-.005,rz:Q.rz-.005})),{seg:22,arc:[-Math.PI*.5,Math.PI*.5]}),F(Os(D.color2,.9),{finish:D.finish}),{flip:!0}),A)i.add(Wn([0,r.shoulderY-.006,-.01],r.sw*.82,U.rz+s.layer+.012,.03,{sy:1.1}),F([.96,.95,.92],{color2:[.1,.1,.1],pattern:bn["polka-dots"],scale:1.5,finish:Ue.fur}),j);else for(const Q of[1,-1])ae(K([Q*r.neckR*1.4,r.shoulderY-.012,U.cz+U.rz*.72+s.layer],[.016,.016,.008],{seg:8}),F(sr,{finish:Ue.metal}))}else if(O.endsWith("wings"))for(const A of[1,-1]){const w=[A*.045,r.chestY+.01,J-.01],G=(B,V=w)=>Fe(V,B);if(O==="angel-wings"){const B=[w,[w[0]+A*.16,w[1]+.2,w[2]-.06],[w[0]+A*.42,w[1]+.26,w[2]-.08],[w[0]+A*.62,w[1]+.1,w[2]-.07]];i.add(Te(B,V=>.035*(1-V*.6),{seg:7}),F(D.color,{finish:Ue.fur}),j);for(let V=0;V<3;V++)for(let Q=0;Q<9;Q++){const re=Q/8,le=Math.min(re*3,2.999),k=B[Math.floor(le)],W=B[Math.floor(le)+1],Y=le-Math.floor(le),ee=[jt(k[0],W[0],Y),jt(k[1],W[1],Y)-V*.05,jt(k[2],W[2],Y)-.008*V],me=(.14+.2*re+V*.1)*(1-.25*Math.abs(re-.6));ae(K([0,-me*.5,0],[.04,me*.55,.008],{seg:8}),F(V===2?D.color2:D.color,{finish:Ue.fur}),G([0,0,A*(.15+re*.85)],ee))}}else if(O==="dragon-wings"){const B=[[A*.75,.4,-.12],[A*.85,.02,-.14],[A*.6,-.32,-.12],[A*.28,-.42,-.08]],V=[w[0]+A*.26,w[1]+.3,w[2]-.08];i.add(Te([w,V],()=>.022,{seg:6}),D,j);const Q=[...V],re=[];B.forEach((k,W)=>{const Y=[w[0]+k[0],w[1]+k[1],w[2]+k[2]];i.add(Te([V,Y],ee=>.016*(1-ee*.7),{seg:5}),D,j),Q.push(...Y),W>0&&((Q[W*3]+Y[0])/2*.9+V[0]*.1,(Q[W*3+1]+Y[1])/2*.86+V[1]*.14,Y[2],re.push(0,W,W+1))}),Q.push(w[0],w[1]-.22,w[2]),re.push(0,B.length,B.length+1);const le=F(D.color2,{color2:D.color,pattern:D.pattern,scale:D.scale,finish:Ue.leather});i.add({pos:Q,idx:re},le,j),i.add({pos:Q,idx:re},le,{bone:Se.chest,flip:!0})}else{const B=O==="fairy-wings",V=O==="mech-wings",Q=B?F(D.color,{color2:D.color2,finish:Ue.crystal}):V?F(D.color,{finish:Ue.metal}):F(D.color,{color2:D.color2,pattern:D.pattern||bn["tie-dye"],scale:D.scale*.6,finish:Ue.silk});if(V){for(let re=0;re<4;re++)ae(K([0,.18+re*.02,0],[.035,.2+re*.03,.01],{n:3,seg:8}),Q,G([0,0,-A*(.5+re*.36)],[w[0]+A*.03,w[1],w[2]-.02-re*.008]));ae(K([w[0]+A*.03,w[1],w[2]-.02],[.04,.05,.03],{seg:8}),F(zs,{finish:Ue.metal}));for(let re=0;re<4;re++)ae(K([0,.36+re*.045,.006],[.012,.03,.006],{seg:6}),F(D.color2,{finish:Ue.glow}),G([0,0,-A*(.5+re*.36)],[w[0]+A*.03,w[1],w[2]-.02-re*.008]))}else{const re=(le,k,W,Y)=>ae(K([0,k*.9,0],[le,k,.004],{seg:16,bend:ee=>[ee[0]*(.45+.75*Math.max(0,ee[1]/k+.2)),ee[1],ee[2]]}),Q,G([0,A*-.35,-A*W],[w[0],w[1]+Y,w[2]-.012]));re(B?.13:.2,.26,.85,.02),re(B?.1:.16,B?.2:.18,2,-.04)}}}else if(O==="jetpack"){for(const A of[1,-1])ae(K([A*.065,jt(r.waistY,r.chestY,.6),J-.06],[.05,.14,.05],{n:2,ny:3.5,seg:14}),F(D.color,{finish:Ue.metal})),ae(K([A*.065,jt(r.waistY,r.chestY,.6)+.15,J-.06],[.04,.04,.04],{seg:10}),te),ae(Mt([{c:[A*.065,r.waistY+0,J-.06],rx:.03,rz:.03},{c:[A*.065,r.waistY-.05,J-.06],rx:.045,rz:.045}],{seg:12}),F(zs,{finish:Ue.metal})),ae(K([A*.065,r.waistY-.07,J-.06],[.03,.06,.03],{seg:8}),F([1,.6,.15],{color2:[1,.9,.3],pattern:bn.flames,finish:Ue.glow}));ae(K([0,jt(r.waistY,r.chestY,.6),J-.03],[.08,.08,.025],{n:3,seg:10}),F(zs,{finish:Ue.metal}))}else if(O==="turtle-shell")ae(K([0,jt(r.waistY,r.chestY,.5),J+.01],[U.rx*1,(r.chestY-r.waistY)*.9+.06,.1],{seg:20}),F(D.color,{color2:D.color2,pattern:bn.honeycomb,scale:.45,finish:Ue.plastic})),ae(Wn([0,jt(r.waistY,r.chestY,.5),J+.01],U.rx*1,.02,.014,{}),te,Fe([0,0,0]));else if(O==="guitar"||O==="skateboard"){const A=[0,jt(r.waistY,r.chestY,.5),J-.035];if(O==="guitar"){const G=Fe(A,[0,0,.6]);ae(K([0,-.1,0],[.11,.1,.028],{seg:16}),F(D.color,{finish:Ue.plastic}),G),ae(K([0,.03,0],[.085,.08,.028],{seg:16}),F(D.color,{finish:Ue.plastic}),G),ae(K([0,.3,0],[.018,.22,.012],{n:3,seg:8}),F([.3,.2,.12],{finish:Ue.wood}),G),ae(K([0,.54,0],[.03,.045,.012],{n:3,seg:8}),te,G),ae(K([0,-.06,-.03],[.035,.035,.004],{seg:10}),F([.05,.05,.05]),G)}else{const G=Fe(A,[0,0,.35]);ae(K([0,0,0],[.085,.36,.01],{n:2.6,seg:16,bend:B=>[B[0],B[1],B[2]-Math.max(0,Math.abs(B[1])-.27)*.5]}),F(D.color,{color2:D.color2,pattern:D.pattern,scale:D.scale,finish:Ue.wood}),G);for(const B of[.22,-.22])for(const V of[.06,-.06])ae(K([V,B,-.03],[.014,.024,.024],{seg:8}),te,G)}const w=[];for(let G=0;G<=12;G++){const V=G/12*Math.PI*2,Q=jt(r.waistY+.02,r.shoulderY-.02,.5+.5*Math.cos(V)),re=s.torsoAt(Q),le=jt(-re.rx*.75,re.rx*.55,.5+.5*Math.cos(V)),k=Math.sin(V);w.push([le,Q,re.cz+k*(re.rz*Math.sqrt(Math.max(.1,1-(le/(re.rx+.02))**2))+s.layer+.005)])}i.add(Te(w,()=>.012,{seg:6,flat:.35,cap:!1}),F([.12,.1,.1],{finish:Ue.leather}),j)}const ve=t.tail.style;if(ve!=="none"){const A=Lt(t.tail.color||t.hair.color),w=Lt(t.tail.color2),G=s.torsoAt(r.hipY+.03),B=[0,r.hipY+.035,G.cz-G.rz-.004],V={bone:Se.hips};if(ve==="bunny")i.add(K([0,B[1],B[2]-.05],[.055,.055,.055],{seg:12}),F(w,{finish:Ue.fur}),V);else{const re=[],le=ve==="dragon"?.62:ve==="fox"?.5:.6;for(let Y=0;Y<=14;Y++){const ee=Y/14,me=ve==="dragon"?-.55*ee+.25*ee*ee:ve==="fox"?.5*ee*ee:Math.sin(ee*2.6)*.38-.12*ee;re.push([Math.sin(ee*3)*.03,B[1]+me*le,B[2]-(ve==="dragon"?ee:Math.sin(ee*1.9)*.75)*le*.75-.01])}const k=Y=>ve==="fox"?.03+.075*Math.sin(Math.min(Y*1.25,1)*Math.PI)**.8*(1-Y*.3):ve==="dragon"?.07*(1-Y)+.006:ve==="robot"?.022:.022*(1-Y*.3);i.add(Te(re,k,{seg:9}),F(A,{color2:w,finish:ve==="robot"?Ue.metal:ve==="dragon"?Ue.leather:Ue.fur,pattern:ve==="robot"?bn.stripes:0,scale:2.5}),V);const W=re[14];if(ve==="fox"&&i.add(K([W[0],W[1]-.02,W[2]+.02],[.05,.06,.05],{seg:10}),F(w,{finish:Ue.fur}),V),ve==="robot"&&i.add(K(W,[.035,.035,.035],{seg:8}),F(w,{finish:Ue.glow}),V),ve==="dragon")for(let Y=2;Y<14;Y+=2){const ee=re[Y];i.add(Te([ee,[ee[0],ee[1]+k(Y/14)+.03,ee[2]-.01]],me=>.02*(1-me)+.002,{seg:5}),F(w,{finish:Ue.plastic}),V)}}}return{haloY:z,topY:x}}function o2(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}function r2(i){const e=q1(i),t=$1(i,e),n=new En,s=new En,a=new En,o=new En,r=Lt(i.skin.tone),l=ht[i.skin.material]??ht.skin;K1(s,t,r,l),Z1(n,t,i,r,l);const c=e2(n,i,e),h=s2(i),u=n2(a,i,t,c,h);i2(a,i,t,c);const f=a2(n,o,i,t,c,u,h);return{dims:e,head:t,body:c,gBody:n,gHead:s,gHair:a,gGlass:o,hair:u,extras:f}}class l2{group=new kn;faceU=C1();hairU={value:new Bt};matBody=vi();matHead=vi({face:this.faceU});matHair=vi({hair:this.hairU,side:An});matGlass=vi({transparent:!0,side:An});meshes=[];rig;dims;head;body;look;extras;stats={vertices:0,triangles:0,ms:0};version=0;setLook(e){const t=typeof performance<"u"?performance.now():0,n=r2(e);for(const o of this.meshes)o.geometry.dispose(),this.group.remove(o);this.rig&&this.group.remove(this.rig.byName.root),this.meshes=[],this.look=e,this.dims=n.dims,this.head=n.head,this.body=n.body,this.extras=n.extras,this.rig=X1(n.dims),this.group.add(this.rig.byName.root);const s=(o,r,l)=>{if(o.vertexCount===0)return;const c=new fd(o.toGeometry(!0),r);c.name=l,c.frustumCulled=!1,c.castShadow=l!=="glass",c.receiveShadow=l!=="hair"&&l!=="glass",l==="glass"&&(c.renderOrder=5),c.bind(this.rig.skeleton,new wt),this.group.add(c),this.meshes.push(c)};s(n.gBody,this.matBody,"body"),s(n.gHead,this.matHead,"head"),s(n.gHair,this.matHair,"hair"),s(n.gGlass,this.matGlass,"glass"),j1(this.faceU,e,n.head);const a=il[e.hair.style]?.tone??e.hair.tone;this.hairU.value.set(V1[a]??0,0,0,0),this.stats={vertices:n.gBody.vertexCount+n.gHead.vertexCount+n.gHair.vertexCount+n.gGlass.vertexCount,triangles:n.gBody.triCount+n.gHead.triCount+n.gHair.triCount,ms:(typeof performance<"u"?performance.now():0)-t},this.version++}dispose(){for(const e of this.meshes)e.geometry.dispose();this.matBody.dispose(),this.matHead.dispose(),this.matHair.dispose(),this.matGlass.dispose()}}const Rt=ht,us=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];function c2(i,e,t){const n=new En,s=new En,a=F(e,{color2:t,finish:Rt.fur}),o=F(t,{finish:Rt.fur}),r=F([.04,.04,.05],{finish:Rt.plastic}),l=F([1,1,1],{finish:Rt.plastic}),c=(g,x,d=.045,m=.02,M)=>{for(const b of[1,-1])n.add(K([b*d,g,x],[m,m*1.15,m*.7],{seg:8}),M?F(M,{finish:Rt.glow}):r),M||n.add(K([b*d+.006,g+.008,x+m*.55],[m*.3,m*.3,m*.2],{seg:6}),l)},h=(g,x=a)=>{for(const d of[1,-1])for(const m of[1,-1])n.add(K([d*.055,g,m*.06],[.03,g,.034],{seg:8}),x)};let u=!1,f=.3;const p=g=>{n.add(K([0,.11,-.02],[.085,.075,.115],{seg:14}),a),n.add(K([0,.095,.03],[.06,.05,.06],{seg:10}),o),h(.035),n.add(K([0,.215,.07],[.085,.078,.08],{seg:14}),a),n.add(K([0,.19,.135+g.snout*.5],[.042,.032,.03+g.snout],{seg:10}),o),n.add(K([0,.2,.165+g.snout*1.4],[.014,.01,.008],{seg:6}),r),c(.235,.135);for(const x of[1,-1])g.ear==="point"?(n.add(K([0,.03,0],[.032,.045,.014],{seg:8,bend:d=>[d[0]*(1-Math.max(0,d[1]/.045)*.9),d[1],d[2]]}),a,{matrix:Fe([x*.055,.275,.06],[0,0,x*-.3])}),n.add(K([0,.025,.008],[.016,.028,.008],{seg:6}),F(g.earC??[1,.6,.65]),{matrix:Fe([x*.055,.275,.06],[0,0,x*-.3])})):g.ear==="flop"?n.add(K([0,-.04,0],[.026,.055,.016],{seg:8}),F(us(e,.7),{finish:Rt.fur}),{matrix:Fe([x*.082,.26,.06],[0,0,x*.35])}):g.ear==="long"?(n.add(K([0,.08,0],[.024,.09,.014],{seg:8}),a,{matrix:Fe([x*.04,.27,.05],[-.15,0,x*-.18])}),n.add(K([0,.08,.008],[.012,.065,.008],{seg:6}),F([1,.65,.7]),{matrix:Fe([x*.04,.27,.05],[-.15,0,x*-.18])})):n.add(K([x*.07,.285,.05],[.028,.028,.014],{seg:8}),a);g.tail==="long"?n.add(Te([[0,.13,-.12],[0,.2,-.19],[.03,.29,-.2],[.05,.33,-.16]],()=>.014,{seg:6}),a):g.tail==="bushy"?(n.add(Te([[0,.12,-.12],[0,.17,-.2],[0,.26,-.24]],x=>.02+.035*Math.sin(x*3),{seg:8}),a),n.add(K([0,.275,-.245],[.03,.035,.03],{seg:8}),o)):g.tail==="curl"?n.add(Te([[0,.14,-.12],[0,.2,-.16],[0,.23,-.12]],()=>.016,{seg:6}),a):n.add(K([0,.13,-.135],[.03,.03,.03],{seg:8}),o)};if(i==="cat")p({ear:"point",tail:"long",snout:0});else if(i==="dog")p({ear:"flop",tail:"curl",snout:.016});else if(i==="bunny")p({ear:"long",tail:"short",snout:0});else if(i==="fox")p({ear:"point",tail:"bushy",snout:.02,earC:[.1,.08,.08]});else if(i==="bird"||i==="owl"||i==="duck"){const g=i==="owl",x=i==="duck";n.add(K([0,.12,0],[.085,g?.11:.09,.09],{seg:14}),a),n.add(K([0,.1,.04],[.06,.07,.06],{seg:10}),o),g||n.add(K([0,.235,.03],[.066,.062,.064],{seg:12}),a);const d=g?.17:.24,m=g?.075:.085;if(g)for(const M of[1,-1])n.add(K([M*.036,d,m-.005],[.036,.036,.012],{seg:10}),o),n.add(K([M*.06,.245,.02],[.02,.03,.014],{seg:6}),a,{matrix:Fe([0,0,0],[0,0,M*-.4])});c(d,m+(g?.006:0),g?.036:.032,g?.02:.014),n.add(K([0,d-.022,m+.02],x?[.03,.01,.03]:[.012,.012,.022],{seg:8}),F([1,.6,.1],{finish:Rt.plastic}));for(const M of[1,-1])n.add(K([M*.085,.12,-.01],[.02,.06,.05],{seg:8}),F(us(e,.8),{finish:Rt.fur})),n.add(K([M*.03,.012,.02],[.02,.012,.03],{seg:6}),F([1,.6,.1],{finish:Rt.plastic}));if(!g&&!x&&n.add(K([0,.11,-.1],[.03,.012,.05],{seg:6}),F(us(e,.8))),x)for(const M of n.fx.keys())M%4===2&&n.fx[M]===Rt.fur&&(n.fx[M]=Rt.plastic)}else if(i==="turtle")n.add(K([0,.1,0],[.11,.075,.12],{seg:16}),F(e,{color2:us(e,.6),pattern:bn.honeycomb,scale:1.4,finish:Rt.plastic})),n.add(K([0,.06,0],[.115,.03,.125],{seg:14}),o),h(.03,o),n.add(K([0,.12,.15],[.05,.048,.055],{seg:10}),o),c(.135,.19,.03,.013),f=.2;else if(i==="dragon"){p({ear:"point",tail:"short",snout:.022,earC:t}),n.add(Te([[0,.12,-.12],[0,.1,-.2],[.02,.07,-.27],[.05,.08,-.31]],g=>.035*(1-g)+.006,{seg:7}),a);for(const g of[1,-1])n.add(K([0,.05,0],[.085,.06,.006],{seg:10,bend:x=>[x[0],x[1]*(.4+Math.abs(x[0])*9),x[2]]}),F(t,{finish:Rt.leather}),{matrix:Fe([g*.075,.17,-.05],[0,g*.5,g*-.5])}),n.add(Te([[g*.04,.28,.03],[g*.055,.33,0]],x=>.012*(1-x)+.002,{seg:5}),F([.95,.9,.8],{finish:Rt.plastic}));for(let g=0;g<4;g++)n.add(K([0,.19-g*.012,-.03-g*.045],[.008,.02,.014],{seg:5}),F(t,{finish:Rt.plastic}));for(const g of n.fx.keys())g%4===2&&n.fx[g]===Rt.fur&&(n.fx[g]=Rt.leather)}else if(i==="robot"){const g=F(e,{finish:Rt.metal});n.add(K([0,.14,0],[.085,.08,.07],{n:5,seg:12}),g),n.add(K([0,.27,0],[.075,.055,.065],{n:5,seg:12}),g),n.add(K([0,.27,.06],[.06,.036,.012],{n:5,seg:10}),F([.03,.04,.06],{finish:Rt.plastic})),c(.272,.07,.028,.012,t),n.add(Te([[0,.32,0],[0,.38,0]],()=>.005,{seg:5}),g),n.add(K([0,.39,0],[.014,.014,.014],{seg:8}),F(t,{finish:Rt.glow}));for(const x of[1,-1])n.add(K([x*.105,.14,0],[.018,.045,.02],{seg:8}),F(us(e,.7),{finish:Rt.metal}));n.add(K([0,.045,0],[.04,.03,.04],{seg:10}),F(t,{color2:[1,1,1],pattern:bn.flames,finish:Rt.glow})),u=!0,f=.4}else if(i==="slime")s.add(K([0,.085,0],[.13,.1,.13],{seg:18,bend:g=>[g[0]*(1.15-g[1]*2.2),g[1],g[2]*(1.15-g[1]*2.2)]}),F(e,{finish:Rt.crystal})),n.add(K([0,.07,0],[.06,.045,.06],{seg:10}),F(t,{finish:Rt.glow})),c(.11,.105,.04,.018),f=.2;else if(i==="ghost")n.add(Mt([{c:[0,.05,0],rx:.1,rz:.09,fn:g=>1+.12*Math.sin(g*6)},{c:[0,.12,0],rx:.095,rz:.085},{c:[0,.24,0],rx:.085,rz:.08},{c:[0,.31,0],rx:.05,rz:.05},{c:[0,.335,0],rx:.005,rz:.005}],{seg:24}),F(e,{finish:Rt.ghost})),c(.24,.07,.032,.02),n.add(K([0,.2,.078],[.014,.02,.008],{seg:6}),r),u=!0,f=.36;else if(i==="ufo"){n.add(K([0,.2,0],[.15,.03,.15],{seg:20}),F(e,{finish:Rt.metal})),s.add(K([0,.225,0],[.07,.06,.07],{seg:12}),F(t,{finish:Rt.glass})),n.add(K([0,.225,0],[.03,.03,.03],{seg:8}),F([.4,.9,.4],{finish:Rt.plastic})),c(.232,.025,.012,.007);for(let g=0;g<7;g++){const x=g/7*Math.PI*2;n.add(K([Math.sin(x)*.12,.19,Math.cos(x)*.12],[.012,.01,.012],{seg:6}),F(t,{finish:Rt.glow}))}u=!0,f=.32}else if(i==="cloud"){const g=F(e,{finish:Rt.glow}),x=[[0,.24,0,.085],[.09,.225,0,.065],[-.09,.225,0,.065],[.04,.275,-.01,.06],[-.045,.27,.01,.055]];for(const[d,m,M,b]of x)n.add(K([d,m,M],[b,b*.85,b],{seg:10}),g);c(.24,.078,.035,.014);for(let d=0;d<5;d++)n.add(K([-.08+d*.04,.12-d%2*.03,0],[.006,.018,.006],{seg:5}),F(t,{finish:Rt.glow}));u=!0,f=.36}else if(i==="jellyfish"){s.add(K([0,.26,0],[.1,.075,.1],{seg:16,bend:g=>[g[0],Math.max(g[1],-.02),g[2]]}),F(e,{finish:Rt.crystal})),n.add(K([0,.265,0],[.045,.035,.045],{seg:8}),F(t,{finish:Rt.glow}));for(let g=0;g<7;g++){const x=g/7*Math.PI*2,d=[];for(let m=0;m<=6;m++)d.push([Math.sin(x)*.06+Math.sin(m*1.3+g)*.012,.24-m*.032,Math.cos(x)*.06+Math.cos(m*1.1+g)*.012]);n.add(Te(d,m=>.007*(1-m*.7),{seg:5}),F(t,{finish:Rt.glow}))}c(.25,.09,.03,.012),u=!0,f=.36}else{n.add(K([0,.075,0],[.11,.08,.095],{seg:9,bend:g=>[g[0]*(1+.15*Math.sin(g[1]*60)),g[1],g[2]*(1+.12*Math.cos(g[0]*50))]}),F(e,{color2:us(e,.7),pattern:bn.camo,scale:2,finish:Rt.matte}));for(const g of[1,-1])n.add(K([g*.035,.105,.085],[.024,.026,.012],{seg:8}),l),n.add(K([g*.035+.004,.098,.096],[.011,.012,.006],{seg:6}),r);f=.17}return{geo:n,glass:s,floats:u,height:f}}class h2{group=new kn;inner=new kn;mats=[];floats=!1;height=.3;t=Math.random()*10;hop=0;spin=0;mode="follow";kind="none";key="";constructor(){this.group.add(this.inner),this.group.visible=!1}setLook(e){const t=e.pet,n=JSON.stringify(t);if(n===this.key||(this.key=n,this.clear(),this.kind=t.kind,this.mode=t.mode,this.group.visible=t.kind!=="none",t.kind==="none"))return;const s=c2(t.kind,Lt(t.color),Lt(t.color2));this.floats=s.floats||t.mode==="float"||t.mode==="orbit",this.height=s.height;const a=(o,r)=>{if(!o.vertexCount)return;const l=new Qt(o.toGeometry(!1),r);l.castShadow=!r.transparent,l.userData.pick="pet",this.inner.add(l),this.mats.push(r)};a(s.geo,vi()),a(s.glass,vi({transparent:!0,side:An})),this.inner.scale.setScalar(.85+t.size*.7)}react(){this.hop=.6,this.spin=Math.PI*2}update(e,t,n,s){if(!this.group.visible)return;this.t+=e;const a=this.t,o=s?0:1;let r=t.sw+.34,l=0,c=.16,h=-.35+n*.5;if(this.mode==="float")r=t.sw+.22,l=t.H*.62+Math.sin(a*1.6)*.04*o,c=.05;else if(this.mode==="orbit"){const f=a*.8*o;r=Math.sin(f)*(t.sw+.4),c=Math.cos(f)*(t.sw+.4),l=t.H*.55+Math.sin(a*1.3)*.05,h=f+Math.PI/2}else this.floats&&(l=.14+Math.sin(a*1.8)*.03*o);let u=1+Math.sin(a*2.2)*.025*o;if(this.mode==="follow"&&!this.floats){const f=Math.max(0,Math.sin(a*1.1))**8;l+=f*.07*o,u+=f*.08*o}if(this.hop>0){this.hop-=e;const f=Math.sin((1-this.hop/.6)*Math.PI);l+=f*.22,u+=f*.15}if(this.spin>0){const f=Math.min(this.spin,e*12);this.spin-=f}this.group.position.set(r,l,c),this.group.rotation.y=h+this.spin,this.inner.scale.y=this.inner.scale.x*u}clear(){for(const e of[...this.inner.children])e.geometry.dispose(),this.inner.remove(e);for(const e of this.mats)e.dispose();this.mats=[]}dispose(){this.clear()}}function ot(i){const e={};for(const[t,n]of Object.entries(i))e[t]={id:t,name:n[0],desc:n[1],tier:n[2]??"menu"};return e}const yt=(i,e,t=0,n=1,s)=>({t:"num",d:i,min:t,max:n,desc:e,tier:s}),lt=(i,e,t)=>({t:"opt",d:e,table:i,desc:t}),gt=(i,e,t,n=!1)=>({t:"color",d:i,palette:e,desc:t,auto:n}),o0=(i,e,t)=>({t:"list",table:i,max:e,desc:t}),f2=(i,e,t,n)=>({t:"text",d:i,max:e,desc:t,tier:n}),wh=(i,e,t)=>({t:"bool",d:i,desc:e,tier:t}),Yi={skin:{porcelain:"#f6dccb",ivory:"#f0cdb4",peach:"#eabd9e",sand:"#deab85",honey:"#d09a6c",golden:"#c58c5c",almond:"#b47a4e",bronze:"#a26840",chestnut:"#8a5433",umber:"#74442a",cocoa:"#5f3622",espresso:"#4a2a1b",ebony:"#38201a"},hair:{black:"#16110f","soft-black":"#2a211d","dark-brown":"#3b2618",brown:"#5a3a22",chestnut:"#7a4a2a",auburn:"#8c3a1e",ginger:"#c2591f",copper:"#b56a35","dirty-blonde":"#a8854f",blonde:"#d8b46a",platinum:"#ece2c6",gray:"#9a9a9e",silver:"#cfd2d6",white:"#f4f2ee",pink:"#ff7eb6",red:"#d62839",blue:"#3a86ff",teal:"#17b8a6",purple:"#8b5cf6",green:"#3fbf5f",lavender:"#c8b6ff",mint:"#b8f2d0"},eye:{brown:"#5b3a1e","dark-brown":"#3a2412",hazel:"#8a6a2f",amber:"#c08a2a",green:"#3f8f4f",blue:"#3b7fd4","ice-blue":"#8fc7ee",gray:"#7d8a94",violet:"#8a5cd6",black:"#1a1414"},fabric:{white:"#f7f5f0",cream:"#f1e6cf",black:"#1b1b1b",charcoal:"#3a3d45",gray:"#8a8f98",navy:"#1f2f5c",blue:"#2f6fe0",sky:"#a8d8ff",teal:"#149e94",mint:"#b8f2d0",green:"#2f9e52",olive:"#6b7a3a",yellow:"#ffd43b",butter:"#ffe98a",orange:"#f08a24",peach:"#ffc9a8",red:"#d93a3a",maroon:"#7a1f2b",pink:"#ff8fa3","hot-pink":"#ff3d8b",purple:"#7b4fd6",lavender:"#c8b6ff",brown:"#7a5236",tan:"#c9a57a",denim:"#3f5f8f",gold:"#e0b23a",silver:"#c9ced6"}},r0={aqua:"#00ffff",coral:"#ff7f50",crimson:"#dc143c",cyan:"#00ffff",fuchsia:"#ff00ff",indigo:"#4b0082",lime:"#00ff00",magenta:"#ff00ff",salmon:"#fa8072",turquoise:"#40e0d0",violet:"#ee82ee",orchid:"#da70d6",tomato:"#ff6347",khaki:"#f0e68c",plum:"#dda0dd",beige:"#f5f5dc"};function Eh(i,e){if(typeof i!="string")return null;const t=i.trim().toLowerCase();if(!t)return null;if(e!=="any"&&Yi[e][t])return{hex:Yi[e][t],tier:"menu",ok:!0};for(const s of Object.values(Yi))if(s[t])return{hex:s[t],tier:"menu",ok:!0};if(r0[t])return{hex:r0[t],tier:"code",ok:!0};let n=/^#?([0-9a-f]{6})$/.exec(t);return n?{hex:`#${n[1]}`,tier:"code",ok:!0}:(n=/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(t),n?{hex:`#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}`,tier:"code",ok:!0}:null)}function Ux(i){const e=i.toLowerCase();for(const t of Object.values(Yi))for(const n of Object.values(t))if(n===e)return!0;return!1}function d2(i,e){const t=[];for(let n=0;n<=e.length;n++)t[n]=n;for(let n=1;n<=i.length;n++){let s=t[0];t[0]=n;for(let a=1;a<=e.length;a++){const o=t[a];t[a]=Math.min(t[a]+1,t[a-1]+1,s+(i[n-1]===e[a-1]?0:1)),s=o}}return t[e.length]}function Ks(i,e){const t=i.toLowerCase().replace(/[\s_]+/g,"-");let n=null,s=1/0;for(const a of e){if(a===t)return a;const o=d2(t,a);o<s&&(s=o,n=a)}return n&&s<=Math.max(2,Math.floor(t.length/3))?n:null}const ps=i=>{let e;try{e=typeof i=="string"?i:JSON.stringify(i)??String(i)}catch{e="that value"}return e.length>24?`${e.slice(0,24)}...`:e};function sl(i,e,t,n){const s={},a=e&&typeof e=="object"&&!Array.isArray(e)?e:{};e!=null&&(typeof e!="object"||Array.isArray(e))&&n.push({path:t,message:`"${t}" should be a group of properties. I used the defaults.`});for(const o of Object.keys(a))if(!(o in i)){const r=Ks(o,Object.keys(i));n.push({path:`${t}.${o}`,message:r?`"${t}.${o}" is not a property. Did you mean "${r}"?`:`I skipped "${t}.${o}". That property does not exist.`})}for(const[o,r]of Object.entries(i)){const l=a[o],c=`${t}.${o}`;if(r.t==="num"){let h=typeof l=="number"?l:typeof l=="string"&&l.trim()!==""?Number(l):NaN;if(l==null)h=r.d;else if(!Number.isFinite(h))n.push({path:c,message:`"${c}" needs a number from ${r.min} to ${r.max}. I used ${r.d}.`}),h=r.d;else if(h<r.min||h>r.max){const u=Math.min(r.max,Math.max(r.min,h));n.push({path:c,message:`"${c}" goes from ${r.min} to ${r.max}. I changed ${ps(l)} to ${u}.`}),h=u}s[o]=Math.round(h*1e3)/1e3}else if(r.t==="opt")if(l==null)s[o]=r.d;else if(typeof l=="string"&&r.table[l.trim().toLowerCase()])s[o]=l.trim().toLowerCase();else{const h=typeof l=="string"?Ks(l,Object.keys(r.table)):null;h&&r.table[h]&&h===String(l).toLowerCase().replace(/[\s_]+/g,"-")?s[o]=h:(s[o]=r.d,n.push({path:c,message:h?`I don't know ${ps(l)} for "${c}". Did you mean "${h}"? I used "${r.d}".`:`I don't know ${ps(l)} for "${c}". I used "${r.d}".`}))}else if(r.t==="color")if(l==null||r.auto&&(l===""||l==="auto"))s[o]=l==null?r.d:"";else{const h=Eh(l,r.palette);h?s[o]=h.hex:(s[o]=r.d,n.push({path:c,message:`${ps(l)} is not a color I know. Try a name like "teal" or a hex code like "#33ccff".`}))}else if(r.t==="list"){const h=Array.isArray(l)?l:l==null?[]:[l],u=[];for(const f of h){const p=typeof f=="string"?f.trim().toLowerCase():"";if(r.table[p])!u.includes(p)&&u.length<r.max&&u.push(p);else{const g=typeof f=="string"?Ks(f,Object.keys(r.table)):null;n.push({path:c,message:g?`I don't know ${ps(f)} in "${c}". Did you mean "${g}"?`:`I don't know ${ps(f)} in "${c}". I skipped it.`})}}h.length>r.max&&n.push({path:c,message:`"${c}" holds up to ${r.max} items. I kept the first ${r.max}.`}),s[o]=u}else if(r.t==="text")if(l==null)s[o]=r.d;else{const h=String(typeof l=="string"||typeof l=="number"?l:"").replace(/[^\p{L}\p{N} '!?.,-]/gu,"").trim();h.length>r.max&&n.push({path:c,message:`"${c}" can be ${r.max} characters long. I shortened it.`}),s[o]=h.slice(0,r.max)}else l==null?s[o]=r.d:typeof l=="boolean"?s[o]=l:l==="true"||l==="false"?s[o]=l==="true":(s[o]=r.d,n.push({path:c,message:`"${c}" needs true or false. I used ${r.d}.`}))}return s}function Ah(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Th(i,e,t=["menu","code","secret"]){const n={},s=a=>a[Math.floor(e()*a.length)];for(const[a,o]of Object.entries(i))if(o.t==="num"){const r=Math.round((o.min+(o.max-o.min)*e())*100)/100;n[a]=!o.tier||t.includes(o.tier)?r:o.d}else if(o.t==="opt"){const r=Object.values(o.table).filter(l=>t.includes(l.tier)).map(l=>l.id);n[a]=r.length?s(r):o.d}else if(o.t==="color"){const r=o.palette==="any"?Yi.fabric:Yi[o.palette];n[a]=o.auto&&e()<.6?"":t.includes("code")&&e()<.2?`#${Math.floor(e()*16777215).toString(16).padStart(6,"0")}`:s(Object.values(r))}else if(o.t==="list"){const r=Object.values(o.table).filter(h=>t.includes(h.tier)).map(h=>h.id),l=Math.floor(e()*Math.min(o.max,2.2)),c=[];for(let h=0;h<l&&r.length;h++){const u=s(r);c.includes(u)||c.push(u)}n[a]=c}else if(o.t==="text")n[a]=o.d;else{const r=e()<.5;n[a]=!o.tier||t.includes(o.tier)?r:o.d}return n}const Dt=(i,e,t)=>({min:i,max:e,desc:t}),l0=(i,e)=>({[`arm${i}.raise`]:Dt(-30,180,`Lifts the ${e} arm out to the side. 180 points straight up.`),[`arm${i}.swing`]:Dt(-90,180,`Swings the ${e} arm forward. Negative swings it back.`),[`arm${i}.twist`]:Dt(-90,90,`Rolls the ${e} arm.`),[`arm${i}.bend`]:Dt(0,150,`Bends the ${e} elbow.`),[`hand${i}.bend`]:Dt(-60,60,`Bends the ${e} wrist.`),[`leg${i}.raise`]:Dt(-60,100,`Lifts the ${e} leg forward. Negative kicks back.`),[`leg${i}.out`]:Dt(-15,60,`Moves the ${e} leg out to the side.`),[`leg${i}.bend`]:Dt(0,140,`Bends the ${e} knee.`),[`foot${i}.point`]:Dt(-40,50,`Points the ${e} toes down.`)}),co={"root.x":Dt(-1,1,"Slides left or right."),"root.y":Dt(-.3,1.2,"Moves up. Use it to jump or float."),"root.z":Dt(-.6,.6,"Steps forward or back."),"root.turn":Dt(-720,720,"Spins the whole body."),"root.tilt":Dt(-45,45,"Leans the whole body to one side."),"root.pitch":Dt(-360,360,"Flips the whole body forward or back."),"root.squash":Dt(.6,1.4,"Squashes below 1 and stretches above 1."),"hips.sway":Dt(-30,30,"Swings the hips side to side."),"hips.twist":Dt(-45,45,"Twists the hips."),"spine.bend":Dt(-30,80,"Bends forward. Negative leans back."),"spine.lean":Dt(-35,35,"Leans the chest to one side."),"spine.twist":Dt(-60,60,"Twists the chest."),"head.nod":Dt(-40,40,"Nods down. Negative looks up."),"head.turn":Dt(-70,70,"Turns the head."),"head.tilt":Dt(-35,35,"Tips the head toward a shoulder."),...l0("L","left"),...l0("R","right"),"face.smile":Dt(-1,1,"Smiles. Negative frowns."),"face.mouth":Dt(0,1,"Opens the mouth."),"face.eyes":Dt(0,1.3,"Opens the eyes. 0 is closed."),"face.brows":Dt(-1,1,"Raises the eyebrows."),"face.anger":Dt(0,1,"Pulls the brows down in the middle."),"face.sad":Dt(0,1,"Lifts the brows in the middle."),"face.lookX":Dt(-1,1,"Looks left or right."),"face.lookY":Dt(-1,1,"Looks up or down.")},al=["linear","in","out","in-out","bounce","elastic","back","hold"],Vs=32,ol=16;function Rh(i,e,t){if(!i||typeof i!="object"||Array.isArray(i))return t.push({path:e,message:`"${e}" should be an animation with frames.`}),null;const n=i;let s=typeof n.duration=="number"&&Number.isFinite(n.duration)?n.duration:1.5;(s<.2||s>12)&&(t.push({path:`${e}.duration`,message:`An animation lasts from 0.2 to 12 seconds. I fixed "${e}".`}),s=Math.min(12,Math.max(.2,s)));let a=n.loop===!0?0:typeof n.loop=="number"&&Number.isFinite(n.loop)?Math.max(0,Math.min(20,Math.round(n.loop))):1;n.loop===!1&&(a=1);const o=Array.isArray(n.frames)?n.frames:[];Array.isArray(n.frames)||t.push({path:`${e}.frames`,message:`"${e}" needs a list of frames.`}),o.length>Vs&&t.push({path:`${e}.frames`,message:`An animation holds up to ${Vs} frames. I kept the first ${Vs}.`});const r=[];for(const l of o.slice(0,Vs)){if(!l||typeof l!="object")continue;const c=l;let h=typeof c.at=="number"&&Number.isFinite(c.at)?c.at:r.length===0?0:100;h=Math.min(100,Math.max(0,h));const u=al.includes(c.ease)?c.ease:"in-out";c.ease!==void 0&&u!==c.ease&&t.push({path:`${e}.frames`,message:`I don't know that ease. Try one of: ${al.join(", ")}.`});const f={},p=c.pose&&typeof c.pose=="object"?c.pose:{};for(const[g,x]of Object.entries(p)){const d=co[g];if(!d){const b=Ks(g,Object.keys(co));t.push({path:`${e}.frames`,message:b?`"${g}" is not a channel. Did you mean "${b}"?`:`"${g}" is not a channel. I skipped it.`});continue}const m=typeof x=="number"?x:Number(x);if(!Number.isFinite(m)){t.push({path:`${e}.frames`,message:`"${g}" needs a number.`});continue}const M=Math.min(d.max,Math.max(d.min,m));M!==m&&t.push({path:`${e}.frames`,message:`"${g}" goes from ${d.min} to ${d.max}. I changed ${m} to ${M}.`}),f[g]=M}r.push({at:h,ease:u,pose:f})}return r.sort((l,c)=>l.at-c.at),r.length===0?(t.push({path:e,message:`"${e}" has no frames, so I skipped it.`}),null):{duration:Math.round(s*100)/100,loop:a,frames:r}}const qt=(i,e,t=1)=>({duration:i,loop:t,frames:e.map(([n,s,a])=>({at:n,pose:s,ease:a??"in-out"}))}),Ve=(i,e)=>({[`armL.${i}`]:e,[`armR.${i}`]:e}),dt=(i,e)=>({[`legL.${i}`]:e,[`legR.${i}`]:e}),ms={"armR.raise":150,"armR.bend":35,"head.tilt":-6,"face.smile":.7,"face.brows":.4,"spine.lean":-3},Bs={...dt("raise",38),...dt("bend",76),"spine.bend":18,...Ve("swing",-30),...Ve("bend",30)},Ga={...Ve("raise",165),...Ve("bend",12),"face.smile":1,"face.mouth":.7,"face.brows":.7},u2={wave:qt(2.2,[[0,{}],[16,ms,"out"],[30,{...ms,"armR.raise":128,"armR.bend":55}],[44,ms],[58,{...ms,"armR.raise":128,"armR.bend":55}],[72,ms],[84,ms],[100,{}]]),cheer:qt(2,[[0,{}],[10,{...Bs,"face.smile":.6},"out"],[28,{...Ga,"root.y":.16},"out"],[44,{...Ga,...dt("bend",14),...dt("raise",7)},"in"],[60,{...Ga,"root.y":.1},"out"],[76,{...Ga,...dt("bend",12),...dt("raise",6)},"in"],[100,{}]]),jump:qt(1.4,[[0,{}],[22,{...Bs,"root.squash":.92},"out"],[45,{"root.y":.5,...Ve("raise",150),...dt("bend",30),"root.squash":1.08,"face.smile":1,"face.mouth":.6},"out"],[70,{...dt("raise",30),...dt("bend",60),"spine.bend":10,...Ve("raise",40),"root.squash":.9},"in"],[100,{},"out"]]),dance:qt(2.6,[[0,{}],[12.5,{"hips.sway":12,"spine.lean":-9,"head.tilt":7,"armL.swing":35,"armL.bend":85,"armR.swing":-15,"armR.bend":60,...dt("raise",12),...dt("bend",24),"face.smile":.8}],[25,{"hips.sway":4,"armL.swing":15,"armL.bend":70,"armR.swing":10,"armR.bend":70,"face.smile":.8}],[37.5,{"hips.sway":-12,"spine.lean":9,"head.tilt":-7,"armR.swing":35,"armR.bend":85,"armL.swing":-15,"armL.bend":60,...dt("raise",12),...dt("bend",24),"face.smile":.8}],[50,{"hips.sway":-4,"armL.swing":10,"armL.bend":70,"armR.swing":15,"armR.bend":70,"face.smile":.8}],[62.5,{"hips.sway":12,"spine.lean":-9,"spine.twist":14,...Ve("raise",70),...Ve("bend",70),...dt("raise",12),...dt("bend",24),"face.smile":1,"face.mouth":.4}],[75,{"hips.sway":0,...Ve("raise",120),...Ve("bend",30),"root.y":.06,"face.smile":1,"face.mouth":.5}],[87.5,{"hips.sway":-12,"spine.lean":9,"spine.twist":-14,...Ve("raise",70),...Ve("bend",70),...dt("raise",12),...dt("bend",24),"face.smile":1}],[100,{}]],2),clap:qt(1.8,(()=>{const i={...Ve("swing",62),...Ve("raise",-4),...Ve("bend",62),...Ve("twist",20),"face.smile":.8},e={...i,...Ve("raise",12),...Ve("bend",50)},t=[[0,{}],[14,e,"out"]];for(let n=0;n<5;n++)t.push([22+n*13,i,"in"]),t.push([28+n*13,e,"out"]);return t.push([100,{}]),t})()),bow:qt(2.2,[[0,{}],[30,{"spine.bend":58,"head.nod":18,...Ve("swing",12),...Ve("raise",12),"face.eyes":.1}],[62,{"spine.bend":58,"head.nod":18,...Ve("swing",12),...Ve("raise",12),"face.eyes":.1}],[100,{}]]),nod:qt(1.2,[[0,{}],[20,{"head.nod":20,"face.smile":.4}],[42,{"head.nod":-4}],[64,{"head.nod":18,"face.smile":.4}],[100,{}]]),"shake-head":qt(1.5,[[0,{}],[16,{"head.turn":28}],[38,{"head.turn":-28}],[60,{"head.turn":24}],[80,{"head.turn":-16}],[100,{}]]),shrug:qt(1.8,[[0,{}],[28,{...Ve("raise",32),...Ve("bend",75),...Ve("twist",-55),"head.tilt":10,"face.brows":.9,"face.smile":-.2,"spine.bend":-4},"out"],[66,{...Ve("raise",32),...Ve("bend",75),...Ve("twist",-55),"head.tilt":10,"face.brows":.9,"face.smile":-.2,"spine.bend":-4}],[100,{}]]),think:qt(3,[[0,{}],[20,{"armR.swing":48,"armR.bend":138,"armR.raise":4,"armL.swing":30,"armL.bend":95,"armL.raise":-12,"head.tilt":-8,"head.nod":6,"face.lookX":-.6,"face.lookY":.7,"face.brows":.5,"face.smile":-.1}],[50,{"armR.swing":48,"armR.bend":132,"armR.raise":4,"armL.swing":30,"armL.bend":95,"armL.raise":-12,"head.tilt":-4,"head.nod":3,"face.lookX":.5,"face.lookY":.6,"face.brows":.2}],[80,{"armR.swing":48,"armR.bend":138,"armR.raise":4,"armL.swing":30,"armL.bend":95,"armL.raise":-12,"head.tilt":-8,"head.nod":6,"face.lookX":-.4,"face.lookY":.7,"face.brows":.6,"face.smile":.4}],[100,{}]]),laugh:qt(2,(()=>{const i={"spine.bend":-12,"head.nod":-14,"face.mouth":.95,"face.eyes":.12,"face.smile":1,...Ve("raise",22),...Ve("bend",30),"root.squash":1.03},e={...i,"spine.bend":4,"head.nod":-4,"root.squash":.97,"face.mouth":.7},t=[[0,{}],[12,i,"out"]];for(let n=0;n<5;n++)t.push([20+n*13,e]),t.push([26+n*13,i]);return t.push([100,{}]),t})()),flex:qt(2.4,[[0,{}],[24,{...Ve("raise",92),...Ve("twist",-90),...Ve("bend",115),"spine.bend":-6,"face.smile":.7,"face.anger":.4},"back"],[44,{...Ve("raise",96),...Ve("twist",-90),...Ve("bend",132),"spine.bend":-8,"face.smile":.9,"face.anger":.4}],[58,{...Ve("raise",92),...Ve("twist",-90),...Ve("bend",115),"spine.bend":-6,"face.smile":.7}],[72,{...Ve("raise",96),...Ve("twist",-90),...Ve("bend",132),"spine.bend":-8,"face.smile":.9}],[100,{}]]),spin:qt(1.3,[[0,{}],[15,{...dt("raise",14),...dt("bend",28),"root.turn":-30,...Ve("raise",30)},"out"],[70,{"root.turn":360,"root.y":.08,...Ve("raise",70),"face.smile":.9},"in-out"],[85,{"root.turn":360,...dt("raise",10),...dt("bend",20),...Ve("raise",35)}],[100,{"root.turn":360}]]),"robot-dance":qt(3.2,[[0,{}],[10,{"armR.swing":90,"armR.bend":90,"armR.twist":-90,"head.turn":30},"hold"],[22,{"armR.swing":90,"armR.bend":0,"armL.swing":90,"armL.bend":90,"armL.twist":-90,"head.turn":-30},"hold"],[34,{...Ve("swing",90),...Ve("bend",90),"spine.twist":30,"head.turn":0},"hold"],[46,{...Ve("swing",90),...Ve("bend",90),"spine.twist":-30,"head.tilt":15},"hold"],[58,{"armR.raise":90,"armR.bend":90,"armR.twist":-90,"armL.raise":90,"armL.bend":90,"armL.twist":90,"spine.lean":12},"hold"],[70,{"armR.raise":90,"armR.bend":90,"armR.twist":90,"armL.raise":90,"armL.bend":90,"armL.twist":-90,"spine.lean":-12},"hold"],[82,{"spine.bend":30,...Ve("swing",20),"head.nod":30},"hold"],[92,{"spine.bend":0,"head.nod":0},"hold"],[100,{},"out"]]),disco:qt(2.4,(()=>{const i={"armR.raise":150,"armR.swing":20,"armL.raise":28,"armL.bend":80,"armL.twist":-60,"hips.sway":-12,"spine.lean":8,"head.turn":-12,"face.smile":.9,"legL.out":8},e={"armR.raise":-22,"armR.swing":45,"armR.bend":10,"armL.raise":28,"armL.bend":80,"armL.twist":-60,"hips.sway":12,"spine.lean":-8,"spine.twist":18,"head.turn":14,"face.smile":.9,"legL.out":8};return[[0,{}],[14,i,"out"],[32,e],[50,i],[68,e],[86,i],[100,{}]]})()),salute:qt(2,[[0,{}],[22,{"armR.raise":78,"armR.bend":128,"armR.swing":18,"spine.bend":-5,"face.smile":.2,"face.brows":-.2},"back"],[70,{"armR.raise":78,"armR.bend":128,"armR.swing":18,"spine.bend":-5,"face.smile":.2,"face.brows":-.2}],[100,{}]]),facepalm:qt(2.6,[[0,{}],[22,{"armR.swing":78,"armR.bend":142,"armR.raise":-6,"head.nod":22,"face.eyes":.05,"face.smile":-.3,"spine.bend":8}],[45,{"armR.swing":78,"armR.bend":142,"armR.raise":-6,"head.nod":22,"head.turn":8,"face.eyes":.05,"face.smile":-.3,"spine.bend":8}],[62,{"armR.swing":78,"armR.bend":142,"armR.raise":-6,"head.nod":22,"head.turn":-8,"face.eyes":.05,"face.smile":-.3,"spine.bend":8}],[78,{"armR.swing":78,"armR.bend":142,"armR.raise":-6,"head.nod":22,"face.eyes":.05,"spine.bend":8}],[100,{}]]),sleep:qt(4,[[0,{}],[15,{"head.nod":26,"head.tilt":10,"face.eyes":.02,"spine.bend":9,"face.smile":.1}],[35,{"head.nod":22,"head.tilt":10,"face.eyes":.02,"spine.bend":6,"face.mouth":.25}],[55,{"head.nod":28,"head.tilt":11,"face.eyes":.02,"spine.bend":10}],[75,{"head.nod":22,"head.tilt":10,"face.eyes":.02,"spine.bend":6,"face.mouth":.25}],[86,{"head.nod":-6,"face.eyes":1.25,"face.brows":.9},"back"],[100,{}]]),backflip:qt(1.7,[[0,{}],[20,{...Bs,"root.squash":.9},"out"],[38,{"root.y":.55,"root.pitch":-90,...dt("raise",80),...dt("bend",115),...Ve("raise",150),"face.mouth":.6},"out"],[56,{"root.y":.7,"root.pitch":-230,...dt("raise",90),...dt("bend",120),...Ve("swing",60),...Ve("bend",60)},"linear"],[74,{"root.y":.3,"root.pitch":-345,...dt("raise",30),...dt("bend",40),...Ve("raise",60)},"in"],[86,{"root.pitch":-360,...Bs,"root.squash":.88},"out"],[100,{"root.pitch":-360,"face.smile":1}]]),levitate:qt(4,[[0,{}],[20,{"root.y":.32,...Ve("raise",38),...Ve("twist",-40),...dt("raise",8),...dt("bend",16),"footL.point":40,"footR.point":40,"face.eyes":.05,"head.nod":-8,"face.smile":.3}],[40,{"root.y":.38,...Ve("raise",42),...Ve("twist",-40),...dt("raise",10),...dt("bend",20),"footL.point":40,"footR.point":40,"face.eyes":.05,"head.nod":-10,"face.smile":.3}],[60,{"root.y":.32,...Ve("raise",38),...Ve("twist",-40),...dt("raise",8),...dt("bend",16),"footL.point":40,"footR.point":40,"face.eyes":.05,"head.nod":-8,"face.smile":.3}],[80,{"root.y":.38,...Ve("raise",42),...Ve("twist",-40),...dt("raise",10),...dt("bend",20),"footL.point":40,"footR.point":40,"face.eyes":.05,"head.nod":-10}],[100,{}]]),glide:qt(2.8,[[0,{}],[10,{"root.tilt":10,"legL.out":16,"armL.raise":60,"armR.raise":30}],[35,{"root.x":.45,"root.tilt":12,"legL.out":18,"legR.bend":20,"legR.raise":10,"armL.raise":70,"armR.raise":25,"face.smile":.8}],[50,{"root.x":.45,"root.tilt":-10,"legR.out":16,"armR.raise":60,"armL.raise":30}],[80,{"root.x":-.3,"root.tilt":-12,"legR.out":18,"legL.bend":20,"legL.raise":10,"armR.raise":70,"armL.raise":25,"face.smile":.8}],[100,{}]]),"victory-spin":qt(2.6,[[0,{}],[12,{...Bs,"root.squash":.9,"face.smile":.8},"out"],[36,{"root.y":.55,"root.turn":400,...Ve("raise",165),...dt("bend",35),"face.smile":1,"face.mouth":.8,"root.squash":1.08},"out"],[54,{"root.y":0,"root.turn":720,...dt("raise",28),...dt("bend",56),...Ve("raise",90),"root.squash":.9},"in"],[66,{"root.turn":720,"armR.raise":160,"armL.raise":35,"armL.bend":95,"armL.twist":-60,"hips.sway":8,"face.smile":1,"face.mouth":.6,"head.tilt":-6},"back"],[88,{"root.turn":720,"armR.raise":160,"armL.raise":35,"armL.bend":95,"armL.twist":-60,"hips.sway":8,"face.smile":1,"face.mouth":.4,"head.tilt":-6}],[100,{"root.turn":720}]])},c0={head:qt(.9,[[0,{}],[22,{"head.nod":-8,"head.tilt":9,"face.eyes":1.25,"face.brows":.9,"face.mouth":.35,"root.squash":1.04},"back"],[60,{"head.tilt":-5,"face.smile":.9,"face.eyes":.3}],[100,{}]]),body:qt(.9,[[0,{}],[20,{"root.squash":.94,"spine.bend":8,"face.mouth":.6,"face.eyes":.2,"face.smile":1,...Ve("raise",30)},"out"],[50,{"root.squash":1.05,"spine.bend":-6,"face.mouth":.8,"face.smile":1},"back"],[100,{}]]),arm:qt(.8,[[0,{}],[30,{"spine.lean":8,"head.turn":20,"face.brows":.6,"face.smile":.5},"back"],[100,{}]]),legs:qt(.8,[[0,{}],[20,{...dt("raise",22),...dt("bend",44)},"out"],[50,{"root.y":.18,...dt("bend",30),...Ve("raise",45),"face.brows":.8,"face.mouth":.4},"out"],[80,{...dt("raise",12),...dt("bend",24)},"in"],[100,{}]])},nn=Math.PI/180,p2={linear:i=>i,in:i=>i*i,out:i=>1-(1-i)*(1-i),"in-out":i=>i*i*(3-2*i),bounce:i=>i<1/2.75?7.5625*i*i:i<2/2.75?(i-=1.5/2.75,7.5625*i*i+.75):i<2.5/2.75?(i-=2.25/2.75,7.5625*i*i+.9375):(i-=2.625/2.75,7.5625*i*i+.984375),elastic:i=>i===0||i===1?i:Math.pow(2,-10*i)*Math.sin((i*10-.75)*(2*Math.PI/3))+1,back:i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),hold:i=>i<1?0:1},ar={"root.squash":1,"face.eyes":1};function m2(i,e,t,n){const s=i.frames,a=new Set;for(const o of s)for(const r of Object.keys(o.pose))a.add(r);for(const o of a){let r=s[0],l=s[s.length-1];for(let g=0;g<s.length;g++)if(s[g].at<=e&&(r=s[g]),s[g].at>=e){l=s[g];break}const c=n(o),h=r.pose[o]??c,u=l.pose[o]??c,f=l.at-r.at,p=f<=0?1:p2[l.ease]((e-r.at)/f);t[o]=h+(u-h)*p}}const h0={relaxed:{"spine.bend":2,"head.nod":0},upright:{"spine.bend":-3,"head.nod":2},heroic:{"spine.bend":-7,"head.nod":4,"legL.out":7,"legR.out":7,"armL.raise":6,"armR.raise":6},slouch:{"spine.bend":12,"head.nod":-8,"armL.swing":6,"armR.swing":6},bouncy:{"spine.bend":-2,"footL.point":6,"footR.point":6}},f0={chill:{},bouncy:{},shy:{"armL.raise":-6,"armR.raise":-6,"armL.swing":14,"armR.swing":14,"armL.bend":22,"armR.bend":22,"head.nod":8,"head.tilt":6,"legR.out":-3},heroic:{"armL.raise":42,"armR.raise":42,"armL.bend":96,"armR.bend":96,"armL.twist":62,"armR.twist":62,"armL.swing":-14,"armR.swing":-14,"legL.out":8,"legR.out":8,"spine.bend":-6},cool:{"armL.swing":38,"armR.swing":34,"armL.bend":104,"armR.bend":112,"armL.raise":-14,"armR.raise":-16,"armL.twist":30,"armR.twist":30,"spine.bend":-4,"head.tilt":5,"hips.sway":5},floaty:{"root.y":.14,"footL.point":35,"footR.point":35,"legL.bend":10,"legR.bend":16,"legR.raise":8,"armL.raise":24,"armR.raise":24}},Ch=i=>i==="armL.raise"||i==="armR.raise",d0=i=>i.startsWith("face.")||i==="root.squash"||Ch(i),Va=new hi,Wa=new hi,u0=new hi,gs=new ie(1,0,0),p0=new ie(0,0,1),or=new ie,m0=new ie;class g2{constructor(e){this.ch=e}ch;reducedMotion=!1;pointer=new _t;yaw=0;playing=[];pose={};tmp={};t=Math.random()*10;blinkAt=1.5;blink=0;gaze=new _t;glance=new _t;glanceAt=3;version=-1;restRaise=10;groundY=0;faceOverride={};get busy(){return this.playing.some(e=>!e.out)}play(e){const t=this.ch.look?.animations[e]??u2[e];return t?this.animate(t,e):Promise.resolve()}react(e){const t=c0[e]??c0.body;return this.animate(t,`react-${e}`)}animate(e,t="custom"){for(const n of this.playing)n.out=!0;return new Promise(n=>{this.playing.push({spec:e,t:0,loops:0,weight:0,out:!1,resolve:n,name:t})})}stop(){for(const e of this.playing)e.out=!0}setFace(e){this.faceOverride=e}update(e){const t=this.ch;if(!t.rig)return;t.version!==this.version&&this.rebind(),this.t+=e;const n=this.t,s=t.look,a=t.dims,o=this.reducedMotion?0:.4+s.motion.energy*1.2,r=this.pose;for(const d of Object.keys(r))delete r[d];r["armL.raise"]=this.restRaise,r["armR.raise"]=this.restRaise,r["armL.bend"]=8,r["armR.bend"]=8,r["root.squash"]=1;const l=(d,m=1)=>{for(const M in d)r[M]=(r[M]??0)+d[M]*m};l(h0[s.body.posture]??h0.relaxed);const c=f0[s.motion.idle]??f0.chill;for(const d in c)r[d]=Ch(d)?c[d]>=20?c[d]:this.restRaise+c[d]:(r[d]??0)+c[d];const h=Math.sin(n*1.7);l({"spine.bend":h*.9*o,"armL.raise":h*.8*o,"armR.raise":h*.8*o,"head.nod":-h*.6*o});const u=Math.sin(n*.43)+.5*Math.sin(n*.17+1.3);if(l({"hips.sway":u*2.4*o,"spine.lean":-u*1.8*o,"head.tilt":u*1.1*o,"spine.twist":Math.sin(n*.31)*2*o,"armL.swing":Math.sin(n*.5+1)*2.5*o,"armR.swing":Math.sin(n*.5+2.4)*2.5*o}),s.motion.idle==="bouncy"||s.body.posture==="bouncy"){const d=Math.abs(Math.sin(n*3.2));l({"legL.raise":d*7*o,"legR.raise":d*7*o,"legL.bend":d*14*o,"legR.bend":d*14*o,"armL.raise":d*3,"armR.raise":d*3})}s.motion.idle==="floaty"&&l({"root.y":Math.sin(n*1.3)*.035*(this.reducedMotion?0:1),"root.tilt":Math.sin(n*.7)*2*o}),n>this.glanceAt&&(this.glanceAt=n+2+Math.random()*4,this.glance.set((Math.random()-.5)*.9,(Math.random()-.5)*.4),Math.random()<.5&&this.glance.set(0,0));const f=s.motion.lookAtMouse,p=f?this.pointer.x:this.glance.x,g=f?this.pointer.y:this.glance.y;this.gaze.x+=(p-this.gaze.x)*Math.min(1,e*7),this.gaze.y+=(g-this.gaze.y)*Math.min(1,e*7),l({"head.turn":this.gaze.x*14*(this.reducedMotion?.3:1),"head.nod":-this.gaze.y*9*(this.reducedMotion?.3:1)}),r["face.lookX"]=this.gaze.x*.85,r["face.lookY"]=this.gaze.y*.7;const x=J1(s);if(r["face.eyes"]=x.open,r["face.smile"]=x.smile,r["face.brows"]=x.brow,r["face.anger"]=x.anger,r["face.squint"]=x.squint,r["face.mouth"]=0,r["face.sad"]=0,n>this.blinkAt&&(this.blink=.16,this.blinkAt=n+1.8+Math.random()*3.6+(Math.random()<.15?-1.5:0)),this.blink>0){this.blink-=e;const d=Math.sin(Math.max(0,this.blink/.16)*Math.PI);r["face.eyes"]=r["face.eyes"]*(1-d)}for(const d of this.playing){d.weight=Math.min(1,Math.max(0,d.weight+(d.out?-e:e)/.16)),d.t+=e;let m=d.t/d.spec.duration*100;m>=100&&(d.loops++,d.spec.loop===0||d.loops<d.spec.loop?(d.t-=d.spec.duration,m-=100):(m=100,d.out||(d.out=!0)));const M=this.tmp;for(const v of Object.keys(M))delete M[v];m2(d.spec,Math.min(100,m),M,v=>d0(v)?r[v]??ar[v]??0:0);const b=d.weight*d.weight*(3-2*d.weight);for(const v in M){let R=M[v];if(this.reducedMotion&&!v.startsWith("face.")){if(v.startsWith("root."))continue;R*=.35}const S=r[v]??ar[v]??0,_=d0(v)?R:S+R;r[v]=S+(_-S)*b}}for(let d=this.playing.length-1;d>=0;d--){const m=this.playing[d];m.out&&m.weight<=0&&(this.playing.splice(d,1),m.resolve?.())}for(const d in this.faceOverride)r[d]=this.faceOverride[d];this.apply(r,a.armAngle/nn)}rebind(){const e=this.ch,t=e.dims;this.version=e.version;const n=t.upperArm+t.foreArm,a=(t.hipR[0]+e.body.layer+.035+(e.body.skirtHem!==null?.03:0)+t.armR[2]-t.joints.armL[0])/n;this.restRaise=Math.min(30,Math.max(7,Math.asin(Math.min(.6,Math.max(-.2,a)))/nn+3)),this.groundY=0}apply(e,t){const n=this.ch,s=n.rig.byName,a=n.rig.rest,o=d=>{const m=co[d],M=e[d]??ar[d]??0;return m?Math.min(m.max,Math.max(m.min,M)):M},r=(d,m,M,b)=>d.quaternion.setFromEuler(new ei(m*nn,M*nn,b*nn,"YXZ"));r(s.hips,0,o("hips.twist"),o("hips.sway")),r(s.spine,o("spine.bend")*.5,o("spine.twist")*.5-o("hips.twist")*.5,o("spine.lean")*.5-o("hips.sway")*.7),r(s.chest,o("spine.bend")*.5,o("spine.twist")*.5,o("spine.lean")*.5-o("hips.sway")*.3),r(s.neck,o("head.nod")*.3,o("head.turn")*.35,o("head.tilt")*.3),r(s.head,o("head.nod")*.7,o("head.turn")*.65,o("head.tilt")*.7);for(const d of["L","R"]){const m=d==="L"?1:-1,M=s[`arm${d}`],b=s[`fore${d}`],v=s[`hand${d}`];m0.set(m*Math.sin(t*nn),-Math.cos(t*nn),0),Va.setFromAxisAngle(m0,o(`arm${d}.twist`)*nn*m),Wa.setFromAxisAngle(p0,m*(o(`arm${d}.raise`)-t)*nn),u0.setFromAxisAngle(gs,-o(`arm${d}.swing`)*nn),M.quaternion.copy(u0).multiply(Wa).multiply(Va),b.quaternion.setFromAxisAngle(gs,-o(`arm${d}.bend`)*nn),v.quaternion.setFromAxisAngle(gs,-o(`hand${d}.bend`)*nn);const R=s[`leg${d}`],S=s[`shin${d}`],_=s[`foot${d}`];Va.setFromAxisAngle(gs,-o(`leg${d}.raise`)*nn),Wa.setFromAxisAngle(p0,m*o(`leg${d}.out`)*nn),R.quaternion.copy(Va).multiply(Wa),S.quaternion.setFromAxisAngle(gs,o(`leg${d}.bend`)*nn);const T=(e["root.y"]??0)>.05?.3:1;_.quaternion.setFromAxisAngle(gs,(o(`foot${d}.point`)+(o(`leg${d}.raise`)-o(`leg${d}.bend`))*T)*nn)}const l=s.root,c=o("root.squash");l.scale.set(1/Math.sqrt(c),c,1/Math.sqrt(c)),l.quaternion.setFromEuler(new ei(o("root.pitch")*nn,o("root.turn")*nn+this.yaw,o("root.tilt")*nn,"YXZ"));const h=o("root.pitch")*nn,u=n.dims.hipY;l.position.set(a[0].x+o("root.x"),0,a[0].z+o("root.z")),Math.abs(h)>.001&&(l.position.y+=u-u*Math.cos(h),l.position.z+=u*Math.sin(h)*-1),l.updateMatrixWorld(!0);let f=1/0;for(const d of["footL","footR"])s[d].getWorldPosition(or),n.group.worldToLocal(or),f=Math.min(f,or.y);const p=n.dims.ankleY*c,g=Math.abs(h)>.2?0:p-f;this.groundY+=(g-this.groundY)*.6,l.position.y+=this.groundY+Math.max(o("root.y"),-.3);const x=n.faceU;x.uExpr.value.set(Math.max(0,o("face.eyes")),o("face.smile"),o("face.mouth"),e["face.squint"]??0),x.uBrowAnim.value.set(o("face.brows"),o("face.anger"),o("face.sad"),Math.max(0,o("face.eyes")-1)),x.uGaze.value.set(o("face.lookX"),o("face.lookY"))}}const x2=["rise","fall","orbit","float","burst","spark"],v2=["dot","star","heart","ring","flake","note","glyph","petal","confetti","flame"],_2=`
attribute vec4 aSeed;
uniform float uTime; uniform float uSize; uniform float uPx; uniform vec3 uBox; uniform float uSpeed; uniform int uMode; uniform float uBurst; uniform float uStill;
varying vec4 vSeed; varying float vFade;
void main(){
  vSeed = aSeed;
  float t = uTime * uSpeed * (1. - uStill) + uStill * 3.;
  vec3 p; vFade = 1.;
  float a = aSeed.x * 6.2831853;
  float r = sqrt(aSeed.z);
  if (uMode == 0) { float k = fract(aSeed.y + t * (.25 + aSeed.w * .3)); p = vec3(cos(a) * r * uBox.x + sin(t * 1.3 + a) * .04, k * uBox.y, sin(a) * r * uBox.z + cos(t * 1.1 + a * 2.) * .04); vFade = sin(k * 3.14159); }
  else if (uMode == 1) { float k = fract(aSeed.y - t * (.18 + aSeed.w * .2)); p = vec3(cos(a) * r * uBox.x + sin(t + a * 3.) * .08, k * uBox.y, sin(a) * r * uBox.z + cos(t * .8 + a) * .08); vFade = smoothstep(0., .1, k) * smoothstep(1., .9, k); }
  else if (uMode == 2) { float an = a + t * (.6 + aSeed.w * .6); float rr = .55 + .45 * aSeed.z; p = vec3(cos(an) * rr * uBox.x, aSeed.y * uBox.y + sin(t * 1.7 + a) * .05, sin(an) * rr * uBox.z); vFade = .6 + .4 * sin(t * 3. + a * 5.); }
  else if (uMode == 3) { p = vec3(cos(a) * r * uBox.x + sin(t * .5 + a * 4.) * .15, aSeed.y * uBox.y + sin(t * .7 + a * 2.) * .12, sin(a) * r * uBox.z + cos(t * .4 + a * 3.) * .15); vFade = .5 + .5 * sin(t * 2. + aSeed.w * 40.); }
  else if (uMode == 4) { float bt = uBurst * (.6 + aSeed.w * .7); vec3 dir = normalize(vec3(cos(a) * r, .4 + aSeed.y * 1.2, sin(a) * r)); p = dir * bt * 2.4 * uBox.x * (.4 + aSeed.z) + vec3(0., uBox.y * .5 - 2.2 * bt * bt, 0.); vFade = smoothstep(1.6, .7, uBurst) * step(.001, uBurst); }
  else { float k = floor(t * 9. + aSeed.w * 10.); float a2 = fract(sin(k * 12.9898 + aSeed.x * 78.233) * 43758.5453) * 6.2831853; float h = fract(sin(k * 4.1 + aSeed.y * 91.7) * 9631.1); p = vec3(cos(a2) * uBox.x * (.7 + .3 * aSeed.z), h * uBox.y, sin(a2) * uBox.z * (.7 + .3 * aSeed.z)); vFade = step(.55, fract(t * 9. + aSeed.w * 10.)) ; }
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * (.55 + aSeed.w * .9) * uPx / max(-mv.z, .1);
}`,b2=`
uniform vec3 uColor; uniform vec3 uColor2; uniform int uShape; uniform float uOpacity; uniform float uRainbow; uniform float uTime;
varying vec4 vSeed; varying float vFade;
vec3 hue(float h){ return clamp(abs(fract(h + vec3(0., 2. / 3., 1. / 3.)) * 6. - 3.) - 1., 0., 1.); }
float sdHeart(vec2 p){ p.x = abs(p.x); p.y += .55; if (p.y + p.x > 1.) return sqrt(dot(p - vec2(.25, .75), p - vec2(.25, .75))) - sqrt(2.) / 4.;
  return sqrt(min(dot(p - vec2(0, 1), p - vec2(0, 1)), dot(p - .5 * max(p.x + p.y, 0.), p - .5 * max(p.x + p.y, 0.)))) * sign(p.x - p.y); }
void main(){
  vec2 q = gl_PointCoord * 2. - 1.; q.y = -q.y;
  float ang = vSeed.x * 6.28 + uTime * (vSeed.w - .5) * 2.;
  vec2 rq = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * q;
  float a = 0.; float r = length(q);
  if (uShape == 0) a = smoothstep(1., 0., r) * smoothstep(1., .2, r);
  else if (uShape == 1) { float s = max(0., 1. - abs(q.x) * abs(q.y) * 60.) * smoothstep(1., .1, r); a = s + smoothstep(.35, 0., r); }
  else if (uShape == 2) a = smoothstep(.04, -.04, sdHeart(q * 1.25 + vec2(0., .1)));
  else if (uShape == 3) a = smoothstep(.12, 0., abs(r - .8)) + smoothstep(.2, 0., length(q - vec2(-.35, .35))) * .8;
  else if (uShape == 4) { float arm = min(min(abs(rq.x), abs(rq.y)), min(abs(rq.x + rq.y), abs(rq.x - rq.y)) * .707); a = smoothstep(.1, 0., arm) * smoothstep(1., .7, r) + smoothstep(.25, 0., r); }
  else if (uShape == 5) { float head = smoothstep(.06, -.02, length((q - vec2(-.2, -.5)) * vec2(1., 1.3)) - .32); float stem = smoothstep(.07, .03, abs(q.x - .08)) * step(-.5, q.y) * step(q.y, .8); float flag = smoothstep(.08, .02, abs(q.y - .7 + (q.x - .08) * .6)) * step(.08, q.x) * step(q.x, .6); a = max(head, max(stem, flag)); }
  else if (uShape == 6) { float one = step(abs(q.x), .14) * step(abs(q.y), .75); float zero = smoothstep(.1, .04, abs(length(q * vec2(1.5, 1.)) - .62)); a = vSeed.z > .5 ? one : zero; }
  else if (uShape == 7) a = smoothstep(.05, -.05, length(rq * vec2(1., 2.)) - .8);
  else if (uShape == 8) a = step(abs(rq.x), .8) * step(abs(rq.y), .4 * abs(sin(uTime * 4. + vSeed.w * 30.)) + .08);
  else { a = smoothstep(1., 0., length(q * vec2(1.3, 1.) + vec2(0., .2 * (1. - q.y)))) ; a *= a; }
  vec3 c = mix(uColor, uColor2, step(.5, vSeed.z));
  if (uRainbow > .5) c = hue(vSeed.x + uTime * .1) * .9 + .1;
  gl_FragColor = vec4(c, a * vFade * uOpacity);
  if (gl_FragColor.a < .01) discard;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class eo{points;material;burstT=-1;constructor(e){const t=new Pn,n=new Float32Array(e.count*4);let s=1234567+e.count*31;const a=()=>(s=s*16807%2147483647,s/2147483647);for(let o=0;o<n.length;o++)n[o]=a();t.setAttribute("position",new yi(new Float32Array(e.count*3),3)),t.setAttribute("aSeed",new yi(n,4)),t.boundingSphere=new Qi(new ie(0,e.box[1]/2,0),Math.max(e.box[0],e.box[1],e.box[2])*3+1),this.material=new On({vertexShader:_2,fragmentShader:b2,transparent:!0,depthWrite:!1,blending:e.additive===!1?ys:Js,uniforms:{uTime:Fi.uTime,uSize:{value:e.size},uPx:{value:600},uBox:{value:new ie(...e.box)},uSpeed:{value:e.speed??1},uMode:{value:x2.indexOf(e.mode)},uShape:{value:v2.indexOf(e.shape)},uBurst:{value:0},uStill:{value:0},uColor:{value:new tt(e.color)},uColor2:{value:new tt(e.color2)},uOpacity:{value:e.opacity??1},uRainbow:{value:e.rainbow?1:0}}}),this.points=new eh(t,this.material),this.points.frustumCulled=!1,this.points.renderOrder=8,e.mode==="burst"&&(this.points.visible=!1)}update(e,t,n,s=!1){this.material.uniforms.uPx.value=t/(2*Math.tan(n.fov*Math.PI/360)),this.material.uniforms.uStill.value=s?1:0,this.burstT>=0&&(this.burstT+=e,this.material.uniforms.uBurst.value=this.burstT,this.burstT>1.7&&(this.burstT=-1,this.points.visible=!1))}burst(){this.burstT=.001,this.points.visible=!0}dispose(){this.points.geometry.dispose(),this.material.dispose()}}const ho={sparkles:{count:46,mode:"float",shape:"star",size:.07},hearts:{count:16,mode:"rise",shape:"heart",size:.075,additive:!1,speed:.7},bubbles:{count:22,mode:"rise",shape:"ring",size:.08,speed:.6},fireflies:{count:26,mode:"float",shape:"dot",size:.055,speed:.8},snow:{count:46,mode:"fall",shape:"flake",size:.05,speed:.8},stars:{count:14,mode:"orbit",shape:"star",size:.1},flames:{count:60,mode:"rise",shape:"flame",size:.12,speed:2.2,box:[.3,1.2,.3]},lightning:{count:26,mode:"spark",shape:"star",size:.1},rainbow:{count:60,mode:"orbit",shape:"dot",size:.07,rainbow:!0,speed:1.6},shadow:{count:46,mode:"rise",shape:"dot",size:.3,additive:!1,speed:.5,opacity:.35},notes:{count:12,mode:"rise",shape:"note",size:.09,additive:!1,speed:.6},"code-rain":{count:60,mode:"fall",shape:"glyph",size:.05,speed:1.6},petals:{count:30,mode:"fall",shape:"petal",size:.06,additive:!1,speed:.7},confetti:{count:50,mode:"fall",shape:"confetti",size:.05,additive:!1,speed:1.2,rainbow:!0}},rl=1,y2=ot({paint:["Paint","Smooth painted walls."],wallpaper:["Wallpaper","Soft stripes with small dots."],bricks:["Bricks","Exposed brick."],"wood-panel":["Wood panel","Warm wood boards."],tiles:["Tiles","Square tiles."],concrete:["Concrete","Smooth gray loft walls."],stripes:["Stripes","Bold stripes.","code"],checker:["Checker","A checkerboard.","code"],"polka-dots":["Polka dots","Round dots.","code"],stars:["Stars","Scattered stars.","code"],honeycomb:["Honeycomb","Six sided cells.","code"],waves:["Waves","Rolling wave lines.","code"],"neon-grid":["Neon grid","Glowing lines on dark walls.","secret"],clouds:["Clouds","Walls made of drifting sky.","secret"],galaxy:["Galaxy","Twinkling stars and clouds.","secret"],circuit:["Circuit","Glowing circuit lines.","secret"],matrix:["Matrix","Falling code.","secret"],lava:["Lava","Glowing cracks.","secret"]}),M2=ot({wood:["Wood","Wood planks."],tiles:["Tiles","Two color tiles."],carpet:["Carpet","Soft carpet."],marble:["Marble","Polished stone with veins."],concrete:["Concrete","Smooth and cool."],checker:["Checker","A checkerboard.","code"],grass:["Grass","An indoor lawn.","code"],honeycomb:["Honeycomb","Six sided cells.","code"],"neon-grid":["Neon grid","Glowing lines on a dark floor.","secret"],clouds:["Clouds","Walk on the sky.","secret"],water:["Water","A rippling pool.","secret"],lava:["Lava","The floor is lava.","secret"],galaxy:["Galaxy","Stars under your feet.","secret"]}),S2=ot({wide:["Wide","A long picture window."],square:["Square","A classic window with four panes."],arch:["Arch","A tall window with a round top."],round:["Round","A big circle."],panorama:["Panorama","Nearly the whole wall.","code"],hexagon:["Hexagon","Six sides.","code"],porthole:["Porthole","A ship window with a metal ring.","secret"],diamond:["Diamond","A tilted square.","secret"]}),w2=ot({none:["None","No curtains."],drapes:["Drapes","Heavy curtains pulled to the sides."],sheer:["Sheer","Light see through curtains."],valance:["Valance","A short band across the top."]}),E2=ot({"floating-islands":["Floating islands","Islands drift in the sky with waterfalls."],nebula:["Nebula","Glowing clouds of space dust."],"underwater-city":["Underwater city","Domes and fish beneath the sea."],"neon-skyline":["Neon skyline","A glowing city with flying cars."],"cloud-kingdom":["Cloud kingdom","Towers above a sea of clouds."],"desert-moons":["Desert moons","Dunes under three moons."],aurora:["Aurora","Northern lights over snowy peaks.","code"],"crystal-caves":["Crystal caves","A cavern of glowing crystals.","code"],"candy-land":["Candy land","Sweet hills and lollipop trees.","code"],volcano:["Volcano","A rumbling mountain of lava.","secret"],"ringed-planet":["Ringed planet","A giant planet fills the sky.","secret"],"pixel-world":["Pixel world","An 8-bit landscape.","secret"],"black-hole":["Black hole","Light bends around the dark.","secret"],"digital-rain":["Digital rain","Code falls over a sleeping city.","secret"]}),A2=ot({dawn:["Dawn","Soft pink morning light."],day:["Day","Bright daylight."],sunset:["Sunset","Golden and orange."],night:["Night","Dark with stars."]}),T2=ot({clear:["Clear","Nothing in the air."],rain:["Rain","Rain streaks down."],snow:["Snow","Slow falling snow."],storm:["Storm","Rain with flashes of lightning."],fog:["Fog","A soft haze."],meteors:["Meteors","Shooting stars.","code"],petals:["Petals","Drifting flower petals.","code"],embers:["Embers","Rising sparks.","secret"],stardust:["Stardust","Glittering dust.","secret"]}),R2=ot({cozy:["Cozy","Warm lamp light."],bright:["Bright","Clean daylight."],cool:["Cool","Calm blue light."],sunset:["Sunset","Golden hour glow."],moonlit:["Moonlit","Dim and silver."],neon:["Neon","Pink and cyan glow."],candle:["Candle","Low flickering light.","code"],blacklight:["Blacklight","Deep purple. Bright colors pop.","secret"],disco:["Disco","Colors that keep changing.","secret"],underwater:["Underwater","Wavy blue green light.","secret"]}),C2=ot({none:["None","Clear air."],dust:["Dust","Tiny floating specks in the light."],fireflies:["Fireflies","Slow glowing dots."],sparkles:["Sparkles","Twinkling lights."],bubbles:["Bubbles","Rising bubbles."],snow:["Snow","Indoor snow.","code"],petals:["Petals","Drifting petals.","code"],hearts:["Hearts","Floating hearts.","code"],"code-rain":["Code rain","Falling ones and zeros.","secret"],embers:["Embers","Rising sparks.","secret"],stars:["Stars","Stars that circle the room.","secret"]}),P2=ot({wood:["Wood","A sturdy wooden shelf."],white:["White","A clean white shelf."],metal:["Metal","A steel shelf.","code"],neon:["Neon","A glowing floating shelf.","secret"]}),L2=ot({neon:["Neon","A glowing sign."],plaque:["Plaque","A framed board."],pixel:["Pixel","A retro game display.","code"],hologram:["Hologram","A floating projection.","secret"]}),I2=ot({arcade:["Arcade","An arcade cabinet."],tablet:["Tablet","A big tablet on a stand."],retro:["Retro","A chunky old computer.","code"],hologram:["Hologram","A floating screen.","secret"]}),ll=ot({none:["None","Stays still."],spin:["Spin","Turns slowly.","code"],bob:["Bob","Floats up and down.","code"],pulse:["Pulse","Grows and shrinks.","code"],wobble:["Wobble","Rocks side to side.","code"]}),D2=i=>{const e={};for(const[t,n]of Object.entries(i))e[t]={id:t,name:n[0],desc:n[1],place:n[2],r:n[3],tier:n[4]??"menu"};return e},Ki=D2({bed:["Bed","A comfy bed with a blanket.","floor",.95],desk:["Desk","A desk for building apps.","floor",.7],chair:["Chair","A simple chair.","floor",.32],"gaming-chair":["Gaming chair","A tall racing style chair.","floor",.38],sofa:["Sofa","A two seat sofa.","floor",.85],beanbag:["Beanbag","A squishy seat.","floor",.45],bookshelf:["Bookshelf","A tall shelf full of books.","floor",.5],dresser:["Dresser","Drawers for your stuff.","floor",.5],"side-table":["Side table","A small round table.","floor",.28],"floor-lamp":["Floor lamp","A tall lamp with a warm shade.","floor",.22],"lava-lamp":["Lava lamp","Slow glowing blobs.","floor",.14],monstera:["Monstera","A big leafy plant.","floor",.35],cactus:["Cactus","A prickly friend in a pot.","floor",.2],bonsai:["Bonsai","A tiny tree.","floor",.22],"flower-pot":["Flower pot","Bright flowers in a pot.","floor",.18],"rug-round":["Round rug","A round rug.","rug",.9],"rug-rect":["Rectangle rug","A long rug.","rug",1.1],"toy-chest":["Toy chest","A box of treasures.","floor",.42],"guitar-stand":["Guitar","A guitar on a stand.","floor",.25],skateboard:["Skateboard","A board leaning nearby.","floor",.3],globe:["Globe","A spinning globe.","floor",.2],telescope:["Telescope","For watching the sky.","floor",.35],"fish-tank":["Fish tank","Fish swim back and forth.","floor",.45],boombox:["Boombox","A portable speaker.","floor",.28],basketball:["Basketball","A ball to bounce.","floor",.14],"soccer-ball":["Soccer ball","A ball to kick.","floor",.13],"teddy-bear":["Teddy bear","A soft bear.","floor",.2],"book-stack":["Book stack","A pile of books.","floor",.18],"mini-fridge":["Mini fridge","Snacks stay cold.","floor",.3],"robot-toy":["Robot toy","A wind up robot.","floor",.16,"code"],"rocket-model":["Rocket model","A model rocket ready to launch.","floor",.2,"code"],"drum-kit":["Drum kit","A small drum set.","floor",.6,"code"],"server-rack":["Server rack","Blinking lights for serious coders.","floor",.35,"code"],poster:["Poster","A poster in your colors.","wall",.4],"neon-star":["Neon star","A glowing star sign.","wall",.35],"neon-heart":["Neon heart","A glowing heart sign.","wall",.35],"neon-bolt":["Neon bolt","A glowing lightning bolt.","wall",.35],"neon-code":["Neon code","Glowing angle brackets.","wall",.4,"code"],clock:["Clock","A wall clock.","wall",.25],"string-lights":["String lights","A line of warm bulbs.","wall",.9],pennant:["Pennant","A team flag.","wall",.35],mirror:["Mirror","A round mirror.","wall",.35],"wall-shelf":["Wall shelf","A small shelf with books.","wall",.45],dartboard:["Dartboard","A target with soft tip darts.","wall",.28,"code"],"ceiling-fan":["Ceiling fan","A slow turning fan.","ceiling",.6],"pendant-lamp":["Pendant lamp","A hanging lamp.","ceiling",.25],"hanging-plant":["Hanging plant","Vines in a hanging pot.","ceiling",.25],"planet-mobile":["Planet mobile","Planets that circle overhead.","ceiling",.5,"code"],"disco-ball":["Disco ball","A spinning mirror ball.","ceiling",.25,"secret"],"floating-crystal":["Floating crystal","A crystal that hovers and glows.","floor",.25,"secret"],portal:["Portal","A swirling doorway to somewhere.","floor",.5,"secret"],"mini-black-hole":["Mini black hole","Small. Mostly safe.","floor",.3,"secret"],"hover-bot":["Hover bot","A helper robot that floats.","floor",.25,"secret"],"dragon-egg":["Dragon egg","It feels warm.","floor",.2,"secret"],"treasure-chest":["Treasure chest","Gold spills out.","floor",.4,"secret"],cauldron:["Cauldron","A bubbling pot.","floor",.32,"secret"],"glow-mushrooms":["Glow mushrooms","Mushrooms that light up.","floor",.28,"secret"],"gravity-orbs":["Gravity orbs","Orbs that circle each other.","floor",.3,"secret"],"ufo-lamp":["UFO lamp","A saucer with a beam of light.","ceiling",.3,"secret"]});Object.fromEntries(Object.values(Ki).map(i=>[i.id,{id:i.id,name:i.name,desc:i.desc,tier:i.tier}]));const g0=(i,e,t,n)=>({style:lt(i,e,"Surface style."),color:gt(t,"fabric","Main color."),color2:gt(n,"fabric","Second color, used by patterns."),scale:yt(1,"Pattern size. Bigger numbers make a bigger pattern.",.4,3,"code")}),fo={walls:g0(y2,"paint","#c8b6ff","#f7f5f0"),floor:g0(M2,"wood","#c9a57a","#8a5f3c"),ceiling:{color:gt("#f7f5f0","fabric","Ceiling color.")},trim:{color:gt("#f7f5f0","fabric","Color of the baseboards and window frame.")},window:{shape:lt(S2,"wide","Window shape."),curtains:lt(w2,"none","Curtain style."),curtainColor:gt("#ff8fa3","fabric","Curtain color.")},view:{theme:lt(E2,"floating-islands","What you see outside."),time:lt(A2,"day","Time of day outside."),weather:lt(T2,"clear","Weather outside.")},lighting:{mood:lt(R2,"cozy","Lighting mood."),color:gt("","fabric","Accent light color. Leave empty to use the mood color.",!0),brightness:yt(.6,"How bright the room is.")},particles:{kind:lt(C2,"dust","What floats in the air."),color:gt("#ffe98a","fabric","Particle color."),color2:gt("#ffffff","fabric","Second particle color."),amount:yt(.5,"How many particles.")},shelf:{style:lt(P2,"wood","Achievement shelf style."),color:gt("#7a5236","fabric","Shelf color.")},sign:{style:lt(L2,"neon","Level and XP sign style."),color:gt("#ffe98a","fabric","Sign color.")},screen:{style:lt(I2,"arcade","Where your favorite app plays."),color:gt("#7b4fd6","fabric","Screen case color."),on:wh(!0,"Turn the screen on.")}},Ws=36;function N2(i,e,t){const n=`decor[${e}]`;if(!i||typeof i!="object")return t.push({path:n,message:`Item ${e+1} in "decor" should be a group of properties. I skipped it.`}),null;const s=i,a=typeof s.item=="string"?s.item.trim().toLowerCase():"";if(!Ki[a]){const u=typeof s.item=="string"?Ks(s.item,Object.keys(Ki)):null;return t.push({path:`${n}.item`,message:u?`I don't know the decor "${String(s.item).slice(0,24)}". Did you mean "${u}"?`:`Item ${e+1} in "decor" needs an "item" I know. I skipped it.`}),null}const o=(u,f,p,g)=>{const x=s[u];if(x==null)return f;const d=typeof x=="number"?x:Number(x);if(!Number.isFinite(d))return t.push({path:`${n}.${u}`,message:`"${n}.${u}" needs a number. I used ${f}.`}),f;const m=Math.min(g,Math.max(p,d));return m!==d&&t.push({path:`${n}.${u}`,message:`"${n}.${u}" goes from ${p} to ${g}. I changed ${d} to ${m}.`}),Math.round(m*1e3)/1e3},r=(u,f)=>{const p=s[u];if(p==null||p==="")return f;const g=Eh(p,"fabric");return g?g.hex:(t.push({path:`${n}.${u}`,message:`"${String(p).slice(0,20)}" is not a color I know. Try "teal" or "#33ccff".`}),f)},l=s.wall==="left"||s.wall==="right"||s.wall==="back"?s.wall:"back";s.wall!==void 0&&s.wall!==l&&t.push({path:`${n}.wall`,message:`"${n}.wall" can be "back", "left", or "right". I used "back".`});const c=typeof s.animate=="string"&&ll[s.animate]?s.animate:"none";s.animate!==void 0&&s.animate!==c&&t.push({path:`${n}.animate`,message:`I don't know that animation. Try one of: ${Object.keys(ll).join(", ")}.`});for(const u of Object.keys(s))["id","item","x","z","y","wall","rot","scale","color","color2","animate"].includes(u)||t.push({path:`${n}.${u}`,message:`I skipped "${n}.${u}". That property does not exist.`});return{id:(typeof s.id=="string"&&s.id.trim()?s.id.replace(/[^a-zA-Z0-9_-]/g,"").slice(0,24):`${a}-${e+1}`)||`${a}-${e+1}`,item:a,x:o("x",0,-1,1),z:o("z",-.5,-1,1),y:o("y",.55,0,1),wall:l,rot:o("rot",0,-360,360),scale:o("scale",1,.5,1.8),color:r("color",""),color2:r("color2",""),animate:c}}function xo(i){const e=[],t=(n,s)=>{const a={v:rl};for(const r of Object.keys(n))r!=="v"&&r!=="decor"&&!(r in fo)&&s.push({path:r,message:`I skipped "${r}". That group does not exist.`});for(const[r,l]of Object.entries(fo))a[r]=sl(l,n[r],r,s);const o=[];if(Array.isArray(n.decor)){n.decor.length>Ws&&s.push({path:"decor",message:`A room holds up to ${Ws} decor items. I kept the first ${Ws}.`});const r=new Set;n.decor.slice(0,Ws).forEach((l,c)=>{const h=N2(l,c,s);if(h){for(;r.has(h.id);)h.id=`${h.id}-b`.slice(0,28);r.add(h.id),o.push(h)}})}else n.decor!==void 0&&n.decor!==null&&s.push({path:"decor",message:'"decor" should be a list of items.'});return a.decor=o,a};try{if(typeof i=="string")try{i=JSON.parse(i)}catch{e.push({path:"",message:"I could not read that as JSON. Check for a missing comma or quote."}),i={}}let n={};return i&&typeof i=="object"&&!Array.isArray(i)?n=i:i!=null&&e.push({path:"",message:"A room should be a group of properties. I used the default room."}),typeof n.v=="number"&&n.v>rl&&e.push({path:"v",message:"This room was made with a newer version. Some parts may be skipped."}),{spec:t(n,e),warnings:e}}catch{return e.push({path:"",message:"Something in that room could not be read. I used the default room."}),{spec:t({},[]),warnings:e}}}const U2=[{item:"rug-round",x:0,z:.15,color:"#ff8fa3",color2:"#f7f5f0"},{item:"bed",x:-.72,z:-.55,rot:90},{item:"monstera",x:-.28,z:-.86},{item:"floor-lamp",x:.42,z:-.88},{item:"beanbag",x:-.62,z:.45,rot:30},{item:"poster",wall:"left",x:-.1,y:.6},{item:"string-lights",wall:"back",x:0,y:.93}],Fx=()=>xo({decor:U2}).spec;function kx(i,e={}){const t=Ah(i),n=e.tiers??["menu","code","secret"],s={};for(const[c,h]of Object.entries(fo))s[c]=Th(h,t,n);const a=Object.values(Ki).filter(c=>n.includes(c.tier)),o=c=>c[Math.floor(t()*c.length)],r=[{item:t()<.5?"rug-round":"rug-rect",x:0,z:.1,rot:0}],l=6+Math.floor(t()*9);for(let c=0;c<l;c++){const h=o(a);h.place!=="rug"&&r.push({item:h.id,x:Math.round((t()*2-1)*100)/100,z:Math.round((t()*1.7-1)*100)/100,y:Math.round((.45+t()*.4)*100)/100,wall:o(["back","left","right"]),rot:Math.round((t()-.5)*80),scale:1,animate:n.includes("code")&&t()<.12?o(["spin","bob","pulse","wobble"]):"none"})}return s.decor=r,s.lighting.color="",s.lighting.brightness=.45+t()*.4,xo(s).spec}const nt=ht,Yt=bn,Ln=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],zn=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],F2=[.42,.26,.14],k2=[.62,.65,.7],ti=[.93,.92,.9],Rn=[.03,.03,.04],cl=[.12,.42,.2],Ll=[.83,.62,.18],Xt=(i=F2)=>F(i,{color2:Ln(i,.7),pattern:Yt.planks,scale:2.2,finish:nt.wood}),ct=(i=k2)=>F(i,{finish:nt.metal}),Jt=i=>F(i,{finish:nt.glow}),Tn=(i,e={})=>F(i,{finish:nt.cotton,...e}),$e=i=>F(i,{finish:nt.plastic}),ca=(i,e,t,n,s,a)=>{for(const o of[1,-1])for(const r of[1,-1])i.add(Mt([{c:[o*e,0,r*t],rx:s*.8,rz:s*.8},{c:[o*e,n,r*t],rx:s,rz:s}],{seg:8,capStart:"flat"}),a)},Il=(i,e,t,n)=>{i.add(pt([[e*.7,0],[e,t],[e*1.08,t],[e*1.08,t+.02],[e*.9,t+.02],[e*.85,t-.02],[.01,t-.02]],{seg:16}),$e(n)),i.add(K([0,t-.015,0],[e*.86,.012,e*.86],{seg:12}),F([.2,.13,.08],{finish:nt.matte}))},vo=(i,e,t,n,s,a)=>i.add(K([0,t*.5,0],[n,t*.5,.004],{seg:10,bend:o=>[o[0]*(.35+1.1*Math.sin(Math.min(1,Math.max(0,o[1]/t+.5))*Math.PI)**.7),o[1],o[2]+o[1]*o[1]*.6]}),F(a,{color2:Ln(a,.75),pattern:Yt.pinstripes,scale:.35,finish:nt.plastic}),{matrix:Fe(e,s)}),$t=(i,e,t,n,s=14)=>i.add(K(e,[t,t,t],{seg:s}),n),Ph={},Je=(i,e,t,n)=>{Ph[i]={c:[e,t],b:n}};Je("bed","#2f6fe0","#f7f5f0",(i,e,t,n,s)=>{i.add(Re([0,.2,0],[.5,.08,1],5),Xt()),ca(i,.44,.92,.14,.035,Xt()),i.add(Re([0,.34,0],[.48,.09,.97],4),Tn(ti)),i.add(Re([0,.4,.22],[.5,.075,.72],3.5),Tn(t,{color2:n,pattern:Yt.stripes,scale:.35})),i.add(Re([0,.455,-.35],[.5,.03,.1],3),Tn(n)),i.add(K([0,.47,-.72],[.3,.07,.17],{seg:14,n:2.6}),Tn(ti)),i.add(Re([0,.5,-1],[.52,.42,.04],5),Xt()),s.h=.92});Je("desk","#c9a57a","#3a3d45",(i,e,t,n,s)=>{i.add(Re([0,.74,0],[.65,.025,.32],6),Xt(t)),ca(i,.6,.27,.72,.022,ct(n)),i.add(Re([.42,.56,0],[.2,.16,.29],6),Xt(Ln(t,.85)));for(const a of[.63,.5])i.add(K([.42,a,.3],[.05,.008,.012],{seg:6}),ct());i.add(Re([-.3,.78,-.05],[.16,.012,.1],5),$e([.75,.76,.8])),i.add(Re([-.3,.89,-.17],[.17,.11,.008],5),$e([.15,.16,.2])),i.add(Re([-.3,.89,-.161],[.155,.095,.002],5),F([.35,.6,1],{color2:[.9,.5,1],pattern:Yt.ombre,scale:4,finish:nt.screen})),i.add(pt([[.035,.765],[.035,.85],[.04,.85],[.04,.765]],{seg:10,c:[.2,0,-.15]}),$e([.9,.35,.35])),s.h=1,s.glows.push({pos:[-.3,.89,-.1],color:[.5,.6,1],size:.5})});const O2=(i,e,t,n,s)=>{i.add(Re([0,.45,0],[.22,.03,.22],4),Tn(t)),ca(i,.19,.19,.43,.018,Xt(n)),i.add(Re([0,.75,-.2],[.22,.2,.02],4),Tn(t));for(const a of[1,-1])i.add(Te([[a*.19,.45,-.19],[a*.19,.6,-.2]],()=>.016,{seg:6}),Xt(n));s.h=.95};Je("chair","#ffd43b","#7a5236",O2);Je("gaming-chair","#1b1b1b","#d93a3a",(i,e,t,n,s)=>{for(let a=0;a<5;a++){const o=a/5*Math.PI*2;i.add(Te([[0,.08,0],[Math.sin(o)*.3,.04,Math.cos(o)*.3]],()=>.02,{seg:6}),$e(Rn)),$t(i,[Math.sin(o)*.3,.025,Math.cos(o)*.3],.025,$e(Rn),8)}i.add(Te([[0,.08,0],[0,.4,0]],()=>.025,{seg:8}),ct()),i.add(K([0,.47,.02],[.25,.06,.25],{n:3,seg:14}),F(t,{finish:nt.leather})),i.add(K([0,.88,-.22],[.24,.42,.05],{n:2.8,seg:14,bend:a=>[a[0]*(1-Math.max(0,a[1])*.5),a[1],a[2]-a[1]*.12]}),F(t,{color2:n,pattern:Yt["color-block"],finish:nt.leather}));for(const a of[1,-1])i.add(K([a*.19,.9,-.2],[.03,.36,.055],{seg:8}),F(n,{finish:nt.leather})),i.add(Re([a*.28,.62,.02],[.03,.02,.14],4),$e(Rn)),i.add(Te([[a*.28,.47,0],[a*.28,.6,0]],()=>.014,{seg:6}),$e(Rn));i.add(K([0,1.2,-.21],[.12,.07,.04],{seg:10}),F(n,{finish:nt.leather})),s.h=1.32});Je("sofa","#149e94","#ffd43b",(i,e,t,n,s)=>{i.add(Re([0,.2,0],[.78,.12,.38],3.5),Tn(Ln(t,.85),{finish:nt.velvet}));for(const a of[1,-1])i.add(K([a*.37,.36,.04],[.37,.08,.32],{n:3,seg:14}),Tn(t,{finish:nt.velvet})),i.add(K([a*.82,.36,0],[.11,.24,.4],{n:3,seg:12}),Tn(t,{finish:nt.velvet})),i.add(K([a*.36,.6,-.27],[.38,.2,.11],{n:3,seg:14}),Tn(t,{finish:nt.velvet}));i.add(K([.5,.5,-.1],[.16,.16,.07],{n:3,seg:10}),Tn(n,{color2:ti,pattern:Yt.zigzag,scale:.4}),{matrix:Fe([0,0,0],[-.3,-.2,.15])}),ca(i,.8,.32,.08,.03,Xt()),s.h=.82});Je("beanbag","#ff8fa3","#f7f5f0",(i,e,t,n,s)=>{i.add(K([0,.24,0],[.42,.26,.42],{seg:18,bend:a=>{const o=a[1]/.26;return[a[0]*(1.05-.28*o),a[1]-.1*Math.exp(-(a[0]*a[0]+(a[2]-.08)**2)/.03)*Math.max(0,o),a[2]*(1.05-.28*o)-Math.max(0,o)*.06]}}),Tn(t,{finish:nt.velvet})),s.h=.5});Je("bookshelf","#7a5236","#f7f5f0",(i,e,t,n,s)=>{const a=Xt(t);for(const r of[1,-1])i.add(Re([r*.42,.9,0],[.02,.9,.16],6),a);i.add(Re([0,.9,-.15],[.42,.9,.01],6),Xt(Ln(t,.7)));const o=[[.85,.2,.2],[.2,.45,.85],[.95,.75,.2],[.2,.65,.4],[.6,.35,.8],[.95,.5,.2],[.9,.88,.82]];for(let r=0;r<5;r++){const l=.02+r*.44;if(i.add(Re([0,l,0],[.42,.018,.16],6),a),r===4)break;let c=-.38,h=r*7;for(;c<.3;){const u=.022+h*37%5*.006,f=.13+h*53%7*.012;if(h*11%9===0){c+=.08,h++;continue}i.add(Re([c+u,l+.02+f,.01],[u,f,.11],5),$e(o[h%o.length])),c+=u*2+.004,h++}}s.h=1.82});Je("dresser","#f7f5f0","#e0b23a",(i,e,t,n,s)=>{i.add(Re([0,.42,0],[.45,.4,.22],6),Xt(t)),ca(i,.4,.17,.05,.025,Xt(Ln(t,.7)));for(let a=0;a<3;a++){i.add(Re([0,.17+a*.24,.215],[.41,.1,.012],6),Xt(zn(t,[1,1,1],.08)));for(const o of[1,-1])$t(i,[o*.18,.17+a*.24,.235],.016,ct(n),8)}s.h=.84});Je("side-table","#7a5236","#f7f5f0",(i,e,t,n,s)=>{i.add(pt([[.02,.5],[.26,.5],[.26,.53],[.02,.53]],{seg:20}),Xt(t)),i.add(Te([[0,.03,0],[0,.5,0]],()=>.022,{seg:8}),ct([.2,.2,.22])),i.add(pt([[.16,0],[.16,.02],[.02,.035]],{seg:16}),ct([.2,.2,.22])),i.add(pt([[.05,.53],[.06,.6],[.04,.66],[.035,.66]],{seg:12,c:[.08,0,.02]}),$e([.3,.6,.85])),s.h=.68});Je("floor-lamp","#ffe98a","#3a3d45",(i,e,t,n,s)=>{i.add(pt([[.16,0],[.16,.02],[.02,.04]],{seg:16}),ct(n)),i.add(Te([[0,.03,0],[0,1.45,0]],()=>.014,{seg:8}),ct(n)),i.add(pt([[.2,1.36],[.13,1.66],[.125,1.66],[.19,1.36]],{seg:18}),Jt(zn(t,[1,1,1],.2))),s.h=1.68,s.glows.push({pos:[0,1.5,0],color:t,size:1.5})});Je("lava-lamp","#ff3d8b","#7b4fd6",(i,e,t,n,s)=>{i.add(pt([[.09,0],[.06,.14],[.05,.14]],{seg:14}),ct()),i.add(pt([[.04,.52],[.03,.6],[.005,.6]],{seg:14}),ct()),e.add(pt([[.062,.14],[.085,.3],[.04,.52]],{seg:14}),F(n,{finish:nt.glass}));for(const[a,o]of[[.2,.04],[.31,.03],[.4,.022],[.26,.018]])i.add(K([Math.sin(a*40)*.015,a,0],[o,o*1.3,o],{seg:10}),Jt(t));s.h=.6,s.glows.push({pos:[0,.32,0],color:t,size:.7})});Je("monstera","#2f9e52","#f7f5f0",(i,e,t,n,s)=>{Il(i,.17,.3,n);for(let a=0;a<9;a++){const o=a*2.4,r=.5+a%4*.2,l=.35+a%3*.22,c=[Math.sin(o)*l*r*.6,.3+r,Math.cos(o)*l*r*.6];i.add(Te([[0,.3,0],[c[0]*.4,.3+r*.6,c[2]*.4],c],()=>.008,{seg:5}),$e(Ln(t,.7))),vo(i,c,.3+a%3*.05,.13,[.9+a%2*.3,o,0],t)}s.h=1.35});Je("cactus","#2f9e52","#f08a24",(i,e,t,n,s)=>{Il(i,.13,.2,n);const a=F(t,{color2:Ln(t,.75),pattern:Yt.pinstripes,scale:.5,finish:nt.matte});i.add(K([0,.5,0],[.085,.32,.085],{seg:14}),a),i.add(Te([[.07,.42,0],[.19,.44,0],[.2,.62,0]],()=>.045,{seg:10}),a),i.add(Te([[-.07,.52,0],[-.17,.54,0],[-.18,.68,0]],()=>.04,{seg:10}),a),$t(i,[.02,.83,.02],.035,$e([1,.45,.6]),8),s.h=.86});Je("bonsai","#2f9e52","#3a3d45",(i,e,t,n,s)=>{i.add(Re([0,.05,0],[.2,.05,.13],5),$e(n)),i.add(Te([[0,.1,0],[.04,.24,0],[-.06,.36,.02],[.03,.48,0]],a=>.035*(1-a*.6),{seg:8}),Xt([.3,.2,.12]));for(const[a,o,r,l]of[[-.1,.42,.02,.11],[.08,.54,0,.13],[.16,.36,.03,.08],[-.02,.6,-.03,.09]])i.add(K([a,o,r],[l,l*.6,l],{seg:10}),F(t,{color2:Ln(t,.7),pattern:Yt.camo,scale:3,finish:nt.fur}));s.h=.68});Je("flower-pot","#ff8fa3","#149e94",(i,e,t,n,s)=>{Il(i,.12,.18,n);for(let a=0;a<6;a++){const o=a*1.05,r=.22+a%3*.07,l=[Math.sin(o)*.09,.18+r,Math.cos(o)*.09];i.add(Te([[0,.17,0],l],()=>.006,{seg:5}),$e(cl)),i.add(K(l,[.05,.02,.05],{seg:10,bend:c=>{const h=1+.35*Math.cos(Math.atan2(c[2],c[0])*5);return[c[0]*h,c[1],c[2]*h]}}),$e(a%2?t:zn(t,[1,1,1],.4))),$t(i,[l[0],l[1]+.012,l[2]],.016,$e([1,.85,.25]),6),vo(i,[Math.sin(o+.5)*.04,.2,Math.cos(o+.5)*.04],.12,.035,[1,o+.5,0],cl)}s.h=.52});Je("rug-round","#ff8fa3","#f7f5f0",(i,e,t,n,s)=>{i.add(pt([[.01,.012],[.86,.012],[.9,.004]],{seg:40}),Tn(t,{color2:n,pattern:Yt.honeycomb,scale:.45,finish:nt.knit})),i.add(Vt([0,.008,0],.88,.012,{seg:40,tube:5}),Tn(n,{finish:nt.knit})),s.h=.02});Je("rug-rect","#2f6fe0","#f7f5f0",(i,e,t,n,s)=>{i.add(Re([0,.008,0],[1.1,.008,.7],12),Tn(t,{color2:n,pattern:Yt.nordic,scale:.3,finish:nt.knit})),s.h=.02});Je("toy-chest","#d93a3a","#ffd43b",(i,e,t,n,s)=>{i.add(Re([0,.2,0],[.38,.2,.24],5),Xt(t)),i.add(K([0,.4,0],[.39,.1,.25],{n:4,ny:2,seg:14}),Xt(Ln(t,.85)));for(const a of[1,-1])i.add(Re([a*.22,.25,.245],[.03,.25,.008],4),ct(n));i.add(Re([0,.36,.25],[.04,.05,.012],4),ct(n)),s.h=.5});Je("guitar-stand","#d93a3a","#f7f5f0",(i,e,t,n,s)=>{for(const o of[1,-1])i.add(Te([[0,.5,-.1],[o*.18,0,.1]],()=>.01,{seg:5}),ct(Rn));i.add(Te([[0,.5,-.1],[0,0,-.2]],()=>.01,{seg:5}),ct(Rn));const a=Fe([0,.14,.03],[-.16,0,0]);i.add(K([0,.16,0],[.17,.15,.04],{seg:16}),$e(t),{matrix:a}),i.add(K([0,.38,0],[.13,.11,.04],{seg:16}),$e(t),{matrix:a}),i.add(Re([0,.75,.01],[.024,.32,.012],4),Xt([.25,.16,.1]),{matrix:a}),i.add(Re([0,1.11,.01],[.04,.06,.012],4),$e(n),{matrix:a}),i.add(K([0,.3,.04],[.05,.05,.004],{seg:10}),$e(Rn),{matrix:a}),i.add(Re([0,.5,.045],[.012,.42,.002],4),ct(),{matrix:a}),s.h=1.3});Je("skateboard","#149e94","#ffd43b",(i,e,t,n,s)=>{const a=Fe([0,.07,0],[0,0,0]);i.add(K([0,.02,0],[.11,.012,.4],{n:2.6,seg:16,bend:o=>[o[0],o[1]+Math.max(0,Math.abs(o[2])-.3)*.5,o[2]]}),F(t,{color2:n,pattern:Yt.flames,scale:1.5,finish:nt.wood}),{matrix:a});for(const o of[.25,-.25]){i.add(Re([0,-.015,o],[.07,.01,.03],4),ct(),{matrix:a});for(const r of[1,-1])i.add(K([r*.09,-.04,o],[.02,.03,.03],{seg:10}),$e(n),{matrix:a})}s.h=.12});Je("globe","#2f6fe0","#2f9e52",(i,e,t,n,s)=>{i.add(pt([[.13,0],[.13,.02],[.02,.04],[.015,.14]],{seg:16}),Xt()),i.add(K([0,.34,0],[.17,.17,.17],{seg:20}),F(t,{color2:n,pattern:Yt.camo,scale:1.1,finish:nt.plastic}),{matrix:Fe([0,0,0],[0,0,.3])}),i.add(Vt([0,0,0],.19,.008,{seg:24,tube:5,arc:Math.PI}),ct(Ll),{matrix:Fe([0,.34,0],[0,0,Math.PI/2+.3])}),s.h=.55,s.motion="spin"});Je("telescope","#f7f5f0","#e0b23a",(i,e,t,n,s)=>{for(let o=0;o<3;o++){const r=o/3*Math.PI*2;i.add(Te([[0,.9,0],[Math.sin(r)*.3,0,Math.cos(r)*.3]],()=>.014,{seg:6}),Xt())}const a=Fe([0,.95,0],[-.5,.4,0]);i.add(Mt([{c:[0,0,-.35],rx:.04,rz:.04,ax:[1,0,0],az:[0,1,0]},{c:[0,0,.3],rx:.065,rz:.065,ax:[1,0,0],az:[0,1,0]}],{seg:14,capStart:"flat",capEnd:"flat"}),$e(t),{matrix:a});for(const o of[-.3,.05,.28])i.add(Vt([0,0,0],.062,.008,{seg:14,tube:5}),ct(n),{matrix:a.clone().multiply(Fe([0,0,o],[Math.PI/2,0,0],o<0?.72:o>.2?1.08:.92))});s.h=1.25});Je("fish-tank","#3ad0e0","#f08a24",(i,e,t,n,s)=>{i.add(Re([0,.3,0],[.42,.3,.22],6),Xt([.2,.2,.24])),e.add(Re([0,.86,0],[.4,.26,.2],8),F(t,{finish:nt.glass})),i.add(Re([0,.615,0],[.4,.02,.2],6),F([.85,.78,.6],{finish:nt.matte})),i.add(Re([0,1.13,0],[.42,.015,.22],6),$e(Rn));for(let a=0;a<4;a++){const o=-.25+a*.17,r=.75+a%3*.1,l=a%2*.1-.05,c=a%2?1:-1;i.add(K([o,r,l],[.045,.026,.014],{seg:8}),Jt(a%2?n:[1,.85,.3])),i.add(K([o-c*.05,r,l],[.018,.022,.006],{seg:6}),Jt(a%2?n:[1,.85,.3]))}for(let a=0;a<4;a++)i.add(Te([[-.3+a*.2,.63,-.1],[-.28+a*.2,.78,-.1],[-.31+a*.2,.92,-.1]],o=>.012*(1-o*.6),{seg:5}),$e(cl));s.h=1.15,s.glows.push({pos:[0,.86,.1],color:t,size:1})});Je("boombox","#3a3d45","#ff3d8b",(i,e,t,n,s)=>{i.add(Re([0,.14,0],[.26,.13,.09],5),$e(t));for(const a of[1,-1])i.add(pt([[.085,0],[.085,.012],[.02,.02]],{seg:16}),$e(Rn),{matrix:Fe([a*.15,.13,.09],[Math.PI/2,0,0])}),i.add(Vt([0,0,0],.085,.01,{seg:16,tube:5}),ct(n),{matrix:Fe([a*.15,.13,.095],[Math.PI/2,0,0])});i.add(Te([[-.2,.27,0],[-.2,.34,0],[.2,.34,0],[.2,.27,0]],()=>.012,{seg:6}),ct()),i.add(Re([0,.2,.092],[.05,.03,.004],4),Jt(n)),s.h=.36,s.glows.push({pos:[0,.2,.12],color:n,size:.3})});Je("basketball","#f08a24","#1b1b1b",(i,e,t,n,s)=>{$t(i,[0,.12,0],.12,F(t,{color2:n,pattern:Yt.pinstripes,scale:.19,finish:nt.rubber}),18),s.h=.24});Je("soccer-ball","#f7f5f0","#1b1b1b",(i,e,t,n,s)=>{$t(i,[0,.11,0],.11,F(t,{color2:n,pattern:Yt.honeycomb,scale:2.4,finish:nt.plastic}),18),s.h=.22});Je("teddy-bear","#b47a4e","#f1e6cf",(i,e,t,n,s)=>{const a=F(t,{finish:nt.fur}),o=F(n,{finish:nt.fur});i.add(K([0,.15,0],[.12,.14,.1],{seg:14}),a),i.add(K([0,.14,.06],[.07,.08,.05],{seg:10}),o),$t(i,[0,.36,.01],.1,a);for(const r of[1,-1])$t(i,[r*.08,.45,0],.04,a,8),i.add(K([r*.14,.2,.03],[.04,.08,.04],{seg:8}),a),i.add(K([r*.08,.04,.09],[.05,.045,.08],{seg:8}),a),$t(i,[r*.036,.385,.092],.012,$e(Rn),6);i.add(K([0,.345,.09],[.04,.03,.03],{seg:8}),o),$t(i,[0,.355,.118],.012,$e(Rn),6),s.h=.5});Je("book-stack","#d93a3a","#2f6fe0",(i,e,t,n,s)=>{[t,n,[.95,.75,.2],[.2,.65,.4]].forEach((o,r)=>{i.add(Re([0,.03+r*.056,0],[.14-r*.008,.026,.1-r*.005],5),$e(o),{matrix:Fe([0,0,0],[0,r*.37%.6-.3,0])}),i.add(Re([.005,.03+r*.056,.005],[.132-r*.008,.02,.098-r*.005],5),$e(ti),{matrix:Fe([0,0,0],[0,r*.37%.6-.3,0])})}),s.h=.24});Je("mini-fridge","#f7f5f0","#d93a3a",(i,e,t,n,s)=>{i.add(Re([0,.4,0],[.26,.4,.24],5),$e(t)),i.add(Re([0,.43,.24],[.245,.36,.012],5),$e(zn(t,[1,1,1],.1))),i.add(Re([.19,.5,.262],[.012,.12,.012],4),ct()),i.add(K([-.1,.6,.255],[.05,.05,.004],{seg:10,bend:a=>{const o=.62+.38*Math.cos(5*Math.atan2(a[1],a[0])-Math.PI/2);return[a[0]*o*1.3,a[1]*o*1.3,a[2]]}}),$e(n)),s.h=.8});Je("robot-toy","#d93a3a","#ffd43b",(i,e,t,n,s)=>{i.add(Re([0,.17,0],[.08,.08,.06],5),ct(t)),i.add(Re([0,.31,0],[.065,.05,.055],5),ct(t));for(const a of[1,-1])i.add(Re([a*.045,.045,0],[.028,.045,.035],5),ct(Ln(t,.7))),i.add(Re([a*.11,.17,0],[.02,.06,.025],5),ct(Ln(t,.7))),$t(i,[a*.03,.32,.056],.014,Jt(n),8);i.add(Te([[0,.36,0],[0,.42,0]],()=>.005,{seg:5}),ct()),$t(i,[0,.43,0],.014,Jt([1,.3,.3]),8),i.add(Vt([0,0,0],.03,.006,{seg:12,tube:5}),ct(n),{matrix:Fe([0,.17,-.075],[Math.PI/2,0,0])}),s.h=.45});Je("rocket-model","#f7f5f0","#d93a3a",(i,e,t,n,s)=>{i.add(pt([[.02,.08],[.075,.14],[.085,.4],[.07,.56],[.005,.72]],{seg:16}),F(t,{color2:n,pattern:Yt.stripes,scale:.5,finish:nt.plastic}));for(let a=0;a<3;a++){const o=a/3*Math.PI*2;i.add(K([0,0,0],[.012,.09,.06],{seg:8,bend:r=>[r[0],r[1],r[2]*(1-r[1]*4)]}),$e(n),{matrix:Fe([Math.sin(o)*.1,.12,Math.cos(o)*.1],[0,o,0])})}i.add(Vt([0,0,0],.03,.008,{seg:12,tube:5}),ct(),{matrix:Fe([0,.42,.083],[Math.PI/2,0,0])}),i.add(K([0,.42,.08],[.028,.028,.008],{seg:8}),$e([.3,.6,.9])),i.add(pt([[.1,0],[.1,.02],[.03,.08]],{seg:14}),Xt()),s.h=.74});Je("drum-kit","#d93a3a","#e0b23a",(i,e,t,n,s)=>{const a=(o,r,l,c,h,u)=>{i.add(pt([[c,0],[c,h]],{seg:18}),F(t,{finish:nt.glitter}),{matrix:Fe([o,r,l],u)}),i.add(pt([[.005,h],[c,h],[c+.008,h-.01],[c+.008,h+.006],[.005,h+.006]],{seg:18}),$e(ti),{matrix:Fe([o,r,l],u)}),i.add(pt([[.005,0],[c,0]],{seg:18}),$e(ti),{matrix:Fe([o,r,l],u)})};a(0,.26,0,.26,.3,[Math.PI/2,0,0]),a(-.26,.62,.12,.13,.12,[.25,0,.1]),a(.22,.62,.12,.15,.14,[.25,0,-.1]),a(-.42,.42,.42,.16,.14,[0,0,0]);for(const[o,r,l]of[[.5,.2,1],[-.55,.05,.9]])i.add(Te([[o,0,r],[o,l,r]],()=>.01,{seg:6}),ct()),i.add(pt([[.01,.01],[.19,-.015],[.2,-.02],[.01,0]],{seg:20}),ct(n),{matrix:Fe([o,l,r],[.15,0,.1])});s.h=1.05});Je("server-rack","#1b1b1b","#3aff8a",(i,e,t,n,s)=>{i.add(Re([0,.75,0],[.26,.75,.28],6),ct(t));for(let a=0;a<9;a++){const o=.14+a*.15;i.add(Re([0,o,.275],[.23,.055,.008],5),$e([.1,.1,.12]));for(let r=0;r<5;r++)(a*3+r*7)%4&&$t(i,[-.18+r*.045,o,.286],.008,Jt((a+r)%3?n:[1,.6,.1]),6);i.add(Re([.1,o,.284],[.09,.02,.002],4),$e([.2,.2,.24]))}s.h=1.5,s.glows.push({pos:[0,.8,.35],color:n,size:.8})});Je("poster","#7b4fd6","#ffd43b",(i,e,t,n,s)=>{i.add(Re([0,0,.012],[.32,.44,.008],8),$e(ti)),i.add(Re([0,0,.022],[.29,.41,.003],8),F(t,{color2:n,pattern:Yt.ombre,scale:2.2,finish:nt.matte})),i.add(K([0,.06,.027],[.16,.16,.002],{seg:20,bend:a=>{const o=.62+.38*Math.cos(5*Math.atan2(a[1],a[0])-Math.PI/2);return[a[0]*o*1.25,a[1]*o*1.25,a[2]]}}),F(n,{finish:nt.matte}));for(const a of[-.2,-.27])i.add(Re([0,a,.027],[a<-.25?.12:.2,.016,.002],6),F(ti,{finish:nt.matte}));s.h=.9});const Dl=(i,e)=>(t,n,s,a,o)=>{t.add(Re([0,0,.015],[.34,.34,.012],6),F([.06,.05,.1],{finish:nt.matte}));const r=[];for(let l=0;l<=48;l++){const[c,h]=i(l/48);r.push([c*.26,h*.26,.05])}t.add(Te(r,()=>.014,{seg:6,cap:!1}),Jt(zn(s,[1,1,1],.25))),o.h=.7,o.glows.push({pos:[0,0,.12],color:s,size:1.5})};Je("neon-star","#ffd43b","#ffffff",Dl(i=>{const e=i*Math.PI*2+Math.PI/2,t=.62+.38*Math.cos(5*(e-Math.PI/2));return[Math.cos(e)*t,Math.sin(e)*t]}));Je("neon-heart","#ff3d8b","#ffffff",Dl(i=>{const e=i*Math.PI*2;return[16*Math.sin(e)**3/17,(13*Math.cos(e)-5*Math.cos(2*e)-2*Math.cos(3*e)-Math.cos(4*e))/17+.1]}));Je("neon-bolt","#3ad0e0","#ffffff",Dl(i=>{const e=[[.25,1],[-.45,.05],[.05,.05],[-.25,-1],[.5,.2],[0,.2],[.25,1]],t=i*(e.length-1),n=Math.min(Math.floor(t),e.length-2),s=t-n;return[e[n][0]+(e[n+1][0]-e[n][0])*s,e[n][1]+(e[n+1][1]-e[n][1])*s]}));Je("neon-code","#3aff8a","#ffffff",(i,e,t,n,s)=>{i.add(Re([0,0,.015],[.42,.28,.012],6),F([.06,.05,.1],{finish:nt.matte}));const a=Jt(zn(t,[1,1,1],.25));for(const o of[1,-1])i.add(Te([[o*.16,.14,.05],[o*.32,0,.05],[o*.16,-.14,.05]],()=>.014,{seg:6}),a);i.add(Te([[.06,.18,.05],[-.06,-.18,.05]],()=>.014,{seg:6}),a),s.h=.6,s.glows.push({pos:[0,0,.12],color:t,size:1.6})});Je("clock","#f7f5f0","#1b1b1b",(i,e,t,n,s)=>{i.add(pt([[.005,.03],[.21,.03],[.23,.02],[.23,0]],{seg:28}),$e(n),{matrix:Fe([0,0,0],[Math.PI/2,0,0])}),i.add(pt([[.005,.034],[.2,.034]],{seg:28}),$e(t),{matrix:Fe([0,0,0],[Math.PI/2,0,0])});for(let a=0;a<12;a++){const o=a/12*Math.PI*2;i.add(Re([Math.sin(o)*.17,Math.cos(o)*.17,.037],[.006,a%3?.012:.022,.002],4),$e(n),{matrix:Fe([0,0,0],[0,0,0])})}i.add(Re([0,.05,.04],[.008,.06,.003],4),$e(n),{matrix:Fe([0,0,0],[0,0,-.9])}),i.add(Re([0,.075,.043],[.005,.085,.003],4),$e(n),{matrix:Fe([0,0,0],[0,0,1.1])}),$t(i,[0,0,.045],.012,$e([.85,.2,.2]),8),s.h=.46});Je("string-lights","#ffe98a","#ff8fa3",(i,e,t,n,s)=>{const a=[];for(let o=0;o<=24;o++){const r=o/24;a.push([(r-.5)*1.9,-.09*Math.sin(r*Math.PI*3)**2-.02,.03])}i.add(Te(a,()=>.004,{seg:4}),$e(Rn));for(let o=1;o<24;o+=2){const r=a[o],l=(o>>1)%2?t:n;i.add(K([r[0],r[1]-.03,r[2]],[.022,.03,.022],{seg:8}),Jt(zn(l,[1,1,1],.3))),s.glows.push({pos:[r[0],r[1]-.03,r[2]+.02],color:l,size:.32})}s.h=.2});Je("pennant","#d93a3a","#f7f5f0",(i,e,t,n,s)=>{i.add(K([0,0,.012],[.36,.15,.004],{seg:12,n:6,bend:a=>[a[0],a[1]*(.5-a[0]/.72),a[2]]}),F(t,{color2:n,pattern:Yt.stripes,scale:.5,finish:nt.velvet})),i.add(Re([-.36,0,.014],[.02,.16,.005],5),F(n)),s.h=.32});Je("mirror","#e0b23a","#a8d8ff",(i,e,t,n,s)=>{i.add(Vt([0,0,0],.31,.03,{seg:30,tube:8}),ct(t),{matrix:Fe([0,0,.02],[Math.PI/2,0,0])}),i.add(pt([[.005,.02],[.3,.02]],{seg:30}),F(zn(n,[1,1,1],.5),{finish:nt.chrome}),{matrix:Fe([0,0,0],[Math.PI/2,0,0])}),s.h=.68});Je("wall-shelf","#7a5236","#2f9e52",(i,e,t,n,s)=>{i.add(Re([0,0,.11],[.42,.016,.11],6),Xt(t));for(const o of[1,-1])i.add(Re([o*.3,-.06,.06],[.012,.05,.06],4),ct(Rn));[[.85,.2,.2],[.2,.45,.85],[.95,.75,.2],[.6,.35,.8]].forEach((o,r)=>i.add(Re([-.32+r*.062,.12,.1],[.026,.1+r%2*.02,.075],5),$e(o))),i.add(pt([[.04,.016],[.055,.1],[.045,.1]],{seg:12,c:[.22,0,.11]}),$e(ti));for(let o=0;o<5;o++)vo(i,[.22,.1,.11],.13,.03,[.6,o*1.3,0],n);s.h=.4});Je("dartboard","#d93a3a","#2f9e52",(i,e,t,n,s)=>{i.add(pt([[.005,.03],[.25,.03],[.25,0]],{seg:28}),$e(Rn),{matrix:Fe([0,0,0],[Math.PI/2,0,0])}),[[.22,t],[.17,ti],[.12,n],[.07,ti],[.03,t]].forEach(([a,o],r)=>i.add(pt([[.005,.032+r*.002],[a,.032+r*.002]],{seg:28}),$e(o),{matrix:Fe([0,0,0],[Math.PI/2,0,0])})),i.add(Te([[.05,.03,.04],[.08,.06,.16]],a=>.006*(1-a*.5),{seg:5}),ct(Ll)),i.add(K([.085,.065,.17],[.02,.004,.025],{seg:6}),$e(t)),s.h=.5});Je("ceiling-fan","#f7f5f0","#7a5236",(i,e,t,n,s)=>{i.add(Te([[0,0,0],[0,-.22,0]],()=>.018,{seg:8}),ct()),i.add(K([0,-.27,0],[.09,.06,.09],{seg:14}),$e(t));for(let a=0;a<4;a++)i.add(K([.34,0,0],[.28,.008,.07],{seg:10,n:2.6}),Xt(n),{matrix:Fe([0,-.27,0],[.12,a/4*Math.PI*2,0])});i.add(K([0,-.35,0],[.06,.04,.06],{seg:10}),Jt([1,.95,.8])),s.h=.4,s.motion="spin",s.glows.push({pos:[0,-.38,0],color:[1,.9,.7],size:.9})});Je("pendant-lamp","#ffd43b","#1b1b1b",(i,e,t,n,s)=>{i.add(Te([[0,0,0],[0,-.5,0]],()=>.006,{seg:5}),$e(n)),i.add(pt([[.03,-.5],[.2,-.72],[.19,-.72],[.025,-.52]],{seg:20}),$e(t)),$t(i,[0,-.68,0],.05,Jt([1,.95,.8]),10),s.h=.74,s.glows.push({pos:[0,-.72,0],color:[1,.85,.6],size:1.4})});Je("hanging-plant","#2f9e52","#f7f5f0",(i,e,t,n,s)=>{for(let a=0;a<3;a++){const o=a/3*Math.PI*2;i.add(Te([[0,0,0],[Math.sin(o)*.13,-.5,Math.cos(o)*.13]],()=>.004,{seg:4}),$e([.8,.75,.6]))}i.add(pt([[.08,-.64],[.14,-.5],[.12,-.5],[.01,-.52]],{seg:14}),$e(n));for(let a=0;a<9;a++){const o=a*2.4,r=[],l=.35+a%4*.14;for(let c=0;c<=6;c++){const h=c/6;r.push([Math.sin(o)*(.1+.08*Math.sin(h*2)),-.5+.06*Math.sin(h*3)-h*l,Math.cos(o)*(.1+.08*Math.sin(h*2))])}i.add(Te(r,()=>.006,{seg:4}),$e(Ln(t,.8)));for(let c=1;c<=6;c+=1)vo(i,r[c],.07,.028,[1.7,o+c,0],t)}s.h=1.1});Je("planet-mobile","#f08a24","#2f6fe0",(i,e,t,n,s)=>{i.add(Te([[0,0,0],[0,-.3,0]],()=>.005,{seg:4}),ct()),$t(i,[0,-.42,0],.09,Jt([1,.8,.3]),14),[t,n,[.8,.3,.3],[.5,.8,.6],[.7,.6,.9]].forEach((o,r)=>{const l=r*1.9,c=.2+r*.075;i.add(Te([[0,-.3,0],[Math.sin(l)*c,-.32,Math.cos(l)*c],[Math.sin(l)*c,-.42-r%2*.05,Math.cos(l)*c]],()=>.003,{seg:4}),ct()),$t(i,[Math.sin(l)*c,-.45-r%2*.05,Math.cos(l)*c],.035+r%3*.012,$e(o),10),r===2&&i.add(Vt([Math.sin(l)*c,-.45,Math.cos(l)*c],.065,.005,{seg:16,tube:4}),ct(Ll))}),s.h=.6,s.motion="spin",s.glows.push({pos:[0,-.42,0],color:[1,.8,.3],size:.8})});Je("disco-ball","#c9ced6","#ff3d8b",(i,e,t,n,s)=>{i.add(Te([[0,0,0],[0,-.3,0]],()=>.005,{seg:4}),ct()),$t(i,[0,-.48,0],.18,F(t,{color2:[1,1,1],pattern:Yt.tiles,scale:4.5,finish:nt.glitter}),20),s.h=.68,s.motion="spin",s.glows.push({pos:[0,-.48,0],color:[1,1,1],size:1.2})});Je("ufo-lamp","#c9ced6","#3aff8a",(i,e,t,n,s)=>{i.add(Te([[0,0,0],[0,-.25,0]],()=>.004,{seg:4}),ct()),i.add(K([0,-.34,0],[.26,.045,.26],{seg:22}),ct(t)),e.add(K([0,-.3,0],[.11,.09,.11],{seg:14}),F(n,{finish:nt.glass}));for(let a=0;a<8;a++){const o=a/8*Math.PI*2;$t(i,[Math.sin(o)*.2,-.36,Math.cos(o)*.2],.018,Jt(n),6)}e.add(Mt([{c:[0,-.38,0],rx:.08,rz:.08},{c:[0,-1.5,0],rx:.4,rz:.4}],{seg:18}),F(n,{finish:nt.ghost})),s.h=.45,s.glows.push({pos:[0,-.4,0],color:n,size:1.6})});Je("floating-crystal","#3ad0e0","#c8b6ff",(i,e,t,n,s)=>{i.add(pt([[.16,0],[.12,.05],[.02,.07]],{seg:8}),F([.2,.2,.26],{finish:nt.matte})),i.add(pt([[.005,.5],[.13,.82],[.1,1.05],[.005,1.3]],{seg:6}),F(t,{color2:n,finish:nt.crystal}));for(let a=0;a<3;a++){const o=a*2.1;i.add(pt([[.004,-.07],[.035,0],[.004,.1]],{seg:5}),F(n,{finish:nt.crystal}),{matrix:Fe([Math.sin(o)*.24,.72+a*.14,Math.cos(o)*.24],[.3,o,.2])})}s.h=1.3,s.motion="float-spin",s.glows.push({pos:[0,.9,0],color:t,size:1.8})});Je("portal","#7b4fd6","#3ad0e0",(i,e,t,n,s)=>{i.add(Vt([0,0,0],.5,.07,{seg:32,tube:8}),F([.3,.3,.36],{color2:n,pattern:Yt.circuit,scale:1.2,finish:nt.metal}),{matrix:Fe([0,.62,0],[Math.PI/2,0,0],[1,1,1.18])}),i.add(K([0,.62,0],[.47,.56,.012],{seg:28}),F(t,{color2:n,pattern:Yt["tie-dye"],scale:.45,finish:nt.glow})),i.add(Re([0,.03,0],[.4,.03,.14],4),ct([.3,.3,.36])),s.h=1.3,s.glows.push({pos:[0,.62,.1],color:t,size:2.4})});Je("mini-black-hole","#f08a24","#7b4fd6",(i,e,t,n,s)=>{i.add(pt([[.2,0],[.16,.06],[.05,.1]],{seg:16}),ct([.25,.25,.3])),$t(i,[0,.75,0],.13,F([0,0,0],{finish:nt.matte}),18),i.add(Vt([0,0,0],.26,.05,{seg:32,tube:8,sy:.25}),F(t,{color2:[1,.95,.7],pattern:Yt.flames,scale:1.4,finish:nt.glow}),{matrix:Fe([0,.75,0],[.35,0,.2])}),i.add(Vt([0,0,0],.145,.008,{seg:28,tube:5}),Jt(zn(n,[1,1,1],.5)),{matrix:Fe([0,.75,0],[Math.PI/2,0,0])}),s.h=1,s.motion="float-spin",s.glows.push({pos:[0,.75,0],color:t,size:1.8})});Je("hover-bot","#f7f5f0","#3ad0e0",(i,e,t,n,s)=>{i.add(K([0,.95,0],[.17,.15,.15],{seg:18}),$e(t)),i.add(K([0,.97,.1],[.12,.07,.06],{seg:12}),$e(Rn));for(const a of[1,-1])i.add(K([a*.045,.975,.155],[.022,.028,.008],{seg:8}),Jt(n)),i.add(K([a*.2,.92,0],[.03,.06,.04],{seg:8}),$e(Ln(t,.8)));i.add(pt([[.07,.8],[.05,.74],[.005,.72]],{seg:12}),Jt(n)),i.add(Te([[0,1.09,0],[0,1.18,0]],()=>.005,{seg:5}),ct()),$t(i,[0,1.19,0],.016,Jt([1,.3,.3]),8),s.h=1.2,s.motion="bob",s.glows.push({pos:[0,.72,0],color:n,size:.9})});Je("dragon-egg","#7b4fd6","#e0b23a",(i,e,t,n,s)=>{i.add(K([0,.05,0],[.19,.05,.19],{seg:14}),F([.55,.42,.25],{color2:[.4,.3,.18],pattern:Yt.zebra,scale:.6,finish:nt.fur})),i.add(K([0,.24,0],[.13,.19,.13],{seg:18,bend:a=>[a[0]*(1-a[1]*.9),a[1],a[2]*(1-a[1]*.9)]}),F(t,{color2:n,pattern:Yt.honeycomb,scale:2.2,finish:nt.metal})),s.h=.45,s.glows.push({pos:[0,.25,0],color:n,size:.7})});Je("treasure-chest","#7a5236","#e0b23a",(i,e,t,n,s)=>{i.add(Re([0,.16,0],[.34,.16,.22],5),Xt(t));for(const a of[1,-1])i.add(Re([a*.2,.17,.225],[.028,.17,.008],4),ct(n));i.add(K([0,.33,0],[.31,.06,.19],{seg:14}),F(n,{color2:[1,.9,.5],pattern:Yt["polka-dots"],scale:3,finish:nt.glitter})),i.add(K([0,0,0],[.35,.1,.23],{n:4,ny:2,seg:14}),Xt(Ln(t,.85)),{matrix:Fe([0,.42,-.27],[-1,0,0])});for(const[a,o,r,l]of[[.1,.39,.05,[.9,.15,.2]],[-.12,.38,0,[.2,.5,.95]],[0,.4,-.06,[.2,.85,.45]]])i.add(pt([[.004,-.03],[.03,0],[.004,.035]],{seg:6,c:[a,o,r]}),F(l,{finish:nt.crystal}));s.h=.6,s.glows.push({pos:[0,.4,0],color:[1,.8,.3],size:1.1})});Je("cauldron","#1b1b1b","#3aff8a",(i,e,t,n,s)=>{i.add(pt([[.1,.06],[.26,.14],[.3,.3],[.24,.46],[.27,.5],[.24,.5],[.22,.47]],{seg:20}),ct(zn(t,[.2,.2,.22],.5)));for(let a=0;a<3;a++){const o=a/3*Math.PI*2;i.add(K([Math.sin(o)*.17,.05,Math.cos(o)*.17],[.04,.06,.04],{seg:8}),ct(zn(t,[.2,.2,.22],.5)))}i.add(pt([[.005,.44],[.23,.44]],{seg:20}),F(n,{color2:[1,1,1],pattern:Yt.lava,scale:2,finish:nt.glow}));for(const[a,o,r]of[[.08,.02,.05],[-.09,.06,.035],[0,-.1,.04]])$t(i,[a,.46,o],r,Jt(zn(n,[1,1,1],.3)),8);s.h=.56,s.glows.push({pos:[0,.6,0],color:n,size:1.3})});Je("glow-mushrooms","#3ad0e0","#ff3d8b",(i,e,t,n,s)=>{for(const[a,o,r,l,c]of[[0,0,.34,.14,0],[.16,.06,.2,.09,1],[-.14,.08,.15,.075,1],[.06,-.14,.24,.1,0],[-.08,-.1,.1,.05,1]])i.add(Te([[a,0,o],[a+.01,r,o]],h=>l*.3*(1-h*.3),{seg:7}),F([.95,.92,.85],{finish:nt.glow})),i.add(K([a+.01,r,o],[l,l*.6,l],{seg:14,bend:h=>[h[0],Math.max(h[1],-l*.1),h[2]]}),F(c?n:t,{color2:[1,1,1],pattern:Yt["polka-dots"],scale:1.4,finish:nt.glow})),s.glows.push({pos:[a,r+.02,o],color:c?n:t,size:l*5});s.h=.45});Je("gravity-orbs","#ffd43b","#3ad0e0",(i,e,t,n,s)=>{i.add(pt([[.17,0],[.13,.04],[.03,.06]],{seg:16}),ct([.25,.25,.3])),$t(i,[0,.8,0],.09,Jt(t),14);for(let a=0;a<3;a++){const o=a/3*Math.PI*2;$t(i,[Math.sin(o)*.24,.8+Math.sin(o*2)*.1,Math.cos(o)*.24],.04,Jt(n),10),i.add(Vt([0,0,0],.24,.003,{seg:28,tube:4}),Jt(zn(n,[1,1,1],.3)),{matrix:Fe([0,.8,0],[.4*a,0,.5*a])})}s.h=1.1,s.motion="float-spin",s.glows.push({pos:[0,.8,0],color:t,size:1.4})});const z2=Ph,B2={"floating-islands":1,nebula:2,"underwater-city":3,"neon-skyline":4,"cloud-kingdom":5,"desert-moons":6,aurora:7,"crystal-caves":8,"candy-land":9,volcano:10,"ringed-planet":11,"pixel-world":12,"black-hole":13,"digital-rain":14},H2={clear:0,rain:1,snow:2,storm:3,fog:4,meteors:5,petals:6,embers:7,stardust:8},G2=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }
`,V2=`
uniform float uTime; uniform int uTheme; uniform int uWeather; uniform vec3 uTop; uniform vec3 uBot; uniform vec3 uAccent; uniform vec3 uGround;
uniform float uNight; uniform vec3 uSun; uniform vec2 uPar; uniform float uAspect;
varying vec2 vUv;
${_h}
float stars(vec2 p, float dens){ vec2 g = floor(p * 40.); vec2 f = fract(p * 40.) - .5; float h = h21(g); float tw = .6 + .4 * sin(uTime * (1. + h * 3.) + h * 40.);
  return step(1. - dens, h) * smoothstep(.22, 0., length(f + (h22(g) - .5) * .5)) * tw; }
float clouds(vec2 p, float cover){ return smoothstep(cover, cover + .35, fbm(p)); }
float hills(float x, float f, float seed){ return (vn(vec2(x * f + seed, seed)) - .5) + .5 * (vn(vec2(x * f * 2.3 + seed * 3., 1.)) - .5); }
float island(vec2 p, float seed, out float top){ // p centered on the island
  float w = 1. - p.x * p.x; top = step(0., p.y);
  float under = -(.55 + .35 * vn(vec2(p.x * 3. + seed, seed))) * pow(max(w, 0.), .6) - .12 * vn(vec2(p.x * 9., seed));
  float up = .08 * max(w, 0.) + .05 * vn(vec2(p.x * 6. + seed, 2.));
  return step(abs(p.x), 1.) * step(under, p.y) * step(p.y, up); }
float skyline(vec2 p, float seed, float hmin, float hvar, out float win){ float w = .09; float i = floor(p.x / w); float f = fract(p.x / w);
  float h = hmin + hvar * pow(h21(vec2(i, seed)), 2.) ; float b = step(p.y, h) * step(.06, f) * step(f, .94 + .06 * step(.5, h21(vec2(i, seed + 1.))));
  vec2 g = vec2(floor(f * 5.), floor(p.y * 45.)); win = b * step(.55, h21(g + i * 7.3 + seed)) * step(.2, fract(f * 5.)) * step(.25, fract(p.y * 45.)) * step(p.y, h - .02); return b; }
void main(){
  vec2 p = (vUv - .5) * vec2(uAspect * 2., 2.) * 1.9 + vec2(0., .12);
  float t = uTime;
  float gy = clamp(p.y * .5 + .5, 0., 1.);
  vec3 col = mix(uBot, uTop, pow(gy, .85));
  vec2 sunP = uSun.xy;
  float sd = length(p - sunP);
  vec3 sunC = mix(uAccent, vec3(1.), .5);
  float glow = exp(-sd * 2.2) * uSun.z;
  if (uTheme != 3 && uTheme != 8 && uTheme != 13 && uTheme != 14) { col += sunC * glow * .5; col = mix(col, sunC * 1.25, smoothstep(.13, .11, sd) * uSun.z); }
  if (uTheme != 3 && uTheme != 8) col += stars(p + uPar * .01, .035) * uNight;

  if (uTheme == 1) {
    col = mix(col, vec3(1.), clouds(p * vec2(.9, 2.2) + vec2(t * .01, 0.) + uPar * .02, .5) * .55 * (1. - uNight * .6));
    for (int i = 0; i < 5; i++) { float fi = float(i); float dpt = .35 + fi * .16; vec2 c = vec2(-1.5 + fi * .78 + sin(fi * 4.1) * .25, -.35 + sin(fi * 2.7) * .38 + sin(t * .25 + fi * 2.) * .03);
      vec2 q = (p + uPar * (.04 + .05 * dpt) - c) / (.2 + .26 * dpt); float top; float m = island(q, fi * 7.3, top);
      vec3 rock = mix(uGround * .55, uGround, vn(q * 6.)) * (.5 + .5 * dpt); vec3 grass = mix(vec3(.25, .62, .3), vec3(.55, .82, .35), vn(q * 9.)) * (1. - uNight * .55);
      vec3 ic = mix(rock, grass, smoothstep(-.06, .0, q.y)); ic = mix(col, ic, .45 + .55 * dpt);
      float fall = step(abs(q.x - .35 * sin(fi * 3.)) , .035) * step(q.y, 0.) * step(-2.2, q.y) * step(.4, h21(vec2(fi, 2.)));
      col = mix(col, ic, m); col = mix(col, vec3(.85, .95, 1.), fall * (1. - m) * (.5 + .3 * sin(q.y * 30. + t * 6.)));
      float tree = smoothstep(.05, .03, length((q - vec2(-.3, .19)) * vec2(1., .75))) + smoothstep(.04, .02, length((q - vec2(.25, .16)) * vec2(1., .8)));
      col = mix(col, vec3(.16, .45, .25) * (1. - uNight * .5), clamp(tree, 0., 1.) * (.5 + .5 * dpt)); }
    col = mix(col, vec3(1.), clouds(p * vec2(.6, 1.8) + vec2(-t * .015, 3.) + uPar * .08, .56) * .8 * smoothstep(-.2, -1., p.y) * (1. - uNight * .6));
  } else if (uTheme == 2) {
    vec2 q = p * .8 + uPar * .02; float n1 = fbm(q * 1.4 + vec2(t * .008, 0.)); float n2 = fbm(q * 2.2 + 9. - vec2(0., t * .006)); float n3 = fbm(q * 3.5 + n1 * 2.);
    col = uBot * .25; col += uTop * smoothstep(.3, .8, n1) * 1.1; col += uAccent * smoothstep(.45, .85, n2) * .9; col += vec3(1., .85, .7) * pow(smoothstep(.5, .95, n3 * n1 * 1.8), 2.) * .8;
    col += stars(p + uPar * .01, .09) + stars(p * 2.3 + 4., .05) * .7;
    vec2 pc = p - vec2(.75, .35) + uPar * .05; float pl = smoothstep(.2, .19, length(pc)); float lit = clamp(dot(normalize(vec3(pc, sqrt(max(.04 - dot(pc, pc), 0.)))), normalize(vec3(-.6, .4, .5))), 0., 1.);
    col = mix(col, mix(uGround * .3, uGround * 1.3, lit) * (.8 + .2 * vn(pc * vec2(4., 30.))), pl);
  } else if (uTheme == 3) {
    col = mix(uBot * .7, uTop, pow(gy, 1.4));
    float rays = 0.; for (int i = 0; i < 4; i++) { float fi = float(i); float x = p.x * (.8 + fi * .1) + p.y * (.25 + fi * .06) + fi * 1.7; rays += pow(max(0., sin(x * 3. + sin(t * .2 + fi) * .6)), 12.) * (.5 + .5 * sin(t * .5 + fi * 2.)); }
    col += uAccent * rays * .22 * smoothstep(-1., 1., p.y);
    for (int L = 0; L < 2; L++) { float fl = float(L); vec2 q = p + uPar * (.03 + .04 * fl); float base = -.5 - fl * .22; float i = floor((q.x + 4.) / (.5 - fl * .1)); float f = fract((q.x + 4.) / (.5 - fl * .1)) - .5; float r = .14 + .1 * h21(vec2(i, fl + 3.));
      float dome = step(length(vec2(f * (.5 - fl * .1), q.y - base)), r) * step(base, q.y); float tower = step(abs(f), .08 + .06 * h21(vec2(i, 9. + fl))) * step(q.y, base + .25 + .3 * h21(vec2(i, 5. + fl))) ;
      float m = max(dome, tower) ; m = max(m, step(q.y, base)); vec3 cc = mix(uBot * .5, uGround, .25 + .45 * fl);
      float win = step(.7, h21(floor(q * vec2(40., 30.)) + fl)) * m * step(base, q.y); col = mix(col, cc, m); col += vec3(1., .9, .55) * win * .6 * (.6 + .4 * sin(t + i)); col += uAccent * dome * .12; }
    for (int i = 0; i < 5; i++) { float fi = float(i); float dir = mod(fi, 2.) * 2. - 1.; vec2 c = vec2(mod(t * (.05 + fi * .012) * dir + fi * .9 + 2., 4.4) - 2.2, -.1 + .22 * sin(fi * 2.3) + .03 * sin(t + fi));
      vec2 q = (p + uPar * .09 - c) * vec2(dir, 1.) / (.05 + .012 * fi); float body = step(length(q * vec2(.55, 1.)), 1.); float tail = step(abs(q.y), (q.x + 2.4) * .8) * step(-2.4, q.x) * step(q.x, -1.5);
      col = mix(col, mix(uAccent, vec3(1., .7, .3), fract(fi * .37)) * .8, max(body, tail) * .9); }
    for (int i = 0; i < 7; i++) { float fi = float(i); float x = -1.6 + fi * .52 + sin(fi * 7.) * .1; float sway = sin(t * .8 + fi + p.y * 3.) * .05 * (p.y + 1.); float w = .03 * (1. - smoothstep(-1., -.2 + .25 * sin(fi * 3.), p.y));
      col = mix(col, vec3(.08, .3, .22), step(abs(p.x + uPar.x * .14 - x - sway), w) * step(p.y, -.2 + .25 * sin(fi * 3.))); }
    vec2 bg = vec2(floor(p.x * 9.), 0.); float bx = (h21(bg) - .5) * .08; float by = fract(h21(bg + 3.) + t * (.05 + .05 * h21(bg + 1.))) * 2.2 - 1.1; col += vec3(.8, .95, 1.) * smoothstep(.02, .01, abs(length(vec2(fract(p.x * 9.) / 9. - .055 + bx, p.y - by)) - .016)) * .5;
  } else if (uTheme == 4) {
    col += uAccent * smoothstep(.5, -.6, p.y) * .45;
    float mo = smoothstep(.16, .155, length(p - vec2(-.9, .55) + uPar * .01)); col = mix(col, vec3(1., .95, .85), mo * uNight);
    for (int L = 0; L < 3; L++) { float fl = float(L); vec2 q = vec2(p.x + uPar.x * (.02 + .05 * fl) + fl * 3.3, p.y + 1. + uPar.y * (.02 + .03 * fl)); float win; float b = skyline(q * (1.3 - fl * .22), fl * 5., .25 + .1 * (2. - fl), .95 - fl * .2, win);
      vec3 bc = mix(uBot * .8, vec3(.03, .03, .07), .35 + .3 * fl); col = mix(col, bc, b); vec3 wc = mix(vec3(1., .85, .5), mix(uAccent, vec3(.3, .9, 1.), fract(fl * .5 + floor(q.x * 11.) * .37)), .5); col += wc * win * (.35 + .45 * uNight) * (.7 + .3 * fl); }
    for (int i = 0; i < 4; i++) { float fi = float(i); float y = -.05 + fi * .2 + .03 * sin(fi * 5.); float dir = mod(fi, 2.) * 2. - 1.; float x = mod(t * (.25 + .08 * fi) * dir + fi * 1.3 + 2., 4.6) - 2.3;
      float car = smoothstep(.014, .004, abs(p.y - y)) * smoothstep(.09, .0, (p.x - x) * dir) * step(0., (p.x - x) * dir * -1. + .09) ; col += mix(vec3(1., .3, .5), vec3(.3, .9, 1.), mod(fi, 2.)) * smoothstep(.012, .0, abs(p.y - y)) * smoothstep(.14, 0., abs(p.x - x)) * 1.4; }
    col += uAccent * .1 * fbm(p * 3. + t * .02) * smoothstep(-.2, -1., p.y);
  } else if (uTheme == 5) {
    float far = clouds(p * vec2(.7, 2.5) + vec2(t * .008, 0.) + uPar * .02, .45); col = mix(col, mix(uAccent, vec3(1.), .7), far * .5 * smoothstep(.6, -.2, p.y));
    for (int i = 0; i < 4; i++) { float fi = float(i); vec2 c = vec2(-.9 + fi * .62 + sin(fi * 3.) * .1, -.38); vec2 q = p + uPar * .05 - c; float w = .045 + .03 * h21(vec2(fi, 1.)); float h = .5 + .45 * h21(vec2(fi, 2.));
      float tower = step(abs(q.x), w) * step(0., q.y) * step(q.y, h); float roof = step(abs(q.x), (h + .22 - q.y) * .45) * step(h, q.y) * step(q.y, h + .22); float m = max(tower, roof);
      col = mix(col, mix(uGround, vec3(1., .95, .9), .35 + .3 * smoothstep(-.1, .1, q.x)), tower * .92); col = mix(col, uAccent * .9, roof); col += vec3(1., .85, .5) * step(.6, h21(floor(q * vec2(60., 14.)))) * tower * step(abs(q.x), w * .5) * .5; }
    float sea = fbm(vec2(p.x * 1.2 + t * .02, p.y * 4.) + uPar * .1); float seaM = smoothstep(-.25 + sea * .25, -.6, p.y); col = mix(col, mix(vec3(1.), uBot, .25 + .3 * sea) , seaM);
    float sea2 = fbm(vec2(p.x * .8 - t * .03, p.y * 3. + 4.) + uPar * .16); col = mix(col, vec3(1.) * (.9 + .1 * sea2), smoothstep(-.6 + sea2 * .2, -.95, p.y));
    for (int i = 0; i < 3; i++) { float fi = float(i); vec2 c = vec2(-1.1 + fi * 1.1 + sin(t * .05 + fi) * .2, .35 + .15 * sin(fi * 4. + t * .2)); vec2 q = (p + uPar * .07 - c) / .07; float bal = step(length(q * vec2(1., .85)), 1.); float bask = step(abs(q.x), .25) * step(-1.9, q.y) * step(q.y, -1.5);
      col = mix(col, mix(uAccent, vec3(1., .5, .4), fract(fi * .4)) * (.8 + .2 * step(.5, fract(atan(q.x, q.y) * 1.3))), bal); col = mix(col, uGround * .6, bask); }
  } else if (uTheme == 6) {
    for (int i = 0; i < 3; i++) { float fi = float(i); vec2 c = vec2(-.85 + fi * .75, .5 - fi * .12 + .1 * sin(fi * 5.)); float r = .2 - fi * .055; vec2 q = p + uPar * .012 - c; float m = smoothstep(r, r - .008, length(q));
      float sh = smoothstep(r * 1.1, r * .7, length(q - vec2(r * .5, r * .3))); vec3 mc = mix(vec3(1., .9, .8), uAccent, fi * .4) * (.45 + .55 * sh) * (.9 + .1 * vn(q * 30.)); col = mix(col, mc, m * (.75 + .25 * uNight)); }
    for (int L = 0; L < 4; L++) { float fl = float(L); float y = -.2 - fl * .2 + .16 * hills(p.x + uPar.x * (.03 + .05 * fl), 1.2 + fl * .5, fl * 9.) + .05 * sin(p.x * (3. + fl) + fl);
      vec3 dc = mix(uBot, uGround, .3 + .23 * fl) * (.75 + .25 * smoothstep(-.3, .3, sin(p.x * 4. + fl * 2. + p.y * 3.))); col = mix(col, dc, smoothstep(y + .006, y - .006, p.y)); }
    vec2 q = p + uPar * .03 - vec2(.55, -.22); float pyr = step(abs(q.x), (.24 - q.y) * .8) * step(0., q.y) ; col = mix(col, uGround * mix(.55, .9, step(0., q.x)), pyr * step(q.y, .24));
  } else if (uTheme == 7) {
    for (int i = 0; i < 3; i++) { float fi = float(i); float x = p.x * (1.2 + fi * .3) + fi * 2.; float wave = sin(x * 1.5 + t * .15 + fi) * .2 + sin(x * 3.7 - t * .1) * .08; float band = exp(-pow((p.y - .25 - wave - fi * .12) * 3.2, 2.));
      float rays = .55 + .45 * sin(x * 22. + sin(t * .4 + fi) * 3.); col += mix(uAccent, vec3(.3, 1., .7), .5 + .5 * sin(fi * 2. + x)) * band * rays * .55 * smoothstep(-.2, .4, p.y); }
    for (int L = 0; L < 3; L++) { float fl = float(L); float px = p.x + uPar.x * (.02 + .04 * fl); float y = -.25 - fl * .2 + .5 * abs(hills(px, .9 + fl * .6, fl * 4. + 2.)) * (1. - fl * .25);
      float m = smoothstep(y + .005, y - .005, p.y); float snow = smoothstep(y - .12, y, p.y) * step(.0, vn(vec2(px * 12., fl)) - .35 + (p.y - y + .1) * 4.);
      vec3 mc = mix(uGround * .5, uGround, fl * .4); col = mix(col, mix(mc, vec3(.92, .96, 1.) * (.5 + .5 * (1. - uNight * .5)), snow * .9), m); }
  } else if (uTheme == 8) {
    col = mix(uBot * .25, uTop * .5, gy); float cave = smoothstep(.75, 1.25, length(p * vec2(.62, 1.) + .1 * fbm(p * 2.)) ); col = mix(col, uGround * .12, cave);
    for (int i = 0; i < 12; i++) { float fi = float(i); float up = step(.5, h21(vec2(fi, 4.))) * 2. - 1.; vec2 c = vec2(-1.55 + fi * .28 + .1 * sin(fi * 9.), up * (.92 - .25 * h21(vec2(fi, 8.)))); float h = .35 + .5 * h21(vec2(fi, 1.)); float w = .05 + .05 * h21(vec2(fi, 2.));
      vec2 q = (p + uPar * (.04 + .05 * h21(vec2(fi, 6.))) - c) * vec2(1., -up); q.x += q.y * (h21(vec2(fi, 3.)) - .5) * .6; float m = step(abs(q.x), w * (1. - q.y / h)) * step(0., q.y) * step(q.y, h);
      vec3 cc = mix(uAccent, vec3(.4, .9, 1.), h21(vec2(fi, 5.))); float facet = .55 + .45 * step(0., q.x); col = mix(col, cc * facet * (.7 + .3 * sin(t * 1.5 + fi)), m); col += cc * exp(-length(p - c - vec2(0., -up * h * .5)) * 5.) * .22 * (.7 + .3 * sin(t * 1.5 + fi)); }
    float lake = smoothstep(-.62, -.66, p.y) * (1. - cave); col = mix(col, uTop * .6 + uAccent * .25 * (.5 + .5 * sin(p.x * 20. + t + sin(p.y * 60.) * 2.)), lake * .8);
    col += stars(p * 1.5 + vec2(0., t * .01), .03) * uAccent;
  } else if (uTheme == 9) {
    col = mix(col, vec3(1.), clouds(p * vec2(1., 2.4) + vec2(t * .012, 2.) + uPar * .02, .55) * .75);
    for (int L = 0; L < 3; L++) { float fl = float(L); float px = p.x + uPar.x * (.03 + .05 * fl); float y = -.3 - fl * .2 + .16 * sin(px * (1.6 + fl * .7) + fl * 2.) + .05 * sin(px * 5. + fl);
      vec3 hc = mix(vec3(1., .7, .82), mix(vec3(.65, .9, .8), vec3(.8, .7, 1.), fl * .5), fl * .5 + .25); float stripe = step(.5, fract((p.y - y) * 9. + px * 1.5)); hc = mix(hc, vec3(1.), stripe * .25);
      col = mix(col, hc, smoothstep(y + .006, y - .006, p.y));
      for (int k = 0; k < 3; k++) { float fk = float(k); float tx = -1.3 + fk * 1.15 + fl * .4; float ty = -.3 - fl * .2 + .16 * sin(tx * (1.6 + fl * .7) + fl * 2.) + .05 * sin(tx * 5. + fl); vec2 q = vec2(px - tx, p.y - ty) / (.16 - fl * .02);
        float stick = step(abs(q.x), .05) * step(0., q.y) * step(q.y, 1.2); vec2 lq = q - vec2(0., 1.5); float lr = length(lq); float lol = step(lr, .55); float sw = step(.5, fract(atan(lq.y, lq.x) / 6.283 * 3. + lr * 2.5 - t * .05));
        col = mix(col, vec3(1.), stick); col = mix(col, mix(mix(vec3(1., .4, .55), vec3(.4, .8, 1.), fract(fk * .5 + fl * .3)), vec3(1.), sw), lol); } }
  } else if (uTheme == 10) {
    col = mix(vec3(.12, .02, .03), uTop * .5 + vec3(.3, .05, .0), gy); col += vec3(1., .35, .1) * exp(-length((p - vec2(0., -.1)) * vec2(.7, 1.4)) * 1.6) * .6;
    float smoke = fbm(vec2(p.x * 1.5 - t * .03, p.y * 1.2 - t * .06) + uPar * .02); col = mix(col, vec3(.08, .06, .07), smoothstep(.45, .8, smoke) * smoothstep(-.2, .6, p.y) * .85);
    vec2 q = p + uPar * .04; float cone = (.55 - abs(q.x) * .85) + .05 * vn(vec2(q.x * 12., 1.)) - .9; float crater = step(abs(q.x), .13) * step(-.48, q.y); float m = step(q.y, cone + .55) * (1. - crater * step(-.42, q.y));
    col = mix(col, vec3(.07, .05, .06) * (.7 + .6 * vn(q * 9.)), m);
    float lava = 0.; for (int i = 0; i < 4; i++) { float fi = float(i); float lx = (fi - 1.5) * .09 + .25 * (q.y + .4) * (fi - 1.5) * -.9 + .03 * sin(q.y * 14. + fi * 3.); lava += smoothstep(.022, .0, abs(q.x - lx)) * step(q.y, -.4) * step(-1., q.y); }
    col += vec3(1., .45, .08) * lava * m * (.7 + .3 * sin(t * 2. + q.y * 20.)) * 1.3; col += vec3(1., .5, .1) * step(abs(q.x), .13) * smoothstep(-.6, -.42, q.y) * step(q.y, -.4) ;
    vec2 eg = floor(p * vec2(14., 1.)); float ex = fract(p.x * 14.) - .5 + .3 * sin(t + eg.x); float ey = fract(h21(eg) + t * (.08 + .1 * h21(eg + 2.))) * 1.6 - .5; col += vec3(1., .6, .15) * smoothstep(.12, 0., length(vec2(ex, (p.y - ey) * 14.))) * step(abs(p.x), .9);
    float gnd = -.75 + .05 * vn(vec2(p.x * 5., 3.)); col = mix(col, vec3(.04, .03, .04), step(p.y, gnd)); col += vec3(1., .4, .05) * smoothstep(.02, 0., abs(fbm(p * 5. + 2.) - .5)) * step(p.y, gnd) * .8;
  } else if (uTheme == 11) {
    col = mix(uBot * .15, uTop * .3, gy) + stars(p + uPar * .01, .08) + stars(p * 2.1 + 3., .04) * .6 + uAccent * .12 * fbm(p * 1.5);
    vec2 c = vec2(.35, -.15); vec2 q = p + uPar * .05 - c; float R = .78; float r = length(q); float pl = smoothstep(R, R - .006, r);
    vec3 n = vec3(q / R, sqrt(max(1. - dot(q, q) / (R * R), 0.))); float lit = clamp(dot(n, normalize(vec3(-.7, .45, .45))), 0., 1.); float band = vn(vec2(q.y * 9. + sin(q.x * 2. + t * .02) * .3, 1.)) ; vec3 pc = mix(uGround, uAccent, band) * (.9 + .1 * vn(vec2(q.x * 3. + t * .01, q.y * 40.)));
    vec2 rq = vec2(q.x * .95 + q.y * .35, (q.y - q.x * .35) * 3.6); float rr = length(rq); float ring = smoothstep(1.0, 1.02, rr / R) * smoothstep(1.75, 1.72, rr / R) * (.55 + .45 * sin(rr * 60.)) * step(.35, vn(vec2(rr * 30., 2.)) + .3);
    float behind = step(0., q.y - q.x * .35); col = mix(col, mix(uTop, vec3(1., .95, .85), .6), ring * .75 * (1. - pl * behind)); col = mix(col, pc * (.08 + lit * 1.1), pl * (1. - ring * (1. - behind) * .75));
    col += uAccent * smoothstep(R + .1, R, r) * (1. - pl) * .25;
    vec2 mq = p + uPar * .08 - vec2(-.95, .5); float moon = smoothstep(.09, .085, length(mq)); col = mix(col, vec3(.8, .8, .85) * (.3 + .8 * clamp(dot(normalize(vec3(mq / .09, .5)), normalize(vec3(-.7, .45, .45))), 0., 1.)), moon);
  } else if (uTheme == 12) {
    vec2 px = floor((p + uPar * .03) * 22.) / 22.; float gy2 = clamp(px.y * .5 + .5, 0., 1.); col = mix(uBot, uTop, floor(gy2 * 6.) / 6.);
    col = mix(col, vec3(1., .95, .5), step(length(floor((p - sunP) * 22.) / 22.), .14) * uSun.z); col += step(.985, h21(px * 31.)) * uNight;
    float cl = step(.62, vn(vec2(px.x * 2.2 + floor(t * .5) * .05, px.y * 6.))) * step(.25, px.y); col = mix(col, vec3(1.), cl * (1. - uNight * .6));
    float h1 = floor((-.2 + .25 * hills(px.x, 1.4, 4.)) * 22.) / 22.; col = mix(col, mix(uGround, uBot, .5), step(px.y, h1));
    float h2 = floor((-.5 + .16 * hills(px.x, 2.2, 9.)) * 22.) / 22.; vec3 g1 = mix(vec3(.3, .75, .3), vec3(.2, .6, .25), step(.5, fract(px.x * 11.))) * (1. - uNight * .5); col = mix(col, g1, step(px.y, h2)); col = mix(col, uGround * .8, step(px.y, h2 - .09));
    float tx = floor(px.x * 2.2); vec2 tq = vec2(fract(px.x * 2.2) - .5, px.y - h2); float tree = step(abs(tq.x), .07) * step(0., tq.y) * step(tq.y, .14) ; float leaf = step(abs(tq.x), .2) * step(.14, tq.y) * step(tq.y, .32) * step(.4, h21(vec2(tx, 3.)));
    col = mix(col, vec3(.45, .28, .15), tree * step(.4, h21(vec2(tx, 3.)))); col = mix(col, vec3(.15, .5, .22) * (1. - uNight * .4), leaf);
  } else if (uTheme == 13) {
    vec2 q = p + uPar * .03 - vec2(.1, .05); float r = length(q); float a = atan(q.y, q.x);
    vec2 lp = q * (1. + .12 / max(r * r, .02)); col = vec3(.01, .01, .03) + stars(lp * 1.2, .09) + stars(lp * 2.5 + 3., .05) * .6 + uAccent * .1 * fbm(lp * 2.);
    vec2 dq = vec2(q.x, q.y * 3.4 + q.x * .5); float dr = length(dq); float disk = smoothstep(.32, .4, dr) * smoothstep(1.25, .6, dr); float sw = fbm(vec2(atan(dq.y, dq.x) * 2. + t * .25 + dr * 6., dr * 8.));
    vec3 dc = mix(vec3(1., .55, .15), mix(uAccent, vec3(1., .95, .8), .5), smoothstep(.9, .35, dr)) * (.5 + sw); float front = step(q.y * 3.4 + q.x * .5, 0.);
    float hole = smoothstep(.27, .25, r); float halo = smoothstep(.02, 0., abs(r - .28)) + exp(-abs(r - .3) * 14.) * .7;
    col += dc * disk * (1. - front) * 1.1; col = mix(col, vec3(0.), hole); col += vec3(1., .8, .5) * halo * (.75 + .25 * sin(a * 3. + t * .5)); col += dc * disk * front * 1.2;
  } else if (uTheme == 14) {
    col = mix(vec3(.0, .02, .01), vec3(.0, .09, .05), gy);
    vec2 q = (p + uPar * .02) * vec2(16., 9.); float cx = floor(q.x); float sp = .5 + h21(vec2(cx, 1.)) * 1.4; float y = q.y + t * sp + h21(vec2(cx, 9.)) * 30.; float cell = floor(y);
    float gl = step(.3, h21(vec2(cx, cell))) * step(sdBox(fract(vec2(q.x, y)) - .5, vec2(.24, .32)), 0.); float head = pow(fract(y * .08), 8.); float trail = pow(fract(y * .08), 1.5);
    col += mix(vec3(.1, .9, .4), uAccent, .3) * gl * (.12 + trail * .5) + vec3(.8, 1., .9) * gl * head;
    float win; float b = skyline(vec2(p.x + uPar.x * .06 + 3., p.y + 1.), 3., .2, .75, win); col = mix(col, vec3(.0, .015, .01), b); col += vec3(.2, 1., .5) * win * .35;
  }

  // weather sits in front of everything
  if (uWeather == 1 || uWeather == 3) { vec2 q = vec2(p.x * 26. + p.y * 3., p.y * 3. + t * 3.5); float id = floor(q.x); float dr = smoothstep(.1, 0., abs(fract(q.x) - .5)) * smoothstep(.0, .35, fract(q.y + h21(vec2(id, 1.)) * 7.)) * step(.45, h21(vec2(id, 4.)));
    col = mix(col, col * .78 + vec3(.1, .12, .16), .35); col += vec3(.7, .8, 1.) * dr * .28;
    if (uWeather == 3) { float fl = pow(max(0., sin(t * .7) * sin(t * 1.3 + 1.) * sin(t * 2.9)), 6.) * 3.; col += vec3(.8, .85, 1.) * min(fl, 1.) * .6; } }
  else if (uWeather == 2) { for (int i = 0; i < 2; i++) { float fi = float(i); vec2 q = p * (7. + fi * 6.) + vec2(sin(t * .4 + fi) * .4, t * (.5 + fi * .25)) + uPar * (.2 + .2 * fi); vec2 g = floor(q); vec2 f = fract(q) - .5 + (h22(g) - .5) * .6; col += smoothstep(.09, .02, length(f)) * step(.5, h21(g + 7.)) * (.8 - .3 * fi); } }
  else if (uWeather == 4) { float f = fbm(p * 1.3 + vec2(t * .02, 0.)); col = mix(col, mix(uBot, vec3(.85, .88, .92), .6), .35 + .35 * f * smoothstep(.6, -.6, p.y)); }
  else if (uWeather == 5) { for (int i = 0; i < 3; i++) { float fi = float(i); float ph = fract(t * (.11 + .05 * fi) + fi * .37); vec2 a = vec2(1.6 - ph * 3.4 + fi * .4, .95 - ph * 1.3 + fi * .15); vec2 d = normalize(vec2(-3.4, -1.3)); vec2 q = p - a; float along = dot(q, d); float perp = abs(q.x * d.y - q.y * d.x);
      col += vec3(1., .95, .8) * smoothstep(.012, .0, perp) * smoothstep(-.45, 0., along) * step(along, 0.) * smoothstep(1., .8, ph) * 1.4; } }
  else if (uWeather == 6 || uWeather == 7 || uWeather == 8) { float up = uWeather == 7 ? -1. : 1.; vec2 q = p * 6. + vec2(sin(t * .5 + p.y * 2.) * .5, t * .35 * up) + uPar * .3; vec2 g = floor(q); vec2 f = fract(q) - .5 + (h22(g) - .5) * .6;
    float a = h21(g) * 6.28 + t; f = mat2(cos(a), -sin(a), sin(a), cos(a)) * f; float m = uWeather == 6 ? smoothstep(.02, -.02, length(f * vec2(1., 2.2)) - .13) : smoothstep(.07, .0, length(f)) * (.6 + .4 * sin(t * 3. + h21(g) * 30.));
    vec3 c = uWeather == 6 ? vec3(1., .72, .82) : uWeather == 7 ? vec3(1., .55, .15) : mix(uAccent, vec3(1.), .6); col = uWeather == 6 ? mix(col, c, m * step(.55, h21(g + 3.))) : col + c * m * step(.5, h21(g + 3.)); }
  gl_FragColor = vec4(col, 1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,rr={"floating-islands":{dawn:["#7a8fd9","#ffc9b0","#ffd9a0","#9a7a6a"],day:["#3f8fe8","#bfe6ff","#fff3c4","#9a8068"],sunset:["#5b4a9e","#ff9a6a","#ffcf7a","#8a6458"],night:["#0c1238","#2a3a78","#a8c8ff","#565a78"]},nebula:{dawn:["#ff7ab8","#2a1a5a","#ffb86a","#c88a6a"],day:["#4aa8ff","#1a1a5a","#ff6ad0","#8a9ad8"],sunset:["#ff8a4a","#3a1040","#ffd86a","#d87a5a"],night:["#6a4aff","#0a0a2a","#3ad8c8","#7a8ac8"]},"underwater-city":{dawn:["#4ab8c8","#123a5a","#ffd0a8","#3a6a7a"],day:["#3ad0e0","#0e3f6e","#c8fff0","#3a7a8a"],sunset:["#5a9ac8","#1a2a5a","#ffb07a","#3a5a7a"],night:["#124a7a","#04142e","#6ad8ff","#1e4a6a"]},"neon-skyline":{dawn:["#3a2a6a","#ff9a8a","#ff6ab8","#2a2440"],day:["#4a6ad8","#e8b8e8","#ff5ab0","#3a3458"],sunset:["#2a1a5a","#ff6a5a","#ff3d8b","#241a38"],night:["#060418","#3a1050","#ff2a9a","#12101e"]},"cloud-kingdom":{dawn:["#8a9ae8","#ffd0c0","#ff9ab0","#d8c0b0"],day:["#4a9af0","#d8f0ff","#ffb84a","#e0d0c0"],sunset:["#6a4aa8","#ffb07a","#ff7a5a","#d0a898"],night:["#101a48","#3a4a88","#a8b8ff","#8088a8"]},"desert-moons":{dawn:["#6a6ab8","#ffc098","#ffd8b0","#d89868"],day:["#4a98d8","#ffe8c0","#fff0d0","#e0a868"],sunset:["#4a2a6a","#ff8a4a","#ffc878","#c87848"],night:["#0a0a2a","#2a2858","#c8c8ff","#5a4a68"]},aurora:{dawn:["#2a3a78","#c898b8","#6affc0","#6a7a98"],day:["#3a78c8","#c8e8f8","#6affd0","#7a8aa8"],sunset:["#2a1a58","#d87a78","#6affb0","#5a5a88"],night:["#040820","#0e2a4a","#3affa0","#3a4a6a"]},"crystal-caves":{dawn:["#4a3a7a","#1a1030","#ff9ad8","#3a2a4a"],day:["#3a6a9a","#101a30","#6ad8ff","#2a3a4a"],sunset:["#7a3a5a","#1a0a20","#ffb06a","#4a2a3a"],night:["#2a2a6a","#06061a","#a86aff","#22223a"]},"candy-land":{dawn:["#ffb8d8","#ffe8c8","#ff8ab8","#ffc8d8"],day:["#8ad8ff","#ffe0f0","#ff7ab0","#ffd0e0"],sunset:["#c88ae8","#ffc0a0","#ff6a9a","#f0b0c8"],night:["#3a2a78","#8a5aa8","#ffa8e0","#a880c0"]},volcano:{dawn:["#5a2a3a","#2a0a10","#ff7a2a","#2a1a1a"],day:["#7a4a3a","#3a1410","#ff8a2a","#2a1a1a"],sunset:["#6a1a1a","#2a0608","#ff5a1a","#2a1414"],night:["#2a0a14","#0e0204","#ff4a10","#1a0e0e"]},"ringed-planet":{dawn:["#6a4a9a","#1a1038","#ffb88a","#d8a878"],day:["#4a6ac8","#10143a","#8ad0ff","#c8b088"],sunset:["#8a3a6a","#1a0a28","#ff9a5a","#d89868"],night:["#3a3a9a","#04041a","#a88aff","#a898c8"]},"pixel-world":{dawn:["#6a7ad8","#ffc8a8","#ffe07a","#8a6a4a"],day:["#3a9af0","#a8e0ff","#ffe84a","#8a6a4a"],sunset:["#5a3a9a","#ff9a5a","#ffd04a","#7a5a48"],night:["#0a0a3a","#2a2a6a","#e8e8ff","#4a4a5a"]},"black-hole":{dawn:["#2a1a4a","#000004","#ff9a6a","#000000"],day:["#1a2a5a","#000004","#8ac8ff","#000000"],sunset:["#3a1a2a","#000004","#ff7a3a","#000000"],night:["#1a1a4a","#000004","#c88aff","#000000"]},"digital-rain":{dawn:["#0a2a1a","#000000","#6affa0","#000000"],day:["#0a3a2a","#000000","#3aff8a","#000000"],sunset:["#1a2a0a","#000000","#c8ff3a","#000000"],night:["#04180e","#000000","#2aff7a","#000000"]}},x0={dawn:{sun:[-.9,-.05,.9],night:.25},day:{sun:[.7,.62,1],night:0},sunset:{sun:[.85,-.12,1],night:.2},night:{sun:[.8,.6,.35],night:1}},Ye=ht,Gt=bn,lr=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Hn={W:3,H:3,back:-2.3,front:7.5,winY:1.62},Sn=new ji,v0={paint:[0,1,Ye.matte],wallpaper:[Gt.wallpaper,1,Ye.matte],bricks:[Gt.bricks,.45,Ye.matte],"wood-panel":[Gt.planks,1.6,Ye.wood],tiles:[Gt.tiles,1,Ye.plastic],concrete:[Gt.concrete,1,Ye.matte],stripes:[Gt.stripes,.16,Ye.matte],checker:[Gt.checker,.16,Ye.matte],"polka-dots":[Gt["polka-dots"],.16,Ye.matte],stars:[Gt.stars,.14,Ye.matte],honeycomb:[Gt.honeycomb,.16,Ye.matte],waves:[Gt.waves,.16,Ye.matte],"neon-grid":[Gt["neon-grid"],.6,Ye.matte],clouds:[Gt.clouds,.5,Ye.matte],galaxy:[Gt.galaxy,.25,Ye.matte],circuit:[Gt.circuit,.12,Ye.matte],matrix:[Gt.matrix,.12,Ye.matte],lava:[Gt.lava,.22,Ye.matte],wood:[Gt.planks,.5,Ye.wood],carpet:[Gt.carpet,1,Ye.velvet],marble:[Gt.marble,.6,Ye.plastic],grass:[Gt.grass,1,Ye.fur],water:[Gt.water,.5,Ye.plastic]};function _0(i,e=!1){const t=v0[i.style]??v0.paint;return F(Lt(i.color),{color2:Lt(i.color2),pattern:t[0],scale:t[1]*(e&&i.style==="tiles"?.5:1)/i.scale,finish:t[2]})}const cr={cozy:{sky:"#ffe6c8",ground:"#b48a6a",hemi:1.15,key:"#ffe2b8",keyI:2.1,rim:"#ffc890",rimI:1.2,accent:"#ffb060",accentI:5,exposure:1},bright:{sky:"#f4f8ff",ground:"#c8c0b4",hemi:1.6,key:"#ffffff",keyI:2.3,rim:"#d8e8ff",rimI:1.2,accent:"#ffffff",accentI:2,exposure:1.05},cool:{sky:"#cfe4ff",ground:"#7a8aa8",hemi:1.25,key:"#e0efff",keyI:2,rim:"#8ac8ff",rimI:1.6,accent:"#5aa8ff",accentI:5,exposure:1},sunset:{sky:"#ffc8a0",ground:"#a86a5a",hemi:1.1,key:"#ffb478",keyI:2.4,rim:"#ff7a9a",rimI:1.6,accent:"#ff8a3a",accentI:6,exposure:1},moonlit:{sky:"#8aa0d8",ground:"#3a4468",hemi:.95,key:"#c8d8ff",keyI:1.7,rim:"#8ab0ff",rimI:1.8,accent:"#6a8aff",accentI:4,exposure:.95},neon:{sky:"#b890ff",ground:"#3a2a68",hemi:.95,key:"#f0d8ff",keyI:1.7,rim:"#3ae0ff",rimI:2.4,accent:"#ff3da8",accentI:9,exposure:1},candle:{sky:"#ffb878",ground:"#5a3020",hemi:.75,key:"#ffc890",keyI:1.7,rim:"#ff9a50",rimI:1.2,accent:"#ff9030",accentI:7,exposure:.95},blacklight:{sky:"#7a4aff",ground:"#1a0a48",hemi:.85,key:"#d8c0ff",keyI:1.5,rim:"#c040ff",rimI:2.6,accent:"#8a3aff",accentI:10,exposure:1},disco:{sky:"#d0b0ff",ground:"#3a2a58",hemi:.95,key:"#ffffff",keyI:1.7,rim:"#ff60c0",rimI:2.2,accent:"#ff40a0",accentI:10,exposure:1},underwater:{sky:"#8ae0e8",ground:"#1a5a78",hemi:1.15,key:"#d0fff4",keyI:1.8,rim:"#40d0e0",rimI:1.8,accent:"#30c0d0",accentI:6,exposure:1}},hl=i=>{let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)/4294967296};function W2(i){const e=[],t=(l,c,h)=>{for(let u=0;u<72;u++){const f=u/72*Math.PI*2,p=Math.cos(f),g=Math.sin(f);e.push([l*Math.sign(p)*Math.abs(p)**(2/h),c*Math.sign(g)*Math.abs(g)**(2/h)])}},n=(l,c,h)=>{for(let u=0;u<l;u++){const f=h+u/l*Math.PI*2,p=h+(u+1)/l*Math.PI*2;for(let g=0;g<10;g++){const x=g/10;e.push([c*(Math.cos(f)*(1-x)+Math.cos(p)*x),c*(Math.sin(f)*(1-x)+Math.sin(p)*x)])}}};let s=[],a=!0,o=1,r=1;if(i==="square")t(.9,.9,12),o=.9,r=.9,s=[[0,-.9,0,.9],[-.9,0,.9,0]];else if(i==="arch"){o=.85,r=1.05;const l=.2;for(let c=0;c<=12;c++)e.push([o,-r+c/12*(r+l)]);for(let c=1;c<24;c++){const h=c/24*Math.PI;e.push([o*Math.cos(h),l+o*Math.sin(h)])}for(let c=0;c<=12;c++)e.push([-o,l-c/12*(r+l)]);for(let c=1;c<12;c++)e.push([-o+c/12*2*o,-r]);s=[[0,-r,0,l+o],[-o,l,o,l]]}else i==="round"?(t(.98,.98,2),o=r=.98,s=[[0,-.98,0,.98],[-.98,0,.98,0]],a=!1):i==="panorama"?(t(2.35,.9,14),o=2.35,r=.9,s=[[-.78,-.9,-.78,.9],[.78,-.9,.78,.9]]):i==="hexagon"?(n(6,1.05,0),o=1.05,r=.92,a=!1):i==="porthole"?(t(.8,.8,2),o=r=.8,a=!1):i==="diamond"?(n(4,1.1,0),o=r=1.1,a=!1,s=[[0,-1.1,0,1.1],[-1.1,0,1.1,0]]):(t(1.5,.78,14),o=1.5,r=.78,s=[[-.5,-.78,-.5,.78],[.5,-.78,.5,.78]]);return{pts:e,hw:o,hh:r,bars:s,sill:a}}function b0(i,e){const t=Math.cos(e),n=Math.sin(e);let s=0;for(let a=0;a<i.length;a++){const o=i[a],r=i[(a+1)%i.length],l=r[0]-o[0],c=r[1]-o[1],h=t*c-n*l;if(Math.abs(h)<1e-9)continue;const u=(o[0]*c-o[1]*l)/h,f=(o[0]*n-o[1]*t)/h;u>0&&f>=-1e-6&&f<=1+1e-6&&u>s&&(s=u)}return[t*s,n*s]}const y0={gold:[.9,.68,.16],silver:[.72,.75,.8],bronze:[.7,.42,.22],special:[.55,.35,.95]};function q2(i){const e=new En,t=hl(i.id),n=y0[i.tier??["gold","silver","bronze","special"][Math.floor(t*4)]]??y0.gold,s=F(n,{finish:i.tier==="special"?Ye.holo:Ye.metal});e.add(Re([0,.015,0],[.05,.015,.05],5),F([.12,.1,.1],{finish:Ye.plastic}));const a=Math.floor(hl(i.id+"k")*8);if(a===0){e.add(pt([[.012,.03],[.012,.07],[.05,.1],[.06,.16],[.05,.16],[.04,.11],[.004,.09]],{seg:14}),s);for(const o of[1,-1])e.add(Vt([0,0,0],.022,.005,{seg:10,tube:4}),s,{matrix:Fe([o*.062,.125,0],[Math.PI/2,0,0])})}else if(a===1)e.add(Te([[0,.03,0],[0,.07,0]],()=>.008,{seg:6}),s),e.add(K([0,.12,0],[.055,.055,.014],{seg:16,bend:o=>{const r=.62+.38*Math.cos(5*Math.atan2(o[1],o[0])-Math.PI/2);return[o[0]*r*1.3,o[1]*r*1.3,o[2]]}}),s);else if(a===2)e.add(pt([[.004,.012],[.05,.012],[.05,-.012],[.004,-.012]],{seg:18}),s,{matrix:Fe([0,.1,0],[Math.PI/2,0,0])}),e.add(Re([0,.05,0],[.012,.025,.004],4),F([.8,.15,.2]));else if(a===3)e.add(pt([[.004,.035],[.05,.1],[.035,.14],[.004,.155]],{seg:6}),F(n,{finish:Ye.crystal}));else if(a===4)e.add(Te([[.02,.17,0],[-.025,.1,0],[.012,.1,0],[-.015,.035,0]],o=>.014*(1-o*.6),{seg:5}),s);else if(a===5){e.add(pt([[.012,.04],[.03,.06],[.032,.12],[.004,.17]],{seg:12}),s);for(let o=0;o<3;o++)e.add(K([0,0,0],[.005,.025,.02],{seg:6}),s,{matrix:Fe([Math.sin(o*2.09)*.035,.055,Math.cos(o*2.09)*.035],[0,o*2.09,0])})}else if(a===6){e.add(Te([[0,.03,0],[0,.07,0]],()=>.008,{seg:6}),s);for(const o of[1,-1])e.add(K([o*.022,.125,0],[.03,.03,.016],{seg:10}),s);e.add(K([0,.095,0],[.04,.035,.015],{seg:10,bend:o=>[o[0]*(1+o[1]*14),o[1],o[2]]}),s)}else{e.add(pt([[.04,.035],[.045,.07],[.04,.07]],{seg:14}),s);for(let o=0;o<5;o++){const r=o/5*Math.PI*2;e.add(Te([[Math.sin(r)*.042,.07,Math.cos(r)*.042],[Math.sin(r)*.05,.12,Math.cos(r)*.05]],l=>.012*(1-l)+.002,{seg:5}),s)}}return e}class X2{group=new kn;pickables=[];spec;screenCorners=[new ie,new ie,new ie,new ie];light={mood:cr.cozy,k:1,window:new tt,windowI:3,disco:!1,env:["#cfd9ff","#5a4a44","#fff0d8"]};mats=[];live=[];viewMat=null;shaftMat=null;screenMat=null;particles=null;glowPts=null;signTex=null;signCanvas=null;data={level:1,xp:0,xpNext:100,achievements:[]};accent=new Ac("#ffffff",0,9,1.6);winLight=new Ac("#ffffff",0,10,1.5);surf=vi();surfFlat=vi({flat:!0});surfGlass=vi({transparent:!0,side:An});trophyKey="";trophies=new kn;shelfPos={x:-2.25,z:Hn.back,rot:0};constructor(){this.group.add(this.accent,this.winLight,this.trophies)}setData(e){this.data=e,this.drawSign(),this.buildTrophies()}setSpec(e){this.clear(),this.spec=e;const{W:t,H:n,back:s,front:a,winY:o}=Hn,r=F(Lt(e.trim.color),{finish:Ye.plastic}),l=(w,G,B,V=!0)=>{if(!w.vertexCount)return null;const Q=new Qt(w.toGeometry(!1),G);return Q.receiveShadow=V,B&&(Q.userData.pick=B,this.pickables.push(Q)),this.group.add(Q),Q},c=new En,h=(w,G,B,V,Q,re)=>c.add({pos:[...w,...G,...B,...V],idx:[0,1,2,0,2,3],uv:Q},re),u=_0(e.walls),f=_0(e.floor,!0);h([-t,0,a],[t,0,a],[t,0,s],[-t,0,s],[-t,a,t,a,t,s,-t,s],f),h([-t,n,s],[t,n,s],[t,n,a],[-t,n,a],[-t,s,t,s,t,a,-t,a],F(Lt(e.ceiling.color),{finish:Ye.matte})),h([-t,0,a],[-t,0,s],[-t,n,s],[-t,n,a],[a,0,s,0,s,n,a,n],u),h([t,0,s],[t,0,a],[t,n,a],[t,n,s],[s,0,a,0,a,n,s,n],u);const p=W2(e.window.shape),g=[];for(let w=0;w<96;w++)g.push(w/96*Math.PI*2);for(const[w,G]of[[t,n-o],[-t,n-o],[-t,-o],[t,-o]])g.push((Math.atan2(G,w)+Math.PI*2)%(Math.PI*2));g.sort((w,G)=>w-G);const x=[],d=[],m=[],M=[];g.forEach(w=>{const[G,B]=b0(p.pts,w),V=Math.cos(w),Q=Math.sin(w),re=Math.min(V>1e-9?t/V:V<-1e-9?-t/V:1/0,Q>1e-9?(n-o)/Q:Q<-1e-9?-o/Q:1/0);x.push(G,o+B,s,V*re,o+Q*re,s),d.push(G,o+B,V*re,o+Q*re),M.push([G,o+B,s])});const b=g.length;for(let w=0;w<b;w++){const G=w*2,B=(w+1)%b*2;m.push(G,G+1,B+1,G,B+1,B)}c.add({pos:x,idx:m,uv:d},u);const v=[],R=[];M.forEach(w=>v.push(w[0],w[1],w[2],w[0],w[1],w[2]-.2));for(let w=0;w<b;w++){const G=w*2,B=(w+1)%b*2;R.push(G,B,B+1,G,B+1,G+1)}c.add({pos:v,idx:R},r);const S=e.window.shape==="porthole",_=S?F([.62,.5,.25],{finish:Ye.metal}):r;if(c.add(Te([...M,M[0]],()=>S?.09:.05,{seg:6,cap:!1}),_),S)for(let w=0;w<10;w++){const[G,B]=b0(p.pts,w/10*Math.PI*2);c.add(K([G*1,o+B*1,s+.085],[.028,.028,.02],{seg:8}),F([.8,.68,.36],{finish:Ye.metal}))}for(const[w,G,B,V]of p.bars)c.add(Te([[w,o+G,s-.08],[B,o+V,s-.08]],()=>.025,{seg:4}),r);p.sill&&c.add(Re([0,o-p.hh-.04,s+.06],[p.hw+.14,.03,.1],5),r);for(const w of[1,-1])c.add(Re([w*(t-.012),.07,(a+s)/2],[.014,.07,(a-s)/2],6),r),c.add(Re([w*(t-.02),n-.04,(a+s)/2],[.025,.04,(a-s)/2],6),r);c.add(Re([0,.07,s+.012],[t,.07,.014],6),r),c.add(Re([0,n-.04,s+.02],[t,.04,.025],6),r),l(c,this.surfFlat,{kind:"window",id:"room"});const T=(rr[e.view.theme]??rr["floating-islands"])[e.view.time]??rr["floating-islands"].day,N=x0[e.view.time]??x0.day,P=12,z=7;this.viewMat=new On({vertexShader:G2,fragmentShader:V2,depthWrite:!0,uniforms:{uTime:Fi.uTime,uTheme:{value:B2[e.view.theme]??1},uWeather:{value:H2[e.view.weather]??0},uTop:{value:new tt(T[0])},uBot:{value:new tt(T[1])},uAccent:{value:new tt(T[2])},uGround:{value:new tt(T[3])},uNight:{value:N.night},uSun:{value:new ie(...N.sun)},uPar:{value:new _t},uAspect:{value:P/z}}});const H=new Qt(new ki(P,z),this.viewMat);H.position.set(0,o+.1,s-4.5),this.group.add(H),this.mats.push(this.viewMat);const C=new tt(T[1]).lerp(new tt(T[2]),.5).lerp(new tt("#ffffff"),.25),I=e.view.time==="night"?.45:e.view.time==="day"?1:.8;this.light.window.copy(C),this.light.windowI=I,this.shaftMat=new On({transparent:!0,depthWrite:!1,blending:Js,side:An,uniforms:{uColor:{value:C},uI:{value:I*.11},uTime:Fi.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:"uniform vec3 uColor; uniform float uI; uniform float uTime; varying vec2 vUv; void main(){ float a = smoothstep(0., .25, vUv.x) * smoothstep(1., .75, vUv.x) * pow(1. - vUv.y, 1.5); a *= .8 + .2 * sin(vUv.x * 30. + uTime * .3); gl_FragColor = vec4(uColor * a * uI, 1.); }"});const X=new Pn,O=[],D=[],te=[],U=(w,G,B)=>{const V=O.length/3,Q=o+p.hh*.6,re=.01;O.push(w,Q,s+.05,G,Q,s+.05,G*B+.5,re,s+2.6,w*B+.5,re,s+2.6),D.push(0,0,1,0,1,1,0,1),te.push(V,V+1,V+2,V,V+2,V+3)};U(-p.hw*.9,-p.hw*.2,1.25),U(-p.hw*.1,p.hw*.5,1.25),U(p.hw*.55,p.hw*.92,1.25);{const w=O.length/3;O.push(-p.hw*1.2+.4,.012,s+.3,p.hw*1.2+.6,.012,s+.3,p.hw*1.5+.8,.012,s+3.2,-p.hw*1.5+.5,.012,s+3.2),D.push(0,.35,1,.35,1,1,0,1),te.push(w,w+1,w+2,w,w+2,w+3)}X.setAttribute("position",new kt(O,3)),X.setAttribute("uv",new kt(D,2)),X.setIndex(te);const J=new Qt(X,this.shaftMat);if(J.renderOrder=6,this.group.add(J),this.mats.push(this.shaftMat),this.winLight.color.copy(C),this.winLight.position.set(0,o,s+1.1),e.window.curtains!=="none"){const w=new En,G=new En,B=F(Lt(e.window.curtainColor),{finish:Ye.velvet}),V=o+p.hh+.16,Q=e.window.curtains==="valance"?V-.4:Math.max(.1,o-p.hh-.35);w.add(Te([[-p.hw-.4,V+.03,s+.14],[p.hw+.4,V+.03,s+.14]],()=>.02,{seg:6}),F([.25,.22,.2],{finish:Ye.metal}));for(const k of[1,-1])w.add(K([k*(p.hw+.42),V+.03,s+.14],[.04,.04,.04],{seg:8}),F([.25,.22,.2],{finish:Ye.metal}));const re=(k,W,Y,ee,me)=>{const be=[];for(let _e=0;_e<=10;_e++){const xe=_e/10,Be=V+(Q-V)*xe,ze=1-me*Math.sin(Math.min(1,xe*1.6)*Math.PI)*.5;be.push({c:[(k+W)/2+(W>0?1:-1)*(1-ze)*Math.abs(W-k)*.4*me,Be,s+.14],rx:Math.abs(W-k)/2*ze,rz:.03,fn:Qe=>1+.9*Math.abs(Math.sin(Qe*7))*Math.abs(Math.cos(Qe))*0+0,n:2})}const ge=Mt(be,{seg:40});for(let _e=0;_e<ge.pos.length;_e+=3)ge.pos[_e+2]=ge.pos[_e+2]+Math.sin(ge.pos[_e]*26)*.025;Y.add(ge,ee)};if(e.window.curtains==="drapes")re(-p.hw-.38,-p.hw+.25,w,B,.7),re(p.hw-.25,p.hw+.38,w,B,.7);else if(e.window.curtains==="sheer"){const k=F(Lt(e.window.curtainColor),{finish:Ye.ghost});re(-p.hw-.3,.02,G,k,0),re(-.02,p.hw+.3,G,k,0)}else re(-p.hw-.36,p.hw+.36,w,B,0);l(w,this.surf);const le=l(G,this.surfGlass,void 0,!1);le&&(le.renderOrder=4)}const j=p.hw>1.7;this.buildShelf(j,l),this.buildSign(j,l),this.buildScreen(l);const ae=[];this.placeDecor(e.decor,p,j,ae),this.buildGlows(ae);const ve=cr[e.lighting.mood]??cr.cozy;this.light.mood=ve,this.light.k=.5+e.lighting.brightness*.6,this.light.disco=e.lighting.mood==="disco",this.light.env=[ve.sky,ve.ground,ve.key],this.accent.color.set(e.lighting.color||ve.accent),this.accent.intensity=ve.accentI*this.light.k,this.accent.position.set(-1.9,2.3,1.2),this.winLight.intensity=6*I*this.light.k;const A=e.particles.kind;if(A!=="none"){const w=A==="dust"?{count:60,mode:"float",shape:"dot",size:.022,opacity:.55}:A==="embers"?{count:50,mode:"rise",shape:"dot",size:.04,speed:1.2}:ho[A]??ho.sparkles;this.particles=new eo({...w,count:Math.round(w.count*(.5+e.particles.amount*1.6)),color:e.particles.color,color2:e.particles.color2,box:[2.7,2.7,2]}),this.particles.points.position.set(0,.1,-.2),this.group.add(this.particles.points)}this.drawSign(),this.trophyKey="",this.buildTrophies()}buildShelf(e,t){const n=this.spec.shelf,s=new En,a=Lt(n.color),o=n.style==="wood"?F(a,{color2:lr(a,.7),pattern:Gt.planks,scale:2.2,finish:Ye.wood}):n.style==="white"?F([.95,.95,.93],{finish:Ye.plastic}):n.style==="metal"?F([.6,.63,.68],{finish:Ye.metal}):F(a,{finish:Ye.glow});for(const l of[1.2,1.72])if(s.add(Re([0,l,.12],[.56,n.style==="neon"?.012:.02,.12],6),o),n.style!=="neon")for(const c of[1,-1])s.add(Re([c*.42,l-.07,.07],[.012,.06,.07],4),F([.15,.15,.17],{finish:Ye.metal}));const r=t(s,this.surf,{kind:"shelf",id:"shelf"});this.shelfPos=e?{x:-3,z:-.9,rot:Math.PI/2}:{x:-2.3,z:Hn.back,rot:0},r&&(r.position.set(this.shelfPos.x,0,this.shelfPos.z),r.rotation.y=this.shelfPos.rot),this.trophies.position.set(this.shelfPos.x,0,this.shelfPos.z),this.trophies.rotation.y=this.shelfPos.rot}buildTrophies(){const e=this.data.achievements.slice(-10),t=e.map(n=>n.id+(n.tier??"")).join("|");if(t!==this.trophyKey){this.trophyKey=t;for(const n of[...this.trophies.children]){n.geometry.dispose(),this.trophies.remove(n);const s=this.pickables.indexOf(n);s>=0&&this.pickables.splice(s,1);const a=this.live.findIndex(o=>o.obj===n);a>=0&&this.live.splice(a,1)}e.forEach((n,s)=>{const a=new Qt(q2(n).toGeometry(!1),this.surf),o=s<5?1.74:1.22,r=s%5;a.position.set(-.42+r*.21,o,.13),a.scale.setScalar(1.25),a.castShadow=!1,a.userData.pick={kind:"trophy",id:n.id},this.trophies.add(a),this.pickables.push(a),this.live.push({obj:a,base:a.position.clone(),baseRot:0,scale:1.25,motion:"none",hover:0,spring:0,vel:0,phase:s,spinExtra:0})})}}buildSign(e,t){const n=this.spec.sign,s=new En,a=Lt(n.color),o=.62,r=.33;n.style==="plaque"?s.add(Re([0,0,.02],[o+.05,r+.05,.02],6),F([.42,.26,.14],{color2:[.3,.18,.1],pattern:Gt.planks,scale:2.2,finish:Ye.wood})):n.style==="hologram"?(s.add(Re([0,-r-.1,.1],[.2,.02,.06],5),F([.3,.3,.35],{finish:Ye.metal})),s.add(K([0,-r-.07,.1],[.05,.02,.03],{seg:8}),F(a,{finish:Ye.glow}))):s.add(Re([0,0,.02],[o+.04,r+.04,.02],6),F(n.style==="pixel"?[.1,.1,.14]:[.07,.06,.12],{finish:Ye.plastic}));const l=t(s,this.surf,{kind:"sign",id:"sign"});typeof document<"u"&&(this.signCanvas=document.createElement("canvas"),this.signCanvas.width=620,this.signCanvas.height=330,this.signTex=new md(this.signCanvas),this.signTex.colorSpace=In,this.signTex.anisotropy=4);const c=new ia({map:this.signTex,transparent:n.style==="hologram",toneMapped:!1,opacity:n.style==="hologram"?.9:1});this.mats.push(c);const h=new Qt(new ki(o*2,r*2),c);h.userData.pick={kind:"sign",id:"sign"},this.pickables.push(h);const u=new kn;l&&(this.group.remove(l),u.add(l)),h.position.z=.045,u.add(h),e?(u.position.set(Hn.W,2.15,-.9),u.rotation.y=-Math.PI/2):u.position.set(2.2,2.2,Hn.back),this.group.add(u),this.live.push({obj:u,base:u.position.clone(),baseRot:u.rotation.y,scale:1,motion:n.style==="hologram"?"bob":"none",hover:0,spring:0,vel:0,phase:0,spinExtra:0})}drawSign(){const e=this.signCanvas;if(!e||!this.spec)return;const t=e.getContext("2d");if(!t)return;const n=this.spec.sign,s=this.data,a=e.width,o=e.height,r=n.color,l=n.style==="pixel",c=n.style==="plaque",h=n.style==="hologram";t.clearRect(0,0,a,o),t.fillStyle=c?"#f6efe0":h?"rgba(10,20,40,0.35)":l?"#10121c":"#0f0d1e",t.fillRect(0,0,a,o);const u=l?'"Space Mono", ui-monospace, monospace':'"Bricolage Grotesque", system-ui, sans-serif',f=c?"#1b1b1b":r;t.textAlign="center",t.textBaseline="middle",c||(t.shadowColor=r,t.shadowBlur=l?0:26),t.fillStyle=f,t.font=`800 ${l?96:118}px ${u}`,t.fillText(`LEVEL ${Math.max(1,Math.floor(s.level))}`,a/2,104),t.shadowBlur=0;const p=10,g=8,x=a-90,d=(x-g*(p-1))/p,m=192,M=40,b=s.xpNext>0?Math.min(1,Math.max(0,s.xp/s.xpNext)):1;for(let v=0;v<p;v++){const R=(v+.5)/p<=b||v===0&&b>0;t.fillStyle=R?f:c?"#d8cfbc":"rgba(255,255,255,0.12)",!c&&R&&(t.shadowColor=r,t.shadowBlur=14);const S=45+v*(d+g);t.beginPath(),l?t.rect(S,m,d,M):t.roundRect(S,m,d,M,14),t.fill(),t.shadowBlur=0}t.fillStyle=c?"#1b1b1b":"#f5f0ff",t.font=`600 ${l?34:38}px ${u}`,t.fillText(`${Math.floor(s.xp)} of ${Math.floor(s.xpNext)} XP`,a/2,278),this.signTex&&(this.signTex.needsUpdate=!0)}buildScreen(e){const t=this.spec.screen,n=new En,s=Lt(t.color),a=.25,o=.3516;let r=1.2;const l=2.02,c=-1.45,h=F(s,{finish:Ye.plastic});if(t.style==="arcade"){n.add(Re([0,.5,-.05],[.36,.5,.3],6),h),n.add(Re([0,1.3,-.14],[.36,.5,.21],6),h),n.add(Re([0,1.87,-.05],[.36,.1,.3],6),F(lr(s,.8),{finish:Ye.plastic})),n.add(Re([0,1.87,.255],[.32,.07,.006],6),F([1,.85,.3],{color2:[1,.3,.6],pattern:Gt.zigzag,scale:.5,finish:Ye.glow})),n.add(Re([0,.96,.16],[.36,.035,.14],5),F(lr(s,.6),{finish:Ye.plastic}),{matrix:Fe([0,0,0],[.18,0,0])}),n.add(Te([[-.16,1,.2],[-.16,1.08,.2]],()=>.01,{seg:6}),F([.2,.2,.22],{finish:Ye.metal})),n.add(K([-.16,1.1,.2],[.028,.028,.028],{seg:10}),F([.9,.15,.15],{finish:Ye.plastic})),[[.02,[1,.8,.2]],[.11,[.2,.7,1]],[.2,[.3,.9,.4]]].forEach(([x,d])=>n.add(K([x,1.005,.22],[.026,.012,.026],{seg:10}),F(d,{finish:Ye.glow})));for(const x of[1,-1])n.add(Re([x*.372,.95,-.05],[.006,.9,.28],6),F(s,{color2:[1,1,1],pattern:Gt.stars,scale:.6,finish:Ye.plastic}));r=1.4,n.add(Re([0,r,.066],[a+.04,o+.04,.012],6),F([.04,.04,.05],{finish:Ye.plastic}))}else t.style==="tablet"?(n.add(pt([[.2,0],[.2,.025],[.03,.05]],{seg:18}),F([.25,.25,.28],{finish:Ye.metal})),n.add(Te([[0,.04,-.02],[0,.95,-.02]],()=>.02,{seg:8}),F([.25,.25,.28],{finish:Ye.metal})),r=1.2,n.add(Re([0,r,0],[a+.035,o+.035,.014],5),h)):t.style==="retro"?(n.add(Re([0,.36,0],[.42,.36,.3],6),F([.5,.36,.22],{color2:[.36,.25,.15],pattern:Gt.planks,scale:2.2,finish:Ye.wood})),r=1.16,n.add(Re([0,r,-.1],[a+.09,o+.09,.22],4),F([.85,.82,.72],{finish:Ye.plastic})),n.add(Re([0,.76,.14],[.3,.02,.1],5),F([.85,.82,.72],{finish:Ye.plastic})),n.add(Re([0,r,.118],[a+.03,o+.03,.008],5),F([.1,.1,.1],{finish:Ye.plastic})),n.add(K([a+.05,r-o-.04,.125],[.012,.012,.006],{seg:6}),F([.3,1,.4],{finish:Ye.glow}))):(n.add(pt([[.22,0],[.18,.05],[.06,.08]],{seg:18}),F([.25,.25,.3],{finish:Ye.metal})),n.add(K([0,.09,0],[.07,.02,.07],{seg:10}),F(s,{finish:Ye.glow})),r=1.3,n.add(Te([[-a-.02,r-o-.02,0],[a+.02,r-o-.02,0],[a+.02,r+o+.02,0],[-a-.02,r+o+.02,0],[-a-.02,r-o-.02,0]],()=>.008,{seg:5,cap:!1}),F(s,{finish:Ye.glow})));const u=t.style==="arcade"?.08:t.style==="retro"?.128:t.style==="tablet"?.016:.002,f=e(n,this.surf,{kind:"screen",id:"screen"}),p=new kn;p.position.set(l,0,c),f&&(this.group.remove(f),f.castShadow=!0,p.add(f)),this.screenMat=new On({uniforms:{uTime:Fi.uTime,uOn:{value:t.on?1:0},uColor:{value:new tt(t.color)},uCover:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform float uTime; uniform float uOn; uniform vec3 uColor; uniform float uCover; varying vec2 vUv;
        void main(){ vec2 p = vUv * 2. - 1.; p.y *= 1.4; vec3 a = mix(uColor, vec3(1., .55, .75), .5 + .5 * sin(uTime * .6 + p.y * 2.)); vec3 b = mix(vec3(.25, .75, 1.), uColor, .5 + .5 * cos(uTime * .4 + p.x * 3.));
          vec3 c = mix(a, b, .5 + .5 * sin(p.x * 2. + p.y * 3. + uTime * .5)); float tri = step(abs(p.y), (.26 - p.x) * .62) * step(-.16, p.x); float ring = smoothstep(.03, .0, abs(length(p) - .5));
          c = mix(c, vec3(1.), max(tri, ring) * .95); c *= .92 + .08 * sin(vUv.y * 450.); c = mix(vec3(.01, .012, .02), c, uOn) * (1. - uCover); gl_FragColor = vec4(c, 1.); }`}),this.mats.push(this.screenMat);const g=new Qt(new ki(a*2,o*2),this.screenMat);g.position.set(0,r,u),g.userData.pick={kind:"screen",id:"screen"},this.pickables.push(g),p.add(g),this.group.add(p),p.updateMatrixWorld(!0),[[-a,o],[a,o],[a,-o],[-a,-o]].forEach(([x,d],m)=>this.screenCorners[m].set(l+x,r+d,c+u)),t.on&&(this.accentGlow={pos:[l,r,c+.3],color:s,size:1.3})}accentGlow=null;setScreenCovered(e){this.screenMat&&(this.screenMat.uniforms.uCover.value=e?1:0)}placeDecor(e,t,n,s){const{W:a,H:o,back:r,winY:l}=Hn,c=[],h=[{x:0,z:.25,r:.62},{x:2.02,z:-1.45,r:.55},{x:.85,z:.45,r:.3}].map(b=>({...b,it:null,fixed:!0})),u=[];for(const b of e){const v=Ki[b.item],R=z2[b.item];if(!v||!R)continue;const S={h:.5,glows:[],defaults:[Lt(R.c[0]),Lt(R.c[1])]},_=new En,T=new En;R.b(_,T,b.color?Lt(b.color):S.defaults[0],b.color2?Lt(b.color2):S.defaults[1],S);const N=v.r*b.scale;let P,z=b.rot*Math.PI/180;if(v.place==="floor"||v.place==="rug"){const H=b.x*2.6,C=-.15+b.z*1.75;P=new ie(H,v.place==="rug"?.002*(u.length+1):0,C),v.place==="floor"&&c.push({it:b,x:H,z:C,r:N,fixed:!1})}else if(v.place==="ceiling")P=new ie(b.x*2.4,o,-.15+b.z*1.6);else{const H=Math.min(o-.2-S.h*.5*b.scale,Math.max(.35+S.h*.5*b.scale,.4+b.y*2.3));if(b.wall==="back"){let C=Math.min(a-N-.05,Math.max(-a+N+.05,b.x*2.6));const I=Math.abs(C)<t.hw+N+.12&&Math.abs(H-l)<t.hh+S.h*.5*b.scale+.12;let X=H;if(I){const D=(C>=0?1:-1)*(t.hw+N+.14);Math.abs(D)+N<a-.05?C=D:X=Math.min(o-.12-S.h*.5*b.scale,l+t.hh+S.h*.5*b.scale+.14)}n||(C<-1.55&&X>.95&&X<2.2&&(X=Math.min(o-.15-S.h*.5*b.scale,2.35+S.h*.5*b.scale*.2)),C>1.45&&X>1.7&&X<2.7&&(X=Math.max(.5,1.45-S.h*.5*b.scale*.4))),P=new ie(C,X,r+.002*(u.length+1)),z=0}else{const C=b.wall==="left"?-1:1;let I=Math.min(1.7,Math.max(r+N+.1,-.3+b.x*1.8));n&&Math.abs(I+.9)<.75+N&&(C<0&&H>.95&&H<2.1||C>0&&H>1.7)&&(I=Math.min(1.7,0+N+.3)),P=new ie(C*(a-.002*(u.length+1)),H,I),z=-C*Math.PI/2}}u.push({it:b,pos:P,rotY:z,build:S,g:_,gl:T,place:v.place})}const f=[...h,...c];for(let b=0;b<24;b++)for(let v=3;v<f.length;v++){const R=f[v];for(let S=0;S<f.length;S++){if(v===S)continue;const _=f[S];let T=R.x-_.x,N=R.z-_.z,P=Math.hypot(T,N);const z=R.r+_.r+.04;if(P>=z)continue;P<1e-4&&(T=Math.cos(v*2.4),N=Math.sin(v*2.4),P=1);const H=(z-P)*(_.fixed||S<v?1:.5);R.x+=T/P*H,R.z+=N/P*H}R.x=Math.min(a-R.r-.06,Math.max(-a+R.r+.06,R.x)),R.z=Math.min(1.75,Math.max(r+R.r+.08,R.z))}for(const b of c){const v=u.find(R=>R.it===b.it);v.pos.x=b.x,v.pos.z=b.z}const p=[],g=[],x=[];for(const b of u){const v=new kn,R={kind:"decor",id:b.it.id,item:b.it.item},S=(P,z)=>{if(!P.vertexCount)return;const H=new Qt(P.toGeometry(!1),z);H.castShadow=!1,H.receiveShadow=b.place==="rug",H.userData.pick=R,z===this.surfGlass&&(H.renderOrder=5),v.add(H),this.pickables.push(H)};if(S(b.g,this.surf),S(b.gl,this.surfGlass),v.position.copy(b.pos),v.rotation.y=b.rotY,v.scale.setScalar(b.it.scale),b.place==="floor"||b.place==="rug"||b.place==="ceiling"){if(v.updateMatrixWorld(!0),Sn.setFromObject(v),!Sn.isEmpty()&&b.place!=="ceiling"&&Sn.max.y>Hn.H-.05){const P=(Hn.H-.05)/Math.max(Sn.max.y-Math.min(Sn.min.y,0),.1);v.scale.multiplyScalar(P),b.it={...b.it,scale:b.it.scale*P},v.updateMatrixWorld(!0),Sn.setFromObject(v)}Sn.isEmpty()||(Sn.min.x<-3+.03?b.pos.x+=-3+.03-Sn.min.x:Sn.max.x>Hn.W-.03&&(b.pos.x-=Sn.max.x-(Hn.W-.03)),Sn.min.z<Hn.back+.03&&(b.pos.z+=Hn.back+.03-Sn.min.z),Sn.min.y<-.005&&b.place!=="ceiling"&&(b.pos.y+=-Sn.min.y),v.position.copy(b.pos))}this.group.add(v);const _=b.it.animate!=="none"?b.it.animate:b.build.motion??"none";this.live.push({obj:v,base:b.pos.clone(),baseRot:b.rotY,scale:b.it.scale,motion:_,hover:0,spring:0,vel:0,phase:hl(b.it.id)*10,spinExtra:0});const T=Math.cos(b.rotY),N=Math.sin(b.rotY);for(const P of b.build.glows)s.push({pos:[b.pos.x+(P.pos[0]*T+P.pos[2]*N)*b.it.scale,b.pos.y+P.pos[1]*b.it.scale,b.pos.z+(-P.pos[0]*N+P.pos[2]*T)*b.it.scale],color:P.color,size:P.size*b.it.scale});if(b.place==="floor"){const P=Ki[b.it.item].r*b.it.scale*1.25,z=p.length/3,H=.008;p.push(b.pos.x-P,H,b.pos.z-P,b.pos.x+P,H,b.pos.z-P,b.pos.x+P,H,b.pos.z+P,b.pos.x-P,H,b.pos.z+P),g.push(0,0,1,0,1,1,0,1),x.push(z,z+2,z+1,z,z+3,z+2)}}{const v=p.length/3;p.push(2.02-.6,.008,-1.45-.6,2.02+.6,.008,-1.45-.6,2.02+.6,.008,-1.45+.6,2.02-.6,.008,-1.45+.6),g.push(0,0,1,0,1,1,0,1),x.push(v,v+2,v+1,v,v+3,v+2)}const d=new Pn;d.setAttribute("position",new kt(p,3)),d.setAttribute("uv",new kt(g,2)),d.setIndex(x);const m=new On({transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:"varying vec2 vUv; void main(){ float d = length(vUv - .5) * 2.; gl_FragColor = vec4(0., 0., 0., .42 * smoothstep(1., .25, d)); }"});this.mats.push(m);const M=new Qt(d,m);M.renderOrder=1,this.group.add(M),this.accentGlow&&s.push(this.accentGlow)}buildGlows(e){if(!e.length)return;const t=new Pn,n=[],s=[],a=[];for(const r of e)n.push(...r.pos),s.push(...r.color),a.push(r.size);t.setAttribute("position",new kt(n,3)),t.setAttribute("color",new kt(s,3)),t.setAttribute("aSize",new kt(a,1));const o=new On({transparent:!0,depthWrite:!1,blending:Js,uniforms:{uPx:{value:600},uTime:Fi.uTime},vertexShader:"attribute float aSize; attribute vec3 color; uniform float uPx; uniform float uTime; varying vec3 vC; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uPx * (.95 + .05 * sin(uTime * 2. + position.x * 9.)) / max(-mv.z, .1); }",fragmentShader:"varying vec3 vC; void main(){ float d = length(gl_PointCoord * 2. - 1.); float a = pow(max(0., 1. - d), 2.2); gl_FragColor = vec4(vC * a * .5, 1.); }"});this.mats.push(o),this.glowPts=new eh(t,o),this.glowPts.frustumCulled=!1,this.glowPts.renderOrder=7,this.group.add(this.glowPts)}poke(e){let t=e;for(;t;){const n=this.live.find(s=>s.obj===t);if(n)return n.vel=7,n.spinExtra+=n.motion==="spin"||n.motion==="float-spin"?9:0,n.obj;t=t.parent}return null}findDecor(e){for(const t of this.pickables)if(t.userData.pick.id===e)return t;return null}update(e,t,n,s,a){const o=a?0:1;for(const l of this.live){l.vel+=(-l.spring*90-l.vel*7)*e,l.spring+=l.vel*e;const c=1+l.spring*.22;l.obj.scale.set(l.scale/Math.sqrt(Math.max(c,.3)),l.scale*c,l.scale/Math.sqrt(Math.max(c,.3)));let h=l.base.y,u=l.baseRot;if(l.spinExtra*=Math.exp(-e*2.2),(l.motion==="spin"||l.motion==="float-spin")&&(l.phase+=e*(.5*o+l.spinExtra),u+=l.phase),(l.motion==="bob"||l.motion==="float-spin")&&(h+=Math.sin(t*1.4+l.phase*(l.motion==="bob"?1:0))*.05*o),l.motion==="pulse"){const f=1+Math.sin(t*2.2+l.phase)*.06*o;l.obj.scale.multiplyScalar(f)}l.motion==="wobble"?l.obj.rotation.z=Math.sin(t*2+l.phase)*.08*o:l.obj.rotation.z=0,l.obj.position.y=h+Math.max(0,l.spring)*.12,l.obj.rotation.y=u}this.viewMat&&this.viewMat.uniforms.uPar.value.set(n.position.x,n.position.y-1.5);const r=s/(2*Math.tan(n.fov*Math.PI/360));this.glowPts&&(this.glowPts.material.uniforms.uPx.value=r),this.particles?.update(e,s,n,a),this.light.disco&&!a&&this.accent.color.setHSL(t*.12%1,.9,.6)}clear(){for(const e of[...this.group.children])e===this.accent||e===this.winLight||e===this.trophies||(e.traverse(t=>{const n=t;n.geometry&&n.geometry.dispose()}),this.group.remove(e));for(const e of[...this.trophies.children])e.geometry.dispose(),this.trophies.remove(e);for(const e of this.mats)e.dispose();this.mats=[],this.live=[],this.pickables.length=0,this.particles?.dispose(),this.particles=null,this.glowPts=null,this.viewMat=null,this.shaftMat=null,this.screenMat=null,this.signTex?.dispose(),this.signTex=null,this.signCanvas=null,this.accentGlow=null}dispose(){this.clear(),this.surf.dispose(),this.surfFlat.dispose(),this.surfGlass.dispose()}}const Y2=ot({relaxed:["Relaxed","Easy stance with soft shoulders."],upright:["Upright","Tall and straight."],heroic:["Heroic","Chest out, feet apart, ready for anything."],slouch:["Slouch","Laid back with rounded shoulders."],bouncy:["Bouncy","Light on the toes.","code"]}),$2=ot({oval:["Oval","Balanced and a little longer than wide."],round:["Round","Soft and full."],square:["Square","Strong jaw and flat sides."],heart:["Heart","Wide forehead and a narrow chin."],long:["Long","Tall and slim."],diamond:["Diamond","Wide cheekbones and a pointed chin."],blocky:["Blocky","A bold, boxy head.","code"],bean:["Bean","A tall cartoon head.","secret"]}),K2=ot({almond:["Almond","Classic eye shape with soft corners."],round:["Round","Big, open, and bright."],wide:["Wide","Long eyes with a calm look."],sleepy:["Sleepy","Heavy lids and a relaxed look."],upturned:["Upturned","Outer corners lift up."],downturned:["Downturned","Outer corners dip down."],narrow:["Narrow","Slim and focused."],sharp:["Sharp","Angled lids with a fierce look."],doll:["Doll","Extra tall and sparkly.","code"],hero:["Hero","Flat brow line, comic book style.","code"]}),Z2=ot({round:["Round","Normal round pupils."],cat:["Cat","Tall slit pupils.","code"],ring:["Ring","Hollow robot pupils.","code"],star:["Star","Star pupils.","secret"],heart:["Heart","Heart pupils.","secret"],plus:["Plus","Plus sign pupils.","secret"]}),J2=ot({none:["None","No lash line."],natural:["Natural","A soft lash line."],winged:["Winged","A flick at the outer corner."],long:["Long","Long separate lashes."],dramatic:["Dramatic","Big bold lashes."]}),j2=ot({soft:["Soft","Gentle curve."],arched:["Arched","High curve."],straight:["Straight","Flat and even."],thick:["Thick","Bold and full."],thin:["Thin","Slim line."],angled:["Angled","Sharp peak."],bushy:["Bushy","Big and fuzzy."],rounded:["Rounded","Half circle."],none:["None","No eyebrows.","code"]}),Q2=ot({button:["Button","Small and round."],straight:["Straight","Even bridge and a neat tip."],wide:["Wide","Broad and soft."],pointed:["Pointed","Sharp tip."],round:["Round","Full round tip."],upturned:["Upturned","Tip lifts up."],strong:["Strong","High bridge with a bold shape."],flat:["Flat","Low bridge and a wide base."],tiny:["Tiny","Barely there, cartoon style.","code"],clown:["Clown","A shiny red ball.","secret"]}),ex=ot({smile:["Smile","Friendly closed smile."],grin:["Grin","Smile that shows teeth."],smirk:["Smirk","One side lifts."],neutral:["Neutral","Calm and flat."],pout:["Pout","Full lips pushed out a little."],"big-smile":["Big smile","Open and happy."],small:["Small","Tiny closed mouth."],serious:["Serious","Slight frown."],"cat-smile":["Cat smile","Curly cartoon smile.","code"]}),tx=ot({plain:["Plain","Even teeth."],gap:["Gap","A small gap in the middle."],braces:["Braces","Shiny braces.","code"],fangs:["Fangs","Two pointed teeth.","secret"],"gold-tooth":["Gold tooth","One gold tooth.","secret"]}),nx=ot({round:["Round","Classic ears."],small:["Small","Close to the head."],big:["Big","Stick out a bit."],elf:["Elf","Long pointed ears.","code"],robot:["Robot","Round bolts with antenna tips.","secret"]}),ix=ot({none:["None","No eyeliner."],thin:["Thin","A fine line under the eye."],wing:["Wing","A sharp wing at the corner."]}),sx=ot({"brow-slit":["Brow slit","A gap in the left eyebrow."],"brow-slit-right":["Right brow slit","A gap in the right eyebrow."],cheek:["Cheek scar","A small line on the cheek."],chin:["Chin scar","A small line on the chin."],bandage:["Nose bandage","A bandage across the nose."],"bolt-scar":["Bolt scar","A lightning mark on the forehead.","secret"]}),ax=ot({none:["None","No face paint."],"eye-black":["Eye black","Game day bars under the eyes."],star:["Star","A star on the cheek."],heart:["Heart","A heart on the cheek."],"festival-dots":["Festival dots","A row of dots under each eye."],"war-stripes":["Team stripes","Two stripes across the face.","code"],whiskers:["Whiskers","Cat nose and whiskers.","code"],tiger:["Tiger","Tiger stripes.","code"],rainbow:["Rainbow","A rainbow band under the eyes.","code"],"hero-mask":["Hero mask","A painted mask around the eyes.","code"],bolt:["Bolt","A rock star bolt over one eye.","secret"],galaxy:["Galaxy","Half the face turns into space.","secret"],circuit:["Circuit","Glowing circuit lines on the cheeks.","secret"],runes:["Runes","Glowing symbols.","secret"]}),ox=ot({bald:["Bald","No hair."],buzz:["Buzz cut","Very short all over."],crop:["Short crop","Short and neat."],"side-part":["Side part","Combed to one side."],quiff:["Quiff","Swept up at the front."],"curly-top":["Curly top","Curls on top, short sides."],afro:["Afro","Big round curls."],"afro-puffs":["Afro puffs","Two round puffs."],"flat-top":["Flat top","Tall and level on top."],cornrows:["Cornrows","Neat rows braided close."],locs:["Locs","Shoulder length locs."],bob:["Bob","Chin length, cut straight."],lob:["Long bob","Shoulder length."],"long-straight":["Long straight","Long and sleek."],"long-wavy":["Long wavy","Long with soft waves."],curtains:["Curtains","Middle part with long bangs."],shaggy:["Shaggy","Messy layers."],ponytail:["Ponytail","Tied at the back."],"high-ponytail":["High ponytail","Tied up high."],pigtails:["Pigtails","One tail on each side."],"space-buns":["Space buns","Two buns on top."],"top-bun":["Top bun","One bun on top."],braids:["Braids","Two long braids."],mohawk:["Mohawk","A tall strip down the middle."],spiky:["Spiky","Short spikes all over."],undercut:["Undercut","Long on top, shaved sides."],bowl:["Bowl cut","Round with straight bangs."],pixie:["Pixie","Short with soft bangs."],"anime-spikes":["Anime spikes","Huge sharp spikes.","code"],"twin-drills":["Twin drills","Two spiral curls.","code"],"side-ponytail":["Side ponytail","A ponytail off to one side.","code"],hime:["Hime","Long with blunt bangs and side locks.","code"],"big-curls":["Big curls","Long bouncy curls.","code"],"flame-hair":["Flame hair","Hair made of fire.","secret"],"cloud-hair":["Cloud hair","A fluffy cloud.","secret"],"crystal-hair":["Crystal hair","Sharp glowing crystals.","secret"],"pixel-hair":["Pixel hair","Blocky 8-bit hair.","secret"],tentacles:["Tentacles","Wavy sea creature hair.","secret"]}),rx=ot({none:["One color","Hair uses one color."],tips:["Dipped tips","The ends use the second color."],roots:["Dark roots","The roots use the second color."],streaks:["Streaks","Stripes of the second color."],split:["Split dye","Left and right use different colors."],rainbow:["Rainbow","Every color at once.","secret"],fire:["Fire","Flickers like a flame.","secret"],galaxy:["Galaxy","Stars drift through the hair.","secret"],frost:["Frost","Icy tips that glow.","secret"]}),lx=ot({none:["None","No facial hair."],stubble:["Stubble","A light shadow."],mustache:["Mustache","A classic mustache."],goatee:["Goatee","Mustache and chin beard."],"soul-patch":["Soul patch","A small patch under the lip."],"chin-strap":["Chin strap","A thin line along the jaw."],"short-beard":["Short beard","Trimmed close."],"full-beard":["Full beard","Thick and full."],handlebar:["Handlebar","A mustache with curled ends.","code"],"mutton-chops":["Mutton chops","Big sideburns.","code"],"long-beard":["Long beard","Reaches the chest.","code"],"wizard-beard":["Wizard beard","Very long and pointed.","secret"]}),cx=ot({none:["None","No glasses."],round:["Round","Thin round frames."],square:["Square","Bold square frames."],aviator:["Aviator","Teardrop wire frames."],"cat-eye":["Cat eye","Frames that sweep up."],thick:["Thick","Chunky frames."],rimless:["Rimless","Just the lenses."],shades:["Shades","Dark sunglasses."],monocle:["Monocle","One fancy lens.","code"],visor:["Visor","One long future lens.","code"],goggles:["Goggles","Big round goggles.","code"],"heart-shades":["Heart shades","Heart shaped sunglasses.","secret"],"star-shades":["Star shades","Star shaped sunglasses.","secret"],"pixel-shades":["Pixel shades","Blocky 8-bit sunglasses.","secret"],"laser-visor":["Laser visor","A glowing red bar.","secret"]}),hx=ot({none:["None","No earrings."],studs:["Studs","Small round studs."],hoops:["Hoops","Round hoops."],drops:["Drops","Hanging gems."],cuffs:["Cuffs","Rings on the upper ear.","code"],stars:["Stars","Hanging stars.","code"],planets:["Planets","Tiny ringed planets.","secret"],bolts:["Bolts","Glowing bolts.","secret"]}),fx=ot({both:["Both","Both sides."],left:["Left","Left side only."],right:["Right","Right side only."]}),dx=ot({"nose-stud":["Nose stud","A small stud on the nose."],"nose-ring":["Nose ring","A small ring on the nose."],"brow-ring":["Brow ring","A ring on the eyebrow.","code"],"lip-ring":["Lip ring","A ring on the lower lip.","code"]}),ux=ot({none:["None","No hat."],beanie:["Beanie","A snug knit cap."],cap:["Cap","A baseball cap."],"backwards-cap":["Backwards cap","A cap turned around."],bucket:["Bucket hat","A soft hat with a brim all around."],beret:["Beret","A soft tilted cap."],fedora:["Fedora","A classic brim hat."],cowboy:["Cowboy hat","A wide curled brim."],headband:["Headband","A sports headband."],bandana:["Bandana","Tied around the head."],hijab:["Hijab","A headscarf that covers the hair and neck."],turban:["Turban","A wrapped turban."],durag:["Durag","A smooth wrap with a tail."],headphones:["Headphones","Big over ear headphones."],bow:["Bow","A big hair bow."],"flower-crown":["Flower crown","A ring of flowers."],"top-hat":["Top hat","Tall and fancy.","code"],"wizard-hat":["Wizard hat","A tall pointed hat.","code"],"chef-hat":["Chef hat","A puffy chef hat.","code"],"party-hat":["Party hat","A cone with a pom.","code"],"pirate-hat":["Pirate hat","A captain hat.","code"],"space-helmet":["Space helmet","A clear bubble helmet.","code"],"propeller-cap":["Propeller cap","A cap with a spinning propeller.","secret"],"traffic-cone":["Traffic cone","An orange cone. Why not.","secret"],"mushroom-cap":["Mushroom cap","A spotted mushroom top.","secret"],"ufo-hat":["UFO hat","A tiny hovering saucer.","secret"]}),px=ot({tee:["T-shirt","A classic short sleeve tee."],"long-sleeve":["Long sleeve","A long sleeve tee."],tank:["Tank top","Sleeveless."],hoodie:["Hoodie","A cozy pullover hoodie."],sweater:["Sweater","A soft knit sweater."],polo:["Polo","A collared shirt."],"button-up":["Button up","A collared shirt with buttons."],jersey:["Jersey","A sports jersey."],turtleneck:["Turtleneck","A high rolled collar."],dress:["Dress","A knee length dress."],tuxedo:["Tuxedo","A formal jacket and bow tie.","code"],"hero-suit":["Hero suit","A sleek suit with an emblem.","code"],"space-suit":["Space suit","A padded astronaut suit.","code"],armor:["Armor","A shining knight chest plate.","secret"],"wizard-robe":["Wizard robe","A long flowing robe.","secret"]}),mx=ot({none:["None","No design."],star:["Star","A star on the chest."],heart:["Heart","A heart on the chest."],bolt:["Bolt","A lightning bolt."],smiley:["Smiley","A smiley face."],"chest-stripe":["Chest stripe","A bold stripe across the chest."],moon:["Moon","A crescent moon."],code:["Code","Angle brackets, like a programmer.","code"],planet:["Planet","A ringed planet.","code"],crown:["Crown","A small crown.","code"],clock:["Clock","A clock face.","code"],"pixel-heart":["Pixel heart","An 8-bit heart.","secret"],flame:["Flame","A flame.","secret"]}),gx=ot({jeans:["Jeans","Straight leg jeans."],shorts:["Shorts","Knee length shorts."],joggers:["Joggers","Soft pants with cuffs."],cargo:["Cargo pants","Loose pants with pockets."],skirt:["Skirt","A knee length skirt."],"long-skirt":["Long skirt","A skirt to the ankles."],leggings:["Leggings","Fitted and stretchy."],"wide-leg":["Wide leg","Loose flowing pants."],overalls:["Overalls","Pants with a bib and straps."],"gym-shorts":["Gym shorts","Short athletic shorts."],kilt:["Kilt","A pleated plaid kilt.","code"],"space-pants":["Space pants","Padded astronaut pants.","code"],tutu:["Tutu","A puffy layered skirt.","secret"]}),xx=ot({sneakers:["Sneakers","Everyday sneakers."],"high-tops":["High tops","Sneakers that cover the ankle."],boots:["Boots","Sturdy boots."],slides:["Slides","Easy slip on sandals."],loafers:["Loafers","Smooth dress shoes."],"rain-boots":["Rain boots","Tall rubber boots."],platforms:["Platforms","Shoes with thick soles."],"cowboy-boots":["Cowboy boots","Pointed boots with a heel.","code"],"bunny-slippers":["Bunny slippers","Fuzzy slippers with ears.","code"],"roller-skates":["Roller skates","Skates with four wheels.","secret"],"rocket-boots":["Rocket boots","Boots with tiny jets.","secret"],"cloud-shoes":["Cloud shoes","Walk on little clouds.","secret"]}),vx=ot({none:["None","No jacket."],bomber:["Bomber jacket","A short jacket with ribbed cuffs."],"denim-jacket":["Denim jacket","A classic jean jacket."],"zip-hoodie":["Zip hoodie","An open hoodie."],vest:["Puffer vest","A padded vest."],blazer:["Blazer","A sharp jacket."],letterman:["Letterman","A varsity jacket with color sleeves."],cardigan:["Cardigan","A soft open sweater."],"long-coat":["Long coat","A coat to the knees."],"lab-coat":["Lab coat","A scientist coat.","code"],poncho:["Poncho","A draped poncho.","code"],"royal-mantle":["Royal mantle","A fur trimmed robe.","secret"]}),Lh=ot({solid:["Solid","One color."],stripes:["Stripes","Wide stripes.","code"],pinstripes:["Pinstripes","Thin up and down lines.","code"],plaid:["Plaid","Crossing bands.","code"],checker:["Checker","A checkerboard.","code"],"polka-dots":["Polka dots","Round dots.","code"],camo:["Camo","Blotchy camouflage.","code"],stars:["Stars","Scattered stars.","code"],hearts:["Hearts","Rows of hearts.","code"],zigzag:["Zigzag","Sharp waves.","code"],"tie-dye":["Tie-dye","A swirl of color.","code"],ombre:["Ombre","One color fades into another.","code"],"color-block":["Color block","Left and right halves.","code"],argyle:["Argyle","Diamonds with thin lines.","code"],houndstooth:["Houndstooth","A classic jagged check.","code"],leopard:["Leopard","Leopard spots.","code"],zebra:["Zebra","Wavy zebra stripes.","code"],honeycomb:["Honeycomb","Six sided cells.","code"],waves:["Waves","Rolling wave lines.","code"],nordic:["Nordic","Cozy sweater rows.","code"],floral:["Floral","Little flowers.","code"],rainbow:["Rainbow","Every color in bands.","secret"],flames:["Flames","Moving fire.","secret"],galaxy:["Galaxy","Twinkling stars and clouds.","secret"],circuit:["Circuit","Glowing circuit lines.","secret"],lava:["Lava","Glowing cracks.","secret"],glitch:["Glitch","Jumping blocks of color.","secret"],pixel:["Pixel","Chunky 8-bit squares.","secret"],matrix:["Matrix","Falling code.","secret"]}),Ih=ot({cotton:["Cotton","Soft and matte."],denim:["Denim","Sturdy woven cloth.","code"],leather:["Leather","Smooth with a shine.","code"],knit:["Knit","Ribbed and cozy.","code"],silk:["Silk","Smooth and glossy.","code"],velvet:["Velvet","Deep and soft.","code"],plastic:["Plastic","Shiny like a toy.","code"],fur:["Fur","Fuzzy edges.","code"],metal:["Metal","Polished metal in your color.","secret"],chrome:["Chrome","A mirror finish.","secret"],holo:["Holo","Shifts through rainbow colors.","secret"],glow:["Glow","Lights up.","secret"],glitter:["Glitter","Sparkles as you move.","secret"],glass:["Glass","See through.","secret"],crystal:["Crystal","Clear and glowing.","secret"],ghost:["Ghost","Faint and spooky.","secret"]}),_x=ot({skin:["Skin","Natural skin."],plastic:["Toy","Shiny like a toy figure.","secret"],metal:["Metal","A metal statue in your color.","secret"],chrome:["Chrome","A mirror robot.","secret"],holo:["Holo","Shifts through rainbow colors.","secret"],glow:["Glow","A being of light.","secret"],crystal:["Crystal","Clear and glowing.","secret"],ghost:["Ghost","Faint and spooky.","secret"]}),bx=ot({none:["None","Nothing extra."],crown:["Crown","A golden crown.","secret"],tiara:["Tiara","A sparkling tiara.","secret"],halo:["Halo","A glowing ring that floats.","secret"],horns:["Horns","Two curved horns.","secret"],antlers:["Antlers","Branching antlers.","secret"],"cat-ears":["Cat ears","Pointed cat ears.","secret"],"bunny-ears":["Bunny ears","Tall floppy ears.","secret"],"fox-ears":["Fox ears","Big fluffy ears.","secret"],antenna:["Antenna","Two bobbing alien antennas.","secret"],unicorn:["Unicorn horn","A spiral horn.","secret"],"flame-crown":["Flame crown","A crown of fire.","secret"],"orbit-gems":["Orbit gems","Crystals that circle your head.","secret"]}),yx=ot({none:["None","Nothing on your back."],backpack:["Backpack","A school backpack."],cape:["Cape","A hero cape.","secret"],"royal-cape":["Royal cape","A long cape with a fur collar.","secret"],"angel-wings":["Angel wings","Feathered wings.","secret"],"dragon-wings":["Dragon wings","Wide leathery wings.","secret"],"butterfly-wings":["Butterfly wings","Bright patterned wings.","secret"],"fairy-wings":["Fairy wings","Clear shimmering wings.","secret"],"mech-wings":["Mech wings","Metal wings with glowing jets.","secret"],jetpack:["Jetpack","Twin rockets.","secret"],"turtle-shell":["Turtle shell","A round shell.","secret"],guitar:["Guitar","A guitar on a strap.","code"],skateboard:["Skateboard","A board on your back.","code"]}),Mx=ot({none:["None","No tail."],cat:["Cat tail","A long curvy tail.","secret"],fox:["Fox tail","A big bushy tail.","secret"],dragon:["Dragon tail","A thick tail with spikes.","secret"],bunny:["Bunny tail","A puff.","secret"],robot:["Robot tail","A segmented tail with a light.","secret"]}),Sx=ot({none:["None","No pet."],cat:["Cat","A curious cat."],dog:["Dog","A loyal pup."],bunny:["Bunny","A hopping bunny."],bird:["Bird","A little bird."],fox:["Fox","A clever fox.","code"],owl:["Owl","A wise owl.","code"],turtle:["Turtle","Slow and steady.","code"],duck:["Duck","A rubber duck for debugging.","code"],dragon:["Dragon","A baby dragon.","secret"],robot:["Robot","A hovering helper bot.","secret"],slime:["Slime","A wobbly blob.","secret"],ghost:["Ghost","A friendly ghost.","secret"],ufo:["UFO","A tiny flying saucer.","secret"],cloud:["Cloud","A little rain cloud.","secret"],jellyfish:["Jellyfish","A glowing floater.","secret"],rock:["Pet rock","It is a rock. It has eyes.","secret"]}),wx=ot({follow:["Follow","Stays close and looks around."],sit:["Sit","Sits beside you."],float:["Float","Hovers near your shoulder.","code"],orbit:["Orbit","Circles around you.","secret"]}),Ex=ot({none:["None","No aura."],sparkles:["Sparkles","Twinkling lights.","secret"],hearts:["Hearts","Floating hearts.","secret"],bubbles:["Bubbles","Rising bubbles.","secret"],fireflies:["Fireflies","Slow glowing dots.","secret"],snow:["Snow","Falling snowflakes.","secret"],stars:["Stars","Stars that orbit you.","secret"],flames:["Flames","Rising embers.","secret"],lightning:["Lightning","Crackling sparks.","secret"],rainbow:["Rainbow","A swirl of every color.","secret"],shadow:["Shadow","Dark drifting smoke.","secret"],notes:["Music","Floating music notes.","secret"],"code-rain":["Code rain","Falling ones and zeros.","secret"],petals:["Petals","Drifting flower petals.","secret"],confetti:["Confetti","A party that never ends.","secret"]}),Ax=ot({chill:["Chill","Slow breathing and easy weight shifts."],bouncy:["Bouncy","Light bobbing."],heroic:["Heroic","Hands on hips."],shy:["Shy","Small and quiet."],cool:["Cool","Arms crossed.","code"],floaty:["Floaty","Hovers off the ground.","secret"]}),Tx=ot({happy:["Happy","A warm resting face."],calm:["Calm","Relaxed and even."],excited:["Excited","Wide eyes and a big smile."],cool:["Cool","Lowered lids."],curious:["Curious","One brow up."],serious:["Serious","Focused."],sleepy:["Sleepy","Half closed eyes.","code"],mischief:["Mischief","A sly look.","code"]}),Dh=ot({wave:["Wave","A friendly wave."],cheer:["Cheer","Both arms up."],jump:["Jump","A happy jump."],dance:["Dance","A side to side groove."],clap:["Clap","Clap along."],bow:["Bow","A polite bow."],nod:["Nod","Nod yes."],"shake-head":["Shake head","Shake no."],shrug:["Shrug","Who knows."],think:["Think","Hand on chin."],laugh:["Laugh","A big laugh."],flex:["Flex","Show those arms."],spin:["Spin","A quick twirl."],"robot-dance":["Robot dance","Stiff robot moves.","code"],disco:["Disco","Point up, point down.","code"],salute:["Salute","A sharp salute.","code"],facepalm:["Facepalm","Hand on the face.","code"],sleep:["Sleep","A quick nap standing up.","code"],backflip:["Backflip","A full flip.","secret"],levitate:["Levitate","Rise and float.","secret"],glide:["Glide","Slide across the floor.","secret"],"victory-spin":["Victory spin","The level pass celebration.","secret"]}),to=1,qa=(i,e)=>({color:gt(i,"fabric","Main color."),color2:gt(e,"fabric","Second color, used by patterns and trim."),pattern:lt(Lh,"solid","Fabric pattern."),scale:yt(1,"Pattern size. Bigger numbers make a bigger pattern.",.3,3,"code"),material:lt(Ih,"cotton","What the fabric is made of.")}),Zs={body:{height:yt(.5,"How tall you are."),build:yt(.45,"Slim at 0, broad at 1."),shoulders:yt(.5,"Shoulder width."),waist:yt(.5,"Waist and hip shape. Straight at 0, curved at 1."),legs:yt(.5,"Leg length compared to the body."),headSize:yt(.5,"Head size. Bigger reads more cartoon."),neck:yt(.5,"Neck length."),posture:lt(Y2,"relaxed","How you stand.")},skin:{tone:gt("#c58c5c","skin","Skin tone."),material:lt(_x,"skin","What your skin is made of.")},head:{shape:lt($2,"oval","Overall head shape."),jaw:yt(.5,"Jaw width."),cheeks:yt(.5,"Cheek fullness."),chin:yt(.5,"Chin length and point."),forehead:yt(.5,"Forehead height.")},eyes:{shape:lt(K2,"almond","Eye shape."),size:yt(.5,"Eye size."),spacing:yt(.5,"Distance between the eyes."),tilt:yt(.5,"Tilt. Above 0.5 lifts the outer corners."),height:yt(.5,"How high the eyes sit."),color:gt("#5b3a1e","eye","Iris color."),colorRight:gt("","eye","Right iris color, for two different eyes.",!0),pupil:lt(Z2,"round","Pupil shape."),lashes:lt(J2,"natural","Lash style."),glow:yt(0,"Makes the iris glow.",0,1,"secret")},brows:{shape:lt(j2,"soft","Eyebrow shape."),thickness:yt(.5,"Eyebrow thickness."),height:yt(.5,"How high the eyebrows sit."),tilt:yt(.5,"Tilt. Above 0.5 angles them down toward the nose."),color:gt("","hair","Eyebrow color. Leave empty to match the hair.",!0)},nose:{shape:lt(Q2,"button","Nose shape."),size:yt(.5,"Nose size."),width:yt(.5,"Nose width.")},mouth:{shape:lt(ex,"smile","Resting mouth shape."),width:yt(.5,"Mouth width."),lips:yt(.5,"Lip fullness."),lipColor:gt("","fabric","Lipstick color. Leave empty for natural lips.",!0),teeth:lt(tx,"plain","Teeth style.")},ears:{shape:lt(nx,"round","Ear shape."),size:yt(.5,"Ear size.")},face:{freckles:yt(0,"Amount of freckles."),moles:yt(0,"Beauty marks. 1 or 2.",0,2),blush:yt(.25,"Amount of blush."),blushColor:gt("#ff8fa3","fabric","Blush color."),eyeshadow:yt(0,"Amount of eyeshadow."),eyeshadowColor:gt("#7b4fd6","fabric","Eyeshadow color."),eyeliner:lt(ix,"none","Eyeliner style."),scars:o0(sx,3,"Scars and bandages."),paint:lt(ax,"none","Face paint design."),paintColor:gt("#f7f5f0","fabric","Face paint color."),paintColor2:gt("#2f6fe0","fabric","Second face paint color.")},hair:{style:lt(ox,"crop","Hairstyle."),color:gt("#3b2618","hair","Hair color."),color2:gt("#d8b46a","hair","Second hair color."),tone:lt(rx,"none","How the second color is used."),volume:yt(.5,"How big the hair is.")},facialHair:{style:lt(lx,"none","Facial hair style."),color:gt("","hair","Facial hair color. Leave empty to match the hair.",!0),density:yt(.8,"How thick it looks.")},glasses:{style:lt(cx,"none","Glasses style."),color:gt("#1b1b1b","fabric","Frame color."),lens:gt("#a8d8ff","fabric","Lens tint color."),tint:yt(.15,"How dark the lenses are.")},earrings:{style:lt(hx,"none","Earring style."),color:gt("#e0b23a","fabric","Earring color."),side:lt(fx,"both","Which ear.")},piercings:{items:o0(dx,3,"Face piercings."),color:gt("#c9ced6","fabric","Piercing color.")},hat:{style:lt(ux,"none","Hat or headwear."),color:gt("#2f6fe0","fabric","Main color."),color2:gt("#f7f5f0","fabric","Second color."),pattern:lt(Lh,"solid","Fabric pattern.")},top:{style:lt(px,"tee","What you wear on top."),...qa("#2f6fe0","#f7f5f0"),emblem:lt(mx,"none","Design on the chest.")},bottom:{style:lt(gx,"jeans","What you wear on your legs."),...qa("#3f5f8f","#f7f5f0")},shoes:{style:lt(xx,"sneakers","Shoes."),color:gt("#f7f5f0","fabric","Main color."),color2:gt("#d93a3a","fabric","Accent color."),material:lt(Ih,"cotton","What the shoes are made of.")},outerwear:{style:lt(vx,"none","Jacket or coat."),...qa("#3a3d45","#f7f5f0")},headpiece:{style:lt(bx,"none","Something special on your head."),color:gt("#e0b23a","fabric","Main color."),color2:gt("#d93a3a","fabric","Gem or accent color.")},back:{style:lt(yx,"none","Something on your back."),...qa("#d93a3a","#e0b23a")},tail:{style:lt(Mx,"none","A tail."),color:gt("","hair","Tail color. Leave empty to match the hair.",!0),color2:gt("#f7f5f0","fabric","Tip color.")},pet:{kind:lt(Sx,"none","A pet that stays with you."),color:gt("#f08a24","fabric","Pet color."),color2:gt("#f7f5f0","fabric","Pet accent color."),mode:lt(wx,"follow","What your pet does."),size:yt(.5,"Pet size."),name:f2("",16,"Your pet's name.")},aura:{kind:lt(Ex,"none","Particles around you."),color:gt("#ffe98a","fabric","Aura color."),color2:gt("#ff8fa3","fabric","Second aura color."),intensity:yt(.6,"How strong the aura is.")},motion:{idle:lt(Ax,"chill","How you move while standing."),expression:lt(Tx,"happy","Your resting face."),clickEmote:lt(Dh,"wave","What you do when a visitor clicks you."),energy:yt(.5,"How lively your idle motion is."),lookAtMouse:wh(!0,"Follow the mouse with your eyes.")}};function _o(i){const e=[];let t={};try{if(typeof i=="string")try{i=JSON.parse(i)}catch{e.push({path:"",message:"I could not read that as JSON. Check for a missing comma or quote."}),i={}}i&&typeof i=="object"&&!Array.isArray(i)?t=i:i!=null&&e.push({path:"",message:"A look should be a group of properties. I used the default look."}),typeof t.v=="number"&&t.v>to&&e.push({path:"v",message:"This look was made with a newer version. Some parts may be skipped."});const n={v:to};for(const o of Object.keys(t))o!=="v"&&o!=="animations"&&!(o in Zs)&&e.push({path:o,message:`I skipped "${o}". That group does not exist.`});for(const[o,r]of Object.entries(Zs))n[o]=sl(r,t[o],o,e);const s={},a=t.animations;if(a&&typeof a=="object"&&!Array.isArray(a)){let o=0;for(const[r,l]of Object.entries(a)){const c=r.replace(/[^a-zA-Z0-9_-]/g,"").slice(0,24);if(!c)continue;if(o>=ol){e.push({path:"animations",message:`A look holds up to ${ol} animations. I skipped the rest.`});break}const h=Rh(l,`animations.${c}`,e);h&&(s[c]=h,o++)}}return n.animations=s,{spec:n,warnings:e}}catch{const n={v:to,animations:{}};for(const[s,a]of Object.entries(Zs))n[s]=sl(a,void 0,s,[]);return e.push({path:"",message:"Something in that look could not be read. I used the default look."}),{spec:n,warnings:e}}}const Ox=()=>_o({}).spec;function zx(i,e={}){const t=Ah(i),n=e.tiers??["menu","code","secret"],s=e.spice??.5,a={};for(const[r,l]of Object.entries(Zs))a[r]=Th(l,t,n);const o=(r,l,c,h="none")=>{t()>c&&(a[r][l]=h)};o("glasses","style",.3),o("earrings","style",.3),o("hat","style",.3),o("outerwear","style",.4),o("facialHair","style",.18),o("headpiece","style",.25*s*2),o("back","style",.3*s*2),o("tail","style",.15*s*2),o("pet","kind",.5),o("aura","kind",.3*s*2),o("face","paint",.15),o("skin","material",.06*s*2,"skin"),o("top","emblem",.35),o("hair","tone",.3);for(const r of["top","bottom","outerwear","back","hat"])if(t()>.45&&(a[r].pattern="solid"),a[r].material!==void 0&&t()>.3){const l=r==="bottom"&&t()<.5;a[r].material=l&&n.includes("code")?"denim":"cotton"}t()>.2*s*2&&(a.shoes.material="cotton"),t()>.25&&(a.eyes.pupil="round"),t()>.15&&(a.eyes.glow=0),t()>.2&&(a.mouth.teeth="plain"),t()>.25&&(a.face.scars=[]),t()>.25&&(a.piercings.items=[]),t()>.3&&(a.face.freckles=0),t()>.2?a.face.moles=0:a.face.moles=Math.round(Number(a.face.moles)),t()>.35&&(a.face.eyeshadow=0),a.face.blush=Number(a.face.blush)*.6;{const r=["#ff8fa3","#ffc9a8","#f08a7a","#e2607a"][Math.floor(t()*4)];n.includes("code")&&(a.face.blushColor=r)}for(const r of["jaw","cheeks","chin","forehead"])a.head[r]=.5+(Number(a.head[r])-.5)*.8;return t()>.3&&(a.face.eyeliner="none"),t()>.25&&(a.mouth.lipColor=""),t()>.12&&(a.eyes.colorRight=""),a.pet.name="",_o(a).spec}const M0=.25;class oa{stage;character=new l2;animator=new g2(this.character);pet=new h2;room;events={};autoReact=!0;look;roomSpec=null;mode;charRoot=new kn;aura=null;confetti;hearts;proxies=[];ray=new Cd;pointer=new _t;pointerSmooth=new _t;focus="body";camPos=new ie(0,1.5,6.4);camLook=new ie(0,1.2,0);yaw=0;yawTarget=0;dragging=!1;dragX=0;dragMoved=0;bubble=null;lastRect="";reduced=!1;envKey="";pulse=0;canvas;cleanup=[];w=1;h=1;constructor(e,t="scene"){this.canvas=e,this.mode=t,this.stage=new F1(e,{alpha:t!=="scene",preserve:t==="portrait"});const n=this.stage.scene;if(this.room=t==="scene"?new X2:null,this.room)n.add(this.room.group);else{const s=new Qt(new Tl(4,40),new gd({opacity:.2}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),this.applyStudioLight()}if(this.charRoot.position.set(0,0,t==="scene"?M0:0),this.charRoot.add(this.character.group,this.pet.group),n.add(this.charRoot),this.confetti=new eo({count:140,mode:"burst",shape:"confetti",size:.07,color:"#ffe98a",color2:"#ff8fa3",box:[1.1,1.6,1.1],additive:!1,rainbow:!0}),this.hearts=new eo({count:14,mode:"burst",shape:"heart",size:.09,color:"#ff5c8a",color2:"#ff9ab8",box:[.35,.5,.35],additive:!1}),n.add(this.confetti.points,this.hearts.points),this.stage.onUpdate((s,a)=>this.tick(s,a)),t!=="portrait"&&typeof window<"u"&&this.bind(),typeof window<"u"&&window.matchMedia){const s=window.matchMedia("(prefers-reduced-motion: reduce)");this.setReducedMotion(s.matches);const a=o=>this.setReducedMotion(o.matches);s.addEventListener?.("change",a),this.cleanup.push(()=>s.removeEventListener?.("change",a))}}setLook(e){const{spec:t,warnings:n}=_o(e);this.look=t,this.character.setLook(t),this.pet.setLook(t),this.buildProxies(),this.aura?.points.removeFromParent(),this.aura?.dispose(),this.aura=null;const s=t.aura;if(s.kind!=="none"&&ho[s.kind]){const a=ho[s.kind];this.aura=new eo({...a,count:Math.max(4,Math.round(a.count*(.4+s.intensity*1.1))),color:s.color,color2:s.color2,box:a.box??[.42,this.character.dims.H*1.05,.42],opacity:(a.opacity??1)*(.5+s.intensity*.6)}),this.charRoot.add(this.aura.points)}return this.frame(!0),n.length&&this.events.onWarnings?.(n),n}setRoom(e){const{spec:t,warnings:n}=xo(e);return this.roomSpec=t,this.room&&(this.room.setSpec(t),this.applyRoomLight()),n.length&&this.events.onWarnings?.(n),n}setData(e){this.room?.setData(e)}set(e,t){const n=e.split("."),s=a=>JSON.parse(JSON.stringify(a));if(n[0]==="look"&&n.length===3&&this.look){const a=s(this.look);return!a[n[1]]||typeof a[n[1]]!="object"?[{path:e,message:`I skipped "${e}". That group does not exist.`}]:(a[n[1]][n[2]]=t,this.setLook(a))}if(n[0]==="room"&&n.length===3&&this.roomSpec){const a=s(this.roomSpec);return!a[n[1]]||typeof a[n[1]]!="object"?[{path:e,message:`I skipped "${e}". That group does not exist.`}]:(a[n[1]][n[2]]=t,this.setRoom(a))}if(n[0]==="decor"&&n.length===3&&this.roomSpec){const a=s(this.roomSpec),o=a.decor.find(r=>r.id===n[1]);return o?(o[n[2]]=t,this.setRoom(a)):[{path:e,message:`There is no decor with the id "${n[1]}".`}]}return[{path:e,message:`I don't know the path "${e}". Try "look.hair.color" or "room.walls.color".`}]}play(e){return this.animator.play(e)}animate(e){const t=[],n=Rh(e,"animation",t);return t.length&&this.events.onWarnings?.(t),n?this.animator.animate(n):Promise.resolve()}stop(){this.animator.stop()}say(e,t=3){const n=String(e??"").replace(/\s+/g," ").trim().slice(0,120);if(!n){this.bubble=null,this.events.onBubble?.(null),this.animator.setFace({});return}this.bubble={text:n,start:this.stage.time,until:this.stage.time+Math.min(12,Math.max(1,t))}}celebrate(){return this.reduced||(this.confetti.points.position.set(0,.2,this.charRoot.position.z),this.confetti.burst(),this.pulse=1),this.animator.play("victory-spin")}poke(e){const t=this.room?.findDecor(e);t&&this.room.poke(t)}setReducedMotion(e){this.reduced=e,this.animator.reducedMotion=e}setFocus(e){this.focus=e,this.mode==="portrait"&&this.frame(!0)}setScreenCovered(e){this.room?.setScreenCovered(e)}get stats(){return this.stage.stats}resize(e,t){this.w=e,this.h=t,this.stage.resize(e,t),this.frame(!0)}start(){this.stage.start()}stop_(){this.stage.stop()}renderOnce(e=0){this.stage.renderOnce(e)}dispose(){for(const e of this.cleanup)e();this.stage.stop(),this.character.dispose(),this.pet.dispose(),this.room?.dispose(),this.aura?.dispose(),this.confetti.dispose(),this.hearts.dispose(),this.stage.dispose()}applyStudioLight(){const e=this.stage;e.hemi.color.set("#eef2ff"),e.hemi.groundColor.set("#cfae9a"),e.hemi.intensity=1.55,e.key.color.set("#fff1dc"),e.key.intensity=2.2,e.rim.color.set("#bcd6ff"),e.rim.intensity=1.7,this.setEnv("#dfe6ff","#8a7468","#fff0d8")}setEnv(e,t,n){const s=e+t+n;s!==this.envKey&&(this.envKey=s,this.stage.setEnvironment(e,t,n))}applyRoomLight(){const e=this.stage,t=this.room.light,n=t.mood,s=t.k;e.hemi.color.set(n.sky),e.hemi.groundColor.set(n.ground),e.hemi.intensity=n.hemi*s*.85,e.key.color.set(n.key),e.key.intensity=n.keyI*s,e.rim.color.set(n.rim).lerp(t.window,.35),e.rim.intensity=n.rimI*(.7+.5*t.windowI),e.renderer.toneMappingExposure=n.exposure,e.key.position.set(-2.4,4.4,4.2),e.key.target.position.set(0,.9,M0),e.rim.position.set(1.2,2.6,-3.2),this.setEnv(n.sky,n.ground,n.key)}buildProxies(){for(const o of this.proxies)o.removeFromParent();this.proxies=[];const e=this.character.dims,t=this.character.rig.byName,n=e.joints,s=oa.unitSphere,a=(o,r,l,c,h)=>{const u=new Qt(s,oa.hidden);u.visible=!1,u.position.set(l[0]-r[0],l[1]-r[1],l[2]-r[2]),u.scale.set(...c),u.userData.part=h,o.add(u),this.proxies.push(u)};a(t.head,n.head,e.headCenter,[e.hs*1.15,e.hs*1.25,e.hs*1.15],"head"),a(t.chest,n.chest,[0,(e.ribY+e.shoulderY)/2,0],[e.sw+.02,(e.shoulderY-e.ribY)*.75,e.chestR[1]+.05],"body"),a(t.hips,n.hips,[0,(e.crotchY+e.ribY)/2,0],[e.hipR[0]+.04,(e.ribY-e.crotchY)*.62,e.hipR[1]+.05],"body");for(const o of["L","R"]){const r=n[`arm${o}`],l=n[`fore${o}`],c=n[`hand${o}`];a(t[`arm${o}`],r,[(r[0]+l[0])/2,(r[1]+l[1])/2,r[2]],[.075,e.upperArm*.6,.075],"arm"),a(t[`fore${o}`],l,[(l[0]+c[0])/2,(l[1]+c[1])/2-.04,l[2]],[.07,e.foreArm*.7,.07],"arm");const h=n[`leg${o}`],u=n[`shin${o}`],f=n[`foot${o}`];a(t[`leg${o}`],h,[h[0],(h[1]+u[1])/2,0],[.11,(h[1]-u[1])*.6,.11],"legs"),a(t[`shin${o}`],u,[u[0],(u[1]+f[1])/2-.03,.02],[.09,(u[1]-f[1])*.65,.12],"legs")}}static unitSphere=new po(1,10,8);static hidden=new ia;bind(){const e=this.canvas,t=r=>{const l=e.getBoundingClientRect();this.pointer.set((r.clientX-l.left)/l.width*2-1,-((r.clientY-l.top)/l.height*2-1))},n=r=>{if(t(r),this.dragging){const l=r.clientX-this.dragX;this.dragX=r.clientX,this.dragMoved+=Math.abs(l),this.yawTarget+=l*.012}else{this.events.onHover;{const l=this.pick()!==null;e.style.cursor=l?"pointer":this.mode==="studio"?"grab":"default",this.events.onHover?.(l)}}},s=r=>{t(r),this.dragMoved=0,this.mode==="studio"&&(this.dragging=!0,this.dragX=r.clientX,e.setPointerCapture?.(r.pointerId))},a=r=>{t(r);const l=this.dragMoved>6;this.dragging=!1,l||this.click()},o=()=>{this.pointer.set(0,0)};e.addEventListener("pointermove",n),e.addEventListener("pointerdown",s),e.addEventListener("pointerup",a),e.addEventListener("pointerleave",o),this.cleanup.push(()=>{e.removeEventListener("pointermove",n),e.removeEventListener("pointerdown",s),e.removeEventListener("pointerup",a),e.removeEventListener("pointerleave",o)})}pick(){this.ray.setFromCamera(this.pointer,this.stage.camera);let e=null;const t=this.ray.intersectObjects(this.proxies,!1)[0];if(t&&(e={d:t.distance,r:{type:"char",part:t.object.userData.part}}),this.pet.group.visible){const n=this.ray.intersectObject(this.pet.group,!0)[0];n&&(!e||n.distance<e.d)&&(e={d:n.distance,r:{type:"pet"}})}if(this.room){const n=this.ray.intersectObjects(this.room.pickables,!1).find(s=>s.object.userData.pick.kind!=="window");n&&(!e||n.distance<e.d)&&(e={d:n.distance,r:{type:"obj",pick:n.object.userData.pick,obj:n.object}})}return e?e.r:null}clickCharacter(e="body"){this.handleHit({type:"char",part:e})}click(){const e=this.pick();e&&this.handleHit(e)}handleHit(e){e.type==="char"?(this.events.onCharacterClick?.({part:e.part}),this.autoReact&&(e.part==="body"&&!this.animator.busy?this.animator.play(this.look.motion.clickEmote):this.animator.react(e.part))):e.type==="pet"?(this.events.onPetClick?.({kind:this.pet.kind}),this.autoReact&&(this.pet.react(),this.reduced||(this.hearts.points.position.copy(this.pet.group.position).add(this.charRoot.position),this.hearts.points.position.y+=.2,this.hearts.burst()))):(this.events.onObjectClick?.(e.pick),this.autoReact&&this.room?.poke(e.obj))}frame(e=!1){const t=this.stage.camera,n=this.w/Math.max(this.h,1);if(!this.character.dims)return;const s=this.character.dims;if(this.mode==="scene"){const a=46*Math.PI/180;t.fov=Math.min(58,Math.max(24,2*Math.atan(Math.tan(a/2)/Math.max(n,.5))*180/Math.PI)),this.camPos.set(0,1.5,6.6),this.camLook.set(0,1.32,0)}else{const a=this.focus,o=a==="body"?s.H*.52:a==="bust"?s.H-s.headH*1:s.H-s.headH*.5,r=Math.max(this.character.extras.topY-s.H,0),l=a==="body"?s.H*1.16+r:a==="bust"?s.headH*2.9+r*.6:s.headH*1.55+r*.5;t.fov=26;const c=l*.5/Math.tan(t.fov*Math.PI/360)/Math.min(1,n*(a==="body"?1.5:1));this.camLook.set(0,o+r*(a==="body"?.5:.35),0),this.camPos.set(0,this.camLook.y+(a==="body"?.12:.02),c),this.stage.key.position.set(-2.2,4.2,3.4),this.stage.key.target.position.set(0,1,0)}t.updateProjectionMatrix(),e&&this.mode!=="studio"&&(t.position.copy(this.camPos),t.lookAt(this.camLook)),e&&this.mode==="studio"&&t.position.lengthSq()<.01&&(t.position.copy(this.camPos),t.lookAt(this.camLook))}lookNow=new ie(0,1.2,0);v=new ie;tick(e,t){const n=this.stage.camera,s=this.reduced?0:1;if(this.pointerSmooth.lerp(this.pointer,Math.min(1,e*4)),this.mode==="scene")n.position.set(this.camPos.x+this.pointerSmooth.x*.42*s,this.camPos.y+this.pointerSmooth.y*.16*s+Math.sin(t*.3)*.015*s,this.camPos.z),this.lookNow.set(this.camLook.x+this.pointerSmooth.x*.1*s,this.camLook.y+this.pointerSmooth.y*.04*s,this.camLook.z),n.lookAt(this.lookNow);else if(this.mode==="studio"){const o=Math.min(1,e*6);n.position.lerp(this.camPos,o),this.lookNow.lerp(this.camLook,o),n.lookAt(this.lookNow),this.yaw+=(this.yawTarget-this.yaw)*Math.min(1,e*10),this.dragging||(this.yawTarget*=Math.exp(-e*1.2)),this.animator.yaw=this.yaw}if(this.animator.pointer.set(this.pointerSmooth.x*(this.mode==="scene"?1.6:1),this.pointerSmooth.y),this.bubble){const o=this.bubble;if(t>o.until)this.bubble=null,this.events.onBubble?.(null),this.animator.setFace({});else{const r=t-o.start<Math.min(o.until-o.start,.4+o.text.length*.06);this.animator.setFace(r&&!this.reduced?{"face.mouth":.25+.3*Math.abs(Math.sin(t*11))*(.6+.4*Math.sin(t*4.3)),"face.smile":.4}:{"face.smile":.4})}}this.animator.update(e),this.pet.update(e,{H:this.character.dims.H,sw:this.character.dims.sw},this.pointerSmooth.x,this.reduced);const a=this.stage.renderer.domElement.height;this.aura?.update(e,a,n,this.reduced),this.confetti.update(e,a,n),this.hearts.update(e,a,n),this.room&&(this.room.update(e,t,n,a,this.reduced),this.pulse>0&&(this.pulse=Math.max(0,this.pulse-e*.8),this.stage.renderer.toneMappingExposure=this.room.light.mood.exposure*(1+.25*Math.sin(this.pulse*Math.PI))),this.reportScreen()),this.bubble&&this.events.onBubble&&(this.v.set(0,this.character.extras.topY+.1,0),this.character.group.localToWorld(this.v),this.character.rig.byName.head.getWorldPosition(this.v),this.v.y+=this.character.extras.topY-this.character.dims.joints.head[1]+.08,this.v.project(n),this.events.onBubble({text:this.bubble.text,x:(this.v.x*.5+.5)*this.w,y:(-this.v.y*.5+.5)*this.h}))}reportScreen(){if(!this.events.onScreenRect||!this.room)return;const e=this.stage.camera;e.updateMatrixWorld();let t=1/0,n=1/0,s=-1/0,a=-1/0;for(const l of this.room.screenCorners){this.v.copy(l).project(e);const c=(this.v.x*.5+.5)*this.w,h=(-this.v.y*.5+.5)*this.h;t=Math.min(t,c),s=Math.max(s,c),n=Math.min(n,h),a=Math.max(a,h)}const o={left:Math.round(t*2)/2,top:Math.round(n*2)/2,width:Math.round((s-t)*2)/2,height:Math.round((a-n)*2)/2,visible:!!this.roomSpec?.screen.on&&s>0&&t<this.w},r=`${o.left},${o.top},${o.width},${o.height},${o.visible}`;r!==this.lastRect&&(this.lastRect=r,this.events.onScreenRect(o))}}let Xa=null,fl=null,S0=Promise.resolve();const xs=new Map,Rx=200;function Cx(){return Xa||(fl=document.createElement("canvas"),Xa=new oa(fl,"portrait"),Xa)}function Px(){return new Promise(i=>{const e=globalThis;e.requestIdleCallback?e.requestIdleCallback(()=>i(),{timeout:200}):setTimeout(i,0)})}function Lx(i,e={}){const t=Math.round(Math.min(512,Math.max(32,e.size??128))),n=`${t}|${e.focus??"bust"}|${e.yaw??0}|${e.type??"png"}|${typeof i=="string"?i:JSON.stringify(i??null)}`,s=xs.get(n);if(s)return s;const a=S0.then(Px).then(()=>{const o=Cx(),r=t*2;o.resize(r,r),o.setFocus(e.focus??"bust"),o.setLook(i),o.animator.yaw=(e.yaw??0)*Math.PI/180,o.setReducedMotion(!0);for(let l=0;l<4;l++)o.renderOnce(1/30);return fl.toDataURL(e.type??"image/png")});return S0=a.catch(()=>{}),xs.set(n,a),xs.size>Rx&&xs.delete(xs.keys().next().value),a.catch(()=>xs.delete(n)),a}const Nh={position:"relative",width:"100%",height:"100%",overflow:"hidden"},Uh={position:"absolute",inset:0,width:"100%",height:"100%",display:"block",touchAction:"none"};function Fh(i,e,t,n){const s=Zt.useRef(null),a=Zt.useRef(null),o=Zt.useRef(null),r=Zt.useRef(e);r.current=e;const l=Zt.useRef(t);l.current=t;const[c,h]=Zt.useState(null);return Zt.useEffect(()=>{const f=new oa(a.current,i);o.current=f,f.events={onCharacterClick:v=>r.current.onCharacterClick?.(v),onPetClick:v=>r.current.onPetClick?.(v),onObjectClick:v=>r.current.onObjectClick?.(v),onWarnings:v=>r.current.onWarnings?.(v),onBubble:v=>h(v),onScreenRect:v=>l.current.onScreenRect?.(v)};const p=s.current,g=()=>{const v=p.getBoundingClientRect();f.resize(Math.max(2,v.width),Math.max(2,v.height))};g();const x=new ResizeObserver(g);x.observe(p);let d=!0;const m=()=>{d&&document.visibilityState==="visible"?f.start():f.stop_()},M=new IntersectionObserver(v=>{d=v.some(R=>R.isIntersecting),m()});M.observe(p),document.addEventListener("visibilitychange",m);const b=setInterval(()=>r.current.onStats?.(f.stats),1e3);return()=>{clearInterval(b),M.disconnect(),x.disconnect(),document.removeEventListener("visibilitychange",m),f.dispose(),o.current=null}},[i]),Zt.useEffect(()=>{const f=o.current?.setLook(e.look);f?.length&&e.onWarnings?.(f)},[e.look]),Zt.useEffect(()=>{e.reducedMotion!==void 0?o.current?.setReducedMotion(e.reducedMotion):typeof matchMedia<"u"&&o.current?.setReducedMotion(matchMedia("(prefers-reduced-motion: reduce)").matches)},[e.reducedMotion]),Zt.useEffect(()=>{o.current&&(o.current.autoReact=e.autoReact??!0)},[e.autoReact]),Zt.useImperativeHandle(n,()=>({play:f=>o.current?.play(f)??Promise.resolve(),animate:f=>o.current?.animate(f)??Promise.resolve(),say:(f,p)=>o.current?.say(f,p),celebrate:()=>o.current?.celebrate()??Promise.resolve(),set:(f,p)=>o.current?.set(f,p)??[],poke:f=>o.current?.poke(f),stop:()=>o.current?.stop(),get engine(){return o.current}}),[]),{host:s,canvas:a,eng:o,bubble:c,onKey:f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),o.current?.clickCharacter("body"))}}}function kh({b:i}){return ai.jsx("div",{"aria-live":"polite",style:{position:"absolute",inset:0,pointerEvents:"none"},children:i&&ai.jsx("div",{style:{position:"absolute",left:i.x,top:i.y,transform:"translate(-50%, -100%)",maxWidth:240,padding:"10px 14px",background:"#fff",color:"#1b1b1b",border:"3px solid #1b1b1b",borderRadius:18,font:"600 16px/1.3 var(--font-body, system-ui, sans-serif)",boxShadow:"4px 4px 0 #1b1b1b",textAlign:"center"},children:i.text})})}const Bx=Zt.forwardRef(function(e,t){const[n,s]=Zt.useState(null),{host:a,canvas:o,eng:r,bubble:l,onKey:c}=Fh("scene",e,{onScreenRect:s},t);Zt.useEffect(()=>{const u=r.current?.setRoom(e.room);u?.length&&e.onWarnings?.(u)},[e.room]),Zt.useEffect(()=>{e.data&&r.current?.setData(e.data)},[e.data]);const h=!!e.screen;return Zt.useEffect(()=>{r.current?.setScreenCovered(h)},[h]),ai.jsxs("div",{ref:a,className:e.className,style:{...Nh,...e.style},children:[ai.jsx("canvas",{ref:o,style:Uh,tabIndex:0,role:"img","aria-label":e.label??"A student's 3D room and character. Press Enter to wave hello.",onKeyDown:c}),e.screen&&n?.visible&&ai.jsx("div",{style:{position:"absolute",left:n.left,top:n.top,width:n.width,height:n.height,overflow:"hidden",borderRadius:6},children:e.screen}),ai.jsx(kh,{b:l})]})}),Hx=Zt.forwardRef(function(e,t){const{host:n,canvas:s,eng:a,bubble:o,onKey:r}=Fh("studio",e,{},t);return Zt.useEffect(()=>{a.current?.setFocus(e.focus??"body")},[e.focus]),ai.jsxs("div",{ref:n,className:e.className,style:{...Nh,...e.style},children:[ai.jsx("canvas",{ref:s,style:Uh,tabIndex:0,role:"img","aria-label":e.label??"Character preview. Drag to turn. Press Enter to see the click reaction.",onKeyDown:r}),ai.jsx(kh,{b:o})]})});function Gx({look:i,alt:e,className:t,style:n,...s}){const a=Zt.useRef(null),[o,r]=Zt.useState(null),[l,c]=Zt.useState(!1),h=s.size??128;Zt.useEffect(()=>{const p=a.current;if(!p)return;const g=new IntersectionObserver(x=>{x.some(d=>d.isIntersecting)&&(c(!0),g.disconnect())},{rootMargin:"200px"});return g.observe(p),()=>g.disconnect()},[]);const u=JSON.stringify(i??null);return Zt.useEffect(()=>{if(!l)return;let p=!0;return Lx(i,s).then(g=>{p&&r(g)}).catch(()=>{}),()=>{p=!1}},[l,u,s.size,s.focus,s.yaw]),ai.jsx("img",{ref:a,src:o??"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",alt:e,width:h,height:h,className:t,style:{display:"block",...n}})}const Ix=[{id:"maya",name:"Maya",desc:"Curly hair, hoodie, and a cat friend.",spec:{body:{height:.45,build:.4,waist:.6},skin:{tone:"#8d5a3b"},head:{shape:"heart",cheeks:.6},eyes:{shape:"round",size:.6,color:"#3b2414",lashes:"long"},brows:{shape:"arched"},nose:{shape:"button",size:.4},mouth:{shape:"big-smile",lips:.6},face:{freckles:.3,blush:.35},hair:{style:"curly-top",color:"#1d120c",color2:"#c27a3a",tone:"tips",volume:.65},earrings:{style:"hoops",color:"#e0b23a"},top:{style:"hoodie",color:"#ff8fa3",color2:"#f7f5f0"},bottom:{style:"joggers",color:"#3a3d45"},shoes:{style:"high-tops",color:"#f7f5f0",color2:"#ff5c8a"},pet:{kind:"cat",color:"#f08a24",color2:"#f7f5f0",name:"Mango"},motion:{idle:"bouncy",expression:"happy",clickEmote:"wave"}}},{id:"dev",name:"Dev",desc:"Glasses, button-up, calm and curious.",spec:{body:{height:.62,build:.35,shoulders:.45},skin:{tone:"#c58c5c"},head:{shape:"long",jaw:.45},eyes:{shape:"almond",color:"#2a1a10"},brows:{shape:"straight",thickness:.6},nose:{shape:"straight"},mouth:{shape:"smirk"},hair:{style:"side-part",color:"#141010"},facialHair:{style:"stubble",density:.5},glasses:{style:"square",color:"#1b1b1b"},top:{style:"button-up",color:"#a8c8ff",pattern:"pinstripes",color2:"#2f6fe0"},bottom:{style:"cargo",color:"#6b6650"},shoes:{style:"loafers",color:"#5a3a22",material:"leather"},motion:{idle:"chill",expression:"curious",clickEmote:"think"}}},{id:"jordan",name:"Jordan",desc:"Athlete in a jersey with a flat-top.",spec:{body:{height:.78,build:.7,shoulders:.75,posture:"heroic"},skin:{tone:"#5a3522"},head:{shape:"square",jaw:.65},eyes:{shape:"hero",color:"#1f140c"},brows:{shape:"thick"},nose:{shape:"wide"},mouth:{shape:"grin"},hair:{style:"flat-top",color:"#0f0b08"},top:{style:"jersey",color:"#d93a3a",color2:"#f7f5f0",emblem:"chest-stripe"},bottom:{style:"gym-shorts",color:"#d93a3a"},shoes:{style:"high-tops",color:"#1b1b1b",color2:"#e0b23a"},back:{style:"backpack",color:"#1b1b1b"},motion:{idle:"heroic",expression:"excited",clickEmote:"flex"}}},{id:"lena",name:"Lena",desc:"Platinum bob, beret, and a long coat.",spec:{body:{height:.55,build:.3,waist:.55},skin:{tone:"#f1d2bd"},head:{shape:"oval",chin:.6},eyes:{shape:"upturned",color:"#4a7fb5",lashes:"winged"},brows:{shape:"thin",color:"#6b5440"},nose:{shape:"upturned",size:.4},mouth:{shape:"small",lipColor:"#c0395a"},face:{eyeliner:"wing",moles:1,blush:.2},hair:{style:"bob",color:"#efe4cf"},hat:{style:"beret",color:"#c0395a"},top:{style:"turtleneck",color:"#1b1b1b"},bottom:{style:"wide-leg",color:"#3a3d45"},outerwear:{style:"long-coat",color:"#c9a57a"},shoes:{style:"boots",color:"#1b1b1b",material:"leather"},motion:{idle:"cool",expression:"calm",clickEmote:"bow"}}},{id:"kai",name:"Kai",desc:"Skater with a bucket hat and a dog.",spec:{body:{height:.5,build:.45,posture:"slouch"},skin:{tone:"#d9a77a"},head:{shape:"round"},eyes:{shape:"sleepy",color:"#3a2a1a"},brows:{shape:"soft"},nose:{shape:"round"},mouth:{shape:"smile"},hair:{style:"shaggy",color:"#4a2e1c",color2:"#d8b46a",tone:"streaks"},hat:{style:"bucket",color:"#6b8f3a",pattern:"camo",color2:"#3a4a22"},top:{style:"tee",color:"#f7f5f0",emblem:"smiley"},bottom:{style:"shorts",color:"#3f5f8f",material:"denim"},shoes:{style:"sneakers",color:"#1b1b1b",color2:"#f7f5f0"},back:{style:"skateboard",color:"#ff8a24",color2:"#1b1b1b"},pet:{kind:"dog",color:"#c9a57a",color2:"#f7f5f0",name:"Biscuit"},motion:{idle:"chill",expression:"happy",clickEmote:"shrug"}}},{id:"amara",name:"Amara",desc:"Braids, a dress, and gold earrings.",spec:{body:{height:.6,build:.4,waist:.7},skin:{tone:"#3d2418"},head:{shape:"oval",cheeks:.55},eyes:{shape:"almond",size:.55,color:"#2a1508",lashes:"long"},brows:{shape:"arched",thickness:.55},nose:{shape:"wide",size:.45},mouth:{shape:"smile",lips:.7,lipColor:"#8a3a4a"},face:{blush:.2,eyeshadow:.4,eyeshadowColor:"#e0b23a"},hair:{style:"braids",color:"#120a06",color2:"#d8b46a",tone:"streaks"},earrings:{style:"drops",color:"#e0b23a"},top:{style:"dress",color:"#2fa58a",pattern:"floral",color2:"#ffe98a"},bottom:{style:"leggings",color:"#1b1b1b"},shoes:{style:"platforms",color:"#e0b23a",material:"glitter"},motion:{idle:"bouncy",expression:"excited",clickEmote:"dance"}}},{id:"theo",name:"Theo",desc:"Cozy sweater, beanie, and a beard.",spec:{body:{height:.7,build:.62},skin:{tone:"#e8b896"},head:{shape:"round",jaw:.6},eyes:{shape:"downturned",color:"#3a6a3a"},brows:{shape:"bushy",color:"#8a3a1c"},nose:{shape:"strong"},mouth:{shape:"smile"},face:{freckles:.6},hair:{style:"crop",color:"#a8461c"},facialHair:{style:"full-beard",color:"#a8461c"},hat:{style:"beanie",color:"#f08a24",color2:"#f7f5f0",pattern:"nordic"},top:{style:"sweater",color:"#3a5a3a",pattern:"argyle",color2:"#d8b46a",material:"knit"},bottom:{style:"jeans",color:"#3f5f8f",material:"denim"},shoes:{style:"boots",color:"#7a5236",material:"leather"},motion:{idle:"chill",expression:"calm",clickEmote:"laugh"}}},{id:"yuki",name:"Yuki",desc:"Anime spikes, bomber jacket, cool shades.",spec:{body:{height:.52,build:.35,posture:"upright"},skin:{tone:"#f0caa4"},head:{shape:"diamond",chin:.65},eyes:{shape:"sharp",color:"#7b4fd6",size:.6},brows:{shape:"angled"},nose:{shape:"tiny"},mouth:{shape:"smirk"},hair:{style:"anime-spikes",color:"#2f6fe0",color2:"#a8e8ff",tone:"tips"},glasses:{style:"visor",color:"#1b1b1b",lens:"#ff5c8a",tint:.5},top:{style:"tee",color:"#1b1b1b",emblem:"bolt"},bottom:{style:"cargo",color:"#3a3d45"},outerwear:{style:"bomber",color:"#2f6fe0",color2:"#ff8a24"},shoes:{style:"high-tops",color:"#f7f5f0",color2:"#2f6fe0"},motion:{idle:"cool",expression:"cool",clickEmote:"salute"}}},{id:"rosa",name:"Rosa",desc:"Hijab, lab coat, and a curious owl.",spec:{body:{height:.48,build:.42},skin:{tone:"#b07a50"},head:{shape:"oval"},eyes:{shape:"round",color:"#3b2414",lashes:"natural"},brows:{shape:"soft"},nose:{shape:"straight",size:.45},mouth:{shape:"big-smile"},face:{blush:.3},hat:{style:"hijab",color:"#7b4fd6"},glasses:{style:"round",color:"#e0b23a"},top:{style:"long-sleeve",color:"#f7f5f0"},bottom:{style:"long-skirt",color:"#3a3d45"},outerwear:{style:"lab-coat",color:"#f7f5f0"},shoes:{style:"sneakers",color:"#7b4fd6",color2:"#f7f5f0"},pet:{kind:"owl",color:"#9a7a5a",color2:"#f7f5f0",mode:"float",name:"Newton"},motion:{idle:"shy",expression:"curious",clickEmote:"nod"}}},{id:"nova",name:"Nova",desc:"Secret tier. Galaxy hair, halo, and fairy wings.",spec:{body:{height:.5,build:.35},skin:{tone:"#c58c5c"},head:{shape:"heart"},eyes:{shape:"doll",color:"#7b4fd6",pupil:"star",glow:.6,lashes:"dramatic"},brows:{shape:"arched",color:"#3a2a6a"},nose:{shape:"tiny"},mouth:{shape:"cat-smile"},face:{paint:"galaxy",paintColor:"#ffe98a",paintColor2:"#7b4fd6"},hair:{style:"big-curls",color:"#3a2a8a",color2:"#ff8fe0",tone:"galaxy",volume:.7},headpiece:{style:"halo",color:"#ffe98a"},top:{style:"dress",color:"#3a2a8a",pattern:"galaxy",color2:"#ff8fe0"},bottom:{style:"leggings",color:"#1b1b3a"},shoes:{style:"cloud-shoes",color:"#f7f5f0"},back:{style:"fairy-wings",color:"#a8e8ff",color2:"#ff8fe0",material:"glass"},aura:{kind:"stars",color:"#ffe98a",color2:"#ff8fe0",intensity:.6},motion:{idle:"floaty",expression:"mischief",clickEmote:"levitate"}}},{id:"rex",name:"Rex",desc:"Secret tier. Chrome armor, mech wings, a robot pet.",spec:{body:{height:.82,build:.7,shoulders:.8,posture:"heroic"},skin:{tone:"#8d5a3b"},head:{shape:"square",jaw:.7},eyes:{shape:"hero",color:"#33ccff",glow:.8},brows:{shape:"angled"},nose:{shape:"strong"},mouth:{shape:"serious"},face:{paint:"circuit",paintColor:"#33ccff"},hair:{style:"undercut",color:"#d8dde6"},glasses:{style:"laser-visor",color:"#d8dde6",lens:"#33ccff",tint:.4},top:{style:"armor",color:"#9aa4b4",material:"chrome"},bottom:{style:"space-pants",color:"#3a3d45",material:"metal"},shoes:{style:"rocket-boots",color:"#9aa4b4",color2:"#ff8a24"},back:{style:"mech-wings",color:"#9aa4b4",color2:"#33ccff",material:"chrome"},pet:{kind:"robot",color:"#d8dde6",color2:"#33ccff",mode:"orbit",name:"Bolt"},aura:{kind:"lightning",color:"#33ccff",color2:"#ffffff",intensity:.5},motion:{idle:"heroic",expression:"serious",clickEmote:"robot-dance"}}},{id:"pip",name:"Pip",desc:"Secret tier. Fox ears and tail, wizard robe, a tiny dragon.",spec:{body:{height:.3,build:.5,headSize:.7},skin:{tone:"#f1d2bd"},head:{shape:"round",cheeks:.75},eyes:{shape:"wide",size:.75,color:"#3a8a3a"},brows:{shape:"rounded",color:"#a8461c"},nose:{shape:"button",size:.35},mouth:{shape:"cat-smile",teeth:"fangs"},face:{paint:"whiskers",paintColor:"#5a3a22",blush:.5,freckles:.4},hair:{style:"pixie",color:"#e06a24",color2:"#f7f5f0",tone:"tips"},headpiece:{style:"fox-ears",color:"#e06a24",color2:"#f7f5f0"},top:{style:"wizard-robe",color:"#3a2a6a",pattern:"stars",color2:"#ffe98a"},bottom:{style:"joggers",color:"#3a2a6a"},shoes:{style:"bunny-slippers",color:"#f7f5f0",color2:"#ff8fa3"},tail:{style:"fox",color:"#e06a24",color2:"#f7f5f0"},pet:{kind:"dragon",color:"#2fa58a",color2:"#ffe98a",mode:"float",name:"Ember"},aura:{kind:"fireflies",color:"#ffe98a",color2:"#ff8a24",intensity:.5},motion:{idle:"bouncy",expression:"mischief",clickEmote:"backflip"}}}],Dx=[{id:"cozy-islands",name:"Cozy Islands",desc:"Soft pink room over floating islands.",spec:{decor:[{item:"rug-round",x:0,z:.15,color:"#ff8fa3",color2:"#f7f5f0"},{item:"bed",x:-.72,z:-.55,rot:90},{item:"monstera",x:-.28,z:-.86},{item:"floor-lamp",x:.42,z:-.88},{item:"beanbag",x:-.62,z:.45,rot:30},{item:"poster",wall:"left",x:-.1,y:.6},{item:"string-lights",wall:"back",x:0,y:.93},{item:"teddy-bear",x:.62,z:.5,rot:-30}]}},{id:"neon-city",name:"Neon City",desc:"Night skyline, neon signs, and a gaming setup.",spec:{walls:{style:"concrete",color:"#2a2d3a"},floor:{style:"tiles",color:"#1b1d26",color2:"#2a2d3a"},ceiling:{color:"#1b1d26"},trim:{color:"#33ccff"},window:{shape:"panorama",curtains:"none"},view:{theme:"neon-skyline",time:"night",weather:"rain"},lighting:{mood:"neon",brightness:.55},particles:{kind:"sparkles",color:"#33ccff",color2:"#ff5c8a",amount:.4},shelf:{style:"metal"},sign:{style:"neon",color:"#ff5c8a"},screen:{style:"arcade",color:"#1b1d26"},decor:[{item:"rug-rect",x:0,z:.1,color:"#3a2a6a",color2:"#33ccff"},{item:"desk",x:-.62,z:-.7},{item:"gaming-chair",x:-.62,z:-.35,rot:160,color:"#ff5c8a"},{item:"neon-code",wall:"left",x:0,y:.62,color:"#33ccff"},{item:"neon-bolt",wall:"right",x:.2,y:.7,color:"#ffe98a"},{item:"boombox",x:.55,z:.55},{item:"lava-lamp",x:-.9,z:.2,color:"#ff5c8a"},{item:"server-rack",x:.9,z:-.2},{item:"cactus",x:.35,z:-.9}]}},{id:"deep-sea",name:"Deep Sea Lab",desc:"Porthole view of an underwater city.",spec:{walls:{style:"tiles",color:"#2a6a8a",color2:"#3a8aaa"},floor:{style:"marble",color:"#d8e8f0",color2:"#8ab0c0"},ceiling:{color:"#1b4a6a"},trim:{color:"#e0b23a"},window:{shape:"porthole",curtains:"none"},view:{theme:"underwater-city",time:"day",weather:"clear"},lighting:{mood:"underwater",brightness:.6},particles:{kind:"bubbles",color:"#a8e8ff",color2:"#ffffff",amount:.6},shelf:{style:"metal"},sign:{style:"hologram",color:"#33ccff"},screen:{style:"hologram",color:"#33ccff"},decor:[{item:"rug-round",x:0,z:.15,color:"#2fa58a",color2:"#a8e8ff"},{item:"fish-tank",x:-.7,z:-.7},{item:"telescope",x:.6,z:-.6,rot:-30},{item:"treasure-chest",x:-.6,z:.5,rot:25},{item:"glow-mushrooms",x:.75,z:.45,color:"#33ccff"},{item:"hanging-plant",x:-.4,z:-.3},{item:"clock",wall:"left",x:0,y:.65,color:"#e0b23a"},{item:"book-stack",x:.35,z:.6}]}},{id:"wizard-tower",name:"Wizard Tower",desc:"Secret tier. A black hole outside and magic everywhere.",spec:{walls:{style:"bricks",color:"#4a3a5a",color2:"#3a2a4a"},floor:{style:"wood",color:"#5a3a22",color2:"#3a2416"},ceiling:{color:"#2a1a3a"},trim:{color:"#e0b23a"},window:{shape:"arch",curtains:"drapes",curtainColor:"#6a2a8a"},view:{theme:"black-hole",time:"night",weather:"stardust"},lighting:{mood:"candle",brightness:.5},particles:{kind:"fireflies",color:"#ffe98a",color2:"#ff8a24",amount:.6},shelf:{style:"wood",color:"#5a3a22"},sign:{style:"plaque",color:"#e0b23a"},screen:{style:"retro",color:"#5a3a22"},decor:[{item:"rug-round",x:0,z:.15,color:"#6a2a8a",color2:"#e0b23a"},{item:"cauldron",x:-.6,z:.45,color:"#2fa58a",animate:"bob"},{item:"bookshelf",x:-.78,z:-.75},{item:"floating-crystal",x:.62,z:.45,color:"#ff8fe0",animate:"spin"},{item:"dragon-egg",x:.4,z:-.85,color:"#d93a3a"},{item:"planet-mobile",x:.3,z:.2},{item:"portal",x:.85,z:-.35,color:"#7b4fd6"},{item:"neon-star",wall:"left",x:.1,y:.7,color:"#ffe98a"}]}}],Vx=Ix.map(i=>({...i,spec:_o(i.spec).spec})),Wx=Dx.map(i=>({...i,spec:xo(i.spec).spec}));function w0(i){const e=[];for(const[t,n]of Object.entries(i))for(const[s,a]of Object.entries(n)){const o=`${t}.${s}`;switch(a.t){case"num":e.push({path:o,type:"number",desc:a.desc,default:a.d,tier:a.tier??"menu",min:a.min,max:a.max});break;case"opt":e.push({path:o,type:"option",desc:a.desc,default:a.d,tier:"menu",options:Object.values(a.table)});break;case"color":e.push({path:o,type:"color",desc:a.desc,default:a.d,tier:"menu",palette:a.palette,canBeEmpty:!!a.auto});break;case"list":e.push({path:o,type:"list",desc:a.desc,default:[],tier:"menu",maxItems:a.max,options:Object.values(a.table)});break;case"text":e.push({path:o,type:"text",desc:a.desc,default:a.d,tier:a.tier??"menu",maxLength:a.max});break;case"bool":e.push({path:o,type:"boolean",desc:a.desc,default:a.d,tier:a.tier??"menu"});break}}return e}let Ya=null;function qx(){if(Ya)return Ya;const i=w0(Zs),e=w0(fo),t=Object.values(Ki).map(s=>({id:s.id,name:s.name,desc:s.desc,tier:s.tier,place:s.place})),n={menu:0,code:0,secret:0};for(const s of[...i,...e])for(const a of s.options??[])n[a.tier]++;for(const s of t)n[s.tier]++;return Ya={look:{version:to,fields:i},room:{version:rl,fields:e,decor:t,decorAnimations:Object.values(ll),maxDecor:Ws},animation:{channels:Object.entries(co).map(([s,a])=>({name:s,...a})),eases:al,maxFrames:Vs,maxAnimations:ol,emotes:Object.values(Dh)},palettes:Yi,counts:n},Ya}export{co as C,Ki as D,al as E,Vx as L,Ws as M,Bx as P,Wx as R,Hx as S,xo as a,Gx as b,qx as c,kx as d,Ox as e,Fx as f,Yi as g,ll as h,Ux as i,Zs as j,fo as k,Lx as l,to as m,_o as n,ol as o,Vs as p,oa as q,zx as r,rl as s,Rh as t};
