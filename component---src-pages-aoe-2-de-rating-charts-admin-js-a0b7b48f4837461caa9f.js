"use strict";(self.webpackChunkendlesswips=self.webpackChunkendlesswips||[]).push([[554],{8844:function(e,t,n){n.r(t);var a=n(5861),i=n(7326),r=n(1721),s=n(7757),c=n.n(s),l=n(7294),o=n(485),d=n(262),u=(n(1919),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={configTwitchChannelId:void 0,configForceBits:!1,configPassword:void 0,creditTwitchChannelId:void 0,creditTwitchUserId:void 0,creditValue:0,creditPassword:void 0},n.grantCredit=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("I AM HERE"),console.log("PIZZA",JSON.stringify({password:this.state.creditPassword,command:{type:"ADMIN_CREDIT",data:{bitsValue:this.state.creditValue}},bodyChannelId:this.state.creditTwitchChannelId,bodyUserId:this.state.creditTwitchUserId,windowId:"admin-console"})),t.preventDefault(),e.next=5,fetch("https://us-central1-age-of-empires-307521.cloudfunctions.net/twitch-rating-charts-config",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({password:this.state.creditPassword,command:{type:"ADMIN_CREDIT",data:{bitsValue:this.state.creditValue}},bodyChannelId:this.state.creditTwitchChannelId,bodyUserId:this.state.creditTwitchUserId,windowId:"admin-console"})});case 5:return 204==(n=e.sent).status?(console.log("SUCCESS!"),this.setState({modal:"config-success",executing:!1})):n.text().then(function(e){console.error(e),this.setState({modal:"config-fail",executing:!1,errorMessage:e})}.bind(this)),this.setState({executing:!1}),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}().bind((0,i.Z)(n)),n.updateConfiguration=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state),t.preventDefault(),e.next=4,fetch("https://us-central1-age-of-empires-307521.cloudfunctions.net/twitch-rating-charts-config",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({password:this.state.configPassword,command:{type:"ADMIN_CONFIG",data:{forceBits:this.state.configForceBits}},bodyUserId:"N/A",bodyChannelId:this.state.configTwitchChannelId,windowId:"admin-console"})});case 4:return 204==(n=e.sent).status?(console.log("SUCCESS!"),this.setState({modal:"config-success",executing:!1})):n.text().then(function(e){console.error(e),this.setState({modal:"config-fail",executing:!1,errorMessage:e})}.bind(this)),this.setState({executing:!1}),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}().bind((0,i.Z)(n)),n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){},n.render=function(){return l.createElement(o.Z,{location:{pathname:"/404"}},l.createElement(d.Z,{title:"Administration"}),l.createElement("div",{style:{textAlign:"center"}},l.createElement("form",null,l.createElement("fieldset",null,l.createElement("legend",null,l.createElement("h3",null,"Grant Credit")),l.createElement("div",null,l.createElement("label",{for:"userid"},"User Id"),l.createElement("div",null,l.createElement("input",{id:"userid",name:"userid",type:"text",placeholder:"",onChange:function(e){this.setState({creditTwitchUserId:e.target.value})}.bind(this)}))),l.createElement("div",null,l.createElement("label",{for:"channelIdCredit"},"Channel Id"),l.createElement("div",null,l.createElement("input",{id:"channelIdCredit",name:"channelIdCredit",type:"text",placeholder:"",onChange:function(e){this.setState({creditTwitchChannelId:e.target.value})}.bind(this)}))),l.createElement("div",null,l.createElement("label",{for:"bitsValue"},"Bits Value"),l.createElement("div",null,l.createElement("input",{name:"bitsValue",type:"number",min:"0",onChange:function(e){this.setState({creditValue:e.target.value})}.bind(this)}))),l.createElement("div",null,l.createElement("label",{for:"passwordInputCredit"},"Password"),l.createElement("div",null,l.createElement("input",{id:"passwordInputCredit",name:"passwordInputCredit",type:"password",onChange:function(e){this.setState({creditPassword:e.target.value})}.bind(this)}))),l.createElement("br",null),l.createElement("button",{className:"button",onClick:this.grantCredit},l.createElement("div",{className:"button-text"},"Submit")))),l.createElement("hr",null),l.createElement("form",null,l.createElement("fieldset",null,l.createElement("legend",null,l.createElement("h3",null,"Force Bits")),l.createElement("div",null,l.createElement("label",{for:"channelId"},"Channel Id"),l.createElement("div",null,l.createElement("input",{id:"channelId",name:"channelId",type:"text",onChange:function(e){this.setState({configTwitchChannelId:e.target.value})}.bind(this)}))),l.createElement("div",null,l.createElement("label",{for:"forceBits"},"Force Bits"),l.createElement("div",null,l.createElement("input",{name:"forceBits",type:"checkbox",onChange:function(e){this.setState({configForceBits:e.target.checked})}.bind(this)}))),l.createElement("div",null,l.createElement("label",{for:"passwordinput"},"Password"),l.createElement("div",null,l.createElement("input",{id:"passwordinput",name:"passwordinput",type:"password",onChange:function(e){this.setState({configPassword:e.target.value})}.bind(this)}))),l.createElement("br",null),l.createElement("button",{className:"button",onClick:this.updateConfiguration},l.createElement("div",{className:"button-text"},"Submit"))))))},t}(l.Component));t.default=u},7326:function(e,t,n){function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-aoe-2-de-rating-charts-admin-js-a0b7b48f4837461caa9f.js.map