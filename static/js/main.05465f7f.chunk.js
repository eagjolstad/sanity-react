(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(t,n,e){"use strict";e.r(n);var a=e(2),o=e.n(a),i=e(29),c=e.n(i),r=(e(40),e(30)),s=e(31),d=e(33),u=e(32),l=e(34),h=e(41)({projectId:"a6q6x37w",dataset:"production",token:"skpmVecYcsSXFdQYrGn2a0a3eUCanO7TMz8Z1GhILgyvV6dLZO0B07pc5EEBPGEmw0wPTkZ6UKndu1DSS8FJadOWprUkbjt85nVlNIyISStU1lGezeZyPsMjnCi9fuYYSdu8XCNCJaIFukmfIRxkcHK4m7gqAUVtlpvXB2vZt2nyUQTd5vph",useCdn:!1}),p=function(t){function n(t){var e;return Object(r.a)(this,n),(e=Object(d.a)(this,Object(u.a)(n).call(this,t))).state={data:null,isLoading:!1},e}return Object(l.a)(n,t),Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({isLoading:!0});h.fetch('*[_type=="movie"][0]').then(function(t){console.log("Responding: ",t)}).then(function(n){return t.setState({data:n,isLoading:!1})})}},{key:"render",value:function(){var t=this.state,n=(t.data,t.isLoading);return console.log("State: ",this.state),n?o.a.createElement("p",null,"Loading ..."):o.a.createElement("h1",null,"Endres Reactside")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},35:function(t,n,e){t.exports=e(116)},40:function(t,n,e){}},[[35,1,2]]]);
//# sourceMappingURL=main.05465f7f.chunk.js.map