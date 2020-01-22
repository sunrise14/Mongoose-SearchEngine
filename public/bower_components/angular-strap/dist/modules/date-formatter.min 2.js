/**
 * angular-strap
 * @version v2.3.12 - 2017-01-26
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';angular.module('mgcrea.ngStrap.helpers.dateFormatter',[]).service('$dateFormatter',['$locale','dateFilter',function(t,e){function r(t){return/(h+)([:\.])?(m+)([:\.])?(s*)[ ]?(a?)/i.exec(t).slice(1)}this.getDefaultLocale=function(){return t.id},this.getDatetimeFormat=function(e,r){return t.DATETIME_FORMATS[e]||e},this.weekdaysShort=function(e){return t.DATETIME_FORMATS.SHORTDAY},this.hoursFormat=function(t){return r(t)[0]},this.minutesFormat=function(t){return r(t)[2]},this.secondsFormat=function(t){return r(t)[4]},this.timeSeparator=function(t){return r(t)[1]},this.showSeconds=function(t){return!!r(t)[4]},this.showAM=function(t){return!!r(t)[5]},this.formatDate=function(t,r,n,i){return e(t,r,i)}}]);
//# sourceMappingURL=date-formatter.min.js.map
