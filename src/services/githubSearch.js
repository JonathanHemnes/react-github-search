export default class GithubSearch {
    constructor() {
        this._githubUrl = 'https://api.github.com/search/repositories';
    }

    query(searchTerm, sort, order) {
        let url = this._githubUrl;
        if (searchTerm) {
            url += `?q=${searchTerm}`
        }
        if (sort) {
            url += `&sort=${sort}`
        }
        if(order) {
            url += `&order=${order}`
        }
        return fetch(url).then(response => response.json());
    }
}