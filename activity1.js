score=0;
function updatescore()
{
score = score + 1;
document.getElementById("score").innerHTML = "score : "+ score;    
}
function savescore()
{
localStorage.setItem("key-score",score);
}
function nextpage()
{
window.location = "activity_2.html";    
}

