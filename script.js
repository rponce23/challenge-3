// Define variables 

var long = 0;
var num = [0,1,2,3,4,5,6,7,8,9];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = lower.map(element => element.toUpperCase());
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "/", "?", "[", "]", "{", "}", ":", ";", "<", ">", "*", "+", "=", "~"];
var options = [false, false, false, false];
var passwd = []

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

// longitud();
console.log(long);
console.log(options)

function criteria(){
  let first = confirm("Do you want numbers in your password?");
  if(first){
    options[0]=true;
  }else{
    options[0]=false
  }
  let second = confirm("Do you want Lowercase characters in your password?");
  if(second){
    options[1]=true;
  }else{
    options[1]=false
  }
  let third = confirm("Do you want Uppercase characters in your password?");
  if(third){
    options[2]=true;
  }else{
    options[2]=false
  }
  let fourth = confirm("Do you want special characters in your password?");
  if(fourth){
    options[3]=true;
  }else{
    options[3]=false
  }
}
criteria()
console.log(options)
console.log(passwd)

if(options[0]){
  var passwd = passwd.concat(num);
}
if(options[1]){
  var passwd = passwd.concat(lower);
}
if(options[2]){
  var passwd = passwd.concat(upper);
}
if(options[3]){
  var passwd = passwd.concat(special);
}
console.log(passwd)










