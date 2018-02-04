import AgentsListModule from './agentsList';
import AgentsListController from './agentsList.controller';
import AgentsListComponent from './agentsList.component';
import AgentsListTemplate from './agentsList.html';

describe('AgentsList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AgentsListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AgentsListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
  });

  describe('Component', () => {
    // component/directive specs
    let component = AgentsListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AgentsListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AgentsListController);
    });
  });
});
