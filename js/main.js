var siteNameInput = document.getElementById("sn");
var siteUrlInput = document.getElementById("sl");

var mySitesRaff = [];

if (localStorage.getItem("everySite") != null) {
  mySitesRaff = JSON.parse(localStorage.getItem("everySite"));
  getDisplay();
}

function getValues(){


var validatForm =validation();
if (validatForm == true) {

var allSites = {
  name: siteNameInput.value,
  url: siteUrlInput.value,
};

mySitesRaff.push(allSites);

localStorage.setItem("everySite", JSON.stringify(mySitesRaff));

console.log(mySitesRaff);
getDisplay();
clearValues();
}else{
  alert(validatForm);
}


}

function getDisplay() {

   var cartona = "";

  for (var i = 0; i < mySitesRaff.length; i++) {
    cartona =
      cartona +
      `<tr>
                <td>${i}</td>
                <td>${mySitesRaff[i].name}</td>
                <td><a id="visitme" target="_blank" href="${mySitesRaff[i].url}" class="btn btn-warning text-decoration-none text-black">visit</a></td>
                <td><button onclick="deleteSite(${i})" class="btn btn-danger">Delete</button></td>
            </tr>`;
  }

  document.getElementById("mybody").innerHTML= cartona;

}

function deleteSite(indx){


mySitesRaff.splice(indx, 1);
localStorage.setItem("everySite", JSON.stringify(mySitesRaff));
getDisplay();

}

function clearValues(){


siteNameInput.value= "";
siteUrlInput.value = "";






}

function validation(){



  var regexName = /^[A-Z][a-z]{1,20}$/;
  var regexUrl =/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})(.com)?/;



  if (regexName.test(siteNameInput.value)==false) {


    return "Your name must be from 1 to 20 charachter and starts with capital letter";


  }else if (regexUrl.test(siteUrlInput.value) == false) {

    return "Your url must start with http or (https://) and end with (.com)";

  }


return true
}

// function validation(){



//   var regexName = /^[A-Z][a-z]{1,20}$/;
//   var regexUrl =/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})(.com)?/;



//   if (regexName.test(siteNameInput.value)==false) {


//      document.getElementById("alertNamemsg").classList.replace("d-none" , "d-block") ;


//   }else if (regexUrl.test(siteUrlInput.value) == false) {

//     document.getElementById("alertUrlmsg").classList.replace("d-none", "d-block");

//   }


// return true
// }


