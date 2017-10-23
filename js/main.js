


var parallaxElements = $('.item'),
    parallaxQuantity = parallaxElements.length;

$(window).on('scroll', function () {

  window.requestAnimationFrame(function () {

    for (var i = 0; i < parallaxQuantity; i++) {
      var currentElement = parallaxElements.eq(i);
      var scrolled = $(window).scrollTop();

      currentElement.css({
        'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'
      });
    }
  });

});

$(document).ready(function(){
  $('.items').slick({
    arrows: false,
    dots: true,

  });


  $(".site-nav ul li:last-child").click(function(){
    $(".info").addClass("show");
        event.preventDefault();

    });

    $(".close a").click(function(){
    $(".info").removeClass("show");
    });



    
$(window).bind("load resize scroll",function(e){

    if ($(window).width() > 768) {      


        if(jQuery(this).scrollTop() > 100)

            {



            $("a.switch").text("☺").addClass("face").fadeIn();


        }
          else {
    // scroll up
      $("a.switch").text("S").removeClass("face");


      }

    }

      });





});





/*

$(function(){
   var $container = $('.post-list');            
      $container.masonry({
         itemSelector: '.post-item',
         columnWidth: '.grid-sizer',
         percentPosition: true
      });

	// layout Masonry after each image loads
	$container.imagesLoaded().progress( function() {
 	 $container.masonry('layout');
	});
});

*/

/*
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("scrolled");
  }
  else{
    $('header').removeClass("scrolled");
  }
});

/*
var biggestHeight = "0";
$(".project-item").each(function(){
 if ($(this).height() > biggestHeight ) {
   biggestHeight = $(this).height()
 }
});

$(".projects-wrapper").height(biggestHeight);


      
      var camera, scene, renderer;
      var scene2, renderer2;
      var controls;
      init();
      render();


      function init() {
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 400, 400, 1200 );

        controls = new THREE.OrbitControls( camera );
        controls.target.set( 0, 0, 0 ); // view direction perpendicular to XY-plane
        controls.noRotate = true;
        controls.noZoom = true; // optional
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xffffff  );
        scene2 = new THREE.Scene();
        //var material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth: 1, side: THREE.DoubleSide } );
        //


        
        var container = document.getElementById( 'hp-wrapper' );
        document.body.appendChild( container );

        for ( var i = 1; i < 5; i ++ ) {
          var element = document.createElement( 'div' );
          element.className = "hp-item";
          var img = document.createElement('img');
          element.appendChild(img);
          if (i < 10) {
            img.src = '../images/home/hp_0' + i + ".jpg";
            } else {
            img.src = '../images/home/hp_0' + i + ".jpg";
            }


          //img.src = '../images/ss-december-2015.jpg';
        

          //element.style.width = '100px';
          //element.style.height = '100px';
          //element.style.opacity = ( i < 5 ) ? 0.5 : 1;
          //element.style.background = new THREE.Color( Math.random() * 0xffffff ).getStyle();


          
          var object = new THREE.CSS3DObject( element );
          //object.lookAt( 50, 95, 50 );
          object.position.x = Math.random() * 700 - 100;
          object.position.y = Math.random() * 500 - 100;
          //object.position.z = Math.random() * 200 - 100;
          //object.rotation.x = Math.random();
          //object.rotation.y = Math.random();
          //object.rotation.z = Math.random();
          //object.scale.x = Math.random() + 0.2;
          //object.scale.y = Math.random() + 0.2;
          scene2.add( object );
          //var geometry = new THREE.PlaneGeometry( 100, 100 );
          //var mesh = new THREE.Mesh( geometry, material );
          //mesh.position.copy( object.position );
          //mesh.rotation.copy( object.rotation );
          //mesh.scale.copy( object.scale );
          //scene.add( mesh );
        }
        //
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );
        renderer2 = new THREE.CSS3DRenderer();
        renderer2.setSize( window.innerWidth, window.innerHeight );
        renderer2.domElement.style.position = 'absolute';
        renderer2.domElement.style.top = 0;
        container.appendChild( renderer2.domElement );
      }


    
      function render() {
        requestAnimationFrame( render );
        controls.update();
        renderer.render( scene, camera );
        renderer2.render( scene2, camera );
      }


      /**
 * Function handles the resize event. This make sure the camera and the renderer
 * are updated at the correct moment.
 */

 /*
function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

*/

