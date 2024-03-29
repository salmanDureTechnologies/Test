"use strict";(self.webpackChunkreadiness_intelligence=self.webpackChunkreadiness_intelligence||[]).push([[975],{975:(S,m,s)=>{s.r(m),s.d(m,{HazardmappingModule:()=>A});var c=s(6895),g=s(512),e=s(8256),b=s(3787),y=s(6950),Z=s(1501),u=s(433),f=s(8997);function T(n,r){if(1&n&&(e.TgZ(0,"option",40),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name.length>50?t.name.substr(0,50)+"...":t.name)}}function _(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",36)(1,"select",37),e.NdJ("change",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.changeMapTitle(a.target))}),e.TgZ(2,"option",38),e._uU(3,"Choose Map Title"),e.qZA(),e.YNc(4,T,2,2,"option",39),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.mapTitles)}}const v=function(n){return{width:n}};function z(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",41),e._uU(2),e.qZA(),e.TgZ(3,"td",41),e._uU(4),e.qZA(),e.TgZ(5,"td",41)(6,"div",42),e._UZ(7,"div",43),e.qZA()(),e.TgZ(8,"td",41)(9,"select")(10,"option",44),e._uU(11,"Strategic Toolkit for Assessing Risks"),e.qZA(),e.TgZ(12,"option",45),e._uU(13,"One"),e.qZA(),e.TgZ(14,"option",46),e._uU(15,"Two"),e.qZA(),e.TgZ(16,"option",47),e._uU(17,"Three"),e.qZA()()(),e.TgZ(18,"td",41)(19,"button",48),e.NdJ("click",function(){const o=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.onRemove(o))}),e._UZ(20,"i",49),e.qZA()()()}if(2&n){const t=r.$implicit,i=e.oxw();e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.size),e.xp6(3),e.Q6J("ngStyle",e.VKq(3,v,i.progressStyle))}}function x(n,r){1&n&&(e.TgZ(0,"div",3)(1,"div",50)(2,"div",12)(3,"div",13),e._UZ(4,"img",51),e.qZA()(),e.TgZ(5,"div",12)(6,"div",13),e._UZ(7,"img",52),e.qZA()()()())}const M=[{path:"",component:(()=>{class n{constructor(t,i,a,o,p,d,H){this.activatedRoute=t,this.servicecountry=i,this.serviceHazardMapping=a,this.serviceHazardMapTitle=o,this.elementRef=p,this.router=d,this.ngZone=H,this.isMapReal=!0,this.isMapImage=!1,this.isSelectedCountry=!1,this.isSelectedHazard=!1,this.isSelectedMapTitle=!1,this.isShow=!1,this.incrementId=0,this.onEachFeatureIncrement=0,this.files=[],this.activatedRoute.queryParams.subscribe(l=>{""!=l.hazard_type?(this.filterHazardType=l.hazard_type,this.isSelectedHazard=!0):this.isSelectedHazard=!1,""!=l.country?(this.filterCountry=l.country,this.isSelectedCountry=!0):this.isSelectedCountry=!1,l.hazard_type&&l.country&&(this.servicecountry.getByCode(l.country).subscribe({next:h=>{this.countryId=h.id},error:h=>{},complete:()=>{this.serviceHazardMapTitle.getByCountryAndHazard(this.countryId,l.hazard_type).subscribe(h=>{this.mapTitles=h})}}),this.getMap())})}ngOnInit(){}initMap(){this.map=L.map("mapHazard",{center:L.latLng(43,6),zoom:2}),L.esri.Vector.vectorBasemapLayer("ArcGIS:LightGray",{apikey:"AAPK8acc523775224c1f958527e7933989d1v8h60qdvzoYxwZ9tr466u7fbO5fQavRbW40xv-IvbmkZfa6zjTBE-nvzhBOBPaRv"}).addTo(this.map)}setViewMaps(){let t=null;this.servicecountry.find(this.countryId).subscribe({next:i=>{this.map.setView([i.latitude,i.longitude],i.mapZoom),t=i.cityJsonFile},complete:()=>{this.layerMap(t)}})}layerMap(t){t&&this.serviceHazardMapping.getByMapTitle(this.mapTitleId).subscribe({next:i=>{this.hazardMappings=i},complete:()=>{this.serviceHazardMapping.getCityJson(t).subscribe(i=>{this.geojson=L.geoJSON(i.features,{style:this.styleMap,onEachFeature:this.onEachFeature.bind(this)}).addTo(this.map)})}})}styleMap(){return{weight:1,opacity:1,color:"#a2a2a2",fillOpacity:.6}}onEachFeature(t,i){let a=this.hazardMappings.find(d=>d.featureId==t.id),o="#a2a2a2",p="No Case";a&&(console.log("data.level in hazard mapping: ",a.level),4==a.level&&(o="#990000",p="High Regular",i.setStyle({weight:1,opacity:1,color:"#990000",fillOpacity:.6})),3==a.level&&(o="#f32424",p="High Epidemic",i.setStyle({weight:1,opacity:1,color:"#f32424",fillOpacity:.6})),2==a.level&&(o="#f77e21",p="Medium",i.setStyle({weight:1,opacity:1,color:"#f77e21",fillOpacity:.6})),1==a.level&&(o="#ffd36e",p="Low",i.setStyle({weight:1,opacity:1,color:"#ffd36e",fillOpacity:.6}))),i.on("mouseover",()=>{i.bindTooltip(t.properties.name).openTooltip()}),i.on("popupopen",()=>{this.elementRef.nativeElement.querySelector("#popupLinkNationalCapacities"+this.onEachFeatureIncrement).addEventListener("click",()=>{this.ngZone.run(()=>{this.router.navigate(["/import/national-capacities"])})}),this.elementRef.nativeElement.querySelector("#popupLinkActionPlan"+this.onEachFeatureIncrement).addEventListener("click",()=>{this.ngZone.run(()=>{this.router.navigate(["/import/action-plan"])})}),this.elementRef.nativeElement.querySelector("#popupLinkDonorAndPartner"+this.onEachFeatureIncrement).addEventListener("click",()=>{this.ngZone.run(()=>{this.router.navigate(["/import/donor-and-partner"])})}),this.elementRef.nativeElement.querySelector("#popupLinkStrategicPolicies"+this.onEachFeatureIncrement).addEventListener("click",()=>{this.ngZone.run(()=>{this.router.navigate(["/import/strategic-policies"])})})}),i.on("click",()=>{this.onEachFeatureIncrement++;var d=L.popup({minWidth:200}).setContent('<div class="fs-16 fw-bold">'+t.properties.name+'</div><div class="mt-2"><span class="py-1 px-3" style="background-color: '+o+"77; border-radius: 10px; border: 1px solid "+o+"; color: "+o+';">'+p+'</span></div><div style="margin-left: -20px; margin-right: -20px; border-bottom: 1px solid #ddd;">&nbsp;</div><div><a id="popupLinkNationalCapacities'+this.onEachFeatureIncrement+'" class="text-decoration-none text-dark" style="cursor: pointer"><div class="border-bottom fs-13 py-2">National Capacities <i class="float-end bi-chevron-right"></i></div></a><a id="popupLinkActionPlan'+this.onEachFeatureIncrement+'" class="text-decoration-none text-dark" style="cursor: pointer"><div class="border-bottom fs-13 py-2">Action Plan <i class="float-end bi-chevron-right"></i></div></a><a id="popupLinkDonorAndPartner'+this.onEachFeatureIncrement+'" class="text-decoration-none text-dark" style="cursor: pointer"><div class="border-bottom fs-13 py-2">Donor and Partner <i class="float-end bi-chevron-right"></i></div></a><a id="popupLinkStrategicPolicies'+this.onEachFeatureIncrement+'" class="text-decoration-none text-dark" style="cursor: pointer"><div class="fs-13 py-2">Strategic Policies <i class="float-end bi-chevron-right"></i></div></a></div>');i.bindPopup(d).openPopup()})}legendMap(){this.legendLeaflet=L.control({position:"bottomright"}),this.legendLeaflet.onAdd=()=>{var t=L.DomUtil.create("div","map-info map-legend");return t.innerHTML+='<i style="background: #990000"></i> High Regular<br>',t.innerHTML+='<i style="background: #f32424"></i> High Epidemic<br>',t.innerHTML+='<i style="background: #f77e21"></i> Medium<br>',t.innerHTML+='<i style="background: #ffd36e"></i> Low<br>',t.innerHTML+='<i style="background: #a2a2a2"></i> No Case',t},this.legendLeaflet.addTo(this.map)}ngAfterViewInit(){this.initMap()}getMap(){this.geojson&&this.map.removeLayer(this.geojson),this.legendLeaflet&&this.map.removeControl(this.legendLeaflet),this.isSelectedHazard&&this.isSelectedCountry&&this.isSelectedMapTitle?(this.setViewMaps(),this.legendMap()):(this.mapTitle="",this.map.setView([43,6],2))}changeMapTitle(t){t.value>0?(this.mapTitle=this.mapTitles.find(i=>i.id==t.value).name,this.mapTitleId=t.value,this.isSelectedMapTitle=!0):this.isSelectedMapTitle=!1,this.getMap()}onSelect(t){this.files.push(...t.addedFiles)}onRemove(t){this.files.splice(this.files.indexOf(t),1)}onReset(t){this.files=[]}onUploadAll(){this.progressStyle="0%",setTimeout(()=>{this.progressStyle="20%",setTimeout(()=>{this.progressStyle="75%",setTimeout(()=>{this.progressStyle="100%",this.isShow=!0},3e3)},1e3)},1e3)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz),e.Y36(b.T),e.Y36(y.g),e.Y36(Z.m),e.Y36(e.SBq),e.Y36(g.F0),e.Y36(e.R0b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-hazardmapping"]],decls:61,vars:7,consts:[[1,"container","mt-4"],[1,"row"],[1,"col-12"],[1,"card","mb-4","border-0"],[1,"card-body","px-5"],[1,"row","mb-3"],[1,"col-md-8"],[1,"my-3","border","border-5","border-top-0","border-end-0","border-bottom-0","ps-2","border-primary",2,"color","#00205C"],["class","col-md-4",4,"ngIf"],[1,"card-body","p-0","mb-4"],[1,"fs-14","text-center","fw-bold","mb-2"],["id","mapHazard"],[1,"card","mb-4","shadow-sm"],[1,"card-body"],[1,"py-2"],[1,"row","py-2"],[1,"col-md-3","px-3"],["ngx-dropzone","","accept","application/pdf",1,"position-relative","custom-dropzone","border-upload",3,"change"],[1,"position-absolute","top-50","start-50","translate-middle","text-center"],[1,"fs-12"],["xmlns","http://www.w3.org/2000/svg","width","35","height","35","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-download"],["d","M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"],["d","M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"],[1,"col-md-9"],[1,"table-responsive","mb-4"],[1,"table"],[4,"ngFor","ngForOf"],[1,"progress","mb-4"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",3,"ngStyle"],["type","button",1,"btn","btn-upload","btn-action",3,"click"],[1,"bi","bi-upload","pe-2"],["type","button",1,"btn","btn-outline-warning","btn-action"],[1,"bi","bi-x-lg","pe-2"],["type","button",1,"btn","btn-outline-danger","btn-action",3,"click"],[1,"bi","bi-trash3","pe-2"],["class","card mb-4 border-0",4,"ngIf"],[1,"col-md-4"],[1,"form-select","fs-14","border","border-1","mt-3",3,"change"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"align-middle"],[1,"progress"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",3,"ngStyle"],["selected",""],["value","1"],["value","2"],["value","3"],["type","button",1,"btn","btn-outline-danger","btn-td",3,"click"],[1,"bi","bi-trash3"],[1,"card-body","px-5","pt-5"],["src","./assets/hazard_map_risk_matrix_2.png","alt","Risk Matrix",1,"img-fluid"],["src","./assets/hazard_map_risk_calendar.png","alt","Risk Matrix",1,"img-fluid"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h4",7),e._uU(8,"Hazard Mapping"),e.qZA()(),e.YNc(9,_,5,1,"div",8),e.qZA(),e.TgZ(10,"div",9)(11,"div",2)(12,"div",10),e._uU(13),e.qZA(),e._UZ(14,"div",11),e.qZA()(),e.TgZ(15,"div",12)(16,"div",13)(17,"h6",14),e._uU(18,"Import File"),e.qZA(),e.TgZ(19,"div",15)(20,"div",16)(21,"div",17),e.NdJ("change",function(o){return i.onSelect(o)}),e.TgZ(22,"div",18)(23,"h6",19),e._uU(24,"DROP FILE HERE TO UPLOAD"),e.qZA(),e.O4$(),e.TgZ(25,"svg",20),e._UZ(26,"path",21)(27,"path",22),e.qZA()()()(),e.kcU(),e.TgZ(28,"div",23)(29,"p"),e._uU(30,"Upload Queue"),e.qZA(),e.TgZ(31,"div",24)(32,"table",25)(33,"thead")(34,"tr")(35,"th"),e._uU(36,"NAME"),e.qZA(),e.TgZ(37,"th"),e._uU(38,"SIZE"),e.qZA(),e.TgZ(39,"th"),e._uU(40,"PROGRESS"),e.qZA(),e.TgZ(41,"th"),e._uU(42,"CATEGORY"),e.qZA(),e.TgZ(43,"th"),e._uU(44,"ACTION"),e.qZA()()(),e.TgZ(45,"tbody"),e.YNc(46,z,21,5,"tr",26),e.qZA()()(),e.TgZ(47,"p"),e._uU(48,"Progsess Queue"),e.qZA(),e.TgZ(49,"div",27),e._UZ(50,"div",28),e.qZA(),e.TgZ(51,"button",29),e.NdJ("click",function(){return i.onUploadAll()}),e._UZ(52,"i",30),e._uU(53," Upload All"),e.qZA(),e.TgZ(54,"button",31),e._UZ(55,"i",32),e._uU(56," Cancel All"),e.qZA(),e.TgZ(57,"button",33),e.NdJ("click",function(o){return i.onReset(o)}),e._UZ(58,"i",34),e._uU(59," Remove All"),e.qZA()()()()()()(),e.YNc(60,x,8,0,"div",35),e.qZA()()()),2&t&&(e.xp6(9),e.Q6J("ngIf",i.isMapReal),e.xp6(4),e.Oqu(i.mapTitle),e.xp6(33),e.Q6J("ngForOf",i.files),e.xp6(4),e.Q6J("ngStyle",e.VKq(5,v,i.progressStyle)),e.xp6(10),e.Q6J("ngIf",i.isShow))},dependencies:[c.sg,c.O5,c.PC,u.YN,u.Kr,f._f],styles:["#mapHazard[_ngcontent-%COMP%]{width:100%;height:450px}p[_ngcontent-%COMP%]{font-weight:550;font-size:14px;line-height:20px;color:#404040}thead[_ngcontent-%COMP%]{background:#024664}th[_ngcontent-%COMP%]{font-weight:550;font-size:12px;line-height:20px;padding-top:15px;padding-bottom:15px;color:#fff}td[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px;font-weight:400;font-size:11px;line-height:17px}select[_ngcontent-%COMP%]{border:none}.btn-td[_ngcontent-%COMP%]{font-size:11px}.btn-action[_ngcontent-%COMP%]{font-size:12px;margin-bottom:10px;margin-right:10px}.btn-upload[_ngcontent-%COMP%], .btn-upload[_ngcontent-%COMP%]:hover, .btn-upload[_ngcontent-%COMP%]:focus{background-color:#9747ff;border-color:#9747ff;color:#fff}.border-upload[_ngcontent-%COMP%]{border-style:dashed;border-width:2px;border-color:#9747ff;background:#F8F7FE;color:#9747ff}ngx-dropzone[_ngcontent-%COMP%], .custom-dropzone[_ngcontent-%COMP%]{height:240px}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(M),g.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,C,u.UX,u.u5,f.bB]}),n})()}}]);