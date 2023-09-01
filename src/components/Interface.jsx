import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaRegEnvelope,
  FaGitlab,
} from "react-icons/fa";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Mouawia Sharedi</span>
      </h1>
      <motion.p
        className="text-lg text-white mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I make Websites With Best Practicies
        <br />
        Make Your Site Better
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
      <motion.div initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }} className="flex flex-col  justify-start max-w-xs   bg-white shadow-2xl rounded-xl p-2">
        <div className="text-center mt-1">
        
          <p className="text-xs sm:text-base text-indigo-800 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Full-Stack Developer
          </p>
          <div className="flex align-center justify-center mt-1">
            <motion.a
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
              target="blank"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/mouawiashride"
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </motion.a>
            <motion.a
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
              target="blank"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://gitlab.com/moawia"
            >
              <FaGitlab />
              <span className="sr-only">Gitlab</span>
            </motion.a>
            
            <motion.a 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
              target="blank"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-600 hover:bg-gray-900 rounded-full hover:text-white transition-colors duration-300"
              href="https://wa.me/971547499405"
            >
              <FaWhatsapp />
              <span className="sr-only">YouTube</span>
            </motion.a>
            <motion.a
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
              target="blank"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.facebook.com/muawia.tech/"
            >
              <FaFacebook />
              <span className="sr-only">Twitter</span>
            </motion.a>
            <motion.a
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
              target="blank"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
              href="mailto:mooawia12@windowslive.com"
            >
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </motion.a>
            <motion.a
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
              target="blank"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500  hover:bg-blue-900 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.linkedin.com/in/mouawia-sharedi/"
            >
              <FaLinkedin />
              <span className="sr-only">Linkedin</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 70,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
];
const languages = [
  {
    title: "AR",
    level: 100,
  },
  {
    title: "EN",
    level: 80,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold text-white">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10 text-white">Languages</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [statue, setStatue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        {
          from_name: name,
          Email: email,
          message: text,
        },
        import.meta.env.VITE_REACT_APP_PRIVATE_KEY
      )
      .then(
        (response) => {
          setStatue("success");
          setName("");
          setEmail("");
          setText("");
          setTimeout(setStatue(""), 2000);
        },
        (error) => {
          setStatue("error! please try again later");
        }
      );
  };
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
          >
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
