import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

type Props = {
  title: string;
  time: string;
  type: string;
};

export function ReminderItem({ title, time, type }: Props) {
  return (
    <View style={styles.item}>
      <View style={styles.dot} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.softWhite,
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.blush,
    marginRight: 12,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.deepBrown,
  },
  time: {
    marginTop: 4,
    fontSize: 12,
    color: colors.warmGray,
  },
  type: {
    marginLeft: 10,
    fontSize: 11,
    fontWeight: '600',
    color: colors.deepBrown,
    backgroundColor: colors.cream,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
});
