// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Define your skills categories with their icons and background colors
// const skillCategories = {
//   Languages: [
//     { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
//     { name: "TypeScript", link: "https://www.typescriptlang.org/docs/"},
//     { name: "Python", link: "https://docs.python.org/3/"},
//     { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML"},
//     { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
//     { name: "C++", link: "https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170"},
//   ],
//   "Libraries and Frameworks": [
//     { name: "React", link: "https://reactjs.org/docs/getting-started.html"},
//     { name: "Node.js", link: "https://nodejs.org/en/docs/"},
//     { name: "Next.js", link: "https://nextjs.org/docs"},
//     { name: "Express", link: "https://expressjs.com/"},
//     { name: "Tkinter", link: "https://docs.python.org/3/library/tkinter.html"},
//     { name: "Numpy", link: "https://numpy.org/doc/"},
//     { name: "Pandas", link: "https://pandas.pydata.org/docs/"},
//     { name: "Matplotlib", link: "https://matplotlib.org/stable/contents.html"},
//     { name: "Seaborn", link: "https://seaborn.pydata.org/"},
//     { name: "OpenCV", link: "https://docs.opencv.org/master/"},
//     { name: "Pyautogui", link: "https://pyautogui.readthedocs.io/en/latest/"},
//     { name: "MediaPipe", link: "https://google.github.io/mediapipe/"},
//   ],
//   Database: [
//     { name: "MongoDB", link: "https://www.mongodb.com/docs/"},
//     { name: "MySQL", link: "https://dev.mysql.com/doc/"},
//     { name: "Supabase", link: "https://supabase.io/docs"},
//   ],
//   Tools: [
//     { name: "Git", link: "https://git-scm.com/doc"},
//     { name: "VS Code", link: "https://code.visualstudio.com/docs"},
//     { name: "Figma", link: "https://www.figma.com/"},
//     { name: "GitHub", link: "https://docs.github.com/en"},
//     { name: "Postman", link: "https://learning.postman.com/docs/getting-started/introduction/"},
//     { name: "PyCharm", link: "https://www.jetbrains.com/pycharm/documentation/"},
//     { name: "OpenAI", link: "https://platform.openai.com/docs/models/chatgpt"},
//     { name: "Codeium", link: "https://codeium.com/"},
//     { name: "Jupyter Notebook", link: "https://jupyter-notebook.readthedocs.io/en/stable/"},
//     { name: "Vercel", link: "https://vercel.com/docs"},
//     { name: "Netlify", link: "https://docs.netlify.com/"},
//   ],
// };

// const Skills = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10"
//         >
//           <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             Skills & Expertise
//           </h2>

//           {/* Skill Categories */}
//           {Object.entries(skillCategories).map(([category, skills], index) => (
//             <div key={index} className="mb-12">
//               <h3 className="text-3xl font-semibold text-white mb-6">{category}</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {skills.map((skill, skillIndex) => (
//                   <motion.a
//                     href={skill.link}
//                     key={skillIndex}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.5, delay: (index + skillIndex) * 0.1 }}
//                   >
//                     <div className="p-6 text-center rounded-lg shadow-lg bg-gray-700 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-800">
//                       <h4 className="text-2xl font-bold text-white">{skill.name}</h4>
//                       <p className="text-sm text-gray-400 mt-2 group-hover:text-white">
//                         View Documentation
//                       </p>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Background Animation */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob"></div>
//         <div className="absolute w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
//         <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animation-delay-4000"></div>
//       </div>
//     </section>
//   );
// };

// export default Skills;













// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Define your skills categories with their icons and background colors
// const skillCategories = {
//   Languages: [
//     { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
//     { name: "TypeScript", link: "https://www.typescriptlang.org/docs/"},
//     { name: "Python", link: "https://docs.python.org/3/"},
//     { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML"},
//     { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
//     { name: "C++", link: "https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170"},
//   ],
//   "Libraries and Frameworks": [
//     { name: "React", link: "https://reactjs.org/docs/getting-started.html"},
//     { name: "Node.js", link: "https://nodejs.org/en/docs/"},
//     { name: "Next.js", link: "https://nextjs.org/docs"},
//     { name: "Express", link: "https://expressjs.com/"},
//     { name: "Tkinter", link: "https://docs.python.org/3/library/tkinter.html"},
//     { name: "Numpy", link: "https://numpy.org/doc/"},
//     { name: "Pandas", link: "https://pandas.pydata.org/docs/"},
//     { name: "Matplotlib", link: "https://matplotlib.org/stable/contents.html"},
//     { name: "Seaborn", link: "https://seaborn.pydata.org/"},
//     { name: "OpenCV", link: "https://docs.opencv.org/master/"},
//     { name: "Pyautogui", link: "https://pyautogui.readthedocs.io/en/latest/"},
//     { name: "MediaPipe", link: "https://google.github.io/mediapipe/"},
//   ],
//   Database: [
//     { name: "MongoDB", link: "https://www.mongodb.com/docs/"},
//     { name: "MySQL", link: "https://dev.mysql.com/doc/"},
//     { name: "Supabase", link: "https://supabase.io/docs"},
//   ],
//   Tools: [
//     { name: "Git", link: "https://git-scm.com/doc"},
//     { name: "VS Code", link: "https://code.visualstudio.com/docs"},
//     { name: "Figma", link: "https://www.figma.com/"},
//     { name: "GitHub", link: "https://docs.github.com/en"},
//     { name: "Postman", link: "https://learning.postman.com/docs/getting-started/introduction/"},
//     { name: "PyCharm", link: "https://www.jetbrains.com/pycharm/documentation/"},
//     { name: "OpenAI", link: "https://platform.openai.com/docs/models/chatgpt"},
//     { name: "Codeium", link: "https://codeium.com/"},
//     { name: "Jupyter Notebook", link: "https://jupyter-notebook.readthedocs.io/en/stable/"},
//     { name: "Vercel", link: "https://vercel.com/docs"},
//     { name: "Netlify", link: "https://docs.netlify.com/"},
//   ],
// };

