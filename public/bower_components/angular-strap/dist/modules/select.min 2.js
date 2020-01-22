/**
 * angular-strap
 * @version v2.3.12 - 2017-01-26
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';angular.module('mgcrea.ngStrap.select',['mgcrea.ngStrap.tooltip','mgcrea.ngStrap.helpers.parseOptions']).provider('$select',function(){var e=this.defaults={animation:'am-fade',prefixClass:'select',prefixEvent:'$select',placement:'bottom-left',templateUrl:'select/select.tpl.html',trigger:'focus',container:!1,keyboard:!0,html:!1,delay:0,multiple:!1,allNoneButtons:!1,sort:!0,caretHtml:'&nbsp;<span class="caret"></span>',placeholder:'Choose among the following...',allText:'All',noneText:'None',maxLength:3,maxLengthHtml:'selected',iconCheckmark:'glyphicon glyphicon-ok',toggle:!1};this.$get=['$window','$document','$rootScope','$tooltip','$timeout',function(t,n,a,l,i){function o(a,o,r){var u={},s=angular.extend({},e,r);u=l(a,s);var d=u.$scope;d.$matches=[],s.multiple?d.$activeIndex=[]:d.$activeIndex=-1,d.$isMultiple=s.multiple,d.$showAllNoneButtons=s.allNoneButtons&&s.multiple,d.$iconCheckmark=s.iconCheckmark,d.$allText=s.allText,d.$noneText=s.noneText,d.$activate=function(e){d.$$postDigest(function(){u.activate(e)})},d.$select=function(e,t){d.$$postDigest(function(){u.select(e)})},d.$isVisible=function(){return u.$isVisible()},d.$isActive=function(e){return u.$isActive(e)},d.$selectAll=function(){for(var e=0;e<d.$matches.length;e++)d.$isActive(e)||d.$select(e)},d.$selectNone=function(){for(var e=0;e<d.$matches.length;e++)d.$isActive(e)&&d.$select(e)},u.update=function(e){d.$matches=e,u.$updateActiveIndex()},u.activate=function(e){return s.multiple?(u.$isActive(e)?d.$activeIndex.splice(d.$activeIndex.indexOf(e),1):d.$activeIndex.push(e),s.sort&&d.$activeIndex.sort(function(e,t){return e-t})):d.$activeIndex=e,d.$activeIndex},u.select=function(e){if(!(angular.isUndefined(e)||e<0||e>=d.$matches.length)){var t=d.$matches[e].value;d.$apply(function(){u.activate(e),s.multiple?o.$setViewValue(d.$activeIndex.map(function(e){return angular.isUndefined(d.$matches[e])?null:d.$matches[e].value})):(s.toggle?o.$setViewValue(t===o.$modelValue?void 0:t):o.$setViewValue(t),u.hide())}),d.$emit(s.prefixEvent+'.select',t,e,u),angular.isDefined(s.onSelect)&&angular.isFunction(s.onSelect)&&s.onSelect(t,e,u)}},u.$updateActiveIndex=function(){s.multiple?angular.isArray(o.$modelValue)?d.$activeIndex=o.$modelValue.map(function(e){return u.$getIndex(e)}):d.$activeIndex=[]:angular.isDefined(o.$modelValue)&&d.$matches.length?d.$activeIndex=u.$getIndex(o.$modelValue):d.$activeIndex=-1},u.$isVisible=function(){return s.minLength&&o?d.$matches.length&&o.$viewValue.length>=s.minLength:d.$matches.length},u.$isActive=function(e){return s.multiple?d.$activeIndex.indexOf(e)!==-1:d.$activeIndex===e},u.$getIndex=function(e){var t;for(t=d.$matches.length;t--&&!angular.equals(d.$matches[t].value,e););return t},u.$onMouseDown=function(e){if(e.preventDefault(),e.stopPropagation(),c){var t,n=angular.element(e.target);if('A'!==e.target.nodeName)for(var a=n.parent();!t&&a.length>0;)'A'===a[0].nodeName&&(t=a),a=a.parent();t?angular.element(t).triggerHandler('click'):n.triggerHandler('click')}},u.$onKeyDown=function(e){if(/(9|13|38|40)/.test(e.keyCode))return 9!==e.keyCode&&(e.preventDefault(),e.stopPropagation()),s.multiple&&9===e.keyCode?u.hide():s.multiple||13!==e.keyCode&&9!==e.keyCode?void(s.multiple||(38===e.keyCode&&d.$activeIndex>0?d.$activeIndex--:38===e.keyCode&&d.$activeIndex<0?d.$activeIndex=d.$matches.length-1:40===e.keyCode&&d.$activeIndex<d.$matches.length-1?d.$activeIndex++:angular.isUndefined(d.$activeIndex)&&(d.$activeIndex=0),d.$digest())):u.select(d.$activeIndex)},u.$isIE=function(){var e=t.navigator.userAgent;return e.indexOf('MSIE ')>0||e.indexOf('Trident/')>0||e.indexOf('Edge/')>0},u.$selectScrollFix=function(e){'UL'===n[0].activeElement.tagName&&(e.preventDefault(),e.stopImmediatePropagation(),e.target.focus())};var $=u.show;u.show=function(){$(),s.multiple&&u.$element.addClass('select-multiple'),i(function(){u.$element.on(c?'touchstart':'mousedown',u.$onMouseDown),s.keyboard&&a.on('keydown',u.$onKeyDown)},0,!1)};var m=u.hide;return u.hide=function(){!s.multiple&&angular.isUndefined(o.$modelValue)&&(d.$activeIndex=-1),u.$element.off(c?'touchstart':'mousedown',u.$onMouseDown),s.keyboard&&a.off('keydown',u.$onKeyDown),m(!0)},u}var r=/(ip[ao]d|iphone|android)/gi.test(t.navigator.userAgent),c='createTouch'in t.document&&r;return o.defaults=e,o}]}).directive('bsSelect',['$window','$parse','$q','$select','$parseOptions',function(e,t,n,a,l){var i=a.defaults;return{restrict:'EAC',require:'ngModel',link:function(e,t,n,o){var r={scope:e,placeholder:i.placeholder};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','keyboard','html','animation','placeholder','allNoneButtons','maxLength','maxLengthHtml','allText','noneText','iconCheckmark','autoClose','id','sort','caretHtml','prefixClass','prefixEvent','toggle'],function(e){angular.isDefined(n[e])&&(r[e]=n[e])});var c=/^(false|0|)$/i;angular.forEach(['html','container','allNoneButtons','sort'],function(e){angular.isDefined(n[e])&&c.test(n[e])&&(r[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide','onSelect'],function(t){var a='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(n[a])&&(r[t]=e.$eval(n[a]))});var u=t.attr('data-multiple');if(angular.isDefined(u)&&(c.test(u)?r.multiple=!1:r.multiple=u),'select'===t[0].nodeName.toLowerCase()){var s=t;s.css('display','none'),t=angular.element('<button type="button" class="btn btn-default"></button>'),s.after(t)}var d=l(n.bsOptions),$=a(t,o,r);$.$isIE()&&t[0].addEventListener('blur',$.$selectScrollFix);var m=d.$match[7].replace(/\|.+/,'').trim();e.$watch(m,function(t,n){d.valuesFn(e,o).then(function(e){$.update(e),o.$render()})},!0),e.$watch(n.ngModel,function(e,t){$.$updateActiveIndex(),o.$render()},!0),o.$render=function(){var e,n;r.multiple&&angular.isArray(o.$modelValue)?(e=o.$modelValue.map(function(e){return n=$.$getIndex(e),n!==-1&&$.$scope.$matches[n].label}).filter(angular.isDefined),e=e.length>(r.maxLength||i.maxLength)?e.length+' '+(r.maxLengthHtml||i.maxLengthHtml):e.join(', ')):(n=$.$getIndex(o.$modelValue),e=n!==-1&&$.$scope.$matches[n].label),t.html((e||r.placeholder)+(r.caretHtml||i.caretHtml))},r.multiple&&(o.$isEmpty=function(e){return!e||0===e.length}),e.$on('$destroy',function(){$&&$.destroy(),r=null,$=null})}}}]);
//# sourceMappingURL=select.min.js.map
