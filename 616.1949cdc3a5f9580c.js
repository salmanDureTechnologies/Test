"use strict";(self.webpackChunkreadiness_intelligence=self.webpackChunkreadiness_intelligence||[]).push([[616],{4616:(R,A,e)=>{e.r(A),e.d(A,{LayoutModule:()=>f});var d=e(6895),a=e(5808),s=e(7170);const p=[{path:"",loadChildren:()=>Promise.all([e.e(433),e.e(794),e.e(592),e.e(287)]).then(e.bind(e,9287)).then(n=>n.DashboardModule)},{path:"import",loadChildren:()=>Promise.all([e.e(433),e.e(794),e.e(592),e.e(573)]).then(e.bind(e,8573)).then(n=>n.ImportModule)},{path:"resourceneeds",loadChildren:()=>e.e(995).then(e.bind(e,1995)).then(n=>n.ResourceneedsModule)},{path:"crud",canActivateChild:[s.a],loadChildren:()=>Promise.all([e.e(433),e.e(592),e.e(425)]).then(e.bind(e,8425)).then(n=>n.CrudModule)},{path:"test",loadChildren:()=>Promise.all([e.e(433),e.e(71)]).then(e.bind(e,7071)).then(n=>n.TestModule)},{path:"maps",canActivateChild:[s.a],loadChildren:()=>Promise.all([e.e(433),e.e(592),e.e(377)]).then(e.bind(e,5377)).then(n=>n.MapsModule)},{path:"news",loadChildren:()=>Promise.all([e.e(592),e.e(90)]).then(e.bind(e,3090)).then(n=>n.NewsModule)},{path:"error",loadChildren:()=>e.e(574).then(e.bind(e,9574)).then(n=>n.ErrorsModule)},{path:"users",canActivateChild:[s.a],loadChildren:()=>Promise.all([e.e(433),e.e(592),e.e(753)]).then(e.bind(e,7753)).then(n=>n.UsersModule)},{path:"roles",canActivateChild:[s.a],loadChildren:()=>Promise.all([e.e(433),e.e(592),e.e(174)]).then(e.bind(e,174)).then(n=>n.RolesModule)},{path:"",redirectTo:"/dashboard",pathMatch:"full"},{path:"dashboard",redirectTo:"/",pathMatch:"full"},{path:"**",redirectTo:"/"}];var t=e(8256),g=e(1188);const m=function(n){return{active:n}};function h(n,o){if(1&n&&(t.TgZ(0,"li",35)(1,"a",36),t._uU(2," Master Data "),t.qZA(),t.TgZ(3,"ul",37)(4,"li",38)(5,"a",39),t._uU(6,"Country"),t.qZA(),t.TgZ(7,"ul",40)(8,"li")(9,"a",41,42),t._uU(11,"State"),t.qZA()(),t.TgZ(12,"li")(13,"a",43,44),t._uU(15,"City"),t.qZA()()()(),t.TgZ(16,"li")(17,"a",45,46),t._uU(19,"Organization"),t.qZA()(),t.TgZ(20,"li")(21,"a",47,48),t._uU(23,"Hazard Type"),t.qZA()(),t.TgZ(24,"li")(25,"a",49,50),t._uU(27,"User"),t.qZA()(),t.TgZ(28,"li")(29,"a",51,52),t._uU(31,"News"),t.qZA()(),t.TgZ(32,"li",38)(33,"a",39),t._uU(34,"Hazard Map"),t.qZA(),t.TgZ(35,"ul",40)(36,"li")(37,"a",53,54),t._uU(39,"Map Editor"),t.qZA()()()(),t.TgZ(40,"li",38)(41,"a",39),t._uU(42,"National Capacities"),t.qZA(),t.TgZ(43,"ul",40)(44,"li")(45,"a",55,56),t._uU(47,"Readiness Category"),t.qZA()(),t.TgZ(48,"li")(49,"a",57,58),t._uU(51,"Assign Category"),t.qZA()(),t.TgZ(52,"li")(53,"a",59,60),t._uU(55,"Readiness Checklist"),t.qZA()(),t.TgZ(56,"li")(57,"a",61,62),t._uU(59,"Assesment Type"),t.qZA()(),t.TgZ(60,"li")(61,"a",63,64),t._uU(63,"Assign Assesment"),t.qZA()(),t.TgZ(64,"li")(65,"a",65,66),t._uU(67,"POE Map"),t.qZA()()()(),t.TgZ(68,"li",38)(69,"a",39),t._uU(70,"Action Plan"),t.qZA(),t.TgZ(71,"ul",40)(72,"li")(73,"a",67,68),t._uU(75,"Plan Type"),t.qZA()(),t.TgZ(76,"li")(77,"a",69,70),t._uU(79,"Domain"),t.qZA()(),t.TgZ(80,"li")(81,"a",71,72),t._uU(83,"Draft Response"),t.qZA()()()(),t.TgZ(84,"li")(85,"a",73,74),t._uU(87,"Donor and Partner"),t.qZA()(),t.TgZ(88,"li")(89,"a",75,76),t._uU(91,"Strategic Policies"),t.qZA()()()()),2&n){const i=t.MAs(10),r=t.MAs(14),c=t.MAs(18),l=t.MAs(22),u=t.MAs(26),v=t.MAs(30),T=t.MAs(38),k=t.MAs(46),U=t.MAs(50),y=t.MAs(54),S=t.MAs(58),P=t.MAs(62),x=t.MAs(66),O=t.MAs(74),z=t.MAs(78),H=t.MAs(82),I=t.MAs(86),D=t.MAs(90);t.xp6(1),t.Q6J("ngClass",t.VKq(1,m,u.isActive||v.isActive||T.isActive||k.isActive||y.isActive||S.isActive||P.isActive||O.isActive||z.isActive||H.isActive||I.isActive||D.isActive||c.isActive||l.isActive||x.isActive||U.isActive||i.isActive||r.isActive))}}const L=function(){return{exact:!0}};let Z=(()=>{class n{constructor(i,r){this.serviceStorage=i,this.route=r,this.storage=[],this.isSuperAdmin=!1}ngOnInit(){this.getLocalstorage()}getLocalstorage(){this.storage=this.serviceStorage.get("session");let i=JSON.parse(this.storage);this.roleId=i.role.id,this.useremail=i.email,this.isSuperAdmin=1==this.roleId}logout(){console.log("In logout"),this.serviceStorage.remove("session"),this.route.navigate(["/auth/sign-out"])}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(g.V),t.Y36(a.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-header"]],decls:51,vars:7,consts:[[1,"sticky-top"],[1,"navbar","navbar-expand-lg","navbar-light","shadow-sm",2,"background-color","#f6f7f9","padding-left","9px","padding-right","9px"],[1,"container-fluid"],[2,"text-decoration","none"],[1,"navbar-brand","mb-0","h1","mt-1",2,"cursor","pointer"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0","ms-4"],[1,"nav-item","me-2","cursor-pointer"],["aria-current","page","routerLink","/","routerLinkActive","active",1,"nav-link","fs-12","cursor-pointer",3,"routerLinkActiveOptions"],["src","../../../../assets/img/icons/Shape (1).png","alt","",1,"mx-2","w-14"],[1,"nav-item","dropdown","d-none"],["href","#","data-bs-toggle","dropdown","id","SectionMenu",1,"nav-link","fs-12","active",3,"ngClass"],["src","../../../../assets/img/icons/sections.png","alt","",1,"mx-2","w-14"],["aria-labelledby","SectionMenu",1,"dropdown-menu","fs-12",2,"background-color","#5B8874"],["routerLink","/import/hazard-mapping","routerLinkActive","active",1,"dropdown-item"],["childSection1","routerLinkActive"],["routerLink","/import/readiness-checklist","routerLinkActive","active",1,"dropdown-item"],["childSection2","routerLinkActive"],["routerLink","/import/action-plan","routerLinkActive","active",1,"dropdown-item"],["childSection3","routerLinkActive"],["routerLink","/import/donor-and-partner","routerLinkActive","active",1,"dropdown-item","d-none"],["childSection4","routerLinkActive"],["routerLink","/import/strategic-policies","routerLinkActive","active",1,"dropdown-item","d-none"],["childSection5","routerLinkActive"],[1,"nav-item","me-1","cursor-pointer"],["aria-current","page","routerLink","/import/readiness-checklist","routerLinkActive","active",1,"nav-link","fs-12","cursor-pointer"],["src","../../../../assets/img/icons/menu.png","alt","",1,"mx-2","w-14"],["class","nav-item dropdown me-2 d-none",4,"ngIf"],[1,"me-4","fs-12","d-flex","justify-content-center","align-items-center"],["src","../../../../assets/img/icons/user.png","alt","",1,"mx-2","w-14"],[1,"me-2"],["href","javascript:void(0)",3,"click"],[1,"bi","bi-box-arrow-right"],[1,"nav-item","dropdown","me-2","d-none"],["href","#","data-bs-toggle","dropdown","id","SectionMenu",1,"nav-link","fs-12",3,"ngClass"],["aria-labelledby","SectionMenu",1,"dropdown-menu","fs-12"],[1,"dropdown-submenu"],[1,"dropdown-item"],[1,"dropdown-menu","fs-12"],["routerLink","/crud/state","routerLinkActive","active",1,"dropdown-item"],["childMaster17","routerLinkActive"],["routerLink","/crud/city","routerLinkActive","active",1,"dropdown-item"],["childMaster18","routerLinkActive"],["routerLink","/crud/organization","routerLinkActive","active",1,"dropdown-item"],["childMaster13","routerLinkActive"],["routerLink","/crud/hazard-types","routerLinkActive","active",1,"dropdown-item"],["childMaster14","routerLinkActive"],["routerLink","/users","routerLinkActive","active",1,"dropdown-item"],["childMaster1","routerLinkActive"],["routerLink","/crud/news","routerLinkActive","active",1,"dropdown-item"],["childMaster2","routerLinkActive"],["routerLink","/maps","routerLinkActive","active",1,"dropdown-item"],["childMaster3","routerLinkActive"],["routerLink","/crud/readiness-category","routerLinkActive","active",1,"dropdown-item"],["childMaster4","routerLinkActive"],["routerLink","/crud/assign-category","routerLinkActive","active",1,"dropdown-item"],["childMaster16","routerLinkActive"],["routerLink","/crud/readiness-checklist","routerLinkActive","active",1,"dropdown-item"],["childMaster5","routerLinkActive"],["routerLink","/crud/assesment-type","routerLinkActive","active",1,"dropdown-item"],["childMaster6","routerLinkActive"],["routerLink","/crud/assign-assesment","routerLinkActive","active",1,"dropdown-item"],["childMaster7","routerLinkActive"],["routerLink","/crud/poe-map","routerLinkActive","active",1,"dropdown-item"],["childMaster15","routerLinkActive"],["routerLinkActive","active",1,"dropdown-item"],["childMaster8","routerLinkActive"],["routerLink","/crud/domain","routerLinkActive","active",1,"dropdown-item"],["childMaster9","routerLinkActive"],["routerLink","/crud/draft-response","routerLinkActive","active",1,"dropdown-item"],["childMaster10","routerLinkActive"],["routerLink","/crud/donor-partner","routerLinkActive","active",1,"dropdown-item"],["childMaster11","routerLinkActive"],["routerLink","/crud/strategic-policies","routerLinkActive","active",1,"dropdown-item"],["childMaster12","routerLinkActive"]],template:function(i,r){if(1&i&&(t.TgZ(0,"header",0)(1,"nav",1)(2,"div",2)(3,"a",3)(4,"span",4),t._uU(5,"Pandemic Readiness Platform"),t.qZA()(),t.TgZ(6,"button",5),t._UZ(7,"span",6),t.qZA(),t.TgZ(8,"div",7)(9,"ul",8)(10,"li",9)(11,"a",10),t._UZ(12,"img",11),t._uU(13," Dashboard"),t.qZA()(),t.TgZ(14,"li",12)(15,"a",13),t._UZ(16,"img",14),t._uU(17," Section "),t.qZA(),t.TgZ(18,"ul",15)(19,"li")(20,"a",16,17),t._uU(22,"Hazard Mapping"),t.qZA()(),t.TgZ(23,"li")(24,"a",18,19),t._uU(26,"Readiness Checklist "),t.qZA()(),t.TgZ(27,"li")(28,"a",20,21),t._uU(30,"Action Plan"),t.qZA()(),t.TgZ(31,"li")(32,"a",22,23),t._uU(34,"Donor and Partner"),t.qZA()(),t.TgZ(35,"li")(36,"a",24,25),t._uU(38,"Strategic Policies"),t.qZA()()()(),t.TgZ(39,"li",26)(40,"a",27,23),t._UZ(42,"img",28),t._uU(43," Menu"),t.qZA()(),t.YNc(44,h,92,3,"li",29),t.qZA(),t.TgZ(45,"div",30),t._UZ(46,"img",31),t._uU(47),t.qZA(),t.TgZ(48,"div",32)(49,"a",33),t.NdJ("click",function(){return r.logout()}),t._UZ(50,"i",34),t.qZA()()()()()()),2&i){const c=t.MAs(21),l=t.MAs(25),u=t.MAs(29),v=t.MAs(37);t.xp6(11),t.Q6J("routerLinkActiveOptions",t.DdM(4,L)),t.xp6(4),t.Q6J("ngClass",t.VKq(5,m,c.isActive||l.isActive||u.isActive||v.isActive)),t.xp6(29),t.Q6J("ngIf",r.isSuperAdmin),t.xp6(3),t.hij(" ",r.useremail," ")}},dependencies:[d.mk,d.O5,a.yS,a.Od],styles:[".navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > ul.dropdown-menu[_ngcontent-%COMP%]{display:block;background-color:#058fcb}.dropdown-submenu[_ngcontent-%COMP%]{position:relative}.dropdown-submenu[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%]{top:0;left:100%;margin-top:-6px}.navbar-collapse[_ngcontent-%COMP%]{flex-grow:inherit!important}"]}),n})(),M=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-content"]],decls:2,vars:0,template:function(i,r){1&i&&(t.TgZ(0,"main"),t._UZ(1,"router-outlet"),t.qZA())},dependencies:[a.lC]}),n})();const C=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-layout"]],decls:2,vars:0,template:function(i,r){1&i&&t._UZ(0,"app-header")(1,"app-content")},dependencies:[Z,M]}),n})(),children:p}];let f=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,a.Bz.forChild(C),a.Bz]}),n})()}}]);