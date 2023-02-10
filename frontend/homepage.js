const usernameBox = document.querySelector(".username");

async function getName() {
  let res = await fetch("/current-user");
  let result = await res.json();
  usernameBox.textContent = result;
}

getName();

function logout() {
  document.location.href = "/login.html";
}
