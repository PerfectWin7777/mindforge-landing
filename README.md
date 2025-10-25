# 🧠 MindForge - L'Écosystème Intelligent pour l'Enseignement au Cameroun

<div align="center">
  <img src="https://raw.githubusercontent.com/PerfectWin7777/mindforge-landing/main/assets/images/mindforge_banner.png" alt="MindForge Banner" width="100%">
  <!-- Note: Une fois que vous aurez un logo ou une bannière, mettez le bon lien ici -->
  <br>
  <strong>Innovation. Collaboration. Pédagogie.</strong>
</div>

---

MindForge est une application mobile innovante conçue pour révolutionner le quotidien des enseignants au Cameroun. Elle fusionne un outil de productivité avancé (génération d'épreuves par IA) avec une plateforme sociale et une bibliothèque collaborative de ressources.

🔗 **Site Vitrine :** [https://perfectwin7777.github.io/mindforge-landing/](https://perfectwin7777.github.io/mindforge-landing/)

---

## 🚀 Fonctionnalités Clés

### 1. Le Studio (Génération par IA)
Notre fonctionnalité phare. Un moteur IA avancé permet aux enseignants de générer en quelques secondes des épreuves (devoirs, examens) conformes aux programmes scolaires camerounais.
- **Personnalisation extrême :** Choix de la matière, classe, durée, difficulté, chapitres cibles.
- **Paramètres pédagogiques :** Style de l'épreuve (académique, problématisé APC), ancrage culturel.
- **Formats multiples :** Sortie en PDF et DOCX modifiable.

### 2. Le Réseau Social Pédagogique
Un fil d'actualité dédié aux échanges professionnels.
- **Partage multimédia :** Texte, images, vidéos, et même fichiers audio pour les profs de langues.
- **Sondages intégrés :** Pour recueillir rapidement l'avis de la communauté.
- **Interactions riches :** Likes, commentaires, partages, citations de posts.

### 3. L'Explorer (Bibliothèque Collaborative)
Un espace centralisé pour partager et découvrir des ressources.
- **Upload simplifié :** Partagez des cours, anciens sujets, corrigés.
- **Recherche intelligente :** Filtrez par matière, niveau, type de document.
- **Valorisation communautaire :** Système de mise en avant des meilleures ressources.

---

## 🏗️ Architecture Technique

MindForge repose sur une architecture moderne et découplée, conçue pour la performance et la scalabilité.

<div align="center">
  <!-- Placeholder pour un schéma d'architecture si vous en avez un jour -->
  <code>[Application Mobile Flutter] <--> [Backend FastAPI] <--> [IA & Bases de Données]</code>
</div>

### 📱 Frontend (Mobile)
Développé avec **Flutter**, garantissant une expérience fluide et native sur Android et iOS.
- **Architecture :** Provider pour la gestion d'état réactive.
- **Approche "Feature-First" :** Code modulaire et facile à maintenir.
- **Gestion Optimisée :** Utilisation avancée de Dio pour les requêtes réseau (avec intercepteurs pour l'authentification), caching local (Hive) pour le hors-ligne, et gestionnaires dédiés (Managers) pour la logique métier.

### ⚙️ Backend (API & IA)
Propulsé par **FastAPI (Python)**, orchestrant les services complexes.
- **Orchestration IA :** Utilisation de LangGraph pour créer des pipelines de génération d'épreuves sophistiqués et multi-étapes (planification, rédaction, assemblage, critique, mise en forme).
- **Base de Données :** Supabase (PostgreSQL) pour les données relationnelles, avec gestion de l'authentification et du stockage de fichiers (Storage buckets).
- **Tâches Asynchrones :** Utilisation de Redis et de workers pour gérer les tâches de génération longues sans bloquer l'utilisateur.
- **Rendu de Documents :** Pipeline dédié pour la conversion du Markdown enrichi vers des formats finaux professionnels (PDF via WeasyPrint, DOCX).

### 🌐 Site Vitrine
Hébergé sur **GitHub Pages** pour une disponibilité maximale et une maintenance nulle.
- Simple, rapide et *mobile-first*.
- Sert de point d'entrée pour les utilisateurs et de centre de support (FAQ, conditions d'utilisation).

---

## 📦 Installation (Développement)

### Prérequis
- **Flutter SDK** (version stable la plus récente)
- **Python 3.11+**
- **Docker** (pour lancer les services locaux comme Redis ou simuler Supabase si besoin)

### Démarrage du Frontend```bash
cd frontend
flutter pub get
flutter run