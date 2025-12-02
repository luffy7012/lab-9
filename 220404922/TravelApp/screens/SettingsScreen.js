import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.text}>App Version 1.0</Text>
            <Text style={styles.text}>Dark mode enabled</Text>
            <Text style={styles.text}>Lab Projesi 9</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
        paddingTop: 40,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        color: colors.subtitle,
        marginBottom: 6,
    },
});
