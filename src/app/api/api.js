import axios from 'axios';

const baseURL = 'https://localhost:7299/api/';

axios.defaults.baseURL = baseURL;

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(300);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody).catch((err) => console.log(err)),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Categories = {
  list: () => requests.get('/categories'),
  details: (categoryId) => requests.get(`/categories/${categoryId}`),
  create: (category) => requests.post('/categories', category),
  update: (category) => axios.put(`/categories/${category.id}`, category),
  delete: (categoryId) => axios.delete(`/categories/${categoryId}`),
};

const agent = {
  Categories,
};

export default agent;
