(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports={root:"basePage_root__ac3SP",fadeInStart:"basePage_fadeInStart__kZH8U",fadeOutStart:"basePage_fadeOutStart__2JtgM"}},110:function(e,t,n){e.exports={confirmAndAlertDemo:"home_confirmAndAlertDemo__2Tlfo",exampleServiceDemo:"home_exampleServiceDemo__3-KFU",ttsDemo:"home_ttsDemo__3dEu7"}},111:function(e,t,n){e.exports={loadingIndicatorWrapper:"LoadingIndicator_loadingIndicatorWrapper___cII3",fadeInStart:"LoadingIndicator_fadeInStart__3P0CX",fadeOutStart:"LoadingIndicator_fadeOutStart__20gub"}},253:function(e,t,n){e.exports={link:"root_link__2M_2g",wrapper:"root_wrapper__CnJ22"}},264:function(e,t,n){e.exports=n(625)},370:function(e,t){},372:function(e,t){},403:function(e,t){},404:function(e,t){},452:function(e,t){},454:function(e,t){},474:function(e,t){},623:function(e,t,n){},625:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(18),s=n(19),l=n(29),u=n(28),f=n(30),m=n(253),d=n.n(m),p=n(14),h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Bill Page")}}]),t}(a.Component),v=n(35),b=n.n(v),g=n(54),O=p.d.alert;function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,n=void 0===t?"\u786e\u5b9a\u5417":t,a=e.message,r=void 0===a?"":a,c=e.okText,o=void 0===c?"\u662f":c,i=e.cancelText,s=void 0===i?"\u5426":i;return new Promise(function(e){O(n,r,[{text:s,onPress:function(){return e(!1)}},{text:o,onPress:function(){return e(!0)}}])})}window.showConfirmModal=w;var j=[];var E=0;function y(){return k.apply(this,arguments)}function k(){return(k=Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E>0)){e.next=2;break}return e.abrupt("return");case 2:if(j.length){e.next=8;break}return e.next=5,w({message:"\u662f\u5426\u9000\u51fa\u672cAPP\uff1f"});case 5:if(!e.sent){e.next=7;break}navigator.app.exitApp();case 7:return e.abrupt("return");case 8:(t=j[j.length-1]).onLeftClick?(t.onLeftClick(),j.pop()):t.refs&&t.refs.wrappedComponent&&t.refs.wrappedComponent.onLeftClick?(t.refs.wrappedComponent.onLeftClick(),j.pop()):console.warn("\u627e\u4e0d\u5230\u5173\u95edPage\u7684\u65b9\u6cd5\uff1a",t);case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}document.addEventListener("backbutton",y,!1),window.doBackButton=y;var x=[];function C(e,t,n){var r=document.createElement("div");r.className="page-wrapper",n&&n.wrapperClass&&(r.className+=" "+n.wrapperClass),document.body.appendChild(r),x.indexOf(r)<0&&x.push(r);var c=e,i=null;return new Promise(function(e){o.a.render(a.createElement(c,Object.assign({},t,{close:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e(t),setTimeout(function(){!function(){o.a.unmountComponentAtNode(r);try{document.body.removeChild(r)}catch(e){console.warn(e)}j.indexOf(i)>=0&&j.splice(j.indexOf(i),1),x.indexOf(r)>=0&&x.splice(x.indexOf(r),1)}()},n)},ref:function(e){e&&(i=e,j.indexOf(e)<0&&j.push(e))}})),r)})}var _=n(43),N=n(8),S=n.n(N),T=n(109),P=n.n(T),I=350,A=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={phase:0},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"modalDidMount",value:function(){var e=this;0===this.state.phase&&window.requestAnimationFrame(function(){setTimeout(function(){e.setState({phase:1})})})}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",{ref:function(e){e&&t.modalDidMount(e)},className:S()((e={"page-root":!0},Object(_.a)(e,P.a.root,!0),Object(_.a)(e,P.a.fadeInStart,0===this.state.phase),Object(_.a)(e,P.a.fadeOutStart,2===this.state.phase),e))},this.props.children)}}]),t}(a.Component);var D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).pageTitle="\u652f\u4ed8\u6210\u529f",n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,n=this;return function(e){var t,n=this;return this.close=function(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];var c;a.length?(c=n.props).close.apply(c,a.concat([I])):n.props.close(null,I),t()},this.onLeftClick=function(){return(n.onBackClick||function(){return n.close(null)})()},r.a.createElement(A,{ref:function(e){e&&(t=function(){return new Promise(function(t){e.setState({phase:2},function(){setTimeout(function(){t()},I)})})})}},this.props.overrideNavBar?this.props.overrideNavBar(this):r.a.createElement(p.e,{mode:this.navbarMode||"light",icon:r.a.createElement(p.c,{type:"left"}),onLeftClick:this.onLeftClick,className:this.props.navBarClass||""},this.pageTitle),e)}.call(this,r.a.createElement("div",null,r.a.createElement(p.f,{img:(e="https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg",r.a.createElement("img",{src:e,className:"spe am-icon am-icon-lg",alt:""})),title:"\u652f\u4ed8\u6210\u529f",message:r.a.createElement("div",{onClick:function(){n.close("123"),C(t)}},(this.props.actualPrice/100).toFixed(2),"\u5143 ",r.a.createElement("del",null,(this.props.price/100).toFixed(2),"\u5143"))})))}}]),t}(a.Component),L=p.d.alert;function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,n=void 0===t?"\u63d0\u793a":t,a=e.message,r=void 0===a?"":a,c=e.okText,o=void 0===c?"\u597d":c;return new Promise(function(e){L(n,r,[{text:o,onPress:function(){return e()}}])})}window.showAlertModal=M;var B=n(110),R=n.n(B),F=n(159),W=n(260),q=n.n(W),J=n(261),U=n.n(J),V=n(111),z=n.n(V),Q=250,H="masked-div",K=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={phase:0},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;0===this.state.phase&&window.requestAnimationFrame(function(){setTimeout(function(){e.setState({phase:1})})})}},{key:"fadeOut",value:function(){this.setState({phase:2})}},{key:"render",value:function(){var e;return r.a.createElement("div",{className:S()((e={},Object(_.a)(e,z.a.loadingIndicatorWrapper,!0),Object(_.a)(e,z.a.fadeInStart,0===this.state.phase),Object(_.a)(e,z.a.fadeOutStart,2===this.state.phase),e))},r.a.createElement(U.a,{name:"folding-cube",color:"#40a9ff",fadeIn:"none"}),r.a.createElement("div",{className:"hint-text"},"\u8f7d\u5165\u4e2d\u2026"))}}]),t}(r.a.Component);function G(e){var t=document.createElement("div"),n=null;if(document.body.appendChild(t),o.a.render(r.a.createElement(K,{ref:function(e){e&&(n=e)}}),t),e)for(var a=document.body.children,c=0;c<a.length;c++){var i=a[c];i!==t&&"DIV"===i.tagName&&i.className.indexOf(H)<0&&(i.className=i.className+" "+H)}return function(){n.fadeOut(),setTimeout(function(){if(o.a.unmountComponentAtNode(t),document.body.removeChild(t),e)for(var n=document.body.children,a=0;a<n.length;a++){var r=n[a];r!==t&&"DIV"===r.tagName&&r.className.indexOf(H)>=0&&(r.className=r.className.split(H).join(""))}},Q)}}var X={SERVER_URL:"http://localhost:7777"};function Z(e){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).map(function(e,n){var a=e.toString();return 0!==n&&a.startsWith("/")&&(a=a.substring(1)),n!==t.length-1&&a.endsWith("/")&&(a=a.substring(0,a.length-1)),a}).join("/")}(X.SERVER_URL,e)}var Y={hideLoading:!1,loadingWithMask:!0,headers:{}},$=function(){var e=Object(g.a)(b.a.mark(function e(t){var n,a,r,c,o,i,s=arguments;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},a=s.length>2&&void 0!==s[2]?s[2]:Y,a=Object(F.a)({},Y,a),r=function(e){e&&p.h.offline(e,1.2)},c=Object(F.a)({},a.headers),o={headers:c,endPoint:t,requestData:n},a.hideLoading||(i=G(a.loadingWithMask)),e.abrupt("return",q()({method:"POST",uri:Z(o.endPoint),headers:o.headers,json:!0,form:{endPoint:o.endPoint,requestData:JSON.stringify([o.requestData])}}).then(function(e){return e.success?e.data:Promise.reject(e)}).catch(function(e){return e&&r(e.errorMessage||e.message),Promise.reject(e)}).finally(function(){i&&i()}));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();new(function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"sendExampleRequest",value:function(e){return $("example",{param:e})}}]),e}());function ee(){return!!window.cordova}var te=n(262),ne=n.n(te);function ae(e){return"\u652f\u4ed8\u5b9d \u5230\u8d26 ".concat(ne.a.toWords(e.toFixed(0)/100),"\u5143")}var re,ce=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"notifyTransferArrival",value:function(e){window.TTS.speak({text:ae(e),locale:"zh-CN"})}}]),e}(),oe=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"notifyTransferArrival",value:function(){var e=Object(g.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("%cTTS:%c "+ae(t),"background:yellow","");case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),ie=ee()?new ce:new oe,se=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"scan",value:function(){return new Promise(function(e,t){window.cordova.plugins.barcodeScanner.scan(function(t){e(t)},function(e){t(e)},{showFlipCameraButton:!1,showTorchButton:!0,resultDisplayDuration:0,formats:"QR_CODE"})})}}]),e}(),le=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"scan",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=prompt("\u8bf7\u8f93\u5165\u4e8c\u7ef4\u7801\u626b\u7801\u7ed3\u679c","http://example.com"))||""===t){e.next=5;break}return e.abrupt("return",{text:"",format:"",cancelled:!0});case 5:return e.abrupt("return",{text:t,format:"QR_CODE",cancelled:!1});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),ue=ee()?new se:new le,fe=n(263),me=n.n(fe),de=(n(602),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.b,null,r.a.createElement(p.b.Item,null,r.a.createElement(p.a,{type:"primary",onClick:function(){C(D,{actualPrice:1e4,price:12e3}).then(function(e){return console.log("Page result:",e)})}},r.a.createElement("i",{className:"fa fa-rmb"})," Pay")),r.a.createElement(p.b.Item,null,r.a.createElement(p.a,{onClick:function(){E++,ue.scan().then(function(e){M({title:"result",message:JSON.stringify(e)})}).finally(function(){setTimeout(function(){E--},1e3)})}},r.a.createElement("i",{className:"fa fa-camera"})," Scan QR"))),r.a.createElement("div",{className:R.a.confirmAndAlertDemo},r.a.createElement(p.a,{size:"small",onClick:function(){w({title:"Title",message:"Message"}).then(function(e){M({title:"result",message:JSON.stringify(e)})})}},r.a.createElement("i",{className:"fa fa-info-circle"})," Show Confirm")),r.a.createElement("div",{className:R.a.exampleServiceDemo},r.a.createElement(p.a,{size:"small",onClick:function(){me.a.get("http://47.101.30.171:8080/greeting").then(function(e){M({title:"result",message:e.text}),console.log(e.text)})}},r.a.createElement("i",{className:"fa fa-send"}),"\u524d\u540e\u7aef\u8fde\u63a5\u5c1d\u8bd5")),r.a.createElement("div",{className:R.a.ttsDemo},r.a.createElement(p.a,{size:"small",onClick:function(){ie.notifyTransferArrival(1e4)}},r.a.createElement("i",{className:"fa fa-volume-up"})," TTS Service DEMO")))}}]),t}(a.Component)),pe=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"User Page")}}]),t}(a.Component),he=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedTab:0},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:d.a.wrapper},r.a.createElement(p.g,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white"},r.a.createElement(p.g.Item,{title:"\u4e3b\u9875",key:"Home",icon:r.a.createElement("i",{className:"fa fa-star-o"}),selectedIcon:r.a.createElement("i",{className:"fa fa-star"}),selected:0===this.state.selectedTab,onPress:function(){e.setState({selectedTab:0})}},r.a.createElement(de,null)),r.a.createElement(p.g.Item,{title:"\u8d26\u5355",key:"Bill",icon:r.a.createElement("i",{className:"fa fa-list"}),selectedIcon:r.a.createElement("i",{className:"fa fa-list"}),selected:1===this.state.selectedTab,onPress:function(){e.setState({selectedTab:1})}},r.a.createElement(h,null)),r.a.createElement(p.g.Item,{title:"\u7528\u6237",key:"User",icon:r.a.createElement("i",{className:"fa fa-user-o"}),selectedIcon:r.a.createElement("i",{className:"fa fa-user"}),selected:2===this.state.selectedTab,onPress:function(){e.setState({selectedTab:2})}},r.a.createElement(pe,null))))}}]),t}(a.Component);n(621),n(623);re=he,o.a.render(r.a.createElement(re,null),document.getElementById("root"))}},[[264,2,1]]]);
//# sourceMappingURL=main.41aa57c1.chunk.js.map