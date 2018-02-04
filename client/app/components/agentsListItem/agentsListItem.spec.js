import AgentsListItemModule from './agentsListItem';
import AgentsListItemController from './agentsListItem.controller';
import AgentsListItemComponent from './agentsListItem.component';
import AgentsListItemTemplate from './agentsListItem.html';

describe('AgentsListItem', () => {
  let $rootScope, makeController, $compile;

  beforeEach(window.module(AgentsListItemModule));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $compile = $injector.get('$compile');
    makeController = () => {
      return new AgentsListItemController();
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
  describe('View', () => {
    // view layer specs.
    let scope, template, templateAsHtml;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<agents-list-item agent="agent"></agents-list-item>')(scope);
      scope.agent = {
        Name: 'Test Name',
        SecondaryName: 'foo Agency',
        ImageUrl: 'http://google.com'
      };
      scope.$apply();
      templateAsHtml = template.html();
    });

    it('img src should be set', () => {
      expect(templateAsHtml).to.match(/src="http:\/\/google\.com"/g);
    });

    it('should have a name set', () => {
      expect(templateAsHtml).to.match(/Test Name/g);
    });

    it('should have an agency name set', () => {
      expect(templateAsHtml).to.match(/foo Agency/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AgentsListItemComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AgentsListItemTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AgentsListItemController);
    });
  });
});
