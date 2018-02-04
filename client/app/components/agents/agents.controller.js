class AgentsController {
  constructor(agentSearchService) {
    "ngInject";
    this.agentSearchService = agentSearchService;
    this.searchInput = '';
    this.loading = false;
    this.error = '';
  }

  searchAgent() {
    this.error = '';
    this.loading = true;
    this.agentSearchService.getAgents(this.searchInput)
      .then(result => {
        this.agentsList = result.data.Results;
        this.loading = false;
      })
      .catch(error => {
        this.error = error;
        this.loading = false;
      });
  }
}

export default AgentsController;
