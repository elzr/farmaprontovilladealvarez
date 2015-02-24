
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
					$('.fb-like-box').css('margin-top', '-50px');
					$('.site-navi').css('right','1%');
				} else {
					$('.fb-like-box').css('margin-top', '0');
					$('.site-navi').css('right','6%');
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
			//$('#mast2').css( 'top', h + 10 + 'px' );

			if( ($(window).height() < 800) || ($(window).width() < 1300) ) {
				$('header').height( h + 200 + 'px' );
				$('.welcome').css( 'top',  h + 50 + 'px' ).css('left', ($(window).width()*0.044) + 300 + 50 ) ;
				$('.fb-like-box').css('top', '380px');
				$('footer').css('margin-left', '350px');
			} else {
				$('.welcome').css('top','7%').css('left', '4%');
				$('header').height( h + 10 + 'px' );
				$('.fb-like-box').css('top', '28%');
				$('footer').css('margin-left', '0');
			}
			if( ($(window).height() < 800) ) {
				$('footer').height('100px');
			} else {
				$('footer').height('auto');
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
