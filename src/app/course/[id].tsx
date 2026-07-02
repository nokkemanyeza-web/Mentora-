import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { mockCourses } from '@/data/mockData';
import { colors, spacing, typography, borderRadius } from '@/constants/theme';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const course = mockCourses.find((c) => c.id === id);

  if (!course) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Course not found.</Text>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.back()} style={styles.backNav}>
        <Feather name="arrow-left" size={24} color={colors.text} />
      </Pressable>

      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: course.color }]}>
          <MaterialCommunityIcons name={course.icon as any} size={40} color={colors.background} />
        </View>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseMeta}>{course.board} • {course.level}</Text>
      </View>

      <Text style={styles.sectionTitle}>Syllabus Topics</Text>
      
      {course.topics.length === 0 ? (
        <Text style={styles.emptyText}>No topics available yet.</Text>
      ) : (
        course.topics.map((topic, index) => (
          <Pressable 
            key={topic.id} 
            style={styles.topicCard}
            onPress={() => router.push(`/quiz/${topic.id}`)}
          >
            <View style={styles.topicHeader}>
              <Text style={styles.topicIndex}>{index + 1}</Text>
              <View style={styles.topicInfo}>
                <Text style={styles.topicTitle}>{topic.title}</Text>
                <Text style={styles.topicSubtitle}>{topic.questions.length} Questions</Text>
              </View>
              <Feather name="play-circle" size={24} color={colors.primary} />
            </View>
            <View style={styles.progressContainer}>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: `${topic.progress}%` }]} />
              </View>
              <Text style={styles.progressText}>{topic.progress}%</Text>
            </View>
          </Pressable>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  content: {
    padding: spacing.xl,
    paddingTop: spacing.xxl,
  },
  backNav: {
    marginBottom: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxxl,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  courseTitle: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  courseMeta: {
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    fontWeight: typography.weights.medium,
  },
  sectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  topicCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  topicIndex: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.textSecondary,
    marginRight: spacing.md,
    width: 24,
  },
  topicInfo: {
    flex: 1,
  },
  topicTitle: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    color: colors.text,
  },
  topicSubtitle: {
    fontSize: typography.sizes.xs,
    color: colors.textSecondary,
    marginTop: 2,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.success,
    borderRadius: 4,
  },
  progressText: {
    fontSize: typography.sizes.xs,
    color: colors.textSecondary,
    fontWeight: typography.weights.bold,
    width: 36,
  },
  errorText: {
    fontSize: typography.sizes.lg,
    color: colors.error,
    marginBottom: spacing.md,
  },
  backButton: {
    padding: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
  },
  backButtonText: {
    color: colors.background,
    fontWeight: typography.weights.bold,
  },
  emptyText: {
    fontSize: typography.sizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
});
