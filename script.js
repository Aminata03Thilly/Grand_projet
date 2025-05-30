// Exemple de redirection par catégorie
document.querySelectorAll('.categorie-card').forEach(card => {
  card.addEventListener('click', () => {
    const categorie = card.getAttribute('data-categorie');
    // Redirection vers une page filtrée ou spécifique
    window.location.href = `produits.html?categorie=${categorie}`;
  });
});
//produit
function ajouterAuPanier(nom, prix, image) {
    const produit = { nom, prix, image };
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    panier.push(produit);
    localStorage.setItem('panier', JSON.stringify(panier));
    alert(`${nom} a été ajouté au panier.`);
  }
  //  register     créer contact
  const form = document.getElementById("registerForm");
  const password = document.getElementById("motdepasse");
  const confirmPassword = document.getElementById("confirmMotdepasse");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    if (password.value !== confirmPassword.value) {
      e.preventDefault();
      message.textContent = "❌ Les mots de passe ne correspondent pas.";
      message.style.color = "red";
    } else if (password.value.length < 6) {
      e.preventDefault();
      message.textContent = "❌ Le mot de passe doit contenir au moins 6 caractères.";
      message.style.color = "red";
    } else {
      message.textContent = "";
      alert("✅ Compte créé avec succès !");
    }
  });