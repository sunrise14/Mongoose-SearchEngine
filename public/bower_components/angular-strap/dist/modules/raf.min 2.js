/**
 * angular-strap
 * @version v2.3.12 - 2017-01-26
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';angular.version.minor<3&&angular.version.dot<14&&angular.module('ng').factory('$$rAF',['$window','$timeout',function(n,e){var a=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame,t=n.cancelAnimationFrame||n.webkitCancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelRequestAnimationFrame,i=!!a,r=i?function(n){var e=a(n);return function(){t(e)}}:function(n){var a=e(n,16.66,!1);return function(){e.cancel(a)}};return r.supported=i,r}]);
//# sourceMappingURL=raf.min.js.map
