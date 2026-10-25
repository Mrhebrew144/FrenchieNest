import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionHeader } from '../components/SectionHeader';
import { PuppyCard } from '../components/PuppyCard';
import { colors } from '../theme/colors';
import { puppies } from '../data/mockData';

export function PuppiesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <SectionHeader title="Puppies" subtitle="New litter overview" />
        {puppies.map((puppy) => (
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
