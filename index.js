const world = new WHS.World({
  autoresize: true,

  background: {
    color: 0xffffff
  },

  gravity: { // Physic gravity.
    x: 0,
    y: -100,
    z: 0
  },

  camera: {
    z: 50
  }
});

const sphere = new WHS.Sphere({ // Create sphere object.
  geometry: {
    radius: 3
  },

  mass: 10,

  material: {
    color: 0x00ff00,
    kind: 'basic'
  }
});

sphere.addTo(world);
sphere.getNative(); // Returns THREE.Mesh of this object.



const text = new WHS.Text({
  geometry: {
    text: 'hello world',
    parameters: {
      font: 'ironBrine.js',
      size: 20,
      height: 5,
      curveSegments: 6
    }
  },

  mass: 10,

  material: {
    color: 0x00ff00,
    kind: "lambert"
  },

  pos: {
    x: -40,
    y: 20,
    z: 0
  }
});

text.addTo(world);

world.start(); // Start animations and physics simulation.

