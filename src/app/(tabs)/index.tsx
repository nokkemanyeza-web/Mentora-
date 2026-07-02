import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useAuth } from '@/context/AuthContext';
import { colors, spacing, typography, borderRadius } from '@/constants/theme';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function StudentDashboard() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, {user?.email?.split('@')[0] || 'Student'}!</Text>
          <Text style={styles.subtitle}>Ready to crush your goals today?</Text>
        </View>
        <View style={styles.avatarPlaceholder}>
          <Feather name="user" size={24} color={colors.primary} />
        </View>
      </View>

      {/* Stats Overview */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <MaterialCommunityIcons name="book-open-page-variant" size={24} color={colors.primary} />
          <Text style={styles.statValue}>4</Text>
          <Text style={styles.statLabel}>Active Courses</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialCommunityIcons name="lightning-bolt" size={24} color={colors.warning} />
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
      </View>

      {/* Continue Learning */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Continue Learning</Text>
        <Pressable style={styles.courseCard}>
          <View style={styles.courseIconContainer}>
            <MaterialCommunityIcons name="calculator-variant" size={32} color={colors.background} />
          </View>
          <View style={styles.courseInfo}>
            <Text style={styles.courseSubject}>Mathematics (ZIMSEC)</Text>
            <Text style={styles.courseTopic}>Algebraic Fractions</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '65%' }]} />
            </View>
            <Text style={styles.progressText}>65% Completed</Text>
          </View>
        </Pressable>
      </View>

      {/* AI Tutor Call to Action */}
      <Pressable style={styles.aiCard}>
        <View style={styles.aiIconContainer}>
          <Feather name="cpu" size={28} color={colors.background} />
        </View>
        <View style={styles.aiInfo}>
          <Text style={styles.aiTitle}>Stuck on a problem?</Text>
          <Text style={styles.aiSubtitle}>Ask your AI Tutor for step-by-step help.</Text>
        </View>
        <Feather name="chevron-right" size={24} color={colors.text} />
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.xl,
    paddingTop: spacing.xxxl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  greeting: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: colors.text,
  },
  subtitle: {
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.xxl,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statValue: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.text,
    marginVertical: spacing.xs,
  },
  statLabel: {
    fontSize: typography.sizes.xs,
    color: colors.textSecondary,
    fontWeight: typography.weights.medium,
  },
  section: {
    marginBottom: spacing.xxl,
  },
  sectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  courseCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  courseIconContainer: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseInfo: {
    flex: 1,
  },
  courseSubject: {
    fontSize: typography.sizes.xs,
    color: colors.textSecondary,
    fontWeight: typography.weights.semibold,
    textTransform: 'uppercase',
  },
  courseTopic: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
    color: colors.text,
    marginVertical: spacing.xs,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 3,
    marginVertical: spacing.xs,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.success,
    borderRadius: 3,
  },
  progressText: {
    fontSize: typography.sizes.xs,
    color: colors.textSecondary,
  },
  aiCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    gap: spacing.md,
  },
  aiIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiInfo: {
    flex: 1,
  },
  aiTitle: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
    color: colors.text,
  },
  aiSubtitle: {
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
