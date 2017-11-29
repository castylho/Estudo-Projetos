var gUsers = document.querySelector('#getUsers')
.addEventListener('click',getUsers);

var gPosts = document.querySelector('#getPosts')
.addEventListener('click',getPosts);

var gTodos = document.querySelector('#getPhotos')
.addEventListener('click',getPhotos);

function getUsers() {
  let root = 'https://jsonplaceholder.typicode.com/users';
  fetch(root)
  .then((res) => res.json())
  .then((data) => {
    let saida = "<h2> Users </h2>";
    data.forEach(function(user) {
      saida += `
      <div class='resposta users'>
        <h3>#${user.id}</h3>
        <ul>
          <li>${user.name}</li>
          <li>${user.email}</li>
          <li>Username: ${user.username}</li>
          <li>Address:
            ${user.address.street},${user.address.suite}
            </li>
          <li>City: ${user.address.city}</li>
          <li>${user.phone}</li>
          <li>${user.website}</li>
          <li>${user.company.name}</li>
        </ul>
      </div>
      `
    });
    document.querySelector('#saida').classList.remove("grid4");
    document.querySelector('#saida').innerHTML = saida;
  });
}
function getPosts() {
  let url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let saida = "<h2> Posts </h2>";
    data.forEach(function(post) {
      saida += `
      <div class='resposta posts'>
        <h3>#${post.title}</h3>
        <p>${post.body}</p>
      </div>
      `
    });
    document.querySelector('#saida').classList.remove("grid4");
    document.querySelector('#saida').innerHTML = saida;
  });
}
function getPhotos() {
  let url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let saida = " ";
    data.forEach(function(photo) {
      saida += `
      <div class='resposta photos'>
        <img src="https://dummyimage.com/600x400/7e8c85/0717eb">
        <p>${photo.title}</p>
      </div>
      `
    });

    document.querySelector('#saida').className = "grid4";
    document.querySelector('#saida').innerHTML = saida;
  });

}