// const Skills = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10"
//         >
//           <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             Skills & Expertise
//           </h2>

//           {/* Skill Categories */}
//           {Object.entries(skillCategories).map(([category, skills], index) => (
//             <div key={index} className="mb-12">
//               <h3 className="text-3xl font-semibold text-white mb-6">{category}</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//                 {skills.map((skill, skillIndex) => (
//                   <motion.a
//                     href={skill.link}
//                     key={skillIndex}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.5, delay: (index + skillIndex) * 0.1 }}
//                   >
//                     <div className="p-4 text-center bg-gray-700 shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-800">
//                       <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
//                       <p className="text-sm text-gray-400 mt-2 group-hover:text-white">
//                         View Documentation
//                       </p>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Background Animation */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob"></div>
//         <div className="absolute w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
//         <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animation-delay-4000"></div>
//       </div>
//     </section>
//   );
// };

// export default Skills;










import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define your skills categories with their icons and background colors
const skillCategories = {
  Languages: [
    { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    { name: "TypeScript", link: "https://www.typescriptlang.org/docs/"},
    { name: "Python", link: "https://docs.python.org/3/"},
    { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML"},
    { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
    { name: "C++", link: "https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170"},
  ],
  "Libraries and Frameworks": [
    { name: "React", link: "https://reactjs.org/docs/getting-started.html"},
    { name: "Node.js", link: "https://nodejs.org/en/docs/"},
    { name: "Next.js", link: "https://nextjs.org/docs"},
    { name: "Express", link: "https://expressjs.com/"},
    { name: "Tkinter", link: "https://docs.python.org/3/library/tkinter.html"},
    { name: "Numpy", link: "https://numpy.org/doc/"},
    { name: "Pandas", link: "https://pandas.pydata.org/docs/"},
    { name: "Matplotlib", link: "https://matplotlib.org/stable/contents.html"},
    { name: "Seaborn", link: "https://seaborn.pydata.org/"},
    { name: "OpenCV", link: "https://docs.opencv.org/master/"},
    { name: "Pyautogui", link: "https://pyautogui.readthedocs.io/en/latest/"},
    { name: "MediaPipe", link: "https://google.github.io/mediapipe/"},
  ],
  Database: [
    { name: "MongoDB", link: "https://www.mongodb.com/docs/"},
    { name: "MySQL", link: "https://dev.mysql.com/doc/"},
    { name: "Supabase", link: "https://supabase.io/docs"},
  ],
  Tools: [
    { name: "Git", link: "https://git-scm.com/doc"},
    { name: "VS Code", link: "https://code.visualstudio.com/docs"},
    { name: "Figma", link: "https://www.figma.com/"},
    { name: "GitHub", link: "https://docs.github.com/en"},
    { name: "Postman", link: "https://learning.postman.com/docs/getting-started/introduction/"},
    { name: "PyCharm", link: "https://www.jetbrains.com/pycharm/documentation/"},
    { name: "OpenAI", link: "https://platform.openai.com/docs/models/chatgpt"},
    { name: "Codeium", link: "https://codeium.com/"},
    { name: "Jupyter", link: "https://jupyter-notebook.readthedocs.io/en/stable/"},
    { name: "Vercel", link: "https://vercel.com/docs"},
    { name: "Netlify", link: "https://docs.netlify.com/"},
  ],
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Skills & Expertise
          </h2>

          {/* Skill Categories */}
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div key={index} className="mb-12">
              <h3 className="text-3xl font-semibold text-white mb-6">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skills.map((skill, skillIndex) => (
                  <motion.a
                    href={skill.link}
                    key={skillIndex}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: (index + skillIndex) * 0.1 }}
                  >
                    <div className="p-4 text-center bg-gray-700 shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-800 rounded-lg">
                      <h4 className="text-2xl font-semibold text-white">{skill.name}</h4>
                      <p className="text-sm text-gray-400 mt-2 group-hover:text-white transition-all duration-300 transform scale-100 group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                        View Documentation
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default Skills;
