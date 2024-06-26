function slider(direkcija) {
    let kodovi = document.getElementsByClassName("python")
    for(let i = 0; i < kodovi.length; i++) {
        if(kodovi[i].classList.contains("show")) {
            kodovi[i].classList.remove("show")
            if(direkcija === "sljedeci") {
                if(i === kodovi.length-1) {
                    kodovi[0].classList.add("show")
                }else {
                    kodovi[i+1].classList.add("show")
                }
            }
            else {
                if(i === 0) {
                    kodovi[kodovi.length-1].classList.add("show")
                }else {
                    kodovi[i-1].classList.add("show")
                }
            }
            break
        }
    }
}
import anime from 'animejs/lib/anime.es.js'
function animacija() {
    anime({
        targets: '.anim',
        translateX: 270,
        opacity: 1,
        duration: 2000,
        delay: anime.stagger(200)
      });
}
animacija()

function verifikacija() {
    let ime = document.getElementById("ime")
    let komentar = document.getElementById("komentar")
    if(ime.value.length < 3) {
        alert("Ime mora imati barem 3 slova")
    }else if(komentar.value === "") {
        alert("Komentar mora imati komentar")
    }else {
        alert("Uspješno poslano")
    }
}
