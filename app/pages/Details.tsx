import React from 'react';
import { Image, View } from 'react-native';
import { Layout, Text, Button, Spinner, List } from '@ui-kitten/components';
import { useGetPropertyByNameQuery } from '../features/properties/propertiesSlice';

export const DetailScreen = ({ navigation, route }) => {
    const { id } = route.params;

    const { data, isLoading, error } = useGetPropertyByNameQuery(id);
    if (isLoading) return <Spinner />

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Something went wrong</Text>
                <Text>{error.message}</Text>
                <Button
                    style={{ margin: 12 }}
                    onPress={() => navigation.navigate("Home")}
                >
                    Home
                </Button>
            </View>
        )
    }
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={data.banner} style={{ height: 350, width: "100%" }} />
            <View style={{ width: "100%" }}>
                <List
                    data={data.gallery}
                    // numColumns={3}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Image source={item} style={{ width: 150, height: 200, margin: 12, borderRadius: 4 }} />
                    )}
                />
            </View>
            <View style={{ width: "100%", padding: 12 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
                    <Text category='h1'>{data.title}</Text>
                    <Button onPress={() => navigation.navigate("Home")}
                    >
                        Book Ticket
                    </Button>
                </View>
                <Text>{data.shortDescription}</Text>
                <Text>{data.description}</Text>
            </View>
        </Layout>
    );
}