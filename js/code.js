
var FPVA = {
	phrases: [
		"La salud lo es todo y es esencial cuidarla.",
		"Parte de la curación esta en la voluntad de sanar.",
		"La libertad y la salud se asemejan, su verdadero valor se conoce cuando nos faltan.",
		"Solo la alegria es garantia de salud y longevidad."
	],
	mast:{
		adjust:function() {
			var prop = 1070/2000, h = prop * $(window).width();
			$('#mast, #mast2').height( h + 'px' );
			$('#mast2').css( 'top', h + 'px' );
			$(window).height() > 768
			$('header').height( (h*2) + 'px' );
		},
		boot:function() {
			if($('#mast').length >= 1) {
				FPVA.mast.adjust();
				$(window).resize( FPVA.mast.adjust );

				$('.page-content').css('background', '#ccc').css('padding', 0);
				$('body').css('background', '#ccc');
				$('.site-header').css('border-width', 0);
			}
		}
	},
	boot:function() {
		$('footer .wrapper').html( '"'+_(FPVA.phrases).sample()+'"' );
		FPVA.mast.boot();
	}
};

$( FPVA.boot );
