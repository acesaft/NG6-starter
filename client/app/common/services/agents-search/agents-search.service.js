import {AGENTS_SEARCH_URL} from '../../config';

class AgentSearchService {

  constructor($http, $q){
    "ngInject";
    this._$http = $http;
    this._$q = $q;
  };

  getAgents(searchInput) {
    let defer = this._$q.defer();

    if(!searchInput || searchInput.length === 0){
      defer.reject('Please provide a search term!');
      return defer.promise;
    } 
    
    this._$http.get(`${AGENTS_SEARCH_URL}?SearchTerm=${searchInput}`)
      .then(data => defer.resolve(data))
      .catch(error => defer.reject(error));

    return defer.promise;
  }
}

export default AgentSearchService;