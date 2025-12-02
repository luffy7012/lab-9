import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sehirleri Kesfet</Text>
            <Text style={styles.subtitle}>Detaylarini gormek için bir sehir sec:</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Ankara"
                    color={colors.accent}
                    onPress={() => navigation.navigate('Details', {
                        place: 'Ankara',
                        rating: 2,
                        description: 'Sadece bakanlıkların bulunduğu bir şehir.'
                    })}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Izmir"
                    color={colors.accent}
                    onPress={() => navigation.navigate('Details', {
                        place: 'Izmir',
                        rating: 1,
                        description: 'Abartılmış bir şehir.'
                    })}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Istanbul"
                    color={colors.accent}
                    onPress={() => navigation.navigate('Details', {
                        place: 'Istanbul',
                        rating: 5,
                        description: 'Dünyanın en iyi yeri.'
                    })}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 40,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 8
    },
    subtitle: {
        fontSize: 16,
        color: colors.subtitle,
        marginBottom: 20
    },
    buttonContainer: {
        marginVertical: 8
    }
});
