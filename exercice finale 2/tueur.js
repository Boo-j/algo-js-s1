class tueur {
    constructor(name, hp){
        this.name = name
        this.hp = hp
    }
}


var list_name = ["Ronald le", "Donald le", "Julio le", "David le", "Barbara la", "Jennifer la", "Betty la", "Timothy le", "William le", "Alicia la", "Kendra la", "Ann la", "Donna la", "Maurice le", "Viva la", "Dionna la", "Theresa la", "Mary la", "John le", "Richard le" ]
var list_cliche_H = [" noir", " sportif", " geek", " blond", " vieux", " gros", " pervers"]
var list_cliche_F = [" noire", " sportive", " geekette", " blonde", " vieille", " grosse", " perverse"]
var list_stats = [[0.2,0.6,0.2],[0.1,0.7,0.2],[0.4,0.5,0.1],[0.3,0.4,0.2],[0.8,0.1,0.1],[0.1,0.3,0.6],[0.2,0.5,0.3]]

let Jason = new tueur("Jason", 100)

function creer_5_victimes(list1, list2, list3, list4){
    var nb = 0
    var list_vict = []
    while(nb < 5){
        var temps1 = Math.floor(Math.random()*list1.length)
        var nom = list1[temps1]
        list1.splice(temps1, 1)

        if(nom[nom.length-1] == "e"){
            var temps2 = Math.floor(Math.random()*list2.length)
            var chara = [list2[temps2], list4[temps2]]
        }else{
            var temps2 = Math.floor(Math.random()*list3.length)
            var chara = [list3[temps2], list4[temps2]]
        }    
        list2.splice(temps2, 1)
        list3.splice(temps2, 1)
        list4.splice(temps2, 1)
        list_vict[nb] = [nom, chara]
        nb ++
    }    
    return list_vict
}


function attaque(Tueur, liste_de_nom, list_cliche_H, list_cliche_F, list_stats){
    console.log(Tueur.name + " débute la chasse de ses 5 victimes.")
    var victimes = creer_5_victimes(liste_de_nom, list_cliche_H, list_cliche_F, list_stats)
    var Morts = []
    console.log("Celles-ci sont " + victimes[4][0] + victimes[4][1][0] + ", "+victimes[3][0] + victimes[3][1][0] + ", " + victimes[2][0] + victimes[2][1][0] + ", " + victimes[1][0] + victimes[1][1][0] + " et " + victimes[0][0] + victimes[0][1][0] +" .")
    while(Tueur.hp > 0 || victimes.length <= 0){
        var luck = Math.random()
        if(luck < victimes[0][1][1][0]){
            console.log(Tueur.name + " a assassiné " + victimes[0][0] + victimes[0][1][0]+ ".")
            Morts.push(victimes[0])
            victimes.splice(0, 1)
            if(victimes.length>0){
            console.log(Tueur.name + " prend en chasse " + victimes[0][0] + victimes[0][1][0]+ ".")    
            }else{
                console.log(Tueur.name + " a réussi.")
                break
            }
            
        }else{
            if(luck < victimes[0][1][1][0]+victimes[0][1][1][1]){
                Tueur.hp -= 10
                console.log(Tueur.name + " s'est fait attaqué par " + victimes[0][0] + victimes[0][1][0]+ " . Il lui reste " + Tueur.hp + "HP .")
            }else{
                console.log(Tueur.name + " a été gravement blessé par " + victimes[0][0] + victimes[0][1][0]+ " . Il l'a cependant attrapé et tué.")
                Tueur.hp -= 15
                Morts.push(victimes[0])
                victimes.splice(0, 1)
                if(victimes.length>0){
                    console.log("Il lui reste " + Tueur.hp + "HP, cependant " + Tueur.name + " se lance à la poursuite de " + victimes[0][0] + victimes[0][1][0]+ " .")
                }else{
                    console.log(Morts[4][0] + Morts[4][1][0] + " a lancé un assaut désespéré mais s'est fait ettripé par " + Tueur.name + " .")
                    break
                }
                
            }
        }
    }
    if(Tueur.hp>0){
        console.log("Le tueur est parvenu à chasser toutes ses victimes.")
        console.log(Morts[4][0] + Morts[4][1][0] + ", "+Morts[3][0] + Morts[3][1][0] + ", " + Morts[2][0] + Morts[2][1][0] + ", " + Morts[1][0] + Morts[1][1][0] + " et " + Morts[0][0] + Morts[0][1][0] + " sont tous morts des mains de " + Tueur.name + " .")

    }else{
       console.log(Tueur.name + " s'est fait tué par ses propres victimes.")
        if(Morts.length == 0){
            console.log("Personne n'est mort! "+victimes[4][0] + victimes[4][1][0] + ", "+victimes[3][0] + victimes[3][1][0] + ", " + victimes[2][0] + victimes[2][1][0] + ", " + victimes[1][0] + victimes[1][1][0] + " et " + victimes[0][0] + victimes[0][1][0] +" sont tous vivants.")
        }
        if(Morts.length == 1){
            console.log("Malheureusement, "+Morts[0][0] + Morts[0][1][0] +" s'est fait avoir par le tueur. "+victimes[3][0] + victimes[3][1][0] + ", " + victimes[2][0] + victimes[2][1][0] + ", " + victimes[1][0] + victimes[1][1][0] + " et " + victimes[0][0] + victimes[0][1][0] +" s'en sont sortis vivants cependant.")
        }
        if(Morts.length == 2){
            console.log(Morts[1][0] + Morts[1][1][0] + " et " + Morts[0][0] + Morts[0][1][0] + " sont morts. "+ victimes[2][0] + victimes[2][1][0] + ", " + victimes[1][0] + victimes[1][1][0] + " et " + victimes[0][0] + victimes[0][1][0] +" ont survécus.")
        }
        if(Morts.length == 3){
            console.log(Morts[2][0] + Morts[2][1][0] + ", " + Morts[1][0] + Morts[1][1][0] + " et " + Morts[0][0] + Morts[0][1][0] + " sont morts. "+ victimes[1][0] + victimes[1][1][0] + " et " + victimes[0][0] + victimes[0][1][0] +" ont pus s'en sortirs.")
        }
        if(Morts.length == 4){
            console.log(Morts[3][0] + Morts[3][1][0] + ", "+Morts[2][0] +Morts[2][1][0] + ", "+Morts[1][0] +Morts[1][1][0] + " et "+Morts[0][0] +Morts[0][1][0] + " sont morts. "+victimes[0][0] + victimes[0][1][0] +" est parvenu à finir le tueur après avoir vu tous les autres mourirs")
        }
        if(Morts.length == 5){
            console.log(Morts[4][0] + Morts[4][1][0] + ", "+Morts[3][0] + Morts[3][1][0] + ", " + Morts[2][0] + Morts[2][1][0] + ", " + Morts[1][0] + Morts[1][1][0] + " et " + Morts[0][0] + Morts[0][1][0] + " sont morts. Malgrés tout " + Tueur.name + " s'est fait tué par " + Morts[4][0] + Morts[4][1][0] + " dans son dernier assaut.")
        } 
    }
    
} 

attaque(Jason, list_name, list_cliche_H, list_cliche_F, list_stats)