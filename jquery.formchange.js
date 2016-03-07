$.fn.extend({
	trackChanges: 
	function() {
		$(':input', this).change(function() {
			$(this.form).data('changed', true);
		});
		$(':textarea', this).change(function() {
			$(this.form).data('changed', true);
		});
		$(':select', this).change(function() {
			$(this.form).data('changed', true);
		});
	}
	,
	isChanged: 
	function() { 
		return this.data('changed'); 
	}
});