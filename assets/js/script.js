let startButton = document.querySelector(".start-button");
let restartButton =  document.querySelector(".restart-button");
let attackButton = document.querySelector(".attack-button");
let character1 = document.querySelector(".character1");
let character2 = document.querySelector(".character2");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let nameChar1 = document.querySelector(".player1 .name-bar");
let nameChar2 = document.querySelector(".player2 .name-bar");
let bar = document.querySelectorAll(".bar");

let charBig = document.querySelector(".char-big img");
let charBig2 = document.querySelector(".char-big2 img");

let contLog = document.querySelector(".container-log");

let win = document.querySelector(".win img");
let lose = document.querySelector(".lose img");

let characterButtons1 = document.querySelectorAll(".character1 .character-button");
let characterButtons2 = document.querySelectorAll(".character2 .character-button");

let selectedChar1 = null;
let selectedChar2 = null;

characterButtons1.forEach((button) => {
    button.addEventListener("click", () =>{
        const char = button.dataset.char;
        
        characterButtons1.forEach((b) => {
            b.classList.remove("selected");
        });
        
        button.classList.add("selected");

        switch(char){
            case "Ryomen Sukuna":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Satoru Gojo":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Yuta Okkotsu":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Toji Fushiguro":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Yuji Itadori":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Kenjaku":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Mei Mei":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Nobara Kugisaki":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Choso":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Uraume":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Kento Nanami":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
            case "Megumi Fushiguro":
                nameChar1.innerText = char;
                selectedChar1 = char;
                break;
        }
    });
});

characterButtons2.forEach((button) => {
    button.addEventListener("click", () =>{
        const char = button.dataset.char;
        
        characterButtons2.forEach((b) => {
            b.classList.remove("selected")
        });
        
        button.classList.add("selected");

        switch(char){
            case "Ryomen Sukuna":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Satoru Gojo":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Yuta Okkotsu":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Toji Fushiguro":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Yuji Itadori":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Kenjaku":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Mei Mei":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Nobara Kugisaki":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Choso":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Uraume":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Kento Nanami":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
            case "Megumi Fushiguro":
                nameChar2.innerText = char;
                selectedChar2 = char;
                break;
        }
    });
});

