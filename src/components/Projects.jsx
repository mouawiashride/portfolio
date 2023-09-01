import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Pizza App",
    url: "https://mouawiashride.github.io/pizza_app/",
    image: "projects/pizzaApp.png",
    description: "The Pizza App ingeniously employs React and Framer Motion for captivating animations, providing users with an immersive interface."
  },
  {
    title: "Shop4u",
    url: "https://mouawiashride.github.io/shop4_flux",
    image: "projects/shop4u.png",
    description: "It is a robust online shopping platform. It seamlessly integrates payment processing and real-time data, all powered by Flux state management.",
  },
  {
    title: "Shop4u",
    url: "https://mouawiashride.github.io/shop4/",
    image: "projects/shop4u.png",
    description: "It is an innovative online shopping platform developed using React.",
  },
  {
    title: "dashboard Admin",
    url: "https://mouawiashride.github.io/dashboardreact/",
    image: "projects/dashboard Admin.png",
    description: "utilizes React and Material-UI to create a sleek interface. With nested routes and captivating charts, it streamlines navigation and offers insightful data visualization.",
  },
  {
    title: "My Way",
    url: "https://myway.edu.sy/",
    image: "projects/myway.png",
    description: "It is a visionary project aimed at providing individuals with a dynamic online learning platform.",
  },
  {
    title: "B-Hart",
    url: "https://mooawia12.wixsite.com/b-hart",
    image: "projects/bhart.png",
    description: "Platform for course based on user experience. Under Development",
  },
  {
    title: "Ecommerce(RN)",
    url: "https://mega.nz/file/cV92wAjT#Nx26Psj2I6Oda9vmzOQ3Q6tHuvV5TTgpCFYEvVguQ6w",
    image: "projects/reactnativeecommerce.jpg",
    description: "It is an impressive Expo project that amalgamates various technologies. Leveraging React Native with TypeScript, it incorporates features like Context, useQuery, and React Hook Form.",
  },

];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
