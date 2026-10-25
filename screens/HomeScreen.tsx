import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StatsCard } from '../components/StatsCard';
import { PuppyCard } from '../components/PuppyCard';
import { ReminderItem } from '../components/ReminderItem';
import { SectionHeader } from '../components/SectionHeader';
import { colors } from '../theme/colors';
import { careLog, motherFrenchie, puppies, reminders } from '../data/mockData';

export function HomeScreen() {
  const stats = [
    { label: 'Puppies', value: '3', color: colors.blush },
    { label: 'Weight gain', value: '+1.2 oz', color: colors.mauve },
    { label: 'Sleep', value: '2.5 hrs', color: colors.blue },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.appName}>FrenchieNest</Text>
          <View style={styles.badge}><Text style={styles.badgeText}>New litter</Text></View>
        </View>

        <Text style={styles.heroTitle}>Newborn Frenchie care</Text>
        <Text style={styles.heroSubtitle}>Track feeding, sleep, growth and daily care with ease.</Text>

        <View style={styles.statsRow}>
          {stats.map((stat) => (
            <StatsCard key={stat.label} label={stat.label} value={stat.value} color={stat.color} />
          ))}
        </View>

        <View style={styles.infoCard}>
          <SectionHeader title="Mother Frenchie" subtitle="Daily health & wellbeing" />
          <Text style={styles.motherName}>{motherFrenchie.name}</Text>
          <Text style={styles.motherMeta}>{motherFrenchie.breed} • {motherFrenchie.age}</Text>
          <Text style={styles.motherMeta}>Weight: {motherFrenchie.weight}</Text>
          <Text style={styles.motherMeta}>Status: {motherFrenchie.healthStatus}</Text>
          <Text style={styles.motherMeta}>Next vet: {motherFrenchie.nextVetVisit}</Text>
        </View>

        <View style={styles.sectionWrap}>
          <SectionHeader title="Puppies" subtitle="Newborn monitoring" />
          {puppies.slice(0, 2).map((puppy) => (
            <PuppyCard
              key={puppy.id}
              name={puppy.name}
              age={`${puppy.ageInDays} days`}
              weight={puppy.weight}
              color={puppy.color}
              status={puppy.status}
              image={puppy.image}
            />
          ))}
        </View>

        <View style={styles.sectionWrap}>
          <SectionHeader title="Today's reminders" subtitle="Care schedule" />
          {reminders.slice(0, 3).map((item) => (
            <ReminderItem key={item.id} title={item.title} time={item.time} type={item.type} />
          ))}
        </View>

        <View style={styles.sectionWrap}>
          <SectionHeader title="Recent care log" subtitle="Latest updates" />
          {careLog.slice(0, 3).map((item) => (
            <View key={item.id} style={styles.logItem}>
              <Text style={styles.logTitle}>{item.title}</Text>
              <Text style={styles.logDetail}>{item.detail}</Text>
              <Text style={styles.logTime}>{item.time}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  appName: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.deepBrown,
  },
  badge: {
    backgroundColor: colors.blush,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.deepBrown,
  },
  heroTitle: {
    fontSize: 31,
    fontWeight: '700',
    color: colors.deepBrown,
  },
  heroSubtitle: {
    marginTop: 6,
    fontSize: 15,
    color: colors.warmGray,
    marginBottom: 18,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  infoCard: {
    backgroundColor: colors.softWhite,
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  motherName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.deepBrown,
  },
  motherMeta: {
    marginTop: 7,
    fontSize: 14,
    color: colors.warmGray,
  },
  sectionWrap: {
    marginBottom: 18,
  },
  logItem: {
    backgroundColor: colors.softWhite,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },
  logTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.deepBrown,
  },
  logDetail: {
    marginTop: 6,
    fontSize: 13,
    color: colors.warmGray,
  },
  logTime: {
    marginTop: 8,
    fontSize: 12,
    color: colors.deepBrown,
  },
});
