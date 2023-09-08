(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,i){for(var n=0;n<i.length;n++){var o=i[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,i){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var i=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._markerTemplate=document.querySelector(i).content.cloneNode(!0),this._button=this._markerTemplate.querySelector(".button"),this._xOffset=e.xOffset,this._yOffset=e.yOffset,this._name=e.name,this._color=e.color,this._getPosition=n}var i,n;return i=t,(n=[{key:"setMarker",value:function(){var t=this._getPosition(this._xOffset,this._yOffset),e=t.xPosition,i=t.yPosition;return this._button.dataset.xOffset=this._xOffset,this._button.dataset.yOffset=this._yOffset,this._button.dataset.name=this._name,this._button.classList.add("button_color_".concat(this._color)),this._button.style.top="".concat(i,"px"),this._button.style.left="".concat(e,"px"),this._markerTemplate}}])&&e(i.prototype,n),Object.defineProperty(i,"prototype",{writable:!1}),t}(),n=[{name:"Мост",color:"blue",xOffset:-501,yOffset:194},{name:"Стадион",color:"green",xOffset:-260,yOffset:-38.5},{name:"Дом",color:"blue",xOffset:-367,yOffset:-238.5},{name:"Многоэтажка",color:"blue",xOffset:426,yOffset:-295.5},{name:"Лаборатория",color:"blue",xOffset:467,yOffset:-45.5},{name:"Библиотека",color:"green",xOffset:200,yOffset:-116},{name:"Паркинг",color:"blue",xOffset:133,yOffset:109},{name:"Общежитеие",color:"green",xOffset:360,yOffset:150},{name:"Отель",color:"green",xOffset:160,yOffset:270},{name:"Общежитие",color:"blue",xOffset:646,yOffset:192}],o=document.querySelector(".background"),r=document.querySelector(".checkbox-container__checkbox");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var c,f=new(function(){function t(e,i,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._background=document.querySelector(e),this._imageWidth=i,this._imageHeight=n,this._buttonSize=o,this._imageRatio=this._imageWidth/this._imageHeight,this._containerWidth=this._background.clientWidth,this._containerHeight=this._background.clientHeight,this._containerRatio=this._containerWidth/this._containerHeight,this._kTransform="",this._xCenter="",this._yCenter="",this.xPosition="",this.yPosition="",this._currentImageWidth=""}var e,i;return e=t,(i=[{key:"getContainerSize",value:function(){return this._containerWidth=this._background.clientWidth,this._containerHeight=this._background.clientHeight,this._containerRatio=this._containerWidth/this._containerHeight,{containerWidth:this._containerWidth,containerHeight:this._containerHeight}}},{key:"_setCenterPosition",value:function(){this._containerRatio>this._imageRatio?this._currentImageWidth=this._containerWidth:this._currentImageWidth=this._containerHeight*this._imageRatio,this._kTransform=this._currentImageWidth/this._imageWidth,this._xCenter=(this._containerWidth-this._buttonSize)/2,this._yCenter=(this._containerHeight-this._buttonSize)/2}},{key:"getMarkerPosition",value:function(t,e){return this.getContainerSize(),this._setCenterPosition(),this.yPosition=this._yCenter+e*this._kTransform,this.xPosition=this._xCenter+t*this._kTransform,{xPosition:this.xPosition,yPosition:this.yPosition}}}])&&a(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}())(".background",1920,1080,41);function u(t){!function(t){o.append(t.setMarker())}(new i(t,".marker-template",h))}function h(t,e){return f.getMarkerPosition(t,e)}window.addEventListener("resize",(function(){clearTimeout(c),c=setTimeout((function(){o.querySelectorAll(".button").forEach((function(t){!function(t){var e=t.dataset.xOffset,i=t.dataset.yOffset,n=f.getMarkerPosition(e,i),o=n.xPosition,r=n.yPosition;t.style.top="".concat(r,"px"),t.style.left="".concat(o,"px")}(t)}))}),100)})),o.addEventListener("click",(function(t){if(r.checked){var e=prompt("Название объекта"),i=prompt("Цвет маркера green/blue"),s=f.getContainerSize(),a=s.containerWidth,c=s.containerHeight,h={name:"".concat(e),color:"".concat(i),xOffset:t.clientX-a/2,yOffset:t.clientY-c/2};n.push(h),u(h),console.log(n),r.checked=!1}else t.target!==t.currentTarget?t.target.classList.toggle("button_active"):o.querySelectorAll(".button_active").forEach((function(t){t.classList.remove("button_active")}))})),n.forEach((function(t){u(t)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUFrQkMsU0FBUSxTQUFDaUIsR0FDckRBLEVBQWE3RCxVQUFVOEQsT0FBTyxnQkFDaEMsR0FHTixJQUVBeEQsRUFBWXNDLFNBQVEsU0FBQ3RFLEdBQ25CNEQsRUFBYTVELEVBQ2YsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdGFzay1mb3Itb25seS8uL3NyYy9jb21wb25lbnRzL1BsYWNlTWFya2VyLmpzIiwid2VicGFjazovL3Rlc3QtdGFzay1mb3Itb25seS8uL3NyYy92YXJpYWJsZXMvdmFyaWFibGVzLmpzIiwid2VicGFjazovL3Rlc3QtdGFzay1mb3Itb25seS8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXRhc2stZm9yLW9ubHkvLi9zcmMvY29tcG9uZW50cy9Qb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFjZU1hcmtlciB7XHJcbiAgY29uc3RydWN0b3IobWFya2VyLCBtYXJrZXJUZW1wbGF0ZSwgZ2V0UG9zaXRpb24pIHtcclxuICAgIHRoaXMuX21hcmtlclRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtYXJrZXJUZW1wbGF0ZSkuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICB0aGlzLl9idXR0b24gPSB0aGlzLl9tYXJrZXJUZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJyk7XHJcbiAgICB0aGlzLl94T2Zmc2V0ID0gbWFya2VyLnhPZmZzZXQ7XHJcbiAgICB0aGlzLl95T2Zmc2V0ID0gbWFya2VyLnlPZmZzZXQ7XHJcbiAgICB0aGlzLl9uYW1lID0gbWFya2VyLm5hbWU7XHJcbiAgICB0aGlzLl9jb2xvciA9IG1hcmtlci5jb2xvcjtcclxuICAgIHRoaXMuX2dldFBvc2l0aW9uID0gZ2V0UG9zaXRpb247XHJcbiAgfVxyXG4gIHNldE1hcmtlcigpIHtcclxuICAgIGNvbnN0IHsgeFBvc2l0aW9uLCB5UG9zaXRpb24gfSA9IHRoaXMuX2dldFBvc2l0aW9uKHRoaXMuX3hPZmZzZXQsIHRoaXMuX3lPZmZzZXQpO1xyXG4gICAgdGhpcy5fYnV0dG9uLmRhdGFzZXQueE9mZnNldCA9IHRoaXMuX3hPZmZzZXQ7XHJcbiAgICB0aGlzLl9idXR0b24uZGF0YXNldC55T2Zmc2V0ID0gdGhpcy5feU9mZnNldDtcclxuICAgIHRoaXMuX2J1dHRvbi5kYXRhc2V0Lm5hbWUgPSB0aGlzLl9uYW1lO1xyXG4gICAgdGhpcy5fYnV0dG9uLmNsYXNzTGlzdC5hZGQoYGJ1dHRvbl9jb2xvcl8ke3RoaXMuX2NvbG9yfWApO1xyXG4gICAgdGhpcy5fYnV0dG9uLnN0eWxlLnRvcCA9IGAke3lQb3NpdGlvbn1weGA7XHJcbiAgICB0aGlzLl9idXR0b24uc3R5bGUubGVmdCA9IGAke3hQb3NpdGlvbn1weGA7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya2VyVGVtcGxhdGU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBtYXJrZXJBcnJheSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAn0JzQvtGB0YInLFxyXG4gICAgY29sb3I6ICdibHVlJyxcclxuICAgIHhPZmZzZXQ6IC01MDEsXHJcbiAgICB5T2Zmc2V0OiAxOTQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn0KHRgtCw0LTQuNC+0L0nLFxyXG4gICAgY29sb3I6ICdncmVlbicsXHJcbiAgICB4T2Zmc2V0OiAtMjYwLFxyXG4gICAgeU9mZnNldDogLTM4LjUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn0JTQvtC8JyxcclxuICAgIGNvbG9yOiAnYmx1ZScsXHJcbiAgICB4T2Zmc2V0OiAtMzY3LFxyXG4gICAgeU9mZnNldDogLTIzOC41LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ9Cc0L3QvtCz0L7RjdGC0LDQttC60LAnLFxyXG4gICAgY29sb3I6ICdibHVlJyxcclxuICAgIHhPZmZzZXQ6IDQyNixcclxuICAgIHlPZmZzZXQ6IC0yOTUuNSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQm9Cw0LHQvtGA0LDRgtC+0YDQuNGPJyxcclxuICAgIGNvbG9yOiAnYmx1ZScsXHJcbiAgICB4T2Zmc2V0OiA0NjcsXHJcbiAgICB5T2Zmc2V0OiAtNDUuNSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQkdC40LHQu9C40L7RgtC10LrQsCcsXHJcbiAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgIHhPZmZzZXQ6IDIwMCxcclxuICAgIHlPZmZzZXQ6IC0xMTYsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn0J/QsNGA0LrQuNC90LMnLFxyXG4gICAgY29sb3I6ICdibHVlJyxcclxuICAgIHhPZmZzZXQ6IDEzMyxcclxuICAgIHlPZmZzZXQ6IDEwOSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQntCx0YnQtdC20LjRgtC10LjQtScsXHJcbiAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgIHhPZmZzZXQ6IDM2MCxcclxuICAgIHlPZmZzZXQ6IDE1MCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQntGC0LXQu9GMJyxcclxuICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgeE9mZnNldDogMTYwLFxyXG4gICAgeU9mZnNldDogMjcwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ9Ce0LHRidC10LbQuNGC0LjQtScsXHJcbiAgICBjb2xvcjogJ2JsdWUnLFxyXG4gICAgeE9mZnNldDogNjQ2LFxyXG4gICAgeU9mZnNldDogMTkyLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQnKTtcclxuXHJcbmV4cG9ydCBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtY29udGFpbmVyX19jaGVja2JveCcpO1xyXG4iLCJpbXBvcnQgUGxhY2VNYXJrZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGFjZU1hcmtlcic7XHJcbmltcG9ydCB7IG1hcmtlckFycmF5LCBiYWNrZ3JvdW5kLCBjaGVja2JveCB9IGZyb20gJy4uL3ZhcmlhYmxlcy92YXJpYWJsZXMnO1xyXG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3NpdGlvbic7XHJcbmltcG9ydCAnLi4vcGFnZXMvaW5kZXguY3NzJztcclxuXHJcbmNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKCcuYmFja2dyb3VuZCcsIDE5MjAsIDEwODAsIDQxKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1hcmtlcihtYXJrZXIpIHtcclxuICBjb25zdCBuZXdNYXJrZXIgPSBuZXcgUGxhY2VNYXJrZXIobWFya2VyLCAnLm1hcmtlci10ZW1wbGF0ZScsIGdldFBvc2l0aW9uKTtcclxuICByZW5kZXJNYXJrZXIobmV3TWFya2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9zaXRpb24oeE9mZnNldCwgeU9mZnNldCkge1xyXG4gIHJldHVybiBwb3NpdGlvbi5nZXRNYXJrZXJQb3NpdGlvbih4T2Zmc2V0LCB5T2Zmc2V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTWFya2VyKG1hcmtlcikge1xyXG4gIGJhY2tncm91bmQuYXBwZW5kKG1hcmtlci5zZXRNYXJrZXIoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlUG9zaXRpb25NYXJrZXIobWFya2VyKSB7XHJcbiAgY29uc3QgeE9mZnNldCA9IG1hcmtlci5kYXRhc2V0LnhPZmZzZXQ7XHJcbiAgY29uc3QgeU9mZnNldCA9IG1hcmtlci5kYXRhc2V0LnlPZmZzZXQ7XHJcbiAgY29uc3QgeyB4UG9zaXRpb24sIHlQb3NpdGlvbiB9ID0gcG9zaXRpb24uZ2V0TWFya2VyUG9zaXRpb24oeE9mZnNldCwgeU9mZnNldCk7XHJcbiAgbWFya2VyLnN0eWxlLnRvcCA9IGAke3lQb3NpdGlvbn1weGA7XHJcbiAgbWFya2VyLnN0eWxlLmxlZnQgPSBgJHt4UG9zaXRpb259cHhgO1xyXG59XHJcbmxldCByZXNpemVEZWxheTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICBjbGVhclRpbWVvdXQocmVzaXplRGVsYXkpO1xyXG4gIHJlc2l6ZURlbGF5ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24nKS5mb3JFYWNoKChtYXJrZXIpID0+IHtcclxuICAgICAgcmVQb3NpdGlvbk1hcmtlcihtYXJrZXIpO1xyXG4gICAgfSk7XHJcbiAgfSwgMTAwKTtcclxufSk7XHJcbmJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICBjb25zdCBwb2ludE5hbWUgPSBwcm9tcHQoJ9Cd0LDQt9Cy0LDQvdC40LUg0L7QsdGK0LXQutGC0LAnKTtcclxuICAgIGNvbnN0IHBvaW50Q29sb3IgPSBwcm9tcHQoJ9Cm0LLQtdGCINC80LDRgNC60LXRgNCwIGdyZWVuL2JsdWUnKTtcclxuICAgIGNvbnN0IHsgY29udGFpbmVyV2lkdGgsIGNvbnRhaW5lckhlaWdodCB9ID0gcG9zaXRpb24uZ2V0Q29udGFpbmVyU2l6ZSgpO1xyXG4gICAgY29uc3QgbWFya2VyID0ge1xyXG4gICAgICBuYW1lOiBgJHtwb2ludE5hbWV9YCxcclxuICAgICAgY29sb3I6IGAke3BvaW50Q29sb3J9YCxcclxuICAgICAgeE9mZnNldDogZS5jbGllbnRYIC0gY29udGFpbmVyV2lkdGggLyAyLFxyXG4gICAgICB5T2Zmc2V0OiBlLmNsaWVudFkgLSBjb250YWluZXJIZWlnaHQgLyAyLFxyXG4gICAgfTtcclxuICAgIG1hcmtlckFycmF5LnB1c2gobWFya2VyKTtcclxuICAgIGNyZWF0ZU1hcmtlcihtYXJrZXIpO1xyXG4gICAgY29uc29sZS5sb2cobWFya2VyQXJyYXkpO1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdidXR0b25fYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b25fYWN0aXZlJykuZm9yRWFjaCgoYWN0aXZlTWFya2VyKSA9PiB7XHJcbiAgICAgICAgYWN0aXZlTWFya2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbm1hcmtlckFycmF5LmZvckVhY2goKG1hcmtlcikgPT4ge1xyXG4gIGNyZWF0ZU1hcmtlcihtYXJrZXIpO1xyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgYmFja2dyb3VuZEltYWdlV2lkdGgsIGJhY2tncm91bmRJbWFnZUhlaWdodCwgYnV0dG9uU2l6ZSkge1xyXG4gICAgdGhpcy5fYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKTtcclxuICAgIHRoaXMuX2ltYWdlV2lkdGggPSBiYWNrZ3JvdW5kSW1hZ2VXaWR0aDtcclxuICAgIHRoaXMuX2ltYWdlSGVpZ2h0ID0gYmFja2dyb3VuZEltYWdlSGVpZ2h0O1xyXG4gICAgdGhpcy5fYnV0dG9uU2l6ZSA9IGJ1dHRvblNpemU7XHJcbiAgICB0aGlzLl9pbWFnZVJhdGlvID0gdGhpcy5faW1hZ2VXaWR0aCAvIHRoaXMuX2ltYWdlSGVpZ2h0O1xyXG4gICAgdGhpcy5fY29udGFpbmVyV2lkdGggPSB0aGlzLl9iYWNrZ3JvdW5kLmNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5fY29udGFpbmVySGVpZ2h0ID0gdGhpcy5fYmFja2dyb3VuZC5jbGllbnRIZWlnaHQ7XHJcbiAgICB0aGlzLl9jb250YWluZXJSYXRpbyA9IHRoaXMuX2NvbnRhaW5lcldpZHRoIC8gdGhpcy5fY29udGFpbmVySGVpZ2h0O1xyXG4gICAgdGhpcy5fa1RyYW5zZm9ybSA9ICcnO1xyXG4gICAgdGhpcy5feENlbnRlciA9ICcnO1xyXG4gICAgdGhpcy5feUNlbnRlciA9ICcnO1xyXG4gICAgdGhpcy54UG9zaXRpb24gPSAnJztcclxuICAgIHRoaXMueVBvc2l0aW9uID0gJyc7XHJcbiAgICB0aGlzLl9jdXJyZW50SW1hZ2VXaWR0aCA9ICcnO1xyXG4gIH1cclxuICBnZXRDb250YWluZXJTaXplKCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyV2lkdGggPSB0aGlzLl9iYWNrZ3JvdW5kLmNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5fY29udGFpbmVySGVpZ2h0ID0gdGhpcy5fYmFja2dyb3VuZC5jbGllbnRIZWlnaHQ7XHJcbiAgICB0aGlzLl9jb250YWluZXJSYXRpbyA9IHRoaXMuX2NvbnRhaW5lcldpZHRoIC8gdGhpcy5fY29udGFpbmVySGVpZ2h0O1xyXG4gICAgcmV0dXJuIHsgY29udGFpbmVyV2lkdGg6IHRoaXMuX2NvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQ6IHRoaXMuX2NvbnRhaW5lckhlaWdodCB9O1xyXG4gIH1cclxuICBfc2V0Q2VudGVyUG9zaXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5fY29udGFpbmVyUmF0aW8gPiB0aGlzLl9pbWFnZVJhdGlvKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRJbWFnZVdpZHRoID0gdGhpcy5fY29udGFpbmVyV2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jdXJyZW50SW1hZ2VXaWR0aCA9IHRoaXMuX2NvbnRhaW5lckhlaWdodCAqIHRoaXMuX2ltYWdlUmF0aW87XHJcbiAgICB9XHJcbiAgICB0aGlzLl9rVHJhbnNmb3JtID0gdGhpcy5fY3VycmVudEltYWdlV2lkdGggLyB0aGlzLl9pbWFnZVdpZHRoO1xyXG4gICAgdGhpcy5feENlbnRlciA9ICh0aGlzLl9jb250YWluZXJXaWR0aCAtIHRoaXMuX2J1dHRvblNpemUpIC8gMjtcclxuICAgIHRoaXMuX3lDZW50ZXIgPSAodGhpcy5fY29udGFpbmVySGVpZ2h0IC0gdGhpcy5fYnV0dG9uU2l6ZSkgLyAyO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWFya2VyUG9zaXRpb24oeE9mZnNldCwgeU9mZnNldCkge1xyXG4gICAgdGhpcy5nZXRDb250YWluZXJTaXplKCk7XHJcbiAgICB0aGlzLl9zZXRDZW50ZXJQb3NpdGlvbigpO1xyXG4gICAgdGhpcy55UG9zaXRpb24gPSB0aGlzLl95Q2VudGVyICsgeU9mZnNldCAqIHRoaXMuX2tUcmFuc2Zvcm07XHJcbiAgICB0aGlzLnhQb3NpdGlvbiA9IHRoaXMuX3hDZW50ZXIgKyB4T2Zmc2V0ICogdGhpcy5fa1RyYW5zZm9ybTtcclxuICAgIHJldHVybiB7IHhQb3NpdGlvbjogdGhpcy54UG9zaXRpb24sIHlQb3NpdGlvbjogdGhpcy55UG9zaXRpb24gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBsYWNlTWFya2VyIiwibWFya2VyIiwibWFya2VyVGVtcGxhdGUiLCJnZXRQb3NpdGlvbiIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJfbWFya2VyVGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2J1dHRvbiIsIl94T2Zmc2V0IiwieE9mZnNldCIsIl95T2Zmc2V0IiwieU9mZnNldCIsIl9uYW1lIiwibmFtZSIsIl9jb2xvciIsImNvbG9yIiwiX2dldFBvc2l0aW9uIiwia2V5IiwidmFsdWUiLCJfdGhpcyRfZ2V0UG9zaXRpb24iLCJ4UG9zaXRpb24iLCJ5UG9zaXRpb24iLCJkYXRhc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uY2F0Iiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwibWFya2VyQXJyYXkiLCJiYWNrZ3JvdW5kIiwiY2hlY2tib3giLCJyZXNpemVEZWxheSIsInBvc2l0aW9uIiwiUG9zaXRpb24iLCJjb250YWluZXIiLCJiYWNrZ3JvdW5kSW1hZ2VXaWR0aCIsImJhY2tncm91bmRJbWFnZUhlaWdodCIsImJ1dHRvblNpemUiLCJfYmFja2dyb3VuZCIsIl9pbWFnZVdpZHRoIiwiX2ltYWdlSGVpZ2h0IiwiX2J1dHRvblNpemUiLCJfaW1hZ2VSYXRpbyIsIl9jb250YWluZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiX2NvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsIl9jb250YWluZXJSYXRpbyIsIl9rVHJhbnNmb3JtIiwiX3hDZW50ZXIiLCJfeUNlbnRlciIsIl9jdXJyZW50SW1hZ2VXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVySGVpZ2h0IiwiZ2V0Q29udGFpbmVyU2l6ZSIsIl9zZXRDZW50ZXJQb3NpdGlvbiIsImNyZWF0ZU1hcmtlciIsImFwcGVuZCIsInNldE1hcmtlciIsInJlbmRlck1hcmtlciIsImdldE1hcmtlclBvc2l0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIl9wb3NpdGlvbiRnZXRNYXJrZXJQbyIsInJlUG9zaXRpb25NYXJrZXIiLCJlIiwiY2hlY2tlZCIsInBvaW50TmFtZSIsInByb21wdCIsInBvaW50Q29sb3IiLCJfcG9zaXRpb24kZ2V0Q29udGFpbmUiLCJjbGllbnRYIiwiY2xpZW50WSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInRvZ2dsZSIsImFjdGl2ZU1hcmtlciIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=