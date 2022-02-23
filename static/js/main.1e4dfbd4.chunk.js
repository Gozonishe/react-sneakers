(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{16:function(e,t,c){e.exports={overlay:"Drawer_overlay__2icPK",overlayVisible:"Drawer_overlayVisible__22BJl",drawer:"Drawer_drawer__1l_-L",items:"Drawer_items__3CKfa"}},17:function(e,t,c){e.exports={card:"Card_card__14JTH",favorite:"Card_favorite__1bO4Y",plus:"Card_plus__32QLg",sneaker:"Card_sneaker__iK_Se"}},19:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(28),s=c.n(n),i=c(11),o=(c(19),c(8)),l=c(9),d=c(7),j=c.n(d),u=c(10),b=c(3),x=c(5),m=c.n(x),h=r.a.createContext({}),f=c(1),p=function(e){var t=r.a.useContext(h).cartItems.reduce((function(e,t){return t.price+e}),0).toFixed(2);return Object(f.jsxs)("header",{className:"d-flex justify-between\tp-40",children:[Object(f.jsxs)("div",{className:"d-flex align-center",children:[Object(f.jsx)("img",{width:40,height:40,src:"/img/logo.png",alt:"logo"}),Object(f.jsx)(i.b,{to:"/",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"REACT SNEAKERS"}),Object(f.jsx)("p",{className:"opacity-5",children:"Best Sneakers Shop"})]})})]}),Object(f.jsxs)("ul",{className:"d-flex align-center",children:[Object(f.jsxs)("li",{className:"mr-30 cu-p",onClick:e.onClickCart,children:[Object(f.jsx)("img",{width:18,height:18,src:"/img/cart.svg",alt:"cart"}),Object(f.jsxs)("span",{children:[t," $"]})]}),Object(f.jsx)("li",{className:"mr-20 cu-p",children:Object(f.jsx)(i.b,{to:"/favorites",children:Object(f.jsx)("img",{width:18,height:18,src:"/img/heart.svg",alt:"favorites"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/orders",children:Object(f.jsx)("img",{width:20,height:20,src:"/img/user.svg",alt:"user"})})})]})]})},O=function(e){var t=e.image,c=e.title,a=e.description,n=r.a.useContext(h).setCartOpened;return Object(f.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(f.jsx)("img",{className:"mb-20",width:"120px",src:t,alt:"Empty"}),Object(f.jsx)("h2",{children:c}),Object(f.jsx)("p",{className:"opacity-6",children:a}),Object(f.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(f.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},v=c(16),g=c.n(v),k=function(e){return new Promise((function(t){return setTimeout(t,e)}))},N=function(e){var t=e.onClose,c=e.onRemove,a=e.items,n=void 0===a?[]:a,s=e.opened,i=r.a.useContext(h),o=i.cartItems,l=i.setCartItems,d=r.a.useState(null),x=Object(b.a)(d,2),p=x[0],v=x[1],N=r.a.useState(!1),w=Object(b.a)(N,2),y=w[0],C=w[1],S=r.a.useState(!1),_=Object(b.a)(S,2),I=_[0],A=_[1],F=o.reduce((function(e,t){return t.price+e}),0).toFixed(2),T=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,m.a.post("https://61ca295220ac1c0017ed8fe2.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,v(c.id),C(!0),l([]),a=0;case 10:if(!(a<o.length)){e.next=19;break}return r=o[a],e.next=14,m.a.delete("https://61ca295220ac1c0017ed8fe2.mockapi.io/cart/"+r.id);case 14:return e.next=16,k(1e3);case 16:a++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041e\u0448\u0431\u0438\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430!");case 24:A(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"".concat(g.a.overlay," ").concat(s?g.a.overlayVisible:""),children:Object(f.jsxs)("div",{className:g.a.drawer,children:[Object(f.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["Cart.",Object(f.jsx)("img",{className:"removeBtn cu-p",onClick:t,src:"/img/btn-remove.svg",alt:"Remove"})]}),n.length>0?Object(f.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(f.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(f.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(f.jsx)("img",{className:"mr-20",width:70,height:70,src:e.imageUrl,alt:"Sneakers"}),Object(f.jsxs)("div",{className:"mr-20",children:[Object(f.jsx)("p",{className:"mb-5",children:e.title}),Object(f.jsxs)("b",{children:[e.price," $"]})]}),Object(f.jsx)("img",{className:"removeBtn",onClick:function(){return c(e.id)},src:"/img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(f.jsxs)("div",{className:"cartTotalBLock",children:[Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Total:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[F," $"]})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Tax 5%:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[(.05*F).toFixed(2)," $"]})]})]}),Object(f.jsxs)("button",{disabled:I,className:"greenButton",onClick:T,children:["Purchase Order ",Object(f.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow"})]})]})]}):Object(f.jsx)(O,{title:y?"Order complete!":"Cart is empty",description:y?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(p," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:y?"/img/complete-order.jpg":"/img/empty-cart.jpg"})]})})},w=c(2),y=c(29),C=c(17),S=c.n(C),_=function(e){var t=e.id,c=e.onPlus,a=e.title,n=e.price,s=e.imageUrl,i=e.onFavorite,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,u=r.a.useContext(h).isItemAdded,x=r.a.useState(l),m=Object(b.a)(x,2),p=m[0],O=m[1],v={id:t,parentId:t,title:a,price:n,imageUrl:s};return Object(f.jsx)("div",{className:S.a.card,children:j?Object(f.jsxs)(y.a,{speed:2,width:165,height:226,viewBox:"0 0 150 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(f.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(f.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(f.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(f.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(f.jsxs)(f.Fragment,{children:[i&&Object(f.jsx)("div",{className:S.a.favorite,onClick:function(){i(v),O(!p)},children:Object(f.jsx)("img",{src:p?"/img/liked.svg":"/img/unliked.svg",alt:"Unliked"})}),Object(f.jsx)("img",{width:"100%",height:140,src:s,alt:"Sneakers"}),Object(f.jsx)("h5",{children:a}),Object(f.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(f.jsxs)("div",{className:"d-flex flex-column",children:[Object(f.jsx)("span",{children:"Price:"}),Object(f.jsxs)("b",{children:[n," $"]})]}),c&&Object(f.jsx)("img",{className:S.a.plus,onClick:function(){c(v)},src:u(t)?"/img/btn-checked.svg":"/img/btn-plus.svg",alt:"plus"})]})]})})},I=_;function A(e){var t=e.items,c=e.searchValue,a=e.setSearchValue,r=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsxs)("div",{className:"d-flex align-center mb-40 justify-between",children:[Object(f.jsx)("h1",{children:c?"Sneakers found: ".concat(c):"All sneakers."}),Object(f.jsxs)("div",{className:"search-block d-flex",children:[Object(f.jsx)("img",{src:"/img/search.svg",alt:"Search"}),c&&Object(f.jsx)("img",{className:"clear cu-p",onClick:function(){return a("")},src:"/img/btn-remove.svg",alt:"Remove"}),Object(f.jsx)("input",{placeholder:"Search...",onChange:r,value:c})]})]}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(l.a)(Array(8)):e).map((function(e,t){return Object(f.jsx)(_,Object(o.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})}function F(){var e=r.a.useContext(h),t=e.favorites,c=e.onAddToFavorite;return Object(f.jsx)("div",{className:"content p-40",children:t.length>0?Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(f.jsx)("h1",{children:"Favorites"})}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(f.jsx)(I,Object(o.a)({favorited:!0,onFavorite:c},e),t)}))})]}):Object(f.jsx)("div",{className:"favoriteEmpty",children:Object(f.jsx)("h1",{children:"No Favorite Sneakers."})})})}function T(){var e=r.a.useState([]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=r.a.useState(!0),s=Object(b.a)(n,2),i=s[0],d=s[1];return r.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://61ca295220ac1c0017ed8fe2.mockapi.io/orders");case 3:t=e.sent,c=t.data,a(c.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),d(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 :(");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(f.jsx)("h1",{children:"My orders."})}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:(i?Object(l.a)(Array(8)):c).map((function(e,t){return Object(f.jsx)(I,Object(o.a)({loading:i},e),t)}))})]})}var B=function(){var e=r.a.useState(!1),t=Object(b.a)(e,2),c=t[0],a=t[1],n=r.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],x=r.a.useState([]),O=Object(b.a)(x,2),v=O[0],g=O[1],k=r.a.useState([]),y=Object(b.a)(k,2),C=y[0],S=y[1],_=r.a.useState(""),I=Object(b.a)(_,2),B=I[0],E=I[1],P=r.a.useState(!0),L=Object(b.a)(P,2),R=L[0],V=L[1];r.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,a,r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([m.a.get("https://61ca295220ac1c0017ed8fe2.mockapi.io/cart"),m.a.get("https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites"),m.a.get("https://61ca295220ac1c0017ed8fe2.mockapi.io/items")]);case 3:t=e.sent,c=Object(b.a)(t,3),a=c[0],r=c[1],n=c[2],V(!1),d(a.data),g(r.data),S(n.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var $=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,m.a.delete("https://61ca295220ac1c0017ed8fe2.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,m.a.post("https://61ca295220ac1c0017ed8fe2.mockapi.io/cart",t);case 11:a=e.sent,r=a.data,d((function(e){return e.map((function(e){return e.parentId===r.parentId?Object(o.a)(Object(o.a)({},e),{},{id:r.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!v.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}m.a.delete("https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites/".concat(t.id)),g((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,m.a.post("https://61ca295220ac1c0017ed8fe2.mockapi.io/favorites",t);case 8:c=e.sent,a=c.data,g((function(e){return[].concat(Object(l.a)(e),[a])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435!");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(h.Provider,{value:{items:C,cartItems:i,favorites:v,isItemAdded:function(e){return i.some((function(t){return Number(t.parentIdnn)===Number(e)}))},onAddToFavorite:D,setCartOpened:a,setCartItems:d,onAddToCart:$},children:Object(f.jsxs)("div",{className:"wrapper clear",children:[Object(f.jsx)(N,{items:i,onRemove:function(e){try{d((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))})),m.a.delete("https://61ca295220ac1c0017ed8fe2.mockapi.io/cart/".concat(e))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.log(t)}},onClose:function(){return a(!1)},opened:c}),Object(f.jsx)(p,{onClickCart:function(){return a(!0)}}),Object(f.jsxs)(w.c,{children:[Object(f.jsx)(w.a,{path:"/",exact:!0,element:Object(f.jsx)(A,{items:C,cartItems:i,searchValue:B,setSearchValue:E,onChangeSearchInput:function(e){E(e.target.value)},onAddToFavorite:D,onAddToCart:$,isLoading:R})}),Object(f.jsx)(w.a,{path:"/favorites",exact:!0,element:Object(f.jsx)(F,{})}),Object(f.jsx)(w.a,{path:"/orders",exact:!0,element:Object(f.jsx)(T,{})})]})]})})};c(54);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(B,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.1e4dfbd4.chunk.js.map