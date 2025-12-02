import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { colors } from '../constants/colors';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: colors.card },
                headerTintColor: colors.text,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Travel Guide' }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Destination Details' }}
            />
        </Stack.Navigator>
    );
}
