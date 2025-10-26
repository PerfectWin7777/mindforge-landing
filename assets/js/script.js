// On attend que toute la page HTML soit chargée avant d'exécuter notre code.
document.addEventListener('DOMContentLoaded', function () {

    // On sélectionne nos deux champs de formulaire par leur ID.
    const fcfaInput = document.getElementById('fcfa-input');
    const jetonsOutput = document.getElementById('jetons-output');

    // On s'assure que les champs existent bien sur la page actuelle.
    if (fcfaInput && jetonsOutput) {

        // On définit notre taux de conversion.
        const TAUX_CONVERSION = 2.5; // 250 Jetons / 100 FCFA

        // Fonction qui fait le calcul
        function calculerConversion() {
            // Récupérer la valeur entrée et la transformer en nombre
            const montantFcfa = parseFloat(fcfaInput.value) || 0;

            // Faire le calcul
            const montantJetons = montantFcfa * TAUX_CONVERSION;

            // Afficher le résultat arrondi
            jetonsOutput.value = Math.floor(montantJetons);
        }

        // Écouter l'événement 'input' pour calculer en temps réel
        fcfaInput.addEventListener('input', calculerConversion);
    }

});