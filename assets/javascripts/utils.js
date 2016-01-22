// Write the current year to the page element (e.g. Copyright statement)
function writeCurrentYear(){
	var currentYear = new Date();
	document.write(currentYear.getFullYear());
};


// jQuery - Calls upon document.ready
$(document).ready(function (){
	
	// Scroll to the page's content anchor upon page load (1s animation), 
	// except for home which won't contain content in this app and will be 
	// displayed with no animation
	if  (!$(".home").length > 0) {
		
		// In case of access to a specific post, it won't be animated but 
		// go directly to the content (no jQuery requried, this is coded 
		// directly in the link redirecting present in the posts list)
		if (!$(".post-title").attr("itemprop")) {
			$('html, body').animate({
				scrollTop: $("#anchor-content").offset().top
			}, 1000);
		};
	}
	
	// Scroll to the footer/contact info upon contact request (link click)
	$("#goto-contact").click(function(event) {
		// Stopping the redirect action, there is no need to change pages in 
		// this case, and just scrolling to the footer/contact section
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: $("#anchor-contact").offset().top
		}, 1000);
	});
	
});