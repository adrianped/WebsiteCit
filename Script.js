// JavaScript Document
function onSubmit(form)
{
    var game = document.getElementById("game").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var padd = document.getElementById("padd").value;
    var citysub = document.getElementById("citysub").value;
    var postcode = document.getElementById("postcode").value;
    var state = document.getElementById("state").value;
    var cardnum = document.getElementById("cardnum").value;
    var cardexp = document.getElementById("cardexp").value;
    var ccv = document.getElementById("ccv").value;

    alert(game + "\n" + fname + "\n" + lname + "\n" + padd + "\n" + citysub + "\n" + postcode + "\n" + state + "\n" + cardnum + "\n" + cardexp + "\n" + ccv);

    window.location.href="Index.html";
}