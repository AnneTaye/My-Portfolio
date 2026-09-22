// ===== Menu mobile (burger) =====
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Ferme le menu après un clic sur un lien (mobile)
  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== Validation du formulaire de contact =====
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const feedback = document.getElementById("formFeedback");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = document.forms["contactForm"].elements["nom"];
    const email = document.forms["contactForm"].elements["email"];
    const message = document.forms["contactForm"].elements["message"];

    let erreurs = [];

    // Réinitialise les styles d'erreur
    [nom, email, message].forEach(function (champ) {
      champ.classList.remove("input-error");
    });

    // Nom requis
    if (nom.value.trim() === "") {
      erreurs.push("Le nom est obligatoire.");
      nom.classList.add("input-error");
    }

    // Email requis + format valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      erreurs.push("L'e-mail est obligatoire.");
      email.classList.add("input-error");
    } else if (!emailRegex.test(email.value.trim())) {
      erreurs.push("Le format de l'e-mail est invalide.");
      email.classList.add("input-error");
    }

    // Message requis
    if (message.value.trim() === "") {
      erreurs.push("Le message est obligatoire.");
      message.classList.add("input-error");
    }

    if (erreurs.length > 0) {
      feedback.textContent = erreurs.join(" ");
      feedback.className = "form-feedback error";
      return;
    }

    // Succès (front uniquement, pas d'envoi réel)
    feedback.textContent = "Merci " + nom.value.trim() + " ! Votre message a bien été envoyé.";
    feedback.className = "form-feedback success";
    contactForm.reset();
  });
}
