"use strict";(self.webpackChunkreadiness_intelligence=self.webpackChunkreadiness_intelligence||[]).push([[174],{174:(_,m,n)=>{n.r(m),n.d(m,{RolesModule:()=>C});var d=n(6895),r=n(433),e=n(8256),u=n(7185),p=n(8423),h=n(6888);function f(t,i){1&t&&(e.TgZ(0,"p"),e._uU(1,"Role Name is Required"),e.qZA())}function b(t,i){if(1&t&&(e.TgZ(0,"div",23),e.YNc(1,f,2,0,"p",24),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.f.name.errors.required)}}function g(t,i){1&t&&(e.TgZ(0,"button",25),e._uU(1,"Submit"),e.qZA())}function v(t,i){1&t&&(e.TgZ(0,"button",25),e._uU(1,"Update"),e.qZA())}function R(t,i){if(1&t){const o=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"ul",26)(5,"li",27)(6,"a",28),e.NdJ("click",function(){const l=e.CHM(o).$implicit,a=e.oxw();return e.KtG(a.findRole(l.id))}),e._UZ(7,"i",29),e.qZA()(),e.TgZ(8,"li",27)(9,"a",28),e.NdJ("click",function(){const l=e.CHM(o).$implicit,a=e.oxw();return e.KtG(a.removeRole(l.id))}),e._UZ(10,"i",30),e.qZA()()()()()}if(2&t){const o=i.$implicit;e.xp6(2),e.Oqu(o.name)}}const Z=function(t){return{"is-invalid":t}};let A=(()=>{class t{constructor(o,s,c,l){this.toastr=o,this.spinner=s,this.fb=c,this.serviceRole=l,this.FormSubmitted=!1}ngOnInit(){this.getAll(),this.Form=this.fb.group({name:["",r.kI.required]})}getAll(){this.serviceRole.getAll().subscribe(o=>{this.roles=o})}get f(){return this.Form.controls}submitForm(){this.FormSubmitted=!0,!this.Form.invalid&&(this.isAddRole?(this.updateRole(),this.isAddRole=!1):this.addRole(),this.FormSubmitted=!1,this.Form.reset())}addRole(){this.spinner.show(),this.serviceRole.create(this.Form.value).subscribe({next:()=>{this.getAll()},error:()=>{this.spinner.hide(),this.toastr.error("Failed to save!","Error")},complete:()=>{this.spinner.hide(),this.toastr.success("Data saved successfully!","Success")}})}findRole(o){this.spinner.show(),this.serviceRole.find(o).subscribe(s=>{this.Form.patchValue(s),this.spinner.hide()}),this.idRole=o,this.isAddRole=!0}updateRole(){this.spinner.show(),this.serviceRole.update(this.idRole,this.Form.value).subscribe({next:()=>{this.getAll()},error:()=>{this.spinner.hide(),this.toastr.error("Failed to update!","Error")},complete:()=>{this.spinner.hide(),this.toastr.success("Data updated successfully!","Success")}})}removeRole(o){this.spinner.show(),this.serviceRole.delete(o).subscribe({next:()=>{this.getAll()},error:()=>{this.spinner.hide(),this.toastr.error("Failed to delete!","Error")},complete:()=>{this.spinner.hide(),this.toastr.success("Data deleted successfully!","Success")}}),this.Form.reset(),this.isAddRole=!1,this.FormSubmitted=!1}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(u._W),e.Y36(p.t2),e.Y36(r.qu),e.Y36(h.N))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-roles"]],decls:33,vars:9,consts:[[1,"container","mt-4"],[1,"row"],[1,"col-12","fs-12"],[1,"card","mb-4","border-0"],[1,"card-body","px-5"],[1,"py-2","border","border-5","border-top-0","border-end-0","border-bottom-0","ps-2","border-primary"],[1,"card","mb-4","shadow-sm",2,"background-color","#f1f1f1"],[1,"card-body"],[1,"row","py-2"],[1,"col-4"],[1,"card","mb-3",2,"background-color","transparent","border","none"],[1,"card-body","py-2"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["formControlName","name","rows","3",1,"form-control","mb-2","fs-12",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","submit","class","btn btn-primary fs-12",4,"ngIf"],[1,"col-8"],[1,"card-body","py-4"],[1,"table","mb-0","fs-12"],[1,"text-white",2,"background-color","#024664"],[3,"width"],[4,"ngFor","ngForOf"],[1,"invalid-feedback"],[4,"ngIf"],["type","submit",1,"btn","btn-primary","fs-12"],[1,"nav"],[1,"nav-item"],[1,"btn",3,"click"],[1,"bi","bi-pencil-square"],[1,"bi","bi-trash3"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e._uU(6,"CRUD - ROLE"),e.qZA(),e.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10)(12,"div",11)(13,"form",12),e.NdJ("ngSubmit",function(){return s.submitForm()}),e.TgZ(14,"div",13)(15,"label"),e._uU(16,"Role Name"),e.qZA(),e._UZ(17,"textarea",14),e.YNc(18,b,2,1,"div",15),e.qZA(),e.YNc(19,g,2,0,"button",16),e.YNc(20,v,2,0,"button",16),e.qZA()()()(),e.TgZ(21,"div",17)(22,"div",10)(23,"div",18)(24,"table",19)(25,"thead",20)(26,"tr")(27,"th"),e._uU(28,"Role Name"),e.qZA(),e.TgZ(29,"th",21),e._uU(30,"Action"),e.qZA()()(),e.TgZ(31,"tbody"),e.YNc(32,R,11,1,"tr",22),e.qZA()()()()()()()()()()()()()),2&o&&(e.xp6(13),e.Q6J("formGroup",s.Form),e.xp6(4),e.Q6J("ngClass",e.VKq(7,Z,s.FormSubmitted&&s.f.name.errors)),e.xp6(1),e.Q6J("ngIf",s.FormSubmitted&&s.f.name.errors),e.xp6(1),e.Q6J("ngIf",!s.isAddRole),e.xp6(1),e.Q6J("ngIf",s.isAddRole),e.xp6(9),e.Q6J("width",100),e.xp6(3),e.Q6J("ngForOf",s.roles))},dependencies:[d.mk,d.sg,d.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]}),t})();var F=n(1463);let C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,F.Bz.forChild([{path:"",component:A}]),r.u5,r.UX]}),t})()}}]);