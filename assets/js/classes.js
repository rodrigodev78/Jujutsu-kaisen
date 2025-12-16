class Character{
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife <= 0 ? 0 : newLife;
    }
}

class Sukuna extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 12;
        this.defense = 12;
        this.maxLife = this.life;
    }
}

class Gojo extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 12;
        this.defense = 12;
        this.maxLife = this.life;
    }
}

class Yuta extends Character{
    constructor(name){
        super(name);
        this.life = 90;
        this.attack = 10;
        this.defense = 10;
        this.maxLife = this.life;
    }
}

class Toji extends Character{
    constructor(name){
        super(name);
        this.life = 60;
        this.attack = 7;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Itadori extends Character{
    constructor(name){
        super(name);
        this.life = 70;
        this.attack = 9;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Kenjaku extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 10;
        this.defense = 9;
        this.maxLife = this.life;
    }
}

class Mei extends Character{
    constructor(name){
        super(name);
        this.life = 50;
        this.attack = 6;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Nobara extends Character{
    constructor(name){
        super(name);
        this.life = 50;
        this.attack = 5;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class Choso extends Character{
    constructor(name){
        super(name);
        this.life = 60;
        this.attack = 6;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Uraume extends Character{
    constructor(name){
        super(name);
        this.life = 60;
        this.attack = 7;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Nanami extends Character{
    constructor(name){
        super(name);
        this.life = 40;
        this.attack = 5;
        this.defense = 7;
        this.maxLife = this.life;
    }
}

class Megumi extends Character{
    constructor(name){
        super(name);
        this.life = 50;
        this.attack = 6;
        this.defense = 5;
        this.maxLife = this.life;
    }
}

class FigthArea{
    constructor(fighter1, fighter2, fighter1Element, fighter2Element, log){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1Element = fighter1Element;
        this.fighter2Element = fighter2Element;
        this.log = log;
    }

    attack(){
        attackButton.disabled = true;

        if(this.fighter1.life > 0 && this.fighter2.life > 0){
            this.doAttack(this.fighter1, this.fighter2);
        }
        setTimeout(() => {
            if(this.fighter1.life > 0 && this.fighter2.life > 0){
                this.doAttack(this.fighter2, this.fighter1);
            }

        attackButton.disabled = false;

        }, 1000);
    }

    update(){
        this.fighter1Element.querySelector(".name-bar").innerHTML = `${this.fighter1.name}`;
        let fighter1Life = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1Element.querySelector(".lifebar .bar").style.width = `${fighter1Life}%`;


        this.fighter2Element.querySelector(".name-bar").innerHTML = `${this.fighter2.name}`;
        let fighter2Life = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2Element.querySelector(".lifebar .bar").style.width = `${fighter2Life}%`;
    }

    doAttack(attacking, attacked){
        let attackFactor = (Math.random() * 1.8);
        let defenseFactor = (Math.random() * 1.5);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        let attackingImg;
        if(attacking === this.fighter1){
            attackingImg = charBig;

            if(attackingImg){
                attackingImg.classList.remove("fight1");
                void attackingImg.offsetWidth; //void zera e offsetWidth força o navegador a resetar a animação
                attackingImg.classList.add("fight1");
            }
        }else if(attacking === this.fighter2){
            attackingImg = charBig2;

            if(attackingImg){
                attackingImg.classList.remove("fight2");
                void attackingImg.offsetWidth; 
                attackingImg.classList.add("fight2");
            }
        }

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            
            this.log.clear();
            this.log.addMessage(`-${actualAttack.toFixed(0)}`);
        }else{
            this.log.clear();
            this.log.addMessage(`0x0`);
        }

        if(attacked.life <= 0){
            this.update();
            
            if(attacked === this.fighter1){
                lose.style.display = "block";
                attackButton.disabled = true;
            } else if(attacked === this.fighter2){
                win.style.display = "block";
                attackButton.disabled = true;
            }

            document.querySelector(".restart-button").style.display = "flex";
            return;
        }

        this.update();
    }
}

class Log{
    list = [];

    constructor(listElement){
        this.listElement = listElement;
    }

    addMessage(message){
        this.list.push(message);
        this.render();
    }

    render(){
        this.listElement.innerHTML = "";

        for(let i in this.list){
            this.listElement.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }

    clear(){
        this.list = [];
        this.listElement.innerHTML = "";
    }
}