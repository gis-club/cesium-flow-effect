import{G as m}from"./lil-gui.esm-CNIGZg2U.js";import{d as c,n as u,h as p,j as d,o as f}from"./index-Bn89_75I.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";class s{isConstant=!1;name;definitionChanged;url;duration;_time;color;repeat;constructor(e,a,i,t,r=3){this.name=e,this.definitionChanged=new Cesium.Event,this.url=i,this.duration=a||3e3,this._time=new Date().getTime(),this.color=t,this.repeat=r,Cesium.Material._materialCache.addMaterial("LineMaterialProperty",{fabric:{type:"LineMaterialProperty",uniforms:{time:-20,image:this.url,color:this.color,repeat:this.repeat},source:`
            czm_material czm_getMaterial(czm_materialInput materialInput)
            {
                czm_material material = czm_getDefaultMaterial(materialInput);
                vec2 st = materialInput.st;
                vec4 colorImage = texture(image, vec2(fract(st.s * repeat - time), st.t));
                // float alpha = smoothstep(0.0, 1.0, time);
                material.diffuse = colorImage.rgb * 2.0;
                // material.emission = colorImage.rgb * color.rgb * 2.0;
                // material.alpha = colorImage.a * color.a * alpha;
                material.alpha = colorImage.a;
                return material;
            }
      `},translucent:function(n){return!0}})}getType(){return"LineMaterialProperty"}getValue(e,a){return Cesium.defined(a)||(a={}),a.image=this.url,a.color=this.color,a.repeat=this.repeat,a.time=(new Date().getTime()-this._time)%this.duration/this.duration,a}equals(e){return e instanceof s&&this.name===e.name}}const g=o=>{const e=new Cesium.Viewer(o,{animation:!1,baseLayerPicker:!1,fullscreenButton:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,timeline:!1,navigationHelpButton:!1});return e.creditDisplay.container.style.display="none",C(e),e},C=async o=>{const e=new m,a={color:"#000000"},i=new s("line",1e3,"./spriteline.png",Cesium.Color.fromCssColorString(a.color));fetch("./route.geojson").then(t=>t.json()).then(t=>{t.features.forEach(r=>{const n=[];r.geometry.coordinates.forEach(l=>{n.push(...l)}),o.entities.add({name:"line",polyline:{positions:Cesium.Cartesian3.fromDegreesArray(n),material:i,width:3}})}),o.zoomTo(o.entities)}),e.add(i,"duration").name("duration").min(0).max(1e4).step(100).onChange(t=>{i.duration=t}),e.add(i,"url").name("url").onChange(t=>{i.url=t}),e.addColor(a,"color").onChange(t=>{i.color=Cesium.Color.fromCssColorString(t)}),e.add(i,"repeat").name("repeat").min(1).max(10).step(1).onChange(t=>{i.repeat=t})},_=c({__name:"5-material-道路流光",setup(o){const e=u("cesiumContainer");return p(()=>{g(e.value)}),(a,i)=>(f(),d("div",{ref_key:"cesiumContainer",ref:e,id:"cesiumContainer"},null,512))}}),v=h(_,[["__scopeId","data-v-106666a3"]]);export{v as default};
