// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail } from 'lucide-react';
// import { useCallback } from 'react';
// import Particles from 'react-particles';
// import { type Engine } from 'tsparticles-engine';
// import { loadSlim } from 'tsparticles-slim';

// const Hero = () => {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadSlim(engine);
//   }, []);

//   const particlesLoaded = useCallback(async () => {
//     // Optional: Add any initialization after particles are loaded
//   }, []);

//   return (
//     <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           background: {
//             color: {
//               value: 'transparent',
//             },
//           },
//           fpsLimit: 120,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: 'push',
//               },
//               onHover: {
//                 enable: true,
//                 mode: 'repulse',
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: '#ffffff',
//             },
//             links: {
//               color: '#ffffff',
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             move: {
//               direction: 'none',
//               enable: true,
//               outModes: {
//                 default: 'bounce',
//               },
//               random: false,
//               speed: 6,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: 'circle',
//             },
//             size: {
//               value: { min: 1, max: 5 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
      
//       <div className="relative z-10 text-center px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
//         >
//           Hi, I'm Karan Patel
//         </motion.h1>
        
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-xl md:text-2xl mb-8 text-gray-300"
//         >
//           I'm a passionate Python Developer | Web Developer | Data Analyst.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="flex justify-center space-x-6"
//         >
//           <a href="https://github.com/KaranPatelDev" target="_blank" rel="noopener noreferrer" 
//              className="transform hover:scale-110 transition-transform duration-200">
//             <Github className="w-8 h-8" />
//           </a>
//           <a href="https://www.linkedin.com/in/karan-patel-16700a215/" target="_blank" rel="noopener noreferrer"
//              className="transform hover:scale-110 transition-transform duration-200">
//             <Linkedin className="w-8 h-8" />
//           </a>
//           <a href="mailto:mpkaranpatel001018@gmail.com"
//              className="transform hover:scale-110 transition-transform duration-200">
//             <Mail className="w-8 h-8" />
//           </a>
//         </motion.div>
        
//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-12 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold
//                      hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200"
//           onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//         >
//           Get in Touch
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { type Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Optional: Add any initialization after particles are loaded
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-800 to-black">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: { value: 'transparent' },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: '#a8a8a8' }, // Soft gray particles
            links: {
              color: '#a8a8a8',
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: { enable: true, area: 700 },
              value: 60,
            },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-800"
        >
          Hi, I'm Karan Patel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          I'm a passionate Python Developer | Web Developer | Data Analyst.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center space-x-6"
        >
          <a href="https://github.com/KaranPatelDev" target="_blank" rel="noopener noreferrer" 
             className="transform hover:scale-110 transition-transform duration-200 group">
            <Github className="w-8 h-8 group-hover:text-indigo-600 transition-colors duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/karan-patel-16700a215/" target="_blank" rel="noopener noreferrer"
             className="transform hover:scale-110 transition-transform duration-200 group">
            <Linkedin className="w-8 h-8 group-hover:text-blue-500 transition-colors duration-200" />
          </a>
          <a href="mailto:mpkaranpatel001018@gmail.com"
             className="transform hover:scale-110 transition-transform duration-200 group">
            <Mail className="w-8 h-8 group-hover:text-red-500 transition-colors duration-200" />
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-800 rounded-full font-semibold
                     hover:from-indigo-700 hover:to-purple-900 transform hover:scale-105 transition-all duration-200"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get in Touch
        </motion.button>
      </div>

      {/* Background Animation Effect */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-30" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }} />
    </section>
  );
};

export default Hero;
