(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6tyR":function(e,t,n){"use strict";n.r(t);var a=n("HaE+"),i=n("JX7q"),r=n("dI71"),s=n("o0o1"),c=n.n(s),l=n("q1tI"),o=n.n(l),d=n("Bl7J"),u=n("vrFN"),h=(n("Dvdh"),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={configTwitchChannelId:void 0,configForceBits:!1,configPassword:void 0,creditTwitchChannelId:void 0,creditTwitchUserId:void 0,creditValue:0,creditPassword:void 0},n.grantCredit=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("I AM HERE"),console.log("PIZZA",JSON.stringify({password:this.state.creditPassword,command:{type:"ADMIN_CREDIT",data:{bitsValue:this.state.creditValue}},bodyChannelId:this.state.creditTwitchChannelId,bodyUserId:this.state.creditTwitchUserId,windowId:"admin-console"})),t.preventDefault(),e.next=5,fetch("https://us-central1-age-of-empires-307521.cloudfunctions.net/twitch-rating-charts-config",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({password:this.state.creditPassword,command:{type:"ADMIN_CREDIT",data:{bitsValue:this.state.creditValue}},bodyChannelId:this.state.creditTwitchChannelId,bodyUserId:this.state.creditTwitchUserId,windowId:"admin-console"})});case 5:return 204==(n=e.sent).status?(console.log("SUCCESS!"),this.setState({modal:"config-success",executing:!1})):n.text().then(function(e){console.error(e),this.setState({modal:"config-fail",executing:!1,errorMessage:e})}.bind(this)),this.setState({executing:!1}),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}().bind(Object(i.a)(n)),n.updateConfiguration=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state),t.preventDefault(),e.next=4,fetch("https://us-central1-age-of-empires-307521.cloudfunctions.net/twitch-rating-charts-config",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({password:this.state.configPassword,command:{type:"ADMIN_CONFIG",data:{forceBits:this.state.configForceBits}},bodyUserId:"N/A",bodyChannelId:this.state.configTwitchChannelId,windowId:"admin-console"})});case 4:return 204==(n=e.sent).status?(console.log("SUCCESS!"),this.setState({modal:"config-success",executing:!1})):n.text().then(function(e){console.error(e),this.setState({modal:"config-fail",executing:!1,errorMessage:e})}.bind(this)),this.setState({executing:!1}),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}().bind(Object(i.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){},n.render=function(){return o.a.createElement(d.a,{location:{pathname:"/404"}},o.a.createElement(u.a,{title:"Administration"}),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("form",null,o.a.createElement("fieldset",null,o.a.createElement("legend",null,o.a.createElement("h3",null,"Grant Credit")),o.a.createElement("div",null,o.a.createElement("label",{for:"userid"},"User Id"),o.a.createElement("div",null,o.a.createElement("input",{id:"userid",name:"userid",type:"text",placeholder:"",onChange:function(e){this.setState({creditTwitchUserId:e.target.value})}.bind(this)}))),o.a.createElement("div",null,o.a.createElement("label",{for:"channelIdCredit"},"Channel Id"),o.a.createElement("div",null,o.a.createElement("input",{id:"channelIdCredit",name:"channelIdCredit",type:"text",placeholder:"",onChange:function(e){this.setState({creditTwitchChannelId:e.target.value})}.bind(this)}))),o.a.createElement("div",null,o.a.createElement("label",{for:"bitsValue"},"Bits Value"),o.a.createElement("div",null,o.a.createElement("input",{name:"bitsValue",type:"number",min:"0",onChange:function(e){this.setState({creditValue:e.target.value})}.bind(this)}))),o.a.createElement("div",null,o.a.createElement("label",{for:"passwordInputCredit"},"Password"),o.a.createElement("div",null,o.a.createElement("input",{id:"passwordInputCredit",name:"passwordInputCredit",type:"password",onChange:function(e){this.setState({creditPassword:e.target.value})}.bind(this)}))),o.a.createElement("br",null),o.a.createElement("button",{className:"button",onClick:this.grantCredit},o.a.createElement("div",{className:"button-text"},"Submit")))),o.a.createElement("hr",null),o.a.createElement("form",null,o.a.createElement("fieldset",null,o.a.createElement("legend",null,o.a.createElement("h3",null,"Force Bits")),o.a.createElement("div",null,o.a.createElement("label",{for:"channelId"},"Channel Id"),o.a.createElement("div",null,o.a.createElement("input",{id:"channelId",name:"channelId",type:"text",onChange:function(e){this.setState({configTwitchChannelId:e.target.value})}.bind(this)}))),o.a.createElement("div",null,o.a.createElement("label",{for:"forceBits"},"Force Bits"),o.a.createElement("div",null,o.a.createElement("input",{name:"forceBits",type:"checkbox",onChange:function(e){this.setState({configForceBits:e.target.checked})}.bind(this)}))),o.a.createElement("div",null,o.a.createElement("label",{for:"passwordinput"},"Password"),o.a.createElement("div",null,o.a.createElement("input",{id:"passwordinput",name:"passwordinput",type:"password",onChange:function(e){this.setState({configPassword:e.target.value})}.bind(this)}))),o.a.createElement("br",null),o.a.createElement("button",{className:"button",onClick:this.updateConfiguration},o.a.createElement("div",{className:"button-text"},"Submit"))))))},t}(o.a.Component));t.default=h},Dvdh:function(e,t,n){"use strict";var a=n("dI71"),i=n("q1tI"),r=n.n(i),s=(n("tkFj"),function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{id:"loading",style:this.props.style},r.a.createElement("div",{className:"loading-spinner"},r.a.createElement("div",{className:"spinner-dot"}),r.a.createElement("div",{className:"spinner-dot"}),r.a.createElement("div",{className:"spinner-dot"}),r.a.createElement("div",{className:"spinner-dot"}),r.a.createElement("div",{className:"spinner-dot"}),r.a.createElement("div",{className:"spinner-dot"})))},t}(r.a.Component));t.a=s},tkFj:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-aoe-2-de-rating-charts-admin-js-1a3d75d2f0d37971b0cb.js.map