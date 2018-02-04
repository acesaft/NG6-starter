import angular from 'angular';
import AgentSearchService from './agents-search.service';

let agentSearchModule = angular.module('agentsSearch', [])

.service('agentSearchService', AgentSearchService)

.name;

export default agentSearchModule;