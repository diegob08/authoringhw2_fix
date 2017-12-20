(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('Hello');

function myFunct(){
  var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
}

  myFunct();
})();
