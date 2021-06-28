import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button, Icon, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import store from './app/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './app/features/counter/counterSlice';

const HomeScreen = ({ navigation }) => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>HOME</Text>
      <Text category='h2'>{count}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button
          accessoryLeft={(props) => <Icon {...props} name="plus-circle-outline" />}
          style={{ margin: 2 }}
          onPress={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          accessoryLeft={(props) => <Icon {...props} name="minus-circle-outline" />}
          style={{ margin: 2 }}
          appearance="outline"
          onPress={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </View>
      <Button onPress={() => navigation.navigate('Details')}
      >
        Details
      </Button>
    </Layout>
  )
}
const DetailScreen = ({ navigation }) => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>DETAILS</Text>
    <Button onPress={() => navigation.navigate("Home")}
    >
      Home
    </Button>
  </Layout>
);




const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>

  );
}

export default App;