"use strict";(self.webpackChunksimple_crud=self.webpackChunksimple_crud||[]).push([[360],{8360:(S,k,i)=>{i.r(k),i.d(k,{BookModule:()=>q});var u=i(6895),c=i(3321),Z=i(4128),h=i(4004),o=i(8274),p=i(2340),d=i(8505),A=i(529);let f=(()=>{class t{constructor(e){this.http=e,this.book=[{id:1,name:"Angular tutorials",authors:["jovanie","cabatuan"],isbn:1234567810},{id:2,name:"Java Zero to Hero",authors:["jovanie","cabatuan","John","jovanie","cabatuan","John"],isbn:1234567810},{id:3,name:"React tutorials",authors:["jovanie","cabatuan"],isbn:1234567810}],this.setBook=n=>this.http.post(`${p.N.url}/books`,n).pipe((0,d.b)(s=>s)),this.editBook=n=>this.http.put(`${p.N.url}/books/${n.id}`,n).pipe((0,d.b)(s=>s)),this.getEditBook=n=>this.getBooks().pipe((0,h.U)(s=>s.filter(m=>m.id===n)))}getBooks(){return this.http.get(`${p.N.url}/books`).pipe((0,d.b)(e=>e))}delete(e){return this.http.delete(`${p.N.url}/books/${e}`).pipe((0,d.b)(n=>n))}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(A.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=i(3546),B=i(9835),g=i(4850),v=i(4859);function I(t,r){if(1&t&&(o.TgZ(0,"p"),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.Oqu(e)}}const T=function(t){return["form",t]};let F=(()=>{class t{constructor(){this.actionEmetter=new o.vpe,this.panelOpenState=!1,this.cardAction=e=>{this.actionEmetter.emit(e)}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-book-item"]],inputs:{bookItem:"bookItem"},outputs:{actionEmetter:"actionEmetter"},decls:30,vars:8,consts:[[1,"title-wrapper"],["mat-card-title","",1,"title"],[1,"author-container"],[4,"ngFor","ngForOf"],[1,"card-footer"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,n){1&e&&(o.TgZ(0,"div")(1,"mat-card-header",0)(2,"div",1),o._uU(3),o.qZA()(),o._UZ(4,"mat-divider"),o.TgZ(5,"mat-card-title-group")(6,"mat-card-subtitle"),o._uU(7,"ID"),o.qZA(),o.TgZ(8,"p"),o._uU(9),o.qZA()(),o.TgZ(10,"mat-card-title-group")(11,"mat-card-subtitle"),o._uU(12,"NAME"),o.qZA(),o.TgZ(13,"p"),o._uU(14),o.qZA()(),o.TgZ(15,"mat-card-title-group")(16,"mat-card-subtitle"),o._uU(17,"AUTHORS"),o.qZA(),o.TgZ(18,"div",2),o.YNc(19,I,2,1,"p",3),o.qZA()(),o.TgZ(20,"mat-card-title-group")(21,"mat-card-subtitle"),o._uU(22,"ISBN"),o.qZA(),o.TgZ(23,"p"),o._uU(24),o.qZA()()(),o.TgZ(25,"div",4)(26,"button",5),o._uU(27,"EDIT"),o.qZA(),o.TgZ(28,"button",6),o.NdJ("click",function(){return n.cardAction(null==n.bookItem?null:n.bookItem.id)}),o._uU(29,"DELETE"),o.qZA()()),2&e&&(o.xp6(3),o.Oqu(null==n.bookItem?null:n.bookItem.name),o.xp6(6),o.Oqu(null==n.bookItem?null:n.bookItem.id),o.xp6(5),o.Oqu(null==n.bookItem?null:n.bookItem.name),o.xp6(5),o.Q6J("ngForOf",null==n.bookItem?null:n.bookItem.authors),o.xp6(5),o.Oqu(null==n.bookItem?null:n.bookItem.isbn),o.xp6(2),o.Q6J("routerLink",o.VKq(6,T,null==n.bookItem?null:n.bookItem.id)))},dependencies:[u.sg,c.rH,l.dk,l.C1,l.n5,l.$j,g.d,v.lW]}),t})();function C(t,r){if(1&t){const e=o.EpF();o.TgZ(0,"mat-card",2)(1,"app-book-item",3),o.NdJ("actionEmetter",function(s){o.CHM(e);const m=o.oxw();return o.KtG(m.action(s))}),o.qZA()()}if(2&t){const e=r.$implicit;o.xp6(1),o.Q6J("bookItem",e)}}let y=(()=>{class t{constructor(e){this.bookService=e,this.books=[],this.deleteAllBook=()=>{for(let n of this.books)this.action(n.id)},this.sub=this.bookService.getBooks().subscribe(n=>{this.books=n})}ngOnInit(){}action(e){(0,Z.D)([this.bookService.delete(e),this.bookService.getBooks()]).pipe((0,h.U)(([n,s])=>{console.log(n,"all books"),this.books=s})).subscribe()}ngOnDestroy(){this.sub?.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(f))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-book-list"]],decls:3,vars:1,consts:[[3,"deleteAllEmitter"],["class","example-card flex-1",4,"ngFor","ngForOf"],[1,"example-card","flex-1"],[1,"app-book",3,"bookItem","actionEmetter"]],template:function(e,n){1&e&&(o.TgZ(0,"app-command-bar",0),o.NdJ("deleteAllEmitter",function(){return n.deleteAllBook()}),o.qZA(),o.TgZ(1,"section"),o.YNc(2,C,2,1,"mat-card",1),o.qZA()),2&e&&(o.xp6(2),o.Q6J("ngForOf",n.books))},dependencies:[u.sg,l.a8,B.H,F]}),t})();var a=i(4006);function N(t,r){1&t&&(o.TgZ(0,"div",3)(1,"label",15),o._uU(2,"ID"),o.qZA(),o.TgZ(3,"div",5),o._UZ(4,"input",16),o.qZA()())}function U(t,r){if(1&t){const e=o.EpF();o.TgZ(0,"div",17),o._UZ(1,"input",18),o.TgZ(2,"button",19),o.NdJ("click",function(){const m=o.CHM(e).index,b=o.oxw();return o.KtG(b.deleteAuthor(m))}),o._uU(3,"Del"),o.qZA()()}if(2&t){const e=r.index;o.xp6(1),o.Q6J("formControlName",e)}}const J=[{path:"",component:y},{path:"form/:id",component:(()=>{class t{constructor(e,n,s){this.fb=e,this.route=n,this.books=s,this.bookItems=[],this.addAuthor=()=>{this.authorsFormArray.push(new a.NI(""))},this.deleteAuthor=m=>{this.authorsFormArray.removeAt(m)},this.submit=()=>{const m=this.bookFormGroup.getRawValue();return"false"===this.paramId?this.books.setBook(m).subscribe():this.books.editBook(m).subscribe()},this.paramId=this.route.snapshot.paramMap.get("id"),this.bookFormGroup=this.fb.group({id:[],name:[],authors:this.fb.array([]),isbn:[]}),this.authorsFormArray=this.bookFormGroup.get("authors"),"false"===this.paramId?this.bookItems=[{id:0,name:"",isbn:0,authors:[""]}]:this.sub=s.getEditBook(parseInt(this.paramId)).subscribe(m=>{this.bookFormGroup.patchValue(m[0]);for(let b of m[0].authors)this.authorsFormArray.push(new a.NI(b))})}ngOnInit(){}ngOnDestroy(){this.sub?.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(a.qu),o.Y36(c.gz),o.Y36(f))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-book-form"]],decls:23,vars:3,consts:[[1,"container","d-flex","justify-content-center","align-items-center","card","m-4"],[1,"card-body","form","col-md-6",3,"formGroup"],["class","mb-3",4,"ngIf"],[1,"mb-3"],["for","name",1,"form-label"],[1,"col-sm-10"],["type","text","formControlName","name",1,"form-control"],["for","isbn",1,"form-label"],["type","text","formControlName","isbn",1,"form-control"],["formArrayName","authors"],["for","authors",1,"form-label"],["class","input-group mb-3",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"click"],[1,"mb-3","mt-4"],["type","button",1,"btn","btn-success",3,"click"],["for","id",1,"form-label"],["type","text","formControlName","id",1,"form-control"],[1,"input-group","mb-3"],["type","text",1,"form-control",3,"formControlName"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"form",1),o.YNc(2,N,5,0,"div",2),o.TgZ(3,"div",3)(4,"label",4),o._uU(5,"Name"),o.qZA(),o.TgZ(6,"div",5),o._UZ(7,"input",6),o.qZA()(),o.TgZ(8,"div",3)(9,"label",7),o._uU(10,"Isbn"),o.qZA(),o.TgZ(11,"div",5),o._UZ(12,"input",8),o.qZA()(),o.ynx(13,9),o.TgZ(14,"div",3)(15,"label",10),o._uU(16,"Authors"),o.qZA(),o.YNc(17,U,4,1,"div",11),o.qZA(),o.TgZ(18,"button",12),o.NdJ("click",function(){return n.addAuthor()}),o._uU(19," Add Author "),o.qZA(),o.BQk(),o.TgZ(20,"div",13)(21,"button",14),o.NdJ("click",function(){return n.submit()}),o._uU(22,"Save"),o.qZA()()()()),2&e&&(o.xp6(1),o.Q6J("formGroup",n.bookFormGroup),o.xp6(1),o.Q6J("ngIf",""===n.paramId),o.xp6(15),o.Q6J("ngForOf",n.authorsFormArray.controls))},dependencies:[u.sg,u.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,a.CE]}),t})()}];let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Bz.forChild(J),u.ez,c.Bz]}),t})();var E=i(782),O=i(1075);let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[a.qu],imports:[u.ez,_,l.QW,g.t,E.N6,v.ot,O.m,a.u5,a.UX]}),t})()}}]);