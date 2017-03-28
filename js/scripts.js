$('.sections-trigger').click(function() {
	$('#sections-nav').toggleClass('navOpen');
	$('#wrapper').toggleClass('navOpen');
	$('#nav-inner').toggleClass('navOpen');
});


$('#search-btn').click(function() {
	$(this).toggleClass('closed').toggleClass('opened');
	$('#search-field').toggleClass('closed').toggleClass('opened');
});

$( ".section-menu > li").hover(
  function(e) {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
 );

$( ".section-menu li a").hover(
  function(e) {
    $( this ).addClass( "hover" );
    $( this ).parent('.section-menu > li').addClass( "unhover" );
  }, function() {
    $( this ).removeClass( "hover" );
    $( this ).parent('.section-menu > li').removeClass( "unhover" );
  }
 );

$( ".section-menu > li").click(function() {
	$(this).children(".drop-menu").toggleClass('opened');
	$(this).children("i").toggleClass('fa-plus fa-minus');
});

