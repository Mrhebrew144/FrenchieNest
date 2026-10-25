import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionHeader } from '../components/SectionHeader';
import { colors } from '../theme/colors';
import { profile } from '../data/mockData';

export function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <SectionHeader title="Profile" subtitle="Breeder & parent details" />

        <View style={styles.card}>
          <Text style={styles.title}>{profile.breederName}</Text>
          <Text style={styles.meta}>Location: {profile.location}</Text>
          <Text style={styles.meta}>Email: {profile.email}</Text>
          <Text style={styles.meta}>Phone: {profile.phone}</Text>
          <Text style={styles.meta}>Emergency contact: {profile.emergencyContact}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.smallTitle}>Care notes</Text>
          <Text style={styles.note}>{profile.careNotes}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.deepBrown,
    marginBottom: 8,
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
    marginBottom: 10,
  },
  note: {
    fontSize: 14,
    color: colors.deepBrown,
    lineHeight: 22,
  },
});
