import AgentsModule from './agents';
import AgentsController from './agents.controller';
import AgentsComponent from './agents.component';
import AgentsTemplate from './agents.html';

describe('Agents', () => {
  let $rootScope, makeController, $q, controller;
  let agentServiceMock, getAgentsResolve, getAgentsReject, mockPromise;

  beforeEach(window.module(AgentsModule));
    beforeEach(inject((_$rootScope_, _$q_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;

    mockPromise = {
      then: (callback) => {
        getAgentsResolve = callback;
        return mockPromise;
      },
      catch: (callback) => {
        getAgentsReject = callback;
        return mockPromise;
      }
    };

    agentServiceMock = {
      getAgents: () => {
        return mockPromise;
      }
    };
    sinon.spy(agentServiceMock, 'getAgents');

    makeController = () => {
      return new AgentsController(agentServiceMock);
    };

  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {

    let controller;

    beforeEach(() => {
      controller = makeController();
    });
    // controller specs

    describe('init', () => {
      it('should set initial values', () => {
        expect(controller.searchInput).to.eq('');
        expect(controller.loading).to.eq(false);
      });
    });

    describe('agentSearch()', () => {
      it('should set loading to true when calling agentSearch function', () => {
        controller.searchInput = 'test';
        controller.searchAgent();
        expect(controller.loading).to.eq(true);
      });

      it('should set loading to true when calling agentSearch function and to false on successful result', () => {
        controller.searchInput = 'test';
        controller.searchAgent();
        expect(controller.loading).to.eq(true);
        getAgentsResolve({
          data:{
            Results: ['a', 'b', 'c']
          }
        });
        expect(controller.loading).to.eq(false);
      });

      it('should set loading to true when calling agentSearch function and to false on unsuccessful result', () => {
        controller.searchInput = 'test';
        controller.searchAgent();
        expect(controller.loading).to.eq(true);
        getAgentsReject('error');
        expect(controller.loading).to.eq(false);
      });

      it('should call the agentSearchService with searchInput', () => {
        let searchInput = 'test';
        controller.searchInput = searchInput;
        controller.searchAgent();
        assert(agentServiceMock.getAgents.calledWith(searchInput))
      });

      it('should set agentsList on successfull result', () => {
        controller.searchAgent();
        getAgentsResolve({
          data:{
            Results: ['a', 'b', 'c']
          }
        });

        expect(controller.agentsList).to.eql(['a', 'b', 'c'])
      });

      it('should set error on unsuccessful result', () => {
        controller.searchAgent();
        getAgentsReject('error');

        expect(controller.error).to.eql('error');
      });
    })
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('should call agentSearch function on form submission', () => {
      expect(AgentsTemplate).to.match(/ng-submit="\$ctrl\.searchAgent\(\)"/g);
    });
    it('input element should have searchInput bound as model', () => {
      expect(AgentsTemplate).to.match(/ng-model="\$ctrl\.searchInput"/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AgentsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AgentsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AgentsController);
    });
  });
});
