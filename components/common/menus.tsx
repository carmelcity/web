"use client";

import { 
    SparklesIcon, 
    ArrowTrendingUpIcon,
    AcademicCapIcon,
    FlagIcon
} from '@heroicons/react/24/solid'

const MainMenuItem = {
    name: 'Carmels',
    path: `/`,
    image: "/images/logo.png",
}

const LeaderboardMenuItem = {
    name: 'Leaderboard',
    path: `/leaderboard`,
    icon: ArrowTrendingUpIcon,
}

const ChallengesMenuItem = {
    name: 'Challenges',
    path: `/challenges`,
    icon: FlagIcon,
}

const StoreMenuItem = {
    name: 'Assets',
    path: '/assets',
    icon: SparklesIcon,
}

const LearnMenuItem = {
    name: 'Tutorials',
    path: '/tutorials',
    icon: AcademicCapIcon,
}

export const SideMenuItems = [
    MainMenuItem,
    LeaderboardMenuItem,
    ChallengesMenuItem,
    LearnMenuItem,
    StoreMenuItem,
];

export const TabBarItems = [
    MainMenuItem,
    LeaderboardMenuItem,
    ChallengesMenuItem,
    LearnMenuItem,
    StoreMenuItem,
];
  