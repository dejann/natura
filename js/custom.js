// nice scroll

	$(document).ready(function() {
		$("html").niceScroll();
	});



// navigation
	
	$(document).ready(function(){
		selectnav('nav', {
				label: 'MENU',
			});
	});


// flex slider

	$(window).load(function() {
		$('#slider').flexslider({
			animation: 'fade',
			directionNav: false
		});
		$('#tweet').flexslider({
			animation: 'fade',
			directionNav: false,
			controlNav: false
		});
	});


// colorbox

	$(document).ready(function(){
		$(".group1").colorbox({maxWidth:"95%", maxHeight:"95%", rel:'group1'});
		$(".video").colorbox({iframe:true, innerWidth:640, innerHeight:480, maxWidth:"95%", maxHeight:"95%"});
		$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});		
	});

	var resizeTimer;
		$(window).resize(function(){
			if (resizeTimer) clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
			if ($('#cboxOverlay').is(':visible')) {
				$.colorbox.load(true);
				}
			}, 300)
		});


// parallax

	$(document).ready(function(){
		if ($(window).width() > 1024) {
			$('#video').parallax("50%", 0.4);
			$('#clients').parallax("50%", 0.4);
			$('#quote').parallax("50%", 0.4);
		}
	})

// quick sand

$(document).ready(function() {
	var $filterType = $('#filter li.active a').attr('class');
	var $holder = $('ul.ourHolder');
	var $data = $holder.clone();

	$('#filter li a').click(function(e) {
		$('#filter li').removeClass('active');
		var $filterType = $(this).attr('class');
		$(this).parent().addClass('active');
		
		if ($filterType == 'all') {
			var $filteredData = $data.find('li');
		} 
		else {
			var $filteredData = $data.find('li[data-type=' + $filterType + ']');
		}
		
		$holder.quicksand($filteredData, {
			duration: 800,
			easing: 'easeInOutQuad'
		}, function (){$(".group1").colorbox({maxWidth:"95%", maxHeight:"95%", rel:'group1'});
					$(".video").colorbox({iframe:true, innerWidth:640, innerHeight:480, maxWidth:"95%", maxHeight:"95%"});
					$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
		});
		return false;
	});
});


// quote rotator

	$(document).ready(function() {
		$('ul#quotes').quote_rotator({
			rotation_speed: 6000
		});
	});	

// sequence 

	$(document).ready(function(){
    var options = {
        autoPlay: true,
        autoPlayDelay: 4000,
        nextButton: true,
        prevButton: true,
        navigationSkip: false,
        pauseOnHover: false,
        pagination: true,
        preloader: false,
        animateStartingFrameIn: false,
        preloadTheseFrames: [1]
    };
    var sequence = $("#sequence").sequence(options).data("sequence");

    
});

// scroll

	$(document).ready(function() {
		$('#nav').onePageNav({
			easing: 'easeInOutCirc',
			scrollSpeed: 1800,
			filter: ':not(.other)'
		});
		
	});


// contact

	$(document).ready(function(){
		$("#ContactForm").submit(function(){
		$("#submitf").value='Please wait...';
		
		$.post("send.php?send=comments", $("#ContactForm").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$("#message_post").html("<div class='errorMessage'>ERROR: " + data.msg + "</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$("#message_post").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$("#submitf").value='Send >>';
				}
		}, "json");
		
		return false;
		
		});
	});


// twitter

	$(document).ready(function(){
		$(".tweet").tweet({
			modpath: 'js/twitter/',
			join_text: false,
			username: "dekystudio",
			count: 3,
			auto_join_text_default: " we said, ",
			auto_join_text_ed: " we ",
			auto_join_text_ing: " we were ",
			auto_join_text_reply: "",
			auto_join_text_url: " we were checking out ",
			loading_text: "loading tweets..."
		});
	});
