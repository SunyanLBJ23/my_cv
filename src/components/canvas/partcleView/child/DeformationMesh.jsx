//扭曲物体
import React, { useEffect, useRef } from 'react'
import { Quaternion, Vector3 } from 'three';

function DeformationMesh() {
    const mesh = useRef();
  const quaternion = new Quaternion();

  useEffect(() => {
    //获取几何图形的当前属性
    const currentPositions = mesh.current.geometry.attributes.position;
    const originalPositions = currentPositions.clone();
    const originalPositionsArray = originalPositions?.array || [];

    //  遍历每个向量（3 个值系列）并修改值
    //顶点沿 Y 轴越高，我们旋转得越多
    for (let i = 0; i < originalPositionsArray.length; i += 3) {
      const modifiedPositionVector = new Vector3(
        originalPositionsArray[i],
        originalPositionsArray[i + 1],
        originalPositionsArray[i + 2]
      );
      const upVector = new Vector3(0, 1, 0);

      // 沿 y 轴旋转 （0， 1， 0）
      quaternion.setFromAxisAngle(
        upVector,
        (Math.PI / 180) * (modifiedPositionVector.y + 10) * 50
      );
      modifiedPositionVector.applyQuaternion(quaternion);

      currentPositions.array[i] = modifiedPositionVector.x;
      currentPositions.array[i + 1] = modifiedPositionVector.y;
      currentPositions.array[i + 2] = modifiedPositionVector.z;
    }

    currentPositions.needsUpdate = true;
  }, []);

  return (
    <group>
      <mesh ref={mesh}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
}

export default DeformationMesh