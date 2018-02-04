import template from './agentsList.html';
import controller from './agentsList.controller';
import './agentsList.scss';

let agentsListComponent = {
  bindings: {
    list: '<',
    loading: '<'
  },
  template,
  controller
};

export default agentsListComponent;
