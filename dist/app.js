$(function () {
	'use strict'

	$('textarea').keyup(function (e) {
		onTyping($(this), e);
	});

	function onTyping ($this, eve) {
		$this.css({"overflow": "hidden"});
		$this.css({"height": "20px"});
		$this.css({"height": ($this.prop('scrollHeight') > 30) ? $this.prop('scrollHeight') + 'px' : '20px'});
		if (eve.keyCode === 13 && !eve.shiftKey) {
			$('.output').html("<b>Output</b><br/>" + $this.val());
			$this.val('');
			$this.css({"height": "20px"});
		}
	}

});
