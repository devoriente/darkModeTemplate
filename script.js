//Je sélctionne et je stocke
//la DIV switch
const switchBox = document.querySelector('.switch');
console.log(switchBox);
//La DIV btn (le cercle)
const btn = document.querySelector('.btn');
console.log(btn);
//l'icône
const icone = document.querySelector('i');
console.log(icone);
//La DIV container
const container = document.querySelector('.container');
console.log(container);
//Le titre
const titre = document.querySelector('.titre');
console.log(titre);

//Je soumets la DIV switch à une action au clic
switchBox.addEventListener('click', function(){
    console.log("DIV cliquée !");
    //Je déplace le cercle
    //J'utilise .classList.toggle
    btn.classList.toggle('btn-change');
    //Je déplace l'icône
    icone.classList.toggle('icone-change');
    //Je change l'icône
    icone.classList.toggle('fa-sun');
    //La DIV change de couleur de fond
    switchBox.classList.toggle('switch-change');
    //La DIV container change de couleur de fond
    container.classList.toggle('container-change');
    //Le titre change de couleur
    titre.classList.toggle('titre-change');
    
    //Je modifie le texte du titre
    if(titre.innerText === "Mode sombre"){
        titre.innerText = "Mode lumineux";
    }else{
        titre.innerText = "Mode sombre";
    };

});
