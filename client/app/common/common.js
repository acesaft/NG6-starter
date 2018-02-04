import angular from 'angular';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import User from './services/user/user';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User
])
  
.name;

export default commonModule;
