import angular from 'angular';
import uiRouter from 'angular-ui-router';
import agentsListItemComponent from './agentsListItem.component';

let agentsListItemModule = angular.module('agentsListItem', [
  uiRouter
])

.component('agentsListItem', agentsListItemComponent)

.name;

export default agentsListItemModule;
