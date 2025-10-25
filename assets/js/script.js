// On attend que toute la page HTML soit chargée avant d'exécuter notre code.
// C'est une bonne pratique pour éviter les erreurs.
document.addEventListener('DOMContentLoaded', function () {

    // On sélectionne nos deux champs de formulaire par leur ID.
    const fcfaInput = document.getElementById('fcfa-input');
    const jetonsOutput = document.getElementById('jetons-output');

    // On s'assure que les champs existent bien sur la page actuelle.
    // Ainsi, ce code ne provoquera pas d'erreur sur la page d'accueil.
    if (fcfaInput && jetonsOutput) {

        // On définit notre taux de conversion.
        const TAUX_CONVERSION = 2.5; // 250 Jetons / 100 FCFA

        // On crée une fonction qui fait le calcul.
        function calculerConversion() {
            // 1. On récupère la valeur entrée et on la transforme en nombre.
            // S'il n'y a rien ou si ce n'est pas un nombre, la valeur sera 0.
            const montantFcfa = parseFloat(fcfaInput.value) || 0;

            // 2. On fait le calcul.
            const montantJetons = montantFcfa * TAUX_CONVERSION;

            // 3. On affiche le résultat dans le champ des jetons.
            // Math.floor() arrondit à l'entier inférieur, car on ne veut pas de virgules pour les jetons.
            jetonsOutput.value = Math.floor(montantJetons);
        }

        // 4. C'est ici la magie : on "écoute" l'événement 'input'.
        // Cet événement se déclenche à chaque fois que l'utilisateur tape une touche,
        // supprime, ou colle du texte dans le champ.
        fcfaInput.addEventListener('input', calculerConversion);
    }

});