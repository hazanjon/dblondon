var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

controls = new THREE.OrbitControls( camera );
controls.damping = 0.2;
controls.addEventListener( 'change', render );

var y_rotatespeed = 0;
var x_rotatespeed = 0;

myMyo.on('orientation', function(data){
    if(!data) return;

	y_rotatespeed = 0;
    if(Math.abs(data.z) > 0.2)
    	y_rotatespeed = data.z;

	x_rotatespeed = 0;
    if(Math.abs(data.y) > 0.2)
    	x_rotatespeed = data.y;
    //console.log((Math.round(data.x*100)/100) + " " + (Math.round(data.y*100)/100) + " " + (Math.round(data.z*100)/100));
});

function render() {
	requestAnimationFrame( render );
	// cube.rotation.y += (y_rotatespeed / 10);
	// cube.rotation.x -= (x_rotatespeed / 10);
	renderer.render( scene, camera );
}
render();