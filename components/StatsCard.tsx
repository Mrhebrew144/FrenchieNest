import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

type Props = {
  label: string;
  value: string;
  color?: string;
};

export function StatsCard({ label, value, color = colors.blush }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    minHeight: 96,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.deepBrown,
  },
  label: {
    marginTop: 6,
    fontSize: 12,
    color: colors.deepBrown,
  },
});
