(this["webpackJsonpmy-shop"]=this["webpackJsonpmy-shop"]||[]).push([[5],{48:function(e,a,t){e.exports=t.p+"static/media/plus.cef7090d.svg"},49:function(e,a,t){e.exports=t.p+"static/media/minus.3799e113.svg"},53:function(e,a,t){"use strict";t.r(a);var n=t(47),r=t(43),c=t.n(r),l=t(45),s=t(46),m=t(0),i=t.n(m),o=t(48),u=t.n(o),d=t(49),f=t.n(d),p=t(50),E=function(e){var a=e.cartItem,t=e.removeItem,n=e.quantityMinus,r=e.quantityPlus;return i.a.createElement("div",{className:"cart-item"},i.a.createElement("div",{className:"cart-buttons"},i.a.createElement("span",{className:"delete-btna",onClick:function(){return t(a.id)}},i.a.createElement("i",{className:"fa fa-close fa-lg"}," ")),i.a.createElement("span",{className:"like-btna"},i.a.createElement("i",{className:"fa fa-chrome fa-lg"}," "))),i.a.createElement("div",{className:"cart-image"},i.a.createElement("img",{style:{height:130,width:130},src:a.image_url,alt:""})),i.a.createElement("div",{className:"cart-description"},i.a.createElement("span",null,a.title),i.a.createElement("span",null,a.brand),i.a.createElement("span",null,"$",a.price)),i.a.createElement("div",{className:"cart-quantity"},i.a.createElement("button",{onClick:function(){return r(a.id)},className:"plus-btna",type:"button",name:"button"},i.a.createElement("img",{src:u.a,alt:""})),i.a.createElement("input",{type:"text",name:"name",value:a.quantity,readOnly:!0}),i.a.createElement("button",{onClick:function(){return n(a.id)},className:"minus-btna",type:"button",name:"button"},i.a.createElement("img",{src:f.a,alt:""}))),i.a.createElement("div",{className:"total-price"},"$",parseInt(a.price)*parseInt(a.quantity)))},h=function(e){var a=e.cartItem,t=e.removeItem,n=e.quantityMinus,r=e.quantityPlus,c=e.clearCart,l=e.setIsCarted,s=e.isCarted,m=a.reduce((function(e,a){return e+a.price*a.quantity}),0),o=a.map((function(e){return e.id})),u=a.map((function(e){return e.quantity}));return i.a.createElement(i.a.Fragment,null,a.length>0&&i.a.createElement("div",{onClick:function(){return l(!s)},className:"hiddenCart bolder"},i.a.createElement("span",{className:"showCartButton"},s&&i.a.createElement("i",{className:"fa fa-cart-plus fa-2x"}),!s&&i.a.createElement("i",{className:"fa fa-cart-arrow-down fa-2x"})),s&&i.a.createElement(p.HashLink,{to:"#productser",scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"start"})}}," ",i.a.createElement("span",{className:"acolor bolder"}," Go Back ")),!s&&i.a.createElement(p.HashLink,{to:"#carter",scroll:function(e){return e.scrollIntoView({behavior:"instant",block:"start"})}}," ",i.a.createElement("span",{className:"acolor bolder"}," Tap To Purchase ")," "),i.a.createElement("span",{className:"cartNumber"},"  ",a.length," ")," "),s&&i.a.createElement("div",{className:"cart",id:"carter"},i.a.createElement("div",{className:"cart-title bolder"},"Shopping Cart"),a.map((function(e){return i.a.createElement(E,{cartItem:e,removeItem:t,quantityMinus:n,quantityPlus:r,key:e.id})})),i.a.createElement("div",{id:"total-cart"},i.a.createElement("span",null,"TOTAL"),i.a.createElement("span",{style:{paddingRight:35}}," $",m," ")," "),i.a.createElement("div",{id:"last-cart"},i.a.createElement("span",{onClick:function(e){c(),l(!1)},id:"cancel-cart"}," Clear Cart "),i.a.createElement("span",{onClick:function(){var e=btoa(o),a=btoa(u);console.log(atob(e)),console.log(atob(a));window.confirm("OrderLink :"+window.location.href+"order/"+e+"/"+a)},id:"checkout-cart"}," Checkout ")))," ")},b=t(12),N=function(e,a){return{removeCartItem:function(t){a(e.filter((function(e){return e.id!==t})))},quantityPlus:function(t){var n=e.map((function(e){return e.id===t?Object(b.a)({},e,{quantity:parseInt(e.quantity)+1}):e}));a(n)},quantityMinus:function(t){var n=1,r=e.map((function(e){return e.id!==t?e:e.quantity-1!==0?Object(b.a)({},e,{quantity:parseInt(e.quantity)-1}):void(n=0)}));1===n&&a(r)},clearCart:function(){!0===window.confirm("Are you sure to perform the action?")&&a([])}}},k=function(){return i.a.createElement("div",{className:"nav",id:"naver"}," ",i.a.createElement("span",{style:{marginTop:3}},"GADGET SQUARE")," ")},v=function(e){var a=e.id,t=e.title,n=e.brand,r=e.price,c=e.image_url,l=e.brief,s=e.description,m=e.addToCart,o="desc"+a;return i.a.createElement("div",{id:a,className:"product"},i.a.createElement("img",{className:"productImage",src:c,onClick:function(){return document.getElementById(o).style.display="block"},alt:t}),i.a.createElement("div",{className:"simple-modal",id:o,style:{display:"none"},tabIndex:"0"},i.a.createElement("div",{className:"simple-modal__content"},i.a.createElement("header",null,i.a.createElement("h4",{className:"bolder"},t),i.a.createElement("span",{onClick:function(){return document.getElementById(o).style.display="none"}},"x")),i.a.createElement("div",{className:"modal-main"},i.a.createElement("img",{className:"productImagedesc",src:c,alt:t}),i.a.createElement("p",{className:"title bolder"}," ",t," "),i.a.createElement("p",{className:"brand"}," ",n," "),i.a.createElement("p",{className:"brand"}," $",r," "),i.a.createElement("br",null),i.a.createElement("h5",{className:"title bolder"},"Description"),i.a.createElement("p",null," ",s)))),i.a.createElement("div",{className:"productText"},i.a.createElement("p",{className:"title bolder"}," ",t," "),i.a.createElement("p",{className:"brand"}," ",n," "),i.a.createElement("p",{className:"brief"}," ",l," ")),i.a.createElement("div",{className:"cartText"},i.a.createElement("span",{className:"price"},"  $",r,"  "),i.a.createElement("button",{className:"addCartButton bolder",onClick:function(e){m(a)}}," Add to Cart")))},y=function(e){var a=e.data,t=e.setKeyword,r=e.cartItem,c=e.setCartItem,l=function(e){var t=a.find((function(a){return a.id===e})),l=r.findIndex((function(e){return e.id===t.id}));c(-1===l?[].concat(Object(n.a)(r),[Object(b.a)({},t,{quantity:1})]):r.map((function(a){return a.id===e?Object(b.a)({},a,{quantity:parseInt(a.quantity)+1}):a})))};return i.a.createElement("div",{id:"productser",className:"products"},i.a.createElement("h1",{className:"bolder"}," Our Products "),i.a.createElement("div",{id:"searcher"},i.a.createElement("input",{type:"text",onChange:function(e){t(e.target.value)},placeholder:"Search Our products"}),i.a.createElement("button",{type:"submit"},i.a.createElement("i",{className:"fa fa-search"}))),a.map((function(e){return i.a.createElement(v,Object.assign({},e,{key:e.id,addToCart:l}))})))},g=function(){return i.a.createElement("div",{id:"bannerer",className:"banner"},i.a.createElement("h1",{id:"bannerText"},"Follow Us"),i.a.createElement("div",{style:{display:"block !important"},className:"footer-icons"},i.a.createElement("a",{href:"https://www.facebook.com/khandoker.anan"},i.a.createElement("i",{className:"fa fa-facebook"})),i.a.createElement("a",{href:"https://twitter.com/khandokeranan"},i.a.createElement("i",{className:"fa fa-twitter"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/khandokeranan"},i.a.createElement("i",{className:"fa fa-linkedin"})),i.a.createElement("a",{href:"http://google.com/+khandokeranan"},i.a.createElement("i",{className:"fa fa-github"})),i.a.createElement("a",{href:"https://www.instagram.com/khandoker.anan/"},i.a.createElement("i",{className:"fa fa-instagram"}))))},w=function(){return i.a.createElement("footer",{className:"footer-distributed"},i.a.createElement("div",{className:"footer-left"},i.a.createElement("h3",null,"KH",i.a.createElement("span",null,"ANAN")),i.a.createElement("p",{className:"footer-links"},i.a.createElement("a",{href:"./home"},"Home"),"\xb7",i.a.createElement("a",{href:"#productser"},"Products")),i.a.createElement("p",{className:"footer-company-name"},"KHanan \xa9 2019")),i.a.createElement("div",{className:"footer-center"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-map-marker"}),i.a.createElement("p",null,i.a.createElement("span",null,"Dhanmondi"),"Dhaka , Bangladesh")),i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-phone"}),i.a.createElement("p",null,"+88 01913872351")),i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-envelope"}),i.a.createElement("p",null,i.a.createElement("a",{href:"mailto:khandokeranan@gmail.com"},"khandokeranan@gmail.com")))),i.a.createElement("div",{className:"footer-right"},i.a.createElement("p",{className:"footer-company-about"},i.a.createElement("span",null,"About Us"),"Developing more games or apps can explore my knowledge with keeping new challenges."),i.a.createElement("div",{className:"footer-icons"},i.a.createElement("a",{href:"https://www.facebook.com/khandoker.anan"},i.a.createElement("i",{className:"fa fa-facebook"})),i.a.createElement("a",{href:"https://twitter.com/khandokeranan"},i.a.createElement("i",{className:"fa fa-twitter"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/khandokeranan"},i.a.createElement("i",{className:"fa fa-linkedin"})),i.a.createElement("a",{href:"http://google.com/+khandokeranan"},i.a.createElement("i",{className:"fa fa-github"})),i.a.createElement("a",{href:"https://www.instagram.com/khandoker.anan/"},i.a.createElement("i",{className:"fa fa-instagram"})))))},C=t(21);a.default=function(){var e=Object(C.c)((function(e){return e})),a=e.cartItem,t=e.productData,r=Object(C.b)(),o=function(e){r({type:"SET_CART_ITEMS",payload:e})},u=Object(m.useState)([]),d=Object(s.a)(u,2),f=d[0],p=d[1],E=Object(m.useState)(""),b=Object(s.a)(E,2),v=b[0],I=b[1],q=Object(m.useState)(!1),O=Object(s.a)(q,2),j=O[0],T=O[1];Object(m.useEffect)((function(){function e(){return(e=Object(l.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://oleek.co/data.php").then((function(e){return e.json()}));case 2:a=e.sent,r({type:"SET_DATA",payload:a}),p(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.useEffect)((function(){var e=t.filter((function(e){if(e.title.toLowerCase().includes(v.toLowerCase())||e.brand.toLowerCase().includes(v.toLowerCase()))return e}));p(e)}),[v]);var x=N(a,o),A=x.removeCartItem,P=x.quantityPlus,S=x.quantityMinus,L=x.clearCart;return i.a.createElement(i.a.Fragment,null,!j&&i.a.createElement(k,null),i.a.createElement(h,{cartItem:Object(n.a)(a),removeItem:A,quantityMinus:S,quantityPlus:P,clearCart:L,setIsCarted:T,isCarted:j}),!j&&i.a.createElement(y,{data:f,setKeyword:I,cartItem:a,setCartItem:o}),i.a.createElement(g,null),i.a.createElement(w,null))}}}]);
//# sourceMappingURL=5.aef32808.chunk.js.map