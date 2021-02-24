import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1,
      timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
      duration: '30s',
      preAllocatedVUs: 200, // how large the initial pool of VUs would be
      maxVUs: 200, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },
};

export default function () {
  var data = {
    gender: 'Female',
    price: '122',
    name: 'ladidida',
    description: 'this is the description',
    features: "['stuff','stuff']"
  };
  var params = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  http.post('http://localhost:3002/products/', data, params);
}
