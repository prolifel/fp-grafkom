(this["webpackJsonpr3f-game"]=this["webpackJsonpr3f-game"]||[]).push([[0],{39:function(e,t,n){e.exports=n.p+"static/media/explosion.5c5ce697.mp3"},45:function(e,t,n){e.exports=n.p+"static/media/earth.7cddb76f.jpg"},46:function(e,t,n){e.exports=n.p+"static/media/moon.37071536.png"},53:function(e,t,n){e.exports=n.p+"static/media/laser.a97c8e67.mp3"},54:function(e,t,n){e.exports=n.p+"static/media/engine.e896d081.mp3"},55:function(e,t,n){e.exports=n.p+"static/media/engine2.bdb08091.mp3"},56:function(e,t,n){e.exports=n.p+"static/media/bg.a93d8e1a.mp3"},57:function(e,t,n){e.exports=n.p+"static/media/warp.5699f1c4.mp3"},58:function(e,t,n){e.exports=n.p+"static/media/click.8d516cce.mp3"},67:function(e,t,n){e.exports=n(83)},83:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"zap",(function(){return L})),n.d(a,"engine",(function(){return K})),n.d(a,"engine2",(function(){return U})),n.d(a,"bg",(function(){return W})),n.d(a,"warp",(function(){return q})),n.d(a,"click",(function(){return J})),n.d(a,"explosion",(function(){return N})),n.d(a,"mp3",(function(){return $}));var r=n(0),o=n.n(r),i=n(44),c=n.n(i),l=n(1),s=n(4);function m(e){var t=e.count,n=void 0===t?2e3:t,a=Object(r.useMemo)((function(){for(var e=[],t=0;t<n;t++){var a=4e3,r=2*Math.PI*Math.random(),o=Math.acos(2*Math.random()-1),i=a*Math.cos(r)*Math.sin(o)+(4e3*Math.random()-2e3),c=a*Math.sin(r)*Math.sin(o)+(4e3*Math.random()-2e3),l=a*Math.cos(o)+(2e3*Math.random()-1e3);e.push(i),e.push(c),e.push(l)}return new Float32Array(e)}),[n]);return o.a.createElement("points",null,o.a.createElement("bufferGeometry",{attach:"geometry"},o.a.createElement("bufferAttribute",{attachObject:["attributes","position"],count:a.length/3,array:a,itemSize:3})),o.a.createElement("pointsMaterial",{attach:"material",size:15,sizeAttenuation:!0,color:"white",fog:!1}))}var u=n(5),f=n(45),h=n.n(f),p=n(46),d=n.n(p);function g(){var e=Object(r.useRef)(),t=Object(s.e)(l.TextureLoader,[h.a,d.a]),n=Object(u.a)(t,2),a=n[0],i=n[1];return o.a.createElement("group",{ref:e,scale:[100,100,100],position:[-500,-500,1e3]},o.a.createElement("mesh",null,o.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[5,32,32]}),o.a.createElement("meshStandardMaterial",{attach:"material",map:a,roughness:1,fog:!1})),o.a.createElement("mesh",{position:[5,-5,-5]},o.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[.75,32,32]}),o.a.createElement("meshStandardMaterial",{attach:"material",roughness:1,map:i,fog:!1})),o.a.createElement("pointLight",{position:[-5,-5,-5],distance:1e3,intensity:6}),o.a.createElement("mesh",{position:[-30,-10,-60]},o.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[4,32,32]}),o.a.createElement("meshBasicMaterial",{attach:"material",color:"#FFFF99",fog:!1}),o.a.createElement("pointLight",{distance:6100,intensity:50,color:"white"})))}var b=n(63),y=n(27),E=n(51),v=n(64),x=n(65);function w(){var e=Object(r.useRef)(),t=Object(s.f)(),n=t.scene,a=t.gl,i=t.size,c=t.camera;return Object(r.useEffect)((function(){e.current.setSize(i.width,i.height)}),[i]),Object(s.d)((function(){return e.current.render()}),2),o.a.createElement("effectComposer",{ref:e,args:[a]},o.a.createElement("renderPass",{attachArray:"passes",scene:n,camera:c}),o.a.createElement("unrealBloomPass",{attachArray:"passes",args:[void 0,1,1,0]}))}Object(s.c)({EffectComposer:b.a,ShaderPass:y.a,RenderPass:E.a,UnrealBloomPass:v.a,FilmPass:x.a});var O=n(8),j=n(66),M=n(52),k=n(59),_=n(53),S=n.n(_),B=n(54),z=n.n(B),G=n(55),R=n.n(G),T=n(56),A=n.n(T),P=n(57),C=n.n(P),F=n(58),D=n.n(F),V=n(39),I=n.n(V),$={explosion:I.a},L=new Audio(S.a),K=new Audio(z.a),U=new Audio(R.a),W=new Audio(A.a),q=new Audio(C.a),J=new Audio(D.a),N=new Audio(I.a),H=1,X=Object(k.a)((function(e,t){var n=new M.a.GrannyKnot,a=new l.TubeBufferGeometry(n,250,.2,10,!0),r=void 0,o=void 0,i=new l.Box3;return{sound:!1,camera:void 0,points:0,health:100,lasers:[],explosions:[],rocks:ee(200,a,150,8,(function(){return 1+2.5*Math.random()})),enemies:ee(10,a,20,15,1),mutation:{t:0,position:new l.Vector3,startTime:Date.now(),track:a,scale:15,fov:70,hits:!1,particles:ee(1500,a,100,1,(function(){return.5+.8*Math.random()})),looptime:4e4,binormal:new l.Vector3,normal:new l.Vector3,clock:new l.Clock(!1),mouse:new l.Vector2(-250,50),dummy:new l.Object3D,ray:new l.Ray,box:new l.Box3},actions:{init(n){var r=t(),i=r.mutation,c=r.actions;e({camera:n}),i.clock.start(),c.toggleSound(t().sound),Object(s.b)((function(){var n=t(),r=n.rocks,l=n.enemies,s=Date.now(),m=i.t=(s-i.startTime)%i.looptime/i.looptime;i.position=a.parameters.path.getPointAt(m),i.position.multiplyScalar(i.scale);var u=r.filter(c.test),f=l.filter(c.test),h=u.concat(f),p=i.hits;i.hits=h.length,0===p&&i.hits&&te(J);var d=t().lasers;if(i.hits&&d.length&&s-d[d.length-1]<100){var g=h.map((function(e){return Object(j.a)({time:Date.now()},e)}));e((function(e){return{explosions:[].concat(Object(O.a)(e.explosions),Object(O.a)(g))}})),clearTimeout(o),o=setTimeout((function(){return e((function(e){return{explosions:e.explosions.filter((function(e){var t=e.time;return Date.now()-t<=1e3}))}}))}),1e3),e((function(e){return{points:e.points+100*u.length+200*f.length,rocks:e.rocks.filter((function(e){return!u.find((function(t){return t.guid===e.guid}))})),enemies:e.enemies.filter((function(e){return!f.find((function(t){return t.guid===e.guid}))}))}}))}h.some((function(e){return e.distance<15}))&&(e((function(e){return{health:e.health-1}})),t().health<=0&&console.log("MATI KON COK"))}))},shoot(){e((function(e){return{lasers:[].concat(Object(O.a)(e.lasers),[Date.now()])}})),clearTimeout(r),r=setTimeout((function(){return e((function(e){return{lasers:e.lasers.filter((function(e){return Date.now()-e<=1e3}))}}))}),1e3),te(L,.5)},toggleSound(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!t().sound;e({sound:n}),te(K,1,!0),te(U,.3,!0),te(W,1,!0)},updateMouse(e){var n=e.clientX,a=e.clientY;t().mutation.mouse.set(n-window.innerWidth/2,a-window.innerHeight/2)},test(e){i.min.copy(e.offset),i.max.copy(e.offset),i.expandByScalar(e.size*e.scale),e.hit.set(1e4,1e4,1e4);var n=t().mutation.ray.intersectBox(i,e.hit);return e.distance=t().mutation.ray.origin.distanceTo(e.hit),n}}}})),Y=Object(u.a)(X,2),Q=Y[0],Z=Y[1];function ee(e,t,n,a,r){return new Array(e).fill().map((function(){var e=Math.random(),o=t.parameters.path.getPointAt(e);o.multiplyScalar(15);var i=o.clone().add(new l.Vector3(-n+Math.random()*n*2,-n+Math.random()*n*2,-n+Math.random()*n*2)),c=.1+Math.random();return{guid:H++,scale:"function"===typeof r?r():r,size:a,offset:i,pos:o,speed:c,radius:n,t:e,hit:new l.Vector3,distance:1e3}}))}function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Z.getState().sound?(e.currentTime=0,e.volume=t,e.loop=n,e.play()):e.pause()}var ne=Q;var ae=n(20);(new l.Box3).setFromCenterAndSize(new l.Vector3(0,0,1),new l.Vector3(3,3,3));var re=new l.MeshBasicMaterial({color:new l.Color("lightblue")});o.a.memo((function(e){var t=e.data,n=ne((function(e){return e.mutation})).clock,a=Object(s.e)(ae.a,"/drone.gltf"),i=Object(r.useRef)();return Object(s.d)((function(){var e=Math.cos(n.getElapsedTime()/2*t.speed)*Math.PI;i.current.position.copy(t.offset),i.current.rotation.set(e,e,e)})),o.a.createElement("group",{ref:i,scale:[5,5,5]},o.a.createElement("mesh",{position:[0,0,50],rotation:[Math.PI/2,0,0],material:re},o.a.createElement("cylinderBufferGeometry",{attach:"geometry",args:[.25,.25,100,4]})),o.a.createElement("mesh",{name:"Sphere_DroneGlowmat_0"},o.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},a.__$[7].geometry)),o.a.createElement("meshStandardMaterial",Object.assign({attach:"material"},a.__$[7].material,{name:"DroneGlowmat"}))),o.a.createElement("mesh",{name:"Sphere_Body_0",material:re},o.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},a.__$[8].geometry)),o.a.createElement("meshStandardMaterial",Object.assign({attach:"material"},a.__$[8].material,{name:"Body"}))))}));function oe(){var e=Object(s.e)(ae.a,"/virus.gltf");return ne((function(e){return e.rocks})).map((function(t){return o.a.createElement(ie,{gltf:e,key:t.guid,data:t})}))}var ie=o.a.memo((function(e){var t=e.gltf,n=e.data,a=Object(r.useRef)(),i=ne((function(e){return e.mutation})).clock;return Object(s.d)((function(){var e=Math.cos(i.getElapsedTime()/2*n.speed)*Math.PI;a.current.rotation.set(e,e,e)})),o.a.createElement("group",{ref:a,position:n.offset,scale:[n.scale,n.scale,n.scale]},o.a.createElement("object3D",{position:[-.016298329457640648,-.012838120572268963,.24073271453380585],rotation:[3.0093872578726644,.27444228385461117,-.22745113653772078],scale:[5,5,5]},o.a.createElement("mesh",null,o.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},t.__$[10].geometry)),o.a.createElement("meshStandardMaterial",{attach:"material",roughness:1,metalness:1,color:"indianred"}))))}));function ce(e,t){return{ref:o.a.createRef(),color:e,data:new Array(20).fill().map((function(){return[new l.Vector3,new l.Vector3(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1).normalize().multiplyScalar(.75*t)]}))}}function le(){return ne((function(e){return e.explosions})).map((function(e){var t=e.guid,n=e.offset,a=e.scale;return o.a.createElement(se,{key:t,position:n,scale:.75*a})}))}function se(e){var t=e.position,n=e.scale,i=Object(r.useRef)(),c=ne((function(e){return e.mutation})).dummy,l=Object(r.useMemo)((function(){return[ce("white",.8),ce("orange",.6)]}),[]);return Object(r.useEffect)((function(){te(new Audio(a.mp3.explosion),.5)}),[]),Object(s.d)((function(){l.forEach((function(e,t){var n=e.data,a=i.current.children[t];n.forEach((function(e,t){var n=Object(u.a)(e,2),r=n[0],o=n[1];r.add(o),c.position.copy(r),c.updateMatrix(),a.setMatrixAt(t,c.matrix)})),a.material.opacity-=.025,a.instanceMatrix.needsUpdate=!0}))})),o.a.createElement("group",{ref:i,position:t,scale:[n,n,n]},l.map((function(e,t){var n=e.color,a=e.data;return o.a.createElement("instancedMesh",{key:t,args:[null,null,a.length],frustumCulled:!1},o.a.createElement("dodecahedronBufferGeometry",{attach:"geometry",args:[10,0]}),o.a.createElement("meshBasicMaterial",{attach:"material",color:n,transparent:!0,opacity:1,fog:!1}))})))}new l.RingBufferGeometry(1,1.01,64),new l.MeshBasicMaterial({color:new l.Color("lightgreen"),side:l.DoubleSide});var me=new l.BoxBufferGeometry(1,1,40),ue=new l.Color("lightgreen"),fe=new l.Color("green"),he=new l.Color("hotpink"),pe=new l.MeshBasicMaterial({color:ue}),de=new l.MeshBasicMaterial({color:he,fog:!1}),ge=new l.Vector3,be=new l.Vector3;function ye(){var e=Object(s.e)(ae.a,"/ship.gltf"),t=ne((function(e){return e.mutation})),n=t.clock,a=t.mouse,i=t.ray,c=ne((function(e){return e.lasers})),l=Object(r.useRef)(),m=Object(r.useRef)(),u=Object(r.useRef)(),f=(Object(r.useRef)(),Object(r.useRef)()),h=Object(r.useRef)();return Object(s.d)((function(){l.current.position.z=Math.sin(40*n.getElapsedTime())*Math.PI*.1,l.current.rotation.z+=.1*(a.x/500-l.current.rotation.z),l.current.rotation.x+=.1*(-a.y/1200-l.current.rotation.x),l.current.rotation.y+=.1*(-a.x/1200-l.current.rotation.y),l.current.position.x+=.1*(a.x/10-l.current.position.x),l.current.position.y+=.1*(25+-a.y/10-l.current.position.y);for(var e=0;e<c.length;e++){m.current.children[e].position.z-=20}u.current.intensity+=.1*((c.length&&Date.now()-c[c.length-1]<100?20:0)-u.current.intensity),l.current.getWorldPosition(ge),l.current.getWorldDirection(be),i.origin.copy(ge),i.direction.copy(be.negate()),de.color=t.hits?fe:he})),o.a.createElement("group",{ref:l},o.a.createElement("group",{scale:[3.5,3.5,3.5]},o.a.createElement("group",{ref:f,position:[0,0,-300],name:"cross"},o.a.createElement("mesh",{renderOrder:1e3,material:de},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[20,2,2]})),o.a.createElement("mesh",{renderOrder:1e3,material:de},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,20,2]}))),o.a.createElement("group",{ref:h,position:[0,0,-300],name:"target"},o.a.createElement("mesh",{position:[0,20,0],renderOrder:1e3,material:de},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[40,2,2]})),o.a.createElement("mesh",{position:[0,-20,0],renderOrder:1e3,material:de},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[40,2,2]})),o.a.createElement("mesh",{position:[20,0,0],renderOrder:1e3,material:de},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,40,2]})),o.a.createElement("mesh",{position:[-20,0,0],renderOrder:1e3,material:de},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,40,2]}))),o.a.createElement("pointLight",{ref:u,position:[0,0,-20],distance:100,intensity:0,color:"lightgreen"}),o.a.createElement("group",{ref:m},c.map((function(e,t){return o.a.createElement("group",{key:t},o.a.createElement("mesh",{position:[-2.8,0,-.8],geometry:me,material:pe}),o.a.createElement("mesh",{position:[2.8,0,-.8],geometry:me,material:pe}))}))),o.a.createElement("group",{rotation:[Math.PI/2,Math.PI,0]},o.a.createElement("mesh",{name:"Renault_(S,_T1)_0"},o.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[5].geometry)),o.a.createElement("meshStandardMaterial",{attach:"material",color:"#070707"})),o.a.createElement("mesh",{name:"Renault_(S,_T1)_1"},o.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[6].geometry)),o.a.createElement("meshStandardMaterial",{attach:"material",color:"black"})),o.a.createElement("mesh",{name:"Renault_(S,_T1)_2"},o.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[7].geometry)),o.a.createElement("meshStandardMaterial",{attach:"material",color:"#070707"})),o.a.createElement("mesh",{name:"Renault_(S,_T1)_3"},o.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[8].geometry)),o.a.createElement("meshBasicMaterial",{attach:"material",color:"lightblue"})),o.a.createElement("mesh",{name:"Renault_(S,_T1)_4"},o.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[9].geometry)),o.a.createElement("meshBasicMaterial",{attach:"material",color:"white"})),o.a.createElement("mesh",{name:"Renault_(S,_T1)_5"},o.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[10].geometry)),o.a.createElement("meshBasicMaterial",{attach:"material",color:"teal"})))))}var Ee=0;function ve(e){var t=e.children,n=Object(r.useRef)(),a=Object(r.useRef)(),i=ne((function(e){return e.mutation})),c=i.fov,l=i.scale,m=i.binormal,u=i.normal,f=i.track,h=i.mouse,p=Object(s.f)().camera;return Object(s.d)((function(){var e=i.t,t=i.position.clone(),a=f.tangents.length,r=e*a,o=Math.floor(r),s=(o+1)%a;m.subVectors(f.binormals[s],f.binormals[o]),m.multiplyScalar(r-o).add(f.binormals[o]);var d=f.parameters.path.getTangentAt(e);Ee+=.05*(Math.max(15,15+-h.y/20)-Ee),u.copy(m).cross(d),t.add(u.clone().multiplyScalar(Ee)),p.position.copy(t);var g=f.parameters.path.getPointAt((e+30/f.parameters.path.getLength())%1).multiplyScalar(l);p.matrix.lookAt(p.position,g,u),p.quaternion.setFromRotationMatrix(p.matrix),p.fov+=.05*(c-p.fov),p.updateProjectionMatrix();var b=f.parameters.path.getPointAt((e+1/f.parameters.path.getLength())%1).multiplyScalar(l);n.current.position.copy(b),n.current.quaternion.setFromRotationMatrix(p.matrix)})),o.a.createElement("group",{ref:n},o.a.createElement("pointLight",{distance:400,position:[0,100,-420],intensity:5,color:"indianred"}),o.a.createElement("group",{ref:a,position:[0,0,-50]},t))}var xe=n(17),we=n(18),Oe=n(35);function je(){var e=Object(xe.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  html,\n  body,\n  #root {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    user-select: none;\n    overflow: hidden;\n  }\n\n  #root {\n    overflow: auto;\n    padding: 0px;\n  }\n\n  body {\n    position: fixed;\n    overflow: hidden;\n    overscroll-behavior-y: none;\n    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;\n    color: black;\n    background: white;\n  }\n"]);return je=function(){return e},e}function Me(){var e=Object(xe.a)(["\n  position: absolute;\n  pointer-events: none;\n  bottom: 70px;\n  right: 50px;\n  height: 40px;\n  width: 200px;\n  background: black;\n  & > div {\n    height: 100%;\n    background: rgb(90,255,98);\n    background: linear-gradient(-90deg, rgba(90,255,98,1) 0%, rgba(45,175,49,1) 100%);\n  }\n\n  @media only screen and (max-width: 900px) {\n    bottom: 50px;\n    height: 40px;\n    width: 150px;\n  }\n"]);return Me=function(){return e},e}function ke(){var e=Object(xe.a)(["\n  ","\n  top: 50px;\n  left: 500px;\n  width: 500px;\n  display: inline-block;\n  & > h1 {\n    margin: 0;\n    font-size: 3em;\n    line-height: 1em;\n  }\n  & > h2 {\n    margin: 0;\n    font-size: 2em;\n    line-height: 1em;\n  }\n  @media only screen and (max-width: 900px) {\n    bottom: 30px;\n    & > h1 {\n      font-size: 1em !important;\n    }\n    & > h2 {\n      font-size: 0.5em !important;\n    }\n  }\n"]);return ke=function(){return e},e}function _e(){var e=Object(xe.a)(["\n  ","\n  top: 50px;\n  left: 50px;\n  width: 500px;\n  display: inline-block;\n  & > h1 {\n    margin: 0;\n    font-size: 3em;\n    line-height: 1em;\n  }\n  & > h2 {\n    margin: 0;\n    font-size: 2em;\n    line-height: 1em;\n  }\n  @media only screen and (max-width: 900px) {\n    bottom: 30px;\n    & > h1 {\n      font-size: 1em !important;\n    }\n    & > h2 {\n      font-size: 0.5em !important;\n    }\n  }\n"]);return _e=function(){return e},e}function Se(){var e=Object(xe.a)(["\n  ","\n  text-align: right;\n  top: 40px;\n  right: 50px;\n  font-size: 2em;\n  transform: skew(-5deg, -10deg);\n  pointer-events: all;\n  cursor: pointer;\n  & > a {\n    color: indianred;\n    text-decoration: none;\n  }\n  @media only screen and (max-width: 900px) {\n    font-size: 1.5em;\n  }\n"]);return Se=function(){return e},e}function Be(){var e=Object(xe.a)(["\n  ","\n  top: 40px;\n  left: 50px;\n  font-size: 2em;\n  transform: skew(5deg, 10deg);\n  pointer-events: all;\n  cursor: pointer;\n  @media only screen and (max-width: 900px) {\n    font-size: 1.5em;\n  }\n"]);return Be=function(){return e},e}function ze(){var e=Object(xe.a)(["\n  font-family: 'Teko', sans-serif;\n  position: absolute;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-variant-numeric: slashed-zero tabular-nums;\n  line-height: 1em;\n  pointer-events: none;\n  color: indianred;\n  top: 40px;\n  left: 500px;\n"]);return ze=function(){return e},e}function Ge(){var e=Object(xe.a)(["\n  font-family: 'Teko', sans-serif;\n  position: absolute;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-variant-numeric: slashed-zero tabular-nums;\n  line-height: 1em;\n  pointer-events: none;\n  color: indianred;\n"]);return Ge=function(){return e},e}function Re(){var e=ne((function(e){return e.points})),t=ne((function(e){return e.health})),n=(ne((function(e){return e.sound})),ne((function(e){return e.actions.toggleSound}))),a=Object(Oe.b)({opacity:1,from:{opacity:0}}),i=Object(r.useRef)();Object(r.useEffect)((function(){var e=Date.now(),t=setInterval((function(){return i.current.innerText=((Date.now()-e)/1e3).toFixed(1)}),100);return function(){return clearInterval(t)}}),[]);var c=Object(r.useMemo)((function(){return e>=1e3?(e/1e3).toFixed(1)+"K":e}),[e]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ae,{onClick:function(){return n()}}),o.a.createElement(Pe,null),o.a.createElement(Ce,null,o.a.createElement("h2",{ref:i},"0.0"),o.a.createElement("h1",null,"Skor: ",c)),o.a.createElement(De,null),o.a.createElement(Fe,null,t>90&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{width:t+"%"}}))),t<=90&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Oe.a.h1,{style:a},"hello")))}var Te=Object(we.b)(Ge()),Ae=(Object(we.c)(Oe.a.div)(ze()),we.c.div(Be(),Te)),Pe=we.c.div(Se(),Te),Ce=we.c.span(_e(),Te),Fe=(we.c.span(ke(),Te),we.c.div(Me())),De=Object(we.a)(je());function Ve(){var e=ne((function(e){return e.mutation})).fov,t=ne((function(e){return e.actions}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{concurrent:!0,gl:{antialias:!1},onPointerMove:t.updateMouse,onClick:t.shoot,camera:{position:[0,0,2e3],near:.01,far:1e4,fov:e},onCreated:function(e){var n=e.gl,a=e.camera;t.init(a),n.gammaInput=!0,n.toneMapping=l.Uncharted2ToneMapping,n.setClearColor(new l.Color("#020209"))}},o.a.createElement("fog",{attach:"fog",args:["#070710",100,700]}),o.a.createElement("ambientLight",{intensity:.25}),o.a.createElement(m,null),o.a.createElement(le,null),o.a.createElement(r.Suspense,{fallback:null},o.a.createElement(oe,null),o.a.createElement(g,null),o.a.createElement(ve,null,o.a.createElement(ye,null))),o.a.createElement(w,null)),o.a.createElement(Re,null))}var Ie=n(9),$e=n(16),Le=n(10),Ke=n(13),Ue=n(85),We=n(34),qe=function(e){Object(Le.a)(n,e);var t=Object(Ke.a)(n);function n(e){var a;return Object(Ie.a)(this,n),(a=t.call(this,e)).state={number:0},a}return Object($e.a)(n,[{key:"increment",value:function(){this.setState({number:this.state.number+1})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(We.b,{to:"/Game"},o.a.createElement(Ue.a,{variant:"primary",className:"m-4",size:"lg"},this.props.title)),o.a.createElement(Ue.a,{variant:"secondary",onClick:function(){return e.increment()}},this.state.number))}}]),n}(o.a.Component),Je=n(6);function Ne(){return o.a.createElement(We.a,null,o.a.createElement(Je.c,null,o.a.createElement(Je.a,{exact:!0,path:"/",component:function(){return o.a.createElement(qe,{title:"ngewe"})}}),o.a.createElement(Je.a,{exact:!0,path:"/game",component:Ve})))}c.a.render(o.a.createElement(Ne,null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.7e8342c5.chunk.js.map