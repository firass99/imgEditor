// Récupération des éléments HTML par leur ID
let filterA = document.getElementById("blur");
let filterB = document.getElementById("contrast");
let filterC = document.getElementById("rotate");
let filterD = document.getElementById("sepia");

let noFlipBtn = document.getElementById("no-flip");
let flipXBtn = document.getElementById("flip-x");
let flipYBtn = document.getElementById("flip-y");

let uploadButton = document.getElementById("upload-button");
let image = document.getElementById("image");

// Méthode pour réinitialiser les filtres et l'orientation de l'image
function resetFilter(){
    filterA.value = "0";
    filterB.value = "100";
    filterC.value = "0";
    filterD.value = "0";
    noFlipBtn.checked = true;
    addFilter(); // Appel de la méthode pour appliquer les filtres
    flipImage(); // Appel de la méthode pour l'orientation de l'image
}

// Gestionnaire d'événement lorsque l'utilisateur sélectionne un fichier à télécharger
uploadButton.onchange = () => {
    resetFilter(); // Appel de la méthode pour réinitialiser les filtres et l'orientation
    document.querySelector(".image-container").style.display = "block";
    let reader = new FileReader();

    // Lecture du fichier en tant que Data URL
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        image.setAttribute("src", reader.result); // Ajout attribut de l'URL au src de l'image
    }
}

// Parcourir les inputs
let sliders = document.querySelectorAll(".filter input[type='range']");
sliders.forEach( slider => {
    slider.addEventListener("input", addFilter); // Gestionnaire d'événement lors de la modification des filtres
});

// Méthode pour appliquer les filtres à l'image
function addFilter(){
    // Application des filtres CSS à l'image en fonction des valeurs des filtres
    image.style.filter = `blur(${filterA.value}px) contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value}%)`;
}

// Sélection de tous les boutons radio dans les options de retournement
let radioBtns = document.querySelectorAll(".flip-option input[type='radio']");
radioBtns.forEach( radioBtn => {
    radioBtn.addEventListener("click", flipImage); // Gestionnaire d'événement lors du changement d'orientation
});

// Méthode pour retourner l'image en fonction de l'option sélectionnée
function flipImage(){
    if(flipXBtn.checked){
        image.style.transform = "scaleX(-1)";
    }
    else if(flipYBtn.checked){
        image.style.transform = "scaleY(-1)";
    }
    else{
        image.style.transform = "scale(1,1)";
    }
}
