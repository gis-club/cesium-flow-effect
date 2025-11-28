import{G as s}from"./lil-gui.esm-CNIGZg2U.js";import{d as l,n as m,h as c,j as u,o as d}from"./index-Bn89_75I.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=`// 从顶点着色器传入的折线角度，用于对齐纹理
in float v_polylineAngle;

/**
* 创建2D旋转矩阵
* @param rad 旋转角度（弧度）
* @return 2x2旋转变换矩阵
*/
mat2 rotate(float rad){
    float c=cos(rad);  // 余弦值
    float s=sin(rad);  // 正弦值
    // 返回标准的2D旋转矩阵
    return mat2(
        c,s,
        -s,c
    );
}

/**
* Cesium材质着色器主函数
* 实现流动线效果：通过旋转和相位偏移使纹理沿着折线方向流动
* @param materialInput Cesium提供的材质输入参数
* @return 计算后的材质属性
*/
czm_material czm_getMaterial(czm_materialInput materialInput){
    // 获取Cesium默认材质
    czm_material material=czm_getDefaultMaterial(materialInput);
    
    // 获取纹理坐标（s: 水平方向 0-1, t: 垂直方向 0-1）
    vec2 st=materialInput.st;
    
    // 将片段坐标旋转到与折线对齐的坐标系
    vec2 pos=rotate(v_polylineAngle)*gl_FragCoord.xy;
    
    // Get the relative position within the dash from 0 to 1
    float dashPosition=fract(pos.x/(dashLength*czm_pixelRatio));
    
    // 从纹理中采样颜色，使用计算后的水平坐标和原始的垂直坐标
    vec4 fragColor=texture(image,vec2(fract(dashPosition-time),st.t));
    
    fragColor=czm_gammaCorrect(fragColor);
    
    // 设置材质漫反射颜色：增强亮度（×3）并确保最小亮度
    material.diffuse=mix(color.rgb,fragColor.rgb,fragColor.a).rgb*3.;
    // material.emission=fragColor.rgb;
    // 设置材质透明度：纹理透明度 × 颜色透明度
    material.alpha=fragColor.a;
    
    return material;
}`;class i{name;definitionChanged;url;duration;_time;isConstant=!1;customColor;dashLength;constructor(e,n,t,r,a=100){this.name=e,this.definitionChanged=new Cesium.Event,this.url=t,this.duration=n||3e3,this._time=new Date().getTime(),this.customColor=r,this.dashLength=a,Cesium.Material._materialCache.addMaterial("LineMaterialProperty",{fabric:{type:"LineMaterialProperty",uniforms:{time:-20,image:this.url,dashLength:this.dashLength,color:this.customColor},source:h},translucent:function(_){return!0}})}getType(){return"LineMaterialProperty"}getValue(e,n){return Cesium.defined(n)||(n={}),n.color=this.customColor,n.image=this.url,n.dashLength=this.dashLength,n.time=Date.now()/this.duration%1,n}equals(e){return e instanceof i&&this.name===e.name}}const g=o=>{const e=new Cesium.Viewer(o,{animation:!1,baseLayerPicker:!1,fullscreenButton:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,timeline:!1,navigationHelpButton:!1});return e.creditDisplay.container.style.display="none",C(e),e},C=async o=>{const e=new s,n={color:"#ffff00"},t=new i("line",1e4,"./flowLine.png",Cesium.Color.fromCssColorString(n.color),1024),r=await Cesium.GeoJsonDataSource.load("./思茅区-line.geojson",{clampToGround:!0});r.entities.values.forEach(a=>{a.polyline.material=t,a.polyline.width=20}),e.add(t,"duration").name("duration").min(0).max(1e4).step(100).onChange(a=>{t.duration=a}),e.add(t,"url").name("url").onChange(a=>{t.url=a}),e.add(t,"dashLength").name("dashLength").min(0).max(4096).step(10).onChange(a=>{t.dashLength=a}),e.addColor(n,"color").name("color").onChange(a=>{t.customColor=Cesium.Color.fromCssColorString(a)}),o.dataSources.add(r),o.zoomTo(r)},p=l({__name:"6-material-图片不变形",setup(o){const e=m("cesiumContainer");return c(()=>{g(e.value)}),(n,t)=>(d(),u("div",{ref_key:"cesiumContainer",ref:e,id:"cesiumContainer"},null,512))}}),x=f(p,[["__scopeId","data-v-b6fcac6d"]]);export{x as default};
