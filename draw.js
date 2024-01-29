
let width = window.innerWidth*5/12;
let height = width/2; 
let canvas = document.querySelector('#canvas');

var container = document.getElementById('canvas');
var w = container.offsetWidth;
var h = container.offsetHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, w/ h, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();


//Add Renderer


// renderer = new THREE.CanvasRenderer();
// renderer.setSize(w, h);

// //Add Camera
// camera = new THREE.PerspectiveCamera( 75, w / h, 2, 1000 );
// camera.position.z = 400;

// //Create Scene with geometry, material-> mesh
// scene = new THREE.Scene();
// geometry = new THREE.IcosahedronGeometry( 200, 3 );
// material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth: 1 } );
// mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );