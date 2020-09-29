import {useState} from 'react';
import * as React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LottieView from 'lottie-react-native';

// HOME SCREEN //

function HomeScreen({navigation}) {
  return (
    <View style={styles.homeview}>
      <TouchableOpacity
        style={styles.listview1}
        onPress={() => {
          navigation.navigate('Ingredient');
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.listview}>Ingredients</Text>
          <Image
            style={{
              height: 100,
              width: 100,
              resizeMode: 'contain',
              margin: 30,
              alignSelf: 'center',
              marginBottom: -10,
            }}
            source={require('./Models/Ingredients.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listview1}
        onPress={() => {
          navigation.navigate('Dishes');
        }}>
        <View
          style={{
            flexDirection: 'column',
            borderColor: '#63CDFE',
          }}>
          <Text style={styles.listview}>Dishes</Text>
          <Image
            style={{
              height: 100,
              width: 100,
              resizeMode: 'contain',
              margin: 30,
              alignSelf: 'center',
              marginBottom: -10,
            }}
            source={require('./Models/Dishes.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

//INGREDIENTSCREEN//

function IngredientScreen({navigation}) {
  const [Idata, setIData] = useState([
    {id: '1', name: 'Potato', image: require('./Models/potato.png')},
    {id: '2', name: 'Cucumber', image: require('./Models/cucumber.png')},
    {id: '3', name: 'Cheese', image: require('./Models/cheese.png')},
    {id: '4', name: 'Butter', image: require('./Models/spread.png')},
    {id: '5', name: 'Bread', image: require('./Models/bread.png')},
    {id: '6', name: 'Rice', image: require('./Models/rice-bowl.png')},
    {id: '7', name: 'Curry', image: require('./Models/curry.png')},
    {id: '8', name: 'Ice-cream', image: require('./Models/ice-cream.png')},
    {id: '9', name: 'Chocolates', image: require('./Models/chocolate.png')},
    {id: '10', name: 'Nuggits', image: require('./Models/nuggets.png')},
    {id: '11', name: 'Patty', image: require('./Models/tikki.png')},
    {id: '12', name: 'Peas', image: require('./Models/peas.png')},
    {id: '13', name: 'buns', image: require('./Models/baked.png')},
  ]);
  const pressHandler = (id) => {
    console.log(id);
  };
  return (
    <View>
      <View style={{backgroundColor: '#121212', paddingBottom: 80}}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={Idata}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.IngredientList}
              onPress={() => pressHandler(item.id)}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.listview}>{item.name}</Text>
                <Image
                  style={{
                    height: 60,
                    width: 60,
                    resizeMode: 'contain',
                    marginLeft: 120,
                  }}
                  source={item.image}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <Button
        title="Go To Dishes"
        onPress={() => navigation.navigate('Dishes', {itemId: 11})}></Button>
      <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
    </View>
  );
}

//DISHES SCREEN//

function DishesScreen({navigation}) {
  return (
    <View style={styles.homeview}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Go back to home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => {
          navigation.navigate('CustomDishes');
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Go to Custom Dishes</Text>
      </TouchableOpacity>
    </View>
  );
}

//CUSTOM DISHES SCREEN//

function CustomDishesScreen({navigation}) {
  return (
    <View style={styles.homeview}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Go back to home</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

//NAVIGATION YAHA SAE START HOTA HAA//

function App() {
  <StatusBar backgroundColor="#141414" barStyle="light-content" />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Your Fridge',
            headerStyle: {
              backgroundColor: '#2F2F2F',
            },
            headerTintColor: '#63CDFE',
          }}
        />
        <Stack.Screen
          name="Ingredient"
          component={IngredientScreen}
          options={{
            title: 'Ingredients',
            headerStyle: {
              backgroundColor: '#2F2F2F',
            },
            headerTintColor: '#63CDFE',
          }}
        />
        <Stack.Screen
          name="Dishes"
          component={DishesScreen}
          options={{
            title: 'Dishes',
            headerStyle: {
              backgroundColor: '#2F2F2F',
            },
            headerTintColor: '#63CDFE',
          }}
        />
        <Stack.Screen
          name="CustomDishes"
          component={CustomDishesScreen}
          options={{
            title: 'Custom Dishes',
            headerStyle: {
              backgroundColor: '#2F2F2F',
            },
            headerTintColor: '#63CDFE',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//STYLES//

const styles = StyleSheet.create({
  homeButton: {
    borderRadius: 13,
    backgroundColor: '#2E2E2E',
    padding: 15,
    borderColor: '#63CDFE',
    borderWidth: 1.5,
    marginBottom: 20,
  },

  homeview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    flexDirection: 'column',
  },
  listview: {
    fontSize: 17,
    alignSelf: 'center',

    color: '#FFFFFF',
  },
  listview1: {
    marginHorizontal: 20,
    marginVertical: 13,
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#242424',
    color: '#FFFFFF',
    borderRadius: 12,
    borderColor: '#63CDFE',
    borderWidth: 1,
  },
  IngredientList: {
    marginHorizontal: 20,
    marginVertical: 13,
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#242424',
    color: '#FFFFFF',
    borderRadius: 12,
  },
});
