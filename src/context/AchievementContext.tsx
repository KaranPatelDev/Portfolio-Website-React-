import React, { createContext, useContext, useReducer, useEffect } from 'react';

type Achievement = {
  id: string;
  title: string;
  description: string;
  points: number;
  unlocked: boolean;
  icon: string;
};

type State = {
  achievements: Achievement[];
  score: number;
  level: number;
  showNotification: boolean;
  latestAchievement: Achievement | null;
};

type Action =
  | { type: 'UNLOCK_ACHIEVEMENT'; payload: string }
  | { type: 'HIDE_NOTIFICATION' };

const initialAchievements: Achievement[] = [
  {
    id: 'explorer',
    title: 'Explorer',
    description: 'Visited all sections of the portfolio',
    points: 100,
    unlocked: false,
    icon: '🌟'
  },
  {
    id: 'project_master',
    title: 'Project Master',
    description: 'Viewed details of 3 different projects',
    points: 150,
    unlocked: false,
    icon: '🚀'
  },
  {
    id: 'skill_seeker',
    title: 'Skill Seeker',
    description: 'Interacted with the skills orbital system',
    points: 75,
    unlocked: false,
    icon: '🎯'
  },
  {
    id: 'social_butterfly',
    title: 'Social Butterfly',
    description: 'Visited social media links',
    points: 50,
    unlocked: false,
    icon: '🦋'
  },
  {
    id: 'contact_initiator',
    title: 'Contact Initiator',
    description: 'Started writing a message',
    points: 25,
    unlocked: false,
    icon: '✉️'
  }
];

const initialState: State = {
  achievements: initialAchievements,
  score: 0,
  level: 1,
  showNotification: false,
  latestAchievement: null
};

const calculateLevel = (score: number) => Math.floor(score / 100) + 1;

const achievementReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UNLOCK_ACHIEVEMENT': {
      const achievement = state.achievements.find(a => a.id === action.payload);
      if (!achievement || achievement.unlocked) return state;

      const newScore = state.score + achievement.points;
      const newLevel = calculateLevel(newScore);

      return {
        ...state,
        achievements: state.achievements.map(a =>
          a.id === action.payload ? { ...a, unlocked: true } : a
        ),
        score: newScore,
        level: newLevel,
        showNotification: true,
        latestAchievement: achievement
      };
    }
    case 'HIDE_NOTIFICATION':
      return {
        ...state,
        showNotification: false,
        latestAchievement: null
      };
    default:
      return state;
  }
};

const AchievementContext = createContext<{
  state: State;
  unlockAchievement: (id: string) => void;
  hideNotification: () => void;
} | null>(null);

export const AchievementProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(achievementReducer, initialState);

  const unlockAchievement = (id: string) => {
    dispatch({ type: 'UNLOCK_ACHIEVEMENT', payload: id });
  };

  const hideNotification = () => {
    dispatch({ type: 'HIDE_NOTIFICATION' });
  };

  useEffect(() => {
    if (state.showNotification) {
      const timer = setTimeout(hideNotification, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.showNotification]);

  return (
    <AchievementContext.Provider value={{ state, unlockAchievement, hideNotification }}>
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievements = () => {
  const context = useContext(AchievementContext);
  if (!context) {
    throw new Error('useAchievements must be used within an AchievementProvider');
  }
  return context;
};