(function(t){function e(e){for(var i,a,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f69":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[0===t.textId.length?n("section",[n("h1",{staticClass:"h1"},[t._v("Sentence Similarity")]),n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitText(e)}}},[n("fieldset",{attrs:{disabled:t.isDisabledForm}},[n("div",{class:[{"is-error":t.textareaHasError},"textarea form__item"]},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.enteredText,expression:"enteredText"}],attrs:{placeholder:"Enter text"},domProps:{value:t.enteredText},on:{focus:function(e){t.textareaHasError=!1},input:function(e){e.target.composing||(t.enteredText=e.target.value)}}}),t._v(" "),n("span",{staticClass:"textarea__validation"},[t._v("Please, enter text")])]),n("base-button",{staticClass:"form__item button_primary"},[t._v(" "+t._s(t.isDisabledForm?"Loading...":"Set new text")+" ")])],1)]),n("div",{staticClass:"wrapper"},[t.loading?n("the-loading"):n("ul",{staticClass:"list"},t._l(t.info,(function(e,i){return n("li",{key:i,staticClass:"list__item"},[t._v(" "+t._s(e)+" ")])})),0)],1)]):n("section",{staticClass:"section"},[n("base-button",{staticClass:"button_primary section__item",attrs:{type:"button"},on:{click:function(e){return t.back()}}},[n("span",[t._v("← ")]),n("span",[t._v("Go back")])]),n("h2",[t._v("The list of sentences")]),t.sentences.length>0?n("ul",{staticClass:"list"},t._l(t.sentences,(function(e,i){return n("li",{key:i,staticClass:"list__item"},[n("base-sentence",{attrs:{sentence:e},on:{click:function(n){return t.getSimilarText(e.sentence_id)}}}),e.sentence===t.clickedSentence?[t.similar.length>0?n("ul",t._l(t.similar,(function(e,i){return n("li",{key:i},[n("base-similar-sentence",{attrs:{info:e},on:{click:t.getTextById}})],1)})),0):n("span",[t._v("No similarity found(")])]:t._e()],2)})),0):n("the-loading")],1)])])},r=[],a=(n("99af"),n("d81d"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("2909")),c=n("bc3a"),o=n.n(c),l=o.a.create({baseURL:"https://test-backend.sempi.tech/v1",withCredentials:!1}),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sentence"},[n("base-button",{staticClass:"button_pure",attrs:{type:"button"},on:{click:function(e){return t.getSentenceClick(t.sentence.sentence_id)}}},[t._v(t._s(t.sentence.sentence))])],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",on:{click:function(e){return t.callback(e)}}},[t._t("default")],2)},m=[],p={name:"BaseButton",methods:{callback:function(t){this.$emit("click",t)}}},h=p,b=(n("efcc"),n("2877")),v=Object(b["a"])(h,f,m,!1,null,null,null),_=v.exports,x={name:"BaseSentence",props:{sentence:{type:Object,required:!0}},components:{BaseButton:_},methods:{getSentenceClick:function(t){this.$emit("click",t)}}},g=x,y=Object(b["a"])(g,u,d,!1,null,null,null),S=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"similar-sentence"},[n("div",{staticClass:"similar-sentence__text"},[t._v(t._s(t.info.sentence))]),n("div",{staticClass:"similar-sentence__persent"},[t._v(" Similarity - "+t._s((100*t.info.similarity).toFixed(2))+"% ")]),n("button",{attrs:{type:"button"},on:{click:function(e){return t.getSimilarSentences(t.info.text_id)}}},[t._v(" Show full text ")])])},T=[],C={name:"BaseSimilarSentence",props:{info:{type:Object,required:!0}},methods:{getSimilarSentences:function(t){this.$emit("click",t)}}},O=C,w=(n("ceec"),Object(b["a"])(O,k,T,!1,null,null,null)),j=w.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},t._l(2,(function(t){return n("div",{key:t,staticClass:"loading__item"})})),0)},I=[],E={name:"TheLoading"},P=E,$=(n("dd5b"),Object(b["a"])(P,B,I,!1,null,null,null)),D=$.exports,F=function(t){return Object(a["a"])(new Set(t))},L={name:"App",components:{BaseSentence:S,BaseSimilarSentence:j,BaseButton:_,TheLoading:D},mounted:function(){this.getAllText()},data:function(){return{info:{},enteredText:"",textId:"",isDisabledForm:!1,sentences:[],loading:!1,textareaHasError:!1,similarTextId:"",similar:[],similarLength:!1,clickedSentence:""}},methods:{getAllText:function(){var t=this;this.loading=!0,l.get("/text").then((function(e){var n=e.data.texts,i=n.map((function(t){return t.preview}));t.info=F(i),t.loading=!1})).catch((function(t){return console.log(t)}))},submitText:function(){var t=this;if(!this.enteredText)return this.textareaHasError=!0,!1;this.isDisabledForm=!0;var e=JSON.stringify({text:this.enteredText});l.post("/text",e).then((function(e){t.textId=e.data.id,t.isDisabledForm=!1,t.getTextById(t.textId)})).catch((function(t){return console.log(t)}))},getTextById:function(t){var e=this;this.clickedSentence="",this.sentences=[],l.get("/text/".concat(t)).then((function(t){e.similarTextId=t.data.id,e.sentences=t.data.sentences})).catch((function(t){return console.log(t)}))},getSimilarText:function(t){var e=this;l.get("/text/".concat(this.similarTextId,"/").concat(t,"/similar")).then((function(t){var n=t.data.similar_sentences;e.clickedSentence=t.data.sentence,0===n.length?e.similarLength=!0:e.similar=n.sort((function(t,e){return e.similarity-t.similarity}))})).catch((function(t){return console.log(t)}))},back:function(){this.textId=this.enteredText="",this.getAllText(),this.isDisabledForm=!1}}},A=L,H=(n("5c0b"),Object(b["a"])(A,s,r,!1,null,null,null)),M=H.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(M)}}).$mount("#app")},"58f2":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"9c0c":function(t,e,n){},ab0e:function(t,e,n){},ceec:function(t,e,n){"use strict";var i=n("ab0e"),s=n.n(i);s.a},dd5b:function(t,e,n){"use strict";var i=n("58f2"),s=n.n(i);s.a},efcc:function(t,e,n){"use strict";var i=n("0f69"),s=n.n(i);s.a}});
//# sourceMappingURL=app.389a78fe.js.map