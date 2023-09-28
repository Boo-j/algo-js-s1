'''
var pierre = {"nom":"pierre", "ciseaux": true, "papier": false, "pierre": "draw"}
var ciseaux = {"nom":"ciseaux", "papier": true, "pierre": false, "ciseaux": "draw"}
var papier = {"nom":"papier", "pierre": true, "ciseaux": false, "papier": "draw"}

function adversaire(){
    var choix = math.random()
    if (choix == 1){
        return pierre
    } else {
        return ciseaux
    }
}

function joueur(coup1){
    var coup2 = adversaie()
    return coup1[coup2[nom]], coup1[nom], coup2[nom]
}
console.log(joueur(pierre))
