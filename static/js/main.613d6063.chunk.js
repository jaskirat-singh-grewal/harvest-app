(this["webpackJsonpharvest-app"]=this["webpackJsonpharvest-app"]||[]).push([[0],{15:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),s=r(10),c=r.n(s),i=(r(15),r(2)),o=r(9),u=r(3),l=r(4),h=r(6),m=r(5),d=(r.p,r(8),r(0)),b=function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={length:0,width:0,numberOfTractors:1},e.change=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value)),e.props.change(t)},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Field Length (meters): "}),Object(d.jsx)("input",{value:0!==this.state.length?this.state.length:"",onChange:function(t){return e.change(t)},type:"number",name:"length",className:"form-control",id:"fieldLength",placeholder:"meters"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Field Width (meters): "}),Object(d.jsx)("input",{value:0!==this.state.width?this.state.width:"",onChange:function(t){return e.change(t)},type:"number",name:"width",className:"form-control",id:"fieldWidth",placeholder:"meters"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Number of combines: "}),Object(d.jsx)("input",{value:1!==this.state.numberOfTractors?this.state.numberOfTractors:"",onChange:function(t){return e.change(t)},type:"number",name:"numberOfTractors",className:"form-control",id:"numberOfTractors",placeholder:"count"})]})]})})}}]),r}(n.Component),f=function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={speed:0,uTurnTime:0,tractorWidth:0,num:e.props.num},e.change=function(t){t.num=e.state.num,e.setState(Object(i.a)({},t.target.name,t.target.value)),e.props.change(t)},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("h2",{children:[" Combine number: ",this.props.num+1]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Average Combine's Speed (km/h): "}),Object(d.jsx)("input",{value:0!==this.state.speed?this.state.speed:"",onChange:function(t){return e.change(t)},type:"number",className:"form-control",id:"speed",name:"speed",num:this.props.num,placeholder:"Km/h"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Combine's header Width (meters): "}),Object(d.jsx)("input",{value:0!==this.state.width?this.state.width:"",onChange:function(t){return e.change(t)},type:"number",className:"form-control",id:"tractorWidth",name:"tractorWidth",num:this.props.num,placeholder:"meters"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Time required to make a U-Turn (seconds): "}),Object(d.jsx)("input",{value:0!==this.state.uTurnTime?this.state.uTurnTime:"",onChange:function(t){return e.change(t)},type:"number",className:"form-control",id:"uturnTime",name:"uTurnTime",num:this.props.num,placeholder:"seconds"})]})]})]})}}]),r}(n.Component),j=function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={field:{length:0,width:0},numberOfTractors:1,tractors:[],resultTime:0},e.timeTractor=function(t){var r=e.state,n=t.speed/3.6;if(r.field.width<=t.width)return r.field.length/n;var a=Math.ceil(r.field.width/t.width),s=t.uTurnTime*(a-1);return s+=(r.field.length-2*t.width)*a/n},e.calResult=function(){var t=0;e.state.tractors.forEach((function(r){t+=1/e.timeTractor(r)}));var r=1/t;if(r=parseInt(r),Number.isNaN(r))return"infinite hours";var n=Math.floor(r/3600),a=Math.floor(r%3600/60),s=r%60;return(0===n?"":1===n?n+" hour ":n+" hours ")+(0===a?"":1===a?a+" minute ":a+" minutes ")+(0===s?"":1===s?s+" second ":s+" seconds")},e.countChange=function(){var t=e.state.tractors,r=e.state.numberOfTractors-e.state.tractors.length,n=e.state.tractors.length;if(r>0)for(var a=0;a<r;a++){var s={speed:0,uTurnTime:0,width:0};s.num=a+n,t.push(s)}else if(r<0)for(a=0;a>r;a--)t.pop();e.setStateSync({tractors:t})},e.change=function(t){var r="";if(r=""===t.target.value?"0":t.target.value,"numberOfTractors"===t.target.name)""===t.target.value?e.setState({numberOfTractors:1},(function(){e.countChange()})):e.setState({numberOfTractors:parseFloat(t.target.value)},(function(){e.countChange()}));else if("speed"===t.target.name||"tractorWidth"===t.target.name||"uTurnTime"===t.target.name){var n=e.state.tractors;"tractorWidth"===t.target.name?n[t.num].width=parseFloat(r):"speed"===t.target.name?n[t.num].speed=parseFloat(r):n[t.num].uTurnTime=parseFloat(r),e.setStateSync({tractors:n})}else e.setStateSync({field:Object(o.a)(Object(o.a)({},e.state.field),{},Object(i.a)({},t.target.name,parseFloat(r)))})},e.renderTractors=function(){for(var t=e.state.numberOfTractors,r=0;r<t;r++);},e.setStateSync=function(t){return new Promise((function(r){e.setState(t,(function(){return r()}))}))},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return this.calResult(),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:"Calculate the Time Required to Harvest a Field of Crop!"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"Field Parameters"}),Object(d.jsx)(b,{change:function(t){return e.change(t)}}),this.state.tractors.map((function(t){return Object(d.jsx)(f,{change:function(t){return e.change(t)},num:t.num},t.num)})),Object(d.jsx)("div",{className:"jumbotron",children:Object(d.jsxs)("h3",{children:["All combines will take ",this.calResult()," to havest the crop."]})})]})}}]),r}(n.Component),p=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))};r(17);c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),p()},8:function(e,t,r){}},[[18,1,2]]]);
//# sourceMappingURL=main.613d6063.chunk.js.map