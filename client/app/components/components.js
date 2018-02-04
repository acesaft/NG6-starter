import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Agents from './agents/agents';
import AgentsList from './agentsList/agentsList';
import AgentsListItem from './agentsListItem/agentsListItem';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Agents,
  AgentsList,
  AgentsListItem
])

.name;

export default componentModule;
