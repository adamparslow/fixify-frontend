(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],f=0,h=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"382e":function(e,t,n){"use strict";n("753c")},"462a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},i=[],s=(n("034f"),n("2877")),o={},c=Object(s["a"])(o,a,i,!1,null,null,null),u=c.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("router-view")],1)},h=[],m={name:"Home",components:{}},p=m,d=Object(s["a"])(p,f,h,!1,null,null,null),g=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Collage")]),n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("CollageForm",{attrs:{collage64Image:e.collage64Image},on:{"collage-submit":e.collageSubmit}}),n("canvas",{attrs:{id:"collage-canvas"}})],1)},b=[],x=(n("96cf"),n("1da1")),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{autocomplete:"off",id:"image-form"},on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("div",[n("PlaylistSelector")],1),e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),n("p",[e._v("Image Quality")]),e._m(7),n("button",{attrs:{id:"playlist-submit",type:"submit"}},[e._v("Generate Image")]),n("button",{attrs:{id:"download-button",type:"button",disabled:""==e.collage64Image},on:{click:e.downloadImage}},[e._v("Download")])])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{attrs:{id:"ratio",name:"ratio",required:""}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Select a size")]),n("option",{attrs:{value:"16x9"}},[e._v("Laptop (16x9) - Landscape")]),n("option",{attrs:{value:"9x16"}},[e._v("Laptop (16x9) - Portrait")]),n("option",{attrs:{value:"4x3"}},[e._v("Tablet (4x3) - Landscape")]),n("option",{attrs:{value:"3x4"}},[e._v("Tablet (4x3) - Portrait")]),n("option",{attrs:{value:"13x6"}},[e._v("Phone (6x13) - Landscape")]),n("option",{attrs:{value:"6x13"}},[e._v("Phone (6x13) - Portrait")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{type:"checkbox",name:"custom",id:"custom-checkbox"}}),n("label",{attrs:{for:"custom"}},[e._v("Custom width and height")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom",attrs:{id:"custom"}},[n("label",{attrs:{for:"width"}},[e._v("Width")]),n("input",{attrs:{type:"number",name:"width",value:"6",min:"1",max:"99"}}),n("label",{attrs:{for:"height"}},[e._v("Height")]),n("input",{attrs:{type:"number",name:"height",value:"13",min:"1",max:"99"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:"bigger-boxes"}},[e._v("Number of bigger boxes")]),n("input",{attrs:{type:"number",name:"bigger-boxes",value:"5",min:"0",max:"99"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{type:"checkbox",name:"random",checked:""}}),n("label",{attrs:{for:"random"}},[e._v("Random sort")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{type:"checkbox",name:"repeats",checked:""}}),n("label",{attrs:{for:"repeats"}},[e._v("Remove repeated images")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{type:"checkbox",name:"fill",checked:""}}),n("label",{attrs:{for:"fill"}},[e._v("Fill with duplicates")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"size-selector"},[n("input",{attrs:{type:"radio",id:"low",name:"size",value:"low"}}),n("label",{attrs:{for:"small"}},[e._v("Low")]),n("br"),n("input",{attrs:{type:"radio",id:"medium",name:"size",value:"medium",checked:""}}),n("label",{attrs:{for:"medium"}},[e._v("Medium")]),n("br"),n("input",{attrs:{type:"radio",id:"high",name:"size",value:"high"}}),n("label",{attrs:{for:"large"}},[e._v("High")])])}],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{attrs:{id:"playlist",name:"playlist",required:""}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Select a playlist")]),e._l(e.playlists,(function(t){return n("option",{key:t.id,domProps:{value:t.href}},[e._v(" "+e._s(t.name)+" ")])}))],2)},k=[];n("99af"),n("d3b7");function E(){return localStorage.getItem("access_token")}function O(){return localStorage.getItem("refresh_token")}function R(){return localStorage.getItem("expires_at")}function C(e){localStorage.setItem("access_token",e)}function j(e){localStorage.setItem("refresh_token",e)}function M(e){localStorage.setItem("expires_at",e)}var S={getAccessToken:E,getRefreshToken:O,getExpiresAt:R,setAccessToken:C,setRefreshToken:j,setExpiresAt:M},T=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="http://localhost:3000/spotify/playlists",e.next=3,P(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="".concat("http://localhost:3000","/spotify/cover_art?playlist=").concat(t,"&size=").concat(n),e.next=3,P(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="http://localhost:3000/spotify/liked_songs",e.next=3,P(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="http://localhost:3000/spotify/song_details?id="+t,e.next=3,P(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=S.getAccessToken(),console.log(n),e.next=4,fetch(t,{headers:{access_token:n,refresh_token:S.getRefreshToken(),expires_at:S.getExpiresAt()}});case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,S.setAccessToken(a.access_token),S.setExpiresAt(a.expires_at),e.abrupt("return",a.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L={getPlaylists:T,getPlaylistCoverArt:$,getLikedSongs:I,getSongData:A},F={data:function(){return{playlists:[]}},created:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.getPlaylists();case 2:this.playlists=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},D=F,z=Object(s["a"])(D,w,k,!1,null,null,null),J=z.exports,N={components:{PlaylistSelector:J},methods:{submitForm:function(e){this.$emit("collage-submit",e.target)},downloadImage:function(){var e=document.createElement("a");e.href=this.collage64Image,e.download="collage.png",e.click()}},props:["collage64Image"]},B=N,H=Object(s["a"])(B,_,y,!1,null,null,null),U=H.exports,G=(n("cb29"),n("4de4"),n("c975"),n("d81d"),n("a434"),n("ac1f"),n("1276"),n("ddb0"),n("2909")),q=n("3835"),V=n("b85c");function W(e,t,n){var r=document.getElementById("collage-canvas");r.width=e*n,r.height=t*n,console.log(window)}function Q(e,t,n,r,a){var i=document.getElementById("collage-canvas"),s=i.getContext("2d"),o=new Image,c=r?2*a:a;o.onload=function(){s.drawImage(o,t*a,n*a,c,c)},o.src=e}var X={setDimensions:W,drawImage:Q};n("4160"),n("a9e3"),n("3ca3"),n("1393"),n("159b");function Y(e,t,n,r){return K.apply(this,arguments)}function K(){return K=Object(x["a"])(regeneratorRuntime.mark((function e(t,n,r,a){var i,s,o,c,u,l,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.map((function(e){return e.url})),s=t[0].width/2,o=n*s,c=r*s,u=Z(i,n,r,a),l=new window.Jimp(o,c),f=[],u.forEach(function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:f.push(window.Jimp.read(t.url).then((function(e){var n=t.big?2*s:s;e.resize(n,n),l.composite(e,t.x*s,t.y*s),e.getBase64Async(window.Jimp.MIME_PNG).then((function(e){return X.drawImage(e,t.x,t.y,t.big,s)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=10,Promise.all(f);case 10:return e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function Z(e,t,n,r){for(var a=ee(t,n,r,e.length),i=[],s=[],o=0;o<t;o++){s[o]=[];for(var c=0;c<n;c++)s[o][c]=!1}var u,l=Object(V["a"])(a);try{for(l.s();!(u=l.n()).done;){var f=u.value,h=e[f.y*t+f.x];h&&(s[f.x][f.y]=!0,s[f.x+1][f.y]=!0,s[f.x][f.y+1]=!0,s[f.x+1][f.y+1]=!0,i.push({x:f.x,y:f.y,big:!0,url:h}))}}catch(m){l.e(m)}finally{l.f()}return e.forEach((function(e,n){var r=n,o=n%t,c=Math.floor(r/t);if(!te(o,c,a)){while(s[o][c])o++,o===Number(t)&&(o=0,c++);s[o][c]=!0,i.push({x:o,y:c,big:!1,url:e})}})),i}function ee(e,t,n,r){for(var a=[],i=[],s=0;s<e;s++){i[s]=[];for(var o=0;o<t;o++)i[s][o]=!1}for(var c=0;c<n;c++){var u=Math.floor(Math.random()*(e-1)),l=Math.floor(Math.random()*(t-1)),f=100,h=0;while((i[u][l]||i[u+1][l]||i[u][l+1]||i[u+1][l+1]||l*e+u>=r)&&h!=f)u=Math.floor(Math.random()*(e-1)),l=Math.floor(Math.random()*(t-1)),h++;h!==f&&(i[u][l]=!0,i[u+1][l]=!0,i[u][l+1]=!0,i[u+1][l+1]=!0,a.push({x:u,y:l}))}return a}function te(e,t,n){var r=!1;return n.forEach((function(n){e==n.x&&t==n.y&&(r=!0)})),r}var ne={generate:Y};function re(e){return ae.apply(this,arguments)}function ae(){return ae=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=ie(t),e.next=3,L.getPlaylistCoverArt(n.playlist,oe(n.size));case 3:return r=e.sent,X.setDimensions(n.width,n.height,r[0].height/2),n.repeats&&(r=ce(r)),n.fill&&(r=fe(r,n.width*n.height)),n.random&&(r=le(r)),a=n.width*n.height,r.splice(a),e.next=12,ne.generate(r,n.width,n.height,n["bigger-boxes"]);case 12:return i=e.sent,e.next=15,i.getBase64Async(window.Jimp.MIME_PNG);case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function ie(e){var t,n=new FormData(e),r={},a=Object(V["a"])(n.entries());try{for(a.s();!(t=a.n()).done;){var i=t.value;r[i[0]]=i[1]}}catch(s){a.e(s)}finally{a.f()}return se(r),r}function se(e){if(!e.custom){var t=e.ratio.split("x"),n=Object(q["a"])(t,2),r=n[0],a=n[1];e.width=r,e.height=a}}function oe(e){switch(e){case"low":return 2;case"medium":return 1;case"high":return 0}}function ce(e){return e=ue(e),e.map((function(e){return e.url})).map((function(e,t,n){return n.indexOf(e)===t&&t})).filter((function(t){return e[t]})).map((function(t){return e[t]}))}function ue(e){return e.filter((function(e){return e}))}function le(e){var t,n,r=e.length;while(0!==r)n=Math.floor(Math.random()*r),r-=1,t=e[r],e[r]=e[n],e[n]=t;return e}function fe(e,t){var n=0,r=e.length,a=le(Object(G["a"])(e));while(e.length<t)e.push(a[n%r]),n++;return e}var he={formHandler:re},me={components:{CollageForm:U},data:function(){return{collage64Image:""}},methods:{collageSubmit:function(e){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,he.formHandler(e);case 2:r=n.sent,t.collage64Image=r,console.log(t.collage64Image);case 5:case"end":return n.stop()}}),n)})))()}}},pe=me,de=(n("5b2e"),Object(s["a"])(pe,v,b,!1,null,null,null)),ge=de.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outer-container"},[n("div",{staticClass:"container"},[e._m(0),n("router-link",{staticClass:"rounded-button",attrs:{to:"/"}},[e._v("Home")]),n("article",[e._m(1),n("section",[n("h2",[e._v("Once-Only")]),n("hr"),n("p",[e._v("The below button instantly creates a megamix playlist in your spotify account. It does this once only, and will need to be pressed again to get a new playlist.")]),n("div",{staticClass:"once-only-button-container"},[n("button",{staticClass:"once-only-button",on:{click:e.createMegamix}},[e._v("GENERATE MEGAMIX")])])]),n("section",[n("h2",[e._v("Daily")]),n("hr"),n("p",[e._v("If you would rather have a new megamix playlist everyday, click register.")]),n("p",[e._v(" Currently you are "+e._s(this.registerTextMessage)+". Press the button to "),n("button",{staticClass:"once-only-button",on:{click:e.toggleRegister}},[e._v(e._s(this.registerButtonMessage))])]),""!=e.megamixUrl?n("a",{attrs:{href:e.megamixUrl}},[e._v("Link to megamix playlist")]):e._e()])]),n("LoadingSpinnerModal",{attrs:{"is-visible":this.isCreatingMegamix}})],1)])},be=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header-bar"},[n("h1",[e._v("Megamix")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("What is a Megamix?")]),n("hr"),n("p",[e._v("A megamix is a playlist that is the combination of all your daily mixes. It is ~17 hours of Spotify AI goodness, without the separation of genres and styles.")]),n("aside",[n("h3",[e._v("IMPORTANT!")]),n("p",[n("i",[e._v("You must have all of your daily mixes liked within your spotify account or this will not work")])])])])}],xe=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat("http://localhost:3000","/megamix/register?refresh_token=").concat(S.getRefreshToken()),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="http://localhost:3000/megamix/register",n=S.getRefreshToken(),r={refresh_token:n},e.next=5,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="http://localhost:3000/megamix/register",n=S.getRefreshToken(),r={refresh_token:n},e.next=5,fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="http://localhost:3000/megamix/generate",n=S.getRefreshToken(),r=S.getAccessToken(),a=S.getExpiresAt(),i={refresh_token:n,access_token:r,expires_at:a},e.next=7,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 7:return s=e.sent,e.next=10,s.json();case 10:return o=e.sent,S.setAccessToken(o.access_token),S.setExpiresAt(o.expires_at),e.abrupt("return",o.url);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke={getMegamixRegistrationStatus:xe,registerForMegamix:_e,deregisterFromMegamix:ye,createMegamix:we},Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return this.isVisible?n("div",{staticClass:"modal-container"},[n("Spinner")],1):e._e()},Oe=[],Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader"},[e._v("Loading...")])},Ce=[],je=(n("f9a6"),{}),Me=Object(s["a"])(je,Re,Ce,!1,null,"58949b7c",null),Se=Me.exports,Te={components:{Spinner:Se},props:["isVisible"]},$e=Te,Ie=(n("382e"),Object(s["a"])($e,Ee,Oe,!1,null,"1c53ecf6",null)),Ae=Ie.exports,Pe={data:function(){return{registered:!1,isCreatingMegamix:!1,megamixUrl:""}},created:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ke.getMegamixRegistrationStatus();case 2:this.registered=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{toggleRegister:function(){console.log("does this come up"),this.registered=!this.registered,this.registered?ke.registerForMegamix():ke.deregisterFromMegamix()},createMegamix:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isCreatingMegamix=!0,e.next=3,ke.createMegamix();case 3:this.megamixUrl=e.sent,this.isCreatingMegamix=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},computed:{registerButtonMessage:function(){return this.registered?"Deregister":"Register"},registerTextMessage:function(){return this.registered?"registered":"not registered"}},components:{LoadingSpinnerModal:Ae}},Le=Pe,Fe=(n("7586"),Object(s["a"])(Le,ve,be,!1,null,"19928e25",null)),De=Fe.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center items-center h-screen"},[n("div",{staticClass:"flex flex-col bg-gray-200 p-4"},[n("router-link",{staticClass:"rounded-button",attrs:{to:"/"}},[e._v("Home")]),n("input",{staticClass:"text-black outline-none",attrs:{type:"text",placeholder:"Search song..."},on:{input:function(t){return e.search(t.srcElement.value)}}}),n("ul",{staticClass:"divide-solid divide-y divide-black"},e._l(this.searchResults,(function(t,r){return n("li",{key:t.doc.id,staticClass:"text-black flex flex-col",class:{"bg-gray-400":r==e.focusedElement}},[n("h3",[e._v(e._s(t.doc.title))]),n("p",{staticClass:"text-gray-500"},[e._v(e._s(t.doc.data.album)+" - "+e._s(t.doc.data.artists[0]))])])})),0)],1),n("LoadingSpinnerModal",{attrs:{"is-visible":this.isLoading}})],1)},Je=[],Ne=(n("fb6a"),n("b0c0"),n("841c"),n("5bd5")),Be={data:function(){return{flexDocument:new Ne["Document"]({tokenize:"forward",document:{index:["title"],store:!0}}),searchResults:[],isLoading:!1,focusedElement:0}},methods:{search:function(e){var t=this.flexDocument.search(e,{enrich:!0});this.searchResults=t.length>0?t[0].result.slice(0,10):[],this.focusedElement=0,console.log(this.searchResults)},getLikedSongs:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.getLikedSongs();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),moveFocus:function(e){e>0&&this.focusedElement>0?this.focusedElement--:e<0&&this.focusedElement<9&&this.focusedElement++},selectSong:function(){this.$router.push("/search/"+this.searchResults[this.focusedElement].doc.data.id)},keypress:function(e){"ArrowUp"==e.key?this.moveFocus(1):"ArrowDown"==e.key?this.moveFocus(-1):"Enter"==e.key&&this.selectSong()}},created:function(){var e=this;window.addEventListener("keydown",this.keypress),this.isLoading=!0,this.getLikedSongs().then((function(t){console.log(t),t.forEach((function(t,n){null!==t&&e.flexDocument.add({id:n,title:t.name,data:t})})),e.isLoading=!1}))},destroyed:function(){window.removeEventListener("keydown",this.keypress)},components:{LoadingSpinnerModal:Ae}},He=Be,Ue=Object(s["a"])(He,ze,Je,!1,null,null,null),Ge=Ue.exports,qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("router-link",{attrs:{to:"/search"}},[e._v("Back")]),e._v(" "+e._s(e.$route.params.id)+" ")],1)},Ve=[],We={created:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.getSongData(this.$route.params.id);case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},Qe=We,Xe=Object(s["a"])(Qe,qe,Ve,!1,null,null,null),Ye=Xe.exports,Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("article",[n("p",[e._v("Please log into your spotify to gain access to Fixify")]),n("a",{staticClass:"rounded-button",attrs:{href:e.backendUri+"/auth/login"}},[e._v("Log In")])])])},Ze=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header-bar"},[n("h1",[e._v("Fixify")])])}],et={data:function(){return{backendUri:"http://localhost:3000"}}},tt=et,nt=(n("6fec"),Object(s["a"])(tt,Ke,Ze,!1,null,"20d50fce",null)),rt=nt.exports,at=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("button",{staticClass:"rounded-button",on:{click:e.logOut}},[e._v("Log Out")]),n("article",{staticClass:"routes-container"},e._l(e.features,(function(t){return n("router-link",{key:t.id,staticClass:"router-link image",class:t.imageClass,attrs:{to:t.route}},[n("span",[e._v(e._s(t.name))])])})),1)])},it=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header-bar"},[n("h1",[e._v("Fixify")])])}],st={data:function(){return{features:[{id:1,name:"Collage",route:"/collage",imageClass:"collage-image"},{id:2,name:"Megamix",route:"/megamix",imageClass:"megamix-image"},{id:3,name:"Search",route:"/search",imageClass:"green-background"},{id:4,name:"Artist Follower",route:"/",imageClass:"blue-background"},{id:5,name:"Album Liker",route:"/",imageClass:"yellow-background"},{id:6,name:"Playlist Correction",route:"/",imageClass:"green-background"},{id:7,name:"Song Correction",route:"/",imageClass:"blue-background"},{id:8,name:"Backup",route:"/",imageClass:"yellow-background"}]}},methods:{logOut:function(){S.setAccessToken(null),S.setRefreshToken(null),this.$router.push("/authorise")}},created:function(){S.getAccessToken()||this.$router.push("/authorise")}},ot=st,ct=(n("a085"),Object(s["a"])(ot,at,it,!1,null,"d371a8fe",null)),ut=ct.exports,lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("Getting spotify information")])},ft=[],ht={created:function(){var e=this.$route.params.query,t=e.split("&").map((function(e){return e.split("=")[1]})),n=Object(q["a"])(t,3),r=n[0],a=n[1],i=n[2];S.setAccessToken(r),S.setRefreshToken(a),S.setExpiresAt(i),this.$router.push("/")}},mt=ht,pt=Object(s["a"])(mt,lt,ft,!1,null,"0377748a",null),dt=pt.exports;r["a"].use(l["a"]);var gt=[{path:"/",component:g,children:[{path:"authorise",name:"Authorise",component:rt},{path:"",name:"",component:ut}]},{path:"/auth/collect/:query",component:dt},{path:"/collage",component:ge},{path:"/megamix",component:De},{path:"/search",component:Ge},{path:"/search/:id",component:Ye}],vt=new l["a"]({routes:gt}),bt=vt;n("a766");r["a"].config.productionTip=!1,new r["a"]({router:bt,render:function(e){return e(u)}}).$mount("#app")},"5b2e":function(e,t,n){"use strict";n("cc2c")},"6ddb":function(e,t,n){},"6fec":function(e,t,n){"use strict";n("6ddb")},"753c":function(e,t,n){},7586:function(e,t,n){"use strict";n("7fe8")},"7fe8":function(e,t,n){},"837e":function(e,t,n){},"85ec":function(e,t,n){},a085:function(e,t,n){"use strict";n("462a")},a766:function(e,t,n){},cc2c:function(e,t,n){},f9a6:function(e,t,n){"use strict";n("837e")}});
//# sourceMappingURL=app.95d458bc.js.map