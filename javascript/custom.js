$(document).ready(function (){
  
	"use strict";

/* 1. jCarousel
	-----------------------------------------------------*/  
	
	var $carousel = $('.project-carousel');
	
	$carousel.jcarousel({
		'animation': {
			'duration': 1000,
			'easing': 'easeInOutQuint'
		}
	});
	
	if( $(window).width() < 480 ) {
		$('.jcarousel-prev').jcarouselControl({target:'-=1'});
		$('.jcarousel-next').jcarouselControl({target:'+=1'});
	} else if( $(window).width() < 768 ) {
		$('.jcarousel-prev').jcarouselControl({target:'-=2'});
		$('.jcarousel-next').jcarouselControl({target:'+=2'});
	} else {
		$('.jcarousel-prev').jcarouselControl({target:'-=3'});
		$('.jcarousel-next').jcarouselControl({target:'+=3'});
	}
	
	$('.jcarousel-pagination').jcarouselPagination({       
    });

	$('.jcarousel-pagination a:first-child').addClass('active');
	
	$('.jcarousel-pagination')
    .on('active.jcarouselpagination', 'a', function() {
		$('.jcarousel-pagination a:first-child').removeClass('active');
        $(this).addClass('active');
    })
    .on('inactive.jcarouselpagination', 'a', function() {
        $(this).removeClass('active');
    });
  
	function swipeCarousel( e, dir ) {
		var $carousel = $(e.currentTarget);
        if( dir === 'left' ) {
			$carousel.siblings('.jcarousel-control').children('.jcarousel-next').trigger('click');
        }
        if( dir === 'right' ) {
	   		$carousel.siblings('.jcarousel-control').children('.jcarousel-prev').trigger('click');
        }
	}
	
	$carousel.swipe({
		swipeLeft       : swipeCarousel,
		swipeRight      : swipeCarousel,
		allowPageScroll : 'auto'
	});


/* 2. Flex Slider
	-----------------------------------------------------*/
	
/* --- Defalut -------------------------------------------------*/
		
  $('.flexslider').flexslider({  
	namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
	selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
	animation: "slide",              //String: Select your animation type, "fade" or "slide"
	easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
	direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
	reverse: false,                 //{NEW} Boolean: Reverse the animation direction
	animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
	smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode 
	startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
	slideshow: false,                //Boolean: Animate slider automatically
	slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
	initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
	randomize: false,               //Boolean: Randomize slide order
	 
	// Usability features
	pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
	pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
	useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
	touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
	video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
	 
	// Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
	directionNav: false,             //Boolean: Create navigation for previous/next navigation? (true/false)
	prevText: "",           //String: Set the text for the "previous" directionNav item
	nextText: "",               //String: Set the text for the "next" directionNav item
	 
	// Secondary Navigation
	keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
	multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
	mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
	pausePlay: false,               //Boolean: Create pause/play dynamic element
	pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
	playText: 'Play',               //String: Set the text for the "play" pausePlay item
	 
	// Special properties
	controlsContainer: "",          //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
	manualControls: "",             //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
	sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
	asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
	 
	// Carousel Options
	itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
	itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
	minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
	maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
	move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
									 
	// Callback API
	start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
	before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
	after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
	end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
	added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
	removed: function(){}   
  });

/* --- Main Metro Slider  -------------------------------------------------*/
	
  $('.main-flexslider').flexslider({
	namespace: "main-flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
	selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
	animation: "slide",              //String: Select your animation type, "fade" or "slide"
	easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
	direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
	reverse: false,                 //{NEW} Boolean: Reverse the animation direction
	animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
	smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode 
	startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
	slideshow: false,                //Boolean: Animate slider automatically
	slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
	initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
	randomize: false,               //Boolean: Randomize slide order
	 
	// Usability features
	pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
	pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
	useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
	touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
	video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
	 
	// Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
	directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
	prevText: "",           //String: Set the text for the "previous" directionNav item
	nextText: "",               //String: Set the text for the "next" directionNav item
	 
	// Secondary Navigation
	keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
	multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
	mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
	pausePlay: false,               //Boolean: Create pause/play dynamic element
	pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
	playText: 'Play',               //String: Set the text for the "play" pausePlay item
	 
	// Special properties
	controlsContainer: "",          //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
	manualControls: "",             //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
	sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
	asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
	 
	// Carousel Options
	itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
	itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
	minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
	maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
	move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
									 
	// Callback API
	start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
	before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
	after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
	end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
	added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
	removed: function(){}   
  });



/* 3. Twitter Widget
	-----------------------------------------------------*/

	$(".tweet").tweet({
		modpath: './php/',
		username:"Piotr Osmola",
		join_text: "auto",
		count: 2,
		auto_join_text_default: "We said,",
		auto_join_text_ed: "We",
		auto_join_text_ing: "We were",
		auto_join_text_reply: "We replied to",
		auto_join_text_url: "We were checking out",
		loading_text: "Loading tweets..."
	});


/* 4. Quicksand
	-----------------------------------------------------*/

  var $filterType = $('#filter-options li.active a').attr('class');
  var $holder = $('.filtered-list');
  var $data = $holder.clone();
  var $filteredData;
  $('#filter-options li a').click(function() {
    $('#filter-options li').removeClass('active');
    var $filterType = $(this).attr('class');
    $(this).parent().addClass('active');
    if ($filterType === 'all') {
      $filteredData = $data.find('li');
    }
    else {
      $filteredData = $data.find('li[data-type=' + $filterType + ']');
    }

    $holder.quicksand($filteredData, {
      duration: 500,
      easing: 'easeInOutQuad'
    });
	
	/* YOU NEED TO COPY HERE YOUR COLORBOX CONFIGURATION (5)*/
	
	$(".project-zoom").colorbox({
		rel:'projects',
		slideshow: true,
		previous:'<i class="icon-chevron-left"></i>',
		next:'<i class="icon-chevron-right"></i>',
		close:'<i class="icon-remove"></i>',
		slideshowStart:'',
		slideshowStop:'',
		fixed: true,
		current: false,
		title: true
	});

	/* YOU NEED TO COPY HERE YOUR COLORBOX CONFIGURATION (5)*/

    return false;
  });

/* 5. Colorbox
	-----------------------------------------------------*/
	
/* YOU NEED TO COPY THIS CODE TO QUICKSAND CONFIGURATION (4) */
	
	$(".project-zoom").colorbox({
		rel:'projects',
		slideshow: true,
		previous:'<i class="icon-chevron-left"></i>',
		next:'<i class="icon-chevron-right"></i>',
		close:'<i class="icon-remove"></i>',
		slideshowStart:'',
		slideshowStop:'',
		fixed: true,
		current: false,
		title: true
	});

	$(".product-zoom").colorbox({
		close:'<i class="icon-remove"></i>',
		fixed: true
	});

/* YOU NEED TO COPY THIS CODE TO QUICKSAND CONFIGURATION (4) */


/* 6. Tabs
	-----------------------------------------------------*/

  	$(".tabs").tabs();

/* 7. Accordion
	-----------------------------------------------------*/
	
  	$(".accordion").accordion({
  		collapsible: true, 
  		active: false 
  	});

/* 8. Videos
	-----------------------------------------------------*/
	
	$("#content").fitVids();

/* 9. Responsive Nav
	-----------------------------------------------------*/
  
	var navigation = responsiveNav("#nav",{ // Selector: The ID of the wrapper
		animate: true, // Boolean: Use CSS3 transitions, true or false
    	transition: 400, // Integer: Speed of the transition, in milliseconds
		label: "", // String: Label for the navigation toggle
		insert: "after", // String: Insert the toggle before or after the navigation
		customToggle: "", // Selector: Specify the ID of a custom toggle
		openPos: "static", // String: Position of the opened nav, relative or static
		jsClass: "js", // String: 'JS enabled' class which is added to <html> el
		init: function(){}, // Function: Init callback
		open: function(){}, // Function: Open callback
		close: function(){} // Function: Close callback
	});


/* 10. Forms
	-----------------------------------------------------*/
	
	/* --- Contact Form  -------------------------------------------------*/
	
	var $contactform  = $('#contact-form');

    // Validate form on keyup and submit
    $contactform.validate({
        rules: {
            name: {
                required    : true,
                minlength   : 1
            },
            email: {
                required    : true,
                email       : true
            },
            message: {
                required    : true,
                minlength   : 1
            }
        },
        messages: {
            name: {
                required    : "Please enter your name.",
                minlength   : jQuery.format("Your name needs to be at least {0} characters")
            },
            email: {
                required    : "Please enter your email address.",
                minlength   : "You entered an invalid email address."
            },
            message: {
                required    : "Please enter a message.",
                minlength   : jQuery.format("Enter at least {0} characters")
            }
        },
    });

    // Send the email
    $contactform.submit(function(){
        var $success      = '<strong>Success!</strong> Your message was sent.';
	    var $error      = '<strong>Error!</strong> Your message was not sent - try again later...';
      	var response;
        if ($contactform.valid()){
            $.ajax({
                type: "POST",
                url: "php/contact-form.php",
                data: $(this).serialize(),
                success: function(msg) {
                    if (msg === 'SEND') {
                        response = '<div class="alert alert-success">'+ $success +'</div>';
                    }
                    else {
                        response = '<div class="alert alert-error">'+ $error +'</div>';
                    }
                    $(".alert-error,.alert-success").remove();
                    $contactform.prepend(response);
                }
             });
            return false;
        }
        return false;
    });
  
	
	/* --- Comment Form  -------------------------------------------------*/

	var $commentform  = $('#comment-form');
        
    // Validate form on keyup and submit
    $commentform.validate({
        rules: {
            name: {
                required    : true,
                minlength   : 1
            },
            email: {
                required    : true,
                email       : true
            },
            message: {
                required    : true,
                minlength   : 1
            }
        },
        messages: {
            name: {
                required    : "Please enter your name.",
                minlength   : jQuery.format("Your name needs to be at least {0} characters")
            },
            email: {
                required    : "Please enter your email address.",
                minlength   : "You entered an invalid email address."
            },
            message: {
                required    : "Please enter a message.",
                minlength   : jQuery.format("Enter at least {0} characters")
            }
        },
    });
	
/* 11. Suggest Box
	-----------------------------------------------------*/	
  
	function callback(item) {
		window.location = item.url;  /*# Activate link #*/
	}
	jQuery(function() {
		jQuery('input#suggestBox2').jsonSuggest({
       		data: testData.webSites, 
        	onSelect: callback
        });
	});
	
	
/* Project Item touch hover
	-----------------------------------------------------*/	
	
	$('.project-item').bind('click', function(e) {
        e.preventDefault();
        $(this).children('.project-mask').css('opacity','1');
    });

	
});
