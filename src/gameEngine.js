var Ch=Object.defineProperty;var Xf=(s,t,e)=>t in s?Ch(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var qf=(s,t)=>{for(var e in t)Ch(s,e,{get:t[e],enumerable:!0})};var A=(s,t,e)=>Xf(s,typeof t!="symbol"?t+"":t,e);var Yf=0,Rh=1,$f=2;var Ou=1,Zf=2,Kn=3,xi=0,Fe=1,oe=2,On=0,pi=1,$t=2,Ph=3,Ih=4,Jf=5,zi=100,Kf=101,jf=102,Qf=103,tp=104,ep=200,np=201,ip=202,sp=203,nl=204,il=205,rp=206,op=207,ap=208,lp=209,cp=210,hp=211,up=212,dp=213,fp=214,sl=0,rl=1,ol=2,Cs=3,al=4,ll=5,cl=6,hl=7,yc=0,pp=1,mp=2,mi=0,_c=1,Mc=2,bc=3,yr=4,gp=5,Sc=6,Tc=7;var Fu=300,Rs=301,Ps=302,ul=303,dl=304,Vo=306,ur=1e3,Gi=1001,fl=1002,an=1003,xp=1004;var kr=1005;var Nn=1006,Ta=1007;var Hi=1008;var ei=1009,Bu=1010,ku=1011,dr=1012,wc=1013,Wi=1014,Un=1015,ln=1016,Ec=1017,Ac=1018,Is=1020,zu=35902,Vu=1021,Gu=1022,wn=1023,Hu=1024,Wu=1025,ws=1026,Ls=1027,Cc=1028,Rc=1029,Xu=1030,Pc=1031;var Ic=1033,po=33776,mo=33777,go=33778,xo=33779,pl=35840,ml=35841,gl=35842,xl=35843,vl=36196,yl=37492,_l=37496,Ml=37808,bl=37809,Sl=37810,Tl=37811,wl=37812,El=37813,Al=37814,Cl=37815,Rl=37816,Pl=37817,Il=37818,Ll=37819,Dl=37820,Nl=37821,vo=36492,Ul=36494,Ol=36495,qu=36283,Fl=36284,Bl=36285,kl=36286;var yo=2300,zl=2301,wa=2302,Lh=2400,Dh=2401,Nh=2402;var vp=3200,yp=3201;var Lc=0,_p=1,di="",Oe="srgb",zs="srgb-linear",Go="linear",ee="srgb";var rs=7680;var Uh=519,Mp=512,bp=513,Sp=514,Yu=515,Tp=516,wp=517,Ep=518,Ap=519,Vl=35044;var Oh="300 es",Qn=2e3,_o=2001,vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ea=Math.PI/180,Mo=180/Math.PI;function gi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Ye(s,t,e){return Math.max(t,Math.min(e,s))}function Cp(s,t){return(s%t+t)%t}function Aa(s,t,e){return(1-e)*s+e*t}function Dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var vt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],S=i[1],T=i[4],y=i[7],P=i[2],w=i[5],R=i[8];return r[0]=a*x+o*S+l*P,r[3]=a*m+o*T+l*w,r[6]=a*p+o*y+l*R,r[1]=c*x+h*S+u*P,r[4]=c*m+h*T+u*w,r[7]=c*p+h*y+u*R,r[2]=d*x+f*S+g*P,r[5]=d*m+f*T+g*w,r[8]=d*p+f*y+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ca=new Bt;function $u(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function bo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rp(){let s=bo("canvas");return s.style.display="block",s}var Fh={};function lr(s){s in Fh||(Fh[s]=!0,console.warn(s))}function Pp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ip(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lp(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ht={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?Go:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Bh=[.64,.33,.3,.6,.15,.06],kh=[.2126,.7152,.0722],zh=[.3127,.329],Vh=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ht.define({[zs]:{primaries:Bh,whitePoint:zh,transfer:Go,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:kh,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:Bh,whitePoint:zh,transfer:ee,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:kh,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});var os,Gl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=bo("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=bo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dp=0,So=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ra(i[a].image)):r.push(Ra(i[a]))}else r=Ra(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ra(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Np=0,tn=class s extends vi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Gi,i=Gi,r=Nn,a=Hi,o=wn,l=ei,c=s.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=gi(),this.name="",this.source=new So(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ur:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ur:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Fu;tn.DEFAULT_ANISOTROPY=1;var Ae=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(f+1)/2,P=(p+1)/2,w=(h+d)/4,R=(u+x)/4,L=(g+m)/4;return T>y&&T>P?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=R/n):y>P?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=L/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=L/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hl=class extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new So(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ve=class extends Hl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},To=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var he=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,S=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){let P=Math.sqrt(T),w=Math.atan2(P,p*S);m=Math.sin(m*w)/P,o=Math.sin(o*w)/P}let y=o*S;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new C,Hh=new he,ni=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Vr.subVectors(this.max,Qs),as.subVectors(t.a,Qs),ls.subVectors(t.b,Qs),cs.subVectors(t.c,Qs),oi.subVectors(ls,as),ai.subVectors(cs,ls),Di.subVectors(as,cs);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Di.z,Di.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Di.z,0,-Di.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Di.y,Di.x,0];return!Ia(e,as,ls,cs,Vr)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,as,ls,cs,Vr))?!1:(Gr.crossVectors(oi,ai),e=[Gr.x,Gr.y,Gr.z],Ia(e,as,ls,cs,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qn=[new C,new C,new C,new C,new C,new C,new C,new C],bn=new C,zr=new ni,as=new C,ls=new C,cs=new C,oi=new C,ai=new C,Di=new C,Qs=new C,Vr=new C,Gr=new C,Ni=new C;function Ia(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ni.fromArray(s,r);let o=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Up=new ni,tr=new C,La=new C,yi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Up.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(La)),this.expandByPoint(tr.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new C,Da=new C,Hr=new C,li=new C,Na=new C,Wr=new C,Ua=new C,wo=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Da.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Da);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Hr),o=li.dot(this.direction),l=-li.dot(Hr),c=li.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Da).addScaledVector(Hr,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,r){Na.subVectors(e,t),Wr.subVectors(n,t),Ua.crossVectors(Na,Wr);let a=this.direction.dot(Ua),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,t);let l=o*this.direction.dot(Wr.crossVectors(li,Wr));if(l<0)return null;let c=o*this.direction.dot(Na.cross(li));if(c<0||l+c>a)return null;let h=-o*li.dot(Ua);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Fp)}lookAt(t,e,n){let i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ci.crossVectors(n,rn),ci.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ci.crossVectors(n,rn)),ci.normalize(),Xr.crossVectors(rn,ci),i[0]=ci.x,i[4]=Xr.x,i[8]=rn.x,i[1]=ci.y,i[5]=Xr.y,i[9]=rn.y,i[2]=ci.z,i[6]=Xr.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],T=n[7],y=n[11],P=n[15],w=i[0],R=i[4],L=i[8],b=i[12],_=i[1],I=i[5],X=i[9],B=i[13],O=i[2],W=i[6],G=i[10],K=i[14],z=i[3],et=i[7],at=i[11],xt=i[15];return r[0]=a*w+o*_+l*O+c*z,r[4]=a*R+o*I+l*W+c*et,r[8]=a*L+o*X+l*G+c*at,r[12]=a*b+o*B+l*K+c*xt,r[1]=h*w+u*_+d*O+f*z,r[5]=h*R+u*I+d*W+f*et,r[9]=h*L+u*X+d*G+f*at,r[13]=h*b+u*B+d*K+f*xt,r[2]=g*w+x*_+m*O+p*z,r[6]=g*R+x*I+m*W+p*et,r[10]=g*L+x*X+m*G+p*at,r[14]=g*b+x*B+m*K+p*xt,r[3]=S*w+T*_+y*O+P*z,r[7]=S*R+T*I+y*W+P*et,r[11]=S*L+T*X+y*G+P*at,r[15]=S*b+T*B+y*K+P*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,T=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,P=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,w=e*S+n*T+i*y+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=S*R,t[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*R,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*p+n*l*p)*R,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*R,t[4]=T*R,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*R,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*R,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*R,t[8]=y*R,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*R,t[12]=P*R,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*R,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,S=l*c,T=l*h,y=l*u,P=n.x,w=n.y,R=n.z;return i[0]=(1-(x+p))*P,i[1]=(f+y)*P,i[2]=(g-T)*P,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(d+p))*w,i[6]=(m+S)*w,i[7]=0,i[8]=(g+T)*R,i[9]=(m-S)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=hs.set(i[0],i[1],i[2]).length(),a=hs.set(i[4],i[5],i[6]).length(),o=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);let c=1/r,h=1/a,u=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Qn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(o===Qn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===_o)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Qn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h,g,x;if(o===Qn)g=(a+r)*u,x=-2*u;else if(o===_o)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new C,Sn=new ie,Op=new C(0,0,0),Fp=new C(1,1,1),ci=new C,Xr=new C,rn=new C,Wh=new ie,Xh=new he,pe=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pe.DEFAULT_ORDER="XYZ";var Eo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bp=0,qh=new C,us=new he,$n=new ie,qr=new C,er=new C,kp=new C,zp=new he,Yh=new C(1,0,0),$h=new C(0,1,0),Zh=new C(0,0,1),Jh={type:"added"},Vp={type:"removed"},ds={type:"childadded",child:null},Oa={type:"childremoved",child:null},Le=class s extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new pe,n=new he,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Bt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(Zh,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(Zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(er,qr,this.up):$n.lookAt(qr,er,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),us.setFromRotationMatrix($n),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jh),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vp),Oa.child=t,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jh),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,zp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Le.DEFAULT_UP=new C(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new C,Zn=new C,Fa=new C,Jn=new C,fs=new C,ps=new C,Kh=new C,Ba=new C,ka=new C,za=new C,Va=new Ae,Ga=new Ae,Ha=new Ae,fi=class s{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Tn.subVectors(i,e),Zn.subVectors(n,e),Fa.subVectors(t,e);let a=Tn.dot(Tn),o=Tn.dot(Zn),l=Tn.dot(Fa),c=Zn.dot(Zn),h=Zn.dot(Fa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Va.setScalar(0),Ga.setScalar(0),Ha.setScalar(0),Va.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,n),Ha.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Va,r.x),a.addScaledVector(Ga,r.y),a.addScaledVector(Ha,r.z),a}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),Zn.subVectors(t,e),Tn.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Tn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;fs.subVectors(i,n),ps.subVectors(r,n),Ba.subVectors(t,n);let l=fs.dot(Ba),c=ps.dot(Ba);if(l<=0&&c<=0)return e.copy(n);ka.subVectors(t,i);let h=fs.dot(ka),u=ps.dot(ka);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(fs,a);za.subVectors(t,r);let f=fs.dot(za),g=ps.dot(za);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ps,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Kh.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Kh,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(fs,a).addScaledVector(ps,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Wa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ht.workingColorSpace){if(t=Cp(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Wa(a,r,t+1/3),this.g=Wa(a,r,t),this.b=Wa(a,r,t-1/3)}return Ht.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=Zu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Ht.fromWorkingColorSpace(qe.copy(this),t),Math.round(Ye(qe.r*255,0,255))*65536+Math.round(Ye(qe.g*255,0,255))*256+Math.round(Ye(qe.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,r=qe.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Oe){Ht.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Yr);let n=Aa(hi.h,Yr.h,e),i=Aa(hi.s,Yr.s,e),r=Aa(hi.l,Yr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new tt;tt.NAMES=Zu;var Gp=0,Fn=class extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=gi(),this.name="",this.blending=pi,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Lt=class extends Fn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pe,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new C,$r=new vt,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vl&&(t.usage=this.usage),t}};var Ao=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Co=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Rt=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hp=0,gn=new ie,Xa=new Le,ms=new C,on=new ni,nr=new ni,Ue=new C,Wt=class s extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($u(t)?Co:Ao)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(on.min,nr.min),on.expandByPoint(Ue),Ue.addVectors(on.max,nr.max),on.expandByPoint(Ue)):(on.expandByPoint(nr.min),on.expandByPoint(nr.max))}on.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(t,c),Ue.add(ms)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new C,l[L]=new C;let c=new C,h=new C,u=new C,d=new vt,f=new vt,g=new vt,x=new C,m=new C;function p(L,b,_){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[L].add(x),o[b].add(x),o[_].add(x),l[L].add(m),l[b].add(m),l[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let L=0,b=S.length;L<b;++L){let _=S[L],I=_.start,X=_.count;for(let B=I,O=I+X;B<O;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let T=new C,y=new C,P=new C,w=new C;function R(L){P.fromBufferAttribute(i,L),w.copy(P);let b=o[L];T.copy(b),T.sub(P.multiplyScalar(P.dot(b))).normalize(),y.crossVectors(w,b);let I=y.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,I)}for(let L=0,b=S.length;L<b;++L){let _=S[L],I=_.start,X=_.count;for(let B=I,O=I+X;B<O;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jh=new ie,Ui=new wo,Zr=new yi,Qh=new C,Jr=new C,Kr=new C,jr=new C,qa=new C,Qr=new C,tu=new C,to=new C,j=class extends Le{constructor(t=new Wt,e=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(qa.fromBufferAttribute(u,t),a?Qr.addScaledVector(qa,h):Qr.addScaledVector(qa.sub(e),h))}e.add(Qr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(Zr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Zr,Qh)===null||Ui.origin.distanceToSquared(Qh)>(t.far-t.near)**2))&&(jh.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(jh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,P=T;y<P;y+=3){let w=o.getX(y),R=o.getX(y+1),L=o.getX(y+2);i=eo(this,p,t,n,c,h,u,w,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);i=eo(this,a,t,n,c,h,u,S,T,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,P=T;y<P;y+=3){let w=y,R=y+1,L=y+2;i=eo(this,p,t,n,c,h,u,w,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=m,T=m+1,y=m+2;i=eo(this,a,t,n,c,h,u,S,T,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Wp(s,t,e,n,i,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===xi,o),l===null)return null;to.copy(o),to.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(to);return c<e.near||c>e.far?null:{distance:c,point:to.clone(),object:s}}function eo(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Jr),s.getVertexPosition(l,Kr),s.getVertexPosition(c,jr);let h=Wp(s,t,e,n,Jr,Kr,jr,tu);if(h){let u=new C;fi.getBarycoord(tu,Jr,Kr,jr,u),i&&(h.uv=fi.getInterpolatedAttribute(i,o,l,c,u,new vt)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,l,c,u,new vt)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};fi.getNormal(Jr,Kr,jr,d.normal),h.face=d,h.barycoord=u}return h}var me=class s extends Wt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2));function g(x,m,p,S,T,y,P,w,R,L,b){let _=y/R,I=P/L,X=y/2,B=P/2,O=w/2,W=R+1,G=L+1,K=0,z=0,et=new C;for(let at=0;at<G;at++){let xt=at*I-B;for(let Vt=0;Vt<W;Vt++){let ce=Vt*_-X;et[x]=ce*S,et[m]=xt*T,et[p]=O,c.push(et.x,et.y,et.z),et[x]=0,et[m]=0,et[p]=w>0?1:-1,h.push(et.x,et.y,et.z),u.push(Vt/R),u.push(1-at/L),K+=1}}for(let at=0;at<L;at++)for(let xt=0;xt<R;xt++){let Vt=d+xt+W*at,ce=d+xt+W*(at+1),$=d+(xt+1)+W*(at+1),st=d+(xt+1)+W*at;l.push(Vt,ce,st),l.push(ce,$,st),z+=6}o.addGroup(f,z,b),f+=z,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ds(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(s){let t={};for(let e=0;e<s.length;e++){let n=Ds(s[e]);for(let i in n)t[i]=n[i]}return t}function Xp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ju(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var bi={clone:Ds,merge:Ke},qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ye=class extends Fn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ro=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new C,eu=new vt,nu=new vt,ze=class extends Ro{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,eu,nu),e.subVectors(nu,eu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,xs=1,Xl=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ze(gs,xs,t,e);i.layers=this.layers,this.add(i);let r=new ze(gs,xs,t,e);r.layers=this.layers,this.add(r);let a=new ze(gs,xs,t,e);a.layers=this.layers,this.add(a);let o=new ze(gs,xs,t,e);o.layers=this.layers,this.add(o);let l=new ze(gs,xs,t,e);l.layers=this.layers,this.add(l);let c=new ze(gs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Po=class extends tn{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ql=class extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Po(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new me(5,5,5),r=new ye({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:On});r.uniforms.tEquirect.value=e;let a=new j(i,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Nn),new Xl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Ya=new C,$p=new C,Zp=new Bt,jn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ya.subVectors(n,e).cross($p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zp.getNormalMatrix(t),i=this.coplanarPoint(Ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new yi,no=new C,fr=class{constructor(t=new jn,e=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],S=i[13],T=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+S).normalize(),n[3].setComponents(l-a,d-h,m-g,y-S).normalize(),n[4].setComponents(l-o,d-u,m-x,y-T).normalize(),e===Qn)n[5].setComponents(l+o,d+u,m+x,y+T).normalize();else if(e===_o)n[5].setComponents(o,u,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(no.x=i.normal.x>0?t.max.x:t.min.x,no.y=i.normal.y>0?t.max.y:t.min.y,no.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ku(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Jp(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Kt=class s extends Wt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let S=p*d-a;for(let T=0;T<c;T++){let y=T*u-r;g.push(y,-S,0),x.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let T=S+c*p,y=S+c*(p+1),P=S+1+c*(p+1),w=S+1+c*p;f.push(T,y,w),f.push(y,P,w)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
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
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
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
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_m=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bm=`#ifdef USE_GRADIENTMAP
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
}`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,U0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vg=`#define PHONG
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
}`,yg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_g=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,bg=`#define TOON
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
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Tg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Cg=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Kp,alphahash_pars_fragment:jp,alphamap_fragment:Qp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:om,begin_vertex:am,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:xm,color_pars_vertex:vm,color_vertex:ym,common:_m,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:bm,displacementmap_pars_vertex:Sm,displacementmap_vertex:Tm,emissivemap_fragment:wm,emissivemap_pars_fragment:Em,colorspace_fragment:Am,colorspace_pars_fragment:Cm,envmap_fragment:Rm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Im,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Hm,envmap_vertex:Dm,fog_vertex:Nm,fog_pars_vertex:Um,fog_fragment:Om,fog_pars_fragment:Fm,gradientmap_pars_fragment:Bm,lightmap_pars_fragment:km,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Gm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:qm,lights_phong_pars_fragment:Ym,lights_physical_fragment:$m,lights_physical_pars_fragment:Zm,lights_fragment_begin:Jm,lights_fragment_maps:Km,lights_fragment_end:jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:o0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:x0,normal_vertex:v0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:S0,opaque_fragment:T0,packing:w0,premultiplied_alpha_fragment:E0,project_vertex:A0,dithering_fragment:C0,dithering_pars_fragment:R0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:N0,shadowmask_pars_fragment:U0,skinbase_vertex:O0,skinning_pars_vertex:F0,skinning_vertex:B0,skinnormal_vertex:k0,specularmap_fragment:z0,specularmap_pars_fragment:V0,tonemapping_fragment:G0,tonemapping_pars_fragment:H0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:q0,uv_pars_vertex:Y0,uv_vertex:$0,worldpos_vertex:Z0,background_vert:J0,background_frag:K0,backgroundCube_vert:j0,backgroundCube_frag:Q0,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:xg,meshphong_vert:vg,meshphong_frag:yg,meshphysical_vert:_g,meshphysical_frag:Mg,meshtoon_vert:bg,meshtoon_frag:Sg,points_vert:Tg,points_frag:wg,shadow_vert:Eg,shadow_frag:Ag,sprite_vert:Cg,sprite_frag:Rg},rt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ln={basic:{uniforms:Ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new tt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ke([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ke([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new tt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ke([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ke([rt.points,rt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ke([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ke([rt.common,rt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ke([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ke([rt.sprite,rt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ke([rt.common,rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ke([rt.lights,rt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ln.physical={uniforms:Ke([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var io={r:0,b:0,g:0},Fi=new pe,Pg=new ie;function Ig(s,t,e,n,i,r,a){let o=new tt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let T=S.isScene===!0?S.background:null;return T&&T.isTexture&&(T=(S.backgroundBlurriness>0?e:t).get(T)),T}function x(S){let T=!1,y=g(S);y===null?p(o,l):y&&y.isColor&&(p(y,1),T=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,T){let y=g(T);y&&(y.isCubeTexture||y.mapping===Vo)?(h===void 0&&(h=new j(new me(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:Ds(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fi.copy(T.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(Fi)),h.material.toneMapped=Ht.getTransfer(y.colorSpace)!==ee,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new j(new Kt(2,2),new ye({name:"BackgroundMaterial",uniforms:Ds(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,T){S.getRGB(io,Ju(s)),n.buffers.color.setClear(io.r,io.g,io.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:x,addToRenderList:m}}function Lg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(_,I,X,B,O){let W=!1,G=u(B,X,I);r!==G&&(r=G,c(r.object)),W=f(_,B,X,O),W&&g(_,B,X,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(_,I,X,B),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,I,X){let B=X.wireframe===!0,O=n[_.id];O===void 0&&(O={},n[_.id]=O);let W=O[I.id];W===void 0&&(W={},O[I.id]=W);let G=W[B];return G===void 0&&(G=d(l()),W[B]=G),G}function d(_){let I=[],X=[],B=[];for(let O=0;O<e;O++)I[O]=0,X[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:B,object:_,attributes:{},index:null}}function f(_,I,X,B){let O=r.attributes,W=I.attributes,G=0,K=X.getAttributes();for(let z in K)if(K[z].location>=0){let at=O[z],xt=W[z];if(xt===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor)),at===void 0||at.attribute!==xt||xt&&at.data!==xt.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(_,I,X,B){let O={},W=I.attributes,G=0,K=X.getAttributes();for(let z in K)if(K[z].location>=0){let at=W[z];at===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(at=_.instanceColor));let xt={};xt.attribute=at,at&&at.data&&(xt.data=at.data),O[z]=xt,G++}r.attributes=O,r.attributesNum=G,r.index=B}function x(){let _=r.newAttributes;for(let I=0,X=_.length;I<X;I++)_[I]=0}function m(_){p(_,0)}function p(_,I){let X=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;X[_]=1,B[_]===0&&(s.enableVertexAttribArray(_),B[_]=1),O[_]!==I&&(s.vertexAttribDivisor(_,I),O[_]=I)}function S(){let _=r.newAttributes,I=r.enabledAttributes;for(let X=0,B=I.length;X<B;X++)I[X]!==_[X]&&(s.disableVertexAttribArray(X),I[X]=0)}function T(_,I,X,B,O,W,G){G===!0?s.vertexAttribIPointer(_,I,X,O,W):s.vertexAttribPointer(_,I,X,B,O,W)}function y(_,I,X,B){x();let O=B.attributes,W=X.getAttributes(),G=I.defaultAttributeValues;for(let K in W){let z=W[K];if(z.location>=0){let et=O[K];if(et===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(et=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(et=_.instanceColor)),et!==void 0){let at=et.normalized,xt=et.itemSize,Vt=t.get(et);if(Vt===void 0)continue;let ce=Vt.buffer,$=Vt.type,st=Vt.bytesPerElement,bt=$===s.INT||$===s.UNSIGNED_INT||et.gpuType===wc;if(et.isInterleavedBufferAttribute){let ct=et.data,It=ct.stride,Ut=et.offset;if(ct.isInstancedInterleavedBuffer){for(let Gt=0;Gt<z.locationSize;Gt++)p(z.location+Gt,ct.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Gt=0;Gt<z.locationSize;Gt++)m(z.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let Gt=0;Gt<z.locationSize;Gt++)T(z.location+Gt,xt/z.locationSize,$,at,It*st,(Ut+xt/z.locationSize*Gt)*st,bt)}else{if(et.isInstancedBufferAttribute){for(let ct=0;ct<z.locationSize;ct++)p(z.location+ct,et.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ct=0;ct<z.locationSize;ct++)m(z.location+ct);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let ct=0;ct<z.locationSize;ct++)T(z.location+ct,xt/z.locationSize,$,at,xt*st,xt/z.locationSize*ct*st,bt)}}else if(G!==void 0){let at=G[K];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(z.location,at);break;case 3:s.vertexAttrib3fv(z.location,at);break;case 4:s.vertexAttrib4fv(z.location,at);break;default:s.vertexAttrib1fv(z.location,at)}}}}S()}function P(){L();for(let _ in n){let I=n[_];for(let X in I){let B=I[X];for(let O in B)h(B[O].object),delete B[O];delete I[X]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;let I=n[_.id];for(let X in I){let B=I[X];for(let O in B)h(B[O].object),delete B[O];delete I[X]}delete n[_.id]}function R(_){for(let I in n){let X=n[I];if(X[_.id]===void 0)continue;let B=X[_.id];for(let O in B)h(B[O].object),delete B[O];delete X[_.id]}}function L(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Dg(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ng(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==wn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let L=R===ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ei&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Un&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:P,maxSamples:w}}function Ug(s){let t=this,e=null,n=0,i=!1,r=!1,a=new jn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,T=S*4,y=p.clippingState||null;l.value=y,y=h(g,d,T,f);for(let P=0;P!==T;++P)y[P]=e[P];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=f;T!==x;++T,y+=4)a.copy(u[T]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Og(s){let t=new WeakMap;function e(a,o){return o===ul?a.mapping=Rs:o===dl&&(a.mapping=Ps),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ul||o===dl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ql(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ns=class extends Ro{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ts=4,iu=[.125,.215,.35,.446,.526,.582],Vi=20,$a=new Ns,su=new tt,Za=null,Ja=0,Ka=0,ja=!1,ki=(1+Math.sqrt(5))/2,vs=1/ki,ru=[new C(-ki,vs,0),new C(ki,vs,0),new C(-vs,0,ki),new C(vs,0,ki),new C(0,ki,-vs),new C(0,ki,vs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Us=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,Ja,Ka),this._renderer.xr.enabled=ja,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ln,format:wn,colorSpace:zs,depthBuffer:!1},i=ou(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=Bg(r,t,e)}return i}_compileMaterial(t){let e=new j(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,i){let o=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(su),h.toneMapping=mi,h.autoClear=!1;let f=new Lt({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new j(new me,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(su),x=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let T=this._cubeSize;so(i,S*T,p>2?T:0,T,T),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Rs||t.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new j(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;so(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$a)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ru[(i-r-1)%ru.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new j(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);let p=[],S=0;for(let R=0;R<Vi;++R){let L=R/x,b=Math.exp(-L*L/2);p.push(b),R===0?S+=b:R<m&&(S+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;let y=this._sizeLods[i],P=3*y*(i>T-Ts?i-T+Ts:0),w=4*(this._cubeSize-y);so(e,P,w,3*y,2*y),l.setRenderTarget(e),l.render(u,$a)}};function Fg(s){let t=[],e=[],n=[],i=s,r=s-Ts+1+iu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ts?l=iu[a-s+Ts-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),T=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,L=w>2?0:-1,b=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];S.set(b,x*g*w),T.set(d,m*g*w);let _=[w,w,w,w,w,w];y.set(_,p*g*w)}let P=new Wt;P.setAttribute("position",new Ce(S,x)),P.setAttribute("uv",new Ce(T,m)),P.setAttribute("faceIndex",new Ce(y,p)),t.push(P),i>Ts&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ou(s,t,e){let n=new Ve(s,t,e);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Bg(s,t,e){let n=new Float32Array(Vi),i=new C(0,1,0);return new ye({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function au(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function lu(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ul||l===dl,h=l===Rs||l===Ps;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Us(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Us(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function zg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vg(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let S=f.array;x=f.version;for(let T=0,y=S.length;T<y;T+=3){let P=S[T+0],w=S[T+1],R=S[T+2];d.push(P,w,w,R,R,P)}}else if(g!==void 0){let S=g.array;x=g.version;for(let T=0,y=S.length/3-1;T<y;T+=3){let P=T+0,w=T+1,R=T+2;d.push(P,w,w,R,R,P)}}else return;let m=new($u(d)?Co:Ao)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gg(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*x[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wg(s,t,e){let n=new WeakMap,i=new Ae;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let y=o.attributes.position.count*T,P=1;y>t.maxTextureSize&&(P=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*P*4*u),R=new To(w,y,P,u);R.type=Un,R.needsUpdate=!0;let L=T*4;for(let _=0;_<u;_++){let I=m[_],X=p[_],B=S[_],O=y*P*4*_;for(let W=0;W<I.count;W++){let G=W*L;f===!0&&(i.fromBufferAttribute(I,W),w[O+G+0]=i.x,w[O+G+1]=i.y,w[O+G+2]=i.z,w[O+G+3]=0),g===!0&&(i.fromBufferAttribute(X,W),w[O+G+4]=i.x,w[O+G+5]=i.y,w[O+G+6]=i.z,w[O+G+7]=0),x===!0&&(i.fromBufferAttribute(B,W),w[O+G+8]=i.x,w[O+G+9]=i.y,w[O+G+10]=i.z,w[O+G+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new vt(y,P)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Xg(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Io=class extends tn{constructor(t,e,n,i,r,a,o,l,c,h=ws){if(h!==ws&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ws&&(n=Wi),n===void 0&&h===Ls&&(n=Is),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ju=new tn,cu=new Io(1,1),Qu=new To,td=new Wl,ed=new Po,hu=[],uu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function Vs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=hu[i];if(r===void 0&&(r=new Float32Array(i),hu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ho(s,t){let e=uu[t];e===void 0&&(e=new Int32Array(t),uu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function qg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function $g(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function Zg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function Jg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;pu.set(n),s.uniformMatrix2fv(this.addr,!1,pu),Ne(e,n)}}function Kg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;fu.set(n),s.uniformMatrix3fv(this.addr,!1,fu),Ne(e,n)}}function jg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;du.set(n),s.uniformMatrix4fv(this.addr,!1,du),Ne(e,n)}}function Qg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function ix(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function sx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function ax(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(cu.compareFunction=Yu,r=cu):r=ju,e.setTexture2D(t||r,i)}function lx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||td,i)}function cx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ed,i)}function hx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qu,i)}function ux(s){switch(s){case 5126:return qg;case 35664:return Yg;case 35665:return $g;case 35666:return Zg;case 35674:return Jg;case 35675:return Kg;case 35676:return jg;case 5124:case 35670:return Qg;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(s,t){s.uniform1fv(this.addr,t)}function fx(s,t){let e=Vs(t,this.size,2);s.uniform2fv(this.addr,e)}function px(s,t){let e=Vs(t,this.size,3);s.uniform3fv(this.addr,e)}function mx(s,t){let e=Vs(t,this.size,4);s.uniform4fv(this.addr,e)}function gx(s,t){let e=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function xx(s,t){let e=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vx(s,t){let e=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function yx(s,t){s.uniform1iv(this.addr,t)}function _x(s,t){s.uniform2iv(this.addr,t)}function Mx(s,t){s.uniform3iv(this.addr,t)}function bx(s,t){s.uniform4iv(this.addr,t)}function Sx(s,t){s.uniform1uiv(this.addr,t)}function Tx(s,t){s.uniform2uiv(this.addr,t)}function wx(s,t){s.uniform3uiv(this.addr,t)}function Ex(s,t){s.uniform4uiv(this.addr,t)}function Ax(s,t,e){let n=this.cache,i=t.length,r=Ho(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ju,r[a])}function Cx(s,t,e){let n=this.cache,i=t.length,r=Ho(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||td,r[a])}function Rx(s,t,e){let n=this.cache,i=t.length,r=Ho(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ed,r[a])}function Px(s,t,e){let n=this.cache,i=t.length,r=Ho(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Qu,r[a])}function Ix(s){switch(s){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return vx;case 5124:case 35670:return yx;case 35667:case 35671:return _x;case 35668:case 35672:return Mx;case 35669:case 35673:return bx;case 5125:return Sx;case 36294:return Tx;case 36295:return wx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Px}}var Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}},$l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ix(e.type)}},Zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Qa=/(\w+)(\])?(\[|\.)?/g;function mu(s,t){s.seq.push(t),s.map[t.id]=t}function Lx(s,t,e){let n=s.name,i=n.length;for(Qa.lastIndex=0;;){let r=Qa.exec(n),a=Qa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){mu(e,c===void 0?new Yl(o,s,t):new $l(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Zl(o),mu(e,u)),e=u}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Lx(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function gu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Dx=37297,Nx=0;function Ux(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var xu=new Bt;function Ox(s){Ht._getMatrix(xu,Ht.workingColorSpace,s);let t=`mat3( ${xu.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(s)){case Go:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function vu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ux(s.getShaderSource(t),a)}else return i}function Fx(s,t){let e=Ox(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bx(s,t){let e;switch(t){case _c:e="Linear";break;case Mc:e="Reinhard";break;case bc:e="Cineon";break;case yr:e="ACESFilmic";break;case Sc:e="AgX";break;case Tc:e="Neutral";break;case gp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ro=new C;function kx(){Ht.getLuminanceCoefficients(ro);let s=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function Vx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function cr(s){return s!==""}function yu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _u(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(s){return s.replace(Hx,Xx)}var Wx=new Map;function Xx(s,t){let e=zt[t];if(e===void 0){let n=Wx.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}var qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(s){return s.replace(qx,Yx)}function Yx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $x(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case Ps:t="ENVMAP_TYPE_CUBE";break;case Vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jx(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ps&&(t="ENVMAP_MODE_REFRACTION"),t}function Kx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yc:t="ENVMAP_BLENDING_MULTIPLY";break;case pp:t="ENVMAP_BLENDING_MIX";break;case mp:t="ENVMAP_BLENDING_ADD";break}return t}function jx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qx(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=$x(e),c=Zx(e),h=Jx(e),u=Kx(e),d=jx(e),f=zx(e),g=Vx(r),x=i.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`)):(m=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),p=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?zt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Fx("linearToOutputTexel",e.outputColorSpace),kx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),a=Jl(a),a=yu(a,e),a=_u(a,e),o=Jl(o),o=yu(o,e),o=_u(o,e),a=Mu(a),o=Mu(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=S+m+a,y=S+p+o,P=gu(i,i.VERTEX_SHADER,T),w=gu(i,i.FRAGMENT_SHADER,y);i.attachShader(x,P),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(I){if(s.debug.checkShaderErrors){let X=i.getProgramInfoLog(x).trim(),B=i.getShaderInfoLog(P).trim(),O=i.getShaderInfoLog(w).trim(),W=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,w);else{let K=vu(i,P,"vertex"),z=vu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+K+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(B===""||O==="")&&(G=!1);G&&(I.diagnostics={runnable:W,programLog:X,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(P),i.deleteShader(w),L=new As(i,x),b=Gx(i,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,Dx)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=w,this}var tv=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jl(t),e.set(t,n)),n}},jl=class{constructor(t){this.id=tv++,this.code=t,this.usedTimes=0}};function ev(s,t,e,n,i,r,a){let o=new Eo,l=new Kl,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,_,I,X,B){let O=X.fog,W=B.geometry,G=b.isMeshStandardMaterial?X.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),z=K&&K.mapping===Vo?K.image.height:null,et=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xt=at!==void 0?at.length:0,Vt=0;W.morphAttributes.position!==void 0&&(Vt=1),W.morphAttributes.normal!==void 0&&(Vt=2),W.morphAttributes.color!==void 0&&(Vt=3);let ce,$,st,bt;if(et){let ne=Ln[et];ce=ne.vertexShader,$=ne.fragmentShader}else ce=b.vertexShader,$=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),bt=l.getFragmentShaderID(b);let ct=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),Ut=B.isInstancedMesh===!0,Gt=B.isBatchedMesh===!0,be=!!b.map,Zt=!!b.matcap,Re=!!K,F=!!b.aoMap,pn=!!b.lightMap,Xt=!!b.bumpMap,qt=!!b.normalMap,Ct=!!b.displacementMap,ge=!!b.emissiveMap,Et=!!b.metalnessMap,E=!!b.roughnessMap,v=b.anisotropy>0,k=b.clearcoat>0,Z=b.dispersion>0,Q=b.iridescence>0,Y=b.sheen>0,St=b.transmission>0,ht=v&&!!b.anisotropyMap,pt=k&&!!b.clearcoatMap,Jt=k&&!!b.clearcoatNormalMap,nt=k&&!!b.clearcoatRoughnessMap,mt=Q&&!!b.iridescenceMap,Pt=Q&&!!b.iridescenceThicknessMap,Dt=Y&&!!b.sheenColorMap,gt=Y&&!!b.sheenRoughnessMap,Yt=!!b.specularMap,kt=!!b.specularColorMap,de=!!b.specularIntensityMap,D=St&&!!b.transmissionMap,lt=St&&!!b.thicknessMap,q=!!b.gradientMap,J=!!b.alphaMap,ft=b.alphaTest>0,ut=!!b.alphaHash,Ot=!!b.extensions,Ee=mi;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ee=s.toneMapping);let We={shaderID:et,shaderType:b.type,shaderName:b.name,vertexShader:ce,fragmentShader:$,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:bt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Gt,batchingColor:Gt&&B._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&B.instanceColor!==null,instancingMorph:Ut&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:zs,alphaToCoverage:!!b.alphaToCoverage,map:be,matcap:Zt,envMap:Re,envMapMode:Re&&K.mapping,envMapCubeUVHeight:z,aoMap:F,lightMap:pn,bumpMap:Xt,normalMap:qt,displacementMap:d&&Ct,emissiveMap:ge,normalMapObjectSpace:qt&&b.normalMapType===_p,normalMapTangentSpace:qt&&b.normalMapType===Lc,metalnessMap:Et,roughnessMap:E,anisotropy:v,anisotropyMap:ht,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:nt,dispersion:Z,iridescence:Q,iridescenceMap:mt,iridescenceThicknessMap:Pt,sheen:Y,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:Yt,specularColorMap:kt,specularIntensityMap:de,transmission:St,transmissionMap:D,thicknessMap:lt,gradientMap:q,opaque:b.transparent===!1&&b.blending===pi&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ut,combine:b.combine,mapUv:be&&x(b.map.channel),aoMapUv:F&&x(b.aoMap.channel),lightMapUv:pn&&x(b.lightMap.channel),bumpMapUv:Xt&&x(b.bumpMap.channel),normalMapUv:qt&&x(b.normalMap.channel),displacementMapUv:Ct&&x(b.displacementMap.channel),emissiveMapUv:ge&&x(b.emissiveMap.channel),metalnessMapUv:Et&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:ht&&x(b.anisotropyMap.channel),clearcoatMapUv:pt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(b.sheenRoughnessMap.channel),specularMapUv:Yt&&x(b.specularMap.channel),specularColorMapUv:kt&&x(b.specularColorMap.channel),specularIntensityMapUv:de&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:lt&&x(b.thicknessMap.channel),alphaMapUv:J&&x(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(qt||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(be||J),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Vt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:be&&b.map.isVideoTexture===!0&&Ht.getTransfer(b.map.colorSpace)===ee,decodeVideoTextureEmissive:ge&&b.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(b.emissiveMap.colorSpace)===ee,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===oe,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function p(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)_.push(I),_.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(S(_,b),T(_,b),_.push(s.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function S(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function T(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){let _=g[b.type],I;if(_){let X=Ln[_];I=bi.clone(X.uniforms)}else I=b.uniforms;return I}function P(b,_){let I;for(let X=0,B=h.length;X<B;X++){let O=h[X];if(O.cacheKey===_){I=O,++I.usedTimes;break}}return I===void 0&&(I=new Qx(s,_,b,r),h.push(I)),I}function w(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:L}}function nv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function iv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Su(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Tu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||iv),n.length>1&&n.sort(d||Su),i.length>1&&i.sort(d||Su)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function sv(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Tu,s.set(n,[a])):i>=r.length?(a=new Tu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function rv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new tt};break;case"SpotLight":e={position:new C,direction:new C,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function ov(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var av=0;function lv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cv(s){let t=new rv,e=ov(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let i=new C,r=new ie,a=new ie;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,T=0,y=0,P=0,w=0,R=0;c.sort(lv);for(let b=0,_=c.length;b<_;b++){let I=c[b],X=I.color,B=I.intensity,O=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=X.r*B,u+=X.g*B,d+=X.b*B;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],B);R++}else if(I.isDirectionalLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,z=e.get(I);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=I.shadow.matrix,S++}n.directional[f]=G,f++}else if(I.isSpotLight){let G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(X).multiplyScalar(B),G.distance=O,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[x]=G;let K=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,K.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[x]=K.matrix,I.castShadow){let z=e.get(I);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=W,y++}x++}else if(I.isRectAreaLight){let G=t.get(I);G.color.copy(X).multiplyScalar(B),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let K=I.shadow,z=e.get(I);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=I.shadow.matrix,T++}n.point[g]=G,g++}else if(I.isHemisphereLight){let G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(B),G.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==S||L.numPointShadows!==T||L.numSpotShadows!==y||L.numSpotMaps!==P||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=S,L.numPointShadows=T,L.numSpotShadows=y,L.numSpotMaps=P,L.numLightProbes=R,n.version=av++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let T=c[p];if(T.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(T.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(T.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function wu(s){let t=new cv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function hv(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new wu(s),t.set(i,[o])):r>=a.length?(o=new wu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ql=class extends Fn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tc=class extends Fn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fv(s,t,e){let n=new fr,i=new vt,r=new vt,a=new Ae,o=new Ql({depthPacking:yp}),l=new tc,c={},h=e.maxTextureSize,u={[xi]:Fe,[Fe]:xi,[oe]:oe},d=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:uv,fragmentShader:dv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Wt;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new j(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let p=this.type;this.render=function(w,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),_=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),X=s.state;X.setBlending(On),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let B=p!==Kn&&this.type===Kn,O=p===Kn&&this.type!==Kn;for(let W=0,G=w.length;W<G;W++){let K=w[W],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let et=z.getFrameExtents();if(i.multiply(et),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,z.mapSize.y=r.y)),z.map===null||B===!0||O===!0){let xt=this.type!==Kn?{minFilter:an,magFilter:an}:{};z.map!==null&&z.map.dispose(),z.map=new Ve(i.x,i.y,xt),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let at=z.getViewportCount();for(let xt=0;xt<at;xt++){let Vt=z.getViewport(xt);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),X.viewport(a),z.updateMatrices(K,xt),n=z.getFrustum(),y(R,L,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===Kn&&S(z,L),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,_,I)};function S(w,R){let L=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ve(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,L,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,L,f,x,null)}function T(w,R,L,b){let _=null,I=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)_=I;else if(_=L.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let X=_.uuid,B=R.uuid,O=c[X];O===void 0&&(O={},c[X]=O);let W=O[B];W===void 0&&(W=_.clone(),O[B]=W,R.addEventListener("dispose",P)),_=W}if(_.visible=R.visible,_.wireframe=R.wireframe,b===Kn?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:u[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let X=s.properties.get(_);X.light=L}return _}function y(w,R,L,b,_){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);let B=t.update(w),O=w.material;if(Array.isArray(O)){let W=B.groups;for(let G=0,K=W.length;G<K;G++){let z=W[G],et=O[z.materialIndex];if(et&&et.visible){let at=T(w,et,b,_);w.onBeforeShadow(s,w,R,L,B,at,z),s.renderBufferDirect(L,null,B,at,w,z),w.onAfterShadow(s,w,R,L,B,at,z)}}}else if(O.visible){let W=T(w,O,b,_);w.onBeforeShadow(s,w,R,L,B,W,null),s.renderBufferDirect(L,null,B,W,w,null),w.onAfterShadow(s,w,R,L,B,W,null)}}let X=w.children;for(let B=0,O=X.length;B<O;B++)y(X[B],R,L,b,_)}function P(w){w.target.removeEventListener("dispose",P);for(let L in c){let b=c[L],_=w.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var pv={[sl]:rl,[ol]:cl,[al]:hl,[Cs]:ll,[rl]:sl,[cl]:ol,[hl]:al,[ll]:Cs};function mv(s,t){function e(){let D=!1,lt=new Ae,q=null,J=new Ae(0,0,0,0);return{setMask:function(ft){q!==ft&&!D&&(s.colorMask(ft,ft,ft,ft),q=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ut,Ot,Ee,We){We===!0&&(ft*=Ee,ut*=Ee,Ot*=Ee),lt.set(ft,ut,Ot,Ee),J.equals(lt)===!1&&(s.clearColor(ft,ut,Ot,Ee),J.copy(lt))},reset:function(){D=!1,q=null,J.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,q=null,J=null,ft=null;return{setReversed:function(ut){if(lt!==ut){let Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let Ee=ft;ft=null,this.setClear(Ee)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?ct(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(ut){q!==ut&&!D&&(s.depthMask(ut),q=ut)},setFunc:function(ut){if(lt&&(ut=pv[ut]),J!==ut){switch(ut){case sl:s.depthFunc(s.NEVER);break;case rl:s.depthFunc(s.ALWAYS);break;case ol:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case al:s.depthFunc(s.EQUAL);break;case ll:s.depthFunc(s.GEQUAL);break;case cl:s.depthFunc(s.GREATER);break;case hl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ft!==ut&&(lt&&(ut=1-ut),s.clearDepth(ut),ft=ut)},reset:function(){D=!1,q=null,J=null,ft=null,lt=!1}}}function i(){let D=!1,lt=null,q=null,J=null,ft=null,ut=null,Ot=null,Ee=null,We=null;return{setTest:function(ne){D||(ne?ct(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(ne){lt!==ne&&!D&&(s.stencilMask(ne),lt=ne)},setFunc:function(ne,_n,Wn){(q!==ne||J!==_n||ft!==Wn)&&(s.stencilFunc(ne,_n,Wn),q=ne,J=_n,ft=Wn)},setOp:function(ne,_n,Wn){(ut!==ne||Ot!==_n||Ee!==Wn)&&(s.stencilOp(ne,_n,Wn),ut=ne,Ot=_n,Ee=Wn)},setLocked:function(ne){D=ne},setClear:function(ne){We!==ne&&(s.clearStencil(ne),We=ne)},reset:function(){D=!1,lt=null,q=null,J=null,ft=null,ut=null,Ot=null,Ee=null,We=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,T=null,y=null,P=null,w=null,R=new tt(0,0,0),L=0,b=!1,_=null,I=null,X=null,B=null,O=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=K>=2);let et=null,at={},xt=s.getParameter(s.SCISSOR_BOX),Vt=s.getParameter(s.VIEWPORT),ce=new Ae().fromArray(xt),$=new Ae().fromArray(Vt);function st(D,lt,q,J){let ft=new Uint8Array(4),ut=s.createTexture();s.bindTexture(D,ut),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<q;Ot++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(lt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return ut}let bt={};bt[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(s.DEPTH_TEST),a.setFunc(Cs),Xt(!1),qt(Rh),ct(s.CULL_FACE),F(On);function ct(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function It(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ut(D,lt){return u[D]!==lt?(s.bindFramebuffer(D,lt),u[D]=lt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Gt(D,lt){let q=f,J=!1;if(D){q=d.get(lt),q===void 0&&(q=[],d.set(lt,q));let ft=D.textures;if(q.length!==ft.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Ot=ft.length;ut<Ot;ut++)q[ut]=s.COLOR_ATTACHMENT0+ut;q.length=ft.length,J=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,J=!0);J&&s.drawBuffers(q)}function be(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let Zt={[zi]:s.FUNC_ADD,[Kf]:s.FUNC_SUBTRACT,[jf]:s.FUNC_REVERSE_SUBTRACT};Zt[Qf]=s.MIN,Zt[tp]=s.MAX;let Re={[ep]:s.ZERO,[np]:s.ONE,[ip]:s.SRC_COLOR,[nl]:s.SRC_ALPHA,[cp]:s.SRC_ALPHA_SATURATE,[ap]:s.DST_COLOR,[rp]:s.DST_ALPHA,[sp]:s.ONE_MINUS_SRC_COLOR,[il]:s.ONE_MINUS_SRC_ALPHA,[lp]:s.ONE_MINUS_DST_COLOR,[op]:s.ONE_MINUS_DST_ALPHA,[hp]:s.CONSTANT_COLOR,[up]:s.ONE_MINUS_CONSTANT_COLOR,[dp]:s.CONSTANT_ALPHA,[fp]:s.ONE_MINUS_CONSTANT_ALPHA};function F(D,lt,q,J,ft,ut,Ot,Ee,We,ne){if(D===On){x===!0&&(It(s.BLEND),x=!1);return}if(x===!1&&(ct(s.BLEND),x=!0),D!==Jf){if(D!==m||ne!==b){if((p!==zi||y!==zi)&&(s.blendEquation(s.FUNC_ADD),p=zi,y=zi),ne)switch(D){case pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $t:s.blendFunc(s.ONE,s.ONE);break;case Ph:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $t:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ph:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ih:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,T=null,P=null,w=null,R.set(0,0,0),L=0,m=D,b=ne}return}ft=ft||lt,ut=ut||q,Ot=Ot||J,(lt!==p||ft!==y)&&(s.blendEquationSeparate(Zt[lt],Zt[ft]),p=lt,y=ft),(q!==S||J!==T||ut!==P||Ot!==w)&&(s.blendFuncSeparate(Re[q],Re[J],Re[ut],Re[Ot]),S=q,T=J,P=ut,w=Ot),(Ee.equals(R)===!1||We!==L)&&(s.blendColor(Ee.r,Ee.g,Ee.b,We),R.copy(Ee),L=We),m=D,b=!1}function pn(D,lt){D.side===oe?It(s.CULL_FACE):ct(s.CULL_FACE);let q=D.side===Fe;lt&&(q=!q),Xt(q),D.blending===pi&&D.transparent===!1?F(On):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){_!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),_=D)}function qt(D){D!==Yf?(ct(s.CULL_FACE),D!==I&&(D===Rh?s.cullFace(s.BACK):D===$f?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),I=D}function Ct(D){D!==X&&(G&&s.lineWidth(D),X=D)}function ge(D,lt,q){D?(ct(s.POLYGON_OFFSET_FILL),(B!==lt||O!==q)&&(s.polygonOffset(lt,q),B=lt,O=q)):It(s.POLYGON_OFFSET_FILL)}function Et(D){D?ct(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function E(D){D===void 0&&(D=s.TEXTURE0+W-1),et!==D&&(s.activeTexture(D),et=D)}function v(D,lt,q){q===void 0&&(et===null?q=s.TEXTURE0+W-1:q=et);let J=at[q];J===void 0&&(J={type:void 0,texture:void 0},at[q]=J),(J.type!==D||J.texture!==lt)&&(et!==q&&(s.activeTexture(q),et=q),s.bindTexture(D,lt||bt[D]),J.type=D,J.texture=lt)}function k(){let D=at[et];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(D){ce.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function gt(D){$.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Yt(D,lt){let q=c.get(lt);q===void 0&&(q=new WeakMap,c.set(lt,q));let J=q.get(D);J===void 0&&(J=s.getUniformBlockIndex(lt,D.name),q.set(D,J))}function kt(D,lt){let J=c.get(lt).get(D);l.get(lt)!==J&&(s.uniformBlockBinding(lt,J,D.__bindingPointIndex),l.set(lt,J))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},et=null,at={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,T=null,y=null,P=null,w=null,R=new tt(0,0,0),L=0,b=!1,_=null,I=null,X=null,B=null,O=null,ce.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:It,bindFramebuffer:Ut,drawBuffers:Gt,useProgram:be,setBlending:F,setMaterial:pn,setFlipSided:Xt,setCullFace:qt,setLineWidth:Ct,setPolygonOffset:ge,setScissorTest:Et,activeTexture:E,bindTexture:v,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Pt,updateUBOMapping:Yt,uniformBlockBinding:kt,texStorage2D:Jt,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:pt,scissor:Dt,viewport:gt,reset:de}}function Eu(s,t,e,n){let i=gv(n);switch(e){case Vu:return s*t;case Hu:return s*t;case Wu:return s*t*2;case Cc:return s*t/i.components*i.byteLength;case Rc:return s*t/i.components*i.byteLength;case Xu:return s*t*2/i.components*i.byteLength;case Pc:return s*t*2/i.components*i.byteLength;case Gu:return s*t*3/i.components*i.byteLength;case wn:return s*t*4/i.components*i.byteLength;case Ic:return s*t*4/i.components*i.byteLength;case po:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case go:case xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ml:case xl:return Math.max(s,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(s,8)*Math.max(t,8)/2;case vl:case yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Il:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case vo:case Ul:case Ol:return Math.ceil(s/4)*Math.ceil(t/4)*16;case qu:case Fl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Bl:case kl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gv(s){switch(s){case ei:case Bu:return{byteLength:1,components:1};case dr:case ku:case ln:return{byteLength:2,components:1};case Ec:case Ac:return{byteLength:2,components:4};case Wi:case wc:case Un:return{byteLength:4,components:1};case zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function xv(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):bo("canvas")}function x(E,v,k){let Z=1,Q=Et(E);if((Q.width>k||Q.height>k)&&(Z=k/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor(Z*Q.width),St=Math.floor(Z*Q.height);u===void 0&&(u=g(Y,St));let ht=v?g(Y,St):u;return ht.width=Y,ht.height=St,ht.getContext("2d").drawImage(E,0,0,Y,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+St+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(E,v,k,Z,Q=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=v;if(v===s.RED&&(k===s.FLOAT&&(Y=s.R32F),k===s.HALF_FLOAT&&(Y=s.R16F),k===s.UNSIGNED_BYTE&&(Y=s.R8)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.R8UI),k===s.UNSIGNED_SHORT&&(Y=s.R16UI),k===s.UNSIGNED_INT&&(Y=s.R32UI),k===s.BYTE&&(Y=s.R8I),k===s.SHORT&&(Y=s.R16I),k===s.INT&&(Y=s.R32I)),v===s.RG&&(k===s.FLOAT&&(Y=s.RG32F),k===s.HALF_FLOAT&&(Y=s.RG16F),k===s.UNSIGNED_BYTE&&(Y=s.RG8)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RG8UI),k===s.UNSIGNED_SHORT&&(Y=s.RG16UI),k===s.UNSIGNED_INT&&(Y=s.RG32UI),k===s.BYTE&&(Y=s.RG8I),k===s.SHORT&&(Y=s.RG16I),k===s.INT&&(Y=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),k===s.UNSIGNED_INT&&(Y=s.RGB32UI),k===s.BYTE&&(Y=s.RGB8I),k===s.SHORT&&(Y=s.RGB16I),k===s.INT&&(Y=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),k===s.UNSIGNED_INT&&(Y=s.RGBA32UI),k===s.BYTE&&(Y=s.RGBA8I),k===s.SHORT&&(Y=s.RGBA16I),k===s.INT&&(Y=s.RGBA32I)),v===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),v===s.RGBA){let St=Q?Go:Ht.getTransfer(Z);k===s.FLOAT&&(Y=s.RGBA32F),k===s.HALF_FLOAT&&(Y=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Y=St===ee?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(E,v){let k;return E?v===null||v===Wi||v===Is?k=s.DEPTH24_STENCIL8:v===Un?k=s.DEPTH32F_STENCIL8:v===dr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wi||v===Is?k=s.DEPTH_COMPONENT24:v===Un?k=s.DEPTH_COMPONENT32F:v===dr&&(k=s.DEPTH_COMPONENT16),k}function P(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==an&&E.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function w(E){let v=E.target;v.removeEventListener("dispose",w),L(v),v.isVideoTexture&&h.delete(v)}function R(E){let v=E.target;v.removeEventListener("dispose",R),_(v)}function L(E){let v=n.get(E);if(v.__webglInit===void 0)return;let k=E.source,Z=d.get(k);if(Z){let Q=Z[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(E),Object.keys(Z).length===0&&d.delete(k)}n.remove(E)}function b(E){let v=n.get(E);s.deleteTexture(v.__webglTexture);let k=E.source,Z=d.get(k);delete Z[v.__cacheKey],a.memory.textures--}function _(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let Q=0;Q<v.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(v.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[Z]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=E.textures;for(let Z=0,Q=k.length;Z<Q;Z++){let Y=n.get(k[Z]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(k[Z])}n.remove(E)}let I=0;function X(){I=0}function B(){let E=I;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),I+=1,E}function O(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function W(E,v){let k=n.get(E);if(E.isVideoTexture&&Ct(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,E,v);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function G(E,v){let k=n.get(E);if(E.version>0&&k.__version!==E.version){$(k,E,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function K(E,v){let k=n.get(E);if(E.version>0&&k.__version!==E.version){$(k,E,v);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function z(E,v){let k=n.get(E);if(E.version>0&&k.__version!==E.version){st(k,E,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}let et={[ur]:s.REPEAT,[Gi]:s.CLAMP_TO_EDGE,[fl]:s.MIRRORED_REPEAT},at={[an]:s.NEAREST,[xp]:s.NEAREST_MIPMAP_NEAREST,[kr]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[Ta]:s.LINEAR_MIPMAP_NEAREST,[Hi]:s.LINEAR_MIPMAP_LINEAR},xt={[Mp]:s.NEVER,[Ap]:s.ALWAYS,[bp]:s.LESS,[Yu]:s.LEQUAL,[Sp]:s.EQUAL,[Ep]:s.GEQUAL,[Tp]:s.GREATER,[wp]:s.NOTEQUAL};function Vt(E,v){if(v.type===Un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Nn||v.magFilter===Ta||v.magFilter===kr||v.magFilter===Hi||v.minFilter===Nn||v.minFilter===Ta||v.minFilter===kr||v.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,et[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,et[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,et[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,at[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==kr&&v.minFilter!==Hi||v.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ce(E,v){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",w));let Z=v.source,Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));let Y=O(v);if(Y!==E.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[Y].usedTimes++;let St=Q[E.__cacheKey];St!==void 0&&(Q[E.__cacheKey].usedTimes--,St.usedTimes===0&&b(v)),E.__cacheKey=Y,E.__webglTexture=Q[Y].texture}return k}function $(E,v,k){let Z=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=s.TEXTURE_3D);let Q=ce(E,v),Y=v.source;e.bindTexture(Z,E.__webglTexture,s.TEXTURE0+k);let St=n.get(Y);if(Y.version!==St.__version||Q===!0){e.activeTexture(s.TEXTURE0+k);let ht=Ht.getPrimaries(Ht.workingColorSpace),pt=v.colorSpace===di?null:Ht.getPrimaries(v.colorSpace),Jt=v.colorSpace===di||ht===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let nt=x(v.image,!1,i.maxTextureSize);nt=ge(v,nt);let mt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type),Dt=T(v.internalFormat,mt,Pt,v.colorSpace,v.isVideoTexture);Vt(Z,v);let gt,Yt=v.mipmaps,kt=v.isVideoTexture!==!0,de=St.__version===void 0||Q===!0,D=Y.dataReady,lt=P(v,nt);if(v.isDepthTexture)Dt=y(v.format===Ls,v.type),de&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Dt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Dt,nt.width,nt.height,0,mt,Pt,null));else if(v.isDataTexture)if(Yt.length>0){kt&&de&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,Yt[0].width,Yt[0].height);for(let q=0,J=Yt.length;q<J;q++)gt=Yt[q],kt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Pt,gt.data):e.texImage2D(s.TEXTURE_2D,q,Dt,gt.width,gt.height,0,mt,Pt,gt.data);v.generateMipmaps=!1}else kt?(de&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,nt.width,nt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,Pt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,nt.width,nt.height,0,mt,Pt,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Dt,Yt[0].width,Yt[0].height,nt.depth);for(let q=0,J=Yt.length;q<J;q++)if(gt=Yt[q],v.format!==wn)if(mt!==null)if(kt){if(D)if(v.layerUpdates.size>0){let ft=Eu(gt.width,gt.height,v.format,v.type);for(let ut of v.layerUpdates){let Ot=gt.data.subarray(ut*ft/gt.data.BYTES_PER_ELEMENT,(ut+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,ut,gt.width,gt.height,1,mt,Ot)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Dt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,nt.depth,mt,Pt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Dt,gt.width,gt.height,nt.depth,0,mt,Pt,gt.data)}else{kt&&de&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,Yt[0].width,Yt[0].height);for(let q=0,J=Yt.length;q<J;q++)gt=Yt[q],v.format!==wn?mt!==null?kt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Pt,gt.data):e.texImage2D(s.TEXTURE_2D,q,Dt,gt.width,gt.height,0,mt,Pt,gt.data)}else if(v.isDataArrayTexture)if(kt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Dt,nt.width,nt.height,nt.depth),D)if(v.layerUpdates.size>0){let q=Eu(nt.width,nt.height,v.format,v.type);for(let J of v.layerUpdates){let ft=nt.data.subarray(J*q/nt.data.BYTES_PER_ELEMENT,(J+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,mt,Pt,ft)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,Pt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,nt.width,nt.height,nt.depth,0,mt,Pt,nt.data);else if(v.isData3DTexture)kt?(de&&e.texStorage3D(s.TEXTURE_3D,lt,Dt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,Pt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,nt.width,nt.height,nt.depth,0,mt,Pt,nt.data);else if(v.isFramebufferTexture){if(de)if(kt)e.texStorage2D(s.TEXTURE_2D,lt,Dt,nt.width,nt.height);else{let q=nt.width,J=nt.height;for(let ft=0;ft<lt;ft++)e.texImage2D(s.TEXTURE_2D,ft,Dt,q,J,0,mt,Pt,null),q>>=1,J>>=1}}else if(Yt.length>0){if(kt&&de){let q=Et(Yt[0]);e.texStorage2D(s.TEXTURE_2D,lt,Dt,q.width,q.height)}for(let q=0,J=Yt.length;q<J;q++)gt=Yt[q],kt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,mt,Pt,gt):e.texImage2D(s.TEXTURE_2D,q,Dt,mt,Pt,gt);v.generateMipmaps=!1}else if(kt){if(de){let q=Et(nt);e.texStorage2D(s.TEXTURE_2D,lt,Dt,q.width,q.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Pt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Dt,mt,Pt,nt);m(v)&&p(Z),St.__version=Y.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function st(E,v,k){if(v.image.length!==6)return;let Z=ce(E,v),Q=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+k);let Y=n.get(Q);if(Q.version!==Y.__version||Z===!0){e.activeTexture(s.TEXTURE0+k);let St=Ht.getPrimaries(Ht.workingColorSpace),ht=v.colorSpace===di?null:Ht.getPrimaries(v.colorSpace),pt=v.colorSpace===di||St===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Jt=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!Jt&&!nt?mt[J]=x(v.image[J],!0,i.maxCubemapSize):mt[J]=nt?v.image[J].image:v.image[J],mt[J]=ge(v,mt[J]);let Pt=mt[0],Dt=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),Yt=T(v.internalFormat,Dt,gt,v.colorSpace),kt=v.isVideoTexture!==!0,de=Y.__version===void 0||Z===!0,D=Q.dataReady,lt=P(v,Pt);Vt(s.TEXTURE_CUBE_MAP,v);let q;if(Jt){kt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Yt,Pt.width,Pt.height);for(let J=0;J<6;J++){q=mt[J].mipmaps;for(let ft=0;ft<q.length;ft++){let ut=q[ft];v.format!==wn?Dt!==null?kt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Dt,gt,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Yt,ut.width,ut.height,0,Dt,gt,ut.data)}}}else{if(q=v.mipmaps,kt&&de){q.length>0&&lt++;let J=Et(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Yt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Dt,gt,mt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,mt[J].width,mt[J].height,0,Dt,gt,mt[J].data);for(let ft=0;ft<q.length;ft++){let Ot=q[ft].image[J].image;kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Ot.width,Ot.height,Dt,gt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Yt,Ot.width,Ot.height,0,Dt,gt,Ot.data)}}else{kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,gt,mt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,Dt,gt,mt[J]);for(let ft=0;ft<q.length;ft++){let ut=q[ft];kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Dt,gt,ut.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Yt,Dt,gt,ut.image[J])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),Y.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function bt(E,v,k,Z,Q,Y){let St=r.convert(k.format,k.colorSpace),ht=r.convert(k.type),pt=T(k.internalFormat,St,ht,k.colorSpace),Jt=n.get(v),nt=n.get(k);if(nt.__renderTarget=v,!Jt.__hasExternalTextures){let mt=Math.max(1,v.width>>Y),Pt=Math.max(1,v.height>>Y);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,pt,mt,Pt,v.depth,0,St,ht,null):e.texImage2D(Q,Y,pt,mt,Pt,0,St,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),qt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,nt.__webglTexture,0,Xt(v)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,nt.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(E,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){let Z=v.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,Y=y(v.stencilBuffer,Q),St=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Xt(v);qt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Y,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Y,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Y,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,E)}else{let Z=v.textures;for(let Q=0;Q<Z.length;Q++){let Y=Z[Q],St=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),pt=T(Y.internalFormat,St,ht,Y.colorSpace),Jt=Xt(v);k&&qt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,pt,v.width,v.height):qt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,pt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,pt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);let Q=Z.__webglTexture,Y=Xt(v);if(v.depthTexture.format===ws)qt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Ls)qt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ut(E){let v=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let Z=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");It(v.__webglFramebuffer,E)}else if(k){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=s.createRenderbuffer(),ct(v.__webglDepthbuffer[Z],E,!1);else{let Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ct(v.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(E,v,k){let Z=n.get(E);v!==void 0&&bt(Z.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ut(E)}function be(E){let v=E.texture,k=n.get(E),Z=n.get(v);E.addEventListener("dispose",R);let Q=E.textures,Y=E.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=v.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let pt=0;pt<v.mipmaps.length;pt++)k.__webglFramebuffer[ht][pt]=s.createFramebuffer()}else k.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)k.__webglFramebuffer[ht]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(St)for(let ht=0,pt=Q.length;ht<pt;ht++){let Jt=n.get(Q[ht]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&qt(E)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){let pt=Q[ht];k.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);let Jt=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),mt=T(pt.internalFormat,Jt,nt,pt.colorSpace,E.isXRRenderTarget===!0),Pt=Xt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,mt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)bt(k.__webglFramebuffer[ht][pt],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else bt(k.__webglFramebuffer[ht],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ht=0,pt=Q.length;ht<pt;ht++){let Jt=Q[ht],nt=n.get(Jt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Vt(s.TEXTURE_2D,Jt),bt(k.__webglFramebuffer,E,Jt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,Z.__webglTexture),Vt(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)bt(k.__webglFramebuffer[pt],E,v,s.COLOR_ATTACHMENT0,ht,pt);else bt(k.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,ht,0);m(v)&&p(ht),e.unbindTexture()}E.depthBuffer&&Ut(E)}function Zt(E){let v=E.textures;for(let k=0,Z=v.length;k<Z;k++){let Q=v[k];if(m(Q)){let Y=S(E),St=n.get(Q).__webglTexture;e.bindTexture(Y,St),p(Y),e.unbindTexture()}}}let Re=[],F=[];function pn(E){if(E.samples>0){if(qt(E)===!1){let v=E.textures,k=E.width,Z=E.height,Q=s.COLOR_BUFFER_BIT,Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(E),ht=v.length>1;if(ht)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);let Jt=n.get(v[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,k,Z,0,0,k,Z,Q,s.NEAREST),l===!0&&(Re.length=0,F.length=0,Re.push(s.COLOR_ATTACHMENT0+pt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Re.push(Y),F.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);let Jt=n.get(v[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Xt(E){return Math.min(i.maxSamples,E.samples)}function qt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ct(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function ge(E,v){let k=E.colorSpace,Z=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==zs&&k!==di&&(Ht.getTransfer(k)===ee?(Z!==wn||Q!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=Gt,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=qt}function vv(s,t){function e(n,i=di){let r,a=Ht.getTransfer(i);if(n===ei)return s.UNSIGNED_BYTE;if(n===Ec)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ac)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bu)return s.BYTE;if(n===ku)return s.SHORT;if(n===dr)return s.UNSIGNED_SHORT;if(n===wc)return s.INT;if(n===Wi)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===ln)return s.HALF_FLOAT;if(n===Vu)return s.ALPHA;if(n===Gu)return s.RGB;if(n===wn)return s.RGBA;if(n===Hu)return s.LUMINANCE;if(n===Wu)return s.LUMINANCE_ALPHA;if(n===ws)return s.DEPTH_COMPONENT;if(n===Ls)return s.DEPTH_STENCIL;if(n===Cc)return s.RED;if(n===Rc)return s.RED_INTEGER;if(n===Xu)return s.RG;if(n===Pc)return s.RG_INTEGER;if(n===Ic)return s.RGBA_INTEGER;if(n===po||n===mo||n===go||n===xo)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===yl||n===_l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===yl)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_l)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ml||n===bl||n===Sl||n===Tl||n===wl||n===El||n===Al||n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ml)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ll)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===Ul||n===Ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qu||n===Fl||n===Bl||n===kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var ec=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Se=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},yv={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mv=`
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

}`,nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new tn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ye({vertexShader:_v,fragmentShader:Mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new Kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ic=class extends vi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new nc,m=e.getContextAttributes(),p=null,S=null,T=[],y=[],P=new vt,w=null,R=new ze;R.viewport=new Ae;let L=new ze;L.viewport=new Ae;let b=[R,L],_=new ec,I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=T[$];return st===void 0&&(st=new hr,T[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=T[$];return st===void 0&&(st=new hr,T[$]=st),st.getGripSpace()},this.getHand=function($){let st=T[$];return st===void 0&&(st=new hr,T[$]=st),st.getHandSpace()};function B($){let st=y.indexOf($.inputSource);if(st===-1)return;let bt=T[st];bt!==void 0&&(bt.update($.inputSource,$.frame,c||a),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",W);for(let $=0;$<T.length;$++){let st=y[$];st!==null&&(y[$]=null,T[$].disconnect(st))}I=null,X=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,S=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",O),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ve(f.framebufferWidth,f.framebufferHeight,{format:wn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,bt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Ls:ws,bt=m.stencil?Is:Wi);let It={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(It),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ve(d.textureWidth,d.textureHeight,{format:wn,type:ei,depthTexture:new Io(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W($){for(let st=0;st<$.removed.length;st++){let bt=$.removed[st],ct=y.indexOf(bt);ct>=0&&(y[ct]=null,T[ct].disconnect(bt))}for(let st=0;st<$.added.length;st++){let bt=$.added[st],ct=y.indexOf(bt);if(ct===-1){for(let Ut=0;Ut<T.length;Ut++)if(Ut>=y.length){y.push(bt),ct=Ut;break}else if(y[Ut]===null){y[Ut]=bt,ct=Ut;break}if(ct===-1)break}let It=T[ct];It&&It.connect(bt)}}let G=new C,K=new C;function z($,st,bt){G.setFromMatrixPosition(st.matrixWorld),K.setFromMatrixPosition(bt.matrixWorld);let ct=G.distanceTo(K),It=st.projectionMatrix.elements,Ut=bt.projectionMatrix.elements,Gt=It[14]/(It[10]-1),be=It[14]/(It[10]+1),Zt=(It[9]+1)/It[5],Re=(It[9]-1)/It[5],F=(It[8]-1)/It[0],pn=(Ut[8]+1)/Ut[0],Xt=Gt*F,qt=Gt*pn,Ct=ct/(-F+pn),ge=Ct*-F;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ge),$.translateZ(Ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),It[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Et=Gt+Ct,E=be+Ct,v=Xt-ge,k=qt+(ct-ge),Z=Zt*be/E*Et,Q=Re*be/E*Et;$.projectionMatrix.makePerspective(v,k,Z,Q,Et,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function et($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let st=$.near,bt=$.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(bt=x.depthFar)),_.near=L.near=R.near=st,_.far=L.far=R.far=bt,(I!==_.near||X!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,X=_.far),R.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,_.layers.mask=R.layers.mask|L.layers.mask;let ct=$.parent,It=_.cameras;et(_,ct);for(let Ut=0;Ut<It.length;Ut++)et(It[Ut],ct);It.length===2?z(_,R,L):_.projectionMatrix.copy(R.projectionMatrix),at($,_,ct)};function at($,st,bt){bt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Mo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let xt=null;function Vt($,st){if(h=st.getViewerPose(c||a),g=st,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let ct=!1;bt.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let Ut=0;Ut<bt.length;Ut++){let Gt=bt[Ut],be=null;if(f!==null)be=f.getViewport(Gt);else{let Re=u.getViewSubImage(d,Gt);be=Re.viewport,Ut===0&&(t.setRenderTargetTextures(S,Re.colorTexture,d.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(S))}let Zt=b[Ut];Zt===void 0&&(Zt=new ze,Zt.layers.enable(Ut),Zt.viewport=new Ae,b[Ut]=Zt),Zt.matrix.fromArray(Gt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Gt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(be.x,be.y,be.width,be.height),Ut===0&&(_.matrix.copy(Zt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push(Zt)}let It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){let Ut=u.getDepthInformation(bt[0]);Ut&&Ut.isValid&&Ut.texture&&x.init(t,Ut,i.renderState)}}for(let bt=0;bt<T.length;bt++){let ct=y[bt],It=T[bt];ct!==null&&It!==void 0&&It.update(ct,st,c||a)}xt&&xt($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let ce=new Ku;ce.setAnimationLoop(Vt),this.setAnimationLoop=function($){xt=$},this.dispose=function(){}}},Bi=new pe,bv=new ie;function Sv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ju(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),T=S.envMap,y=S.envMapRotation;T&&(m.envMap.value=T,Bi.copy(y),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(bv.makeRotationFromEuler(Bi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tv(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){let y=T.program;n.uniformBlockBinding(S,y)}function c(S,T){let y=i[S.id];y===void 0&&(g(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",m));let P=T.program;n.updateUBOMapping(S,P);let w=t.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function h(S){let T=u();S.__bindingPointIndex=T;let y=s.createBuffer(),P=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,P,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let T=i[S.id],y=S.uniforms,P=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,R=y.length;w<R;w++){let L=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,_=L.length;b<_;b++){let I=L[b];if(f(I,w,b,P)===!0){let X=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],O=0;for(let W=0;W<B.length;W++){let G=B[W],K=x(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,X+O,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,T,y,P){let w=S.value,R=T+"_"+y;if(P[R]===void 0)return typeof w=="number"||typeof w=="boolean"?P[R]=w:P[R]=w.clone(),!0;{let L=P[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return P[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(S){let T=S.uniforms,y=0,P=16;for(let R=0,L=T.length;R<L;R++){let b=Array.isArray(T[R])?T[R]:[T[R]];for(let _=0,I=b.length;_<I;_++){let X=b[_],B=Array.isArray(X.value)?X.value:[X.value];for(let O=0,W=B.length;O<W;O++){let G=B[O],K=x(G),z=y%P,et=z%K.boundary,at=z+et;y+=et,at!==0&&P-at<K.storage&&(y+=P-at),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=K.storage}}}let w=y%P;return w>0&&(y+=P-w),S.__size=y,S.__cache={},this}function x(S){let T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),T}function m(S){let T=S.target;T.removeEventListener("dispose",m);let y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Lo=class{constructor(t={}){let{canvas:e=Rp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,S=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=mi,this.toneMappingExposure=1;let y=this,P=!1,w=0,R=0,L=null,b=-1,_=null,I=new Ae,X=new Ae,B=null,O=new tt(0),W=0,G=e.width,K=e.height,z=1,et=null,at=null,xt=new Ae(0,0,G,K),Vt=new Ae(0,0,G,K),ce=!1,$=new fr,st=!1,bt=!1,ct=new ie,It=new ie,Ut=new C,Gt=new Ae,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function Re(){return L===null?z:1}let F=n;function pn(M,N){return e.getContext(M,N)}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){let N="webgl2";if(F=pn(N,M),F===null)throw pn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xt,qt,Ct,ge,Et,E,v,k,Z,Q,Y,St,ht,pt,Jt,nt,mt,Pt,Dt,gt,Yt,kt,de,D;function lt(){Xt=new zg(F),Xt.init(),kt=new vv(F,Xt),qt=new Ng(F,Xt,t,kt),Ct=new mv(F,Xt),qt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),ge=new Hg(F),Et=new nv,E=new xv(F,Xt,Ct,Et,qt,kt,ge),v=new Og(y),k=new kg(y),Z=new Jp(F),de=new Lg(F,Z),Q=new Vg(F,Z,ge,de),Y=new Xg(F,Q,Z,ge),Dt=new Wg(F,qt,E),nt=new Ug(Et),St=new ev(y,v,k,Xt,qt,de,nt),ht=new Sv(y,Et),pt=new sv,Jt=new hv(Xt),Pt=new Ig(y,v,k,Ct,Y,f,l),mt=new fv(y,Y,qt),D=new Tv(F,ge,qt,Ct),gt=new Dg(F,Xt,ge),Yt=new Gg(F,Xt,ge),ge.programs=St.programs,y.capabilities=qt,y.extensions=Xt,y.properties=Et,y.renderLists=pt,y.shadowMap=mt,y.state=Ct,y.info=ge}lt();let q=new ic(y,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=Xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(G,K,!1))},this.getSize=function(M){return M.set(G,K)},this.setSize=function(M,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,K=N,e.width=Math.floor(M*z),e.height=Math.floor(N*z),V===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(G*z,K*z).floor()},this.setDrawingBufferSize=function(M,N,V){G=M,K=N,z=V,e.width=Math.floor(M*V),e.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(xt)},this.setViewport=function(M,N,V,H){M.isVector4?xt.set(M.x,M.y,M.z,M.w):xt.set(M,N,V,H),Ct.viewport(I.copy(xt).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Vt)},this.setScissor=function(M,N,V,H){M.isVector4?Vt.set(M.x,M.y,M.z,M.w):Vt.set(M,N,V,H),Ct.scissor(X.copy(Vt).multiplyScalar(z).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(M){Ct.setScissorTest(ce=M)},this.setOpaqueSort=function(M){et=M},this.setTransparentSort=function(M){at=M},this.getClearColor=function(M){return M.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(M=!0,N=!0,V=!0){let H=0;if(M){let U=!1;if(L!==null){let it=L.texture.format;U=it===Ic||it===Pc||it===Rc}if(U){let it=L.texture.type,dt=it===ei||it===Wi||it===dr||it===Is||it===Ec||it===Ac,yt=Pt.getClearColor(),_t=Pt.getClearAlpha(),Nt=yt.r,Ft=yt.g,Mt=yt.b;dt?(g[0]=Nt,g[1]=Ft,g[2]=Mt,g[3]=_t,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Nt,x[1]=Ft,x[2]=Mt,x[3]=_t,F.clearBufferiv(F.COLOR,0,x))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT),V&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),Jt.dispose(),Et.dispose(),v.dispose(),k.dispose(),Y.dispose(),de.dispose(),D.dispose(),St.dispose(),q.dispose(),q.removeEventListener("sessionstart",_h),q.removeEventListener("sessionend",Mh),Li.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let M=ge.autoReset,N=mt.enabled,V=mt.autoUpdate,H=mt.needsUpdate,U=mt.type;lt(),ge.autoReset=M,mt.enabled=N,mt.autoUpdate=V,mt.needsUpdate=H,mt.type=U}function ut(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ot(M){let N=M.target;N.removeEventListener("dispose",Ot),Ee(N)}function Ee(M){We(M),Et.remove(M)}function We(M){let N=Et.get(M).programs;N!==void 0&&(N.forEach(function(V){St.releaseProgram(V)}),M.isShaderMaterial&&St.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,H,U,it){N===null&&(N=be);let dt=U.isMesh&&U.matrixWorld.determinant()<0,yt=Gf(M,N,V,H,U);Ct.setMaterial(H,dt);let _t=V.index,Nt=1;if(H.wireframe===!0){if(_t=Q.getWireframeAttribute(V),_t===void 0)return;Nt=2}let Ft=V.drawRange,Mt=V.attributes.position,jt=Ft.start*Nt,fe=(Ft.start+Ft.count)*Nt;it!==null&&(jt=Math.max(jt,it.start*Nt),fe=Math.min(fe,(it.start+it.count)*Nt)),_t!==null?(jt=Math.max(jt,0),fe=Math.min(fe,_t.count)):Mt!=null&&(jt=Math.max(jt,0),fe=Math.min(fe,Mt.count));let xe=fe-jt;if(xe<0||xe===1/0)return;de.setup(U,H,yt,V,_t);let Qe,Qt=gt;if(_t!==null&&(Qe=Z.get(_t),Qt=Yt,Qt.setIndex(Qe)),U.isMesh)H.wireframe===!0?(Ct.setLineWidth(H.wireframeLinewidth*Re()),Qt.setMode(F.LINES)):Qt.setMode(F.TRIANGLES);else if(U.isLine){let Tt=H.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*Re()),U.isLineSegments?Qt.setMode(F.LINES):U.isLineLoop?Qt.setMode(F.LINE_LOOP):Qt.setMode(F.LINE_STRIP)}else U.isPoints?Qt.setMode(F.POINTS):U.isSprite&&Qt.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Tt=U._multiDrawStarts,Xn=U._multiDrawCounts,te=U._multiDrawCount,Mn=_t?Z.get(_t).bytesPerElement:1,ss=Et.get(H).currentProgram.getUniforms();for(let sn=0;sn<te;sn++)ss.setValue(F,"_gl_DrawID",sn),Qt.render(Tt[sn]/Mn,Xn[sn])}else if(U.isInstancedMesh)Qt.renderInstances(jt,xe,U.count);else if(V.isInstancedBufferGeometry){let Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Xn=Math.min(V.instanceCount,Tt);Qt.renderInstances(jt,xe,Xn)}else Qt.render(jt,xe)};function ne(M,N,V){M.transparent===!0&&M.side===oe&&M.forceSinglePass===!1?(M.side=Fe,M.needsUpdate=!0,Br(M,N,V),M.side=xi,M.needsUpdate=!0,Br(M,N,V),M.side=oe):Br(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),p=Jt.get(V),p.init(N),T.push(p),V.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==V&&M.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let H=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let it=U.material;if(it)if(Array.isArray(it))for(let dt=0;dt<it.length;dt++){let yt=it[dt];ne(yt,V,U),H.add(yt)}else ne(it,V,U),H.add(it)}),T.pop(),p=null,H},this.compileAsync=function(M,N,V=null){let H=this.compile(M,N,V);return new Promise(U=>{function it(){if(H.forEach(function(dt){Et.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){U(M);return}setTimeout(it,10)}Xt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let _n=null;function Wn(M){_n&&_n(M)}function _h(){Li.stop()}function Mh(){Li.start()}let Li=new Ku;Li.setAnimationLoop(Wn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(M){_n=M,q.setAnimationLoop(M),M===null?Li.stop():Li.start()},q.addEventListener("sessionstart",_h),q.addEventListener("sessionend",Mh),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,N,L),p=Jt.get(M,T.length),p.init(N),T.push(p),It.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(It),bt=this.localClippingEnabled,st=nt.init(this.clippingPlanes,bt),m=pt.get(M,S.length),m.init(),S.push(m),q.enabled===!0&&q.isPresenting===!0){let it=y.xr.getDepthSensingMesh();it!==null&&Sa(it,N,-1/0,y.sortObjects)}Sa(M,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(et,at),Zt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Zt&&Pt.addToRenderList(m,M),this.info.render.frame++,st===!0&&nt.beginShadows();let V=p.state.shadowsArray;mt.render(V,M,N),st===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){let it=N.cameras;if(U.length>0)for(let dt=0,yt=it.length;dt<yt;dt++){let _t=it[dt];Sh(H,U,M,_t)}Zt&&Pt.render(M);for(let dt=0,yt=it.length;dt<yt;dt++){let _t=it[dt];bh(m,M,_t,_t.viewport)}}else U.length>0&&Sh(H,U,M,N),Zt&&Pt.render(M),bh(m,M,N);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(y,M,N),de.resetDefaultState(),b=-1,_=null,T.pop(),T.length>0?(p=T[T.length-1],st===!0&&nt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Sa(M,N,V,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){H&&Gt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(It);let dt=Y.update(M),yt=M.material;yt.visible&&m.push(M,dt,yt,V,Gt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$.intersectsObject(M))){let dt=Y.update(M),yt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Gt.copy(M.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Gt.copy(dt.boundingSphere.center)),Gt.applyMatrix4(M.matrixWorld).applyMatrix4(It)),Array.isArray(yt)){let _t=dt.groups;for(let Nt=0,Ft=_t.length;Nt<Ft;Nt++){let Mt=_t[Nt],jt=yt[Mt.materialIndex];jt&&jt.visible&&m.push(M,dt,jt,V,Gt.z,Mt)}}else yt.visible&&m.push(M,dt,yt,V,Gt.z,null)}}let it=M.children;for(let dt=0,yt=it.length;dt<yt;dt++)Sa(it[dt],N,V,H)}function bh(M,N,V,H){let U=M.opaque,it=M.transmissive,dt=M.transparent;p.setupLightsView(V),st===!0&&nt.setGlobalState(y.clippingPlanes,V),H&&Ct.viewport(I.copy(H)),U.length>0&&Fr(U,N,V),it.length>0&&Fr(it,N,V),dt.length>0&&Fr(dt,N,V),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Sh(M,N,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Ve(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?ln:ei,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));let it=p.state.transmissionRenderTarget[H.id],dt=H.viewport||I;it.setSize(dt.z,dt.w);let yt=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor(O),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Zt&&Pt.render(V);let _t=y.toneMapping;y.toneMapping=mi;let Nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),st===!0&&nt.setGlobalState(y.clippingPlanes,H),Fr(M,V,H),E.updateMultisampleRenderTarget(it),E.updateRenderTargetMipmap(it),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Mt=0,jt=N.length;Mt<jt;Mt++){let fe=N[Mt],xe=fe.object,Qe=fe.geometry,Qt=fe.material,Tt=fe.group;if(Qt.side===oe&&xe.layers.test(H.layers)){let Xn=Qt.side;Qt.side=Fe,Qt.needsUpdate=!0,Th(xe,V,H,Qe,Qt,Tt),Qt.side=Xn,Qt.needsUpdate=!0,Ft=!0}}Ft===!0&&(E.updateMultisampleRenderTarget(it),E.updateRenderTargetMipmap(it))}y.setRenderTarget(yt),y.setClearColor(O,W),Nt!==void 0&&(H.viewport=Nt),y.toneMapping=_t}function Fr(M,N,V){let H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,it=M.length;U<it;U++){let dt=M[U],yt=dt.object,_t=dt.geometry,Nt=H===null?dt.material:H,Ft=dt.group;yt.layers.test(V.layers)&&Th(yt,N,V,_t,Nt,Ft)}}function Th(M,N,V,H,U,it){M.onBeforeRender(y,N,V,H,U,it),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(y,N,V,H,M,it),U.transparent===!0&&U.side===oe&&U.forceSinglePass===!1?(U.side=Fe,U.needsUpdate=!0,y.renderBufferDirect(V,N,H,U,M,it),U.side=xi,U.needsUpdate=!0,y.renderBufferDirect(V,N,H,U,M,it),U.side=oe):y.renderBufferDirect(V,N,H,U,M,it),M.onAfterRender(y,N,V,H,U,it)}function Br(M,N,V){N.isScene!==!0&&(N=be);let H=Et.get(M),U=p.state.lights,it=p.state.shadowsArray,dt=U.state.version,yt=St.getParameters(M,U.state,it,N,V),_t=St.getProgramCacheKey(yt),Nt=H.programs;H.environment=M.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(M.isMeshStandardMaterial?k:v).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",Ot),Nt=new Map,H.programs=Nt);let Ft=Nt.get(_t);if(Ft!==void 0){if(H.currentProgram===Ft&&H.lightsStateVersion===dt)return Eh(M,yt),Ft}else yt.uniforms=St.getUniforms(M),M.onBeforeCompile(yt,y),Ft=St.acquireProgram(yt,_t),Nt.set(_t,Ft),H.uniforms=yt.uniforms;let Mt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),Eh(M,yt),H.needsLights=Wf(M),H.lightsStateVersion=dt,H.needsLights&&(Mt.ambientLightColor.value=U.state.ambient,Mt.lightProbe.value=U.state.probe,Mt.directionalLights.value=U.state.directional,Mt.directionalLightShadows.value=U.state.directionalShadow,Mt.spotLights.value=U.state.spot,Mt.spotLightShadows.value=U.state.spotShadow,Mt.rectAreaLights.value=U.state.rectArea,Mt.ltc_1.value=U.state.rectAreaLTC1,Mt.ltc_2.value=U.state.rectAreaLTC2,Mt.pointLights.value=U.state.point,Mt.pointLightShadows.value=U.state.pointShadow,Mt.hemisphereLights.value=U.state.hemi,Mt.directionalShadowMap.value=U.state.directionalShadowMap,Mt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Mt.spotShadowMap.value=U.state.spotShadowMap,Mt.spotLightMatrix.value=U.state.spotLightMatrix,Mt.spotLightMap.value=U.state.spotLightMap,Mt.pointShadowMap.value=U.state.pointShadowMap,Mt.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ft,H.uniformsList=null,Ft}function wh(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=As.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Eh(M,N){let V=Et.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Gf(M,N,V,H,U){N.isScene!==!0&&(N=be),E.resetTextureUnits();let it=N.fog,dt=H.isMeshStandardMaterial?N.environment:null,yt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:zs,_t=(H.isMeshStandardMaterial?k:v).get(H.envMap||dt),Nt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Mt=!!V.morphAttributes.position,jt=!!V.morphAttributes.normal,fe=!!V.morphAttributes.color,xe=mi;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=y.toneMapping);let Qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qt=Qe!==void 0?Qe.length:0,Tt=Et.get(H),Xn=p.state.lights;if(st===!0&&(bt===!0||M!==_)){let mn=M===_&&H.id===b;nt.setState(H,M,mn)}let te=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Xn.state.version||Tt.outputColorSpace!==yt||U.isBatchedMesh&&Tt.batching===!1||!U.isBatchedMesh&&Tt.batching===!0||U.isBatchedMesh&&Tt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Tt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Tt.instancing===!1||!U.isInstancedMesh&&Tt.instancing===!0||U.isSkinnedMesh&&Tt.skinning===!1||!U.isSkinnedMesh&&Tt.skinning===!0||U.isInstancedMesh&&Tt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Tt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Tt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Tt.instancingMorph===!1&&U.morphTexture!==null||Tt.envMap!==_t||H.fog===!0&&Tt.fog!==it||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==nt.numPlanes||Tt.numIntersection!==nt.numIntersection)||Tt.vertexAlphas!==Nt||Tt.vertexTangents!==Ft||Tt.morphTargets!==Mt||Tt.morphNormals!==jt||Tt.morphColors!==fe||Tt.toneMapping!==xe||Tt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Tt.__version=H.version);let Mn=Tt.currentProgram;te===!0&&(Mn=Br(H,N,U));let ss=!1,sn=!1,Ks=!1,ve=Mn.getUniforms(),In=Tt.uniforms;if(Ct.useProgram(Mn.program)&&(ss=!0,sn=!0,Ks=!0),H.id!==b&&(b=H.id,sn=!0),ss||_!==M){Ct.buffers.depth.getReversed()?(ct.copy(M.projectionMatrix),Ip(ct),Lp(ct),ve.setValue(F,"projectionMatrix",ct)):ve.setValue(F,"projectionMatrix",M.projectionMatrix),ve.setValue(F,"viewMatrix",M.matrixWorldInverse);let si=ve.map.cameraPosition;si!==void 0&&si.setValue(F,Ut.setFromMatrixPosition(M.matrixWorld)),qt.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,sn=!0,Ks=!0)}if(U.isSkinnedMesh){ve.setOptional(F,U,"bindMatrix"),ve.setOptional(F,U,"bindMatrixInverse");let mn=U.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),ve.setValue(F,"boneTexture",mn.boneTexture,E))}U.isBatchedMesh&&(ve.setOptional(F,U,"batchingTexture"),ve.setValue(F,"batchingTexture",U._matricesTexture,E),ve.setOptional(F,U,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",U._indirectTexture,E),ve.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",U._colorsTexture,E));let js=V.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&Dt.update(U,V,Mn),(sn||Tt.receiveShadow!==U.receiveShadow)&&(Tt.receiveShadow=U.receiveShadow,ve.setValue(F,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(In.envMap.value=_t,In.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(In.envMapIntensity.value=N.environmentIntensity),sn&&(ve.setValue(F,"toneMappingExposure",y.toneMappingExposure),Tt.needsLights&&Hf(In,Ks),it&&H.fog===!0&&ht.refreshFogUniforms(In,it),ht.refreshMaterialUniforms(In,H,z,K,p.state.transmissionRenderTarget[M.id]),As.upload(F,wh(Tt),In,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(As.upload(F,wh(Tt),In,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(F,"center",U.center),ve.setValue(F,"modelViewMatrix",U.modelViewMatrix),ve.setValue(F,"normalMatrix",U.normalMatrix),ve.setValue(F,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let mn=H.uniformsGroups;for(let si=0,ri=mn.length;si<ri;si++){let Ah=mn[si];D.update(Ah,Mn),D.bind(Ah,Mn)}}return Mn}function Hf(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Wf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,N,V){Et.get(M.texture).__webglTexture=N,Et.get(M.depthTexture).__webglTexture=V;let H=Et.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){let V=Et.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,V=0){L=M,w=N,R=V;let H=!0,U=null,it=!1,dt=!1;if(M){let _t=Et.get(M);if(_t.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(_t.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(_t.__hasExternalTextures)E.rebindTextures(M,Et.get(M.texture).__webglTexture,Et.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Mt=M.depthTexture;if(_t.__boundDepthTexture!==Mt){if(Mt!==null&&Et.has(Mt)&&(M.width!==Mt.image.width||M.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}let Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(dt=!0);let Ft=Et.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?U=Ft[N][V]:U=Ft[N],it=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?U=Et.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?U=Ft[V]:U=Ft,I.copy(M.viewport),X.copy(M.scissor),B=M.scissorTest}else I.copy(xt).multiplyScalar(z).floor(),X.copy(Vt).multiplyScalar(z).floor(),B=ce;if(Ct.bindFramebuffer(F.FRAMEBUFFER,U)&&H&&Ct.drawBuffers(M,U),Ct.viewport(I),Ct.scissor(X),Ct.setScissorTest(B),it){let _t=Et.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,_t.__webglTexture,V)}else if(dt){let _t=Et.get(M.texture),Nt=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,V||0,Nt)}b=-1},this.readRenderTargetPixels=function(M,N,V,H,U,it,dt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Et.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){Ct.bindFramebuffer(F.FRAMEBUFFER,yt);try{let _t=M.texture,Nt=_t.format,Ft=_t.type;if(!qt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&V>=0&&V<=M.height-U&&F.readPixels(N,V,H,U,kt.convert(Nt),kt.convert(Ft),it)}finally{let _t=L!==null?Et.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,H,U,it,dt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Et.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){let _t=M.texture,Nt=_t.format,Ft=_t.type;if(!qt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-H&&V>=0&&V<=M.height-U){Ct.bindFramebuffer(F.FRAMEBUFFER,yt);let Mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.bufferData(F.PIXEL_PACK_BUFFER,it.byteLength,F.STREAM_READ),F.readPixels(N,V,H,U,kt.convert(Nt),kt.convert(Ft),0);let jt=L!==null?Et.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,jt);let fe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Pp(F,fe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,it),F.deleteBuffer(Mt),F.deleteSync(fe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,V=0){M.isTexture!==!0&&(lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);let H=Math.pow(2,-V),U=Math.floor(M.image.width*H),it=Math.floor(M.image.height*H),dt=N!==null?N.x:0,yt=N!==null?N.y:0;E.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,dt,yt,U,it),Ct.unbindTexture()},this.copyTextureToTexture=function(M,N,V=null,H=null,U=0){M.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],N=arguments[2],U=arguments[3]||0,V=null);let it,dt,yt,_t,Nt,Ft,Mt,jt,fe,xe=M.isCompressedTexture?M.mipmaps[U]:M.image;V!==null?(it=V.max.x-V.min.x,dt=V.max.y-V.min.y,yt=V.isBox3?V.max.z-V.min.z:1,_t=V.min.x,Nt=V.min.y,Ft=V.isBox3?V.min.z:0):(it=xe.width,dt=xe.height,yt=xe.depth||1,_t=0,Nt=0,Ft=0),H!==null?(Mt=H.x,jt=H.y,fe=H.z):(Mt=0,jt=0,fe=0);let Qe=kt.convert(N.format),Qt=kt.convert(N.type),Tt;N.isData3DTexture?(E.setTexture3D(N,0),Tt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),Tt=F.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),Tt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let Xn=F.getParameter(F.UNPACK_ROW_LENGTH),te=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Mn=F.getParameter(F.UNPACK_SKIP_PIXELS),ss=F.getParameter(F.UNPACK_SKIP_ROWS),sn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Nt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft);let Ks=M.isDataArrayTexture||M.isData3DTexture,ve=N.isDataArrayTexture||N.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let In=Et.get(M),js=Et.get(N),mn=Et.get(In.__renderTarget),si=Et.get(js.__renderTarget);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<yt;ri++)Ks&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(M).__webglTexture,U,Ft+ri),M.isDepthTexture?(ve&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(N).__webglTexture,U,fe+ri),F.blitFramebuffer(_t,Nt,it,dt,Mt,jt,it,dt,F.DEPTH_BUFFER_BIT,F.NEAREST)):ve?F.copyTexSubImage3D(Tt,U,Mt,jt,fe+ri,_t,Nt,it,dt):F.copyTexSubImage2D(Tt,U,Mt,jt,fe+ri,_t,Nt,it,dt);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ve?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Tt,U,Mt,jt,fe,it,dt,yt,Qe,Qt,xe.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Tt,U,Mt,jt,fe,it,dt,yt,Qe,xe.data):F.texSubImage3D(Tt,U,Mt,jt,fe,it,dt,yt,Qe,Qt,xe):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,Mt,jt,it,dt,Qe,Qt,xe.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,Mt,jt,xe.width,xe.height,Qe,xe.data):F.texSubImage2D(F.TEXTURE_2D,U,Mt,jt,it,dt,Qe,Qt,xe);F.pixelStorei(F.UNPACK_ROW_LENGTH,Xn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,te),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Mn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ss),F.pixelStorei(F.UNPACK_SKIP_IMAGES,sn),U===0&&N.generateMipmaps&&F.generateMipmap(Tt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(M,N,V=null,H=null,U=0){return M.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,M=arguments[2],N=arguments[3],U=arguments[4]||0),lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,V,H,U)},this.initRenderTarget=function(M){Et.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),Ct.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,Ct.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}},Xi=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var pr=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pe,this.environmentIntensity=1,this.environmentRotation=new pe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},sc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vl,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Je=new C,Do=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ae=class extends Fn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ys,ir=new C,_s=new C,Ms=new C,bs=new vt,sr=new vt,nd=new ie,oo=new C,rr=new C,ao=new C,Au=new vt,tl=new vt,Cu=new vt,ue=class extends Le{constructor(t=new ae){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Wt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sc(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Do(n,3,0,!1)),ys.setAttribute("uv",new Do(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),nd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-Ms.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;lo(oo.set(-.5,-.5,0),Ms,a,_s,i,r),lo(rr.set(.5,-.5,0),Ms,a,_s,i,r),lo(ao.set(.5,.5,0),Ms,a,_s,i,r),Au.set(0,0),tl.set(1,0),Cu.set(1,1);let o=t.ray.intersectTriangle(oo,rr,ao,!1,ir);if(o===null&&(lo(rr.set(-.5,.5,0),Ms,a,_s,i,r),tl.set(0,1),o=t.ray.intersectTriangle(oo,ao,rr,!1,ir),o===null))return;let l=t.ray.origin.distanceTo(ir);l<t.near||l>t.far||e.push({distance:l,point:ir.clone(),uv:fi.getInterpolation(ir,oo,rr,ao,Au,tl,Cu,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function lo(s,t,e,n,i,r){bs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(sr.x=r*bs.x-i*bs.y,sr.y=i*bs.x+r*bs.y):sr.copy(bs),s.copy(t),s.x+=sr.x,s.y+=sr.y,s.applyMatrix4(nd)}var rc=class extends tn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=an,h=an,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var No=class extends Ce{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ss=new ie,Ru=new ie,co=[],Pu=new ni,wv=new ie,or=new j,ar=new yi,En=class extends j{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new No(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),Pu.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Pu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),ar.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ss),Ru.multiplyMatrices(n,Ss),or.matrixWorld=Ru,or.raycast(t,co);for(let a=0,o=co.length;a<o;a++){let l=co[a];l.instanceId=r,l.object=this,e.push(l)}co.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new No(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rc(new Float32Array(i*this.count),i,this.count,Cc,Un));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ii=class extends Fn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Iu=new ie,oc=new wo,ho=new yi,uo=new C,Bn=class extends Le{constructor(t=new Wt,e=new ii){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;Iu.copy(i).invert(),oc.copy(t.ray).applyMatrix4(Iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);uo.fromBufferAttribute(u,m),Lu(uo,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)uo.fromBufferAttribute(u,g),Lu(uo,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lu(s,t,e,n,i,r,a){let o=oc.distanceSqToPoint(s);if(o<e){let l=new C;oc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Os=class extends tn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Uo=class s extends Wt{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ye(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new vt,f=new C,g=new C,x=new C,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let S=0;S<=e;S++){let T=n+S*h*i,y=Math.sin(T),P=Math.cos(T);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*y,u.y=t[w].y,u.z=t[w].x*P,a.push(u.x,u.y,u.z),d.x=S/e,d.y=w/(t.length-1),o.push(d.x,d.y);let R=l[3*w+0]*y,L=l[3*w+1],b=l[3*w+0]*P;c.push(R,L,b)}}for(let S=0;S<e;S++)for(let T=0;T<t.length-1;T++){let y=T+S*t.length,P=y,w=y+t.length,R=y+t.length+1,L=y+1;r.push(P,w,L),r.push(R,L,w)}this.setIndex(r),this.setAttribute("position",new Rt(a,3)),this.setAttribute("uv",new Rt(o,2)),this.setAttribute("normal",new Rt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var mr=class s extends Wt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new vt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(o,3)),this.setAttribute("uv",new Rt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},kn=class s extends Wt{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;S(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function S(){let y=new C,P=new C,w=0,R=(e-t)/n;for(let L=0;L<=r;L++){let b=[],_=L/r,I=_*(e-t)+t;for(let X=0;X<=i;X++){let B=X/i,O=B*l+o,W=Math.sin(O),G=Math.cos(O);P.x=I*W,P.y=-_*n+m,P.z=I*G,u.push(P.x,P.y,P.z),y.set(W,R,G).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-_),b.push(g++)}x.push(b)}for(let L=0;L<i;L++)for(let b=0;b<r;b++){let _=x[b][L],I=x[b+1][L],X=x[b+1][L+1],B=x[b][L+1];(t>0||b!==0)&&(h.push(_,I,B),w+=3),(e>0||b!==r-1)&&(h.push(I,X,B),w+=3)}c.addGroup(p,w,0),p+=w}function T(y){let P=g,w=new vt,R=new C,L=0,b=y===!0?t:e,_=y===!0?1:-1;for(let X=1;X<=i;X++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;let I=g;for(let X=0;X<=i;X++){let O=X/i*l+o,W=Math.cos(O),G=Math.sin(O);R.x=b*G,R.y=m*_,R.z=b*W,u.push(R.x,R.y,R.z),d.push(0,_,0),w.x=W*.5+.5,w.y=G*.5*_+.5,f.push(w.x,w.y),g++}for(let X=0;X<i;X++){let B=P+X,O=I+X;y===!0?h.push(O,O+1,B):h.push(O+1,O,B),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oo=class s extends kn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _i=class s extends Wt{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new C,g=new vt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let S=p+m,T=S,y=S+n+1,P=S+n+2,w=S+1;o.push(T,y,w),o.push(y,P,w)}}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var xn=class s extends Wt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let S=[],T=p/n,y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){let w=P/e;u.x=-t*Math.cos(i+w*r)*Math.sin(a+T*o),u.y=t*Math.cos(a+T*o),u.z=t*Math.sin(i+w*r)*Math.sin(a+T*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+y,1-T),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let T=h[p][S+1],y=h[p][S],P=h[p+1][S],w=h[p+1][S+1];(p!==0||a>0)&&f.push(T,y,w),(p!==n-1||l<Math.PI)&&f.push(y,P,w)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gr=class s extends Wt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,S=(i+1)*f+g;a.push(x,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Fo=class extends ye{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Pe=class extends Fn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xr=class extends Pe{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var zn=class extends Fn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pe,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function fo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ev(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Fs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ac=class extends Fs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dh:r=t,o=2*e-n;break;case Nh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dh:a=t,l=2*n-e;break;case Nh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+S*a[c+P]+T*a[l+P]+y*a[u+P];return r}},lc=class extends Fs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},cc=class extends Fs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fo(e,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fo(t.times,Array),values:fo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ac(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case yo:e=this.InterpolantFactoryMethodDiscrete;break;case zl:e=this.InterpolantFactoryMethodLinear;break;case wa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return zl;case this.InterpolantFactoryMethodSmooth:return wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Ev(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=zl;var qi=class extends An{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=yo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends An{};hc.prototype.ValueTypeName="color";var uc=class extends An{};uc.prototype.ValueTypeName="number";var dc=class extends Fs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)he.slerpFlat(r,0,a,c-o,a,c,l);return r}},Bo=class extends An{InterpolantFactoryMethodLinear(t){return new dc(this.times,this.values,this.getValueSize(),t)}};Bo.prototype.ValueTypeName="quaternion";Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends An{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=yo;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends An{};fc.prototype.ValueTypeName="vector";var pc=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Av=new pc,mc=class{constructor(t){this.manager=t!==void 0?t:Av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Bs=class extends vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},el=new ie,Du=new C,Nu=new C,ko=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Du.setFromMatrixPosition(t.matrixWorld),e.position.copy(Du),Nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nu),e.updateMatrixWorld(),el.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},gc=class extends ko{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Mo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ks=class extends vr{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new gc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var xc=class extends ko{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mi=class extends vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new xc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var zo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Uu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Uu(){return performance.now()}var Nc="\\[\\]\\.:\\/",Cv=new RegExp("["+Nc+"]","g"),Uc="[^"+Nc+"]",Rv="[^"+Nc.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",Uc),Iv=/(WCOD+)?/.source.replace("WCOD",Rv),Lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),Dv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),Nv=new RegExp("^"+Pv+Iv+Lv+Dv+"$"),Uv=["material","materials","bones","map"],vc=class{constructor(t,e,n){let i=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cv,"")}static parseTrackName(t){let e=Nv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Uv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=vc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ly=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var id="1.8.1",sd=[{v:"1.8.1",date:"Oct 19, 2026",items:["\u{1F381} Free car skins: friends who play from your link unlock Cherry Red (1), Electric Blue (3) and Gold Chrome (5)","\u{1F3C6} World Champion skin for anyone who has ever made the world top 5"]},{v:"1.7.0",date:"Oct 19, 2026",items:["Challenge a friend: share a link with your time to beat"]},{v:"1.6.4",date:"Oct 18, 2026",items:["PB PACE at 1 km / 2 km when you're ahead of your best run"]},{v:"1.6.3",date:"Oct 18, 2026",items:["Names up to 10 characters \xB7 medals and a crown for the top 3"]},{v:"1.6.0",date:"Oct 17, 2026",items:["12 endings to collect \u2014 tap the \u{1F3C6} next to DRIVE AGAIN","Ramps give a turbo boost and refill FLY","Flying into a building now blows you up"]},{v:"1.5.0",date:"Oct 17, 2026",items:["Time attack in 0.01 s \u2014 Elon heads and roof stomps give turbo"]}];var Ov=["\uB178\uBB34\uD604","\uBB34\uD604","\uB178\uBB34","\uB178\uC9F1","\uC6B4\uC9C0","\uC57C\uAE30\uBD84\uC88B","\uC57C\uAE30\uBD84\uC870","\uBD80\uC5C9\uC774","\uB178\uC54C\uB77C","\uC5E0\uC528\uBB34\uD604","mc\uBB34\uD604","\uC774\uAE30","\uC911\uB825","\uB178\uACF5\uC774\uC0B0","\uC77C\uBCA0","\uC77C\uAC04\uBCA0\uC2A4\uD2B8","\uC77C\uAC8C\uC774","\uD64D\uC5B4","\uC804\uB77C\uB514\uC5B8","\uC2A8\uC0C1","\uD1B5\uAD6C\uC774","\uAE40\uB300\uC911","\uB300\uC911\uC774","\uBB38\uC7AC\uC778","\uBB38\uC7AC\uC559","\uC7AC\uC559","\uB300\uAE68\uBB38","\uBB38\uBE60","\uB2EC\uB2D8","\uC724\uC11D\uC5F4","\uC724\uC11D\uB82C","\uC11D\uC5F4","\uAD65","\uC724\uB450\uCC3D","\uC724\uD2C0\uB7EC","\uC774\uC7AC\uBA85","\uCC22\uC7AC\uBA85","\uC7AC\uBA85","\uCC22","\uAC1C\uB538","\uBC15\uADFC\uD61C","\uADFC\uD61C","\uB2ED\uADFC\uD61C","503","\uC774\uBA85\uBC15","\uBA85\uBC15","\uC950\uBC15","2mb","\uC804\uB450\uD658","\uB450\uD658","\uB178\uD0DC\uC6B0","\uAE40\uC601\uC0BC","\uBC15\uC815\uD76C","\uC774\uC2B9\uB9CC","\uAE40\uAC74\uD76C","\uAC74\uD76C","\uAE40\uC815\uC219","\uD55C\uB3D9\uD6C8","\uC870\uAD6D","\uAE40\uC815\uC740","\uAE40\uC815\uC77C","\uAE40\uC77C\uC131","\uC2DC\uC9C4\uD551","\uB300\uD1B5\uB839","\uC601\uBD80\uC778","\uD0C4\uD575","\uACC4\uC5C4","\uC88C\uBE68","\uBE68\uAC31\uC774","\uC218\uAF34","\uD2C0\uB531","\uAF34\uD1B5","\uD1A0\uCC29\uC65C\uAD6C","\uAD6D\uD798","\uAD6D\uBBFC\uC758\uD798","\uBBFC\uC8FC\uB2F9","\uB354\uBD88\uC5B4","\uC815\uC758\uB2F9","\uD601\uC2E0\uB2F9","\uAD11\uC8FC\uC0AC\uD0DC","\uD3ED\uB3D9","\uC138\uC6D4\uD638","\uC5B4\uBB35","\uC624\uB385","\uBA54\uAC08","\uC6CC\uB9C8\uB4DC","\uD55C\uB0A8","\uAE40\uCE58\uB140","\uB41C\uC7A5\uB140","\uCFF5\uCF85","\uC2DC\uBC1C","\uC528\uBC1C","\uC528\uBC14","\uC2F8\uBC1C","\u3145\u3142","\u3146\u3142","\uBCD1\uC2E0","\u3142\u3145","\uC886","\uC874\uB098","\uAC1C\uC0C8","\uC0C8\uB07C","\uC9C0\uB784","\uC5FC\uBCD1","\uC5E0\uCC3D","\uB290\uAE08","\uB2C8\uC560\uBBF8","\uB2C8\uC560\uBE44","\uC139\uC2A4","\uBCF4\uC9C0","\uC790\uC9C0","\uC9C8\uC2F8","\uB538\uB538","\uC57C\uB3D9","\uAC15\uAC04","\uCC3D\uB140","\uAC78\uB808","\uAF34\uB9BC","\uC539","\uBED0\uD050","\u3134\u3141\u314E","\uC139","\uC13B","\uC385","\uC139\uC2DC","\uB5A1\uCE58","\uB5A1\uBC29","\uBD95\uAC00","\uB530\uBA39","\uBA39\uBC84","\uBC15\uC544\uC918","\uBE68\uC544","\uD565","\uC624\uB784","\uD3A0\uB77C","\uC0AC\uAE4C\uC2DC","\uC815\uC561","\uBC1C\uAE30","\uB538\uCE58","\uC790\uC704","\uBCF4\uC9D3","\uBD0A","\uC7A6","\uC816\uAF2D","\uAF2D\uC9C0","\uC720\uB450","\uC816\uD0F1","\uAC00\uC2B4\uB9CC\uC838","\uC5C9\uB369\uC774\uB9CC\uC838","\uC131\uAE30","\uC74C\uACBD","\uC74C\uB780","\uC74C\uBD80","\uC560\uB110","\uD56D\uBB38","\uB625\uAF2C","\uC9C8\uB0B4","\uB178\uCF58","\uCF58\uB3D4","\uD150\uAC00","\uC624\uB098\uD640","\uBAB8\uCEA0","\uC57C\uC9E4","\uC57C\uC0AC","av\uBC30\uC6B0","\uC5C5\uC18C","\uD480\uC2F8","\uD0A4\uC2A4\uBC29","\uB9BD\uCE74\uD398","\uC624\uD53C\uAC78","\uCC3D\uB144","\uAC08\uBCF4","\uBAB8\uD314","\uB9E4\uCD98","\uC131\uB9E4\uB9E4","\uC6D0\uC870\uAD50\uC81C","\uC870\uAC74\uB9CC\uB0A8","\uC139\uD30C","\uAF34\uB9AC","\uAF34\uB824","\uC2E0\uC74C","\uC559\uC559","\uD6C4\uC7A5","\uC4F0\uB9AC\uC378","\uC2A4\uC640\uD551","\uB4B7\uCE58\uAE30"],Fv=["fuck","fuk","shit","bitch","cunt","dick","pussy","porn","sex","rape","nigg","fag","retard","hitler","nazi","1488","kkk","isis","whore","slut","cock","penis","vagina","cum","trump","biden","obama","putin","xijinping","kimjong","seggs","secks","sechs","sexy","boob","tits","titty","horny","nude","naked","nsfw","milf","hentai","anal","anus","blowjob","handjob","dildo","orgasm","xxx","onlyfans","pornhub","xvideos","jerkoff","fap","boner","erect","semen","sperm","nipple","threesome","incest","pedophile","loli","thot","hooker","escort","bdsm","fetish"],Bv={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t","@":"a",$:"s","!":"i"},Oc=s=>s.normalize("NFKC").toLowerCase().replace(/[\s._\-·•,~!?'"`^*+=/\\|()[\]{}<>:;]+/g,""),od=Ov.map(Oc),kv=Fv.map(Oc),zv=[0,0,2,3,3,5,6,7,7,9,9,11,12,12,12,0,3,7,18],Vv={1:5,3:7,10:15,11:15,19:20},Gv={2:1,20:19,24:1,25:7,26:17,23:22},rd=s=>s>=44032&&s<55204;function ad(s){let t=[];for(let e of s){let n=e.charCodeAt(0);if(rd(n)){let i=n-44032,r=Math.floor(i/588),a=Math.floor(i%588/28),o=i%28;r=zv[r],a=Vv[a]??a,o=Gv[o]??o;let l=t.length?t[t.length-1]:-1;if(rd(l)&&r===11){let c=l-44032,h=Math.floor(c%588/28);if(c%28===0&&h===a){t[t.length-1]=l+o;continue}}n=44032+r*588+a*28+o}t.push(n)}return String.fromCharCode(...t)}var Hv=od.map(ad),Wv=["essex","sussex","middlesex","wessex","cocktail","peacock","hancock","dickens","dickinson","grape","therapist","scunthorpe","analog","analys","canal","cumber","cucumber","document","circumstance","shitake","shiitake","matsushita","assassin","classic","passion","bassist","glasses"];function $i(s){let t=Oc(s);if(!t)return!1;for(let r of Wv)t=t.split(r).join("");if(!t)return!1;let e=t.replace(/[0-9]/g,""),n=t.replace(/[0-9@$!]/g,r=>Bv[r]??r),i=ad(e);for(let r of od)if(t.includes(r)||e.includes(r))return!0;for(let r of Hv)if(i.includes(r))return!0;for(let r of kv)if(t.includes(r)||n.includes(r))return!0;return!!/518/.test(t)}var ld="Some words can't be used in names.";function cd(s){let t=0;for(let e=0;e<s.length;e++)t=t*31+s.charCodeAt(e)>>>0;for(let e=0;e<50;e++){let n="Driver"+(1e3+(t+e)%9e3);if(!$i(n))return n}return"Driver"+(1e3+t%9e3)}var hd=1e7,Xv=s=>{let t=new TextEncoder().encode(s),e="";for(let n of t)e+=String.fromCharCode(n);return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},qv=s=>{let t=atob(s.replace(/-/g,"+").replace(/_/g,"/"));return new TextDecoder().decode(Uint8Array.from(t,e=>e.charCodeAt(0)))};function ud(s,t){return`${Math.max(0,Math.floor(t))}.${Xv(s.slice(0,10))}`}function dd(s){if(!s||s.length>80)return null;let t=s.match(/^(\d{1,8})\.([A-Za-z0-9_-]{0,40})$/);if(!t)return null;let e=+t[1],n="";try{n=qv(t[2]).replace(/[\u0000-\u001f<>&"'`\\]/g,"").trim().slice(0,10)}catch{return null}(!n||$i(n))&&(n="A friend");let i=e>=hd/2,r=i?hd-e:0;return i&&(r<5500||r>6e4)||!i&&(e<1||e>3100)?null:{name:n,score:e,mars:i,t100:r,dist:i?3e3:e}}var Mr=s=>s.mars?(s.t100/100).toFixed(2)+"s":s.dist.toLocaleString("en-US")+" m";async function Fc(s){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode("ref:"+s));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("").slice(0,10)}var fd=s=>!!s&&/^[0-9a-f]{10}$/.test(s),br=[{id:"stock",need:0,name:"Stock Pearl"},{id:"red",need:1,name:"Cherry Red"},{id:"neon",need:3,name:"Electric Blue"},{id:"gold",need:5,name:"Gold Chrome"},{id:"champ",need:1/0,name:"World Champion"}];var Gc={};qf(Gc,{BIG_RAMP:()=>_e,BLD_X:()=>pd,CHECK_GAP:()=>md,CHUNK:()=>Si,CROSS_HW:()=>Vn,CROSS_X:()=>Gs,GOAL:()=>Cn,ITEMS:()=>Ai,LAMP_GAP:()=>vn,LANE:()=>Yv,LANES_X:()=>Ti,NEED:()=>je,ROAD_HW:()=>At,TRACK_HW:()=>Ei,TRACK_Z0:()=>Ji,WALK_W:()=>wi,WALL_X:()=>$v,chunkAt:()=>en,chunkOf:()=>Be,diff:()=>Hs,hAt:()=>Gn,interNear:()=>xd,laneDir:()=>Wo,newRoad:()=>zc,rng:()=>Sr,roadGen:()=>kc,wallPush:()=>Vc});var Yv=3.6,At=10.8,wi=5,$v=17.5,pd=18,Ti=[-1.8,-5.4,-9,1.8,5.4,9],Wo=s=>s<3?1:-1,Si=100,vn=25,Vn=8,Gs=70,md=10,Cn=3e3,je=5,Ei=24,Ji=-260,_e={x:-5.4,z:-150,R:20,ext:8,hw:7};function Sr(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Bc=1,Zi=new Map,Ai=[],gd=0,kc=()=>gd;function zc(s){Bc=s,gd++,Zi.clear(),Ai=Zv()}function Zv(){let s=Sr(Bc*31+7),t=[];for(let e=0;e<10;e++){let n=260+e*272+(s()-.5)*60,i=en(Be(n)),r=i.jam,a=!!r&&n>r.z0-6&&n<r.z1+6,o=null;for(let d=Be(n)-1;d<=Be(n)+1;d++)for(let f of en(d).ramps)Math.abs(f.z-n)<110&&(!o||Math.abs(f.z-n)<Math.abs(o.z-n))&&(o=f);let l=s();if(o&&l<.75){t.push(o.big?{x:o.x,y:9.5,z:o.z+o.len+16,got:!1}:{x:o.x,y:4,z:o.z+o.len+12,got:!1});continue}let c=Ti[Math.floor(s()*3)]+(s()<.15?(s()<.5?-1:1)*3.6:0),h=s(),u=a?5+s()*1.5:h<.35?1.3:h<.6?3.8:5.5+s()*2.5;t.push({x:Math.max(-10.8+1.5,Math.min(10.8-1.5,c)),y:u,z:n,got:!1})}return t}var Hs=s=>Math.max(0,Math.min(1.2,s/3e3));function en(s){let t=Zi.get(s);if(t)return t;let e=Sr(s*7919+Bc*104729+13),n=s*Si,i=Hs(n);if(s<0)return t={i:s,z0:n,inter:null,jam:null,ramps:[],blds:[],check:!1,spawned:!1},Zi.set(s,t),t;let r=s>=29&&s<=31,a=s>0&&s%3===0&&!r?n+50:null,o=s>=4&&!r&&a===null&&e()<Math.min(.85,.3+i*.5)?{z0:n+12,z1:n+12+Math.min(150,30+i*55+e()*(20+i*20))}:null,l=[];if(o&&e()<Math.max(.25,.85-i*.45)){let h=Math.floor(e()*3);l.push({x:Ti[h],z:o.z0-40,hw:2,len:6,h:1.5,big:!1})}if(s>=1&&!r){let lane=(s%6),h=n+32+(s%3)*20;if(s%2===0){l.push({x:Ti[lane],z:h,hw:2.4,len:10,h:4.2,big:!0})}else if(s%3===0){l.push({x:Ti[(lane+2)%6],z:h,hw:2.2,len:7,h:2.8,big:!1})}}let c=[];for(let h of[-1,1]){let u=n;for(;u<n+Si-4;){let d=10+e()*20,f=Math.min(u+d,n+Si);if(a===null||f<a-Vn-2||u>a+Vn+2){let g=12+e()*14,x=e()<.15?40+e()*50:8+e()*28;c.push({x:h*(18+g/2),z:(u+f)/2,hx:g/2,hz:(f-u)/2-.6,h:x,tint:e(),uv:e(),sign:e()<.6?Math.floor(e()*1e3):-1})}u=f}}if(t={i:s,z0:n,inter:a,jam:o,ramps:l,blds:c,check:s>0&&s%md===0,spawned:!1},Zi.set(s,t),Zi.size>200)for(let h of Zi.keys())Math.abs(h-s)>80&&Zi.delete(h);return t}var Be=s=>Math.floor(s/Si);function Gn(s,t,e=0){let n=0,i=Be(t);for(let r=i-1;r<=i+1;r++)for(let a of en(r).ramps){let o=t-a.z;o>=0&&o<=a.len&&Math.abs(s-a.x)<=a.hw+e&&(n=Math.max(n,o/a.len*a.h))}return n}function xd(s){let t=Be(s);for(let e=t-1;e<=t+1;e++){let n=en(e);if(n.inter!==null&&Math.abs(s-n.inter)<Si/2)return n.inter}return null}function Vc(s,t,e){if(t<0){let a=Ei-e;return Math.abs(s)>a?{x:Math.sign(s)*a,z:t,nx:-Math.sign(s),nz:0}:null}let n=xd(t),i=n!==null&&Math.abs(t-n)<Vn-e,r=17.5-e;if(Math.abs(s)<=r)return null;if(i)return Math.abs(s)>Gs-e?{x:Math.sign(s)*(Gs-e),z:t,nx:-Math.sign(s),nz:0}:null;if(n!==null&&Math.abs(t-n)<Vn+1&&Math.abs(s)>r+1.5){let a=Math.sign(t-n);return{x:s,z:n+a*(Vn-e),nx:0,nz:-a}}return{x:Math.sign(s)*r,z:t,nx:-Math.sign(s),nz:0}}var Jv=6,Kv=12,vd=1.05,jv=.9,Hc=jv+.5,Qv=2,ty=1,yd=14,Yo=4,Xo=9.81,_d=19,ey=4.5,ny=2.5,Md=14,iy=4e-4,Td=2.3,sy=.36,bd=new C,Tr=new C,ky=new he,Sd=new pe(0,0,0,"YXZ"),qo=class{constructor(){A(this,"pos",new C);A(this,"vel",new C);A(this,"q",new he);A(this,"yaw",0);A(this,"mode","ground");A(this,"tank",1);A(this,"steerS",0);A(this,"cap",33);A(this,"turbo",0);A(this,"air",0);A(this,"gforce",1);A(this,"thrusting",0);A(this,"stunt",0);A(this,"stuntKind","roll");A(this,"stuntDir",1);A(this,"stunts",0);A(this,"_sq",new he);A(this,"onRamp",!1);A(this,"pitchVis",0);A(this,"rollVis",0);A(this,"slip",0);A(this,"speed",0);A(this,"altMax",0);A(this,"launchCharge",0);A(this,"standT",1);A(this,"stall",0);A(this,"fill",1/ny);A(this,"pv",new C);A(this,"lastVy",0);A(this,"lastPitch",0)}reset(t,e,n,i=0){this.pos.set(t,0,e),this.yaw=n,this.vel.set(Math.sin(n)*i,0,Math.cos(n)*i),this.mode="ground",this.stunt=0,this.stunts=0,this.turbo=0,this.tank=1,this.air=0,this.gforce=1,this.speed=i,this.pv.copy(this.vel),this.steerS=0,this.pitchVis=this.rollVis=0,this.pose()}fwd(t=new C){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}up(t=new C){return t.set(0,1,0).applyQuaternion(this.q)}get vF(){return this.vel.x*Math.sin(this.yaw)+this.vel.z*Math.cos(this.yaw)}pose(){if(Sd.set(this.pitchVis,this.yaw,this.rollVis),this.q.setFromEuler(Sd),this.stunt>0){let t=Math.min(1,1-this.stunt/vd),e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,n=e*Math.PI*2*this.stuntDir;this._sq.setFromAxisAngle(this.stuntKind==="roll"?Tr.set(0,0,1):Tr.set(1,0,0),n),this.q.multiply(this._sq)}}stuntLift(){return this.stunt<=0?0:.6*(1-bd.set(0,1,0).applyQuaternion(this.q).y)}step(t,e,n){this.pv.copy(this.vel),this.turbo>0&&(this.turbo=Math.max(0,this.turbo-t));let i=e.thrust&&this.tank>0;this.thrusting=i?1:0,this.steerS+=(e.steer-this.steerS)*(1-Math.exp(-t*9)),this.yaw+=(-this.steerS*sy-this.yaw)*(1-Math.exp(-t*(this.mode==="air"?3:6))),this.mode==="ground"?this.ground(t,e,n,i):this.airStep(t,e,n,i),i?this.tank=Math.max(0,this.tank-t/ey):this.mode==="ground"&&(this.tank=Math.min(1,this.tank+t*this.fill));let r=this.fwd(bd);for(let o of[1,-1]){let l=this.pos.x+r.x*o*1.3,c=this.pos.z+r.z*o*1.3,h=Vc(l,c,1.05);if(h){this.pos.x+=h.x-l,this.pos.z+=h.z-c;let u=this.vel.x*h.nx+this.vel.z*h.nz;u<0&&(this.vel.x-=u*h.nx*1.2,this.vel.z-=u*h.nz*1.2,this.vel.x*=.97,this.vel.z*=.97,u<-1&&n.push({k:"wall",v:-u}))}}Tr.copy(this.vel).sub(this.pv).divideScalar(t),Tr.y+=Xo;let a=Math.min(6,Tr.length()/Xo);this.gforce+=(a-this.gforce)*(1-Math.exp(-t*6)),this.speed=Math.hypot(this.vel.x,this.vel.z),this.pos.y>this.altMax&&(this.altMax=this.pos.y)}ground(t,e,n,i){let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=this.vel.x*r+this.vel.z*a,l=this.vel.x*-a+this.vel.z*r;this.stall>0&&(this.stall-=t);let c=this.cap+(this.turbo>0?yd:0),h=this.turbo>0?Md*1.7:Md,u=0;e.gas>0&&o<c&&this.stall<=0&&(u=h*Math.min(1,(c-o)/3+.15)*e.gas),e.brake>0&&o>0&&(u-=14*e.brake),u-=iy*o*Math.abs(o),o>c+1&&(u-=(o-c)*.6),o+=u*t,o<0&&e.gas>0&&(o=0),this.slip=l,l*=Math.exp(-t*9),this.vel.x=o*r-l*a,this.vel.z=o*a+l*r;let d=Gn(this.pos.x,this.pos.z,Hc);this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;let f=Gn(this.pos.x,this.pos.z,Hc);if(this.onRamp=f>0,this.vel.y=(f-d)/t,f>0){let g=Math.atan2(this.vel.y,Math.max(1,Math.abs(o)));this.pos.y=f,this.lastVy=this.vel.y,this.lastPitch=g,this.pitchVis=-g}else if(d>.4){this.pos.y=d,this.vel.y=Math.max(0,this.lastVy),this.mode="air",this.air=0,this.turbo=Math.min(Yo,this.turbo+(d>3?Qv:ty)),this.tank=1,n.push({k:"liftoff",ramp:!0,big:d>3}),this.pose();return}else this.pos.y=0,this.pitchVis+=(0-this.pitchVis)*(1-Math.exp(-t*12));this.rollVis+=(this.steerS*.05-this.rollVis)*(1-Math.exp(-t*6)),this.pose(),i&&(this.vel.y=Math.max(this.vel.y,0)+(_d-Xo)*t*3,this.pos.y+=this.vel.y*t+.02,this.mode="air",this.air=0,n.push({k:"liftoff",ramp:!1}))}airStep(t,e,n,i){this.air+=t,this.vel.y-=Xo*t,this.stunt>0?this.stunt=Math.max(0,this.stunt-t):(this.stunts===0&&this.pos.y>Jv&&this.vel.y>-3||this.stunts===1&&this.pos.y>Kv&&this.vel.y>-3)&&(this.stuntKind="roll",this.stunt=vd,this.stuntDir=this.stunts===1?-this.stuntDir:this.steerS>.2?-1:this.steerS<-.2||Math.random()<.5?1:-1,this.stunts++,n.push({k:"stunt",kind:this.stuntKind})),i&&(this.vel.y+=_d*t,this.vel.y>14&&(this.vel.y=14));let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=Math.hypot(this.vel.x,this.vel.z);this.vel.x+=(r*o-this.vel.x)*(1-Math.exp(-t*2)),this.vel.z+=(a*o-this.vel.z)*(1-Math.exp(-t*2));let l=this.cap+(this.turbo>0?yd:0),c=this.turbo>0?14:3;e.gas>0&&o<l&&(this.vel.x+=r*c*t,this.vel.z+=a*c*t),this.pos.addScaledVector(this.vel,t);let h=-Math.max(-.35,Math.min(.35,this.vel.y*.025)),u=this.steerS*.3;this.pitchVis+=(h-this.pitchVis)*(1-Math.exp(-t*5)),this.rollVis+=(u-this.rollVis)*(1-Math.exp(-t*5)),this.pose();let d=Gn(this.pos.x,this.pos.z,Hc);if(this.pos.y<=d){let f=this.vel.y;this.pos.y=d,this.mode="ground",this.vel.y=0,this.stunt=0,this.stunts=0,n.push({k:"land",vy:f,air:this.air}),this.air=0}}setPose(t,e,n,i){this.pos.set(t,e,n),this.q.copy(i)}};var $e=[{len:4.7,wid:1.85,h:1.45,mass:1,name:"\uC2B9\uC6A9\uCC28"},{len:4.8,wid:1.95,h:1.75,mass:1.3,name:"SUV"},{len:5.1,wid:1.9,h:2.2,mass:1.8,name:"\uD2B8\uB7ED"},{len:11,wid:2.5,h:3.2,mass:4,name:"\uBC84\uC2A4"},{len:6.4,wid:.5,h:1.1,mass:8,name:"\uACF5\uC0AC \uD39C\uC2A4"},{len:4.8,wid:1.9,h:1.5,mass:1.4,name:"\uACBD\uCC30"}],Ws=[80,44,26,18,40,4],Jo=130,ry=s=>({on:!1,t:s,x:0,y:0,z:0,yaw:0,lane:0,dir:1,sp:0,tgt:0,st:0,vx:0,vy:0,vz:0,rx:0,rz:0,wx:0,wy:0,wz:0,col:0,sq:1,cd:0,jam:!1,brake:!1,bounces:0,pitch:0}),oy=()=>({on:!1,x:0,y:0,z:0,yaw:0,sp:0,st:0,vx:0,vy:0,vz:0,rx:0,rz:0,wx:0,wz:0,t:0,col:0,inter:0,cz:0,side:1,flee:!1,stars:0,hop:!1}),wr=(s,t)=>s+t*(Vn+2.5),$o=(s,t)=>(t+s*.37)%34<15,Zo=class s{constructor(){A(this,"cars",[]);A(this,"peds",[]);A(this,"time",0);A(this,"R",Sr(12345));A(this,"sorted",[]);A(this,"crossBusy",new Map);A(this,"spawnedJam",new Set);A(this,"spawnedInter",new Set);A(this,"evq",[]);Ws.forEach((t,e)=>{for(let n=0;n<t;n++)this.cars.push(ry(e))});for(let t=0;t<Jo;t++)this.peds.push(oy())}clear(){for(let t of this.cars)t.on=!1;for(let t of this.peds)t.on=!1;this.spawnedJam.clear(),this.spawnedInter.clear()}take(t){for(let e of this.cars)if(!e.on&&e.t===t)return e;return null}pickType(){let t=this.R();return t<.55?0:t<.8?1:t<.93?2:3}addFence(t,e){let n=this.take(4);n&&Object.assign(n,{on:!0,x:t,y:0,z:e,lane:-1,dir:1,yaw:Math.PI/2,sp:0,tgt:0,st:2,vx:0,vy:0,vz:0,rx:0,rz:0,wx:0,wy:0,wz:0,col:0,sq:1,cd:0,jam:!0,brake:!1,bounces:0,pitch:0})}addCar(t,e,n,i=!1,r=this.pickType()){let a=this.take(r)??this.take(0);if(!a)return null;let o=$e[a.t];return Object.assign(a,{on:!0,x:Ti[t]+(this.R()-.5)*.3,y:0,z:e,lane:t,dir:Wo(t),yaw:Wo(t)>0?0:Math.PI,sp:n,tgt:i?0:n,st:0,vx:0,vy:0,vz:0,rx:0,rz:0,wx:0,wy:0,wz:0,col:Math.floor(this.R()*1e3),sq:1,cd:0,jam:i,brake:i,bounces:0,pitch:0}),a}free(t,e,n){for(let i of this.cars)if(i.on&&i.st===0&&i.lane===t&&Math.abs(i.z-e)<n)return!1;return!0}addPed(t,e,n,i,r,a=0,o=0){let l=this.peds.find(c=>!c.on);return l?(Object.assign(l,{on:!0,x:t,y:0,z:e,yaw:i,sp:r,st:n,vx:0,vy:0,vz:0,rx:0,rz:0,wx:0,wz:0,t:0,col:Math.floor(this.R()*1e3),inter:a,cz:o,side:Math.sign(t)||1,flee:!1,stars:0,hop:!1}),l):null}populate(t,e=!1){let n=this.R;for(let h of this.cars)h.on&&(h.z<t-140||h.z>t+620)&&(h.on=!1);for(let h of this.peds)h.on&&(h.z<t-80||h.z>t+320)&&(h.on=!1);for(let h=Be(t)-1;h<=Be(t+520);h++){let u=en(h);if(u.jam&&!this.spawnedJam.has(h)&&u.jam.z0<t+520){this.spawnedJam.add(h);for(let d=0;d<3;d++){let f=u.jam.z1;for(;f>u.jam.z0;){let g=this.addCar(d,f,0,!0);if(!g)break;f-=$e[g.t].len+1.2+n()*1.2}}for(let d=3;d<6;d++){let f=u.jam.z0+2;for(;f<u.jam.z1;){let g=this.addCar(d,f,0,!0);if(!g)break;f+=$e[g.t].len+1.4+n()*1.5}}for(let d of[-1,1])for(let f=u.jam.z0-4;f<=u.jam.z1+4;f+=Math.max(9,(u.jam.z1-u.jam.z0)/4))this.addFence(d*14.2,f)}if(u.inter!==null&&!this.spawnedInter.has(h)&&u.inter<t+300){this.spawnedInter.add(h);for(let d of[-1,1]){let f=wr(u.inter,d),g=5+Math.floor(n()*7);for(let x=0;x<g;x++){let m=n()<.5?-1:1;this.addPed(m*(10.8+.8+n()*1.6),f+(n()-.5)*3,1,m>0?-Math.PI/2:Math.PI/2,1.1+n()*.7,u.inter,f)}}}}let i=0,r=0;for(let h of this.cars)h.on&&!h.jam&&h.st===0&&(h.dir>0&&h.z>t+40&&i++,h.dir<0&&h.z>t-20&&r++);let a=Math.min(1.6,Hs(t)),o=Math.round((e?12:10)+a*14);for(let h=0;h<4&&i<o;h++){let u=Math.floor(n()*3),d=e?Math.max(60,t+40)+n()*420:t+330+n()*170;d>50&&this.free(u,d,14)&&!this.inJam(d)&&(this.addCar(u,d,11+n()*9),i++)}for(let h=0;h<4&&r<8+a*10;h++){let u=3+Math.floor(n()*3),d=e?Math.max(60,t)+n()*480:t+430+n()*120;d>50&&this.free(u,d,16)&&!this.inJam(d)&&(this.addCar(u,d,13+n()*7),r++)}let l=0;for(let h of this.peds)h.on&&h.inter<0&&l++;if(!e&&l<3&&n()<.012){let h=n()<.5?-1:1,u=t+160+n()*120;this.inJam(u)||this.addPed(h*(10.8+.8),u,2,h>0?-Math.PI/2:Math.PI/2,1.3+n()*.8,-1,u)}let c=0;for(let h of this.peds)h.on&&h.inter===0&&h.z>t-20&&c++;for(let h=0;h<6&&c<34;h++){let u=n()<.5?-1:1,d=e?Math.max(10,t-10)+n()*300:t+180+n()*120,f=n()<.5?1:-1;d<5||(this.addPed(u*(10.8+1+n()*3.6),d,0,f>0?0:Math.PI,1+n()*.6),c++)}}inJam(t){let e=en(Be(t));return!!e.jam&&t>e.jam.z0-15&&t<e.jam.z1+15}update(t,e,n){this.time+=t,this.crossBusy.clear();for(let r of this.peds)r.on&&r.inter>0&&r.st===2&&this.crossBusy.set(r.cz,!0);let i=this.sorted;i.length=0;for(let r of this.cars)r.on&&i.push(r);i.sort((r,a)=>r.z-a.z);for(let r=0;r<i.length;r++){let a=i[r];a.st===0?this.drive(a,r,t,e):a.st===3?this.chase(a,t,e,this.evq):this.fly(a,t),a.cd>0&&(a.cd-=t)}for(let r of this.peds)r.on&&this.ped(r,t,e);for(let r of this.evq)n.push(r);this.evq.length=0,this.hitPlayer(e,n),this.chain(n),this.pedHits(e,n)}drive(t,e,n,i){let r=this.sorted,a=t.dir,o=$e[t.t],l=Ti[t.lane],c=1e9;for(let d=e+a;d>=0&&d<r.length;d+=a){let f=r[d],g=(f.z-t.z)*a;if(g>70)break;if(!(g<=0||!(f.st===0?f.lane===t.lane:Math.abs(f.x-l)<2.4))){c=Math.min(c,g-(o.len+$e[f.t].len)/2);break}}if(i.pos.y<2&&Math.abs(i.pos.x-l)<2.3){let d=(i.pos.z-t.z)*a;d>0&&d<60&&(c=Math.min(c,d-o.len/2-Td))}for(let d=Be(t.z)-1;d<=Be(t.z)+1;d++){let f=en(d).inter;if(f===null)continue;let g=wr(f,-a),x=g-a*3.5,m=(x-t.z)*a-o.len/2;m>-1&&m<50&&($o(f,this.time)||this.crossBusy.get(g)||this.crossBusy.get(wr(f,a)))&&(c=Math.min(c,m+1))}let h=Math.max(0,Math.min(t.tgt,(c-2)*.9));t.sp<h?t.sp=Math.min(h,t.sp+3.5*n):t.sp=Math.max(h,t.sp-10*n),c<.3&&(t.sp=0),t.brake=t.sp<t.tgt-1||t.jam,t.z+=a*t.sp*n,t.x+=(l-t.x)*(1-Math.exp(-n*2));let u=Gn(t.x,t.z+a*o.len*.3);t.y+=(u-t.y)*(1-Math.exp(-n*14)),t.pitch=-a*(u>0?.25:0)}cops(){let t=0;for(let e of this.cars)e.on&&e.t===5&&e.st===3&&t++;return t}spawnCop(t){let e=this.take(5);if(!e)return;let n=Math.max(-10.8+1.5,Math.min(10.8-1.5,t.pos.x+(this.R()-.5)*6));Object.assign(e,{on:!0,x:n,y:0,z:t.pos.z-70-this.R()*20,lane:-1,dir:1,yaw:0,sp:Math.max(20,t.speed),tgt:0,st:3,vx:0,vy:0,vz:0,rx:0,rz:0,wx:0,wy:0,wz:0,col:0,sq:1,cd:1,jam:!1,brake:!1,bounces:0,pitch:0})}chase(t,e,n,i){let r=n.pos.z-t.z;if(r>180||r<-60){t.on=!1;return}let a=r>8?Math.min(75,n.speed+9):Math.max(0,n.speed-1+(r-4));t.sp+=(a-t.sp)*(1-Math.exp(-e*1.5));let o=Math.max(-10.8+1.3,Math.min(10.8-1.3,n.pos.x)),l=Math.max(-7,Math.min(7,(o-t.x)*1.6));t.x+=l*e,t.z+=t.sp*e,t.yaw=Math.atan2(l,Math.max(5,t.sp))*.8,t.y=Gn(t.x,t.z);for(let c of this.cars){if(c===t||!c.on||c.st===1||c.t===4||Math.abs(c.z-t.z)>8)continue;let h=s.obb(c,t.x+Math.sin(t.yaw)*2,t.z+Math.cos(t.yaw)*2,1);if(h){let u=t.sp;this.launch(t,-h.nx*4,6+u*.15,u*.5,1.2),(c.st===0||c.st===2)&&this.launch(c,0,4+u*.12,u*.6,.8),i.push({k:"copdown",x:t.x,y:1,z:t.z,p:u});return}}t.cd<=0&&n.pos.y<1.6&&Math.abs(n.pos.x-t.x)<2.1&&r>0&&r<4.9&&(n.vel.x*=.7,n.vel.z*=.7,n.stall=.35,t.sp*=.55,t.cd=.9,i.push({k:"cop",x:t.x,y:1,z:t.z+2,p:n.speed}))}fly(t,e){let n=$e[t.t];if(t.st===1){t.vy-=9.81*e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.rx+=t.wx*e,t.yaw+=t.wy*e,t.rz+=t.wz*e;let i=Math.max(Gn(t.x,t.z),.2);if(t.y<i&&t.vy<0&&(t.y=i,t.bounces++,t.vy=-t.vy*.38,t.vx*=.7,t.vz*=.7,t.wx*=.6,t.wy*=.6,t.wz*=.6,t.vy<2.2||t.bounces>3)){t.st=2,t.vy=0;let r=Math.PI/2,a=Math.round(t.rz/r)*r,o=Math.round(t.rx/Math.PI)*Math.PI;Math.abs(Math.sin(a))>.5&&(o=0),t.rx=o,t.rz=a}Math.abs(t.x)>17&&(t.x=Math.sign(t.x)*17,t.vx*=-.4)}else{let i=Math.exp(-e*2.5);t.vx*=i,t.vz*=i,t.x+=t.vx*e,t.z+=t.vz*e;let r=Math.abs(Math.sin(t.rz))>.5,a=Math.abs(Math.cos(t.rx)*Math.cos(t.rz)+1)<.3;t.y=Math.max(Gn(t.x,t.z),0)+(r?n.wid/2-n.h/2:0)}}launch(t,e,n,i,r){let a=$e[t.t].mass,o=this.R;t.st=1,t.vx=e,t.vy=n,t.vz=i,t.bounces=0,t.jam=!1,t.y<.3&&(t.y=.3),t.wx=(o()<.5?-1:1)*(3+o()*6)*r/Math.sqrt(a),t.wz=(o()<.5?-1:1)*(3+o()*7)*r/Math.sqrt(a),t.wy=(o()-.5)*6*r,t.cd=.4}static obb(t,e,n,i){let r=$e[t.t],a=Math.sin(t.yaw),o=Math.cos(t.yaw),l=e-t.x,c=n-t.z,h=l*a+c*o,u=l*o-c*a,d=r.len/2,f=r.wid/2,g=Math.max(-d,Math.min(d,h)),x=Math.max(-f,Math.min(f,u)),m=h-g,p=u-x,S=m*m+p*p;if(S>i*i)return null;if(S>1e-6){let w=Math.sqrt(S),R=m/w,L=p/w;return{nx:R*a+L*o,nz:R*o-L*a,depth:i-w}}let T=d-Math.abs(h),y=f-Math.abs(u);if(T<y){let w=Math.sign(h)||1;return{nx:w*a,nz:w*o,depth:T+i}}let P=Math.sign(u)||1;return{nx:P*o,nz:-P*a,depth:y+i}}carVel(t){return t.st===0?{x:0,z:t.dir*t.sp}:{x:t.vx,z:t.vz}}hitPlayer(t,e){let n=Math.sin(t.yaw),i=Math.cos(t.yaw);for(let r of this.cars){if(!r.on||r.cd>0||r.st===3||Math.abs(r.z-t.pos.z)>9||r.st===1&&r.y>4)continue;let a=$e[r.t],o=r.st===2&&Math.abs(Math.sin(r.rz))>.5?r.y+a.h/2+a.wid/2:r.y+a.h*r.sq;if(!(t.pos.y>o+.6))for(let l of[1.3,-1.3]){let c=t.pos.x+n*l,h=t.pos.z+i*l,u=s.obb(r,c,h,1.05);if(!u)continue;if(t.mode==="air"&&t.vel.y<-.5&&t.pos.y>o-1.1){let p=r.sq>=1;(r.st===0||r.st===2)&&(r.sq=Math.max(.5,r.sq*.6),r.st===0&&(r.st=2,r.sp=0,r.vx=0,r.vz=r.dir*2)),t.pos.y=o,t.vel.y=7.5,r.cd=.5,e.push({k:"stomp",x:r.x,y:o,z:r.z,p:p?1:0,bus:r.t===3});break}let d=this.carVel(r),f=t.vel.x-d.x,g=t.vel.z-d.z,x=Math.hypot(f,g),m=-(f*u.nx+g*u.nz);if(t.pos.x+=u.nx*u.depth,t.pos.z+=u.nz*u.depth,m>3.5){let p=a.mass,S=1.7/(1+p),T=d.x+f*S-u.nx*(2+x*.1),y=d.z+g*S-u.nz*(2+x*.1),P=Math.min(17,2.5+x*.32/Math.sqrt(p));this.launch(r,T,P,y,Math.min(1.6,.5+x/25));let w=p/(p+1.5)*.62;t.vel.x-=f*w,t.vel.z-=g*w,t.stall=.3,e.push({k:"car",x:r.x,y:r.y+a.h/2,z:r.z,p:x,big:x>30,bus:r.t===3,t:r.t})}else m>0&&(t.vel.x+=u.nx*m*1.1,t.vel.z+=u.nz*m*1.1,r.st===2&&(r.vx-=u.nx*m*.5,r.vz-=u.nz*m*.5),e.push({k:"bump",x:r.x,y:1,z:r.z,p:m}));break}}}chain(t){for(let e of this.cars){if(!e.on||e.st!==1)continue;let n=Math.hypot(e.vx,e.vz,e.vy);if(n<6)continue;let i=$e[e.t];for(let r of this.cars){if(r===e||!r.on||r.cd>0||Math.abs(r.z-e.z)>12)continue;let a=$e[r.t];if(e.y>r.y+a.h+.3)continue;let o=s.obb(r,e.x,e.z,i.wid/2+.3);if(!o)continue;let l=(r.jam?.3:.6)/Math.sqrt(a.mass);this.launch(r,e.vx*l-o.nx*2,Math.min(12,3+n*.25*l),e.vz*l-o.nz*2,.8),e.vx*=.6,e.vz*=.6,e.cd=.25,t.push({k:"chain",x:r.x,y:r.y+1,z:r.z,p:n,t:r.t})}}}ped(t,e,n){if(t.t+=e,t.st===0){let i=t.flee?3.2:t.sp;t.x+=Math.sin(t.yaw)*i*e,t.z+=Math.cos(t.yaw)*i*e,this.dodge(t,n)}else t.st===1?$o(t.inter,this.time)&&t.t>.3+t.col%7*.12&&(t.st=2,t.t=0,t.yaw=t.x<0?Math.PI/2:-Math.PI/2):t.st===2?(t.x+=Math.sin(t.yaw)*t.sp*e,Math.abs(t.x)>10.8+.6&&Math.sign(t.x)===Math.sign(Math.sin(t.yaw))&&(t.inter<0?(t.st=0,t.inter=0,t.x=Math.sign(t.x)*(10.8+1.4),t.yaw=t.col%2?0:Math.PI):(t.st=1,t.t=0,t.x=Math.sign(t.x)*(10.8+.8+t.col%5*.3))),this.dodge(t,n)):t.st===3?(t.vy-=9.81*e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.rx+=t.wx*e,t.rz+=t.wz*e,Math.abs(t.x)>17&&(t.x=Math.sign(t.x)*17,t.vx*=-.5),t.y<=0&&t.vy<0&&t.hop?(t.y=0,t.vy=t.vx=t.vz=0,t.rz=0,t.hop=!1,t.st=t.inter?2:0):t.y<=0&&t.vy<0&&(t.y=0,t.vy<-4?(t.vy=-t.vy*.35,t.vx*=.5,t.vz*=.5):(t.st=4,t.t=0,t.vx=t.vz=t.vy=0,t.rx=-Math.PI/2,t.rz=0,t.stars=1))):t.st===4?(t.stars=1,t.t>2.2&&(t.st=5,t.t=0)):t.st===5&&(t.rx=-Math.PI/2*(1-Math.min(1,t.t/.45)),t.y=Math.sin(Math.min(1,t.t/.45)*Math.PI)*.4,t.t>.5&&(t.rx=0,t.y=0,t.stars=0,t.st=0,t.flee=!0,t.inter=0,Math.abs(t.x)<10.8+.5&&(t.x=Math.sign(t.x||1)*(10.8+1.5)),t.yaw=this.R()<.5?0:Math.PI))}dodge(t,e){if(e.speed<9||e.pos.y>3||t.col%3!==0)return;let n=Math.sin(e.yaw),i=Math.cos(e.yaw),r=t.x-e.pos.x,a=t.z-e.pos.z,o=r*n+a*i;if(o>4&&o<16){let l=r*i-a*n;if(Math.abs(l)<2.4){let c=Math.sign(l)||1;t.st=3,t.hop=!0,t.t=0,t.vy=5,t.vx=c*4.5*i,t.vz=-c*4.5*n,t.wx=0,t.wz=0,t.rz=-c*.5,t.col++}}}pedHits(t,e){let n=this.R;for(let i of this.peds)if(!(!i.on||i.st===3&&!i.hop&&i.t<.7)){if(Math.abs(i.z-t.pos.z)<4&&t.pos.y<i.y+1.8&&t.speed>2){let r=Math.sin(t.yaw),a=Math.cos(t.yaw);for(let o of[1.3,-1.3]){let l=i.x-(t.pos.x+r*o),c=i.z-(t.pos.z+a*o);if(l*l+c*c<1.5*1.5){this.knock(i,t.vel.x,t.vel.z,t.speed),e.push({k:"ped",x:i.x,y:1.4,z:i.z,p:t.speed});break}}}if(i.st!==3)for(let r of this.cars){if(!r.on||r.st!==1||Math.abs(r.z-i.z)>7)continue;if(s.obb(r,i.x,i.z,.5)&&r.y<1.8){let o=Math.hypot(r.vx,r.vz);this.knock(i,r.vx,r.vz,Math.max(o,6)),e.push({k:"ped",x:i.x,y:1.4,z:i.z,p:o});break}}}}knock(t,e,n,i){let r=this.R,a=Math.min(1,i/30);t.st=3,t.hop=!1,t.t=0,t.vx=e*.85+(r()-.5)*6,t.vz=n*.85+(r()-.5)*3,t.vy=6+a*9+r()*3,t.y=Math.max(t.y,.2),t.wx=(r()<.5?-1:1)*(8+r()*8),t.wz=(r()<.5?-1:1)*(4+r()*8),t.stars=0}};var Ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ay=new Ns(-1,1,1,-1,0,1),Wc=class extends Wt{constructor(){super(),this.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rt([0,2,0,0,2,0],2))}},ly=new Wc,Ci=class{constructor(t){this._mesh=new j(ly,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ay)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var jo=class extends cn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=bi.clone(t.uniforms),this.material=new ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ci(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Er=class extends cn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Qo=class extends cn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ta=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new vt);this._width=n.width,this._height=n.height,e=new Ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jo(Ko),this.copyPass.material.blending=On,this.clock=new zo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Er!==void 0&&(a instanceof Er?n=!0:a instanceof Qo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ea=class extends cn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var wd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Xs=class s extends cn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ve(r,a,{type:ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ve(r,a,{type:ln});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ve(r,a,{type:ln});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=wd;this.highPassUniforms=bi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ye({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new vt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ko;this.copyUniforms=bi.clone(h.uniforms),this.blendMaterial=new ye({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new tt,this.oldClearAlpha=1,this.basic=new Lt,this.fsQuad=new Ci(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new vt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Xs.BlurDirectionX=new vt(1,0);Xs.BlurDirectionY=new vt(0,1);var Ed={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var na=class extends cn{constructor(){super();let t=Ed;this.uniforms=bi.clone(t.uniforms),this.material=new Fo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_c?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Tc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ge=s=>[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255],Ze=class{constructor(){A(this,"p",[]);A(this,"c",[])}tri(t,e,n,i){this.p.push(...t,...e,...n);for(let r=0;r<3;r++)this.c.push(...i)}quad(t,e,n,i,r){this.tri(t,n,e,r),this.tri(t,i,n,r)}box(t,e,n,i,r,a,o,l){let c=(d,f,g)=>[d,f,g],h=l??{},u=(d,f,g,x,m)=>this.quad(x,g,f,d,m);u(c(t,i,a),c(e,i,a),c(e,i,r),c(t,i,r),h.top??o),u(c(t,n,r),c(e,n,r),c(e,n,a),c(t,n,a),h.bot??o),u(c(e,n,a),c(e,i,a),c(t,i,a),c(t,n,a),h.front??o),u(c(t,n,r),c(t,i,r),c(e,i,r),c(e,n,r),h.back??o),u(c(e,n,r),c(e,i,r),c(e,i,a),c(e,n,a),h.side??o),u(c(t,n,a),c(t,i,a),c(t,i,r),c(t,n,r),h.side??o)}loft(t,e,n,i){let r=t[0].p.length,a=h=>{let u=h.p.map(([d,f])=>[d,f,h.z]);for(let d=r-2;d>=1;d--)u.push([-h.p[d][0],h.p[d][1],h.z]);return u},o=t.map(a),l=o[0].length;for(let h=0;h<o.length-1;h++)for(let u=0;u<l;u++){let d=(u+1)%l,f=u<r-1?u:2*r-3-u;this.quad(o[h][u],o[h][d],o[h+1][d],o[h+1][u],e((t[h].z+t[h+1].z)/2,f))}let c=(h,u,d)=>{let g=h.reduce((m,p)=>m+p[1],0)/l,x=h[0][2];for(let m=0;m<l;m++){let p=h[m],S=h[(m+1)%l];d?this.tri([0,g,x],p,S,u):this.tri([0,g,x],S,p,u)}};c(o[0],n,!0),c(o[o.length-1],i,!1)}disk(t,e,n,i,r,a=14,o=0,l=Math.PI*2,c=1){for(let h=0;h<a;h++){let u=o+(l-o)*h/a,d=o+(l-o)*(h+1)/a,f=[t,e,n],g=[t,e+Math.sin(u)*i,n+Math.cos(u)*i],x=[t,e+Math.sin(d)*i,n+Math.cos(d)*i];c>0?this.tri(f,x,g,r):this.tri(f,g,x,r)}}build(){let t=new Wt;return t.setAttribute("position",new Rt(this.p,3)),t.setAttribute("color",new Rt(this.c,3)),t.computeVertexNormals(),t}},Xc=Ge(15527664),qc=Ge(1842465),cy=Ge(3816772),Ad=Ge(2825494),Yc=Ge(855568),hy=[[2.32,.26,.78,.92,.4,.88,.55,.7,.585,.6],[2.12,.18,.86,1,.34,.99,.62,.8,.68,.7],[1.45,.16,.88,1.02,.31,1.01,.73,.83,.8,.84],[.95,.16,.88,1,.3,1,.765,.8,.845,.905],[.35,.16,.88,.99,.3,.99,.785,.71,1,1.11],[-.4,.16,.88,1,.3,1,.8,.66,1.09,1.15],[-1.1,.16,.88,1.02,.3,1.02,.82,.68,1.03,1.08],[-1.65,.16,.88,1.02,.31,1.02,.835,.75,.94,.97],[-2.18,.24,.8,.96,.4,.96,.82,.8,.875,.895],[-2.3,.3,.74,.9,.43,.92,.8,.78,.86,.88]],Ki=.36,Jc=.3,Kc=1.45,Rd=.9;function Pd(){let s=new Ze;s.loft(hy.map(([t,e,n,i,r,a,o,l,c,h])=>({z:t,p:[[0,e],[n,e],[i,r],[a,o],[l,c],[0,h]]})),(t,e)=>{let n=t<.95&&t>-2;return e===0?qc:e===1?cy:e===2?Xc:e===3?n&&t<.85?Ad:Xc:n?Ad:Xc},Yc,qc),s.box(-.82,.82,.14,.42,2.18,2.33,Yc);for(let t of[-1,1])for(let e of[-1,1])s.disk(t*1.035,Ki,e*Kc,.47,qc,12,0,Math.PI,t);return s.box(-.75,.75,.12,.36,-2.34,-2,Yc),s.build()}function Id(){let s=new Ze,t=[1.6,1.6,1.7],e=[1.6,.08,.06],n=[1.4,.55,.1];s.box(-.86,.86,.555,.585,2.3,2.335,t),s.box(-.88,.88,.8,.835,-2.32,-2.29,e);for(let i of[-1,1])s.box(i*.995-.012,i*.995+.012,.7,.73,1,1.18,n);return s.build()}function Ld(){let s=new kn(Ki,Ki,Jc,18,1);return s.rotateZ(Math.PI/2),s}function Dd(){let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d");t.fillStyle="#111214",t.fillRect(0,0,128,128),t.translate(64,64),t.fillStyle="#2a2c31",t.beginPath(),t.arc(0,0,50,0,Math.PI*2),t.fill(),t.fillStyle="#d8dadf";for(let n=0;n<6;n++)t.save(),t.rotate(n*Math.PI/3),t.beginPath(),t.moveTo(-4,-8),t.lineTo(5,-8),t.lineTo(14,-48),t.lineTo(2,-48),t.closePath(),t.fill(),t.restore();t.fillStyle="#55585f",t.beginPath(),t.arc(0,0,9,0,Math.PI*2),t.fill(),t.strokeStyle="#c8cad0",t.lineWidth=2,t.beginPath(),t.arc(0,0,49,0,Math.PI*2),t.stroke();let e=new Os(s);return e.colorSpace=Oe,e}var Ri=[1,1,1],Pi=Ge(1054238),jc=Ge(1118481),$c=Ge(2763306),uy=Ge(1315860),Qc=(s,t,e,n=.34,i)=>{for(let r of[-1,1])for(let a of i??[t*.32,-t*.32])s.box(r*e/2-.12,r*e/2+.12,0,n*2,a-n,a+n,uy)};function th(s,t,e){let n=new Ze,i=s/2,r=t/2,a=(l,c,h,u,d,f)=>({z:l,p:[[0,c],[h,c],[r,c+.12],[r,u],[d,f],[0,f+.02]]}),o=e/1.45;n.loft([a(i,.28,r-.2,.62*o,r-.15,.72*o),a(i-.6,.25,r-.1,.8*o,r-.12,.86*o),a(i*.35,.25,r-.1,.84*o,r-.18,.92*o),a(i*.12,.25,r-.1,.88*o,r-.32,1.4*o),a(-i*.38,.25,r-.1,.9*o,r-.32,1.42*o),a(-i*.62,.25,r-.1,.92*o,r-.2,1*o),a(-i,.3,r-.2,.86*o,r-.18,.95*o)],(l,c)=>c===0?jc:c===1?$c:c===4&&l<i*.3&&l>-i*.7?Pi:(c===3&&l<i*.2&&l>-i*.6,Ri),$c,$c);for(let l of[-1,1]){let c=[l*(r-.02),.95*o,i*.08],h=[l*(r-.02),.95*o,-i*.55],u=[l*(r-.27),1.33*o,-i*.36],d=[l*(r-.29),1.33*o,i*.1];l<0?n.quad(c,h,u,d,Pi):n.quad(d,u,h,c,Pi)}return Qc(n,s,t),n.build()}function Nd(s,t,e){let n=new Ze,i=s/2,r=t/2;n.box(-r,r,.35,e,-i,i,Ri,{front:Ri,back:Ri});for(let a of[-1,1])n.box(a*r-.01*a-.01,a*r+.02*a+.01,1.3,e-.4,-i+.6,i-1.2,Pi);return n.box(-r+.1,r-.1,1.1,e-.3,i-.01,i+.02,Pi),n.box(-r+.1,r-.1,1.6,e-.4,-i-.02,-i+.01,Pi),n.box(-r,r,0,.35,-i,i,jc),Qc(n,s,t,.5,[i*.6,-i*.55]),n.build()}function Ud(s,t,e){let n=new Ze,i=s/2,r=t/2;n.box(-r,r,.4,1.9,i-1.5,i,Ri),n.box(-r+.08,r-.08,1.25,1.85,i-.02,i+.01,Pi);for(let o of[-1,1])n.box(o*r-.01,o*r+.01,1.25,1.8,i-1.3,i-.25,Pi);let a=Ge(14211280);return n.box(-r-.05,r+.05,.5,e,-i,i-1.6,a,{top:a}),n.box(-r,r,0,.45,-i,i,jc),Qc(n,s,t,.36,[i-.8,-i+1.1]),n.build()}function Od(s,t,e,n=!1){let i=new Ze,r=s/2,a=t/2,o=n?.25:.32,l=[1.5,1.45,1.2],c=[1.5,.06,.04];for(let h of[-1,1])i.box(h*(a-.12-o),h*(a-.12),e,e+.16,r-.02,r+.03,l),i.box(h*(a-.12-o),h*(a-.12),e+.08,e+.24,-r-.03,-r+.02,c);return i.build()}var Cd=Ge(1578e4),dy=Ge(2764346),Zc=Ge(2759700),fy=Ge(1118481);function Fd(){let s=new Ze;s.box(-.24,.24,.85,1.42,-.13,.13,Ri);for(let t of[-1,1])s.box(t*.24,t*.36,.82,1.4,-.08,.08,Ri);return s.build()}function Bd(){let s=new Ze;s.box(-.13,.13,1.44,1.72,-.13,.13,Cd,{top:Zc,back:Zc}),s.box(-.14,.14,1.66,1.76,-.15,.12,Zc),s.box(-.09,-.03,1.58,1.64,.13,.135,[0,0,0]),s.box(.03,.09,1.58,1.64,.13,.135,[0,0,0]);for(let t of[-1,1])s.box(t*.03,t*.2,.05,.86,-.1,.1,dy),s.box(t*.03,t*.2,0,.08,-.1,.16,fy),s.box(t*.24,t*.36,.72,.82,-.07,.07,Cd);return s.build()}function kd(s,t,e){let n=new Ze,i=s/2,r=t/2,a=Ge(16738832),o=Ge(15921906),l=Ge(3355443);for(let c=-i,h=0;c<i-.01;c+=.5,h++)n.box(-r*.4,r*.4,.35,e,c,Math.min(i,c+.5),h%2?o:a);for(let c of[-i+.2,0,i-.2])n.box(-r,r,0,.08,c-.2,c+.2,l),n.box(-.04,.04,0,.4,c-.04,c+.04,l);return n.build()}function zd(s,t){let e=new Ze,n=[1.8,1.1,.1];for(let i of[-s/2+.4,s/2-.4])e.box(-.08,.08,t,t+.16,i-.08,i+.08,n);return e.build()}function Vd(s,t,e){let n=new Ze,i=s/2,r=t/2;n.box(-.55,-.02,e+.02,e+.16,-.2,.2,[3,.15,.1]),n.box(.02,.55,e+.02,e+.16,-.2,.2,[.1,.3,3]);for(let a of[-1,1])n.box(a*(r-.44),a*(r-.12),.62,.78,i-.02,i+.03,[1.5,1.45,1.2]),n.box(a*(r-.44),a*(r-.12),.7,.86,-i-.03,-i+.02,[1.5,.06,.04]);return n.build()}var le=(s,t)=>{let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]},se=(s,t=!1,e=!0)=>{let n=new Os(s);return e&&(n.colorSpace=Oe),t&&(n.wrapS=n.wrapT=ur),n.anisotropy=4,n},qs=(s,t,e,n,i,r=1)=>{let a=r,o=()=>(a=a*16807%2147483647)/2147483647;for(let l=0;l<n;l++){let c=Math.floor(o()*255);s.fillStyle=`rgba(${c},${c},${c},${i})`,s.fillRect(o()*t,o()*e,1+o()*2,1+o()*2)}};function Gd(){let[e,n]=le(512,512),i=512/(10.8*2),r=512/vn,a=o=>512/2-o*i;n.fillStyle="#16171b",n.fillRect(0,0,512,512),qs(n,512,512,9e3,.05,7),n.globalCompositeOperation="lighter";for(let o of[-1,1]){let l=n.createRadialGradient(a(o*(10.8-.6)),256,0,a(o*(10.8-.6)),256,11*i);l.addColorStop(0,"rgba(255,190,120,.42)"),l.addColorStop(.5,"rgba(255,170,100,.14)"),l.addColorStop(1,"rgba(255,160,90,0)"),n.fillStyle=l,n.fillRect(0,0,512,512)}n.globalCompositeOperation="source-over",n.fillStyle="#d9a52a",n.fillRect(a(0)-6,0,4,512),n.fillRect(a(0)+2,0,4,512),n.fillStyle="#d8d8d0";for(let o of[-3.6,-7.2,3.6,7.2])for(let l=0;l<3;l++){let c=l*512/3;n.fillRect(a(o)-2,c+r*1,4,r*3)}for(let o of[-10.8+.25,10.8-.25])n.fillRect(a(o)-3,0,6,512);return se(e,!0)}function Hd(){let[e,n]=le(256,512),i=256/5,r=512/vn;n.fillStyle="#3c3a3a",n.fillRect(0,0,256,512),n.strokeStyle="rgba(0,0,0,.35)",n.lineWidth=2;for(let o=0;o<256;o+=i*.6)n.beginPath(),n.moveTo(o,0),n.lineTo(o,512),n.stroke();for(let o=0;o<512;o+=r*.6)n.beginPath(),n.moveTo(0,o),n.lineTo(256,o),n.stroke();qs(n,256,512,4e3,.06,3),n.globalCompositeOperation="lighter";let a=n.createRadialGradient(i*.6,512/2,0,i*.6,512/2,8*i);return a.addColorStop(0,"rgba(255,190,120,.45)"),a.addColorStop(1,"rgba(255,160,90,0)"),n.fillStyle=a,n.fillRect(0,0,256,512),n.globalCompositeOperation="source-over",n.fillStyle="#8a8884",n.fillRect(0,0,i*.25,512),se(e,!0)}function Wd(){let[e,n]=le(256,256),i=256/8,r=11,a=()=>(r=r*16807%2147483647)/2147483647;n.fillStyle="#14161c",n.fillRect(0,0,256,256);for(let o=0;o<8;o++)for(let l=0;l<8;l++){let c=a()<.42,h=a()<.7;n.fillStyle=c?h?`hsl(${35+a()*15},${70+a()*20}%,${55+a()*25}%)`:`hsl(${195+a()*20},${40+a()*30}%,${60+a()*20}%)`:"#1e222a",n.fillRect(o*i+i*.18,l*i+i*.22,i*.64,i*.56)}return se(e,!0)}var my=[["\uCE58\uD0A8","#ff3a3a","#fff"],["\uD3B8\uC758\uC810","#1e8cff","#fff"],["PC\uBC29","#00e0a0","#062"],["\uB178\uB798\uBC29","#ff3ad0","#fff"],["\uCE74\uD398","#ffb020","#321"],["\uC57D\uAD6D","#2fd04a","#fff"],["\uBD84\uC2DD","#ff7a1a","#fff"],["\uD638\uD504","#ffe040","#422"]];function Xd(){let[s,t]=le(512,512);return my.forEach(([e,n,i],r)=>{let a=r*64;t.fillStyle="#0c0c10",t.fillRect(0,a,512,64),t.fillStyle=n,t.fillRect(6,a+6,500,52),t.fillStyle="rgba(255,255,255,.18)",t.fillRect(6,a+6,500,10),t.font='bold 40px "Apple SD Gothic Neo","Noto Sans KR","Malgun Gothic",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle=i,t.fillText(e,256,a+34)}),se(s)}function qd(){let[s,t]=le(128,64),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64),t.globalCompositeOperation="destination-in";let n=t.createLinearGradient(0,0,128,0);return n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.06,"rgba(0,0,0,1)"),n.addColorStop(.94,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,128,64),se(s)}function Te(){let[s,t]=le(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),se(s)}function Yd(){let[t,e]=le(128,128),n=3,i=()=>(n=n*16807%2147483647)/2147483647;for(let a=0;a<16;a++){let o=i()*Math.PI*2,l=i()*26,c=64+Math.cos(o)*l,h=64+Math.sin(o)*l,u=18+i()*22,d=e.createRadialGradient(c,h-u*.25,0,c,h,u);d.addColorStop(0,"rgba(255,255,255,.42)"),d.addColorStop(.6,"rgba(235,238,245,.22)"),d.addColorStop(1,"rgba(220,225,235,0)"),e.fillStyle=d,e.fillRect(0,0,128,128)}let r=e.createRadialGradient(64,64,30,64,64,64);return r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=r,e.fillRect(0,0,128,128),se(t)}function $d(){let[s,t]=le(64,64);t.translate(32,32),t.fillStyle="#ffe040",t.strokeStyle="#7a4a00",t.lineWidth=3,t.beginPath();for(let e=0;e<10;e++){let n=e%2?11:28,i=e*Math.PI/5-Math.PI/2;t.lineTo(Math.cos(i)*n,Math.sin(i)*n)}return t.closePath(),t.fill(),t.stroke(),se(s)}function sh(){let[s,t]=le(64,128),e=t.createRadialGradient(32,64,4,32,64,62);return e.addColorStop(0,"rgba(0,0,0,.75)"),e.addColorStop(.6,"rgba(0,0,0,.45)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,128),se(s,!1,!1)}function Zd(){let[s,t]=le(128,256),e=t.createLinearGradient(0,256,0,0);return e.addColorStop(0,"rgba(255,250,230,.55)"),e.addColorStop(1,"rgba(255,250,230,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(44,256),t.lineTo(84,256),t.lineTo(128,0),t.lineTo(0,0),t.closePath(),t.fill(),se(s)}function Jd(){let[s,t]=le(128,128);t.fillStyle="#16161a",t.fillRect(0,0,128,128),t.fillStyle="#e8b818";for(let e=-4;e<8;e++)t.beginPath(),t.moveTo(e*32,0),t.lineTo(e*32+16,0),t.lineTo(e*32+16+128,128),t.lineTo(e*32+128,128),t.closePath(),t.fill();return se(s,!0)}function Kd(){let[s,t]=le(1024,128);return t.fillStyle="rgba(0,20,30,.85)",t.fillRect(0,0,1024,128),t.strokeStyle="#28e0ff",t.lineWidth=6,t.strokeRect(4,4,1016,120),t.font='bold 64px "Apple SD Gothic Neo","Noto Sans KR",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#bff6ff",t.fillText("CHECKPOINT  +\uC2DC\uAC04",512,68),se(s)}function jd(s){let[t,e]=le(1024,128);return e.fillStyle="rgba(0,20,30,.85)",e.fillRect(0,0,1024,128),e.strokeStyle="#28e0ff",e.lineWidth=6,e.strokeRect(4,4,1016,120),e.font='bold 76px "Avenir Next","Helvetica Neue",Arial,sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle="#bff6ff",e.fillText(`${s} KM`,512,68),se(t)}function Qd(){let[s,t]=le(1024,128);return t.fillStyle="rgba(0,10,20,.8)",t.fillRect(0,0,1024,128),t.font='bold 72px "Avenir Next","Helvetica Neue",Arial,sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#e8fbff",t.shadowColor="#28e0ff",t.shadowBlur=8,t.fillText("OPEN ROAD  \u25B6\u25B6",512,68),se(s)}function tf(){let[s,t]=le(64,8),e=t.createLinearGradient(0,0,64,0);return e.addColorStop(0,"rgba(255,30,20,0)"),e.addColorStop(.5,"rgba(255,30,20,.55)"),e.addColorStop(1,"rgba(255,30,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,8),se(s)}var ia=null;function rh(){if(ia)return ia;let[s,t]=le(256,256);t.fillStyle="#8d8e90",t.fillRect(0,0,256,256),qs(t,256,256,6e3,.12,5);for(let e=0;e<30;e++)t.fillStyle=`rgba(60,60,60,${Math.random()*.15})`,t.fillRect(Math.random()*256,Math.random()*256,Math.random()*40,Math.random()*40);return t.fillStyle="#e8e8e4",t.fillRect(150,0,7,256),ia=se(s,!0),ia}function ef(){let[s,t]=le(128,256);t.fillStyle="#1b1e26",t.fillRect(0,0,128,256),qs(t,128,256,1500,.08,9),t.strokeStyle="rgba(255,255,255,.08)",t.lineWidth=2;for(let e=0;e<256;e+=64)t.beginPath(),t.moveTo(0,e),t.lineTo(128,e),t.stroke();t.fillStyle="#e8b818",t.fillRect(0,0,10,256),t.fillRect(118,0,10,256),t.fillStyle="#28e0ff",t.shadowColor="#28e0ff",t.shadowBlur=10;for(let e=0;e<2;e++){let n=e*128+96;t.beginPath(),t.moveTo(30,n),t.lineTo(64,n-46),t.lineTo(98,n),t.lineTo(84,n),t.lineTo(64,n-26),t.lineTo(44,n),t.closePath(),t.fill()}return se(s,!0)}function nf(s,t,e,n,i){let[r,a]=le(s*2,s),o=i,l=()=>(o=o*16807%2147483647)/2147483647;a.fillStyle=t,a.fillRect(0,0,s*2,s);for(let c=0;c<n;c++){let h=l()*s*2,u=l()*s,d=4+l()*s*.18,f=a.createRadialGradient(h,u,0,h,u,d),g=e[Math.floor(l()*e.length)];f.addColorStop(0,g),f.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=f,a.fillRect(h-d,u-d,d*2,d*2)}return[r,a]}function sf(){let[s,t]=nf(512,"#b2502a",["rgba(120,40,20,.6)","rgba(220,120,70,.5)","rgba(80,30,20,.5)","rgba(240,170,110,.35)"],900,5);return t.fillStyle="rgba(255,240,230,.7)",t.fillRect(0,0,1024,14),t.fillRect(0,498,1024,14),se(s)}function rf(){let[s,t]=nf(512,"#1d4f9a",["rgba(60,140,70,.75)","rgba(150,130,80,.6)","rgba(255,255,255,.55)","rgba(40,110,60,.7)"],700,11);return se(s)}var eh=null;function Ar(){return se(oh())}function oh(){if(eh)return eh;let s=256,[t,e]=le(s,s),n=s/2;e.fillStyle="#d99a48";for(let i of[-1,1])e.beginPath(),e.moveTo(n+i*30,n-50),e.lineTo(n+i*84,n-112),e.lineTo(n+i*96,n-20),e.closePath(),e.fill();e.fillStyle="#f5d7a8";for(let i of[-1,1])e.beginPath(),e.moveTo(n+i*50,n-50),e.lineTo(n+i*80,n-92),e.lineTo(n+i*84,n-36),e.closePath(),e.fill();e.fillStyle="#e0a552",e.beginPath(),e.ellipse(n,n+6,100,92,0,0,Math.PI*2),e.fill(),e.fillStyle="#fbf0dc",e.beginPath(),e.ellipse(n,n+44,74,56,0,0,Math.PI*2),e.fill();for(let i of[-1,1])e.beginPath(),e.ellipse(n+i*40,n-4,20,14,0,0,Math.PI*2),e.fill();e.fillStyle="#1a1008";for(let i of[-1,1])e.beginPath(),e.ellipse(n+i*40,n-6,13,11,0,0,Math.PI*2),e.fill();e.fillStyle="#fff";for(let i of[-1,1])e.beginPath(),e.arc(n+i*40+6,n-10,4,0,Math.PI*2),e.fill();e.fillStyle="#e0a552";for(let i of[-1,1])e.beginPath(),e.ellipse(n+i*36,n-24,16,7,i*.2,0,Math.PI*2),e.fill();return e.fillStyle="#1a1008",e.beginPath(),e.ellipse(n,n+26,18,12,0,0,Math.PI*2),e.fill(),e.strokeStyle="#1a1008",e.lineWidth=5,e.lineCap="round",e.beginPath(),e.moveTo(n,n+36),e.lineTo(n,n+48),e.moveTo(n-26,n+50),e.quadraticCurveTo(n,n+66,n+26,n+50),e.stroke(),eh=t,t}function ah(){let[s,t]=le(32,128),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.35,"rgba(255,255,255,.9)"),e.addColorStop(.6,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,128),t.globalCompositeOperation="destination-in";let n=t.createLinearGradient(0,0,32,0);return n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.5,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,32,128),se(s)}function of(){let[s,t]=le(1024,160);return t.fillStyle="rgba(20,4,4,.85)",t.fillRect(0,0,1024,160),t.strokeStyle="#ff5030",t.lineWidth=8,t.strokeRect(6,6,1012,148),t.font='900 84px Orbitron,"Avenir Next",Arial,sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#fff0e8",t.shadowColor="#ff5030",t.shadowBlur=24,t.fillText("MARS LAUNCH \u25B2",512,86),se(s)}function af(){let[s,t]=le(8,128),e=t.createLinearGradient(0,128,0,0);return e.addColorStop(0,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,8,128),se(s)}var nh=null,lf=!1,ih=[];function lh(s){lf?s():ih.push(s)}function ch(){if(nh)return nh;let s=256,[t,e]=le(s,s),n=s/2,i=118,r=i*456/636,a=()=>{e.save(),e.shadowColor="rgba(255,210,90,.95)",e.shadowBlur=16,e.strokeStyle="#ffd23a",e.lineWidth=6,e.beginPath(),e.ellipse(n,n,r,i,0,0,Math.PI*2),e.stroke(),e.restore()};e.fillStyle="#f2c230",e.beginPath(),e.ellipse(n,n,r,i,0,0,Math.PI*2),e.fill(),a();let o=new Image;return o.onload=()=>{e.clearRect(0,0,s,s),e.save(),e.beginPath(),e.ellipse(n,n,r,i,0,0,Math.PI*2),e.clip(),e.drawImage(o,14,0,456,636,n-r,n-i,r*2,i*2),e.restore(),a(),lf=!0;for(let l of ih)l();ih.length=0},o.src = "/musk.jpg",nh=t,t}function sa(){let s=se(ch());return lh(()=>{s.needsUpdate=!0}),s}function cf(){let[s,t]=le(256,72);return t.font='900 italic 46px Orbitron,"Avenir Next",Arial,sans-serif',t.textAlign="center",t.textBaseline="middle",t.lineWidth=8,t.strokeStyle="#3a1a00",t.strokeText("EAT ME!",128,38),t.fillStyle="#ffd23a",t.fillText("EAT ME!",128,38),se(s)}function hf(){let[s,t]=le(512,96);return t.fillStyle="#f4f6fa",t.fillRect(0,0,512,96),t.fillStyle="#1a3a8a",t.fillRect(0,70,512,26),t.font='900 italic 60px Orbitron,"Avenir Next",Arial,sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#10204a",t.fillText("POLICE",256,38),se(s)}function uf(){let[s,t]=le(256,256);t.fillStyle="#8a3a1c",t.fillRect(0,0,256,256);let e=21,n=()=>(e=e*16807%2147483647)/2147483647;for(let i=0;i<500;i++){let r=n()*256,a=n()*256,o=2+n()*22,l=t.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,n()<.5?"rgba(60,20,10,.35)":"rgba(200,110,60,.3)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(r-o,a-o,o*2,o*2)}return qs(t,256,256,4e3,.08,4),se(s,!0)}function df(){let[s,t]=le(1024,200);return t.fillStyle="rgba(10,6,16,.85)",t.fillRect(0,0,1024,200),t.strokeStyle="#ffb040",t.lineWidth=8,t.strokeRect(8,8,1008,184),t.font='900 96px Orbitron,"Avenir Next",Arial,sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#fff3d8",t.shadowColor="#ff9a30",t.shadowBlur=30,t.fillText("MUSK EMPIRE",512,92),t.font="700 34px Orbitron,Arial,sans-serif",t.shadowBlur=12,t.fillStyle="#ffd6a0",t.fillText("\u2014 WELCOME, ROADSTER \u2014",512,160),se(s)}function ff(){let[t,e]=le(512,512);e.fillStyle="#2b2e34",e.fillRect(0,0,512,512),qs(e,512,512,5e3,.1,17),e.strokeStyle="rgba(0,0,0,.35)",e.lineWidth=2;for(let n=0;n<=512;n+=64)e.beginPath(),e.moveTo(n,0),e.lineTo(n,512),e.stroke(),e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();return e.strokeStyle="#f2c418",e.lineWidth=22,e.beginPath(),e.arc(512/2,512/2,512*.36,0,Math.PI*2),e.stroke(),e.strokeStyle="#f4f4f4",e.lineWidth=34,e.lineCap="square",e.beginPath(),e.moveTo(512*.33,512*.33),e.lineTo(512*.67,512*.67),e.moveTo(512*.67,512*.33),e.lineTo(512*.33,512*.67),e.stroke(),se(t)}var xy=[15921906,15921906,1579292,1579292,12106946,12106946,7040885,2043738,10491418,3105720,15245344,13153418,3107386,15921906],vy=[2781142,3123274,13908522,2781142],yy=[3105720,15921906,3105720,7049152],pf=[14826042,3111640,15909424,3846240,15790320,2236962,10506448,16747056,3195072,9071178],ra=new C(0,4e4,0),_y=Wt.prototype.computeVertexNormals;Wt.prototype.computeVertexNormals=function(){_y.call(this);let s=this.attributes.normal;if(!s)return;let t=s.array;for(let e=0;e<t.length;e+=3)t[e]*t[e]+t[e+1]*t[e+1]+t[e+2]*t[e+2]>1e-8||(t[e]=0,t[e+1]=1,t[e+2]=0);s.needsUpdate=!0};var ke=new ie,oa=new ie,hn=new he,Ys=new pe(0,0,0,"YXZ"),ji=new C,Qi=new C,un=new tt,Rn=new C,Pn=new C,dn=class dn{constructor(t){A(this,"renderer");A(this,"scene",new pr);A(this,"cam");A(this,"chunks",new Map);A(this,"mats",{});A(this,"road");A(this,"walks",[]);A(this,"ground");A(this,"lamps");A(this,"lampGlow");A(this,"carBody",[]);A(this,"carLight",[]);A(this,"carShadow");A(this,"pedShirt");A(this,"pedRest");A(this,"stars");A(this,"heroMat");A(this,"hero",new Se);A(this,"wheels",[]);A(this,"jets",[]);A(this,"heroShadow");A(this,"beam");A(this,"headSpot");A(this,"sky");A(this,"lampStreak");A(this,"carStreak");A(this,"lightsByChunk",new Map);A(this,"camMode",0);A(this,"shake",0);A(this,"camPos",new C(0,3,-10));A(this,"camLook",new C);A(this,"fovS",62);A(this,"quality",1);A(this,"env");A(this,"composer");A(this,"bloom");A(this,"bloomOn",!0);A(this,"stripe",(()=>{let t=new Kt(.55,4);return t.rotateX(-Math.PI/2),t})());A(this,"stop",(()=>{let t=new Kt(10.8,.5);return t.rotateX(-Math.PI/2),t})());A(this,"tlPole",(()=>{let t=new Ze,e=[.25,.26,.29];return t.box(-.1,.1,0,6.5,-.1,.1,e),t.box(-4,.1,6.3,6.45,-.06,.06,e),t.build()})());A(this,"tlBox",new me(1.3,.5,.4));A(this,"tlLamp",new mr(.17,10));A(this,"roadGen",-1);A(this,"ledSeg",new me(.18,.12,1));A(this,"rampGlow",(()=>{let t=new Kt(1,1);return t.rotateX(-Math.PI/2),t})());A(this,"rimMat");A(this,"gateGlow");A(this,"camOverride",null);A(this,"snapCam",!1);A(this,"coins",[]);A(this,"chompT",[]);A(this,"dogeSp",[]);A(this,"inSpace",!1);A(this,"spaceG",null);A(this,"marsPos",new C);A(this,"cop",new Se);A(this,"copRed");A(this,"copBlue");A(this,"copGlow");A(this,"onOcean",!1);A(this,"oceanG",null);A(this,"shipG",null);A(this,"astro",null);A(this,"floatDoge",null);A(this,"dogePos",new C);A(this,"dogeG",null);A(this,"dogeOrb",[]);A(this,"onMars",!1);A(this,"marsG",null);A(this,"fireT",0);A(this,"elon",null);A(this,"elonParts",{});A(this,"skin","stock");A(this,"pvCam",new ze(30,2,.1,400));A(this,"cssW",1);A(this,"cssH",1);this.renderer=new Lo({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.toneMapping=yr,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Oe,this.cam=new ze(62,1,.5,900),this.scene.fog=new Xi(658454,.0042),this.scene.background=new tt(658454);let e=new pr;e.add(new j(new xn(50,24,12),new ye({side:Fe,vertexShader:"varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 p;void main(){float h=normalize(p).y;gl_FragColor=vec4(mix(vec3(.10,.07,.12),vec3(.02,.03,.08),smoothstep(-.1,.6,h))+vec3(.25,.12,.08)*exp(-abs(h)*10.),1.);}"})));let n=(l,c,h,u,d,f,g)=>{let x=new j(new Kt(f,g),new Lt({color:new tt(l).multiplyScalar(c),side:oe}));x.position.set(h,u,d),x.lookAt(0,0,0),e.add(x)};for(let l=0;l<8;l++){let c=l/8*Math.PI*2;n(16763024,6,Math.cos(c)*20,14,Math.sin(c)*20,3,1.2)}n(16722538,3,30,4,10,12,3),n(2679039,3,-30,5,-6,12,3),n(16777215,2,0,40,0,30,30);let i=new Us(this.renderer);this.env=i.fromScene(e,.02).texture,i.dispose();let r=new Ve(1,1,{type:ln,samples:4});this.composer=new ta(this.renderer,r),this.composer.addPass(new ea(this.scene,this.cam)),this.bloom=new Xs(new vt(256,256),.75,.5,.92),this.composer.addPass(this.bloom),this.composer.addPass(new na),this.scene.add(new Bs(5269664,2760728,1.25));let a=new Mi(16767152,1.1);a.position.set(-30,60,20),this.scene.add(a);let o=new Mi(6324479,.5);o.position.set(40,30,-60),this.scene.add(o),this.makeShared(),this.makeSky(),this.makeStreet(),this.makeTrack(),this.makeTraffic(),this.makeHero(),this.makeItems(),this.makeDoges()}makeShared(){let t=r=>new zn(r),e=Gd();e.repeat.set(1,1),this.mats.road=new Pe({map:e,emissive:16777215,emissiveMap:e,emissiveIntensity:.5,roughness:.42,metalness:.15,envMap:null});let n=Hd();this.mats.walk=t({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.5}),this.mats.bld=new Lt({map:Wd(),vertexColors:!0,color:new tt(1.25,1.25,1.25)}),this.mats.sign=new Lt({map:Xd(),color:new tt(1.5,1.5,1.5)}),this.mats.asphalt=t({color:1710879,emissive:789518}),this.mats.white=new Lt({color:13619144}),this.mats.ramp=t({map:Jd(),emissive:2236962}),this.mats.rampSide=t({color:3816772,emissive:657930}),this.mats.rampTop=new Lt({map:ef(),side:oe}),this.mats.ramp.side=oe;let i=Te();this.mats.glowR=new Lt({map:i,color:16724e3,transparent:!0,opacity:.5,blending:$t,depthWrite:!1}),this.mats.glowC=new Lt({map:i,color:2679039,transparent:!0,opacity:.5,blending:$t,depthWrite:!1}),this.mats.lip=new Lt({color:new tt(2.2,2.2,2.2),toneMapped:!1}),this.mats.led=new Lt({color:new tt(4,.35,.3)}),this.mats.pole=t({color:3816514}),this.mats.check=new Lt({map:Kd(),transparent:!0,side:oe,toneMapped:!1}),this.mats.cyan=new Lt({color:new tt(.5,2.6,3.2)}),this.mats.dark=t({color:657932})}makeSky(){let t=new xn(800,24,12),e=new ye({side:Fe,depthWrite:!1,fog:!1,uniforms:{},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;void main(){float h=normalize(vP).y;vec3 top=vec3(.015,.02,.06),hor=vec3(.16,.09,.16),glow=vec3(.35,.16,.12);vec3 c=mix(hor,top,smoothstep(0.,.45,h));c+=glow*exp(-abs(h)*14.)*.6;gl_FragColor=vec4(c,1.);}"});this.sky=new j(t,e),this.sky.renderOrder=-10,this.scene.add(this.sky);let n=[];for(let a=0;a<1400;a++){let o=Math.random()*Math.PI*2,l=.12+Math.random()*.88,c=Math.sqrt(1-l*l);n.push(Math.cos(o)*c*700,l*700,Math.sin(o)*c*700)}let i=new Wt;i.setAttribute("position",new Rt(n,3)),this.sky.add(new Bn(i,new ii({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8,depthWrite:!1})));let r=new ue(new ae({map:Te(),color:16773328,fog:!1,depthWrite:!1}));r.scale.set(60,60,1),r.position.set(-300,260,500),this.sky.add(r)}makeStreet(){let e=new Kt(10.8*2,1100);e.rotateX(-Math.PI/2);let n=e.attributes.uv;for(let d=0;d<n.count;d++)n.setY(d,n.getY(d)*1100/vn);this.road=new j(e,this.mats.road),this.scene.add(this.road);for(let d of[-1,1]){let f=new Kt(5,1100);f.rotateX(-Math.PI/2);let g=f.attributes.uv;for(let m=0;m<g.count;m++)g.setY(m,g.getY(m)*1100/vn),d<0&&g.setX(m,1-g.getX(m));let x=new j(f,this.mats.walk);x.position.x=d*(10.8+5/2),x.position.y=.03,this.walks.push(x),this.scene.add(x)}let i=new Kt(2e3,1100);i.rotateX(-Math.PI/2),this.ground=new j(i,this.mats.dark),this.ground.position.y=-.05,this.scene.add(this.ground);let r=new Ze,a=[.25,.26,.29];r.box(-.09,.09,0,8,-.09,.09,a),r.box(-.06,1.9,7.8,7.95,-.06,.06,a),r.box(1.4,2.1,7.62,7.82,-.22,.22,[.15,.15,.16]),r.box(1.45,2.05,7.6,7.63,-.18,.18,[2.4,2,1.5]);let o=Math.ceil(1100/vn)*2;this.lamps=new En(r.build(),new zn({vertexColors:!0}),o),this.scene.add(this.lamps);let l=new Float32Array(o*3),c=new Wt;c.setAttribute("position",new Ce(l,3));let h=new Kt(1,1);h.rotateX(-Math.PI/2);let u=new Lt({map:ah(),color:new tt(1,.72,.45),transparent:!0,opacity:.42,blending:$t,depthWrite:!1});this.lampStreak=new En(h,u,o),this.lampStreak.frustumCulled=!1,this.scene.add(this.lampStreak),this.carStreak=new En(h,new Lt({map:ah(),transparent:!0,opacity:.55,blending:$t,depthWrite:!1}),Ws.reduce((d,f)=>d+f,0)*2+2),this.carStreak.frustumCulled=!1,this.carStreak.setColorAt(0,un.set(16777215)),this.scene.add(this.carStreak),this.lampGlow=new Bn(c,new ii({map:Te(),color:16763024,size:5,transparent:!0,depthWrite:!1,blending:$t})),this.lampGlow.frustumCulled=!1,this.scene.add(this.lampGlow)}placeStreet(t){let e=Math.floor(t/vn)*vn,n=1100,i=e+n/2-250;this.road.position.z=i;for(let o of this.walks)o.position.z=i;this.ground.position.z=i;let r=this.lamps.count/2,a=this.lampGlow.geometry.attributes.position;for(let o=0;o<r;o++){let l=e-250+o*vn+vn/2;for(let c of[0,1]){let h=o*2+c,u=c?1:-1,d=u*(10.8+.6),f=l>0?1:0;Ys.set(0,u>0?Math.PI:0,0),hn.setFromEuler(Ys),ke.compose(ji.set(d,0,l),hn,Qi.set(f,f,f)),this.lamps.setMatrixAt(h,ke),a.setXYZ(h,d-u*1.75,f?7.5:-50,l),hn.identity(),ke.compose(ji.set(d-u*1.75,.06,l-7),hn,Qi.set(f*1.6,1,f*16)),this.lampStreak.setMatrixAt(h,ke)}}this.lampStreak.instanceMatrix.needsUpdate=!0,this.lamps.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0,this.sky.position.set(0,0,t)}buildChunk(t){let e=new Se,n=[],i=[],r=[],a=(u,d,f,g,x,m)=>{for(let[p,S]of[[u,x[0]],[f,x[2]],[d,x[1]],[u,x[0]],[g,x[3]],[f,x[2]]])n.push(...p),i.push(...S),r.push(...m)},o=25.6;for(let u of t.blds){let d=u.x-u.hx,f=u.x+u.hx,g=u.z-u.hz,x=u.z+u.hz,m=u.h,p=u.uv*8,S=u.tint,T=[.75+.25*Math.sin(S*6),.75+.2*Math.sin(S*6+2),.8+.2*Math.sin(S*6+4)],y=[.05,.05,.06],P=u.x<0?f:d,w=R=>[[p,0],[p+R/o,0],[p+R/o,m/o],[p,m/o]];u.x<0?a([P,0,x],[P,0,g],[P,m,g],[P,m,x],w(x-g),T):a([P,0,g],[P,0,x],[P,m,x],[P,m,g],w(x-g),T),a([d,0,g],[f,0,g],[f,m,g],[d,m,g],w(f-d),T.map(R=>R*.7)),a([f,0,x],[d,0,x],[d,m,x],[f,m,x],w(f-d),T.map(R=>R*.7)),a([d,m,g],[f,m,g],[f,m,x],[d,m,x],[[0,0],[0,0],[0,0],[0,0]],y)}let l=new Wt;l.setAttribute("position",new Rt(n,3)),l.setAttribute("uv",new Rt(i,2)),l.setAttribute("color",new Rt(r,3)),e.add(new j(l,this.mats.bld));let c=[],h=[];for(let u of t.blds){if(u.sign<0||u.hz<4)continue;let d=u.sign%8,f=Math.min(u.hz*1.6,7),g=3.4+u.sign%3,x=g+f/8*1.1,m=u.x<0?u.x+u.hx+.08:u.x-u.hx-.08,p=1-(d+1)/8,S=1-d/8,T=u.x<0?u.z+f/2:u.z-f/2,y=u.x<0?u.z-f/2:u.z+f/2;for(let[P,w]of[[[m,g,T],[0,p]],[[m,x,y],[1,S]],[[m,g,y],[1,p]],[[m,g,T],[0,p]],[[m,x,T],[0,S]],[[m,x,y],[1,S]]])c.push(...P),h.push(...w)}if(c.length){let u=new Wt;u.setAttribute("position",new Rt(c,3)),u.setAttribute("uv",new Rt(h,2));let d=new j(u,this.mats.sign);d.material.side=oe,e.add(d)}if(t.inter!==null){let u=t.inter;for(let g of[-1,1]){let x=new Kt(Gs-10.8,Vn*2);x.rotateX(-Math.PI/2);let m=new j(x,this.mats.asphalt);m.position.set(g*(10.8+(Gs-10.8)/2),.04,u),e.add(m)}let d=new Lt({color:16719904,toneMapped:!1}),f=new Lt({color:2162528,toneMapped:!1});for(let g of[-1,1]){let x=wr(u,g);for(let P=-10.8+.6;P<10.8-.4;P+=1.1){let w=new j(this.stripe,this.mats.white);w.position.set(P+.3,.02,x),e.add(w)}let m=new j(this.stop,this.mats.white);m.position.set(g<0?-10.8/2:10.8/2,.02,x+g*3.5),e.add(m);let p=g<0?-1:1,S=x+g*3,T=new j(this.tlPole,this.mats.pole);T.position.set(p*(10.8+.5),0,S),p<0&&(T.rotation.y=Math.PI),e.add(T);let y=new j(this.tlBox,this.mats.dark);y.position.set(p*(10.8-3.5),6.2,S),e.add(y);for(let[P,w]of[[d,-.35],[f,.35]]){let R=new j(this.tlLamp,P);R.position.set(p*(10.8-3.5)+w,6.2,S+g*.21),g<0&&(R.rotation.y=Math.PI),e.add(R)}}this.lightsByChunk.set(t.i,{it:u,red:d,green:f})}for(let u of t.ramps){let d=u.x-u.hw,f=u.x+u.hw,g=u.z,x=u.z+u.len,m=u.h,p=u.len/(u.hw*2)*.5,S=(B,O,W,G,K,z,et,at,xt,Vt)=>{B.push(...W,...G,...K,...W,...K,...z),O.push(...et,...at,...xt,...et,...xt,...Vt)},T=[],y=[];S(T,y,[d,0,g],[f,0,g],[f,m,x],[d,m,x],[0,0],[1,0],[1,p],[0,p]);let P=new Wt;P.setAttribute("position",new Rt(T,3)),P.setAttribute("uv",new Rt(y,2)),P.computeVertexNormals(),e.add(new j(P,this.mats.rampTop));let w=[],R=[];for(let B of[d,f])w.push(B,0,g,B,0,x,B,m,x),R.push(0,0,u.len/3,0,u.len/3,m/3);S(w,R,[d,0,x],[f,0,x],[f,m,x],[d,m,x],[0,0],[u.hw/1.5,0],[u.hw/1.5,m/3],[0,m/3]);let L=new Wt;L.setAttribute("position",new Rt(w,3)),L.setAttribute("uv",new Rt(R,2)),L.computeVertexNormals(),e.add(new j(L,this.mats.ramp));let b=Math.hypot(m,u.len),_=u.big?this.mats.led:this.mats.cyan;for(let B of[d+.06,f-.06]){let O=new j(this.ledSeg,_);O.scale.set(.8,.8,b),O.position.set(B,m/2+.05,(g+x)/2),O.lookAt(B,m+.05,x),e.add(O)}let I=new j(this.ledSeg,this.mats.lip);I.scale.set(1,1,u.hw*2),I.position.set(u.x,m+.04,x-.05),I.rotation.y=Math.PI/2,e.add(I);let X=new j(this.rampGlow,u.big?this.mats.glowR:this.mats.glowC);X.scale.set(u.hw*2+1.6,1,u.len+2.5),X.position.set(u.x,.04,(g+x)/2),e.add(X)}if(t.z0===Cn&&this.buildPad(e,Cn),t.check&&t.z0!==Cn){let u=t.z0;for(let x of[-1,1]){let m=new j(new me(.5,9,.5),this.mats.cyan);m.position.set(x*(10.8+.4),4.5,u),e.add(m)}let d=new Lt({map:jd(Math.round(t.z0/1e3)),transparent:!0,side:oe,toneMapped:!1}),f=new j(new Kt(10.8*2+1,2.6),d);f.position.set(0,8,u),f.rotation.y=Math.PI,e.add(f);let g=new j(new Kt(10.8*2,.8),this.mats.cyan);g.rotation.x=-Math.PI/2,g.position.set(0,.03,u),e.add(g)}return this.scene.add(e),e}syncChunks(t,e){let n=Be(t)-2,i=Be(t)+7,r=kc(),a=r!==this.roadGen;this.roadGen=r;for(let[o,l]of this.chunks)(a||o<n||o>i)&&(this.scene.remove(l),l.traverse(c=>{let h=c;h.isMesh&&h.geometry!==this.ledSeg&&h.geometry!==this.rampGlow&&h.geometry!==this.stripe&&h.geometry!==this.stop&&h.geometry!==this.tlPole&&h.geometry!==this.tlBox&&h.geometry!==this.tlLamp&&h.geometry.dispose()}),this.chunks.delete(o),this.lightsByChunk.delete(o));for(let o=n;o<=i;o++)this.chunks.has(o)||this.chunks.set(o,this.buildChunk(en(o)));for(let o of this.lightsByChunk.values()){let l=$o(o.it,e);o.red.color.setHex(l?16719904:3149840),o.green.color.setHex(l?1060888:2162528)}}makeTrack(){let t=new Se,e=-Ji,n=new Kt(Ei*2+8,e);n.rotateX(-Math.PI/2);let i=new j(n,new zn({color:1842466,emissive:723725}));i.position.set(0,.1,Ji/2),t.add(i);let r=this.mats.led;for(let O of[-1,1]){let W=new j(new me(.25,.12,e),r);W.position.set(O*(Ei-1),.16,Ji/2),t.add(W);let G=new j(new Kt(5,e),new Lt({map:tf(),transparent:!0,blending:$t,depthWrite:!1}));G.rotation.x=-Math.PI/2,G.position.set(O*(Ei-1),.14,Ji/2),t.add(G)}let a=new j(new Kt(Ei*2-4,.6),this.mats.white);a.rotation.x=-Math.PI/2,a.position.set(0,.14,-56),t.add(a);let o=_e.R,l=_e.hw,c=28,h=[],u=[],d=[];for(let O=0;O<=c;O++){let W=O/c*Math.PI/2;d.push([_e.z-o*Math.sin(W),o*(1-Math.cos(W))])}d.push([_e.z-o,o+_e.ext]);let f=0,g=[0];for(let O=1;O<d.length;O++)f+=Math.hypot(d[O][0]-d[O-1][0],d[O][1]-d[O-1][1]),g.push(f);let x=_e.x-l,m=_e.x+l;for(let O=0;O<d.length-1;O++){let[W,G]=d[O],[K,z]=d[O+1],et=g[O]/8,at=g[O+1]/8;h.push(x,G,W,m,G,W,m,z,K,x,G,W,m,z,K,x,z,K),u.push(0,et,1,et,1,at,0,et,1,at,0,at)}let p=new Wt;p.setAttribute("position",new Rt(h,3)),p.setAttribute("uv",new Rt(u,2)),p.computeVertexNormals();let S=new zn({map:rh(),emissive:6974058,emissiveMap:rh(),side:oe});t.add(new j(p,S));for(let O of[x,m])for(let W=0;W<d.length-1;W++){let[G,K]=d[W],[z,et]=d[W+1],at=Math.hypot(z-G,et-K),xt=new j(this.ledSeg,r);xt.scale.set(1,1,at+.05),xt.position.set(O,(K+et)/2+.05,(G+z)/2),xt.lookAt(O,et+.05,z),t.add(xt)}let T=new zn({color:6975096,emissive:1711138,side:oe}),y=[];for(let O of[x-.05,m+.05])for(let W=0;W<d.length-1;W++){let[G,K]=d[W],[z,et]=d[W+1];K>.001&&y.push(O,0,G,O,K,G,O,et,z),y.push(O,0,G,O,et,z,O,0,z)}let P=new Wt;P.setAttribute("position",new Rt(y,3)),P.computeVertexNormals(),t.add(new j(P,T));let w=new j(new me(l*2+.4,o+_e.ext,.6),T);w.position.set(_e.x,(o+_e.ext)/2,_e.z-o-1.1),t.add(w);let R=[];for(let[O,W,G]of[[-36,-110,18],[36,-120,18],[-40,-205,24],[40,-215,24],[0,-240,32]]){let K=new j(new me(.4,G,.4),T);K.position.set(O,G/2,W),t.add(K);for(let z=0;z<5;z++)for(let et=0;et<3;et++)R.push(O-2+z,G+.3+et*.7,W)}let L=new Wt;L.setAttribute("position",new Rt(R,3)),t.add(new Bn(L,new ii({map:Te(),color:16054527,size:2.2,transparent:!0,depthWrite:!1,blending:$t})));let b=new ks(16777215,900,140,.5,.5,1.5);b.position.set(0,26,-100),b.target.position.set(_e.x,12,_e.z-o),t.add(b,b.target);let _=new Lt({color:new tt(.2,1.04,1.28),fog:!1});for(let O of[-1,1]){let W=new j(new me(.6,10,.6),_);W.position.set(O*(10.8+1),5,0),t.add(W)}let I=new j(new me(10.8*2+2.6,.6,.6),_);I.position.set(0,10,0),t.add(I);let X=this.gateGlow=new Lt({map:qd(),color:new tt(.2,.66,.8),transparent:!0,opacity:.25,blending:$t,depthWrite:!1,side:oe,fog:!1,toneMapped:!1});for(let O of[-1,1]){let W=new j(new Kt(11.4,3),X);W.rotation.z=Math.PI/2,W.position.set(O*(10.8+1),5,.45),t.add(W)}{let O=new j(new Kt(10.8*2+4.4,3),X);O.position.set(0,10,.45),t.add(O)}let B=new j(new Kt(10.8*2,2.4),new Lt({map:Qd(),color:new tt(.78,.78,.78),transparent:!0,fog:!1,side:oe,toneMapped:!1}));B.position.set(0,8.2,0),B.rotation.y=Math.PI,t.add(B);for(let O of[-1,1]){let W=new j(new Kt(e,6),this.mats.dark);W.rotation.y=O*Math.PI/2*-1,W.position.set(O*(Ei+.2),3,Ji/2),t.add(W)}this.scene.add(t)}makeTraffic(){let t=$e.map((a,o)=>o===5?th(a.len,a.wid,a.h):o===4?kd(a.len,a.wid,a.h):o===3?Nd(a.len,a.wid,a.h):o===2?Ud(a.len,a.wid,a.h):th(a.len,a.wid,a.h)),e=new Pe({vertexColors:!0,metalness:.45,roughness:.3,envMap:this.env,envMapIntensity:1.3}),n=new Lt({vertexColors:!0,color:new tt(1.8,1.8,1.8)});$e.forEach((a,o)=>{let l=new En(t[o],e,Ws[o]),c=new En(o===5?Vd(a.len,a.wid,a.h):o===4?zd(a.len,a.h):Od(a.len,a.wid,o===3||o===2?.6:.62,o>=2),n,Ws[o]);l.frustumCulled=c.frustumCulled=!1,l.count=c.count=0,this.carBody.push(l),this.carLight.push(c),this.scene.add(l,c),l.setColorAt(0,un.set(16777215)),c.setColorAt(0,un.set(16777215))});let i=new Kt(1,1);i.rotateX(-Math.PI/2),this.carShadow=new En(i,new Lt({map:sh(),transparent:!0,depthWrite:!1,color:0,opacity:.85}),Ws.reduce((a,o)=>a+o,0)),this.carShadow.frustumCulled=!1,this.scene.add(this.carShadow),this.pedShirt=new En(Fd(),new zn({emissive:2236962}),Jo),this.pedRest=new En(Bd(),new zn({vertexColors:!0,emissive:1710618}),Jo),this.pedShirt.setColorAt(0,un.set(16777215)),this.pedShirt.frustumCulled=this.pedRest.frustumCulled=!1,this.scene.add(this.pedShirt,this.pedRest);let r=new Wt;r.setAttribute("position",new Ce(new Float32Array(180),3)),this.stars=new Bn(r,new ii({map:$d(),size:.42,transparent:!0,depthWrite:!1,alphaTest:.3})),this.stars.frustumCulled=!1,this.scene.add(this.stars)}syncTraffic(t,e){let n=[0,0,0,0,0,0],i=0,r=0,a=this.carStreak;for(let h of t.cars){if(!h.on)continue;let u=h.t,d=$e[u],f=n[u]++,g=d.h;if((h.st===0||h.st===3)&&u!==4&&Math.abs(h.x)<12){hn.identity();let y=h.dir,P=h.brake?1:.6;ke.compose(ji.set(h.x,.05,h.z-y*(d.len/2+2.6)),hn,Qi.set(1.8,1,5)),a.setMatrixAt(r,ke),a.setColorAt(r++,un.setRGB(P,.05,.03)),(y<0||u===5)&&(ke.compose(ji.set(h.x,.05,h.z+y*(d.len/2+4)),hn,Qi.set(2,1,8)),a.setMatrixAt(r,ke),a.setColorAt(r++,u===5?Math.sin(e*14)>0?un.setRGB(.9,.1,.1):un.setRGB(.1,.3,1):un.setRGB(.9,.85,.7)))}Ys.set(h.rx+(h.st===0?h.pitch:0),h.yaw,h.rz),hn.setFromEuler(Ys),ke.compose(ji.set(h.x,h.y+g*h.sq/2,h.z),hn,Qi.set(1,h.sq,1)),oa.makeTranslation(0,-g/2,0),ke.multiply(oa),this.carBody[u].setMatrixAt(f,ke),this.carLight[u].setMatrixAt(f,ke);let x=u===5?[1053724]:u===4?[16777215]:u===3?vy:u===2?yy:xy;if(this.carBody[u].setColorAt(f,un.setHex(x[h.col%x.length]).multiplyScalar(h.st===2&&u!==4?.55:1)),u===5){let y=Math.sin(e*14)>0;this.carLight[u].setColorAt(f,y?un.setRGB(1,.12,.12):un.setRGB(.12,.35,1))}let m=u===5?-1:u===4?Math.sin(e*8+h.z)>0?1:.25:h.st!==0?.15:h.brake?1:.6;m>=0&&this.carLight[u].setColorAt(f,un.setRGB(m,m,m));let p=Math.max(0,1-h.y/12),S=d.wid*1.5+h.y*.15,T=d.len*1.25+h.y*.15;hn.setFromAxisAngle(Rn.set(0,1,0),h.yaw),ke.compose(ji.set(h.x,.05,h.z),hn,Qi.set(S*(.4+.6*p),1,T*(.4+.6*p))),this.carShadow.setMatrixAt(i++,ke)}for(let h=0;h<$e.length;h++){let u=this.carBody[h],d=this.carLight[h];u.count=d.count=n[h],u.instanceMatrix.needsUpdate=d.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0),d.instanceColor&&(d.instanceColor.needsUpdate=!0)}this.carShadow.count=i,this.carShadow.instanceMatrix.needsUpdate=!0,a.count=r,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0);let o=0,l=0,c=this.stars.geometry.attributes.position;for(let h of t.peds){if(!h.on)continue;let u=h.y,d=h.rz,f=Math.abs(Math.sin(h.rx));if(h.st===0||h.st===2){let g=e*(h.flee?14:8)+h.col;u+=Math.abs(Math.sin(g))*.07,d+=Math.sin(g)*.07}if((h.st===4||h.st===5||h.y<.6&&f>.5)&&(u-=.65*f),Ys.set(h.rx,h.yaw,d),hn.setFromEuler(Ys),ke.compose(ji.set(h.x,u+.85,h.z),hn,Qi.set(1,1,1)),oa.makeTranslation(0,-.85,0),ke.multiply(oa),this.pedShirt.setMatrixAt(o,ke),this.pedRest.setMatrixAt(o,ke),this.pedShirt.setColorAt(o,un.setHex(pf[h.col%pf.length])),o++,h.stars&&l<18){for(let g=0;g<3;g++){let x=e*4+g*2.1;c.setXYZ(l*3+g,h.x+Math.cos(x)*.45,.55+Math.sin(e*6+g)*.05,h.z+Math.sin(x)*.45)}l++}}this.pedShirt.count=this.pedRest.count=o,this.pedShirt.instanceMatrix.needsUpdate=this.pedRest.instanceMatrix.needsUpdate=!0,this.pedShirt.instanceColor&&(this.pedShirt.instanceColor.needsUpdate=!0),c.needsUpdate=!0,this.stars.geometry.setDrawRange(0,l*3)}makeHero(){this.heroMat=new xr({vertexColors:!0,flatShading:!0,metalness:.45,roughness:.22,clearcoat:1,clearcoatRoughness:.06,envMap:this.env,envMapIntensity:1.6});let t=new j(Pd(),this.heroMat),e=new j(Id(),new Lt({vertexColors:!0,toneMapped:!1}));this.hero.add(t,e);let n=new Pe({color:1118740,roughness:.8}),i=this.rimMat=new Lt({map:Dd()}),r=Ld(),a=new mr(Ki*.92,20);for(let f of[-1,1])for(let g of[1,-1]){let x=new Se;x.position.set(f*Rd,Ki,g*Kc);let m=new Se;m.add(new j(r,n));let p=new j(a,i);p.position.x=f*(Jc/2+.005),p.rotation.y=f*Math.PI/2,m.add(p),x.add(m),this.hero.add(x),this.wheels.push(x)}let o=new Oo(.22,1.6,10,1,!0);o.translate(0,-.8,0);let l=new Lt({color:8050943,transparent:!0,opacity:.7,blending:$t,depthWrite:!1,side:oe,toneMapped:!1});for(let[f,g]of[[-.65,1.35],[.65,1.35],[-.65,-1.45],[.65,-1.45]]){let x=new j(o,l);x.name="jet",x.position.set(f,.15,g),x.scale.y=0,this.hero.add(x),this.jets.push(x)}let c=new ue(new ae({map:Te(),color:16777215,blending:$t,depthWrite:!1,transparent:!0,opacity:.7}));c.scale.set(3.2,.7,1),c.position.set(0,.57,2.45),this.hero.add(c);let h=new ue(new ae({map:Te(),color:16719904,blending:$t,depthWrite:!1,transparent:!0,opacity:.6}));h.scale.set(3,.6,1),h.position.set(0,.82,-2.45),this.hero.add(h),this.scene.add(this.hero),this.makeCop();let u=new Kt(2.9,5.6);u.rotateX(-Math.PI/2),this.heroShadow=new j(u,new Lt({map:sh(),transparent:!0,depthWrite:!1,color:0})),this.scene.add(this.heroShadow);let d=new Kt(14,34);d.rotateX(-Math.PI/2),d.translate(0,0,19),this.beam=new j(d,new Lt({map:Zd(),transparent:!0,depthWrite:!1,blending:$t,opacity:.55})),this.scene.add(this.beam),this.headSpot=new ks(16774368,60,60,.55,.6,1.2),this.scene.add(this.headSpot,this.headSpot.target)}syncHero(t,e){this.hero.quaternion.copy(t.q),this.hero.position.copy(t.pos),t.stunt>0&&(Pn.set(0,.6,0).applyQuaternion(t.q),this.hero.position.y+=.6-Pn.y,this.hero.position.x-=Pn.x,this.hero.position.z-=Pn.z);let n=t.vF*e/Ki;this.wheels.forEach((l,c)=>{let h=l.children[0];h.rotation.x+=n,c%2===0&&(l.rotation.y=-t.steerS*.45)});let i=t.thrusting||t.stunt>0;this.jets.forEach((l,c)=>{let h=i?.8+Math.random()*.4:0;l.scale.set(1,l.scale.y+(h-l.scale.y)*.5,1),l.visible=l.scale.y>.02});let r=t.pos.y,a=Math.max(0,1-r/15);this.heroShadow.position.set(t.pos.x,this.onOcean?dn.OCEAN.y+dn.DECK-.55:t.pos.z<0&&!this.onMars?.17:this.onMars?ra.y+.06:.06,t.pos.z),this.heroShadow.rotation.y=t.yaw,this.heroShadow.scale.setScalar(.6+.4*a),this.heroShadow.material.opacity=.9*a,this.beam.position.set(t.pos.x,t.pos.z<0?.18:.07,t.pos.z),this.beam.rotation.y=t.yaw,this.beam.material.opacity=.5*Math.max(0,1-r/3);let o=Rn.set(Math.sin(t.yaw),0,Math.cos(t.yaw));this.headSpot.position.copy(t.pos).addScaledVector(o,2.2).setY(t.pos.y+.7),this.headSpot.target.position.copy(t.pos).addScaledVector(o,25).setY(0)}updateCam(t,e,n,i){if(this.camOverride){let x=this.camOverride;this.camPos.distanceTo(x.pos)>300&&(this.camPos.copy(x.pos),this.camLook.copy(x.look)),this.camPos.lerp(x.pos,1-Math.exp(-e*4)),this.camLook.lerp(x.look,1-Math.exp(-e*6)),this.cam.position.copy(this.camPos),this.shake>0&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-e*2)),this.cam.lookAt(this.camLook),this.fovS+=(x.fov-this.fovS)*(1-Math.exp(-e*3)),this.cam.fov=this.fovS,this.cam.updateProjectionMatrix();return}if(n==="title"){let x=i*.18+2.2,m=9.5;Rn.set(t.pos.x+Math.sin(x)*m,2.2+Math.sin(i*.3)*.5,t.pos.z+Math.cos(x)*m),this.cam.position.copy(Rn),this.cam.lookAt(t.pos.x,1.4,t.pos.z-3),this.cam.fov=62,this.cam.updateProjectionMatrix(),this.camPos.copy(Rn),this.camLook.set(t.pos.x,1.4,t.pos.z),this.fovS=62;return}if(n==="intro"){let x=Pn.set(_e.x+19,t.pos.y>8?t.pos.y*.45+6:4,_e.z+44);this.snapCam&&(this.snapCam=!1,this.camPos.copy(x),this.camLook.set(t.pos.x,t.pos.y*.85+1,t.pos.z),this.fovS=66),this.camPos.lerp(x,1-Math.exp(-e*3)),this.cam.position.copy(this.camPos),this.camLook.lerp(Rn.set(t.pos.x,t.pos.y*.85+1,t.pos.z),1-Math.exp(-e*8)),this.cam.lookAt(this.camLook),this.fovS+=(66-this.fovS)*(1-Math.exp(-e*3)),this.cam.fov=this.fovS,this.cam.updateProjectionMatrix();return}let r=t.speed,a=t.mode==="air",o=Rn.set(Math.sin(t.yaw*.4),0,Math.cos(t.yaw*.4)),l=this.camMode===1,c=this.cam.aspect<.8,h=(l?14:c?9:7)+r*.03,u=(l?8:c?4.6:3)+r*.012,d=Pn.copy(t.pos).addScaledVector(o,-h);d.y=t.pos.y+u+(a?1.8:0),Math.abs(d.x)>16.5&&t.pos.z>0&&(d.x=Math.sign(d.x)*16.5),this.snapCam&&(this.snapCam=!1,this.camPos.copy(d),this.camLook.copy(t.pos)),this.camPos.lerp(d,1-Math.exp(-e*(a?4:6))),this.camPos.x+=(t.pos.x*.85-this.camPos.x)*(1-Math.exp(-e*5)),this.camPos.y<.8&&(this.camPos.y=.8);let f=Pn.copy(t.pos).addScaledVector(o,c?16:10);f.y=t.pos.y*.45+1.2,this.camLook.lerp(f,1-Math.exp(-e*9)),this.cam.position.copy(this.camPos),this.shake>0&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-e*2.5)),this.cam.lookAt(this.camLook);let g=(c?68:58)+Math.min(16,r*.18);this.fovS+=(g-this.fovS)*(1-Math.exp(-e*3)),this.cam.fov=this.fovS,this.cam.updateProjectionMatrix()}makeItems(){let t=new ae({map:sa(),color:new tt(.9,.9,.9)}),e=new ae({map:cf(),color:new tt(1.1,1.1,1.1),transparent:!0}),n=new ae({map:Te(),color:new tt(.8,.55,.15),blending:$t,depthWrite:!1,transparent:!0,opacity:.3}),i=new kn(.9,.9,40,12,1,!0);i.translate(0,20,0);let r=new Lt({map:af(),color:new tt(.9,.65,.18),transparent:!0,blending:$t,depthWrite:!1,side:oe}),a=new _i(3.2,3.6,40),o=new Lt({color:new tt(1.6,1.2,.3),transparent:!0,opacity:.8,side:oe,depthWrite:!1});for(let l=0;l<10;l++){let c=new Se,h=new ue(n);h.scale.set(9,9,1),h.position.z=1.5,c.add(h);let u=new ue(t.clone());u.name="head",u.scale.set(6,6,1),c.add(u);let d=new ue(e);d.name="eat",d.scale.set(4,1.12,1),d.position.y=2.9,c.add(d);let f=new j(a,o);f.name="ring",f.rotation.x=-Math.PI/2,c.add(f);let g=new j(i,r);g.name="beam",c.add(g),c.visible=!1,this.scene.add(c),this.coins.push(c),this.chompT.push(-9)}}chomp(t,e){this.chompT[t]=e}syncItems(t,e){Ai.forEach((n,i)=>{let r=this.coins[i];if(!r)return;let a=t-this.chompT[i],o=n.got&&a<.35;if(r.visible=(!n.got||o)&&!this.inSpace,!r.visible)return;let l=e?Math.hypot(n.x-e.pos.x,n.z-e.pos.z):99,c=l<45&&n.z>(e?e.pos.z:0)-3,h=1+Math.sin(t*7+i)*.07,u=c?1.35:1,d=o?1+a*4:1,f=r.getObjectByName("head");f.scale.setScalar(6*h*u*d),f.material.opacity=o?1-a/.35:1,f.material.transparent=!0,f.material.rotation=Math.sin(t*2.2+i)*.18;let g=r.getObjectByName("eat");g.visible=!o,g.position.y=3.6*u+.6+Math.abs(Math.sin(t*5+i))*.5,g.scale.set(4*(c?1.2:.9),1.12*(c?1.2:.9),1);let x=r.getObjectByName("ring");x.position.y=-r.position.y+.08,x.scale.setScalar(1+(t*1.2+i*.3)%1*.8),r.position.set(n.x,Math.max(n.y,2.6)+Math.sin(t*2.5+i)*.3,n.z);let m=r.getObjectByName("beam");m.position.y=-r.position.y})}makeDoges(){let t=Ar();for(let e=0;e<4;e++){let n=new ue(new ae({map:t,color:new tt(.85,.85,.85)}));n.scale.set(4.2,4.2,1),n.visible=!1,this.scene.add(n),this.dogeSp.push(n)}}syncDoges(t){this.dogeSp.forEach((e,n)=>{let i=t[n];e.visible=!!i&&i.on,e.visible&&(e.position.set(i.x,i.y,i.z),e.material.rotation=i.spin)})}buildPad(t,e){for(let o of[-1,1]){let l=new j(new me(.9,16,.9),this.mats.led);l.position.set(o*(10.8+.8),8,e),t.add(l);let c=new j(new me(2.4,22,2.4),this.mats.pole);c.position.set(o*(10.8+3.4),11,e+6),t.add(c);for(let h=3;h<22;h+=3){let u=new j(new me(2.6,.12,.12),this.mats.led);u.position.set(o*(10.8+3.4),h,e+4.75),t.add(u)}}let n=new j(new me(10.8*2+2.5,.9,.9),this.mats.led);n.position.set(0,16,e),t.add(n);let i=new j(new Kt(10.8*2,3.2),new Lt({map:of(),transparent:!0,side:oe,color:new tt(1.3,1.3,1.3)}));i.position.set(0,13.6,e),i.rotation.y=Math.PI,t.add(i);let r=new j(new _i(6,7.2,48),new Lt({color:new tt(3,.8,.2),side:oe}));r.rotation.x=-Math.PI/2,r.position.set(0,.06,e+12),t.add(r);let a=new j(new _i(9,9.4,48),this.mats.led);a.rotation.x=-Math.PI/2,a.position.set(0,.06,e+12),t.add(a)}space(t){if(t&&!this.spaceG){let e=new Se,n=dn.SPACE,i=[];for(let g=0;g<4e3;g++){let x=new C().randomDirection().multiplyScalar(6e3+Math.random()*2e3);i.push(x.x,x.y,x.z)}let r=new Wt;r.setAttribute("position",new Rt(i,3));let a=new Bn(r,new ii({color:16777215,size:2,sizeAttenuation:!1,fog:!1}));a.position.copy(n),e.add(a),this.marsPos.copy(n).add(new C(0,260,3600));let o=new j(new xn(420,64,32),new Pe({map:sf(),roughness:1,emissive:2754560}));o.position.copy(this.marsPos),o.rotation.z=.3,o.name="mars",e.add(o);let l=new ue(new ae({map:Te(),color:new tt(1.6,.5,.25),blending:$t,depthWrite:!1,transparent:!0,opacity:.6}));l.scale.set(1250,1250,1),l.position.copy(this.marsPos),e.add(l);let c=new j(new xn(1300,64,32),new Pe({map:rf(),roughness:.8,emissive:266278}));c.position.copy(n).add(new C(-600,-1700,-1200)),e.add(c);let h=new ue(new ae({map:Te(),color:new tt(.3,.6,1.6),blending:$t,depthWrite:!1,transparent:!0,opacity:.55}));h.scale.set(3600,3600,1),h.position.copy(c.position),e.add(h);let u=n.clone().add(new C(3e3,1500,1e3)),d=new Mi(16773856,3.2);d.position.copy(u),d.target.position.copy(this.marsPos),e.add(d,d.target);let f=new ue(new ae({map:Te(),color:new tt(3,2.6,2),blending:$t,depthWrite:!1}));f.scale.set(900,900,1),f.position.copy(u),e.add(f),this.scene.add(e),this.spaceG=e}this.inSpace=t,this.spaceG&&(this.spaceG.visible=t),this.bloom.strength=.75,!t&&this.marsG&&(this.marsG.visible=!1,this.onMars=!1),!t&&this.elon&&(this.elon.visible=!1),this.scene.fog=t?null:new Xi(658454,.0042),this.scene.background.setHex(t?0:658454),this.sky.visible=!t,this.cam.far=t?2e4:900,this.cam.updateProjectionMatrix();for(let e of[this.beam,this.heroShadow])e.visible=!t}spin(t){let e=this.spaceG?.getObjectByName("mars");e&&(e.rotation.y+=t*.05)}makeCop(){let t=this.hero.clone(!0),e=new xr({vertexColors:!0,flatShading:!0,color:2237998,metalness:.6,roughness:.25,clearcoat:1,clearcoatRoughness:.05,envMap:this.env,envMapIntensity:1.5});t.children[0].material=e;for(let a of[-1,1]){let o=new j(new Kt(2.6,.42),new Lt({map:hf(),side:oe}));o.position.set(a*1.02,.55,-.1),o.rotation.y=a*Math.PI/2,t.add(o)}this.copRed=new Lt({color:new tt(4,.2,.15)}),this.copBlue=new Lt({color:new tt(.2,.5,4)});let n=new me(.5,.13,.28),i=new j(n,this.copRed);i.position.set(-.27,1.2,-.35);let r=new j(n,this.copBlue);r.position.set(.27,1.2,-.35),t.add(i,r),this.copGlow=new ue(new ae({map:Te(),color:new tt(2,.2,.2),blending:$t,depthWrite:!1,transparent:!0})),this.copGlow.scale.set(5,5,1),this.copGlow.position.set(0,1.3,-.35),t.add(this.copGlow),t.visible=!1,this.cop=t,this.scene.add(t)}showCop(t,e,n,i=0,r=!0){let a=this.cop;if(a.visible=t,!t||!e||!n)return;a.position.copy(e),a.quaternion.copy(n);let o=Math.sin(i*16)>0;this.copRed.color.setRGB(o?4:.3,.2,.15),this.copBlue.color.setRGB(.2,.5,o?.4:4),this.copGlow.material.color.setRGB(o?2:.2,.2,o?.2:2.2),a.traverse(l=>{if(l.name==="jet"){let c=r?.8+Math.random()*.4:0;l.scale.set(1,c,1),l.visible=c>0}})}ocean(t){if(t&&!this.oceanG){let e=new Se,n=dn.OCEAN,i=new j(new Kt(3e3,3e3),new Pe({color:1918576,roughness:.22,metalness:.6,envMap:this.env,envMapIntensity:.9}));i.rotation.x=-Math.PI/2,i.position.copy(n),e.add(i);let r=new ue(new ae({map:Te(),color:new tt(2.2,2.2,2),blending:$t,depthWrite:!1,fog:!1}));r.scale.set(60,60,1),r.position.set(n.x-40,n.y+120,n.z+330),e.add(r);let a=new j(new Kt(26,300),new Lt({map:Te(),color:new tt(.5,.6,.8),transparent:!0,opacity:.5,blending:$t,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.set(n.x-30,n.y+.05,n.z+170),e.add(a);let o=new Se,l=dn.DECK,c=new Pe({color:3817030,roughness:.6,metalness:.5,envMap:this.env,envMapIntensity:.5}),h=new j(new me(30,l,46),c);h.position.y=l/2-.6,o.add(h);let u=new j(new Kt(28,28),new Pe({map:ff(),roughness:.7}));u.rotation.x=-Math.PI/2,u.position.y=l-.58,o.add(u);for(let m of[-1,1]){let p=new j(new me(1.2,3.2,40),c);p.position.set(m*15.6,l+1,0),o.add(p);for(let S of[-1,1]){let T=new j(new xn(.35,10,8),new Lt({color:new tt(4,.3,.2)}));T.position.set(m*14.5,l+.1,S*21),o.add(T);let y=new ue(new ae({map:Te(),color:new tt(2,.2,.15),blending:$t,depthWrite:!1}));y.scale.set(4,4,1),y.position.copy(T.position),o.add(y)}}let d=new j(new _i(24,34,48),new Lt({color:6719658,transparent:!0,opacity:.18,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.05,d.scale.set(1,1.5,1),o.add(d),o.position.copy(n),e.add(o),this.shipG=o;let f=new Bs(9416928,792614,1.6);f.position.copy(n),e.add(f);let g=new Mi(13622527,2.2);g.position.set(n.x-40,n.y+120,n.z+330),g.target.position.copy(n),e.add(g,g.target);let x=new ks(16777215,260,90,.6,.6,1.5);x.position.set(n.x+10,n.y+40,n.z-10),x.target.position.set(n.x,n.y+2,n.z),e.add(x,x.target),this.scene.add(e),this.oceanG=e}this.onOcean=t,this.oceanG&&(this.oceanG.visible=t),t&&(this.scene.fog=new Xi(1386046,.0026),this.scene.background.setHex(1386046),this.sky.visible=!1)}oceanStep(t){this.shipG&&(this.shipG.position.y=dn.OCEAN.y+Math.sin(t*1.1)*.18,this.shipG.rotation.z=Math.sin(t*.8)*.012)}showFloaters(t,e,n=0,i=new C(1,0,0)){if(t&&!this.astro){let r=new Pe({color:15790320,roughness:.65}),a=new Pe({color:16760896,roughness:.1,metalness:1,envMap:this.env,envMapIntensity:1.6}),o=new Pe({color:9080729,roughness:.6}),l=new Se,c=(f,g,x,m,p,S,T,y=0,P=0)=>{let w=new j(new me(f,g,x),m);return w.position.set(p,S,T),w.rotation.set(y,0,P),l.add(w),w};c(.62,.78,.42,r,0,0,0),c(.5,.62,.28,o,0,.02,-.33);let h=new j(new xn(.3,20,16),r);h.position.y=.62,l.add(h);let u=new j(new xn(.25,20,16,0,Math.PI*2,0,Math.PI*.55),a);u.position.set(0,.64,.1),u.rotation.x=Math.PI/2.1,l.add(u),c(.18,.62,.18,r,-.44,.08,0,.3,.9),c(.18,.62,.18,r,.44,.08,0,-.4,-1.1),c(.22,.7,.22,r,-.17,-.68,.05,.4,.15),c(.22,.7,.22,r,.17,-.68,-.05,-.3,-.1),l.scale.setScalar(1.6),this.scene.add(l),this.astro=l;let d=new ue(new ae({map:Ar(),color:new tt(.85,.85,.85)}));d.scale.set(3.2,3.2,1),this.scene.add(d),this.floatDoge=d}!this.astro||!this.floatDoge||(this.astro.visible=this.floatDoge.visible=t,!(!t||!e)&&(this.astro.position.copy(e).addScaledVector(i,-2.7+Math.sin(n*.5)*.3).add(Pn.set(0,1.5+Math.sin(n*.9)*.5,0)),this.astro.rotation.set(Math.sin(n*.4)*.5,n*.35,.4+Math.sin(n*.6)*.4),this.floatDoge.position.copy(e).addScaledVector(i,2.5+Math.cos(n*.6)*.3).add(Pn.set(0,2.2+Math.sin(n*1.1+1)*.5,0)),this.floatDoge.material.rotation=Math.sin(n*.7)*.6+n*.25))}dogePlanet(t){if(t&&!this.dogeG){this.space(!0);let e=new Se;this.dogePos.copy(dn.SPACE).add(new C(1100,500,5600));let n=new ue(new ae({map:Ar(),color:new tt(.62,.62,.62),fog:!1}));n.scale.set(900,900,1),n.position.copy(this.dogePos),e.add(n);let i=new ue(new ae({map:Te(),color:new tt(1,.75,.25),blending:$t,depthWrite:!1,transparent:!0,opacity:.22,fog:!1}));i.scale.set(1400,1400,1),i.position.copy(this.dogePos),e.add(i);let r=new j(new gr(640,10,8,120),new Lt({color:new tt(1.1,.85,.3)}));r.position.copy(this.dogePos),r.rotation.set(1.25,.2,.3),e.add(r);let a=Ar();for(let o=0;o<10;o++){let l=new ue(new ae({map:a,color:new tt(.7,.7,.7),fog:!1}));l.scale.set(60,60,1),e.add(l),this.dogeOrb.push(l)}this.scene.add(e),this.dogeG=e}this.dogeG&&(this.dogeG.visible=t)}dogeSpin(t){this.dogeOrb.forEach((e,n)=>{let i=t*.5+n/this.dogeOrb.length*Math.PI*2,r=720+Math.sin(t+n)*30;e.position.set(this.dogePos.x+Math.cos(i)*r,this.dogePos.y+Math.sin(i*2)*80,this.dogePos.z+Math.sin(i)*r*.6),e.material.rotation=t*2+n})}marsSurface(t){if(t&&!this.marsG){let e=new Se,n=ra,i=uf();i.repeat.set(60,60);let r=new j(new Kt(2400,2400),new Pe({map:i,roughness:1,color:13664352}));r.rotation.x=-Math.PI/2,r.position.copy(n),e.add(r);let a=new j(new xn(1100,32,16),new ye({side:Fe,depthWrite:!1,fog:!1,vertexShader:"varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 p;void main(){float h=normalize(p).y;vec3 c=mix(vec3(.85,.45,.28),vec3(.08,.06,.16),smoothstep(0.,.7,h));c+=vec3(.9,.6,.4)*exp(-abs(h)*9.)*.4;gl_FragColor=vec4(c,1.);}"}));a.position.copy(n),e.add(a);let o=new ue(new ae({map:Te(),color:new tt(2.4,2.2,2),blending:$t,depthWrite:!1,fog:!1}));o.scale.set(120,120,1),o.position.copy(n).add(new C(-300,160,700)),e.add(o),e.add(new Bs(16763040,5906448,1.6));let l=new Mi(16769216,2.2);l.position.copy(n).add(new C(-200,300,400)),l.target.position.copy(n),e.add(l,l.target);let c=new Pe({color:14212324,metalness:.9,roughness:.25,envMap:this.env,envMapIntensity:1.6}),h=P=>new Lt({color:P}),u=new j(new kn(14,15,.6,48),new Pe({color:2763828,metalness:.6,roughness:.4,envMap:this.env}));u.position.copy(n).add(new C(0,.3,0)),e.add(u);for(let[P,w,R]of[[10,10.6,new tt(1.8,1,.3)],[13.2,13.6,new tt(.3,1.4,1.8)]]){let L=new j(new _i(P,w,64),h(R));L.rotation.x=-Math.PI/2,L.position.copy(n).add(new C(0,.62,0)),e.add(L)}let d=new Pe({color:10475775,transparent:!0,opacity:.35,metalness:.2,roughness:.05,envMap:this.env,emissive:2777216,side:oe,depthWrite:!1}),f=h(new tt(1.6,1.1,.6));for(let[P,w,R]of[[-60,40,26],[55,70,34],[-20,120,40],[90,-10,20],[-95,-20,22],[20,-70,18],[-130,110,30],[140,120,36]]){let L=new j(new xn(R,32,16,0,Math.PI*2,0,Math.PI/2),d);L.position.copy(n).add(new C(P,0,w)),e.add(L);for(let b=0;b<6;b++){let _=R*(.3+Math.random()*.5),I=new j(new me(R*.18,_,R*.18),b%2?f:c);I.position.copy(n).add(new C(P+(Math.random()-.5)*R*.9,_/2,w+(Math.random()-.5)*R*.9)),e.add(I)}}let g=new Pe({color:3159102,metalness:.7,roughness:.3,envMap:this.env});for(let[P,w,R]of[[-40,160,120],[40,170,150],[0,200,190],[-110,180,90],[120,190,110]]){let L=new j(new kn(4,6,R,8),g);L.position.copy(n).add(new C(P,R/2,w)),e.add(L);for(let _=10;_<R;_+=12){let I=new j(new gr(5.2,.35,6,24),h(new tt(3,1.4,.4)));I.rotation.x=Math.PI/2,I.position.copy(n).add(new C(P,_,w)),e.add(I)}let b=new ue(new ae({map:Te(),color:new tt(3,.4,.3),blending:$t,depthWrite:!1}));b.scale.set(14,14,1),b.position.copy(n).add(new C(P,R+3,w)),e.add(b)}let x=[];for(let P=0;P<=12;P++){let w=P/12*60;x.push(new vt(w<44?4.5:4.5*Math.cos((w-44)/16*Math.PI/2)+.1,w))}let m=new Uo(x,24);for(let[P,w]of[[-30,-40],[-18,-55],[34,-45]]){let R=new j(m,c);R.position.copy(n).add(new C(P,0,w)),e.add(R);for(let b=0;b<4;b++){let _=new j(new me(.4,8,5),c),I=b*Math.PI/2;_.position.copy(n).add(new C(P+Math.cos(I)*5.5,4,w+Math.sin(I)*5.5)),_.rotation.y=-I,e.add(_)}let L=new ue(new ae({map:Te(),color:new tt(.3,1.6,3),blending:$t,depthWrite:!1}));L.scale.set(8,8,1),L.position.copy(n).add(new C(P,62,w)),e.add(L)}let p=new j(new kn(10,13,12,8),g);p.position.copy(n).add(new C(0,6,110)),e.add(p);let S=new ue(new ae({map:sa(),color:new tt(1,1,1)}));S.scale.set(46,46,1),S.position.copy(n).add(new C(0,36,110)),e.add(S);let T=new ue(new ae({map:Te(),color:new tt(1.6,1,.4),blending:$t,depthWrite:!1,opacity:.6,transparent:!0}));T.scale.set(80,80,1),T.position.copy(S.position).add(new C(0,0,8)),e.add(T);let y=new j(new Kt(40,7.8),new Lt({map:df(),transparent:!0,side:oe,color:new tt(1.3,1.3,1.3)}));y.position.copy(n).add(new C(0,14,58)),y.rotation.y=Math.PI,e.add(y);for(let P of[-1,1]){let w=new j(new me(1.2,18,1.2),h(new tt(3,1.5,.4)));w.position.copy(n).add(new C(P*21,9,58)),e.add(w)}for(let P=0;P<14;P++)for(let w of[-1,1]){let R=new ue(new ae({map:Te(),color:new tt(3,1.6,.5),blending:$t,depthWrite:!1}));R.scale.set(3,3,1),R.position.copy(n).add(new C(w*7,.8,16+P*3)),e.add(R)}this.scene.add(e),this.marsG=e}this.onMars=t,this.marsG&&(this.marsG.visible=t),t&&(this.spaceG&&(this.spaceG.visible=!1),this.scene.fog=new Xi(8010284,7e-4),this.scene.background.setHex(8010284),this.bloom.strength=.45,this.cam.far=2500,this.cam.updateProjectionMatrix(),this.heroShadow.visible=!0)}fireworks(t,e){if(this.onMars&&(this.fireT-=t,this.fireT<=0)){this.fireT=.35+Math.random()*.4;let n=ra;e.sparkle(n.x+(Math.random()-.5)*160,n.y+40+Math.random()*50,n.z+60+Math.random()*120)}}makeElon(){let t=new Se,e=f=>new Pe({color:f,roughness:.6,metalness:.1,envMap:this.env,envMapIntensity:.6}),n=this.elonParts,i=e(1447966),r=e(15265010),a=e(15251606),o=e(657932),l=(f,g,x,m)=>new j(new me(f,g,x),m);for(let f of[-1,1]){let g=new Se;g.position.set(f*.13,.95,0);let x=l(.19,.9,.22,i);x.position.y=-.45,g.add(x);let m=l(.21,.1,.32,o);m.position.set(0,-.92,.05),g.add(m),t.add(g),n[f<0?"lhip":"rhip"]=g}let c=l(.52,.72,.3,i);c.position.y=1.32,t.add(c);let h=l(.16,.5,.02,r);h.position.set(0,1.42,.16),t.add(h);for(let f of[-1,1]){let g=new Se;g.position.set(f*.33,1.62,0);let x=l(.15,.7,.17,i);x.position.y=-.35,g.add(x);let m=l(.12,.13,.12,a);m.position.y=-.74,g.add(m),t.add(g),n[f<0?"lsh":"rsh"]=g}let u=l(.14,.12,.14,a);u.position.y=1.74,t.add(u);let d=new ue(new ae({map:sa()}));d.scale.set(1.15,1.15,1),d.position.y=2.25,t.add(d),t.scale.setScalar(1.6),t.visible=!1,this.scene.add(t),this.elon=t}elonPose(t,e,n=0,i=0,r=0){t&&!this.elon&&this.makeElon();let a=this.elon;if(!a||(a.visible=t,!t||!e))return;a.position.copy(e),a.rotation.y=n;let o=this.elonParts,l=Math.sin(i*7)*(1-r)*.6;o.lhip.rotation.x=l,o.rhip.rotation.x=-l,o.lsh.rotation.x=-l*.8,o.rsh.rotation.x=l*.8*(1-r),o.rsh.rotation.z=r*2.5,o.rsh.rotation.x+=r*0,r>0&&(o.rsh.rotation.y=Math.sin(i*9)*.5*r),a.position.y=e.y+Math.abs(Math.sin(i*7))*.06*(1-r)}setSkin(t){this.skin=t;let e=this.heroMat,n={stock:[16777215,.45,.22,0],red:[14690362,.55,.2,0],neon:[4176127,.7,.18,4638],gold:[16765802,.75,.24,3810816],champ:[1710882,1,.04,0]},[i,r,a,o]=n[t]??n.stock;e.color.setHex(i),e.metalness=r,e.roughness=a,e.emissive.setHex(o),e.needsUpdate=!0,this.rimMat?.color.setHex({champ:16761418,neon:6280447,gold:3487294}[t]??16777215)}preview(t,e){let n=this.skin,i=this.heroMat,r=[i.color.clone(),i.emissive.clone(),i.metalness,i.roughness],a=this.hero.visible,o=this.renderer,l=this.cssW,c=Math.round(l/2),h=o.getPixelRatio(),u=this.hero.quaternion.clone(),d=this.hero.position.clone(),f=this.wheels.map(m=>m.rotation.clone());this.hero.quaternion.identity(),this.hero.position.y=0,this.wheels.forEach(m=>m.rotation.set(0,0,0)),this.setSkin(t),this.hero.visible=!0,this.hero.updateMatrixWorld();let g=this.pvCam;g.aspect=2,g.updateProjectionMatrix(),g.position.copy(this.hero.localToWorld(Pn.set(-3.6,1.5,4.6))),g.lookAt(this.hero.localToWorld(Pn.set(0,.45,0))),o.setViewport(0,0,l,c),o.render(this.scene,g);let x=e.getContext("2d");x&&(e.width=Math.round(l*h),e.height=Math.round(c*h),x.drawImage(o.domElement,0,o.domElement.height-e.height,e.width,e.height,0,0,e.width,e.height)),o.setViewport(0,0,this.cssW,this.cssH),this.setSkin(n),i.color.copy(r[0]),i.emissive.copy(r[1]),i.metalness=r[2],i.roughness=r[3],this.hero.visible=a,this.hero.quaternion.copy(u),this.hero.position.copy(d),this.wheels.forEach((m,p)=>m.rotation.copy(f[p])),this.hero.updateMatrixWorld()}burn(t){t?this.heroMat.color.setScalar(.18):this.setSkin(this.skin),this.hero.children[1].visible=!t}resize(t,e,n){this.cssW=t,this.cssH=e,this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.bloom.resolution.set(t*n/2,e*n/2)}sync(t,e,n,i){this.inSpace||(this.placeStreet(t.pos.z),this.syncChunks(t.pos.z,e.time),this.syncTraffic(e,i)),this.syncHero(t,n),this.syncItems(i,t)}render(){this.bloomOn?this.composer.render():this.renderer.render(this.scene,this.cam)}project(t,e,n,i,r){return Rn.set(t,e,n).project(this.cam),Rn.z>1?null:{x:(Rn.x*.5+.5)*i,y:(-Rn.y*.5+.5)*r}}};A(dn,"SPACE",new C(0,2e4,0)),A(dn,"MARS",ra),A(dn,"OCEAN",new C(3e4,0,1500)),A(dn,"DECK",2.4);var nn=dn;var aa=class{constructor(t,e,n){A(this,"N");A(this,"n",0);A(this,"pts");A(this,"pos");A(this,"col");A(this,"siz");A(this,"alp");A(this,"v");A(this,"life");A(this,"max");A(this,"s0");A(this,"s1");A(this,"g");A(this,"a0");this.N=t;let i=new Wt;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.siz=new Float32Array(t),this.alp=new Float32Array(t),this.v=new Float32Array(t*3),this.life=new Float32Array(t),this.max=new Float32Array(t),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.g=new Float32Array(t),this.a0=new Float32Array(t),i.setAttribute("position",new Ce(this.pos,3)),i.setAttribute("color",new Ce(this.col,3)),i.setAttribute("size",new Ce(this.siz,1)),i.setAttribute("alpha",new Ce(this.alp,1));let r=new ye({uniforms:{map:{value:e},scale:{value:600}},transparent:!0,depthWrite:!1,blending:n?$t:pi,vertexShader:"attribute float size;attribute float alpha;attribute vec3 color;varying float vA;varying vec3 vC;uniform float scale;void main(){vA=alpha;vC=color;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=size*scale/max(.1,-mv.z);gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform sampler2D map;varying float vA;varying vec3 vC;void main(){vec4 t=texture2D(map,gl_PointCoord);gl_FragColor=vec4(vC,t.a*vA);if(gl_FragColor.a<.01)discard;}"});this.pts=new Bn(i,r),this.pts.frustumCulled=!1}emit(t,e,n,i,r,a,o,l,c,h,u,d,f=1,g=0){if(this.n>=this.N)return;let x=this.n++;this.pos[x*3]=t,this.pos[x*3+1]=e,this.pos[x*3+2]=n,this.v[x*3]=i,this.v[x*3+1]=r,this.v[x*3+2]=a,this.col[x*3]=h,this.col[x*3+1]=u,this.col[x*3+2]=d,this.life[x]=0,this.max[x]=o,this.s0[x]=l,this.s1[x]=c,this.g[x]=g,this.a0[x]=f,this.siz[x]=l,this.alp[x]=f}update(t,e){let n=this.pos,i=this.v,r=Math.exp(-t*e);for(let o=0;o<this.n;o++){if(this.life[o]+=t,this.life[o]>=this.max[o]){let c=--this.n;if(o!==c){for(let h of[n,i,this.col])h[o*3]=h[c*3],h[o*3+1]=h[c*3+1],h[o*3+2]=h[c*3+2];for(let h of[this.life,this.max,this.s0,this.s1,this.g,this.a0])h[o]=h[c]}o--;continue}i[o*3]*=r,i[o*3+2]*=r,i[o*3+1]=i[o*3+1]*r-this.g[o]*t,n[o*3]+=i[o*3]*t,n[o*3+1]+=i[o*3+1]*t,n[o*3+2]+=i[o*3+2]*t,n[o*3+1]<.05&&(n[o*3+1]=.05,i[o*3+1]*=-.3);let l=this.life[o]/this.max[o];this.siz[o]=this.s0[o]+(this.s1[o]-this.s0[o])*l,this.alp[o]=this.a0[o]*(l<.1?l/.1:1-(l-.1)/.9)}let a=this.pts.geometry;a.setDrawRange(0,this.n);for(let o of["position","color","size","alpha"])a.attributes[o].needsUpdate=!0}},la=class{constructor(t){A(this,"smoke");A(this,"spark");A(this,"lowPower",!1);this.smoke=new aa(700,Yd(),!1),this.spark=new aa(420,Te(),!0),t.add(this.smoke.pts,this.spark.pts)}setScale(t,e){let n=t/(2*Math.tan(e*Math.PI/360));for(let i of[this.smoke,this.spark])i.pts.material.uniforms.scale.value=n}cap(t){return this.lowPower?Math.ceil(t*.45):t}puff(t,e,n,i,r,a,o=.75,l=1.6){let c=Math.random;for(let h=0;h<this.cap(i);h++){let u=c()*Math.PI*2,d=r*(.3+c()*.7);this.smoke.emit(t+(c()-.5),e+c()*.4,n+(c()-.5),Math.cos(u)*d,c()*r*.4+.5,Math.sin(u)*d,l*(.6+c()*.6),a*.5,a*(1.6+c()),o,o,o*1.04,.85,-.6)}}tire(t,e,n,i,r){let a=Math.random;this.lowPower&&a()<.5||this.smoke.emit(t+(a()-.5)*.4,e+.2,n+(a()-.5)*.4,i*.1+(a()-.5),.6+a(),r*.1+(a()-.5),1.4,.6,3.2,.82,.82,.85,.55,-.4)}jet(t,e,n,i,r,a,o=0){let l=Math.random;if(e-=o,this.spark.emit(t,e+o,n,-i*16+(l()-.5)*2,-r*16,-a*16+(l()-.5)*2,.2,.7,.2,.5,.85,1.6,1,0),e<7&&l()<(this.lowPower?.35:.9)){let c=l()*Math.PI*2,h=1-e/7,u=(5+l()*7)*h;this.smoke.emit(t+Math.cos(c)*.8,o+.4,n+Math.sin(c)*.8,Math.cos(c)*u,.6+l()*1.2,Math.sin(c)*u,1.8+l(),1.4,5.5+h*3,.9,.93,.98,.55*h+.15,-.35)}else l()<.25&&this.smoke.emit(t,o+e-.6,n,l()-.5,-1,l()-.5,.9,.6,2.4,.92,.95,1,.35,-.2)}trail(t,e,n,i,r,a){let o=Math.random;o()<.6&&this.spark.emit(t,e,n,-i*7+(o()-.5),-r*7,-a*7+(o()-.5),.7,.55,.15,.25,.6,1.15,.8,0),o()<.25&&this.smoke.emit(t,e,n,-i*3,-r*3,-a*3,1.2,.5,2.2,.7,.85,1,.25,-.1)}cloud(t,e,n=1,i=0){let r=Math.random,a=this.cap(Math.round(30*n));for(let o=0;o<a;o++){let l=o/a*Math.PI*2+r()*.3,c=(7+r()*9)*n;this.smoke.emit(t+Math.cos(l)*1.2,i+.3+r()*.6,e+Math.sin(l)*1.2,Math.cos(l)*c,.4+r()*1.6,Math.sin(l)*c,2.4+r()*1.4,2,8+r()*5,.92,.95,1,.75,-.25)}for(let o=0;o<this.cap(10);o++)this.smoke.emit(t+(r()-.5)*2,i+.5,e+(r()-.5)*2,(r()-.5)*3,2+r()*3,(r()-.5)*3,2.6,2.5,9,.95,.97,1,.6,-.4);for(let o=0;o<this.cap(16);o++){let l=r()*Math.PI*2;this.spark.emit(t,i+.3,e,Math.cos(l)*12,1,Math.sin(l)*12,.35,1.2,.3,.5,.85,1.6,.8,0)}}explode(t,e,n){let i=Math.random;for(let r=0;r<this.cap(36);r++){let a=i()*Math.PI*2,o=i()*Math.PI,l=4+i()*10;this.spark.emit(t,e+.6,n,Math.cos(a)*Math.sin(o)*l,Math.cos(o)*l*.6+4,Math.sin(a)*Math.sin(o)*l,.5+i()*.6,2.5+i()*2,6+i()*4,1.6,.7+i()*.3,.15,1,-2)}for(let r=0;r<this.cap(50);r++)this.spark.emit(t,e+.5,n,(i()-.5)*30,i()*18+4,(i()-.5)*30,.8+i()*.8,.3,.1,1.6,1,.4,1,14);for(let r=0;r<this.cap(30);r++){let a=i()*Math.PI*2,o=2+i()*6;this.smoke.emit(t+(i()-.5)*2,e+i()*2,n+(i()-.5)*2,Math.cos(a)*o,2+i()*5,Math.sin(a)*o,2.5+i()*2,2,9+i()*4,.12,.11,.1,.85,-.8)}}firework(t,e,n,i,r,a){let o=Math.random,l=this.cap(70);for(let c=0;c<l;c++){let h=o()*Math.PI*2,u=o()*2-1,d=Math.sqrt(1-u*u),f=11+o()*5;this.spark.emit(t,e,n,Math.cos(h)*d*f,u*f,Math.sin(h)*d*f,1.1+o()*.7,1.7,.3,i,r,a,1,4)}for(let c=0;c<this.cap(12);c++)this.spark.emit(t,e,n,(o()-.5)*3,(o()-.5)*3,(o()-.5)*3,.35,5,1,2.2,2.2,2.2,1,0)}sparkle(t,e,n){let i=Math.random;for(let r=0;r<this.cap(26);r++){let a=i()*Math.PI*2,o=i()*Math.PI;this.spark.emit(t,e,n,Math.cos(a)*Math.sin(o)*7,Math.cos(o)*7,Math.sin(a)*Math.sin(o)*7,.6,.6,.1,1.6,1.25,.35,1,2)}}crash(t,e,n,i,r,a){let o=Math.random;for(let l=0;l<this.cap(a?40:22);l++)this.spark.emit(t,e,n,i*.4+(o()-.5)*16,o()*10+2,r*.4+(o()-.5)*16,.4+o()*.5,.25,.08,1,.65+o()*.3,.25,1,14);for(let l=0;l<this.cap(14);l++)this.spark.emit(t,e+.5,n,i*.3+(o()-.5)*10,o()*7+3,r*.3+(o()-.5)*10,.8+o()*.4,.18,.12,.6,.85,1,.9,16);this.puff(t,e*.5,n,a?14:7,5,1.5,.6,1.8)}stars(t,e,n){let i=Math.random;for(let r=0;r<this.cap(10);r++)this.spark.emit(t,e,n,(i()-.5)*6,i()*5+2,(i()-.5)*6,.7,.35,.1,1,.9,.3,1,8)}update(t){this.smoke.update(t,1.2),this.spark.update(t,.6)}};var ca=class{constructor(){A(this,"ctx",null);A(this,"master");A(this,"on",!0);A(this,"motor");A(this,"motor2");A(this,"motorG");A(this,"motorF");A(this,"windG");A(this,"jetG");A(this,"noise");A(this,"musicG");A(this,"nextBeat",0);A(this,"step",0);A(this,"sir",null);A(this,"sirG",null)}start(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.on?.7:0,this.master.connect(e.destination);let n=e.sampleRate*2,i=this.noise=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);for(let o=0;o<n;o++)r[o]=Math.random()*2-1;this.motorF=e.createBiquadFilter(),this.motorF.type="lowpass",this.motorF.frequency.value=900,this.motorG=e.createGain(),this.motorG.gain.value=0,this.motor=e.createOscillator(),this.motor.type="sawtooth",this.motor2=e.createOscillator(),this.motor2.type="sine",this.motor.connect(this.motorF),this.motor2.connect(this.motorF),this.motorF.connect(this.motorG),this.motorG.connect(this.master),this.motor.start(),this.motor2.start();let a=(o,l,c)=>{let h=e.createBufferSource();h.buffer=i,h.loop=!0;let u=e.createBiquadFilter();u.type=o,u.frequency.value=l,u.Q.value=c;let d=e.createGain();return d.gain.value=0,h.connect(u),u.connect(d),d.connect(this.master),h.start(),d};this.windG=a("bandpass",600,.6),this.jetG=a("highpass",1800,.7),this.musicG=e.createGain(),this.musicG.gain.value=.16,this.musicG.connect(this.master),this.nextBeat=e.currentTime+.1}setOn(t){this.on=t,this.ctx&&this.master.gain.setTargetAtTime(t?.7:0,this.ctx.currentTime,.05)}drive(t,e,n,i,r){let a=this.ctx;if(!a)return;let o=a.currentTime,l=70+t*5.2;this.motor.frequency.setTargetAtTime(l,o,.05),this.motor2.frequency.setTargetAtTime(l*2.01,o,.05),this.motorF.frequency.setTargetAtTime(500+t*18+e*900,o,.08),this.motorG.gain.setTargetAtTime(r?(.03+e*.06+Math.min(.05,t*6e-4))*(i?.5:1):0,o,.08),this.windG.gain.setTargetAtTime(r?Math.min(.32,t*t*35e-6):0,o,.1),this.jetG.gain.setTargetAtTime(r&&n?.32:0,o,.03),r&&this.music()}env(t,e,n,i,r){t.gain.setValueAtTime(0,e),t.gain.linearRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+r)}osc(t,e,n,i,r,a=0,o){let l=this.ctx;if(!l)return;let c=l.currentTime+a,h=l.createOscillator(),u=l.createGain();h.type=t,h.frequency.setValueAtTime(e,c),h.frequency.exponentialRampToValueAtTime(Math.max(20,n),c+i),this.env(u,c,.005,r,i),h.connect(u),u.connect(o??this.master),h.start(c),h.stop(c+i+.05)}burst(t,e,n,i="lowpass"){let r=this.ctx;if(!r)return;let a=r.currentTime,o=r.createBufferSource(),l=r.createBiquadFilter(),c=r.createGain();o.buffer=this.noise,l.type=i,l.frequency.value=n,o.connect(l),l.connect(c),c.connect(this.master),this.env(c,a,.003,e,t),o.start(a,Math.random()),o.stop(a+t+.05)}crash(t){this.burst(t?.7:.45,t?.9:.6,t?1400:2200),this.osc("sine",t?90:130,35,.35,t?.8:.5),this.burst(.25,.25,5e3,"highpass")}bump(){this.osc("sine",110,50,.15,.35)}stomp(){this.osc("square",200,60,.2,.3),this.burst(.3,.6,900)}boing(){let t=380+Math.random()*120;this.osc("sine",t,t*3.2,.45,.25),this.osc("triangle",t*.5,t*1.6,.4,.12)}land(t){this.osc("sine",80,30,.3,Math.min(.8,.2+t*.04)),this.burst(.2,Math.min(.5,t*.03),600)}ding(t){let e=660*Math.pow(1.122,Math.min(t,10));this.osc("triangle",e,e,.18,.18)}check(){[523,659,784,1046].forEach((t,e)=>this.osc("triangle",t,t,.25,.22,e*.09))}beep(t=!1){this.osc("square",t?1320:880,t?1320:880,.12,.12)}coin(t){let e=880*Math.pow(1.19,t);this.osc("square",e,e,.08,.14),this.osc("square",e*1.5,e*1.5,.16,.14,.07)}chomp(){this.osc("square",220,90,.12,.3),this.osc("square",330,140,.12,.25,.1),this.osc("sine",900,1600,.15,.15,.18)}boom(){this.burst(1.4,1,700),this.osc("sine",70,25,1.1,1),this.burst(.5,.5,3e3,"highpass")}whoosh(){this.burst(.6,.35,1400,"bandpass")}bonk(){this.osc("square",300,90,.18,.35),this.osc("sine",620,240,.25,.2,.05)}launch(){this.burst(2.5,.8,500),this.osc("sawtooth",60,180,2.4,.25)}siren(t){let e=this.ctx;if(e){if(t&&!this.sir){let n=e.createOscillator(),i=e.createGain(),r=e.createOscillator(),a=e.createGain();n.type="triangle",n.frequency.value=750,r.frequency.value=1.6,a.gain.value=180,r.connect(a),a.connect(n.frequency),i.gain.value=0,i.gain.setTargetAtTime(.06,e.currentTime,.2),n.connect(i),i.connect(this.master),n.start(),r.start(),this.sir=n,this.sirG=i,n._l=r}else if(!t&&this.sir){let n=this.sir;this.sirG.gain.setTargetAtTime(0,e.currentTime,.1),setTimeout(()=>{try{n.stop(),n._l.stop()}catch{}},400),this.sir=null,this.sirG=null}}}over(){[784,659,523,392].forEach((t,e)=>this.osc("triangle",t,t*.98,.35,.2,e*.16))}music(){let t=this.ctx,e=60/110/2,n=[[45,57,60,64],[41,53,57,60],[43,55,59,62],[40,52,55,59]],i=r=>440*Math.pow(2,(r-69)/12);for(this.nextBeat<t.currentTime-.1&&(this.nextBeat=t.currentTime+.05);this.nextBeat<t.currentTime+.25;){let r=this.step,a=Math.floor(r/16)%4,o=n[a],l=this.nextBeat;r%2===0&&this.note("sawtooth",i(o[0]-12+(r%4===2?12:0)),l,e*1.6,.5,350),this.note("square",i(o[1+r%3]+12),l,e*.8,.12,2400),r%8===4&&this.hat(l,.18),r%4===0&&this.kick(l),this.step++,this.nextBeat+=e}}note(t,e,n,i,r,a){let o=this.ctx,l=o.createOscillator(),c=o.createGain(),h=o.createBiquadFilter();l.type=t,l.frequency.value=e,h.type="lowpass",h.frequency.value=a,l.connect(h),h.connect(c),c.connect(this.musicG),this.env(c,n,.01,r,i),l.start(n),l.stop(n+i+.05)}kick(t){let e=this.ctx,n=e.createOscillator(),i=e.createGain();n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(40,t+.15),n.connect(i),i.connect(this.musicG),this.env(i,t,.002,.9,.2),n.start(t),n.stop(t+.25)}hat(t,e){let n=this.ctx,i=n.createBufferSource(),r=n.createBiquadFilter(),a=n.createGain();i.buffer=this.noise,r.type="highpass",r.frequency.value=7e3,i.connect(r),r.connect(a),a.connect(this.musicG),this.env(a,t,.002,e,.08),i.start(t,Math.random()),i.stop(t+.1)}};var ha=class{constructor(t){A(this,"k",{left:!1,right:!1,gas:!1,brake:!1,jet:!1});A(this,"kb",{left:!1,right:!1,gas:!1,brake:!1,jet:!1});A(this,"touch",new Map);A(this,"mouse",null);A(this,"touchUsed",!1);A(this,"onKey",()=>{});A(this,"pad");let e={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ArrowUp:"jet",KeyW:"jet",ArrowDown:"brake",KeyS:"brake",Space:"jet",ShiftLeft:"jet",ShiftRight:"jet"};addEventListener("keydown",a=>{let o=e[a.code];o&&(this.kb[o]=!0,a.preventDefault()),a.repeat||this.onKey(a.code)}),addEventListener("keyup",a=>{let o=e[a.code];o&&(this.kb[o]=!1,a.preventDefault())}),addEventListener("blur",()=>{for(let a in this.kb)this.kb[a]=!1;this.touch.clear(),this.mouse=null});let n=(a,o)=>{let c=document.elementFromPoint(a,o)?.closest("[data-k]");return c&&t.contains(c)?c.dataset.k:null},i=a=>{this.touchUsed=!0;for(let o of Array.from(a.changedTouches))if(a.type==="touchend"||a.type==="touchcancel")this.touch.delete(o.identifier);else{let l=n(o.clientX,o.clientY);l?this.touch.set(o.identifier,l):a.type==="touchmove"&&this.touch.delete(o.identifier)}a.preventDefault(),this.paint()};for(let a of["touchstart","touchmove","touchend","touchcancel"])t.addEventListener(a,i,{passive:!1});t.addEventListener("pointerdown",a=>{a.pointerType==="mouse"&&(this.mouse=n(a.clientX,a.clientY),this.paint())}),addEventListener("pointerup",a=>{a.pointerType==="mouse"&&(this.mouse=null,this.paint())}),document.addEventListener("gesturestart",a=>a.preventDefault());let r=0;document.addEventListener("touchend",a=>{let o=Date.now();o-r<320&&a.target.closest?.("#game")&&a.preventDefault(),r=o},{passive:!1}),this.pad=t}paint(){let t=new Set([...this.touch.values(),this.mouse]);this.pad.querySelectorAll("[data-k]").forEach(e=>e.classList.toggle("on",t.has(e.dataset.k)))}poll(){let t=new Set([...this.touch.values(),this.mouse]);for(let e of Object.keys(this.k))this.k[e]=this.kb[e]||t.has(e);return this.k}};var ts=_e.R,hh=ts*Math.PI/2,My=hh+_e.ext,Cr=_e.x,ua=2.1,da=.6,pa=3.1,dh=-92,fa=_e.z-ts,by=ts+_e.ext,uh=-60,Rr=ua+da+pa,gf=(dh-fa)/pa,fh={x:Cr,z:uh},$s=new pe(0,0,0,"YXZ"),Zs=new he,mf=s=>s<=0?0:s>=1?1:s*s*(3-2*s);function xf(s){if(s<ua){let a=s/ua,o=uh+(_e.z-uh)*a*a;return $s.set(0,Math.PI,0),Zs.setFromEuler($s),{x:Cr,y:0,z:o,q:Zs,jet:!1,smoke:a<.35}}if(s-=ua,s<da){let a=s/da*My,o,l,c;return a<=hh?(c=a/ts,o=_e.z-ts*Math.sin(c),l=ts*(1-Math.cos(c))):(c=Math.PI/2,o=fa,l=ts+(a-hh)),$s.set(-c,Math.PI,0),Zs.setFromEuler($s),{x:Cr,y:l,z:o,q:Zs,jet:!1,smoke:!1}}s-=da;let t=Math.min(s,pa),e=t/pa,n=Math.max(0,(by+60*e)*(1-mf(e))),i=fa+(dh-fa)*e,r=mf(Math.min(1,e/.82));return $s.set(-Math.PI/2*(1-r),Math.PI*(1-r),Math.PI*2*r),Zs.setFromEuler($s),{x:Cr,y:n,z:i,q:Zs,jet:e<.18||e>.62,smoke:!1}}var Pr={x:Cr,z:dh};var es={get:s=>{try{return localStorage.getItem("rds."+s)}catch{return null}},set:(s,t)=>{try{localStorage.setItem("rds."+s,t)}catch{}}},we=es,yf=es.get("pid")===null;async function gh(){return Ii(await fetch(`api/invites?pid=${encodeURIComponent(fn())}`))}async function _f(){return Ii(await fetch("api/pulse"))}async function Mf(s){return Ii(await fetch("api/ref",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({pid:fn(),ref:s})}))}var vf="";function fn(){let s=es.get("pid")||vf;return s||(s=(crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36)).toLowerCase(),es.set("pid",s)),vf=s,s}function ns(){let s=es.get("name");return s||(s="Driver"+Math.floor(1e3+Math.random()*9e3),es.set("name",s)),s}function ma(s){es.set("name",s)}async function Ii(s){if(!s.ok)throw new Error(String(s.status));return s.json()}async function bf(s){return Ii(await fetch(`api/rank?scope=${s}&pid=${encodeURIComponent(fn())}`))}async function Sf(s){let t=()=>fetch("api/rank",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({pid:fn(),name:ns(),...s})}),e=await t();return e.status===429&&(await new Promise(n=>setTimeout(n,3500)),e=await t()),Ii(e)}var Ir=null,Tf="",wf={get:s=>{try{return sessionStorage.getItem("rds."+s)}catch{return null}},set:(s,t)=>{try{sessionStorage.setItem("rds."+s,t)}catch{}}},ph=()=>wf.get("tk")||Tf,mh=s=>{Tf=s,wf.set("tk",s)},Ef=s=>Date.now()-(+s.split(".")[0]||0);function Lr(){let s=ph();return s&&Ef(s)<6*36e5?Promise.resolve(s):Ir||(Ir=(async()=>{for(let t=0;t<4;t++)try{let e=await Ii(await fetch("api/ticket",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({pid:fn()})}));return e.tk?(mh(e.tk),e.tk):""}catch{await new Promise(e=>setTimeout(e,1500*(t+1)))}return""})().finally(()=>{Ir=null}),Ir)}function Af(){let s=ph();return s&&Ef(s)<20*36e5?(mh(""),Lr(),Promise.resolve(s)):Lr().then(t=>(t&&ph()===t&&mh(""),Lr(),t))}async function Cf(){try{return(await Ii(await fetch(`api/me?pid=${encodeURIComponent(fn())}`))).name??null}catch{return null}}async function Rf(s){return Ii(await fetch("api/name",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({pid:fn(),name:s})}))}var Pf=s=>s&&s.length===2?String.fromCodePoint(...[...s.toUpperCase()].map(t=>127462+t.charCodeAt(0)-65)):"\u{1F3F3}\uFE0F",ga=s=>s>=5e6?`\u{1F680} ${((1e7-s)/100).toFixed(2)}s`:`${Math.max(0,s).toLocaleString()} m`;var Sy="roadster.ubd.gg",If="G-JGTTFTC5QK",Ty="AW-719619230",wy="AW-719619230/IjwxCK3K_J4dEJ6JktcC",Df=new URLSearchParams(location.search).has("cinema"),Nf=location.hostname===Sy&&!Df,Lf=!1;function Uf(){if(!Nf||Lf)return;Lf=!0;let s=window;s.dataLayer=s.dataLayer||[],s.gtag=function(){s.dataLayer.push(arguments)},s.gtag("js",new Date),s.gtag("config",If,{allow_google_signals:!1,allow_ad_personalization_signals:!1}),s.gtag("config",Ty);let t=document.createElement("script");t.async=!0,t.src="https://www.googletagmanager.com/gtag/js?id="+If,document.head.appendChild(t)}function Hn(s,t={}){let e=window;!Nf||!e.gtag||(e.gtag("event",s,t),s==="game_start"&&e.gtag("event","conversion",{send_to:wy}))}function xa(s,t,e){if(Df)return;let n=new URLSearchParams(location.search),i=s==="visit"?n.get("utm_source")||(document.referrer?new URL(document.referrer).hostname:""):void 0;try{fetch("api/ev",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({pid:fn(),kind:s,v:t,v2:e,src:i}),keepalive:!0}).catch(()=>{})}catch{}}var wt={title:"FLY, ROADSTER!",sub:"Eat 5 Elon heads and reach Mars in 3 km",tap:"START ENGINE",best:"BEST",rank:"RANKING",how:"HOW TO PLAY",howText:["It accelerates by itself. \u25C0 \u25B6 to change lanes.","HOLD \u{1F680} to fire the air thrusters and fly.","Fly over traffic jams or bounce across car roofs.","EAT 5 ELON HEADS, then reach the Mars launch pad at 3 km. Fastest time to Mars wins!","Every Elon head (and your first stomp on a roof) gives a TURBO boost \u2014 eat more heads, reach Mars faster!","Leave the road past the sidewalk and you EXPLODE.","Crashes slow you down. If you stop, game over!"],other:"MORE GAMES",stopped:"STOPPED!",boom:"KABOOM!",wall:"BUILDING CRASH!",failNeed:"NOT ENOUGH ELONS",complete:"MISSION COMPLETE",mars:"WELCOME TO MARS",again:"DRIVE AGAIN",share:"SHARE",menu:"MAIN MENU",nameHint:"Your name (8 chars)",save:"RENAME",world:"ALL-TIME",today:"TODAY",noRank:"No records yet. Be the first!",loading:"Loading\u2026",rankErr:"Could not load the ranking",myRank:"MY RANK",newBest:"NEW BEST!",cars:"Cars launched",peds:"People yeeted",stomps:"Roofs stomped",air:"Longest air",top:"Top speed",elons:"Elon heads",jet:"FLY",copied:"Challenge link copied!",rotate:"Please rotate to portrait",skip:"TAP TO SKIP",hint:"\u25C0 \u25B6 lanes \xB7 HOLD \u{1F680} to fly",hintPc:"\u2190 \u2192 lanes \xB7 HOLD SPACE to fly",km:"{n} KM!",stomp:"STOMP!",crash:"CRASH!",strike:"STRIKE!",landing:"LANDING!",airshow:"AIR SHOW!",fan:"Flyin Roadster \xB7 High Altitude & Space Flight",jumpNow:"\u{1F680} HOLD TO FLY OVER!",sideWarn:"STAY ON THE ROAD!",toMars:"to Mars",got:"NOM! ELON {n}/5",gotAll:"ALL 5! GO TO MARS!",shareMars:"\u{1F680} I reached MARS in {t} on Fly, Roadster! Can you get there faster?",shareDist:"\u{1F680} I drove {d} m on Fly, Roadster! {r}Can you beat me?",shouts:["AAAH!","Oof!","Whoa!","Help~","My coffee!!","What?!","Yikes!","Ouch!","My bag!","Not again!"]},va=(s,t)=>s.replace(/\{(\w)\}/g,(e,n)=>String(t[n]??""));var is=s=>`${(s/100).toFixed(2)}s`;var Of=10.8+5,ot=s=>document.getElementById(s),Dr=new URLSearchParams(location.search).has("cinema")&&location.hostname!=="roadster.ubd.gg",xh=[["mars","\u{1F534}","MARS","Land on Mars"],["doge","\u{1F415}","DOGE PLANET","Eat all 10 Elons"],["starman","\u{1F468}\u200D\u{1F680}","LOST IN SPACE","Launch with 3\u20134 Elons"],["ship","\u{1F30A}","SPLASHDOWN","Launch with 1\u20132 Elons"],["top5","\u{1F3C6}","WORLD TOP 5","Top 5 time to Mars"],["speed","\u26A1","UNDER 60s","Mars in under 60 s"],["pacifist","\u{1F54A}\uFE0F","PEACEFUL","Mars without hitting anyone"],["outlaw","\u{1F6A8}","OUTLAW","Mars with 5 police stars"],["fall","\u{1F4A5}","LAUNCH FAIL","Launch with no Elons"],["busted","\u{1F694}","BUSTED","Caught by the police"],["boom","\u{1F9E8}","OFF ROAD","Off the road or into a building"],["stall","\u{1F6D1}","STALLED","Stuck in traffic"]],Ey=7,Ay=1.1,yn=1e7,Ff=10,ya=class{constructor(t){A(this,"pl",new qo);A(this,"tr",new Zo);A(this,"world");A(this,"fx");A(this,"sfx",new ca);A(this,"inp");A(this,"scene","title");A(this,"time",0);A(this,"sceneT",0);A(this,"dist",0);A(this,"best",0);A(this,"runs",0);A(this,"runT",0);A(this,"elons",0);A(this,"heat",0);A(this,"cleared",!1);A(this,"stat",{cars:0,peds:0,stomps:0,combo:0,air:0,top:0});A(this,"comboNow",0);A(this,"ends",new Set((we.get("ends")??"").split(",").filter(Boolean)));A(this,"newEnds",new Set);A(this,"tier","fall");A(this,"wantedLaunch",!1);A(this,"orbitT",0);A(this,"shipT",-1);A(this,"bonusDone",!1);A(this,"hint1",!1);A(this,"splits",[]);A(this,"pbSplits",(()=>{try{return JSON.parse(we.get("pbsplit")||"null")}catch{return null}})());A(this,"distPbShown",!1);A(this,"slowT",0);A(this,"stopT",0);A(this,"kmNext",1e3);A(this,"pedBurst",[]);A(this,"ev",[]);A(this,"tev",[]);A(this,"pops",[]);A(this,"bannerT",0);A(this,"hud",{});A(this,"lastHud",{});A(this,"prev","play");A(this,"overWhy","");A(this,"chal",dd(new URLSearchParams(location.search).get("c")));A(this,"chalDone",!1);A(this,"invites",+(we.get("inv")??0));A(this,"champ",we.get("champ")==="1");A(this,"myRef","");A(this,"rankScope","all");A(this,"boards",{});A(this,"dead",!1);A(this,"dv",new C);A(this,"dspin",new C);A(this,"copCd",0);A(this,"copSeen",!1);A(this,"doges",[0,1,2,3].map(()=>({on:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,spin:0,side:1,hit:!1})));A(this,"dogeCd",3);A(this,"lp",new C);A(this,"lv",new C);A(this,"boosts",0);A(this,"fell",!1);A(this,"cine",null);A(this,"cineRank",0);A(this,"runTk",Promise.resolve(""));A(this,"posted",null);A(this,"topRank",0);A(this,"celebrate",!1);A(this,"spaceT",0);A(this,"celebT",0);A(this,"fwT",0);A(this,"waved",!1);A(this,"marsT",0);A(this,"landed",!1);A(this,"copP",new C);A(this,"copFrom",new C);A(this,"copChase",!1);A(this,"copGap",0);A(this,"copT",0);A(this,"tmpQ",new he);A(this,"tmpE",new pe);A(this,"tmpV",new C);A(this,"tmpV2",new C);A(this,"pulseT",0);A(this,"allSkins",location.hostname!=="roadster.ubd.gg");A(this,"giftChal",!1);A(this,"pvId","");this.world=new nn(t),this.fx=new la(this.world.scene),this.inp=new ha(ot("pad"));for(let n of["dist","spd","gnum","anum","garc","aarc","gicon","aicon","tank","warn","banner","bsub","hint","bestline","progf","progcar","coins","wanted","dwl","dwr","flash"])this.hud[n]=ot(n);for(let n=0;n<18;n++){let i=document.createElement("div");i.className="pop",ot("pops").appendChild(i),this.pops.push({el:i,x:0,y:0,z:0,t:0,life:1,on:!1})}this.best=+(we.get("score")??0);{let n=new URLSearchParams(location.search).get("r");fd(n)&&yf&&!we.get("refFrom")&&we.set("refFrom",n)}{let n=we.get("skin")??"stock";this.world.setSkin(this.skinOk(n)?n:"stock")}Dr||Lr(),gh().then(n=>{this.invites=n.count,we.set("inv",String(n.count)),this.setChamp(!!n.champ)}).catch(()=>{}),this.best>=yn/2&&yn-this.best<5500&&(this.best=yn-(yn-this.best)*10,we.set("score",String(this.best))),this.inp.onKey=n=>this.key(n);let e=(n,i)=>{let r=ot(n),a=0;r.addEventListener("touchend",o=>{o.preventDefault(),a=Date.now(),this.sfx.start(),i()},{passive:!1}),r.addEventListener("click",o=>{o.stopPropagation(),!(Date.now()-a<600)&&(this.sfx.start(),i())})};e("b-start",()=>this.start()),e("b-rank",()=>this.openRank()),e("b-how",()=>this.panel("how")),e("b-howclose",()=>this.panel(null)),e("b-rankclose",()=>this.panel(null)),e("b-ends",()=>{this.paintEnds(),this.panel("ends")}),e("b-endsclose",()=>this.panel(null)),e("b-patch",()=>this.panel("patch")),e("b-patchclose",()=>this.panel(null)),ot("t-ver").textContent="v"+id,ot("patch-list").innerHTML=sd.map(n=>`<div><div class="pv">v${n.v}<small>${n.date}</small></div><ul>${n.items.map(i=>`<li>${i}</li>`).join("")}</ul></div>`).join(""),e("b-again",()=>this.start()),e("b-share",()=>this.openGift(!0)),e("b-gift-t",()=>this.openGift(!1)),e("b-giftclose",()=>this.panel(null)),e("b-gcopy",()=>this.copyGift()),e("b-gshare",()=>this.share()),e("b-rank2",()=>this.openRank()),e("b-menu",()=>this.toTitle()),e("b-pause",()=>this.pause()),e("b-resume",()=>this.pause()),e("b-quit",()=>this.toTitle()),e("b-snd",()=>this.mute()),e("b-cam",()=>{this.world.camMode^=1});{let n=ot("cc-tip");document.body.appendChild(n);let i=(()=>{try{return new Intl.DisplayNames(["en"],{type:"region"})}catch{return null}})(),r=0,a=(c,h=0)=>{let u=c.dataset.cc||"",d="Unknown";if(u.length===2)try{d=i?.of(u.toUpperCase())||u}catch{d=u}let f=c.getBoundingClientRect();n.textContent=d,n.style.left=f.left+f.width/2+"px",n.style.top=f.top-6+"px",n.classList.remove("hide"),clearTimeout(r),h&&(r=window.setTimeout(()=>n.classList.add("hide"),h))},o=()=>{clearTimeout(r),n.classList.add("hide")},l=ot("rank-list");l.addEventListener("mouseover",c=>{let h=c.target.closest?.(".fl");h&&a(h)}),l.addEventListener("mouseout",c=>{c.target.closest?.(".fl")&&o()}),l.addEventListener("click",c=>{let h=c.target.closest?.(".fl");h?a(h,1600):o()}),l.addEventListener("scroll",o,{passive:!0})}e("tab-all",()=>this.showRank("all")),e("tab-day",()=>this.showRank("day")),e("b-namesave",()=>this.saveName()),ot("skip").addEventListener("touchend",n=>{n.preventDefault(),this.skipIntro()},{passive:!1}),ot("skip").addEventListener("click",()=>this.skipIntro()),we.get("snd")==="0"&&this.sfx.setOn(!1),this.paintSnd(),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.scene==="play"||this.scene==="intro")&&this.pause(),!document.hidden&&this.sfx.ctx&&this.sfx.start()});for(let n of["touchend","pointerup"])document.addEventListener(n,()=>{this.sfx.ctx&&this.sfx.ctx.state!=="running"&&this.sfx.start()},{capture:!0,passive:!0});ot("coins").innerHTML="<i></i>".repeat(je),ot("bonkimg").src=oh().toDataURL(),lh(()=>document.documentElement.style.setProperty("--musk",`url(/musk.jpg)`)),this.toTitle(),xa("visit"),this.fixName(),Dr&&this.buildCinema()}unlock(t){this.ends.has(t)||(this.ends.add(t),this.newEnds.add(t),we.set("ends",[...this.ends].join(",")))}async fixName(){let t=ns();if(!$i(t))return;let e=await Cf();ma(e&&!$i(e)?e:cd(fn()))}buildCinema(){let t=document.createElement("div");t.id="cinema";let e=[["mars","\u{1F680} \uD654\uC131 \uC131\uACF5 (\uBA38\uB9AC 5~9)"],["top5","\u{1F3C6} \uD654\uC131 \uC131\uACF5 + TOP 5 \uCD95\uD558"],["doge","\u{1F415} \uB3C4\uC9C0 \uD589\uC131 (\uBA38\uB9AC 10\uAC1C)"],["starman","\u{1F468}\u200D\u{1F680} \uC6B0\uC8FC \uBBF8\uC544 + \uC6B0\uC8FC\uC778\xB7\uB3C4\uC9C0 (\uBA38\uB9AC 3~4)"],["ship","\u{1F30A} \uBC14\uB2E4\uC5D0 \uD48D\uB369 (\uBA38\uB9AC 1~2)"],["fall","\u{1F4A5} \uBA38\uB9AC 0\uAC1C \u2192 \uCD94\uB77D \uD3ED\uBC1C"],["pacifist","\u{1F54A}\uFE0F \uD654\uC131 + \uC0AC\uB78C 0\uBA85"],["outlaw","\u{1F6A8} \uD654\uC131 + \uC218\uBC30 \uBCC4 5\uAC1C"],["speed","\u26A1 \uD654\uC131 + 60\uCD08 \uC548"],["busted","\u{1F6A8} \uACBD\uCC30 \uB85C\uB4DC\uC2A4\uD130 \uCCB4\uD3EC"],["boom","\u{1F4A5} \uC778\uB3C4 \uBC16\uC73C\uB85C \u2192 \uD3ED\uBC1C"],["stop","\u{1F6D1} \uC815\uCCB4\uC5D0 \uB9C9\uD600 \uBA48\uCDA4"]];t.innerHTML="<h2>\u{1F3AC} \uC5D4\uB529 \uC2DC\uB124\uB9C8</h2>"+e.map(([n,i])=>`<button data-c="${n}">${i}</button>`).join("")+"<p>\uC2DC\uD5D8 \uC8FC\uC18C \uC804\uC6A9 \xB7 \uAE30\uB85D\xB7\uD1B5\uACC4\uC5D0 \uB0A8\uC9C0 \uC54A\uC74C</p>",t.querySelectorAll("button").forEach(n=>{let i=()=>{this.sfx.start(),this.playCinema(n.dataset.c)},r=0;n.addEventListener("touchend",a=>{a.preventDefault(),r=Date.now(),i()},{passive:!1}),n.addEventListener("click",()=>{Date.now()-r>600&&i()})}),ot("title").appendChild(t),document.body.classList.add("cinema")}playCinema(t){this.start(),this.sceneT=Rr,this.cineRank=t==="top5"?3:0;let e=this,n=this.pl,i=(a,o,l)=>{e.world.snapCam=!0,e.tr.clear(),e.elons=o,e.paintCoins(),n.pos.set(-5.4,0,a),e.dist=a,e.runT=l,e.heat=0},r=a=>{e.stat.peds=a};this.cine={mars:()=>{i(2925,6,68.42),r(3)},top5:()=>{i(2925,6,66.18),r(2)},fall:()=>i(2925,0,71.3),doge:()=>{i(2925,10,64.2),r(4)},starman:()=>i(2925,4,70.1),ship:()=>i(2925,2,71.3),pacifist:()=>{i(2925,5,69.9),r(0)},outlaw:()=>{i(2925,5,70.4),r(9),e.heat=10,e.copChase=!0,e.copGap=72,e.copT=0},speed:()=>{i(2925,7,57),r(1)},busted:()=>{i(800,1,14),e.heat=10,e.copChase=!0,e.copGap=26,e.copT=0,e.banner("\u{1F6A8} POLICE ROADSTER!","RUN TO MARS!",2,"red")},boom:()=>{i(600,0,9),n.pos.x=-16.1},stop:()=>{let a=null;for(let o=5;o<40&&!a;o++){let l=en(o);l.jam&&(a=l.jam)}i(a.z0-14,0,12),n.reset(-5.4,a.z0-14,0,6),e.tr.populate(n.pos.z,!0)}}[t]}show(t){for(let e of["title","result","pausebox"])ot(e).classList.toggle("hide",!(e===t||e==="pausebox"&&t==="pause"));document.body.classList.toggle("playing",t==="none"||t==="pause")}panel(t){ot("giftp").classList.toggle("hide",t!=="gift"),ot("cc-tip").classList.add("hide"),ot("patch").classList.toggle("hide",t!=="patch"),ot("how").classList.toggle("hide",t!=="how"),ot("rank").classList.toggle("hide",t!=="rank"),ot("endsp").classList.toggle("hide",t!=="ends")}mute(){this.sfx.setOn(!this.sfx.on),we.set("snd",this.sfx.on?"1":"0"),this.paintSnd()}paintSnd(){ot("b-snd").classList.toggle("off",!this.sfx.on)}key(t){this.sfx.start(),t==="KeyM"&&this.mute(),t==="KeyC"&&(this.world.camMode^=1),t==="KeyR"&&(this.start());let e=t==="Enter"||t==="Space";if(!ot("rank").classList.contains("hide")||!ot("how").classList.contains("hide")||!ot("endsp").classList.contains("hide")||!ot("patch").classList.contains("hide")||!ot("giftp").classList.contains("hide")){(t==="Escape"||e)&&this.panel(null);return}this.scene==="title"&&e?this.start():this.scene==="intro"&&(e||t==="Escape")?this.skipIntro():(t==="Escape"||t==="KeyP")&&(this.scene==="play"||this.scene==="pause")?this.pause():this.scene==="result"&&this.sceneT>.8&&e&&document.activeElement?.tagName!=="INPUT"&&this.start()}resetRun(){zc(1+Math.floor(Math.random()*1e6)),this.tr.clear(),this.tr.time=0,this.pl.reset(fh.x,fh.z,Math.PI),this.tr.populate(0,!0),this.world.space(!1),this.world.dogePlanet(!1),this.world.ocean(!1),this.world.showFloaters(!1),this.world.burn(!1),this.world.showCop(!1),this.world.camOverride=null,this.world.hero.visible=!0,this.dead=!1,this.fell=!1;for(let t of this.doges)t.on=!1;this.world.syncDoges(this.doges),this.sfx.siren(!1),document.body.classList.remove("intro","danger","edge","jumpnow","wanted","cine")}toTitle(){this.scene="title",this.sceneT=0,this.resetRun(),this.show("title"),this.panel(null),ot("skip").classList.add("hide"),this.pulse(),this.paintChal()}paintChal(){let t=this.chal,e=ot("chal");if(!t){e.classList.add("hide");return}e.classList.remove("hide"),e.innerHTML=`<b>\u{1F3C1} ${t.name.replace(/[<>&]/g,"")} CHALLENGES YOU</b><span>${t.mars?"Reach Mars faster than "+Mr(t):"Drive farther than "+Mr(t)}</span>`,this.chalDone||(this.chalDone=!0,Hn("challenge_open",{mars:t.mars?1:0}))}start(){Dr||(this.runTk=Af());{let t=we.get("refFrom");t&&!we.get("refSent")&&(we.set("refSent","1"),Mf(t).catch(()=>{}))}this.panel(null),this.resetRun(),this.gameMode=window.selectedMode||"mars",this.carJumpCount=window.carJumpCount||5,this.sprintDone=!1,this.carJumpCleared=!1,this.prevSpeed=0,this.scene=this.gameMode==="mars"?"intro":"play",this.sceneT=0,this.dist=0,this.runT=0,this.kmNext=1e3,this.splits=[],this.distPbShown=!1,this.copChase=!1,this.posted=null,this.topRank=0,this.celebrate=!1,this.waved=!1,this.elons=0,this.heat=0,this.cleared=!1,this.copCd=0,this.copSeen=!1,this.dogeCd=3,this.boosts=0,this.stat={cars:0,peds:0,stomps:0,combo:0,air:0,top:0},this.comboNow=0,this.newEnds.clear(),this.stopT=0,this.slowT=0,this.pl.altMax=0,this.show("none"),document.body.classList.add("intro"),this.runs++,this.world.camMode=0,this.world.snapCam=!0,this.paintCoins(),Hn("game_start",{mode:this.gameMode||"mars"}),xa("start");
let mb=document.getElementById("mode-badge");
if(mb){mb.textContent=this.gameMode==="mars"?"🚀 MARS FLIGHT":this.gameMode==="megaramp"?"🛹 MEGA RAMP":this.gameMode==="carjump"?`🚗 CAR JUMP (${this.carJumpCount})`:this.gameMode==="free"?"🌐 FREE ROAM":"⚡ 0–60 SPRINT"}
if(this.gameMode==="free"){this.pl.reset(-5.4,0,0,32),this.pl.tank=1,ot("skip").classList.add("hide"),document.body.classList.remove("intro"),this.banner("FREE ROAM","Infinite Flight · Explore Ramps & Stunts",2.4,"gold")}
else if(this.gameMode==="megaramp"){this.pl.reset(-5.4,-145,0,62),this.pl.tank=1,ot("skip").classList.add("hide"),document.body.classList.remove("intro"),this.banner("MEGA RAMP GAP","Launch off the Vert Ramp into the Void!",2.6,"gold")}
else if(this.gameMode==="carjump"){this.tr.clear(),this.pl.reset(Ti[1],-50,0,36),this.pl.tank=1,ot("skip").classList.add("hide"),document.body.classList.remove("intro"),this.banner("CAR JUMP!","Launch over the "+this.carJumpCount+" Cars Lineup!",2.5,"gold");for(let k=0;k<this.carJumpCount;k++)this.tr.addCar(1,45+k*4.2,0,!0,0);let ch0=en(0);ch0.ramps=[{x:Ti[1],z:26,hw:2.6,len:10,h:4.6,big:!0}]}
else if(this.gameMode==="sprint"){this.tr.clear(),this.pl.reset(-5.4,0,0,0),this.pl.tank=1,ot("skip").classList.add("hide"),document.body.classList.remove("intro"),this.banner("0–60 SPRINT","Floor Gas or Space Thrusters!",2.2,"gold")};}skipIntro(){this.scene==="intro"&&this.sceneT>.3&&(this.sceneT=Rr)}pause(){this.scene==="play"||this.scene==="intro"?(this.prev=this.scene,this.scene="pause",this.show("pause"),this.sfx.siren(!1)):this.scene==="pause"&&(this.scene=this.prev,this.show("none"))}banner(t,e="",n=1.4,i=""){this.hud.banner.textContent=t,this.hud.bsub.textContent=e,this.bannerT=n;let r=this.hud.banner.parentElement;r.className=i,r.offsetWidth,r.classList.add("pulse")}pop(t,e,n,i,r="",a=1.1,o=1.6){let l=this.pops.find(c=>!c.on)??this.pops.reduce((c,h)=>c.t/c.life>h.t/h.life?c:h);l.rise=o,Object.assign(l,{x:e,y:n,z:i,t:0,life:a,on:!0}),l.el.textContent=t,l.el.className="pop "+r,l.el.style.display="block"}flash(t="#fff"){let e=this.hud.flash;e.style.background=t,e.classList.remove("go"),e.offsetWidth,e.classList.add("go")}update(t){this.time+=t,this.sceneT+=t;let e=this.inp.poll(),n=this.pl,r={gas:1,brake:0,steer:(e.right?1:0)-(e.left?1:0),thrust:e.jet};(this.scene==="title"||this.scene==="result")&&(r={gas:0,brake:1,steer:0,thrust:!1}),this.scene==="over"&&(r={gas:0,brake:.6,steer:0,thrust:!1});let a=this.slowT>0?.4:this.scene==="over"?.5:1;this.slowT>0&&(this.slowT-=t);let o=t*a;if(this.scene==="intro"){let l=xf(Math.min(this.sceneT,Rr));if(n.setPose(l.x,l.y,l.z,l.q),n.thrusting=l.jet?1:0,n.speed=30,l.smoke)for(let c of[-1,1])this.fx.tire(l.x+c*.9,0,l.z+1.5,0,10);if(ot("skip").classList.toggle("hide",this.sceneT<.4),this.sceneT>=Rr){if(n.reset(Pr.x,Pr.z,0,gf),this.fx.cloud(Pr.x,Pr.z,.8),this.sfx.land(10),this.world.shake=.4,this.scene="play",this.sceneT=0,ot("skip").classList.add("hide"),this.cine){let c=this.cine;this.cine=null,c()}document.body.classList.remove("intro"),this.banner(this.runs<=3?"EAT 5 ELONS!":"GO!",this.runs<=3?"then reach MARS at 3 km":"",this.runs<=3?2.2:.9,"gold"),this.sfx.beep(!0)}this.tr.update(o,n,this.tev),this.tev.length=0}else if(this.scene==="launch")this.launch(t);else if(this.scene==="arrest")this.arrest(t);else if(this.scene!=="pause"){if(this.dead)this.deadStep(o);else{let l=Math.min(6,Math.ceil(o/.008333333333333333)),c=o/l;for(let h=0;h<l;h++)this.ev.length=0,this.tev.length=0,n.step(c,r,this.ev),this.tr.update(c,n,this.tev),this.handle()}this.tr.populate(n.pos.z)}this.scene==="play"&&this.playRules(t),this.scene==="over"&&this.sceneT>(this.dead?2.2:1.6)&&this.result(),this.scene!=="pause"&&this.dogesStep(o),this.effects(t),this.fx.update(o),this.world.sync(n,this.tr,o,this.time),this.world.syncDoges(this.doges),this.world.updateCam(n,t,this.scene==="title"?"title":this.scene==="intro"?"intro":"play",this.time),this.sfx.drive(n.speed,this.scene==="play"?1:0,n.thrusting>0,n.mode==="air",this.scene==="play"||this.scene==="intro"||this.scene==="launch"||this.scene==="over"&&!this.dead),this.paintHud()}playRules(t){let e=this.pl,n=e.pos;
if(this.gameMode==="free"){e.tank=1;if(Math.abs(n.x)>Of){n.x=-5.4;n.y=0.4;e.vel.set(0,0,28);this.pop("RECENTERED",-5.4,1.5,n.z,"gold")}}
if(this.gameMode==="sprint"&&!this.sprintDone&&e.speed>0.5){if(this.prevSpeed<26.8224&&e.speed>=26.8224){this.sprintDone=!0;let cT=Math.max(0,this.runT-t+t*(26.8224-this.prevSpeed)/(e.speed-this.prevSpeed));this.banner("0–60: "+cT.toFixed(2)+"s!","SUPERSONIC LAUNCH",4,"gold");this.sfx.check()}this.prevSpeed=e.speed}
if(this.gameMode==="carjump"&&!this.carJumpCleared&&n.z>45+this.carJumpCount*4.2+4&&e.pos.y<=0.2){this.carJumpCleared=!0;this.banner("CLEARED "+this.carJumpCount+" CARS!","FLAWLESS CAR JUMP!",3.5,"gold");this.sfx.check();this.pop("PERFECT CLEAR!",n.x,n.y+2,n.z,"gold",2)}
if(this.runT+=t,e.cap=30+Math.min(28,Math.max(0,n.z)/110),e.fill=1/(2.5+1.2*Hs(n.z)),n.z>this.dist&&(this.dist=Math.min(Cn,n.z)),this.stat.top=Math.max(this.stat.top,e.speed*3.6),this.dist>=this.kmNext&&this.kmNext<Cn){let r=this.kmNext/1e3-1,a=this.pbSplits?.s[r];this.splits[r]=this.runT,a&&this.runT<a?this.banner(va(wt.km,{n:this.kmNext/1e3}),`PB PACE \u25B2 -${(a-this.runT).toFixed(2)}s \xB7 ${this.elons}/${je} ELON`,1.8,"gold"):this.banner(va(wt.km,{n:this.kmNext/1e3}),`${this.elons}/${je} ELON`,1.4),this.sfx.check(),this.kmNext+=1e3}!this.distPbShown&&this.best>=300&&this.best<yn/2&&this.dist>this.best&&(this.distPbShown=!0,this.banner("NEW BEST DISTANCE!",`past your ${this.best.toLocaleString()} m`,1.6,"gold"),this.sfx.coin(4));for(let r of Ai){if(r.got)continue;let a=r.x-n.x,o=r.y-(n.y+.6),l=r.z-n.z;a*a+o*o+l*l<4.3*4.3&&(r.got=!0,this.elons++,e.turbo=Math.min(Yo,e.turbo+2),this.pop("TURBO!",n.x,n.y+2.6,n.z,"gold",.9),this.world.chomp(Ai.indexOf(r),this.time),this.sfx.chomp(),e.tank=Math.min(1,e.tank+.25),this.fx.sparkle(r.x,r.y,r.z),this.sfx.coin(this.elons),this.paintCoins(),this.elons===je?this.banner(wt.gotAll,"",1.8,"gold"):this.elons<je&&this.pop(va(wt.got,{n:this.elons}),r.x,r.y+1,r.z,"gold",1.2))}if(n.z>0&&e.mode==="ground"&&Math.abs(n.x)>Of){this.explode(wt.boom);return}if(this.heat>=Ff&&!this.copChase&&(this.copChase=!0,this.copGap=72,this.copT=0,this.banner("\u{1F6A8} POLICE ROADSTER!","RUN TO MARS!",2,"red"),this.sfx.launch()),this.copChase){this.copT+=t,this.copGap-=t*(4.6+Math.max(0,22-e.speed)*.3);let r=Math.sin(e.yaw),a=Math.cos(e.yaw),o=Math.max(0,1-this.copT/2.2),l=Math.min(1,Math.max(0,this.copGap/72)),c=Math.sin(this.copT*.9)*5*l,h=10*l-1,u=2.8+7*l+o*24+Math.sin(this.copT*2.1)*.5;if(this.copP.set(n.x+r*h+a*c,Math.max(n.y,0)+u,n.z+a*h-r*c),this.world.showCop(!0,this.copP,this.tmpQ.setFromEuler(this.tmpE.set(-.1-o*.5,e.yaw,Math.sin(this.copT*1.3)*.15,"YXZ")),this.time,!0),Math.random()<.5&&this.fx.jet(this.copP.x,this.copP.y+.1,this.copP.z,0,1,0),this.copGap<=3){this.copFrom.copy(this.copP),this.startArrest();return}}this.heat=Math.max(0,this.heat-t*.14);let i=(this.heat>=3?1:0)+(this.heat>=6?1:0)+(this.heat>=8.5?1:0);this.copCd-=t,i>this.tr.cops()&&this.copCd<=0&&(this.tr.spawnCop(e),this.copCd=4,this.copSeen||(this.copSeen=!0,this.banner("\u{1F6A8} POLICE!","",1.4,"red"))),this.sfx.siren(this.tr.cops()>0),e.speed<Ey&&this.sceneT>1.2?(this.stopT+=t,this.stopT>Ay&&this.gameOver(this.tr.cops()>0?"BUSTED!":wt.stopped)):this.stopT=Math.max(0,this.stopT-t*2),n.z>=Cn&&this.startLaunch()}gameOver(t){let e=t===wt.boom||t===wt.wall?"boom":t===wt.failNeed?"fall":t==="BUSTED!"?"busted":t===wt.stopped?"stall":"";e&&this.unlock(e),this.scene="over",this.sceneT=0,this.overWhy=t,this.banner(t,`${Math.floor(this.dist).toLocaleString()} m`,2.5,"red"),this.sfx.over(),this.sfx.siren(!1)}explode(t){let e=this.pl.pos;this.fx.explode(e.x,e.y,e.z),this.sfx.boom(),this.world.burn(!0),this.world.shake=1.4,this.flash("#ffb060"),this.dead=!0,this.dv.set(this.pl.vel.x*.3,11,this.pl.vel.z*.35),this.dspin.set(3+Math.random()*3,Math.random()*2,4+Math.random()*4),this.gameOver(t),this.slowT=.6}deadStep(t){let e=this.pl;e.pos.y<=0&&this.dv.y<0?(this.dv.multiplyScalar(.9),this.dv.y=0,this.dspin.multiplyScalar(.9),e.pos.y=0):this.dv.y-=20*t,e.pos.addScaledVector(this.dv,t);let n=new he().setFromEuler(new pe(this.dspin.x*t,this.dspin.y*t,this.dspin.z*t));e.q.multiply(n),e.thrusting=0,e.speed=this.dv.length(),Math.random()<.5&&this.fx.smoke.emit(e.pos.x,e.pos.y+.8,e.pos.z,Math.random()-.5,2,Math.random()-.5,1.6,1,4,.1,.1,.1,.6,-.6)}sendRun(){if(this.posted)return this.posted;if(Dr){let i={list:[],rank:this.cineRank,best:null,total:0};return this.posted=Promise.resolve({all:i,day:i}),this.topRank=this.cineRank,this.posted}let t=this.stat,e=Math.round(this.runT*100),n={dist:Math.floor(this.dist),secs:Math.max(1,Math.round(this.runT)),t10:Math.round(e/10),t100:e,cleared:this.cleared,elons:this.elons,cars:t.cars,peds:t.peds,stomps:t.stomps,combo:t.combo};return this.posted=this.runTk.catch(()=>"").then(i=>Sf({...n,tk:i||void 0})),this.posted.then(i=>{this.topRank=i?.all?.rank??0}).catch(()=>{}),this.posted}startLaunch(){this.scene="launch",this.sceneT=0,this.sfx.siren(!1),this.lp.copy(this.pl.pos),this.lv.set(0,0,Math.max(20,this.pl.speed)),this.boosts=0,this.fell=!1,this.cleared=this.elons>=je,this.tier=this.elons>=Ai.length?"doge":this.cleared?"mars":this.elons>=3?"starman":this.elons>=1?"ship":"fall",this.wantedLaunch=this.copChase||this.heat>=Ff,this.orbitT=0,this.shipT=-1,this.bonusDone=!1,this.hint1=!1,this.landed=!1,this.topRank=0,this.celebrate=!1,this.cleared&&this.sendRun(),this.copChase=!1,this.world.showCop(!1),this.spaceT=0,this.marsT=0;for(let t of this.doges)t.on=!1;document.body.classList.remove("danger","edge","jumpnow","wanted"),document.body.classList.add("cine"),this.banner("LAUNCH!",`${this.elons}/${je} ELON BOOST`,1.6,this.cleared?"gold":"red"),this.sfx.launch()}launch(t){let e=this.sceneT,n=this.pl,i=this.lp,r=this.lv;n.thrusting=1,this.boosts<this.elons&&e>.5+this.boosts*.28&&(this.boosts++,this.fx.sparkle(i.x,i.y,i.z),this.fx.cloud(i.x,i.z,.6),this.sfx.coin(this.boosts),this.pop(`BOOST x${this.boosts}`,i.x,i.y+2,i.z,"gold",1),this.world.shake=.3+this.boosts*.06),e<.4&&this.fx.cloud(i.x,i.z,.35);let a=this.elons/je;if(this.tier==="mars"||this.tier==="doge"||this.tier==="starman")if(this.world.inSpace)if(this.tier==="starman")this.orbit(t);else if(this.tier==="doge")this.dogeEnd(t);else if(this.world.onMars){this.marsT+=t;let o=this.marsT,l=nn.MARS,c=4.6,h=Math.min(1,o/c),u=1-Math.pow(1-h,3);i.set(l.x,l.y+.6+70*(1-u),l.z-90*(1-u)),n.thrusting=h<1?1:0;let d=new he().setFromEuler(new pe(-.25*(1-u)+(h<1?Math.sin(o*2)*.03:0),0,Math.sin(o*1.3)*.08*(1-u),"YXZ"));n.setPose(i.x,i.y,i.z,d);let f=Math.sin(o*.25)*6;if(this.world.camOverride={pos:new C(l.x+1.8+f*.25,l.y+3.6+(1-u)*24,l.z-12.5-(1-u)*48),look:new C(l.x-.6,l.y+(i.y-l.y)*.6+4.2,l.z+(i.z-l.z)*.5+24),fov:66},o>.8&&this.overWhy!==wt.mars&&(this.overWhy=wt.mars,this.banner(wt.mars,"MUSK EMPIRE AWAITS \xB7 "+is(Math.round(this.runT*100)),3.6,"gold"),this.sfx.check()),this.wantedLaunch&&o>2&&this.world.showCop(!0,this.tmpV.set(l.x+3.6,l.y+.6,l.z+5),this.tmpQ.setFromEuler(this.tmpE.set(0,-2.6,0)),this.time,!1),o>5.2&&!this.bonusDone&&this.bonuses(i),h>=1&&!this.landed){this.landed=!0,this.unlock("mars"),this.fx.cloud(i.x,i.z,.45,l.y),this.sfx.land(6);for(let g=0;g<5;g++)this.fx.sparkle(i.x+(Math.random()-.5)*20,i.y+8+Math.random()*10,i.z+10)}if(this.world.fireworks(t,this.fx),o>4.3&&!this.celebrate&&this.topRank>0&&this.topRank<=5&&(this.celebrate=!0,this.unlock("top5"),this.celebT=0,this.banner(`\u{1F3C6} WORLD TOP ${this.topRank}!`,`#${this.topRank} \xB7 ${is(Math.round(this.runT*100))}`,3.2,"gold"),this.sfx.check()),this.celebrate){this.celebT+=t;let g=this.celebT;if(this.fwT-=t,this.fwT<=0){this.fwT=.18+Math.random()*.2;let S=[[2.4,.5,.4],[.5,2.2,2.6],[2.6,2.2,.4],[2,.6,2.4],[.6,2.4,.8]][Math.floor(Math.random()*5)];this.fx.firework(l.x+(Math.random()-.5)*44,l.y+9+Math.random()*12,l.z+22+Math.random()*34,S[0],S[1],S[2]),Math.random()<.5&&this.sfx.bump()}let x=Math.min(1,g/3.2),m=l.z+26-21*x,p=l.x+1.6;this.world.elonPose(!0,new C(p,l.y+(Math.abs(m-l.z)<14.5?.6:0),m),Math.PI,g,x>=1?Math.min(1,(g-3.2)*2):0),g>3.4&&!this.waved&&(this.waved=!0,this.pop("WELCOME TO MARS!",p,l.y+5.2,m,"gold",2.2)),this.world.camOverride={pos:new C(l.x+3.2,l.y+3.4,l.z-9.5),look:new C(l.x+.6,l.y+3.4,l.z+8),fov:62}}o>(this.celebrate?11.2:8.2)&&(this.world.elonPose(!1),this.world.showCop(!1),this.scene="result",this.result())}else{this.spaceT+=t;let o=this.spaceT,l=this.world.marsPos,c=l.clone().sub(nn.SPACE).normalize();i.copy(nn.SPACE).addScaledVector(c,o*170);let h=new he().setFromUnitVectors(new C(0,0,1),c).multiply(new he().setFromEuler(new pe(0,0,Math.sin(o*.8)*.25)));n.setPose(i.x,i.y,i.z,h);let u=this.runT<60;u&&!this.hint1&&o>.3&&(this.hint1=!0,this.banner("\u26A1 WARP SPEED","UNDER 60 SECONDS",1.8,"gold")),this.world.camOverride={pos:i.clone().add(new C(6,2.2,-7)),look:i.clone().addScaledVector(c,60),fov:u?84:58},this.world.spin(t),o>3.8&&(this.flash("#ffd8b0"),this.world.marsSurface(!0),this.marsT=0,this.world.camOverride=null)}else{r.z+=(10-r.z)*t*1.5,r.y+=(e<.6?8:40+e*30)*t,i.addScaledVector(r,t);let o=-Math.min(1.25,e*.6);n.setPose(i.x,i.y,i.z,new he().setFromEuler(new pe(o,0,Math.sin(e*3)*.1,"YXZ"))),this.world.camOverride={pos:new C(i.x+9,Math.max(2,i.y*.55),i.z-14),look:i.clone(),fov:70},e>3.4&&(this.flash("#ffffff"),this.world.space(!0),this.tier==="doge"&&this.world.dogePlanet(!0),this.world.camOverride=null,i.copy(nn.SPACE),this.sceneT=3.4,this.spaceT=0)}else if(this.tier==="ship")this.shipEnd(t,e,a);else{let o=.6+a*1.6;e<o?r.y+=(30+a*25)*t:(this.fell||(this.fell=!0,this.banner(wt.failNeed,`${this.elons}/${je} ELON`,2.4,"red"),this.sfx.over()),r.y-=22*t,n.thrusting=Math.random()<.15?1:0),i.addScaledVector(r,t);let l=e<o?-Math.min(.9,e*.8):Math.min(1.2,(e-o)*.9-.6);n.setPose(i.x,Math.max(0,i.y),i.z,new he().setFromEuler(new pe(l,0,e-o>0?(e-o)*2.5:0,"YXZ"))),this.world.camOverride={pos:new C(i.x+12,Math.max(3,i.y*.6+2),i.z-18),look:i.clone(),fov:66},i.y<=0&&r.y<0&&(n.pos.y=0,this.world.camOverride=null,this.scene="play",this.explode(wt.failNeed))}if(n.speed=r.length(),n.thrusting){let o=n.up();this.fx.jet(i.x,i.y+.1,i.z,o.x,o.y,o.z,this.world.onMars?nn.MARS.y:this.world.onOcean?nn.OCEAN.y+nn.DECK-.58:0)}}bonuses(t){this.bonusDone=!0;let e=[];this.stat.peds===0&&e.push(["pacifist","\u{1F54A}\uFE0F PEACEFUL DRIVER"]),this.wantedLaunch&&e.push(["outlaw","\u{1F6A8} OUTLAW ON MARS"]),this.runT<60&&e.push(["speed","\u26A1 UNDER 60 SECONDS"]),e.forEach(([n,i],r)=>{this.unlock(n),this.pop(i,t.x+1.6,t.y+3.4+r*1.3,t.z+3,"gold",2.8)}),e.length&&this.sfx.coin(3)}orbit(t){this.orbitT+=t;let e=this.orbitT,n=nn.SPACE,i=this.pl,r=this.lp;i.thrusting=e<.5?1:0,r.copy(n).add(this.tmpV.set(e*1.2,Math.sin(e*.6)*.5,e*.4)),i.setPose(r.x,r.y,r.z,this.tmpQ.setFromEuler(this.tmpE.set(Math.sin(e*.3)*.25,.3+e*.12,Math.sin(e*.4)*.3,"YXZ")));let a=n.clone().add(new C(-600,-1700,-1200)),o=r.clone().sub(a).normalize(),l=new C(0,1,0).cross(o).normalize();if(this.world.showFloaters(!0,r,e,l),this.world.camOverride={pos:r.clone().addScaledVector(o,12).addScaledVector(l,Math.sin(e*.2)*1.5).add(new C(0,2.2,0)),look:r.clone().add(new C(0,1.3,0)),fov:60},this.world.spin(t),e>.9&&this.overWhy!=="LOST IN SPACE"&&(this.overWhy="LOST IN SPACE",this.unlock("starman"),this.banner("LOST IN SPACE",`${this.elons}/${je} ELON`,2.6,"red"),this.sfx.over()),e>3.4&&!this.hint1){this.hint1=!0;let c=r.clone().addScaledVector(l,1.4);this.pop(`"You didn't have enough`,c.x,c.y+4.6,c.z,"gold",5.6,.15),this.pop('energy to reach Mars\u2026"',c.x,c.y+3.9,c.z,"gold",5.6,.15),this.sfx.coin(1)}e>9.5&&(this.world.showFloaters(!1),this.world.camOverride=null,this.scene="result",this.result())}dogeEnd(t){this.spaceT+=t;let e=this.spaceT,n=this.pl,i=this.lp,r=nn.SPACE,a=this.world.dogePos,o=a.clone().sub(r).normalize(),l=a.distanceTo(r)-2300,c=Math.min(1,e/7),h=c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2;i.copy(r).addScaledVector(o,l*h),this.landed&&(i.y+=Math.sin(this.marsT*1.2)*2),n.setPose(i.x,i.y,i.z,new he().setFromUnitVectors(new C(0,0,1),o).multiply(new he().setFromEuler(new pe(0,0,Math.sin(e*.8)*.25)))),n.thrusting=c<1?1:0,this.world.spin(t),this.world.dogeSpin(this.time),e>1&&!this.hint1&&(this.hint1=!0,this.banner("10/10 ELONS!?","MARS IS NOT ENOUGH\u2026",2.2,"gold"),this.sfx.coin(5));let u=new C(0,1,0).cross(o).normalize();if(this.landed||(this.world.camOverride={pos:i.clone().addScaledVector(o,-8).add(new C(0,2.2,0)).addScaledVector(u,2.5),look:i.clone().addScaledVector(o,30),fov:this.runT<60?80:60}),c>=1&&!this.landed){this.landed=!0,this.marsT=0,this.overWhy="TO THE MOON!",this.unlock("doge"),this.unlock("mars"),this.flash("#ffe8a0"),this.banner("TO THE MOON! \u{1F415}","YOU FOUND DOGE PLANET \xB7 "+is(Math.round(this.runT*100)),3.6,"gold"),this.sfx.check();for(let d=0;d<6;d++)this.fx.sparkle(i.x+(Math.random()-.5)*20,i.y+(Math.random()-.5)*10,i.z+(Math.random()-.5)*20)}if(this.landed){this.marsT+=t;let d=this.marsT;if(this.world.camOverride={pos:i.clone().addScaledVector(o,-9-d*.8).addScaledVector(u,3+Math.sin(d*.3)*3).add(new C(0,2.4,0)),look:i.clone().addScaledVector(o,40),fov:62},d>1.4&&!this.bonusDone&&this.bonuses(i),d>1&&!this.celebrate&&this.topRank>0&&this.topRank<=5&&(this.celebrate=!0,this.unlock("top5"),this.banner(`\u{1F3C6} WORLD TOP ${this.topRank}!`,`#${this.topRank} \xB7 ${is(Math.round(this.runT*100))}`,3.2,"gold"),this.sfx.check()),this.fwT-=t,this.fwT<=0){this.fwT=this.celebrate?.18:.5;let f=[[2.4,.5,.4],[.5,2.2,2.6],[2.6,2.2,.4],[2,.6,2.4],[.6,2.4,.8]][Math.floor(Math.random()*5)];this.fx.firework(i.x+(Math.random()-.5)*60+o.x*60,i.y+Math.random()*30,i.z+(Math.random()-.5)*60+o.z*60,f[0],f[1],f[2])}d>(this.celebrate?7.5:6)&&(this.world.camOverride=null,this.scene="result",this.result())}}shipEnd(t,e,n){let i=this.pl,r=this.lp,a=this.lv;if(this.shipT<0){let u=.6+n*1.6;e<u?a.y+=(30+n*25)*t:(this.fell||(this.fell=!0,this.banner("ENGINE OUT\u2026",`${this.elons}/${je} ELON`,1.6,"red"),this.sfx.over()),a.y-=22*t,i.thrusting=Math.random()<.15?1:0),r.addScaledVector(a,t);let d=e<u?-Math.min(.9,e*.8):Math.min(1.2,(e-u)*.9-.6);i.setPose(r.x,Math.max(0,r.y),r.z,this.tmpQ.setFromEuler(this.tmpE.set(d,0,e-u>0?(e-u)*2.5:0,"YXZ"))),this.world.camOverride={pos:new C(r.x+12,Math.max(3,r.y*.6+2),r.z-18),look:r.clone(),fov:66},this.fell&&(e>u+1.1||r.y<6&&a.y<0)&&(this.flash("#9fd0ff"),this.world.ocean(!0),this.shipT=0);return}this.shipT+=t;let o=this.shipT,l=nn.OCEAN,c=2.6,h=Math.min(1,o/c);if(this.world.oceanStep(this.time),h<1)r.set(l.x+3+24*h,l.y+62*(1-h*h)+.4,l.z-38+44*h),i.thrusting=Math.random()<.2?1:0,i.setPose(r.x,r.y,r.z,this.tmpQ.setFromEuler(this.tmpE.set(.25+h*.9,-.5,Math.sin(o*5)*.25+h*.6,"YXZ")));else{this.landed||(this.landed=!0,this.overWhy="SPLASHDOWN",this.unlock("ship"),this.world.shake=.6,this.sfx.land(14),this.sfx.bump(),this.fx.cloud(r.x,r.z,1.3,l.y),this.fx.puff(r.x,l.y+1,r.z,40,14,2.2,.95,1.4),this.fx.puff(r.x,l.y+.5,r.z,24,6,3.2,.9,2.2),this.banner("SPLASH! \u{1F30A}","MISSED THE DRONE SHIP",3,"red"),this.sfx.over());let u=o-c;r.set(l.x+27,l.y-Math.min(3.5,u*1.3)+Math.sin(u*4)*.15,l.z+6),i.thrusting=0,i.setPose(r.x,r.y,r.z,this.tmpQ.setFromEuler(this.tmpE.set(1.15-Math.min(.5,u*.3),-.5,.6+Math.sin(u*2)*.1,"YXZ"))),Math.random()<t*7&&this.fx.puff(r.x+(Math.random()-.5)*2.5,l.y+.2,r.z+(Math.random()-.5)*2.5,3,1.5,.6,.95,.9)}this.world.camOverride={pos:new C(l.x+50,l.y+8,l.z-20),look:new C(l.x+22,l.y+(h<1?Math.max(2,(r.y-l.y)*.5):1.5),l.z),fov:60},o>c+4&&(this.world.camOverride=null,this.scene="result",this.result())}startArrest(){this.copChase=!1,this.scene="arrest",this.sceneT=0;for(let t of this.doges)t.on=!1;document.body.classList.remove("danger","edge","jumpnow"),document.body.classList.add("cine","wanted"),this.copP.copy(this.copFrom),this.banner("CAUGHT!","",1.2,"red"),this.sfx.siren(!0)}arrest(t){let e=this.sceneT,n=this.pl,i=n.pos;this.ev.length=0,this.tev.length=0,n.step(t,{gas:0,brake:1,steer:0,thrust:!1},this.ev),this.tr.update(t,n,this.tev),this.tev.length=0;let r=1.1,a=Math.min(1,e/r),o=1-Math.pow(1-a,3),l=this.tmpV.set(i.x,i.y+2.4+(1-o)*0,i.z+1.2);this.copP.lerpVectors(this.copFrom,l,o),this.copP.y+=Math.sin(a*Math.PI)*6*(1-a),e>r&&(this.copP.y=i.y+2.4-Math.min(.6,(e-r)*.8));let c=this.tmpV2.copy(l).sub(this.copFrom).setY(0).normalize(),h=Math.atan2(c.x,c.z)*(1-o),u=new he().setFromEuler(new pe(-(1-o)*.5,h,Math.sin(e*6)*.12*(1-o),"YXZ"));this.world.showCop(!0,this.copP,u,this.time,e<r+.4),Math.random()<.6&&this.fx.jet(this.copP.x,this.copP.y+.1,this.copP.z,0,1,0),this.world.camOverride={pos:new C(i.x+8,i.y+4.5,i.z-9),look:new C(i.x,i.y+1.6,i.z+1),fov:62},e>r+.5&&this.overWhy!=="BUSTED!"&&(this.overWhy="BUSTED!",this.unlock("busted"),this.banner("BUSTED!","",2,"red"),this.flash("#ff2a2a"),this.world.shake=.5,this.sfx.crash(!0),this.fx.cloud(i.x,i.z,.7)),e>r+2.3&&(this.world.camOverride=null,this.sfx.siren(!1),this.result())}bonk(){let t=ot("bonk");t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}dogesStep(t){let e=this.pl,n=e.pos;if(this.scene==="play"&&!this.dead&&e.mode==="air"&&n.y>2.5&&n.z>300&&(this.dogeCd-=t,this.dogeCd<=0&&Math.random()<t*1.6)){let a=this.doges.find(o=>!o.on);if(a){let o=Math.random()<.5?-1:1,l=1.25;Object.assign(a,{on:!0,side:o,hit:!1,x:o*26,y:n.y+(Math.random()-.3)*1.5,z:n.z+e.vel.z*l,spin:0}),a.vx=(n.x-a.x)/l,a.vy=0,a.vz=0,this.dogeCd=2.2+Math.random()*2.5,this.sfx.whoosh()}}let i=!1,r=!1;for(let a of this.doges)if(a.on){if(a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.spin+=t*(a.hit?14:3)*-a.side,a.hit&&(a.vy-=12*t),!a.hit){a.side<0?i=!0:r=!0;let o=a.x-n.x,l=a.y-(n.y+.6),c=a.z-n.z;this.scene==="play"&&o*o+l*l+c*c<2.5*2.5&&(a.hit=!0,a.vx*=-.4,a.vy=8,a.vz=e.vel.z*.5,e.vel.y=Math.min(e.vel.y,-7),e.vel.x+=-a.side*-6,e.tank=Math.max(0,e.tank-.3),this.world.shake=.7,this.fx.stars(n.x,n.y+1,n.z),this.sfx.bonk(),this.bonk())}(Math.abs(a.x)>40||a.y<-5||a.z<n.z-40)&&(a.on=!1)}this.hud.dwl.classList.toggle("on",i),this.hud.dwr.classList.toggle("on",r)}handle(){let t=this.pl,e=t.pos,n=this.scene==="play";for(let i of this.ev)if(i.k==="land"){this.comboNow=0;let r=-i.vy;r>5&&(this.fx.puff(e.x,0,e.z,Math.min(14,4+r*.6|0),r*.4,1.3),this.world.shake=Math.min(.5,r*.03)),this.sfx.land(r),i.air>.9&&n&&(this.stat.air=Math.max(this.stat.air,i.air),this.pop(i.air>2.5?wt.airshow:wt.landing,e.x,e.y+1,e.z,i.air>2.5?"gold":""))}else i.k==="liftoff"&&!i.ramp?(this.fx.cloud(e.x,e.z,1),this.sfx.whoosh()):i.k==="liftoff"&&i.ramp&&n?(this.pop(i.big?"RAMP TURBO!":"BOOST!",e.x,e.y+2.4,e.z,"gold",i.big?1.3:1),this.sfx.whoosh(),this.sfx.coin(1)):i.k==="stunt"?(this.pop(this.pl.stunts>1?"DOUBLE ROLL!":"BARREL ROLL!",e.x,e.y+2.2,e.z,"gold",1.3),this.sfx.whoosh(),this.sfx.coin(2)):i.k==="wall"&&n&&e.z>0&&!this.dead?this.explode(wt.wall):i.k==="wall"&&(this.fx.crash(e.x+Math.sign(e.x),.5,e.z,t.vel.x,t.vel.z,!1),this.sfx.bump());for(let i of this.tev)i.k==="car"||i.k==="chain"?(this.fx.crash(i.x,i.y,i.z,t.vel.x,t.vel.z,!!i.big),this.sfx.crash(!!i.big||i.k==="car"),this.world.shake=Math.min(.8,.25+i.p*.012),n&&(this.stat.cars++,this.heat+=i.k==="car"?.25:.1,i.k==="car"&&(t.tank=Math.min(1,t.tank+.06)),this.pop(wt.crash,i.x,i.y+1,i.z,i.k==="chain"?"gold":"")),i.big&&i.k==="car"&&(this.slowT=.3)):i.k==="stomp"?(this.fx.crash(i.x,i.y,i.z,0,0,!0),this.sfx.stomp(),this.world.shake=.5,n&&(this.stat.stomps++,this.comboNow++,this.stat.combo=Math.max(this.stat.combo,this.comboNow),i.p&&(t.tank=Math.min(1,t.tank+.2),t.turbo=Math.min(Yo,t.turbo+1)),this.pop(wt.stomp,i.x,i.y+1,i.z,"gold"))):i.k==="ped"?(this.sfx.boing(),this.fx.stars(i.x,i.y,i.z),this.heat+=1,this.pop(wt.shouts[Math.floor(Math.random()*wt.shouts.length)],i.x,i.y+1.6,i.z,"bubble",1.3),n&&(this.stat.peds++,this.pedBurst.push(this.time),this.pedBurst=this.pedBurst.filter(r=>this.time-r<1.2),this.pedBurst.length===3&&this.banner(wt.strike,"",1.1))):i.k==="cop"?(this.fx.crash(i.x,1,i.z,0,0,!1),this.sfx.crash(!1),this.world.shake=.6,this.pop("RAMMED!",e.x,e.y+1.5,e.z,"red")):i.k==="copdown"?(this.fx.crash(i.x,1,i.z,0,0,!0),this.sfx.crash(!0),this.heat=Math.max(0,this.heat-1.5),this.pop("COP DOWN!",i.x,2.5,i.z,"gold")):i.k==="bump"&&this.sfx.bump()}effects(t){let e=this.pl,n=e.pos;if(e.thrusting&&this.scene!=="launch"&&!this.dead){let a=e.up(),o=Math.sin(e.yaw),l=Math.cos(e.yaw);for(let[c,h]of[[-.65,1.35],[.65,-1.45]])this.fx.jet(n.x+l*c+o*h,n.y+.1,n.z-o*c+l*h,a.x,a.y,a.z)}if(e.stunt>0&&!this.dead){let a=this.tmpV.set(0,.6,0).applyQuaternion(e.q),o=e.up();for(let[l,c]of[[-.65,1.35],[.65,1.35],[-.65,-1.45],[.65,-1.45]]){let h=this.tmpV2.set(l,.15,c).applyQuaternion(e.q);this.fx.trail(n.x+h.x-a.x,n.y+h.y+.6-a.y,n.z+h.z-a.z,o.x,o.y,o.z)}}if(e.turbo>0&&this.scene==="play"){let a=Math.sin(e.yaw),o=Math.cos(e.yaw);for(let l of[-.7,.7])this.fx.trail(n.x+o*l-a*2.3,n.y+.5,n.z-a*l-o*2.3,a,0,o)}if(document.body.classList.toggle("turbo",e.turbo>0&&this.scene==="play"),e.mode==="ground"&&this.scene==="play"&&Math.abs(e.slip)>4){let a=Math.sin(e.yaw),o=Math.cos(e.yaw);this.fx.tire(n.x-a*1.45,0,n.z-o*1.45,-e.vel.x,-e.vel.z)}let i=this.world.cssW,r=this.world.cssH;for(let a of this.pops){if(!a.on)continue;if(a.t+=t,a.t>=a.life){a.on=!1,a.el.style.display="none";continue}let o=this.world.project(a.x,a.y+a.t*(a.rise??1.6),a.z,i,r);if(!o){a.el.style.display="none";continue}a.el.style.display="block";let l=a.t<.12?a.t/.12:1-Math.max(0,(a.t-a.life*.6)/(a.life*.4));a.el.style.opacity=String(l),a.el.style.transform=`translate(${o.x|0}px,${o.y|0}px) translate(-50%,-100%) scale(${a.t<.12?.6+a.t/.12*.5:1.1-Math.min(.1,a.t)})`}this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.hud.banner.parentElement.classList.add("hide"))}set(t,e){this.lastHud[t]!==e&&(this.lastHud[t]=e,this.hud[t].textContent=e)}paintCoins(){this.hud.coins.querySelectorAll("i").forEach((t,e)=>t.classList.toggle("on",e<this.elons))}paintHud(){let t=this.pl,e=this.scene==="play";this.set("dist",this.runT.toFixed(2)),this.set("spd",`${Math.round(t.speed*3.6)} km/h`),this.set("bestline",`${Math.floor(this.dist).toLocaleString()} m \xB7 ${Math.max(0,Math.ceil(Cn-this.dist)).toLocaleString()} m ${wt.toMars}`+(this.chal?` \xB7 \u{1F3C1} ${Mr(this.chal)}`:""));let n=Math.min(1,this.dist/Cn);this.hud.progf.style.transform=`scaleX(${n.toFixed(4)})`,this.hud.progcar.style.left=`${(n*100).toFixed(2)}%`,this.set("gnum",t.gforce.toFixed(1)),this.set("anum",Math.max(0,t.pos.y).toFixed(1));let i=2*Math.PI*44*.75;this.hud.garc.style.strokeDashoffset=String(i*(1-Math.min(1,t.gforce/4))),this.hud.aarc.style.strokeDashoffset=String(i*(1-Math.min(1,t.pos.y/30)));let r=t.q,a=2*(r.y*r.z-r.w*r.x),o=Math.asin(Math.max(-1,Math.min(1,a)))*180/Math.PI,l=1-2*(r.x*r.x+r.z*r.z),c=2*(r.x*r.y+r.w*r.z),h=Math.atan2(c,l)*180/Math.PI;this.hud.gicon.style.transform=`rotate(${(-o).toFixed(0)}deg)`,this.hud.aicon.style.transform=`rotate(${(-h).toFixed(0)}deg)`,document.documentElement.style.setProperty("--t",(t.tank*100).toFixed(1)+"%"),this.hud.tank.style.setProperty("--t",(t.tank*100).toFixed(1)+"%"),this.hud.tank.classList.toggle("low",t.tank<.15);let u=Math.min(5,Math.floor(this.heat/2));this.set("wanted",(e||this.scene==="arrest")&&this.heat>=1?"\u2605".repeat(u)+"\u2606".repeat(5-u):""),document.body.classList.toggle("wanted",e&&this.tr.cops()>0);let d=e&&t.mode==="ground"&&t.pos.z>0&&Math.abs(t.pos.x)>Of-1.8;document.body.classList.toggle("edge",d);let f=e&&t.mode==="ground"&&t.speed<14&&this.sceneT>1.2;document.body.classList.toggle("danger",f||d),this.set("warn",d?wt.sideWarn:this.copChase&&e?`\u{1F6A8} POLICE ${Math.max(0,Math.round(this.copGap))} m BEHIND`:f?"\u26A0 "+Math.round(t.speed*3.6)+" km/h":"");let g=!1;if(e&&t.mode==="ground")for(let x=Be(t.pos.z);x<=Be(t.pos.z)+1;x++){let m=en(x).jam;if(m){let p=m.z0-t.pos.z;p>4&&p<20+t.speed*1.4&&(g=!0)}}if(document.body.classList.toggle("jumpnow",g),g&&this.runs<=4){this.set("hint",wt.jumpNow);return}this.set("hint",e&&this.sceneT<6&&this.runs<=2?this.inp.touchUsed||matchMedia("(pointer:coarse)").matches?wt.hint:wt.hintPc:"")}result(){this.scene="result",this.sceneT=0,this.show("result"),this.sfx.siren(!1),document.body.classList.remove("cine");let t=Math.floor(this.dist),e=Math.round(this.runT*100),n=Math.round(e/10),i=this.cleared?yn-e:t,r=i>this.best;this.cleared&&!Dr&&this.splits.length>=2&&(!this.pbSplits||e<this.pbSplits.t)&&(this.pbSplits={t:e,s:this.splits.slice(0,2)},we.set("pbsplit",JSON.stringify(this.pbSplits))),r&&(this.best=i,we.set("score",String(i))),ot("result").classList.toggle("win",this.cleared),ot("r-why").textContent=this.tier==="doge"&&this.cleared?"TO THE MOON! \u{1F415}":this.cleared?wt.complete:this.overWhy,this.paintEnds(),ot("r-dist").textContent=is(e),ot("r-unit").textContent=this.cleared?this.tier==="doge"?"SECONDS TO DOGE PLANET \u{1F415}":"SECONDS TO MARS \u{1F680}":`SECONDS \xB7 ${t.toLocaleString()} m \xB7 ${this.elons}/${je} ELON`,ot("r-best").textContent=r?wt.newBest:`${wt.best} ${ga(this.best)}`,ot("r-best").classList.toggle("new",r);let a=this.stat;ot("r-stats").innerHTML=[[wt.elons,`${this.elons}/${je}`],[wt.cars,a.cars],[wt.peds,a.peds],[wt.stomps,a.combo>1?`${a.stomps} \xB7 best x${a.combo}`:a.stomps],[wt.top,`${Math.round(a.top)} km/h`],[wt.air,`${a.air.toFixed(1)}s`]].map(([o,l])=>`<div><span>${o}</span><b>${l}</b></div>`).join(""),ot("r-name").value=ns(),ot("r-rank").textContent=wt.loading,this.paintChalResult(e,t),Hn("game_over",{mode:"mars",dist:t,cleared:this.cleared?1:0,elons:this.elons,cars:a.cars,peds:a.peds,stomps:a.stomps,combo:a.combo}),xa("over",t,Math.round(a.top)),this.sendRun().then(o=>{this.boards=o,this.syncBest(o.all?.best),o.name&&o.name!==ns()&&(ma(o.name),ot("r-name").value=o.name),this.cleared&&o.all?.rank>=1&&o.all.rank<=5&&this.setChamp(!0);let l=o.all;ot("r-rank").textContent=l.rank?`\u{1F30D} ${wt.myRank} #${l.rank.toLocaleString()} / ${l.total.toLocaleString()}`:""}).catch(()=>{ot("r-rank").textContent=""})}paintEnds(){let t=xh.filter(n=>this.ends.has(n[0])).length,e=xh.length;ot("ends-n").textContent=`${t}/${e}`,ot("b-ends").classList.toggle("has",this.newEnds.size>0),ot("ends-sum").innerHTML=`<b>${t}</b> / ${e} FOUND<div class="bar"><i style="width:${(100*t/e).toFixed(1)}%"></i></div>`,ot("ends-list").innerHTML=xh.map(([n,i,r,a])=>this.ends.has(n)?`<div class="e${this.newEnds.has(n)?" new":""}"><span class="ic">${i}</span><div><b>${r}</b><small>${a}</small></div></div>`:'<div class="e lock"><span class="ic">?</span><div><b>???</b><small>&nbsp;</small></div></div>').join("")}async saveName(){let t=ot("r-name"),e=t.value.replace(/[\u0000-\u001f<>&"'`\\]/g,"").trim().slice(0,10);if(e){if($i(e)){this.toast(ld),t.value=ns();return}ma(e),t.blur();try{await Rf(e),ot("b-namesave").textContent="\u2713",setTimeout(()=>ot("b-namesave").textContent=wt.save,1200)}catch{}}}syncBest(t){t!=null&&t>this.best&&(this.best=t,we.set("score",String(t)))}async pulse(){if(clearTimeout(this.pulseT),this.scene==="title"){try{let{plays:t,countries:e}=await _f();if(t>0&&this.scene==="title"){let n=i=>i.toLocaleString("en-US");ot("t-best").innerHTML=e&&e>1?`\u{1F30D} <b>${n(t)}</b> Mars launches from <b>${e}</b> countries<br>Be launch <b>#${n(t+1)}</b>! \u{1F680}`:`\u{1F525} <b>${n(t)}</b> launches to Mars so far \u2014 be <b>#${n(t+1)}</b>!`,ot("t-best").classList.add("pulse")}}catch{}this.pulseT=window.setTimeout(()=>this.pulse(),6e4)}}async openRank(){this.panel("rank"),await this.showRank(this.rankScope,!0)}async showRank(t,e=!1){this.rankScope=t,ot("tab-all").classList.toggle("on",t==="all"),ot("tab-day").classList.toggle("on",t==="day");let n=ot("rank-list"),i=this.boards[t];if(!i||e){n.innerHTML=`<p class="empty">${wt.loading}</p>`;try{i=await bf(t),this.boards[t]=i,t==="all"&&this.syncBest(i.best)}catch{n.innerHTML=`<p class="empty">${wt.rankErr}</p>`;return}}if(!i.list.length){n.innerHTML=`<p class="empty">${wt.noRank}</p>`,ot("rank-me").textContent="";return}let r=o=>o.replace(/[<>&"]/g,l=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[l]),a=!1;n.innerHTML=i.list.map((o,l)=>(o.score<yn/2&&!a&&l>0&&i.list[0].score>=yn/2?(a=!0,'<div class="sep">\u2014 STILL ON EARTH \u2014</div>'):"")+`<div class="row${o.me?" me":""}${l<3?" top"+(l+1):""}${o.score>=yn/2?" mars":""}"><span class="no">${l===0?'<i class="crown">\u{1F451}</i>':""}${l+1}</span><span class="fl" data-cc="${r(o.country||"")}">${Pf(o.country)}</span><span class="nm">${r(o.name)}</span><b>${ga(o.score)}</b></div>`).join(""),ot("rank-me").textContent=i.rank?`${wt.myRank} #${i.rank.toLocaleString()} \xB7 ${ga(i.best??0)}`:""}paintChalResult(t,e){let n=this.chal,i=ot("r-chal");if(ot("b-share-t").textContent="SHARE (GIFT)",!n){i.classList.add("hide");return}let r=this.cleared?yn-t:e,a=r>n.score,o=n.name.replace(/[<>&]/g,""),l=n.mars&&this.cleared?`${(Math.abs(n.t100-t)/100).toFixed(2)}s`:!n.mars&&!this.cleared?`${Math.abs(n.dist-e).toLocaleString()} m`:"";i.className=a?"win":"lose",i.innerHTML=a?`\u{1F3C6} YOU BEAT ${o}!${l?`<small>by ${l} \xB7 send it back</small>`:""}`:`${o} WINS${l?" BY "+l:""}<small>Target ${Mr(n)} \xB7 try again</small>`,Hn("challenge_result",{win:a?1:0})}skinOk(t){let e=br.find(n=>n.id===t);return e?this.allSkins?!0:t==="champ"?this.champ:this.invites>=e.need:!1}setChamp(t){!t||this.champ||(this.champ=!0,we.set("champ","1"),this.toast("\u{1F3C6} World Champion skin unlocked!"),Hn("champ_unlock",{}),ot("giftp").classList.contains("hide")||this.paintGift())}giftUrl(t){let e=new URLSearchParams;if(this.myRef&&e.set("r",this.myRef),t&&this.scene==="result"){let n=Math.round(this.runT*100),i=Math.floor(this.dist);e.set("c",ud(ns(),this.cleared?yn-n:i))}return e.set("utm_source","share"),e.set("utm_medium","social"),e.set("utm_campaign","gift"),"https://roadster.ubd.gg/?"+e.toString()}async openGift(t){this.giftChal=t,this.myRef||(this.myRef=await Fc(fn())),ot("gift-link").value=this.giftUrl(t),ot("b-gshare").classList.toggle("hide",!navigator.share),this.pvId="",this.paintGift(),this.panel("gift"),Hn("gift_open",{});try{let e=await gh();this.invites=e.count,we.set("inv",String(e.count)),this.setChamp(!!e.champ),this.paintGift()}catch{}}paintGift(){let t=this.invites||0,e=br.find(r=>r.need>t);ot("gift-n").innerHTML=`FRIENDS JOINED <b>${t}</b>`+(e?` \xB7 ${e.need-t} more for ${e.name}`:" \xB7 all skins unlocked!");let n=this.world.skin,i={champ:"radial-gradient(circle at 50% 50%,#ffc24a 0 28%,#0d0e12 31% 52%,#5a5d6a 70%,#0d0e12)",stock:"linear-gradient(135deg,#fff,#cfd6e4)",red:"linear-gradient(135deg,#ff6070,#a0101e)",neon:"linear-gradient(135deg,#9fe0ff,#1f7fd8)",gold:"linear-gradient(135deg,#fff0a0,#d89a18)"};this.allSkins&&(ot("gift-n").innerHTML+=' <small style="color:#7ff3a8">\xB7 TEST SERVER: ALL SKINS</small>'),ot("gift-skins").innerHTML=br.map(r=>{let a=this.skinOk(r.id);return`<div class="sk${a?"":" lock"}" data-id="${r.id}"><i style="background:${i[r.id]}"></i><b>${r.name}<small>${r.id==="champ"?"Top 5 on the world ranking":r.need?`${r.need} friend${r.need>1?"s":""}`:"Default"}</small></b>${a?`<button data-skin="${r.id}" class="${n===r.id?"on":""}">${n===r.id?"IN USE":"USE"}</button>`:"<small>\u{1F512}</small>"}</div>`}).join(""),ot("gift-skins").querySelectorAll("button[data-skin]").forEach(r=>r.addEventListener("click",a=>{a.stopPropagation();let o=r.dataset.skin;this.skinOk(o)&&(this.world.setSkin(o),we.set("skin",o),this.pvId=o,this.paintGift(),Hn("skin_use",{skin:o}))})),ot("gift-skins").querySelectorAll(".sk").forEach(r=>{let a=r.dataset.id,o=()=>this.showPv(a);r.addEventListener("mouseenter",o),r.addEventListener("click",o)}),this.showPv(this.pvId||n)}showPv(t){this.pvId=t;let e=br.find(n=>n.id===t);ot("gift-pvn").textContent=(e?.name??"")+(this.skinOk(t)?"":" \u{1F512}"),ot("gift-skins").querySelectorAll(".sk").forEach(n=>n.classList.toggle("pv",n.dataset.id===t));try{this.world.preview(t,ot("gift-pv"))}catch{}}async copyGift(){let t=ot("gift-link"),e=t.value,n=!1;try{await navigator.clipboard.writeText(e),n=!0}catch{try{t.select(),n=document.execCommand("copy")}catch{}}ot("b-gcopy").textContent=n?"COPIED!":"COPY",setTimeout(()=>ot("b-gcopy").textContent="COPY",1500),Hn("gift_copy",{})}async share(){let t=Math.floor(this.dist),e=Math.round(this.runT*100),n=this.cleared?yn-e:t;this.myRef||(this.myRef=await Fc(fn()));let i=this.giftUrl(this.giftChal),r=this.chal&&n>this.chal.score?`I just beat ${this.chal.name}. `:"",a=this.giftChal&&this.scene==="result",o=a?this.cleared?`\u{1F3C1} ${r}I reached Mars in ${is(e)} on Fly, Roadster! Can you beat my time?`:`\u{1F3C1} ${r}I drove ${t.toLocaleString()} m on Fly, Roadster! Can you beat me?`:"\u{1F680} Fly a Roadster to Mars! Free 3D driving game \u2014 play from my link \u{1F381}";Hn("share",{dist:a?t:0,cleared:a&&this.cleared?1:0,challenge:a?1:0});try{let l=navigator;if(l.share){await l.share({title:wt.title,text:o,url:i});return}}catch(l){if(l.name==="AbortError")return}try{await navigator.clipboard.writeText(o+" "+i)}catch{}this.toast(wt.copied)}toast(t){let e=ot("toast");e.textContent=t,e.classList.remove("hide"),setTimeout(()=>e.classList.add("hide"),1800)}};var zf=new URLSearchParams(location.search).has("debug");document.documentElement.lang="en";document.querySelectorAll("[data-t]").forEach(s=>{let t=wt[s.dataset.t];typeof t=="string"&&(s.textContent=t)});document.getElementById("howlist").innerHTML=wt.howText.map(s=>`<li>${s}</li>`).join("");document.getElementById("r-name").placeholder=wt.nameHint;Uf();var Ry=document.getElementById("game"),Py=document.getElementById("app"),He=new ya(Ry),Bf=matchMedia("(pointer:coarse)").matches,Js=!1;function Or(){let s=Py.getBoundingClientRect(),t=Math.max(1,Math.round(s.width)),e=Math.max(1,Math.round(s.height)),n=Math.min(devicePixelRatio||1,2,1600/t);Js&&(n=Math.min(n,Bf?1.1:1)),He.world.resize(t,e,n),He.fx.setScale(e*n,He.world.cam.fov)}addEventListener("resize",Or);visualViewport?.addEventListener("resize",Or);Or();var _a=document.getElementById("fps"),kf=performance.now(),Ma=0,vh=0,Nr=8,Ur=0,ba=0,yh=0;function Vf(s){requestAnimationFrame(Vf);let t=Math.max(0,Math.min(.05,(s-kf)/1e3));kf=s;let e=performance.now();try{He.update(t),He.world.cam.fov!==yh&&(yh=He.world.cam.fov,He.fx.setScale(He.world.cssH*He.world.renderer.getPixelRatio(),yh)),He.world.render()}catch(i){console.error(i)}let n=performance.now()-e;if(Nr+=(n-Nr)*.05,Ma+=t,vh++,t>1/40||Nr>20?(Ur+=t,ba=0):(ba+=t,Ur=Math.max(0,Ur-t*.5)),!Js&&Ur>2.5&&He.scene!=="intro"?(Js=!0,He.fx.lowPower=!0,He.world.bloomOn=!1,Or(),Ur=0):Js&&ba>12&&Nr<7&&(Js=!1,He.fx.lowPower=!1,He.world.bloomOn=!0,Or(),ba=0),Ma>=.5){let i=vh/Ma;Ma=0,vh=0,zf?(_a.textContent=`${i.toFixed(0)}fps ${Nr.toFixed(1)}ms${Js?" LOW":""}`,_a.style.display="block"):(_a.style.display=i<30&&He.scene==="play"?"block":"none",_a.textContent=`${i.toFixed(0)}fps`)}}requestAnimationFrame(Vf);zf&&(window.game=He,window.road=Gc);