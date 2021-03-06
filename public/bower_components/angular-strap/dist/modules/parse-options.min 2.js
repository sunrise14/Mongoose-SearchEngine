/**
 * angular-strap
 * @version v2.3.12 - 2017-01-26
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';angular.module('mgcrea.ngStrap.helpers.parseOptions',[]).provider('$parseOptions',function(){var n=this.defaults={regexp:/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/};this.$get=['$parse','$q',function(r,e){function s(s,t){function a(n,r){return n.map(function(n,e){var s,t,a={};return a[$]=n,s=o(r,a),t=f(r,a),{label:s,value:t,index:e}})}var u={},i=angular.extend({},n,t);u.$values=[];var l,o,$,c,p,f,v;return u.init=function(){u.$match=l=s.match(i.regexp),o=r(l[2]||l[1]),$=l[4]||l[6],c=l[5],p=r(l[3]||''),f=r(l[2]?l[1]:$),v=r(l[7])},u.valuesFn=function(n,r){return e.when(v(n,r)).then(function(r){return angular.isArray(r)||(r=[]),u.$values=r.length?a(r,n):[],u.$values})},u.displayValue=function(n){var r={};return r[$]=n,o(r)},u.init(),u}return s}]});
//# sourceMappingURL=parse-options.min.js.map
