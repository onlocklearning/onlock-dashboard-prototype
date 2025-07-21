export interface VideoFeedItem {
  id: string;
  title: string;
  subcategory: string;
  coinReward: number;
  videoSrc: string; // Placeholder for now
}

export const videoFeed: VideoFeedItem[] = [
  {
    id: '1',
    title: 'What is an Atom?',
    subcategory: 'Physics',
    coinReward: 10,
    videoSrc: '',
  },
  {
    id: '2',
    title: 'How do Planets Orbit?',
    subcategory: 'Astronomy',
    coinReward: 12,
    videoSrc: '',
  },
  {
    id: '3',
    title: 'The Basics of DNA',
    subcategory: 'Biology',
    coinReward: 8,
    videoSrc: '',
  },
]; 