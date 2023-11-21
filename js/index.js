console.log("your index.js file is loading correctly")


$( "#downloadresume" ).on( "click", function() {
    alert( "Hello, My resume is still a work in progresss" );
  } );

  $( ".viewallprojects" ).on( "click", function() {
    alert( "Hello, All my projects are coming soon" );
  } );

  $( ".workdGridButton" ).on( "click", function() {
    alert( "Hello, my work is coming soon" );
  } );

  $( "#downloadresume" ).hover(
    function() {
      $( this ).addClass( "hoverbutton" );
    }, function() {
      $( this ).removeClass( "hoverbutton" );
    }
  );

$(".photo").hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );

  $(".flexContainerImage").hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );

  $(".workdGridButton").hover(
    function() {
      $( this ).addClass( "hoverworkdGridButton" );
    }, function() {
      $( this ).removeClass( "hoverworkdGridButton" );
    }
  );

  $(".viewallprojects").hover(
    function() {
      $( this ).addClass( "hoverviewallprojects" );
    }, function() {
      $( this ).removeClass( "hoverviewallprojects" );
    }
  );


  $(".workGridDivImage").hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );


  $(".headerli").hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );

  $(".footerli").hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );

  

  $(".img-logo").hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );



  $(".skills").on( "click", function() {
        $('html, body').animate({
            scrollTop: $(".mySkills").offset().top
        }, 500);
    } );

    $(".work").on( "click", function() {
        $('html, body').animate({
            scrollTop: $(".myWork").offset().top
        }, 500);
    } );

    $(".about").on( "click", function() {
        $('html, body').animate({
            scrollTop: $(".heroImg").offset().top
        }, 500);
    } );

    