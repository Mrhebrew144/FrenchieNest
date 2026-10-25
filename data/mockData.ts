export type Puppy = {
  id: string;
  name: string;
  ageInDays: number;
  weight: string;
  sex: 'Male' | 'Female';
  color: string;
  status: string;
  image: string;
  feeding: string;
  sleep: string;
};

export type Reminder = {
  id: string;
  title: string;
  time: string;
  type: 'Routine' | 'Health' | 'Medical' | 'Tracking';
};

export type CareLogEntry = {
  id: string;
  title: string;
  detail: string;
  time: string;
};

export type GrowthPoint = {
  day: number;
  weight: number;
};

export const motherFrenchie = {
  name: 'Luna',
  breed: 'French Bulldog',
  age: '2 years',
  weight: '22 lbs',
  healthStatus: 'Healthy',
  nextVetVisit: 'May 14',
  motheringStatus: 'Nursing and resting well',
  appetite: 'Strong appetite',
  hydration: 'Hydrated',
};

export const puppies: Puppy[] = [
  {
    id: 'p1',
    name: 'Mochi',
    ageInDays: 3,
    weight: '11 oz',
    sex: 'Female',
    color: 'Brindle',
    status: 'Strong and alert',
    feeding: 'Every 2 hours',
    sleep: '2.5 hours',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'p2',
    name: 'Biscuit',
    ageInDays: 3,
    weight: '10.8 oz',
    sex: 'Male',
    color: 'Cream',
    status: 'Sleeping well',
    feeding: 'Every 2 hours',
    sleep: '3 hours',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'p3',
    name: 'Pepper',
    ageInDays: 3,
    weight: '11.4 oz',
    sex: 'Female',
    color: 'Fawn',
    status: 'Eating well',
    feeding: 'Every 2 hours',
    sleep: '2 hours',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
];

export const reminders: Reminder[] = [
  { id: 'r1', title: 'Feed puppies', time: '6:00 AM', type: 'Routine' },
  { id: 'r2', title: 'Mother hydration check', time: '8:30 AM', type: 'Health' },
  { id: 'r3', title: 'Vaccination reminder', time: 'Next Thursday', type: 'Medical' },
  { id: 'r4', title: 'Weight check', time: '4:00 PM', type: 'Tracking' },
  { id: 'r5', title: 'Cuddle and monitor all pups', time: '9:00 PM', type: 'Routine' },
];

export const careLog: CareLogEntry[] = [
  { id: 'h1', title: 'Mochi gained weight', detail: '+0.4 oz since yesterday', time: '9:15 AM' },
  { id: 'h2', title: 'Mother feeding', detail: 'Finished warm meal and drank water', time: '7:40 AM' },
  { id: 'h3', title: 'Sleep cycle', detail: 'Puppies slept for 2.5 hours', time: '11:00 AM' },
  { id: 'h4', title: 'Warming check', detail: 'All pups stayed warm under the heat plate', time: '1:10 PM' },
];

export const growthData: GrowthPoint[] = [
  { day: 1, weight: 9.8 },
  { day: 2, weight: 10.2 },
  { day: 3, weight: 10.9 },
  { day: 4, weight: 11.4 },
  { day: 5, weight: 12.1 },
  { day: 6, weight: 12.8 },
];

export const profile = {
  breederName: 'Frenchie Haven',
  location: 'Austin, TX',
  email: 'hello@frenchiehaven.com',
  phone: '(512) 555-0189',
  emergencyContact: 'Dr. Pet Vet',
  careNotes: 'Keep pups warm, monitor weight gain, and watch for restlessness.',
};
