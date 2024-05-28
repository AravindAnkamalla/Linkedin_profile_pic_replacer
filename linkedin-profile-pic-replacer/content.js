const newProfilePicUrl = chrome.runtime.getURL("profile.jpeg");
//console.log("new profile", newProfilePicUrl);

function changeProfilePictures() {
  const profilePics = document.querySelectorAll("img");

  profilePics.forEach((img) => {
    img.src = newProfilePicUrl;
    img.srcset = newProfilePicUrl;
  });
}

// Changes applied to DOM to load given new profile pic dynamically
const observer = new MutationObserver(changeProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });

// function call to change existing profile pictures
changeProfilePictures();
