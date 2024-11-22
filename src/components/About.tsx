import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Python and Web Developer with a knack for creating innovative and user-friendly solutions. I have honed my skills in Frontend Development, Backend Development, Data Visualization, Data Analytics. I am a quick learner and a team player who is always ready to take on new challenges. I am always looking for opportunities to learn and grow in the field of technology. Currently I am working on MERN Stack.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-purple-500 rounded-full font-semibold hover:bg-purple-600 transition-colors duration-200">
                Download CV
              </button>
              <button className="px-6 py-2 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-colors duration-200">
                View Projects
              </button>
            </div>
          </div>
          
          <div className="relative">
            {/* Background animation */}
            <div className="aspect-square rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 absolute -inset-4 blur-3xl"></div>

            {/* Profile Image */}
            <img
              src="/p3.png"  // Correct path to image in the public folder
              alt="Profile"
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
