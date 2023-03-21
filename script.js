// Define variables 

var long = 0;
var num = [0,1,2,3,4,5,6,7,8,9];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = lower.map(element => element.toUpperCase());
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "/", "?", "[", "]", "{", "}", ":", ";", "<", ">", "*", "+", "=", "~"];
var choose = [false, false, false, false];
var options = []
var password = []

// Define functions

function longitud(){
  let lan = prompt('Which is lenght of the password? (min:8 - max: 128)');
  long = Number(lan);
  if (isNaN(long)){
    window.alert('Write a number')
    return longitud();
  } else{
    if(long>=8 && long<=128){
      return long;
    } else{
      window.alert('It has to be min 8 characteres and max 128 characteres');
      return longitud();
    }
  }
}

function criteria(){
  let first = confirm("Do you want numbers in your password?");
  if(first){
    choose[0]=true;
  }else{
    choose[0]=false
  }
  let second = confirm("Do you want Lowercase characters in your password?");
  if(second){
    choose[1]=true;
  }else{
    choose[1]=false
  }
  let third = confirm("Do you want Uppercase characters in your password?");
  if(third){
    choose[2]=true;
  }else{
    choose[2]=false
  }
  let fourth = confirm("Do you want special characters in your password?");
  if(fourth){
    choose[3]=true;
  }else{
    choose[3]=false
  }
}

function validate(){
  if(choose[0]==false && choose[1]==false && choose[2]==false && choose[3]==false){
    window.alert("You have to choose at last one criteria!")
    criteria();
  }

}

function create(){
  if(choose[0]){
    options = options.concat(num);
  }
  if(choose[1]){
    options = options.concat(lower);
  }
  if(choose[2]){
    options = options.concat(upper);
  }
  if(choose[3]){
    options = options.concat(special);
  }
}



function generatePassword(){
  longitud();
  criteria();
  validate();
  create();

  var password = []
  for(var i = 0; i < long; i++){
    var contra = options[Math.floor(Math.random()*options.length)];
    password.push(contra);
  }

  console.log(password)
}

generatePassword()