startButton.addEventListener("click", () => {
    if(selectedChar1 == null || selectedChar2 == null){
        alert("Escolha um personagem por favor");
        return;
    };

    character1.style.display = "none";
    character2.style.display = "none";

    charBig.style.display = "block";
    charBig2.style.display = "block";

    switch(selectedChar1){
        case "Ryomen Sukuna":
            fightArea.fighter1 = new Sukuna(selectedChar1);
            charBig.src = "assets/imgs/sukuna big.png";
            break;
        case "Satoru Gojo":
            fightArea.fighter1 = new Gojo(selectedChar1);
            charBig.src = "assets/imgs/gojo big.png";
            break;
        case "Toji Fushiguro":
            fightArea.fighter1 = new Toji(selectedChar1);
            charBig.src = "assets/imgs/toji big.png";
            break;
        case "Yuta Okkotsu":
            fightArea.fighter1 = new Yuta(selectedChar1);
            charBig.src = "assets/imgs/yuta big.webp";
            break;
        case "Yuji Itadori":
            fightArea.fighter1 = new Itadori(selectedChar1);
            charBig.src = "assets/imgs/itadori big.png";
            break;
        case "Kenjaku":
            fightArea.fighter1 = new Kenjaku(selectedChar1);
            charBig.src = "assets/imgs/kenjaku big.png";
            break;
        case "Mei Mei":
            fightArea.fighter1 = new Mei(selectedChar1);
            charBig.src = "assets/imgs/mei mei big.png";
            break;
        case "Nobara Kugisaki":
            fightArea.fighter1 = new Nobara(selectedChar1);
            charBig.src = "assets/imgs/nobara big.png";
            break;
        case "Choso":
            fightArea.fighter1 = new Choso(selectedChar1);
            charBig.src = "assets/imgs/choso big.png";
            break;
        case "Uraume":
            fightArea.fighter1 = new Uraume(selectedChar1);
            charBig.src = "assets/imgs/uraume big.png";
            break;
        case "Kento Nanami":
            fightArea.fighter1 = new Nanami(selectedChar1);
            charBig.src = "assets/imgs/nanami big.png";
            break;
        case "Megumi Fushiguro":
            fightArea.fighter1 = new Megumi(selectedChar1);
            charBig.src = "assets/imgs/megumi big.png";
            break;
    }

    switch(selectedChar2){
        case "Ryomen Sukuna":
            fightArea.fighter2 = new Sukuna(selectedChar2);
            charBig2.src = "assets/imgs/sukuna big.png";
            break;
        case "Satoru Gojo":
            fightArea.fighter2 = new Gojo(selectedChar2);
            charBig2.src = "assets/imgs/gojo big.png";
            break;
        case "Toji Fushiguro":
            fightArea.fighter2 = new Toji(selectedChar2);
            charBig2.src = "assets/imgs/toji big.png";
            break;
        case "Yuta Okkotsu":
            fightArea.fighter2 = new Yuta(selectedChar2);
            charBig2.src = "assets/imgs/yuta big.webp";
            break;
        case "Yuji Itadori":
            fightArea.fighter2 = new Itadori(selectedChar2);
            charBig2.src = "assets/imgs/itadori big.png";
            break;
        case "Kenjaku":
            fightArea.fighter2 = new Kenjaku(selectedChar2);
            charBig2.src = "assets/imgs/kenjaku big.png";
            break;
        case "Mei Mei":
            fightArea.fighter2 = new Mei(selectedChar2);
            charBig2.src = "assets/imgs/mei mei big.png";
            break;
        case "Nobara Kugisaki":
            fightArea.fighter2 = new Nobara(selectedChar2);
            charBig2.src = "assets/imgs/nobara big.png";
            break;
        case "Choso":
            fightArea.fighter2 = new Choso(selectedChar2);
            charBig2.src = "assets/imgs/choso big.png";
            break;
        case "Uraume":
            fightArea.fighter2 = new Uraume(selectedChar2);
            charBig2.src = "assets/imgs/uraume big.png";
            break;
        case "Kento Nanami":
            fightArea.fighter2 = new Nanami(selectedChar2);
            charBig2.src = "assets/imgs/nanami big.png";
            break;
        case "Megumi Fushiguro":
            fightArea.fighter2 = new Megumi(selectedChar2);
            charBig2.src = "assets/imgs/megumi big.png";
            break;
    }

    attackButton.style.display = "block";
    startButton.style.display = "none";
    contLog.style.display = "flex";
    
    fightArea.update();
});

restartButton.addEventListener("click", () => {
    character1.style.display = "flex";
    character2.style.display = "flex";

    charBig.style.display = "none";
    charBig2.style.display = "none";

    attackButton.style.display = "none";

    startButton.style.display = "flex";

    contLog.style.display = "none";

    selectedChar1 = null;
    selectedChar2 = null;

    nameChar1.innerHTML = "Selecione seu personagem";
    nameChar2.innerHTML = "Selecione seu opontente";

    restartButton.style.display = "none";

    characterButtons1.forEach((b) => { 
        b.classList.remove("selected");
    });

    characterButtons2.forEach((b) => {
        b.classList.remove("selected");
    });

    win.style.display = "none";
    lose.style.display = "none";

    bar.forEach((bar) => {
        bar.style.width = "0px";
    })

    log.clear();

    fightArea.fighter1 = null;
    fightArea.fighter2 = null;
    
    fightArea.update();
});

let log = new Log(document.querySelector(".log"));

const fightArea = new FigthArea(
    null,
    null,
    document.querySelector(".player1"),
    document.querySelector(".player2"),
    log
);

player1.querySelector(".attack-button").addEventListener("click", () => {
    fightArea.attack();
});