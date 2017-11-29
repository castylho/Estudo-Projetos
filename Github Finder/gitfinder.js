document.querySelector(".finder").addEventListener("click",function (e) {
  let input = document.querySelector('input');
  let username = input.value;
//url = 'https://api.github.com/users/castylho';
  fetch('https://api.github.com/users/' + username)
  .then((res) => res.json())
  .then((data) =>{
    //console.log(data.name)
    let user = new Object();
    user.name = data.name;
    user.image = data.avatar_url
    user.location = data.location;
    user.public_repos = data.public_repos;
    user.followers = data.followers;
    user.following = data.following;
    toScreen(user);
  })


})

function toScreen(user){
  console.log(user);
  let saida = `
    <div class='saida'>
      <div>
        <img src="${user.image}" alt="${user.name} avatar">
      </div>
      <div class="user-info">
        <h2> ${user.name} </h2>
        <ul>
          <li>${user.location}</li>
          <li>Public Repos: ${user.public_repos}</li>
          <li>followers: ${user.followers}</li>
          <li>Following: ${user.following}</li>
        </ul>
      </div>
    </div>
  `
  document.querySelector("#results").innerHTML = saida
}
/*
data to catch
  name
  location
  public_repos
  followers
  following
*/
