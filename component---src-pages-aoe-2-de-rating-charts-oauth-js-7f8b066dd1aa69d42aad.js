(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Dvdh:function(e,t,r){"use strict";var n=r("dI71"),a=r("q1tI"),o=r.n(a),s=(r("tkFj"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"loading",style:this.props.style},o.a.createElement("div",{className:"loading-spinner"},o.a.createElement("div",{className:"spinner-dot"}),o.a.createElement("div",{className:"spinner-dot"}),o.a.createElement("div",{className:"spinner-dot"}),o.a.createElement("div",{className:"spinner-dot"}),o.a.createElement("div",{className:"spinner-dot"}),o.a.createElement("div",{className:"spinner-dot"})))},t}(o.a.Component));t.a=s},hDVo:function(e,t,r){"use strict";r.r(t);var n=r("dI71"),a=r("q1tI"),o=r.n(a),s=r("Bl7J"),i=r("vrFN"),l=r("Dvdh");function c(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=["state","code","scope"],d=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={progress:"start",message:void 0},r}Object(n.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){for(var e,t=this,r=window.location.search,n=new URLSearchParams(r),a=c(m);!(e=a()).done;){var o=e.value;if(console.log(o,n.get(o)),null===n.get(o))return void this.setState({progress:"error",message:"Missing required field '"+o+"'"})}fetch("https://us-central1-age-of-empires-307521.cloudfunctions.net/twitch-rating-charts-oauth?code="+n.get("code")+"&state="+n.get("state")+"&scope="+n.get("scope")).then((function(e){return 204==e.status?Promise.resolve():e.json()})).then((function(e){e?t.setState({progress:"error",message:e.message}):t.setState({progress:"complete"})}))},r.render=function(){var e=void 0;return"start"===this.state.progress?e=o.a.createElement("div",null,o.a.createElement("h1",null,"Processing oAuth Request..."),o.a.createElement("div",{style:{paddingTop:"25px",margin:"auto",width:"42px"}},o.a.createElement(l.a,null))):"error"===this.state.progress?e=o.a.createElement("div",null,o.a.createElement("h1",null,"There was an error while processing your request"),o.a.createElement("p",null,this.state.message)):"complete"===this.state.progress&&(e=o.a.createElement("div",null,o.a.createElement("h1",null,"Success!"),o.a.createElement("p",null,"Processing complete, you may now close this window"))),o.a.createElement(s.a,{location:{pathname:"/404"}},o.a.createElement(i.a,{title:"oAuth Processing"}),o.a.createElement("div",{style:{textAlign:"center"}},e))},t}(o.a.Component);t.default=d},tkFj:function(e,t,r){}}]);
//# sourceMappingURL=component---src-pages-aoe-2-de-rating-charts-oauth-js-7f8b066dd1aa69d42aad.js.map