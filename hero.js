var tu=0,vc=1,nu=2;var xr=1,iu=2,Ms=3,mn=0,Ut=1,jt=2,Di=0,ws=1,Ac=2,_c=3,Sc=4,su=5;var Ui=100,ru=101,au=102,ou=103,cu=104,lu=200,hu=201,uu=202,du=203,Mc=204,wc=205,fu=206,pu=207,mu=208,gu=209,bu=210,xu=211,yu=212,vu=213,Au=214,ca=0,la=1,ha=2,ss=3,ua=4,da=5,fa=6,pa=7,Ec=0,_u=1,Su=2,Ln=0,Tc=1,Cc=2,Ic=3,Rc=4,Pc=5,Nc=6,yr=7,oc="attached",Mu="detached",Lc=300,Fi=301,Es=302,La=303,Da=304,fi=1e3,un=1001,rs=1002,mt=1003,Ua=1004;var Oi=1005;var St=1006,Ts=1007;var gn=1008;var en=1009,Dc=1010,Uc=1011,Cs=1012,Fa=1013,Mn=1014,cn=1015,wn=1016,Oa=1017,ka=1018,ki=1020,Fc=35902,Oc=35899,kc=1021,Bc=1022,bn=1023,Xn=1026,ti=1027,Ba=1028,Va=1029,bi=1030,Ga=1031;var za=1033,vr=33776,Ar=33777,_r=33778,Sr=33779,Ha=35840,Wa=35841,qa=35842,Xa=35843,Ka=36196,ja=37492,Ya=37496,Ja=37488,Za=37489,Mr=37490,Qa=37491,$a=37808,eo=37809,to=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,co=37817,lo=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,bo=36283,xo=36284,wr=36285,yo=36286;var Ii=2300,Ri=2301,aa=2302,cc=2303,lc=2400,hc=2401,uc=2402,wu=2500;var Vc=0,Er=1,Is=2,Eu=3200;var vo=0,Tu=1,ni="",ut="srgb",Kt="srgb-linear",Xs="linear",et="srgb";var oa=7680;var Cu=519,Iu=512,Ru=513,Pu=514,Gc=515,Nu=516,Lu=517,zc=518,Hc=519,Wc=35044;var qc="300 es",dn=2e3,as=2001;function Jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){let i=os("canvas");return i.style.display="block",i}var fh={},cs=null;function Ks(...i){let e="THREE."+i.shift();cs?cs("log",e,...i):console.log(e,...i)}function Uu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Te(...i){i=Uu(i);let e="THREE."+i.shift();if(cs)cs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function De(...i){i=Uu(i);let e="THREE."+i.shift();if(cs)cs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ci(...i){let e=i.join(" ");e in fh||(fh[e]=!0,Te(...i))}function Fu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ou={[ca]:ca,[ha]:fa,[ua]:ua,[ss]:da,[la]:la,[fa]:ha,[pa]:pa,[da]:ss},In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=1234567,Ws=Math.PI/180,Pi=180/Math.PI;function Dn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Xc(i,e){return(i%e+e)%e}function Qd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $d(i,e,t){return i!==e?(t-i)/(e-i):0}function qs(i,e,t){return(1-t)*i+t*e}function ef(i,e,t,n){return qs(i,e,1-Math.exp(-t*n))}function tf(i,e=1){return e-Math.abs(Xc(i,e*2)-e)}function nf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function af(i,e){return i+Math.random()*(e-i)}function of(i){return i*(.5-Math.random())}function cf(i){i!==void 0&&(ph=i);let e=ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lf(i){return i*Ws}function hf(i){return i*Pi}function uf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ff(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),b=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*b,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*b,o*l);break;case"ZYZ":i.set(c*b,c*p,o*h,o*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ao(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function jc(i,e){if(e.constructor===Float32Array)return i;let t=Ao(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Yc(i,e){if(e.constructor===Float32Array)return i;let t=Ao(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var xi={DEG2RAD:Ws,RAD2DEG:Pi,generateUUID:Dn,clamp:Ke,euclideanModulo:Xc,mapLinear:Qd,inverseLerp:$d,lerp:qs,damp:ef,pingpong:tf,smoothstep:nf,smootherstep:sf,randInt:rf,randFloat:af,randFloatSpread:of,seededRandom:cf,degToRad:lf,radToDeg:hf,isPowerOfTwo:uf,ceilPowerOfTwo:df,floorPowerOfTwo:Kc,setQuaternionFromProperEuler:ff,normalize:Yc,denormalize:jc},el=class el{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};el.prototype.isVector2=!0;var Ve=el,an=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],b=r[a+2],v=r[a+3];if(u!==v||c!==d||l!==p||h!==b){let g=c*d+l*p+h*b+u*v;g<0&&(d=-d,p=-p,b=-b,v=-v,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),E=Math.sin(y);m=Math.sin(m*y)/E,o=Math.sin(o*y)/E,c=c*m+d*o,l=l*m+p*o,h=h*m+b*o,u=u*m+v*o}else{c=c*m+d*o,l=l*m+p*o,h=h*m+b*o,u=u*m+v*o;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],b=r[a+3];return e[t]=o*b+h*u+c*p-l*d,e[t+1]=c*b+h*d+l*u-o*p,e[t+2]=l*b+h*p+o*d-c*u,e[t+3]=h*b-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),b=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u-d*p*b;break;case"YXZ":this._x=d*h*u+l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u+d*p*b;break;case"ZXY":this._x=d*h*u-l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u-d*p*b;break;case"ZYX":this._x=d*h*u-l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u+d*p*b;break;case"YZX":this._x=d*h*u+l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u-d*p*b;break;case"XZY":this._x=d*h*u-l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u+d*p*b;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},tl=class tl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tl.prototype.isVector3=!0;var O=tl,Oo=new O,mh=new an,nl=class nl{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],b=n[8],v=s[0],g=s[3],m=s[6],y=s[1],E=s[4],_=s[7],S=s[2],T=s[5],f=s[8];return r[0]=a*v+o*y+c*S,r[3]=a*g+o*E+c*T,r[6]=a*m+o*_+c*f,r[1]=l*v+h*y+u*S,r[4]=l*g+h*E+u*T,r[7]=l*m+h*_+u*f,r[2]=d*v+p*y+b*S,r[5]=d*g+p*E+b*T,r[8]=d*m+p*_+b*f,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,b=t*u+n*d+s*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/b;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ko.makeScale(e,t)),this}rotate(e){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nl.prototype.isMatrix3=!0;var Fe=nl,ko=new Fe,gh=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pf(){let i={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kt]:{primaries:e,whitePoint:n,transfer:Xs,toXYZ:gh,fromXYZ:bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:n,transfer:et,toXYZ:gh,fromXYZ:bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),i}var We=pf();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hi,ma=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=os("canvas")),Hi.width=e.width,Hi.height=e.height;let s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=os("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mf=0,ls=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bo(s[a].image)):r.push(Bo(s[a]))}else r=Bo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var gf=0,Vo=new O,Mt=class i extends In{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=un,s=un,r=St,a=gn,o=bn,c=en,l=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Dn(),this.name="",this.source=new ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vo).x}get height(){return this.source.getSize(Vo).y}get depth(){return this.source.getSize(Vo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Lc;Mt.DEFAULT_ANISOTROPY=1;var il=class il{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],b=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(b-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(b+g)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,_=(p+1)/2,S=(m+1)/2,T=(h+d)/4,f=(u+v)/4,M=(b+g)/4;return E>_&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=f/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=M/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=f/r,s=M/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-b)*(g-b)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-b)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};il.prototype.isVector4=!0;var nt=il,ga=class extends In{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Mt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ls(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends ga{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},js=class extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Na=class Na{constructor(e,t,n,s,r,a,o,c,l,h,u,d,p,b,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,p,b,v,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,p,b,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=b,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,b=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+b*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=b+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,b=l*h,v=l*u;t[0]=d+v*o,t[4]=b*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-b,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,b=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=b+p*o,t[1]=p+b*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,b=o*h,v=o*u;t[0]=c*h,t[4]=b*l-p,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=p*l-b,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,b=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=b*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+b,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,p=a*l,b=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-b,t[2]=b*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bf,e,xf)}lookAt(e,t,n){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ai.crossVectors(n,nn),ai.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ai.crossVectors(n,nn)),ai.normalize(),Ur.crossVectors(nn,ai),s[0]=ai.x,s[4]=Ur.x,s[8]=nn.x,s[1]=ai.y,s[5]=Ur.y,s[9]=nn.y,s[2]=ai.z,s[6]=Ur.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],b=n[2],v=n[6],g=n[10],m=n[14],y=n[3],E=n[7],_=n[11],S=n[15],T=s[0],f=s[4],M=s[8],D=s[12],R=s[1],N=s[5],H=s[9],z=s[13],I=s[2],Y=s[6],$=s[10],q=s[14],se=s[3],X=s[7],ee=s[11],ie=s[15];return r[0]=a*T+o*R+c*I+l*se,r[4]=a*f+o*N+c*Y+l*X,r[8]=a*M+o*H+c*$+l*ee,r[12]=a*D+o*z+c*q+l*ie,r[1]=h*T+u*R+d*I+p*se,r[5]=h*f+u*N+d*Y+p*X,r[9]=h*M+u*H+d*$+p*ee,r[13]=h*D+u*z+d*q+p*ie,r[2]=b*T+v*R+g*I+m*se,r[6]=b*f+v*N+g*Y+m*X,r[10]=b*M+v*H+g*$+m*ee,r[14]=b*D+v*z+g*q+m*ie,r[3]=y*T+E*R+_*I+S*se,r[7]=y*f+E*N+_*Y+S*X,r[11]=y*M+E*H+_*$+S*ee,r[15]=y*D+E*z+_*q+S*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],b=e[3],v=e[7],g=e[11],m=e[15],y=c*p-l*d,E=o*p-l*u,_=o*d-c*u,S=a*p-l*h,T=a*d-c*h,f=a*u-o*h;return t*(v*y-g*E+m*_)-n*(b*y-g*S+m*T)+s*(b*E-v*S+m*f)-r*(b*_-v*T+g*f)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],b=e[12],v=e[13],g=e[14],m=e[15],y=t*o-n*a,E=t*c-s*a,_=t*l-r*a,S=n*c-s*o,T=n*l-r*o,f=s*l-r*c,M=h*v-u*b,D=h*g-d*b,R=h*m-p*b,N=u*g-d*v,H=u*m-p*v,z=d*m-p*g,I=y*z-E*H+_*N+S*R-T*D+f*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/I;return e[0]=(o*z-c*H+l*N)*Y,e[1]=(s*H-n*z-r*N)*Y,e[2]=(v*f-g*T+m*S)*Y,e[3]=(d*T-u*f-p*S)*Y,e[4]=(c*R-a*z-l*D)*Y,e[5]=(t*z-s*R+r*D)*Y,e[6]=(g*_-b*f-m*E)*Y,e[7]=(h*f-d*_+p*E)*Y,e[8]=(a*H-o*R+l*M)*Y,e[9]=(n*R-t*H-r*M)*Y,e[10]=(b*T-v*_+m*y)*Y,e[11]=(u*_-h*T-p*y)*Y,e[12]=(o*D-a*N-c*M)*Y,e[13]=(t*N-n*D+s*M)*Y,e[14]=(v*E-b*S-g*y)*Y,e[15]=(h*S-u*E+d*y)*Y,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,b=r*u,v=a*h,g=a*u,m=o*u,y=c*l,E=c*h,_=c*u,S=n.x,T=n.y,f=n.z;return s[0]=(1-(v+m))*S,s[1]=(p+_)*S,s[2]=(b-E)*S,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(d+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(b+E)*f,s[9]=(g-y)*f,s[10]=(1-(d+v))*f,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),c=Wi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);let l=1/a,h=1/o,u=1/c;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=dn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),b,v;if(c)b=r/(a-r),v=a*r/(a-r);else if(o===dn)b=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===as)b=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=b,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=dn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),b,v;if(c)b=1/(a-r),v=a/(a-r);else if(o===dn)b=-2/(a-r),v=-(a+r)/(a-r);else if(o===as)b=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=b,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Na.prototype.isMatrix4=!0;var ke=Na,Wi=new O,vn=new ke,bf=new O(0,0,0),xf=new O(1,1,1),ai=new O,Ur=new O,nn=new O,xh=new ke,yh=new an,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yf=0,vh=new O,qi=new an,Bn=new ke,Fr=new O,Us=new O,vf=new O,Af=new an,Ah=new O(1,0,0),_h=new O(0,1,0),Sh=new O(0,0,1),Mh={type:"added"},_f={type:"removed"},Xi={type:"childadded",child:null},Go={type:"childremoved",child:null},dt=class i extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Kn,n=new an,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Fe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(_h,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(_h,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Us,Fr,this.up):Bn.lookAt(Fr,Us,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),Go.child=e,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),b=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dt.DEFAULT_UP=new O(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sf={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,b=.005;l.inputState.pinching&&d>p+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Xc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zo(a,r,e+1/3),this.g=zo(a,r,e),this.b=zo(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return We.workingToColorSpace(Bt.copy(this),e),Math.round(Ke(Bt.r*255,0,255))*65536+Math.round(Ke(Bt.g*255,0,255))*256+Math.round(Ke(Bt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Bt.copy(this),t);let n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=ut){We.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,s=Bt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Or);let n=qs(oi.h,Or.h,t),s=qs(oi.s,Or.s,t),r=qs(oi.l,Or.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Re;Re.NAMES=ku;var ds=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},An=new O,Vn=new O,Ho=new O,Gn=new O,Ki=new O,ji=new O,wh=new O,Wo=new O,qo=new O,Xo=new O,Ko=new nt,jo=new nt,Yo=new nt,di=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){An.subVectors(s,t),Vn.subVectors(n,t),Ho.subVectors(e,t);let a=An.dot(An),o=An.dot(Vn),c=An.dot(Ho),l=Vn.dot(Vn),h=Vn.dot(Ho),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,b=(a*h-o*c)*d;return r.set(1-p-b,b,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ko.setScalar(0),jo.setScalar(0),Yo.setScalar(0),Ko.fromBufferAttribute(e,t),jo.fromBufferAttribute(e,n),Yo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ko,r.x),a.addScaledVector(jo,r.y),a.addScaledVector(Yo,r.z),a}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),Vn.subVectors(e,t),An.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),An.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),ji.subVectors(r,n),Wo.subVectors(e,n);let c=Ki.dot(Wo),l=ji.dot(Wo);if(c<=0&&l<=0)return t.copy(n);qo.subVectors(e,s);let h=Ki.dot(qo),u=ji.dot(qo);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Ki,a);Xo.subVectors(e,r);let p=Ki.dot(Xo),b=ji.dot(Xo);if(b>=0&&p<=b)return t.copy(r);let v=p*l-c*b;if(v<=0&&l>=0&&b<=0)return o=l/(l-b),t.copy(n).addScaledVector(ji,o);let g=h*b-p*u;if(g<=0&&u-h>=0&&p-b>=0)return wh.subVectors(r,s),o=(u-h)/(u-h+(p-b)),t.copy(s).addScaledVector(wh,o);let m=1/(g+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(Ki,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vt=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Br.subVectors(this.max,Fs),Yi.subVectors(e.a,Fs),Ji.subVectors(e.b,Fs),Zi.subVectors(e.c,Fs),ci.subVectors(Ji,Yi),li.subVectors(Zi,Ji),Mi.subVectors(Yi,Zi);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Mi.z,Mi.y,ci.z,0,-ci.x,li.z,0,-li.x,Mi.z,0,-Mi.x,-ci.y,ci.x,0,-li.y,li.x,0,-Mi.y,Mi.x,0];return!Jo(t,Yi,Ji,Zi,Br)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,Yi,Ji,Zi,Br))?!1:(Vr.crossVectors(ci,li),t=[Vr.x,Vr.y,Vr.z],Jo(t,Yi,Ji,Zi,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zn=[new O,new O,new O,new O,new O,new O,new O,new O],_n=new O,kr=new Vt,Yi=new O,Ji=new O,Zi=new O,ci=new O,li=new O,Mi=new O,Fs=new O,Br=new O,Vr=new O,wi=new O;function Jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var vt=new O,Gr=new Ve,Mf=0,Dt=class extends In{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=cn,this.version=0,this._normalizationScale=e!==void 0?Ao(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):jc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yc(e,this.array)}};var Ys=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Js=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pt=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wf=new Vt,Os=new O,Zo=new O,Jt=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);let t=Os.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Zo)),this.expandByPoint(Os.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ef=0,hn=new ke,Qo=new dt,Qi=new O,sn=new Vt,ks=new Vt,Pt=new O,Gt=class i extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?Js:Ys)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(sn.min,ks.min),sn.expandByPoint(Pt),Pt.addVectors(sn.max,ks.max),sn.expandByPoint(Pt)):(sn.expandByPoint(ks.min),sn.expandByPoint(ks.max))}sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pt.fromBufferAttribute(o,l),c&&(Qi.fromBufferAttribute(e,l),Pt.add(Qi)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new O,c[D]=new O;let h=new O,u=new O,d=new O,p=new Ve,b=new Ve,v=new Ve,g=new O,m=new O;function y(D,R,N){l[D]=l[R]=l[N]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,N),p.fromBufferAttribute(r,D),b.fromBufferAttribute(r,R),v.fromBufferAttribute(r,N),u.sub(h),d.sub(h),b.sub(p),v.sub(p);let H=1/(b.x*v.y-v.x*b.y);isFinite(H)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-b.y).multiplyScalar(H),m.copy(d).multiplyScalar(b.x).addScaledVector(u,-v.x).multiplyScalar(H),o[D].add(g),o[R].add(g),o[N].add(g),c[D].add(m),c[R].add(m),c[N].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,R=E.length;D<R;++D){let N=E[D],H=N.start,z=N.count;for(let I=H,Y=H+z;I<Y;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let _=new O,S=new O,T=new O,f=new O;function M(D){T.fromBufferAttribute(s,D),f.copy(T);let R=o[D];_.copy(R),_.sub(T.multiplyScalar(T.dot(R))).normalize(),S.crossVectors(f,R);let H=S.dot(c[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,H)}for(let D=0,R=n.count;D<R;++D)l[D]&&M(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,h=new O,u=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){let b=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,b=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let m=0;m<h;m++)d[b++]=l[p++]}return new Dt(d,h,u)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Eh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Eh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Eh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Dn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Xt=new O,ps=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Ao(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ks("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ks("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):jc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yc(e,this.data.array)}},$o=new O,Tf=new O,Cf=new Fe,rn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$o.subVectors(n,t).cross(Tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($o),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cf.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},If=0,Zt=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=ws,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=wc,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Hn=new O,ec=new O,zr=new O,Hr=new O,pi=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ec.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(ec);let r=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Hr.dot(this.direction),c=-Hr.dot(zr),l=Hr.lengthSq(),h=Math.abs(1-a*a),u,d,p,b;if(h>0)if(u=a*c-o,d=a*o-c,b=r*h,u>=0)if(d>=-b)if(d<=b){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-b?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=b?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ec).addScaledVector(zr,d),p}intersectSphere(e,t){if(e.radius<0)return null;Hn.subVectors(e.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,p=e.z-a.z,b=t.x-a.x,v=t.y-a.y,g=t.z-a.z,m=n.x-a.x,y=n.y-a.y,E=n.z-a.z,_=Math.abs(c),S=Math.abs(l),T=Math.abs(h),f,M,D,R,N,H,z,I,Y,$,q,se;if(_>=S&&_>=T?(D=c,H=u,Y=b,se=m,c>=0?(f=l,M=h,R=d,N=p,z=v,I=g,$=y,q=E):(f=h,M=l,R=p,N=d,z=g,I=v,$=E,q=y)):S>=T?(D=l,H=d,Y=v,se=y,l>=0?(f=h,M=c,R=p,N=u,z=g,I=b,$=E,q=m):(f=c,M=h,R=u,N=p,z=b,I=g,$=m,q=E)):(D=h,H=p,Y=g,se=E,h>=0?(f=c,M=l,R=u,N=d,z=b,I=v,$=m,q=y):(f=l,M=c,R=d,N=u,z=v,I=b,$=y,q=m)),D===0)return null;let X=f/D,ee=M/D,ie=1/D,Se=R-X*H,Ue=N-ee*H,Q=z-X*Y,me=I-ee*Y,Ae=$-X*se,Pe=q-ee*se,ge=Ae*me-Pe*Q,Ne=Se*Pe-Ue*Ae,ct=Q*Ue-me*Se;if(s){if(ge<0||Ne<0||ct<0)return null}else if((ge<0||Ne<0||ct<0)&&(ge>0||Ne>0||ct>0))return null;let Le=ge+Ne+ct;if(Le===0)return null;let Je=ie*(ge*H+Ne*Y+ct*se);return(Le>0?Je<0:Je>0)?null:this.at(Je/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Th=new ke,Ei=new pi,Wr=new Jt,Ch=new O,qr=new O,Xr=new O,Kr=new O,tc=new O,jr=new O,Ih=new O,Yr=new O,Nt=class extends dt{constructor(e=new Gt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(tc.fromBufferAttribute(u,e),a?jr.addScaledVector(tc,h):jr.addScaledVector(tc.sub(t),h))}t.add(jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Wr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Wr,Ch)===null||Ei.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(Th.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Th),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,v=d.length;b<v;b++){let g=d[b],m=a[g.materialIndex],y=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=y,S=E;_<S;_+=3){let T=o.getX(_),f=o.getX(_+1),M=o.getX(_+2);s=Jr(this,m,e,n,l,h,u,T,f,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let b=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=b,m=v;g<m;g+=3){let y=o.getX(g),E=o.getX(g+1),_=o.getX(g+2);s=Jr(this,a,e,n,l,h,u,y,E,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,v=d.length;b<v;b++){let g=d[b],m=a[g.materialIndex],y=Math.max(g.start,p.start),E=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let _=y,S=E;_<S;_+=3){let T=_,f=_+1,M=_+2;s=Jr(this,m,e,n,l,h,u,T,f,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let b=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=b,m=v;g<m;g+=3){let y=g,E=g+1,_=g+2;s=Jr(this,a,e,n,l,h,u,y,E,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Rf(i,e,t,n,s,r,a,o){let c;if(e.side===Ut?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===mn,o),c===null)return null;Yr.copy(o),Yr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Yr);return l<t.near||l>t.far?null:{distance:l,point:Yr.clone(),object:i}}function Jr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,qr),i.getVertexPosition(c,Xr),i.getVertexPosition(l,Kr);let h=Rf(i,e,t,n,qr,Xr,Kr,Ih);if(h){let u=new O;di.getBarycoord(Ih,qr,Xr,Kr,u),s&&(h.uv=di.getInterpolatedAttribute(s,o,c,l,u,new Ve)),r&&(h.uv1=di.getInterpolatedAttribute(r,o,c,l,u,new Ve)),a&&(h.normal=di.getInterpolatedAttribute(a,o,c,l,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new O,materialIndex:0};di.getNormal(qr,Xr,Kr,d.normal),h.face=d,h.barycoord=u}return h}var Bs=new nt,Rh=new nt,Ph=new nt,Pf=new nt,Nh=new ke,Zr=new O,nc=new Jt,Lh=new ke,ic=new pi,Zs=class extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=oc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zr),this.boundingBox.expandByPoint(Zr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zr),this.boundingSphere.expandByPoint(Zr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nc.copy(this.boundingSphere),nc.applyMatrix4(s),e.ray.intersectsSphere(nc)!==!1&&(Lh.copy(s).invert(),ic.copy(e.ray).applyMatrix4(Lh),!(this.boundingBox!==null&&ic.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ic)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===oc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Rh.fromBufferAttribute(s.attributes.skinIndex,e),Ph.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Bs.copy(t),t.set(0,0,0,0)):(Bs.set(t.x,t.y,t.z,1),t.set(0,0,0)),Bs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Ph.getComponent(r);if(a!==0){let o=Rh.getComponent(r);Nh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Pf.copy(Bs).applyMatrix4(Nh),a)}}return t.isVector4&&(t.w=Bs.w),t.applyMatrix4(this.bindMatrixInverse)}},ms=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},gs=class extends Mt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=mt,h=mt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dh=new ke,Nf=new ke,Qs=class i{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Nf;Dh.multiplyMatrices(o,t[r]),Dh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new gs(t,e,e,bn,cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Te("Skeleton: No bone found with UUID:",r),a=new ms),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},jn=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$i=new ke,Uh=new ke,Qr=[],Fh=new Vt,Lf=new ke,Vs=new Nt,Gs=new Jt,$s=class extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),Fh.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(Fh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),Gs.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),e.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),Uh.multiplyMatrices(n,$i),Vs.matrixWorld=Uh,Vs.raycast(e,Qr);for(let a=0,o=Qr.length;a<o;a++){let c=Qr[a];c.instanceId=r,c.object=this,t.push(c)}Qr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new jn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gs(new Float32Array(s*this.count),s,this.count,Ba,cn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new Jt,Df=new Ve(.5,.5),$r=new O,mi=class{constructor(e=new rn,t=new rn,n=new rn,s=new rn,r=new rn,a=new rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],b=r[8],v=r[9],g=r[10],m=r[11],y=r[12],E=r[13],_=r[14],S=r[15];if(s[0].setComponents(l-a,p-h,m-b,S-y).normalize(),s[1].setComponents(l+a,p+h,m+b,S+y).normalize(),s[2].setComponents(l+o,p+u,m+v,S+E).normalize(),s[3].setComponents(l-o,p-u,m-v,S-E).normalize(),n)s[4].setComponents(c,d,g,_).normalize(),s[5].setComponents(l-c,p-d,m-g,S-_).normalize();else if(s[4].setComponents(l-c,p-d,m-g,S-_).normalize(),t===dn)s[5].setComponents(l+c,p+d,m+g,S+_).normalize();else if(t===as)s[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=Df.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($r.x=s.normal.x>0?e.max.x:e.min.x,$r.y=s.normal.y>0?e.max.y:e.min.y,$r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Oh=new ke,xa=class i{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Oh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new mi),n[s].setFromProjectionMatrix(Oh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new mi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var bs=class extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ya=new O,va=new O,kh=new ke,zs=new pi,ea=new Jt,sc=new O,Bh=new O,Ni=class extends dt{constructor(e=new Gt,t=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ya.fromBufferAttribute(t,s-1),va.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ya.distanceTo(va);e.setAttribute("lineDistance",new pt(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;kh.copy(s).invert(),zs.copy(e.ray).applyMatrix4(kh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),b=Math.min(h.count,a.start+a.count);for(let v=p,g=b-1;v<g;v+=l){let m=h.getX(v),y=h.getX(v+1),E=ta(this,e,zs,c,m,y,v);E&&t.push(E)}if(this.isLineLoop){let v=h.getX(b-1),g=h.getX(p),m=ta(this,e,zs,c,v,g,b-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),b=Math.min(d.count,a.start+a.count);for(let v=p,g=b-1;v<g;v+=l){let m=ta(this,e,zs,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=ta(this,e,zs,c,b-1,p,b-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ta(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ya.fromBufferAttribute(o,s),va.fromBufferAttribute(o,r),t.distanceSqToSegment(ya,va,sc,Bh)>n)return;sc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(sc);if(!(l<e.near||l>e.far))return{distance:l,point:Bh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Vh=new O,Gh=new O,er=class extends Ni{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vh.fromBufferAttribute(t,s),Gh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vh.distanceTo(Gh);e.setAttribute("lineDistance",new pt(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},tr=class extends Ni{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xs=class extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zh=new ke,dc=new pi,na=new Jt,ia=new O,nr=class extends dt{constructor(e=new Gt,t=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;zh.copy(s).invert(),dc.copy(e.ray).applyMatrix4(zh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let b=d,v=p;b<v;b++){let g=l.getX(b);ia.fromBufferAttribute(u,g),Hh(ia,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let b=d,v=p;b<v;b++)ia.fromBufferAttribute(u,b),Hh(ia,b,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hh(i,e,t,n,s,r,a){let o=dc.distanceSqToPoint(i);if(o<t){let c=new O;dc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ir=class extends Mt{constructor(e=[],t=Fi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sr=class extends Mt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yn=class extends Mt{constructor(e,t,n=Mn,s,r,a,o=mt,c=mt,l,h=Xn,u=1){if(h!==Xn&&h!==ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},rr=class extends Yn{constructor(e,t=Mn,n=Fi,s,r,a=mt,o=mt,c,l=Xn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ar=class extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ys=class i extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,s,a,2),b("x","z","y",1,-1,e,n,-t,s,a,3),b("x","y","z",1,-1,e,t,n,s,r,4),b("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function b(v,g,m,y,E,_,S,T,f,M,D){let R=_/f,N=S/M,H=_/2,z=S/2,I=T/2,Y=f+1,$=M+1,q=0,se=0,X=new O;for(let ee=0;ee<$;ee++){let ie=ee*N-z;for(let Se=0;Se<Y;Se++){let Ue=Se*R-H;X[v]=Ue*y,X[g]=ie*E,X[m]=I,l.push(X.x,X.y,X.z),X[v]=0,X[g]=0,X[m]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(Se/f),u.push(1-ee/M),q+=1}}for(let ee=0;ee<M;ee++)for(let ie=0;ie<f;ie++){let Se=d+ie+Y*ee,Ue=d+ie+Y*(ee+1),Q=d+(ie+1)+Y*(ee+1),me=d+(ie+1)+Y*ee;c.push(Se,Ue,me),c.push(Ue,Q,me),se+=6}o.addGroup(p,se,D),p+=se,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var or=class i extends Gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new O,h=new Ve;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var cr=class i extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,p=[],b=[],v=[],g=[];for(let m=0;m<h;m++){let y=m*d-a;for(let E=0;E<l;E++){let _=E*u-r;b.push(_,-y,0),v.push(0,0,1),g.push(E/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){let E=y+l*m,_=y+l*(m+1),S=y+1+l*(m+1),T=y+1+l*m;p.push(E,_,T),p.push(_,S,T)}this.setIndex(p),this.setAttribute("position",new pt(b,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var lr=class i extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new O,d=new O,p=[],b=[],v=[],g=[];for(let m=0;m<=n;m++){let y=[],E=m/n,_=a+E*o,S=e*Math.cos(_),T=Math.sqrt(e*e-S*S),f=0;m===0&&a===0?f=.5/t:m===n&&c===Math.PI&&(f=-.5/t);for(let M=0;M<=t;M++){let D=M/t,R=s+D*r;u.x=-T*Math.cos(R),u.y=S,u.z=T*Math.sin(R),b.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(D+f,1-E),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let E=h[m][y+1],_=h[m][y],S=h[m+1][y],T=h[m+1][y+1];(m!==0||a>0)&&p.push(E,_,T),(m!==n-1||c<Math.PI)&&p.push(_,S,T)}this.setIndex(p),this.setAttribute("position",new pt(b,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Bi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Wh(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Wh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zt(i){let e={};for(let t=0;t<i.length;t++){let n=Bi(i[t]);for(let s in n)e[s]=n[s]}return e}function Wh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Uf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var Bu={clone:Bi,merge:zt},Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Aa=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gt=class extends pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var _a=class extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sa=class extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ui(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hs(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function kf(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function qh(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Bf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Rn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ma=class extends Rn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hc:r=e,o=2*t-n;break;case uc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hc:a=e,c=2*n-t;break;case uc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,b=(n-t)/(s-t),v=b*b,g=v*b,m=-d*g+2*d*v-d*b,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*b+1,E=(-1-p)*g+(1.5+p)*v+.5*b,_=p*g-p*v;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+y*a[l+S]+E*a[c+S]+_*a[u+S];return r}},wa=class extends Rn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Ea=class extends Rn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ta=class extends Rn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let b=(n-t)/(s-t),v=1-b;for(let g=0;g!==o;++g)r[g]=a[l+g]*v+a[c+g]*b;return r}let d=o*2,p=e-1;for(let b=0;b!==o;++b){let v=a[l+b],g=a[c+b],m=p*d+b*2,y=u[m],E=u[m+1],_=e*d+b*2,S=h[_],T=h[_+1],f=Gf(n,t,y,S,s);r[b]=Vu(f,v,E,T,g)}return r}};function Vu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Vf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Gf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Vu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Vf(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var $t=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ui(t,this.TimeBufferType),this.values=ui(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ui(e.times,Array),values:ui(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Hs(e.settings)&&(n.settings={inTangents:ui(e.settings.inTangents,Array),outTangents:ui(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ta(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ii:t=this.InterpolantFactoryMethodDiscrete;break;case Ri:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth;break;case cc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ii;case this.InterpolantFactoryMethodLinear:return Ri;case this.InterpolantFactoryMethodSmooth:return aa;case this.InterpolantFactoryMethodBezier:return cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Hs(this.settings)&&(Xh(this.settings.inTangents,e),Xh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Hs(this.settings)&&(Kh(this.settings.inTangents,e),Kh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){De("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){De("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Zd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){De("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===aa,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let b=0;b!==n;++b){let v=t[u+b];if(v!==t[d+b]||v!==t[p+b]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Hs(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Kh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}$t.prototype.ValueTypeName="";$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=Ri;var Jn=class extends $t{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Ii;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}};hr.prototype.ValueTypeName="color";var Zn=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}};Zn.prototype.ValueTypeName="number";var Ca=class extends Rn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)an.slerpFlat(r,0,a,l-o,a,l,c);return r}},Qn=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}};Qn.prototype.ValueTypeName="quaternion";Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends $t{constructor(e,t,n){super(e,t,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Ii;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}};gi.prototype.ValueTypeName="vector";var ur=class{constructor(e="",t=-1,n=[],s=wu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Hf(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push($t.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=kf(c);c=qh(c,1,h),l=qh(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Zn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function zf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zn;case"vector":case"vector2":case"vector3":case"vector4":return gi;case"color":return hr;case"quaternion":return Qn;case"bool":case"boolean":return Jn;case"string":return $n}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Hf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zf(i.type);if(i.times===void 0){let n=[],s=[];Bf(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Hs(i.settings)&&(t.settings={inTangents:ui(i.settings.inTangents,Float32Array),outTangents:ui(i.settings.outTangents,Float32Array)}),t}var Cn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(jh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!jh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function jh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ia=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],b=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gu=new Ia,Pn=class{constructor(e){this.manager=e!==void 0?e:Gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Pn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wn={},fc=class extends Error{constructor(e,t){super(e),this.response=t}},vs=class extends Pn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Cn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Wn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,b=p!==0,v=0,g=new ReadableStream({start(m){y();function y(){u.read().then(({done:E,value:_})=>{if(E)m.close();else{v+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:b,loaded:v,total:p});for(let T=0,f=h.length;T<f;T++){let M=h[T];M.onProgress&&M.onProgress(S)}m.enqueue(_),y()}},E=>{m.error(E)})}}});return new Response(g)}else throw new fc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(b=>p.decode(b))}}}).then(l=>{Cn.add(`file:${e}`,l);let h=Wn[e];delete Wn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var es=new WeakMap,Ra=class extends Pn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Cn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=es.get(a);u===void 0&&(u=[],es.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=os("img");function c(){h(),t&&t(this);let u=es.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}es.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Cn.remove(`image:${e}`);let d=es.get(this)||[];for(let p=0;p<d.length;p++){let b=d[p];b.onError&&b.onError(u)}es.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Cn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var dr=class extends Pn{constructor(e){super(e)}load(e,t,n,s){let r=new Mt,a=new Ra(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},As=class extends dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var rc=new ke,Yh=new O,Jh=new O,_s=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mi,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===as||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sa=new O,ra=new an,Tn=new O,fr=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sa,ra,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,Tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sa,ra,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hi=new O,Zh=new Ve,Qh=new Ve,_t=class extends fr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Zh,Qh),t.subVectors(Qh,Zh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pc=class extends _s{constructor(){super(new _t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Pi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},pr=class extends As{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new pc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},mc=class extends _s{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0}},mr=class extends As{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Li=class extends fr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gc=class extends _s{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nn=class extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new gc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ei=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ac=new WeakMap,gr=class extends Pn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Cn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{ac.has(a)===!0?(s&&s(ac.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Cn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ac.set(c,l),Cn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Cn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ts=-90,ns=1,Ss=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _t(ts,ns,e,t);s.layers=this.layers,this.add(s);let r=new _t(ts,ns,e,t);r.layers=this.layers,this.add(r);let a=new _t(ts,ns,e,t);a.layers=this.layers,this.add(a);let o=new _t(ts,ns,e,t);o.layers=this.layers,this.add(o);let c=new _t(ts,ns,e,t);c.layers=this.layers,this.add(c);let l=new _t(ts,ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Pa=class extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Zc="\\[\\]\\.:\\/",Wf=new RegExp("["+Zc+"]","g"),Qc="[^"+Zc+"]",qf="[^"+Zc.replace("\\.","")+"]",Xf=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Kf=/(WCOD+)?/.source.replace("WCOD",qf),jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Yf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Jf=new RegExp("^"+Xf+Kf+jf+Yf+"$"),Zf=["material","materials","bones","map"],bc=class{constructor(e,t,n){let s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wf,"")}static parseTrackName(e){let t=Jf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;De("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=bc;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vx=new Float32Array(1);var $h=new ke,br=class{constructor(e,t,n=0,s=1/0){this.ray=new pi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):De("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $h.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($h),this}intersectObject(e,t=!0,n=[]){return xc(e,this,n,t),n.sort(eu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xc(e[s],this,n,t);return n.sort(eu),n}};function eu(i,e){return i.distance-e.distance}function xc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)xc(r[a],e,t,!0)}}var sl=class sl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};sl.prototype.isMatrix2=!0;var yc=sl;function $c(i,e,t,n){let s=Qf(n);switch(t){case kc:return i*e;case Ba:return i*e/s.components*s.byteLength;case Va:return i*e/s.components*s.byteLength;case bi:return i*e*2/s.components*s.byteLength;case Ga:return i*e*2/s.components*s.byteLength;case Bc:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case za:return i*e*4/s.components*s.byteLength;case vr:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _r:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:case Xa:return Math.max(i,16)*Math.max(e,8)/4;case Ha:case qa:return Math.max(i,8)*Math.max(e,8)/2;case Ka:case ja:case Ja:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Mr:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bo:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wr:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qf(i){switch(i){case en:case Dc:return{byteLength:1,components:1};case Cs:case Uc:case wn:return{byteLength:2,components:1};case Oa:case ka:return{byteLength:2,components:4};case Mn:case Fa:case cn:return{byteLength:4,components:1};case Fc:case Oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ld(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ep(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,b)=>p.start-b.start);let d=0;for(let p=1;p<u.length;p++){let b=u[d],v=u[p];v.start<=b.start+b.count+1?b.count=Math.max(b.count,v.start+v.count-b.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,b=u.length;p<b;p++){let v=u[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mp=`#define PI 3.141592653589793
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
} // validated`,wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
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
#endif`,Qp=`uniform sampler2D dfgLUT;
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
}`,$p=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
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
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform float backgroundBlurriness;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
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
}`,og=`#if DEPTH_PACKING == 3200
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
}`,cg=`#define DISTANCE
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
}`,lg=`#define DISTANCE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#define LAMBERT
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
}`,bg=`#define LAMBERT
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
}`,xg=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,vg=`#define NORMAL
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
}`,Ag=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,Mg=`#define STANDARD
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
}`,wg=`#define STANDARD
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
}`,Eg=`#define TOON
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
}`,Tg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:tp,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:ap,aomap_fragment:op,aomap_pars_fragment:cp,batching_pars_vertex:lp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:dp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:yp,color_fragment:vp,color_pars_fragment:Ap,color_pars_vertex:_p,color_vertex:Sp,common:Mp,defaultnormal_vertex:wp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Tp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Ip,colorspace_fragment:Rp,colorspace_pars_fragment:Pp,envmap_fragment:Np,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Dp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Xp,envmap_vertex:Fp,fog_vertex:Op,fog_pars_vertex:kp,fog_fragment:Bp,fog_pars_fragment:Vp,gradientmap_pars_fragment:Gp,lightmap_pars_fragment:zp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Wp,lights_pars_begin:qp,lights_toon_fragment:Kp,lights_toon_pars_fragment:jp,lights_phong_fragment:Yp,lights_phong_pars_fragment:Jp,lights_physical_fragment:Zp,lights_physical_pars_fragment:Qp,lights_fragment_begin:$p,lights_fragment_maps:em,lights_fragment_end:tm,lightprobes_pars_fragment:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:am,map_fragment:om,map_pars_fragment:cm,map_particle_fragment:lm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphinstance_vertex:fm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:bm,normal_fragment_begin:xm,normal_fragment_maps:ym,normal_pars_fragment:vm,normal_pars_vertex:Am,normal_vertex:_m,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:Tm,opaque_fragment:Cm,packing:Im,premultiplied_alpha_fragment:Rm,project_vertex:Pm,dithering_fragment:Nm,dithering_pars_fragment:Lm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Um,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Om,shadowmap_vertex:km,shadowmask_pars_fragment:Bm,skinbase_vertex:Vm,skinning_pars_vertex:Gm,skinning_vertex:zm,skinnormal_vertex:Hm,specularmap_fragment:Wm,specularmap_pars_fragment:qm,tonemapping_fragment:Xm,tonemapping_pars_fragment:Km,transmission_fragment:jm,transmission_pars_fragment:Ym,uv_pars_fragment:Jm,uv_pars_vertex:Zm,uv_vertex:Qm,worldpos_vertex:$m,background_vert:eg,background_frag:tg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:ag,depth_frag:og,distance_vert:cg,distance_frag:lg,equirect_vert:hg,equirect_frag:ug,linedashed_vert:dg,linedashed_frag:fg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:bg,meshmatcap_vert:xg,meshmatcap_frag:yg,meshnormal_vert:vg,meshnormal_frag:Ag,meshphong_vert:_g,meshphong_frag:Sg,meshphysical_vert:Mg,meshphysical_frag:wg,meshtoon_vert:Eg,meshtoon_frag:Tg,points_vert:Cg,points_frag:Ig,shadow_vert:Rg,shadow_frag:Pg,sprite_vert:Ng,sprite_frag:Lg},xe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Fn={basic:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:zt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:zt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:zt([xe.points,xe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:zt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:zt([xe.common,xe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:zt([xe.sprite,xe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:zt([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:zt([xe.lights,xe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Fn.physical={uniforms:zt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var _o={r:0,b:0,g:0},Dg=new ke,hd=new Fe;hd.set(-1,0,0,0,1,0,0,0,1);function Ug(i,e,t,n,s,r){let a=new Re(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function p(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let _=y.backgroundBlurriness>0;E=e.get(E,_)}return E}function b(y){let E=!1,_=p(y);_===null?g(a,o):_&&_.isColor&&(g(_,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,E){let _=p(E);_&&_.isCubeTexture?(l===void 0&&(l=new Nt(new ys(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Bi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hd),l.material.toneMapped=We.getTransfer(_.colorSpace)!==et,(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Nt(new cr(2,2),new fn({name:"BackgroundMaterial",uniforms:Bi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=We.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,E){y.getRGB(_o,Jc(i)),t.buffers.color.setClear(_o.r,_o.g,_o.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:b,addToRenderList:v,dispose:m}}function Fg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(N,H,z,I,Y){let $=!1,q=u(N,I,z,H);r!==q&&(r=q,l(r.object)),$=p(N,I,z,Y),$&&b(N,I,z,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(N,H,z,I),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,H,z,I){let Y=I.wireframe===!0,$=n[H.id];$===void 0&&($={},n[H.id]=$);let q=N.isInstancedMesh===!0?N.id:0,se=$[q];se===void 0&&(se={},$[q]=se);let X=se[z.id];X===void 0&&(X={},se[z.id]=X);let ee=X[Y];return ee===void 0&&(ee=d(c()),X[Y]=ee),ee}function d(N){let H=[],z=[],I=[];for(let Y=0;Y<t;Y++)H[Y]=0,z[Y]=0,I[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:z,attributeDivisors:I,object:N,attributes:{},index:null}}function p(N,H,z,I){let Y=r.attributes,$=H.attributes,q=0,se=z.getAttributes();for(let X in se)if(se[X].location>=0){let ie=Y[X],Se=$[X];if(Se===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),ie===void 0||ie.attribute!==Se||Se&&ie.data!==Se.data)return!0;q++}return r.attributesNum!==q||r.index!==I}function b(N,H,z,I){let Y={},$=H.attributes,q=0,se=z.getAttributes();for(let X in se)if(se[X].location>=0){let ie=$[X];ie===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));let Se={};Se.attribute=ie,ie&&ie.data&&(Se.data=ie.data),Y[X]=Se,q++}r.attributes=Y,r.attributesNum=q,r.index=I}function v(){let N=r.newAttributes;for(let H=0,z=N.length;H<z;H++)N[H]=0}function g(N){m(N,0)}function m(N,H){let z=r.newAttributes,I=r.enabledAttributes,Y=r.attributeDivisors;z[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),Y[N]!==H&&(i.vertexAttribDivisor(N,H),Y[N]=H)}function y(){let N=r.newAttributes,H=r.enabledAttributes;for(let z=0,I=H.length;z<I;z++)H[z]!==N[z]&&(i.disableVertexAttribArray(z),H[z]=0)}function E(N,H,z,I,Y,$,q){q===!0?i.vertexAttribIPointer(N,H,z,Y,$):i.vertexAttribPointer(N,H,z,I,Y,$)}function _(N,H,z,I){v();let Y=I.attributes,$=z.getAttributes(),q=H.defaultAttributeValues;for(let se in $){let X=$[se];if(X.location>=0){let ee=Y[se];if(ee===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){let ie=ee.normalized,Se=ee.itemSize,Ue=e.get(ee);if(Ue===void 0)continue;let Q=Ue.buffer,me=Ue.type,Ae=Ue.bytesPerElement,Pe=me===i.INT||me===i.UNSIGNED_INT||ee.gpuType===Fa;if(ee.isInterleavedBufferAttribute){let ge=ee.data,Ne=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,ct=ee.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Le=0;Le<X.locationSize;Le++)m(X.location+Le,ge.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Le=0;Le<X.locationSize;Le++)g(X.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Le=0;Le<X.locationSize;Le++)E(X.location+Le,Se/X.locationSize,me,ie,Ne*Ae,(ct+Se/X.locationSize*Le)*Ae,Pe)}else{if(ee.isInstancedBufferAttribute){for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge,ee.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<X.locationSize;ge++)g(X.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ge=0;ge<X.locationSize;ge++)E(X.location+ge,Se/X.locationSize,me,ie,Se*Ae,Se/X.locationSize*ge*Ae,Pe)}}else if(q!==void 0){let ie=q[se];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(X.location,ie);break;case 3:i.vertexAttrib3fv(X.location,ie);break;case 4:i.vertexAttrib4fv(X.location,ie);break;default:i.vertexAttrib1fv(X.location,ie)}}}}y()}function S(){D();for(let N in n){let H=n[N];for(let z in H){let I=H[z];for(let Y in I){let $=I[Y];for(let q in $)h($[q].object),delete $[q];delete I[Y]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let H=n[N.id];for(let z in H){let I=H[z];for(let Y in I){let $=I[Y];for(let q in $)h($[q].object),delete $[q];delete I[Y]}}delete n[N.id]}function f(N){for(let H in n){let z=n[H];for(let I in z){let Y=z[I];if(Y[N.id]===void 0)continue;let $=Y[N.id];for(let q in $)h($[q].object),delete $[q];delete Y[N.id]}}}function M(N){for(let H in n){let z=n[H],I=N.isInstancedMesh===!0?N.id:0,Y=z[I];if(Y!==void 0){for(let $ in Y){let q=Y[$];for(let se in q)h(q[se].object),delete q[se];delete Y[$]}delete z[I],Object.keys(z).length===0&&delete n[H]}}}function D(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:f,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function Og(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let p=0;p<h;p++)d+=l[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function kg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let f=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(f){return!(f!==bn&&n.convert(f)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(f){let M=f===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(f!==en&&f!==cn&&!M&&n.convert(f)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(f){if(f==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Te("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Te("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:b,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:_,maxSamples:S,samples:T}}function Bg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new rn,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let b=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||b===null||b.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,E=y*4,_=m.clippingState||null;c.value=_,_=h(b,d,E,p);for(let S=0;S!==E;++S)_[S]=t[S];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,b){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,b!==!0||g===null){let m=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,_=p;E!==v;++E,_+=4)a.copy(u[E]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Ir=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ir(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ys(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Di});r.uniforms.tEquirect.value=t;let a=new Nt(s,r),o=t.minFilter;return t.minFilter===gn&&(t.minFilter=St),new Ss(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},zu=256,Vg=3,Gg=20,ud=256,dd=16,zg=3,Hg=new O,Wg=new Re,Ps=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ss(1,10,null),this._boxMesh=new Nt(new ys(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,p=c.autoClearDepth,b=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Wg));let g=new Ss(n,s,h);return g.position.copy(o),g.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=p,c.autoClearStencil=b,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zu,Kc(e))}_fromTexture(e,t){e.mapping===Fi||e.mapping===Es?this._setSize(e.image.length===0?zu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Hu(e,!1,!1),n=Math.log2(e)-Vg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Fi||e.mapping===Es?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=qg(),this._integrationMaterial=Xg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/dd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-zg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(ud*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Kg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Hu(i,e,t){return new Ir(i,{minFilter:gn,generateMipmaps:e,type:wn,colorSpace:Kt,depthBuffer:t})}function Rr(i,e,t){return new fn({name:i,uniforms:e,vertexShader:Ge.cube_vert,fragmentShader:t,side:Ut,blending:Di,depthTest:!1,depthWrite:!1})}function qg(){return Rr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ud}u

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
	`)}function Xg(){return Rr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dd}},`

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
	`)}function Kg(){return Rr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gg}
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
	`)}function Wu(){return Rr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function qu(){return Rr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===La||p===Da)if(e.has(d)){let b=e.get(d).texture;return o(b,d.mapping)}else{let b=d.image;if(b&&b.height>0){let v=new Ir(b.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,b=p===La||p===Da,v=p===Fi||p===Es;if(b||v){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Ps(i)),g=b?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return b&&y&&y.height>0||v&&y&&c(y)?(n===null&&(n=new Ps(i)),g=b?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,p){return p===La?d.mapping=Fi:p===Da&&(d.mapping=Es),d}function c(d){let p=0,b=6;for(let v=0;v<b;v++)d[v]!==void 0&&p++;return p===b}function l(d){let p=d.target;p.removeEventListener("dispose",l);let b=e.get(p);b!==void 0&&(e.delete(p),b.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let b=t.get(p);b!==void 0&&(t.delete(p),b.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Yg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ci("WebGLRenderer: "+n+" extension not supported."),s}}}function Jg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(b=>delete s[b]);function o(b){c(b.target)}function c(b){b.index!==null&&e.remove(b.index);for(let g in b.attributes)e.remove(b.attributes[g]);b.removeEventListener("dispose",o),delete s[b.id],a.unregister(b);let v=r.get(b);v&&(e.remove(v),r.delete(b)),n.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function l(b,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(b){let v=b.attributes;for(let g in v)e.update(v[g],i.ARRAY_BUFFER)}function u(b){let v=b.index,g=b.attributes.position,m=0;if(g===void 0)return;let y=v!==null?v.array.length:g.array.length/3-1,E=g.count>=65535?Js:Ys,_=new E(Math.ceil(y/3)*6,1),S=_.array;if(v!==null){let f=v.array;m=v.version;for(let M=0,D=0;M<y;M+=3){let R=f[M+0],N=f[M+1],H=f[M+2];S[D++]=R,S[D++]=N,S[D++]=N,S[D++]=H,S[D++]=H,S[D++]=R}}else{m=g.version;for(let f=0,M=0;f<y;f+=3){let D=f+0,R=f+1,N=f+2;S[M++]=D,S[M++]=R,S[M++]=R,S[M++]=N,S[M++]=N,S[M++]=D}}_.version=m;let T=r.get(b);T&&e.remove(T),r.set(b,_)}function d(b){let v=r.get(b);if(v){let g=b.index;g!==null&&v.version<g.version&&u(b)}else u(b);return r.get(b)}function p(){for(let b in s){let v=s[b].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:d,dispose:p}}function Zg(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*a,p),t.update(d,n,p))}function h(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let v=0;for(let g=0;g<p;g++)v+=d[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Qg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $g(i,e,t){let n=new WeakMap,s=new nt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let D=function(){f.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],E=0;p===!0&&(E=1),b===!0&&(E=2),v===!0&&(E=3);let _=o.attributes.position.count*E,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*S*4*u),f=new js(T,_,S,u);f.type=cn,f.needsUpdate=!0;let M=E*4;for(let R=0;R<u;R++){let N=g[R],H=m[R],z=y[R],I=_*S*4*R;for(let Y=0;Y<N.count;Y++){let $=Y*M;p===!0&&(s.fromBufferAttribute(N,Y),T[I+$+0]=s.x,T[I+$+1]=s.y,T[I+$+2]=s.z,T[I+$+3]=0),b===!0&&(s.fromBufferAttribute(H,Y),T[I+$+4]=s.x,T[I+$+5]=s.y,T[I+$+6]=s.z,T[I+$+7]=0),v===!0&&(s.fromBufferAttribute(z,Y),T[I+$+8]=s.x,T[I+$+9]=s.y,T[I+$+10]=s.z,T[I+$+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:f,size:new Ve(_,S)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let b=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function e0(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var t0={[Tc]:"LINEAR_TONE_MAPPING",[Cc]:"REINHARD_TONE_MAPPING",[Ic]:"CINEON_TONE_MAPPING",[Rc]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[yr]:"NEUTRAL_TONE_MAPPING",[Pc]:"CUSTOM_TONE_MAPPING"};function n0(i,e,t,n,s,r){let a=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Gt;h.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pt([0,2,0,0,2,0],2));let u=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Nt(h,u),p=new Li(-1,1,1,-1,0,1),b=null,v=null,g=!1,m,y=null,E=[],_=!1;this.setSize=function(S,T){a.setSize(S,T),o!==null&&o.setSize(S,T),c!==null&&c.setSize(S,T);for(let f=0;f<E.length;f++){let M=E[f];M.setSize&&M.setSize(S,T)}},this.setEffects=function(S){E=S,_=E.length>0&&E[0].isRenderPass===!0;let T=a.width,f=a.height;E.length>0&&o===null&&(o=new on(T,f,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new on(T,f,{type:wn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&E.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new Yn(T,f),r===!0&&(l.format=ti,l.type=ki)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<E.length;D++){let R=E[D];R.setSize&&R.setSize(T,f),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(S,T){if(g||S.toneMapping===Ln&&E.length===0)return!1;if(y=T,T!==null){let f=T.width,M=T.height;(a.width!==f||a.height!==M)&&this.setSize(f,M)}return _===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Ln,!0},this.hasRenderPass=function(){return _},this.end=function(S,T){S.toneMapping=m,g=!0;let f=a,M=o;for(let D=0;D<E.length;D++){let R=E[D];R.enabled!==!1&&(R.render(S,M,f,T),R.needsSwap!==!1&&(f=M,M=M===o?c:o))}if(b!==S.outputColorSpace||v!==S.toneMapping){b=S.outputColorSpace,v=S.toneMapping,u.defines={},We.getTransfer(b)===et&&(u.defines.SRGB_TRANSFER="");let D=t0[v];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=f.texture,S.setRenderTarget(y),S.render(d,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var fd=new Mt,pd=new Yn(1,1),md=new rr(1),gd=new js,bd=new ba,xd=new ir,Xu=[],Ku=[],ju=new Float32Array(16),Yu=new Float32Array(9),Ju=new Float32Array(4);function Ns(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wo(i,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function o0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),Et(t,n)}}function c0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;Yu.set(n),i.uniformMatrix3fv(this.addr,!1,Yu),Et(t,n)}}function l0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;ju.set(n),i.uniformMatrix4fv(this.addr,!1,ju),Et(t,n)}}function h0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function p0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function Eo(i){return i.version===0&&(i.compareFunction=Hc,i.needsUpdate=!0),i}function x0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Eo(pd):r=fd,t.setTexture2D(e||r,s)}function y0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bd,s)}function v0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Eo(md):r=xd,t.setTextureCube(e||r,s)}function A0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gd,s)}function _0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return o0;case 35675:return c0;case 35676:return l0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return A0}}function S0(i,e){i.uniform1fv(this.addr,e)}function M0(i,e){let t=Ns(e,this.size,2);i.uniform2fv(this.addr,t)}function w0(i,e){let t=Ns(e,this.size,3);i.uniform3fv(this.addr,t)}function E0(i,e){let t=Ns(e,this.size,4);i.uniform4fv(this.addr,t)}function T0(i,e){let t=Ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function C0(i,e){let t=Ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function I0(i,e){let t=Ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function R0(i,e){i.uniform1iv(this.addr,e)}function P0(i,e){i.uniform2iv(this.addr,e)}function N0(i,e){i.uniform3iv(this.addr,e)}function L0(i,e){i.uniform4iv(this.addr,e)}function D0(i,e){i.uniform1uiv(this.addr,e)}function U0(i,e){i.uniform2uiv(this.addr,e)}function F0(i,e){i.uniform3uiv(this.addr,e)}function O0(i,e){i.uniform4uiv(this.addr,e)}function k0(i,e,t){let n=this.cache,s=e.length,r=wo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Eo(pd):a=fd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function B0(i,e,t){let n=this.cache,s=e.length,r=wo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bd,r[a])}function V0(i,e,t){let n=this.cache,s=e.length,r=wo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Eo(md):a=xd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function G0(i,e,t){let n=this.cache,s=e.length,r=wo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gd,r[a])}function z0(i){switch(i){case 5126:return S0;case 35664:return M0;case 35665:return w0;case 35666:return E0;case 35674:return T0;case 35675:return C0;case 35676:return I0;case 5124:case 35670:return R0;case 35667:case 35671:return P0;case 35668:case 35672:return N0;case 35669:case 35673:return L0;case 5125:return D0;case 36294:return U0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}var ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_0(t.type)}},cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z0(t.type)}},ll=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},rl=/(\w+)(\])?(\[|\.)?/g;function Zu(i,e){i.seq.push(e),i.map[e.id]=e}function H0(i,e,t){let n=i.name,s=n.length;for(rl.lastIndex=0;;){let r=rl.exec(n),a=rl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Zu(t,l===void 0?new ol(o,i,e):new cl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ll(o),Zu(t,u)),t=u}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);H0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Qu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var W0=37297,q0=0;function X0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var $u=new Fe;function K0(i){We._getMatrix($u,We.workingColorSpace,i);let e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Xs:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ed(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+X0(i.getShaderSource(e),o)}else return r}function j0(i,e){let t=K0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Y0={[Tc]:"Linear",[Cc]:"Reinhard",[Ic]:"Cineon",[Rc]:"ACESFilmic",[Nc]:"AgX",[yr]:"Neutral",[Pc]:"Custom"};function J0(i,e){let t=Y0[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var So=new O;function Z0(){We.getLuminanceCoefficients(So);let i=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function $0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Cr(i){return i!==""}function td(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function nd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tb=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(tb,nb)}function nb(i,e){let t=Ge[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return hl(t)}var ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(ib,sb)}function sb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var rb={[xr]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function ab(i){return rb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ob={[Es]:"ENVMAP_MODE_REFRACTION"};function cb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ob[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lb={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[_u]:"ENVMAP_BLENDING_MIX",[Su]:"ENVMAP_BLENDING_ADD"};function hb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lb[i.combine]||"ENVMAP_BLENDING_NONE"}function ub(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=ab(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=cb(t),u=hb(t),d=Q0(t),p=$0(r),b=s.createProgram(),v,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Cr).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Cr).join(`
`),g.length>0&&(g+=`
`)):(v=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),g=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ln?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,j0("linearToOutputTexel",t.outputColorSpace),Z0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=hl(a),a=td(a,t),a=nd(a,t),o=hl(o),o=td(o,t),o=nd(o,t),a=id(a),o=id(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+v+a,E=m+g+o,_=Qu(s,s.VERTEX_SHADER,y),S=Qu(s,s.FRAGMENT_SHADER,E);s.attachShader(b,_),s.attachShader(b,S),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function T(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(b)||"",H=s.getShaderInfoLog(_)||"",z=s.getShaderInfoLog(S)||"",I=N.trim(),Y=H.trim(),$=z.trim(),q=!0,se=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,_,S);else{let X=ed(s,_,"vertex"),ee=ed(s,S,"fragment");De("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+X+`
`+ee)}else I!==""?Te("WebGLProgram: Program Info Log:",I):(Y===""||$==="")&&(se=!1);se&&(R.diagnostics={runnable:q,programLog:I,vertexShader:{log:Y,prefix:v},fragmentShader:{log:$,prefix:g}})}s.deleteShader(_),s.deleteShader(S),f=new Rs(s,b),M=eb(s,b)}let f;this.getUniforms=function(){return f===void 0&&T(this),f};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(b,W0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q0++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=_,this.fragmentShader=S,this}var db=0,ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dl(e),t.set(e,n)),n}},dl=class{constructor(e){this.id=db++,this.code=e,this.usedTimes=0}};function fb(i){return i===bi||i===Mr||i===wr}function pb(i,e,t,n,s,r){let a=new hs,o=new ul,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(f){return c.add(f),f===0?"uv":`uv${f}`}function b(f,M,D,R,N,H){let z=R.fog,I=N.geometry,Y=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?R.environment:null,$=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,q=e.get(f.envMap||Y,$),se=d[f.type],X=n.precision;f.precision!==null&&(X=n.getMaxPrecision(f.precision),X!==f.precision&&Te("WebGLProgram.getParameters:",f.precision,"not supported, using",X,"instead."));let ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ie=ee!==void 0?ee.length:0,Se=0;I.morphAttributes.position!==void 0&&(Se=1),I.morphAttributes.normal!==void 0&&(Se=2),I.morphAttributes.color!==void 0&&(Se=3);let Ue,Q,me,Ae;if(se){let be=Fn[se];Ue=be.vertexShader,Q=be.fragmentShader}else{Ue=f.vertexShader,Q=f.fragmentShader;let be=o.getVertexShaderStage(f),tt=o.getFragmentShaderStage(f);o.update(f,be,tt),me=be.id,Ae=tt.id}let Pe=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,ct=N.isBatchedMesh===!0,Le=!!f.map,Je=!!f.matcap,Qe=!!q,Be=Qe&&q.isPMREMTexture===!0,Xe=!!f.aoMap,lt=!!f.lightMap,At=!!f.bumpMap&&f.wireframe===!1,it=!!f.normalMap,Tt=!!f.displacementMap,xt=!!f.emissiveMap,Ht=!!f.metalnessMap,Wt=!!f.roughnessMap,Yt=f.anisotropy>0,L=f.clearcoat>0,Ct=f.diffuseRoughness>0,at=f.dispersion>0,B=f.retroreflectivity>0,U=f.iridescence>0,ve=f.sheen>0,ne=f.transmission>0,le=Yt&&!!f.anisotropyMap,w=L&&!!f.clearcoatMap,x=L&&!!f.clearcoatNormalMap,F=L&&!!f.clearcoatRoughnessMap,te=Ct&&!!f.diffuseRoughnessMap,Z=U&&!!f.iridescenceMap,oe=U&&!!f.iridescenceThicknessMap,ae=ve&&!!f.sheenColorMap,K=ve&&!!f.sheenRoughnessMap,V=!!f.specularMap,re=!!f.specularColorMap,C=!!f.specularIntensityMap,J=ne&&!!f.transmissionMap,j=ne&&!!f.thicknessMap,ue=!!f.gradientMap,he=!!f.alphaMap,de=f.alphaTest>0,Ce=!!f.alphaHash,He=!!f.extensions,ce=Ln;f.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Ie=Be?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,ze={shaderID:se,shaderType:f.type,shaderName:f.name,vertexShader:Ue,fragmentShader:Q,defines:f.defines,customVertexShaderID:me,customFragmentShaderID:Ae,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:X,batching:ct,batchingColor:ct&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Le,matcap:Je,envMap:Qe,envMapMode:Qe&&q.mapping,envMapPMREM:Be,envMapMaxLod:Be?Ie.length-1:null,envMapSize:Be?Ie[0].width:null,aoMap:Xe,lightMap:lt,bumpMap:At,normalMap:it,displacementMap:Tt,emissiveMap:xt,normalMapObjectSpace:it&&f.normalMapType===Tu,normalMapTangentSpace:it&&f.normalMapType===vo,packedNormalMap:it&&f.normalMapType===vo&&fb(f.normalMap.format),metalnessMap:Ht,roughnessMap:Wt,anisotropy:Yt,anisotropyMap:le,clearcoat:L,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:F,diffuseRoughness:Ct,diffuseRoughnessMap:te,dispersion:at,retroreflection:B,iridescence:U,iridescenceMap:Z,iridescenceThicknessMap:oe,sheen:ve,sheenColorMap:ae,sheenRoughnessMap:K,specularMap:V,specularColorMap:re,specularIntensityMap:C,transmission:ne,transmissionMap:J,thicknessMap:j,gradientMap:ue,opaque:f.transparent===!1&&f.blending===ws&&f.alphaToCoverage===!1,alphaMap:he,alphaTest:de,alphaHash:Ce,combine:f.combine,mapUv:Le&&p(f.map.channel),aoMapUv:Xe&&p(f.aoMap.channel),lightMapUv:lt&&p(f.lightMap.channel),bumpMapUv:At&&p(f.bumpMap.channel),normalMapUv:it&&p(f.normalMap.channel),displacementMapUv:Tt&&p(f.displacementMap.channel),emissiveMapUv:xt&&p(f.emissiveMap.channel),metalnessMapUv:Ht&&p(f.metalnessMap.channel),roughnessMapUv:Wt&&p(f.roughnessMap.channel),anisotropyMapUv:le&&p(f.anisotropyMap.channel),clearcoatMapUv:w&&p(f.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&p(f.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&p(f.diffuseRoughnessMap.channel),iridescenceMapUv:Z&&p(f.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(f.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&p(f.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(f.sheenRoughnessMap.channel),specularMapUv:V&&p(f.specularMap.channel),specularColorMapUv:re&&p(f.specularColorMap.channel),specularIntensityMapUv:C&&p(f.specularIntensityMap.channel),transmissionMapUv:J&&p(f.transmissionMap.channel),thicknessMapUv:j&&p(f.thicknessMap.channel),alphaMapUv:he&&p(f.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(it||Yt),vertexNormals:!!I.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Le||he),fog:!!z,useFog:f.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||I.attributes.normal===void 0&&it===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Se,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:H.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Le&&f.map.isVideoTexture===!0&&We.getTransfer(f.map.colorSpace)===et,decodeVideoTextureEmissive:xt&&f.emissiveMap.isVideoTexture===!0&&We.getTransfer(f.emissiveMap.colorSpace)===et,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===jt,flipSided:f.side===Ut,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:He&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&f.extensions.multiDraw===!0||ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function v(f){let M=[];if(f.shaderID?M.push(f.shaderID):(M.push(f.customVertexShaderID),M.push(f.customFragmentShaderID)),f.defines!==void 0)for(let D in f.defines)M.push(D),M.push(f.defines[D]);return f.isRawShaderMaterial===!1&&(g(M,f),m(M,f),M.push(i.outputColorSpace)),M.push(f.customProgramCacheKey),M.join()}function g(f,M){f.push(M.precision),f.push(M.outputColorSpace),f.push(M.envMapMode),f.push(M.envMapPMREM),f.push(M.envMapMaxLod),f.push(M.envMapSize),f.push(M.mapUv),f.push(M.alphaMapUv),f.push(M.lightMapUv),f.push(M.aoMapUv),f.push(M.bumpMapUv),f.push(M.normalMapUv),f.push(M.displacementMapUv),f.push(M.emissiveMapUv),f.push(M.metalnessMapUv),f.push(M.roughnessMapUv),f.push(M.anisotropyMapUv),f.push(M.clearcoatMapUv),f.push(M.clearcoatNormalMapUv),f.push(M.clearcoatRoughnessMapUv),f.push(M.diffuseRoughnessMapUv),f.push(M.iridescenceMapUv),f.push(M.iridescenceThicknessMapUv),f.push(M.sheenColorMapUv),f.push(M.sheenRoughnessMapUv),f.push(M.specularMapUv),f.push(M.specularColorMapUv),f.push(M.specularIntensityMapUv),f.push(M.transmissionMapUv),f.push(M.thicknessMapUv),f.push(M.combine),f.push(M.fogExp2),f.push(M.sizeAttenuation),f.push(M.morphTargetsCount),f.push(M.numSunLights),f.push(M.numDirLights),f.push(M.numPointLights),f.push(M.numSpotLights),f.push(M.numSpotLightMaps),f.push(M.numHemiLights),f.push(M.numRectAreaLights),f.push(M.numSunLightShadows),f.push(M.numDirLightShadows),f.push(M.numPointLightShadows),f.push(M.numSpotLightShadows),f.push(M.numSpotLightShadowsWithMaps),f.push(M.numLightProbes),f.push(M.numLightProbeGrids),f.push(M.shadowMapType),f.push(M.toneMapping),f.push(M.numClippingPlanes),f.push(M.numClipIntersection),f.push(M.depthPacking)}function m(f,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),f.push(a.mask)}function y(f){let M=d[f.type],D;if(M){let R=Fn[M];D=Bu.clone(R.uniforms)}else D=f.uniforms;return D}function E(f,M){let D=h.get(M);return D!==void 0?++D.usedTimes:(D=new ub(i,M,f,s),l.push(D),h.set(M,D)),D}function _(f){if(--f.usedTimes===0){let M=l.indexOf(f);l[M]=l[l.length-1],l.pop(),h.delete(f.cacheKey),f.destroy()}}function S(f){o.remove(f)}function T(){o.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:y,acquireProgram:E,releaseProgram:_,releaseShaderCache:S,programs:l,dispose:T}}function mb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function gb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ad(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,b,v,g,m){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:p,material:b,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[e]=y):(y.id=d.id,y.object=d,y.geometry=p,y.material=b,y.materialVariant=a(d),y.groupOrder=v,y.renderOrder=d.renderOrder,y.z=g,y.group=m),e++,y}function c(d,p,b,v,g,m,y){y.reversedDepth===!0&&(g=-g);let E=o(d,p,b,v,g,m);b.transmission>0?n.push(E):b.transparent===!0?s.push(E):t.push(E)}function l(d,p,b,v,g,m){let y=o(d,p,b,v,g,m);b.transmission>0?n.unshift(y):b.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,p){t.length>1&&t.sort(d||gb),n.length>1&&n.sort(p||rd),s.length>1&&s.sort(p||rd)}function u(){for(let d=e,p=i.length;d<p;d++){let b=i[d];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function bb(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ad,i.set(n,[a])):s>=r.length?(a=new ad,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function xb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Re};break;case"SpotLight":t={position:new O,direction:new O,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function yb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var vb=0;function Ab(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _b(i){let e=new xb,t=yb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new ke,a=new ke;function o(l){let h=0,u=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let p=0,b=0,v=0,g=0,m=0,y=0,E=0,_=0,S=0,T=0,f=0,M=0,D=0,R=0;l.sort(Ab);for(let H=0,z=l.length;H<z;H++){let I=l[H],Y=I.color,$=I.intensity,q=I.distance,se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===bi?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=Y.r*$,u+=Y.g*$,d+=Y.b*$;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],$);R++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,ie=t.get(I);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[b]=ie,n.sunShadowMap[b]=se;let Se=ee.getViewportCount();for(let Ue=0;Ue<Se;Ue++)n.sunShadowMatrix[v+Ue]=ee.getMatrix(Ue),n.sunShadowCascade[v+Ue]=ee._cascadeData[Ue];v+=Se,b++}n.sun[p]=X,p++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,ie=t.get(I);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,n.directionalShadow[g]=ie,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=I.shadow.matrix,S++}n.directional[g]=X,g++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(Y).multiplyScalar($),X.distance=q,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[y]=X;let ee=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,ee.updateMatrices(I),I.castShadow&&D++),n.spotLightMatrix[y]=ee.matrix,I.castShadow){let ie=t.get(I);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,n.spotShadow[y]=ie,n.spotShadowMap[y]=se,f++}y++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(Y).multiplyScalar($),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=X,E++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let ee=I.shadow,ie=t.get(I);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,n.pointShadow[m]=ie,n.pointShadowMap[m]=se,n.pointShadowMatrix[m]=I.shadow.matrix,T++}n.point[m]=X,m++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar($),X.groundColor.copy(I.groundColor).multiplyScalar($),n.hemi[_]=X,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==p||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==y||N.rectAreaLength!==E||N.hemiLength!==_||N.numSunShadows!==b||N.numDirectionalShadows!==S||N.numPointShadows!==T||N.numSpotShadows!==f||N.numSpotMaps!==M||N.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=g,n.spot.length=y,n.rectArea.length=E,n.point.length=m,n.hemi.length=_,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=f,n.spotShadowMap.length=f,n.spotLightMatrix.length=f+M-D,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,N.sunLength=p,N.directionalLength=g,N.pointLength=m,N.spotLength=y,N.rectAreaLength=E,N.hemiLength=_,N.numSunShadows=b,N.numDirectionalShadows=S,N.numPointShadows=T,N.numSpotShadows=f,N.numSpotMaps=M,N.numLightProbes=R,n.version=vb++)}function c(l,h){let u=0,d=0,p=0,b=0,v=0,g=0,m=h.matrixWorldInverse;for(let y=0,E=l.length;y<E;y++){let _=l[y];if(_.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(_.isSpotLight){let S=n.spot[b];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),b++}else if(_.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),p++}else if(_.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function od(i){let e=new _b(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Sb(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new od(i),e.set(s,[o])):r>=a.length?(o=new od(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
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
}`,Eb=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Tb=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],cd=new ke,Tr=new O,al=new O;function Cb(i,e,t){let n=new mi,s=new Ve,r=new Ve,a=new nt,o=new _a,c=new Sa,l={},h=t.maxTextureSize,u={[mn]:Ut,[Ut]:mn,[jt]:jt},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Mb,fragmentShader:wb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let b=new Gt;b.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Nt(b,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let m=this.type;this.render=function(T,f,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===iu&&(Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);let D=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Di),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=m!==this.type;z&&f.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(Y=>Y.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,Y=T.length;I<Y;I++){let $=T[I],q=$.shadow;if(q===void 0){Te("WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let se=q.getFrameExtents();s.multiply(se),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,q.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=X,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ms){if($.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new on(s.x,s.y,{format:bi,type:wn,minFilter:St,magFilter:St,generateMipmaps:!1}),q.map.texture.name=$.name+".shadowMap",q.map.depthTexture=new Yn(s.x,s.y,cn),q.map.depthTexture.name=$.name+".shadowMapDepth",q.map.depthTexture.format=Xn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=mt,q.map.depthTexture.magFilter=mt}else $.isPointLight?(q.map=new Ir(s.x),q.map.depthTexture=new rr(s.x,Mn)):(q.map=new on(s.x,s.y),q.map.depthTexture=new Yn(s.x,s.y,Mn)),q.map.depthTexture.name=$.name+".shadowMap",q.map.depthTexture.format=Xn,this.type===xr?(q.map.depthTexture.compareFunction=X?zc:Gc,q.map.depthTexture.minFilter=St,q.map.depthTexture.magFilter=St):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=mt,q.map.depthTexture.magFilter=mt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ee=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();$.isPointLight!==!0&&q.updateMatrices($,M);let ie=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:M.layers;for(let Se=0;Se<ee;Se++){let Ue=q.getCamera(Se);if($.isPointLight){let Q=q.camera,me=q.matrix,Ae=$.distance||Q.far;Ae!==Q.far&&(Q.far=Ae,Q.updateProjectionMatrix()),Tr.setFromMatrixPosition($.matrixWorld),Q.position.copy(Tr),al.copy(Q.position),al.add(Eb[Se]),Q.up.copy(Tb[Se]),Q.lookAt(al),Q.updateMatrixWorld(),me.makeTranslation(-Tr.x,-Tr.y,-Tr.z),cd.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),q._frustum.setFromProjectionMatrix(cd,Q.coordinateSystem,Q.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(q.map),i.clear());let Q=q.getViewport(Se);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),H.viewport(a)}n=q.getFrustum(Se),_(f,M,Ue,$,ie,this.type)}q.isPointLightShadow!==!0&&this.type===Ms&&y(q,M),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(D,R,N)};function y(T,f){let M=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new on(s.x,s.y,{format:bi,type:wn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(f,null,M,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(f,null,M,p,v,null)}function E(T,f,M,D){let R=null,N=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=M.isPointLight===!0?c:o,i.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){let H=R.uuid,z=f.uuid,I=l[H];I===void 0&&(I={},l[H]=I);let Y=I[z];Y===void 0&&(Y=R.clone(),I[z]=Y,f.addEventListener("dispose",S)),R=Y}if(R.visible=f.visible,R.wireframe=f.wireframe,D===Ms?R.side=f.shadowSide!==null?f.shadowSide:f.side:R.side=f.shadowSide!==null?f.shadowSide:u[f.side],R.alphaMap=f.alphaMap,R.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,R.map=f.map,R.clipShadows=f.clipShadows,R.clippingPlanes=f.clippingPlanes,R.clipIntersection=f.clipIntersection,R.displacementMap=f.displacementMap,R.displacementScale=f.displacementScale,R.displacementBias=f.displacementBias,R.wireframeLinewidth=f.wireframeLinewidth,R.linewidth=f.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=i.properties.get(R);H.light=M}return R}function _(T,f,M,D,R,N){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Ms)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let I=e.update(T),Y=T.material;if(Array.isArray(Y)){let $=I.groups;for(let q=0,se=$.length;q<se;q++){let X=$[q],ee=Y[X.materialIndex];if(ee&&ee.visible){let ie=E(T,ee,D,N);T.onBeforeShadow(i,T,f,M,I,ie,X),i.renderBufferDirect(M,null,I,ie,T,X),T.onAfterShadow(i,T,f,M,I,ie,X)}}}else if(Y.visible){let $=E(T,Y,D,N);T.onBeforeShadow(i,T,f,M,I,$,null),i.renderBufferDirect(M,null,I,$,T,null),T.onAfterShadow(i,T,f,M,I,$,null)}}let z=T.children;for(let I=0,Y=z.length;I<Y;I++)_(z[I],f,M,D,R,N)}function S(T){T.target.removeEventListener("dispose",S);for(let M in l){let D=l[M],R=T.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function Ib(i,e){function t(){let C=!1,J=new nt,j=null,ue=new nt(0,0,0,0);return{setMask:function(he){j!==he&&!C&&(i.colorMask(he,he,he,he),j=he)},setLocked:function(he){C=he},setClear:function(he,de,Ce,He,ce){ce===!0&&(he*=He,de*=He,Ce*=He),J.set(he,de,Ce,He),ue.equals(J)===!1&&(i.clearColor(he,de,Ce,He),ue.copy(J))},reset:function(){C=!1,j=null,ue.set(-1,0,0,0)}}}function n(){let C=!1,J=!1,j=null,ue=null,he=null;return{setReversed:function(de){if(J!==de){let Ce=e.get("EXT_clip_control");de?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),J=de;let He=he;he=null,this.setClear(He)}},getReversed:function(){return J},setTest:function(de){de?ge(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(de){j!==de&&!C&&(i.depthMask(de),j=de)},setFunc:function(de){if(J&&(de=Ou[de]),ue!==de){switch(de){case ca:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=de}},setLocked:function(de){C=de},setClear:function(de){he!==de&&(he=de,J&&(de=1-de),i.clearDepth(de))},reset:function(){C=!1,j=null,ue=null,he=null,J=!1}}}function s(){let C=!1,J=null,j=null,ue=null,he=null,de=null,Ce=null,He=null,ce=null;return{setTest:function(Ie){C||(Ie?ge(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(Ie){J!==Ie&&!C&&(i.stencilMask(Ie),J=Ie)},setFunc:function(Ie,ze,be){(j!==Ie||ue!==ze||he!==be)&&(i.stencilFunc(Ie,ze,be),j=Ie,ue=ze,he=be)},setOp:function(Ie,ze,be){(de!==Ie||Ce!==ze||He!==be)&&(i.stencilOp(Ie,ze,be),de=Ie,Ce=ze,He=be)},setLocked:function(Ie){C=Ie},setClear:function(Ie){ce!==Ie&&(i.clearStencil(Ie),ce=Ie)},reset:function(){C=!1,J=null,j=null,ue=null,he=null,de=null,Ce=null,He=null,ce=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},p=new WeakMap,b=[],v=null,g=!1,m=null,y=null,E=null,_=null,S=null,T=null,f=null,M=new Re(0,0,0),D=0,R=!1,N=null,H=null,z=null,I=null,Y=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,se=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=se>=2);let ee=null,ie={},Se=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Q=new nt().fromArray(Se),me=new nt().fromArray(Ue);function Ae(C,J,j,ue){let he=new Uint8Array(4),de=i.createTexture();i.bindTexture(C,de),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<j;Ce++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(J+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return de}let Pe={};Pe[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(ss),At(!1),it(vc),ge(i.CULL_FACE),Xe(Di);function ge(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Ne(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function ct(C,J){return d[C]!==J?(i.bindFramebuffer(C,J),d[C]=J,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=J),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Le(C,J){let j=b,ue=!1;if(C){j=p.get(J),j===void 0&&(j=[],p.set(J,j));let he=C.textures;if(j.length!==he.length||j[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ce=he.length;de<Ce;de++)j[de]=i.COLOR_ATTACHMENT0+de;j.length=he.length,ue=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ue=!0);ue&&i.drawBuffers(j)}function Je(C){return v!==C?(i.useProgram(C),v=C,!0):!1}let Qe={[Ui]:i.FUNC_ADD,[ru]:i.FUNC_SUBTRACT,[au]:i.FUNC_REVERSE_SUBTRACT};Qe[ou]=i.MIN,Qe[cu]=i.MAX;let Be={[lu]:i.ZERO,[hu]:i.ONE,[uu]:i.SRC_COLOR,[Mc]:i.SRC_ALPHA,[bu]:i.SRC_ALPHA_SATURATE,[mu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[du]:i.ONE_MINUS_SRC_COLOR,[wc]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[pu]:i.ONE_MINUS_DST_ALPHA,[xu]:i.CONSTANT_COLOR,[yu]:i.ONE_MINUS_CONSTANT_COLOR,[vu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(C,J,j,ue,he,de,Ce,He,ce,Ie){if(C===Di){g===!0&&(Ne(i.BLEND),g=!1);return}if(g===!1&&(ge(i.BLEND),g=!0),C!==su){if(C!==m||Ie!==R){if((y!==Ui||S!==Ui)&&(i.blendEquation(i.FUNC_ADD),y=Ui,S=Ui),Ie)switch(C){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:De("WebGLState: Invalid blending: ",C);break}else switch(C){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _c:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sc:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",C);break}E=null,_=null,T=null,f=null,M.set(0,0,0),D=0,m=C,R=Ie}return}he=he||J,de=de||j,Ce=Ce||ue,(J!==y||he!==S)&&(i.blendEquationSeparate(Qe[J],Qe[he]),y=J,S=he),(j!==E||ue!==_||de!==T||Ce!==f)&&(i.blendFuncSeparate(Be[j],Be[ue],Be[de],Be[Ce]),E=j,_=ue,T=de,f=Ce),(He.equals(M)===!1||ce!==D)&&(i.blendColor(He.r,He.g,He.b,ce),M.copy(He),D=ce),m=C,R=!1}function lt(C,J){C.side===jt?Ne(i.CULL_FACE):ge(i.CULL_FACE);let j=C.side===Ut;J&&(j=!j),At(j),C.blending===ws&&C.transparent===!1?Xe(Di):Xe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ue=C.stencilWrite;o.setTest(ue),ue&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),xt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(C){N!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),N=C)}function it(C){C!==tu?(ge(i.CULL_FACE),C!==H&&(C===vc?i.cullFace(i.BACK):C===nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),H=C}function Tt(C){C!==z&&(q&&i.lineWidth(C),z=C)}function xt(C,J,j){C?(ge(i.POLYGON_OFFSET_FILL),(I!==J||Y!==j)&&(I=J,Y=j,a.getReversed()&&(J=-J,j=-j),i.polygonOffset(J,j))):Ne(i.POLYGON_OFFSET_FILL)}function Ht(C){C?ge(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function Wt(C){C===void 0&&(C=i.TEXTURE0+$-1),ee!==C&&(i.activeTexture(C),ee=C)}function Yt(C,J,j){j===void 0&&(ee===null?j=i.TEXTURE0+$-1:j=ee);let ue=ie[j];ue===void 0&&(ue={type:void 0,texture:void 0},ie[j]=ue),(ue.type!==C||ue.texture!==J)&&(ee!==j&&(i.activeTexture(j),ee=j),i.bindTexture(C,J||Pe[C]),ue.type=C,ue.texture=J)}function L(){let C=ie[ee];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Ct(){try{i.compressedTexImage2D(...arguments)}catch(C){De("WebGLState:",C)}}function at(){try{i.compressedTexImage3D(...arguments)}catch(C){De("WebGLState:",C)}}function B(){try{i.texSubImage2D(...arguments)}catch(C){De("WebGLState:",C)}}function U(){try{i.texSubImage3D(...arguments)}catch(C){De("WebGLState:",C)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(C){De("WebGLState:",C)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(C){De("WebGLState:",C)}}function le(){try{i.texStorage2D(...arguments)}catch(C){De("WebGLState:",C)}}function w(){try{i.texStorage3D(...arguments)}catch(C){De("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){De("WebGLState:",C)}}function F(){try{i.texImage3D(...arguments)}catch(C){De("WebGLState:",C)}}function te(C){return u[C]!==void 0?u[C]:i.getParameter(C)}function Z(C,J){u[C]!==J&&(i.pixelStorei(C,J),u[C]=J)}function oe(C){Q.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Q.copy(C))}function ae(C){me.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),me.copy(C))}function K(C,J){let j=l.get(J);j===void 0&&(j=new WeakMap,l.set(J,j));let ue=j.get(C);ue===void 0&&(ue=i.getUniformBlockIndex(J,C.name),i.uniformBlockBinding(J,ue,ue),j.set(C,ue))}function V(C,J,j){let he=l.get(J).get(C);c[he]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,he,j),c[he]=j)}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ee=null,ie={},d={},c={},p=new WeakMap,b=[],v=null,g=!1,m=null,y=null,E=null,_=null,S=null,T=null,f=null,M=new Re(0,0,0),D=0,R=!1,N=null,H=null,z=null,I=null,Y=null,Q.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:Ne,bindFramebuffer:ct,drawBuffers:Le,useProgram:Je,setBlending:Xe,setMaterial:lt,setFlipSided:At,setCullFace:it,setLineWidth:Tt,setPolygonOffset:xt,setScissorTest:Ht,activeTexture:Wt,bindTexture:Yt,unbindTexture:L,compressedTexImage2D:Ct,compressedTexImage3D:at,texImage2D:x,texImage3D:F,pixelStorei:Z,getParameter:te,updateUBOMapping:K,uniformBlockBinding:V,texStorage2D:le,texStorage3D:w,texSubImage2D:B,texSubImage3D:U,compressedTexSubImage2D:ve,compressedTexSubImage3D:ne,scissor:oe,viewport:ae,reset:re}}function Rb(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap,u=new Set,d,p=new WeakMap,b=new Set,v=new FinalizationRegistry(w=>b.delete(w)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return g?new OffscreenCanvas(w,x):os("canvas")}function y(w,x,F){let te=1,Z=le(w);if((Z.width>F||Z.height>F)&&(te=F/Math.max(Z.width,Z.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let oe=Math.floor(te*Z.width),ae=Math.floor(te*Z.height);d===void 0&&(d=m(oe,ae));let K=x?m(oe,ae):d;return K.width=oe,K.height=ae,K.getContext("2d").drawImage(w,0,0,oe,ae),Te("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+oe+"x"+ae+")."),K}else return"data"in w&&Te("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function E(w){return w.generateMipmaps}function _(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,x,F,te,Z,oe=!1){if(w!==null){if(i[w]!==void 0)return i[w];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ae;te&&(ae=e.get("EXT_texture_norm16"),ae||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(F===i.FLOAT&&(K=i.R32F),F===i.HALF_FLOAT&&(K=i.R16F),F===i.UNSIGNED_BYTE&&(K=i.R8),F===i.UNSIGNED_SHORT&&ae&&(K=ae.R16_EXT),F===i.SHORT&&ae&&(K=ae.R16_SNORM_EXT)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.R8UI),F===i.UNSIGNED_SHORT&&(K=i.R16UI),F===i.UNSIGNED_INT&&(K=i.R32UI),F===i.BYTE&&(K=i.R8I),F===i.SHORT&&(K=i.R16I),F===i.INT&&(K=i.R32I)),x===i.RG&&(F===i.FLOAT&&(K=i.RG32F),F===i.HALF_FLOAT&&(K=i.RG16F),F===i.UNSIGNED_BYTE&&(K=i.RG8),F===i.UNSIGNED_SHORT&&ae&&(K=ae.RG16_EXT),F===i.SHORT&&ae&&(K=ae.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RG8UI),F===i.UNSIGNED_SHORT&&(K=i.RG16UI),F===i.UNSIGNED_INT&&(K=i.RG32UI),F===i.BYTE&&(K=i.RG8I),F===i.SHORT&&(K=i.RG16I),F===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGB8UI),F===i.UNSIGNED_SHORT&&(K=i.RGB16UI),F===i.UNSIGNED_INT&&(K=i.RGB32UI),F===i.BYTE&&(K=i.RGB8I),F===i.SHORT&&(K=i.RGB16I),F===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),F===i.UNSIGNED_INT&&(K=i.RGBA32UI),F===i.BYTE&&(K=i.RGBA8I),F===i.SHORT&&(K=i.RGBA16I),F===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_SHORT&&ae&&(K=ae.RGB16_EXT),F===i.SHORT&&ae&&(K=ae.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){let V=oe?Xs:We.getTransfer(Z);F===i.FLOAT&&(K=i.RGBA32F),F===i.HALF_FLOAT&&(K=i.RGBA16F),F===i.UNSIGNED_BYTE&&(K=V===et?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ae&&(K=ae.RGBA16_EXT),F===i.SHORT&&ae&&(K=ae.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function f(w,x){let F;return w?x===null||x===Mn||x===ki?F=i.DEPTH24_STENCIL8:x===cn?F=i.DEPTH32F_STENCIL8:x===Cs&&(F=i.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mn||x===ki?F=i.DEPTH_COMPONENT24:x===cn?F=i.DEPTH_COMPONENT32F:x===Cs&&(F=i.DEPTH_COMPONENT16),F}function M(w,x){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==mt&&w.minFilter!==St?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function D(w){let x=new WeakRef(w);n.get(w).__ref=x,b.add(x),v.register(w,x,x)}function R(w){let x=n.get(w).__ref;x!==void 0&&(b.delete(x),v.unregister(x))}function N(w){z(w.target)}function H(w){I(w.target)}function z(w){w.removeEventListener("dispose",N),R(w),$(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function I(w){w.removeEventListener("dispose",H),R(w),se(w)}function Y(){for(let w of b){let x=w.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):z(x))}b.clear(),u.clear()}function $(w){let x=n.get(w);if(x.__webglInit===void 0)return;let F=w.source,te=p.get(F);if(te){let Z=te[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&q(w),Object.keys(te).length===0&&p.delete(F)}n.remove(w)}function q(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let F=w.source,te=p.get(F);delete te[x.__cacheKey],a.memory.textures--}function se(w){let x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();let F=w.depthTexture;if(F&&F.renderTarget===w&&z(F),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let oe=0;oe<x.__webglFramebuffer[Z].length;oe++)i.deleteFramebuffer(x.__webglFramebuffer[Z][oe]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let te=w.textures;for(let Z=0,oe=te.length;Z<oe;Z++){let ae=n.get(te[Z]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(te[Z])}n.remove(w)}let X=0;function ee(){X=0}function ie(){return X}function Se(w){X=w}function Ue(){let w=X;return w>=s.maxTextures&&Te("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function Q(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function me(w,x){let F=n.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let te=w.image;if(te===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(F,w,x);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function Ae(w,x){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){lt(F,w,x);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Pe(w,x){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){lt(F,w,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function ge(w,x){let F=n.get(w);if(w.version>0&&F.__version!==w.version){At(F,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let Ne={[fi]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[rs]:i.MIRRORED_REPEAT},ct={[mt]:i.NEAREST,[Ua]:i.NEAREST_MIPMAP_NEAREST,[Oi]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[Ts]:i.LINEAR_MIPMAP_NEAREST,[gn]:i.LINEAR_MIPMAP_LINEAR},Le={[Iu]:i.NEVER,[Hc]:i.ALWAYS,[Ru]:i.LESS,[Gc]:i.LEQUAL,[Pu]:i.EQUAL,[zc]:i.GEQUAL,[Nu]:i.GREATER,[Lu]:i.NOTEQUAL};function Je(w,x){if(x.type===cn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===St||x.magFilter===Ts||x.magFilter===Oi||x.magFilter===gn||x.minFilter===St||x.minFilter===Ts||x.minFilter===Oi||x.minFilter===gn)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ne[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ne[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ne[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mt||x.minFilter!==Oi&&x.minFilter!==gn||x.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",N),D(x));let te=x.source,Z=p.get(te);Z===void 0&&(Z={},p.set(te,Z));let oe=Q(x);if(oe!==w.__cacheKey){Z[oe]===void 0&&(Z[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[oe].usedTimes++;let ae=Z[w.__cacheKey];ae!==void 0&&(Z[w.__cacheKey].usedTimes--,ae.usedTimes===0&&q(x)),w.__cacheKey=oe,w.__webglTexture=Z[oe].texture}return F}function Be(w,x,F){return Math.floor(Math.floor(w/F)/x)}function Xe(w,x,F,te){let oe=w.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,te,x.data);else{oe.sort((C,J)=>C.start-J.start);let ae=0;for(let C=1;C<oe.length;C++){let J=oe[ae],j=oe[C],ue=J.start+J.count,he=Be(j.start,x.width,4),de=Be(J.start,x.width,4);j.start<=ue+1&&he===de&&Be(j.start+j.count-1,x.width,4)===he?J.count=Math.max(J.count,j.start+j.count-J.start):(++ae,oe[ae]=j)}oe.length=ae+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),V=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,J=oe.length;C<J;C++){let j=oe[C],ue=Math.floor(j.start/4),he=Math.ceil(j.count/4),de=ue%x.width,Ce=Math.floor(ue/x.width),He=he,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(i.TEXTURE_2D,0,de,Ce,He,ce,F,te,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,V),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function lt(w,x,F){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);let Z=Qe(w,x),oe=x.source;t.bindTexture(te,w.__webglTexture,i.TEXTURE0+F);let ae=n.get(oe);if(oe.version!==ae.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ce=We.getPrimaries(We.workingColorSpace),Ie=x.colorSpace===ni?null:We.getPrimaries(x.colorSpace),ze=x.colorSpace===ni||ce===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let V=y(x.image,!1,s.maxTextureSize);V=ne(x,V);let re=r.convert(x.format,x.colorSpace),C=r.convert(x.type),J=T(x.internalFormat,re,C,x.normalized,x.colorSpace,x.isVideoTexture);Je(te,x);let j,ue=x.mipmaps,he=x.isVideoTexture!==!0,de=ae.__version===void 0||Z===!0,Ce=oe.dataReady,He=M(x,V);if(x.isDepthTexture)J=f(x.format===ti,x.type),de&&(he?t.texStorage2D(i.TEXTURE_2D,1,J,V.width,V.height):t.texImage2D(i.TEXTURE_2D,0,J,V.width,V.height,0,re,C,null));else if(x.isDataTexture)if(ue.length>0){he&&de&&t.texStorage2D(i.TEXTURE_2D,He,J,ue[0].width,ue[0].height);for(let ce=0,Ie=ue.length;ce<Ie;ce++)j=ue[ce],he?Ce&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,j.width,j.height,re,C,j.data):t.texImage2D(i.TEXTURE_2D,ce,J,j.width,j.height,0,re,C,j.data);x.generateMipmaps=!1}else he?(de&&t.texStorage2D(i.TEXTURE_2D,He,J,V.width,V.height),Ce&&Xe(x,V,re,C)):t.texImage2D(i.TEXTURE_2D,0,J,V.width,V.height,0,re,C,V.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){he&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,J,ue[0].width,ue[0].height,V.depth);for(let ce=0,Ie=ue.length;ce<Ie;ce++)if(j=ue[ce],x.format!==bn)if(re!==null)if(he){if(Ce)if(x.layerUpdates.size>0){let ze=$c(j.width,j.height,x.format,x.type);for(let be of x.layerUpdates){let tt=j.data.subarray(be*ze/j.data.BYTES_PER_ELEMENT,(be+1)*ze/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,be,j.width,j.height,1,re,tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,j.width,j.height,V.depth,re,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,J,j.width,j.height,V.depth,0,j.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,j.width,j.height,V.depth,re,C,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,J,j.width,j.height,V.depth,0,re,C,j.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{he&&de&&t.texStorage2D(i.TEXTURE_2D,He,J,ue[0].width,ue[0].height);for(let ce=0,Ie=ue.length;ce<Ie;ce++)j=ue[ce],x.format!==bn?re!==null?he?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,j.width,j.height,re,j.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,J,j.width,j.height,0,j.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Ce&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,j.width,j.height,re,C,j.data):t.texImage2D(i.TEXTURE_2D,ce,J,j.width,j.height,0,re,C,j.data)}else if(x.isDataArrayTexture)if(he){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,J,V.width,V.height,V.depth),Ce)if(x.layerUpdates.size>0){let ce=$c(V.width,V.height,x.format,x.type);for(let Ie of x.layerUpdates){let ze=V.data.subarray(Ie*ce/V.data.BYTES_PER_ELEMENT,(Ie+1)*ce/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,V.width,V.height,1,re,C,ze)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,re,C,V.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,V.width,V.height,V.depth,0,re,C,V.data);else if(x.isData3DTexture)he?(de&&t.texStorage3D(i.TEXTURE_3D,He,J,V.width,V.height,V.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,re,C,V.data)):t.texImage3D(i.TEXTURE_3D,0,J,V.width,V.height,V.depth,0,re,C,V.data);else if(x.isFramebufferTexture){if(de)if(he)t.texStorage2D(i.TEXTURE_2D,He,J,V.width,V.height);else{let ce=V.width,Ie=V.height;for(let ze=0;ze<He;ze++)t.texImage2D(i.TEXTURE_2D,ze,J,ce,Ie,0,re,C,null),ce>>=1,Ie>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),V.parentNode!==ce){ce.appendChild(V),u.add(x),ce.onpaint=Ie=>{let ze=Ie.changedElements;for(let be of u)ze.includes(be.image)&&(be.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,V);else{let ze=i.RGBA,be=i.RGBA,tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,be,tt,V)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ue.length>0){if(he&&de){let ce=le(ue[0]);t.texStorage2D(i.TEXTURE_2D,He,J,ce.width,ce.height)}for(let ce=0,Ie=ue.length;ce<Ie;ce++)j=ue[ce],he?Ce&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,re,C,j):t.texImage2D(i.TEXTURE_2D,ce,J,re,C,j);x.generateMipmaps=!1}else if(he){if(de){let ce=le(V);t.texStorage2D(i.TEXTURE_2D,He,J,ce.width,ce.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,C,V)}else t.texImage2D(i.TEXTURE_2D,0,J,re,C,V);E(x)&&x.mipmapsAutoUpdate===!0&&_(te),ae.__version=oe.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function At(w,x,F){if(x.image.length!==6)return;let te=Qe(w,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let oe=n.get(Z);if(Z.version!==oe.__version||te===!0){t.activeTexture(i.TEXTURE0+F);let ae=We.getPrimaries(We.workingColorSpace),K=x.colorSpace===ni?null:We.getPrimaries(x.colorSpace),V=x.colorSpace===ni||ae===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let re=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,J=[];for(let be=0;be<6;be++)!re&&!C?J[be]=y(x.image[be],!0,s.maxCubemapSize):J[be]=C?x.image[be].image:x.image[be],J[be]=ne(x,J[be]);let j=J[0],ue=r.convert(x.format,x.colorSpace),he=r.convert(x.type),de=T(x.internalFormat,ue,he,x.normalized,x.colorSpace),Ce=x.isVideoTexture!==!0,He=oe.__version===void 0||te===!0,ce=Z.dataReady,Ie=M(x,j);Je(i.TEXTURE_CUBE_MAP,x);let ze;if(x.isDepthTexture){if(de=f(x.format===ti,x.type),He)if(Ce)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,de,j.width,j.height);else for(let be=0;be<6;be++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,de,j.width,j.height,0,ue,he,null)}else if(re){Ce&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,de,j.width,j.height);for(let be=0;be<6;be++){ze=J[be].mipmaps;for(let tt=0;tt<ze.length;tt++){let It=ze[tt];x.format!==bn?ue!==null?Ce?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt,0,0,It.width,It.height,ue,It.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt,de,It.width,It.height,0,It.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt,0,0,It.width,It.height,ue,he,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt,de,It.width,It.height,0,ue,he,It.data)}}}else{if(ze=x.mipmaps,Ce&&He){ze.length>0&&Ie++;let be=le(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,de,be.width,be.height)}for(let be=0;be<6;be++)if(C){Ce?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,J[be].width,J[be].height,ue,he,J[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,de,J[be].width,J[be].height,0,ue,he,J[be].data);for(let tt=0;tt<ze.length;tt++){let si=ze[tt].image[be].image;Ce?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt+1,0,0,si.width,si.height,ue,he,si.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt+1,de,si.width,si.height,0,ue,he,si.data)}}else{Ce?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ue,he,J[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,de,ue,he,J[be]);for(let tt=0;tt<ze.length;tt++){let It=ze[tt];Ce?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt+1,0,0,ue,he,It.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,tt+1,de,ue,he,It.image[be])}}}E(x)&&x.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),oe.__version=Z.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function it(w,x,F,te,Z,oe){let ae=r.convert(F.format,F.colorSpace),K=r.convert(F.type),V=T(F.internalFormat,ae,K,F.normalized,F.colorSpace),re=n.get(x),C=n.get(F);if(C.__renderTarget=x,!re.__hasExternalTextures){let J=Math.max(1,x.width>>oe),j=Math.max(1,x.height>>oe);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,oe,V,J,j,x.depth,0,ae,K,null):t.texImage2D(Z,oe,V,J,j,0,ae,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),U(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,C.__webglTexture,0,B(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,C.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(w,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let te=x.depthTexture,Z=te&&te.isDepthTexture?te.type:null,oe=f(x.stencilBuffer,Z),ae=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;U(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(x),oe,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(x),oe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,oe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,w)}else{let te=x.textures;for(let Z=0;Z<te.length;Z++){let oe=te[Z],ae=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),V=T(oe.internalFormat,ae,K,oe.normalized,oe.colorSpace);U(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(x),V,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(x),V,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,V,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(w,x,F){let te=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(x.depthTexture);Z.__renderTarget=x;let oe=te?x.depthTexture.image[0]:x.depthTexture.image;(!Z.__webglTexture||oe.width!==x.width||oe.height!==x.height)&&(oe.width=x.width,oe.height=x.height,x.depthTexture.needsUpdate=!0),te?ge(x.depthTexture,0):me(x.depthTexture,0);let ae=Z.__webglTexture,K=B(x),V=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,re=x.depthTexture.format===ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Xn)U(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,V,ae,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,re,V,ae,0);else if(x.depthTexture.format===ti)U(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,V,ae,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,re,V,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(w){let x=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let te=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",Z)};te.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=te}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let te=0;te<6;te++)xt(x.__webglFramebuffer[te],w,te);else w.texture.mipmaps.length>0?xt(x.__webglFramebuffer[0],w,0):xt(x.__webglFramebuffer,w,0);else if(F){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=i.createRenderbuffer(),Tt(x.__webglDepthbuffer[te],w,!1);else{let Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,oe)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Tt(x.__webglDepthbuffer,w,!1);else{let Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(w,x,F){let te=n.get(w);x!==void 0&&it(te.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ht(w)}function Yt(w){let x=w.texture,F=n.get(w),te=n.get(x);w.addEventListener("dispose",H),D(w);let Z=w.textures,oe=w.isWebGLCubeRenderTarget===!0,ae=Z.length>1;if(ae||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,a.memory.textures++),oe){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let V=0;V<x.mipmaps.length;V++)F.__webglFramebuffer[K][V]=i.createFramebuffer()}else F.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)F.__webglFramebuffer[K]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ae)for(let K=0,V=Z.length;K<V;K++){let re=n.get(Z[K]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&U(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let V=Z[K];F.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[K]);let re=r.convert(V.format,V.colorSpace),C=r.convert(V.type),J=T(V.internalFormat,re,C,V.normalized,V.colorSpace,w.isXRRenderTarget===!0),j=B(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,F.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Je(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps.length>0)for(let V=0;V<x.mipmaps.length;V++)it(F.__webglFramebuffer[K][V],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,V);else it(F.__webglFramebuffer[K],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(x)?_(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ae){for(let K=0,V=Z.length;K<V;K++){let re=Z[K],C=n.get(re),J=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,C.__webglTexture),Je(J,re),it(F.__webglFramebuffer,w,re,i.COLOR_ATTACHMENT0+K,J,0),E(re)&&_(J)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,te.__webglTexture),Je(K,x),x.mipmaps.length>0)for(let V=0;V<x.mipmaps.length;V++)it(F.__webglFramebuffer[V],w,x,i.COLOR_ATTACHMENT0,K,V);else it(F.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,K,0);E(x)?_(K):x.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Ht(w)}function L(w){let x=w.textures;for(let F=0,te=x.length;F<te;F++){let Z=x[F];if(E(Z)&&Z.mipmapsAutoUpdate===!0){let oe=S(w),ae=n.get(Z).__webglTexture;t.bindTexture(oe,ae),_(oe),t.unbindTexture()}}}let Ct=[];function at(w){if(w.samples>0){if(U(w)===!1){let x=w.textures,F=w.width,te=w.height,Z=i.COLOR_BUFFER_BIT,oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(w),K=x.length>1;if(K)for(let re=0;re<x.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let re=0;re<x.length;re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);let C=n.get(x[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,F,te,0,0,F,te,Z,i.NEAREST),c===!0&&(Ct.length=0,Ct.push(i.COLOR_ATTACHMENT0+re),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Ct.push(oe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let re=0;re<x.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);let C=n.get(x[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function B(w){return Math.min(s.maxSamples,w.samples)}function U(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function ne(w,x){let F=w.colorSpace,te=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Kt&&F!==ni&&(We.getTransfer(F)===et?(te!==bn||Z!==en)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",F)),x}function le(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Ue,this.resetTextureUnits=ee,this.getTextureUnits=ie,this.setTextureUnits=Se,this.setTexture2D=me,this.setTexture2DArray=Ae,this.setTexture3D=Pe,this.setTextureCube=ge,this.rebindTextures=Wt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=it,this.useMultisampledRTT=U,this.dispose=Y}function Pb(i,e){function t(n,s=ni){let r,a=We.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dc)return i.BYTE;if(n===Uc)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Bc)return i.RGB;if(n===bn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===za)return i.RGBA_INTEGER;if(n===vr||n===Ar||n===_r||n===Sr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Wa||n===qa||n===Xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===ja||n===Ya||n===Ja||n===Za||n===Mr||n===Qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===ja)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ya)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ja)return r.COMPRESSED_R11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Mr)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===co||n===lo||n===ho||n===uo||n===fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bo||n===xo||n===wr||n===yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
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

}`,fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ar(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:Nb,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pl=class extends In{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,b=null,v=typeof XRWebGLBinding<"u",g=new fl,m={},y=t.getContextAttributes(),E=null,_=null,S=[],T=[],f=new Ve,M=null,D=null,R=new _t;R.viewport=new nt;let N=new _t;N.viewport=new nt;let H=[R,N],z=new Pa,I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=S[Q];return me===void 0&&(me=new us,S[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=S[Q];return me===void 0&&(me=new us,S[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=S[Q];return me===void 0&&(me=new us,S[Q]=me),me.getHandSpace()};function $(Q){let me=T.indexOf(Q.inputSource);if(me===-1)return;let Ae=S[me];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,l||a),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",se);for(let Q=0;Q<S.length;Q++){let me=T[Q];me!==null&&(T[Q]=null,S[Q].disconnect(me))}I=null,Y=null,g.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(E),p=null,d=null,u=null,s=null,_=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(f.width,f.height,!1),D!==null){let Q=D.camera;Q.fov=D.fov,Q.zoom=D.zoom,Q.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",q),s.addEventListener("inputsourceschange",se),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(f),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Pe=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=y.stencil?ti:Xn,Pe=y.stencil?ki:Mn);let Ne={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new on(d.textureWidth,d.textureHeight,{format:bn,type:en,depthTexture:new Yn(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new on(p.framebufferWidth,p.framebufferHeight,{format:bn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(Q){for(let me=0;me<Q.removed.length;me++){let Ae=Q.removed[me],Pe=T.indexOf(Ae);Pe>=0&&(T[Pe]=null,S[Pe].disconnect(Ae))}for(let me=0;me<Q.added.length;me++){let Ae=Q.added[me],Pe=T.indexOf(Ae);if(Pe===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=T.length){T.push(Ae),Pe=Ne;break}else if(T[Ne]===null){T[Ne]=Ae,Pe=Ne;break}if(Pe===-1)break}let ge=S[Pe];ge&&ge.connect(Ae)}}function X(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let me=Q.near,Ae=Q.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(Ae=g.depthFar)),z.near=N.near=R.near=me,z.far=N.far=R.far=Ae,(I!==z.near||Y!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,Y=z.far),z.layers.mask=Q.layers.mask|6,R.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let Pe=Q.parent,ge=z.cameras;X(z,Pe);for(let Ne=0;Ne<ge.length;Ne++)X(ge[Ne],Pe);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&Q.isPerspectiveCamera&&(D={camera:Q,fov:Q.fov,zoom:Q.zoom}),ee(Q,z,Pe)};function ee(Q,me,Ae){Ae===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Pi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Q){return m[Q]};let ie=null;function Se(Q,me){if(h=me.getViewerPose(l||a),b=me,h!==null){let Ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Pe=!1;Ae.length!==z.cameras.length&&(z.cameras.length=0,Pe=!0);for(let Le=0;Le<Ae.length;Le++){let Je=Ae[Le],Qe=null;if(p!==null)Qe=p.getViewport(Je);else{let Xe=u.getViewSubImage(d,Je);Qe=Xe.viewport,Le===0&&(e.setRenderTargetTextures(_,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(_))}let Be=H[Le];Be===void 0&&(Be=new _t,Be.layers.enable(Le),Be.viewport=new nt,H[Le]=Be),Be.matrix.fromArray(Je.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Je.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Le===0&&(z.matrix.copy(Be.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Pe===!0&&z.cameras.push(Be)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Le=u.getDepthInformation(Ae[0]);Le&&Le.isValid&&Le.texture&&g.init(Le,s.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Le=0;Le<Ae.length;Le++){let Je=Ae[Le].camera;if(Je){let Qe=m[Je];Qe||(Qe=new ar,m[Je]=Qe);let Be=u.getCameraImage(Je);Qe.sourceTexture=Be}}}}for(let Ae=0;Ae<S.length;Ae++){let Pe=T[Ae],ge=S[Ae];Pe!==null&&ge!==void 0&&ge.update(Pe,me,l||a)}ie&&ie(Q,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),b=null}let Ue=new ld;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(Q){ie=Q},this.dispose=function(){}}},Db=new ke,yd=new Fe;yd.set(-1,0,0,0,1,0,0,0,1);function Ub(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Jc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,E,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),b(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,y,E):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ut&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ut&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),E=y.envMap,_=y.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ut&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function b(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fb(i,e,t,n){let s={},r={};function a(y,E){let _=E.program;n.uniformBlockBinding(y,_,s[y.id])}function o(y,E){let _=s[y.id];_===void 0&&(b(y),_=c(y),s[y.id]=_,y.addEventListener("dispose",g));let S=E.program;n.updateUBOMapping(y,S);let T=e.render.frame;r[y.id]!==T&&(l(y),r[y.id]=T)}function c(y){let E=i.createBuffer(),_=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,_,S),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function l(y){let E=s[y.id],_=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,f=_.length;T<f;T++){let M=_[T];if(Array.isArray(M))for(let D=0,R=M.length;D<R;D++)h(M[D],T,D,S);else h(M,T,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,E,_,S){if(d(y,E,_,S)===!0){let T=y.__offset,f=y.value;if(Array.isArray(f)){let M=0;for(let D=0;D<f.length;D++){let R=f[D],N=v(R,!0);u(R,y.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(f,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function u(y,E,_){typeof y=="number"||typeof y=="boolean"?E[_]=y:y.isMatrix3?(E[_]=y.elements[0],E[_+1]=y.elements[1],E[_+2]=y.elements[2],E[_+3]=0,E[_+4]=y.elements[3],E[_+5]=y.elements[4],E[_+6]=y.elements[5],E[_+7]=0,E[_+8]=y.elements[6],E[_+9]=y.elements[7],E[_+10]=y.elements[8],E[_+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-_),_):y.toArray(E,_)}function d(y,E,_,S){let T=y.value,f=E+"_"+_;if(Array.isArray(T)){S[f]===void 0&&(S[f]=[]);let M=S[f],D=!1;for(let R=0;R<T.length;R++)p(T[R],M,R)===!0&&(D=!0);return D}return p(T,S,f)}function p(y,E,_){if(E[_]===void 0)return typeof y=="number"||typeof y=="boolean"?E[_]=y:ArrayBuffer.isView(y)?E[_]=y.slice():E[_]=y.clone(),!0;{let S=E[_];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return E[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function b(y){let E=y.uniforms,_=0,S=16;for(let f=0,M=E.length;f<M;f++){let D=Array.isArray(E[f])?E[f]:[E[f]];for(let R=0,N=D.length;R<N;R++){let H=D[R],z=Array.isArray(H.value)?H.value:[H.value],I=Array.isArray(E[f])||Array.isArray(H.value),Y=_;for(let q=0,se=z.length;q<se;q++){let X=z[q],ee=v(X,I),ie=_%S,Se=ie%ee.boundary,Ue=ie+Se;_+=Se,Ue!==0&&S-Ue<ee.storage&&(_+=S-Ue),q===0&&(Y=_),_+=ee.storage}let $=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new $((_-Y)/Float32Array.BYTES_PER_ELEMENT),H.__offset=Y}}let T=_%S;return T>0&&(_+=S-T),y.__size=_,y.__cache={},this}function v(y,E){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(y){let E=y.target;E.removeEventListener("dispose",g),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:m}}var Ob=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function kb(){return Un===null&&(Un=new gs(Ob,16,16,bi,wn),Un.name="DFG_LUT",Un.minFilter=St,Un.magFilter=St,Un.wrapS=un,Un.wrapT=un,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var Mo=class{constructor(e={}){let{canvas:t=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=en}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;let v=p,g=new Set([za,Ga,Va]),m=new Set([en,Mn,Cs,ki,Oa,ka]),y=new Uint32Array(4),E=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},S=null,T=null,f=[],M=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,H=null,z=null,I=null,Y=null;this._outputColorSpace=ut;let $=0,q=0,se=null,X=-1,ee=null,ie=new nt,Se=new nt,Ue=null,Q=new Re(0),me=0,Ae=t.width,Pe=t.height,ge=1,Ne=null,ct=null,Le=new nt(0,0,Ae,Pe),Je=new nt(0,0,Ae,Pe),Qe=!1,Be=new mi,Xe=new xa,lt=!1,At=!1,it=new ke,Tt=new O,xt=new nt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Yt(){return se===null?ge:1}let L=n;function Ct(A,P){return t.getContext(A,P)}let at,B,U,ve,ne,le,w,x,F,te,Z,oe,ae,K,V,re,C,J,j,ue,he,de,Ce;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",be,!1),L===null){let P="webgl2";if(L=Ct(P,A),L===null)throw Ct(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(A){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",be,!1),De("WebGLRenderer: "+A.message),A}function He(){at=new Yg(L),at.init(),he=new Pb(L,at),B=new kg(L,at,e,he),U=new Ib(L,at),B.reversedDepthBuffer&&d&&U.buffers.depth.setReversed(!0),z=L.createFramebuffer(),I=L.createFramebuffer(),Y=L.createFramebuffer(),ve=new Qg(L),ne=new mb,le=new Rb(L,at,U,ne,B,he,ve),w=new jg(R),x=new ep(L),de=new Fg(L,x),F=new Jg(L,x,ve,de),te=new e0(L,F,x,de,ve),J=new $g(L,B,le),V=new Bg(ne),Z=new pb(R,w,at,B,de,V),oe=new Ub(R,ne),ae=new bb,K=new Sb(at),C=new Ug(R,w,U,te,b,c),re=new Cb(R,te,B),Ce=new Fb(L,ve,B,U),j=new Og(L,at,ve),ue=new Zg(L,at,ve),ve.programs=Z.programs,R.capabilities=B,R.extensions=at,R.properties=ne,R.renderLists=ae,R.shadowMap=re,R.state=U,R.info=ve}v!==en&&(D=new n0(v,t.width,t.height,o,s,r));let ce=new pl(R,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(A){A!==void 0&&(ge=A,this.setSize(Ae,Pe,!1))},this.getSize=function(A){return A.set(Ae,Pe)},this.setSize=function(A,P,W=!0){if(ce.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=A,Pe=P,t.width=Math.floor(A*ge),t.height=Math.floor(P*ge),W===!0&&(t.style.width=A+"px",t.style.height=P+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,P)},this.getDrawingBufferSize=function(A){return A.set(Ae*ge,Pe*ge).floor()},this.setDrawingBufferSize=function(A,P,W){Ae=A,Pe=P,ge=W,t.width=Math.floor(A*W),t.height=Math.floor(P*W),this.setViewport(0,0,A,P)},this.setEffects=function(A){if(v===en){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let P=0;P<A.length;P++)if(A[P].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ie)},this.getViewport=function(A){return A.copy(Le)},this.setViewport=function(A,P,W,k){A.isVector4?Le.set(A.x,A.y,A.z,A.w):Le.set(A,P,W,k),U.viewport(ie.copy(Le).multiplyScalar(Yt()).round())},this.getScissor=function(A){return A.copy(Je)},this.setScissor=function(A,P,W,k){A.isVector4?Je.set(A.x,A.y,A.z,A.w):Je.set(A,P,W,k),U.scissor(Se.copy(Je).multiplyScalar(Yt()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){U.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){Ne=A},this.setTransparentSort=function(A){ct=A},this.getClearColor=function(A){return A.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(A=!0,P=!0,W=!0){let k=0;if(A){let G=!1;if(se!==null){let pe=se.texture.format;G=g.has(pe)}if(G){let pe=se.texture.type,_e=m.has(pe),fe=C.getClearColor(),ye=C.getClearAlpha(),Ee=fe.r,Oe=fe.g,je=fe.b;_e?(y[0]=Ee,y[1]=Oe,y[2]=je,y[3]=ye,L.clearBufferuiv(L.COLOR,0,y)):(E[0]=Ee,E[1]=Oe,E[2]=je,E[3]=ye,L.clearBufferiv(L.COLOR,0,E))}else k|=L.COLOR_BUFFER_BIT}P&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),H=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",be,!1),C.dispose(),ae.dispose(),K.dispose(),le.dispose(),ne.dispose(),w.dispose(),te.dispose(),F.dispose(),de.dispose(),Ce.dispose(),Z.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ih),ce.removeEventListener("sessionend",sh),Ai.stop()};function Ie(A){A.preventDefault(),Ks("WebGLRenderer: Context Lost."),N=!0}function ze(){Ks("WebGLRenderer: Context Restored."),N=!1;let A=ve.autoReset,P=re.enabled,W=re.autoUpdate,k=re.needsUpdate,G=re.type;He(),ve.autoReset=A,re.enabled=P,re.autoUpdate=W,re.needsUpdate=k,re.type=G}function be(A){De("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tt(A){let P=A.target;P.removeEventListener("dispose",tt),It(P)}function It(A){si(A),ne.remove(A)}function si(A){let P=ne.get(A).programs;P!==void 0&&(P.forEach(function(W){Z.releaseProgram(W)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,P,W,k,G,pe){P===null&&(P=Ht);let _e=G.isMesh&&G.matrixWorld.determinantAffine()<0,fe=Kd(A,P,W,k,G);U.setMaterial(k,_e);let ye=W.index,Ee=1;if(k.wireframe===!0){if(ye=F.getWireframeAttribute(W),ye===void 0)return;Ee=2}let Oe=W.drawRange,je=W.attributes.position,Me=Oe.start*Ee,Ye=(Oe.start+Oe.count)*Ee;pe!==null&&(Me=Math.max(Me,pe.start*Ee),Ye=Math.min(Ye,(pe.start+pe.count)*Ee)),ye!==null?(Me=Math.max(Me,0),Ye=Math.min(Ye,ye.count)):je!=null&&(Me=Math.max(Me,0),Ye=Math.min(Ye,je.count));let yt=Ye-Me;if(yt<0||yt===1/0)return;de.setup(G,k,fe,W,ye);let ot,st=j;if(ye!==null&&(ot=x.get(ye),st=ue,st.setIndex(ot)),G.isMesh)k.wireframe===!0?(U.setLineWidth(k.wireframeLinewidth*Yt()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(G.isLine){let Ft=k.linewidth;Ft===void 0&&(Ft=1),U.setLineWidth(Ft*Yt()),G.isLineSegments?st.setMode(L.LINES):G.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else G.isPoints?st.setMode(L.POINTS):G.isSprite&&st.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(at.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ft=G._multiDrawStarts,we=G._multiDrawCounts,qt=G._multiDrawCount,$e=ye?x.get(ye).bytesPerElement:1,_i=ne.get(k).currentProgram.getUniforms();for(let Ot=0;Ot<qt;Ot++)_i.setValue(L,"_gl_DrawID",Ot),st.render(Ft[Ot]/$e,we[Ot])}else if(G.isInstancedMesh)st.renderInstances(Me,yt,G.count);else if(W.isInstancedBufferGeometry){let Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,we=Math.min(W.instanceCount,Ft);st.renderInstances(Me,yt,we)}else st.render(Me,yt)};function nh(A,P,W,k){H!==null&&A.isNodeMaterial&&H.setObject(k,A),lt===!0&&V.setState(A,W,!1),A.transparent===!0&&A.side===jt&&A.forceSinglePass===!1?(A.side=Ut,A.needsUpdate=!0,Ds(A,P,k),A.side=mn,A.needsUpdate=!0,Ds(A,P,k),A.side=jt):Ds(A,P,k)}this.compile=function(A,P,W=null){W===null&&(W=A),H!==null&&H.renderStart(A,P,W),T=K.get(W),T.init(P),M.push(T),W.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),A!==W&&A.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),At=this.localClippingEnabled,lt=V.init(this.clippingPlanes,At),lt===!0&&V.setGlobalState(this.clippingPlanes,P),H!==null&&re.render(T.state.shadowsArray,W,P);let k=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pe=G.material;if(pe)if(Array.isArray(pe))for(let _e=0;_e<pe.length;_e++){let fe=pe[_e];nh(fe,W,P,G),k.add(fe)}else nh(pe,W,P,G),k.add(pe)}),T=M.pop(),H!==null&&H.renderEnd(),k},this.compileAsync=function(A,P,W=null){let k=this.compile(A,P,W);return new Promise(G=>{function pe(){if(k.forEach(function(_e){let ye=ne.get(_e).currentProgram;(ye===void 0||ye.isReady())&&k.delete(_e)}),k.size===0){G(A);return}setTimeout(pe,10)}at.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Uo=null;function qd(A){Uo&&Uo(A)}function ih(){Ai.stop()}function sh(){Ai.start()}let Ai=new ld;Ai.setAnimationLoop(qd),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(A){Uo=A,ce.setAnimationLoop(A),A===null?Ai.stop():Ai.start()},ce.addEventListener("sessionstart",ih),ce.addEventListener("sessionend",sh),this.render=function(A,P){if(P!==void 0&&P.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;H!==null&&H.renderStart(A,P);let W=ce.enabled===!0&&ce.isPresenting===!0,k=D!==null&&(se===null||W)&&D.begin(R,se);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(P),P=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,P,se),T=K.get(A,M.length),T.init(P),T.state.textureUnits=le.getTextureUnits(),M.push(T),it.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Xe.setFromArrayCamera(P):Be.setFromProjectionMatrix(it,dn,P.reversedDepth),At=this.localClippingEnabled,lt=V.init(this.clippingPlanes,At),S=ae.get(A,f.length),S.init(),f.push(S),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let _e=R.xr.getDepthSensingMesh();_e!==null&&Fo(_e,P,-1/0,R.sortObjects)}Fo(A,P,0,R.sortObjects),S.finish(),H!==null&&H.updateLights(T.state.lightsArray),R.sortObjects===!0&&S.sort(Ne,ct),Wt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Wt&&C.addToRenderList(S,A),this.info.autoReset===!0&&this.info.reset(),lt===!0&&V.beginShadows();let G=T.state.shadowsArray;if(re.render(G,A,P),lt===!0&&V.endShadows(),(k&&D.hasRenderPass())===!1){let _e=S.opaque,fe=S.transmissive;if(T.setupLights(),P.isArrayCamera){let ye=P.cameras;if(fe.length>0)for(let Ee=0,Oe=ye.length;Ee<Oe;Ee++){let je=ye[Ee];ah(_e,fe,A,je)}Wt&&C.render(A);for(let Ee=0,Oe=ye.length;Ee<Oe;Ee++){let je=ye[Ee];rh(S,A,je,je.viewport)}}else fe.length>0&&ah(_e,fe,A,P),Wt&&C.render(A),rh(S,A,P)}se!==null&&q===0&&(le.updateMultisampleRenderTarget(se),le.updateRenderTargetMipmap(se)),k&&D.end(R),A.isScene===!0&&A.onAfterRender(R,A,P),de.resetDefaultState(),X=-1,ee=null,M.pop(),M.length>0?(T=M[M.length-1],le.setTextureUnits(T.state.textureUnits),lt===!0&&V.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,f.pop(),f.length>0?S=f[f.length-1]:S=null,H!==null&&H.renderEnd()};function Fo(A,P,W,k){if(A.visible===!1)return;if(A.layers.test(P.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(P);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){let _e=P.isArrayCamera?Xe:Be;if(!A.frustumCulled||A.intersectsFrustum(_e)){k&&xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(it);let fe=te.update(A),ye=A.material;ye.visible&&S.push(A,fe,ye,W,xt.z,null,P)}}else if(A.isMesh||A.isLine||A.isPoints){let _e=P.isArrayCamera?Xe:Be;if(!A.frustumCulled||A.intersectsFrustum(_e)){let fe=te.update(A),ye=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xt.copy(A.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),xt.copy(fe.boundingSphere.center)),xt.applyMatrix4(A.matrixWorld).applyMatrix4(it)),Array.isArray(ye)){let Ee=fe.groups;for(let Oe=0,je=Ee.length;Oe<je;Oe++){let Me=Ee[Oe],Ye=ye[Me.materialIndex];Ye&&Ye.visible&&S.push(A,fe,Ye,W,xt.z,Me,P)}}else ye.visible&&S.push(A,fe,ye,W,xt.z,null,P)}}}let pe=A.children;for(let _e=0,fe=pe.length;_e<fe;_e++)Fo(pe[_e],P,W,k)}function rh(A,P,W,k){let{opaque:G,transmissive:pe,transparent:_e}=A;T.setupLightsView(W),lt===!0&&V.setGlobalState(R.clippingPlanes,W),k&&U.viewport(ie.copy(k)),G.length>0&&Lr(G,P,W),pe.length>0&&Lr(pe,P,W),_e.length>0&&Lr(_e,P,W),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function ah(A,P,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Me=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new on(1,1,{generateMipmaps:!0,type:Me?wn:en,minFilter:gn,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let pe=T.state.transmissionRenderTarget[k.id],_e=k.viewport||ie;pe.setSize(_e.z*R.transmissionResolutionScale,_e.w*R.transmissionResolutionScale);let fe=R.getRenderTarget(),ye=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(pe),R.getClearColor(Q),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),Wt&&C.render(W);let Oe=R.toneMapping;R.toneMapping=Ln;let je=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),lt===!0&&V.setGlobalState(R.clippingPlanes,k),Lr(A,W,k),le.updateMultisampleRenderTarget(pe),le.updateRenderTargetMipmap(pe),at.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Ye=0,yt=P.length;Ye<yt;Ye++){let ot=P[Ye],{object:st,geometry:Ft,material:we,group:qt}=ot;if(we.side===jt&&st.layers.test(k.layers)){let $e=we.side;we.side=Ut,we.needsUpdate=!0,oh(st,W,k,Ft,we,qt),we.side=$e,we.needsUpdate=!0,Me=!0}}Me===!0&&(le.updateMultisampleRenderTarget(pe),le.updateRenderTargetMipmap(pe))}R.setRenderTarget(fe,ye,Ee),R.setClearColor(Q,me),je!==void 0&&(k.viewport=je),R.toneMapping=Oe}function Lr(A,P,W){let k=P.isScene===!0?P.overrideMaterial:null;for(let G=0,pe=A.length;G<pe;G++){let _e=A[G],{object:fe,geometry:ye,group:Ee}=_e,Oe=_e.material;Oe.allowOverride===!0&&k!==null&&(Oe=k),fe.layers.test(W.layers)&&oh(fe,P,W,ye,Oe,Ee)}}function oh(A,P,W,k,G,pe){H!==null&&G.isNodeMaterial&&H.setObject(A,G),A.onBeforeRender(R,P,W,k,G,pe),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(R,P,W,k,A,pe),G.transparent===!0&&G.side===jt&&G.forceSinglePass===!1?(G.side=Ut,G.needsUpdate=!0,R.renderBufferDirect(W,P,k,G,A,pe),G.side=mn,G.needsUpdate=!0,R.renderBufferDirect(W,P,k,G,A,pe),G.side=jt):R.renderBufferDirect(W,P,k,G,A,pe),A.onAfterRender(R,P,W,k,G,pe)}function ch(A){let P=0;for(let W of A)W.texture!==null&&P++;return P}function Ds(A,P,W){P.isScene!==!0&&(P=Ht);let k=ne.get(A),G=T.state.lights,pe=T.state.shadowsArray,_e=G.state.version,fe=Z.getParameters(A,G.state,pe,P,W,T.state.lightProbeGridArray),ye=Z.getProgramCacheKey(fe),Ee=k.programs;k.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?P.environment:null,k.fog=P.fog;let Oe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;k.envMap=w.get(A.envMap||k.environment,Oe),k.envMapRotation=k.environment!==null&&A.envMap===null?P.environmentRotation:A.envMapRotation,Ee===void 0&&(A.addEventListener("dispose",tt),Ee=new Map,k.programs=Ee,k.programVariants=new Map);let je=Ee.get(ye);if(je!==void 0){if(k.currentProgram===je&&k.lightsStateVersion===_e)return hh(A,fe),je}else fe.uniforms=Z.getUniforms(A),H!==null&&A.isNodeMaterial&&H.build(A,W,fe),A.onBeforeCompile(fe,R),je=Z.acquireProgram(fe,ye),Ee.set(ye,je),k.uniforms=fe.uniforms;let Me=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Me.clippingPlanes=V.uniform),hh(A,fe),k.needsLights=Yd(A),k.lightsStateVersion=_e,k.needsLights&&(Me.ambientLightColor.value=G.state.ambient,Me.lightProbe.value=G.state.probe,Me.sunLights.value=G.state.sun,Me.sunLightShadows.value=G.state.sunShadow,Me.directionalLights.value=G.state.directional,Me.directionalLightShadows.value=G.state.directionalShadow,Me.spotLights.value=G.state.spot,Me.spotLightShadows.value=G.state.spotShadow,Me.rectAreaLights.value=G.state.rectArea,Me.ltc_1.value=G.state.rectAreaLTC1,Me.ltc_2.value=G.state.rectAreaLTC2,Me.pointLights.value=G.state.point,Me.pointLightShadows.value=G.state.pointShadow,Me.hemisphereLights.value=G.state.hemi,Me.sunShadowMatrix.value=G.state.sunShadowMatrix,Me.sunShadowCascade.value=G.state.sunShadowCascade,Me.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Me.spotLightMatrix.value=G.state.spotLightMatrix,Me.spotLightMap.value=G.state.spotLightMap,Me.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=ch(T.state.lightProbeGridArray),k.currentProgram=je,k.uniformsList=null,je}function Xd(A,P,W,k,G){let pe=ne.get(A),_e=pe.currentProgram.id+","+k+","+G,fe=pe.programVariants.get(_e);return fe===void 0?(fe=Ds(A,P,W),pe.programVariants.set(_e,fe)):(pe.currentProgram=fe,pe.uniformsList=null,pe.outputColorSpace=k,pe.toneMapping=G),fe}function lh(A){if(A.uniformsList===null){let P=A.currentProgram.getUniforms();A.uniformsList=Rs.seqWithValue(P.seq,A.uniforms)}return A.uniformsList}function hh(A,P){let W=ne.get(A);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function Kd(A,P,W,k,G){P.isScene!==!0&&(P=Ht),le.resetTextureUnits();let pe=P.fog,_e=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?P.environment:null,fe=se===null?R.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:We.workingColorSpace,ye=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ee=w.get(k.envMap||_e,ye),Oe=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,je=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!W.morphAttributes.position,Ye=!!W.morphAttributes.normal,yt=!!W.morphAttributes.color,ot=Ln;k.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ot=R.toneMapping);let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ft=st!==void 0?st.length:0,we=ne.get(k),qt=T.state.lights;if(lt===!0&&(At===!0||A!==ee)){let ht=A===ee&&k.id===X;V.setState(k,A,ht)}let $e=!1,_i=!1;k.version===we.__version?we.needsLights&&we.lightsStateVersion!==qt.state.version||G.isBatchedMesh&&we.batching===!1||!G.isBatchedMesh&&we.batching===!0||G.isBatchedMesh&&we.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&we.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&we.instancing===!1||!G.isInstancedMesh&&we.instancing===!0||G.isSkinnedMesh&&we.skinning===!1||!G.isSkinnedMesh&&we.skinning===!0||G.isInstancedMesh&&we.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&we.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&we.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&we.instancingMorph===!1&&G.morphTexture!==null||we.envMap!==Ee||k.fog===!0&&we.fog!==pe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==V.numPlanes||we.numIntersection!==V.numIntersection)||we.vertexAlphas!==Oe||we.vertexTangents!==je||we.morphTargets!==Me||we.morphNormals!==Ye||we.morphColors!==yt||we.morphTargetsCount!==Ft||we.numLightProbeGrids!==ch(T.state.lightProbeGridArray)?$e=!0:(we.outputColorSpace!==fe||we.toneMapping!==ot)&&(_i=!0):($e=!0,we.__version=k.version);let Ot=we.currentProgram;($e===!0||_i===!0)&&(Ot=_i===!0?Xd(k,P,G,fe,ot):Ds(k,P,G),H&&k.isNodeMaterial&&H.onUpdateProgram(k,Ot,we));let Dr=!1,ri=!1,Si=!1,Ze=Ot.getUniforms(),Lt=we.uniforms;if(U.useProgram(Ot.program)&&(Dr=!0,ri=!0,Si=!0),k.id!==X&&(X=k.id,ri=!0),Dr||ee!==A){U.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ze.setValue(L,"projectionMatrix",A.projectionMatrix),Ze.setValue(L,"viewMatrix",A.matrixWorldInverse);let Rt=Ze.map.cameraPosition;Rt!==void 0&&Rt.setValue(L,Tt.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&Ze.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ze.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),ee!==A&&(ee=A,ri=!0,Si=!0)}if(we.needsLights&&(qt.state.sunShadowMap.length>0&&Ze.setValue(L,"sunShadowMap",qt.state.sunShadowMap,le),qt.state.directionalShadowMap.length>0&&Ze.setValue(L,"directionalShadowMap",qt.state.directionalShadowMap,le),qt.state.spotShadowMap.length>0&&Ze.setValue(L,"spotShadowMap",qt.state.spotShadowMap,le),qt.state.pointShadowMap.length>0&&Ze.setValue(L,"pointShadowMap",qt.state.pointShadowMap,le)),G.isSkinnedMesh){Ze.setOptional(L,G,"bindMatrix"),Ze.setOptional(L,G,"bindMatrixInverse");let ht=G.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),Ze.setValue(L,"boneTexture",ht.boneTexture,le))}G.isBatchedMesh&&(Ze.setOptional(L,G,"batchingTexture"),Ze.setValue(L,"batchingTexture",G._matricesTexture,le),Ze.setOptional(L,G,"batchingIdTexture"),Ze.setValue(L,"batchingIdTexture",G._indirectTexture,le),Ze.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Ze.setValue(L,"batchingColorTexture",G._colorsTexture,le));let yn=W.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&J.update(G,W,Ot),(ri||we.receiveShadow!==G.receiveShadow)&&(we.receiveShadow=G.receiveShadow,Ze.setValue(L,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&P.environment!==null&&(Lt.envMapIntensity.value=P.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=kb()),ri){if(Ze.setValue(L,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&jd(Lt,Si),pe&&k.fog===!0&&oe.refreshFogUniforms(Lt,pe),oe.refreshMaterialUniforms(Lt,k,ge,Pe,T.state.transmissionRenderTarget[A.id]),we.needsLights&&we.numLightProbeGrids>0){let ht=_,Rt=0;for(let kn of T.state.lightProbeGridArray)kn.texture!==null&&(ht.textures[Rt]=kn.texture,ht.min[Rt]=kn.boundingBox.min,ht.max[Rt]=kn.boundingBox.max,ht.resolution[Rt]=kn.resolution,Rt++);for(let kn in ht)ht[kn].length=Rt;Lt.probesSH.value=ht.textures,Lt.probesMin.value=ht.min,Lt.probesMax.value=ht.max,Lt.probesResolution.value=ht.resolution}Rs.upload(L,lh(we),Lt,le)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Rs.upload(L,lh(we),Lt,le),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ze.setValue(L,"center",G.center),Ze.setValue(L,"modelViewMatrix",G.modelViewMatrix),Ze.setValue(L,"normalMatrix",G.normalMatrix),Ze.setValue(L,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let ht=k.uniformsGroups;for(let Rt=0,kn=ht.length;Rt<kn;Rt++){let dh=ht[Rt];Ce.update(dh,Ot),Ce.bind(dh,Ot)}}return Ot}function jd(A,P){A.ambientLightColor.needsUpdate=P,A.lightProbe.needsUpdate=P,A.sunLights.needsUpdate=P,A.sunLightShadows.needsUpdate=P,A.directionalLights.needsUpdate=P,A.directionalLightShadows.needsUpdate=P,A.pointLights.needsUpdate=P,A.pointLightShadows.needsUpdate=P,A.spotLights.needsUpdate=P,A.spotLightShadows.needsUpdate=P,A.rectAreaLights.needsUpdate=P,A.hemisphereLights.needsUpdate=P}function Yd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(A,P,W){let k=ne.get(A);k.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ne.get(A.texture).__webglTexture=P,ne.get(A.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,P){let W=ne.get(A);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(A,P=0,W=0){se=A,$=P,q=W;let k=null,G=!1,pe=!1;if(A){let fe=ne.get(A);if(fe.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),ie.copy(A.viewport),Se.copy(A.scissor),Ue=A.scissorTest,U.viewport(ie),U.scissor(Se),U.setScissorTest(Ue),X=-1;return}else if(fe.__webglFramebuffer===void 0)le.setupRenderTarget(A);else if(fe.__hasExternalTextures)le.rebindTextures(A,ne.get(A.texture).__webglTexture,ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Oe=A.depthTexture;if(fe.__boundDepthTexture!==Oe){if(Oe!==null&&ne.has(Oe)&&(A.width!==Oe.image.width||A.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(A)}}let ye=A.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);let Ee=ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ee[P])?k=Ee[P][W]:k=Ee[P],G=!0):A.samples>0&&le.useMultisampledRTT(A)===!1?k=ne.get(A).__webglMultisampledFramebuffer:Array.isArray(Ee)?k=Ee[W]:k=Ee,ie.copy(A.viewport),Se.copy(A.scissor),Ue=A.scissorTest}else ie.copy(Le).multiplyScalar(ge).floor(),Se.copy(Je).multiplyScalar(ge).floor(),Ue=Qe;if(W!==0&&(k=z),U.bindFramebuffer(L.FRAMEBUFFER,k)&&U.drawBuffers(A,k),U.viewport(ie),U.scissor(Se),U.setScissorTest(Ue),G){let fe=ne.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,fe.__webglTexture,W)}else if(pe){let fe=P;for(let ye=0;ye<A.textures.length;ye++){let Ee=ne.get(A.textures[ye]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ye,Ee.__webglTexture,W,fe)}}else if(A!==null&&W!==0){let fe=ne.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,W)}X=-1};function uh(A){let P=ne.get(A);return(P.__readFormat!==A.format||P.__readType!==A.type)&&(P.__readFormat=A.format,P.__readType=A.type,P.__formatReadable=B.textureFormatReadable(A.format),P.__typeReadable=B.textureTypeReadable(A.type)),P}this.readRenderTargetPixels=function(A,P,W,k,G,pe,_e,fe=0){if(!(A&&A.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e],Array.isArray(ye)&&(ye=ye[0])),ye){U.bindFramebuffer(L.FRAMEBUFFER,ye);try{let Ee=A.textures[fe],Oe=Ee.format,je=Ee.type;A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe);let Me=uh(Ee);if(Me.__formatReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=A.width-k&&W>=0&&W<=A.height-G&&L.readPixels(P,W,k,G,he.convert(Oe),he.convert(je),pe)}finally{let Ee=se!==null?ne.get(se).__webglFramebuffer:null;U.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(A,P,W,k,G,pe,_e,fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e],Array.isArray(ye)&&(ye=ye[0])),ye)if(P>=0&&P<=A.width-k&&W>=0&&W<=A.height-G){U.bindFramebuffer(L.FRAMEBUFFER,ye);let Ee=A.textures[fe],Oe=Ee.format,je=Ee.type;A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe);let Me=uh(Ee);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ye),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),L.readPixels(P,W,k,G,he.convert(Oe),he.convert(je),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let yt=se!==null?ne.get(se).__webglFramebuffer:null;U.bindFramebuffer(L.FRAMEBUFFER,yt);let ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Fu(L,ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ye),L.deleteSync(ot),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,P=null,W=0){let k=Math.pow(2,-W),G=Math.floor(A.image.width*k),pe=Math.floor(A.image.height*k),_e=P!==null?P.x:0,fe=P!==null?P.y:0;le.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,_e,fe,G,pe),U.unbindTexture()},this.copyTextureToTexture=function(A,P,W=null,k=null,G=0,pe=0){let _e,fe,ye,Ee,Oe,je,Me,Ye,yt,ot=A.isCompressedTexture?A.mipmaps[pe]:A.image;if(W!==null)_e=W.max.x-W.min.x,fe=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,Ee=W.min.x,Oe=W.min.y,je=W.isBox3?W.min.z:0;else{let Ze=Math.pow(2,-G);_e=Math.floor(ot.width*Ze),fe=Math.floor(ot.height*Ze),A.isDataArrayTexture?ye=ot.depth:A.isData3DTexture?ye=Math.floor(ot.depth*Ze):ye=1,Ee=0,Oe=0,je=0}k!==null?(Me=k.x,Ye=k.y,yt=k.z):(Me=0,Ye=0,yt=0);let st=he.convert(P.format),Ft=he.convert(P.type),we;P.isData3DTexture?(le.setTexture3D(P,0),we=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(le.setTexture2DArray(P,0),we=L.TEXTURE_2D_ARRAY):(le.setTexture2D(P,0),we=L.TEXTURE_2D),U.activeTexture(L.TEXTURE0),U.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),U.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),U.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);let qt=U.getParameter(L.UNPACK_ROW_LENGTH),$e=U.getParameter(L.UNPACK_IMAGE_HEIGHT),_i=U.getParameter(L.UNPACK_SKIP_PIXELS),Ot=U.getParameter(L.UNPACK_SKIP_ROWS),Dr=U.getParameter(L.UNPACK_SKIP_IMAGES);U.pixelStorei(L.UNPACK_ROW_LENGTH,ot.width),U.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot.height),U.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),U.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),U.pixelStorei(L.UNPACK_SKIP_IMAGES,je);let ri=A.isDataArrayTexture||A.isData3DTexture,Si=P.isDataArrayTexture||P.isData3DTexture;if(A.isDepthTexture){let Ze=ne.get(A),Lt=ne.get(P),yn=ne.get(Ze.__renderTarget),ht=ne.get(Lt.__renderTarget);U.bindFramebuffer(L.READ_FRAMEBUFFER,yn.__webglFramebuffer),U.bindFramebuffer(L.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Rt=0;Rt<ye;Rt++)ri&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ne.get(A).__webglTexture,G,je+Rt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ne.get(P).__webglTexture,pe,yt+Rt)),L.blitFramebuffer(Ee,Oe,Ee+_e,Oe+fe,Me,Ye,Me+_e,Ye+fe,L.DEPTH_BUFFER_BIT,L.NEAREST);U.bindFramebuffer(L.READ_FRAMEBUFFER,null),U.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||ne.has(A)){let Ze=ne.get(A),Lt=ne.get(P);U.bindFramebuffer(L.READ_FRAMEBUFFER,I),U.bindFramebuffer(L.DRAW_FRAMEBUFFER,Y);for(let yn=0;yn<ye;yn++)ri?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ze.__webglTexture,G,je+yn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ze.__webglTexture,G),Si?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,pe,yt+yn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Lt.__webglTexture,pe),G!==0?L.blitFramebuffer(Ee,Oe,Ee+_e,Oe+fe,Me,Ye,Me+_e,Ye+fe,L.COLOR_BUFFER_BIT,L.NEAREST):Si?L.copyTexSubImage3D(we,pe,Me,Ye,yt+yn,Ee,Oe,_e,fe):L.copyTexSubImage2D(we,pe,Me,Ye,Ee,Oe,_e,fe);U.bindFramebuffer(L.READ_FRAMEBUFFER,null),U.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Si?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(we,pe,Me,Ye,yt,_e,fe,ye,st,Ft,ot.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(we,pe,Me,Ye,yt,_e,fe,ye,st,ot.data):L.texSubImage3D(we,pe,Me,Ye,yt,_e,fe,ye,st,Ft,ot):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,Me,Ye,_e,fe,st,Ft,ot.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,Me,Ye,ot.width,ot.height,st,ot.data):L.texSubImage2D(L.TEXTURE_2D,pe,Me,Ye,_e,fe,st,Ft,ot);U.pixelStorei(L.UNPACK_ROW_LENGTH,qt),U.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e),U.pixelStorei(L.UNPACK_SKIP_PIXELS,_i),U.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),U.pixelStorei(L.UNPACK_SKIP_IMAGES,Dr),pe===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&L.generateMipmap(we),U.unbindTexture()},this.initRenderTarget=function(A){ne.get(A).__webglFramebuffer===void 0&&le.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?le.setTextureCube(A,0):A.isData3DTexture?le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?le.setTexture2DArray(A,0):le.setTexture2D(A,0),U.unbindTexture()},this.resetState=function(){$=0,q=0,se=null,U.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};function ml(i,e){if(e===Vc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Is||e===Er){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Is)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function vd(i){let e=new Map,t=new Map,n=i.clone();return Ad(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ad(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ad(i.children[n],e.children[n],t)}var To=class extends Pn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _l(t)}),this.register(function(t){return new Sl(t)}),this.register(function(t){return new Ml(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new El(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Al(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new wl(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new yl(t)}),this.register(function(t){return new Co(t,qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Co(t,qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Fl(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ei.extractUrlBase(e);a=ei.resolveURL(l,this.path)}else a=ei.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new vs(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ed){try{a[qe.KHR_BINARY_GLTF]=new Ol(e)}catch(u){s&&s(u);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Wl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:a[u]=new vl;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new kl(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[u]=new Bl;break;case qe.KHR_MESH_QUANTIZATION:a[u]=new Vl;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Vb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function ft(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},yl=class{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Kt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Nn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new mr(h),l.distance=u;break;case"spot":l=new pr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),On(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},vl=class{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ut))}return Promise.all(s)}},Al=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},_l=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(r,r)}return Promise.all(s)}},Sl=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Ml=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},wl=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},El=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Kt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ut)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Tl=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Cl=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(r[0],r[1],r[2],Kt),Promise.all(s)}},Il=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Rl=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(r[0],r[1],r[2],Kt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ut)),Promise.all(s)}},Pl=class{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Nl=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ft(this.parser,e,this.name)!==null?gt:null}extendMaterialParams(e,t){let n=ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ll=class{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Dl=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Ul=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Co=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}},Fl=class{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let b of u){let v=new ke,g=new O,m=new an,y=new O(1,1,1),E=new $s(b.geometry,b.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,S),c.SCALE&&y.fromBufferAttribute(c.SCALE,S),E.setMatrixAt(S,v.compose(g,m,y));let _=null;for(let S in c)if(S==="_COLOR_0"){let T=c[S];E.instanceColor=new jn(T.array,T.itemSize,T.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(_===null){let f=E.geometry;_=new Gt,_.name=f.name;for(let M in f.attributes)_.setAttribute(M,f.attributes[M]);for(let M in f.morphAttributes)_.morphAttributes[M]=f.morphAttributes[M];f.index!==null&&_.setIndex(f.index),_.morphTargetsRelative=f.morphTargetsRelative;for(let M of f.groups)_.addGroup(M.start,M.count,M.materialIndex);f.boundingBox!==null&&(_.boundingBox=f.boundingBox.clone()),f.boundingSphere!==null&&(_.boundingSphere=f.boundingSphere.clone()),_.drawRange.start=f.drawRange.start,_.drawRange.count=f.drawRange.count,_.userData=Object.assign({},f.userData),E.geometry=_}let T=c[S];_.setAttribute(S,new jn(T.array,T.itemSize,T.normalized))}dt.prototype.copy.call(E,b),this.parser.assignFinalMaterial(E),p.push(E)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Ed="glTF",Pr=12,_d={JSON:1313821514,BIN:5130562},Ol=class{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ed)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Pr,r=new DataView(e,Pr),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===_d.JSON){let l=new Uint8Array(e,Pr+a,o);this.content=n.decode(l)}else if(c===_d.BIN){let l=Pr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},kl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=zl[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=zl[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Ls[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(let b in p.attributes){let v=p.attributes[b],g=c[b];g!==void 0&&(v.normalized=g)}u(p)},o,l,Kt,d)})})}},Bl=class{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Vl=class{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}},Io=class extends Rn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,p=d*u,b=e*l,v=b-l,g=-2*p+3*d,m=p-d,y=1-g,E=m-d+u;for(let _=0;_!==o;_++){let S=a[v+_+o],T=a[v+_+c]*h,f=a[b+_+o],M=a[b+_]*h;r[_]=y*S+E*T+g*f+m*M}return r}},Gb=new an,Gl=class extends Io{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Gb.fromArray(r).normalize().toArray(r),r}},xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sd={9728:mt,9729:St,9984:Ua,9985:Ts,9986:Oi,9987:gn},Md={33071:un,33648:rs,10497:fi},gl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zb={CUBICSPLINE:void 0,LINEAR:Ri,STEP:Ii},bl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new pn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mn})),i.DefaultMaterial}function Vi(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Wb(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function qb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xb(i){let e,t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xl(t.attributes):e=i.indices+":"+xl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+xl(i.targets[n]);return e}function xl(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Hl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var jb=new ke,Wl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new dr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new gr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vs(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Vi(r,o,s),On(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ei.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=gl[s.type],o=Ls[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Dt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=gl[s.type],l=Ls[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,b=s.normalized===!0,v,g;if(p&&p!==u){let m=Math.floor(d/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,E=t.cache.get(y);E||(v=new l(o,m*p,s.count*p/h),E=new fs(v,p/h),t.cache.add(y,E)),g=new ps(E,c,d%p/h,b)}else o===null?v=new l(s.count*c):v=new l(o,d,s.count*c),g=new Dt(v,c,b);if(s.sparse!==void 0){let m=gl.SCALAR,y=Ls[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,S=new y(a[1],E,s.sparse.count*m),T=new l(a[2],_,s.sparse.count*c);o!==null&&(g=new Dt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let f=0,M=S.length;f<M;f++){let D=S[f];if(g.setX(D,T[f*c]),c>=2&&g.setY(D,T[f*c+1]),c>=3&&g.setZ(D,T[f*c+2]),c>=4&&g.setW(D,T[f*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=b}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Sd[d.magFilter]||St,h.minFilter=Sd[d.minFilter]||gn,h.wrapS=Md[d.wrapS]||fi,h.wrapT=Md[d.wrapT]||fi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==mt&&h.minFilter!==St,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(p,b){t.parse(d,p,b)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let p=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(p),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(p,b){let v=p;t.isImageBitmapLoader===!0&&(v=function(g){let m=new Mt(g);m.needsUpdate=!0,p(m)}),t.load(ei.resolveURL(d,r.path),v,void 0,b)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),On(d,a),d.userData.mimeType=a.mimeType||Kb(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new xs,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new bs,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return pn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){let u=s[qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Kt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,ut)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=jt);let h=r.alphaMode||bl.OPAQUE;if(h===bl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===bl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qt){let u=r.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],Kt)}return r.emissiveTexture!==void 0&&a!==Qt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ut)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),On(u,r),t.associations.set(u,{materials:e}),r.extensions&&Vi(s,u,r),u})}createUniqueName(e){let t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return wd(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Xb(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=wd(new Gt,l,t),l.mode===xn.TRIANGLE_STRIP?d=d.then(p=>ml(p,Er)):l.mode===xn.TRIANGLE_FAN&&(d=d.then(p=>ml(p,Is))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Hb(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,b=h.length;p<b;p++){let v=h[p],g=a[p],m,y=l[p];if(g.mode===xn.TRIANGLES||g.mode===xn.TRIANGLE_STRIP||g.mode===xn.TRIANGLE_FAN||g.mode===void 0){let E=r.isSkinnedMesh===!0,_=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");E&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=E&&_?new Zs(v,y):new Nt(v,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===xn.LINES)m=new er(v,y);else if(g.mode===xn.LINE_STRIP)m=new Ni(v,y);else if(g.mode===xn.LINE_LOOP)m=new tr(v,y);else if(g.mode===xn.POINTS)m=new nr(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&qb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),On(m,r),g.extensions&&Vi(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let p=0,b=u.length;p<b;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Vi(s,u[0],r),u[0];let d=new Sn;r.extensions&&Vi(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,b=u.length;p<b;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _t(xi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Li(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new ke;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Qs(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let p=s.channels[u],b=s.samplers[p.sampler],v=p.target,g=v.node,m=s.parameters!==void 0?s.parameters[b.input]:b.input,y=s.parameters!==void 0?s.parameters[b.output]:b.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",y)),l.push(b),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],b=u[2],v=u[3],g=u[4],m=[];for(let E=0,_=d.length;E<_;E++){let S=d[E],T=p[E],f=b[E],M=v[E],D=g[E];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,T,f,M,D);if(R)for(let N=0;N<R.length;N++)m.push(R[N])}let y=new ur(r,void 0,m);return On(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,jb)});for(let p=0,b=u.length;p<b;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){let p=h.userData.pivot,b=u[0];h.pivot=new O().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],b.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ms:l.length>1?h=new Sn:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),On(h,r),r.extensions&&Vi(n,h,r),r.matrix!==void 0){let u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Sn;n.name&&(r.name=s.createUniqueName(n.name)),On(r,n),n.extensions&&Vi(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(vd(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,p]of s.associations)(d instanceof Zt||d instanceof Mt)&&u.set(d,p);return h.traverse(d=>{let p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}yi[r.path]===yi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(yi[r.path]){case yi.weights:h=Zn;break;case yi.rotation:h=Qn;break;case yi.translation:case yi.scale:h=gi;break;default:n.itemSize===1?h=Zn:h=gi;break}let u=s.interpolation!==void 0?zb[s.interpolation]:Ri,d=this._getArrayFromAccessor(n);for(let p=0,b=c.length;p<b;p++){let v=new h(c[p]+"."+yi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Hl(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Qn?Gl:Io;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Yb(i,e,t){let n=e.attributes,s=new Vt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),o.normalized){let h=Hl(Ls[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new O,c=new O;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,b=d.max;if(p!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(b[2]))),d.normalized){let v=Hl(Ls[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Jt;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function wd(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=zl[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return We.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),On(i,e),Yb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Wb(i,e.targets,t):i})}var Td=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var y=new Uint8Array(m.length),E=0;E<m.length;++E){var _=m.charCodeAt(E);y[E]=_>96?_-97:_>64?_-39:_+4}for(var S=0,E=0;E<m.length;++E)y[S++]=y[E]<60?n[y[E]]:(y[E]-60)*64+y[++E];return y.buffer.slice(0,S)}function c(m,y,E,_,S,T,f){var M=m.exports.sbrk,D=_+3&-4,R=M(D*S),N=M(T.length),H=new Uint8Array(m.exports.memory.buffer);H.set(T,N);var z=y(R,_,S,N,T.length);if(z==0&&f&&f(R,D,S),E.set(H.subarray(R,R+_*S)),M(R-M(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(m){var y={object:new Worker(m),pending:0,requests:{}};return y.object.onmessage=function(E){var _=E.data;y.pending-=_.count,y.requests[_.id][_.action](_.value),delete y.requests[_.id]},y}function b(m){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),E=new Blob([y],{type:"text/javascript"}),_=URL.createObjectURL(E),S=u.length;S<m;++S)u[S]=p(_);for(var S=m;S<u.length;++S)u[S].object.postMessage({});u.length=m,URL.revokeObjectURL(_)}function v(m,y,E,_,S){for(var T=u[0],f=1;f<u.length;++f)u[f].pending<T.pending&&(T=u[f]);return new Promise(function(M,D){var R=new Uint8Array(E),N=++d;T.pending+=m,T.requests[N]={resolve:M,reject:D},T.object.postMessage({id:N,count:m,size:y,source:R,mode:_,filter:S},[R.buffer])})}function g(m){var y=m.data;self.ready.then(function(E){if(!y.id)return self.close();try{var _=new Uint8Array(y.count*y.size);c(E,E.exports[y.mode],_,y.count,y.size,y.source,E.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:_},[_.buffer])}catch(S){self.postMessage({id:y.id,count:y.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(m){b(m)},decodeVertexBuffer:function(m,y,E,_,S){c(r,r.exports.meshopt_decodeVertexBuffer,m,y,E,_,r.exports[l[S]])},decodeIndexBuffer:function(m,y,E,_){c(r,r.exports.meshopt_decodeIndexBuffer,m,y,E,_)},decodeIndexSequence:function(m,y,E,_){c(r,r.exports.meshopt_decodeIndexSequence,m,y,E,_)},decodeGltfBuffer:function(m,y,E,_,S,T){c(r,r.exports[h[S]],m,y,E,_,r.exports[l[T]])},decodeGltfBufferAsync:function(m,y,E,_,S){return u.length>0?v(m,y,E,h[_],l[S]):a.then(function(){var T=new Uint8Array(m*y);return c(r,r.exports[h[_]],T,m,y,E,r.exports[l[S]]),T})}}})();var En={inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,out:i=>1-Math.pow(1-i,3),in:i=>i*i*i,outBack:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),sine:i=>.5-.5*Math.cos(Math.PI*i)};function bt(i,e,t,n,s,r=En.inOut){return i<=e?n:i>=t?s:n+(s-n)*r((i-e)/(t-e))}function Gi(i,e,t){if(i<=e||i>=t)return 0;let n=Math.sin(Math.PI*(i-e)/(t-e));return n*n}function Cd(i,e){return i<e?0:i<e+.16?En.out((i-e)/.16):i<e+.22?1:i<e+.36?1-En.inOut((i-e-.22)/.14):0}function Id({gulps:i=3,period:e=.42,strength:t=1,kind:n="normal",rng:s=Math.random}={}){n==="empty"&&(i=Math.max(i,7),e=.27),n==="dry"&&(i=2,e=.3);let r=n==="dry"?.32:.5,a=[];for(let l=0;l<i;l++)a.push(r+l*e+(l?(s()-.5)*.05:0));let o=r+i*e,c=[{t:.1,name:"draw"}];return a.forEach((l,h)=>{c.push({t:l+.2,name:"gulp",i:h}),c.push({t:l+.26,name:"kickVisor",amount:n==="empty"?.6:.85})}),c.push({t:o,name:"release"}),c.push({t:o+.08,name:"pop"}),c.push({t:o+.12,name:"kickSquash",amount:n==="dry"?.6:1}),c.push({t:o+.12,name:"kickVisor",amount:1.4}),c.push({t:o+.18,name:"ahh"}),c.sort((l,h)=>l.t-h.t),{gulps:i,period:e,strength:t,kind:n,gulpTimes:a,release:o,start:r,events:c,duration:o+1.45}}function Rd(i,e){let{gulpTimes:t,release:n,strength:s,kind:r,start:a}=i,o=e>n,c=r==="dry",l=r==="empty",h=o?bt(e,n,n+.2,1,0,En.out):bt(e,0,.22,0,1,En.outBack),u=a+.02,d=bt(e,.1,u,0,1,En.inOut),p=0;c&&(d=.42*Gi(e,.1,n+.1),p=bt(e,.1,.3,0,1));let b=bt(e,.3,a,0,1),v=o?0:bt(e,.28,a,0,.16),g=0,m=0,y=0;for(let z of t)v+=(l?.98:.82)*Cd(e,z),g+=1.15*Gi(e,z+.21,z+.36),m+=1.15*Gi(e,z+.28,z+.45),c||(d-=.085*Gi(e,z+.18,z+.36)),y+=1.15*Gi(e,z+.16,z+.42);if(l){let z=t[Math.max(0,t.length-3)];p=bt(e,z,z+.25,0,1)}o&&(v*=bt(e,n,n+.22,1,0),d=c?0:bt(e,n+.02,n+.42,Math.max(d,.95),0,En.in),b=bt(e,n,n+.3,1,0)),v=Math.min(v,1.05),g=Math.min(g,1),m=Math.min(m,1);let E=t.length,_=bt(e,.1,a,0,.16);t.forEach((z,I)=>{_+=(l?.84:.6)*s/E*bt(e,z,z+.3,0,1,En.out)}),c&&(_=.12*Gi(e,.1,n+.1)),o&&!l&&(_=bt(e,n+.06,n+.1,_,0,En.in));let S=Math.min(1,(o?bt(e,n,n+.3,.3,0):bt(e,0,.3,0,.3))+.7*_),T=o?bt(e,n,n+.5,1,0):bt(e,0,.3,0,1),f=.04*T+.018*y-.035*Gi(e,n+.15,n+1),M=.05*T,D=0;for(let z of t)D+=.58/Math.max(1,E)*bt(e,z,z+.28,0,1,En.out)+.16*Cd(e,z);let R=Math.min(.92,bt(e,.16,a,0,.28)+D),N=bt(e,n,n+.24,Math.max(.72,R),1,En.out)*bt(e,n+.98,n+1.45,1,0),H=o?N:R;return{pucker:h,fill:Math.max(0,Math.min(1,d)),flow:b,sputter:p,cheek:v,swallowHi:g,swallowLo:m,squeeze:_,grip:S,leanPitch:f,leanYaw:M,blush:H}}var vi=class{constructor(e,t,n=0){this.w=e,this.z=t,this.x=n,this.v=0,this.target=n}kick(e){this.v+=e}step(e,t=this.target,n=this.z){this.target=t;let s=1/240,r=Math.min(64,Math.ceil(e/s)),a=e/Math.max(r,1);for(let o=0;o<r;o++){let c=this.w*this.w*(t-this.x)-2*n*this.w*this.v;this.v+=c*a,this.x+=this.v*a}return this.x}},Ro=class{constructor(){this.squeeze=new vi(23,.17),this.squash=new vi(15,.26),this.visor=new vi(21,.24),this.sag=new vi(4,1,0),this.sagTarget=0}event(e){e.name==="kickVisor"&&this.visor.kick(-e.amount*9),e.name==="kickSquash"&&this.squash.kick(e.amount*7.5)}update(e,t){let n=t?t.squeeze:0,s=n<this.squeeze.x-.02,r=this.squeeze.step(e,n,s?.17:.95),a=this.squash.step(e,0),o=this.visor.step(e,0),c=this.sag.step(e,this.sagTarget);return{squeeze:r,squash:a,visor:o,sag:c}}};var Pd={roblox_nom:"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",minecraft_drink:"SUQzBAAAAAAqRlRDT04AAAAHAAADQmx1ZXMAUFJJVgAAKgkAAFhNUAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQzNjAsIDIwMjAvMDIvMTMtMDE6MDc6MjIgICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOnhtcERNPSJodHRwOi8vbnMuYWRvYmUuY29tL3htcC8xLjAvRHluYW1pY01lZGlhLyIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNi0wOS0wOVQxNDo1MzozMS0wMzowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjYtMDktMDlUMTQ6NTM6MzEtMDM6MDAiCiAgIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YzU0ZGRjZTctODViMC0yYTQzLTg4NTQtMDcxMjEyOGE5MjIyIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmM1NGRkY2U3LTg1YjAtMmE0My04ODU0LTA3MTIxMjhhOTIyMiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ0NTIwZjdiLTVjYjAtZmM0OS05ZjhlLTY1NjUxNDYyZTYwMiIKICAgZGM6Zm9ybWF0PSJhdWRpby9tcGVnIj4KICAgPHhtcE1NOkRlcml2ZWRGcm9tCiAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlNmNhMzdmLTU1NDctODg0OS05NzU2LTViNjVhNDgzNmJlYyIKICAgIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZmU2Y2EzN2YtNTU0Ny04ODQ5LTk3NTYtNWI2NWE0ODM2YmVjIgogICAgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ0NTIwZjdiLTVjYjAtZmM0OS05ZjhlLTY1NjUxNDYyZTYwMiIvPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NDUyMGY3Yi01Y2IwLWZjNDktOWY4ZS02NTY1MTQ2MmU2MDIiCiAgICAgIHN0RXZ0OndoZW49IjIwMjYtMDktMDlUMTQ6NTMtMDM6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEF1ZGl0aW9uIDEzLjAgKFdpbmRvd3MpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjkyZmIzMGQ2LTU3ODktOTg0Zi05ZTRkLTdkYzllYjk3NTVlOSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNi0wOS0wOVQxNDo1My0wMzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQXVkaXRpb24gMTMuMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9tZXRhZGF0YSIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1M2RjYTcxYy0xMGIyLTBiNDEtYmU1OS1iYzFiYWRmN2FlNzIiCiAgICAgIHN0RXZ0OndoZW49IjIwMjYtMDktMDlUMTQ6NTMtMDM6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEF1ZGl0aW9uIDEzLjAgKFdpbmRvd3MpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRhZWMyNTY3LTU2ZmYtMWY0ZC04ODlmLTE1N2M5Nzk5ODY5MCIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNi0wOS0wOVQxNDo1MzozMS0wMzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQXVkaXRpb24gMTMuMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9tZXRhZGF0YSIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiCiAgICAgIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXVkaW8veC13YXYgdG8gYXVkaW8vbXBlZyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZTZjYTM3Zi01NTQ3LTg4NDktOTc1Ni01YjY1YTQ4MzZiZWMiCiAgICAgIHN0RXZ0OndoZW49IjIwMjYtMDktMDlUMTQ6NTM6MzEtMDM6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEF1ZGl0aW9uIDEzLjAgKFdpbmRvd3MpIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIKICAgICAgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhdWRpby94LXdhdiB0byBhdWRpby9tcGVnIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM1NGRkY2U3LTg1YjAtMmE0My04ODU0LTA3MTIxMjhhOTIyMiIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNi0wOS0wOVQxNDo1MzozMS0wMzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQXVkaXRpb24gMTMuMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8eG1wRE06VHJhY2tzPgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaQogICAgICB4bXBETTp0cmFja05hbWU9IkN1ZVBvaW50IE1hcmtlcnMiCiAgICAgIHhtcERNOnRyYWNrVHlwZT0iQ3VlIgogICAgICB4bXBETTpmcmFtZVJhdGU9ImY0ODAwMCIvPgogICAgIDxyZGY6bGkKICAgICAgeG1wRE06dHJhY2tOYW1lPSJDRCBUcmFjayBNYXJrZXJzIgogICAgICB4bXBETTp0cmFja1R5cGU9IlRyYWNrIgogICAgICB4bXBETTpmcmFtZVJhdGU9ImY0ODAwMCIvPgogICAgIDxyZGY6bGkKICAgICAgeG1wRE06dHJhY2tOYW1lPSJTdWJjbGlwIE1hcmtlcnMiCiAgICAgIHhtcERNOnRyYWNrVHlwZT0iSW5PdXQiCiAgICAgIHhtcERNOmZyYW1lUmF0ZT0iZjQ4MDAwIi8+CiAgICA8L3JkZjpCYWc+CiAgIDwveG1wRE06VHJhY2tzPgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAg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",roblox_drink:"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",fortnite_shield:"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"},Jb=Object.keys(Pd);function Zb(i){let e=atob(i),t=e.length,n=new Uint8Array(t);for(let s=0;s<t;s++)n[s]=e.charCodeAt(s);return n.buffer}var Po=class{constructor(){this.ctx=null,this.on=!1,this.buffers={},this.decoding=!1,this.activeSources=[],this.lastChoice=null,this._bag=[]}unlock(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume(),this._ensureBuffers()}_ensureBuffers(){if(!(!this.ctx||this.decoding)){this.decoding=!0;for(let[e,t]of Object.entries(Pd))try{this.ctx.decodeAudioData(Zb(t),n=>{this.buffers[e]=n},()=>{})}catch{}}}toggle(){return this.on=!this.on,this.on?this.unlock():this.stopActive(),this.on}stopActive(){for(let e of this.activeSources)try{e.stop()}catch{}this.activeSources.length=0}_nextRandomKey(){if(this._bag.length===0){this._bag=[...Jb];for(let e=this._bag.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[this._bag[e],this._bag[t]]=[this._bag[t],this._bag[e]]}this.lastChoice&&this._bag[this._bag.length-1]===this.lastChoice&&([this._bag[0],this._bag[this._bag.length-1]]=[this._bag[this._bag.length-1],this._bag[0]])}return this._bag.pop()}playDrinkClip(e=1.45,t=null){if(!this.on||(this.unlock(),!this.ctx))return null;let n=t||this._nextRandomKey();this.lastChoice=n;let s=this.buffers[n];if(!s){let r=this.ctx.currentTime,a=o=>setTimeout(()=>{if(!this.on)return;let c=this.buffers[n],l=e-(this.ctx.currentTime-r);c&&l>.4?this._startBuffer(c,n,l):!c&&o>0&&a(o-1)},50);return a(30),n}return this._startBuffer(s,n,e),n}_startBuffer(e,t,n){this.stopActive();let s=this.ctx,r=s.currentTime+.01,a=Math.max(e.duration,n),o=a,c=!1,l=.03,h=Math.max(.25,e.duration-.04);if(t==="roblox_drink"){let b=Math.max(.65,e.duration-.92);a>e.duration+.08?(c=!0,l=.05,h=Math.min(.92,e.duration*.52),o=a):o=Math.max(e.duration,a);let v=s.createBufferSource();if(v.buffer=e,v.loop=c,c){v.loopStart=l,v.loopEnd=h;let y=Math.max(.2,o-b);setTimeout(()=>{try{v.loop=!1}catch{}},y*1e3)}let g=s.createGain(),m=.58;g.gain.setValueAtTime(.001,r),g.gain.linearRampToValueAtTime(m,r+.025),g.gain.setValueAtTime(m,r+Math.max(.12,o-.14)),g.gain.exponentialRampToValueAtTime(8e-4,r+o),v.connect(g).connect(s.destination),v.start(r),v.stop(r+o+.04),this.activeSources.push(v),v.onended=()=>{let y=this.activeSources.indexOf(v);y>=0&&this.activeSources.splice(y,1)};return}o=Math.max(e.duration,a),c=o>e.duration+.06;let u=s.createBufferSource();u.buffer=e,u.loop=c,c&&(u.loopStart=l,u.loopEnd=h);let d=s.createGain(),p=.56;d.gain.setValueAtTime(.001,r),d.gain.linearRampToValueAtTime(p,r+.025),d.gain.setValueAtTime(p,r+Math.max(.1,o-.12)),d.gain.exponentialRampToValueAtTime(8e-4,r+o),u.connect(d).connect(s.destination),u.start(r),u.stop(r+o+.03),this.activeSources.push(u),u.onended=()=>{let b=this.activeSources.indexOf(u);b>=0&&this.activeSources.splice(b,1)}}pop(e=.8){if(!this.on||!this.ctx)return;let t=this.ctx,n=t.currentTime,s=t.createOscillator(),r=t.createGain();s.type="triangle",s.frequency.setValueAtTime(140,n),s.frequency.exponentialRampToValueAtTime(310,n+.055),s.frequency.exponentialRampToValueAtTime(180,n+.11),r.gain.setValueAtTime(1e-4,n),r.gain.linearRampToValueAtTime(.16*e,n+.01),r.gain.exponentialRampToValueAtTime(1e-4,n+.12),s.connect(r).connect(t.destination),s.start(n),s.stop(n+.13)}sipStart(e){if(!this.on)return;this.unlock();let t=Math.max(1.85,(e.duration||(e.release||1.75)+1.45)-.1);this.playDrinkClip(t)}event(e,t){this.on&&e.name==="pop"&&this.pop(t.kind==="empty"?.45:.7)}};var ql=[{id:"about",tag:"\u{1F44B} about me",title:"Hey, I'm Matthew",keywords:["who are you","about you","yourself","introduce","matthew","ngoy","major","degree","graduate","graduation","class of","gpa","dean's list","phd","grad school","future","goal","kean"],facts:["I'm **Matthew Ngoy**, a computer science student (cybersecurity option) at **Kean University**. I started in fall 2023 and graduate in **May 2027**.","I'm applying to CS PhD programs for **fall 2027**, and **UT Dallas** is my top target. I met their graduate recruitment director at the GMiS 2026 career fair.","My GPA is 3.52, and I made Dean's List in fall 2023, fall 2024, spring 2025 and spring 2026.","What I like most in security is taking a claim and figuring out how you could actually test it."],next:"ask me how I got into cybersecurity"},{id:"origin",tag:"\u{1F3AE} how it started",title:"It started with Minecraft",keywords:["start","started","begin","began","how did you get into","why cyber","why security","minecraft","cosmicpvp","childhood","high school","vito","cangelosi","role model","code.org","inspire","inspired"],facts:["It started with Minecraft. A factions server called **CosmicPvP** gave me my first look at Wireshark and DDoS attacks, and watching servers get knocked offline showed me how systems really break. I left that scene, but the curiosity stayed.","My path went code.org in elementary school, then **AP Computer Science** (Java and Python) in high school, then CS and security at Kean.","My high school CS teacher, **Vito Cangelosi**, is my role model. He showed me that mastery is being able to explain something simply. He's an adjunct at Kean now, too."],next:"ask me about my first tech conference"},{id:"pycon",tag:"\u{1F40D} pycon us 2024",title:"PyCon 2024 was a lot of firsts",keywords:["pycon","pittsburgh","python conference","open source","open-source","first conference","first pr","pull request","pyopensci","pyscript","annotated-types","travel alone","traveling alone","solo trip","sprint","sprints","contributor"],facts:["**PyCon US 2024** in Pittsburgh (May 2024, my freshman year) was my first tech conference and the first time I ever traveled alone.","It's also where I opened my first open-source PRs. I got stuck on a Windows step in **pyOpenSci**'s packaging tutorial, wrote up the fix, and pyOpenSci added me to its contributors list for code and review.","I also sent a docs correction to **PyScript** and a GroupedMetadata change to annotated-types. None of those three PRs got merged, and that was a good lesson in how open source actually works."],next:"ask me what I did after PyCon"},{id:"samurai_volunteer",tag:"\u2694\uFE0F code samurai \xB7 volunteer",title:"Code Samurai, round one",keywords:["code samurai","samurai","volunteer","tutor","tutoring","mentor","mentoring","peer mentor","data structures","kumar","help students","sophomore"],facts:["I volunteered as a **Code Samurai** peer mentor from January to May 2025. I'd struggled through Data Structures and Computer Organization, and my Data Structures professor recommended me.","As a volunteer I helped students one-on-one and tried to steer them to their next debugging step instead of handing over answers. I wanted people to get the help I'd wished I had.","I paused in summer 2025 to focus on research and projects."],next:"ask me how I came back as a paid mentor"},{id:"samurai_paid",tag:"\u2694\uFE0F code samurai \xB7 paid mentor",title:"Code Samurai, round two",keywords:["paid","paid mentor","came back","return","code samurai","samurai","office hours","drop-in","cps 3320","cps 2232","cps 3740","cps 3498","senior"],facts:["CS faculty invited me back to **Code Samurai** as a **paid** peer mentor in fall 2026.","I hold drop-in hours on Mondays, 2:30\u20134:00 pm, covering Python (CPS 3320), Data Structures (CPS 2232), Database (CPS 3740) and Cybersecurity (CPS 3498).","My rule: get students to name their next step themselves. Explaining something simply is still the best test of whether I understand it."],next:"ask me about the program I volunteered with first"},{id:"iuse2025",tag:"\u{1F916} nsf iuse 2025",title:"My first ML project",keywords:["iuse","nsf","scholars academy","adaptive learning","fine-tune","fine-tuning","fine tuned","gpt-3.5","openai","$171","171","adenuga","gmis 2025","poster","learner profiles","summer 2025","first author"],facts:["In summer 2025 (June 23\u2013Aug. 15) I joined Kean's **NSF IUSE** Scholars' Academy with mentor **Dr. Iyadunni Adenuga** on a five-person team studying adaptive learning with LLMs.","I had very little machine-learning experience, took the fine-tuning job anyway, and learned it from my mentor and YouTube. I wrote Node.js scripts to prepare and check training dialogues, then ran **GPT-3.5 Turbo** fine-tuning jobs.","Our run compared base and fine-tuned answers across nine synthetic learner profiles. We could compare the responses, but we never measured whether students actually learned more.","I covered **$171** in OpenAI API credits on my own card to keep the runs going. I was first author on our poster and the team's sole presenter at **GMiS 2025**."],next:"ask me about Debate Coach"},{id:"ifwy",tag:"\u{1F30D} ifwy \xB7 nyc \u2192 seoul",title:"From a proposal to Seoul",keywords:["ifwy","we the youth","we, the youth","international forum","selectsolar","select solar","solar","cornell","cornell tech","roosevelt island","seoul","korea","south korea","unrisd","mbc","debate korea","eunpyeong","declaration","explorer","catalyst","epr","extended producer","policy","un","united nations"],facts:['My way into **IFWY** (International Forum "We, the Youth") was a written proposal, **SelectSolar**: a plan to keep retired solar panels out of landfills and get low-cost power to schools and nonprofits.',"That got me selected as a **Catalyst** for the North America Regional Dialogue at **Cornell Tech** in NYC, Sept. 2\u20133, 2025.","At Cornell Tech our group worked a scenario about reviving **Eunpyeong District** in Seoul after a 40% budget cut. I pushed **extended producer responsibility**, meaning companies stay responsible for a product's whole life cycle.","My North American peers then voted me one of **25 Explorers** for the Final Conference in **Seoul**, Oct. 26\u201329, 2025.","IFWY is co-organized by **UNRISD** (the UN Research Institute for Social Development) and **MBC**, with Debate Korea running logistics. It drew 27,000+ young people from 121+ countries.","In Seoul, Navigators and Explorers collectively drafted the **Eunpyeong Global Youth Declaration**, and youth leaders from six regions adopted our recommendations on Oct. 29, 2025. The environment section calls for extended producer responsibility laws by 2029."],next:"ask me about my trip to China"},{id:"debate_coach",tag:"\u{1F9E0} cra ur2phd \xB7 debate coach",title:"The coach that made up its sources",keywords:["debate coach","debate","ur2phd","cra","citations","fabricated","hallucination","hallucinated","fake citations","336","sycophancy","devil's advocate","kiana","vincent","ponze","yan ma","fine-tuned coach"],facts:["In the **CRA UR2PhD** research course (Feb.\u2013Apr. 2026) I worked with Kiana Nunez and Vincent Pronel, mentored by Karina Ponze and **Dr. Yan Ma**, on **Debate Coach**: an AI devil's advocate meant to push back instead of agreeing with you.","I helped fine-tune the coach and shared the evaluation, citation checks, interviews and presenting with my team.","The fine-tuned version cited about three times as many sources as the prompted one. Then an AI-assisted audit flagged all **336** of its citations as fabricated, versus 63 of 113 for the prompted coach. We treat that as preliminary.","What scared me: only **1 of 12** pilot participants questioned the coach's credibility. Pilot users preferred the prompted coach about 3 to 1."],next:"ask me about the New Orleans showcase"},{id:"new_orleans",tag:"\u{1F3B7} new orleans \xB7 apr. 2026",title:"Presenting in New Orleans",keywords:["new orleans","nola","showcase","ur2phd showcase","mckinley","pamela gibbs","gibbs","demetrius","hernandez","workshop","cra showcase"],facts:["Our Debate Coach team applied and was accepted to present at the **CRA UR2PhD** mentoring workshop and research showcase in **New Orleans** on April 24, 2026, with 120+ students from 51 universities.",`**Dr. Pamela Gibbs** said success isn't always "linearly increasing," which I needed to hear. I also had dinner with Google researcher **Dr. Kathryn S. McKinley**.`,"I shared a lunch table with Notre Dame PhD student **Demetrius Hernandez** before his panel. Six months later he spoke at the PHD4FREE! event I helped run at Kean.","The image I left with: a PhD is a tiny dent at the edge of a huge circle of human knowledge."],next:"ask me what happened the day after New Orleans"},{id:"hackathon",tag:"\u{1F319} keanuhackthis \xB7 pocketwatch",title:"An all-nighter after New Orleans",keywords:["hackathon","keanuhackthis","kean hacks","pocketwatch","all-nighter","all nighter","5:41","snowflake","cortex","elevenlabs","puppeteer","student discounts","mlh","vercel"],facts:["**KeanUHackThis** (Apr. 25\u201326, 2026) started while I was still in New Orleans. We landed late, our third teammate dropped out, and it was two of us for day two.","We built **PocketWatch**, a student-discount feed: a Puppeteer scraper of SheerID discounts, an admin page where a human approves each deal, and a **Snowflake Cortex** chatbot that's only fed verified, unexpired deals.",'My 4:55 AM commit message was literally "ugh" (the mic was starting twice). At 5:41 AM I tried porting the backend to Vercel serverless, then reverted it that morning.',"This year I'm on the sponsor outreach team for **KeanUHackThis 2027**."],next:"ask me about my summer internship"},{id:"well_internship",tag:"\u{1F6E1}\uFE0F summer 2026 \xB7 well + cyber intern",title:"My summer at the Center for Cybersecurity",keywords:["well","work-earn-live-learn","work earn live learn","summer","summer 2026","internship","intern","center for cybersecurity","mierzwa","npcir","osint","nonprofit","incident","iot","smart home","arduino","esp8266","keypad","laptops","mgs 4090","rita","career"],facts:["Summer 2026 was Kean's **WELL** program (Work-Earn-Live-Learn): a 20-hour-a-week internship at the **Kean Center for Cybersecurity** with **Stanley Mierzwa**, plus a career course.","For the **Non-Profit Cyber Incident Repository** I investigated nonprofit cyber incidents through OSINT, classifying each by CIA-triad impact, CISA sector and TAG Cyber taxonomy.","I built a browser-controlled smart-home IoT lab on an Arduino MEGA and ESP8266. When one keypad only registered its right-side keys, I confirmed the code worked, documented exactly what failed, and kept the build on schedule.","I also prepared and tested 30 laptops for the summer camp.","In the career course (taught by Rita Papaleo Ruiz and John C. Raue), the line that stuck with me was: ability gets you considered, but **positioning gets you chosen**."],next:"ask me about teaching at the STEaM camp"},{id:"steam_camp",tag:"\u{1F510} steam camp \xB7 60 students",title:"Caesar ciphers with 60 high schoolers",keywords:["steam camp","steam","camp","port authority","teach","teaching","taught","high school students","caesar","cipher","cryptography","lessons","students"],facts:["At the **Port Authority of NY & NJ STEaM Camp** (from July 6, 2026) I taught cryptography, programming and IP addressing across **12 lessons** to **60 high school students**.","My favorite moment: after I connected a hand-decoded **Caesar cipher** to what code automates, students wrote their own hidden messages and raced to crack each other's."],next:"ask me about my trip to China"},{id:"china",tag:"\u{1F1E8}\u{1F1F3} wenzhou & beijing \xB7 june 2026",title:"Ten days in Wenzhou and Beijing",keywords:["china","chinese","beijing","wenzhou","wku","wenzhou-kean","young envoys","yes scholarship","envoy","ceaie","speech","speaker","speakers","delegates","dragon boat","sticky rice","chopsticks","anthony","hans","mcdonald","mcdonald's","alipay","lockbox","great wall","travel"],facts:["I was a **Young Envoys Scholarship** fellow (from CEAIE) in **Wenzhou and Beijing**, June 13\u201322, 2026, and completed the Work & Learn program at **Wenzhou-Kean University**.","I was one of four student speakers addressing international delegates at **CEAIE** in Beijing, introduced on screen as Student Representative, Kean University.","We came in dead last in **dragon boat racing**. Our tour guide John still called us **Sticky Rice**, because sticky rice doesn't fall apart under pressure. It sticks together.","Anthony, a WKU student assistant, patiently taught me how to use chopsticks properly at a traditional dinner.","A friend and I once got our **McDonald's** stuck in a delivery lockbox we couldn't open. A WKU student named Hans used his Chinese number to reach an operator, and the box popped open within ten minutes.",'What I took home: being "Chinese," the way people treated us, meant working hard, being patient and treating others with courtesy. I came back a more patient, confident engineer.'],next:"ask me what I learned from IFWY in Seoul"},{id:"gmis2026_genz",tag:"\u{1F3D9}\uFE0F gmis 2026 \xB7 gen z study",title:"Where is Gen Z living?",keywords:["gmis","gmis 2026","albuquerque","cahsi","travel scholar","finalist","gen z","genz","where is gen z living","counties","3,114","rent","housing","pao-lien","wang","census","correlation","college towns"],facts:["I was a **CAHSI Travel Scholar** at the **GMiS 2026** conference in Albuquerque (Sept. 17\u201319, 2026), and a CAHSI Scholar finalist (1 of 50).",`My NSF IUSE 2026 project, "Where Is Gen Z Living?", with **Prof. Pao-lien Wang**, is the one where I'm sole student author. It covers **3,114 counties** with SQL aggregation and a PHP/JavaScript app.`,"I caught a mismatch between plots built from state averages and a correlation computed at the county level, and fixed it.","The result was humbling: only a weak county-level link between rent and young-adult share (**r = 0.20**). No causal claim. Many top counties are college towns or military bases, which is a hypothesis I'd like to test."],next:"ask me about grad school plans"},{id:"research_verification",tag:"\u{1F52C} research \xB7 verifying ai",title:"Did the AI actually run?",keywords:["research","boyang","boyang li","hadagent","red team","red-team","verification","verifiable","proof of inference","inference","decentralized","validator","independent study","sok","survey","zkml","tee","opml","toploc"],facts:["This fall I'm doing an independent study with **Dr. Boyang Li** on a question I love: how do you check that a decentralized AI network actually ran the model it claims it ran?","I direct AI-run tests on a local copy of one verifier, **HadAgent**. We found a score-validation gap and disclosed it to the authors. It's all local testing, and nothing is published yet.","Separately, I'm organizing an unfinished literature survey on verifiable LLM inference (TEEs, zkML, opML and newer schemes) with Dr. Li."],next:"ask me about my red-team harness"},{id:"fall_internship",tag:"\u{1F6E1}\uFE0F fall 2026 \xB7 research intern",title:"Back at the Center this fall",keywords:["fall internship","research intern","mobile acdc","acdc","data center","solar power","rack","forensics","mobile forensics","ctf planning"],facts:["I came back to the **Kean Center for Cybersecurity** as a research intern in September 2026, a separate role from my summer one.","I'm designing solar-power and rack-energy monitoring for **Mobile ACDC**, the Center's portable teaching data center, with a student teammate. It's design work, not deployed yet.","I'm also working on a mobile-forensics lab and helping plan a campus CTF."],next:"ask me about KEAN CTF"},{id:"projects",tag:"\u{1F4BB} projects",title:"Things I've built",keywords:["project","projects","built","build","github","red-team harness","harness","ctf","kean ctf","capture the flag","portfolio","website","mascot","frog","blender","three.js","yoo-hoo","yoohoo"],facts:["My **LLM Red-Team Harness** (June 2026) is an AI-assisted pipeline for prompt-injection, jailbreak and data-leak tests that saves judge verdicts and transcripts in SQLite and JSONL.","I'm co-developing **KEAN CTF 2027** with two teammates and AI assistance: Docker-isolated challenges, solve scripts and GitHub Actions checks. An AI-assisted player audit caught a flag leak and broken hints, which we fixed.","This site's frog and speech bubble are a Blender model rendered live with three.js. I built it with AI assistance, and yes, the Yoo-hoo is the point."],next:"ask me about PocketWatch"},{id:"community",tag:"\u{1F91D} community",title:"Clubs and giving back",keywords:["wicys","women in cybersecurity","secretary","phd4free","phd 4 free","upe","upsilon pi epsilon","honor society","club","clubs","leadership","organize","organized","event"],facts:["I'm Secretary of Kean's **WiCyS** (Women in CyberSecurity) chapter. I coordinated speakers and planning for **PHD4FREE!** on Oct. 16, 2026, and presented research and funding pathways with Demetrius Hernandez to 15 attendees.","I was inducted into **Upsilon Pi Epsilon** (UPE), the computing honor society, in spring 2026. I'm a member, not an officer.","I'm a Code Samurai peer mentor and on the KeanUHackThis 2027 sponsor outreach team."],next:"ask me how New Orleans led to PHD4FREE!"},{id:"radio",tag:"\u{1F399}\uFE0F wknj 90.3 fm \xB7 nov. 2, 2026",title:"On air: Kean C.Y.B.E.R. Talk",keywords:["radio","wknj","90.3","c.y.b.e.r","cyber talk","talk show","on air","paris","sherwin","farbah","panel"],facts:['On Nov. 2, 2026 I was on **Kean C.Y.B.E.R. Talk** ("Connecting Your Brain to Everyday Risks") on **WKNJ 90.3 FM** with fellow Center for Cybersecurity interns Paris, Sherwin and Farbah.',"My segments: fake toll texts, finding your path in cybersecurity, public Wi-Fi, and my own first security mistake."],next:"ask me what to do about a fake toll text"},{id:"tip_toll",tag:"\u{1F4F1} fake toll texts",title:"That toll text is probably a scam",keywords:["toll","toll text","ezpass","e-zpass","unpaid toll","smishing","scam text","text scam","7726","spam text","reply stop","stop"],facts:['Scammers blast "unpaid toll" texts to tons of numbers, and the pressure to pay right now is the giveaway. The link usually goes to a fake payment page.',"If you think you really owe something, open the agency's official app or website yourself. Don't use the link or number in the text.","Don't reply, not even with **STOP**. That tells the sender your number is active. Forward it to **7726** (SPAM), report it at **ReportFraud.ftc.gov**, then block and delete. Already entered your card? Call your card issuer right away."],next:"ask me about public Wi-Fi"},{id:"tip_wifi",tag:"\u{1F4F6} public wi-fi",title:"Before you join public Wi-Fi",keywords:["wifi","wi-fi","public wifi","public wi-fi","hotspot","coffee shop","evil twin","https","vpn","campus wifi","network"],facts:["Check which network you're joining: ask staff at a coffee shop, follow IT's instructions on campus. Anyone can set up a fake hotspot with a familiar name.","Most sites use **HTTPS**, so people nearby can't just read your traffic. But a fake site can use HTTPS too, so still check where you're signing in, and never click through a browser security warning.","Keep your device updated, turn off auto-connect to public networks, and for something sensitive like banking, use your phone's data or your own hotspot."],next:"ask me about my first security mistake"},{id:"tip_passwords",tag:"\u{1F511} passwords & cookies",title:"My first security mistake",keywords:["password","passwords","password manager","reuse","reusing","mistake","cookies","cookie","mfa","2fa","breach","account"],facts:["Mine was **reusing passwords**. It's convenient, but if one site gets breached, attackers try that password on your other accounts.","Now I use a **password manager**, so every account gets its own password and I don't memorize any of them.","I also used to accept every cookie banner. Some cookies keep you signed in, others track you for ads, so when a site gives you the choice, reject the optional tracking ones."],next:"ask me how to spot a fake toll text"},{id:"tip_path",tag:"\u{1F9ED} finding your path in cyber",title:"How I'm finding my path",keywords:["career","path","which role","work roles","forensics","grc","advice","get into cyber","beginner","student advice","how to start","interested in"],facts:["Trying different kinds of work helped me most: digital forensics classes, then looking into cyberattacks on nonprofits during my internship.","I'm most interested in **AI security research**, especially checking what a system actually did. I like taking a claim and figuring out how you'd test it.","Try a small task before deciding a role is for you: a guided forensics lab, or writing a simple security policy for a club. Notice which kind of thinking you enjoy."],next:"ask me about my research"},{id:"contact",tag:"\u{1F4EC} contact",title:"Let's talk",keywords:["contact","email","reach","hire","hiring","resume","linkedin","github","connect","internship opportunity","recruiter"],facts:["Email me at **ngoym@kean.edu**, or find me on GitHub (**@Vaunty**) and LinkedIn (/in/matthewngoy). My resume PDF is in the tabs below."],next:"ask me what I'm working on now"}],Nd={about:[{tag:"\u{1F44B} hey there",title:"Hey, I'm Matthew",body:"I study computer science (cybersecurity) at **Kean University** and graduate in **May 2027**. Grab a Yoo-hoo, look around, or ask me something below.",footer:"\u{1F4AC} tap the bubble for another thought"},{tag:"\u{1F399}\uFE0F wknj 90.3 fm",title:"On air: Kean C.Y.B.E.R. Talk",body:"On the radio I covered fake toll texts. Short version: don't reply, not even **STOP**. Forward it to **7726** and check the agency's own app.",footer:"\u{1F4AC} ask me what else we covered"},{tag:"\u{1F1E8}\u{1F1F3} wenzhou & beijing",title:"We came in dead last",body:"In China our dragon boat crew finished last. Our guide still called us **Sticky Rice**, because sticky rice doesn't fall apart under pressure.",footer:"\u{1F4AC} ask me about the Young Envoys trip"},{tag:"\u{1F30D} ifwy \xB7 seoul",title:"From a proposal to Seoul",body:"My IFWY entry was **SelectSolar**, a plan to keep solar panels out of landfills. After Cornell Tech, my peers voted me one of **25 North American Explorers** for Seoul.",footer:"\u{1F4AC} ask me what we did at IFWY"},{tag:"\u{1F40D} pycon 2024",title:"A lot of firsts",body:"**PyCon 2024** was my first tech conference, my first trip alone, and where I opened my first open-source PRs.",footer:"\u{1F4AC} ask me how pyOpenSci credited me"},{tag:"\u2694\uFE0F code samurai",title:"Volunteer first, then paid",body:"I struggled through Data Structures, then got recommended as a **Code Samurai** volunteer. This fall the CS faculty brought me back as a **paid** mentor.",footer:"\u{1F4AC} ask me how I tutor"},{tag:"\u{1F52C} research",title:"Did the AI actually run?",body:"With **Dr. Boyang Li** I'm studying how you'd check that a decentralized AI network really ran the model it claims to.",footer:"\u{1F4AC} ask me about my research"},{tag:"\u{1F9E0} debate coach",title:"It made up every source",body:"Our fine-tuned debate coach cited 3\xD7 more sources than the prompted one. An AI-assisted audit flagged all **336** as fabricated. Only 1 of 12 testers noticed.",footer:"\u{1F4AC} ask me what we learned"},{tag:"\u{1F510} steam camp",title:"60 high schoolers, one cipher race",body:"I taught **12 lessons** at a STEaM camp. Best moment: students writing secret messages and racing to crack each other's **Caesar ciphers**.",footer:"\u{1F4AC} ask me about my summer internship"}],tabs:{timeline:[{tag:"\u{1F5D3}\uFE0F the timeline",title:"Every stop, newest first",body:"PyCon in Pittsburgh, a proposal that got me to **Seoul**, ten days in **China**, a poster in **Albuquerque**, and a radio show. Use the filters to slice it.",footer:"\u{1F4AC} ask me about any stop"},{tag:"\u{1F5D3}\uFE0F connecting the dots",title:"The thread through all of it",body:"Most of these started with someone pointing me at a door: a professor's recommendation, a classmate's invite, a lunch table in **New Orleans**.",footer:"\u{1F4AC} ask me how New Orleans led to PHD4FREE!"}],projects:[{tag:"\u{1F4BB} projects",title:"Built under real deadlines",body:"**PocketWatch** came out of an all-nighter after flying back from New Orleans. Now I'm co-building **KEAN CTF 2027**.",footer:"\u{1F4AC} ask me about the 5:41 AM commit"},{tag:"\u{1F438} behind the scenes",title:"Yes, this bubble is 3D",body:"The frog, the bubble and the Yoo-hoo are a Blender model rendered live with **three.js**. I built it with AI assistance.",footer:"\u{1F4AC} click the box for a sip"}],research:[{tag:"\u{1F52C} research",title:"Checking the claim",body:"From **Debate Coach**'s fake citations to a weak **r = 0.20** in my Gen Z study, my research keeps coming back to one question: what can we actually verify?",footer:"\u{1F4AC} ask me about any project"},{tag:"\u{1F52C} posters & talks",title:"Where I've presented",body:"**GMiS 2025** as first author, the **CRA UR2PhD** showcase in New Orleans, and **GMiS 2026** in Albuquerque as sole student author.",footer:"\u{1F4AC} ask me about the Gen Z study"}],security:[{tag:"\u{1F6E1}\uFE0F security",title:"From Minecraft to the Center",body:"Watching game servers get knocked offline got me curious. Now I investigate nonprofit cyber incidents and build labs at the **Kean Center for Cybersecurity**.",footer:"\u{1F4AC} ask me about the smart-home lab"},{tag:"\u{1F399}\uFE0F public tips",title:"What I told radio listeners",body:"Don't reply **STOP** to scam texts, check which Wi-Fi you're joining, and use a **password manager** instead of reusing passwords.",footer:"\u{1F4AC} ask me about any of those"}],experience:[{tag:"\u{1F91D} leadership",title:"Paying it forward",body:"**Code Samurai** mentor, **WiCyS** Secretary, and part of the team behind PHD4FREE!, an event on funding a PhD.",footer:"\u{1F4AC} ask me how Code Samurai started"},{tag:"\u{1F30D} global",title:"Seoul and Beijing",body:"**IFWY** took me to Seoul as a peer-voted Explorer, and the **Young Envoys Scholarship** took me to Wenzhou and Beijing.",footer:"\u{1F4AC} ask me about either trip"}]}},Xl=["What did you do in China?","How did a proposal get you to Seoul?","What happened at PyCon 2024?","How did you end up a Code Samurai?","What went wrong with Debate Coach's citations?","What should I do about a fake toll text?","What are you researching right now?","How did you get into cybersecurity?"],Ld=[{label:"\u{1F1E8}\u{1F1F3} China trip",q:"Tell me about your trip to China"},{label:"\u{1F30D} IFWY Seoul",q:"How did you get to IFWY in Seoul?"},{label:"\u{1F40D} PyCon '24",q:"What happened at PyCon 2024?"},{label:"\u2694\uFE0F Code Samurai",q:"Tell me about Code Samurai"},{label:"\u{1F52C} Research",q:"What are you researching?"},{label:"\u{1F399}\uFE0F Radio show",q:"What did you talk about on the radio?"}],No={global:{label:"\u{1F30D} Global",color:"#2dd4bf"},conferences:{label:"\u{1F3A4} Conferences",color:"#bc8cff"},programs:{label:"\u{1F393} Programs",color:"#58a6ff"},research:{label:"\u{1F52C} Research",color:"#f85149"},security:{label:"\u{1F6E1}\uFE0F Security",color:"#3fb950"},community:{label:"\u{1F91D} Community & hackathons",color:"#d29922"}},Nr=[{date:"Nov. 2, 2026",group:"security",title:"Radio panelist \xB7 Kean C.Y.B.E.R. Talk",org:"WKNJ 90.3 FM \xB7 Kean Center for Cybersecurity \xB7 with Paris, Sherwin & Farbah",desc:"My segments: fake toll texts (don't reply, not even STOP; forward to 7726 and report at ReportFraud.ftc.gov), finding your path in cybersecurity, public Wi-Fi, and my first security mistake (reusing passwords, then switching to a password manager)."},{date:"Oct. 16, 2026",group:"community",title:"PHD4FREE! \xB7 WiCyS Kean",org:"Secretary, Women in CyberSecurity, Kean chapter (Sep. 2026 \u2013 present)",desc:"Coordinated speaker scheduling and planning from late August, then presented research and funding pathways alongside Notre Dame PhD student Demetrius Hernandez, whom I'd met at lunch in New Orleans. 15 attendees."},{date:"Sep. 2026 \u2013 present",group:"research",title:"Independent study \xB7 verifying decentralized AI inference",org:"Kean University \xB7 advisor Dr. Boyang Li",desc:"How do you check that a network actually ran the model it claims? I direct AI-run tests on a local copy of the HadAgent verifier. We found a score-validation gap and disclosed it to the authors. Local testing only; nothing published yet."},{date:"Sep. 2026 \u2013 present",group:"research",title:"Literature survey \xB7 verifiable LLM inference",org:"Kean University \xB7 with Dr. Boyang Li",desc:"Organizing an unfinished survey of how LLM inference can be verified: trusted hardware (TEEs), zkML, opML and newer schemes."},{date:"Sep. 2026 \u2013 present",group:"security",title:"Cybersecurity research intern (fall)",org:"Kean Center for Cybersecurity \xB7 Stanley Mierzwa",desc:"A separate role from my summer internship. Designing solar-power and rack-energy monitoring for Mobile ACDC, the Center's portable teaching data center (design stage), plus a mobile-forensics lab and campus CTF planning."},{date:"Sep. 2026 \u2013 present",group:"community",title:"Code Samurai peer mentor (paid)",org:"Kean Dept. of Computer Science & Technology",desc:"Invited back by CS faculty as a paid mentor. Monday drop-in hours covering Python, Data Structures, Database and Cybersecurity courses. I try to get students to name their next step themselves."},{date:"Sep. 2026 \u2013 present",group:"security",title:"Co-developer \xB7 KEAN CTF 2027",org:"Kean University \xB7 Docker, CTFd, GitHub Actions",desc:"Building Docker-isolated challenges and solve scripts with two teammates and AI assistance. An AI-assisted player audit caught a flag leak and broken hints, which we fixed."},{date:"Sep. 17\u201319, 2026",group:"conferences",title:"GMiS 2026 \xB7 CAHSI Travel Scholar",org:"Great Minds in STEM \xB7 Albuquerque, NM",desc:`Presented "Where Is Gen Z Living?" as sole student author. Also a CAHSI Scholar finalist (1 of 50). At the career fair I met UT Dallas's graduate recruitment director, which started my PhD plan.`},{date:"Summer 2026",group:"research",title:'"Where Is Gen Z Living?" \xB7 NSF IUSE 2026',org:"Kean University \xB7 advisor Prof. Pao-lien Wang \xB7 sole student author",desc:"3,114 counties, SQL aggregation and a PHP/JavaScript app. I fixed a mismatch between state-average plots and a county-level correlation. The finding was a weak association between rent and young-adult share (r = 0.20), with no causal claim."},{date:"Aug. 13, 2026",group:"programs",title:'"My Journey Through W.E.L.L." \xB7 closing presentation',org:"WELL Program \xB7 Kean University",desc:"Wrapped the summer by presenting the internship, the STEaM camp and the China trip. My takeaway from the career course: ability gets you considered, but positioning gets you chosen."},{date:"July 2026",group:"security",title:"Instructor \xB7 Port Authority STEaM Camp",org:"Port Authority of NY & NJ \xB7 with the Kean Center for Cybersecurity",desc:"Taught cryptography, programming and IP addressing across 12 lessons to 60 high school students. After a hand-decoded Caesar cipher, they wrote hidden messages and raced to crack each other's."},{date:"June 13\u201322, 2026",group:"global",title:"Young Envoys Scholarship \xB7 Wenzhou & Beijing",org:"CEAIE \xB7 Wenzhou-Kean University Work & Learn Program",desc:`One of four student speakers addressing international delegates at CEAIE in Beijing (Student Representative, Kean University). Dragon boat racing (dead last, still "Sticky Rice"), chopstick lessons at a traditional dinner, the Great Wall, and a McDonald's lockbox rescue.`},{date:"June 2026",group:"security",title:"LLM Red-Team Harness",org:"github.com/Vaunty/legacy-red-team-harness",desc:"An AI-assisted pipeline for prompt-injection, jailbreak and data-leak tests, saving judge verdicts and transcripts in SQLite and JSONL."},{date:"May 18 \u2013 Aug. 14, 2026",group:"security",title:"Summer cybersecurity intern",org:"Kean Center for Cybersecurity \xB7 Stanley Mierzwa",desc:"Investigated nonprofit cyber incidents through OSINT for the Non-Profit Cyber Incident Repository. Built a browser-controlled Arduino MEGA + ESP8266 smart-home lab and documented exactly which keypad keys failed so the build stayed on schedule. Prepared and tested 30 camp laptops."},{date:"May 18 \u2013 Aug. 14, 2026",group:"programs",title:"WELL Program (Work-Earn-Live-Learn)",org:"Kean University \xB7 MGS 4090 with Rita Papaleo Ruiz & John C. Raue",desc:"Twenty hours a week of on-campus work, weekly professional-development workshops, an employer panel, an alumni networking night, and the China trip."},{date:"Spring 2026",group:"community",title:"Inducted \xB7 Upsilon Pi Epsilon",org:"Computing honor society \xB7 Kean University chapter",desc:"Inducted into the international honor society for computing and information disciplines."},{date:"Apr. 25\u201326, 2026",group:"community",title:"KeanUHackThis \xB7 PocketWatch",org:"Kean University \xB7 Puppeteer, Snowflake Cortex, ElevenLabs",desc:"Landed from New Orleans late, lost our third teammate, and built a student-discount feed as a team of two: a SheerID scraper, a human-approval admin page, and a chatbot fed only verified deals. Last commit 5:41 AM. Now on the KeanUHackThis 2027 sponsor outreach team."},{date:"Apr. 24, 2026",group:"conferences",title:"CRA UR2PhD showcase \xB7 New Orleans",org:"Computing Research Association \xB7 120+ students from 51 universities",desc:"Presented Debate Coach with my team. Heard Dr. Pamela Gibbs on why success isn't linear, had dinner with Google's Dr. Kathryn S. McKinley, and met Demetrius Hernandez over lunch."},{date:"Feb. 18 \u2013 Apr. 30, 2026",group:"programs",title:"CRA UR2PhD research course \xB7 Debate Coach",org:"with Kiana Nunez & Vincent Pronel \xB7 mentors Karina Ponze & Dr. Yan Ma",desc:"An AI devil's advocate meant to resist sycophancy. I helped fine-tune it and shared evaluation duties. An AI-assisted audit flagged all 336 of the fine-tuned coach's citations as fabricated (vs. 63 of 113 for the prompted coach); only 1 of 12 pilot users questioned it."},{date:"Oct. 26\u201329, 2025",group:"global",title:"IFWY Final Conference \xB7 Seoul",org:"UNRISD & MBC \xB7 logistics by Debate Korea",desc:"Peer-voted one of 25 North American Explorers. Navigators and Explorers collectively drafted the Eunpyeong Global Youth Declaration, and youth leaders from six regions adopted our recommendations on Oct. 29, 2025."},{date:"Sep. 2\u20133, 2025",group:"global",title:"IFWY Catalyst \xB7 Cornell Tech",org:"North America Regional Dialogue \xB7 New York City",desc:"Selected from my SelectSolar proposal (keeping retired solar panels out of landfills). Worked a scenario on reviving Seoul's Eunpyeong District after a 40% budget cut and argued for extended producer responsibility."},{date:"2025",group:"conferences",title:"GMiS 2025 \xB7 first author & sole presenter",org:"Great Minds in STEM",desc:`Presented our NSF IUSE poster, "A Fine-Tuned Language Model Framework for Human-Centered Adaptive Learning", as first author and the team's only presenter.`},{date:"June 23 \u2013 Aug. 15, 2025",group:"programs",title:"NSF IUSE Scholars' Academy \xB7 adaptive learning",org:"Kean University \xB7 mentor Dr. Iyadunni Adenuga",desc:"With little ML background, I took the fine-tuning job: Node.js scripts to prepare training dialogues, GPT-3.5 Turbo fine-tuning runs, and comparisons across nine synthetic learner profiles. I covered $171 in API credits myself."},{date:"Jan. \u2013 May 2025",group:"community",title:"Code Samurai peer mentor (volunteer)",org:"Kean Dept. of Computer Science & Technology",desc:"Recommended by my Data Structures professor after I'd struggled through that class. Helped students one-on-one and steered them to their next debugging step instead of handing over answers."},{date:"May 2024",group:"conferences",title:"PyCon US 2024 \xB7 Pittsburgh",org:"Python Software Foundation",desc:"My first tech conference and my first trip alone. Opened my first open-source PRs; pyOpenSci added me to its contributors list for code and review after I wrote up a Windows fix for its packaging tutorial."},{date:"Fall 2023",group:"programs",title:"Started at Kean \xB7 B.S. Computer Science (Cybersecurity)",org:"Kean University \xB7 Union, NJ",desc:"Got here by way of code.org, AP Computer Science with my role model Vito Cangelosi, and a Minecraft server that first showed me how systems break. Dean's List four semesters so far."}],Dd={timeline:{title:"My journey, 2023 \u2013 now",isTimeline:!0},projects:{title:"Projects, hackathons & open source",cards:[{title:"KEAN CTF 2027",meta:"Sep. 2026 \u2013 present \xB7 Docker, CTFd, GitHub Actions",desc:"Co-developing Docker-isolated challenges and solve scripts with two teammates and AI assistance, including defenses intended to resist blind AI solvers. An AI-assisted player audit caught a flag leak and broken hints, which we fixed.",tags:["Docker","CTFd","GitHub Actions"]},{title:"PocketWatch",link:"https://mvb-kuhacks.vercel.app",meta:"KeanUHackThis \xB7 Apr. 25\u201326, 2026 \xB7 Puppeteer, Snowflake Cortex, ElevenLabs",desc:"A student-discount feed built by two of us overnight: a SheerID scraper, a human-approval admin page, and a chatbot prompted only with verified, unexpired deals.",tags:["Hackathon","Snowflake Cortex","Puppeteer"]},{title:"LLM Red-Team Harness",link:"https://github.com/Vaunty/legacy-red-team-harness",meta:"June 2026 \xB7 Python, SQLite, Ollama, JSONL",desc:"An AI-assisted pipeline for prompt-injection, jailbreak and data-leak tests that keeps judge verdicts and transcripts in SQLite and JSONL.",tags:["Red teaming","Python","SQLite"]},{title:"First open-source PRs",meta:"May 2024 \xB7 pyOpenSci, PyScript, annotated-types",desc:"Opened PRs to three projects (none merged). pyOpenSci added me to its contributors list for code and review after I wrote up a Windows pipx fix for its packaging tutorial.",tags:["Open source","Python"]},{title:"This mascot",meta:"Blender 5.2 \xB7 three.js \xB7 WebGL",desc:"A frog in red visor glasses who sips a Yoo-hoo and talks through a 3D speech bubble. Modeled from code in Blender and rendered live in three.js, built with AI assistance.",tags:["Blender","three.js","WebGL"]}]},research:{title:"Research & presentations",cards:[{title:"Verifying decentralized AI inference",meta:"Independent study \xB7 Fall 2026 \xB7 Dr. Boyang Li",desc:"I direct AI-run tests on a local copy of the HadAgent verifier. We found a score-validation gap and disclosed it to the authors. Local and AI-reproduced results; nothing published yet.",tags:["AI security","Verification"]},{title:"Survey: verifiable LLM inference",meta:"In progress \xB7 with Dr. Boyang Li",desc:"An unfinished literature survey covering trusted execution environments, zkML, opML and newer verification schemes.",tags:["Survey","LLM inference"]},{title:"Where Is Gen Z Living?",meta:"NSF IUSE 2026 \xB7 Prof. Pao-lien Wang \xB7 GMiS 2026, Albuquerque",desc:"Sole student author. 3,114 counties, SQL aggregation and a PHP/JavaScript app. Fixed a state-average vs. county-level mismatch; found only a weak rent association (r = 0.20).",tags:["Data","SQL","CAHSI Travel Scholar"]},{title:"Debate Coach",link:"https://github.com/ponzek/DebateCoach",meta:"CRA UR2PhD \xB7 Feb. \u2013 Apr. 2026 \xB7 New Orleans showcase",desc:"Team project with Kiana Nunez and Vincent Pronel. I helped fine-tune the coach. An AI-assisted audit flagged all 336 of its citations as fabricated, and only 1 of 12 pilot users questioned it.",tags:["LLM evaluation","Team"]},{title:"Human-centered adaptive learning",meta:"NSF IUSE 2025 \xB7 Dr. Iyadunni Adenuga \xB7 GMiS 2025",desc:"First author and sole presenter. Fine-tuned GPT-3.5 Turbo and compared base vs. fine-tuned answers across nine synthetic learner profiles; learning gains weren't measured.",tags:["Fine-tuning","Node.js"]}]},security:{title:"Security work & outreach",cards:[{title:"Kean C.Y.B.E.R. Talk",meta:"WKNJ 90.3 FM \xB7 Nov. 2, 2026",desc:"Radio segments on fake toll texts, finding your path in cyber, public Wi-Fi, and my first security mistake (password reuse, cookies).",tags:["Outreach","Radio"]},{title:"Summer cybersecurity intern",meta:"Kean Center for Cybersecurity \xB7 May \u2013 Aug. 2026 \xB7 Stanley Mierzwa",desc:"OSINT investigation of nonprofit cyber incidents for the Non-Profit Cyber Incident Repository, a browser-controlled Arduino/ESP8266 smart-home lab, and 30 camp laptops prepared and tested.",tags:["OSINT","IoT","NPCIR"]},{title:"Research intern (fall)",meta:"Kean Center for Cybersecurity \xB7 Sep. 2026 \u2013 present",desc:"Designing power and rack-energy monitoring for the Mobile ACDC teaching data center, plus a mobile-forensics lab and campus CTF planning.",tags:["Mobile ACDC","Forensics"]},{title:"STEaM Camp instructor",meta:"Port Authority of NY & NJ \xB7 July 2026",desc:"12 lessons on cryptography, programming and IP addressing for 60 high school students, ending in a Caesar cipher race.",tags:["Teaching","Cryptography"]}]},experience:{title:"Leadership, programs & global",cards:[{title:"Code Samurai \xB7 volunteer",meta:"Jan. \u2013 May 2025",desc:"Recommended by my Data Structures professor. One-on-one help steering students to their next debugging step.",tags:["Mentoring"]},{title:"Code Samurai \xB7 paid mentor",meta:"Sep. 2026 \u2013 present",desc:"Invited back by CS faculty. Monday drop-in hours for Python, Data Structures, Database and Cybersecurity courses.",tags:["Mentoring"]},{title:"WiCyS Secretary \xB7 PHD4FREE!",meta:"Sep. 2026 \u2013 present \xB7 event Oct. 16, 2026",desc:"Coordinated speakers and planning, and presented funding pathways with Demetrius Hernandez to 15 attendees.",tags:["WiCyS","Events"]},{title:"IFWY Explorer \xB7 Seoul",meta:"Cornell Tech Sept. 2025 \u2192 Seoul Oct. 2025",desc:"Entered with my SelectSolar proposal, argued for extended producer responsibility at Cornell Tech, and was peer-voted one of 25 North American Explorers.",tags:["UNRISD","Policy"]},{title:"Young Envoys Scholarship",meta:"Wenzhou & Beijing \xB7 June 13\u201322, 2026",desc:"CEAIE fellow and one of four student speakers addressing international delegates in Beijing.",tags:["China","WELL"]},{title:"WELL Program",meta:"Summer 2026 \xB7 Kean University",desc:'Work-Earn-Live-Learn: a 20-hour-a-week internship, career course and workshops, closing with "My Journey Through W.E.L.L."',tags:["Career"]}]}};var ln=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ud=i=>window.__mascot?.ask?.(i),Qb=document.getElementById("mascotAskForm"),ii=document.getElementById("mascotAskInput"),Kl=document.querySelector(".ask-chips");Qb?.addEventListener("submit",i=>{i.preventDefault();let e=ii.value.trim();e&&(Ud(e),ii.value="",ii.blur())});Kl&&(Kl.innerHTML=Ld.map(i=>`<button type="button" class="ask-chip" data-q="${ln(i.q)}">${ln(i.label)}</button>`).join(""),Kl.addEventListener("click",i=>{let e=i.target.closest(".ask-chip");e&&(i.stopPropagation(),Ud(e.dataset.q))}));if(ii&&!matchMedia("(prefers-reduced-motion: reduce)").matches){let i=ii.placeholder,e=12e3,t=7e3,n=0,s=()=>document.activeElement!==ii&&!ii.value,r=()=>{s()&&(ii.placeholder=`try: "${Xl[n++%Xl.length]}"`),setTimeout(()=>{s()&&(ii.placeholder=i),setTimeout(r,t)},e)};setTimeout(r,t)}var jl=document.getElementById("tabDrawer"),$b=document.getElementById("drawerTitle"),Yl=document.getElementById("drawerBody"),ex=document.getElementById("drawerClose"),Jl=document.querySelectorAll(".tab-btn"),Zl=null;Jl.forEach(i=>i.addEventListener("click",()=>{let e=i.dataset.tab;Zl===e?Od():nx(e)}));ex?.addEventListener("click",Od);function Fd(i="all"){let e=Nr.reduce((s,r)=>(s[r.group]=(s[r.group]||0)+1,s),{}),t=i==="all"?Nr:Nr.filter(s=>s.group===i),n=(s,r)=>`<button type="button" class="tl-filter-btn ${i===s?"active":""}" data-tl-filter="${s}">${r}</button>`;Yl.innerHTML=`
    <div class="tl-filters" aria-label="Filter the timeline">
      ${n("all",`All (${Nr.length})`)}
      ${Object.entries(No).map(([s,r])=>n(s,`${r.label} (${e[s]||0})`)).join("")}
    </div>
    <div class="timeline-list">
      ${t.map(s=>`
        <div class="tl-item" style="--tl-c: ${No[s.group].color}">
          <span class="tl-dot"></span>
          <div class="tl-top"><span class="tl-date">${ln(s.date)}</span><span class="tl-cat">${ln(No[s.group].label)}</span></div>
          <h3 class="tl-title">${ln(s.title)}</h3>
          <div class="tl-org">${ln(s.org)}</div>
          <p class="tl-desc">${ln(s.desc)}</p>
        </div>`).join("")}
    </div>`,Yl.querySelectorAll(".tl-filter-btn").forEach(s=>s.addEventListener("click",()=>Fd(s.dataset.tlFilter)))}function tx(i){Yl.innerHTML=`<div class="card-grid">${i.map(e=>`
    <div class="info-card">
      <div>
        <h3>${e.link?`<a href="${ln(e.link)}" target="_blank" rel="noreferrer">${ln(e.title)} \u2197</a>`:ln(e.title)}</h3>
        <div class="info-meta">${ln(e.meta)}</div>
        <div class="info-desc">${ln(e.desc)}</div>
      </div>
      <div class="tag-row">${e.tags.map(t=>`<span class="tag">${ln(t)}</span>`).join("")}</div>
    </div>`).join("")}</div>`}function nx(i){let e=Dd[i];e&&(Zl=i,Jl.forEach(t=>t.classList.toggle("active",t.dataset.tab===i)),$b.textContent=e.title,e.isTimeline?Fd():tx(e.cards),jl.classList.add("open"),window.__mascot?.showTabTopic?.(i),jl.scrollIntoView({behavior:"smooth",block:"nearest"}))}function Od(){Zl=null,jl.classList.remove("open"),Jl.forEach(i=>i.classList.remove("active")),window.__mascot?.clearTabTopic?.()}var tn=Nd,ix=new Set("a an and are as at be but by can did do does for from had has have how i if in is it its me my of on or so tell that the their them then there this to was we were what when where which who why will with you your yours about more please really just".split(" ")),sx=/\b(you|your|yours|yourself|matthew|ngoy|kean|mascot|frog)\b/i,rx=/^(tell me )?(more|go on|and\??|what else\??|keep going|continue|then what\??)\b/i,ax=/^(hi|hey|hello|yo|sup|hiya|howdy|good (morning|afternoon|evening))\b[!. ]*$/i,ox=[/\b(weather|forecast|temperature)\b/i,/\b(capital of|population of|president of|prime minister|who won|super bowl|world cup|nba|nfl|mlb|score of)\b/i,/\b(recipe|calories|restaurant near)\b/i,/\b(stock price|bitcoin price|crypto price)\b/i,/\b(write (me )?(a|an) (poem|essay|story|song)|tell me a joke|translate|solve|integral|derivative|homework)\b/i,/^\s*[\d\s.+\-*/^()=x]+\??\s*$/i,/\b(ignore (all|your|previous)|system prompt|jailbreak|pretend you are|act as)\b/i],kd=new Map,Ql=null,$l=i=>(i.toLowerCase().match(/[a-z0-9$.'-]+/g)||[]).map(e=>e.replace(/^[.'-]+|[.'-]+$/g,"")).filter(e=>e&&!ix.has(e)),cx=i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),lx=i=>new RegExp(`(^|[^a-z0-9])${cx(i)}($|[^a-z0-9])`,"i");function hx(i,e,t){let n=0;for(let s of i.keywords)s.includes(" ")||/[^a-z0-9]/.test(s)?lx(s).test(e)&&(n+=3+s.split(" ").length):t.includes(s)?n+=3:s.length>=5&&t.some(r=>r.length>=4&&(s.startsWith(r)||r.startsWith(s)))&&(n+=1.2);return n}function ux(i,e){let t=new Set($l(i));return e.reduce((n,s)=>n+(t.has(s)?4:[...t].some(r=>r.length>=5&&s.length>=5&&r.slice(0,5)===s.slice(0,5))?1:0),0)}function dx(i,e,t=2){let n=kd.get(i.id)||new Set,s=i.facts.map((a,o)=>({f:a,i:o,s:ux(a,e)+(n.has(o)?-3:0)+(o===0&&!n.size?.5:0)})).sort((a,o)=>o.s-a.s||a.i-o.i),r=[s[0]];for(let a of s.slice(1)){if(r.length>=t)break;r.reduce((o,c)=>o+c.f.length,0)+a.f.length+1>300||(a.s>=s[0].s-2||!n.has(a.i))&&r.push(a)}return r.sort((a,o)=>a.i-o.i).forEach(a=>n.add(a.i)),n.size>=i.facts.length&&n.clear(),kd.set(i.id,n),r.map(a=>a.f)}function Lo(i,e,t=!1){Ql=i;let n=dx(i,e);return{tag:i.tag,title:t?`More on that: ${i.title.charAt(0).toLowerCase()}${i.title.slice(1)}`:i.title,body:n.join(" "),footer:`\u{1F4AC} ${i.next}`}}function fx(){return{tag:"\u{1F937} not in my notes",title:"Good question, honestly",body:"That's not something I've written down here, and I'd rather not guess. I can tell you about my **research**, my trips to **Seoul** and **Beijing**, or **Code Samurai**.",footer:"\u{1F4AC} or email me: ngoym@kean.edu"}}function eh(i){let e=(i||"").trim(),t=e.length>40?e.slice(0,38)+"\u2026":e;return{tag:"\u{1F914} out of my lane",step:"OUT OF SCOPE",title:"I'm not sure how to answer that",body:`I only know about me and my work${t?` (you asked "${t}")`:""}. Try my **China trip**, **IFWY in Seoul**, **PyCon 2024**, my **research**, or how to spot a **fake toll text**.`,footer:"\u{1F4AC} or tap a suggestion under the ask bar"}}function Vd(i){let e=(i||"").trim().toLowerCase();if(!e)return null;if(ax.test(e))return Lo(ql[0],[]);if(rx.test(e)&&Ql)return Lo(Ql,$l(e),!0);if(ox.some(s=>s.test(e)))return eh(i);let t=$l(e),n=ql.map(s=>({t:s,s:hx(s,e,t)})).sort((s,r)=>r.s-s.s);return n[0].s>=2.5?Lo(n[0].t,t):sx.test(e)&&n[0].s<1?fx():n[0].s>=1.2?Lo(n[0].t,t):eh(i)}var Bd=[];function Gd(){return typeof document>"u"?null:(typeof window<"u"&&window.__MASCOT_CHAT_CONFIG||{}).proxyUrl||document.querySelector("[data-chat-proxy]")?.dataset.chatProxy||null}function zd(){return!!Gd()}async function Hd(i){let e=(i||"").trim().slice(0,300),t=Gd();if(!e||!t)return null;try{let n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:e,history:Bd.slice(-3)})});if(!n.ok)return null;let s=await n.json();return s.isOutOfScope?eh(e):s.body?(Bd.push({q:e,a:`${s.title}. ${s.body}`.replace(/\*\*/g,"")}),{tag:s.tag||"\u{1F4AC} matthew",title:s.title||"",body:s.body,footer:s.footer?`\u{1F4AC} ${s.footer}`:"\u{1F4AC} ask me something else below"}):null}catch{return null}}function px(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.lineTo(e+n-r,t),i.quadraticCurveTo(e+n,t,e+n,t+r),i.lineTo(e+n,t+s-r),i.quadraticCurveTo(e+n,t+s,e+n-r,t+s),i.lineTo(e+r,t+s),i.quadraticCurveTo(e,t+s,e,t+s-r),i.lineTo(e,t+r),i.quadraticCurveTo(e,t,e+r,t),i.closePath()}function mx(i){let e=(i||"").trim().split(/\s+/).filter(Boolean),t=[],n=!1;for(let s of e){let r=(s.match(/\*\*/g)||[]).length,a=s.replace(/\*\*/g,"");r>=2?t.push({text:a,bold:!0}):r===1?n?(t.push({text:a,bold:!0}),n=!1):(n=!0,t.push({text:a,bold:!0})):t.push({text:a,bold:n})}return t}var zi='-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif';function gx(i,e,t,n){let s=[],r=[],a=0;for(let o of e){i.font=`${o.bold?750:450} ${n}px ${zi}`;let c=i.measureText(o.text+" ").width;r.length&&a+c>t?(s.push(r),r=[o],a=c):(r.push(o),a+=c)}return r.length&&s.push(r),s}function bx(i,e,t){let n=e.split(/\s+/),s=[],r="";for(let a of n){let o=r?r+" "+a:a;r&&i.measureText(o).width>t?(s.push(r),r=a):r=o}return r&&s.push(r),s}function th(i){let t=[i.title,i.body,i.footer].filter(Boolean).join(" ").replace(/\*\*/g,"").split(/\s+/).filter(Boolean).length;return Math.min(26,Math.max(11,3.5+t*.3))}function Do(i,e){let t=i.getContext("2d"),n=i.width,s=i.height,r=e.step==="OUT OF SCOPE";t.fillStyle="#fffdf8",t.fillRect(0,0,n,s),t.save(),t.font='900 210px Georgia, "Times New Roman", serif',t.fillStyle="rgba(63, 156, 56, 0.07)",t.textBaseline="top",t.fillText("\u201D",n-190,20),t.restore();let a=78,o=n-a*2,c=e.tag||"\u{1F44B} hey there";t.font=`700 38px ${zi}`;let l=Math.min(o,Math.ceil(t.measureText(c).width)+60),h=46,u=66;t.fillStyle=r?"#fff1f2":"#edf8eb",px(t,a,h,l,u,33),t.fill(),t.lineWidth=3.5,t.strokeStyle=r?"#e11d48":"#2e7d32",t.stroke(),t.fillStyle=r?"#be123c":"#1b5e20",t.textBaseline="middle",t.fillText(c,a+30,h+u/2+1,l-60);let d=e.footer?92:30,p=h+u+30,b=s-d;if(e.thinking){t.font=`800 70px ${zi}`,t.fillStyle="#111827",t.textBaseline="top",t.fillText(e.title||"Hmm, let me think",a,p+20,o);let v=e.dots??3;for(let g=0;g<3;g++)t.beginPath(),t.fillStyle=g<v?"#3f9c38":"rgba(63,156,56,0.22)",t.arc(a+34+g*70,p+190,22,0,Math.PI*2),t.fill()}else{let v=mx(e.body||""),g=64,m,y,E,_;for(;g>=40&&(m=Math.round(g*1.16),t.font=`800 ${m}px ${zi}`,y=e.title?bx(t,e.title,o).slice(0,2):[],E=gx(t,v,o,g),_=y.length*m*1.18+(y.length?18:0)+E.length*g*1.42,!(_<=b-p));g-=2);let S=p+Math.max(0,(b-p-_)*.35);t.textBaseline="top",t.font=`800 ${m}px ${zi}`,t.fillStyle="#111827";for(let f of y)t.fillText(f,a,S,o),S+=m*1.18;y.length&&(S+=18);let T=Math.floor((b-S)/(g*1.42));for(let f of E.slice(0,Math.max(1,T))){let M=a;for(let D of f)t.font=`${D.bold?750:450} ${g}px ${zi}`,t.fillStyle=D.bold?r?"#be123c":"#166534":"#1f2937",t.fillText(D.text,M,S),M+=t.measureText(D.text+" ").width;S+=g*1.42}}e.footer&&(t.strokeStyle="rgba(17,24,39,0.10)",t.lineWidth=3,t.beginPath(),t.moveTo(a,s-d+8),t.lineTo(n-a,s-d+8),t.stroke(),t.font=`600 36px ${zi}`,t.fillStyle="#57606a",t.textBaseline="middle",t.fillText(e.footer,a,s-d/2+6,o))}var Wd=document.querySelector("[data-mascot]");Wd&&xx(Wd);function xx(i){let e=i.querySelector(".mascot-stage"),t=i.querySelector(".mascot-sound"),n=new URLSearchParams(location.search),s=n.get("glb")||i.dataset.mascotGlb||"assets/mascot.glb",r=n.has("debug"),a=matchMedia("(prefers-reduced-motion: reduce)"),o=a.matches||n.get("motion")==="reduce";a.addEventListener?.("change",B=>{o=B.matches});let c=document.createElement("canvas");c.className="mascot-canvas",c.setAttribute("role","img"),c.setAttribute("aria-label","3D mascot: a green frog in red cat-eye visor glasses sipping a Yoo-hoo through a straw next to a 3D cartoon speech bubble.");let l;try{l=new Mo({canvas:c,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(B){i.classList.add("mascot-fallback"),console.warn("[mascot] WebGL unavailable, showing the poster",B);return}e.appendChild(c),l.outputColorSpace=ut,l.toneMapping=yr,l.toneMappingExposure=1,l.setClearColor(0,0);let u=Math.min(window.devicePixelRatio||1,2);l.setPixelRatio(u);let d=new ds,p=new _t(32,1,.5,60);d.environment=yx(l),d.environmentIntensity=.5;let b=new Nn(16774118,2.1);b.position.set(-3.6,4.6,5.2);let v=new Nn(14543103,.38);v.position.set(5.2,1.3,4.6);let g=new Nn(16777215,1.6);g.position.set(2.8,3.6,-4.6);let m=new Nn(15794160,.95);m.position.set(-3.4,2.6,-3.8),d.add(b,v,g,m);let y={uTime:{value:0},uWrap:{value:.24},uRim:{value:.42},uRimColor:{value:new Re(15400920)},uBlush:{value:0},uBlushColor:{value:new Re(16726128)},uTop:{value:0},uFlow:{value:0},uSputter:{value:0}},E=document.createElement("canvas");E.width=1536,E.height=900;let _=new sr(E);_.colorSpace=ut,_.flipY=!1;let S={mode:"about",aboutIdx:0,tabKey:null,tabIdx:0,phase:"visible",timer:0,showDur:th(tn.about[0]),hideDur:7.5,scale:new vi(22,.38,1),targetScale:1,currentCard:tn.about[0]};function T(B,U=3.2,ve=0){S.currentCard=B,S.showDur=B.thinking?1e9:th(B)+ve,Do(E,B),_.needsUpdate=!0,S.phase="visible",S.timer=0,S.targetScale=1,S.scale.kick(U)}Do(E,tn.about[0]),_.needsUpdate=!0;let f={ready:!1,running:!1,visible:!0,inView:!0,nodes:{},morphs:{},liquid:null,cursor:null,track:{yaw:{x:0,v:0},pitch:{x:0,v:0},roll:{x:0,v:0}},pointer:{x:0,y:0,has:!1,touch:!1,last:-1e9},sip:null,sipT:0,ei:0,rig:new Ro,nextIdleSip:4+Math.random()*3,lastSipEnd:-10,level:1,empty:!1,clicks:[],queued:null,hoverBox:!1,hoverBubble:!1,refill:0,eye:new O,rest:{},t:0,bubble:S},M=new Po,D=new To;D.setMeshoptDecoder(Td),D.load(s,B=>{R(B.scene),f.ready=!0,q(),l.render(d,p),i.classList.add("mascot-ready"),At()},void 0,B=>{console.warn("[mascot] model failed to load, keeping the poster",B),i.classList.add("mascot-fallback")});function R(B){d.add(B);let U=f.nodes;B.traverse(C=>{var J;if(U[C.name]=C,C.isMesh&&(C.frustumCulled=!1,C.morphTargetDictionary))for(let[j,ue]of Object.entries(C.morphTargetDictionary))((J=f.morphs)[j]||(J[j]=[])).push([C,ue])});let ve=Math.min(8,l.capabilities.getMaxAnisotropy()),ne=U.Box?.material?.map||null;ne&&(ne.anisotropy=ve,ne.colorSpace=ut),_.anisotropy=ve;let le=N(new pn({vertexColors:!0,roughness:.62,metalness:0}),{blush:!0}),w=N(new pn({vertexColors:!0,color:15261916,roughness:.68,metalness:0,envMapIntensity:.6}),{rim:.1,rimColor:16765608}),x=N(new gt({vertexColors:!0,roughness:.3,clearcoat:.55,clearcoatRoughness:.12}),{wrap:.3,rim:.1}),F=new gt({vertexColors:!0,roughness:.3,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:.95}),te=N(new pn({vertexColors:!0,roughness:.42,metalness:0}),{wrap:.2,rim:.22,rimColor:12570879}),Z=N(new pn({map:ne,vertexColors:!0,roughness:.8,metalness:0}),{wrap:.3,rim:.08}),oe=new Qt({color:16726598,toneMapped:!1}),ae=N(new gt({vertexColors:!0,roughness:.36,clearcoat:.45,clearcoatRoughness:.14}),{wrap:.25,rim:.25,rimColor:14412542}),K=new Qt({map:_,toneMapped:!1}),V=(C,J)=>{U[C]&&(U[C].material=J)};if(V("Head",le),V("Hand",le),V("Lips",w),V("VisorFrame",x),V("VisorLenses",F),V("Base",te),V("Sleeves",te),V("Box",Z),V("Prompt",oe),V("PromptCursor",oe),V("ChatBubbleFrame",ae),V("ChatBubbleFace",K),U.Liquid){f.liquid=U.Liquid,U.Liquid.material=H(),U.Liquid.renderOrder=1;let C=U.Liquid.userData||{};f.tBox=C.t_box??.3,f.tMouth=C.t_mouth??.93}U.Straw&&(U.Straw.material=z(),U.Straw.renderOrder=2),f.cursor=U.PromptCursor||null;for(let C of["Mascot","HeadTrack","HeadSquash","Visor","Base","DrinkRig","BubbleRig"])U[C]&&(f.rest[C]={p:U[C].position.clone(),q:U[C].quaternion.clone(),s:U[C].scale.clone()});B.updateMatrixWorld(!0),U.VisorLenses&&new Vt().setFromObject(U.VisorLenses).getCenter(f.eye);let re=new Vt().setFromObject(B);f.bounds=re}function N(B,{wrap:U=.42,rim:ve=.33,rimColor:ne=null,blush:le=!1}={}){let w={uWrapLocal:{value:U},uRimLocal:{value:ve},uRimColorLocal:{value:new Re(ne??15400920)}};return B.onBeforeCompile=x=>{Object.assign(x.uniforms,w,{uBlush:y.uBlush,uBlushColor:y.uBlushColor}),x.fragmentShader=`uniform float uWrapLocal; uniform float uRimLocal; uniform vec3 uRimColorLocal;
uniform float uBlush; uniform vec3 uBlushColor;
`+x.fragmentShader.replace("#include <lights_physical_pars_fragment>",Ge.lights_physical_pars_fragment.replace("reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );",`float wrapNL = saturate( ( dot( geometryNormal, directLight.direction ) + uWrapLocal ) / ( 1.0 + uWrapLocal ) );
reflectedLight.directDiffuse += ( wrapNL * directLight.color ) * diffuseBRDF * ( 1.0 - F );`)).replace("#include <color_fragment>",le?`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
 diffuseColor.rgb *= vColor.rgb;
 float bm = smoothstep(0.10, 0.85, vColor.a) * clamp(uBlush, 0.0, 1.0);
 diffuseColor.g *= (1.0 - 0.76 * bm);
 diffuseColor.rgb = mix(diffuseColor.rgb, uBlushColor, bm * 0.88);
#endif`:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
 diffuseColor.rgb *= vColor.rgb;
#endif`).replace("#include <opaque_fragment>",le?`float fres = pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), 3.0);
outgoingLight += uRimColorLocal * fres * uRimLocal * (0.35 + 0.65 * diffuseColor.g);
#if defined( USE_COLOR_ALPHA )
 float bmGlow = smoothstep(0.12, 0.85, vColor.a) * clamp(uBlush, 0.0, 1.0);
 outgoingLight += vec3(0.36, 0.05, 0.14) * bmGlow;
#endif
#include <opaque_fragment>`:`float fres = pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), 3.0);
outgoingLight += uRimColorLocal * fres * uRimLocal * (0.35 + 0.65 * diffuseColor.g);
#include <opaque_fragment>`)},B.customProgramCacheKey=()=>`stylised-v3-${U}-${ve}-${le}`,B}function H(){let B=new gt({color:5383693,roughness:.14,clearcoat:.75,clearcoatRoughness:.08,side:jt,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return B.onBeforeCompile=U=>{Object.assign(U.uniforms,{uTop:y.uTop,uFlow:y.uFlow,uSputter:y.uSputter,uTime:y.uTime}),U.vertexShader=`varying float vT;
`+U.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
 vT = uv.x;`),U.fragmentShader=`varying float vT; uniform float uTop, uFlow, uSputter, uTime;
`+U.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
 if (uTop < 0.0) discard;
 float top = uTop + 0.006 * sin(uTime * 24.0) * step(0.02, uTop);
 if (vT > top) discard;
 float bub = fract(vT * 10.0 - uTime * 3.0);
 if (uSputter > 0.01 && bub < uSputter * 0.45 && vT > 0.22) discard;`).replace("#include <color_fragment>",`#include <color_fragment>
 float streak = 0.5 + 0.5 * sin((vT * 46.0 - uTime * 9.0) * 6.2831);
 float swirl = 0.5 + 0.5 * cos((vT * 22.0 - uTime * 5.0) * 6.2831);
 diffuseColor.rgb *= 0.92 + (0.42 * streak + 0.16 * swirl) * (0.25 + 0.75 * uFlow);
 diffuseColor.rgb += vec3(0.28, 0.15, 0.06) * smoothstep(top - 0.048, top, vT);
 if (!gl_FrontFacing) diffuseColor.rgb *= 0.72;`)},B.customProgramCacheKey=()=>"liquid-v2",B}function z(){let B=new gt({color:16251903,roughness:.12,transparent:!0,opacity:.32,depthWrite:!1,clearcoat:.85,clearcoatRoughness:.05,side:mn});return B.onBeforeCompile=U=>{U.fragmentShader=U.fragmentShader.replace("#include <opaque_fragment>",`float fr = pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), 2.1);
diffuseColor.a = clamp(0.14 + 0.76 * fr, 0.0, 0.90);
outgoingLight += vec3(0.14) * fr;
#include <opaque_fragment>`)},B.customProgramCacheKey=()=>"straw-v2",B}let I={min:new O(-1.29,-.82,-.9),max:new O(1.32,1.42,1.28)},Y={bubbleOffset:new O,bubbleScale:1};function $(B){return B>=1.25?{rect:{x0:.6,x1:.965,y0:.045,y1:.8},bubbleOffset:[.04,.1,0],bubbleScale:1.22}:{rect:{x0:.22,x1:.97,y0:.4,y1:.7},bubbleOffset:[1.9,1.8,.1],bubbleScale:1.32}}function q(){let B=e.getBoundingClientRect(),U=Math.max(1,Math.round(B.width)),ve=Math.max(1,Math.round(B.height));l.setSize(U,ve,!1);let ne=U/ve;p.aspect=ne;let le=$(ne);Y.bubbleOffset.fromArray(le.bubbleOffset),Y.bubbleScale=le.bubbleScale;let{x0:w,x1:x,y0:F,y1:te}=le.rect,Z=I.max.x-I.min.x,oe=I.max.y-I.min.y,ae=Math.max(oe/(2*(te-F)),Z/(2*(x-w)*ne)),K=(I.min.x+I.max.x)/2,V=(I.min.y+I.max.y)/2,re=new O(K-(w+x-1)*ae*ne,V-(1-(F+te))*ae,.35),C=xi.degToRad(6),J=ae/Math.tan(xi.degToRad(p.fov)/2);p.position.set(re.x,re.y+Math.sin(C)*J,re.z+Math.cos(C)*J),p.lookAt(re.x,re.y,re.z),p.updateProjectionMatrix(),f.ready&&!f.running&&l.render(d,p)}new ResizeObserver(q).observe(e);let se=new br,X=new Ve,ee=2.4;function ie(B){f.pointer.x=B.clientX,f.pointer.y=B.clientY,f.pointer.has=!0,f.pointer.last=performance.now(),f.pointer.touch=B.pointerType==="touch"}addEventListener("pointermove",ie,{passive:!0}),addEventListener("pointerdown",ie,{passive:!0}),document.addEventListener("pointerleave",()=>{f.pointer.has=!1}),addEventListener("blur",()=>{f.pointer.has=!1});function Se(){if(S.mode==="tab"&&S.tabKey&&tn.tabs[S.tabKey]){let B=tn.tabs[S.tabKey];S.tabIdx=(S.tabIdx+1)%B.length,T(B[S.tabIdx],3.4)}else S.mode="about",S.aboutIdx=(S.aboutIdx+1)%tn.about.length,T(tn.about[S.aboutIdx],3.4)}function Ue(B){let U=tn.tabs[B];!U||!U.length||(S.mode="tab",S.tabKey=B,S.tabIdx=0,T(U[0],4.2,3),f.rig.event({name:"kickVisor",amount:.55}))}function Q(){S.mode="about",S.tabKey=null,T(tn.about[S.aboutIdx],2.8)}let me=0;function Ae(B){let U=(B||"").trim();if(!U)return null;let ve=++me;S.mode="qa",f.rig.event({name:"kickVisor",amount:.65}),f.rig.event({name:"kickSquash",amount:.35});let ne=Vd(U);if(!zd())return T(ne,4.6,4),ne;let le=1;T({thinking:!0,tag:"\u{1F4AD} thinking",title:"Hmm, good question",dots:le},3.6);let w=setInterval(()=>{if(ve!==me||!S.currentCard.thinking)return clearInterval(w);le=le%3+1,Do(E,{...S.currentCard,dots:le}),_.needsUpdate=!0},380),x=new Promise(F=>setTimeout(()=>F(null),9e3));return Promise.race([Hd(U),x]).then(F=>{clearInterval(w),ve===me&&T(F||ne,3,4)}),ne}i.addEventListener("click",B=>{if(B.target.closest("a, button, input, form, [data-ask-bar]")||!f.ready)return;let U=f.nodes;ge(B.clientX,B.clientY),se.setFromCamera(X,p);let ve=[U.ChatBubbleFace,U.ChatBubbleFrame].filter(Boolean);if(S.targetScale>.1&&ve.length&&se.intersectObjects(ve,!1).length>0){Se();return}if(o)return;let ne=performance.now();if(f.clicks=f.clicks.filter(le=>ne-le<1800),f.clicks.push(ne),M.unlock(),f.empty){ct();return}if(f.clicks.length>=4){f.clicks=[],Ne("empty");return}Ne("normal")}),t?.addEventListener("click",B=>{B.stopPropagation();let U=M.toggle();t.setAttribute("aria-pressed",String(U)),t.querySelector("span").textContent=U?"Sound on":"Sound off",U&&(f.ready&&!f.sip&&!f.empty&&!o?Ne("normal"):M.playDrinkClip(1.1))});function Pe(){if(!f.ready||!f.pointer.has||f.pointer.touch)return;let B=f.nodes;if(!B.Box)return;ge(f.pointer.x,f.pointer.y),se.setFromCamera(X,p);let U=S.targetScale>.1&&se.intersectObjects([B.ChatBubbleFace,B.ChatBubbleFrame].filter(Boolean),!1).length>0,ve=!U&&se.intersectObjects([B.Box,B.Hand].filter(Boolean),!1).length>0;f.hoverBubble=U,(ve!==f.hoverBox||U)&&(f.hoverBox=ve,c.style.cursor=ve||U?"pointer":"",ve&&!o&&!f.sip&&!f.empty&&f.t-f.lastSipEnd>2.5&&Ne("normal"))}function ge(B,U){let ve=c.getBoundingClientRect();X.set((B-ve.left)/ve.width*2-1,-((U-ve.top)/ve.height)*2+1)}function Ne(B,U){if(f.empty&&B!=="empty")return;if(f.sip){B==="empty"&&(f.queued="empty");return}B==="normal"&&f.level<=.2&&(B="empty");let ve=U??(B==="empty"?8:2+Math.floor(Math.random()*3));f.sip=Id({gulps:ve,kind:B,strength:.85+Math.random()*.3}),f.sipT=0,f.ei=0,M.sipStart(f.sip)}function ct(){f.empty=!1,f.level=1,f.rig.sagTarget=0,f.rig.squeeze.x=Math.max(f.rig.squeeze.x,.85),f.rig.squeeze.kick(-6),f.refill=1,M.pop(1),f.rig.event({name:"kickSquash",amount:.7}),f.rig.event({name:"kickVisor",amount:1})}function Le(){let B=f.sip.kind;if(f.sip=null,f.lastSipEnd=f.t,f.nextIdleSip=f.t+6+Math.random()*4,B==="empty"?(f.level=0,f.empty=!0,f.rig.sagTarget=1):B==="normal"&&(f.level=Math.max(0,f.level-.13),f.rig.sagTarget=(1-f.level)*.55),f.queued){let U=f.queued;f.queued=null,Ne(U)}}function Je(B,U,ve,ne){ne=Math.max(0,ne);let le=B.x-U,w=Math.exp(-ve*ne),x=(le+(B.v+ve*le)*ne)*w;B.v=(B.v-ve*(B.v+ve*le)*ne)*w,B.x=U+x}let Qe=(B,U)=>U*Math.tanh(B/U),Be={last:0},Xe={acc:0,n:0,slow:0,fps:60,ft:0},lt=0;function At(){f.running||f.frozen||!f.ready||!f.visible||!f.inView||(f.running=!0,Be.last=-1,lt=requestAnimationFrame(Ht))}function it(){f.running=!1,cancelAnimationFrame(lt)}let Tt=new O,xt=new rn(new O(0,0,1),-ee);function Ht(B){if(!f.running)return;lt=requestAnimationFrame(Ht),Be.last<0&&(Be.last=B);let U=Math.max(0,Math.min((B-Be.last)/1e3,1/20));Be.last=Math.max(Be.last,B),Wt(U,B)}function Wt(B,U){f.t+=B,y.uTime.value=f.t;let ve=performance.now(),ne=!f.pointer.has||U-f.pointer.last>(f.pointer.touch?2500:3200),le=0,w=0,x=o?.2:.34,F=o?.07:.14,te=o?.04:.07;if(!ne)ge(f.pointer.x,f.pointer.y),se.setFromCamera(X,p),se.ray.intersectPlane(xt,Tt)&&(Tt.sub(f.eye),le=Math.atan2(Tt.x,Tt.z),w=-Math.atan2(Tt.y,Math.hypot(Tt.x,Tt.z)));else if(!o){let V=f.t;le=.26*Math.sin(V/2.3)+.08*Math.sin(V/1.27+1.3),w=-.03+.05*Math.sin(V/2.9+.4)}le=Qe(le,x),w=w<0?Qe(w,F):Qe(w,te);let Z=o?4.2:7.6,oe=f.track;if(Je(oe.yaw,le,Z,B),Je(oe.pitch,w,Z,B),Je(oe.roll,-.13*le,Z*.85,B),S.timer+=B,!o&&!f.frozen)if(S.phase==="visible"&&S.timer>=S.showDur)if(S.mode==="tab"&&S.tabKey&&tn.tabs[S.tabKey]){let V=tn.tabs[S.tabKey];S.tabIdx=(S.tabIdx+1)%V.length,T(V[S.tabIdx],2.8)}else S.phase="hiding",S.timer=0,S.targetScale=0;else S.phase==="hiding"&&S.timer>=S.hideDur&&(S.mode="about",S.aboutIdx=(S.aboutIdx+1)%tn.about.length,T(tn.about[S.aboutIdx],3.4));S.scale.step(B,S.targetScale),!o&&!f.sip&&!f.empty&&f.t>f.nextIdleSip&&!document.hidden&&Ne("normal");let ae=null;if(f.sip){f.sipT+=B;let V=f.sip;for(;f.ei<V.events.length&&V.events[f.ei].t<=f.sipT;){let re=V.events[f.ei++];f.rig.event(re),M.event(re,V)}ae=Rd(V,Math.min(f.sipT,V.duration)),f.sipT>=V.duration&&Le()}let K=f.rig.update(B,ae||(f.empty?{squeeze:.88}:null));Yt(ae,K,B),f.cursor&&(f.cursor.visible=o||Math.floor(f.t/.53)%2===0),(f.frameNo=(f.frameNo||0)+1)%6===0&&Pe(),l.render(d,p),L(U,performance.now()-ve,B)}function Yt(B,U,ve){let ne=f.nodes,le=f.rest,w=f.track,x=U.squash,F=o?0:Math.sin(f.t*2.1);if(ne.Mascot&&le.Mascot){let ae=B?B.leanPitch*.42:0;ne.Mascot.rotation.set(w.pitch.x*.42+ae,w.yaw.x*.46,w.roll.x*.44,"YXZ"),ne.Mascot.position.copy(le.Mascot.p),ne.Mascot.position.y+=.006*F+.01*x,ne.Mascot.scale.set(1-.012*x,1+.02*x,1-.012*x)}if(ne.HeadTrack&&le.HeadTrack&&ne.HeadTrack.rotation.set(w.pitch.x*.58,w.yaw.x*.54,w.roll.x*.56,"YXZ"),ne.HeadSquash&&le.HeadSquash&&(ne.HeadSquash.rotation.set(B?B.leanPitch*.75:0,B?B.leanYaw:0,0),ne.HeadSquash.scale.set(1-.028*x,1+.056*x,1-.028*x)),ne.Visor&&le.Visor&&(ne.Visor.position.copy(le.Visor.p),ne.Visor.position.y+=.011*U.visor,ne.Visor.position.z+=.005*Math.abs(U.visor),ne.Visor.quaternion.copy(le.Visor.q),ne.Visor.rotateX(.022*U.visor)),ne.BubbleRig&&le.BubbleRig){let ae=Math.max(1e-4,S.scale.x);ne.BubbleRig.visible=ae>.015,ne.BubbleRig.position.copy(le.BubbleRig.p).add(Y.bubbleOffset);let K=o?0:Math.sin(f.t*1.65)*.018;ne.BubbleRig.position.y+=K;let V=(o?0:Math.sin(f.t*1.1)*.012)+(ae-1)*.14;ne.BubbleRig.rotation.set(w.pitch.x*.08,w.yaw.x*.1,V,"YXZ");let re=ae*Y.bubbleScale;ne.BubbleRig.scale.set(re,re,re)}let te=(ae,K)=>{let V=f.morphs[ae];if(V)for(let[re,C]of V)re.morphTargetInfluences[C]=K};te("CheekPuff",B?B.cheek:0),te("Pucker",B?B.pucker:0),te("SwallowHigh",B?B.swallowHi:0),te("SwallowLow",B?B.swallowLo:0),te("Squeeze",U.squeeze),te("Sag",U.sag);let Z=B?Math.min(1,Math.max(0,B.grip+.7*(U.squeeze-B.squeeze))):Math.max(0,.7*U.squeeze);te("Grip",Z);let oe=B?B.fill:0;te("Fill",oe),y.uTop.value=oe>.001?xi.lerp(Math.max(.04,f.tBox-.14),f.tMouth+.01,oe):-1,y.uFlow.value=B?B.flow:0,y.uSputter.value=B?B.sputter:0,y.uBlush.value=B?B.blush:0}function L(B,U,ve){Xe.acc+=ve,Xe.n++,Xe.acc>=1&&(Xe.fps=Xe.n/Xe.acc,Xe.ft=Xe.acc/Xe.n*1e3,Xe.fps<50&&u>1?Xe.slow++:Xe.slow=0,Xe.slow>=2&&(u=Math.max(1,u-.25),l.setPixelRatio(u),q(),Xe.slow=0),r&&at(U),Xe.acc=0,Xe.n=0)}let Ct;function at(B){Ct||(Ct=document.createElement("pre"),Ct.className="mascot-debug",i.appendChild(Ct));let U=l.info.render,ve=l.getContext(),ne=ve.getExtension("WEBGL_debug_renderer_info"),le=ne?ve.getParameter(ne.UNMASKED_RENDERER_WEBGL):"n/a";Ct.textContent=`fps ${Xe.fps.toFixed(1)}  frame ${Xe.ft.toFixed(1)} ms  cpu ${B.toFixed(2)} ms
dpr ${u}  draws ${U.calls}  tris ${U.triangles}
${le}`,window.__mascotPerf={fps:Xe.fps,ft:Xe.ft,cpuMs:B,dpr:u,draws:U.calls,tris:U.triangles,gpu:le}}document.addEventListener("visibilitychange",()=>{f.visible=!document.hidden,f.visible?At():it()}),new IntersectionObserver(B=>{f.inView=B[0].isIntersecting,f.inView?At():it()},{threshold:0}).observe(i),window.__mascot={state:f,sound:M,sip:(B="normal",U)=>Ne(B,U),refill:ct,look:(B,U)=>ie({clientX:B,clientY:U,pointerType:"mouse"}),showTabTopic:Ue,clearTabTopic:Q,ask:Ae,nextBubbleCard:Se,renderer:l,camera:p,scene:d,freeze(){it(),f.frozen=!0},resume(){f.frozen=!1,At()},advance(B,U=60){let ve=f.fakeNow||performance.now(),ne=Math.max(1,Math.round(B*U));for(let le=0;le<ne;le++)ve+=1e3/U,f.pointer.last=f.pointer.has?ve:f.pointer.last,Wt(1/U,ve);f.fakeNow=ve},snapshot(B="image/png"){return l.render(d,p),c.toDataURL(B)}}}function yx(i){let e=new ds,t=new Nt(new lr(20,48,24),new fn({side:Ut,depthWrite:!1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec3 vP; void main(){ float h = vP.y; vec3 top = vec3(0.95, 0.97, 1.0); vec3 hor = vec3(0.62, 0.66, 0.62); vec3 bot = vec3(0.24, 0.27, 0.22); vec3 c = h > 0.0 ? mix(hor, top, pow(h, 0.55)) : mix(hor, bot, pow(-h, 0.45)); gl_FragColor = vec4(c, 1.0); }"}));e.add(t);let n=(a,o,c,l,h,u=1)=>{let d=new Nt(new or(a,48),new Qt({color:new Re(h,h,h*.97),side:jt}));d.position.set(o,c,l),d.scale.x=u,d.lookAt(0,0,0),e.add(d)};n(2.6,-6,7.5,8,7.5),n(4,2,9,2,1.6),n(1.8,4,5,-8,5),n(1.5,-5,4,-7,3);let s=new Ps(i),r=s.fromScene(e,.035).texture;return s.dispose(),r}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
