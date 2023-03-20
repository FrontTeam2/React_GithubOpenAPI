import { Axios } from "./core";

const IssueApi = {
    getIssue(owner, repository, params) {
        return Axios.get(`/repos/${owner}/${repository}/issues`, { params });
    },
};

export default IssueApi;
