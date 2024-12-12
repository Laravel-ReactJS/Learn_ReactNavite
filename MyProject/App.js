import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeTabView from './HomeTabView';
import DetailList from './DetailList';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen({navigation}) {
  return (
    //<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      //<HomeTabView/>
    //</View>
    
    <View>
      <Button
        title='Store Data'
        onPress={() => {
          storeData('myName', 'Nguyen Hoai');
        }}
      />

      <Button
        title='Get Data'
        onPress={() => {
          getData('myName');
        }}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <DetailList/>
  );
}

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data is stored successfully');
  } catch (error) {
    console.error('Error when store data:', error);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log('Data retrieved successfully:', value);
  } catch (error) {
    console.error('Error while getting data', error);
  }
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={(route) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Details'){
              iconName = 'navicon'
            }

            return <Icon name={iconName} color={color} size={20}/>
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
        })}
      >   
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
