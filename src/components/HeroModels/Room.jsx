import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { MeshPhongMaterial, MeshStandardMaterial } from "three";

// Pre-create materials outside component to avoid recreation on every render
const materials_lib = {
  curtain: new MeshPhongMaterial({ color: "#d90429" }),
  table: new MeshPhongMaterial({ color: "#582f0e" }),
  radiator: new MeshPhongMaterial({ color: "#fff" }),
  comp: new MeshStandardMaterial({ color: "#fff" }),
  pillow: new MeshPhongMaterial({ color: "#8338ec" }),
  chair: new MeshPhongMaterial({ color: "#000" }),
  monitorScreen: new MeshStandardMaterial({
    color: "#f0f8ff",
    emissive: "#e6f2ff",
    emissiveIntensity: 1.2,
  })
};

export function Room({ isLowPerformance, ...props }) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");

  const bodyMaterial = useMemo(() => new MeshPhongMaterial({
    map: matcapTexture,
  }), [matcapTexture]);

  return (
    <group {...props} dispose={null}>
      {/* Only render EffectComposer if not in low performance mode */}
      {!isLowPerformance && (
        <EffectComposer disableNormalPass>
          <SelectiveBloom
            selection={screensRef}
            intensity={1.8}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.6}
            radius={0.3}
            blendFunction={BlendFunction.ADD}
          />
        </EffectComposer>
      )}

      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={materials_lib.curtain}
      />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={materials_lib.table} />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={materials_lib.chair}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={materials_lib.comp} />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials_lib.monitorScreen}
      />
      <mesh
        geometry={nodes.handls_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.miuse_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={materials_lib.pillow}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={materials_lib.radiator}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0001.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.stylus_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={materials_lib.table} />
      <mesh
        geometry={nodes.tablet_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vires_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={materials.phong1}
      />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");