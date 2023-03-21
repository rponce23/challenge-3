// Define variables 

var long = 0;
var num = []
var lower = []
var upper = []

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

longitud();
console.log(long);