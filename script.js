function loadInfo() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let einstein = JSON.parse(this.responseText);
      document.getElementById("fullName").innerHTML = einstein.name;
      document.getElementById("birthday").innerHTML = einstein.birthday;
    }
  };
  xhttp.open("GET", "einstein.json", true);
  xhttp.send();
}

function loadBio() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let einstein = JSON.parse(this.responseText);
      document.getElementById("bio").innerHTML = einstein.bio;
    }
  };
  xhttp.open("GET", "einstein.json", true);
  xhttp.send();
}

loadInfo();

$( document ).ready(function() {
    $("#bio").hide();
  });

$( document ).ready(function() {
  $("#loadBio").click(function(){
    loadBio();
    $("#bio").fadeIn();
  });
});