import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useAchievements } from '../context/AchievementContext';

const AchievementNotification = () => {
  const { state } = useAchievements();
  const { showNotification, latestAchievement } = state;

  return (
    <AnimatePresence>
      {showNotification && latestAchievement && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className="fixed top-20 right-4 z-50 bg-gray-800 border border-purple-500 rounded-lg shadow-lg p-4 max-w-sm"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-purple-500/20 p-2 rounded-full">
              <Trophy className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold text-white">Achievement Unlocked!</h3>
              <p className="text-purple-400">{latestAchievement.title}</p>
              <p className="text-sm text-gray-400">+{latestAchievement.points} points</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementNotification;