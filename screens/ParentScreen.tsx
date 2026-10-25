import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionHeader } from '../components/SectionHeader';
import { colors } from '../theme/colors';
import { motherFrenchie } from '../data/mockData';

export function ParentScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <SectionHeader title="Parent Frenchie" subtitle="Care overview" />

        <View style={styles.card}>
          <Text style={styles.name}>{motherFrenchie.name}</Text>
          <Text style={styles.meta}>{motherFrenchie.breed} • {motherFrenchie.age}</Text>
          <Text style={styles.meta}>Weight: {motherFrenchie.weight}</Text>
          <Text style={styles.meta}>Health: {motherFrenchie.healthStatus}</Text>
          <Text style={styles.meta}>Mothering: {motherFrenchie.motheringStatus}</Text>
          <Text style={styles.meta}>Appetite: {motherFrenchie.appetite}</Text>
          <Text style={styles.meta}>Hydration: {motherFrenchie.hydration}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.smallTitle}>Care checklist</Text>
          {[
            'Nursing and rest monitored',
            'Water bowl refreshed every 4 hours',
            'Warm, quiet nesting area maintained',
            'Daily walk and light movement completed',
          ].map((item) => (
            <View key={item} style={styles.checkItem}>
              <View style={styles.checkDot} />
              <Text style={styles.checkText}>{item}</Text>
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
    paddingTop: 18,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: colors.softWhite,
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.deepBrown,
  },
  meta: {
    marginTop: 8,
    fontSize: 14,
    color: colors.warmGray,
  },
  smallTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.deepBrown,
    marginBottom: 12,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.green,
    marginRight: 10,
  },
  checkText: {
    fontSize: 14,
    color: colors.deepBrown,
    flex: 1,
  },
});
