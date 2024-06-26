let korisnikOdabrao = document.getElementById("korisnikOdabrao");
let botOdabrao = document.getElementById("botOdabrao");
let korisnik;
let robot;
let korisnikBodovi = 0;
let botBodovi = 0;
let korisnikZavrsniBodovi = 0;
let botZavrsniBodovi = 0;
let rezultatKorisnik = document.getElementById("rezultatKorisnik");
let rezultatBot = document.getElementById("rezultatBot");
let runda = 0;
let rundaPrikaz = document.getElementById("runda");
let timer = document.getElementById("timer");
let timerPoceo = false;
let timerSekunda = 0;
let timerMinuta = 0;
let stopTimer = false;
let kraj = document.getElementById("kraj");
let krajText = document.getElementById("krajText");
let pobjednik;
let ponovi = false;

function igra(odabir) {
    if(timerPoceo == false) {
        timerPoceo = true;
        setInterval(startTimer, 1000);
    }
    switch(odabir) {
        case 'papir':
            korisnikOdabrao.src = "./slike/papir.png";
            korisnik = "papir";
            break;
        case 'kamen':
            korisnikOdabrao.src = "./slike/kamen.png";
            korisnik = "kamen";
            break;
        case 'skare':
            korisnikOdabrao.src = "./slike/skare.png";
            korisnik = "skare";
            break;
    }
    if(runda < 5) {
        runda++;
        rundaPrikaz.innerHTML = "Runda: " + runda + "/5";
        botBira();
        if(runda == 5) {
            stopTimer = true;
        }
    }

    if(korisnik == robot) {
        
    }else if(korisnik == "papir" && robot == "kamen") {
        korisnikBodovi++;
    }else if(korisnik == "kamen" && robot == "skare") {
        korisnikBodovi++;
    }else if(korisnik == "skare" && robot == "papir") {
        korisnikBodovi++;
    }else {
        botBodovi++;
    }

    if(runda == 5) {
        kraj.style.display = "grid";
        if(korisnikBodovi > botBodovi) {
            pobjednik = "Korisnik je pobjednik";
            korisnikZavrsniBodovi++;
            rezultatKorisnik.innerHTML = "Korisnik: " + korisnikZavrsniBodovi;
        }else if (korisnikBodovi < botBodovi) {
            pobjednik = "Bot je pobjednik";
            botZavrsniBodovi++;
            rezultatBot.innerHTML = "Bot: " + botZavrsniBodovi;
        }else if(korisnikBodovi == botBodovi) {
            pobjednik = "Nitko nije pobijedio";
        }
    }

    if(ponovi == true) {
        ponovi = false;
        stopTimer = false;
    }

    krajText.innerHTML = pobjednik + " i igra je trajala " + timerMinuta + " minute i " + timerSekunda + " sekunde";
}

function startTimer() {
    if(stopTimer == false) {
        if(timerSekunda < 9) {
            timerSekunda++;
            timer.innerHTML = "Timer: " + timerMinuta + ":0" + timerSekunda;
        }else if(timerSekunda < 59) {
            timerSekunda++;
            timer.innerHTML = "Timer: " + timerMinuta + ":" + timerSekunda;
        }else {
            timerSekunda = 0;
            timerMinuta++;
            timer.innerHTML = "Timer: " + timerMinuta + ":0" + timerSekunda;
        }
    }
}

function botBira() {
    let bot = Math.floor(Math.random() * 3) + 1;
    switch(bot) {
        case 1:
            botOdabrao.src = "./slike/papir.png";
            robot = "papir";
            break;
        case 2:
            botOdabrao.src = "./slike/kamen.png";
            robot = "kamen";
            break;
        case 3:
            botOdabrao.src = "./slike/skare.png";
            robot = "skare";
            break;
    }
}

function ponovo() {
    runda = 0;
    rundaPrikaz.innerHTML = "Runda: " + runda + "/5";
    timerSekunda = 0;
    timerMinuta = 0;
    timer.innerHTML = "Timer: " + timerMinuta + ":0" + timerSekunda;
    kraj.style.display = "none";
    ponovi = true;
    korisnikOdabrao.src = "";
    botOdabrao.src = "";
    botBodovi = 0;
    korisnikBodovi = 0;
}