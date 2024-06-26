let games = document.getElementById("igre");
let contact = document.getElementById("kontakt");
let landing = document.getElementById("landing");

function showGames() {
    games.classList.remove("hide");
    contact.classList.add("hide");
    landing.classList.add("hide");
    igreDelay();
    undoLandingAnimation();
}

function showContact() {
    games.classList.add("hide");
    contact.classList.remove("hide");
    landing.classList.add("hide");
    undoLandingAnimation();
    undoIgreAnimation();
}

function showLanding() {
    games.classList.add("hide");
    contact.classList.add("hide");
    landing.classList.remove("hide");
    animationDelay();
    undoIgreAnimation();
}

let landingpics = document.getElementsByClassName("landingpic");

var count = 0;

function animationDelay() {
    let delay = 50;
    for(let i = 0; i < landingpics.length; i++) {
        setTimeout(landingAnimation, delay);
        delay += 50;
    }
}

function landingAnimation() {
    landingpics[count].classList.add("landingAnimation");
    if(count == landingpics.length - 1) {
        count = 0;
    } else {
        count++;
    }
}

function undoLandingAnimation() {
    for(let i = 0; i < landingpics.length; i++) {
        landingpics[i].classList.remove("landingAnimation");
    }
}

function undoIgreAnimation() {
    for(let i = 0; i < igre.length; i++) {
        igre[i].classList.remove("igraAnimation");
    }
}

let igre = document.getElementsByClassName("igra");

function igreDelay() {
    let delay = 50;
    for(let i = 0; i < igre.length; i++) {
        setTimeout(igreAnimation, delay);
        delay += 50;
    }
}

function igreAnimation() {
    igre[count].classList.add("igraAnimation");
    if(count == igre.length - 1) {
        count = 0;
    } else {
        count++;
    }
}



function addGameForm() {
    let addGameForm = document.getElementById("addGameForm");
    addGameForm.classList.remove("hide");
}

function cancelAddGame() {
    let addGameForm = document.getElementById("addGameForm");
    addGameForm.classList.add("hide");
}

function addGame() {
    let title = document.getElementById("gameTitle");
    let price = document.getElementById("price");
    let desc = document.getElementById("description");
    let fileSize = document.getElementById("fileSize");
    let dev = document.getElementById("developer");
    let igreContainer = document.getElementById("igre");
    let div = document.createElement("div");
    let thumbnail = document.createElement("div");
    let ul = document.createElement("ul");
    let releaseDate = document.createElement("li");
    let size = document.createElement("li");
    let developer = document.createElement("li");
    let rating = document.createElement("li");
    let p = document.createElement("p");
    let description = document.createTextNode("Description: " + desc.value);
    igreContainer.appendChild(div);
    div.classList.add("igra");
    div.classList.add("igraAnimation");
    div.appendChild(thumbnail);
    thumbnail.classList.add("thumbnail");
    thumbnail.style.background = "url('slike/noimage.png')";
    thumbnail.style.backgroundPosition = "center";
    div.appendChild(p);
    p.appendChild(description);
    div.appendChild(ul);
    ul.classList.add("specs");
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let fullDate = document.createTextNode("Release date: " + day + "." + month + "." + year);
    releaseDate.appendChild(fullDate);
    ul.appendChild(releaseDate);
    ul.appendChild(size);
    let sizeText = document.createTextNode("Size: " + fileSize.value);
    size.appendChild(sizeText);
    ul.appendChild(developer);
    let developerText = document.createTextNode("Developer: " + dev.value);
    developer.appendChild(developerText);
    ul.appendChild(rating);
    let ratingText = document.createTextNode("Rating: N/A");
    rating.appendChild(ratingText);
    let purchaseBtn = document.createElement("button");
    div.appendChild(purchaseBtn);
    purchaseBtn.classList.add("buy");
    let buttonText = document.createTextNode("PURCHASE($" + price.value + ")");
    purchaseBtn.appendChild(buttonText);
    price.value = "";
    fileSize.value = "";
    desc.value = "";
    title.value = "";
    dev.value = "";
    cancelAddGame();
}

function cancelPurchase() {
    let purchaseMenu = document.getElementById("purchaseMenu");
    purchaseMenu.classList.add("hide");
}

