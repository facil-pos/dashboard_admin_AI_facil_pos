"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[712],{431:(B,O,r)=>{r.d(O,{D:()=>J});var o=r(9212),t=r(627),I=r(2438),b=r(6321),M=r(9360),u=r(8251),l=r(7398),h=r(7304),p=r(4558),f=r(6814),y=r(5722);const g=["deleteSwal"],_=["successSwal"];function D(w,A){if(1&w&&(o.ynx(0),o.TgZ(1,"th"),o._uU(2),o.qZA(),o.BQk()),2&w){const C=A.$implicit;o.xp6(2),o.Oqu(C.title)}}const S=()=>({confirmButton:"btn btn-danger",cancelButton:"btn btn-active-light"}),T=()=>({confirmButton:"btn btn-success"});let J=(()=>{class w{renderer;router;modalService;datatableConfig={};route="/";reload;modal;deleteEvent=new o.vpe;editEvent=new o.vpe;createEvent=new o.vpe;dtOptions={};datatableElement;deleteSwal;successSwal;idInAction;modalConfig={modalDialogClass:"modal-dialog modal-dialog-centered mw-650px"};swalOptions={buttonsStyling:!1};modalRef;clickListener;constructor(C,m,d){this.renderer=C,this.router=m,this.modalService=d}ngOnInit(){this.dtOptions={dom:"<'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",processing:!0,language:{processing:'<span class="spinner-border spinner-border-sm align-middle"></span> Loading...'},...this.datatableConfig},this.renderActionColumn(),this.setupSweetAlert(),this.reload&&this.reload.subscribe(C=>{this.modalService.dismissAll(),this.datatableElement.dtInstance.then(m=>m.ajax.reload())})}renderActionColumn(){this.dtOptions.columns&&this.dtOptions.columns.push({sortable:!1,title:"Actions",render:(m,d,v)=>{const F=`\n          <button class="btn btn-icon btn-active-light-primary w-30px h-30px" data-action="delete" data-id="${v.name}">\n            <i class="ki-duotone ki-trash fs-3">\n              <span class="path1"></span><span class="path2"></span>\n              <span class="path3"></span><span class="path4"></span><span class="path5"></span>\n            </i>\n          </button>`,k=[];return this.editEvent.observed&&k.push(`\n          <button class="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-action="edit" data-id="${v.name}">\n            <i class="ki-duotone ki-pencil fs-3"><span class="path1"></span><span class="path2"></span></i>\n          </button>`),this.deleteEvent.observed&&k.push(F),k.join("")}})}ngAfterViewInit(){this.clickListener=this.renderer.listen(document,"click",C=>{const m=C.target.closest(".btn");if(m){const{action:d,id:v}=m.dataset;switch(this.idInAction=v,d){case"view":this.router.navigate([`${this.route}/${v}`]);break;case"create":this.createEvent.emit(!0),this.modalRef=this.modalService.open(this.modal,this.modalConfig);break;case"edit":this.editEvent.emit(this.idInAction),this.modalRef=this.modalService.open(this.modal,this.modalConfig);break;case"delete":this.deleteSwal.fire().then(L=>{L.isConfirmed&&this.successSwal.fire()})}}}),this.triggerFilter()}ngOnDestroy(){this.reload.unsubscribe(),this.clickListener&&this.clickListener(),this.modalService.dismissAll()}triggerDelete(){this.deleteEvent.emit(this.idInAction)}triggerFilter(){(0,I.R)(document,"keyup").pipe(function c(w,A=b.z){return(0,M.e)((C,m)=>{let d=null,v=null,L=null;const F=()=>{if(d){d.unsubscribe(),d=null;const U=v;v=null,m.next(U)}};function k(){const U=L+w,N=A.now();if(N<U)return d=this.schedule(void 0,U-N),void m.add(d);F()}C.subscribe((0,u.x)(m,U=>{v=U,L=A.now(),d||(d=A.schedule(k,w),m.add(d))},()=>{F(),m.complete()},void 0,()=>{v=d=null}))})}(50),(0,l.U)(C=>{const m=C.target,d=m.getAttribute("data-action"),v=m.value?.trim().toLowerCase();return{action:d,value:v}})).subscribe(({action:C,value:m})=>{"filter"===C&&this.datatableElement.dtInstance.then(d=>d.search(m).draw())})}setupSweetAlert(){this.swalOptions={buttonsStyling:!1}}static \u0275fac=function(m){return new(m||w)(o.Y36(o.Qsj),o.Y36(h.F0),o.Y36(p.FF))};static \u0275cmp=o.Xpm({type:w,selectors:[["app-crud"]],viewQuery:function(m,d){if(1&m&&(o.Gf(t.G,5),o.Gf(g,5),o.Gf(_,5)),2&m){let v;o.iGM(v=o.CRH())&&(d.datatableElement=v.first),o.iGM(v=o.CRH())&&(d.deleteSwal=v.first),o.iGM(v=o.CRH())&&(d.successSwal=v.first)}},inputs:{datatableConfig:"datatableConfig",route:"route",reload:"reload",modal:"modal"},outputs:{deleteEvent:"deleteEvent",editEvent:"editEvent",createEvent:"createEvent"},decls:9,vars:10,consts:[["datatable","",1,"table","align-middle","table-row-dashed","fs-6","gy-5","dataTable","no-footer",3,"dtOptions"],[1,"text-start","text-gray-500","fw-bold","fs-7","text-uppercase","gs-0"],[4,"ngFor","ngForOf"],[1,"fw-semibold","text-gray-600"],["title","Are you sure to delete?","text","This cannot be undone","icon","warning",3,"swalOptions","showCancelButton","focusCancel","customClass","confirm"],["deleteSwal",""],["title","Delete successfully!","text","","icon","success",3,"swalOptions","customClass"],["successSwal",""]],template:function(m,d){1&m&&(o.TgZ(0,"table",0)(1,"thead")(2,"tr",1),o.YNc(3,D,3,1,"ng-container",2),o.qZA()(),o._UZ(4,"tbody",3),o.qZA(),o.TgZ(5,"swal",4,5),o.NdJ("confirm",function(){return d.triggerDelete()}),o.qZA(),o._UZ(7,"swal",6,7)),2&m&&(o.Q6J("dtOptions",d.dtOptions),o.xp6(3),o.Q6J("ngForOf",d.dtOptions.columns),o.xp6(2),o.Q6J("swalOptions",d.swalOptions)("showCancelButton",!0)("focusCancel",!0)("customClass",o.DdM(8,S)),o.xp6(2),o.Q6J("swalOptions",d.swalOptions)("customClass",o.DdM(9,T)))},dependencies:[f.sg,t.G,y.q1]})}return w})()},9155:(B,O,r)=>{r.d(O,{Z:()=>u});var o=r(6814),t=r(627),I=r(5722),b=r(4558),M=r(9212);let u=(()=>{class c{static \u0275fac=function(p){return new(p||c)};static \u0275mod=M.oAB({type:c});static \u0275inj=M.cJS({imports:[o.ez,t.T,I.ii.forChild(),b.bz]})}return c})()},712:(B,O,r)=>{r.r(O),r.d(O,{DocumentModule:()=>P});var o=r(6814),t=r(9212),I=r(9862);const b=[{id:1,name:"Loom",created_at:"",updated_at:"",docs:[]},{id:2,name:"Youtube",created_at:"",updated_at:"",docs:[]},{id:3,name:"drive",created_at:"",updated_at:"",docs:[]}],M={draw:0,recordsTotal:b.length,recordsFiltered:b.length,data:b};var u=r(553),c=r(9315),l=r(2096),h=r(7398),p=r(6306);let f=(()=>{class a{http;apiUrl=u.N.apiUrl;constructor(e){this.http=e}getUsers(e,n){return this.getDoc(e).pipe((0,h.U)(i=>{const s=i?i.docs:[];return{draw:n.draw,recordsTotal:s?.length,recordsFiltered:s?.length,data:s}}))}getDocs(e){return(0,c.D)({loom:this.getDoc(1),youtube:this.getDoc(2),drive:this.getDoc(3)}).pipe((0,h.U)(n=>{const i=b.findIndex(Z=>"Loom"===Z.name),s=b.findIndex(Z=>"Youtube"===Z.name),x=b.findIndex(Z=>"drive"===Z.name);return-1!==i&&(b[i].docs=n.loom.docs),-1!==s&&(b[s].docs=n.youtube.docs),-1!==x&&(b[x].docs=n.drive.docs),M.data=b,M}),(0,p.K)(this.handleError))}getDoc(e){const i={1:{id:1,name:"loom",created_at:"",updated_at:"",docs:[]},2:{id:2,name:"youtube",created_at:"",updated_at:"",docs:[]},3:{id:3,name:"drive",created_at:"",updated_at:"",docs:[]}};return this.http.post(`${this.apiUrl}/documents`,{type:{1:"loom",2:"youtube",3:"drive"}[e]}).pipe((0,p.K)(s=>(console.error("An error occurred",s),(0,l.of)(i[e]))))}createDocs(e){return b.push(e),(0,l.of)(e)}updateDocs(e,n){const i=b.findIndex(s=>s.id===e);return-1!==i&&(b[i]=n),(0,l.of)(n)}deleteLoomDoc(e){return this.http.delete(`${this.apiUrl}/delete-loom-document/${e}`).pipe((0,p.K)(this.handleError))}deleteYoutubeDoc(e){return this.http.delete(`${this.apiUrl}/delete-youtube-document/${e}`).pipe((0,p.K)(this.handleError))}deleteDriveDoc(e){return this.http.delete(`${this.apiUrl}/delete-drive-document/${e}`).pipe((0,p.K)(this.handleError))}deleteDoc(e,n){const i=(new I.LE).set("document_id",e);return this.http.delete(`${this.apiUrl}/documents/${n}`,{params:i}).pipe((0,p.K)(this.handleError))}deleteDocs(e,n){return{1:s=>this.deleteDoc(s,"loom"),2:s=>this.deleteDoc(s,"youtube"),3:s=>this.deleteDoc(s,"drive")}[e](n)}handleError(e){return console.error("An error occurred",e),[]}static \u0275fac=function(n){return new(n||a)(t.LFG(I.eN))};static \u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var y=r(4558),g=r(6223),_=r(7304),D=r(5722);const S=["formModal"],T=["noticeSwal"],J=a=>["/apps/documents",a];function w(a,E){if(1&a&&(t.ynx(0),t.TgZ(1,"div",11)(2,"div",12)(3,"div",13)(4,"div",14)(5,"h2"),t._uU(6),t.ALo(7,"titlecase"),t.qZA()()(),t.TgZ(8,"div",15)(9,"div",16),t._uU(10),t.qZA()(),t.TgZ(11,"div",17)(12,"a",18),t._uU(13,"Ver Documentos"),t.qZA()()()(),t.BQk()),2&a){const e=E.$implicit;t.xp6(6),t.Oqu(t.lcZ(7,3,e.name)),t.xp6(4),t.hij("Total de videos cargados: ",e.docs.length,""),t.xp6(2),t.Q6J("routerLink",t.VKq(5,J,e.id))}}function A(a,E){if(1&a&&(t.ynx(0),t.YNc(1,w,14,7,"ng-container",10),t.BQk()),2&a){const e=E.ngIf;t.xp6(1),t.Q6J("ngForOf",e.data)}}function C(a,E){1&a&&(t.TgZ(0,"div"),t._uU(1,"Role name is required"),t.qZA())}function m(a,E){1&a&&(t.TgZ(0,"div"),t._uU(1,"Role name must be at least 4 characters long"),t.qZA())}function d(a,E){if(1&a&&(t.TgZ(0,"div",42),t.YNc(1,C,2,0,"div",1)(2,m,2,0,"div",1),t.qZA()),2&a){t.oxw();const e=t.MAs(18);t.xp6(1),t.Q6J("ngIf",null==e.errors?null:e.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.errors?null:e.errors.minlength)}}const v=a=>({"ki-up":a});function L(a,E){if(1&a){const e=t.EpF();t.TgZ(0,"form",19,20),t.NdJ("ngSubmit",function(i){t.CHM(e);const s=t.MAs(1),x=t.oxw();return t.KtG(x.onSubmit(i,s))}),t.TgZ(2,"div",21)(3,"h4",22),t._uU(4,"Role Details"),t.qZA(),t.TgZ(5,"button",23),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.KtG(s.dismiss("Cross click"))}),t.qZA()(),t.TgZ(6,"div",24)(7,"div",25)(8,"div",26),t.NdJ("click",function(){t.CHM(e);const i=t.MAs(13);return t.KtG(i.toggle())}),t._uU(9,"User Information "),t.TgZ(10,"span",27),t._UZ(11,"i",28),t.qZA()(),t.TgZ(12,"div",29,30),t.NdJ("ngbCollapseChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.isCollapsed1=i)}),t.TgZ(14,"div",31)(15,"label",32),t._uU(16,"Role Name"),t.qZA(),t.TgZ(17,"input",33,34),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.roleModel.name=i)}),t.qZA(),t.YNc(19,d,3,2,"div",35),t.qZA()()()(),t.TgZ(20,"div",36)(21,"button",37),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.KtG(s.dismiss("cancel"))}),t._uU(22," Discard "),t.qZA(),t.TgZ(23,"button",38)(24,"span",39),t._uU(25," Submit "),t.qZA(),t.TgZ(26,"span",40),t._uU(27," Please wait... "),t._UZ(28,"span",41),t.qZA()()()()}if(2&a){const e=t.MAs(1),n=t.oxw();t.xp6(8),t.uIk("aria-expanded",!n.isCollapsed1),t.xp6(3),t.Q6J("ngClass",t.VKq(6,v,!n.isCollapsed1)),t.xp6(1),t.Q6J("ngbCollapse",n.isCollapsed1),t.xp6(5),t.Q6J("ngModel",n.roleModel.name),t.xp6(2),t.Q6J("ngIf",e.submitted&&e.invalid),t.xp6(4),t.uIk("data-kt-indicator",n.isLoading?"on":"off")}}let F=(()=>{class a{apiService;cdr;renderer;modalService;isCollapsed1=!1;isLoading=!1;roles$;reloadEvent=new t.vpe;role$;roleModel={id:0,name:"",docs:[]};formModal;noticeSwal;swalOptions={};modalConfig={modalDialogClass:"modal-dialog modal-dialog-centered mw-650px"};clickListener;constructor(e,n,i,s){this.apiService=e,this.cdr=n,this.renderer=i,this.modalService=s}ngAfterViewInit(){this.clickListener=this.renderer.listen(document,"click",e=>{const n=e.target.closest(".btn");if(n){const{action:i,id:s}=n.dataset;switch(i){case"view":case"delete":break;case"create":this.create(),this.modalService.open(this.formModal,this.modalConfig);break;case"edit":this.edit(s),this.modalService.open(this.formModal,this.modalConfig)}}})}ngOnInit(){this.roles$=this.apiService.getDocs()}edit(e){this.role$=this.apiService.getDoc(e),this.role$.subscribe(n=>{n&&(this.roleModel=n)})}create(){this.roleModel={id:0,name:"",docs:[]}}onSubmit(e,n){if(n&&n.invalid)return;this.isLoading=!0;const i={icon:"success",title:"Success!",text:this.roleModel.id>0?"User updated successfully!":"User created successfully!"},s={icon:"error",title:"Error!",text:""},x=()=>{this.isLoading=!1,this.modalService.dismissAll(),this.roles$=this.apiService.getDocs(),this.cdr.detectChanges()};this.roleModel.id>0?(()=>{this.apiService.updateDocs(this.roleModel.id,this.roleModel).subscribe({next:()=>{this.showAlert(i),this.reloadEvent.emit(!0)},error:R=>{s.text=this.extractText(R.error),this.showAlert(s),this.isLoading=!1},complete:x})})():(()=>{this.apiService.createDocs(this.roleModel).subscribe({next:()=>{this.showAlert(i),this.reloadEvent.emit(!0)},error:R=>{s.text=this.extractText(R.error),this.showAlert(s),this.isLoading=!1},complete:x})})()}extractText(e){var n=[];for(var i in e)"string"==typeof e[i]?n.push(e[i]):"object"==typeof e[i]&&(n=n.concat(this.extractText(e[i])));return Array.from(new Set(n)).join("\n")}showAlert(e){let n=e.icon?.toString()||"success";"error"===e.icon&&(n="danger"),this.swalOptions=Object.assign({buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-"+n}},e),this.cdr.detectChanges(),this.noticeSwal.fire()}ngOnDestroy(){this.clickListener&&this.clickListener(),this.modalService.dismissAll()}static \u0275fac=function(n){return new(n||a)(t.Y36(f),t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(y.FF))};static \u0275cmp=t.Xpm({type:a,selectors:[["app-documents-listing"]],viewQuery:function(n,i){if(1&n&&(t.Gf(S,5),t.Gf(T,5)),2&n){let s;t.iGM(s=t.CRH())&&(i.formModal=s.first),t.iGM(s=t.CRH())&&(i.noticeSwal=s.first)}},decls:13,vars:4,consts:[[1,"row","row-cols-1","row-cols-md-2","row-cols-xl-3","g-5","g-xl-9"],[4,"ngIf"],[1,"ol-md-4"],[1,"card","h-md-100"],[1,"card-body","d-flex","flex-center"],[1,"flex-center","flex-center"],[1,"fw-bold","fs-3","text-gray-600","text-hover-primary","mw-100","mh-150px","mb-7"],[3,"swalOptions"],["noticeSwal",""],["formModal",""],[4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"card","card-flush","h-md-100"],[1,"card-header"],[1,"card-title"],[1,"card-body","pt-1"],[1,"fw-bold","text-gray-600","mb-5"],[1,"card-footer","flex-wrap","pt-0"],[1,"btn","btn-light","btn-active-primary","my-1","me-2",3,"routerLink"],[3,"ngSubmit"],["myForm","ngForm"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["id","kt_modal_update_customer_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_update_customer_header","data-kt-scroll-wrappers","#kt_modal_update_customer_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7","mw-650px"],["data-bs-toggle","collapse","role","button","aria-controls","kt_modal_update_customer_user_info",1,"fw-bold","fs-3","rotate","collapsible","mb-7",3,"click"],[1,"ms-2","rotate-180"],[1,"ki-duotone","ki-down","fs-3",3,"ngClass"],[1,"collapse","show",3,"ngbCollapse","ngbCollapseChange"],["collapse1","ngbCollapse"],[1,"fv-row","mb-7"],[1,"required","fw-semibold","fs-6","mb-2"],["type","text","name","name","required","","minlength","4",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["name","ngModel"],["class","fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback",4,"ngIf"],[1,"modal-footer","flex-center"],["type","reset","id","kt_modal_update_customer_cancel",1,"btn","btn-light","me-3",3,"click"],["type","submit","id","kt_modal_update_customer_submit",1,"btn","btn-primary"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"fv-plugins-message-container","fv-plugins-message-container--enabled","invalid-feedback"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.YNc(1,A,2,1,"ng-container",1),t.ALo(2,"async"),t.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),t._uU(8,"Nuevos docuemtos pronto"),t.qZA()()()()()(),t._UZ(9,"swal",7,8),t.YNc(11,L,29,8,"ng-template",null,9,t.W1O)),2&n&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,i.roles$)),t.xp6(8),t.Q6J("swalOptions",i.swalOptions))},dependencies:[o.mk,o.sg,o.O5,g._Y,g.Fj,g.JJ,g.JL,g.Q7,g.wO,g.On,g.F,_.rH,y._D,D.q1,o.Ov,o.rS]})}return a})();var k=r(431);function U(a,E){if(1&a&&(t.ynx(0),t.TgZ(1,"span",14),t._uU(2),t.qZA(),t.BQk()),2&a){const e=E.ngIf;t.xp6(2),t.hij("(",e.docs.length,")")}}let N=(()=>{class a{route;apiService;role$;datatableConfig={};reloadEvent=new t.vpe;constructor(e,n){this.route=e,this.apiService=n}ngOnInit(){this.route.params.subscribe(e=>{const n=parseInt(e.id);this.role$=this.apiService.getDoc(n),this.datatableConfig={serverSide:!0,ajax:(i,s)=>{this.apiService.getUsers(n,i).subscribe(x=>{s(x)})},columns:[{title:"Name",data:"name",render:function(i,s,x){const Z=["success","info","warning","danger"],Q=Z[Math.floor(Math.random()*Z.length)];return`\n              \n              <div class="label fs-3 bg-light-${Q} text-${Q}">\n                ${i}\n              </div>\n            \n            `}},{title:"Tipo",data:"Type",render:function(i,s,x){return x.type?x.type:"Tipo no encontrado"},type:"string"}],createdRow:function(i,s,x){$("td:eq(0)",i).addClass("d-flex align-items-center")}}})}deleteDoc(e){this.route.params.subscribe(n=>{this.apiService.deleteDocs(n.id,e).subscribe(()=>{this.reloadEvent.emit(!0),this.apiService.getDocs()})})}static \u0275fac=function(n){return new(n||a)(t.Y36(_.gz),t.Y36(f))};static \u0275cmp=t.Xpm({type:a,selectors:[["app-documents-details"]],decls:20,vars:8,consts:[[1,"d-flex","flex-column","flex-lg-row"],[1,"flex-column","flex-lg-row-auto","w-100","w-lg-200px","w-xl-300px","mb-10"],[1,"card","card-flush"],[1,"card-header"],[1,"card-title"],[1,"mb-0"],[1,"card-body","pt-0"],[1,"flex-lg-row-fluid","ms-lg-10"],[1,"card","card-flush","mb-6","mb-xl-9"],[1,"card-header","pt-5"],[1,"d-flex","align-items-center"],[4,"ngIf"],[1,"card-toolbar"],[3,"datatableConfig","reload","deleteEvent"],[1,"text-gray-600","fs-6","ms-1"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),t._uU(6),t.ALo(7,"async"),t.qZA()()(),t._UZ(8,"div",6),t.qZA()(),t.TgZ(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",4)(13,"h2",10),t._uU(14,"Archivos encontrados "),t.YNc(15,U,3,1,"ng-container",11),t.ALo(16,"async"),t.qZA()(),t._UZ(17,"div",12),t.qZA(),t.TgZ(18,"div",6)(19,"app-crud",13),t.NdJ("deleteEvent",function(x){return i.deleteDoc(x)}),t.qZA()()()()()),2&n){let s;t.xp6(6),t.hij(" ",null==(s=t.lcZ(7,4,i.role$))?null:s.name," "),t.xp6(9),t.Q6J("ngIf",t.lcZ(16,6,i.role$)),t.xp6(4),t.Q6J("datatableConfig",i.datatableConfig)("reload",i.reloadEvent)}},dependencies:[o.O5,k.D,o.Ov]})}return a})();var Y=r(4955),G=r(9155);let P=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=t.oAB({type:a});static \u0275inj=t.cJS({imports:[o.ez,g.u5,g.UX,_.Bz.forChild([{path:"",component:F},{path:":id",component:N}]),G.Z,Y.m,y.Oz,y.XC,y.lQ,y.HK,D.ii.forChild()]})}return a})()},627:(B,O,r)=>{r.d(O,{G:()=>I,T:()=>M});var o=r(9212),I=function(){function u(c,l,h){this.el=c,this.vcr=l,this.renderer=h,this.dtOptions={}}return u.prototype.ngOnInit=function(){var c=this;this.dtTrigger?this.dtTrigger.subscribe(function(l){c.displayTable(l)}):this.displayTable(null)},u.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},u.prototype.displayTable=function(c){var l=this;c&&(this.dtOptions=c),this.dtInstance=new Promise(function(h,p){Promise.resolve(l.dtOptions).then(function(f){0===Object.keys(f).length&&0===$("tbody tr",l.el.nativeElement).length?p("Both the table and dtOptions cannot be empty"):(f.columns&&f.columns.forEach(function(g){var _;""===(null!==(_=g.id)&&void 0!==_?_:"").trim()&&(g.id=l.getColumnUniqueId())}),setTimeout(function(){var g={rowCallback:function(_,D,S){if(f.columns){var T=f.columns;l.applyNgPipeTransform(_,T),l.applyNgRefTemplate(_,T,D)}f.rowCallback&&f.rowCallback(_,D,S)}};g=Object.assign({},f,g),l.dt=$(l.el.nativeElement).DataTable(g),h(l.dt)}))})})},u.prototype.applyNgPipeTransform=function(c,l){l.filter(function(p){return p.ngPipeInstance&&!p.ngTemplateRef}).forEach(function(p){var f=p.ngPipeInstance,y=p.ngPipeArgs||[],g=l.filter(function(T){return!1!==T.visible}).findIndex(function(T){return T.id===p.id}),_=c.childNodes.item(g),D=$(_).text(),S=f.transform.apply(f,function(u,c,l){if(l||2===arguments.length)for(var f,h=0,p=c.length;h<p;h++)(f||!(h in c))&&(f||(f=Array.prototype.slice.call(c,0,h)),f[h]=c[h]);return u.concat(f||Array.prototype.slice.call(c))}([D],y,!1));$(_).text(S)})},u.prototype.applyNgRefTemplate=function(c,l,h){var p=this;l.filter(function(y){return y.ngTemplateRef&&!y.ngPipeInstance}).forEach(function(y){var g=y.ngTemplateRef,_=g.ref,D=g.context,S=l.filter(function(A){return!1!==A.visible}).findIndex(function(A){return A.id===y.id}),T=c.childNodes.item(S);$(T).html("");var J=Object.assign({},D,D?.userData,{adtData:h}),w=p.vcr.createEmbeddedView(_,J);p.renderer.appendChild(T,w.rootNodes[0])})},u.prototype.getColumnUniqueId=function(){for(var c="",h=0;h<6;h++){var p=Math.floor(62*Math.random());c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(p)}return c.trim()},u.\u0275fac=function(l){return new(l||u)(o.Y36(o.SBq),o.Y36(o.s_b),o.Y36(o.Qsj))},u.\u0275dir=o.lG2({type:u,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),u}(),b=r(6814),M=function(){function u(){}return u.forRoot=function(){return{ngModule:u}},u.\u0275fac=function(l){return new(l||u)},u.\u0275mod=o.oAB({type:u}),u.\u0275inj=o.cJS({imports:[b.ez]}),u}()}}]);