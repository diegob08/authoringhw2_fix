var myApp ={

  mainMessage : "Welcome to my app:",

  mainGreeting() {
    console.log('Welcome to my app ready');
  }
};

//PUT HS FUNCTIONALITY HERE FOR ONE CHUNK

myApp.module1 = {

  saySomething(message){
    console.log(myApp.mainMessage,message, 'I am a module');
  },

  doSomething(){
    console.log('Caled from module1');
  }
}; //DON'T FORGET THIS SEMICOLON

myApp.module1 = {
  doSomething(){
    console.log('Caled from module2');
  }
}; //DON'T FORGET THIS SEMICOLON

(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('Hello');

function myFunct(){
  var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
}

  myFunct();
})();
