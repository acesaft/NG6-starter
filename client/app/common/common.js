import angular from 'angular';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import User from './services/user/user';
import AgentsSearch from './services/agents-search/agents-search';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  AgentsSearch
])
  
.name;

export default commonModule;
