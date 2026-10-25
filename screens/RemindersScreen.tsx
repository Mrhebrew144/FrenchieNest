import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReminderItem } from '../components/ReminderItem';
import { SectionHeader } from '../components/SectionHeader';
import { colors } from '../theme/colors';
import { reminders } from '../data/mockData';

export function RemindersScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <SectionHeader title="Reminders" subtitle="Daily care schedule" />
        {reminders.map((item) => (
          <ReminderItem key={item.id} title={item.title} time={item.time} type={item.type} />
        ))}
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
    paddingTop: 18,
    paddingBottom: 32,
  },
});
