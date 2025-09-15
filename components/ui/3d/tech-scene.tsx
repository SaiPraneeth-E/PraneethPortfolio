"use client"

import React, { useRef, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Stars, Sphere, Box, Torus, Cylinder } from "@react-three/drei"
import * as THREE from "three"

// Advanced 3D Network Topology
const NetworkTopology = () => {
  const groupRef = useRef()
  const nodesRef = useRef([])
  const connectionsRef = useRef([])

  // Create network nodes in 3D space
  const nodes = React.useMemo(() => {
    const positions = []
    // Core nodes (center)
    positions.push([0, 0, 0])

    // Ring 1 - Inner network
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      positions.push([Math.cos(angle) * 2, Math.sin(angle) * 2, 0])
    }

    // Ring 2 - Outer network
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      positions.push([Math.cos(angle) * 4, Math.sin(angle) * 4, Math.sin(angle) * 2])
    }

    return positions
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }

    // Animate nodes
    nodesRef.current.forEach((node, index) => {
      if (node) {
        const pulse = Math.sin(state.clock.elapsedTime * 2 + index * 0.5) * 0.3 + 1
        node.scale.setScalar(pulse)

        // Color cycling
        const hue = (state.clock.elapsedTime * 50 + index * 30) % 360
        node.material.color.setHSL(hue / 360, 0.8, 0.6)
        node.material.emissiveIntensity = pulse * 0.5
      }
    })

    // Animate connections
    connectionsRef.current.forEach((connection, index) => {
      if (connection) {
        const opacity = Math.sin(state.clock.elapsedTime * 3 + index * 0.3) * 0.3 + 0.5
        connection.material.opacity = opacity
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Network Nodes */}
      {nodes.map((position, index) => (
        <Sphere
          key={`node-${index}`}
          ref={(el) => (nodesRef.current[index] = el)}
          position={position}
          args={[index === 0 ? 0.3 : 0.15]}
        >
          <meshStandardMaterial
            color={index === 0 ? "#00d4ff" : "#0099cc"}
            emissive={index === 0 ? "#00d4ff" : "#0099cc"}
            emissiveIntensity={0.3}
          />
        </Sphere>
      ))}

      {/* Network Connections */}
      {nodes.slice(1, 7).map((endPos, i) => {
        const start = new THREE.Vector3(...nodes[0])
        const end = new THREE.Vector3(...endPos)
        const direction = end.clone().sub(start)
        const length = direction.length()

        return (
          <Cylinder
            key={`connection-${i}`}
            ref={(el) => (connectionsRef.current[i] = el)}
            position={[(start.x + end.x) / 2, (start.y + end.y) / 2, (start.z + end.z) / 2]}
            rotation={[0, 0, Math.atan2(direction.y, direction.x)]}
            args={[0.02, 0.02, length]}
          >
            <meshStandardMaterial color="#00d4ff" transparent opacity={0.6} />
          </Cylinder>
        )
      })}

      {/* Data packets */}
      <DataPackets nodes={nodes} />
    </group>
  )
}

// Animated Data Packets
const DataPackets = ({ nodes }) => {
  const packetsRef = useRef([])

  useFrame((state) => {
    packetsRef.current.forEach((packet, index) => {
      if (packet) {
        const t = (state.clock.elapsedTime * 2 + index) % 4
        const progress = t % 1

        const startNode = nodes[Math.floor(t) % nodes.length]
        const endNode = nodes[(Math.floor(t) + 1) % nodes.length]

        packet.position.lerpVectors(new THREE.Vector3(...startNode), new THREE.Vector3(...endNode), progress)
      }
    })
  })

  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <Box key={`packet-${index}`} ref={(el) => (packetsRef.current[index] = el)} args={[0.05, 0.05, 0.05]}>
          <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} />
        </Box>
      ))}
    </>
  )
}

