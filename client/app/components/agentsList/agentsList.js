import angular from 'angular';
import uiRouter from 'angular-ui-router';
import agentsListComponent from './agentsList.component';

let agentsListModule = angular.module('agentsList', [
  uiRouter
])

.component('agentsList', agentsListComponent)

.name;

export default agentsListModule;