function purchase(game, price) {
    let purchaseMenu = document.getElementById("purchaseMenu");
    purchaseMenu.classList.remove("hide");
    let purchaseText = document.getElementById("purchaseText");
    let purchaseTitle = document.getElementById("purchaseTitle");
    switch(game) {
        case 'bloodstains': 
            purchaseTitle.innerHTML = "PURCHASE BLOODSTAINS"
            purchaseText.innerHTML = "Are you sure you want to purchase Bloodstains for " + price;
            break;
        case 'streetrace': 
            purchaseTitle.innerHTML = "PURCHASE STREETRACE"
            purchaseText.innerHTML = "Are you sure you want to purchase StreetRace for " + price;
            break;
        case 'fear': 
            purchaseTitle.innerHTML = "PURCHASE FEAR"
            purchaseText.innerHTML = "Are you sure you want to purchase Fear for " + price;
            break;
        case 'villagebuilder': 
            purchaseTitle.innerHTML = "PURCHASE VILLAGE BUILDER"
            purchaseText.innerHTML = "Are you sure you want to purchase Village Builder for " + price;
            break;
        case 'seasworn': 
            purchaseTitle.innerHTML = "PURCHASE SEA SWORN"
            purchaseText.innerHTML = "Are you sure you want to purchase Sea Sworn for " + price;
            break;
        case 'spacewars': 
            purchaseTitle.innerHTML = "PURCHASE SPACE WARS"
            purchaseText.innerHTML = "Are you sure you want to purchase Space Wars for " + price;
            break;
        case 'hostagecrisis': 
            purchaseTitle.innerHTML = "PURCHASE HOSTAGE CRISIS"
            purchaseText.innerHTML = "Are you sure you want to purchase Hostage Crisis for " + price;
            break;
        case 'cubetopia': 
            purchaseTitle.innerHTML = "PURCHASE CUBETOPIA"
            purchaseText.innerHTML = "Are you sure you want to purchase Cubetopia for " + price + " (50% off)";
            break;
        case 'illusion': 
            purchaseTitle.innerHTML = "PURCHASE ILLUSION"
            purchaseText.innerHTML = "Are you sure you want to purchase Illusion for " + price + " (15% off)";
            break;
        case 'thetrees': 
            purchaseTitle.innerHTML = "PURCHASE THE TREES"
            purchaseText.innerHTML = "Are you sure you want to purchase The Trees for " + price + " (20% off)";
            break;
        case 'goingtomars': 
            purchaseTitle.innerHTML = "PURCHASE GOING TO MARS"
            purchaseText.innerHTML = "Are you sure you want to purchase Going To Mars for " + price + " (10% off)";
            break;
        case 'bigmoney': 
            purchaseTitle.innerHTML = "PURCHASE BIGMONEY"
            purchaseText.innerHTML = "Are you sure you want to purchase Big Money for " + price + " (100% off)";
            break;
        case 'nohope': 
            purchaseTitle.innerHTML = "PURCHASE NO HOPE"
            purchaseText.innerHTML = "Are you sure you want to purchase No Hope for " + price + " (25% off)";
            break;
        case 'setupdecorator': 
            purchaseTitle.innerHTML = "PURCHASE STEUP DECORATOR"
            purchaseText.innerHTML = "Are you sure you want to purchase Setup Decorator for " + price;
            break;
        case 'westfrontier': 
            purchaseTitle.innerHTML = "PURCHASE THE WEST FRONTIER"
            purchaseText.innerHTML = "Are you sure you want to purchase The West Frontier for " + price;
            break;
        case 'brightlight': 
            purchaseTitle.innerHTML = "PURCHASE THE BRIGHT LIGHT"
            purchaseText.innerHTML = "Are you sure you want to purchase The Bright Light for " + price;
            break;
        case 'pngsim': 
            purchaseTitle.innerHTML = "PURCHASE PNG SIMULATOR"
            purchaseText.innerHTML = "Are you sure you want to purchase PNG Simulator for " + price;
            break;
        case 'goodbye': 
            purchaseTitle.innerHTML = "PURCHASE PRINT('GOODBYE WORLD');"
            purchaseText.innerHTML = "Are you sure you want to purchase Print('Goodbye World'); for " + price;
            break;
    }
}