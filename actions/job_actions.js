import axios from 'axios';
import reverseGeoCode from 'latlng-to-zip';
import qs from 'qs';

import { FETCH_JOBS } from './types';

const JOB_QUERY_PARAMS = {
  publisher: '2377831494416694',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

export const fetchJobs = region => async dispatch => {
  try {
    let zip = await reverseGeoCode(region);
  } catch (e) {
    console.error(e);
  }
};
