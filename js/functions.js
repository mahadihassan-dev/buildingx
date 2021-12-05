 







jQuery(function($) {'use strict';
	 		
  
   //LOADER
  $(window).load(function(){
	  $('.loader').fadeOut(800);
  }); 
	
	
	$(window).on("scroll", function(){
		if ($(this).scrollTop() > 250) {
			 $('.scrollToTop').fadeIn(300);
		} else {
			 $('.scrollToTop').fadeOut(300);
		}
  });
	
	//Click event to scroll to top
	$('.scrollToTop').on('click', function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
  
  
  
  
   // Windown on scroll to show social icons
    var logo = $(".wrap-sticky a.navbar-brand");
    var menu = $(".wrap-sticky .attr-nav");
    $(".wrap-sticky a.navbar-brand").hide();
	$('.wrap-sticky .attr-nav').hide();
	 $(window).scroll(function(){
		if($(window).scrollTop() >= 100 ){
		  logo.show();
		  menu.show();
		} 
		else {
		 logo.hide();
		  menu.hide();
	  }
   });
	$(window).on("scroll", function(){  
		 var width = $(window).width();
		  if(width < 993){
				$('.wrap-sticky a.navbar-brand').css('opacity',1) && $('.wrap-sticky .attr-nav').css('display','none');
		  }
	 });
  
  
  //contact form
  
   $("#btn_submit").click(function() {
	   
	
        //get input field values
        var user_name       = $('input[name=name]').val(); 
        var user_email      = $('input[name=email]').val();
		var user_website      = $('input[name=website]').val();
        var user_message    = $('textarea[name=message]').val();
        var post_data, output;
        //simple validation at client's end
        var proceed = true;
        if(user_name==""){ 
            proceed = false;
        }
        if(user_email==""){ 
            proceed = false;
        }
		if(user_message=="") {  
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed) 
        {
			//alert(proceed);
            //data to be sent to server
            post_data = {'userName':user_name, 'userEmail':user_email, 'userWebsite':user_website, 'userMessage':user_message};
            
            //Ajax post data to server
            $.post('contact_me.php', post_data, function(response){  

                //load json data from server and output message     
				if(response.type == 'error')
				{
					output = '<div class="alert-danger" style="padding:10px; margin-bottom:10px;">'+response.text+'</div>';
				}else{
				    output = '<div class="alert-success" style="padding:10px; margin-bottom:10px;">'+response.text+'</div>';
					
					//reset values in all input fields
					$('.form-inline input').val(''); 
					$('.form-inline textarea').val(''); 
					$('#btn_submit').val('Submit'); 
				}
				
				$("#result").hide().html(output).slideDown();
            }, 'json');
			
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $(".form-inline input, .form-inline textarea").keyup(function() { 
        $("#result").slideUp();
    });
    
  
  
  
  

	  //POP Up  
  $(".fancybox").fancybox({
	   openEffect	: 'fade',
		openSpeed  : 650,
    	closeEffect	: 'fade',
  });
  
   
  
	  //Fun Facts
     $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 1e3,
                refreshInterval: 50
            })
        })
    }); 
	 
	 
	 
	  //Filter Mix works
	 $(".gallery").mixItUp();
  
  
	 

	    // ============= Owl Carousel ===========
	 //Slider whtat we do, Directors, News
	$("#do-slider , #news-slider , #director-slider").owlCarousel({
      autoPlay:3000,
      items :3,
		pagination : false,
		stopOnHover : true,
		navigationText :["<i class='icon-chevron-thin-left'></i>","<i class=' icon-chevron-thin-right'></i>"],
		navigation : true,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2]
 
   });
	
	 //Fading Testinomial content
    $("#review-slider").owlCarousel({
      autoPlay: 3000,
      navigation : false,
      slideSpeed : 300,
      singleItem:true,
		transitionStyle : "fade"
  });
	
	// image one slide (services)
	  $(".service-slider").owlCarousel({
		  navigation : true,
		  navigationText :["<i class='icon-chevron-thin-left'></i>","<i class=' icon-chevron-thin-right'></i>"],
		  pagination : false,
		  slideSpeed : 300,
		  singleItem:true
 
  }); 
	 
	 

	    // ============= Revolution Slider =============
	  var revapi;
		revapi = jQuery("#rev_slider").revolution({
			sliderType:"standard",
			sliderLayout:"fullwidth",
			scrollbarDrag:"true",
			delay:5000,
			navigation: {
				arrows:{enable:true}				
			},
			touch:{
			 touchenabled:"on",
						  swipe_threshold: 75,
						  swipe_min_touches: 1,
						  swipe_direction: "horizontal",
						  drag_block_vertical: false
		 },			
			gridwidth:1170,
			gridheight:675		
		});	
  		
  
  

	    // ============= Parallax=============
	  $('#features').parallax("50%", 0.3);
	  $('#parallax').parallax("50%", 0.3);
	  $('#counter').parallax("50%", 0.5);
	  
	   
	
  
         // ============= Accordions =============
 
		$(".items > li > a").on('click', function(e) {
		  e.preventDefault();
		  var $this = $(this);
		  if ($this.hasClass("expanded")) {
			 $this.removeClass("expanded");
		  } 
		  else {
		  $(".items a.expanded").removeClass("expanded");
		  $this.addClass("expanded");
		  $(".sub-items").filter(":visible").slideUp("normal");
		}
		  $this.parent().children("ul").stop(true, true).slideToggle("normal");
		});
  
  

	  // ============= tabbed content =============
    $(".tab_content").hide();
    $(".tab_content:first").show();
  /* if in tab mode */
    $("ul.tabs li").on('click', function() {
		  $(".tab_content").hide();
		  var activeTab = $(this).attr("rel"); 
		  $("#"+activeTab).fadeIn();		
		  
		  $("ul.tabs li").removeClass("active");
		  $(this).addClass("active");

		  $(".tab_drawer_heading").removeClass("d_active");
		  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode on Mobile Version*/
	$(".tab_drawer_heading").on('click', function() {
       $(".tab_content").hide();
       var d_activeTab = $(this).attr("rel"); 
       $("#"+d_activeTab).fadeIn(1200);
	  
	    $(".tab_drawer_heading").removeClass("d_active");
       $(this).addClass("d_active");
	  
	    $("ul.tabs li").removeClass("active");
	    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	 
	 
	 // Scroll
  $('a.scroll').on('click', function(event) {
        var $link = $(this);
        $('html, body').stop().animate({
            scrollTop: $($link.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
  
  
 // Animations
  jQuery('.animate').appear();
			jQuery(document.body).on('appear', '.animate', function(e, $affected) {
				var fadeDelayAttr;
				var fadeDelay;
				jQuery(this).each(function(){
					if (jQuery(this).data("delay")) {
						fadeDelayAttr = jQuery(this).data("delay")
						fadeDelay = fadeDelayAttr;				
					} else {
						fadeDelay = 0;
					}			
					jQuery(this).delay(fadeDelay).queue(function(){
						jQuery(this).addClass('animated').clearQueue();
					});			
				})			
			});

  
   
  
   // init cubeportfolio (Testinomial Page)
    $('#js-grid-masonry').cubeportfolio({
        layoutMode: 'grid',
        gapHorizontal: 50,
        gapVertical: 20,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
       
    });
  
 

  
  
  
}); 

