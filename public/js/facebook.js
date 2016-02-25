function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
  //document.getElementsByClassName('facebookLogin')[0].style.visibility='hidden';
  $("p.facebookLogin").hide();
  //console.log(response);
  document.getElementById("name").innerHTML = response['name'];
  var profilePic = document.getElementById("photo");
  profilePic.src = response['picture']['data']['url'];
  //"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/English_Pok%C3%A9mon_logo.svg/2000px-English_Pok%C3%A9mon_logo.svg.png";
  console.log(response['picture']['data']['url']);
}