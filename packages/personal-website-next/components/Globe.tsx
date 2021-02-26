/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import ThreeGlobe from "three-globe";
import * as THREE from "three";
import TrackballControls from 'three-trackballcontrols';

/**
 * Interface for Globe props
 */
export interface GlobeProps {
  children?: any;
}

/**
 *  A Globe component.
 */
const Globe: React.FC<GlobeProps> = (props) => {
  React.useEffect(() => {
    // Gen random data
    const N = 300;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: Math.random() / 3,
      color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    }));

    const Globe = new ThreeGlobe()
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      .pointsData(gData)
      .pointAltitude("size")
      .pointColor("color");

    setTimeout(() => {
      gData.forEach((d) => (d.size = Math.random()));
      Globe.pointsData(gData);
    }, 4000);

    // Setup renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("globeViz").appendChild(renderer.domElement);

    // Setup scene
    const scene = new THREE.Scene();
    scene.add(Globe);
    scene.add(new THREE.AmbientLight(0xbbbbbb));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

    // Setup camera
    const camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.z = 500;

    // Add camera controls
    const tbControls = new TrackballControls(camera, renderer.domElement);
    tbControls.minDistance = 101;
    tbControls.rotateSpeed = 5;
    tbControls.zoomSpeed = 0.8;

    // Kick-off renderer
    (function animate() {
      // IIFE
      // Frame cycle
      tbControls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    })();
  });

  return <div id="globeViz" css={css``}></div>;
};

export default Globe;
