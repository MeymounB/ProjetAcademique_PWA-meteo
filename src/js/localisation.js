if ('geolocation' in navigator) {
	// Si la géolocalisation est prise en charge par le navigateur, affiche une boîte de dialogue de confirmation
	navigator.geolocation.getCurrentPosition(
		// Succès
		function (position) {
			console.log('Position acquise avec succès', position);
		},
		// Erreur
		function (error) {
			console.warn('Impossible d\'acquérir la position', error);
		}
	);
} else {
	// Si la géolocalisation n'est pas prise en charge par le navigateur, affiche un message d'erreur
	console.error('La géolocalisation n\'est pas prise en charge par ce navigateur.');
}
