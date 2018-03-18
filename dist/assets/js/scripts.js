'use strict';(function(){var routerApp=angular.module('routerApp',['ui.router','angular-loading-bar']).run(['$rootScope','$state','$stateParams',function($rootScope,$state,$stateParams){$rootScope.$state=$state;$rootScope.$stateParams=$stateParams}]);routerApp.config(function($stateProvider,$urlRouterProvider,$locationProvider){$urlRouterProvider.otherwise('/404');$stateProvider.state('index',{url:'/',templateUrl:'partials/home.html',data:{pageTitle:'ProjectBeta 2018'},onEnter:function onEnter(){uiContainer.style.justifyContent='flex-start'}}).state('404',{url:'/404',templateUrl:'partials/404.html',data:{pageTitle:'404 \xB7 ProjectBeta 2018'}}).state('home',{url:'/home',templateUrl:'partials/home.html',data:{pageTitle:'ProjectBeta 2018'},onEnter:function onEnter(){if(isMobile){setTimeout(sidebarClose,100)}mainEl.scroll(0,0);uiContainer.style.justifyContent='flex-start'}}).state('about',{url:'/about',templateUrl:'partials/about.html',data:{pageTitle:'About \xB7 ProjectBeta'},onEnter:function onEnter(){if(isMobile){setTimeout(sidebarClose,100)}mainEl.scroll(0,0);uiContainer.style.justifyContent='space-between'}}).state('contact',{url:'/contact',templateUrl:'partials/contact.html',data:{pageTitle:'Contact \xB7 ProjectBeta'},onEnter:function onEnter(){if(isMobile){setTimeout(sidebarClose,100)}mainEl.scroll(0,0);uiContainer.style.justifyContent='space-between'}}).state('team',{url:'/team',templateUrl:'partials/team.html',data:{pageTitle:'Team \xB7 ProjectBeta'},onEnter:function onEnter(){if(isMobile){setTimeout(sidebarClose,100)}mainEl.scroll(0,0);uiContainer.style.justifyContent='space-between'}}).state('history',{url:'/history',templateUrl:'partials/history.html',data:{pageTitle:'History \xB7 ProjectBeta'},onEnter:function onEnter(){if(isMobile){setTimeout(sidebarClose,100)}mainEl.scroll(0,0);uiContainer.style.justifyContent='space-between'}}).state('alumni',{url:'/alumni',templateUrl:'partials/alumni.html',data:{pageTitle:'Alumni \xB7 ProjectBeta'},onEnter:function onEnter(){if(isMobile){setTimeout(sidebarClose,100)}mainEl.scroll(0,0);uiContainer.style.justifyContent='space-between'}});$locationProvider.html5Mode(true)})})();
"use strict";particlesJS("particles-js",{"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#e26767"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#e26767","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
"use strict";var buttons=document.querySelectorAll(".subject");var buttonsTexts=document.querySelectorAll(".subject p");for(var i=0;i<buttons.length;i++){buttons[i].addEventListener("click",openCloseTabs(i))}function openCloseTabs(i){return function(){var target=buttonsTexts[i].innerHTML;var triDiv=document.querySelector("#"+target+"Triangle");var container=document.querySelector("#"+target);if(triDiv.classList.contains("closed")){triDiv.classList.remove("closed");triDiv.classList.add("open");container.classList.remove("nodisplay")}else{triDiv.classList.remove("open");triDiv.classList.add("closed");container.classList.add("nodisplay")}}}function countdown(){var end=new Date("08/18/2018 0:0 AM");var _second=1000;var _minute=_second*60;var _hour=_minute*60;var _day=_hour*24;var timer;var daysElement=document.querySelector(".days p");var hoursElement=document.querySelector(".hours p");var minutesElement=document.querySelector(".minutes p");var secondsElement=document.querySelector(".seconds p");function showRemaining(){var now=new Date;var distance=end-now;if(distance<0){clearInterval(timer);return}var days=Math.floor(distance/_day);var hours=Math.floor(distance%_day/_hour);var minutes=Math.floor(distance%_hour/_minute);var seconds=Math.floor(distance%_minute/_second);days<10?daysElement.innerHTML="0"+days:daysElement.innerHTML=days;hours<10?hoursElement.innerHTML="0"+hours:hoursElement.innerHTML=hours;minutes<10?minutesElement.innerHTML="0"+minutes:minutesElement.innerHTML=minutes;seconds<10?secondsElement.innerHTML="0"+seconds:secondsElement.innerHTML=seconds}timer=setInterval(showRemaining,1000)}countdown();var html=document.documentElement;var sidebar=document.querySelector("section.sidebar");var mainEl=document.querySelector("section.main");var uiContainer=document.querySelector("#ui-view");var hamburger=document.querySelector("#hamburger");var cross=document.querySelector("#cross");var isMobile=getComputedStyle(html).maxWidth==="800px"?true:false;if(isMobile){sidebar.classList.remove("open");sidebar.classList.add("closed");mainEl.style.marginLeft="50px";hamburger.classList.remove("nodisplay");cross.classList.add("nodisplay")}function sidebarOpen(){if(sidebar.classList.contains("closed")){sidebar.classList.remove("closed");sidebar.classList.add("open");mainEl.style.marginLeft="250px";hamburger.classList.add("nodisplay");cross.classList.remove("nodisplay");if(isMobile){mainEl.style.marginLeft="0px";mainEl.style.left="250px"}}}function sidebarClose(){if(sidebar.classList.contains("open")){sidebar.classList.remove("open");sidebar.classList.add("closed");mainEl.style.marginLeft="50px";hamburger.classList.remove("nodisplay");cross.classList.add("nodisplay");if(isMobile){mainEl.style.marginLeft="50px";mainEl.style.left="0px"}}}hamburger.addEventListener("click",sidebarOpen);cross.addEventListener("click",sidebarClose);