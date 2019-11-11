(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{xDz6:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),i=function(){return function(){}}(),u=e("pMnS"),o=e("Ip0R"),r=e("s616"),s=e("rcVj"),a=e("FdbF"),c=e("iJXZ"),d=e("ZYjt"),m=e("pugT"),p=e("t9fZ"),f=e("dJ3e"),g=e("M0ag"),h=e("ey9i"),b=new f.a("ExamComponent"),v=function(){function n(n,l,e,t,i,u,o,r,s,a,c){this.simpleModalService=n,this.moment=l,this.countdownService=e,this.syncCountdownTimeService=t,this.prismService=i,this.ngxUiLoaderService=u,this.questionService=o,this.toastrService=r,this.location=s,this.localStorageService=a,this.router=c,this.markForReviewArray=[]}return Object.defineProperty(n.prototype,"questionsArray",{get:function(){return this.exam.questionsArray},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"currentExam",{get:function(){return this.exam},enumerable:!0,configurable:!0}),n.prototype.canExit=function(){var n=this;if(this.exam.finished)return!0;var l=this.simpleModalService.addModal(g.a,{title:"Confirm",message:"Do you wish to finish the current exam?"}).pipe(Object(p.a)(1)).subscribe((function(l){return!!l&&(n.finishExam(),!0)}));setTimeout((function(){l instanceof m.a&&l.unsubscribe()}),1e4)},n.prototype.ngOnInit=function(){var n=this;this.exam=new h.a;var l=this.moment(this.exam.startAt),e=this.moment(l).add(5400,"seconds");this.countdownSubscription=this.countdownService.countdown().subscribe((function(l){3600===l&&n.toastrService.success("You have another hour to finish the exam","Time left"),1800===l&&n.toastrService.success("You have another 30 minutes to finish the exam","Time left"),600===l&&n.toastrService.success("You have another 10 minutes to finish the exam","Time left"),300===l&&n.toastrService.success("You have less than 5 minutes to finish the exam","Times left!");var t=n.syncCountdownTimeService.getValue();t.time=n.getTimeString(e),n.syncCountdownTimeService.setValue(t)}),(function(n){return b.error(n)}),(function(){return n.finishExam()})),this.countdownService.start(5400),this.toastrService.success("You have 90 minutes to finish your exam. Good luck!","Exam simulation start!")},n.prototype.ngAfterViewChecked=function(){this.isNew&&!this.highlighted&&(this.prismService.highlightAll(),this.highlighted=!0)},n.prototype.ngOnDestroy=function(){this.countdownSubscriptionUnsubscribe()},n.prototype.setBtnClasses=function(n){var l=!1;for(var e in this.exam.questions)this.exam.questions.hasOwnProperty(n)&&(l=!0);return this.index===n?{"btn-danger":!0}:this.index!==n&&-1!==this.markForReviewArray.indexOf(n)?{"btn-warning":!0}:this.index!==n&&l?{"btn-success":!0}:{}},n.prototype.getQuestion=function(n,l){var e=this;this.reset(),this.index=l,void 0===this.exam.questions[l]?this.questionService.getOneQuestionById(n).pipe(Object(p.a)(1)).subscribe((function(t){var i={id:n,question:t,markForReview:!1,correct:!1};e.exam.setQuestion(l,i),e.setCurrentQuestion(i)}),(function(n){return b.error(n)})):this.setCurrentQuestion(this.exam.questions[l])},n.prototype.disabledPrevBtn=function(){return void 0===this.index||this.index<=0},n.prototype.disabledMarkForReviewBtn=function(){return void 0===this.index},n.prototype.disabledNextBtn=function(){return void 0===this.index||this.index>=69},n.prototype.getPrevQuestion=function(){var n=--this.index;this.getQuestion(this.exam.questionsArray[n],n)},n.prototype.getNextQuestion=function(){var n=++this.index;this.getQuestion(this.exam.questionsArray[n],n)},n.prototype.markForReview=function(){var n=this.markForReviewArray.indexOf(this.index);-1===n?this.markForReviewArray.push(this.index):this.markForReviewArray.splice(n,1)},n.prototype.goToHome=function(){var n=this.location.prepareExternalUrl(this.location.path());-1!==["#/exam","#/zce/exam"].indexOf(n)&&this.router.navigate(["/home"]).then()},n.prototype.finishExam=function(){this.countdownSubscriptionUnsubscribe(),this.validateCurrentExamQuestion(),this.exam.finish();var n=this,l={next:function(){n.goToHome()},error:function(n){b.error(n)},complete:function(){b.info("You answered correctly to "+n.exam.score+" questions from 70")}};this.exam.score>=50?this.toastrService.success("Congratulations you passed the exam!","Exam result!",{closeButton:!0}).onHidden.subscribe(l):this.toastrService.warning("You did not passed the exam!","Exam result!",{closeButton:!0}).onHidden.subscribe(l)},n.prototype.getTimeString=function(n){var l=this.moment(),e=this.moment.duration(n.diff(l));return e.hours().toString().padStart(2,"0")+":"+e.minutes().toString().padStart(2,"0")+":"+e.seconds().toString().padStart(2,"0")},n.prototype.validateCurrentExamQuestion=function(){void 0!==this.examQuestion&&(this.examQuestion.correct=this.examQuestion.question.validate(!1))},n.prototype.setCurrentQuestion=function(n){var l=this;this.examQuestion=n,setTimeout((function(){l.isNew=!0,l.ngxUiLoaderService.stopAll()}),250)},n.prototype.reset=function(){this.validateCurrentExamQuestion(),this.ngxUiLoaderService.start(),this.isNew=!1,this.highlighted=!1},n.prototype.countdownSubscriptionUnsubscribe=function(){this.countdownSubscription instanceof m.a&&this.countdownSubscription.unsubscribe()},n}(),x=e("fQEC"),y=e("revU"),C=e("GA1s"),w=e("NmCd"),R=e("zO6L"),k=e("SZbH"),S=e("Ug4g"),I=e("ZYCi"),O=t["ɵcrt"]({encapsulation:0,styles:[[".modal[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);bottom:0;height:100%;left:0;overflow:hidden;padding:0 16px;position:fixed;right:0;top:0;text-align:center;z-index:10}.modal.fade-anim[_ngcontent-%COMP%]{transition:opacity .4s ease-in-out;will-change:opacity;opacity:0}.modal.fade-anim.in[_ngcontent-%COMP%]{opacity:1}.modal-open[_ngcontent-%COMP%]{overflow:hidden}.modal-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;margin:16px auto;max-width:580px;position:relative;transition:opacity .4s ease-in-out;width:100%;will-change:opacity;display:inline-block;text-align:left}.modal-content-size-m[_ngcontent-%COMP%]{max-width:992px}.modal-content-size-l[_ngcontent-%COMP%]{max-width:1200px}.modal-footer[_ngcontent-%COMP%], .modal-header[_ngcontent-%COMP%]{align-items:center;display:flex;height:56px;padding:0 16px}.modal-header[_ngcontent-%COMP%]{border-bottom:1px solid #cecece}.modal-body[_ngcontent-%COMP%]{padding:16px}.modal-footer[_ngcontent-%COMP%]{border-top:1px solid #cecece}@media (max-width:768px){.scroll-area-x[_ngcontent-%COMP%]{margin:0 10px;overflow-x:scroll}}"]],data:{}});function N(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,4,"button",[["class","btn btn-sm btn-primary"],["style","width: 30px"],["type","button"]],[[8,"title",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.getQuestion(n.context.$implicit,n.context.index)&&t),t}),null,null)),t["ɵprd"](512,null,o["ɵNgClassImpl"],o["ɵNgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["ɵdid"](2,278528,null,0,o.NgClass,[o["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t["ɵeld"](3,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),t["ɵted"](4,null,["",""]))],(function(n,l){n(l,2,0,"btn btn-sm btn-primary",l.component.setBtnClasses(l.context.index))}),(function(n,l){n(l,0,0,t["ɵinlineInterpolate"](1,"",l.context.$implicit,"")),n(l,4,0,l.context.index+1)}))}function E(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,4,"button",[["class","btn btn-sm btn-primary"],["style","width: 30px"],["type","button"]],[[8,"title",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.getQuestion(n.context.$implicit,n.context.index+35)&&t),t}),null,null)),t["ɵprd"](512,null,o["ɵNgClassImpl"],o["ɵNgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["ɵdid"](2,278528,null,0,o.NgClass,[o["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t["ɵeld"](3,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),t["ɵted"](4,null,["",""]))],(function(n,l){n(l,2,0,"btn btn-sm btn-primary",l.component.setBtnClasses(l.context.index+35))}),(function(n,l){n(l,0,0,t["ɵinlineInterpolate"](1,"",l.context.$implicit,"")),n(l,4,0,l.context.index+36)}))}function F(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,8,"div",[["class","col-lg-12 col-md-12 scroll-area-x"]],null,null,null,null,null)),(n()(),t["ɵeld"](1,0,null,null,3,"div",[["class","btn-toolbar"],["role","toolbar"],["style","margin: 5px"]],null,null,null,null,null)),(n()(),t["ɵeld"](2,0,null,null,2,"div",[["class","btn-group"],["role","group"]],null,null,null,null,null)),(n()(),t["ɵand"](16777216,null,null,1,null,N)),t["ɵdid"](4,278528,null,0,o.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["ɵeld"](5,0,null,null,3,"div",[["class","btn-toolbar"],["role","toolbar"],["style","margin: 5px"]],null,null,null,null,null)),(n()(),t["ɵeld"](6,0,null,null,2,"div",[["class","btn-group"],["role","group"]],null,null,null,null,null)),(n()(),t["ɵand"](16777216,null,null,1,null,E)),t["ɵdid"](8,278528,null,0,o.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,4,0,e.questionsArray.slice(0,35)),n(l,8,0,e.questionsArray.slice(35,70))}),null)}function T(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"div",[["style","margin-top: 50px"]],null,null,null,null,null)),(n()(),t["ɵeld"](1,0,null,null,1,"app-question-display",[],null,null,null,r.b,r.a)),t["ɵdid"](2,114688,null,0,s.a,[],{question:[0,"question"]},null)],(function(n,l){n(l,2,0,l.component.examQuestion.question)}),null)}function P(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"div",[["class","col-lg-12 col-md-12"]],null,null,null,null,null)),(n()(),t["ɵand"](16777216,null,null,1,null,T)),t["ɵdid"](2,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,l.component.examQuestion)}),null)}function M(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"div",[["class","row"],["style","margin-top: 10px"]],null,null,null,null,null)),(n()(),t["ɵand"](16777216,null,null,1,null,P)),t["ɵdid"](2,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,l.component.isNew)}),null)}function Q(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,["Mark for review"]))],null,null)}function A(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,["Unmark for review"]))],null,null)}function q(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,17,"div",[["class","row"],["style","margin-top: 10px"]],null,null,null,null,null)),(n()(),t["ɵeld"](1,0,null,null,4,"div",[["class","col-lg-4 col-md-4"]],null,null,null,null,null)),(n()(),t["ɵeld"](2,0,null,null,3,"div",[["class","card"]],null,null,null,null,null)),(n()(),t["ɵeld"](3,0,null,null,2,"div",[["class","card-footer"]],null,null,null,null,null)),(n()(),t["ɵeld"](4,0,null,null,1,"button",[["class","btn btn-sm btn-primary btn-block"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.getPrevQuestion()&&t),t}),null,null)),(n()(),t["ɵted"](-1,null,["PREVIEW "])),(n()(),t["ɵeld"](6,0,null,null,6,"div",[["class","col-lg-4 col-md-4"]],null,null,null,null,null)),(n()(),t["ɵeld"](7,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(n()(),t["ɵeld"](8,0,null,null,4,"div",[["class","card-footer"]],null,null,null,null,null)),(n()(),t["ɵeld"](9,0,null,null,3,"button",[["class","btn btn-sm btn-warning btn-block"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.markForReview()&&t),t}),null,null)),(n()(),t["ɵand"](16777216,null,null,1,null,Q)),t["ɵdid"](11,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t["ɵand"](0,[["elseBlock",2]],null,0,null,A)),(n()(),t["ɵeld"](13,0,null,null,4,"div",[["class","col-lg-4 col-md-4"]],null,null,null,null,null)),(n()(),t["ɵeld"](14,0,null,null,3,"div",[["class","card"]],null,null,null,null,null)),(n()(),t["ɵeld"](15,0,null,null,2,"div",[["class","card-footer"]],null,null,null,null,null)),(n()(),t["ɵeld"](16,0,null,null,1,"button",[["class","btn btn-sm btn-primary btn-block"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.getNextQuestion()&&t),t}),null,null)),(n()(),t["ɵted"](-1,null,["NEXT "]))],(function(n,l){var e=l.component;n(l,11,0,-1===e.markForReviewArray.indexOf(e.index),t["ɵnov"](l,12))}),(function(n,l){var e=l.component;n(l,4,0,e.disabledPrevBtn()),n(l,9,0,e.disabledMarkForReviewBtn()),n(l,16,0,e.disabledNextBtn())}))}function _(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,6,"div",[["class","row"],["style","margin-top: 10px"]],null,null,null,null,null)),(n()(),t["ɵeld"](1,0,null,null,5,"div",[["class","col-lg-12 col-md-12"]],null,null,null,null,null)),(n()(),t["ɵeld"](2,0,null,null,4,"div",[["class","card"]],null,null,null,null,null)),(n()(),t["ɵeld"](3,0,null,null,3,"div",[["class","card-footer"]],null,null,null,null,null)),(n()(),t["ɵeld"](4,0,null,null,2,"button",[["class","btn btn-sm btn-danger btn-block"],["type","button"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goToHome()&&t),t}),null,null)),(n()(),t["ɵeld"](5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["ɵted"](-1,null,["Finish Exam"]))],null,null)}function V(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,11,"div",[["style","min-height: 644px!important;"]],null,null,null,null,null)),(n()(),t["ɵeld"](1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["ɵand"](16777216,null,null,1,null,F)),t["ɵdid"](3,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵand"](16777216,null,null,1,null,M)),t["ɵdid"](5,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵand"](16777216,null,null,1,null,q)),t["ɵdid"](7,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵand"](16777216,null,null,1,null,_)),t["ɵdid"](9,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵeld"](10,0,null,null,1,"ngx-ui-loader",[],null,null,null,a.b,a.a)),t["ɵdid"](11,770048,null,0,c.f,[d.b,t.ChangeDetectorRef,c.d],null,null)],(function(n,l){var e=l.component;n(l,3,0,!e.currentExam.finished),n(l,5,0,!e.currentExam.finished),n(l,7,0,!e.currentExam.finished&&void 0!==e.examQuestion),n(l,9,0,!e.currentExam.finished),n(l,11,0)}),null)}function B(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"app-exam",[],null,null,null,V,O)),t["ɵdid"](1,8634368,null,0,v,[x.d,"moment",y.a,C.a,w.a,c.d,R.a,k.j,o.Location,S.a,I.o],null,null)],(function(n,l){n(l,1,0)}),null)}var D=t["ɵccf"]("app-exam",v,B,{},{},[]),L=e("E7op"),z=e("bPR9"),U=e("gIcY"),j=e("t/Na"),Y={title:"ZCE - Exam"},Z={title:"ZCE - Page not found!"},H=function(){return function(){}}(),X=e("PCNd"),J=e("Vh3z");e.d(l,"ExamModuleNgFactory",(function(){return K}));var K=t["ɵcmf"](i,[],(function(n){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[u.a,D,L.a,L.b,z.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[t.LOCALE_ID,[2,o["ɵangular_packages_common_common_a"]]]),t["ɵmpd"](5120,x.d,x.i,[t.ComponentFactoryResolver,t.ApplicationRef,t.Injector,x.e]),t["ɵmpd"](135680,v,v,[x.d,"moment",y.a,C.a,w.a,c.d,R.a,k.j,o.Location,S.a,I.o]),t["ɵmpd"](4608,U.c,U.c,[]),t["ɵmpd"](4608,j.h,j.n,[o.DOCUMENT,t.PLATFORM_ID,j.l]),t["ɵmpd"](4608,j.o,j.o,[j.h,j.m]),t["ɵmpd"](5120,j.a,(function(n){return[n]}),[j.o]),t["ɵmpd"](4608,j.k,j.k,[]),t["ɵmpd"](6144,j.i,null,[j.k]),t["ɵmpd"](4608,j.g,j.g,[j.i]),t["ɵmpd"](6144,j.b,null,[j.g]),t["ɵmpd"](4608,j.f,j.j,[j.b,t.Injector]),t["ɵmpd"](4608,j.c,j.c,[j.f]),t["ɵmpd"](1073742336,o.CommonModule,o.CommonModule,[]),t["ɵmpd"](1073742336,I.q,I.q,[[2,I.v],[2,I.o]]),t["ɵmpd"](1073742336,H,H,[]),t["ɵmpd"](1073742336,U.b,U.b,[]),t["ɵmpd"](1073742336,U.a,U.a,[]),t["ɵmpd"](1073742336,j.e,j.e,[]),t["ɵmpd"](1073742336,j.d,j.d,[]),t["ɵmpd"](1073742336,c.b,c.b,[]),t["ɵmpd"](1073742336,x.c,x.c,[]),t["ɵmpd"](1073742336,X.a,X.a,[]),t["ɵmpd"](1073742336,i,i,[]),t["ɵmpd"](1024,I.m,(function(){return[[{path:"",component:v,canDeactivate:[J.a],data:Y},{path:"**",redirectTo:"/page-not-found",data:Z}]]}),[]),t["ɵmpd"](256,x.e,{container:null},[]),t["ɵmpd"](256,j.l,"XSRF-TOKEN",[]),t["ɵmpd"](256,j.m,"X-XSRF-TOKEN",[]),t["ɵmpd"](256,x.a,x.f,[]),t["ɵmpd"](256,c.e,{bgsColor:"#00ACC1",bgsOpacity:.5,bgsPosition:"center-center",bgsSize:60,bgsType:"rectangle-bounce-pulse-out",blur:5,fgsColor:"#bc75ea",fgsPosition:"center-center",fgsSize:100,fgsType:"cube-grid",gap:24,logoPosition:"center-center",logoSize:120,logoUrl:"",masterLoaderId:"master",overlayBorderRadius:"0",overlayColor:"rgba(40, 40, 40, 0.8)",pbColor:"#00ACC1",pbDirection:"ltr",pbThickness:3,hasProgressBar:!0,text:"loading ...",textColor:"#FFFFFF",textPosition:"center-center"},[])])}))}}]);