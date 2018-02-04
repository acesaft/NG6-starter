import angular from 'angular';
import uiRouter from 'angular-ui-router';
import agentsComponent from './agents.component';

let agentsModule = angular.module('agents', [
  uiRouter
])

.component('agents', agentsComponent)

.name;

export default agentsModule;
