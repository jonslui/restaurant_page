(()=>{"use strict";const e=function(){let e=document.getElementById("aboutus_text");null!=e?e.remove():(e=document.createElement("div"),e.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",e.setAttribute("class","container_text"),e.setAttribute("id","aboutus_text"),document.getElementById("aboutus_container").appendChild(e))};function t(e,t){let n=document.createElement("div");n.setAttribute("class","menu_subtitle"),n.innerHTML=e,t.appendChild(n)}function n(e,t){let n=document.createElement("div");n.setAttribute("class","dish");let i=document.createElement("div");i.setAttribute("class","dish_name"),i.innerHTML=e[0];let a=document.createElement("div");a.setAttribute("class","dish_description"),a.innerHTML=e[1];let d=document.createElement("div");d.setAttribute("class","dish_price"),d.innerHTML=e[2],n.appendChild(i),n.appendChild(a),n.appendChild(d),t.appendChild(n)}let i=[["SAUTÉED WILD MUSHROOMS","$7",""],["SALADE NIÇOISE","$6",""],["FRESH HERB RISOTTO","$7",""],["FRUIT GAZPACHO","$8",""],["HARICOT VERTS","$6",""],["FRENCH ONION SOUP","$5",""]],a=[["BEEF TENDERLOIN","Roasted with a spicy chili infusion, served medium rare and topped with chimichurri salsa","$26"],["DELMONICO","Hand-cut 20oz bone-in sirloin steak topped with pink peppercorn, cognac and leek reduction","$28"],["PRIME RIB","Aged 8 oz prime rib slow roasted in rock salt and served with au jus and fresh grated horseradish","$28"],["NEW ORLEANS BOUILLABAISSE","Petite prawns, Andouille sausage, mirepoix and Cajun cream sauce served over red rice","$16"],["OREGON TROUT","Sautéed fresh boneless trout with tarragon butter suace, parsley and caramelized shallots","$19"],["COHO SALMON","Over-roasted line-caught salmon with chervil and kumquat pesto","$26"]],d=[["CRÈME ANGLAISE AND FRESH ASSORTED BERRIES","$11",""],["TRIO OF CRÈME BRULEE","$14",""],["CRÈME DE PAPAYA","$9",""]],r=[["NOVELTY HILL VIOGNIER","Riesling - Columbia Valley '19","$30"],["COLTERENZIO PINOT GRIGIO","White - Italy '18","$28"],["ISABEL MONDAVI","Chardonnay - Sonoma, California '17","$32"],["BOTANI MOSCATEL SECO","Chardonnay - Sierras de Malaga, Spain '19","$32"],["PROSECCO BRUT, PRESTO","Sparkling - Italy '18","$27"],["MOSCATO D'ASTI, TRANCHERO","Sweet - Italy '18","$18"]];const l=function(){let e=document.getElementById("menu_items_container");null!=e?e.remove():(e=document.createElement("div"),e.setAttribute("id","menu_items_container"),t("APPETIZERS",e),i.forEach((t=>n(t,e))),t("ENTREES",e),a.forEach((t=>n(t,e))),t("DESSERTS",e),d.forEach((t=>n(t,e))),t("DRINKS",e),r.forEach((t=>n(t,e))),document.getElementById("menu_container").appendChild(e))},o=function(){let e=document.getElementById("reservations_text");null!=e?e.remove():(e=document.createElement("div"),e.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",e.setAttribute("class","container_text"),e.setAttribute("id","reservations_text"),document.getElementById("reservations_container").appendChild(e))};(function(){let e=document.getElementById("content"),t=document.createElement("img");t.src="./assets/kaboompics_Bourbon Glazed Salmon.jpeg",t.classList.add("mainbodyimage"),e.appendChild(t);let n=document.createElement("div");n.setAttribute("id","header_container"),e.appendChild(n);let i=document.createElement("div");function a(e,t){let i=document.createElement("div");i.innerHTML=t,i.setAttribute("id",e),i.setAttribute("class","tab"),n.appendChild(i)}i.innerHTML="THE CITRUS BAR",i.setAttribute("id","restaurant_name"),n.appendChild(i),a("tab1","MENU"),a("tab2","CONTACT"),a("tab3","RESERVATIONS"),a("tab4","ABOUT US");let d=document.createElement("div");d.innerHTML="FARM FRESH, EVERY TIME.",d.setAttribute("id","slogan"),e.appendChild(d);let r=document.createElement("div");r.setAttribute("class","text_container"),r.setAttribute("id","aboutus_container"),e.appendChild(r);let l=document.createElement("div");l.innerHTML="ABOUT US",l.setAttribute("class","container_title"),l.setAttribute("id","aboutus_title"),r.appendChild(l);let o=document.createElement("img");o.src="./assets/kaboompics_Healthy Dinner.jpeg",o.classList.add("mainbodyimage"),e.appendChild(o);let s=document.createElement("div");s.setAttribute("class","text_container"),s.setAttribute("id","menu_container"),e.appendChild(s);let c=document.createElement("div");c.innerHTML="MENU",c.setAttribute("class","container_title"),c.setAttribute("id","menu_title"),s.appendChild(c);let u=document.createElement("img");u.src="./assets/kaboompics_People holding glasses of white wine making a toast.jpeg",u.classList.add("mainbodyimage"),e.appendChild(u);let m=document.createElement("div");m.setAttribute("class","text_container"),m.setAttribute("id","reservations_container"),e.appendChild(m);let E=document.createElement("div");E.innerHTML="RESERVATIONS",E.setAttribute("class","container_title"),E.setAttribute("id","reservations_title"),m.appendChild(E);let p=document.createElement("img");p.src="./assets/man-with-tattooed-hands-prepping-food.jpg",p.classList.add("mainbodyimage"),e.appendChild(p);let A=document.createElement("div");A.setAttribute("id","contact_container"),e.appendChild(A);let b=document.createElement("div");function h(e,t,n,i,a){let d=document.createElement("div");d.setAttribute("class","contact_text"),d.innerHTML=e+":\n"+t+"\n"+e+", "+n+", "+i+"\n"+a,A.appendChild(d)}b.innerHTML="CONTACT US",b.setAttribute("id","contact_title"),A.appendChild(b),h("Brookyln","1054 Anmoore Road","NY","11201","(718) 797-7239"),h("Denver","899 Davis Lane","CO","80203","(720) 263-4947"),h("Seattle","1392 Elliot Avenue","WA","98122","(206) 568-1365");let v=document.createElement("div");v.setAttribute("class","contact_text"),v.innerHTML="Monday - Thursday:\n8am - 11pm\nFriday - Sunday\n11am - 11pm",A.appendChild(v)})(),function(){let t=document.getElementById("tab4"),n=document.getElementById("aboutus_title");t.addEventListener("click",e),n.addEventListener("click",e);let i=document.getElementById("tab1"),a=document.getElementById("menu_title");i.addEventListener("click",l),a.addEventListener("click",l);let d=document.getElementById("tab3"),r=document.getElementById("reservations_title");d.addEventListener("click",o),r.addEventListener("click",o)}()})();