# Digital Banking Fronted Application

## Description du projet
This project is a robust frontend system for a Digital Banking application built with **Angular**. It manages customers, different types of bank accounts (Current and Saving), and tracks all financial operations.

---

##  Progrès de developpement

###  Phase 1: Components
-  **Commit:** Création des composants
- [x] Création des components et réaliser le routage entre eux.
- [x] Liaison avec le Backend SpringBoot


###  Phase 2: Services
-  **Commit:** Création des services
- [x] Création des services.
- [x] Injection du service dans le composant.ts.
- [x] Affichage du message d'erreur dans l'html.


###  Phase 3: Models
-  **Commit:** Création des models
- [x] Création des models.
- [x] Utilisation des models dans les services.
- [x] Création d'un fichier de variables d'environement.
- [x] Tester l'affichage des customers et la recherche et l'ajout.


###  Phase 4: Sécurité et Authentification
-  **Commit:** établir l'authentification
- [x] Création du component login
- [x] Création d'un service d'Authentification pour envoyer des reauetes HTTP au backend pour récupérer le jwt et injecter le service dans la classe .ts
- [x] CrosOrigin(*) ne marche plus dans le CustomerRestController au backend avec SpringSecurity on doit configurer corsconfiguration dans le SecurityConfig class dont on ajoute un @Bean pour CorsConfiguration
- [x] Tester l'affichage des customers et la recherche et l'ajout.
- [x] Création d'interceptor pour passer par l'admin dans les liens

