// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  setInterval(function() {
    getUsers();
  }, 3000);
});

function getUsers() {
  $.ajax({
    url: '/api/users',
    type: 'GET',
  })
  .done(function(data) {
    var userListElement = document.getElementById('user-list');
    for(var i = 0; i < data.length; i++) {
      var profile = data[i].first_name + ' ' + data[i].last_name + ' ' + data[i].age;
      var user = document.createElement('p');
      user.innerText = profile;
      userListElement.appendChild(user);
    }
  });
}
