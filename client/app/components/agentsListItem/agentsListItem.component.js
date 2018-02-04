import template from './agentsListItem.html';
import controller from './agentsListItem.controller';
import './agentsListItem.scss';

let agentsListItemComponent = {
  bindings: {
    agent: '<'
  },
  template,
  controller
};

export default agentsListItemComponent;
