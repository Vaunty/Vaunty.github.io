var kh=0,pc=1,Vh=2;var mr=1,Gh=2,_s=3,pn=0,Ft=1,Kt=2,Ni=0,ys=1,mc=2,gc=3,bc=4,zh=5;var Li=100,Hh=101,Wh=102,qh=103,Xh=104,Kh=200,jh=201,Yh=202,Jh=203,xc=204,Ac=205,Zh=206,Qh=207,$h=208,eu=209,tu=210,nu=211,iu=212,su=213,ru=214,sa=0,ra=1,aa=2,ts=3,oa=4,ca=5,la=6,ha=7,vc=0,au=1,ou=2,Nn=0,_c=1,yc=2,Mc=3,Sc=4,Tc=5,Ec=6,gr=7,tc="attached",cu="detached",wc=300,Di=301,Ms=302,Ia=303,Ra=304,ui=1e3,hn=1001,ns=1002,bt=1003,Pa=1004;var Ui=1005;var St=1006,Ss=1007;var mn=1008;var $t=1009,Cc=1010,Ic=1011,Ts=1012,Na=1013,Mn=1014,an=1015,Sn=1016,La=1017,Da=1018,Fi=1020,Rc=35902,Pc=35899,Nc=1021,Lc=1022,gn=1023,qn=1026,ei=1027,Ua=1028,Fa=1029,mi=1030,Oa=1031;var Ba=1033,br=33776,xr=33777,Ar=33778,vr=33779,ka=35840,Va=35841,Ga=35842,za=35843,Ha=36196,Wa=37492,qa=37496,Xa=37488,Ka=37489,_r=37490,ja=37491,Ya=37808,Ja=37809,Za=37810,Qa=37811,$a=37812,eo=37813,to=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,co=37821,lo=36492,ho=36494,uo=36495,fo=36283,po=36284,yr=36285,mo=36286;var wi=2300,Ci=2301,na=2302,nc=2303,ic=2400,sc=2401,rc=2402,lu=2500;var Dc=0,Mr=1,Es=2,hu=3200;var go=0,uu=1,ti="",dt="srgb",Xt="srgb-linear",Hs="linear",nt="srgb";var ia=7680;var du=519,fu=512,pu=513,mu=514,Uc=515,gu=516,bu=517,Fc=518,Oc=519,Bc=35044;var kc="300 es",un=2e3,is=2001;function Td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ed(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xu(){let i=ss("canvas");return i.style.display="block",i}var Zl={},rs=null;function Ws(...i){let e="THREE."+i.shift();rs?rs("log",e,...i):console.log(e,...i)}function Au(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Au(i);let e="THREE."+i.shift();if(rs)rs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ue(...i){i=Au(i);let e="THREE."+i.shift();if(rs)rs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ei(...i){let e=i.join(" ");e in Zl||(Zl[e]=!0,Ie(...i))}function vu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _u={[sa]:sa,[aa]:la,[oa]:oa,[ts]:ca,[ra]:ra,[la]:aa,[ha]:ha,[ca]:ts},Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=1234567,Gs=Math.PI/180,Ii=180/Math.PI;function Ln(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Vc(i,e){return(i%e+e)%e}function wd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Cd(i,e,t){return i!==e?(t-i)/(e-i):0}function zs(i,e,t){return(1-t)*i+t*e}function Id(i,e,t,n){return zs(i,e,1-Math.exp(-t*n))}function Rd(i,e=1){return e-Math.abs(Vc(i,e*2)-e)}function Pd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Nd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ld(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dd(i,e){return i+Math.random()*(e-i)}function Ud(i){return i*(.5-Math.random())}function Fd(i){i!==void 0&&(Ql=i);let e=Ql+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Od(i){return i*Gs}function Bd(i){return i*Ii}function kd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),b=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*b,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*b,o*l);break;case"ZYZ":i.set(c*b,c*p,o*h,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zc(i,e){if(e.constructor===Float32Array)return i;let t=bo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Hc(i,e){if(e.constructor===Float32Array)return i;let t=bo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var gi={DEG2RAD:Gs,RAD2DEG:Ii,generateUUID:Ln,clamp:Ye,euclideanModulo:Vc,mapLinear:wd,inverseLerp:Cd,lerp:zs,damp:Id,pingpong:Rd,smoothstep:Pd,smootherstep:Nd,randInt:Ld,randFloat:Dd,randFloatSpread:Ud,seededRandom:Fd,degToRad:Od,radToDeg:Bd,isPowerOfTwo:kd,ceilPowerOfTwo:Vd,floorPowerOfTwo:Gc,setQuaternionFromProperEuler:Gd,normalize:Hc,denormalize:zc},jc=class jc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jc.prototype.isVector2=!0;var Ge=jc,sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],b=r[a+2],y=r[a+3];if(u!==y||c!==d||l!==p||h!==b){let g=c*d+l*p+h*b+u*y;g<0&&(d=-d,p=-p,b=-b,y=-y,g=-g);let m=1-o;if(g<.9995){let A=Math.acos(g),T=Math.sin(A);m=Math.sin(m*A)/T,o=Math.sin(o*A)/T,c=c*m+d*o,l=l*m+p*o,h=h*m+b*o,u=u*m+y*o}else{c=c*m+d*o,l=l*m+p*o,h=h*m+b*o,u=u*m+y*o;let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],b=r[a+3];return e[t]=o*b+h*u+c*p-l*d,e[t+1]=c*b+h*d+l*u-o*p,e[t+2]=l*b+h*p+o*d-c*u,e[t+3]=h*b-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),b=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u-d*p*b;break;case"YXZ":this._x=d*h*u+l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u+d*p*b;break;case"ZXY":this._x=d*h*u-l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u-d*p*b;break;case"ZYX":this._x=d*h*u-l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u+d*p*b;break;case"YZX":this._x=d*h*u+l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u-d*p*b;break;case"XZY":this._x=d*h*u-l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u+d*p*b;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yc=class Yc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yc.prototype.isVector3=!0;var F=Yc,Po=new F,$l=new sn,Jc=class Jc{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],b=n[8],y=s[0],g=s[3],m=s[6],A=s[1],T=s[4],_=s[7],M=s[2],E=s[5],f=s[8];return r[0]=a*y+o*A+c*M,r[3]=a*g+o*T+c*E,r[6]=a*m+o*_+c*f,r[1]=l*y+h*A+u*M,r[4]=l*g+h*T+u*E,r[7]=l*m+h*_+u*f,r[2]=d*y+p*A+b*M,r[5]=d*g+p*T+b*E,r[8]=d*m+p*_+b*f,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,b=t*u+n*d+s*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/b;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(No.makeScale(e,t)),this}rotate(e){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(No.makeRotation(-e)),this}translate(e,t){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jc.prototype.isMatrix3=!0;var Be=Jc,No=new Be,eh=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zd(){let i={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xt]:{primaries:e,whitePoint:n,transfer:Hs,toXYZ:eh,fromXYZ:th,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:eh,fromXYZ:th,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),i}var Ke=zd();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vi,ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vi===void 0&&(Vi=ss("canvas")),Vi.width=e.width,Vi.height=e.height;let s=Vi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hd=0,as=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lo(s[a].image)):r.push(Lo(s[a]))}else r=Lo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Wd=0,Do=new F,Tt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hn,s=hn,r=St,a=mn,o=gn,c=$t,l=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ln(),this.name="",this.source=new as(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Do).x}get height(){return this.source.getSize(Do).y}get depth(){return this.source.getSize(Do).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ui:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ui:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=wc;Tt.DEFAULT_ANISOTROPY=1;var Zc=class Zc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],b=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(b-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(b+g)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,_=(p+1)/2,M=(m+1)/2,E=(h+d)/4,f=(u+y)/4,S=(b+g)/4;return T>_&&T>M?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=f/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=S/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=f/r,s=S/r),this.set(n,s,r,t),this}let A=Math.sqrt((g-b)*(g-b)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(g-b)/A,this.y=(u-y)/A,this.z=(d-h)/A,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zc.prototype.isVector4=!0;var st=Zc,da=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Tt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new as(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends da{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qs=class extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fa=class extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ca=class Ca{constructor(e,t,n,s,r,a,o,c,l,h,u,d,p,b,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,p,b,y,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,p,b,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=b,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,b=o*h,y=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+b*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=b+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,b=l*h,y=l*u;t[0]=d+y*o,t[4]=b*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-b,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,b=l*h,y=l*u;t[0]=d-y*o,t[4]=-a*u,t[8]=b+p*o,t[1]=p+b*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,b=o*h,y=o*u;t[0]=c*h,t[4]=b*l-p,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=p*l-b,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,b=o*c,y=o*l;t[0]=c*h,t[4]=y-d*u,t[8]=b*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+b,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*c,p=a*l,b=o*c,y=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-b,t[2]=b*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qd,e,Xd)}lookAt(e,t,n){let s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),si.crossVectors(n,en),si.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),si.crossVectors(n,en)),si.normalize(),Pr.crossVectors(en,si),s[0]=si.x,s[4]=Pr.x,s[8]=en.x,s[1]=si.y,s[5]=Pr.y,s[9]=en.y,s[2]=si.z,s[6]=Pr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],b=n[2],y=n[6],g=n[10],m=n[14],A=n[3],T=n[7],_=n[11],M=n[15],E=s[0],f=s[4],S=s[8],D=s[12],R=s[1],L=s[5],V=s[9],k=s[13],N=s[2],q=s[6],J=s[10],W=s[14],se=s[3],X=s[7],$=s[11],ie=s[15];return r[0]=a*E+o*R+c*N+l*se,r[4]=a*f+o*L+c*q+l*X,r[8]=a*S+o*V+c*J+l*$,r[12]=a*D+o*k+c*W+l*ie,r[1]=h*E+u*R+d*N+p*se,r[5]=h*f+u*L+d*q+p*X,r[9]=h*S+u*V+d*J+p*$,r[13]=h*D+u*k+d*W+p*ie,r[2]=b*E+y*R+g*N+m*se,r[6]=b*f+y*L+g*q+m*X,r[10]=b*S+y*V+g*J+m*$,r[14]=b*D+y*k+g*W+m*ie,r[3]=A*E+T*R+_*N+M*se,r[7]=A*f+T*L+_*q+M*X,r[11]=A*S+T*V+_*J+M*$,r[15]=A*D+T*k+_*W+M*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],b=e[3],y=e[7],g=e[11],m=e[15],A=c*p-l*d,T=o*p-l*u,_=o*d-c*u,M=a*p-l*h,E=a*d-c*h,f=a*u-o*h;return t*(y*A-g*T+m*_)-n*(b*A-g*M+m*E)+s*(b*T-y*M+m*f)-r*(b*_-y*E+g*f)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],b=e[12],y=e[13],g=e[14],m=e[15],A=t*o-n*a,T=t*c-s*a,_=t*l-r*a,M=n*c-s*o,E=n*l-r*o,f=s*l-r*c,S=h*y-u*b,D=h*g-d*b,R=h*m-p*b,L=u*g-d*y,V=u*m-p*y,k=d*m-p*g,N=A*k-T*V+_*L+M*R-E*D+f*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/N;return e[0]=(o*k-c*V+l*L)*q,e[1]=(s*V-n*k-r*L)*q,e[2]=(y*f-g*E+m*M)*q,e[3]=(d*E-u*f-p*M)*q,e[4]=(c*R-a*k-l*D)*q,e[5]=(t*k-s*R+r*D)*q,e[6]=(g*_-b*f-m*T)*q,e[7]=(h*f-d*_+p*T)*q,e[8]=(a*V-o*R+l*S)*q,e[9]=(n*R-t*V-r*S)*q,e[10]=(b*E-y*_+m*A)*q,e[11]=(u*_-h*E-p*A)*q,e[12]=(o*D-a*L-c*S)*q,e[13]=(t*L-n*D+s*S)*q,e[14]=(y*T-b*M-g*A)*q,e[15]=(h*M-u*T+d*A)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,b=r*u,y=a*h,g=a*u,m=o*u,A=c*l,T=c*h,_=c*u,M=n.x,E=n.y,f=n.z;return s[0]=(1-(y+m))*M,s[1]=(p+_)*M,s[2]=(b-T)*M,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(d+m))*E,s[6]=(g+A)*E,s[7]=0,s[8]=(b+T)*f,s[9]=(g-A)*f,s[10]=(1-(d+y))*f,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Gi.set(s[0],s[1],s[2]).length(),o=Gi.set(s[4],s[5],s[6]).length(),c=Gi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);let l=1/a,h=1/o,u=1/c;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=un,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),b,y;if(c)b=r/(a-r),y=a*r/(a-r);else if(o===un)b=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===is)b=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=b,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=un,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),b,y;if(c)b=1/(a-r),y=a/(a-r);else if(o===un)b=-2/(a-r),y=-(a+r)/(a-r);else if(o===is)b=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=b,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ca.prototype.isMatrix4=!0;var Ve=Ca,Gi=new F,An=new Ve,qd=new F(0,0,0),Xd=new F(1,1,1),si=new F,Pr=new F,en=new F,nh=new Ve,ih=new sn,Xn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kd=0,sh=new F,zi=new sn,Bn=new Ve,Nr=new F,Ns=new F,jd=new F,Yd=new sn,rh=new F(1,0,0),ah=new F(0,1,0),oh=new F(0,0,1),ch={type:"added"},Jd={type:"removed"},Hi={type:"childadded",child:null},Uo={type:"childremoved",child:null},ft=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Xn,n=new sn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Be}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(oh,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ns,Nr,this.up):Bn.lookAt(Nr,Ns,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Bn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jd),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),b=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ft.DEFAULT_UP=new F(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zd={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,b=.005;l.inputState.pinching&&d>p+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Fo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Vc(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fo(a,r,e+1/3),this.g=Fo(a,r,e),this.b=Fo(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Ke.workingToColorSpace(Vt.copy(this),e),Math.round(Ye(Vt.r*255,0,255))*65536+Math.round(Ye(Vt.g*255,0,255))*256+Math.round(Ye(Vt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=dt){Ke.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Lr);let n=zs(ri.h,Lr.h,t),s=zs(ri.s,Lr.s,t),r=zs(ri.l,Lr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Le;Le.NAMES=yu;var ls=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vn=new F,kn=new F,Oo=new F,Vn=new F,Wi=new F,qi=new F,lh=new F,Bo=new F,ko=new F,Vo=new F,Go=new st,zo=new st,Ho=new st,hi=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vn.subVectors(e,t),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vn.subVectors(s,t),kn.subVectors(n,t),Oo.subVectors(e,t);let a=vn.dot(vn),o=vn.dot(kn),c=vn.dot(Oo),l=kn.dot(kn),h=kn.dot(Oo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,b=(a*h-o*c)*d;return r.set(1-p-b,b,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Go.setScalar(0),zo.setScalar(0),Ho.setScalar(0),Go.fromBufferAttribute(e,t),zo.fromBufferAttribute(e,n),Ho.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(zo,r.y),a.addScaledVector(Ho,r.z),a}static isFrontFacing(e,t,n,s){return vn.subVectors(n,t),kn.subVectors(e,t),vn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),vn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,n),qi.subVectors(r,n),Bo.subVectors(e,n);let c=Wi.dot(Bo),l=qi.dot(Bo);if(c<=0&&l<=0)return t.copy(n);ko.subVectors(e,s);let h=Wi.dot(ko),u=qi.dot(ko);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Wi,a);Vo.subVectors(e,r);let p=Wi.dot(Vo),b=qi.dot(Vo);if(b>=0&&p<=b)return t.copy(r);let y=p*l-c*b;if(y<=0&&l>=0&&b<=0)return o=l/(l-b),t.copy(n).addScaledVector(qi,o);let g=h*b-p*u;if(g<=0&&u-h>=0&&p-b>=0)return lh.subVectors(r,s),o=(u-h)/(u-h+(p-b)),t.copy(s).addScaledVector(lh,o);let m=1/(g+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(Wi,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gt=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Ur.subVectors(this.max,Ls),Xi.subVectors(e.a,Ls),Ki.subVectors(e.b,Ls),ji.subVectors(e.c,Ls),ai.subVectors(Ki,Xi),oi.subVectors(ji,Ki),yi.subVectors(Xi,ji);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-yi.z,yi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,yi.z,0,-yi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-yi.y,yi.x,0];return!Wo(t,Xi,Ki,ji,Ur)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,Xi,Ki,ji,Ur))?!1:(Fr.crossVectors(ai,oi),t=[Fr.x,Fr.y,Fr.z],Wo(t,Xi,Ki,ji,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new F,new F,new F,new F,new F,new F,new F,new F],_n=new F,Dr=new Gt,Xi=new F,Ki=new F,ji=new F,ai=new F,oi=new F,yi=new F,Ls=new F,Ur=new F,Fr=new F,Mi=new F;function Wo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);let o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),c=e.dot(Mi),l=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var yt=new F,Or=new Ge,Qd=0,Ut=class extends Cn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bc,this.updateRanges=[],this.gpuType=an,this.version=0,this._normalizationScale=e!==void 0?bo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hc(e,this.array)}};var Xs=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ks=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},$d=new Gt,Ds=new F,qo=new F,Yt=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$d.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);let t=Ds.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(qo)),this.expandByPoint(Ds.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ef=0,ln=new Ve,Xo=new ft,Yi=new F,tn=new Gt,Us=new Gt,Pt=new F,zt=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Td(e)?Ks:Xs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(tn.min,Us.min),tn.expandByPoint(Pt),Pt.addVectors(tn.max,Us.max),tn.expandByPoint(Pt)):(tn.expandByPoint(Us.min),tn.expandByPoint(Us.max))}tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pt.fromBufferAttribute(o,l),c&&(Yi.fromBufferAttribute(e,l),Pt.add(Yi)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new F,c[D]=new F;let h=new F,u=new F,d=new F,p=new Ge,b=new Ge,y=new Ge,g=new F,m=new F;function A(D,R,L){l[D]=l[R]=l[L]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,L),p.fromBufferAttribute(r,D),b.fromBufferAttribute(r,R),y.fromBufferAttribute(r,L),u.sub(h),d.sub(h),b.sub(p),y.sub(p);let V=1/(b.x*y.y-y.x*b.y);isFinite(V)&&(g.copy(u).multiplyScalar(y.y).addScaledVector(d,-b.y).multiplyScalar(V),m.copy(d).multiplyScalar(b.x).addScaledVector(u,-y.x).multiplyScalar(V),o[D].add(g),o[R].add(g),o[L].add(g),c[D].add(m),c[R].add(m),c[L].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,R=T.length;D<R;++D){let L=T[D],V=L.start,k=L.count;for(let N=V,q=V+k;N<q;N+=3)A(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let _=new F,M=new F,E=new F,f=new F;function S(D){E.fromBufferAttribute(s,D),f.copy(E);let R=o[D];_.copy(R),_.sub(E.multiplyScalar(E.dot(R))).normalize(),M.crossVectors(f,R);let V=M.dot(c[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,V)}for(let D=0,R=n.count;D<R;++D)l[D]&&S(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,u=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){let b=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,b=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let m=0;m<h;m++)d[b++]=l[p++]}return new Ut(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bc,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=hh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=hh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function hh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ln()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var qt=new F,us=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?bo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hc(e,this.data.array)}},Ko=new F,tf=new F,nf=new Be,nn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ko.subVectors(n,t).cross(tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ko),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nf.getNormalMatrix(e),s=this.coplanarPoint(Ko).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sf=0,Jt=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=ys,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=Ac,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var zn=new F,jo=new F,Br=new F,kr=new F,di=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){jo.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(jo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=kr.dot(this.direction),c=-kr.dot(Br),l=kr.lengthSq(),h=Math.abs(1-a*a),u,d,p,b;if(h>0)if(u=a*c-o,d=a*o-c,b=r*h,u>=0)if(d>=-b)if(d<=b){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-b?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=b?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jo).addScaledVector(Br,d),p}intersectSphere(e,t){if(e.radius<0)return null;zn.subVectors(e.center,this.origin);let n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,p=e.z-a.z,b=t.x-a.x,y=t.y-a.y,g=t.z-a.z,m=n.x-a.x,A=n.y-a.y,T=n.z-a.z,_=Math.abs(c),M=Math.abs(l),E=Math.abs(h),f,S,D,R,L,V,k,N,q,J,W,se;if(_>=M&&_>=E?(D=c,V=u,q=b,se=m,c>=0?(f=l,S=h,R=d,L=p,k=y,N=g,J=A,W=T):(f=h,S=l,R=p,L=d,k=g,N=y,J=T,W=A)):M>=E?(D=l,V=d,q=y,se=A,l>=0?(f=h,S=c,R=p,L=u,k=g,N=b,J=T,W=m):(f=c,S=h,R=u,L=p,k=b,N=g,J=m,W=T)):(D=h,V=p,q=g,se=T,h>=0?(f=c,S=l,R=u,L=d,k=b,N=y,J=m,W=A):(f=l,S=c,R=d,L=u,k=y,N=b,J=A,W=m)),D===0)return null;let X=f/D,$=S/D,ie=1/D,Te=R-X*V,Oe=L-$*V,Z=k-X*q,ue=N-$*q,ve=J-X*se,De=W-$*se,pe=ve*ue-De*Z,Fe=Te*De-Oe*ve,rt=Z*Oe-ue*Te;if(s){if(pe<0||Fe<0||rt<0)return null}else if((pe<0||Fe<0||rt<0)&&(pe>0||Fe>0||rt>0))return null;let Ae=pe+Fe+rt;if(Ae===0)return null;let Qe=ie*(pe*V+Fe*q+rt*se);return(Ae>0?Qe<0:Qe>0)?null:this.at(Qe/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},uh=new Ve,Si=new di,Vr=new Yt,dh=new F,Gr=new F,zr=new F,Hr=new F,Yo=new F,Wr=new F,fh=new F,qr=new F,Nt=class extends ft{constructor(e=new zt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Yo.fromBufferAttribute(u,e),a?Wr.addScaledVector(Yo,h):Wr.addScaledVector(Yo.sub(t),h))}t.add(Wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(Vr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Vr,dh)===null||Si.origin.distanceToSquared(dh)>(e.far-e.near)**2))&&(uh.copy(r).invert(),Si.copy(e.ray).applyMatrix4(uh),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,y=d.length;b<y;b++){let g=d[b],m=a[g.materialIndex],A=Math.max(g.start,p.start),T=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=A,M=T;_<M;_+=3){let E=o.getX(_),f=o.getX(_+1),S=o.getX(_+2);s=Xr(this,m,e,n,l,h,u,E,f,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let b=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=b,m=y;g<m;g+=3){let A=o.getX(g),T=o.getX(g+1),_=o.getX(g+2);s=Xr(this,a,e,n,l,h,u,A,T,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,y=d.length;b<y;b++){let g=d[b],m=a[g.materialIndex],A=Math.max(g.start,p.start),T=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let _=A,M=T;_<M;_+=3){let E=_,f=_+1,S=_+2;s=Xr(this,m,e,n,l,h,u,E,f,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let b=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=b,m=y;g<m;g+=3){let A=g,T=g+1,_=g+2;s=Xr(this,a,e,n,l,h,u,A,T,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function rf(i,e,t,n,s,r,a,o){let c;if(e.side===Ft?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===pn,o),c===null)return null;qr.copy(o),qr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(qr);return l<t.near||l>t.far?null:{distance:l,point:qr.clone(),object:i}}function Xr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Gr),i.getVertexPosition(c,zr),i.getVertexPosition(l,Hr);let h=rf(i,e,t,n,Gr,zr,Hr,fh);if(h){let u=new F;hi.getBarycoord(fh,Gr,zr,Hr,u),s&&(h.uv=hi.getInterpolatedAttribute(s,o,c,l,u,new Ge)),r&&(h.uv1=hi.getInterpolatedAttribute(r,o,c,l,u,new Ge)),a&&(h.normal=hi.getInterpolatedAttribute(a,o,c,l,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new F,materialIndex:0};hi.getNormal(Gr,zr,Hr,d.normal),h.face=d,h.barycoord=u}return h}var Fs=new st,ph=new st,mh=new st,af=new st,gh=new Ve,Kr=new F,Jo=new Yt,bh=new Ve,Zo=new di,js=class extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tc,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingBox.expandByPoint(Kr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingSphere.expandByPoint(Kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(s),e.ray.intersectsSphere(Jo)!==!1&&(bh.copy(s).invert(),Zo.copy(e.ray).applyMatrix4(bh),!(this.boundingBox!==null&&Zo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ph.fromBufferAttribute(s.attributes.skinIndex,e),mh.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Fs.copy(t),t.set(0,0,0,0)):(Fs.set(t.x,t.y,t.z,1),t.set(0,0,0)),Fs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=mh.getComponent(r);if(a!==0){let o=ph.getComponent(r);gh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(af.copy(Fs).applyMatrix4(gh),a)}}return t.isVector4&&(t.w=Fs.w),t.applyMatrix4(this.bindMatrixInverse)}},ds=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},fs=class extends Tt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=bt,h=bt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xh=new Ve,of=new Ve,Ys=class i{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:of;xh.multiplyMatrices(o,t[r]),xh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fs(t,e,e,gn,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new ds),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Kn=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ji=new Ve,Ah=new Ve,jr=[],vh=new Gt,cf=new Ve,Os=new Nt,Bs=new Yt,Js=class extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),vh.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(vh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Bs.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),Ah.multiplyMatrices(n,Ji),Os.matrixWorld=Ah,Os.raycast(e,jr);for(let a=0,o=jr.length;a<o;a++){let c=jr[a];c.instanceId=r,c.object=this,t.push(c)}jr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Kn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fs(new Float32Array(s*this.count),s,this.count,Ua,an));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new Yt,lf=new Ge(.5,.5),Yr=new F,fi=class{constructor(e=new nn,t=new nn,n=new nn,s=new nn,r=new nn,a=new nn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],b=r[8],y=r[9],g=r[10],m=r[11],A=r[12],T=r[13],_=r[14],M=r[15];if(s[0].setComponents(l-a,p-h,m-b,M-A).normalize(),s[1].setComponents(l+a,p+h,m+b,M+A).normalize(),s[2].setComponents(l+o,p+u,m+y,M+T).normalize(),s[3].setComponents(l-o,p-u,m-y,M-T).normalize(),n)s[4].setComponents(c,d,g,_).normalize(),s[5].setComponents(l-c,p-d,m-g,M-_).normalize();else if(s[4].setComponents(l-c,p-d,m-g,M-_).normalize(),t===un)s[5].setComponents(l+c,p+d,m+g,M+_).normalize();else if(t===is)s[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=lf.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_h=new Ve,pa=class i{constructor(){this.coordinateSystem=un,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];_h.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new fi),n[s].setFromProjectionMatrix(_h,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new fi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ps=class extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ma=new F,ga=new F,yh=new Ve,ks=new di,Jr=new Yt,Qo=new F,Mh=new F,Ri=class extends ft{constructor(e=new zt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ma.fromBufferAttribute(t,s-1),ga.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ma.distanceTo(ga);e.setAttribute("lineDistance",new gt(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;yh.copy(s).invert(),ks.copy(e.ray).applyMatrix4(yh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),b=Math.min(h.count,a.start+a.count);for(let y=p,g=b-1;y<g;y+=l){let m=h.getX(y),A=h.getX(y+1),T=Zr(this,e,ks,c,m,A,y);T&&t.push(T)}if(this.isLineLoop){let y=h.getX(b-1),g=h.getX(p),m=Zr(this,e,ks,c,y,g,b-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),b=Math.min(d.count,a.start+a.count);for(let y=p,g=b-1;y<g;y+=l){let m=Zr(this,e,ks,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=Zr(this,e,ks,c,b-1,p,b-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ma.fromBufferAttribute(o,s),ga.fromBufferAttribute(o,r),t.distanceSqToSegment(ma,ga,Qo,Mh)>n)return;Qo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Qo);if(!(l<e.near||l>e.far))return{distance:l,point:Mh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Sh=new F,Th=new F,Zs=class extends Ri{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Sh.fromBufferAttribute(t,s),Th.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sh.distanceTo(Th);e.setAttribute("lineDistance",new gt(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qs=class extends Ri{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ms=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Eh=new Ve,ac=new di,Qr=new Yt,$r=new F,$s=class extends ft{constructor(e=new zt,t=new ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;Eh.copy(s).invert(),ac.copy(e.ray).applyMatrix4(Eh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let b=d,y=p;b<y;b++){let g=l.getX(b);$r.fromBufferAttribute(u,g),wh($r,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let b=d,y=p;b<y;b++)$r.fromBufferAttribute(u,b),wh($r,b,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wh(i,e,t,n,s,r,a){let o=ac.distanceSqToPoint(i);if(o<t){let c=new F;ac.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var er=class extends Tt{constructor(e=[],t=Di,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tr=class extends Tt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var jn=class extends Tt{constructor(e,t,n=Mn,s,r,a,o=bt,c=bt,l,h=qn,u=1){if(h!==qn&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new as(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nr=class extends jn{constructor(e,t=Mn,n=Di,s,r,a=bt,o=bt,c,l=qn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ir=class extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},gs=class i extends zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,s,a,2),b("x","z","y",1,-1,e,n,-t,s,a,3),b("x","y","z",1,-1,e,t,n,s,r,4),b("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function b(y,g,m,A,T,_,M,E,f,S,D){let R=_/f,L=M/S,V=_/2,k=M/2,N=E/2,q=f+1,J=S+1,W=0,se=0,X=new F;for(let $=0;$<J;$++){let ie=$*L-k;for(let Te=0;Te<q;Te++){let Oe=Te*R-V;X[y]=Oe*A,X[g]=ie*T,X[m]=N,l.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[m]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(Te/f),u.push(1-$/S),W+=1}}for(let $=0;$<S;$++)for(let ie=0;ie<f;ie++){let Te=d+ie+q*$,Oe=d+ie+q*($+1),Z=d+(ie+1)+q*($+1),ue=d+(ie+1)+q*$;c.push(Te,Oe,ue),c.push(Oe,Z,ue),se+=6}o.addGroup(p,se,D),p+=se,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var sr=class i extends zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new F,h=new Ge;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var rr=class i extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,p=[],b=[],y=[],g=[];for(let m=0;m<h;m++){let A=m*d-a;for(let T=0;T<l;T++){let _=T*u-r;b.push(_,-A,0),y.push(0,0,1),g.push(T/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let A=0;A<o;A++){let T=A+l*m,_=A+l*(m+1),M=A+1+l*(m+1),E=A+1+l*m;p.push(T,_,E),p.push(_,M,E)}this.setIndex(p),this.setAttribute("position",new gt(b,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ar=class i extends zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new F,d=new F,p=[],b=[],y=[],g=[];for(let m=0;m<=n;m++){let A=[],T=m/n,_=a+T*o,M=e*Math.cos(_),E=Math.sqrt(e*e-M*M),f=0;m===0&&a===0?f=.5/t:m===n&&c===Math.PI&&(f=-.5/t);for(let S=0;S<=t;S++){let D=S/t,R=s+D*r;u.x=-E*Math.cos(R),u.y=M,u.z=E*Math.sin(R),b.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(D+f,1-T),A.push(l++)}h.push(A)}for(let m=0;m<n;m++)for(let A=0;A<t;A++){let T=h[m][A+1],_=h[m][A],M=h[m+1][A],E=h[m+1][A+1];(m!==0||a>0)&&p.push(T,_,E),(m!==n-1||c<Math.PI)&&p.push(_,M,E)}this.setIndex(p),this.setAttribute("position",new gt(b,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ch(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ch(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=Oi(i[t]);for(let s in n)e[s]=n[s]}return e}function Ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Mu={clone:Oi,merge:Ht},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new st().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fn=class extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xt=class extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ei('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ei('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var xa=class extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Aa=class extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function li(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vs(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function ff(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ih(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function pf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var In=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends In{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sc:r=e,o=2*t-n;break;case rc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sc:a=e,c=2*n-t;break;case rc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,b=(n-t)/(s-t),y=b*b,g=y*b,m=-d*g+2*d*y-d*b,A=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*b+1,T=(-1-p)*g+(1.5+p)*y+.5*b,_=p*g-p*y;for(let M=0;M!==o;++M)r[M]=m*a[h+M]+A*a[l+M]+T*a[c+M]+_*a[u+M];return r}},_a=class extends In{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},ya=class extends In{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ma=class extends In{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let b=(n-t)/(s-t),y=1-b;for(let g=0;g!==o;++g)r[g]=a[l+g]*y+a[c+g]*b;return r}let d=o*2,p=e-1;for(let b=0;b!==o;++b){let y=a[l+b],g=a[c+b],m=p*d+b*2,A=u[m],T=u[m+1],_=e*d+b*2,M=h[_],E=h[_+1],f=gf(n,t,A,M,s);r[b]=Su(f,y,T,E,g)}return r}};function Su(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function mf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function gf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Su(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=mf(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=li(t,this.TimeBufferType),this.values=li(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:li(e.times,Array),values:li(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Vs(e.settings)&&(n.settings={inTangents:li(e.settings.inTangents,Array),outTangents:li(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case wi:t=this.InterpolantFactoryMethodDiscrete;break;case Ci:t=this.InterpolantFactoryMethodLinear;break;case na:t=this.InterpolantFactoryMethodSmooth;break;case nc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wi;case this.InterpolantFactoryMethodLinear:return Ci;case this.InterpolantFactoryMethodSmooth:return na;case this.InterpolantFactoryMethodBezier:return nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Vs(this.settings)&&(Rh(this.settings.inTangents,e),Rh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Vs(this.settings)&&(Ph(this.settings.inTangents,e),Ph(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ue("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ue("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Ed(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ue("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===na,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let b=0;b!==n;++b){let y=t[u+b];if(y!==t[d+b]||y!==t[p+b]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Vs(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Ph(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Qt.prototype.ValueTypeName="";Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=Ci;var Yn=class extends Qt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=wi;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};or.prototype.ValueTypeName="color";var Jn=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};Jn.prototype.ValueTypeName="number";var Sa=class extends In{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)sn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Zn=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};Zn.prototype.ValueTypeName="quaternion";Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends Qt{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=wi;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};pi.prototype.ValueTypeName="vector";var cr=class{constructor(e="",t=-1,n=[],s=lu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(xf(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Qt.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=ff(c);c=Ih(c,1,h),l=Ih(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Jn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function bf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jn;case"vector":case"vector2":case"vector3":case"vector4":return pi;case"color":return or;case"quaternion":return Zn;case"bool":case"boolean":return Yn;case"string":return Qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=bf(i.type);if(i.times===void 0){let n=[],s=[];pf(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Vs(i.settings)&&(t.settings={inTangents:li(i.settings.inTangents,Float32Array),outTangents:li(i.settings.outTangents,Float32Array)}),t}var wn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Nh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Nh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Nh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ta=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],b=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tu=new Ta,Rn=class{constructor(e){this.manager=e!==void 0?e:Tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Rn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hn={},oc=class extends Error{constructor(e,t){super(e),this.response=t}},bs=class extends Rn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=wn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:s});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Hn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,b=p!==0,y=0,g=new ReadableStream({start(m){A();function A(){u.read().then(({done:T,value:_})=>{if(T)m.close();else{y+=_.byteLength;let M=new ProgressEvent("progress",{lengthComputable:b,loaded:y,total:p});for(let E=0,f=h.length;E<f;E++){let S=h[E];S.onProgress&&S.onProgress(M)}m.enqueue(_),A()}},T=>{m.error(T)})}}});return new Response(g)}else throw new oc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(b=>p.decode(b))}}}).then(l=>{wn.add(`file:${e}`,l);let h=Hn[e];delete Hn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Hn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Hn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zi=new WeakMap,Ea=class extends Rn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=wn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Zi.get(a);u===void 0&&(u=[],Zi.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=ss("img");function c(){h(),t&&t(this);let u=Zi.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Zi.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),wn.remove(`image:${e}`);let d=Zi.get(this)||[];for(let p=0;p<d.length;p++){let b=d[p];b.onError&&b.onError(u)}Zi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var lr=class extends Rn{constructor(e){super(e)}load(e,t,n,s){let r=new Tt,a=new Ea(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},xs=class extends ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var $o=new Ve,Lh=new F,Dh=new F,As=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fi,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lh),Dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){$o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix($o,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===is||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ea=new F,ta=new sn,En=new F,hr=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ea,ta,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,ta,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ea,ta,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,ta,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new F,Uh=new Ge,Fh=new Ge,Mt=class extends hr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ii*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Uh,Fh),t.subVectors(Fh,Uh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cc=class extends As{constructor(){super(new Mt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ii*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ur=class extends xs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new cc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},lc=class extends As{constructor(){super(new Mt(90,1,.5,500)),this.isPointLightShadow=!0}},dr=class extends xs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pi=class extends hr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hc=class extends As{constructor(){super(new Pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pn=class extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new hc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $n=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ec=new WeakMap,fr=class extends Rn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=wn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{ec.has(a)===!0?(s&&s(ec.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return wn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ec.set(c,l),wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});wn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qi=-90,$i=1,vs=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mt(Qi,$i,e,t);s.layers=this.layers,this.add(s);let r=new Mt(Qi,$i,e,t);r.layers=this.layers,this.add(r);let a=new Mt(Qi,$i,e,t);a.layers=this.layers,this.add(a);let o=new Mt(Qi,$i,e,t);o.layers=this.layers,this.add(o);let c=new Mt(Qi,$i,e,t);c.layers=this.layers,this.add(c);let l=new Mt(Qi,$i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},wa=class extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var qc="\\[\\]\\.:\\/",Af=new RegExp("["+qc+"]","g"),Xc="[^"+qc+"]",vf="[^"+qc.replace("\\.","")+"]",_f=/((?:WC+[\/:])*)/.source.replace("WC",Xc),yf=/(WCOD+)?/.source.replace("WCOD",vf),Mf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),Sf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),Tf=new RegExp("^"+_f+yf+Mf+Sf+"$"),Ef=["material","materials","bones","map"],uc=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Af,"")}static parseTrackName(e){let t=Tf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ef.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=uc;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P0=new Float32Array(1);var Oh=new Ve,pr=class{constructor(e,t,n=0,s=1/0){this.ray=new di(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Oh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oh),this}intersectObject(e,t=!0,n=[]){return dc(e,this,n,t),n.sort(Bh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)dc(e[s],this,n,t);return n.sort(Bh),n}};function Bh(i,e){return i.distance-e.distance}function dc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)dc(r[a],e,t,!0)}}var Qc=class Qc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Qc.prototype.isMatrix2=!0;var fc=Qc;function Kc(i,e,t,n){let s=wf(n);switch(t){case Nc:return i*e;case Ua:return i*e/s.components*s.byteLength;case Fa:return i*e/s.components*s.byteLength;case mi:return i*e*2/s.components*s.byteLength;case Oa:return i*e*2/s.components*s.byteLength;case Lc:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case Ba:return i*e*4/s.components*s.byteLength;case br:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ar:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:case za:return Math.max(i,16)*Math.max(e,8)/4;case ka:case Ga:return Math.max(i,8)*Math.max(e,8)/2;case Ha:case Wa:case Xa:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:case _r:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lo:case ho:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fo:case po:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yr:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wf(i){switch(i){case $t:case Cc:return{byteLength:1,components:1};case Ts:case Ic:case Sn:return{byteLength:2,components:1};case La:case Da:return{byteLength:2,components:4};case Mn:case Na:case an:return{byteLength:4,components:1};case Rc:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ku(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function If(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,b)=>p.start-b.start);let d=0;for(let p=1;p<u.length;p++){let b=u[d],y=u[p];y.start<=b.start+b.count+1?b.count=Math.max(b.count,y.start+y.count-b.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,b=u.length;p<b;p++){let y=u[p];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
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
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,ep=`vec3 transformedNormal = objectNormal;
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
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,op=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
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
}`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_p=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ep=`PhysicalMaterial material;
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
#endif`,wp=`uniform sampler2D dfgLUT;
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
}`,Cp=`
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pm=`float getShadowMask() {
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
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rm=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform float backgroundBlurriness;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
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
}`,Fm=`#if DEPTH_PACKING == 3200
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
}`,Om=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Wm=`uniform vec3 diffuse;
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
}`,qm=`#define LAMBERT
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
}`,Xm=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,Ym=`#define NORMAL
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
}`,Jm=`#define NORMAL
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
}`,Zm=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,eg=`#define STANDARD
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
}`,tg=`#define TOON
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
}`,ng=`#define TOON
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
}`,ig=`uniform float size;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,ag=`uniform vec3 color;
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
}`,og=`uniform float rotation;
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
}`,cg=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Rf,alphahash_pars_fragment:Pf,alphamap_fragment:Nf,alphamap_pars_fragment:Lf,alphatest_fragment:Df,alphatest_pars_fragment:Uf,aomap_fragment:Ff,aomap_pars_fragment:Of,batching_pars_vertex:Bf,batching_vertex:kf,begin_vertex:Vf,beginnormal_vertex:Gf,bsdfs:zf,iridescence_fragment:Hf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:jf,color_fragment:Yf,color_pars_fragment:Jf,color_pars_vertex:Zf,color_vertex:Qf,common:$f,defaultnormal_vertex:ep,displacementmap_pars_vertex:tp,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:rp,colorspace_pars_fragment:ap,envmap_fragment:op,envmap_common_pars_fragment:cp,envmap_pars_fragment:lp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:_p,envmap_vertex:up,fog_vertex:dp,fog_pars_vertex:fp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:bp,lights_lambert_fragment:xp,lights_lambert_pars_fragment:Ap,lights_pars_begin:vp,lights_toon_fragment:yp,lights_toon_pars_fragment:Mp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Tp,lights_physical_fragment:Ep,lights_physical_pars_fragment:wp,lights_fragment_begin:Cp,lights_fragment_maps:Ip,lights_fragment_end:Rp,lightprobes_pars_fragment:Pp,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Up,map_fragment:Fp,map_pars_fragment:Op,map_particle_fragment:Bp,map_particle_pars_fragment:kp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:zp,morphcolor_vertex:Hp,morphnormal_vertex:Wp,morphtarget_pars_vertex:qp,morphtarget_vertex:Xp,normal_fragment_begin:Kp,normal_fragment_maps:jp,normal_pars_fragment:Yp,normal_pars_vertex:Jp,normal_vertex:Zp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:tm,iridescence_pars_fragment:nm,opaque_fragment:im,packing:sm,premultiplied_alpha_fragment:rm,project_vertex:am,dithering_fragment:om,dithering_pars_fragment:cm,roughnessmap_fragment:lm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:dm,shadowmap_vertex:fm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:bm,skinnormal_vertex:xm,specularmap_fragment:Am,specularmap_pars_fragment:vm,tonemapping_fragment:_m,tonemapping_pars_fragment:ym,transmission_fragment:Mm,transmission_pars_fragment:Sm,uv_pars_fragment:Tm,uv_pars_vertex:Em,uv_vertex:wm,worldpos_vertex:Cm,background_vert:Im,background_frag:Rm,backgroundCube_vert:Pm,backgroundCube_frag:Nm,cube_vert:Lm,cube_frag:Dm,depth_vert:Um,depth_frag:Fm,distance_vert:Om,distance_frag:Bm,equirect_vert:km,equirect_frag:Vm,linedashed_vert:Gm,linedashed_frag:zm,meshbasic_vert:Hm,meshbasic_frag:Wm,meshlambert_vert:qm,meshlambert_frag:Xm,meshmatcap_vert:Km,meshmatcap_frag:jm,meshnormal_vert:Ym,meshnormal_frag:Jm,meshphong_vert:Zm,meshphong_frag:Qm,meshphysical_vert:$m,meshphysical_frag:eg,meshtoon_vert:tg,meshtoon_frag:ng,points_vert:ig,points_frag:sg,shadow_vert:rg,shadow_frag:ag,sprite_vert:og,sprite_frag:cg},be={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Un={basic:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ht([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ht([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ht([be.points,be.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ht([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ht([be.common,be.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ht([be.sprite,be.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Ht([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Ht([be.lights,be.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Un.physical={uniforms:Ht([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var xo={r:0,b:0,g:0},lg=new Ve,ju=new Be;ju.set(-1,0,0,0,1,0,0,0,1);function hg(i,e,t,n,s,r){let a=new Le(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function p(A){let T=A.isScene===!0?A.background:null;if(T&&T.isTexture){let _=A.backgroundBlurriness>0;T=e.get(T,_)}return T}function b(A){let T=!1,_=p(A);_===null?g(a,o):_&&_.isColor&&(g(_,1),T=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(A,T){let _=p(T);_&&_.isCubeTexture?(l===void 0&&(l=new Nt(new gs(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Oi(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(lg.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ju),l.material.toneMapped=Ke.getTransfer(_.colorSpace)!==nt,(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Nt(new rr(2,2),new dn({name:"BackgroundMaterial",uniforms:Oi(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function g(A,T){A.getRGB(xo,Wc(i)),t.buffers.color.setClear(xo.r,xo.g,xo.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,T=1){a.set(A),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,g(a,o)},render:b,addToRenderList:y,dispose:m}}function ug(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(L,V,k,N,q){let J=!1,W=u(L,N,k,V);r!==W&&(r=W,l(r.object)),J=p(L,N,k,q),J&&b(L,N,k,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,_(L,V,k,N),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,V,k,N){let q=N.wireframe===!0,J=n[V.id];J===void 0&&(J={},n[V.id]=J);let W=L.isInstancedMesh===!0?L.id:0,se=J[W];se===void 0&&(se={},J[W]=se);let X=se[k.id];X===void 0&&(X={},se[k.id]=X);let $=X[q];return $===void 0&&($=d(c()),X[q]=$),$}function d(L){let V=[],k=[],N=[];for(let q=0;q<t;q++)V[q]=0,k[q]=0,N[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:k,attributeDivisors:N,object:L,attributes:{},index:null}}function p(L,V,k,N){let q=r.attributes,J=V.attributes,W=0,se=k.getAttributes();for(let X in se)if(se[X].location>=0){let ie=q[X],Te=J[X];if(Te===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Te=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Te=L.instanceColor)),ie===void 0||ie.attribute!==Te||Te&&ie.data!==Te.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function b(L,V,k,N){let q={},J=V.attributes,W=0,se=k.getAttributes();for(let X in se)if(se[X].location>=0){let ie=J[X];ie===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));let Te={};Te.attribute=ie,ie&&ie.data&&(Te.data=ie.data),q[X]=Te,W++}r.attributes=q,r.attributesNum=W,r.index=N}function y(){let L=r.newAttributes;for(let V=0,k=L.length;V<k;V++)L[V]=0}function g(L){m(L,0)}function m(L,V){let k=r.newAttributes,N=r.enabledAttributes,q=r.attributeDivisors;k[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),q[L]!==V&&(i.vertexAttribDivisor(L,V),q[L]=V)}function A(){let L=r.newAttributes,V=r.enabledAttributes;for(let k=0,N=V.length;k<N;k++)V[k]!==L[k]&&(i.disableVertexAttribArray(k),V[k]=0)}function T(L,V,k,N,q,J,W){W===!0?i.vertexAttribIPointer(L,V,k,q,J):i.vertexAttribPointer(L,V,k,N,q,J)}function _(L,V,k,N){y();let q=N.attributes,J=k.getAttributes(),W=V.defaultAttributeValues;for(let se in J){let X=J[se];if(X.location>=0){let $=q[se];if($===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let ie=$.normalized,Te=$.itemSize,Oe=e.get($);if(Oe===void 0)continue;let Z=Oe.buffer,ue=Oe.type,ve=Oe.bytesPerElement,De=ue===i.INT||ue===i.UNSIGNED_INT||$.gpuType===Na;if($.isInterleavedBufferAttribute){let pe=$.data,Fe=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,rt=$.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Ae=0;Ae<X.locationSize;Ae++)m(X.location+Ae,pe.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ae=0;Ae<X.locationSize;Ae++)g(X.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ae=0;Ae<X.locationSize;Ae++)T(X.location+Ae,Te/X.locationSize,ue,ie,Fe*ve,(rt+Te/X.locationSize*Ae)*ve,De)}else{if($.isInstancedBufferAttribute){for(let pe=0;pe<X.locationSize;pe++)m(X.location+pe,$.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pe=0;pe<X.locationSize;pe++)g(X.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let pe=0;pe<X.locationSize;pe++)T(X.location+pe,Te/X.locationSize,ue,ie,Te*ve,Te/X.locationSize*pe*ve,De)}}else if(W!==void 0){let ie=W[se];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(X.location,ie);break;case 3:i.vertexAttrib3fv(X.location,ie);break;case 4:i.vertexAttrib4fv(X.location,ie);break;default:i.vertexAttrib1fv(X.location,ie)}}}}A()}function M(){D();for(let L in n){let V=n[L];for(let k in V){let N=V[k];for(let q in N){let J=N[q];for(let W in J)h(J[W].object),delete J[W];delete N[q]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let V=n[L.id];for(let k in V){let N=V[k];for(let q in N){let J=N[q];for(let W in J)h(J[W].object),delete J[W];delete N[q]}}delete n[L.id]}function f(L){for(let V in n){let k=n[V];for(let N in k){let q=k[N];if(q[L.id]===void 0)continue;let J=q[L.id];for(let W in J)h(J[W].object),delete J[W];delete q[L.id]}}}function S(L){for(let V in n){let k=n[V],N=L.isInstancedMesh===!0?L.id:0,q=k[N];if(q!==void 0){for(let J in q){let W=q[J];for(let se in W)h(W[se].object),delete W[se];delete q[J]}delete k[N],Object.keys(k).length===0&&delete n[V]}}}function D(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:f,initAttributes:y,enableAttribute:g,disableUnusedAttributes:A}}function dg(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let p=0;p<h;p++)d+=l[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let f=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(f){return!(f!==gn&&n.convert(f)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(f){let S=f===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(f!==$t&&f!==an&&!S&&n.convert(f)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(f){if(f==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:b,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:_,maxSamples:M,samples:E}}function pg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new nn,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let b=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||b===null||b.length===0||r&&!g)r?h(null):l();else{let A=r?0:n,T=A*4,_=m.clippingState||null;c.value=_,_=h(b,d,T,p);for(let M=0;M!==T;++M)_[M]=t[M];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,b){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=c.value,b!==!0||g===null){let m=p+y*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,_=p;T!==y;++T,_+=4)a.copy(u[T]).applyMatrix4(A,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var Er=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gs(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Ni});r.uniforms.tEquirect.value=t;let a=new Nt(s,r),o=t.minFilter;return t.minFilter===mn&&(t.minFilter=St),new vs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Eu=256,mg=3,gg=20,Yu=256,Ju=16,bg=3,xg=new F,Ag=new Le,Cs=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vs(1,10,null),this._boxMesh=new Nt(new gs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=xg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,p=c.autoClearDepth,b=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(Ag));let g=new vs(n,s,h);return g.position.copy(o),g.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=p,c.autoClearStencil=b,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Eu,Gc(e))}_fromTexture(e,t){e.mapping===Di||e.mapping===Ms?this._setSize(e.image.length===0?Eu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=wu(e,!1,!1),n=Math.log2(e)-mg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Di||e.mapping===Ms?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=vg(),this._integrationMaterial=_g());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ju);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-bg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Yu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=yg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function wu(i,e,t){return new Er(i,{minFilter:mn,generateMipmaps:e,type:Sn,colorSpace:Xt,depthBuffer:t})}function wr(i,e,t){return new dn({name:i,uniforms:e,vertexShader:ze.cube_vert,fragmentShader:t,side:Ft,blending:Ni,depthTest:!1,depthWrite:!1})}function vg(){return wr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yu}u

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
	`)}function _g(){return wr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ju}},`

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
	`)}function yg(){return wr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gg}
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
	`)}function Cu(){return wr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Iu(){return wr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Mg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===Ia||p===Ra)if(e.has(d)){let b=e.get(d).texture;return o(b,d.mapping)}else{let b=d.image;if(b&&b.height>0){let y=new Er(b.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,b=p===Ia||p===Ra,y=p===Di||p===Ms;if(b||y){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Cs(i)),g=b?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let A=d.image;return b&&A&&A.height>0||y&&A&&c(A)?(n===null&&(n=new Cs(i)),g=b?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,p){return p===Ia?d.mapping=Di:p===Ra&&(d.mapping=Ms),d}function c(d){let p=0,b=6;for(let y=0;y<b;y++)d[y]!==void 0&&p++;return p===b}function l(d){let p=d.target;p.removeEventListener("dispose",l);let b=e.get(p);b!==void 0&&(e.delete(p),b.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let b=t.get(p);b!==void 0&&(t.delete(p),b.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Sg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ei("WebGLRenderer: "+n+" extension not supported."),s}}}function Tg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(b=>delete s[b]);function o(b){c(b.target)}function c(b){b.index!==null&&e.remove(b.index);for(let g in b.attributes)e.remove(b.attributes[g]);b.removeEventListener("dispose",o),delete s[b.id],a.unregister(b);let y=r.get(b);y&&(e.remove(y),r.delete(b)),n.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function l(b,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(b){let y=b.attributes;for(let g in y)e.update(y[g],i.ARRAY_BUFFER)}function u(b){let y=b.index,g=b.attributes.position,m=0;if(g===void 0)return;let A=y!==null?y.array.length:g.array.length/3-1,T=g.count>=65535?Ks:Xs,_=new T(Math.ceil(A/3)*6,1),M=_.array;if(y!==null){let f=y.array;m=y.version;for(let S=0,D=0;S<A;S+=3){let R=f[S+0],L=f[S+1],V=f[S+2];M[D++]=R,M[D++]=L,M[D++]=L,M[D++]=V,M[D++]=V,M[D++]=R}}else{m=g.version;for(let f=0,S=0;f<A;f+=3){let D=f+0,R=f+1,L=f+2;M[S++]=D,M[S++]=R,M[S++]=R,M[S++]=L,M[S++]=L,M[S++]=D}}_.version=m;let E=r.get(b);E&&e.remove(E),r.set(b,_)}function d(b){let y=r.get(b);if(y){let g=b.index;g!==null&&y.version<g.version&&u(b)}else u(b);return r.get(b)}function p(){for(let b in s){let y=s[b].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:d,dispose:p}}function Eg(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*a,p),t.update(d,n,p))}function h(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let y=0;for(let g=0;g<p;g++)y+=d[g];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function wg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cg(i,e,t){let n=new WeakMap,s=new st;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let D=function(){f.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],T=0;p===!0&&(T=1),b===!0&&(T=2),y===!0&&(T=3);let _=o.attributes.position.count*T,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*M*4*u),f=new qs(E,_,M,u);f.type=an,f.needsUpdate=!0;let S=T*4;for(let R=0;R<u;R++){let L=g[R],V=m[R],k=A[R],N=_*M*4*R;for(let q=0;q<L.count;q++){let J=q*S;p===!0&&(s.fromBufferAttribute(L,q),E[N+J+0]=s.x,E[N+J+1]=s.y,E[N+J+2]=s.z,E[N+J+3]=0),b===!0&&(s.fromBufferAttribute(V,q),E[N+J+4]=s.x,E[N+J+5]=s.y,E[N+J+6]=s.z,E[N+J+7]=0),y===!0&&(s.fromBufferAttribute(k,q),E[N+J+8]=s.x,E[N+J+9]=s.y,E[N+J+10]=s.z,E[N+J+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:f,size:new Ge(_,M)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let b=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ig(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Rg={[_c]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[Mc]:"CINEON_TONE_MAPPING",[Sc]:"ACES_FILMIC_TONE_MAPPING",[Ec]:"AGX_TONE_MAPPING",[gr]:"NEUTRAL_TONE_MAPPING",[Tc]:"CUSTOM_TONE_MAPPING"};function Pg(i,e,t,n,s,r){let a=new rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new zt;h.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gt([0,2,0,0,2,0],2));let u=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Nt(h,u),p=new Pi(-1,1,1,-1,0,1),b=null,y=null,g=!1,m,A=null,T=[],_=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),c!==null&&c.setSize(M,E);for(let f=0;f<T.length;f++){let S=T[f];S.setSize&&S.setSize(M,E)}},this.setEffects=function(M){T=M,_=T.length>0&&T[0].isRenderPass===!0;let E=a.width,f=a.height;T.length>0&&o===null&&(o=new rn(E,f,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),c=new rn(E,f,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&T.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new jn(E,f),r===!0&&(l.format=ei,l.type=Fi)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<T.length;D++){let R=T[D];R.setSize&&R.setSize(E,f),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(M,E){if(g||M.toneMapping===Nn&&T.length===0)return!1;if(A=E,E!==null){let f=E.width,S=E.height;(a.width!==f||a.height!==S)&&this.setSize(f,S)}return _===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Nn,!0},this.hasRenderPass=function(){return _},this.end=function(M,E){M.toneMapping=m,g=!0;let f=a,S=o;for(let D=0;D<T.length;D++){let R=T[D];R.enabled!==!1&&(R.render(M,S,f,E),R.needsSwap!==!1&&(f=S,S=S===o?c:o))}if(b!==M.outputColorSpace||y!==M.toneMapping){b=M.outputColorSpace,y=M.toneMapping,u.defines={},Ke.getTransfer(b)===nt&&(u.defines.SRGB_TRANSFER="");let D=Rg[y];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=f.texture,M.setRenderTarget(A),M.render(d,p),A=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Zu=new Tt,Qu=new jn(1,1),$u=new nr(1),ed=new qs,td=new fa,nd=new er,Ru=[],Pu=[],Nu=new Float32Array(16),Lu=new Float32Array(9),Du=new Float32Array(4);function Is(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ru[s];if(r===void 0&&(r=new Float32Array(s),Ru[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _o(i,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Fg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Du.set(n),i.uniformMatrix2fv(this.addr,!1,Du),wt(t,n)}}function Og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Lu.set(n),i.uniformMatrix3fv(this.addr,!1,Lu),wt(t,n)}}function Bg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),wt(t,n)}}function kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function Hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function yo(i){return i.version===0&&(i.compareFunction=Oc,i.needsUpdate=!0),i}function Kg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=yo(Qu):r=Zu,t.setTexture2D(e||r,s)}function jg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||td,s)}function Yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=yo($u):r=nd,t.setTextureCube(e||r,s)}function Jg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ed,s)}function Zg(i){switch(i){case 5126:return Ng;case 35664:return Lg;case 35665:return Dg;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Wg;case 36295:return qg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Jg}}function Qg(i,e){i.uniform1fv(this.addr,e)}function $g(i,e){let t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function eb(i,e){let t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function tb(i,e){let t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function nb(i,e){let t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ib(i,e){let t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sb(i,e){let t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rb(i,e){i.uniform1iv(this.addr,e)}function ab(i,e){i.uniform2iv(this.addr,e)}function ob(i,e){i.uniform3iv(this.addr,e)}function cb(i,e){i.uniform4iv(this.addr,e)}function lb(i,e){i.uniform1uiv(this.addr,e)}function hb(i,e){i.uniform2uiv(this.addr,e)}function ub(i,e){i.uniform3uiv(this.addr,e)}function db(i,e){i.uniform4uiv(this.addr,e)}function fb(i,e,t){let n=this.cache,s=e.length,r=_o(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=yo(Qu):a=Zu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function pb(i,e,t){let n=this.cache,s=e.length,r=_o(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||td,r[a])}function mb(i,e,t){let n=this.cache,s=e.length,r=_o(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=yo($u):a=nd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function gb(i,e,t){let n=this.cache,s=e.length,r=_o(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ed,r[a])}function bb(i){switch(i){case 5126:return Qg;case 35664:return $g;case 35665:return eb;case 35666:return tb;case 35674:return nb;case 35675:return ib;case 35676:return sb;case 5124:case 35670:return rb;case 35667:case 35671:return ab;case 35668:case 35672:return ob;case 35669:case 35673:return cb;case 5125:return lb;case 36294:return hb;case 36295:return ub;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return gb}}var tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zg(t.type)}},nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bb(t.type)}},il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},$c=/(\w+)(\])?(\[|\.)?/g;function Uu(i,e){i.seq.push(e),i.map[e.id]=e}function xb(i,e,t){let n=i.name,s=n.length;for($c.lastIndex=0;;){let r=$c.exec(n),a=$c.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Uu(t,l===void 0?new tl(o,i,e):new nl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new il(o),Uu(t,u)),t=u}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);xb(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Fu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ab=37297,vb=0;function _b(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ou=new Be;function yb(i){Ke._getMatrix(Ou,Ke.workingColorSpace,i);let e=`mat3( ${Ou.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Hs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+_b(i.getShaderSource(e),o)}else return r}function Mb(i,e){let t=yb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Sb={[_c]:"Linear",[yc]:"Reinhard",[Mc]:"Cineon",[Sc]:"ACESFilmic",[Ec]:"AgX",[gr]:"Neutral",[Tc]:"Custom"};function Tb(i,e){let t=Sb[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ao=new F;function Eb(){Ke.getLuminanceCoefficients(Ao);let i=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function Cb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ib(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Tr(i){return i!==""}function ku(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Vu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(Rb,Pb)}function Pb(i,e){let t=ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return sl(t)}var Nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(i){return i.replace(Nb,Lb)}function Lb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Db={[mr]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function Ub(i){return Db[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fb={[Ms]:"ENVMAP_MODE_REFRACTION"};function Ob(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bb={[vc]:"ENVMAP_BLENDING_MULTIPLY",[au]:"ENVMAP_BLENDING_MIX",[ou]:"ENVMAP_BLENDING_ADD"};function kb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bb[i.combine]||"ENVMAP_BLENDING_NONE"}function Vb(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ub(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ob(t),u=kb(t),d=wb(t),p=Cb(r),b=s.createProgram(),y,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Tr).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Tr).join(`
`),g.length>0&&(g+=`
`)):(y=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),g=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Tb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Mb("linearToOutputTexel",t.outputColorSpace),Eb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=sl(a),a=ku(a,t),a=Vu(a,t),o=sl(o),o=ku(o,t),o=Vu(o,t),a=Gu(a),o=Gu(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=m+y+a,T=m+g+o,_=Fu(s,s.VERTEX_SHADER,A),M=Fu(s,s.FRAGMENT_SHADER,T);s.attachShader(b,_),s.attachShader(b,M),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function E(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(b)||"",V=s.getShaderInfoLog(_)||"",k=s.getShaderInfoLog(M)||"",N=L.trim(),q=V.trim(),J=k.trim(),W=!0,se=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,_,M);else{let X=Bu(s,_,"vertex"),$=Bu(s,M,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+X+`
`+$)}else N!==""?Ie("WebGLProgram: Program Info Log:",N):(q===""||J==="")&&(se=!1);se&&(R.diagnostics={runnable:W,programLog:N,vertexShader:{log:q,prefix:y},fragmentShader:{log:J,prefix:g}})}s.deleteShader(_),s.deleteShader(M),f=new ws(s,b),S=Ib(s,b)}let f;this.getUniforms=function(){return f===void 0&&E(this),f};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(b,Ab)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=_,this.fragmentShader=M,this}var Gb=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new al(e),t.set(e,n)),n}},al=class{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}};function zb(i){return i===mi||i===_r||i===yr}function Hb(i,e,t,n,s,r){let a=new os,o=new rl,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(f){return c.add(f),f===0?"uv":`uv${f}`}function b(f,S,D,R,L,V){let k=R.fog,N=L.geometry,q=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?R.environment:null,J=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,W=e.get(f.envMap||q,J),se=d[f.type],X=n.precision;f.precision!==null&&(X=n.getMaxPrecision(f.precision),X!==f.precision&&Ie("WebGLProgram.getParameters:",f.precision,"not supported, using",X,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ie=$!==void 0?$.length:0,Te=0;N.morphAttributes.position!==void 0&&(Te=1),N.morphAttributes.normal!==void 0&&(Te=2),N.morphAttributes.color!==void 0&&(Te=3);let Oe,Z,ue,ve;if(se){let ge=Un[se];Oe=ge.vertexShader,Z=ge.fragmentShader}else{Oe=f.vertexShader,Z=f.fragmentShader;let ge=o.getVertexShaderStage(f),it=o.getFragmentShaderStage(f);o.update(f,ge,it),ue=ge.id,ve=it.id}let De=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Fe=L.isInstancedMesh===!0,rt=L.isBatchedMesh===!0,Ae=!!f.map,Qe=!!f.matcap,et=!!W,We=et&&W.isPMREMTexture===!0,ht=!!f.aoMap,mt=!!f.lightMap,Lt=!!f.bumpMap&&f.wireframe===!1,ct=!!f.normalMap,cn=!!f.displacementMap,vt=!!f.emissiveMap,Ct=!!f.metalnessMap,jt=!!f.roughnessMap,H=f.anisotropy>0,C=f.clearcoat>0,Pe=f.diffuseRoughness>0,me=f.dispersion>0,ye=f.retroreflectivity>0,ee=f.iridescence>0,Xe=f.sheen>0,Ee=f.transmission>0,we=H&&!!f.anisotropyMap,w=C&&!!f.clearcoatMap,x=C&&!!f.clearcoatNormalMap,U=C&&!!f.clearcoatRoughnessMap,te=Pe&&!!f.diffuseRoughnessMap,G=ee&&!!f.iridescenceMap,ae=ee&&!!f.iridescenceThicknessMap,ne=Xe&&!!f.sheenColorMap,j=Xe&&!!f.sheenRoughnessMap,Y=!!f.specularMap,ce=!!f.specularColorMap,I=!!f.specularIntensityMap,Q=Ee&&!!f.transmissionMap,K=Ee&&!!f.thicknessMap,he=!!f.gradientMap,oe=!!f.alphaMap,le=f.alphaTest>0,Re=!!f.alphaHash,qe=!!f.extensions,re=Nn;f.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(re=i.toneMapping);let Ne=We?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,He={shaderID:se,shaderType:f.type,shaderName:f.name,vertexShader:Oe,fragmentShader:Z,defines:f.defines,customVertexShaderID:ue,customFragmentShaderID:ve,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:X,batching:rt,batchingColor:rt&&L._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Ae,matcap:Qe,envMap:et,envMapMode:et&&W.mapping,envMapPMREM:We,envMapMaxLod:We?Ne.length-1:null,envMapSize:We?Ne[0].width:null,aoMap:ht,lightMap:mt,bumpMap:Lt,normalMap:ct,displacementMap:cn,emissiveMap:vt,normalMapObjectSpace:ct&&f.normalMapType===uu,normalMapTangentSpace:ct&&f.normalMapType===go,packedNormalMap:ct&&f.normalMapType===go&&zb(f.normalMap.format),metalnessMap:Ct,roughnessMap:jt,anisotropy:H,anisotropyMap:we,clearcoat:C,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:U,diffuseRoughness:Pe,diffuseRoughnessMap:te,dispersion:me,retroreflection:ye,iridescence:ee,iridescenceMap:G,iridescenceThicknessMap:ae,sheen:Xe,sheenColorMap:ne,sheenRoughnessMap:j,specularMap:Y,specularColorMap:ce,specularIntensityMap:I,transmission:Ee,transmissionMap:Q,thicknessMap:K,gradientMap:he,opaque:f.transparent===!1&&f.blending===ys&&f.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:Re,combine:f.combine,mapUv:Ae&&p(f.map.channel),aoMapUv:ht&&p(f.aoMap.channel),lightMapUv:mt&&p(f.lightMap.channel),bumpMapUv:Lt&&p(f.bumpMap.channel),normalMapUv:ct&&p(f.normalMap.channel),displacementMapUv:cn&&p(f.displacementMap.channel),emissiveMapUv:vt&&p(f.emissiveMap.channel),metalnessMapUv:Ct&&p(f.metalnessMap.channel),roughnessMapUv:jt&&p(f.roughnessMap.channel),anisotropyMapUv:we&&p(f.anisotropyMap.channel),clearcoatMapUv:w&&p(f.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&p(f.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&p(f.diffuseRoughnessMap.channel),iridescenceMapUv:G&&p(f.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(f.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&p(f.sheenColorMap.channel),sheenRoughnessMapUv:j&&p(f.sheenRoughnessMap.channel),specularMapUv:Y&&p(f.specularMap.channel),specularColorMapUv:ce&&p(f.specularColorMap.channel),specularIntensityMapUv:I&&p(f.specularIntensityMap.channel),transmissionMapUv:Q&&p(f.transmissionMap.channel),thicknessMapUv:K&&p(f.thicknessMap.channel),alphaMapUv:oe&&p(f.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ct||H),vertexNormals:!!N.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Ae||oe),fog:!!k,useFog:f.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||N.attributes.normal===void 0&&ct===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Te,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:V.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:Ae&&f.map.isVideoTexture===!0&&Ke.getTransfer(f.map.colorSpace)===nt,decodeVideoTextureEmissive:vt&&f.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(f.emissiveMap.colorSpace)===nt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Kt,flipSided:f.side===Ft,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:qe&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&f.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function y(f){let S=[];if(f.shaderID?S.push(f.shaderID):(S.push(f.customVertexShaderID),S.push(f.customFragmentShaderID)),f.defines!==void 0)for(let D in f.defines)S.push(D),S.push(f.defines[D]);return f.isRawShaderMaterial===!1&&(g(S,f),m(S,f),S.push(i.outputColorSpace)),S.push(f.customProgramCacheKey),S.join()}function g(f,S){f.push(S.precision),f.push(S.outputColorSpace),f.push(S.envMapMode),f.push(S.envMapPMREM),f.push(S.envMapMaxLod),f.push(S.envMapSize),f.push(S.mapUv),f.push(S.alphaMapUv),f.push(S.lightMapUv),f.push(S.aoMapUv),f.push(S.bumpMapUv),f.push(S.normalMapUv),f.push(S.displacementMapUv),f.push(S.emissiveMapUv),f.push(S.metalnessMapUv),f.push(S.roughnessMapUv),f.push(S.anisotropyMapUv),f.push(S.clearcoatMapUv),f.push(S.clearcoatNormalMapUv),f.push(S.clearcoatRoughnessMapUv),f.push(S.diffuseRoughnessMapUv),f.push(S.iridescenceMapUv),f.push(S.iridescenceThicknessMapUv),f.push(S.sheenColorMapUv),f.push(S.sheenRoughnessMapUv),f.push(S.specularMapUv),f.push(S.specularColorMapUv),f.push(S.specularIntensityMapUv),f.push(S.transmissionMapUv),f.push(S.thicknessMapUv),f.push(S.combine),f.push(S.fogExp2),f.push(S.sizeAttenuation),f.push(S.morphTargetsCount),f.push(S.numSunLights),f.push(S.numDirLights),f.push(S.numPointLights),f.push(S.numSpotLights),f.push(S.numSpotLightMaps),f.push(S.numHemiLights),f.push(S.numRectAreaLights),f.push(S.numSunLightShadows),f.push(S.numDirLightShadows),f.push(S.numPointLightShadows),f.push(S.numSpotLightShadows),f.push(S.numSpotLightShadowsWithMaps),f.push(S.numLightProbes),f.push(S.numLightProbeGrids),f.push(S.shadowMapType),f.push(S.toneMapping),f.push(S.numClippingPlanes),f.push(S.numClipIntersection),f.push(S.depthPacking)}function m(f,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),f.push(a.mask)}function A(f){let S=d[f.type],D;if(S){let R=Un[S];D=Mu.clone(R.uniforms)}else D=f.uniforms;return D}function T(f,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new Vb(i,S,f,s),l.push(D),h.set(S,D)),D}function _(f){if(--f.usedTimes===0){let S=l.indexOf(f);l[S]=l[l.length-1],l.pop(),h.delete(f.cacheKey),f.destroy()}}function M(f){o.remove(f)}function E(){o.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:A,acquireProgram:T,releaseProgram:_,releaseShaderCache:M,programs:l,dispose:E}}function Wb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,b,y,g,m){let A=i[e];return A===void 0?(A={id:d.id,object:d,geometry:p,material:b,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:m},i[e]=A):(A.id=d.id,A.object=d,A.geometry=p,A.material=b,A.materialVariant=a(d),A.groupOrder=y,A.renderOrder=d.renderOrder,A.z=g,A.group=m),e++,A}function c(d,p,b,y,g,m,A){A.reversedDepth===!0&&(g=-g);let T=o(d,p,b,y,g,m);b.transmission>0?n.push(T):b.transparent===!0?s.push(T):t.push(T)}function l(d,p,b,y,g,m){let A=o(d,p,b,y,g,m);b.transmission>0?n.unshift(A):b.transparent===!0?s.unshift(A):t.unshift(A)}function h(d,p){t.length>1&&t.sort(d||qb),n.length>1&&n.sort(p||Hu),s.length>1&&s.sort(p||Hu)}function u(){for(let d=e,p=i.length;d<p;d++){let b=i[d];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Xb(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Wu,i.set(n,[a])):s>=r.length?(a=new Wu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Le};break;case"SpotLight":t={position:new F,direction:new F,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function jb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Yb=0;function Jb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zb(i){let e=new Kb,t=jb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new Ve,a=new Ve;function o(l){let h=0,u=0,d=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let p=0,b=0,y=0,g=0,m=0,A=0,T=0,_=0,M=0,E=0,f=0,S=0,D=0,R=0;l.sort(Jb);for(let V=0,k=l.length;V<k;V++){let N=l[V],q=N.color,J=N.intensity,W=N.distance,se=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===mi?se=N.shadow.map.texture:se=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=q.r*J,u+=q.g*J,d+=q.b*J;else if(N.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(N.sh.coefficients[X],J);R++}else if(N.isSunLight){let X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,ie=t.get(N);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[b]=ie,n.sunShadowMap[b]=se;let Te=$.getViewportCount();for(let Oe=0;Oe<Te;Oe++)n.sunShadowMatrix[y+Oe]=$.getMatrix(Oe),n.sunShadowCascade[y+Oe]=$._cascadeData[Oe];y+=Te,b++}n.sun[p]=X,p++}else if(N.isDirectionalLight){let X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,ie=t.get(N);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,n.directionalShadow[g]=ie,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=N.shadow.matrix,M++}n.directional[g]=X,g++}else if(N.isSpotLight){let X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(q).multiplyScalar(J),X.distance=W,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,n.spot[A]=X;let $=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,$.updateMatrices(N),N.castShadow&&D++),n.spotLightMatrix[A]=$.matrix,N.castShadow){let ie=t.get(N);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,n.spotShadow[A]=ie,n.spotShadowMap[A]=se,f++}A++}else if(N.isRectAreaLight){let X=e.get(N);X.color.copy(q).multiplyScalar(J),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=X,T++}else if(N.isPointLight){let X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){let $=N.shadow,ie=t.get(N);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,ie.shadowCameraNear=$.camera.near,ie.shadowCameraFar=$.camera.far,n.pointShadow[m]=ie,n.pointShadowMap[m]=se,n.pointShadowMatrix[m]=N.shadow.matrix,E++}n.point[m]=X,m++}else if(N.isHemisphereLight){let X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(J),X.groundColor.copy(N.groundColor).multiplyScalar(J),n.hemi[_]=X,_++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==p||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==A||L.rectAreaLength!==T||L.hemiLength!==_||L.numSunShadows!==b||L.numDirectionalShadows!==M||L.numPointShadows!==E||L.numSpotShadows!==f||L.numSpotMaps!==S||L.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=g,n.spot.length=A,n.rectArea.length=T,n.point.length=m,n.hemi.length=_,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=f,n.spotShadowMap.length=f,n.spotLightMatrix.length=f+S-D,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,L.sunLength=p,L.directionalLength=g,L.pointLength=m,L.spotLength=A,L.rectAreaLength=T,L.hemiLength=_,L.numSunShadows=b,L.numDirectionalShadows=M,L.numPointShadows=E,L.numSpotShadows=f,L.numSpotMaps=S,L.numLightProbes=R,n.version=Yb++)}function c(l,h){let u=0,d=0,p=0,b=0,y=0,g=0,m=h.matrixWorldInverse;for(let A=0,T=l.length;A<T;A++){let _=l[A];if(_.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(_.isSpotLight){let M=n.spot[b];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),b++}else if(_.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),p++}else if(_.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function qu(i){let e=new Zb(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Qb(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new qu(i),e.set(s,[o])):r>=a.length?(o=new qu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
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
}`,t0=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],n0=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Xu=new Ve,Sr=new F,el=new F;function i0(i,e,t){let n=new fi,s=new Ge,r=new Ge,a=new st,o=new xa,c=new Aa,l={},h=t.maxTextureSize,u={[pn]:Ft,[Ft]:pn,[Kt]:Kt},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:$b,fragmentShader:e0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let b=new zt;b.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Nt(b,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let m=this.type;this.render=function(E,f,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Gh&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);let D=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Ni),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let k=m!==this.type;k&&f.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(q=>q.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,q=E.length;N<q;N++){let J=E[N],W=J.shadow;if(W===void 0){Ie("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let se=W.getFrameExtents();s.multiply(se),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,W.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||k===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===_s){if(J.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new rn(s.x,s.y,{format:mi,type:Sn,minFilter:St,magFilter:St,generateMipmaps:!1}),W.map.texture.name=J.name+".shadowMap",W.map.depthTexture=new jn(s.x,s.y,an),W.map.depthTexture.name=J.name+".shadowMapDepth",W.map.depthTexture.format=qn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=bt,W.map.depthTexture.magFilter=bt}else J.isPointLight?(W.map=new Er(s.x),W.map.depthTexture=new nr(s.x,Mn)):(W.map=new rn(s.x,s.y),W.map.depthTexture=new jn(s.x,s.y,Mn)),W.map.depthTexture.name=J.name+".shadowMap",W.map.depthTexture.format=qn,this.type===mr?(W.map.depthTexture.compareFunction=X?Fc:Uc,W.map.depthTexture.minFilter=St,W.map.depthTexture.magFilter=St):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=bt,W.map.depthTexture.magFilter=bt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let $=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();J.isPointLight!==!0&&W.updateMatrices(J,S);let ie=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:S.layers;for(let Te=0;Te<$;Te++){let Oe=W.getCamera(Te);if(J.isPointLight){let Z=W.camera,ue=W.matrix,ve=J.distance||Z.far;ve!==Z.far&&(Z.far=ve,Z.updateProjectionMatrix()),Sr.setFromMatrixPosition(J.matrixWorld),Z.position.copy(Sr),el.copy(Z.position),el.add(t0[Te]),Z.up.copy(n0[Te]),Z.lookAt(el),Z.updateMatrixWorld(),ue.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Xu.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Xu,Z.coordinateSystem,Z.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Te),i.clear();else{Te===0&&(i.setRenderTarget(W.map),i.clear());let Z=W.getViewport(Te);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),V.viewport(a)}n=W.getFrustum(Te),_(f,S,Oe,J,ie,this.type)}W.isPointLightShadow!==!0&&this.type===_s&&A(W,S),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(D,R,L)};function A(E,f){let S=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new rn(s.x,s.y,{format:mi,type:Sn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(f,null,S,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(f,null,S,p,y,null)}function T(E,f,S,D){let R=null,L=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=S.isPointLight===!0?c:o,i.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){let V=R.uuid,k=f.uuid,N=l[V];N===void 0&&(N={},l[V]=N);let q=N[k];q===void 0&&(q=R.clone(),N[k]=q,f.addEventListener("dispose",M)),R=q}if(R.visible=f.visible,R.wireframe=f.wireframe,D===_s?R.side=f.shadowSide!==null?f.shadowSide:f.side:R.side=f.shadowSide!==null?f.shadowSide:u[f.side],R.alphaMap=f.alphaMap,R.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,R.map=f.map,R.clipShadows=f.clipShadows,R.clippingPlanes=f.clippingPlanes,R.clipIntersection=f.clipIntersection,R.displacementMap=f.displacementMap,R.displacementScale=f.displacementScale,R.displacementBias=f.displacementBias,R.wireframeLinewidth=f.wireframeLinewidth,R.linewidth=f.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let V=i.properties.get(R);V.light=S}return R}function _(E,f,S,D,R,L){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===_s)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let N=e.update(E),q=E.material;if(Array.isArray(q)){let J=N.groups;for(let W=0,se=J.length;W<se;W++){let X=J[W],$=q[X.materialIndex];if($&&$.visible){let ie=T(E,$,D,L);E.onBeforeShadow(i,E,f,S,N,ie,X),i.renderBufferDirect(S,null,N,ie,E,X),E.onAfterShadow(i,E,f,S,N,ie,X)}}}else if(q.visible){let J=T(E,q,D,L);E.onBeforeShadow(i,E,f,S,N,J,null),i.renderBufferDirect(S,null,N,J,E,null),E.onAfterShadow(i,E,f,S,N,J,null)}}let k=E.children;for(let N=0,q=k.length;N<q;N++)_(k[N],f,S,D,R,L)}function M(E){E.target.removeEventListener("dispose",M);for(let S in l){let D=l[S],R=E.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function s0(i,e){function t(){let I=!1,Q=new st,K=null,he=new st(0,0,0,0);return{setMask:function(oe){K!==oe&&!I&&(i.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){I=oe},setClear:function(oe,le,Re,qe,re){re===!0&&(oe*=qe,le*=qe,Re*=qe),Q.set(oe,le,Re,qe),he.equals(Q)===!1&&(i.clearColor(oe,le,Re,qe),he.copy(Q))},reset:function(){I=!1,K=null,he.set(-1,0,0,0)}}}function n(){let I=!1,Q=!1,K=null,he=null,oe=null;return{setReversed:function(le){if(Q!==le){let Re=e.get("EXT_clip_control");le?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Q=le;let qe=oe;oe=null,this.setClear(qe)}},getReversed:function(){return Q},setTest:function(le){le?pe(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(le){K!==le&&!I&&(i.depthMask(le),K=le)},setFunc:function(le){if(Q&&(le=_u[le]),he!==le){switch(le){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=le}},setLocked:function(le){I=le},setClear:function(le){oe!==le&&(oe=le,Q&&(le=1-le),i.clearDepth(le))},reset:function(){I=!1,K=null,he=null,oe=null,Q=!1}}}function s(){let I=!1,Q=null,K=null,he=null,oe=null,le=null,Re=null,qe=null,re=null;return{setTest:function(Ne){I||(Ne?pe(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(Ne){Q!==Ne&&!I&&(i.stencilMask(Ne),Q=Ne)},setFunc:function(Ne,He,ge){(K!==Ne||he!==He||oe!==ge)&&(i.stencilFunc(Ne,He,ge),K=Ne,he=He,oe=ge)},setOp:function(Ne,He,ge){(le!==Ne||Re!==He||qe!==ge)&&(i.stencilOp(Ne,He,ge),le=Ne,Re=He,qe=ge)},setLocked:function(Ne){I=Ne},setClear:function(Ne){re!==Ne&&(i.clearStencil(Ne),re=Ne)},reset:function(){I=!1,Q=null,K=null,he=null,oe=null,le=null,Re=null,qe=null,re=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},p=new WeakMap,b=[],y=null,g=!1,m=null,A=null,T=null,_=null,M=null,E=null,f=null,S=new Le(0,0,0),D=0,R=!1,L=null,V=null,k=null,N=null,q=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,se=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=se>=2);let $=null,ie={},Te=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Z=new st().fromArray(Te),ue=new st().fromArray(Oe);function ve(I,Q,K,he){let oe=new Uint8Array(4),le=i.createTexture();i.bindTexture(I,le),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<K;Re++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(Q+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return le}let De={};De[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),a.setFunc(ts),Lt(!1),ct(pc),pe(i.CULL_FACE),ht(Ni);function pe(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Fe(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function rt(I,Q){return d[I]!==Q?(i.bindFramebuffer(I,Q),d[I]=Q,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Q),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ae(I,Q){let K=b,he=!1;if(I){K=p.get(Q),K===void 0&&(K=[],p.set(Q,K));let oe=I.textures;if(K.length!==oe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Re=oe.length;le<Re;le++)K[le]=i.COLOR_ATTACHMENT0+le;K.length=oe.length,he=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,he=!0);he&&i.drawBuffers(K)}function Qe(I){return y!==I?(i.useProgram(I),y=I,!0):!1}let et={[Li]:i.FUNC_ADD,[Hh]:i.FUNC_SUBTRACT,[Wh]:i.FUNC_REVERSE_SUBTRACT};et[qh]=i.MIN,et[Xh]=i.MAX;let We={[Kh]:i.ZERO,[jh]:i.ONE,[Yh]:i.SRC_COLOR,[xc]:i.SRC_ALPHA,[tu]:i.SRC_ALPHA_SATURATE,[$h]:i.DST_COLOR,[Zh]:i.DST_ALPHA,[Jh]:i.ONE_MINUS_SRC_COLOR,[Ac]:i.ONE_MINUS_SRC_ALPHA,[eu]:i.ONE_MINUS_DST_COLOR,[Qh]:i.ONE_MINUS_DST_ALPHA,[nu]:i.CONSTANT_COLOR,[iu]:i.ONE_MINUS_CONSTANT_COLOR,[su]:i.CONSTANT_ALPHA,[ru]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(I,Q,K,he,oe,le,Re,qe,re,Ne){if(I===Ni){g===!0&&(Fe(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),I!==zh){if(I!==m||Ne!==R){if((A!==Li||M!==Li)&&(i.blendEquation(i.FUNC_ADD),A=Li,M=Li),Ne)switch(I){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",I);break}else switch(I){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gc:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",I);break}T=null,_=null,E=null,f=null,S.set(0,0,0),D=0,m=I,R=Ne}return}oe=oe||Q,le=le||K,Re=Re||he,(Q!==A||oe!==M)&&(i.blendEquationSeparate(et[Q],et[oe]),A=Q,M=oe),(K!==T||he!==_||le!==E||Re!==f)&&(i.blendFuncSeparate(We[K],We[he],We[le],We[Re]),T=K,_=he,E=le,f=Re),(qe.equals(S)===!1||re!==D)&&(i.blendColor(qe.r,qe.g,qe.b,re),S.copy(qe),D=re),m=I,R=!1}function mt(I,Q){I.side===Kt?Fe(i.CULL_FACE):pe(i.CULL_FACE);let K=I.side===Ft;Q&&(K=!K),Lt(K),I.blending===ys&&I.transparent===!1?ht(Ni):ht(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let he=I.stencilWrite;o.setTest(he),he&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function ct(I){I!==kh?(pe(i.CULL_FACE),I!==V&&(I===pc?i.cullFace(i.BACK):I===Vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),V=I}function cn(I){I!==k&&(W&&i.lineWidth(I),k=I)}function vt(I,Q,K){I?(pe(i.POLYGON_OFFSET_FILL),(N!==Q||q!==K)&&(N=Q,q=K,a.getReversed()&&(Q=-Q,K=-K),i.polygonOffset(Q,K))):Fe(i.POLYGON_OFFSET_FILL)}function Ct(I){I?pe(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function jt(I){I===void 0&&(I=i.TEXTURE0+J-1),$!==I&&(i.activeTexture(I),$=I)}function H(I,Q,K){K===void 0&&($===null?K=i.TEXTURE0+J-1:K=$);let he=ie[K];he===void 0&&(he={type:void 0,texture:void 0},ie[K]=he),(he.type!==I||he.texture!==Q)&&($!==K&&(i.activeTexture(K),$=K),i.bindTexture(I,Q||De[I]),he.type=I,he.texture=Q)}function C(){let I=ie[$];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Pe(){try{i.compressedTexImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function me(){try{i.compressedTexImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function ye(){try{i.texSubImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function ee(){try{i.texSubImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function Xe(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function we(){try{i.texStorage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function w(){try{i.texStorage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function x(){try{i.texImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function U(){try{i.texImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function te(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function G(I,Q){u[I]!==Q&&(i.pixelStorei(I,Q),u[I]=Q)}function ae(I){Z.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function ne(I){ue.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ue.copy(I))}function j(I,Q){let K=l.get(Q);K===void 0&&(K=new WeakMap,l.set(Q,K));let he=K.get(I);he===void 0&&(he=i.getUniformBlockIndex(Q,I.name),i.uniformBlockBinding(Q,he,he),K.set(I,he))}function Y(I,Q,K){let oe=l.get(Q).get(I);c[oe]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,oe,K),c[oe]=K)}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,ie={},d={},c={},p=new WeakMap,b=[],y=null,g=!1,m=null,A=null,T=null,_=null,M=null,E=null,f=null,S=new Le(0,0,0),D=0,R=!1,L=null,V=null,k=null,N=null,q=null,Z.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pe,disable:Fe,bindFramebuffer:rt,drawBuffers:Ae,useProgram:Qe,setBlending:ht,setMaterial:mt,setFlipSided:Lt,setCullFace:ct,setLineWidth:cn,setPolygonOffset:vt,setScissorTest:Ct,activeTexture:jt,bindTexture:H,unbindTexture:C,compressedTexImage2D:Pe,compressedTexImage3D:me,texImage2D:x,texImage3D:U,pixelStorei:G,getParameter:te,updateUBOMapping:j,uniformBlockBinding:Y,texStorage2D:we,texStorage3D:w,texSubImage2D:ye,texSubImage3D:ee,compressedTexSubImage2D:Xe,compressedTexSubImage3D:Ee,scissor:ae,viewport:ne,reset:ce}}function r0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,h=new WeakMap,u=new Set,d,p=new WeakMap,b=new Set,y=new FinalizationRegistry(w=>b.delete(w)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return g?new OffscreenCanvas(w,x):ss("canvas")}function A(w,x,U){let te=1,G=we(w);if((G.width>U||G.height>U)&&(te=U/Math.max(G.width,G.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ae=Math.floor(te*G.width),ne=Math.floor(te*G.height);d===void 0&&(d=m(ae,ne));let j=x?m(ae,ne):d;return j.width=ae,j.height=ne,j.getContext("2d").drawImage(w,0,0,ae,ne),Ie("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+ae+"x"+ne+")."),j}else return"data"in w&&Ie("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),w;return w}function T(w){return w.generateMipmaps}function _(w){i.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,U,te,G,ae=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne;te&&(ne=e.get("EXT_texture_norm16"),ne||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(U===i.FLOAT&&(j=i.R32F),U===i.HALF_FLOAT&&(j=i.R16F),U===i.UNSIGNED_BYTE&&(j=i.R8),U===i.UNSIGNED_SHORT&&ne&&(j=ne.R16_EXT),U===i.SHORT&&ne&&(j=ne.R16_SNORM_EXT)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.R8UI),U===i.UNSIGNED_SHORT&&(j=i.R16UI),U===i.UNSIGNED_INT&&(j=i.R32UI),U===i.BYTE&&(j=i.R8I),U===i.SHORT&&(j=i.R16I),U===i.INT&&(j=i.R32I)),x===i.RG&&(U===i.FLOAT&&(j=i.RG32F),U===i.HALF_FLOAT&&(j=i.RG16F),U===i.UNSIGNED_BYTE&&(j=i.RG8),U===i.UNSIGNED_SHORT&&ne&&(j=ne.RG16_EXT),U===i.SHORT&&ne&&(j=ne.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RG8UI),U===i.UNSIGNED_SHORT&&(j=i.RG16UI),U===i.UNSIGNED_INT&&(j=i.RG32UI),U===i.BYTE&&(j=i.RG8I),U===i.SHORT&&(j=i.RG16I),U===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGB8UI),U===i.UNSIGNED_SHORT&&(j=i.RGB16UI),U===i.UNSIGNED_INT&&(j=i.RGB32UI),U===i.BYTE&&(j=i.RGB8I),U===i.SHORT&&(j=i.RGB16I),U===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),U===i.UNSIGNED_INT&&(j=i.RGBA32UI),U===i.BYTE&&(j=i.RGBA8I),U===i.SHORT&&(j=i.RGBA16I),U===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_SHORT&&ne&&(j=ne.RGB16_EXT),U===i.SHORT&&ne&&(j=ne.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){let Y=ae?Hs:Ke.getTransfer(G);U===i.FLOAT&&(j=i.RGBA32F),U===i.HALF_FLOAT&&(j=i.RGBA16F),U===i.UNSIGNED_BYTE&&(j=Y===nt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&ne&&(j=ne.RGBA16_EXT),U===i.SHORT&&ne&&(j=ne.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function f(w,x){let U;return w?x===null||x===Mn||x===Fi?U=i.DEPTH24_STENCIL8:x===an?U=i.DEPTH32F_STENCIL8:x===Ts&&(U=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mn||x===Fi?U=i.DEPTH_COMPONENT24:x===an?U=i.DEPTH_COMPONENT32F:x===Ts&&(U=i.DEPTH_COMPONENT16),U}function S(w,x){return T(w)===!0||w.isFramebufferTexture&&w.minFilter!==bt&&w.minFilter!==St?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function D(w){let x=new WeakRef(w);n.get(w).__ref=x,b.add(x),y.register(w,x,x)}function R(w){let x=n.get(w).__ref;x!==void 0&&(b.delete(x),y.unregister(x))}function L(w){k(w.target)}function V(w){N(w.target)}function k(w){w.removeEventListener("dispose",L),R(w),J(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function N(w){w.removeEventListener("dispose",V),R(w),se(w)}function q(){for(let w of b){let x=w.deref();x!==void 0&&(x.isRenderTarget===!0?N(x):k(x))}b.clear(),u.clear()}function J(w){let x=n.get(w);if(x.__webglInit===void 0)return;let U=w.source,te=p.get(U);if(te){let G=te[x.__cacheKey];G.usedTimes--,G.usedTimes===0&&W(w),Object.keys(te).length===0&&p.delete(U)}n.remove(w)}function W(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let U=w.source,te=p.get(U);delete te[x.__cacheKey],a.memory.textures--}function se(w){let x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();let U=w.depthTexture;if(U&&U.renderTarget===w&&k(U),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let ae=0;ae<x.__webglFramebuffer[G].length;ae++)i.deleteFramebuffer(x.__webglFramebuffer[G][ae]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let te=w.textures;for(let G=0,ae=te.length;G<ae;G++){let ne=n.get(te[G]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(te[G])}n.remove(w)}let X=0;function $(){X=0}function ie(){return X}function Te(w){X=w}function Oe(){let w=X;return w>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function Z(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function ue(w,x){let U=n.get(w);if(w.isVideoTexture&&Xe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){let te=w.image;if(te===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(U,w,x);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function ve(w,x){let U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){mt(U,w,x);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function De(w,x){let U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){mt(U,w,x);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function pe(w,x){let U=n.get(w);if(w.version>0&&U.__version!==w.version){Lt(U,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}let Fe={[ui]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[ns]:i.MIRRORED_REPEAT},rt={[bt]:i.NEAREST,[Pa]:i.NEAREST_MIPMAP_NEAREST,[Ui]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[Ss]:i.LINEAR_MIPMAP_NEAREST,[mn]:i.LINEAR_MIPMAP_LINEAR},Ae={[fu]:i.NEVER,[Oc]:i.ALWAYS,[pu]:i.LESS,[Uc]:i.LEQUAL,[mu]:i.EQUAL,[Fc]:i.GEQUAL,[gu]:i.GREATER,[bu]:i.NOTEQUAL};function Qe(w,x){if(x.type===an&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===St||x.magFilter===Ss||x.magFilter===Ui||x.magFilter===mn||x.minFilter===St||x.minFilter===Ss||x.minFilter===Ui||x.minFilter===mn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Fe[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Fe[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Fe[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,rt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,rt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===bt||x.minFilter!==Ui&&x.minFilter!==mn||x.type===an&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function et(w,x){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",L),D(x));let te=x.source,G=p.get(te);G===void 0&&(G={},p.set(te,G));let ae=Z(x);if(ae!==w.__cacheKey){G[ae]===void 0&&(G[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),G[ae].usedTimes++;let ne=G[w.__cacheKey];ne!==void 0&&(G[w.__cacheKey].usedTimes--,ne.usedTimes===0&&W(x)),w.__cacheKey=ae,w.__webglTexture=G[ae].texture}return U}function We(w,x,U){return Math.floor(Math.floor(w/U)/x)}function ht(w,x,U,te){let ae=w.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,te,x.data);else{ae.sort((I,Q)=>I.start-Q.start);let ne=0;for(let I=1;I<ae.length;I++){let Q=ae[ne],K=ae[I],he=Q.start+Q.count,oe=We(K.start,x.width,4),le=We(Q.start,x.width,4);K.start<=he+1&&oe===le&&We(K.start+K.count-1,x.width,4)===oe?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++ne,ae[ne]=K)}ae.length=ne+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let I=0,Q=ae.length;I<Q;I++){let K=ae[I],he=Math.floor(K.start/4),oe=Math.ceil(K.count/4),le=he%x.width,Re=Math.floor(he/x.width),qe=oe,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(i.TEXTURE_2D,0,le,Re,qe,re,U,te,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function mt(w,x,U){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);let G=et(w,x),ae=x.source;t.bindTexture(te,w.__webglTexture,i.TEXTURE0+U);let ne=n.get(ae);if(ae.version!==ne.__version||G===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let re=Ke.getPrimaries(Ke.workingColorSpace),Ne=x.colorSpace===ti?null:Ke.getPrimaries(x.colorSpace),He=x.colorSpace===ti||re===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Y=A(x.image,!1,s.maxTextureSize);Y=Ee(x,Y);let ce=r.convert(x.format,x.colorSpace),I=r.convert(x.type),Q=E(x.internalFormat,ce,I,x.normalized,x.colorSpace,x.isVideoTexture);Qe(te,x);let K,he=x.mipmaps,oe=x.isVideoTexture!==!0,le=ne.__version===void 0||G===!0,Re=ae.dataReady,qe=S(x,Y);if(x.isDepthTexture)Q=f(x.format===ei,x.type),le&&(oe?t.texStorage2D(i.TEXTURE_2D,1,Q,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,Q,Y.width,Y.height,0,ce,I,null));else if(x.isDataTexture)if(he.length>0){oe&&le&&t.texStorage2D(i.TEXTURE_2D,qe,Q,he[0].width,he[0].height);for(let re=0,Ne=he.length;re<Ne;re++)K=he[re],oe?Re&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,K.width,K.height,ce,I,K.data):t.texImage2D(i.TEXTURE_2D,re,Q,K.width,K.height,0,ce,I,K.data);x.generateMipmaps=!1}else oe?(le&&t.texStorage2D(i.TEXTURE_2D,qe,Q,Y.width,Y.height),Re&&ht(x,Y,ce,I)):t.texImage2D(i.TEXTURE_2D,0,Q,Y.width,Y.height,0,ce,I,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){oe&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,Q,he[0].width,he[0].height,Y.depth);for(let re=0,Ne=he.length;re<Ne;re++)if(K=he[re],x.format!==gn)if(ce!==null)if(oe){if(Re)if(x.layerUpdates.size>0){let He=Kc(K.width,K.height,x.format,x.type);for(let ge of x.layerUpdates){let it=K.data.subarray(ge*He/K.data.BYTES_PER_ELEMENT,(ge+1)*He/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ge,K.width,K.height,1,ce,it)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,Y.depth,ce,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Q,K.width,K.height,Y.depth,0,K.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,Y.depth,ce,I,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Q,K.width,K.height,Y.depth,0,ce,I,K.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{oe&&le&&t.texStorage2D(i.TEXTURE_2D,qe,Q,he[0].width,he[0].height);for(let re=0,Ne=he.length;re<Ne;re++)K=he[re],x.format!==gn?ce!==null?oe?Re&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,K.width,K.height,ce,K.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Q,K.width,K.height,0,K.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Re&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,K.width,K.height,ce,I,K.data):t.texImage2D(i.TEXTURE_2D,re,Q,K.width,K.height,0,ce,I,K.data)}else if(x.isDataArrayTexture)if(oe){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,Q,Y.width,Y.height,Y.depth),Re)if(x.layerUpdates.size>0){let re=Kc(Y.width,Y.height,x.format,x.type);for(let Ne of x.layerUpdates){let He=Y.data.subarray(Ne*re/Y.data.BYTES_PER_ELEMENT,(Ne+1)*re/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ne,Y.width,Y.height,1,ce,I,He)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ce,I,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,Y.width,Y.height,Y.depth,0,ce,I,Y.data);else if(x.isData3DTexture)oe?(le&&t.texStorage3D(i.TEXTURE_3D,qe,Q,Y.width,Y.height,Y.depth),Re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ce,I,Y.data)):t.texImage3D(i.TEXTURE_3D,0,Q,Y.width,Y.height,Y.depth,0,ce,I,Y.data);else if(x.isFramebufferTexture){if(le)if(oe)t.texStorage2D(i.TEXTURE_2D,qe,Q,Y.width,Y.height);else{let re=Y.width,Ne=Y.height;for(let He=0;He<qe;He++)t.texImage2D(i.TEXTURE_2D,He,Q,re,Ne,0,ce,I,null),re>>=1,Ne>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Y.parentNode!==re){re.appendChild(Y),u.add(x),re.onpaint=Ne=>{let He=Ne.changedElements;for(let ge of u)He.includes(ge.image)&&(ge.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let He=i.RGBA,ge=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,He,ge,it,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(he.length>0){if(oe&&le){let re=we(he[0]);t.texStorage2D(i.TEXTURE_2D,qe,Q,re.width,re.height)}for(let re=0,Ne=he.length;re<Ne;re++)K=he[re],oe?Re&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ce,I,K):t.texImage2D(i.TEXTURE_2D,re,Q,ce,I,K);x.generateMipmaps=!1}else if(oe){if(le){let re=we(Y);t.texStorage2D(i.TEXTURE_2D,qe,Q,re.width,re.height)}Re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,I,Y)}else t.texImage2D(i.TEXTURE_2D,0,Q,ce,I,Y);T(x)&&x.mipmapsAutoUpdate===!0&&_(te),ne.__version=ae.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Lt(w,x,U){if(x.image.length!==6)return;let te=et(w,x),G=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+U);let ae=n.get(G);if(G.version!==ae.__version||te===!0){t.activeTexture(i.TEXTURE0+U);let ne=Ke.getPrimaries(Ke.workingColorSpace),j=x.colorSpace===ti?null:Ke.getPrimaries(x.colorSpace),Y=x.colorSpace===ti||ne===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ce=x.isCompressedTexture||x.image[0].isCompressedTexture,I=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let ge=0;ge<6;ge++)!ce&&!I?Q[ge]=A(x.image[ge],!0,s.maxCubemapSize):Q[ge]=I?x.image[ge].image:x.image[ge],Q[ge]=Ee(x,Q[ge]);let K=Q[0],he=r.convert(x.format,x.colorSpace),oe=r.convert(x.type),le=E(x.internalFormat,he,oe,x.normalized,x.colorSpace),Re=x.isVideoTexture!==!0,qe=ae.__version===void 0||te===!0,re=G.dataReady,Ne=S(x,K);Qe(i.TEXTURE_CUBE_MAP,x);let He;if(x.isDepthTexture){if(le=f(x.format===ei,x.type),qe)if(Re)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,le,K.width,K.height);else for(let ge=0;ge<6;ge++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,K.width,K.height,0,he,oe,null)}else if(ce){Re&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,le,K.width,K.height);for(let ge=0;ge<6;ge++){He=Q[ge].mipmaps;for(let it=0;it<He.length;it++){let It=He[it];x.format!==gn?he!==null?Re?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it,0,0,It.width,It.height,he,It.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it,le,It.width,It.height,0,It.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it,0,0,It.width,It.height,he,oe,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it,le,It.width,It.height,0,he,oe,It.data)}}}else{if(He=x.mipmaps,Re&&qe){He.length>0&&Ne++;let ge=we(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,le,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(I){Re?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Q[ge].width,Q[ge].height,he,oe,Q[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,Q[ge].width,Q[ge].height,0,he,oe,Q[ge].data);for(let it=0;it<He.length;it++){let ni=He[it].image[ge].image;Re?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it+1,0,0,ni.width,ni.height,he,oe,ni.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it+1,le,ni.width,ni.height,0,he,oe,ni.data)}}else{Re?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,he,oe,Q[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,he,oe,Q[ge]);for(let it=0;it<He.length;it++){let It=He[it];Re?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it+1,0,0,he,oe,It.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it+1,le,he,oe,It.image[ge])}}}T(x)&&x.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),ae.__version=G.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ct(w,x,U,te,G,ae){let ne=r.convert(U.format,U.colorSpace),j=r.convert(U.type),Y=E(U.internalFormat,ne,j,U.normalized,U.colorSpace),ce=n.get(x),I=n.get(U);if(I.__renderTarget=x,!ce.__hasExternalTextures){let Q=Math.max(1,x.width>>ae),K=Math.max(1,x.height>>ae);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,ae,Y,Q,K,x.depth,0,ne,j,null):t.texImage2D(G,ae,Y,Q,K,0,ne,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ee(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,G,I.__webglTexture,0,ye(x)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,G,I.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function cn(w,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let te=x.depthTexture,G=te&&te.isDepthTexture?te.type:null,ae=f(x.stencilBuffer,G),ne=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ee(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(x),ae,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(x),ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,w)}else{let te=x.textures;for(let G=0;G<te.length;G++){let ae=te[G],ne=r.convert(ae.format,ae.colorSpace),j=r.convert(ae.type),Y=E(ae.internalFormat,ne,j,ae.normalized,ae.colorSpace);ee(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(x),Y,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(x),Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(w,x,U){let te=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let G=n.get(x.depthTexture);G.__renderTarget=x;let ae=te?x.depthTexture.image[0]:x.depthTexture.image;(!G.__webglTexture||ae.width!==x.width||ae.height!==x.height)&&(ae.width=x.width,ae.height=x.height,x.depthTexture.needsUpdate=!0),te?pe(x.depthTexture,0):ue(x.depthTexture,0);let ne=G.__webglTexture,j=ye(x),Y=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,ce=x.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===qn)ee(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Y,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ce,Y,ne,0);else if(x.depthTexture.format===ei)ee(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Y,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ce,Y,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ct(w){let x=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let te=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){let G=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",G)};te.addEventListener("dispose",G),x.__depthDisposeCallback=G}x.__boundDepthTexture=te}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let te=0;te<6;te++)vt(x.__webglFramebuffer[te],w,te);else w.texture.mipmaps.length>0?vt(x.__webglFramebuffer[0],w,0):vt(x.__webglFramebuffer,w,0);else if(U){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=i.createRenderbuffer(),cn(x.__webglDepthbuffer[te],w,!1);else{let G=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,ae)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),cn(x.__webglDepthbuffer,w,!1);else{let G=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(w,x,U){let te=n.get(w);x!==void 0&&ct(te.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ct(w)}function H(w){let x=w.texture,U=n.get(w),te=n.get(x);w.addEventListener("dispose",V),D(w);let G=w.textures,ae=w.isWebGLCubeRenderTarget===!0,ne=G.length>1;if(ne||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,a.memory.textures++),ae){U.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps.length>0){U.__webglFramebuffer[j]=[];for(let Y=0;Y<x.mipmaps.length;Y++)U.__webglFramebuffer[j][Y]=i.createFramebuffer()}else U.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps.length>0){U.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)U.__webglFramebuffer[j]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ne)for(let j=0,Y=G.length;j<Y;j++){let ce=n.get(G[j]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ee(w)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let j=0;j<G.length;j++){let Y=G[j];U.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[j]);let ce=r.convert(Y.format,Y.colorSpace),I=r.convert(Y.type),Q=E(Y.internalFormat,ce,I,Y.normalized,Y.colorSpace,w.isXRRenderTarget===!0),K=ye(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,U.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),cn(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)ct(U.__webglFramebuffer[j][Y],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y);else ct(U.__webglFramebuffer[j],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);T(x)?_(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ne){for(let j=0,Y=G.length;j<Y;j++){let ce=G[j],I=n.get(ce),Q=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,I.__webglTexture),Qe(Q,ce),ct(U.__webglFramebuffer,w,ce,i.COLOR_ATTACHMENT0+j,Q,0),T(ce)&&_(Q)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,te.__webglTexture),Qe(j,x),x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)ct(U.__webglFramebuffer[Y],w,x,i.COLOR_ATTACHMENT0,j,Y);else ct(U.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,j,0);T(x)?_(j):x.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Ct(w)}function C(w){let x=w.textures;for(let U=0,te=x.length;U<te;U++){let G=x[U];if(T(G)&&G.mipmapsAutoUpdate===!0){let ae=M(w),ne=n.get(G).__webglTexture;t.bindTexture(ae,ne),_(ae),t.unbindTexture()}}}let Pe=[];function me(w){if(w.samples>0){if(ee(w)===!1){let x=w.textures,U=w.width,te=w.height,G=i.COLOR_BUFFER_BIT,ae=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=n.get(w),j=x.length>1;if(j)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ne.__webglColorRenderbuffer[ce]);let I=n.get(x[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,U,te,0,0,U,te,G,i.NEAREST),c===!0&&(Pe.length=0,Pe.push(i.COLOR_ATTACHMENT0+ce),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Pe.push(ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,ne.__webglColorRenderbuffer[ce]);let I=n.get(x[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ye(w){return Math.min(s.maxSamples,w.samples)}function ee(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xe(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Ee(w,x){let U=w.colorSpace,te=w.format,G=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==Xt&&U!==ti&&(Ke.getTransfer(U)===nt?(te!==gn||G!==$t)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",U)),x}function we(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Oe,this.resetTextureUnits=$,this.getTextureUnits=ie,this.setTextureUnits=Te,this.setTexture2D=ue,this.setTexture2DArray=ve,this.setTexture3D=De,this.setTextureCube=pe,this.rebindTextures=jt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=ee,this.dispose=q}function a0(i,e){function t(n,s=ti){let r,a=Ke.getTransfer(s);if(n===$t)return i.UNSIGNED_BYTE;if(n===La)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cc)return i.BYTE;if(n===Ic)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===Na)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===Nc)return i.ALPHA;if(n===Lc)return i.RGB;if(n===gn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===Ua)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===br||n===xr||n===Ar||n===vr)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Va||n===Ga||n===za)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Wa||n===qa||n===Xa||n===Ka||n===_r||n===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Wa)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xa)return r.COMPRESSED_R11_EAC;if(n===Ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ya||n===Ja||n===Za||n===Qa||n===$a||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ya)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===ho||n===uo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fo||n===po||n===yr||n===mo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var o0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c0=`
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

}`,ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ir(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dn({vertexShader:o0,fragmentShader:c0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new rr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cl=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,b=null,y=typeof XRWebGLBinding<"u",g=new ol,m={},A=t.getContextAttributes(),T=null,_=null,M=[],E=[],f=new Ge,S=null,D=null,R=new Mt;R.viewport=new st;let L=new Mt;L.viewport=new st;let V=[R,L],k=new wa,N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=M[Z];return ue===void 0&&(ue=new cs,M[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=M[Z];return ue===void 0&&(ue=new cs,M[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=M[Z];return ue===void 0&&(ue=new cs,M[Z]=ue),ue.getHandSpace()};function J(Z){let ue=E.indexOf(Z.inputSource);if(ue===-1)return;let ve=M[ue];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,l||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",se);for(let Z=0;Z<M.length;Z++){let ue=E[Z];ue!==null&&(E[Z]=null,M[Z].disconnect(ue))}N=null,q=null,g.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(T),p=null,d=null,u=null,s=null,_=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(f.width,f.height,!1),D!==null){let Z=D.camera;Z.fov=D.fov,Z.zoom=D.zoom,Z.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",W),s.addEventListener("inputsourceschange",se),A.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(f),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,De=null,pe=null;A.depth&&(pe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=A.stencil?ei:qn,De=A.stencil?Fi:Mn);let Fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new rn(d.textureWidth,d.textureHeight,{format:gn,type:$t,depthTexture:new jn(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new rn(p.framebufferWidth,p.framebufferHeight,{format:gn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(Z){for(let ue=0;ue<Z.removed.length;ue++){let ve=Z.removed[ue],De=E.indexOf(ve);De>=0&&(E[De]=null,M[De].disconnect(ve))}for(let ue=0;ue<Z.added.length;ue++){let ve=Z.added[ue],De=E.indexOf(ve);if(De===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=E.length){E.push(ve),De=Fe;break}else if(E[Fe]===null){E[Fe]=ve,De=Fe;break}if(De===-1)break}let pe=M[De];pe&&pe.connect(ve)}}function X(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ue=Z.near,ve=Z.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),k.near=L.near=R.near=ue,k.far=L.far=R.far=ve,(N!==k.near||q!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,q=k.far),k.layers.mask=Z.layers.mask|6,R.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let De=Z.parent,pe=k.cameras;X(k,De);for(let Fe=0;Fe<pe.length;Fe++)X(pe[Fe],De);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&Z.isPerspectiveCamera&&(D={camera:Z,fov:Z.fov,zoom:Z.zoom}),$(Z,k,De)};function $(Z,ue,ve){ve===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ii*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Z){return m[Z]};let ie=null;function Te(Z,ue){if(h=ue.getViewerPose(l||a),b=ue,h!==null){let ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let De=!1;ve.length!==k.cameras.length&&(k.cameras.length=0,De=!0);for(let Ae=0;Ae<ve.length;Ae++){let Qe=ve[Ae],et=null;if(p!==null)et=p.getViewport(Qe);else{let ht=u.getViewSubImage(d,Qe);et=ht.viewport,Ae===0&&(e.setRenderTargetTextures(_,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(_))}let We=V[Ae];We===void 0&&(We=new Mt,We.layers.enable(Ae),We.viewport=new st,V[Ae]=We),We.matrix.fromArray(Qe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Qe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(et.x,et.y,et.width,et.height),Ae===0&&(k.matrix.copy(We.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),De===!0&&k.cameras.push(We)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Ae=u.getDepthInformation(ve[0]);Ae&&Ae.isValid&&Ae.texture&&g.init(Ae,s.renderState)}if(pe&&pe.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Ae=0;Ae<ve.length;Ae++){let Qe=ve[Ae].camera;if(Qe){let et=m[Qe];et||(et=new ir,m[Qe]=et);let We=u.getCameraImage(Qe);et.sourceTexture=We}}}}for(let ve=0;ve<M.length;ve++){let De=E[ve],pe=M[ve];De!==null&&pe!==void 0&&pe.update(De,ue,l||a)}ie&&ie(Z,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),b=null}let Oe=new Ku;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(Z){ie=Z},this.dispose=function(){}}},l0=new Ve,id=new Be;id.set(-1,0,0,0,1,0,0,0,1);function h0(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Wc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,A,T,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),b(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,A,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ft&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ft&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let A=e.get(m),T=A.envMap,_=A.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(l0.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(id),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,A,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*A,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,A){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ft&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function b(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let A=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u0(i,e,t,n){let s={},r={};function a(A,T){let _=T.program;n.uniformBlockBinding(A,_,s[A.id])}function o(A,T){let _=s[A.id];_===void 0&&(b(A),_=c(A),s[A.id]=_,A.addEventListener("dispose",g));let M=T.program;n.updateUBOMapping(A,M);let E=e.render.frame;r[A.id]!==E&&(l(A),r[A.id]=E)}function c(A){let T=i.createBuffer(),_=A.__size,M=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,_,M),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function l(A){let T=s[A.id],_=A.uniforms,M=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,f=_.length;E<f;E++){let S=_[E];if(Array.isArray(S))for(let D=0,R=S.length;D<R;D++)h(S[D],E,D,M);else h(S,E,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(A,T,_,M){if(d(A,T,_,M)===!0){let E=A.__offset,f=A.value;if(Array.isArray(f)){let S=0;for(let D=0;D<f.length;D++){let R=f[D],L=y(R,!0);u(R,A.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(f,A.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,A.__data)}}function u(A,T,_){typeof A=="number"||typeof A=="boolean"?T[_]=A:A.isMatrix3?(T[_]=A.elements[0],T[_+1]=A.elements[1],T[_+2]=A.elements[2],T[_+3]=0,T[_+4]=A.elements[3],T[_+5]=A.elements[4],T[_+6]=A.elements[5],T[_+7]=0,T[_+8]=A.elements[6],T[_+9]=A.elements[7],T[_+10]=A.elements[8],T[_+11]=0):ArrayBuffer.isView(A)?T.set(A.subarray(0,T.length-_),_):A.toArray(T,_)}function d(A,T,_,M){let E=A.value,f=T+"_"+_;if(Array.isArray(E)){M[f]===void 0&&(M[f]=[]);let S=M[f],D=!1;for(let R=0;R<E.length;R++)p(E[R],S,R)===!0&&(D=!0);return D}return p(E,M,f)}function p(A,T,_){if(T[_]===void 0)return typeof A=="number"||typeof A=="boolean"?T[_]=A:ArrayBuffer.isView(A)?T[_]=A.slice():T[_]=A.clone(),!0;{let M=T[_];if(typeof A=="number"||typeof A=="boolean"){if(M!==A)return T[_]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(M.equals(A)===!1)return M.copy(A),!0}}return!1}function b(A){let T=A.uniforms,_=0,M=16;for(let f=0,S=T.length;f<S;f++){let D=Array.isArray(T[f])?T[f]:[T[f]];for(let R=0,L=D.length;R<L;R++){let V=D[R],k=Array.isArray(V.value)?V.value:[V.value],N=Array.isArray(T[f])||Array.isArray(V.value),q=_;for(let W=0,se=k.length;W<se;W++){let X=k[W],$=y(X,N),ie=_%M,Te=ie%$.boundary,Oe=ie+Te;_+=Te,Oe!==0&&M-Oe<$.storage&&(_+=M-Oe),W===0&&(q=_),_+=$.storage}let J=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new J((_-q)/Float32Array.BYTES_PER_ELEMENT),V.__offset=q}}let E=_%M;return E>0&&(_+=M-E),A.__size=_,A.__cache={},this}function y(A,T){let _={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(_.boundary=4,_.storage=4):A.isVector2?(_.boundary=8,_.storage=8):A.isVector3||A.isColor?(_.boundary=16,_.storage=12):A.isVector4?(_.boundary=16,_.storage=16):A.isMatrix3?(_.boundary=16,_.storage=48):A.isMatrix4?(_.boundary=16,_.storage=64):A.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(_.boundary=16,_.storage=A.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",A),T===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(A){let T=A.target;T.removeEventListener("dispose",g),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let A in s)i.deleteBuffer(s[A]);s={},r={}}return{bind:a,update:o,dispose:m}}var d0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function f0(){return Dn===null&&(Dn=new fs(d0,16,16,mi,Sn),Dn.name="DFG_LUT",Dn.minFilter=St,Dn.magFilter=St,Dn.wrapS=hn,Dn.wrapT=hn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var vo=class{constructor(e={}){let{canvas:t=xu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=$t}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;let y=p,g=new Set([Ba,Oa,Fa]),m=new Set([$t,Mn,Ts,Fi,La,Da]),A=new Uint32Array(4),T=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},M=null,E=null,f=[],S=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,V=null,k=null,N=null,q=null;this._outputColorSpace=dt;let J=0,W=0,se=null,X=-1,$=null,ie=new st,Te=new st,Oe=null,Z=new Le(0),ue=0,ve=t.width,De=t.height,pe=1,Fe=null,rt=null,Ae=new st(0,0,ve,De),Qe=new st(0,0,ve,De),et=!1,We=new fi,ht=new pa,mt=!1,Lt=!1,ct=new Ve,cn=new F,vt=new st,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function H(){return se===null?pe:1}let C=n;function Pe(v,P){return t.getContext(v,P)}let me,ye,ee,Xe,Ee,we,w,x,U,te,G,ae,ne,j,Y,ce,I,Q,K,he,oe,le,Re;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",ge,!1),C===null){let P="webgl2";if(C=Pe(P,v),C===null)throw Pe(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(v){throw t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ue("WebGLRenderer: "+v.message),v}function qe(){me=new Sg(C),me.init(),oe=new a0(C,me),ye=new fg(C,me,e,oe),ee=new s0(C,me),ye.reversedDepthBuffer&&d&&ee.buffers.depth.setReversed(!0),k=C.createFramebuffer(),N=C.createFramebuffer(),q=C.createFramebuffer(),Xe=new wg(C),Ee=new Wb,we=new r0(C,me,ee,Ee,ye,oe,Xe),w=new Mg(R),x=new If(C),le=new ug(C,x),U=new Tg(C,x,Xe,le),te=new Ig(C,U,x,le,Xe),Q=new Cg(C,ye,we),Y=new pg(Ee),G=new Hb(R,w,me,ye,le,Y),ae=new h0(R,Ee),ne=new Xb,j=new Qb(me),I=new hg(R,w,ee,te,b,c),ce=new i0(R,te,ye),Re=new u0(C,Xe,ye,ee),K=new dg(C,me,Xe),he=new Eg(C,me,Xe),Xe.programs=G.programs,R.capabilities=ye,R.extensions=me,R.properties=Ee,R.renderLists=ne,R.shadowMap=ce,R.state=ee,R.info=Xe}y!==$t&&(D=new Pg(y,t.width,t.height,o,s,r));let re=new cl(R,C);this.xr=re,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let v=me.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=me.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(v){v!==void 0&&(pe=v,this.setSize(ve,De,!1))},this.getSize=function(v){return v.set(ve,De)},this.setSize=function(v,P,z=!0){if(re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=v,De=P,t.width=Math.floor(v*pe),t.height=Math.floor(P*pe),z===!0&&(t.style.width=v+"px",t.style.height=P+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(ve*pe,De*pe).floor()},this.setDrawingBufferSize=function(v,P,z){ve=v,De=P,pe=z,t.width=Math.floor(v*z),t.height=Math.floor(P*z),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(y===$t){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ie)},this.getViewport=function(v){return v.copy(Ae)},this.setViewport=function(v,P,z,O){v.isVector4?Ae.set(v.x,v.y,v.z,v.w):Ae.set(v,P,z,O),ee.viewport(ie.copy(Ae).multiplyScalar(H()).round())},this.getScissor=function(v){return v.copy(Qe)},this.setScissor=function(v,P,z,O){v.isVector4?Qe.set(v.x,v.y,v.z,v.w):Qe.set(v,P,z,O),ee.scissor(Te.copy(Qe).multiplyScalar(H()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(v){ee.setScissorTest(et=v)},this.setOpaqueSort=function(v){Fe=v},this.setTransparentSort=function(v){rt=v},this.getClearColor=function(v){return v.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,z=!0){let O=0;if(v){let B=!1;if(se!==null){let fe=se.texture.format;B=g.has(fe)}if(B){let fe=se.texture.type,_e=m.has(fe),de=I.getClearColor(),xe=I.getClearAlpha(),Ce=de.r,ke=de.g,Je=de.b;_e?(A[0]=Ce,A[1]=ke,A[2]=Je,A[3]=xe,C.clearBufferuiv(C.COLOR,0,A)):(T[0]=Ce,T[1]=ke,T[2]=Je,T[3]=xe,C.clearBufferiv(C.COLOR,0,T))}else O|=C.COLOR_BUFFER_BIT}P&&(O|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),V=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),I.dispose(),ne.dispose(),j.dispose(),we.dispose(),Ee.dispose(),w.dispose(),te.dispose(),U.dispose(),le.dispose(),Re.dispose(),G.dispose(),re.dispose(),re.removeEventListener("sessionstart",Gl),re.removeEventListener("sessionend",zl),Ai.stop()};function Ne(v){v.preventDefault(),Ws("WebGLRenderer: Context Lost."),L=!0}function He(){Ws("WebGLRenderer: Context Restored."),L=!1;let v=Xe.autoReset,P=ce.enabled,z=ce.autoUpdate,O=ce.needsUpdate,B=ce.type;qe(),Xe.autoReset=v,ce.enabled=P,ce.autoUpdate=z,ce.needsUpdate=O,ce.type=B}function ge(v){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function it(v){let P=v.target;P.removeEventListener("dispose",it),It(P)}function It(v){ni(v),Ee.remove(v)}function ni(v){let P=Ee.get(v).programs;P!==void 0&&(P.forEach(function(z){G.releaseProgram(z)}),v.isShaderMaterial&&G.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,z,O,B,fe){P===null&&(P=Ct);let _e=B.isMesh&&B.matrixWorld.determinantAffine()<0,de=yd(v,P,z,O,B);ee.setMaterial(O,_e);let xe=z.index,Ce=1;if(O.wireframe===!0){if(xe=U.getWireframeAttribute(z),xe===void 0)return;Ce=2}let ke=z.drawRange,Je=z.attributes.position,Me=ke.start*Ce,Ze=(ke.start+ke.count)*Ce;fe!==null&&(Me=Math.max(Me,fe.start*Ce),Ze=Math.min(Ze,(fe.start+fe.count)*Ce)),xe!==null?(Me=Math.max(Me,0),Ze=Math.min(Ze,xe.count)):Je!=null&&(Me=Math.max(Me,0),Ze=Math.min(Ze,Je.count));let _t=Ze-Me;if(_t<0||_t===1/0)return;le.setup(B,O,de,z,xe);let lt,at=K;if(xe!==null&&(lt=x.get(xe),at=he,at.setIndex(lt)),B.isMesh)O.wireframe===!0?(ee.setLineWidth(O.wireframeLinewidth*H()),at.setMode(C.LINES)):at.setMode(C.TRIANGLES);else if(B.isLine){let Ot=O.linewidth;Ot===void 0&&(Ot=1),ee.setLineWidth(Ot*H()),B.isLineSegments?at.setMode(C.LINES):B.isLineLoop?at.setMode(C.LINE_LOOP):at.setMode(C.LINE_STRIP)}else B.isPoints?at.setMode(C.POINTS):B.isSprite&&at.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(me.get("WEBGL_multi_draw"))at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ot=B._multiDrawStarts,Se=B._multiDrawCounts,Wt=B._multiDrawCount,tt=xe?x.get(xe).bytesPerElement:1,vi=Ee.get(O).currentProgram.getUniforms();for(let Bt=0;Bt<Wt;Bt++)vi.setValue(C,"_gl_DrawID",Bt),at.render(Ot[Bt]/tt,Se[Bt])}else if(B.isInstancedMesh)at.renderInstances(Me,_t,B.count);else if(z.isInstancedBufferGeometry){let Ot=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Se=Math.min(z.instanceCount,Ot);at.renderInstances(Me,_t,Se)}else at.render(Me,_t)};function Vl(v,P,z,O){V!==null&&v.isNodeMaterial&&V.setObject(O,v),mt===!0&&Y.setState(v,z,!1),v.transparent===!0&&v.side===Kt&&v.forceSinglePass===!1?(v.side=Ft,v.needsUpdate=!0,Ps(v,P,O),v.side=pn,v.needsUpdate=!0,Ps(v,P,O),v.side=Kt):Ps(v,P,O)}this.compile=function(v,P,z=null){z===null&&(z=v),V!==null&&V.renderStart(v,P,z),E=j.get(z),E.init(P),S.push(E),z.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),v!==z&&v.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights(),V!==null&&V.updateLights(E.state.lightsArray),Lt=this.localClippingEnabled,mt=Y.init(this.clippingPlanes,Lt),mt===!0&&Y.setGlobalState(this.clippingPlanes,P),V!==null&&ce.render(E.state.shadowsArray,z,P);let O=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let fe=B.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){let de=fe[_e];Vl(de,z,P,B),O.add(de)}else Vl(fe,z,P,B),O.add(fe)}),E=S.pop(),V!==null&&V.renderEnd(),O},this.compileAsync=function(v,P,z=null){let O=this.compile(v,P,z);return new Promise(B=>{function fe(){if(O.forEach(function(_e){let xe=Ee.get(_e).currentProgram;(xe===void 0||xe.isReady())&&O.delete(_e)}),O.size===0){B(v);return}setTimeout(fe,10)}me.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Io=null;function vd(v){Io&&Io(v)}function Gl(){Ai.stop()}function zl(){Ai.start()}let Ai=new Ku;Ai.setAnimationLoop(vd),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(v){Io=v,re.setAnimationLoop(v),v===null?Ai.stop():Ai.start()},re.addEventListener("sessionstart",Gl),re.addEventListener("sessionend",zl),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;V!==null&&V.renderStart(v,P);let z=re.enabled===!0&&re.isPresenting===!0,O=D!==null&&(se===null||z)&&D.begin(R,se);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(P),P=re.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,P,se),E=j.get(v,S.length),E.init(P),E.state.textureUnits=we.getTextureUnits(),S.push(E),ct.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?ht.setFromArrayCamera(P):We.setFromProjectionMatrix(ct,un,P.reversedDepth),Lt=this.localClippingEnabled,mt=Y.init(this.clippingPlanes,Lt),M=ne.get(v,f.length),M.init(),f.push(M),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let _e=R.xr.getDepthSensingMesh();_e!==null&&Ro(_e,P,-1/0,R.sortObjects)}Ro(v,P,0,R.sortObjects),M.finish(),V!==null&&V.updateLights(E.state.lightsArray),R.sortObjects===!0&&M.sort(Fe,rt),jt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,jt&&I.addToRenderList(M,v),this.info.autoReset===!0&&this.info.reset(),mt===!0&&Y.beginShadows();let B=E.state.shadowsArray;if(ce.render(B,v,P),mt===!0&&Y.endShadows(),(O&&D.hasRenderPass())===!1){let _e=M.opaque,de=M.transmissive;if(E.setupLights(),P.isArrayCamera){let xe=P.cameras;if(de.length>0)for(let Ce=0,ke=xe.length;Ce<ke;Ce++){let Je=xe[Ce];Wl(_e,de,v,Je)}jt&&I.render(v);for(let Ce=0,ke=xe.length;Ce<ke;Ce++){let Je=xe[Ce];Hl(M,v,Je,Je.viewport)}}else de.length>0&&Wl(_e,de,v,P),jt&&I.render(v),Hl(M,v,P)}se!==null&&W===0&&(we.updateMultisampleRenderTarget(se),we.updateRenderTargetMipmap(se)),O&&D.end(R),v.isScene===!0&&v.onAfterRender(R,v,P),le.resetDefaultState(),X=-1,$=null,S.pop(),S.length>0?(E=S[S.length-1],we.setTextureUnits(E.state.textureUnits),mt===!0&&Y.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,f.pop(),f.length>0?M=f[f.length-1]:M=null,V!==null&&V.renderEnd()};function Ro(v,P,z,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){let _e=P.isArrayCamera?ht:We;if(!v.frustumCulled||v.intersectsFrustum(_e)){O&&vt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ct);let de=te.update(v),xe=v.material;xe.visible&&M.push(v,de,xe,z,vt.z,null,P)}}else if(v.isMesh||v.isLine||v.isPoints){let _e=P.isArrayCamera?ht:We;if(!v.frustumCulled||v.intersectsFrustum(_e)){let de=te.update(v),xe=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),vt.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),vt.copy(de.boundingSphere.center)),vt.applyMatrix4(v.matrixWorld).applyMatrix4(ct)),Array.isArray(xe)){let Ce=de.groups;for(let ke=0,Je=Ce.length;ke<Je;ke++){let Me=Ce[ke],Ze=xe[Me.materialIndex];Ze&&Ze.visible&&M.push(v,de,Ze,z,vt.z,Me,P)}}else xe.visible&&M.push(v,de,xe,z,vt.z,null,P)}}}let fe=v.children;for(let _e=0,de=fe.length;_e<de;_e++)Ro(fe[_e],P,z,O)}function Hl(v,P,z,O){let{opaque:B,transmissive:fe,transparent:_e}=v;E.setupLightsView(z),mt===!0&&Y.setGlobalState(R.clippingPlanes,z),O&&ee.viewport(ie.copy(O)),B.length>0&&Ir(B,P,z),fe.length>0&&Ir(fe,P,z),_e.length>0&&Ir(_e,P,z),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Wl(v,P,z,O){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){let Me=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new rn(1,1,{generateMipmaps:!0,type:Me?Sn:$t,minFilter:mn,samples:Math.max(4,ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let fe=E.state.transmissionRenderTarget[O.id],_e=O.viewport||ie;fe.setSize(_e.z*R.transmissionResolutionScale,_e.w*R.transmissionResolutionScale);let de=R.getRenderTarget(),xe=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(fe),R.getClearColor(Z),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),jt&&I.render(z);let ke=R.toneMapping;R.toneMapping=Nn;let Je=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),mt===!0&&Y.setGlobalState(R.clippingPlanes,O),Ir(v,z,O),we.updateMultisampleRenderTarget(fe),we.updateRenderTargetMipmap(fe),me.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Ze=0,_t=P.length;Ze<_t;Ze++){let lt=P[Ze],{object:at,geometry:Ot,material:Se,group:Wt}=lt;if(Se.side===Kt&&at.layers.test(O.layers)){let tt=Se.side;Se.side=Ft,Se.needsUpdate=!0,ql(at,z,O,Ot,Se,Wt),Se.side=tt,Se.needsUpdate=!0,Me=!0}}Me===!0&&(we.updateMultisampleRenderTarget(fe),we.updateRenderTargetMipmap(fe))}R.setRenderTarget(de,xe,Ce),R.setClearColor(Z,ue),Je!==void 0&&(O.viewport=Je),R.toneMapping=ke}function Ir(v,P,z){let O=P.isScene===!0?P.overrideMaterial:null;for(let B=0,fe=v.length;B<fe;B++){let _e=v[B],{object:de,geometry:xe,group:Ce}=_e,ke=_e.material;ke.allowOverride===!0&&O!==null&&(ke=O),de.layers.test(z.layers)&&ql(de,P,z,xe,ke,Ce)}}function ql(v,P,z,O,B,fe){V!==null&&B.isNodeMaterial&&V.setObject(v,B),v.onBeforeRender(R,P,z,O,B,fe),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(R,P,z,O,v,fe),B.transparent===!0&&B.side===Kt&&B.forceSinglePass===!1?(B.side=Ft,B.needsUpdate=!0,R.renderBufferDirect(z,P,O,B,v,fe),B.side=pn,B.needsUpdate=!0,R.renderBufferDirect(z,P,O,B,v,fe),B.side=Kt):R.renderBufferDirect(z,P,O,B,v,fe),v.onAfterRender(R,P,z,O,B,fe)}function Xl(v){let P=0;for(let z of v)z.texture!==null&&P++;return P}function Ps(v,P,z){P.isScene!==!0&&(P=Ct);let O=Ee.get(v),B=E.state.lights,fe=E.state.shadowsArray,_e=B.state.version,de=G.getParameters(v,B.state,fe,P,z,E.state.lightProbeGridArray),xe=G.getProgramCacheKey(de),Ce=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;let ke=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=w.get(v.envMap||O.environment,ke),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",it),Ce=new Map,O.programs=Ce,O.programVariants=new Map);let Je=Ce.get(xe);if(Je!==void 0){if(O.currentProgram===Je&&O.lightsStateVersion===_e)return jl(v,de),Je}else de.uniforms=G.getUniforms(v),V!==null&&v.isNodeMaterial&&V.build(v,z,de),v.onBeforeCompile(de,R),Je=G.acquireProgram(de,xe),Ce.set(xe,Je),O.uniforms=de.uniforms;let Me=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Me.clippingPlanes=Y.uniform),jl(v,de),O.needsLights=Sd(v),O.lightsStateVersion=_e,O.needsLights&&(Me.ambientLightColor.value=B.state.ambient,Me.lightProbe.value=B.state.probe,Me.sunLights.value=B.state.sun,Me.sunLightShadows.value=B.state.sunShadow,Me.directionalLights.value=B.state.directional,Me.directionalLightShadows.value=B.state.directionalShadow,Me.spotLights.value=B.state.spot,Me.spotLightShadows.value=B.state.spotShadow,Me.rectAreaLights.value=B.state.rectArea,Me.ltc_1.value=B.state.rectAreaLTC1,Me.ltc_2.value=B.state.rectAreaLTC2,Me.pointLights.value=B.state.point,Me.pointLightShadows.value=B.state.pointShadow,Me.hemisphereLights.value=B.state.hemi,Me.sunShadowMatrix.value=B.state.sunShadowMatrix,Me.sunShadowCascade.value=B.state.sunShadowCascade,Me.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Me.spotLightMatrix.value=B.state.spotLightMatrix,Me.spotLightMap.value=B.state.spotLightMap,Me.pointShadowMatrix.value=B.state.pointShadowMatrix),O.numLightProbeGrids=Xl(E.state.lightProbeGridArray),O.currentProgram=Je,O.uniformsList=null,Je}function _d(v,P,z,O,B){let fe=Ee.get(v),_e=fe.currentProgram.id+","+O+","+B,de=fe.programVariants.get(_e);return de===void 0?(de=Ps(v,P,z),fe.programVariants.set(_e,de)):(fe.currentProgram=de,fe.uniformsList=null,fe.outputColorSpace=O,fe.toneMapping=B),de}function Kl(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=ws.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function jl(v,P){let z=Ee.get(v);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function yd(v,P,z,O,B){P.isScene!==!0&&(P=Ct),we.resetTextureUnits();let fe=P.fog,_e=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,de=se===null?R.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ke.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ce=w.get(O.envMap||_e,xe),ke=O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Je=!!z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Me=!!z.morphAttributes.position,Ze=!!z.morphAttributes.normal,_t=!!z.morphAttributes.color,lt=Nn;O.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(lt=R.toneMapping);let at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ot=at!==void 0?at.length:0,Se=Ee.get(O),Wt=E.state.lights;if(mt===!0&&(Lt===!0||v!==$)){let ut=v===$&&O.id===X;Y.setState(O,v,ut)}let tt=!1,vi=!1;O.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Wt.state.version||B.isBatchedMesh&&Se.batching===!1||!B.isBatchedMesh&&Se.batching===!0||B.isBatchedMesh&&Se.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Se.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Se.instancing===!1||!B.isInstancedMesh&&Se.instancing===!0||B.isSkinnedMesh&&Se.skinning===!1||!B.isSkinnedMesh&&Se.skinning===!0||B.isInstancedMesh&&Se.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Se.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Se.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Se.instancingMorph===!1&&B.morphTexture!==null||Se.envMap!==Ce||O.fog===!0&&Se.fog!==fe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Y.numPlanes||Se.numIntersection!==Y.numIntersection)||Se.vertexAlphas!==ke||Se.vertexTangents!==Je||Se.morphTargets!==Me||Se.morphNormals!==Ze||Se.morphColors!==_t||Se.morphTargetsCount!==Ot||Se.numLightProbeGrids!==Xl(E.state.lightProbeGridArray)?tt=!0:(Se.outputColorSpace!==de||Se.toneMapping!==lt)&&(vi=!0):(tt=!0,Se.__version=O.version);let Bt=Se.currentProgram;(tt===!0||vi===!0)&&(Bt=vi===!0?_d(O,P,B,de,lt):Ps(O,P,B),V&&O.isNodeMaterial&&V.onUpdateProgram(O,Bt,Se));let Rr=!1,ii=!1,_i=!1,$e=Bt.getUniforms(),Dt=Se.uniforms;if(ee.useProgram(Bt.program)&&(Rr=!0,ii=!0,_i=!0),O.id!==X&&(X=O.id,ii=!0),Rr||$!==v){ee.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),$e.setValue(C,"projectionMatrix",v.projectionMatrix),$e.setValue(C,"viewMatrix",v.matrixWorldInverse);let Rt=$e.map.cameraPosition;Rt!==void 0&&Rt.setValue(C,cn.setFromMatrixPosition(v.matrixWorld)),ye.logarithmicDepthBuffer&&$e.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&$e.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),$!==v&&($=v,ii=!0,_i=!0)}if(Se.needsLights&&(Wt.state.sunShadowMap.length>0&&$e.setValue(C,"sunShadowMap",Wt.state.sunShadowMap,we),Wt.state.directionalShadowMap.length>0&&$e.setValue(C,"directionalShadowMap",Wt.state.directionalShadowMap,we),Wt.state.spotShadowMap.length>0&&$e.setValue(C,"spotShadowMap",Wt.state.spotShadowMap,we),Wt.state.pointShadowMap.length>0&&$e.setValue(C,"pointShadowMap",Wt.state.pointShadowMap,we)),B.isSkinnedMesh){$e.setOptional(C,B,"bindMatrix"),$e.setOptional(C,B,"bindMatrixInverse");let ut=B.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),$e.setValue(C,"boneTexture",ut.boneTexture,we))}B.isBatchedMesh&&($e.setOptional(C,B,"batchingTexture"),$e.setValue(C,"batchingTexture",B._matricesTexture,we),$e.setOptional(C,B,"batchingIdTexture"),$e.setValue(C,"batchingIdTexture",B._indirectTexture,we),$e.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&$e.setValue(C,"batchingColorTexture",B._colorsTexture,we));let xn=z.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Q.update(B,z,Bt),(ii||Se.receiveShadow!==B.receiveShadow)&&(Se.receiveShadow=B.receiveShadow,$e.setValue(C,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(Dt.envMapIntensity.value=P.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=f0()),ii){if($e.setValue(C,"toneMappingExposure",R.toneMappingExposure),Se.needsLights&&Md(Dt,_i),fe&&O.fog===!0&&ae.refreshFogUniforms(Dt,fe),ae.refreshMaterialUniforms(Dt,O,pe,De,E.state.transmissionRenderTarget[v.id]),Se.needsLights&&Se.numLightProbeGrids>0){let ut=_,Rt=0;for(let On of E.state.lightProbeGridArray)On.texture!==null&&(ut.textures[Rt]=On.texture,ut.min[Rt]=On.boundingBox.min,ut.max[Rt]=On.boundingBox.max,ut.resolution[Rt]=On.resolution,Rt++);for(let On in ut)ut[On].length=Rt;Dt.probesSH.value=ut.textures,Dt.probesMin.value=ut.min,Dt.probesMax.value=ut.max,Dt.probesResolution.value=ut.resolution}ws.upload(C,Kl(Se),Dt,we)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ws.upload(C,Kl(Se),Dt,we),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&$e.setValue(C,"center",B.center),$e.setValue(C,"modelViewMatrix",B.modelViewMatrix),$e.setValue(C,"normalMatrix",B.normalMatrix),$e.setValue(C,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){let ut=O.uniformsGroups;for(let Rt=0,On=ut.length;Rt<On;Rt++){let Jl=ut[Rt];Re.update(Jl,Bt),Re.bind(Jl,Bt)}}return Bt}function Md(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Sd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(v,P,z){let O=Ee.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ee.get(v.texture).__webglTexture=P,Ee.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:z,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){let z=Ee.get(v);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,z=0){se=v,J=P,W=z;let O=null,B=!1,fe=!1;if(v){let de=Ee.get(v);if(de.__useDefaultFramebuffer!==void 0){ee.bindFramebuffer(C.FRAMEBUFFER,de.__webglFramebuffer),ie.copy(v.viewport),Te.copy(v.scissor),Oe=v.scissorTest,ee.viewport(ie),ee.scissor(Te),ee.setScissorTest(Oe),X=-1;return}else if(de.__webglFramebuffer===void 0)we.setupRenderTarget(v);else if(de.__hasExternalTextures)we.rebindTextures(v,Ee.get(v.texture).__webglTexture,Ee.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ke=v.depthTexture;if(de.__boundDepthTexture!==ke){if(ke!==null&&Ee.has(ke)&&(v.width!==ke.image.width||v.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(v)}}let xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);let Ce=Ee.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ce[P])?O=Ce[P][z]:O=Ce[P],B=!0):v.samples>0&&we.useMultisampledRTT(v)===!1?O=Ee.get(v).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[z]:O=Ce,ie.copy(v.viewport),Te.copy(v.scissor),Oe=v.scissorTest}else ie.copy(Ae).multiplyScalar(pe).floor(),Te.copy(Qe).multiplyScalar(pe).floor(),Oe=et;if(z!==0&&(O=k),ee.bindFramebuffer(C.FRAMEBUFFER,O)&&ee.drawBuffers(v,O),ee.viewport(ie),ee.scissor(Te),ee.setScissorTest(Oe),B){let de=Ee.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+P,de.__webglTexture,z)}else if(fe){let de=P;for(let xe=0;xe<v.textures.length;xe++){let Ce=Ee.get(v.textures[xe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+xe,Ce.__webglTexture,z,de)}}else if(v!==null&&z!==0){let de=Ee.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,de.__webglTexture,z)}X=-1};function Yl(v){let P=Ee.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=ye.textureFormatReadable(v.format),P.__typeReadable=ye.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,z,O,B,fe,_e,de=0){if(!(v&&v.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ee.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e],Array.isArray(xe)&&(xe=xe[0])),xe){ee.bindFramebuffer(C.FRAMEBUFFER,xe);try{let Ce=v.textures[de],ke=Ce.format,Je=Ce.type;v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de);let Me=Yl(Ce);if(Me.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&z>=0&&z<=v.height-B&&C.readPixels(P,z,O,B,oe.convert(ke),oe.convert(Je),fe)}finally{let Ce=se!==null?Ee.get(se).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,P,z,O,B,fe,_e,de=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ee.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e],Array.isArray(xe)&&(xe=xe[0])),xe)if(P>=0&&P<=v.width-O&&z>=0&&z<=v.height-B){ee.bindFramebuffer(C.FRAMEBUFFER,xe);let Ce=v.textures[de],ke=Ce.format,Je=Ce.type;v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de);let Me=Yl(Ce);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.bufferData(C.PIXEL_PACK_BUFFER,fe.byteLength,C.STREAM_READ),C.readPixels(P,z,O,B,oe.convert(ke),oe.convert(Je),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let _t=se!==null?Ee.get(se).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,_t);let lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await vu(C,lt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,fe),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(Ze),C.deleteSync(lt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,z=0){let O=Math.pow(2,-z),B=Math.floor(v.image.width*O),fe=Math.floor(v.image.height*O),_e=P!==null?P.x:0,de=P!==null?P.y:0;we.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,_e,de,B,fe),ee.unbindTexture()},this.copyTextureToTexture=function(v,P,z=null,O=null,B=0,fe=0){let _e,de,xe,Ce,ke,Je,Me,Ze,_t,lt=v.isCompressedTexture?v.mipmaps[fe]:v.image;if(z!==null)_e=z.max.x-z.min.x,de=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,ke=z.min.y,Je=z.isBox3?z.min.z:0;else{let $e=Math.pow(2,-B);_e=Math.floor(lt.width*$e),de=Math.floor(lt.height*$e),v.isDataArrayTexture?xe=lt.depth:v.isData3DTexture?xe=Math.floor(lt.depth*$e):xe=1,Ce=0,ke=0,Je=0}O!==null?(Me=O.x,Ze=O.y,_t=O.z):(Me=0,Ze=0,_t=0);let at=oe.convert(P.format),Ot=oe.convert(P.type),Se;P.isData3DTexture?(we.setTexture3D(P,0),Se=C.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(we.setTexture2DArray(P,0),Se=C.TEXTURE_2D_ARRAY):(we.setTexture2D(P,0),Se=C.TEXTURE_2D),ee.activeTexture(C.TEXTURE0),ee.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,P.flipY),ee.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),ee.pixelStorei(C.UNPACK_ALIGNMENT,P.unpackAlignment);let Wt=ee.getParameter(C.UNPACK_ROW_LENGTH),tt=ee.getParameter(C.UNPACK_IMAGE_HEIGHT),vi=ee.getParameter(C.UNPACK_SKIP_PIXELS),Bt=ee.getParameter(C.UNPACK_SKIP_ROWS),Rr=ee.getParameter(C.UNPACK_SKIP_IMAGES);ee.pixelStorei(C.UNPACK_ROW_LENGTH,lt.width),ee.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt.height),ee.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),ee.pixelStorei(C.UNPACK_SKIP_ROWS,ke),ee.pixelStorei(C.UNPACK_SKIP_IMAGES,Je);let ii=v.isDataArrayTexture||v.isData3DTexture,_i=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){let $e=Ee.get(v),Dt=Ee.get(P),xn=Ee.get($e.__renderTarget),ut=Ee.get(Dt.__renderTarget);ee.bindFramebuffer(C.READ_FRAMEBUFFER,xn.__webglFramebuffer),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Rt=0;Rt<xe;Rt++)ii&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.get(v).__webglTexture,B,Je+Rt),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.get(P).__webglTexture,fe,_t+Rt)),C.blitFramebuffer(Ce,ke,Ce+_e,ke+de,Me,Ze,Me+_e,Ze+de,C.DEPTH_BUFFER_BIT,C.NEAREST);ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||Ee.has(v)){let $e=Ee.get(v),Dt=Ee.get(P);ee.bindFramebuffer(C.READ_FRAMEBUFFER,N),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,q);for(let xn=0;xn<xe;xn++)ii?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,$e.__webglTexture,B,Je+xn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,$e.__webglTexture,B),_i?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.__webglTexture,fe,_t+xn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Dt.__webglTexture,fe),B!==0?C.blitFramebuffer(Ce,ke,Ce+_e,ke+de,Me,Ze,Me+_e,Ze+de,C.COLOR_BUFFER_BIT,C.NEAREST):_i?C.copyTexSubImage3D(Se,fe,Me,Ze,_t+xn,Ce,ke,_e,de):C.copyTexSubImage2D(Se,fe,Me,Ze,Ce,ke,_e,de);ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else _i?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(Se,fe,Me,Ze,_t,_e,de,xe,at,Ot,lt.data):P.isCompressedArrayTexture?C.compressedTexSubImage3D(Se,fe,Me,Ze,_t,_e,de,xe,at,lt.data):C.texSubImage3D(Se,fe,Me,Ze,_t,_e,de,xe,at,Ot,lt):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,fe,Me,Ze,_e,de,at,Ot,lt.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,fe,Me,Ze,lt.width,lt.height,at,lt.data):C.texSubImage2D(C.TEXTURE_2D,fe,Me,Ze,_e,de,at,Ot,lt);ee.pixelStorei(C.UNPACK_ROW_LENGTH,Wt),ee.pixelStorei(C.UNPACK_IMAGE_HEIGHT,tt),ee.pixelStorei(C.UNPACK_SKIP_PIXELS,vi),ee.pixelStorei(C.UNPACK_SKIP_ROWS,Bt),ee.pixelStorei(C.UNPACK_SKIP_IMAGES,Rr),fe===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&C.generateMipmap(Se),ee.unbindTexture()},this.initRenderTarget=function(v){Ee.get(v).__webglFramebuffer===void 0&&we.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?we.setTextureCube(v,0):v.isData3DTexture?we.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?we.setTexture2DArray(v,0):we.setTexture2D(v,0),ee.unbindTexture()},this.resetState=function(){J=0,W=0,se=null,ee.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};function ll(i,e){if(e===Dc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Es||e===Mr){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Es)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function sd(i){let e=new Map,t=new Map,n=i.clone();return rd(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function rd(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)rd(i.children[n],e.children[n],t)}var Mo=class extends Rn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gl(t)}),this.register(function(t){return new bl(t)}),this.register(function(t){return new xl(t)}),this.register(function(t){return new wl(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new vl(t)}),this.register(function(t){return new _l(t)}),this.register(function(t){return new yl(t)}),this.register(function(t){return new Ml(t)}),this.register(function(t){return new ml(t)}),this.register(function(t){return new Sl(t)}),this.register(function(t){return new Al(t)}),this.register(function(t){return new El(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new fl(t)}),this.register(function(t){return new So(t,je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new So(t,je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rl(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=$n.extractUrlBase(e);a=$n.resolveURL(l,this.path)}else a=$n.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new bs(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hd){try{a[je.KHR_BINARY_GLTF]=new Pl(e)}catch(u){s&&s(u);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Bl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:a[u]=new pl;break;case je.KHR_DRACO_MESH_COMPRESSION:a[u]=new Nl(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[u]=new Ll;break;case je.KHR_MESH_QUANTIZATION:a[u]=new Dl;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function m0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function pt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fl=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Xt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Pn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new dr(h),l.distance=u;break;case"spot":l=new ur(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Fn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},pl=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(e,t,n){let s=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Xt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}},ml=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},gl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(r,r)}return Promise.all(s)}},bl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},xl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Al=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},vl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Xt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,dt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},_l=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},yl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(r[0],r[1],r[2],Xt),Promise.all(s)}},Ml=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Sl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(r[0],r[1],r[2],Xt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,dt)),Promise.all(s)}},Tl=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},El=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return pt(this.parser,e,this.name)!==null?xt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},wl=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Cl=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Il=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},So=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}},Rl=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==bn.TRIANGLES&&l.mode!==bn.TRIANGLE_STRIP&&l.mode!==bn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let b of u){let y=new Ve,g=new F,m=new sn,A=new F(1,1,1),T=new Js(b.geometry,b.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,M),c.SCALE&&A.fromBufferAttribute(c.SCALE,M),T.setMatrixAt(M,y.compose(g,m,A));let _=null;for(let M in c)if(M==="_COLOR_0"){let E=c[M];T.instanceColor=new Kn(E.array,E.itemSize,E.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(_===null){let f=T.geometry;_=new zt,_.name=f.name;for(let S in f.attributes)_.setAttribute(S,f.attributes[S]);for(let S in f.morphAttributes)_.morphAttributes[S]=f.morphAttributes[S];f.index!==null&&_.setIndex(f.index),_.morphTargetsRelative=f.morphTargetsRelative;for(let S of f.groups)_.addGroup(S.start,S.count,S.materialIndex);f.boundingBox!==null&&(_.boundingBox=f.boundingBox.clone()),f.boundingSphere!==null&&(_.boundingSphere=f.boundingSphere.clone()),_.drawRange.start=f.drawRange.start,_.drawRange.count=f.drawRange.count,_.userData=Object.assign({},f.userData),T.geometry=_}let E=c[M];_.setAttribute(M,new Kn(E.array,E.itemSize,E.normalized))}ft.prototype.copy.call(T,b),this.parser.assignFinalMaterial(T),p.push(T)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},hd="glTF",Cr=12,ad={JSON:1313821514,BIN:5130562},Pl=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Cr,r=new DataView(e,Cr),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===ad.JSON){let l=new Uint8Array(e,Cr+a,o);this.content=n.decode(l)}else if(c===ad.BIN){let l=Cr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Fl[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Fl[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Rs[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(let b in p.attributes){let y=p.attributes[b],g=c[b];g!==void 0&&(y.normalized=g)}u(p)},o,l,Xt,d)})})}},Ll=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Dl=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},To=class extends In{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,p=d*u,b=e*l,y=b-l,g=-2*p+3*d,m=p-d,A=1-g,T=m-d+u;for(let _=0;_!==o;_++){let M=a[y+_+o],E=a[y+_+c]*h,f=a[b+_+o],S=a[b+_]*h;r[_]=A*M+T*E+g*f+m*S}return r}},g0=new sn,Ul=class extends To{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return g0.fromArray(r).normalize().toArray(r),r}},bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},od={9728:bt,9729:St,9984:Pa,9985:Ss,9986:Ui,9987:mn},cd={33071:hn,33648:ns,10497:ui},hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},b0={CUBICSPLINE:void 0,LINEAR:Ci,STEP:wi},ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function x0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pn})),i.DefaultMaterial}function Bi(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function A0(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function v0(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _0(i){let e,t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dl(t.attributes):e=i.indices+":"+dl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+dl(i.targets[n]);return e}function dl(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ol(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function y0(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var M0=new Ve,Bl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new m0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new lr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new fr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bs(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Bi(r,o,s),Fn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load($n.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=hl[s.type],o=Rs[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ut(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=hl[s.type],l=Rs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,b=s.normalized===!0,y,g;if(p&&p!==u){let m=Math.floor(d/p),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,T=t.cache.get(A);T||(y=new l(o,m*p,s.count*p/h),T=new hs(y,p/h),t.cache.add(A,T)),g=new us(T,c,d%p/h,b)}else o===null?y=new l(s.count*c):y=new l(o,d,s.count*c),g=new Ut(y,c,b);if(s.sparse!==void 0){let m=hl.SCALAR,A=Rs[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,M=new A(a[1],T,s.sparse.count*m),E=new l(a[2],_,s.sparse.count*c);o!==null&&(g=new Ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let f=0,S=M.length;f<S;f++){let D=M[f];if(g.setX(D,E[f*c]),c>=2&&g.setY(D,E[f*c+1]),c>=3&&g.setZ(D,E[f*c+2]),c>=4&&g.setW(D,E[f*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=b}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=od[d.magFilter]||St,h.minFilter=od[d.minFilter]||mn,h.wrapS=cd[d.wrapS]||ui,h.wrapT=cd[d.wrapT]||ui,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==bt&&h.minFilter!==St,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(p,b){t.parse(d,p,b)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let p=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(p),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(p,b){let y=p;t.isImageBitmapLoader===!0&&(y=function(g){let m=new Tt(g);m.needsUpdate=!0,p(m)}),t.load($n.resolveURL(d,r.path),y,void 0,b)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),Fn(d,a),d.userData.mimeType=a.mimeType||y0(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ms,Jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ps,Jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return fn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let u=s[je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Xt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Kt);let h=r.alphaMode||ul.OPAQUE;if(h===ul.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ul.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Zt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ge(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Zt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Zt){let u=r.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&a!==Zt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,dt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Fn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Bi(s,u,r),u})}createUniqueName(e){let t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ld(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=_0(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ld(new zt,l,t),l.mode===bn.TRIANGLE_STRIP?d=d.then(p=>ll(p,Mr)):l.mode===bn.TRIANGLE_FAN&&(d=d.then(p=>ll(p,Es))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?x0(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,b=h.length;p<b;p++){let y=h[p],g=a[p],m,A=l[p];if(g.mode===bn.TRIANGLES||g.mode===bn.TRIANGLE_STRIP||g.mode===bn.TRIANGLE_FAN||g.mode===void 0){let T=r.isSkinnedMesh===!0,_=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");T&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=T&&_?new js(y,A):new Nt(y,A),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===bn.LINES)m=new Zs(y,A);else if(g.mode===bn.LINE_STRIP)m=new Ri(y,A);else if(g.mode===bn.LINE_LOOP)m=new Qs(y,A);else if(g.mode===bn.POINTS)m=new $s(y,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&v0(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Fn(m,r),g.extensions&&Bi(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let p=0,b=u.length;p<b;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Bi(s,u[0],r),u[0];let d=new yn;r.extensions&&Bi(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,b=u.length;p<b;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Mt(gi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Pi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ys(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let p=s.channels[u],b=s.samplers[p.sampler],y=p.target,g=y.node,m=s.parameters!==void 0?s.parameters[b.input]:b.input,A=s.parameters!==void 0?s.parameters[b.output]:b.output;y.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",A)),l.push(b),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],b=u[2],y=u[3],g=u[4],m=[];for(let T=0,_=d.length;T<_;T++){let M=d[T],E=p[T],f=b[T],S=y[T],D=g[T];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let R=n._createAnimationTracks(M,E,f,S,D);if(R)for(let L=0;L<R.length;L++)m.push(R[L])}let A=new cr(r,void 0,m);return Fn(A,s),A})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,M0)});for(let p=0,b=u.length;p<b;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){let p=h.userData.pivot,b=u[0];h.pivot=new F().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],b.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ds:l.length>1?h=new yn:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Fn(h,r),r.extensions&&Bi(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new yn;n.name&&(r.name=s.createUniqueName(n.name)),Fn(r,n),n.extensions&&Bi(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(sd(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,p]of s.associations)(d instanceof Jt||d instanceof Tt)&&u.set(d,p);return h.traverse(d=>{let p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}bi[r.path]===bi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(bi[r.path]){case bi.weights:h=Jn;break;case bi.rotation:h=Zn;break;case bi.translation:case bi.scale:h=pi;break;default:n.itemSize===1?h=Jn:h=pi;break}let u=s.interpolation!==void 0?b0[s.interpolation]:Ci,d=this._getArrayFromAccessor(n);for(let p=0,b=c.length;p<b;p++){let y=new h(c[p]+"."+bi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ol(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Zn?Ul:To;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function S0(i,e,t){let n=e.attributes,s=new Gt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),o.normalized){let h=Ol(Rs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new F,c=new F;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,b=d.max;if(p!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(b[2]))),d.normalized){let y=Ol(Rs[d.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Yt;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function ld(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Fl[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ke.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Fn(i,e),S0(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?A0(i,e.targets,t):i})}var ud=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var A=new Uint8Array(m.length),T=0;T<m.length;++T){var _=m.charCodeAt(T);A[T]=_>96?_-97:_>64?_-39:_+4}for(var M=0,T=0;T<m.length;++T)A[M++]=A[T]<60?n[A[T]]:(A[T]-60)*64+A[++T];return A.buffer.slice(0,M)}function c(m,A,T,_,M,E,f){var S=m.exports.sbrk,D=_+3&-4,R=S(D*M),L=S(E.length),V=new Uint8Array(m.exports.memory.buffer);V.set(E,L);var k=A(R,_,M,L,E.length);if(k==0&&f&&f(R,D,M),T.set(V.subarray(R,R+_*M)),S(R-S(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(m){var A={object:new Worker(m),pending:0,requests:{}};return A.object.onmessage=function(T){var _=T.data;A.pending-=_.count,A.requests[_.id][_.action](_.value),delete A.requests[_.id]},A}function b(m){for(var A="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),T=new Blob([A],{type:"text/javascript"}),_=URL.createObjectURL(T),M=u.length;M<m;++M)u[M]=p(_);for(var M=m;M<u.length;++M)u[M].object.postMessage({});u.length=m,URL.revokeObjectURL(_)}function y(m,A,T,_,M){for(var E=u[0],f=1;f<u.length;++f)u[f].pending<E.pending&&(E=u[f]);return new Promise(function(S,D){var R=new Uint8Array(T),L=++d;E.pending+=m,E.requests[L]={resolve:S,reject:D},E.object.postMessage({id:L,count:m,size:A,source:R,mode:_,filter:M},[R.buffer])})}function g(m){var A=m.data;self.ready.then(function(T){if(!A.id)return self.close();try{var _=new Uint8Array(A.count*A.size);c(T,T.exports[A.mode],_,A.count,A.size,A.source,T.exports[A.filter]),self.postMessage({id:A.id,count:A.count,action:"resolve",value:_},[_.buffer])}catch(M){self.postMessage({id:A.id,count:A.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(m){b(m)},decodeVertexBuffer:function(m,A,T,_,M){c(r,r.exports.meshopt_decodeVertexBuffer,m,A,T,_,r.exports[l[M]])},decodeIndexBuffer:function(m,A,T,_){c(r,r.exports.meshopt_decodeIndexBuffer,m,A,T,_)},decodeIndexSequence:function(m,A,T,_){c(r,r.exports.meshopt_decodeIndexSequence,m,A,T,_)},decodeGltfBuffer:function(m,A,T,_,M,E){c(r,r.exports[h[M]],m,A,T,_,r.exports[l[E]])},decodeGltfBufferAsync:function(m,A,T,_,M){return u.length>0?y(m,A,T,h[_],l[M]):a.then(function(){var E=new Uint8Array(m*A);return c(r,r.exports[h[_]],E,m,A,T,r.exports[l[M]]),E})}}})();var Tn={inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,out:i=>1-Math.pow(1-i,3),in:i=>i*i*i,outBack:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),sine:i=>.5-.5*Math.cos(Math.PI*i)};function At(i,e,t,n,s,r=Tn.inOut){return i<=e?n:i>=t?s:n+(s-n)*r((i-e)/(t-e))}function ki(i,e,t){if(i<=e||i>=t)return 0;let n=Math.sin(Math.PI*(i-e)/(t-e));return n*n}function dd(i,e){return i<e?0:i<e+.16?Tn.out((i-e)/.16):i<e+.22?1:i<e+.36?1-Tn.inOut((i-e-.22)/.14):0}function fd({gulps:i=3,period:e=.42,strength:t=1,kind:n="normal",rng:s=Math.random}={}){n==="empty"&&(i=Math.max(i,7),e=.27),n==="dry"&&(i=2,e=.3);let r=n==="dry"?.32:.5,a=[];for(let l=0;l<i;l++)a.push(r+l*e+(l?(s()-.5)*.05:0));let o=r+i*e,c=[{t:.1,name:"draw"}];return a.forEach((l,h)=>{c.push({t:l+.2,name:"gulp",i:h}),c.push({t:l+.26,name:"kickVisor",amount:n==="empty"?.6:.85})}),c.push({t:o,name:"release"}),c.push({t:o+.08,name:"pop"}),c.push({t:o+.12,name:"kickSquash",amount:n==="dry"?.6:1}),c.push({t:o+.12,name:"kickVisor",amount:1.4}),c.push({t:o+.18,name:"ahh"}),c.sort((l,h)=>l.t-h.t),{gulps:i,period:e,strength:t,kind:n,gulpTimes:a,release:o,start:r,events:c,duration:o+1.45}}function pd(i,e){let{gulpTimes:t,release:n,strength:s,kind:r,start:a}=i,o=e>n,c=r==="dry",l=r==="empty",h=o?At(e,n,n+.2,1,0,Tn.out):At(e,0,.22,0,1,Tn.outBack),u=a+.02,d=At(e,.1,u,0,1,Tn.inOut),p=0;c&&(d=.42*ki(e,.1,n+.1),p=At(e,.1,.3,0,1));let b=At(e,.3,a,0,1),y=o?0:At(e,.28,a,0,.16),g=0,m=0,A=0;for(let k of t)y+=(l?.98:.82)*dd(e,k),g+=1.15*ki(e,k+.21,k+.36),m+=1.15*ki(e,k+.28,k+.45),c||(d-=.085*ki(e,k+.18,k+.36)),A+=1.15*ki(e,k+.16,k+.42);if(l){let k=t[Math.max(0,t.length-3)];p=At(e,k,k+.25,0,1)}o&&(y*=At(e,n,n+.22,1,0),d=c?0:At(e,n+.02,n+.42,Math.max(d,.95),0,Tn.in),b=At(e,n,n+.3,1,0)),y=Math.min(y,1.05),g=Math.min(g,1),m=Math.min(m,1);let T=t.length,_=At(e,.1,a,0,.16);t.forEach((k,N)=>{_+=(l?.84:.6)*s/T*At(e,k,k+.3,0,1,Tn.out)}),c&&(_=.12*ki(e,.1,n+.1)),o&&!l&&(_=At(e,n+.06,n+.1,_,0,Tn.in));let M=Math.min(1,(o?At(e,n,n+.3,.3,0):At(e,0,.3,0,.3))+.7*_),E=o?At(e,n,n+.5,1,0):At(e,0,.3,0,1),f=.04*E+.018*A-.035*ki(e,n+.15,n+1),S=.05*E,D=0;for(let k of t)D+=.58/Math.max(1,T)*At(e,k,k+.28,0,1,Tn.out)+.16*dd(e,k);let R=Math.min(.92,At(e,.16,a,0,.28)+D),L=At(e,n,n+.24,Math.max(.72,R),1,Tn.out)*At(e,n+.98,n+1.45,1,0),V=o?L:R;return{pucker:h,fill:Math.max(0,Math.min(1,d)),flow:b,sputter:p,cheek:y,swallowHi:g,swallowLo:m,squeeze:_,grip:M,leanPitch:f,leanYaw:S,blush:V}}var xi=class{constructor(e,t,n=0){this.w=e,this.z=t,this.x=n,this.v=0,this.target=n}kick(e){this.v+=e}step(e,t=this.target,n=this.z){this.target=t;let s=1/240,r=Math.min(64,Math.ceil(e/s)),a=e/Math.max(r,1);for(let o=0;o<r;o++){let c=this.w*this.w*(t-this.x)-2*n*this.w*this.v;this.v+=c*a,this.x+=this.v*a}return this.x}},Eo=class{constructor(){this.squeeze=new xi(23,.17),this.squash=new xi(15,.26),this.visor=new xi(21,.24),this.sag=new xi(4,1,0),this.sagTarget=0}event(e){e.name==="kickVisor"&&this.visor.kick(-e.amount*9),e.name==="kickSquash"&&this.squash.kick(e.amount*7.5)}update(e,t){let n=t?t.squeeze:0,s=n<this.squeeze.x-.02,r=this.squeeze.step(e,n,s?.17:.95),a=this.squash.step(e,0),o=this.visor.step(e,0),c=this.sag.step(e,this.sagTarget);return{squeeze:r,squash:a,visor:o,sag:c}}};var md={roblox_nom:"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",minecraft_drink:"SUQzBAAAAAAqRlRDT04AAAAHAAADQmx1ZXMAUFJJVgAAKgkAAFhNUAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQzNjAsIDIwMjAvMDIvMTMtMDE6MDc6MjIgICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOnhtcERNPSJodHRwOi8vbnMuYWRvYmUuY29tL3htcC8xLjAvRHluYW1pY01lZGlhLyIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNi0wOS0wOVQxNDo1MzozMS0wMzowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjYtMDktMDlUMTQ6NTM6MzEtMDM6MDAiCiAgIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YzU0ZGRjZTctODViMC0yYTQzLTg4NTQtMDcxMjEyOGE5MjIyIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmM1NGRkY2U3LTg1YjAtMmE0My04ODU0LTA3MTIxMjhhOTIyMiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ0NTIwZjdiLTVjYjAtZmM0OS05ZjhlLTY1NjUxNDYyZTYwMiIKICAgZGM6Zm9ybWF0PSJhdWRpby9tcGVnIj4KICAgPHhtcE1NOkRlcml2ZWRGcm9tCiAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlNmNhMzdmLTU1NDctODg0OS05NzU2LTViNjVhNDgzNmJlYyIKICAgIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZmU2Y2EzN2YtNTU0Ny04ODQ5LTk3NTYtNWI2NWE0ODM2YmVjIgogICAgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ0NTIwZjdiLTVjYjAtZmM0OS05ZjhlLTY1NjUxNDYyZTYwMiIvPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NDUyMGY3Yi01Y2IwLWZjNDktOWY4ZS02NTY1MTQ2MmU2MDIiCiAgICAgIHN0RXZ0OndoZW49IjIwMjYtMDktMDlUMTQ6NTMtMDM6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEF1ZGl0aW9uIDEzLjAgKFdpbmRvd3MpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjkyZmIzMGQ2LTU3ODktOTg0Zi05ZTRkLTdkYzllYjk3NTVlOSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNi0wOS0wOVQxNDo1My0wMzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQXVkaXRpb24gMTMuMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9tZXRhZGF0YSIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1M2RjYTcxYy0xMGIyLTBiNDEtYmU1OS1iYzFiYWRmN2FlNzIiCiAgICAgIHN0RXZ0OndoZW49IjIwMjYtMDktMDlUMTQ6NTMtMDM6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEF1ZGl0aW9uIDEzLjAgKFdpbmRvd3MpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRhZWMyNTY3LTU2ZmYtMWY0ZC04ODlmLTE1N2M5Nzk5ODY5MCIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNi0wOS0wOVQxNDo1MzozMS0wMzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQXVkaXRpb24gMTMuMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9tZXRhZGF0YSIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiCiAgICAgIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXVkaW8veC13YXYgdG8gYXVkaW8vbXBlZyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZTZjYTM3Zi01NTQ3LTg4NDktOTc1Ni01YjY1YTQ4MzZiZWMiCiAgICAgIHN0RXZ0OndoZW49IjIwMjYtMDktMDlUMTQ6NTM6MzEtMDM6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEF1ZGl0aW9uIDEzLjAgKFdpbmRvd3MpIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIKICAgICAgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhdWRpby94LXdhdiB0byBhdWRpby9tcGVnIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM1NGRkY2U3LTg1YjAtMmE0My04ODU0LTA3MTIxMjhhOTIyMiIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNi0wOS0wOVQxNDo1MzozMS0wMzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQXVkaXRpb24gMTMuMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8eG1wRE06VHJhY2tzPgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaQogICAgICB4bXBETTp0cmFja05hbWU9IkN1ZVBvaW50IE1hcmtlcnMiCiAgICAgIHhtcERNOnRyYWNrVHlwZT0iQ3VlIgogICAgICB4bXBETTpmcmFtZVJhdGU9ImY0ODAwMCIvPgogICAgIDxyZGY6bGkKICAgICAgeG1wRE06dHJhY2tOYW1lPSJDRCBUcmFjayBNYXJrZXJzIgogICAgICB4bXBETTp0cmFja1R5cGU9IlRyYWNrIgogICAgICB4bXBETTpmcmFtZVJhdGU9ImY0ODAwMCIvPgogICAgIDxyZGY6bGkKICAgICAgeG1wRE06dHJhY2tOYW1lPSJTdWJjbGlwIE1hcmtlcnMiCiAgICAgIHhtcERNOnRyYWNrVHlwZT0iSW5PdXQiCiAgICAgIHhtcERNOmZyYW1lUmF0ZT0iZjQ4MDAwIi8+CiAgICA8L3JkZjpCYWc+CiAgIDwveG1wRE06VHJhY2tzPgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAg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",roblox_drink:"SUQzBAAAAAACQ1RQRTEAAAALAAADbWlreV9saWU3AFRJVDIAAAAeAAADUm9ibG94IERyaW5raW5nIFNvdW5kIEVmZmVjdABURFJDAAAABgAAAzIwMjAAVFhYWAAAACUAAANkZXNjcmlwdGlvbgB0aGlzIGlzIG5vdCBjb3B5cmlnaHRlZABUWFhYAAAAIgAAA3N5bm9wc2lzAHRoaXMgaXMgbm90IGNvcHlyaWdodGVkAFRYWFgAAAAxAAADcHVybABodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9aEVIc01YUHpOd0EAVFhYWAAAADQAAANjb21tZW50AGh0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1oRUhzTVhQek53QQBUU1NFAAAADgAAA0xhdmY2MS43LjEwMAAAAAAAAAAAAAAA//OEwAAAAAAAAAAAAEluZm8AAAAPAAAAcAAANUAACAoMDhETFRccHiAjJScpLDAyNTc5Oz5AREdJS01QUlRWW11gYmRmaWtvcnR2eHt9f4SGiIqNj5GTlpqcn6GjpaiqrrGztbe6vL7DxcfJzM7Q0tXZ297g4uTn6e3w8vT2+fv9AAAAAExhdmM2MS4xOQAAAAAAAAAAAAAAACQDMAAAAAAAADVAXQrrbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//NUxAAP0EowNjJSIEGpFEyQYfEFkQlBsCxQq2oq05sHA2cmH5k0Fm/T5typkLf80LNixkIhwIjkwOz/U2k1///+JjJr9RMd/S/m+hUFxoS0CSzHQ9jUqf5Bw1aDT5pqOErIj9/sRxHoGyROmHFxHeBE3c33MADO//NUxCsZ+b6NHnjEsEJ3UDMDF/kQAdGsv//sd6HfIxwMWUOBh8giXP6jnWUOBnyinF4g9Yf0SaIq+zzgfcXe+t8vLgkA4neER9TguSNS1qWSCsPCHAwnXUBwVbnDa5qMECZXw4momJWej2pYuIyLvNGbn3V+HBhl//NUxC4egea1v09AAv/NaBwFQbg0rSnPMERUPCQNAKCoLz7jiOUQfE0lXSPLu9j5lmaZr78uQk/6J03CI6XScBRTQsIty3XIGVUrKidHca3OZMNdW1jHYosCeg+l4HwSajnKA8ogFqAJQD4EENFXnQW48oF9WQ++//NUxB8e8d6Uw49gAIT3vwmmFY+rYSzNtYIYPDi7ylQrpxwav7M9/c1M92Wn45gcveCj9164+bu58gBj+fCO+jHRll+iAsO4/e3yOYl0bH34wZnb7B5U5//9hhlfclpGpn77fct6f//+Ro8VnXGGI6Yzm8VwBQzR//NUxA4a0laoAY94AL3TqF41lx+2CkX2tndZITVKzmnFi734t/Jzrfs7//1+J9UvE+6M7+bNGI6jqhZcXtv95pieDtnY47fW9/atfrNNUzSbcBD7HGN9Cw51qijx//////fGP///9xXN/urgc8gIkyFehxTOQKWC//NUxA0a2e6wyY94AFzPbKPBUmQldJyArT+SM148OVyjIaunWd1+tUjwmKJGziTOt4mv9w3Fu+l1Wn/tq/+oCGwFMysq6P3WL2hwvNj+FvSgQ6G4AziRE2lfWtnEnzX0vPjWfvqJXbPcu711pWbckaRQ48n938WQ//NUxAwZWNblv8x4AqcSwOcdmb7Bg42TGTs/Lg6GCGfsC+q5VWQQR0N4BwAkBNTXbBJxkITAfuEfv0RK0TvaU/Xm5+NB8E4RH1ih4PIHHxhca////7N4hDsTvl3E////htYXBsWAisAGBeRbbg4Kk00OCEKjh4yQ//NUxBEcE9LRl0woA5IoUwq41Fo7sniZdGhqlYzJRBAMFCDzZw+cTdBTkFM52SvVXOc49SsXrezbTvWHzndCEIRz2ZtIs9i//+r6ZP6E/+vft91+VHO+SrWPT/f53REvqZjRZmtRysIujIqFKm1f/2ZcAAMA6mvO//NUxAsawkrZk4xIAFgPMoUpWjA+YdP1kgbYeVJFLId7lewgRyRPTarqoZ6KEB4zkOmqtcIxXX7ZGbpEAwhAyGLq8/5IgY9w0K4CtNES93cevmY22gFBhH0BOyhqzoWDTTU/////+3/////ya3FsIEACjY6i8RxO//NUxAsW6d7Nb88wAqdCzfP8thCGRDs4V6ciuEs8BjtCrhdoF2r3OhCBY5Dcf+UvFqlj8KIuZHWU138MCXXSV2Tu+8oumUQ05vd6qTHeUUjjicLTRRlq0uw4WI/w7YCAIDABRcoc8mGdDEViKRHkLxc2iKKcwIED//NUxBoW+dbKBsJMTjqdn77JwtiqiDY9BAKnhgaT/k52rD8a/7vmDNj6xTGDELWQHkCCFExcmaQi287lHECBCIugIEAAznkzz5MDhRP4KuFWAgBwBAhR9VCkumDUQqhcotUJTnmkEol/d/iyYWQCAAQMIIYYe/bc//NUxCkWysLljkmK3njO5/ey/4bH/2qnKjGIGGE1kyZ56aRMwwxSjOZLu9x48xbIREkM+v//////+HG+MAACVQ+BT5tlqVcy6Jq/OlmrK4Xe1rXPw01GaNp7AJEJ02ewHCSBvaZIoyj7707O9N/WnaSdR8GnbiNE//NUxDgXAsbgBnmU3ppZ4xGY2YdRERoQkHNQ7qbocmqr/////6Kab0OFu1KAwBGCldBuRgvwAuQqSeqB4lJg+gbEEoplWwkiUYwgPxULRSRtqZ9k4MlNoQ80i5e+chnLtouPm3+1sgiH2M2M+nWhnYtuVF3uJ8ya//NUxEcW0fbdjkpMFkV8unMPr+zfNMaZ3qR//IhLTwqAlaAAYQATdQNVsZGs4H0MK6LL3SplLFhL0lWMq3szlFHK4JwUC5okQoDorLJt4racapSaEhYTyO7vh4oclPNg9CvVmquQ6oVgSSFUCPkwUOokBGPChUwT//NUxFYXcd7OQHsSBLUkneoMfK494HwBAA4AIODhZdxCjBxBNEw9lOJpzoNeRz+nhM5csUvDwmiWEngnM/GX9NZqPvG/kqC1EykV0fvSMLJEH0h//n9GkV5s+i0E99mXmowZCUts/////8hEH0qRaAAAfjEsfTjO//NUxGMWKdbRjkhMwlSnd2npv4y9prYjfYgoOG+uW5GkVCJPnSezSTj0XKOKxDOtT3VXsr+d6EIhEU7u7//////////Uf+hynA5XOKOwoIAICChKkIrGEEOdw/qeLvJ1hsBBG1snAQJHECESSSLp8V76T2YyRPRb//NUxHUXG47VpjAKwmVSRQQNFDOLHEZKREaJCoJkIRgoQIdVcK3XlbQ1nCLuoSQIkiZZRxpSwwnEJ/R////dKC0NzxWpP0MCoCIHYm/7gfXolRAAURVKK8JlV0pfStlsCrKFnIamWTYEQGQ2AddZJxeKZTpyw2J7//NUxIMWod7c7hpHYpeWcQq56Qv9UaFa35kzlGHKLmpdtpt3uoo2BCgzYIhK0Da////9A9gxirP///9YYeV3QghtjNl4MJpz1lhApsFTSKSjEEACGSMSxXkgRh4ktInq54u/Jz3rvcvt/ybnJf+5QtEjSfCyIT3d//NUxJMV8d7hpnpGVs3elNJIRPb/4JpUNA0dV////lWIAqHqkBEfcbS8FVMeOqz//kH7rAWsfhsU1jWT5mD5B1hCAAIC7BxHSnqo6d98T7kwS0uMWXbV+LVPM4zR1msL1P62Tlennt/n6ZVIXzpKHxYEMhlxKZOR//NUxKYX8dbhjkhHYrC+BllsdlORTFdQkHX/u7PMHWeHXEXjRBv////gMoUF4q6QKbjsCkDDvEigGAALQQUyjmQqMpSxOarJKac9pHBl3VXQ4Dha1mst6DJKtyaRJqOb1q3eUGr8b3yXvtIpN1Bo2okh5dYhXIza//NUxLEcOfLhjnsKvsIFpao3bailwiefbcucVQvsZUUOB8KDoMGDwOIDTCouxf////////f9F7OW3d8tFdSuyuUXFC2UTEGqdgbpraGwXZ17VUAEbIMP4t76SDEep4Go/eomxp6i8LZ51E4CZCUhTJ61vvbS8gpX//NUxKsek3rFhnpK3gw//S4y7Qy2OLJODSLyfon/kDeDhkLOhofO/////y8ztxQD2AqLjXiW4/VxFO5ZFI2Cx/CTJK9GgLYqzkZGNnbkMVDfDrcnZ72MLyGQPJw1QYORDEn4htKrmf+ZdIq/4qXhKLPHC48HA8ks//NUxJsWmbbaLnmGlnkHoiO6mKZTsiUNcthoPhh3////qU9aHN1b39yqfQrEkul5FQ+BM47L/BN1GQFhWswFLjRBaCntmWo7MP5kJVEIrrFQhgQ2uqaHVePZmtf9uePiVw6OxazaSLGrNcRWULQx0CmkniQcB81u//NUxKsXmbbeNnmQrv//53qEsiZCTz3Pf/slqsDYADAEfLZntanIcMxsIk8i9BWn2onrW3xYr7EsCkOZckWNClg0hFQpx9xr//1v//91/78/l110DQYIzQIKmgwhPl0TC6TjqShyK6Cd5b5bkZeMqQL6gnuXMVsM//NUxLcWkZLaNnmQdr8i9dVxwBAN0EMFQBiQAAAMvFDTABMoseUQ9MORP8ZBVCxoFDqYq2suaA+jES9M4+zicTSB+sSTUKqhIlqcTLHfAF2AIC8iTj+CTj/ah8EOKJNsY/z4DlkVDIeSuZ36dVKGQlfOLIhaRnS6//NUxMcXyfLJjU9IABxODiXBr4b1chDLtWIadiJUJ4MW+canOVKt0WLFV1tWVDGj1bGTr9FtjCqy6i3neXck6gBvuStZa////nUuIbun///QRNGmPlV3hER1V4Q0NEOFBCN/gAKA3ZItMGmFyJ6sqaow+BGGFqQu//NUxNIr0laqV5l4ACe26qBujNoKY4dxkUUIYXF52gZ++bZqdhEDRiAdUNCrY3TOZgd2netVYLkc/nLKl904fhDhtv/0ta1BWv3rtMuxUkUoX3gdMRyWIrCw1Pw1zvKPG9/FSNpK3/h+c5j2CXJq8/f6+zZ/ev////NUxI0r2n7zF5jAA2uzlykw/efP/8rsux3///f+bvc///////lu8BxkADH//PKKhkQSVCiUSiOSErcHGATeEdTCUf8FF5AXbf6bWdin3KlkqYw/KiDk3OPENhU7g6MQn5piGLheRRdVMpE6YQKglgdZpk7ZWRdq//NUxEgn8kcG95l4AtiyTxIcZZV8c0EMJZ9214UsesdsZFexx1A8ZH+ZnvtBtHePHO2rqPZ0IYqDrT7OaDc3QawYW8+1YVNUifRcFRbX///6Texq4///8oXd/+5C4liF3/NMPmqACBH4B9Yi2IhFIMiyhrvehhMq//NUxBMbau7VZ8k4AkzMZLekSysRj48IzkiJA0iSJnIryhIk5ppg1U08akTSxg4rGHDZkCxBFEUxhGQRhJIjAGiwbKRZFaNbD2Om9M/Z30IzD1VV/////////0OOOHjf6gKKxGEfvK1RaQABRFf00hDARFiVkSgg//NUxBAaWerJhkpM3tH0RMMsbxydLCIlqcYqJPHCNCVxbBlubaiWNokc4UY0owqw5AQNNqm5EByC7iMFz7iU6RpEbIkRkzZr9JTW5BSZ9PU/EfRhhbgkHlGpz2T04DD////////iysEZAAFB0RJ86U5M1WfgMc4x//NUxBEZsd7NhnpG3vCghv57t6xBc3ZBC55c67LaNYgREDKObDOXAlZihx6/qeQyco0iWaP0cIicDZIJg2TwUkG9Gw+sY2U98a2P84JnyMcFfSnWICglOg43/////9bKujxW0F3AjjB2gZRpyunqtaeIif6JykGa//NUxBUWierVbmGEvi0jH5/ezIsD2CcUDlyhlbOk8Ih9y7ZqeW8GbrlFMBikrdXSSDGCDI46AAhm5mmSqW+/rdgMEQLqvX////8QCc+7////DFWEAqUUOMAYxLloIyydEqAtNhSwfFsxLrzZ7jX7XDRwsLFiocAL//NUxCUX4ebaD0xAAg8OguHJpQt/PjNYhiUadYe2ldms1ZHQ3qc5RaoHTEjjqbXb14a//mr//kkVUisN/////5EV////5YGVn7tl92dk1tqj1m9AAAoUSVGkdYKMticORmHUP1DWlC5wDpVaXatXZpuJGz4S7kuE//NUxDAj+ksWX495AmR9jijy+RRsMfCxFeuUp/7c25xTJ6bYCQqdqRBYMuU9dwpToY29OItwgUvGh5o6g1rCiK9XoWdqiioaqTLgueWSH3DUBqcJc7vcY8XV1BNGmcMMsf////5eXn////RFUttq9rttptLoE5XQ//NUxAsame72X4xIAAAACwP8PZfIhbTILYoCZHUuVEllDGLCOxDATbFjZwJG0UwMBglj3S6wYmfUEZcyPzpKJQmkouToEREQltnvZFMurJXZX4Lq6ibaJpNKpiWNatFaSMgS3fiJsmgvv/SftVu2bDWcykWAQJSB//NUxAsawc7+X49gAMAADqSgf0U7HigTitynGQ/GVpUExKiKCNScwJDxsG5XAZdaOqNWcIjOK7FFnLubaP3168/fMKL31+zf4oaXusWRTSbxTdppru6x/M7f7n8Xpu+Zl9a/1ZmZXqzBZ//1kUEQMrpvPh+MgE0X//NUxAsakcbgo494ANVaHK0GijWxnViD1t8X5TNcz1igm6dJk3ePsuKlbnqpcUNfPpINKanZqxWzTFGQ54bwk3cvJtqrqWWFGQk4TRjvsN6+6hRYckZh1NV/WKfqtcWbd/+83aF7f/xVHf/6VVICwo21CSlhGbcA//NUxAsauermV49IAAARhZlSzK2OHp2pUetlMedEvGVSuGsOFUMiJFhAHz5wCwDi4IObCqJvU6OEDDSPAGVgRPjVPaKZlugm2l0Evrda1lIe03CSyOKcrnOe7q+f+4Qivn/RUxkr3wdnz/wbJpG4rJLXI3FkWnKA//NUxAsagksKV4w4AwAGxy6X5To0RGPtVgSBqhuH6kUiKXEIOQgEgKEDEG4lC0dIDUmD4TjimGkRst3Puo0HkOZnB57nJW5QFgRjwBwLRcMxcRZzZirVmEQRzVTucs6jm5/TkS//lCVv9RuRv//InAuh1ILBdAMD//NUxAwaKkrgy4xIAGOgzQHV7qhfX+5xknQJ05CMEczSRKGLgso3/JdG22kgWVZtpmUYsIpWvuIFpR/6iJm2FKUJCdzXHoH0tm6aeeEG8hYgHAohDZgTtt8a5Mu1JXfX////8nf////p5WVoOFAKAALitaTfQgaE//NUxA4aqhrNbYxIAJoejwRBihNJG1jZ1jlcQaXuWoNijlhHE87U6LoL5HaFfrCotK66ZGK0xRWL0imKUKB8QgWZooUKLFLWZs6iub1iGp7d2kLIiGqbfFJYqBTRMTsNn263////45/giq0KhwgQMAPSSXpMj0KW//NUxA4bGerdhYx4ABSFERWM41pZ2DEV+d6t/O0GW71aeb9wwsM7M6c/n+DTf/YmGEpl2wW+MXgf/G4TdKcjYry4H5Td5sNWPje8+hBy2Igt43CyKtTGVus8JXYZou70pbWcSbVu3+z/5nL1gADzIJ9x3XyYFZEK//NUxAwXGdq6QcxgAShmNx96V3XQnHJnZpSZnIKPsON3o7udlOnbtOX39fmG8t2p+U2ar17OJGL0ghxfqUxWL12FOo4yhKB7H0Ok6dsGpi08SaGWmyc9iolJtUrzSsSbbwBAAISf1mI/il84fQKMss0JvZsJXAUb//NUxBoW+d6+QmGTKNJnP4rFq3nK2vNhFo5RprOjQln3kY/oCi7+RGkaKBKTSIYkxdOBZPWD6pYjUnEQLR4WYA0B4Miqbo3s9gRJnlnIIWynJGlhD4CGFa9wyL0sur9WntYVbK8+/e/z1lZMtPMQrsQ3na1QKIV3//NUxCkXcw7GTmDFNlEVTFwUzuJDH/WFiZz1I7qUOdseq58yjXO5tFQ1FJllAxFQGT///////5z///spw4t//L5R7/0SUgrfgmBs42ZZNlSh0pGewziz7WL6syW/90jO525u2W31bWWtNoXh8nfytGGJhJ6T4tEE//NUxDYXQ4LFtlhLd7zWRhWUC0E//////kv6EFQpv//RwKoYFD//o5IwLCB3GKDvjA+NDy05tGlyq/wCOwfH9araOyhyRSrwUxb+P59vVefr5//87U8SdmVyzAL/EITCehoA0/yuoyJXNHCywcyf////9TxHDwem//NUxEQXk4bGVjBPckwcNB+cUF5H/0Mb5wPnKEy3/8bfyhYefqYNlUW5K2nICljEoZEBKL0b1G9yTRkiNdhVgT5HO3LVsjFhFpBKcHHZuiyoWhjeu/7GWWzupJjt9jHlaQpBY5SoKoalrGN/////1JVlJRnIrNQm//NUxFAXkt6uVnpKHkVFOfGCbHJP8u//u/+J1W5LZJL8jt1M7X5pKehpIpN4Bpegw8vzDMdGOncd/7m5hitu0dQjzuyq+j6upiIm57nKUu//0W/PsRFOcjfkP0Z/r///1RpfMvv/5fm1PN/kkR/6KfOSfOGBjMf5//NUxFwXi4a+VsGEXv8TKgpL3NJIA3wIUUMdicGQ2SVrMkElvcEhE/d0XnaFzksZ1bT61Sb9NDa6Lq9df9UmZRGorIARhgeFQ86DVmMX///q6Eo3+T8j+tTt/76scZ/q7SzvyodUca7slWesr0FKEblkstbSlkpb//NUxGgXo56iVkjK5MAoEmV3NMNVkvTO14QWR4T6stV1IKuzanOMwCGjSPQsnJ7nyMK//8/cyEVSlBh+miv///3lksja8yN1VvW1f/39/Xp77en6M2yKypx9UehG+jKLVQA64r9XYHI4LbWdzw2xOyq5rT7/L7G5//NUxHQXC+q6XkhLEqFLEnuyQbejD1QYXwiyjGEMyDzI9V+caNaX6Q1WdXxSmq9//svPc/ELrVz85MMzTX9Drscp/pcPE/3GbvX+21PouOvCdd60qikSG42XJI61ISB/UByu9UEgZAVOvq1DBdgBYLax2XtxlgOk//NUxIIXid6SX08YAGtD+NcigNOaxtnHBodMd17dHVuy1124TLcnCzrduRi1alTwPz9J2ClF3/bshAhvAz2Q44FKAgS2+6TSxZqgMJmK+cvpe/8pYGxe19uhltTX7/X/Vznt2qfv7p5iHJp+OWP1iypmbOmwwdDt//NUxI4rylaeXZjAAt5+//Pmrv/Xi/Oc3/P/v40GV3xICuBCTov5I5vRLFW7ydVgGNEhpz+C//CLNF77Nz7EJW/vrb9fLE3K5rMXVgokU8rMz0Yxg2baITGa/xzjAR7Z+cPbBA6FXdNlnF0BF4PJD7//YJ1FHM9Z//NUxEkXsTKuf88YAIdSBawerfiYiZR/1BoT7iOpRxQtPGEA4utzIy4hOk20sSbft+mSejlrwLPceLRekkjvWZ7LvMwivlaoyzCFeZO68W+AkFXp3VCMozGRLb29S/3QYhDxJgwwxRAwkITYJuCMBeiKSoc4nG6n//NUxFUf496BtHjbEW//7UnWk7tap0a1em60/b3Z7XRV0q21Lb/3WqrV9S6u//RUqpTI3daJkMUAoGqHMnVqNNfdSxlsWxidr79SAbNLTUlaJYg6BAODqd3i+NZIyxYaMGVA8WO+YQPpvR7LaKV7ox0qlPm6hqn9//NUxEAjCo5tiMoa3O2pUSn9mL5ORGgNwdyItiRHgLMqBCxJQngwxYUiXJxmUm//6Sa1La9qnpp39lH5YDPQWpGOMLcCGhptAjKiIDRgtlj8i282XQQwqsYqBDkIBIiVHIo0NTLpRKaVZ7je2qxr11BCGHU4UYjm//NUxB4cOdpw8HiY3CHDllYUAuKClYheadlmuDY5lfCPzhUCuMAH/T3Hm26UBWSB2IAzLIhgCDkCJocbU6P3BES/pAKXl9Ym11UlHRlMDNSWqouWjTM5ETidR/FqnRQfbe3Voh/LwtrhFJtFziU0UGm2haDCiBmc//NUxBgYCaaifnpGHGCel59Au5ZoiZsPCgnXDXdoXCeXbNFfPL+F3OGGb1JDX/zqlf56DAwiskE6n//T5Yyldgq0zWklpRTt1ys4itGdFJLXU2kupKojRVjX267BW3DiQhVEaQN7M5h1LDsG8yZ5rU9blhWOZRKM//NUxCIXCbKi/nmOHMRpbZCqmvNH0FaCQermPYxu+bP//pOTRDBMAYcw1HjwPiek5//tW/sKXIWLe+1PyYA2H0ort8gj0Q9VAccmjldoMbYj7hAa8R1BR7NPvG60tD+IejIhBBN3PRzGsEMYZ9g56qzvUsLAkP7u//NUxDAXucKSXniS3IIZNlQ47EYzf//vKmREMvUjrJpkE3O/++ZIQXnsJgZ6jabNe2/rfuY1DK/xc1/YCkrstkkgUjge/sd4yS81Bi1ujbK0FKMpJLdIxp+oEuS3ByU74j43t3TW/7SfAlIQ6bRw6CIA1We/slv///NUxDwXGdauXmGEnvOkW1nMpuN//8IHH4uxLUGHhKItwx4sK/7v1fD4oIU9lQRIh3d4jTcPWUNI7szyuLxkTSstKTJ8e2xmBlJDifL2dVbaJ/a85s0X3avk7/d0zOdjiEWB4Ld/6QhTfb/N///Wi6GAFCBkhM8g//NUxEoXIdanHmBHhI//+/oQz6OU7QAN1//+nnyamOWW22FdmqmA2vFpOCOApKIF8vzLSi6QWg1bu1V5Wupqzko5yTF15vx4kSoSvnG1T/3/+vQqaFhowVDzVJDhpxdSKP//9SZzklca4UnZGsV/UFt2VasViR8c//NUxFgWodamfnmOHGg49WpLNdbXaJZILPezF5fLwi1usvcYgLHgL5iEjLey6DI7KSUEphVEbIpTmbhi3FroZQMtt6kZZL/O5kN9pnOAmsXwhf/V/iZ0XKqlJG362nKmxpsILsn5fxfWAjZh5BUX+aHl4r0H1kAE//NUxGgXUdq2XsGEHkcmoohHRMDkUJzHmp2UUYhaB1BGVMTVgRRQRNjCfJ11aU78+chGd0LX2XbpdvsIO4QolUAJMg4EYZ/50vmiHLnwA46u0yU16tLi1+3q9XfDTOeoNCVFiIiHf24TWUkhwWZGBsjxoMXU9n7b//NUxHUXeeqefkmEVKgPaTTY8KbcVRqzkEXVjmlaiKUVPqczJECMZCOhN3KA46y/L2v//zszlQ9BQplcOD7P9PNhDtXa4tZy3vWO3/zC97maaJnlwvVxzW62STXZwfEATZuEgo7JC+70Bgp3C/FHfgOXSqTQFMYz//NUxIIX2eKjH08oAFnb+139VN3Nawx7+pm1Zta5++cw3Uxzu0sqr61TJ8SyrXmouJcQcW5jpRVp1pwbcZr/P/LwSF5qlTO9H2BRfDX///zkQfSESvv4x1DNS9nZadPuN4W26hxQrQLNSQMYL17v//////wPlSSi//NUxI0qsmaWX5jAAPVsc99/Odgr//VNa9h/03HPFCiZqgVJAKpHq/6UpQU5YgYxtOnnJoc41X1LuY2MYpap6O/ewqXJVjQaKJhQOrRQSUigmmizIIH2s1JBbJqZZqOSMyN8XIiVkzBImCPG0OceeeRRWa//etFF//NUxE0j8mZtidiAAJzITcTQgYWITYF6R1iuBdUFzQNigNgyMRYQsMkRIxNG////rTd6ZssMRQIZBSwCs/x3RPC4sboqLAbL28MkceeaJrknae4CggFAQ5IqFWqNkdPmCBAzSO9rtwxDl2mQ0LxPObHd3LFmrQPd//NUxCgeWdp1mnme3P6nEPB/8v/TqEz76HMSTyOVsesumz///vnr/9gUjahiHJZpRxJWokzEsmS7irgMf8oKwuSDVmJ3J+s7fOKMGrUWQ5XIkECgCUcUULkgU4NIfeoEmLut3J0o3kykVYuHjfFvqNC1lsvTURY4//NUxBkeCkZ+VHmanIXbWjhEV2zPvQ15gzEszPk23/aPd0YTIJu1KdrOJakE2Xb//qGEEsANA+BlEHFuahfhGQT4jGg40jAfzj///WijzkWLEsCNqJ/xC5EDHx6Dz8qTuka2n3sHBM+iULMKVQQ3WNd99YBW4IgZ//NUxAsZ+d6S/kjOvKJTCxhWDFjjE3CknqukCjVxYIUlm7SwXoNhw4dQSOwAB9OHXgJxJZLB47jgX7RurOf//GgqDRQTgEBEODQmLpg8XYe//7eSAZEuDLv8EFPyN2pxTaSneoTnzCkmFk5JrbZbIHI4G7fKR5oD//NUxA4WcZ6yXnmEHnV4SuDwQe0JaVjzg3EECXOZKBGEqrtPMr0EBGO7Qgo1kOzycxrnr8i/9/IIBUIoPNoR/9kW5IoDdDfFrWPuTdTr9b/7h5tI08JUWjIua222yyCyOBscxyqMXqIjdNGWYWSurTY4wBHo+Vq+//NUxB8XsiquXkmEnoZ15aXcrO9/5vb/IVnYCWU8su6DTLqtDJLetf07oLEPDMLVG9l///CipL9Q2hbj7dCjwrq6D1P6/0JC9qhHqjou222W22BySiK+g1AlcCCcVHPnupkToOBBOyUiwE3dBAOo7QVewocAYeZI//NUxCsXCaqyXkjO2v68K57nofCNV1en8/sxp4bKvExbb/9/1fXdKvVdKn8s59hncgoT5wvQ0kJ1DAsG6hLVUuuutttgskgVICwlLk8jBIdJkMakhKIwJnDLEFjBVJQmNQebKpkd18RdYZVAldaRcK/fR9tmp+X///NUxDkWmbq2XkjEvqTHDigYcgK3Z/0f6Jd28mm/dRtVJfS8sux750qIotWntUpW/XXb3aC22nW2B1V57qLDGLMM54oJakk0P/JTbmsut+7h4pGrt9f6/9kkC3v3vrc2ZKik+Xe7//13RgQI6TrZ74sZ//1kO7xP//NUxEkXwdbCXkmEvr3rK84oVDpSUPqyJ2TlCKrlrEldZeku3TW22SAySLSPU9aZWvL1sFwmTmUYiTLHJQDEJQqqukGNJHNnhKNmSdxJuY1eqT7m9VO2t7P2dv89OhcwfLhxcqIAiIrP//KdW2WL1s6THel1hX5Y//NUxFUX0bKyXmGOmpHz2xYM4uMQAXrqG81hmd/qwtZQWF+TtEElFfFbEc8nnNqNFqAGKmjEyK7gspqjkD7Aqn5taUOwq2Tq7nngl//+vOKiIcAUccsHFnjkO//qOSZz0QQmLR5oNpI8V/W/gHu0BjzQFc0LTXX3//NUxGAXAb6afkjK2GvYtcoVK6qa6JzbpJqGFtYDonjCI4MJSC7szvOl2Pk0pHDkafHYlxnFvWiqNsJv///8pT1QjMUtc2glcyIb/id4vBNAaDwUDBfV/UOf9iLE6Co9zpHfnnwbbTW+Bc1stutY8bYYzhNHhZ7y//NUxG8X8dqWXmBGQLrL4fbBowCXHXUSYrL3JWjKCzRWwwzGEWbunVAkrItWarp0//2rQ25jBUaqD2Yxq+dToTrVxxCJaHUsPhhy3K/o3Wsc8ltIJebeL/66nNkKBs+9932qtbgOc4NDTprssrMQH1l1jx9jA24m//NUxHoXoi6SXnjEfBwLgcHHYbTKBzhTfVAIRqdbOHiV5jrRwgMj0b3CjDwaPLqAhIDhwMBYs7LIICz7DAkIulsgs7Xb+eWz7P5RhD6LccgVew8QBSqrUIHMHp2xwNYXg6wQF1DOckWybMUphq2KRx5dUbkykiTn//NUxIYYgSaWXnpGEDbo6Nirwort9aNKb3v3NbMbu2Z2r9vj/9o///2JxKC0yRpwkxHKQrqeGAlvskCIATFxShppZlKHTrgoPedEmP0rhtTXVHdI18gSkWuYIAqEIZAD9FoqVrVBQBISTJk04lB5RLenNw5AMh/b//NUxI8cgd5xktMMABkaeXGSx90SudJoxe/IhJv5EUl97M5f+f6oT75owZ7ac3CiFI4xy++CSnuVm/Yb+7Lvudri2vvuTiDsKANU0AfK+d8lGz57Fdfmyo/uv4qau/e37gLF2oa6AzWKskbSAwkPmj4+MgJ6jssg//NUxIgcMf5tismGPcqvpZbd7FqyjTahY2hvN4LBCAUAL7cuGfVPNWCiikP+wrJbw8//Ndc0MoZoZW8bci/zIJ3mzuvmXnzh1fL84rHW6X/Dp+Z/lg4JE4RxtaHCrmkbyzip4RuaTOvYVvTVA0hWVXl/tr9ZQLnv//NUxIIdSuJpiNMGOJgjuwoeH3D5rUBnqr6luODsUgYHmYeWdihALV5wQX0O9g5/jnnXz/CpXsC4QFH2VihtIWReh4KGTAPG0hUwPZFRdWcAF032mGNXv3UHls332VijLqHOEpjkYHUBaZx2VNLYGYfsdXx4jtGM//NUxHcZoWKbHmBGYO9lN7T5MrCyT+uUT2XMaW8ZLkScA5Fh0fXRNDJVWZd1LW/WlM1C8xUXp6qZ7U5qUVWz/Wr/v072p+6N01a/38m/6+TTsdqNcz/6q8UgUCDPeA/21P6VCTlkkkcb/8EZ4CiMkHczkRX9EfQn//NUxHsZU4qCVHmEkU5xlO5DpJolexJ7wQl7kHmjZ0JgcWihIQLLiVjQA64RAYUfTKgF6lr2uBNKlZUltKljDorsAKAWYzbopU3w+8tgoRda6EpI6120eJvPqgAFa+lRIqgmHG0v25NiAw2HgMwPsHl3B/qFchAY//NUxIAYiLaiXEmGqm8kx2MOmtoSXx0QN4hyRGr3mXTXPkhLC1p+ZHlMvv9n4O3J0ugZPfNeIhouiTjBVhX9wS2dMVdpetX+8aJ2vgmHtSYAYrZQyEPL4TQ3kYEfNJ4r0AGocHIhhcyAR6ggnFcfGihCuLoZKw3D//NUxIgX8Zp2MsMGLCSaEKlohZ1ab5E/CvLlJi9m0+fNE3pYcYUVDdQ1AgQpbjlStEA65eao9rt1I5CN3OOQNtAb1yGKG7kCo+oeQJqkAGQTrfPBauxwwDwwFJY4CBqwuBI2GrL/u4oA/660aB3m8OlRsYc1BEQA//NUxJMZEUZ1knnGgCeezaWKJmmX5XO0ywXH15SZBAnCyRycWCmZKKLA4ZgQZasWcTY4w8nksrHHDUa3O73K0ey/3aKD/anoqcL21QqW3L/8bceqTVsbk2IAgUBiE0emafrEbGaFDyEMiq2soIkO5XevRqTSgXOu//NUxJkbCTZ5DMPGwO3QZVFSQHoyB9XCs83/D2k/xT2Mq7xc9mwgHDE97+E/91+/+EuZzEoeLLUZBYXMghFg3ybZenb/71/6N03/rQ/QcZQqojIREjUjaTd9So8BTsWu9wECgpuPBgIXipQCMgUHxQ0Edl7pQaAA//NUxJcbybqpt1pAAl8wfI//FXkcGOM4DQT8bVkG/f5FEyQMWZG94yKtngFxWn8M/DTPzd9z33PEulVpBpJPyrankmcYs+9+ZKZzj4VlJYn3/mHiXU39PK3QlX8Uj6fNx3FjUsrhKxUcNQbWhB4MMFmGVJuchBNj//NUxJIqOeKZHZp4AithZBMxDAMRCIhhhnR+wWTTejtKm8xTIBISUjkjbbUkbaSayWtoXqT6buIDH4rzAphgiF8BdREZIhPhWuWDyTy6KZD0uX0mqhUTo8aoxfc3AvgtCEP8LpGLt5AalTJSSBfLtOwuyzQ1JPXC//NUxFQrKm6tH5h4AnYLXb+dTtd3Gmt/LHBrT9gVqWp//uV9AbldLv+PCo/nrT+z28SJFzjFdZ3j+H8UiSapvGPJaW0X6tPmXWICCTmxZBJaXk3haTK2jz4U7mRAt/2MqU37eMAiYAEBv///+/zApmeQ2+1hugqE//NUxBIcSeKllZhIABroZZQmmGmIjO1DcTVzHgeEIqC4SewFhlsOasLAmVI0QGSVBH90t52c3KobpTPkE18z+oPh+iuKLP/lpf/rbLb/8IPXRVX+sII25edoyQkJBWiJBOz7reaf3dln//I11WlAISyKzY7Zaylb//NUxAsaUWbiX49gAm20BW0lS7mdpxBBFYaEQkROFphUhjJx+KoM19Lnz/TWAPyoeRH1e6F9txf7j0Vurv3ctWlJO3orZRrq7Z1urvb0rV8WzMvNZ0ix6Ua9CjwHKgITej2o/9bG/7/2J1qVv4AABAIVv+9eRn/A//NUxAwZ6Z7aX49IAAAIBMC1AfQhAyEIJ8W4MFdnUOJTjFL6yQhUWCQrCJuJPZohYeKlZSKSV6zDOE9R1DBCqi3ZoMXPpSz/MlL/OGR8k3/9n//zdH//qEB1ofMI3d4F4PoFijvKjXdKTgBQRTKd220dbNtFoANX//NUxA8bYlbeX4w4AsfGgrJZyCXnzS8Xgiz5dZLi0TD5EbnjgvEU3FpDGBYNnOQoaqEHQwVD5rS+pHfQx7G0HSLejfFAUIUN0Klh438x2PP7mMNGeb/9GPPfddgfl5hYOAVv/wvqBNIHK2jqjaSCacblttscADlg//NUxAwa4krSX484AgwA5pa1SCfeGop3rClmfcZl1QShwJB00oPoeJA1GYqKF0HR8wq3NvQ017qZNqa5l9T1WcFgnEkmdOR1fofb6EhSSEUcI/t/8bE0c3+ab/5FxUa48PBYs1osJmlv//6eigAwVPY6XbILh9NJ//NUxAsYCTqZv8wwAGYGzkaA4BMRVyVs5ZQ7Wt8suMWeWmCAMcn2YsGOQO3Ouv4h9/fPd72/7t/38WQbcRyNf1sPEFiU2AeS+VaLmsyw2bd1jbtYp8u3Dti2W+8rzehLrwzVApaOiAo4NlEO0uqsdjj+MqnoVVjN//NUxBUXaeKAVMGKkIGCatqCBM5e81DCgiiWeoYqvxskxDeWjdqs7UYjqHVHGvv7b2fsjtR0XzZGOCoYVa0YnU6s7lP9i3uIy1u5Q/dR+7Zmhq3dcTIIAAPOOOljAJzNVMqaKWsiyzSZAsigNHHnVWjoZlIUZy7e//NUxCIXKXqFvMGGXBUwKjIOZ0WD137TIKSDM0zu0ydbK7yfxvTMKKI8g1ZsqsMLPbnPmruR+TZT//JfdOxm+tSlb3qqEjtlIGykBEBXZceG61JDU5Kd4R2Gs5XRUs9XfirUoIpDN+UgBwlJ75Wf7LZv2sg7dAtb//NUxDAXmUZ81VgwAH+awMFoYkpr+/HgqU3zFBFaVT7vTprUKCzxU23z//7pNP/FjC/39t/7A7MtOt2qmaAAyFRRQtxqdM5EtvUVW/jaWmtdBCKWWWMAJNRZCgDGHW8ZD7+wC64OAlMX6KGlCjUo8obAlr8OV6ft//NUxDwXWUahcZnIAIp52ngbLLuONuxYvb+XWpbLf+/zv/zn6//5qdNyzW/R/XUORBG0TdLJRTXaRrvdheLq3LKq2jZg6jFa5ICMZ0IIJfr0KVc6Qbt+pCM36nOd+pv6uh5WBE0DDO3mNqv/er9fMjOp7FaCAQd1//NUxEkXSla2P8wQAjoqcqyfb67EabA7bbLgHqAe0uPKKh/AHJLjbEDsR2MsxM7I2D0Nkjro9kqJAzEUrylE9ZplovLK9/UspS6oGKFKUyf/t+iuDOKDpf3Kj9H+1fd6ZdP/t6Fv10b6o+iTt/eif/////0c0URq//NUxFYW2+alnmmEN4JMoJKBdQlKACpY7a24DAPGoAx2iknWowS4nuUebq37muS55lL/r1v9Pl7EwZfZB3nOzUuOaZ9vksYoCHcT7zbAwnPGzdDzS1raNGKWKwsWbXTQhnr/VY/7OpR9EM5D8tUoXE6RZQYERqBv//NUxGUX4TqOXnpMAJrEnIEpJ0xD3hy1pUkD7dZRiTfZJpzsZ0XM7PqkgI/tfPL7qqvP1QzBCzgoDgAKJpNC7bdjVh/RiUTtnFkDnusqTNWKzsms3ejTxlhfvTR3dy6FHhWloDCUEUWdZig7EUTCi0iOGqcEV9R2//NUxHAV4Tp48sGGOCzZTPB6droWRXCTerK9fSqSTnm73P4363izI5JykZNsSEwMySGKrCInWxlkU0Y8mx9iNSsjR1VVrpPMvJTwq/OiXWmBqmPVA5VwO8wD4QtNs8Yw52kps6W1d3/Ll+73Gv9TCi4i4sbaEbPQ//NUxIMXkbp08nmGLIAQSwoXe0fy/MVfH/9OOCjHvZHObCqA4jy/pGnXSXSRvUeRe5i29bXxfHwkg5jiF5J9QZ//RpUANmo+KgWRsVjxQAunGy2T/1eCUmIMQd3LUZQDym530EytiKOtKf/J3IQSxSkyPUSXOoWU//NUxI8WoTJwAVhAAEnGQs5IgwhFRXVY+1C+e4F9gHagEytJRnckCcVdZrjLCdF4Cty2m8p0lCs+z///8q5gVj3BovXvUtrVwrp4X////nmg1u8bKqDU/s5z5iq6LPV7m3/////9Lfcf7m3nWH+IrvNo31nX1LYP//NUxJ8r8t5yPZh4ABU7/iaDskoRP4kQC584ob+tqquzN7Mx9Vels2omgICJ2ZmjNQoCQYCICAjUBEjAVBVwNHvUDTyp0FZ7//xE8FR4Ku/UDXqeJVgr63A0WBo8JToKu/wVcDQwGg6JQ2Cp3rDRY8Ig7BVMQU1F//NUxFoVgNGsAcMYADMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",fortnite_shield:"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"},T0=Object.keys(md);function E0(i){let e=atob(i),t=e.length,n=new Uint8Array(t);for(let s=0;s<t;s++)n[s]=e.charCodeAt(s);return n.buffer}var wo=class{constructor(){this.ctx=null,this.on=!1,this.buffers={},this.decoding=!1,this.activeSources=[],this.lastChoice=null,this._bag=[]}unlock(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume(),this._ensureBuffers()}_ensureBuffers(){if(!(!this.ctx||this.decoding)){this.decoding=!0;for(let[e,t]of Object.entries(md))try{this.ctx.decodeAudioData(E0(t),n=>{this.buffers[e]=n},()=>{})}catch{}}}toggle(){return this.on=!this.on,this.on?this.unlock():this.stopActive(),this.on}stopActive(){for(let e of this.activeSources)try{e.stop()}catch{}this.activeSources.length=0}_nextRandomKey(){if(this._bag.length===0){this._bag=[...T0];for(let e=this._bag.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[this._bag[e],this._bag[t]]=[this._bag[t],this._bag[e]]}this.lastChoice&&this._bag[this._bag.length-1]===this.lastChoice&&([this._bag[0],this._bag[this._bag.length-1]]=[this._bag[this._bag.length-1],this._bag[0]])}return this._bag.pop()}playDrinkClip(e=1.45,t=null){if(!this.on||(this.unlock(),!this.ctx))return null;let n=t||this._nextRandomKey();this.lastChoice=n;let s=this.buffers[n];return s?(this._startBuffer(s,n,e),n):(setTimeout(()=>{this.on&&this.buffers[n]&&this._startBuffer(this.buffers[n],n,e)},60),n)}_startBuffer(e,t,n){this.stopActive();let s=this.ctx,r=s.currentTime+.01,a=e.duration,o=!1;t==="roblox_nom"?(a=Math.max(e.duration,Math.min(n+.15,e.duration*2)),o=a>e.duration+.08):t==="minecraft_drink"?(a=Math.max(.95,Math.min(n+.22,e.duration*1.4)),o=a>e.duration+.08):a=e.duration;let c=s.createBufferSource();c.buffer=e,c.loop=o,o&&(c.loopStart=.02,c.loopEnd=Math.max(.2,e.duration-.03));let l=s.createGain(),h=.55;l.gain.setValueAtTime(.001,r),l.gain.linearRampToValueAtTime(h,r+.025),l.gain.setValueAtTime(h,r+Math.max(.08,a-.1)),l.gain.exponentialRampToValueAtTime(8e-4,r+a),c.connect(l).connect(s.destination),c.start(r),c.stop(r+a+.02),this.activeSources.push(c),c.onended=()=>{let u=this.activeSources.indexOf(c);u>=0&&this.activeSources.splice(u,1)}}pop(e=.8){if(!this.on||!this.ctx)return;let t=this.ctx,n=t.currentTime,s=t.createOscillator(),r=t.createGain();s.type="triangle",s.frequency.setValueAtTime(140,n),s.frequency.exponentialRampToValueAtTime(310,n+.055),s.frequency.exponentialRampToValueAtTime(180,n+.11),r.gain.setValueAtTime(1e-4,n),r.gain.linearRampToValueAtTime(.16*e,n+.01),r.gain.exponentialRampToValueAtTime(1e-4,n+.12),s.connect(r).connect(t.destination),s.start(n),s.stop(n+.13)}sipStart(e){if(!this.on)return;this.unlock();let t=Math.max(.75,e.release-.05);this.playDrinkClip(t)}event(e,t){this.on&&e.name==="pop"&&this.pop(t.kind==="empty"?.45:.7)}};var on={about:[{tag:"\u{1F438} ABOUT ME",step:"1 / 7",title:"Hey! I'm Matthew Ngoy \u{1F44B}",body:"I'm a CS (**Cybersecurity**) senior at **Kean University ('27)** building secure AI systems, red-teaming **LLM verifiers**, and shipping interactive tools.",footer:"Click bubble for next \xB7 or ask me anything below \u25BE",dotIndex:0,dotCount:7},{tag:"\u{1F399}\uFE0F NEW \xB7 WKNJ 90.3 FM",step:"2 / 7",title:"On-Air Panelist \xB7 Kean C.Y.B.E.R. Talk Show",body:"Just went live on **WKNJ 90.3 FM** (**Nov. 2, 2026**) with **Paris, Sherwin & Farbah** \u2014 breaking down **fake toll texts (7726)**, **public Wi-Fi & HTTPS myths**, **AI security**, and **password hygiene**!",footer:"Ask me about the Cyber Talk Show in the >_ bar! \u25BE",dotIndex:1,dotCount:7},{tag:"\u{1F52C} AI SECURITY RESEARCH",step:"3 / 7",title:"Verifiable LLM Inference & HadAgent",body:"With **Dr. Boyang Li**, I test whether proof-of-inference protocols actually prove a model ran \u2014 uncovering a **70/78 score-validation gap** in a local **HadAgent** prototype.",footer:"Click the Research tab to explore my papers \u25BE",dotIndex:2,dotCount:7},{tag:"\u{1F6E1}\uFE0F CYBERSECURITY & INFRA",step:"4 / 7",title:"Kean Center for Cybersecurity",body:"Advised by **Stanley Mierzwa**, I investigate nonprofit cyber incidents via **OSINT**, design solar & rack energy monitoring for **Mobile ACDC**, and built an **ESP8266 IoT** lab.",footer:"Click the Security tab for full details \u25BE",dotIndex:3,dotCount:7},{tag:"\u{1F6A9} SECURITY ENGINEERING",step:"5 / 7",title:"KEAN CTF 2027 & LLM Red-Team Harness",body:"I co-develop Docker-isolated **KEAN CTF** challenges hardened against blind AI solvers, and built an open-source **Python + Ollama** red-team harness for prompt-injection audits.",footer:"Click the Projects tab to inspect the stack \u25BE",dotIndex:4,dotCount:7},{tag:"\u{1F30D} GLOBAL FELLOWSHIPS",step:"6 / 7",title:"Cornell Tech & IFWY Seoul Delegate",body:"I spearheaded **SelectSolar** to repurpose solar panels for schools & nonprofits \u2014 earning a **Cornell Tech** fellowship and representing North America in **Seoul, South Korea**.",footer:"Click Timeline to trace my full journey \u25BE",dotIndex:5,dotCount:7},{tag:"\u{1F393} LEADERSHIP & MENTORING",step:"7 / 7",title:"WiCyS Secretary & Code Samurai",body:"I serve as Secretary of **Kean WiCyS** (co-organizing **PHD4FREE!**) and mentor undergrads 1-on-1 in **Python, SQL & data structures** as a paid **Code Samurai**.",footer:"Type a question in the >_ prompt bar below! \u25BE",dotIndex:6,dotCount:7}],tabs:{timeline:[{tag:"\u{1F5D3}\uFE0F TIMELINE CONNECTED",step:"TAB \xB7 1 / 2",title:"Latest: WKNJ 90.3 FM C.Y.B.E.R. Talk Show!",body:"From my **Nov. 2, 2026** radio broadcast on **WKNJ 90.3 FM** and **HadAgent** red-teaming back to **IFWY Seoul** & **GMiS '25**, this timeline connects **12 milestones** across AI & cyber.",footer:"Click bubble to see more \xB7 browsing Timeline \u25BE",dotIndex:0,dotCount:2},{tag:"\u{1F5D3}\uFE0F TIMELINE HIGHLIGHTS",step:"TAB \xB7 2 / 2",title:"Research, Infrastructure & Global Impact",body:"Teaching **60 STEaM Camp students**, studying in **Wenzhou & Beijing**, pitching **SelectSolar** in **Seoul**, and auditing **LLM verifiers** \u2014 every step builds toward trustworthy AI.",footer:"Click bubble to cycle \xB7 or ask me a question \u25BE",dotIndex:1,dotCount:2}],projects:[{tag:"\u{1F4BB} PROJECTS CONNECTED",step:"TAB \xB7 1 / 2",title:"Adversarial Engineering & Live 3D WebGL",body:"Every project below is built to be tested: **KEAN CTF 2027** uses **GitHub Actions CI** to verify solve scripts, and **LLM Red-Team Harness** logs reproducible **SQLite** verdicts.",footer:"Click bubble for more on my projects \u25BE",dotIndex:0,dotCount:2},{tag:"\u{1F4BB} THIS 3D MASCOT HERO",step:"TAB \xB7 2 / 2",title:"Built From Code in Blender 5.2 + Three.js",body:"Even this speech bubble is a **3D Blender mesh** (`ChatBubbleFrame` + `ChatBubbleFace`) with live **CanvasTexture** rendering, custom blush shaders, and **4 iconic game drink sounds**!",footer:"Click my Yoo-hoo box for a sip! \u{1F9C3}",dotIndex:1,dotCount:2}],research:[{tag:"\u{1F52C} RESEARCH CONNECTED",step:"TAB \xB7 1 / 2",title:"Can We Trust Decentralized AI Compute?",body:"In our **HadAgent** study & **ICBC '27 SoK** with **Dr. Boyang Li**, local AI-reproduced tests showed the original validator accepted **70/78** below-threshold outputs vs **0/78** after repair.",footer:"Click bubble for my GMiS & UR2PhD work \u25BE",dotIndex:0,dotCount:2},{tag:"\u{1F52C} EMPIRICAL RIGOR",step:"TAB \xB7 2 / 2",title:"GMiS '25, GMiS '26 & CRA UR2PhD",body:"As **sole student author** on **Gen Z Housing** (GMiS '26), I fixed a county/state aggregation bug; in **Debate Coach** (UR2PhD) & **Adaptive Learning** (GMiS '25), I audited LLM accuracy.",footer:"Ask me about any paper in the >_ bar below! \u25BE",dotIndex:1,dotCount:2}],security:[{tag:"\u{1F6E1}\uFE0F SECURITY CONNECTED",step:"TAB \xB7 1 / 2",title:"OSINT, Mobile ACDC & WKNJ 90.3 Cyber Talk",body:"At the **Kean Center for Cybersecurity** with **Stanley Mierzwa**, I classify nonprofit breaches via **OSINT**, monitor **Mobile ACDC**, and translate cyber defense on **C.Y.B.E.R. Talk** radio!",footer:"Click bubble for STEaM Camp & IoT Lab \u25BE",dotIndex:0,dotCount:2},{tag:"\u{1F6E1}\uFE0F CYBER EDUCATION & IOT",step:"TAB \xB7 2 / 2",title:"STEaM Camp & ESP8266 Smart-Home Lab",body:"Over Summer '26, I configured **30 laptops** and taught **cryptography & IP addressing** to **60 high schoolers**, then built an **Arduino/ESP8266** IoT security testbed in the fall.",footer:"Ask me about fake toll texts, Wi-Fi safety, or OSINT! \u25BE",dotIndex:1,dotCount:2}],experience:[{tag:"\u{1F31F} LEADERSHIP & OUTREACH",step:"TAB \xB7 1 / 2",title:"C.Y.B.E.R. Talk Radio, WiCyS & Code Samurai",body:"From speaking on **WKNJ 90.3 FM's C.Y.B.E.R. Talk** and co-organizing **PHD4FREE!** as **WiCyS Secretary** to coaching students 1-on-1 as a **Code Samurai**, I love making tech accessible.",footer:"Click bubble for IFWY Seoul & Cornell Tech \u25BE",dotIndex:0,dotCount:2},{tag:"\u{1F31F} SELECTSOLAR \xB7 NYC TO SEOUL",step:"TAB \xB7 2 / 2",title:"Cornell Tech Fellow & IFWY Youth Delegate",body:"After pitching **SelectSolar** at **Cornell Tech**, I was voted **1 of 25 North American delegates** to present our clean-energy reuse framework at the **IFWY Final Conference in Seoul**.",footer:"Ask me about the radio show, Seoul, or WiCyS below! \u25BE",dotIndex:1,dotCount:2}]}},gd=[{id:"cyber_talk_show_overview",patterns:[/\b(cyber talk|c\.y\.b\.e\.r|talk show|radio|wknj|90\.3|podcast|broadcast|on[- ]air|today|paris|sherwin|farbah)\b/i],keywords:["radio","talk","show","wknj","broadcast","panel","panelist","paris","sherwin","farbah","90.3"],tag:"\u{1F399}\uFE0F C.Y.B.E.R. TALK \xB7 WKNJ 90.3",title:"Kean C.Y.B.E.R. Talk Radio Show (Nov. 2, 2026)",body:"I was an on-air panelist on **C.Y.B.E.R. Talk (WKNJ 90.3 FM)** with **Paris, Sherwin & Farbah**! I covered **fake toll texts (7726)**, **finding your path in cyber & AI security**, **public Wi-Fi / HTTPS myths**, and **password reuse vs. managers**.",footer:"Ask me about toll texts, public Wi-Fi, or my first cyber mistake!"},{id:"cyber_talk_toll_text_scam",patterns:[/\b(toll|tolls|e-?zpass|fake text|smishing|reply stop|7726|reportfraud|unpaid toll|late fee|scam text)\b/i],keywords:["toll","tolls","ezpass","text","texts","stop","7726","spam","reportfraud","ftc","smishing"],tag:"\u{1F399}\uFE0F C.Y.B.E.R. TALK \xB7 SCAM TEXTS",title:"Pay Up or Else? The Fake Toll Text Scam",body:"On **C.Y.B.E.R. Talk**, I warned drivers: **never click links or reply STOP** to unpaid-toll texts (replying confirms your number is active!). Check the official agency app yourself, forward scam texts to **7726 (SPAM)**, and report at **ReportFraud.FTC.gov**.",footer:"Urgency is the red flag \u2014 always verify on the official site!"},{id:"cyber_talk_public_wifi_https",patterns:[/\b(public wi-?fi|coffee shop|hotspot|padlock|https|evil twin|captive portal|campus wi-?fi|file sharing)\b/i],keywords:["wifi","wi-fi","hotspot","https","padlock","coffee","library","encrypted","network","banking"],tag:"\u{1F399}\uFE0F C.Y.B.E.R. TALK \xB7 WI-FI SAFETY",title:"Public Wi-Fi & The HTTPS Padlock Myth",body:"On **C.Y.B.E.R. Talk**, I explained that **HTTPS encrypts your connection, but fake sites can use HTTPS too**! Always confirm the network name with staff/IT, turn off auto-connect & file sharing, and use your own phone hotspot for sensitive banking.",footer:"The padlock means the connection is private \u2014 not that the site is legit!"},{id:"cyber_talk_first_mistake_passwords_cookies",patterns:[/\b(first.*mistake|cyber mistake|aha moment|reusing password|password reuse|password manager|cookie|cookies|tracking cookie)\b/i],keywords:["mistake","reuse","reusing","passwords","password","manager","cookies","cookie","tracking","breach"],tag:"\u{1F399}\uFE0F C.Y.B.E.R. TALK \xB7 AHA! MOMENT",title:"My First Cyber Mistake: Password Reuse & Cookies",body:"As I shared on **C.Y.B.E.R. Talk**, my early mistake was **reusing one convenient password** before learning how a single breach compromises every account. Now I use a **password manager** for unique logins and **reject optional tracking cookies**!",footer:"Pair a password manager with MFA & passkeys for painless security."},{id:"cyber_talk_finding_path_roles",patterns:[/\b(which path|cybersecurity umbrella|digital forensics|grc|find.*strengths|how did you explore|choose a role|career advice)\b/i],keywords:["umbrella","forensics","grc","path","strengths","explore","roles","policy","investigative"],tag:"\u{1F399}\uFE0F C.Y.B.E.R. TALK \xB7 CAREER PATHS",title:"Finding Your Path Under the Cyber Umbrella",body:"From **digital forensics** classes and investigating **nonprofit cyberattacks** to **AI security research** (testing whether a system actually did what it claims), trying small hands-on tasks showed me I love the **investigative side** of security!",footer:"My advice: try a guided forensics lab or draft a club policy to see what clicks."},{id:"greeting_who",patterns:[/\b(hi|hello|hey|yo|sup|greetings|who are you|what is your name|tell me about yourself|introduce yourself|about you|about matthew|who is matthew|ngoy)\b/i],keywords:["who","matthew","ngoy","yourself","about","bio","background","introduce","name"],tag:"\u{1F4AC} MASCOT BOT \xB7 BIO",title:"Hey! I'm Matthew Ngoy \u{1F44B}",body:"I'm a B.S. Computer Science (**Cybersecurity Option**) senior at **Kean University ('27, 3.6 GPA)** working on **verifiable LLM inference**, **AI red-teaming**, **cybersecurity infrastructure**, and **C.Y.B.E.R. Talk** radio!",footer:"Try asking about HadAgent, C.Y.B.E.R. Talk, KEAN CTF, or IFWY Seoul!"},{id:"hadagent_research",patterns:[/\b(hadagent|proof[- ]of[- ]inference|score[- ]validation|70\/78|landy|verifier|red[- ]?team.*llm|independent study)\b/i],keywords:["hadagent","verifier","inference","proof","validation","score","70/78","0/78","landy","jimenez","audit","threshold"],tag:"\u{1F4AC} MASCOT BOT \xB7 RESEARCH",title:"Red-Teaming the HadAgent Verifier",body:"With **Dr. Boyang Li**, I directed AI-run local tests on a copied **HadAgent** verifier: the original accepted **70/78** below-threshold synthetic submissions, while our proposed repair accepted **0/78**.",footer:"Local test result only \xB7 responsibly disclosed to author Landy Jimenez."},{id:"sok_survey_boyang",patterns:[/\b(sok|survey|boyang|icbc|zkml|tee|trusted execution|verifiable.*inference|optimistic fraud|watermark)\b/i],keywords:["sok","survey","boyang","li","advisor","icbc","verifiable","zkml","tee","cryptographic","paper","decentralized"],tag:"\u{1F4AC} MASCOT BOT \xB7 SOK SURVEY",title:"Verifiable LLM Inference SoK (ICBC '27)",body:"I'm co-authoring a **Systematization of Knowledge (SoK)** survey with **Dr. Boyang Li** targeting **ICBC 2027**, comparing **zkML proofs**, **TEEs**, **optimistic fraud games**, and **watermarks**.",footer:"Ask about HadAgent or click the Research tab for more!"},{id:"kean_ctf",patterns:[/\b(ctf|capture the flag|kean ctf|ctfd|cloudflare|flag leak|blind ai)\b/i],keywords:["ctf","capture","flag","ctfd","docker","cloudflare","tunnel","actions","challenges","solve"],tag:"\u{1F4AC} MASCOT BOT \xB7 PROJECTS",title:"Co-Developing KEAN CTF 2027 \u{1F6A9}",body:"I co-develop **Docker-isolated CTF challenges** and solve scripts with two teammates and AI assistance, adding defenses against blind AI solvers, **GitHub Actions CI**, and fixing a flag leak.",footer:"Built with Python, Docker, CTFd, Cloudflare Tunnel & GitHub Actions."},{id:"red_team_harness",patterns:[/\b(red[- ]?team harness|legacy-red-team|prompt[- ]?injection|jailbreak|ollama|data[- ]?leak|model[- ]?judge)\b/i],keywords:["harness","injection","jailbreak","ollama","sqlite","jsonl","adversarial","prompt","judge"],tag:"\u{1F4AC} MASCOT BOT \xB7 PROJECTS",title:"LLM Red-Team Harness (Python + Ollama)",body:"In June 2026 I built an AI-assisted adversarial pipeline (**Vaunty/legacy-red-team-harness**) for **prompt-injection**, **jailbreak**, and **data-leak** tests, logging judge verdicts in **SQLite & JSONL**.",footer:"Check out the Projects tab for the GitHub repo link!"},{id:"cyber_center_osint_mierzwa",patterns:[/\b(osint|non[- ]?profit|incident repository|stanley|mierzwa|cia triad|cisa|tag cyber|fall.*intern|cybersecurity research intern)\b/i],keywords:["osint","nonprofit","incident","repository","stanley","mierzwa","cia","cisa","taxonomy","center","cybersecurity"],tag:"\u{1F4AC} MASCOT BOT \xB7 SECURITY",title:"Fall Cybersecurity Research Intern",body:"At the **Kean Center for Cybersecurity** (advised by **Stanley Mierzwa**), I investigate **nonprofit cyber incidents via OSINT**, classifying breaches by **CIA-triad impact**, **CISA sector**, and **TAG Cyber**.",footer:"I also work on Mobile ACDC & our ESP8266 IoT lab at the Center!"},{id:"mobile_acdc_iot",patterns:[/\b(mobile acdc|acdc|iot|arduino|esp8266|smart[- ]?home|rack[- ]?energy|portable.*data center)\b/i],keywords:["acdc","mobile","iot","arduino","esp8266","energy","rack","monitoring","smart-home","hardware"],tag:"\u{1F4AC} MASCOT BOT \xB7 INFRA & IOT",title:"Mobile ACDC & ESP8266 IoT Security Lab",body:"I design **solar-power and rack-energy monitoring** for **Mobile ACDC** (Kean's portable teaching data center) and built a hands-on **Arduino/ESP8266 smart-home IoT lab**.",footer:"Click the Security tab to see all my infrastructure work!"},{id:"summer_well_steam_china",patterns:[/\b(steam camp|port authority|well intern|summer.*intern|wenzhou|beijing|china|young envoys|60.*students|30.*laptops)\b/i],keywords:["steam","camp","port","authority","well","wenzhou","beijing","china","envoys","laptops","cryptography","high school"],tag:"\u{1F4AC} MASCOT BOT \xB7 TEACHING & GLOBAL",title:"Summer WELL Intern \xB7 STEaM Camp & China",body:"In Summer '26 I configured **30 laptops** and taught **12 cryptography, coding & IP lessons** to **60 high schoolers** at **Port Authority STEaM Camp**, plus studied in **Wenzhou & Beijing**!",footer:"Supported by the Young Envoys Scholarship (May \u2013 Aug. 2026)."},{id:"ifwy_selectsolar_seoul_cornell",patterns:[/\b(ifwy|selectsolar|select solar|cornell|cornell tech|seoul|korea|we the youth|delegate|fellowship|solar panel|landfill)\b/i],keywords:["ifwy","selectsolar","solar","cornell","seoul","korea","delegate","fellowship","landfill","nonprofit","policy"],tag:"\u{1F4AC} MASCOT BOT \xB7 FELLOWSHIPS",title:"SelectSolar \xB7 Cornell Tech & IFWY Seoul \u{1F30D}",body:"I spearheaded **SelectSolar** to divert solar panels from landfills for schools & nonprofits \u2014 earning a fully funded **Cornell Tech** fellowship and representing North America in **Seoul, South Korea** (1 of 25 delegates).",footer:"International Forum 'We, the Youth' (Sep. \u2013 Oct. 2025)."},{id:"wicys_phd4free_samurai",patterns:[/\b(wicys|women in cybersecurity|phd4free|demetrius|notre dame|secretary|code samurai|samurai|peer mentor|tutor|mentoring)\b/i],keywords:["wicys","secretary","phd4free","demetrius","hernandez","samurai","mentor","tutor","leadership","club","teaching"],tag:"\u{1F4AC} MASCOT BOT \xB7 LEADERSHIP",title:"WiCyS Secretary & Code Samurai Mentor",body:"As **Kean WiCyS Secretary**, I co-organized **PHD4FREE!** (presenting funded grad pathways with Notre Dame PhD student Demetrius Hernandez), and mentor students 1-on-1 in **Python, SQL & data structures** as a **Code Samurai**.",footer:"Volunteered Spring '25 \xB7 returned as a paid Code Samurai in Fall '26."},{id:"genz_debate_adaptive_gmis",patterns:[/\b(gen z|housing|gmis|great minds in stem|debate coach|ur2phd|cra|adaptive learning|iuse|first author|sole student)\b/i],keywords:["gen","housing","demographics","gmis","debate","ur2phd","adaptive","iuse","author","citation","county"],tag:"\u{1F4AC} MASCOT BOT \xB7 PUBLICATIONS",title:"GMiS '25, GMiS '26 & CRA UR2PhD",body:"I'm **sole student author** on **Gen Z Housing** (GMiS '26, fixing a county/state aggregation mismatch), **first author** on **Adaptive Learning with LLMs** (GMiS '25), and co-evaluated **Debate Coach LLMs** (CRA UR2PhD '26).",footer:"Click the Research tab to read all 5 research cards!"},{id:"education_kean_gpa",patterns:[/\b(kean|university|college|education|degree|major|gpa|grade|graduate|graduation|class of|coursework|course|dean)\b/i],keywords:["kean","university","education","degree","major","gpa","graduation","senior","2027","courses","school"],tag:"\u{1F4AC} MASCOT BOT \xB7 EDUCATION",title:"Kean University \xB7 B.S. CS (Cybersecurity) '27",body:"I'm a Senior at **Kean University** in Union, NJ (**GPA: 3.6 / 4.0, Dean's List**, Expected **May 2027**). Coursework includes **Data Structures, Algorithms, Operating Systems, DBMS, Computer Systems & Digital Circuits**.",footer:"Certifications: Cisco Ethical Hacker, Intro to Cyber & Networking Basics."},{id:"skills_stack_tools",patterns:[/\b(skill|skills|tech stack|stack|language|languages|programming|tools|certifications|python|java|javascript|sql|linux|docker|wireshark|nmap|cisco)\b/i],keywords:["skills","stack","languages","tools","python","java","javascript","sql","c","bash","linux","docker","wireshark","nmap","certifications"],tag:"\u{1F4AC} MASCOT BOT \xB7 TECH STACK",title:"Languages, Security Tools & Certifications",body:"**Languages:** Python, Java, JS (Node.js), SQL, C, Bash, HTML/CSS. **Security & Infra:** Linux, Docker, GitHub Actions, Wireshark, Nmap, CTFd, Cloudflare Tunnel, Ollama, SQLite, ESP8266. **Certs:** Cisco Ethical Hacker.",footer:"Plus Blender 5.2 Python & Three.js/WebGL for this 3D hero!"},{id:"mascot_frog_yoohoo_sounds",patterns:[/\b(mascot|frog|yoohoo|yoo-hoo|drink|sip|straw|chocolate|glasses|visor|blush|sound|audio|roblox|minecraft|fortnite|blender|3d|bubble)\b/i],keywords:["mascot","frog","yoohoo","yoo-hoo","drink","sip","straw","visor","glasses","roblox","minecraft","fortnite","sound","blender","bubble"],tag:"\u{1F4AC} MASCOT BOT \xB7 3D MASCOT",title:"About My 3D Yoo-hoo Frog Mascot \u{1F438}\u{1F9C3}",body:"I'm modeled in **Blender 5.2** (including this **3D speech bubble**!) and rendered in **Three.js**. Click my **Yoo-hoo box** to hear **Roblox ('Nom nom nom' & Bloxy Cola)**, **Minecraft Potion**, or **Fortnite Shield** sounds!",footer:"Click 4 times fast to drain the box and trigger the empty slurp gag!"},{id:"contact_resume_links",patterns:[/\b(contact|email|reach|hire|hiring|job|opportunity|linkedin|github|resume|cv|pdf|where can i find)\b/i],keywords:["contact","email","reach","github","linkedin","resume","cv","pdf","hire","ngoym"],tag:"\u{1F4AC} MASCOT BOT \xB7 CONTACT",title:"Let's Connect! \u{1F4EC}",body:"You can email me at **ngoym@kean.edu**, check out my code on **GitHub (@Vaunty)**, connect on **LinkedIn (/in/matthewngoy)**, or grab my **Resume (PDF)** right from the purple tab below!",footer:"Always happy to chat about AI security, research & internships!"}],w0=[/\b(weather|forecast|temperature|rain|snow)\b/i,/\b(capital of|president of|prime minister|population of|who won the|super bowl|world cup)\b/i,/\b(recipe|cook|bake|pizza|burger|pasta|calories)\b/i,/\b(stock price|bitcoin|crypto price|ethereum|nasdaq)\b/i,/\b(write me a|write a poem|tell me a joke|sing a song|translate|solve this equation)\b/i,/^\s*\d+\s*[\+\-\*\/]\s*\d+/];function xd(i){let e=(i||"").trim();if(!e)return null;let t=e.toLowerCase();if(!/\b(matthew|ngoy|you|your|kean|hadagent|ctf|ifwy|seoul|cornell|wicys|samurai|acdc|yoohoo|yoo-hoo|frog|mascot|boyang|mierzwa|selectsolar|steam|gmis|ur2phd|research|project|intern|resume|skill|cyber|radio|wknj|toll|wifi|wi-fi|password|cookie|paris|sherwin|farbah)\b/i.test(t)&&w0.some(o=>o.test(t)))return bd(e);let s=null,r=0,a=t.replace(/[^a-z0-9\-\/]+/g," ").split(/\s+/).filter(Boolean);for(let o of gd){let c=0;for(let l of o.patterns)l.test(t)&&(c+=6);for(let l of o.keywords)t.includes(l)?c+=2.5:a.some(h=>h.length>=4&&(l.startsWith(h)||h.startsWith(l)))&&(c+=1.2);c>r&&(r=c,s=o)}return r<2&&/\b(what do you do|what are you working on|what have you built|what is new|what's new|your work|your experience)\b/i.test(t)&&(s=gd[5],r=5),!s||r<2?bd(e):{tag:s.tag,step:"Q&A \xB7 MATCH",title:s.title,body:s.body,footer:s.footer,dotIndex:-1,dotCount:0}}function bd(i){return{tag:"\u{1F914} HMMM...",step:"OUT OF SCOPE",title:"I'm not sure how to answer that.......",body:`I only know about **Matthew Ngoy** \u2014 my **AI security research**, **C.Y.B.E.R. Talk radio show**, **projects**, and **experience**! (Asked: "${i.length>34?i.slice(0,32)+"\u2026":i}")`,footer:"Try asking about HadAgent, C.Y.B.E.R. Talk, KEAN CTF, or IFWY Seoul!",dotIndex:-1,dotCount:0}}function Co(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.lineTo(e+n-r,t),i.quadraticCurveTo(e+n,t,e+n,t+r),i.lineTo(e+n,t+s-r),i.quadraticCurveTo(e+n,t+s,e+n-r,t+s),i.lineTo(e+r,t+s),i.quadraticCurveTo(e,t+s,e,t+s-r),i.lineTo(e,t+r),i.quadraticCurveTo(e,t,e+r,t),i.closePath()}function C0(i){let e=(i||"").trim().split(/\s+/).filter(Boolean),t=[],n=!1;for(let s of e){let r=(s.match(/\*\*/g)||[]).length,a=s.replace(/\*\*/g,"");r>=2?t.push({text:a,bold:!0}):r===1?n?(t.push({text:a,bold:!0}),n=!1):(n=!0,t.push({text:a,bold:!0})):t.push({text:a,bold:n})}return t}function kl(i,e){let t=i.getContext("2d"),n=i.width,s=i.height;t.fillStyle="#ffffff",t.fillRect(0,0,n,s);let r=t.createLinearGradient(76,26,780,26);r.addColorStop(0,"rgba(63, 156, 56, 0.24)"),r.addColorStop(1,"rgba(63, 156, 56, 0.0)"),t.fillStyle=r,Co(t,76,22,680,16,8),t.fill();let a=74,o=e.tag||"\u{1F438} ABOUT ME";t.font="800 36px ui-monospace, SFMono-Regular, Consolas, monospace";let c=Math.ceil(t.measureText(o).width)+88,l=a,h=52,u=74,d=e.step==="OUT OF SCOPE";if(t.fillStyle=d?"#fff5f5":"#e9f7e7",Co(t,l,h,c,u,37),t.fill(),t.lineWidth=5,t.strokeStyle="#1d1c22",t.stroke(),t.beginPath(),t.arc(l+36,h+u/2,12,0,Math.PI*2),t.fillStyle=d?"#f85149":"#3f9c38",t.fill(),t.fillStyle=d?"#a41e22":"#1b5e20",t.textBaseline="middle",t.fillText(o,l+62,h+u/2+2),e.step){t.font="800 35px ui-monospace, SFMono-Regular, Consolas, monospace",t.fillStyle="#4b5563";let E=t.measureText(e.step).width;t.fillText(e.step,n-a-E,h+u/2+2)}let p=154;e.title&&(t.font='800 56px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',t.fillStyle="#0f172a",t.textBaseline="top",t.fillText(e.title,a,p,n-a*2),p+=78);let b=C0(e.body||""),y=n-a*2,g=72,m=[],A=[],T=0;for(let E of b){t.font=`${E.bold?800:600} 49px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let f=t.measureText(E.text+" ").width;A.length>0&&T+f>y?(m.push(A),A=[E],T=f):(A.push(E),T+=f)}A.length>0&&m.push(A),t.textBaseline="top";for(let E of m.slice(0,7)){let f=a;for(let S of E){t.font=`${S.bold?800:600} 49px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let D=t.measureText(S.text).width,R=t.measureText(" ").width;S.bold?(t.fillStyle="rgba(85, 180, 67, 0.34)",Co(t,f-3,p+33,D+6,24,6),t.fill(),t.fillStyle="#090d16"):t.fillStyle="#1d1c22",t.fillText(S.text,f,p),f+=D+R}p+=g}let _=s-122;t.save(),t.strokeStyle="rgba(29, 28, 34, 0.22)",t.lineWidth=4.5,t.setLineDash([14,11]),t.beginPath(),t.moveTo(a,_),t.lineTo(n-a,_),t.stroke(),t.restore();let M=a;if(e.dotCount>0){let E=a,f=s-64;for(let S=0;S<e.dotCount;S++){let D=S===e.dotIndex,R=D?52:24;t.fillStyle=D?"#3f9c38":"#d0d7de",Co(t,E,f-12,R,24,12),t.fill(),t.lineWidth=3.5,t.strokeStyle="#1d1c22",t.stroke(),E+=R+12}M=E+22}if(e.footer){t.font="700 32px ui-monospace, SFMono-Regular, Consolas, monospace",t.fillStyle="#1e6525",t.textBaseline="middle";let E=t.measureText(e.footer).width,f=Math.max(M,n-a-E);t.fillText(e.footer,f,s-64,n-a-M)}}var Ad=document.querySelector("[data-mascot]");Ad&&I0(Ad);function I0(i){let e=i.querySelector(".mascot-stage"),t=i.querySelector(".mascot-sound"),n=new URLSearchParams(location.search),s=n.get("glb")||i.dataset.mascotGlb||"assets/mascot.glb",r=n.has("debug"),a=matchMedia("(prefers-reduced-motion: reduce)"),o=a.matches||n.get("motion")==="reduce";a.addEventListener?.("change",H=>{o=H.matches});let c=document.createElement("canvas");c.className="mascot-canvas",c.setAttribute("role","img"),c.setAttribute("aria-label","3D mascot: a green frog in red cat-eye visor glasses sipping a Yoo-hoo through a straw next to a 3D cartoon speech bubble.");let l;try{l=new vo({canvas:c,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(H){i.classList.add("mascot-fallback"),console.warn("[mascot] WebGL unavailable, showing the poster",H);return}e.appendChild(c),l.outputColorSpace=dt,l.toneMapping=gr,l.toneMappingExposure=1,l.setClearColor(0,0);let u=Math.min(window.devicePixelRatio||1,2);l.setPixelRatio(u);let d=new ls,p=new Mt(32,1,.5,60);d.environment=R0(l),d.environmentIntensity=.5;let b=new Pn(16774118,2.1);b.position.set(-3.6,4.6,5.2);let y=new Pn(14543103,.38);y.position.set(5.2,1.3,4.6);let g=new Pn(16777215,1.6);g.position.set(2.8,3.6,-4.6);let m=new Pn(15794160,.95);m.position.set(-3.4,2.6,-3.8),d.add(b,y,g,m);let A={uTime:{value:0},uWrap:{value:.24},uRim:{value:.42},uRimColor:{value:new Le(15400920)},uBlush:{value:0},uBlushColor:{value:new Le(16726128)},uTop:{value:0},uFlow:{value:0},uSputter:{value:0}},T=document.createElement("canvas");T.width=1536,T.height=900;let _=new tr(T);_.colorSpace=dt,_.flipY=!1;let M={mode:"about",aboutIdx:0,tabKey:null,tabIdx:0,phase:"visible",timer:0,showDur:6.8,hideDur:1.35,scale:new xi(22,.38,1),targetScale:1,currentCard:on.about[0]};function E(H,C=3.2){M.currentCard=H,kl(T,H),_.needsUpdate=!0,M.phase="visible",M.timer=0,M.targetScale=1,M.scale.kick(C)}kl(T,on.about[0]),_.needsUpdate=!0;let f={ready:!1,running:!1,visible:!0,inView:!0,nodes:{},morphs:{},liquid:null,cursor:null,track:{yaw:{x:0,v:0},pitch:{x:0,v:0},roll:{x:0,v:0}},pointer:{x:0,y:0,has:!1,touch:!1,last:-1e9},sip:null,sipT:0,ei:0,rig:new Eo,nextIdleSip:4+Math.random()*3,lastSipEnd:-10,level:1,empty:!1,clicks:[],queued:null,hoverBox:!1,hoverBubble:!1,refill:0,eye:new F,rest:{},t:0,bubble:M},S=new wo,D=new Mo;D.setMeshoptDecoder(ud),D.load(s,H=>{R(H.scene),f.ready=!0,N(),l.render(d,p),i.classList.add("mascot-ready"),et()},void 0,H=>{console.warn("[mascot] model failed to load, keeping the poster",H),i.classList.add("mascot-fallback")});function R(H){d.add(H);let C=f.nodes;H.traverse(ne=>{var j;if(C[ne.name]=ne,ne.isMesh&&(ne.frustumCulled=!1,ne.morphTargetDictionary))for(let[Y,ce]of Object.entries(ne.morphTargetDictionary))((j=f.morphs)[Y]||(j[Y]=[])).push([ne,ce])});let Pe=Math.min(8,l.capabilities.getMaxAnisotropy()),me=C.Box?.material?.map||null;me&&(me.anisotropy=Pe,me.colorSpace=dt),_.anisotropy=Pe;let ye=L(new fn({vertexColors:!0,roughness:.62,metalness:0}),{blush:!0}),ee=L(new fn({vertexColors:!0,color:15261916,roughness:.68,metalness:0,envMapIntensity:.6}),{rim:.1,rimColor:16765608}),Xe=L(new xt({vertexColors:!0,roughness:.3,clearcoat:.55,clearcoatRoughness:.12}),{wrap:.3,rim:.1}),Ee=new xt({vertexColors:!0,roughness:.3,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:.95}),we=L(new fn({vertexColors:!0,roughness:.42,metalness:0}),{wrap:.2,rim:.22,rimColor:12570879}),w=L(new fn({map:me,vertexColors:!0,roughness:.8,metalness:0}),{wrap:.3,rim:.08}),x=new Zt({color:16726598,toneMapped:!1}),U=L(new xt({vertexColors:!0,roughness:.36,clearcoat:.45,clearcoatRoughness:.14}),{wrap:.25,rim:.25,rimColor:14412542}),te=new Zt({map:_,toneMapped:!1}),G=(ne,j)=>{C[ne]&&(C[ne].material=j)};if(G("Head",ye),G("Hand",ye),G("Lips",ee),G("VisorFrame",Xe),G("VisorLenses",Ee),G("Base",we),G("Box",w),G("Prompt",x),G("PromptCursor",x),G("ChatBubbleFrame",U),G("ChatBubbleFace",te),C.Liquid){f.liquid=C.Liquid,C.Liquid.material=V(),C.Liquid.renderOrder=1;let ne=C.Liquid.userData||{};f.tBox=ne.t_box??.3,f.tMouth=ne.t_mouth??.93}C.Straw&&(C.Straw.material=k(),C.Straw.renderOrder=2),f.cursor=C.PromptCursor||null;for(let ne of["Mascot","HeadTrack","HeadSquash","Visor","Base","DrinkRig","BubbleRig"])C[ne]&&(f.rest[ne]={p:C[ne].position.clone(),q:C[ne].quaternion.clone(),s:C[ne].scale.clone()});H.updateMatrixWorld(!0),C.VisorLenses&&new Gt().setFromObject(C.VisorLenses).getCenter(f.eye);let ae=new Gt().setFromObject(H);f.bounds=ae}function L(H,{wrap:C=.42,rim:Pe=.33,rimColor:me=null,blush:ye=!1}={}){let ee={uWrapLocal:{value:C},uRimLocal:{value:Pe},uRimColorLocal:{value:new Le(me??15400920)}};return H.onBeforeCompile=Xe=>{Object.assign(Xe.uniforms,ee,{uBlush:A.uBlush,uBlushColor:A.uBlushColor}),Xe.fragmentShader=`uniform float uWrapLocal; uniform float uRimLocal; uniform vec3 uRimColorLocal;
uniform float uBlush; uniform vec3 uBlushColor;
`+Xe.fragmentShader.replace("#include <lights_physical_pars_fragment>",ze.lights_physical_pars_fragment.replace("reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );",`float wrapNL = saturate( ( dot( geometryNormal, directLight.direction ) + uWrapLocal ) / ( 1.0 + uWrapLocal ) );
reflectedLight.directDiffuse += ( wrapNL * directLight.color ) * diffuseBRDF * ( 1.0 - F );`)).replace("#include <color_fragment>",ye?`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
 diffuseColor.rgb *= vColor.rgb;
 float bm = smoothstep(0.10, 0.85, vColor.a) * clamp(uBlush, 0.0, 1.0);
 diffuseColor.g *= (1.0 - 0.76 * bm);
 diffuseColor.rgb = mix(diffuseColor.rgb, uBlushColor, bm * 0.88);
#endif`:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
 diffuseColor.rgb *= vColor.rgb;
#endif`).replace("#include <opaque_fragment>",ye?`float fres = pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), 3.0);
outgoingLight += uRimColorLocal * fres * uRimLocal * (0.35 + 0.65 * diffuseColor.g);
#if defined( USE_COLOR_ALPHA )
 float bmGlow = smoothstep(0.12, 0.85, vColor.a) * clamp(uBlush, 0.0, 1.0);
 outgoingLight += vec3(0.36, 0.05, 0.14) * bmGlow;
#endif
#include <opaque_fragment>`:`float fres = pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), 3.0);
outgoingLight += uRimColorLocal * fres * uRimLocal * (0.35 + 0.65 * diffuseColor.g);
#include <opaque_fragment>`)},H.customProgramCacheKey=()=>`stylised-v3-${C}-${Pe}-${ye}`,H}function V(){let H=new xt({color:5383693,roughness:.14,clearcoat:.75,clearcoatRoughness:.08,side:Kt,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return H.onBeforeCompile=C=>{Object.assign(C.uniforms,{uTop:A.uTop,uFlow:A.uFlow,uSputter:A.uSputter,uTime:A.uTime}),C.vertexShader=`varying float vT;
`+C.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
 vT = uv.x;`),C.fragmentShader=`varying float vT; uniform float uTop, uFlow, uSputter, uTime;
`+C.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
 if (uTop < 0.0) discard;
 float top = uTop + 0.006 * sin(uTime * 24.0) * step(0.02, uTop);
 if (vT > top) discard;
 float bub = fract(vT * 10.0 - uTime * 3.0);
 if (uSputter > 0.01 && bub < uSputter * 0.45 && vT > 0.22) discard;`).replace("#include <color_fragment>",`#include <color_fragment>
 float streak = 0.5 + 0.5 * sin((vT * 46.0 - uTime * 9.0) * 6.2831);
 float swirl = 0.5 + 0.5 * cos((vT * 22.0 - uTime * 5.0) * 6.2831);
 diffuseColor.rgb *= 0.92 + (0.42 * streak + 0.16 * swirl) * (0.25 + 0.75 * uFlow);
 diffuseColor.rgb += vec3(0.28, 0.15, 0.06) * smoothstep(top - 0.048, top, vT);
 if (!gl_FrontFacing) diffuseColor.rgb *= 0.72;`)},H.customProgramCacheKey=()=>"liquid-v2",H}function k(){let H=new xt({color:16251903,roughness:.12,transparent:!0,opacity:.32,depthWrite:!1,clearcoat:.85,clearcoatRoughness:.05,side:pn});return H.onBeforeCompile=C=>{C.fragmentShader=C.fragmentShader.replace("#include <opaque_fragment>",`float fr = pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), 2.1);
diffuseColor.a = clamp(0.14 + 0.76 * fr, 0.0, 0.90);
outgoingLight += vec3(0.14) * fr;
#include <opaque_fragment>`)},H.customProgramCacheKey=()=>"straw-v2",H}function N(){let H=e.getBoundingClientRect(),C=Math.max(1,Math.round(H.width)),Pe=Math.max(1,Math.round(H.height));l.setSize(C,Pe,!1),p.aspect=C/Pe;let me=new F(-.74,.44,.55),ye=gi.degToRad(7),ee=1.32,Xe=2.42,Ee=gi.degToRad(p.fov),we=ee/Math.tan(Ee/2),w=Xe/(Math.tan(Ee/2)*p.aspect),x=Math.max(we,w);p.position.set(me.x,me.y+Math.sin(ye)*x,me.z+Math.cos(ye)*x),p.lookAt(me),p.updateProjectionMatrix(),f.ready&&!f.running&&l.render(d,p)}new ResizeObserver(N).observe(e);let q=new pr,J=new Ge,W=2.4;function se(H){f.pointer.x=H.clientX,f.pointer.y=H.clientY,f.pointer.has=!0,f.pointer.last=performance.now(),f.pointer.touch=H.pointerType==="touch"}addEventListener("pointermove",se,{passive:!0}),addEventListener("pointerdown",se,{passive:!0}),document.addEventListener("pointerleave",()=>{f.pointer.has=!1}),addEventListener("blur",()=>{f.pointer.has=!1});function X(){if(M.mode==="tab"&&M.tabKey&&on.tabs[M.tabKey]){let H=on.tabs[M.tabKey];M.tabIdx=(M.tabIdx+1)%H.length,E(H[M.tabIdx],3.4)}else M.mode="about",M.aboutIdx=(M.aboutIdx+1)%on.about.length,M.showDur=7.2,E(on.about[M.aboutIdx],3.4)}function $(H){let C=on.tabs[H];!C||!C.length||(M.mode="tab",M.tabKey=H,M.tabIdx=0,M.showDur=9,E(C[0],4.2),f.rig.event({name:"kickVisor",amount:.55}))}function ie(){M.mode="about",M.tabKey=null,M.showDur=6.8,E(on.about[M.aboutIdx],2.8)}function Te(H){let C=xd(H);return C?(M.mode="qa",M.showDur=13.5,E(C,4.6),f.rig.event({name:"kickVisor",amount:.65}),f.rig.event({name:"kickSquash",amount:.35}),C):null}i.addEventListener("click",H=>{if(H.target.closest("a, button, input, form, [data-ask-bar]")||!f.ready)return;let C=f.nodes;Z(H.clientX,H.clientY),q.setFromCamera(J,p);let Pe=[C.ChatBubbleFace,C.ChatBubbleFrame].filter(Boolean);if(M.targetScale>.1&&Pe.length&&q.intersectObjects(Pe,!1).length>0){X();return}if(o)return;let me=performance.now();if(f.clicks=f.clicks.filter(ye=>me-ye<1800),f.clicks.push(me),S.unlock(),f.empty){ve();return}if(f.clicks.length>=4){f.clicks=[],ue("empty");return}ue("normal")}),t?.addEventListener("click",H=>{H.stopPropagation();let C=S.toggle();t.setAttribute("aria-pressed",String(C)),t.querySelector("span").textContent=C?"Sound on":"Sound off",C&&(f.ready&&!f.sip&&!f.empty&&!o?ue("normal"):S.playDrinkClip(1.1))});function Oe(){if(!f.ready||!f.pointer.has||f.pointer.touch)return;let H=f.nodes;if(!H.Box)return;Z(f.pointer.x,f.pointer.y),q.setFromCamera(J,p);let C=M.targetScale>.1&&q.intersectObjects([H.ChatBubbleFace,H.ChatBubbleFrame].filter(Boolean),!1).length>0,Pe=!C&&q.intersectObjects([H.Box,H.Hand].filter(Boolean),!1).length>0;f.hoverBubble=C,(Pe!==f.hoverBox||C)&&(f.hoverBox=Pe,c.style.cursor=Pe||C?"pointer":"",Pe&&!o&&!f.sip&&!f.empty&&f.t-f.lastSipEnd>2.5&&ue("normal"))}function Z(H,C){let Pe=c.getBoundingClientRect();J.set((H-Pe.left)/Pe.width*2-1,-((C-Pe.top)/Pe.height)*2+1)}function ue(H,C){if(f.empty&&H!=="empty")return;if(f.sip){H==="empty"&&(f.queued="empty");return}H==="normal"&&f.level<=.2&&(H="empty");let Pe=C??(H==="empty"?8:2+Math.floor(Math.random()*3));f.sip=fd({gulps:Pe,kind:H,strength:.85+Math.random()*.3}),f.sipT=0,f.ei=0,S.sipStart(f.sip)}function ve(){f.empty=!1,f.level=1,f.rig.sagTarget=0,f.rig.squeeze.x=Math.max(f.rig.squeeze.x,.85),f.rig.squeeze.kick(-6),f.refill=1,S.pop(1),f.rig.event({name:"kickSquash",amount:.7}),f.rig.event({name:"kickVisor",amount:1})}function De(){let H=f.sip.kind;if(f.sip=null,f.lastSipEnd=f.t,f.nextIdleSip=f.t+6+Math.random()*4,H==="empty"?(f.level=0,f.empty=!0,f.rig.sagTarget=1):H==="normal"&&(f.level=Math.max(0,f.level-.13),f.rig.sagTarget=(1-f.level)*.55),f.queued){let C=f.queued;f.queued=null,ue(C)}}function pe(H,C,Pe,me){me=Math.max(0,me);let ye=H.x-C,ee=Math.exp(-Pe*me),Xe=(ye+(H.v+Pe*ye)*me)*ee;H.v=(H.v-Pe*(H.v+Pe*ye)*me)*ee,H.x=C+Xe}let Fe=(H,C)=>C*Math.tanh(H/C),rt={last:0},Ae={acc:0,n:0,slow:0,fps:60,ft:0},Qe=0;function et(){f.running||f.frozen||!f.ready||!f.visible||!f.inView||(f.running=!0,rt.last=-1,Qe=requestAnimationFrame(Lt))}function We(){f.running=!1,cancelAnimationFrame(Qe)}let ht=new F,mt=new nn(new F(0,0,1),-W);function Lt(H){if(!f.running)return;Qe=requestAnimationFrame(Lt),rt.last<0&&(rt.last=H);let C=Math.max(0,Math.min((H-rt.last)/1e3,1/20));rt.last=Math.max(rt.last,H),ct(C,H)}function ct(H,C){f.t+=H,A.uTime.value=f.t;let Pe=performance.now(),me=!f.pointer.has||C-f.pointer.last>(f.pointer.touch?2500:3200),ye=0,ee=0,Xe=o?.2:.34,Ee=o?.07:.14,we=o?.04:.07;if(!me)Z(f.pointer.x,f.pointer.y),q.setFromCamera(J,p),q.ray.intersectPlane(mt,ht)&&(ht.sub(f.eye),ye=Math.atan2(ht.x,ht.z),ee=-Math.atan2(ht.y,Math.hypot(ht.x,ht.z)));else if(!o){let G=f.t;ye=.26*Math.sin(G/2.3)+.08*Math.sin(G/1.27+1.3),ee=-.03+.05*Math.sin(G/2.9+.4)}ye=Fe(ye,Xe),ee=ee<0?Fe(ee,Ee):Fe(ee,we);let w=o?4.2:7.6,x=f.track;if(pe(x.yaw,ye,w,H),pe(x.pitch,ee,w,H),pe(x.roll,-.13*ye,w*.85,H),M.timer+=H,!o&&!f.frozen)if(M.phase==="visible"&&M.timer>=M.showDur)if(M.mode==="tab"&&M.tabKey&&on.tabs[M.tabKey]){let G=on.tabs[M.tabKey];M.tabIdx=(M.tabIdx+1)%G.length,E(G[M.tabIdx],2.8)}else M.phase="hiding",M.timer=0,M.targetScale=0;else M.phase==="hiding"&&M.timer>=M.hideDur&&(M.mode="about",M.showDur=6.8,M.aboutIdx=(M.aboutIdx+1)%on.about.length,E(on.about[M.aboutIdx],3.4));M.scale.step(H,M.targetScale),!o&&!f.sip&&!f.empty&&f.t>f.nextIdleSip&&!document.hidden&&ue("normal");let U=null;if(f.sip){f.sipT+=H;let G=f.sip;for(;f.ei<G.events.length&&G.events[f.ei].t<=f.sipT;){let ae=G.events[f.ei++];f.rig.event(ae),S.event(ae,G)}U=pd(G,Math.min(f.sipT,G.duration)),f.sipT>=G.duration&&De()}let te=f.rig.update(H,U||(f.empty?{squeeze:.88}:null));cn(U,te,H),f.cursor&&(f.cursor.visible=o||Math.floor(f.t/.53)%2===0),(f.frameNo=(f.frameNo||0)+1)%6===0&&Oe(),l.render(d,p),vt(C,performance.now()-Pe,H)}function cn(H,C,Pe){let me=f.nodes,ye=f.rest,ee=f.track,Xe=C.squash,Ee=o?0:Math.sin(f.t*2.1);if(me.Mascot&&ye.Mascot){let U=H?H.leanPitch*.42:0;me.Mascot.rotation.set(ee.pitch.x*.42+U,ee.yaw.x*.46,ee.roll.x*.44,"YXZ"),me.Mascot.position.copy(ye.Mascot.p),me.Mascot.position.y+=.006*Ee+.01*Xe,me.Mascot.scale.set(1-.012*Xe,1+.02*Xe,1-.012*Xe)}if(me.HeadTrack&&ye.HeadTrack&&me.HeadTrack.rotation.set(ee.pitch.x*.58,ee.yaw.x*.54,ee.roll.x*.56,"YXZ"),me.HeadSquash&&ye.HeadSquash&&(me.HeadSquash.rotation.set(H?H.leanPitch*.75:0,H?H.leanYaw:0,0),me.HeadSquash.scale.set(1-.028*Xe,1+.056*Xe,1-.028*Xe)),me.Visor&&ye.Visor&&(me.Visor.position.copy(ye.Visor.p),me.Visor.position.y+=.011*C.visor,me.Visor.position.z+=.005*Math.abs(C.visor),me.Visor.quaternion.copy(ye.Visor.q),me.Visor.rotateX(.022*C.visor)),me.BubbleRig&&ye.BubbleRig){let U=Math.max(1e-4,M.scale.x);me.BubbleRig.visible=U>.015,me.BubbleRig.position.copy(ye.BubbleRig.p);let te=o?0:Math.sin(f.t*1.65)*.018;me.BubbleRig.position.y+=te;let G=(o?0:Math.sin(f.t*1.1)*.012)+(U-1)*.14;me.BubbleRig.rotation.set(ee.pitch.x*.08,ee.yaw.x*.1,G,"YXZ"),me.BubbleRig.scale.set(U,U,U)}let we=(U,te)=>{let G=f.morphs[U];if(G)for(let[ae,ne]of G)ae.morphTargetInfluences[ne]=te};we("CheekPuff",H?H.cheek:0),we("Pucker",H?H.pucker:0),we("SwallowHigh",H?H.swallowHi:0),we("SwallowLow",H?H.swallowLo:0),we("Squeeze",C.squeeze),we("Sag",C.sag);let w=H?Math.min(1,Math.max(0,H.grip+.7*(C.squeeze-H.squeeze))):Math.max(0,.7*C.squeeze);we("Grip",w);let x=H?H.fill:0;we("Fill",x),A.uTop.value=x>.001?gi.lerp(f.tBox-.03,f.tMouth+.01,x):-1,A.uFlow.value=H?H.flow:0,A.uSputter.value=H?H.sputter:0,A.uBlush.value=H?H.blush:0}function vt(H,C,Pe){Ae.acc+=Pe,Ae.n++,Ae.acc>=1&&(Ae.fps=Ae.n/Ae.acc,Ae.ft=Ae.acc/Ae.n*1e3,Ae.fps<50&&u>1?Ae.slow++:Ae.slow=0,Ae.slow>=2&&(u=Math.max(1,u-.25),l.setPixelRatio(u),N(),Ae.slow=0),r&&jt(C),Ae.acc=0,Ae.n=0)}let Ct;function jt(H){Ct||(Ct=document.createElement("pre"),Ct.className="mascot-debug",i.appendChild(Ct));let C=l.info.render,Pe=l.getContext(),me=Pe.getExtension("WEBGL_debug_renderer_info"),ye=me?Pe.getParameter(me.UNMASKED_RENDERER_WEBGL):"n/a";Ct.textContent=`fps ${Ae.fps.toFixed(1)}  frame ${Ae.ft.toFixed(1)} ms  cpu ${H.toFixed(2)} ms
dpr ${u}  draws ${C.calls}  tris ${C.triangles}
${ye}`,window.__mascotPerf={fps:Ae.fps,ft:Ae.ft,cpuMs:H,dpr:u,draws:C.calls,tris:C.triangles,gpu:ye}}document.addEventListener("visibilitychange",()=>{f.visible=!document.hidden,f.visible?et():We()}),new IntersectionObserver(H=>{f.inView=H[0].isIntersecting,f.inView?et():We()},{threshold:0}).observe(i),window.__mascot={state:f,sound:S,sip:(H="normal",C)=>ue(H,C),refill:ve,look:(H,C)=>se({clientX:H,clientY:C,pointerType:"mouse"}),showTabTopic:$,clearTabTopic:ie,ask:Te,nextBubbleCard:X,renderer:l,camera:p,scene:d,freeze(){We(),f.frozen=!0},resume(){f.frozen=!1,et()},advance(H,C=60){let Pe=f.fakeNow||performance.now(),me=Math.max(1,Math.round(H*C));for(let ye=0;ye<me;ye++)Pe+=1e3/C,f.pointer.last=f.pointer.has?Pe:f.pointer.last,ct(1/C,Pe);f.fakeNow=Pe},snapshot(H="image/png"){return l.render(d,p),c.toDataURL(H)}}}function R0(i){let e=new ls,t=new Nt(new ar(20,48,24),new dn({side:Ft,depthWrite:!1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec3 vP; void main(){ float h = vP.y; vec3 top = vec3(0.95, 0.97, 1.0); vec3 hor = vec3(0.62, 0.66, 0.62); vec3 bot = vec3(0.24, 0.27, 0.22); vec3 c = h > 0.0 ? mix(hor, top, pow(h, 0.55)) : mix(hor, bot, pow(-h, 0.45)); gl_FragColor = vec4(c, 1.0); }"}));e.add(t);let n=(a,o,c,l,h,u=1)=>{let d=new Nt(new sr(a,48),new Zt({color:new Le(h,h,h*.97),side:Kt}));d.position.set(o,c,l),d.scale.x=u,d.lookAt(0,0,0),e.add(d)};n(2.6,-6,7.5,8,7.5),n(4,2,9,2,1.6),n(1.8,4,5,-8,5),n(1.5,-5,4,-7,3);let s=new Cs(i),r=s.fromScene(e,.035).texture;return s.dispose(),r}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
