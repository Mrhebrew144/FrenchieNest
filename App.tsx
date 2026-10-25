import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const motherFrenchie = {
  name: 'Luna',
  breed: 'French Bulldog',
  age: '2 years',
  weight: '22 lbs',
  health: 'Healthy',
  nextVet: 'May 14',
};

const puppies = [
  {
    id: 'p1',
    name: 'Mochi',
    age: '3 days',
    weight: '11 oz',
    color: 'Brindle',
    status: 'Strong and alert',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'p2',
    name: 'Biscuit',
    age: '3 days',
    weight: '10.8 oz',
    color: 'Cream',
    status: 'Sleeping well',
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'p3',
    name: 'Pepper',
    age: '3 days',
    weight: '11.4 oz',
    color: 'Fawn',
    status: 'Eating well',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
];

const reminders = [
  { id: 'r1', title: 'Feed puppies', time: '6:00 AM', type: 'Routine' },
  { id: 'r2', title: 'Mother hydration check', time: '8:30 AM', type: 'Health' },
  { id: 'r3', title: 'Vaccination reminder', time: 'Next Thursday', type: 'Medical' },
  { id: 'r4', title: 'Weight check', time: '4:00 PM', type: 'Tracking' },
];

const healthLog = [
  { id: 'h1', title: 'Mochi gained weight', detail: '+0.4 oz since yesterday', time: '9:15 AM' },
  { id: 'h2', title: 'Mother feeding', detail: 'Finished warm meal and drank water', time: '7:40 AM' },
  { id: 'h3', title: 'Sleep cycle', detail: 'Puppies slept for 2.5 hours', time: '11:00 AM' },
];

const stats = [
  { label: 'Puppies', value: '3', color: '#E7C5BC' },
  { label: 'Weight gain', value: '+1.2 oz', color: '#D8C7DE' },
  { label: 'Sleep', value: '2.5 hrs', color: '#C7D9E6' },
];

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <View style={[styles.statCard, { backgroundColor: color }]}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function PuppyCard({
  name,
  age,
  weight,
  color,
  status,
  image,
}: {
  name: string;
  age: string;
  weight: string;
  color: string;
  status: string;
  image: string;
}) {
  return (
    <View style={styles.puppyCard}>
      <Image source={{ uri: image }} style={styles.puppyImage} />
      <View style={styles.puppyInfo}>
        <Text style={styles.puppyName}>{name}</Text>
        <Text style={styles.puppyMeta}>{age} • {weight} • {color}</Text>
        <Text style={styles.puppyStatus}>{status}</Text>
      </View>
    </View>
  );
}

function ReminderItem({ title, time, type }: { title: string; time: string; type: string }) {
  return (
    <View style={styles.reminderItem}>
      <View style={styles.reminderDot} />
      <View style={styles.reminderTextWrap}>
        <Text style={styles.reminderTitle}>{title}</Text>
        <Text style={styles.reminderTime}>{time}</Text>
      </View>
      <Text style={styles.reminderType}>{type}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.topBar}>
            <Text style={styles.appName}>FrenchieNest</Text>
            <TouchableOpacity style={styles.menuButton} activeOpacity={0.8}>
              <Text style={styles.menuText}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.heroTitle}>Newborn Frenchie care</Text>
          <Text style={styles.heroSubtitle}>Keep track of feeding, sleeping, growth, and parent care.</Text>

          <View style={styles.statRow}>
            {stats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} color={stat.color} />
            ))}
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Mother Frenchie</Text>
            <Text style={styles.momName}>{motherFrenchie.name}</Text>
            <Text style={styles.momMeta}>{motherFrenchie.breed} • {motherFrenchie.age}</Text>
            <Text style={styles.momMeta}>Weight: {motherFrenchie.weight}</Text>
            <Text style={styles.momMeta}>Health status: {motherFrenchie.health}</Text>
            <Text style={styles.momMeta}>Next vet visit: {motherFrenchie.nextVet}</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Puppies</Text>
            {puppies.map((puppy) => (
              <PuppyCard
                key={puppy.id}
                name={puppy.name}
                age={puppy.age}
                weight={puppy.weight}
                color={puppy.color}
                status={puppy.status}
                image={puppy.image}
              />
            ))}
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Today's reminders</Text>
            {reminders.map((item) => (
              <ReminderItem key={item.id} title={item.title} time={item.time} type={item.type} />
            ))}
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Care log</Text>
            {healthLog.map((item) => (
              <View key={item.id} style={styles.logItem}>
                <Text style={styles.logTitle}>{item.title}</Text>
                <Text style={styles.logDetail}>{item.detail}</Text>
                <Text style={styles.logTime}>{item.time}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F1EC',
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 8,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#382B2A',
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#E8D0C8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#382B2A',
    lineHeight: 26,
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#382B2A',
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 15,
    color: '#685C5B',
    marginBottom: 18,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    minHeight: 90,
    justifyContent: 'center',
  },
  statValue: {
    fontSize: 25,
    fontWeight: '700',
    color: '#2F2624',
  },
  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#504847',
  },
  sectionCard: {
    backgroundColor: '#FFFDFB',
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#382B2A',
    marginBottom: 12,
  },
  momName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#382B2A',
  },
  momMeta: {
    marginTop: 7,
    fontSize: 14,
    color: '#615957',
  },
  puppyCard: {
    backgroundColor: '#F8F1EC',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 14,
  },
  puppyImage: {
    width: '100%',
    height: 150,
  },
  puppyInfo: {
    padding: 14,
  },
  puppyName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#382B2A',
  },
  puppyMeta: {
    marginTop: 6,
    fontSize: 13,
    color: '#615957',
  },
  puppyStatus: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '600',
    color: '#3E8D67',
  },
  reminderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F3F1',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  reminderDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#D99A8B',
    marginRight: 10,
  },
  reminderTextWrap: {
    flex: 1,
  },
  reminderTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#382B2A',
  },
  reminderTime: {
    marginTop: 4,
    fontSize: 12,
    color: '#615957',
  },
  reminderType: {
    marginLeft: 10,
    fontSize: 11,
    fontWeight: '600',
    backgroundColor: '#F1E0D9',
    color: '#382B2A',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
  logItem: {
    backgroundColor: '#F8F1EC',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },
  logTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#382B2A',
  },
  logDetail: {
    marginTop: 6,
    fontSize: 13,
    color: '#615957',
  },
  logTime: {
    marginTop: 8,
    fontSize: 12,
    color: '#382B2A',
  },
});
