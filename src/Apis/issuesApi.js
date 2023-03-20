import { Axios } from "./core";

const IssuesApi = {
  getData({ owner, repository, params }) {
    return Axios.get(
      `${process.env.REACT_APP_BACKEND}/repos/${owner}/${repository}/issues`,
      { params }
    );
  },
  getIssue({ owner, repository, number }) {
    return Axios.get(
      `${process.env.REACT_APP_BACKEND}/repos/${owner}/${repository}/issues/${number}`
    );
  },
};

export default IssuesApi;
