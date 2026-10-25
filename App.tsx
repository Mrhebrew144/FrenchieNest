import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme/colors';
import { HomeScreen } from './screens/HomeScreen';
import { PuppiesScreen } from './screens/PuppiesScreen';
import { ParentScreen } from './screens/ParentScreen';
import { HealthScreen } from './screens/HealthScreen';
import { RemindersScreen } from './screens/RemindersScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.softWhite,
            borderTopColor: colors.border,
            height: 72,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: colors.deepBrown,
          tabBarInactiveTintColor: colors.warmGray,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Puppies') iconName = 'paw-outline';
            else if (route.name === 'Parent') iconName = 'heart-outline';
            else if (route.name === 'Health') iconName = 'medical-outline';
            else if (route.name === 'Reminders') iconName = 'alarm-outline';
            else iconName = 'person-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Puppies" component={PuppiesScreen} />
        <Tab.Screen name="Parent" component={ParentScreen} />
        <Tab.Screen name="Health" component={HealthScreen} />
        <Tab.Screen name="Reminders" component={RemindersScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
