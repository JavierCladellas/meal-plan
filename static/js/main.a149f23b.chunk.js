(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t(74)},36:function(e,a,t){},37:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e){e.exports={Carbonara:{Spaghetti:{quantity:100,unit:"g"},Guanciale:{quantity:50,unit:"g"},Pecorino:{quantity:25,unit:"g"},Parmesan:{quantity:25,unit:"g"},Egg:{quantity:2,unit:""},Pepper:{quantity:1,unit:"pinch"}},"Turkey Sandwich":{Bread:{quantity:2,unit:"slices"},Turkey:{quantity:1,unit:"slices"},Spinach:{quantity:1,unit:"handful"},Tomato:{quantity:2,unit:"slices"},Mayonnaise:{quantity:1,unit:"tbsp"},Emmental:{quantity:1,unit:"slices"}},Mayonnaise:{Egg:{quantity:1,unit:""},Garlic:{quantity:1,unit:"clove"},Mustard:{quantity:1,unit:"tsp"},"Worcestershire sauce":{quantity:1,unit:"tsp"},"Lemon juice":{quantity:1,unit:"tsp"},"White vinegar":{quantity:.5,unit:"tsp"},Sugar:{quantity:.25,unit:"tsp"},Salt:{quantity:1,unit:"pinch"},"Sunflower oil":{quantity:.5,unit:"cups"}}}},73:function(e){e.exports={Carbonara:"Carbonara.jpeg","Turkey Sandwich":"Turkey_sandwich.jpeg",Mayonnaise:"Mayonnaise.jpeg"}},74:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),l=t.n(r),i=(t(36),t(26)),o=t(3),s=t(4),u=t(2),m=t(7),d=(t(37),t(27)),p=function(e){var a=e.meal_index,t=e.day_index,r=Object(n.useState)(localStorage.getItem("dayCards")&&JSON.parse(localStorage.getItem("dayCards"))["day_"+t]&&JSON.parse(localStorage.getItem("dayCards"))["day_"+t]["meal_"+a]?JSON.parse(localStorage.getItem("dayCards"))["day_"+t]["meal_"+a]:null),l=Object(m.a)(r,2),i=l[0],o=l[1],s=Object.keys(e.recipes).map(function(e){return{value:e,label:e}}),u=e.meal_photos[i];return c.a.createElement("div",{className:"day-card-meal",key:t+"_"+a},c.a.createElement("div",{className:"meal-photo-wrapper"},c.a.createElement("img",{src:u?"./photos/"+u:"./photos/meal_default.png",alt:"meal"})),c.a.createElement("div",{className:"meal-name-wrapper"},c.a.createElement(d.a,{options:s,placeholder:"Select a meal",onChange:function(e){!function(e){var n=e.value,c=JSON.parse(localStorage.getItem("dayCards"));c["day_"+t]["meal_"+a]=n,o(n),localStorage.setItem("dayCards",JSON.stringify(c))}(e)},defaultInputValue:null!==i&&void 0!==i?i:""})),c.a.createElement("div",{className:"meal-remove-wrapper"},c.a.createElement("button",{className:"remove-meal-btn",onClick:function(){var e=JSON.parse(localStorage.getItem("dayCards"));delete e["day_"+t]["meal_"+a],o(null),0===Object.keys(e["day_"+t]).length&&(e["day_"+t]=null),localStorage.setItem("dayCards",JSON.stringify(e)),window.location.reload()}},"\xd7")))},y=function(e){var a=e.day_index,t=Object(n.useState)(localStorage.getItem("dayCards")&&JSON.parse(localStorage.getItem("dayCards"))["day_"+a]?JSON.parse(localStorage.getItem("dayCards"))["day_"+a]:null),r=Object(m.a)(t,2),l=r[0],i=r[1],o=Object(n.useState)(null),d=Object(m.a)(o,2),y=d[0],g=d[1],h=Object(n.useState)(null),f=Object(m.a)(h,2),E=f[0],S=f[1];return c.a.createElement("div",{className:"day-card",key:"day",onTouchStart:function(e){S(null),g(e.targetTouches[0].clientX)},onTouchMove:function(e){return S(e.targetTouches[0].clientX)},onTouchEnd:function(e){return function(e){if(y&&E){y-E>50&&e.target.classList.add("swipe");var t=JSON.parse(localStorage.getItem("dayCards"));delete t["day_"+a],0===Object.keys(t).length&&(t=null),localStorage.setItem("dayCards",JSON.stringify(t)),setTimeout(function(){return window.location.reload()},500)}}(e)}},c.a.createElement("div",{className:"day-card-header"},c.a.createElement("h3",null,"Day ",a)),c.a.createElement("div",{className:"day-card-body"},l&&Object.keys(l).map(function(t,n){return c.a.createElement(p,{key:n,day_index:a,meal_index:parseInt(t.split("_")[1]),recipes:e.recipes,meal_photos:e.meal_photos})})),c.a.createElement("button",{className:"add-meal-btn",onClick:function(){var e=l?Object(u.a)(Object(u.a)({},l),{},Object(s.a)({},"meal_"+(parseInt(Object.keys(l)[Object.keys(l).length-1].split("_")[1])+1),null)):{meal_0:null},t=JSON.parse(localStorage.getItem("dayCards"));t["day_"+a]=e,i(e),localStorage.setItem("dayCards",JSON.stringify(t))}},"+ Add meal"))},g=function(e){var a=e.photos,t=Object(n.useState)(localStorage.getItem("dayCards")?JSON.parse(localStorage.getItem("dayCards")):null),r=Object(m.a)(t,2),l=r[0],i=r[1];return c.a.createElement("div",{className:"meal-plan main-page"},c.a.createElement("div",{className:"meal-day-card"},l&&Object.keys(l).map(function(t,n){return c.a.createElement(y,{key:n,day_index:t.split("_")[1],recipes:e.recipes,meal_photos:a})})),c.a.createElement("button",{className:"add-day-btn",onClick:function(){var e=l?Object(u.a)(Object(u.a)({},l),{},Object(s.a)({},"day_"+(parseInt(Object.keys(l)[Object.keys(l).length-1].split("_")[1])+1),null)):{day_0:null};i(e),localStorage.setItem("dayCards",JSON.stringify(e))}},"+ Add day"))},h=(t(63),function(e){var a=e.ingredients,t=e.meal_photo;return c.a.createElement("div",{className:"recipe-card"},c.a.createElement("div",{className:"recipe-card-header"},c.a.createElement("div",{className:"recipe-photo-wrapper"},c.a.createElement("img",{src:"./photos/"+t,alt:"recipe"})),c.a.createElement("h3",null,e.name)),c.a.createElement("div",{className:"recipe-card-body"},c.a.createElement("ul",null,Object.keys(a).map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("span",null,e)," ",c.a.createElement("p",null,"(",a[e].quantity," ",a[e].unit,")"))}))))}),f=function(e){var a=e.recipes,t=e.photos;return c.a.createElement("div",{className:"recipes main-page"},Object.keys(a).map(function(e,n){return c.a.createElement(h,{key:n,name:e,ingredients:a[e],meal_photo:t[e]})}))},E=t(13),S=(t(64),function(){var e=Object(n.useState)("Meal Plan"),a=Object(m.a)(e,2),t=a[0],r=a[1],l=function(e){r(e.target.innerText)};return c.a.createElement("nav",null,c.a.createElement(E.Link,{to:"/meal-plan",className:"Meal Plan"===t?"active":"",onClick:function(e){return l(e)}},c.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),c.a.createElement("span",null,"Meal Plan")),c.a.createElement(E.Link,{to:"/recipes",className:"Recipes"===t?"active":"",onClick:function(e){return l(e)}},c.a.createElement("i",{className:"fa fa-book","aria-hidden":"true"}),c.a.createElement("span",null,"Recipes")),c.a.createElement(E.Link,{to:"/groceries",className:"Groceries"===t?"active":"",onClick:function(e){return l(e)}},c.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"}),c.a.createElement("span",null,"Groceries")),c.a.createElement(E.Link,{to:"/stock",className:"Stock"===t?"active":"",onClick:function(e){return l(e)}},c.a.createElement("i",{className:"fa fa-archive","aria-hidden":"true"}),c.a.createElement("span",null,"Stock")))}),b=(t(70),function(){return c.a.createElement("div",{className:"topbar"},c.a.createElement("h1",null,"Meal Planner"))}),k=(t(71),function(e){var a=e.recipes,t=JSON.parse(localStorage.getItem("dayCards")),n=[];Object.keys(t).map(function(e){return null!==t[e]&&Object.keys(t[e]).map(function(a){return null!==t[e][a]&&n.push(t[e][a]),null}),null});for(var r={},l=function(e){Object.keys(a[n[e]]).map(function(t){return void 0===r[t]?r[t]={quantity:a[n[e]][t].quantity,unit:a[n[e]][t].unit}:r[t].quantity+=a[n[e]][t].quantity,null})},i=0;i<n.length;i++)l(i);null===localStorage.getItem("checkboxes")&&localStorage.setItem("checkboxes",JSON.stringify(Object.keys(r).map(function(e){return{name:e,checked:!1}})));var o=function(e){var a=JSON.parse(localStorage.getItem("checkboxes"));a.map(function(a){return a.name===e.target.id.split("_")[0]&&(a.checked=!a.checked),null}),localStorage.setItem("checkboxes",JSON.stringify(a)),window.location.reload()};return c.a.createElement("div",{className:"groceries main-page"},c.a.createElement("h2",null,"Groceries"),Object.keys(r).map(function(e){return c.a.createElement("div",{className:"grocery-item",key:e},c.a.createElement("input",{id:e+"_checkbox",type:"checkbox",className:"grocery-checkbox",onChange:o,checked:null!==localStorage.getItem("checkboxes")&&JSON.parse(localStorage.getItem("checkboxes")).filter(function(a){return a.name===e})[0].checked}),c.a.createElement("p",{className:"grocery-name"},e),c.a.createElement("p",{className:"grocery-quantity"},r[e].quantity," ",r[e].unit))}))}),O=t(72),N=t(73);var v=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(b,null),c.a.createElement(o.Switch,null,c.a.createElement(o.Route,{exact:!0,path:"/"},c.a.createElement(g,{recipes:O,photos:N})),c.a.createElement(o.Route,{path:"/meal-plan"},c.a.createElement(g,{recipes:O,photos:N})),c.a.createElement(o.Route,{path:"/recipes"},c.a.createElement(f,{recipes:O,photos:N})),c.a.createElement(o.Route,{path:"/groceries"},c.a.createElement(k,{recipes:O}))),c.a.createElement(S,null)))};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)))}},[[28,1,2]]]);
//# sourceMappingURL=main.a149f23b.chunk.js.map