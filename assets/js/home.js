window.onload = function () {
	// fade in the html
	TweenMax.to($("html"), 0.8, { autoAlpha: 1 });

	// create a timeline
	let timeline = new TimelineMax();


	// control all the image loading
	// scrollmagic
	var controller = new ScrollMagic.Controller();

	$(".img_wrapper").each(function () {
		// build a tween
		var tween = TweenMax.to($(this), 0.7, { width: "100%" });

		// build a scene
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.9,
			reverse: false
		})
			.setTween(tween) // trigger a TweenMax.to tween
			.addTo(controller);
	});

	// CONTROL THE ANIMATIONS ON THE SHOP PAGE
	// set the row delay to increment it later
	let rowTracker = 0.15
	// create a tween timeline for each product
	$('.product').each(function (index) {
		// check if we are on a new row
		const colCount = $('#products_wrapper').css('grid-template-columns').split(' ').length;
		if ((index % colCount) == 0) {
			rowTracker = 0.15
		} else {
			rowTracker += 0.10
		};

		// create a new timeline
		let temp = new TimelineMax()
			// .from($(this), 0.5, { ease: Power2.easeOut, y: '20px' }, rowTracker)    <-- wont work with fixed elements attached
			.to($(this), 0.8, { autoAlpha: 1 }, rowTracker);

		// create a scrollmagic scene
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.9,
			reverse: false
		})
			.setTween(temp) // trigger a TweenMax.to tween
			.addTo(controller);
	});


	// $('.product').each(function (index) {
	// 	let temp = new TimelineMax({paused:true})
	// 	.to($(this).find('.product_detail_wrapper'), 0.5, { width:'40vw' })
	// 	.to($(this).find('.product_detail_wrapper >'), 0.5, { autoAlpha: 1, x: '10px' });

	// });

	// init flickity
	var elem = document.querySelector('.main-carousel');
	var flkty = new Flickity( elem, {
	  // options
	  cellAlign: 'center',
	  contain: true
	});

	// send mail
	$('#contact_form_submit').click(function () {
		sendmail();
	});

	// set slider to closed
	let played = false
	// if the slider is clicked on. open the slider
	$('.product').click(function () {
		played = playfunction(played, $(this))
	})
}

var playfunction = function (played, element) {
	// get the device width
	const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	// determine the size of the side panel
	let panelSize = (width > 1000) ? '40vw' : '100vw';
	if (played) {
		// close the slider
		let temp = new TimelineMax()
			.to(element.find('.product_detail_wrapper >'), 0.5, { autoAlpha: 0 })
			.to(element.find('.product_detail_wrapper'), 0.5, { width: '0' });
		return false;
	} else {
		// open the slider
		let temp = new TimelineMax()
			.to(element.find('.product_detail_wrapper'), 0.5, { width: panelSize })
			.to(element.find('.product_detail_wrapper >'), 0.5, { autoAlpha: 1 });
		return true;
	}
}

var sendmail = function () {
	let ps = document.getElementById("contact_product_selection");
	let body = "Hi Steven,\ni would like to enquire about the following product: " + ps.options[ps.selectedIndex].text; + "\n";
	body += '\n\nMessage:' + document.getElementById("contact_form_message").value;
	//     var email = document.getElementById("email").value;
	let location = "mailto:" + 'warburtonroland@gmail.com' + "?subject=Wild Dog Honey enquiry&body=" + encodeURIComponent(body);
	window.location.href = location;
}