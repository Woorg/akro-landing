import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'magnific-popup';
import slick from 'slick-carousel';

(function ($) {

	svg4everybody();

	var styles = [
		'padding: 2px 9px',
		'background: #82B93C',
		'color: #fff',
		'display: inline-block',
		'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
		'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
		'line-height: 1.56',
		'text-align: left',
		'font-size: 19px',
		'font-weight: 400'
	].join(';');

	console.log('%c developed by igor gorlov https://webjeb.ru', styles);


	$(function() {


		/*Callback*/

		$('.popup-open').magnificPopup({
			type: 'inline',
			midClick: true,
			mainClass: 'popup-callback'
		});


		/**
		 * Hero arrow
		 */

		$('.hero__arrow').on('click', function(e) {
			var _scroll = $(this).attr('href');
			if (_scroll != '#' && $(_scroll).length) {
				$('html, body').animate({ scrollTop: $(_scroll).offset().top - 116 }, 800);
			}
		});


		// Validation

		// const form = $('#wpcf7-f630-p441-o1 form');

		// $.validator.setDefaults({
		// 	errorPlacement: function (error, element) {
		// 		element
		// 			.prev()
		// 			.attr("placeholder", error[0].outerText);
		// 	}
		// });

			// const formSec = $('#wpcf7-f635-o1 form');

		// formSec.validate({
		// 	rules: {
		// 		name_1 : {
		// 			required: true
		// 		},
		// 		email_1: {
		// 			required: true,
		// 			email: true
		// 		},
		// 		message_1: {
		// 			required: true
		// 		}
		// 	},
		// 	message: {
		// 		name_1: {
		// 			required: ''
		// 		},
		// 		email_1: {
		// 			required: '',
		// 			email: ''
		// 		},
		// 		message_1: {
		// 			required: ''
		// 		}
		// 	}
		// });


		// const formThird = $('#wpcf7-f635-o2 form');

		// formThird.validate({
		// 	rules: {
		// 		name_1 : {
		// 			required: true
		// 		},
		// 		email_1: {
		// 			required: true,
		// 			email: true
		// 		},
		// 		message_1: {
		// 			required: true
		// 		}
		// 	},
		// 	message: {
		// 		name_1: {
		// 			required: ''
		// 		},
		// 		email_1: {
		// 			required: '',
		// 			email: ''
		// 		},
		// 		message_1: {
		// 			required: ''
		// 		}
		// 	}
		// });


	// function pageWidget(pages) {
	// 	var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
	// 	widgetWrap.prependTo("body");
	// 	for (var i = 0; i < pages.length; i++) {
	// 		$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
	// 	}
	// 	var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
	// 	widgetStilization.prependTo(".widget_wrap");
	// }

		// pageWidget(['index', 'contacts', 'agency', 'services', 'portfolio', 'portfolio-single', 'blog', 'blog-single']);

	});


})(jQuery);
