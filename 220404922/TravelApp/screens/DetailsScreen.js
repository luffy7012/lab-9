import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function DetailsScreen({ route, navigation }) {
    const { place, rating, description } = route.params;

    const msg = rating === 5
        ? 'Burası kesinlikle gidilmesi gereken bir yer!'
        : 'Sıradan bir yer.';

    return (
        <View style={styles.container}>
            <Text style={styles.place}>{place}</Text>
            <Text style={styles.description}>{description}</Text>

            <Text style={styles.rating}>Rating: {rating} / 5</Text>
            <Text style={styles.message}>{msg}</Text>

            <View style={styles.buttonContainer}>
                <Button title="Go Back" color={colors.accent} onPress={() => navigation.goBack()} />
            </View>
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
    place: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: colors.subtitle,
        marginBottom: 20,
    },
    rating: {
        fontSize: 18,
        color: colors.text,
        marginBottom: 6,
    },
    message: {
        fontSize: 16,
        color: colors.text,
        marginBottom: 24,
    },
    buttonContainer: {
        marginTop: 16,
    },
});
