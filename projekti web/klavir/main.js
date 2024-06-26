function sviraj(nota) {
    switch(nota) {
        default:
            break;
        case "A":
            document.getElementById("A").currentTime = 0;
            document.getElementById("A").play();
            break;
        case "B":
            document.getElementById("B").currentTime = 0;
            document.getElementById("B").play();
            break;
        case "C":
            document.getElementById("C").currentTime = 0;
            document.getElementById("C").play();
            break;
        case "D":
            document.getElementById("D").currentTime = 0;
            document.getElementById("D").play();
            break;
        case "E":
            document.getElementById("E").currentTime = 0;
            document.getElementById("E").play();
            break;
        case "F":
            document.getElementById("F").currentTime = 0;
            document.getElementById("F").play();
            break;
        case "G":
            document.getElementById("G").currentTime = 0;
            document.getElementById("G").play();
            break;
        case "AB":
            document.getElementById("AB").currentTime = 0;
            document.getElementById("AB").play();
            break;
        case "CD":
            document.getElementById("CD").currentTime = 0;
            document.getElementById("CD").play();
            break;
        case "DE":
            document.getElementById("DE").currentTime = 0;
            document.getElementById("DE").play();
            break;
        case "FG":
            document.getElementById("FG").currentTime = 0;
            document.getElementById("FG").play();
            break;
    }
}

document.addEventListener("keydown", function(tipka) {
    switch(tipka.keyCode) {
        case 68:
            document.getElementById("A").currentTime = 0;
            document.getElementById("A").play();
            document.getElementById("nota1").classList.add("svira");
            setTimeout(function(){document.getElementById("nota1").classList.remove("svira")}, 200);
            break;
        case 70:
            document.getElementById("B").currentTime = 0;
            document.getElementById("B").play();
            document.getElementById("nota2").classList.add("svira");
            setTimeout(function(){document.getElementById("nota2").classList.remove("svira")}, 200);
            break;
        case 71:
            document.getElementById("C").currentTime = 0;
            document.getElementById("C").play();
            document.getElementById("nota3").classList.add("svira");
            setTimeout(function(){document.getElementById("nota3").classList.remove("svira")}, 200);
            break;
        case 72:
            document.getElementById("D").currentTime = 0;
            document.getElementById("D").play();
            document.getElementById("nota4").classList.add("svira");
            setTimeout(function(){document.getElementById("nota4").classList.remove("svira")}, 200);
            break;
        case 74:
            document.getElementById("E").currentTime = 0;
            document.getElementById("E").play();
            document.getElementById("nota5").classList.add("svira");
            setTimeout(function(){document.getElementById("nota5").classList.remove("svira")}, 200);
            break;
        case 75:
            document.getElementById("F").currentTime = 0;
            document.getElementById("F").play();
            document.getElementById("nota6").classList.add("svira");
            setTimeout(function(){document.getElementById("nota6").classList.remove("svira")}, 200);
            break;
        case 76:
            document.getElementById("G").currentTime = 0;
            document.getElementById("G").play();
            document.getElementById("nota7").classList.add("svira");
            setTimeout(function(){document.getElementById("nota7").classList.remove("svira")}, 200);
            break;
        case 82:
            document.getElementById("AB").currentTime = 0;
            document.getElementById("AB").play();
            document.getElementById("nota8").classList.add("sviraCrna");
            setTimeout(function(){document.getElementById("nota8").classList.remove("sviraCrna")}, 200);
            break;
        case 90:
            document.getElementById("CD").currentTime = 0;
            document.getElementById("CD").play();
            document.getElementById("nota9").classList.add("sviraCrna");
            setTimeout(function(){document.getElementById("nota9").classList.remove("sviraCrna")}, 200);
            break;
        case 85:
            document.getElementById("DE").currentTime = 0;
            document.getElementById("DE").play();
            document.getElementById("nota10").classList.add("sviraCrna");
            setTimeout(function(){document.getElementById("nota10").classList.remove("sviraCrna")}, 200);
            break;
        case 79:
            document.getElementById("FG").currentTime = 0;
            document.getElementById("FG").play();
            document.getElementById("nota11").classList.add("sviraCrna");
            setTimeout(function(){document.getElementById("nota11").classList.remove("sviraCrna")}, 200);
            break;
    }
});