# splunk-javascript-runner
A sample Splunk app showing how to use a custom chunk of Javascript that allows users to put their own JavaScripting in dashboards.

# How do I use this?

1. Download the app; you can get the bits from [here](http://lukemurphey.net/attachments/download/334/javascript_on_dashboards.tar.gz).
2. Install the app using the configuration page within Splunk
3. Make a view and include a div with a class of "Javascript"; this code will be executed automatically when you open the view within this app. 

# How to add scripting to your view

You will need to make your view with a special div that will inlcude your Javascript. All you need to do is to make an html block that includes a div with a class of "javascript". The code within this div will be interpreted as Javascript and executed automatically.

The app includes a view titled "javascript_dashboard_example" that shows an example.

Here is the example:

	<dashboard>
	  <label>Javascript on Dashboard Example</label>
	    <row>
	        <html>
	          	Current time (being updated with Javascript):
	          	<div style="margin-top:12px" id="time"></div>
	            <div class="javascript">
	              setInterval(function(){ 
	              	$('#time').html(new Date());
	              }, 1000);
	            </div>
	        </html>
	    </row>
	</dashboard>

Notice the div with the class of "javascript". The app will run this code automatically, but only when you load the view within the javascript_on_dashboards app (i.e. viewing it in another app will not work).