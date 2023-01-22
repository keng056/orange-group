/* -------------------------------------------------------------------

jQuery.RolloverD5

v1.0
http://blog.daichifive.com/archives/1160

Copyright (c) 2011 DAICHIFIVE
------------------------------------------------------------------- */

(function($) {
	$.fn.rollover = function(options) {
		
		var opts = $.extend({
			sufon:  "_on",
			sufcr:  "_cr",
			active: ""
		}, options);
		
		var index = $('body *').index($(opts.active));
		
		return this.not('[src*="'+ opts.sufon +'."]').each(function() {
			var img = $(this);
			var src = img.attr('src');
			if (index == $('body *').index(img)) {
				var src_cr = src.replace(/\.[^.]+$/, opts.sufcr + '$&');
				img.attr('src', src_cr);
			}
			else {
				var src_on = src.replace(/\.[^.]+$/, opts.sufon + '$&');
				$('<img>').attr('src', src_on);
				img.hover(
					function() {
						img.attr('src', src_on);
					},
					function() {
						img.attr('src', src);
					}
				);
			}
		});
	};
})(jQuery);