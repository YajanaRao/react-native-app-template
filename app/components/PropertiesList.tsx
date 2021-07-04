import { useNavigation } from '@react-navigation/native';
import { Card, Text, Avatar, ListItem, Button, Divider, List, Layout } from '@ui-kitten/components';
import React from 'react';
import { View, ActivityIndicator, FlatList, Image, Platform } from 'react-native';
import { useGetPropertiesQuery } from '../features/properties/propertiesSlice';

export interface PropertiesListProps {
}

export function PropertiesList(props: PropertiesListProps) {
    const navigation = useNavigation();
    const { data, isLoading, error } = useGetPropertiesQuery();

    console.log('data', data);
    if (isLoading) return <ActivityIndicator />

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Something went wrong</Text>
                <Text>{error.message}</Text>
                {/* <Button
                    style={{ margin: 12 }}
                    onPress={() => navigation.navigate("Home")}
                >
                    Home
                </Button> */}
            </View>
        )
    }
    return (
        <Layout style={{ margin: 12 }}>
            <Text category='h2' style={{ textAlign: "center" }}>Properties</Text>
            <FlatList
                data={data}
                ItemSeparatorComponent={Divider}
                numColumns={Platform.OS === "web" ? 2 : 1}
                renderItem={({ item }) => (
                    <Card
                        header={() => (
                            <Image source={item.banner} style={{ width: 300, height: 200 }} />
                        )}
                        footer={() => (
                            <View style={{ marginHorizontal: 4 }}>

                                <Button onPress={() => navigation.navigate('Details', { id: item.id })}>
                                    Details
                                </Button>
                            </View>
                        )}
                        style={{ width: 300, margin: 12 }}
                    >
                        <Text category='h4'>{item.title}</Text>
                        <Text>{item.shortDescription}</Text>
                    </Card>
                )}
            />
        </Layout>
    );
}
