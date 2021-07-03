import React from 'react';
import { Image } from 'react-native';
import { Layout, Text, Button, Spinner, List } from '@ui-kitten/components';
import { useGetPropertyByNameQuery } from '../features/properties/propertiesSlice';

export const DetailScreen = ({ navigation, route }) => {
    const { id } = route.params;

    const { data, isLoading, error } = useGetPropertyByNameQuery(id);
    if (isLoading) return <Spinner />
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>{data.title}</Text>
            <Text>{data.shortDescription}</Text>
            <Button onPress={() => navigation.navigate("Home")}
            >
                Home
            </Button>
            <List
                data={data.gallery}
                numColumns={3}
                renderItem={({ item }) => (
                    <Image source={item} style={{ width: 100, height: 100 }} />
                )}
            />
        </Layout>
    );
}