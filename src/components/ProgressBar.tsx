import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useAchievements } from '../context/AchievementContext';

const ProgressBar = () => {
  const { state } = useAchievements();
  const { score, level, achievements } = state;

  const nextLevelScore = level * 100;
  const progress = (score % 100) / 100;
  const unlockedAchievements = achievements.filter(a => a.unlocked).length;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 right-4 z-40 bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-purple-500/20"
    >
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <p className="text-sm text-gray-400">Level</p>
          <p className="text-2xl font-bold text-purple-400">{level}</p>
        </div>
        
        <div className="flex-1">
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-1">
            <span>{score % 100}</span>
            <span>{nextLevelScore}</span>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <Trophy className="w-4 h-4 text-purple-400" />
          <span className="text-gray-400">{unlockedAchievements}/{achievements.length}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressBar;