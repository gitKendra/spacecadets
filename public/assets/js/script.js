// import { on } from "cluster";




$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 8000,
            easing: 'swing',
            step: function () {
                $this.text(parseFloat(this.countNum).toFixed(1));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
});
$('.counter2').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 8000,
            easing: 'swing',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
});

// Earth

let scene, camera, renderer, cube;
    var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;
	var aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

    function init( ) {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 50,  aspect, 1, 10000);
        
       
     
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize( 1200, 500 );
        document.body.appendChild( renderer.domElement );
   
           //create the shape
           var geometry = new THREE.SphereBufferGeometry( 1, 32, 32 );
       

        const texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_4096.jpg');
        const material = new THREE.MeshBasicMaterial( { map: texture } );
        cube = new THREE.Mesh( geometry, material );
        
           
        camera.position.z = 5;

    var starGeo = new THREE.SphereGeometry(50, 32, 32),
    starMat = new THREE.MeshBasicMaterial();
    starMat.map = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/star-field.png');
    starMat.side = THREE.BackSide;
                
    var starMesh = new THREE.Mesh(starGeo, starMat);
                
    scene.add(starMesh, cube);
    }

    
        var update = function( ) {

        }; 

        //draw scene
        const render = function( ) {
            renderer.render( scene, camera );
        };



        var animate = function( ) {
            requestAnimationFrame( animate );
            
            cube.rotation.x += 0.001;
            cube.rotation.y += 0.001;
            

            update( );
            render( );
        };

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        window.addEventListener( 'resize', onWindowResize, false );
        window.addEventListener( 'resize', onWindowResize, false );

        init();
        animate();