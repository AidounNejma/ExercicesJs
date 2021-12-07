/* Les boucles  */
/* Exercice 1 */

for (let i = 0; i <= 10; i++){
    document.write(i);
}

document.write("<hr>");

/* Exercice 2 */

let i = 0;
let e = 2;

for(i = 0; i <= 20; i++){
    document.write(i * e + " - ");
}
document.write("<hr>");
/* Exercice 3 */

let a;
let b =  2;

for (a = 100; a >= 10; a--){
    document.write(a * b + " - ");
}
document.write("<hr>");

/* Exercice 4 */
for(c = 1; c <= 10; c++){
    document.write(c * 0.5 + " - ")
}
document.write("<hr>");

/* Exercice 5 */
for(d = 0; d <= 15; d++){
    document.write("On y arrive presque" + "<br>");
}
document.write("<hr>");

/* Exercice 6 */
for (f = 20; f > 0; f--){
    document.write("C'est presque bon" + "<br>");
}
document.write("<hr>");

/* Exercice 7 */
for (f = 0; f <= 100; f= f+15){
    document.write("On tient le bon bout" + "<br>");
}
document.write("<hr>");

/* Exercice 8 */
for (f = 200; f >= 0; f= f-12){
    document.write("Enfin !" + "<br>");
}
document.write("<hr>");

/* Les fonctions */

/* Exercice 1 */

function exo1(){
    return true
}

document.write(exo1())
document.write("<hr>");

/* Exercice 2 */

function exo2(string){
    return string;
}
document.write(exo2("hey"));
document.write("<hr>");

/* Exercice 3 */
let mot1;
let mot2;
function exo3(mot1, mot2){
    document.write(mot1 + " " + mot2)
}
exo3("Salut", "Nejma")
document.write("<hr>");

/* Exercice 4 */

function quelNombre(a, b){
    if(a > b){
        document.write("Le premier nombre est plus grand")
    }
    else if(a < b){
        document.write("Le deuxième nombre est plus grand")
    }
    else {
        document.write("Les deux nombres sont identiques")
    }
}

quelNombre(2, 3);
document.write("<hr>");


/* Exercice 5 */


function concat(){
    var text = "J'ai"
    var text2 = "ans."
    var number = 28;
    document.write(text + " " + number + " " + text2)
}
concat();
document.write("<hr>");

/* Exercice 6 */
function jeSuis(){
    let nom = "Aidoun";
    let prenom = "Nejma";
    let age = 26;
    document.write("Je m'appelle" + " " + prenom + " " + nom + " " + "et j'ai " + age + " " + "ans.");
}
jeSuis();
document.write("<hr>");

/* Exercice 7 */

/* Comprendre pourquoi ça ne fonctionne pas

    function qui(genre, age){ 
    if (age < 18){
        return "et vous êtes mineur."
    }
    else if(age => 18){
        return "et vous êtes majeur."
    }
    if(genre == "homme") {
        return "Vous êtes un homme"
    }
    else if(genre == "femme"){
        return "Vous êtes une femme"
    }
    return genre + " " + age;
}
document.write(qui("homme", 17)); */

function qui(age, genre){
    if ( genre == "Homme" ){
        if ( age> 18 ) {
            document.write("Vous etes un Homme et Majeur")
        }
        else { document.write("Vous etes un Homme et Mineur")}
    }
    else if ( genre == "Femme") {
        if ( age>18 ){
            document.write("Vous etes une Femme Majeur")
        }
        else { document.write("Vous etes une Femme Mineur")} 
    } 
}
qui(12,"Homme");
document.write("<hr>");

/* Exercice 8 */
let nbr1 = 1;
let nbr2 = 2;
let nbr3 = 3;

function addition(nbr1, nbr2, nbr3){
    return nbr1 + nbr2 + nbr3;
}

document.write(addition(nbr1, nbr2, nbr3));
document.write("<hr>");

/* Les tableaux */

/* Exercice 1 */
let mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]

/* Exercice 2 */
document.write(mois[2])
document.write("<hr>");

/* Exercice 3 */
document.write(mois[4])
document.write("<hr>");

/* Exercice 4 */
mois.splice(7, 1, "août");
document.write(mois[7]);
document.write("<hr>");

/* Exercice 5 */
let dep = {59: "Nord", 60: "Oise", 62 : "Pas de Calais", 80: "Somme"}

/* Exercice 6 */
document.write(dep[59])
document.write("<hr>");

/* Exercice 7 */
dep[51] = "Marne"


/* Exercice 8 */

for(let i =0; i < mois.length; i++){
    document.write(mois[i] + "<br>");
}
document.write("<hr>");

/* Exercice 9 */
for(n in dep){
    document.write(dep[n] + "<br>");
}
document.write("<hr>");

/* Exercice 10 */
for(n in dep){
    document.write("Le département " + dep[n] + " a le numéro " + n + "<br>" )
}