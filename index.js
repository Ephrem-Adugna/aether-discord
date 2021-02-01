var description = document.getElementById("rowscontainer");

var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var title3 = document.getElementById("title3");
title1.addEventListener("mouseover", function () {
    description.innerHTML = `<div class="col-sm-4" id="description1">
    All players have a primogem balance when they sign up that lets them make wishes, play games, and much more! There are many games and challenges that will let you earn primogems and your primogems are saved across different discord servers!
    </div><div class="empty"></div>
        <div class="empty"></div>`;
})
title1.addEventListener("mouseout", function () {
    description.innerHTML = "";

})
title2.addEventListener("mouseover", function () {
    description.innerHTML = `<div class="empty"></div><div class="empty col-sm-4"></div> <div class="col-sm-4" id="description1">Currently, Aether only has tic-tac-toe and playing rock paper scissors with paimon, but we plan to add many more games soon!</div>`;
})
title2.addEventListener("mouseout", function () {
    description.innerHTML = "";

})
title3.addEventListener("mouseover", function () {
    description.innerHTML = `<div class="empty col-sm-4"></div> <div class="empty col-sm-4"></div> <div class="col-sm-4" id="description1">
    Aether has a vast amount of information about characters, artifacts, weapons, constellations and more! A player can look up characters or artifacts with a simple command. The characters are always being updated and Aether always responds extremely quickly. 
    </div>`;
})
title3.addEventListener("mouseout", function () {
    description.innerHTML = "";

})
document.getElementById('discord').addEventListener('click', function () {
    window.location.href ="https://discord.com/oauth2/authorize?client_id=804546807874191420&scope=bot&permissions=76800";
})
document.getElementsByClassName('more')[0].addEventListener('click', function () {
    window.location.href = "./commands.html";

})
document.getElementsByClassName('more2')[0].addEventListener('click', function () {
    window.location.href = "./commands.html";

})