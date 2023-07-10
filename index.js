let comguess;
let userguess=[];
let userguessupdate=document.getElementById("textoutput");
let usernoupdate=document.getElementById("inputbox");
const init = ( ) => {
    comguess=Math.floor(Math.random()*100); 
document.getElementById("newgamebutton").style.display="none";
document.getElementById("gameArea").style.display="none";



}; 
const startGame = () =>{
    document.getElementById("welcome").style.display="none";

    document.getElementById("gameArea").style.display="block";
}; 
//reload the page 
const newgamebegan=()=>{
    window.location.reload();
};
const startnewgame= () =>{
    document.getElementById("newgamebutton").style.display="inline";
usernoupdate/setAttribute("disabled",true);
};
const compareGuess = () =>{
const userno=Number(document.getElementById("inputbox").value);
userguess=[...userguess,userno];
document.getElementById("guesses").innerHTML=userguess;
if(userguess.length<maxGuess)

{
    if(comguess<userno){ 
        userguessupdate.innerHTML="your guess is High";
        usernoupdate.value="";
    }
    else if(userno<comguess){
        userguessupdate.innerHTML="Your guess is low";
        usernoupdate.value="";
    } 
    else{
        userguessupdate.innerHTML="your guess is correct";
        usernoupdate.value="";
    }} 
    else{
        if(comguess<userno){ 
            userguessupdate.innerHTML=`you loose!! correct number was ${comguess}`;
            usernoupdate.value="";
            startnewgame();
        }
        else if(userno<comguess){
            userguessupdate.innerHTML=`you loose!! correct number was ${comguess}`;
            usernoupdate.value="";
            startnewgame();
        } 
        else{
            userguessupdate.innerHTML="your guess is correct";
            usernoupdate.value="";
           startnewgame();            

        }}
    
    document.getElementById("attempts").innerHTML=userguess.length;
     
    };

    


const easyMode= () => { 
    maxGuess=10;
    startGame();
};
const hardMode = () => {
    maxGuess=5;
    startGame();
};



