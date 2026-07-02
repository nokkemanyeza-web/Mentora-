import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { colors, spacing, typography, borderRadius } from '@/constants/theme';
import { Feather } from '@expo/vector-icons';

export default function ProfileScreen() {
  const { user } = useAuth();

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
          <Feather name="user" size={40} color={colors.primary} />
        </View>
        <Text style={styles.emailText}>{user?.email}</Text>
        <Text style={styles.roleText}>Student Account</Text>
      </View>

      <View style={styles.section}>
        <Pressable style={styles.menuItem}>
          <Feather name="settings" size={20} color={colors.text} />
          <Text style={styles.menuItemText}>Account Settings</Text>
          <Feather name="chevron-right" size={20} color={colors.textSecondary} />
        </Pressable>
        <Pressable style={styles.menuItem}>
          <Feather name="bell" size={20} color={colors.text} />
          <Text style={styles.menuItemText}>Notifications</Text>
          <Feather name="chevron-right" size={20} color={colors.textSecondary} />
        </Pressable>
        <Pressable style={styles.menuItem}>
          <Feather name="help-circle" size={20} color={colors.text} />
          <Text style={styles.menuItemText}>Help & Support</Text>
          <Feather name="chevron-right" size={20} color={colors.textSecondary} />
        </Pressable>
      </View>

      <Pressable style={styles.signOutButton} onPress={handleSignOut}>
        <Feather name="log-out" size={20} color={colors.error} />
        <Text style={styles.signOutText}>Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.xl,
    paddingTop: spacing.xxxl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  emailText: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.text,
  },
  roleText: {
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  section: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    marginBottom: spacing.xxl,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuItemText: {
    flex: 1,
    marginLeft: spacing.md,
    fontSize: typography.sizes.md,
    color: colors.text,
    fontWeight: typography.weights.medium,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.error,
    gap: spacing.sm,
  },
  signOutText: {
    color: colors.error,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
  },
});
