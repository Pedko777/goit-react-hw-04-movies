import queryString from "query-string";

const getSearchQueryParams = (qs) => {
    return queryString.parse(qs);
}

export default getSearchQueryParams;