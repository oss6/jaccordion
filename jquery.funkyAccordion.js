
/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **
 *	funkyAccordion jQuery Plugin		  							 *
 *	AUTHOR: Edbali Ossama											 *
 *	DESCRIPTION: This plugin creates an 							 *
 *	accordion to attach to your html page							 *
 *	(for better results use also the css!!!).						 *
 *	BASIC USAGE: $('div#accordion').funkyAccordion();				 *
 *				 $('div#accordion').funkyAccordion({header: 'h3'});	 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

(function ($) {
    // GLOBAL VARIABLES AND FUNCTIONS
    function setMode(mode, hasIcon, el) {
        if (mode) {

            if (hasIcon) {
                if (el.hasClass('activeHeadIcon'))
                    el.removeClass('activeHeadIcon');
                else
                    el.parent()
                        .children('.activeHeadIcon')
                        .removeClass('activeHeadIcon')
                        .end()
                        .end()
                        .addClass('activeHeadIcon');
            }

            if (el.hasClass('activeAccordion'))
                el.removeClass('activeAccordion')
                    .next()
                    .slideUp(100);
            else
                el.parent()
                    .children('.activeAccordion')
                    .removeClass('activeAccordion')
                    .next()
                    .slideUp(100)
                    .end()
                    .end()
                    .end()
                    .addClass('activeAccordion')
                    .next()
                    .slideDown(250);
        }
        else {
            if (hasIcon) {
                if (el.hasClass('activeHeadIcon'))
                    el.removeClass('activeHeadIcon');
                else el.addClass('activeHeadIcon');
            }

            if (el.hasClass('activeAccordion'))
                el.removeClass('activeAccordion')
                    .next()
                    .slideUp(100);
            else 
                el.addClass('activeAccordion')
                    .next()
                    .slideDown(250);
        }
    }

	$.fn.funkyAccordion = function (options) {
		// DEFAULTS
		var defaults = {
			header: 'h3',
			width: '500px',
			icons: false,
			oneOpened: true
		}

		// OPTIONS
	    var o = $.extend(defaults, options);
		
		return this.each(function () {
			var $e = $(this);
			var $h = $e.children(o.header);
			
			// PRELIMINARY SETTINGS
			$h.next().hide();
			$e.children('.activeAccordion')
                .next()
                .show();
			
			$e.addClass('mainAccordion');
			$h.addClass('headAccordion')
                .next()
                .addClass('containerAccordion');
			
			$e.css({width: o.width});
			
			if (o.icons == true)
			    $h.addClass('headIcon');

			// CLICK ON HEADER
			$h.click(function () {
			    setMode(o.oneOpened, o.icons, $(this))
			});
		});
	}
})(jQuery);