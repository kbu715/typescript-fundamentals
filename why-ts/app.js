// api url
const url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

// user data
let user = {};

// jsdoc ('https://devdocs.io/jsdoc/')
/**
 *
 *
 *
 */

//type의 property를 정의
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

//위의 jsdoc의 정의 때문에 어떤 type의 어떤 property가 있는지 vscode에서 제공해준다.

fetchUser().then(function (response) {
  console.log(response.data.address.city);
});

function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      // console.log(user.name);
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
