var phrases = [
	"La salud lo es todo y es esencial cuidarla.",
	"Parte de la curación esta en la voluntad de sanar.",
	"La libertad y la salud se asemejan, su verdadero valor se conoce cuando nos faltan.",
	"Solo la alegria es garantia de salud y longevidad."
];

$(function() {
	$('footer .wrapper').html( '"'+_(phrases).sample()+'"' );
});
