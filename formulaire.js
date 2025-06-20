const formulaire = document.getElementById("voiture")


formulaire.innerHTML = `
<div>
    <input type="text" placeholder="Modèle">
    <input type="text" placeholder="Année">
    <input type="text" placeholder="Marque">
    <input type="text" placeholder="Couleur">
    <button type="submit" onclick="()">Générer</button>
</div>`;