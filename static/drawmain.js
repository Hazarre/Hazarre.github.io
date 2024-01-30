import * as THREE from 'three';


function vertexShader() {
	return `
	  varying vec3 vUv; 
  
	  void main() {
		vUv = position; 
  
		vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix * modelViewPosition; 
	  }
	`
}
function fragmentShader() {
	return `
	uniform vec3 colorA; 
	uniform vec3 colorB; 
	varying vec3 vUv;

	float x = 1.0; 
	float y = 1.0;
	float z = 0.7;

	void main() {

		float t = atan(vUv.y/vUv.x);
		float r = length(vUv);
		float wave = sin(r*10.0); 
        float ray  = cos(t*10.0);

		vec3 color = vec3(ray*wave) ;
		gl_FragColor = vec4( 1.0, 1.0, length(color)*.8, .3);
	}
`
}



window.addEventListener('load', init)
let scene
let camera
let renderer
let sceneObjects = []

function init() {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 10
  const canvas = document.getElementById('c');

  renderer = new THREE.WebGLRenderer({canvas:canvas, alpha: true})
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)
  adjustLighting()
//   addBasicCube()
  for (let x=0; x < 30; x+=3) 
  	for (let y=0; y < 30; y+=3) {
		addShaderCube(x-15,y-15)
   }
  animationLoop()
}

function adjustLighting() {
    let pointLight = new THREE.PointLight(0xdddddd)
    pointLight.position.set(-5, -3, 3)
    scene.add(pointLight)

    let ambientLight = new THREE.AmbientLight(0x505050)
    scene.add(ambientLight)
}


function animationLoop() {
  renderer.render(scene, camera)

  for(let object of sceneObjects) {
    object.rotation.x += 0.005*object.position.length()*(Math.random()-1)
    object.rotation.y += 0.001*object.position.length()*(Math.random()-1)
	let now = new Date()
    object.position.z = .5*Math.sin(object.position.length()/20 + now.getTime()/300)
  }

  requestAnimationFrame(animationLoop)
}

// function addBasicCube() {
// 	let geometry = new THREE.BoxGeometry(.5, .5, .5)
// 	let material = new THREE.MeshLambertMaterial()  
  
// 	let mesh = new THREE.Mesh(geometry, material)
// 	mesh.position.x = -1
// 	scene.add(mesh)
// 	sceneObjects.push(mesh)
// }


function addShaderCube(xpos, ypos) {
	let time = new THREE.Vector3(1);

	let uniforms = {
		  colorB: {type: 'vec3', value: new THREE.Color(0xffB6ff)},
		  colorA: {type: 'vec3', value: new THREE.Color(0xffffd5)},
		  time:   {type: 'vec3', value: time.random().normalize()},
	  }
  
	let geometry = new THREE.BoxGeometry(1, 1, 1)
	let material =  new THREE.ShaderMaterial({
	  uniforms: uniforms,
	  fragmentShader: fragmentShader(),
	  vertexShader: vertexShader(),
	})
	material.transparent = true
	material.opacity = .0
  
	let mesh = new THREE.Mesh(geometry, material)
	let today = new Date()
	mesh.position.x = xpos;
	mesh.position.y = ypos;
	scene.add(mesh)
	sceneObjects.push(mesh)
  }




