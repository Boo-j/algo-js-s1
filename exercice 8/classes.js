class pokemon {
    constructor(name, attack, defense, hp, luck, vitesse) {
        this.name = name 
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
        this.vitesse = vitesse
    }
    attPok( adv ){
        var maxhp = adv.hp
        adv.hp = adv.hp - this.attack + adv.defense
        if(adv.hp>maxhp){
            adv.hp = maxhp - 1
            console.log(adv)
            return adv
        }
        console.log(adv.name + " a subit " + (maxhp-adv.hp) + " dégats. Il a " + adv.hp + " PV.")
        return adv
    }
    islucky(){
        if(Math.random() <= this.luck){
            return True
        }
        console.log(this.name + " a manqué son coup.")
        return false
    }
}



let tranchodon = new pokemon("Tranchodon", 147, 90, 76, 0.5, 97)

console.log(tranchodon)

let carchacrock = new pokemon("Carchacrock", 130, 95, 108, 0.4, 102)

console.log(carchacrock)

function combat(adv1, adv2){
    console.log("FIGHT !!!")
    while(adv1.hp > 20 || adv2.hp > 20){
        if(adv1.vitesse>=adv2.vitesse){
            if(adv1.islucky()){
                adv1.attPok(adv2)
            }
            
            if(adv2.hp <= 0){
                console.log(adv1.name + " WIN !")
                break
            }
            if(adv2.islucky()){
                adv2.attPok(adv1)
            }
            if(adv1.hp <= 0){
                console.log(adv2.name + " WIN !")
                break
            }
            }
        if(adv2.vitesse>adv1.vitesse){
            if(adv2.islucky()){
                adv2.attPok(adv1)
            }
            if(adv1.hp <= 0){
                console.log(adv2.name + " WIN !")
                break
            }
            if(adv1.islucky()){
                adv1.attPok(adv2)
            }
            if(adv2.hp <= 0){
                console.log(adv1.name + " WIN !")
                break
            }
        }  
    }    
}

console.log(combat(carchacrock, tranchodon))