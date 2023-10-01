class character {
    constructor(name, hp){
        this.name = name
        this.hp = hp
    }

    cursedMusic(playlist){
        var mNumb = Math.random()
        if(mNumb<0.2){
            console.log(playlist[0] + " passe à la radio.")
            return true
        }
        if(mNumb<0.4){
            console.log(playlist[1] + " passe à la radio.")
            return false
        }
        if(mNumb<0.6){
            console.log(playlist[2] + " passe à la radio.")
            return false
        }
        if(mNumb<0.8){
            console.log(playlist[3] + " passe à la radio.")
            return false
        }
        console.log(playlist[4] + " passe à la radio.")
        return false
    }
}

let Jhon = new character("Jhon", 10)

let playlist = ["Wejdene","I'm Blue","Let me down","Don't matter","Two Face"]

console.log(Jhon)
console.log(playlist)

function traject(passenger, playlist, stops){
    var nbOfTaxi = 1
    console.log(passenger.name + " empreinte un taxi.")
    while(stops > 0){
        console.log("Il reste " + stops + " feux rouges avant d'arriver.")
        stops -= 1
        if(passenger.cursedMusic(playlist)){
            passenger.hp -= 1
            console.log("Il reste "+ passenger.hp + " points de tolérence à " + passenger.name + " .")
            if(passenger.hp <= 0){
                console.log(passenger.name + " explose en entendant la musique. Ils meurent, lui et le chauffeur.")
                console.log(passenger.name + " n'est pas arrivé destination.")
                return
            }
            nbOfTaxi += 1
            console.log(passenger.name + " , en entendant la musique, fuis le taxi pour en trouver un autre.")
        } 
    }
    console.log(passenger.name + " est arrivé à destination. Il a pris " + nbOfTaxi + " taxis.")
}

traject(Jhon, playlist, 30)