

/*!

 * ICOCrypto v1.9.3 by Softnio. 

**/

var NioApp = (function (jQ, win, doc){

    "use strict";

    var NioApp = {AppInfo: {name: "ICOCrypto", package: "1.9.2", version: "1.0.4", author: "Softnio"} },

        components = {docReady: [], docReadyDefer: [], winLoad: [], winLoadDefer: []};



    jQ(doc).ready(docReady);

    jQ(win).on("load", winLoad);



    function docReady(stmt){

        stmt = (typeof stmt === typeof undefined) ? jQ : stmt;

        components.docReady.concat(components.docReadyDefer).forEach(function(component){ component(stmt); });

    }



    function winLoad(stmt){

        stmt = (typeof stmt === "object") ? jQ : stmt;

        components.winLoad.concat(components.winLoadDefer).forEach(function(component){ component(stmt); });

    }

	

    NioApp.components   = components;

    NioApp.docReady 	= docReady;

    NioApp.winLoad    	= winLoad;



    return NioApp;

}(jQuery, window, document));



NioApp = function (NioApp, $, window, document) {

    "use strict";

	// Defined Variables

    var $win		= $(window), 

		$doc		= $(document),

		$body		= $('body'),

		$header		= $('.header-main');

 

	var _navBreak	= 992,

		_mobBreak	= 768,

		_mobMenu	= 'menu-mobile',

		_has_fixed	= 'has-fixed',

		_is_shrink	= 'is-shrink',

		_block		= 'nk-block',

        _body_class = 'nio-theme',

        _currentURL	= window.location.href,

        _currentHST	= window.location.hostname,

        _headerHT	= ($header.innerHeight() - 2),

        _splitURL	= _currentURL.split("#");

    

	// is exists @v1.0

	$.fn.exists = function (){

        return this.length > 0;

    };

	

	// Return Check @v1.0

	NioApp.Win = {};

	NioApp.Win.height = $(window).height();

	NioApp.Win.width = $(window).width();

	

	// getStatus @v1.0

	NioApp.getStatus = {};

	NioApp.getStatus.isRTL = ($body.hasClass('has-rtl') || $body.attr('dir') === 'rtl') ? true : false;

	NioApp.getStatus.isTouch = (("ontouchstart" in document.documentElement)) ? true : false;

	NioApp.getStatus.isMobile = (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i)) ? true : false;

	NioApp.getStatus.asMobile = (NioApp.Win.width < _mobBreak) ? true : false;



	// Update on Resize

	$win.on('resize',function(){

		NioApp.Win.height = $(window).height();

		NioApp.Win.width = $(window).width();

		NioApp.getStatus.asMobile = (NioApp.Win.width < _mobBreak) ? true : false;

	});





    

	//// Utilities ////

	///////////////////

	NioApp.Util = {};

	// ClassInit !Util @v1.0

	NioApp.Util.classInit = function() {

		var hastouch = function () {

				if (NioApp.getStatus.isTouch===true) { 

					$body.addClass("has-touch"); 

				} else { 

					$body.addClass("no-touch"); 

				}

			},

			mobileview = function () {

				if (NioApp.getStatus.asMobile===true) { 

					$body.addClass('as-mobile');

				} else {

					$body.removeClass('as-mobile');

				}

			},

            hasrtl = function () {

                if($body.attr('dir') === 'rtl') {

                    $body.addClass('has-rtl');

                    NioApp.getStatus.isRTL = true;

                }

            },

            theming = function () {

                if(typeof _body_class!=='undefined') {

                    $body.addClass('nk-'+_body_class);

                }

            };

		hastouch(); mobileview(); hasrtl(); theming();

		$(window).on('resize', mobileview);

	};

    NioApp.components.docReady.push(NioApp.Util.classInit);

	

    // PreLoader !Util @v1.0

    NioApp.Util.preLoader = function () {

		var $preloader 	= $('.preloader'),

            $spinner 	= $('.spinner');

		

		if ($preloader.exists()) {

            $body.addClass("page-loaded");

            $spinner.addClass("load-done");

            if(!$spinner.hasClass('spinner-alt')){

                $spinner.fadeOut(300);

            }

            $preloader.delay(600).fadeOut(300);

        }

	};

	NioApp.components.winLoad.push(NioApp.Util.preLoader);

	

	// BackTop !Util @v1.0

	NioApp.Util.backTop = function () {

		var $backtop = $('.backtop');

			

        if ($backtop.exists()) {

              var scrollOffsetFromTop = 800;

              if ($win.scrollTop() > scrollOffsetFromTop) {

                  $backtop.fadeIn("slow");

              } else {

                  $backtop.fadeOut("slow");

              }



              $backtop.on("click", function (e) {

                  $('body,html').stop().animate({

                      scrollTop: 0

                  }, 1500, 'easeInOutExpo');

                  e.preventDefault();

              });

          }

    };

	NioApp.components.docReady.push(NioApp.Util.backTop);

    

    // Browser Check !Util @v1.0

    NioApp.Util.browser = function() {

        var isChrome = (navigator.userAgent.indexOf("Chrome") !== -1) ? 1 : 0, 

        isFirefox = (navigator.userAgent.indexOf("Firefox") !== -1) ? 1 : 0,

        isSafari = (navigator.userAgent.indexOf("Safari") !== -1) ? true : false,

        isIE = ((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode)) ? 1 : 0,

        isEdge = !isIE && !!window.StyleMedia, 

        isOpera = (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) ? 1 : 0;

        

        if(isChrome) {

            $body.addClass('chrome');

        } else if (isFirefox){

            $body.addClass('firefox');

        } else if (isIE){

            $body.addClass('ie');

        } else if (isEdge){

            $body.addClass('edge');

        } else if (isOpera){

            $body.addClass('opera');

        } else if (isSafari){

            $body.addClass('safari');

        }

    };

	NioApp.components.winLoad.push(NioApp.Util.browser);
	return NioApp;

}(NioApp, jQuery, window, document);

/* END @iO */