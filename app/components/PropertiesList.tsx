import { useNavigation } from '@react-navigation/native';
import { Card, Text, Avatar, ListItem, Button } from '@ui-kitten/components';
import React from 'react';
import { View, ActivityIndicator, FlatList, Image } from 'react-native';
import { useGetPropertiesQuery } from '../features/properties/propertiesSlice';

export interface PropertiesListProps {
}

export function PropertiesList(props: PropertiesListProps) {
    const navigation = useNavigation();
    const { data, isLoading, error } = useGetPropertiesQuery();

    console.log('data', data);
    if (isLoading) return <ActivityIndicator />
    return (
        <View>
            <Text>Properties List</Text>
            {/* <Card>
                    <Image source={item.banner} style={{ width: 100, height: 100 }} />
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                </Card> */}
            <FlatList data={data} renderItem={({ item }) => (
                <ListItem
                    title={item.title}
                    description={item.shortDescription}
                    accessoryLeft={(props) => (
                        <Avatar
                            {...props}
                            style={[props.style, { tintColor: null }]}
                            source={item.banner}
                        />
                    )}
                    accessoryRight={(props) => (
                        <Button size='tiny' onPress={() => navigation.navigate('Details', { id: item.id })}>
                            Details
                        </Button>
                    )}
                />
            )}
            />
        </View>
    );
}
