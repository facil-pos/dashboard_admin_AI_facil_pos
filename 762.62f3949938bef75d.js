"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[762],{5762:(A,c,l)=>{l.r(c),l.d(c,{BuilderModule:()=>x});var u=l(6814),g=l(7304),e=l(9212),f=(l(2611),l(2381)),i=l(6223),b=l(8704);const h=["form"];function _(a,m){1&a&&(e.ynx(0),e.TgZ(1,"span",69),e._uU(2,"Preview"),e.qZA(),e.BQk())}function v(a,m){1&a&&(e.ynx(0),e.TgZ(1,"span",70),e._uU(2),e._UZ(3,"span",71),e.qZA(),e.BQk()),2&a&&(e.xp6(1),e.Udp("display","block"),e.xp6(1),e.hij(" Please wait..."," "," "))}function k(a,m){1&a&&(e.ynx(0),e.TgZ(1,"span",69),e._uU(2,"Reset"),e.qZA(),e.BQk())}function Z(a,m){1&a&&(e.ynx(0),e.TgZ(1,"span",70),e._uU(2),e._UZ(3,"span",71),e.qZA(),e.BQk()),2&a&&(e.xp6(1),e.Udp("display","block"),e.xp6(1),e.hij(" Please wait..."," "," "))}const p=a=>({active:a}),s=a=>({active:a});let T=(()=>{class a{layout;activeTab="Sidebar";model;form;configLoading=!1;resetLoading=!1;constructor(r){this.layout=r}ngOnInit(){this.model=this.layout.getLayoutConfig(this.layout.getBaseLayoutTypeFromLocalStorage())}setActiveTab(r){this.activeTab=r}resetPreview(){this.resetLoading=!0,this.layout.resetBaseConfig()}submitPreview(){this.configLoading=!0,this.layout.saveBaseConfig(this.model)}static \u0275fac=function(d){return new(d||a)(e.Y36(f.Pb))};static \u0275cmp=e.Xpm({type:a,selectors:[["app-builder"]],viewQuery:function(d,o){if(1&d&&e.Gf(h,7),2&d){let n;e.iGM(n=e.CRH())&&(o.form=n.first)}},decls:153,vars:53,consts:[[1,"card","mb-10"],[1,"card-body","d-flex","align-items-center","p-5","p-lg-8"],[1,"d-flex","h-50px","w-50px","h-lg-80px","w-lg-80px","flex-shrink-0","flex-center","position-relative","align-self-start","align-self-lg-center","mt-3","mt-lg-0"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",1,"text-primary","h-75px","w-75px","h-lg-100px","w-lg-100px","position-absolute","opacity-5"],["fill","currentColor","d","M10.2,21.23,4.91,18.17a3.58,3.58,0,0,1-1.8-3.11V8.94a3.58,3.58,0,0,1,1.8-3.11L10.2,2.77a3.62,3.62,0,0,1,3.6,0l5.29,3.06a3.58,3.58,0,0,1,1.8,3.11v6.12a3.58,3.58,0,0,1-1.8,3.11L13.8,21.23A3.62,3.62,0,0,1,10.2,21.23Z"],["name","wrench",1,"fs-2x","fs-lg-3x","text-primary","position-absolute"],[1,"ms-6"],[1,"list-unstyled","text-gray-600","fw-bold","fs-6","p-0","m-0"],[1,"card","card-custom"],[1,"card-header","card-header-stretch","overflow-auto"],["role","tablist",1,"nav","nav-stretch","nav-line-tabs","fw-bold","border-transparent","flex-nowrap"],[1,"nav-item"],["role","tab",1,"nav-link","cursor-pointer",3,"ngClass","click"],["novalidate","",1,"form",3,"ngSubmit"],["form","ngForm"],[1,"card-body"],[1,"tab-content","pt-3"],[1,"tab-pane",3,"ngClass"],[1,"form-group","d-flex","flex-stack"],[1,"d-flex","flex-column"],[1,"fw-bold","text-gray-900"],[1,"fs-7","fw-semibold","text-muted"],[1,"d-flex","justify-content-end"],[1,"form-check","form-check-custom","form-check-solid","form-check-success","form-switch"],[1,"form-check","form-check-custom","form-check-solid","form-switch","mb-2"],["type","checkbox","name","model.app.sidebar.default.fixed.desktop",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"separator","separator-dashed","my-6"],["type","checkbox","name","model.app.sidebar.default.minimize.desktop.enabled",1,"form-check-input",3,"ngModel","ngModelChange"],["for","kt_builder_sidebar_minimize_desktop_enabled","data-bs-toggle","tooltip","data-kt-initialized","1",1,"form-check-label","text-gray-700","fw-bold"],[1,"form-check","form-check-custom","form-check-solid","form-check-success","form-switch","ms-10"],["type","checkbox","name","model.app.sidebar.default.minimize.desktop.hoverable",1,"form-check-input",3,"ngModel","ngModelChange"],["for","kt_builder_sidebar_minimize_desktop_hoverable","data-bs-toggle","tooltip","data-kt-initialized","1",1,"form-check-label","text-gray-700","fw-bold"],["type","checkbox","name","model.app.sidebar.default.minimize.desktop.default",1,"form-check-input",3,"ngModel","ngModelChange"],["for","kt_builder_sidebar_minimize_desktop_default","data-bs-toggle","tooltip","data-kt-initialized","1",1,"form-check-label","text-gray-700","fw-bold"],["type","checkbox","name","model.app.header.default.fixed.desktop",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check","form-check-custom","form-check-success","form-check-solid","form-check-sm","ms-10"],["type","radio","checked","checked","value","menu","id","kt_builder_header_content_menu","name","model.app.header.default.content","value","menu",1,"form-check-input",3,"ngModel","ngModelChange"],["for","kt_builder_header_content_menu",1,"form-check-label","text-gray-700","fw-bold","text-nowrap"],["type","radio","value","page-title","id","kt_builder_header_content_page-title","name","layout-builder[layout][app][header][default][content]","name","model.app.header.default.content","value","page-title",1,"form-check-input",3,"ngModel","ngModelChange"],["for","kt_builder_header_content_page-title",1,"form-check-label","text-gray-700","fw-bold","text-nowrap"],[1,"form-check","form-check-custom","form-check-solid","form-check-success","form-switch","me-10"],["type","checkbox","name","layout-builder[layout][app][toolbar][fixed][desktop]","id","kt_builder_toolbar_fixed_desktop","name","model.app.toolbar.fixed.desktop",1,"form-check-input","w-45px","h-30px",3,"ngModel","ngModelChange"],["for","kt_builder_toolbar_fixed_desktop",1,"form-check-label","text-gray-700","fw-bold"],["type","checkbox","name","model.app.toolbar.fixed.mobile","id","kt_builder_toolbar_fixed_mobile",1,"form-check-input","w-45px","h-30px",3,"ngModel","ngModelChange"],["for","kt_builder_toolbar_fixed_mobile",1,"form-check-label","text-gray-700","fw-bold"],[1,"mb-6"],[1,"fw-semibold","text-muted","fs-7","d-block","lh-1"],["data-kt-buttons","true","data-kt-buttons-target",".form-check-image:not(.disabled),.form-check-input:not([disabled])","data-kt-initialized","1"],[1,"form-check-image","form-check-success","mb-10",3,"ngClass"],[1,"form-check-wrapper"],["src","./assets/media/misc/layout/toolbar-classic.png","alt","",1,"mw-100"],[1,"form-check","form-check-custom","form-check-success","form-check-sm","form-check-solid"],["type","radio","checked","checked","value","classic","name","model.app.toolbar.layout",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check-label","text-gray-800"],["src","./assets/media/misc/layout/toolbar-saas.png","alt","",1,"mw-100"],["type","radio","value","saas","name","model.app.toolbar.layout",1,"form-check-input",3,"ngModel","ngModelChange"],["src","./assets/media/misc/layout/toolbar-accounting.png","alt","",1,"mw-100"],["type","radio","value","accounting","name","model.app.toolbar.layout",1,"form-check-input",3,"ngModel","ngModelChange"],["src","./assets/media/misc/layout/toolbar-extended.png","alt","",1,"mw-100"],["type","radio","value","extended","name","model.app.toolbar.layout",1,"form-check-input",3,"ngModel","ngModelChange"],["src","./assets/media/misc/layout/toolbar-reports.png","alt","",1,"mw-100"],["type","radio","value","reports","name","model.app.toolbar.layout",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"card-footer","py-6"],[1,"row"],[1,"col-lg-3"],[1,"col-lg-9"],["type","button",1,"btn","btn-primary","me-2",3,"disabled","click"],[4,"ngIf"],["type","button","id","kt_layout_builder_reset",1,"btn","btn-active-light","btn-color-muted",3,"disabled","click"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(d,o){1&d&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.O4$(),e.TgZ(3,"svg",3),e._UZ(4,"path",4),e.qZA(),e.kcU(),e._UZ(5,"app-keenicon",5),e.qZA(),e.TgZ(6,"div",6)(7,"p",7),e._uU(8," The layout builder is to assist your set and configure your preferred project layout specifications and preview it in real-time and export the HTML template with its includable partials of this demo. The downloaded version does not include the assets folder since the layout builder's main purpose is to help to generate the final HTML code without hassle. Layout builder changes don't affect pages with layout wrappers. "),e.qZA()()()(),e.TgZ(9,"div",8)(10,"div",9)(11,"ul",10)(12,"li",11)(13,"a",12),e.NdJ("click",function(){return o.setActiveTab("Sidebar")}),e._uU(14," Sidebar "),e.qZA()(),e.TgZ(15,"li",11)(16,"a",12),e.NdJ("click",function(){return o.setActiveTab("Header")}),e._uU(17," Header "),e.qZA()(),e.TgZ(18,"li",11)(19,"a",12),e.NdJ("click",function(){return o.setActiveTab("Toolbar")}),e._uU(20," Toolbar "),e.qZA()()()(),e.TgZ(21,"form",13,14),e.NdJ("ngSubmit",function(){return o.submitPreview()}),e.TgZ(23,"div",15)(24,"div",16)(25,"div",17)(26,"div",18)(27,"div",19)(28,"h4",20),e._uU(29,"Fixed"),e.qZA(),e.TgZ(30,"div",21),e._uU(31,"Fixed sidebar mode"),e.qZA()(),e.TgZ(32,"div",22)(33,"div",23)(34,"div",24)(35,"input",25),e.NdJ("ngModelChange",function(t){return o.model.app.sidebar.default.fixed.desktop=t}),e.qZA()()()()(),e._UZ(36,"div",26),e.TgZ(37,"div",18)(38,"div",19)(39,"h4",20),e._uU(40,"Minimize"),e.qZA(),e.TgZ(41,"div",21),e._uU(42,"Sidebar minimize mode"),e.qZA()(),e.TgZ(43,"div",22)(44,"div",23)(45,"div",23)(46,"input",27),e.NdJ("ngModelChange",function(t){return o.model.app.sidebar.default.minimize.desktop.enabled=t}),e.qZA(),e.TgZ(47,"label",28),e._uU(48,"Minimize Toggle"),e.qZA()(),e.TgZ(49,"div",29)(50,"input",30),e.NdJ("ngModelChange",function(t){return o.model.app.sidebar.default.minimize.desktop.hoverable=t}),e.qZA(),e.TgZ(51,"label",31),e._uU(52,"Hoverable"),e.qZA()(),e.TgZ(53,"div",29)(54,"input",32),e.NdJ("ngModelChange",function(t){return o.model.app.sidebar.default.minimize.desktop.default=t}),e.qZA(),e.TgZ(55,"label",33),e._uU(56,"Default Minimized"),e.qZA()()()()()(),e.TgZ(57,"div",17)(58,"div",18)(59,"div",19)(60,"h4",20),e._uU(61,"Fixed"),e.qZA(),e.TgZ(62,"div",21),e._uU(63,"Fixed header mode"),e.qZA()(),e.TgZ(64,"div",22)(65,"div",23)(66,"div",24)(67,"input",34),e.NdJ("ngModelChange",function(t){return o.model.app.header.default.fixed.desktop=t}),e.qZA()()()()(),e._UZ(68,"div",26),e.TgZ(69,"div",18)(70,"div",19)(71,"h4",20),e._uU(72,"Content"),e.qZA(),e.TgZ(73,"div",21),e._uU(74,"Header content type"),e.qZA()(),e.TgZ(75,"div",22)(76,"div",35)(77,"input",36),e.NdJ("ngModelChange",function(t){return o.model.app.header.default.content=t}),e.qZA(),e.TgZ(78,"label",37),e._uU(79,"Menu"),e.qZA()(),e.TgZ(80,"div",35)(81,"input",38),e.NdJ("ngModelChange",function(t){return o.model.app.header.default.content=t}),e.qZA(),e.TgZ(82,"label",39),e._uU(83,"Page Title"),e.qZA()()()()(),e.TgZ(84,"div",17)(85,"div",18)(86,"div",19)(87,"h4",20),e._uU(88,"Fixed"),e.qZA(),e.TgZ(89,"div",21),e._uU(90,"Fixed toolbar mode"),e.qZA()(),e.TgZ(91,"div",22)(92,"div",22)(93,"div",40)(94,"input",41),e.NdJ("ngModelChange",function(t){return o.model.app.toolbar.fixed.desktop=t}),e.qZA(),e.TgZ(95,"label",42),e._uU(96,"Desktop Mode"),e.qZA()(),e.TgZ(97,"div",23)(98,"input",43),e.NdJ("ngModelChange",function(t){return o.model.app.toolbar.fixed.mobile=t}),e.qZA(),e.TgZ(99,"label",44),e._uU(100,"Mobile Mode"),e.qZA()()()()(),e._UZ(101,"div",26),e.TgZ(102,"div",45)(103,"h4",20),e._uU(104,"Layout"),e.qZA(),e.TgZ(105,"div",46),e._uU(106,"Select a toolbar layout"),e.qZA()(),e.TgZ(107,"div",47)(108,"label",48)(109,"div",49),e._UZ(110,"img",50),e.qZA(),e.TgZ(111,"div",51)(112,"input",52),e.NdJ("ngModelChange",function(t){return o.model.app.toolbar.layout=t}),e.qZA(),e.TgZ(113,"div",53),e._uU(114,"Classic"),e.qZA()()(),e.TgZ(115,"label",48)(116,"div",49),e._UZ(117,"img",54),e.qZA(),e.TgZ(118,"div",51)(119,"input",55),e.NdJ("ngModelChange",function(t){return o.model.app.toolbar.layout=t}),e.qZA(),e.TgZ(120,"div",53),e._uU(121,"SaaS"),e.qZA()()(),e.TgZ(122,"label",48)(123,"div",49),e._UZ(124,"img",56),e.qZA(),e.TgZ(125,"div",51)(126,"input",57),e.NdJ("ngModelChange",function(t){return o.model.app.toolbar.layout=t}),e.qZA(),e.TgZ(127,"div",53),e._uU(128,"Accounting"),e.qZA()()(),e.TgZ(129,"label",48)(130,"div",49),e._UZ(131,"img",58),e.qZA(),e.TgZ(132,"div",51)(133,"input",59),e.NdJ("ngModelChange",function(t){return o.model.app.toolbar.layout=t}),e.qZA(),e.TgZ(134,"div",53),e._uU(135,"Extended"),e.qZA()()(),e.TgZ(136,"label",48)(137,"div",49),e._UZ(138,"img",60),e.qZA(),e.TgZ(139,"div",51)(140,"input",61),e.NdJ("ngModelChange",function(t){return o.model.app.toolbar.layout=t}),e.qZA(),e.TgZ(141,"div",53),e._uU(142,"Reports"),e.qZA()()()()()()(),e.TgZ(143,"div",62)(144,"div",63),e._UZ(145,"div",64),e.TgZ(146,"div",65)(147,"button",66),e.NdJ("click",function(){return o.submitPreview()}),e.YNc(148,_,3,0,"ng-container",67)(149,v,4,3,"ng-container",67),e.qZA(),e.TgZ(150,"button",68),e.NdJ("click",function(){return o.resetPreview()}),e.YNc(151,k,3,0,"ng-container",67)(152,Z,4,3,"ng-container",67),e.qZA()()()()()()),2&d&&(e.xp6(13),e.Q6J("ngClass",e.VKq(31,p,"Sidebar"===o.activeTab)),e.xp6(3),e.Q6J("ngClass",e.VKq(33,p,"Header"===o.activeTab)),e.xp6(3),e.Q6J("ngClass",e.VKq(35,p,"Toolbar"===o.activeTab)),e.xp6(6),e.Q6J("ngClass",e.VKq(37,p,"Sidebar"===o.activeTab)),e.xp6(10),e.Q6J("ngModel",o.model.app.sidebar.default.fixed.desktop),e.xp6(11),e.Q6J("ngModel",o.model.app.sidebar.default.minimize.desktop.enabled),e.xp6(4),e.Q6J("ngModel",o.model.app.sidebar.default.minimize.desktop.hoverable),e.xp6(4),e.Q6J("ngModel",o.model.app.sidebar.default.minimize.desktop.default),e.xp6(3),e.Q6J("ngClass",e.VKq(39,p,"Header"===o.activeTab)),e.xp6(10),e.Q6J("ngModel",o.model.app.header.default.fixed.desktop),e.xp6(10),e.Q6J("ngModel",o.model.app.header.default.content),e.xp6(4),e.Q6J("ngModel",o.model.app.header.default.content),e.xp6(3),e.Q6J("ngClass",e.VKq(41,p,"Toolbar"===o.activeTab)),e.xp6(10),e.Q6J("ngModel",o.model.app.toolbar.fixed.desktop),e.xp6(4),e.Q6J("ngModel",o.model.app.toolbar.fixed.mobile),e.xp6(10),e.Q6J("ngClass",e.VKq(43,s,"classic"===o.model.app.toolbar.layout)),e.xp6(4),e.Q6J("ngModel",o.model.app.toolbar.layout),e.xp6(3),e.Q6J("ngClass",e.VKq(45,s,"saas"===o.model.app.toolbar.layout)),e.xp6(4),e.Q6J("ngModel",o.model.app.toolbar.layout),e.xp6(3),e.Q6J("ngClass",e.VKq(47,s,"accounting"===o.model.app.toolbar.layout)),e.xp6(4),e.Q6J("ngModel",o.model.app.toolbar.layout),e.xp6(3),e.Q6J("ngClass",e.VKq(49,s,"extended"===o.model.app.toolbar.layout)),e.xp6(4),e.Q6J("ngModel",o.model.app.toolbar.layout),e.xp6(3),e.Q6J("ngClass",e.VKq(51,s,"reports"===o.model.app.toolbar.layout)),e.xp6(4),e.Q6J("ngModel",o.model.app.toolbar.layout),e.xp6(7),e.Q6J("disabled",o.configLoading||o.resetLoading),e.xp6(1),e.Q6J("ngIf",!o.configLoading),e.xp6(1),e.Q6J("ngIf",o.configLoading),e.xp6(1),e.Q6J("disabled",o.configLoading||o.resetLoading),e.xp6(1),e.Q6J("ngIf",!o.resetLoading),e.xp6(1),e.Q6J("ngIf",o.resetLoading))},dependencies:[u.mk,u.O5,i._Y,i.Fj,i.Wl,i._,i.JJ,i.JL,i.On,i.F,b.q],encapsulation:2})}return a})();var y=l(4558),C=l(53),M=l(4955);let x=(()=>{class a{static \u0275fac=function(d){return new(d||a)};static \u0275mod=e.oAB({type:a});static \u0275inj=e.cJS({imports:[u.ez,i.u5,C.vi,y.HK,M.m,g.Bz.forChild([{path:"",component:T}])]})}return a})()}}]);