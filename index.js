var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var newimage1 = "./dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", newimage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var newimage2 = "./dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", newimage2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h2").classList.add("yellow");
    document.querySelector("h2").innerHTML="Hooray! Manjil Won 🚩";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h2").classList.add("yellow");
    document.querySelector("h2").innerHTML="Hooray! Hawking Won 🚩";
}
else
{
    document.querySelector("h2").classList.add("yellow");
    document.querySelector("h2").innerHTML="It's a Draw!!!";
}
