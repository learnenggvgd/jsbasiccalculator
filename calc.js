//1.diplay number in text box

function display(num){
  // console.log(result.value=num);
 result.value+=num;
//   console.log(result.value+=num);
}

function clearScreen(){
    result.value="";
}

// BODMAS rule => exp = "must a string" = eval(exp);
// when = button call then call this function
function calculate(){
    // var exp=result.value;
    // var afterreult=eval(exp);
    // result.value=afterreult;

    result.value=eval(result.value)
}
// remove laste item from text box item
function back(){
    // var x =result.value;
    // result.value=x.slice(0,-1);
    result.value=result.value.slice(0,-1)
}
