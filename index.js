import * as THREE from '../src/js/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer( { antialias: false } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 0.8, 0.9, 1.2 );
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add(mesh);
camera.position.z = 5;

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

};

animation(300);