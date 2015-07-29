
require([
         "jquery",
         "underscore",
         "backbone",
         "splunkjs/mvc/simplexml/ready!"
     ], function(
         $,
         _,
         Backbone
     )
     {
         
		// Find the Javascript blocks and run them
		$.each($('div.javascript'), function( index, value ) {
			eval(value.innerText);
		});
		
     }
);