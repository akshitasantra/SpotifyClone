import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Entypo,
    EvilIcons,
    MaterialCommunityIcons,
    FontAwesome5 } from '@expo/vector-icons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Entypo name="home" size={30} style={{ marginBottom: -3}} color={color}/>,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />

            <Tabs.Screen
                name="AlbumScreen"
                options={{
                    title: 'AlbumScreen',
                }}
            />

            <Tabs.Screen
                name="two"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color }) =>  <EvilIcons name="search" size={30} style={{ marginBottom: -3}} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="three"
                options={{
                    title: 'Your Library',
                    tabBarIcon: ({ color }) =>  <MaterialCommunityIcons name="bookshelf" size={30} style={{ marginBottom: -3}} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="four"
                options={{
                    title: 'Premium',
                    tabBarIcon: ({ color }) =>  <FontAwesome5 name="spotify" size={30} style={{ marginBottom: -3}} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="_AlbumScreen"
                options={{
                    href: null, // hides it from tab bar
                }}
            />
        </Tabs>
    );
}