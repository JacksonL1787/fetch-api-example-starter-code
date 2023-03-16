const API_URL = "https://randomuser.me/api";

function getProfileData() {
  // Fetch new user from API
  // Then update profile card with new data
  // If error, console log.
}

// Don't edit the code below

function updateProfileCard(user) {
  const { name, email, picture } = user;
  if (!name || !email || !picture) {
    return;
  }
  const userName = document.getElementById("user-name");
  const userEmail = document.getElementById("user-email");
  const userImage = document.getElementById("user-image");

  userName.textContent = `${name.first} ${name.last}`;
  userEmail.textContent = email;
  userImage.setAttribute("src", picture.medium);
}

document.addEventListener("DOMContentLoaded", function () {
  getProfileData();
});
