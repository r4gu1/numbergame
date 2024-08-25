var inputBox=document.getElementById("inputBox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var noofguess =3


/////randomnumber generate
var randomnumber = Math.floor(Math.random() * 10) + 1;


if(randomnumber>5)
{
    randomnumber=randomnumber-5
}
function checkthenumber()
{
    
    if(inputBox.value  == randomnumber)
    {
        alert("your guess is correct")
        result.textContent="you are right"
    }
    else{
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("you lost,Generated random number is:"+randomnumber)
        }
        guesscount.textContent="Available Guesses:"+noofguess
        result.textContent="you are wrong"
        }
    
}