// Holographic Brain Network
const HoloBrain = () => {
  const brainRef = useRef()
  const synapseRef = useRef([])

  useFrame((state) => {
    if (brainRef.current) {
      brainRef.current.rotation.y = state.clock.elapsedTime * 0.3
      brainRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
    }

    synapseRef.current.forEach((synapse, index) => {
      if (synapse) {
        const intensity = Math.sin(state.clock.elapsedTime * 4 + index * 0.8) * 0.5 + 0.5
        synapse.material.emissiveIntensity = intensity
      }
    })
  })

  return (
    <group ref={brainRef}>
      {/* Main brain structure */}
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#001a33"
          wireframe
          emissive="#00d4ff"
          emissiveIntensity={0.2}
          transparent
          opacity={0.7}
        />
      </Sphere>

      {/* Neural pathways */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle1 = (i / 20) * Math.PI * 2
        const angle2 = ((i + 1) / 20) * Math.PI * 2

        return (
          <Torus
            key={`synapse-${i}`}
            ref={(el) => (synapseRef.current[i] = el)}
            position={[Math.cos(angle1) * 0.8, Math.sin(angle1) * 0.8, Math.sin(angle2) * 0.5]}
            rotation={[angle1, angle2, 0]}
            args={[0.3, 0.02, 8, 16]}
          >
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </Torus>
        )
      })}

      {/* Floating data nodes */}
      {Array.from({ length: 15 }).map((_, i) => {
        const radius = 2 + Math.random()
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI

        return (
          <Sphere
            key={`data-node-${i}`}
            position={[
              radius * Math.sin(phi) * Math.cos(theta),
              radius * Math.sin(phi) * Math.sin(theta),
              radius * Math.cos(phi),
            ]}
            args={[0.05]}
          >
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.8} />
          </Sphere>
        )
      })}
    </group>
  )
}

// Server Rack 3D Model
const ServerRack = () => {
  const rackRef = useRef()
  const lightsRef = useRef([])

  useFrame((state) => {
    if (rackRef.current) {
      rackRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }

    lightsRef.current.forEach((light, index) => {
      if (light) {
        const blink = Math.sin(state.clock.elapsedTime * 5 + index * 2) > 0.5 ? 1 : 0.3
        light.material.emissiveIntensity = blink
      }
    })
  })

  return (
    <group ref={rackRef}>
      {/* Server units */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Box key={`server-${i}`} position={[0, i * 0.3 - 1.2, 0]} args={[2, 0.25, 1]}>
          <meshStandardMaterial color="#1a1a2e" />
        </Box>
      ))}

      {/* Status lights */}
      {Array.from({ length: 16 }).map((_, i) => (
        <Sphere
          key={`light-${i}`}
          ref={(el) => (lightsRef.current[i] = el)}
          position={[-0.8 + (i % 4) * 0.4, Math.floor(i / 4) * 0.3 - 1.2, 0.51]}
          args={[0.03]}
        >
          <meshStandardMaterial
            color={i % 3 === 0 ? "#00ff00" : i % 3 === 1 ? "#00d4ff" : "#ff4400"}
            emissive={i % 3 === 0 ? "#00ff00" : i % 3 === 1 ? "#00d4ff" : "#ff4400"}
            emissiveIntensity={0.8}
          />
        </Sphere>
      ))}
    </group>
  )
}

// Main 3D Scene Controller
export const TechScene3D = ({ activeModel }) => {
  const models = [
    { component: NetworkTopology, name: "Network" },
    { component: HoloBrain, name: "AI Brain" },
    { component: ServerRack, name: "Servers" },
  ]

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#00d4ff" />
        <pointLight position={[-5, 3, 2]} intensity={0.6} color="#00d4ff" />
        <pointLight position={[5, -3, -2]} intensity={0.4} color="#0099cc" />
        <spotLight position={[0, 10, 0]} intensity={1} color="#00d4ff" angle={0.3} />

        <Environment preset="night" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />

        <AnimatePresence mode="wait">
          <motion.group
            key={activeModel}
            initial={{ scale: 0, rotateY: Math.PI, opacity: 0 }}
            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
            exit={{ scale: 0, rotateY: -Math.PI, opacity: 0 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {React.createElement(models[activeModel].component)}
          </motion.group>
        </AnimatePresence>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxDistance={15}
          minDistance={3}
        />
      </Suspense>
    </Canvas>
  )
}
