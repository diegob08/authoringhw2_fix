myApp.module1 = {

  saySomething(message){
    console.log(myApp.mainMessage,message, 'I am a module');
  },

  doSomething(){
    console.log('Caled from module1');
  }
}; //DON'T FORGET THIS SEMICOLON
