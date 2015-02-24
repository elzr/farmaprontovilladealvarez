
var FPVA = {
	phrases: [
		"La salud lo es todo y es esencial cuidarla.",
		"Parte de la curación esta en la voluntad de sanar.",
		"La libertad y la salud se asemejan, su verdadero valor se conoce cuando nos faltan.",
		"Solo la alegria es garantia de salud y longevidad."
	],
	header:{
		adjust:function() {
			var w = $(window).width(), side = w - 800;

			if($('#mast').length < 1) {
				if( w <= 1100 ) {
					$('header').addClass('constrained');
				} else {
					$('header').removeClass('constrained');
				}
			} else {
				if( w <= 1100 ) {
					$('.welcome, .fb-like-box').css('margin-top', '50px');
					$('.site-navi').css('margin-right', 0);
				} else {
					$('.welcome, .fb-like-box').css('margin-top', '0');
					$('.site-navi').css('margin-right', (side/3 - 100)+'px');
				}
			}
		},
		boot:function() {
			FPVA.header.adjust();
			$(window).resize( FPVA.header.adjust );
		}
	},
	mast:{
		adjust:function() {
			var prop = 1070/2000, h = prop * $(window).width();
			$('#mast, #mast2').height( h + 10 + 'px' );
			$('#mast2').css( 'top', h + 10 + 'px' );

			if( ($(window).height() < 800) || ($(window).width() < 1300) ) {
				$('header').height( (h*2)+ 20 + 'px' );
			} else {
				$('header').height( h + 10 + 'px' );
			}
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
		FPVA.header.boot();
	}
};

$( FPVA.boot );
