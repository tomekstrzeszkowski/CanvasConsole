var stageWidth=320;
var stageHeight=440;

var contr=new strz_console.CanvasController({
    width:stageWidth,
    height:stageHeight,
    visualizations:{
        'V':[WelcomeVis,3],
        'B ORD':[BinaryTextVis,Infinity],
        'A':[MathVis, Infinity],
        '3':[ThreeDVis, Infinity]
    },
    visualizationOrder:{
        play:'loop',
        start:'V'
    }
});
contr.run();

var stage=contr.stage;
var layer=contr.layer;


/*
 * log order every sec
 */


/* !!!!!!!!!!!!!!!!!!!!!!!three test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
    var layer3d=new Kinetic.Layer();
    stage.add(layer3d);
    layer3d.moveToBottom();
      // revolutions per second
      var angularSpeed = 0.1; 
      var lastTime = 0;
 
      // this function is executed on each animation frame
      function animate(){
        // update
        var time = (new Date()).getTime();
        var timeDiff = time - lastTime;
        var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
        plane.rotation.z += angleChange;
        lastTime = time;
 
        // render
        
        renderer.render(scene, camera);
        
        // request new frame
        requestAnimationFrame(function(){
            animate();
        });
      }

      // renderer
     // var renderer = new THREE.WebGLRenderer();
      var renderer=new THREE.CanvasRenderer({canvas:layer3d.getCanvas().getElement()});
      renderer.setSize(stage.getWidth(), stage.getHeight());
    //  document.body.appendChild(renderer.domElement);

      // camera
      var camera = new THREE.PerspectiveCamera(45, stage.getWidth() / stage.getHeight(), 1, 1000);
      camera.position.y = -450;
      camera.position.z = 400;
      camera.rotation.x = 45 * (Math.PI / 180);
 
      // scene
      var scene = new THREE.Scene();
 
      // plane
      var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 400), new THREE.MeshNormalMaterial());
      plane.overdraw = true;
      scene.add(plane);
 
 // add subtle ambient lighting
      var ambientLight = new THREE.AmbientLight(0x222222);
      scene.add(ambientLight);
      
      // directional lighting
      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);
      // start animation
      animate();
      
     
