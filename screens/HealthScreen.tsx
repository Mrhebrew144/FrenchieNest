import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionHeader } from '../components/SectionHeader';
import { colors } from '../theme/colors';
import { growthData } from '../data/mockData';

export function HealthScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <SectionHeader title="Health" subtitle="Growth and monitoring" />

        <View style={styles.cardRow}>
          <View style={[styles.miniCard, { backgroundColor: colors.blush }]}>
            <Text style={styles.value}>+1.2 oz</Text>
            <Text style={styles.label}>Weekly gain</Text>
          </View>
          <View style={[styles.miniCard, { backgroundColor: colors.mauve }]}>
            <Text style={styles.value}>Stable</Text>
            <Text style={styles.label}>Vital signs</Text>
          </View>
        </View>

        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Growth trend</Text>
          <View style={styles.chartWrap}>
            {growthData.map((point) => (
              <View key={point.day} style={styles.barGroup}>
                <View
                  style={[
                    styles.bar,
                    { height: Math.max(point.weight * 18, 40), backgroundColor: colors.green },
                  ]}
                />
                <Text style={styles.barLabel}>D{point.day}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.smallTitle}>Today’s notes</Text>
          {[
            'Warmth and hydration are normal',
            'No abnormal crying or lethargy detected',
            'Weight is trending upward',
          ].map((note) => (
            <View key={note} style={styles.noteItem}>
              <View style={styles.dot} />
              <Text style={styles.noteText}>{note}</Text>
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
  cardRow: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  miniCard: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    marginHorizontal: 4,
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.deepBrown,
  },
  label: {
    fontSize: 12,
    color: colors.deepBrown,
    marginTop: 8,
  },
  chartCard: {
    backgroundColor: colors.softWhite,
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.deepBrown,
    marginBottom: 16,
  },
  chartWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 170,
    paddingTop: 16,
  },
  barGroup: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    height: '100%',
  },
  bar: {
    width: 24,
    borderRadius: 10,
    minHeight: 40,
  },
  barLabel: {
    marginTop: 8,
    fontSize: 10,
    color: colors.warmGray,
  },
  card: {
    backgroundColor: colors.softWhite,
    borderRadius: 22,
    padding: 18,
  },
  smallTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.deepBrown,
    marginBottom: 12,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.blush,
    marginRight: 10,
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    color: colors.deepBrown,
  },
});
