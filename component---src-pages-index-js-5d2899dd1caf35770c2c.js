(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"71qR":function(t,e,a){},RXBc:function(t,e,a){"use strict";a.r(e);var i=a("Bl7J"),r=a("vrFN"),n=a("q1tI"),o=a.n(n),l=a("9Hrx"),s=a("Wbzz"),m=(a("71qR"),function(t){function e(e){var a;return(a=t.call(this,e)||this).props.titleimage?a.titleimage=a.props.titleimage:a.titleimage="https://picsum.photos/id/"+Math.floor(100*Math.random())+"/500/300",a}return Object(l.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",{className:"post-tile"},o.a.createElement(s.Link,{to:this.props.url},o.a.createElement("div",{className:"post-tile-title"},this.props.title),o.a.createElement("img",{src:this.titleimage,alt:"",style:{objectFit:"cover",objectPosition:"center",height:"100%",width:"100%"}}),o.a.createElement("div",{className:"post-tile-subtitle"},this.props.subtitle)))},e}(o.a.Component));e.default=function(t){var e=t.data.allMarkdownRemark.edges,a=t.location,n=e.map((function(t){return o.a.createElement(m,{url:t.node.frontmatter.slug,title:t.node.frontmatter.title,subtitle:t.node.frontmatter.subtitle,image:t.node.frontmatter.titleimage,titleimage:t.node.frontmatter.titleimage,titleimagetopmargin:t.node.frontmatter.titleimagetopmargin})}));return o.a.createElement(i.a,{location:a},o.a.createElement(r.a,{title:"Home"}),o.a.createElement("div",{className:"inner-home post-list-wrapper"},n))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5d2899dd1caf35770c2c.js.map