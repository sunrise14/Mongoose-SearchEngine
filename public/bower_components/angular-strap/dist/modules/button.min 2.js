/**
 * angular-strap
 * @version v2.3.12 - 2017-01-26
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';angular.module('mgcrea.ngStrap.button',[]).provider('$button',function(){var e=this.defaults={activeClass:'active',toggleEvent:'click'};this.$get=function(){return{defaults:e}}}).directive('bsCheckboxGroup',function(){return{restrict:'A',require:'ngModel',compile:function(e,t){e.attr('data-toggle','buttons'),e.removeAttr('ng-model');var r=e[0].querySelectorAll('input[type="checkbox"]');angular.forEach(r,function(e){var r=angular.element(e);r.attr('bs-checkbox',''),r.attr('ng-model',t.ngModel+'.'+r.attr('value'))})}}}).directive('bsCheckbox',['$button','$$rAF',function(e,t){var r=e.defaults,n=/^(true|false|\d+)$/;return{restrict:'A',require:'ngModel',link:function(e,a,u,l){var o=r,i='INPUT'===a[0].nodeName,c=i?a.parent():a,s=!angular.isDefined(u.trueValue)||u.trueValue;n.test(u.trueValue)&&(s=e.$eval(u.trueValue));var d=!!angular.isDefined(u.falseValue)&&u.falseValue;n.test(u.falseValue)&&(d=e.$eval(u.falseValue));var f='boolean'!=typeof s||'boolean'!=typeof d;f&&(l.$parsers.push(function(e){return e?s:d}),l.$formatters.push(function(e){return angular.equals(e,s)})),l.$render=function(){var e=!!l.$viewValue;t(function(){i&&(a[0].checked=e),c.toggleClass(o.activeClass,e)})},a.bind(o.toggleEvent,function(){e.$apply(function(){i||l.$setViewValue(!c.hasClass('active')),l.$render()})})}}}]).directive('bsRadioGroup',function(){return{restrict:'A',require:'ngModel',compile:function(e,t){e.attr('data-toggle','buttons'),e.removeAttr('ng-model');var r=e[0].querySelectorAll('input[type="radio"]');angular.forEach(r,function(e){angular.element(e).attr('bs-radio',''),angular.element(e).attr('ng-model',t.ngModel)})}}}).directive('bsRadio',['$button','$$rAF',function(e,t){var r=e.defaults,n=/^(true|false|\d+)$/;return{restrict:'A',require:'ngModel',link:function(e,a,u,l){var o,i=r,c='INPUT'===a[0].nodeName,s=c?a.parent():a;u.$observe('value',function(t){o='boolean'!=typeof t&&n.test(t)?e.$eval(t):t,l.$render()}),l.$render=function(){var e=angular.equals(l.$viewValue,o);t(function(){c&&(a[0].checked=e),s.toggleClass(i.activeClass,e)})},a.bind(i.toggleEvent,function(){e.$apply(function(){l.$setViewValue(o),l.$render()})})}}}]);
//# sourceMappingURL=button.min.js.map
