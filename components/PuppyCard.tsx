import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export function PuppyCard({
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
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.meta}>{age} • {weight} • {color}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.softWhite,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  info: {
    padding: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.deepBrown,
  },
  meta: {
    marginTop: 6,
    fontSize: 13,
    color: colors.warmGray,
  },
  status: {
    fontSize: 13,
    color: colors.green,
    fontWeight: '600',
    marginTop: 8,
  },
});
