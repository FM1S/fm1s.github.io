(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,a){e.exports=a(420)},411:function(e,t,a){},420:function(e,t,a){"use strict";a.r(t);a(219),a(221);var n=a(0),o=a.n(n),c=a(49),r=a.n(c),i=a(41),l=a(167),s=a(27),u=a(18),p=a(8),d=a(74),m=a(37),h=a.n(m),v=a(66),b=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}},O=function(e,t){return t.access_token=be.getState().vkui.accessToken,t.v=void 0===t.v?"5.92":t.v,v.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then(function(e){return e.data.response}).catch(function(e){return e})},y={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},f={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},E={forms:[]},g=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,o=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:o}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var o=e.panelsHistory[a]||[],c=e.viewsHistory[e.activeStory]||[],r=c.indexOf(a);return-1!==r&&c.splice(r,1),-1===o.indexOf(n)&&(o=[].concat(Object(d.a)(o),[n])),o.length>1&&v.a.send("VKWebAppEnableSwipeBack",{}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,o)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(c),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],m=e.panelsHistory[s]||[t.payload.initial_panel],h=m[m.length-1];if(t.payload.story===e.activeStory)if(m.length>1){var b=m.shift();h=(m=[b])[m.length-1]}else if(i.length>1){var O=i.shift();s=(i=[O])[i.length-1],h=(m=e.panelsHistory[s])[m.length-1]}return t.payload.story===e.activeStory&&1===m.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===l.indexOf(t.payload.story)||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(d.a)(l),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:h,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,m)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var f=e.activeView,E=e.activePanel,g=e.activeStory,j=e.popouts;if(j[f])return j[f]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:j})});var k=e.modalHistory[f];if(void 0!==k&&0!==k.length){var S=k[k.length-2]||null;return null===S?k=[]:-1!==k.indexOf(S)?k=k.splice(0,k.indexOf(S)+1):k.push(S),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},f,S)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},f,k))})}var w=e.panelsHistory[f]||[],T=e.viewsHistory[e.activeStory]||[],_=e.storiesHistory;if(w.length>1)w.pop(),E=w[w.length-1];else if(T.length>1){T.pop(),f=T[T.length-1];var A=e.panelsHistory[f];E=A[A.length-1]}else if(_.length>1&&"Android"===t.payload.from){_.pop(),g=_[_.length-1],f=e.viewsHistory[g][e.viewsHistory[g].length-1];var C=e.panelsHistory[f];E=C.length>1?C[C.length-1]:C[0]}else v.a.send("VKWebAppClose",{status:"success"});return 1===w.length&&"iOS"===t.payload.from&&v.a.send("VKWebAppDisableSwipeBack",{}),Object(p.a)({},e,{activeView:f,activePanel:E,activeStory:g,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,T)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,w))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var P=t.payload.id||null,H=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===P?H=[]:-1!==H.indexOf(P)?H=H.splice(0,H.indexOf(P)+1):H.push(P),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,P)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,H))});case"CLOSE_MODAL":var V=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,I=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===V?I=[]:-1!==I.indexOf(V)?I=I.splice(0,I.indexOf(V)+1):I.push(V),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,V)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,I))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),j=a(169),k=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},S=function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},w=function(){return{type:"GO_BACK",payload:{from:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iOS"}}},T=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},_=function(){return{type:"CLOSE_POPOUT"}},A=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},C=function(){return{type:"CLOSE_MODAL"}},P=(a(410),a(411),a(24)),H=a(25),V=a(28),I=a(26),M=a(29),D=a(4),B=a(179),x=a.n(B),L=a(180),G=a.n(L),N=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={showImg:!1},a.showImg=function(){a.setState({showImg:!0})},a}return Object(M.a)(t,e),Object(H.a)(t,[{key:"openPopout",value:function(){var e=this;this.props.openPopout(o.a.createElement(D.a,{actions:[{title:"\u041d\u0435\u0442",autoclose:!0,style:"cancel"},{title:"\u0414\u0430",autoclose:!0,action:this.showImg}],onClose:function(){return e.props.closePopout()}},o.a.createElement("h2",null,"\u0412\u043e\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0438\u0442"),o.a.createElement("p",null,"\u0412\u0430\u0441 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?")))}},{key:"tryMe",value:function(){h.a.subscribe(function(e){return console.log(e)}),h.a.send("VKWebAppInit",{}),h.a.send("VKWebAppGetFriends",{})}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.setPage,c=t.withoutEpic;return o.a.createElement(D.w,{id:a},o.a.createElement(D.x,null,"Examples"),o.a.createElement(D.m,null,o.a.createElement(D.h,null,o.a.createElement(D.c,{size:"l",stretched:!0,onClick:function(){return n("home","groups")}},"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0438\u0445 \u0433\u0440\u0443\u043f\u043f")),o.a.createElement(D.h,null,o.a.createElement(D.c,{size:"l",stretched:!0,onClick:function(){return e.openPopout()}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0430\u043b\u0435\u0440\u0442")),o.a.createElement(D.h,null,o.a.createElement(D.c,{size:"l",stretched:!0,onClick:function(){return e.props.openModal("MODAL_PAGE_BOTS_LIST")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")),o.a.createElement(D.h,null,o.a.createElement(D.c,{size:"l",stretched:!0,onClick:function(){return e.tryMe()}},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0442\u043e\u0440\u0438\u0437")),c&&o.a.createElement(D.h,null,o.a.createElement(D.c,{size:"l",stretched:!0,onClick:function(){return n("modal","filters")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e")),this.state.showImg&&o.a.createElement(D.h,{className:"div-center"},o.a.createElement("img",{src:"https://vk.com/sticker/1-12676-256",alt:"\u0421\u0442\u0438\u043a\u0435\u0440 VK"}))))}}]),t}(o.a.Component),K={setPage:S,goBack:w,openPopout:T,closePopout:_,openModal:A},z=Object(s.b)(null,K)(N),F=a(130),W=a.n(F),R=a(181),U=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.photo,n=e.name,c=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return o.a.createElement(D.d,{description:c,before:o.a.createElement(D.b,{size:40,src:a})},n)}}]),t}(n.PureComponent),Y=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map(function(e){return o.a.createElement(U,{key:e.id,description:e.description,photo:e.photo_100,name:e.name})})),t},q=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(M.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){v.a.send("VKWebAppGetAuthToken",{app_id:6984089,scope:e.join(",")}).then(function(e){t(b(e.data.access_token))}).catch(function(){t(b(null))})}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(R.a)(W.a.mark(function e(){var t,a,n;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){e.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),e.abrupt("return");case 3:return e.next=5,O("groups.get",{extended:"1",fields:"description",count:"100"});case 5:t=e.sent,a=t.items.filter(function(e){return 1===e.is_admin}),n=t.items.filter(function(e){return 0===e.is_admin}),localStorage.setItem("userGroupsAdmined",JSON.stringify(a)),localStorage.setItem("userGroupsOther",JSON.stringify(n)),this.setState({groups:{admined:a,other:n},loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,c=Y(this.state.groups.admined),r=Y(this.state.groups.other);return o.a.createElement(D.w,{id:a},o.a.createElement(D.x,{left:o.a.createElement(D.y,{onClick:function(){return n()}})},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.loading&&o.a.createElement(D.z,null),!this.state.loading&&this.state.errorGetAuthToken&&o.a.createElement(D.m,null,o.a.createElement(D.h,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."),o.a.createElement(D.h,null,o.a.createElement(D.c,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&c&&o.a.createElement(D.m,{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435"},o.a.createElement(D.s,null,c)),!this.state.loading&&!this.state.errorGetAuthToken&&r&&o.a.createElement(D.m,{title:"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435"},o.a.createElement(D.s,null,r)))}}]),t}(o.a.Component);var J=Object(s.b)(function(e){return{accessToken:e.vkui.accessToken}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:w,openPopout:T,closePopout:_,openModal:A},e))})(q),X=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(V.a)(this,Object(I.a)(t).call(this,e))).state={activeTab:e.activeTab.EXAMPLE||"modal"},a}return Object(M.a)(t,e),Object(H.a)(t,[{key:"setTab",value:function(e){this.setState({activeTab:e})}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.setScrollPositionByID;(0,e.setActiveTab)("EXAMPLE",this.state.activeTab),t("EXAMPLE_TABS_LIST")}},{key:"componentDidMount",value:function(){!function(){var e=be.getState().vkui.componentScroll;Object.keys(e).forEach(function(t){var a=e[t],n=document.getElementById(t);n&&((n=n.getElementsByClassName("HorizontalScroll__in")[0]).scrollLeft=a.x,n.scrollTop=a.y)})}()}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.setPage;return o.a.createElement(D.w,{id:a},o.a.createElement(D.x,{noShadow:!0},"Examples 2"),o.a.createElement(D.j,{vertical:"top"},o.a.createElement(D.D,{theme:"header",type:"buttons"},o.a.createElement(D.o,{id:"EXAMPLE_TABS_LIST"},o.a.createElement(D.E,{onClick:function(){return e.setTab("modal")},selected:"modal"===this.state.activeTab},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(D.E,{onClick:function(){return e.setTab("test")},selected:"test"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430"),o.a.createElement(D.E,{onClick:function(){return e.setTab("test2")},selected:"test2"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430 2"),o.a.createElement(D.E,{onClick:function(){return e.setTab("test3")},selected:"test3"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430 3")))),o.a.createElement(D.m,{style:{marginTop:56}},"modal"===this.state.activeTab&&o.a.createElement(D.e,{onClick:function(){return n("modal","filters")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),"modal"!==this.state.activeTab&&o.a.createElement(D.h,null,this.state.activeTab)))}}]),t}(o.a.Component),Z={setPage:S,setActiveTab:function(e,t){return{type:"SET_ACTIVE_TAB",payload:{component:e,tab:t}}},setScrollPositionByID:function(e){return{type:"SET_SCROLL_POSITION_BY_ID",payload:{component:e}}}},Q=Object(s.b)(function(e){return{activeTab:e.vkui.activeTab}},Z)(X),$=function(e){function t(e){var a;Object(P.a)(this,t),a=Object(V.a)(this,Object(I.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(M.a)(t,e),Object(H.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return o.a.createElement(D.w,{id:t},o.a.createElement(D.x,{left:o.a.createElement(D.y,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(D.m,null,o.a.createElement(D.k,null,o.a.createElement(D.l,{top:"\u0420\u0430\u0431\u043e\u0442\u0430"},o.a.createElement(D.r,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b",autoComplete:"off"}),o.a.createElement(D.r,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autoComplete:"off"})),o.a.createElement(D.l,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},o.a.createElement(D.f,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"),o.a.createElement(D.f,{checked:this.state.inputData.checkboxOnline,onChange:this.handleInput,name:"checkboxOnline"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"))),o.a.createElement(D.h,{className:"buttons-group"},o.a.createElement(D.c,{size:"l",stretched:!0,onClick:function(){return a()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement(D.c,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(o.a.Component),ee={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:w},te=Object(s.b)(function(e){return{inputData:e.formData.forms}},ee)($),ae=a(93),ne=a.n(ae),oe=a(73),ce=a.n(oe),re=a(92),ie=a.n(re),le=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Callback API \u0411\u043e\u0442",avatar:"https://pp.userapi.com/c846523/v846523036/1e69b7/UxWZ1yAqY7I.jpg",desc:"\u0414\u0430\u0436\u0435 \u043d\u0435 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0439"}],se=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.openModal;return o.a.createElement(D.t,{id:t,header:o.a.createElement(D.u,{left:!D.p&&o.a.createElement(D.n,{onClick:a},o.a.createElement(ce.a,null)),right:D.p&&o.a.createElement(D.n,{onClick:a},o.a.createElement(ne.a,null))},"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"),onClose:a,settlingHeight:80},o.a.createElement(D.s,null,le.map(function(e,t){return o.a.createElement(D.d,{key:t,description:e.desc,before:o.a.createElement(D.b,{size:40,src:e.avatar}),onClick:function(){return n("MODAL_PAGE_BOT_INFO")},asideContent:o.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})))}}]),t}(o.a.Component),ue={openModal:A},pe=Object(s.b)(null,ue)(se),de=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose;return o.a.createElement(D.t,{id:t,header:o.a.createElement(D.u,{left:!D.p&&o.a.createElement(D.n,{onClick:a},o.a.createElement(ce.a,null)),right:D.p&&o.a.createElement(D.n,{onClick:a},o.a.createElement(ne.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},o.a.createElement(D.d,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:o.a.createElement(D.b,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),o.a.createElement(D.s,null,o.a.createElement(D.d,null,o.a.createElement(D.q,{title:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),o.a.createElement(D.d,null,o.a.createElement(D.q,{title:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),o.a.createElement(D.d,null,o.a.createElement(D.q,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(o.a.Component),me=Object(s.b)()(de),he=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(V.a)(this,Object(I.a)(t).call(this,e))).lastAndroidBackAction=0,a}return Object(M.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){h.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(h.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),v.a.send("VKWebAppInit",{})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a("Android")):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,o=n.activeView,c=n.activeStory,r=n.activePanel,i=n.scrollPosition;if(e.activeView!==o||e.activePanel!==r||e.activeStory!==c){var l=i[c+"_"+o+"_"+r]||0;window.scroll(0,l)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,c=e.popouts,r=e.activeView,i=e.activeStory,l=e.activePanel,s=e.activeModals,u=e.panelsHistory,p=e.colorScheme,d=void 0===u[r]?[r]:u[r],m=void 0===c[r]?null:c[r],h=void 0===s[r]?null:s[r],v=o.a.createElement(D.v,{activeModal:h},o.a.createElement(pe,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),o.a.createElement(me,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}}));return o.a.createElement(D.g,{isWebView:!0,scheme:p},o.a.createElement(D.i,{activeStory:i,tabbar:o.a.createElement(D.B,null,o.a.createElement(D.C,{onClick:function(){return a("home","base")},selected:"home"===i},o.a.createElement(x.a,null)),o.a.createElement(D.C,{onClick:function(){return a("more","callmodal")},selected:"more"===i},o.a.createElement(G.a,null)))},o.a.createElement(D.A,{id:"home",activeView:r,popout:m},o.a.createElement(D.F,{id:"home",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(z,{id:"base",withoutEpic:!1}),o.a.createElement(J,{id:"groups"}))),o.a.createElement(D.A,{id:"more",activeView:r,popout:m},o.a.createElement(D.F,{id:"more",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(Q,{id:"callmodal"})),o.a.createElement(D.F,{id:"modal",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(te,{id:"filters"})))))}}]),t}(o.a.Component);var ve=Object(s.b)(function(e){return{activeView:e.router.activeView,activePanel:e.router.activePanel,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({setStory:k,goBack:w,closeModal:C},e))})(he);a.d(t,"store",function(){return be});var be=Object(i.createStore)(g,Object(j.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));be.dispatch(k("home","base")),r.a.render(o.a.createElement(s.a,{store:be},o.a.createElement(ve,null)),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.8d9d6c66.chunk.js.map