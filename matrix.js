(function ($) {
	String.prototype.replaceAt = function(index, character) {
		return this.substr(0, index) + character + this.substr(index + 1);
	}
	function getRandomChar() {
		var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^*0123456789";
		return letters[ Math.floor((Math.random() * letters.length)) ];
	}
	
	function decodeEncryption($target, str, cursor, delay, cb) {
		var html = $target.html();
		if (cursor < str.length) {
			setTimeout(function () {
	    		$target.html(html.replaceAt(cursor, str[cursor]));
	        	decodeEncryption($target, str, cursor + 1, delay, cb);
			}, delay);
	    } else {
		    cb();
	    }
	}
	
	function typeEncryption($target, str, cursor, delay, cb) {
		var html = $target.html();
		if( html.length != str.length ) {
			if ( cursor >= html.length && str.length > html.length ) {
		    	setTimeout(function () {
		    		$target.html( html + ( str[cursor] == ' ' ? ' ' : getRandomChar() ) );
		        	typeEncryption($target, str, cursor + 1, delay, cb);
				}, delay);
			} else if ( cursor >= html.length && str.length < html.length ) {
		    	setTimeout(function () {
		    		$target.html( html.substr(0, html.length - 1) );
		        	typeEncryption($target, str, cursor + 1, delay, cb);
				}, delay);
			} else if( cursor < html.length ) {
		    	setTimeout(function () {
		    		$target.html(html.replaceAt(cursor, ( str[cursor] == ' ' ? ' ' : getRandomChar() )));
		        	typeEncryption($target, str, cursor + 1, delay, cb);
				}, delay);
			}
		} else {
	    	cb();
	    }
	}
	// jQuery hook
	$.fn.extend({
		matrixtype: function (opts) {
			var settings = $.extend({}, $.matrixtype.defaults, opts);
			
			return $(this).each(function () {
				(function loop($tar, idx) {
					typeEncryption($tar, settings.text[idx], 0, settings.speed, function () {
						setTimeout(function () {
				            decodeEncryption($tar, settings.text[idx], 0, settings.speed, function () {
								setTimeout(function () {
					            	loop($tar, (idx + 1) % settings.text.length);
					            }, settings.pause);
								//loop($tar, (idx + 1) % settings.text.length);
							});
						}, settings.delay);
					});
				}($(this), 0));
			});
		}
	});

	// plugin defaults  
	$.extend({
		matrixtype: {
			defaults: {	
				speed: 50,
				delay: 500,
				pause: 5000,
				text: []
			}
		}	
	});
}(jQuery));