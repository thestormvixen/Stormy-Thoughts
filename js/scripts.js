// Mobile Nav Bar Function
function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


//Validation of Contact form
function validation(theForm){
  //sets variable and looks at their value
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var feedback = document.getElementById("message").value;
      //checks to see if the name field is blank 
      if( name ===''){
          alert("Please fill in your Name!");
          return false;
      }
      //checks to see if the email field is blank
      else if( email ===''){
          alert("Please fill in your E-mail!");
          return false;
      }
      //checks to see if the message field is left blank
      else if( message ===''){
          alert("Please fill in your Message!");
          return false;
      }
      //if everything is filled in properly returns a message
      else{
          alert('Thank you, ' + name + ', your message: "' + feedback + '" has been sent! Thank you for providing your thoughts to us!')
          return true;
      }
}