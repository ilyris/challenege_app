import axios from "axios";

export const productCall = async (
  value: string,
  maxProducts: number,
  page: number
) => {
  const result = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_URL_PATH}?x-algolia-application-id=${process.env.REACT_APP_ID}&x-algolia-api-key=${process.env.REACT_APP_API_KEY}`,
    { query: value, hitsPerPage: maxProducts, page }
  );

  return result;
};
