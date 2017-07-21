export default class GithubSearch {
    constructor() {
        this._githubUrl = 'https://api.github.com/search/repositories';
    }

    query(searchTerm) {
        let url = this._githubUrl;
        if (searchTerm) {
            url += `?q=${searchTerm}`
        }
        return fetch(url).then(response => response.json());
    }
}