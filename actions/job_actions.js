import axios from 'axios';
import qs from 'qs';
import { Location } from 'expo';

import { FETCH_JOBS, LIKE_JOB } from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '2377831494416694',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let location = await Location.reverseGeocodeAsync(region);
    const url = buildJobsUrl(location[0].postalCode);
    let { data } = await axios.get(url);

    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (e) {
    console.error(e);
  }
};

export const likeJob = job => {
  return {
    type: LIKE_JOB,
    payload: job
  };
};
