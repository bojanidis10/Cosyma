angular.module("angular-sidemenu",[]).controller("ceSidemenuCtrl",["$scope",function(e){e.label="+",e.closePicker=function(){var e=$("#ce-picker"),c=$("#ce-picker-button");e.hasClass("open")?(e.addClass("close"),c.addClass("close"),e.removeClass("open"),c.removeClass("open")):(e.removeClass("close"),c.removeClass("close"),e.addClass("open"),c.addClass("open"))};var c=function(e){var c=$("#ce-picker"),o=$("#ce-picker-button div"),l=$("#ce-picker-button div.center");c.css({"background-color":e}),o.css({"border-right-color":e}),l.css({"background-color":e})},o=function(){void 0!=e.config.color&&c(e.config.color),void 0!=e.config.label&&(e.label=e.config.label)};o()}]).directive("ceSidemenu",function(){return{restrict:"E",transclude:!0,scope:{config:"=ceConfig"},controller:"ceSidemenuCtrl",template:'<div id="ce-picker-button" ng-click="closePicker()"><div class="top"></div><div class="center"><span>{{label}}</span></div><div class="bottom"></div></div><div id="ce-picker" ng-transclude></div>'}});