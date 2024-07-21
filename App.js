import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Transactions from './Tabs/Transactions.js';
import Summary from './Tabs/Summary.js';
import data from './data/transaction.json';  

const App = () => {
    const Tab = createBottomTabNavigator();
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setTransactions(data);
            setLoading(false);
        }, 1000);  
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
    }
    return (
      <NavigationContainer>
          <Tab.Navigator
              screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                      const icons = {
                          Transactions: focused ? 'card' : 'card-outline',
                          Summary: focused ? 'pie-chart' : 'pie-chart-outline',
                      };
                      return (
                          <Ionicons
                              name={icons[route.name]}
                              size={size}
                              color={color}
                              style={styles.icon}
                          />
                      );
                  },
                  headerShown: false,
                  tabBarActiveTintColor: '#ffffff',
                  tabBarInactiveTintColor: '#d1d1d1',
                  tabBarStyle: styles.tabBarStyle,
                  tabBarLabelStyle: styles.tabBarLabelStyle,
              })}
          >
              <Tab.Screen name="Transactions">
                  {() => <Transactions transactions={transactions} />}
              </Tab.Screen>
              <Tab.Screen name="Summary">
                  {() => <Summary transactions={transactions} />}
              </Tab.Screen>
          </Tab.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
      backgroundColor: '#4a90e2',  // Bright blue for the tab bar
      borderTopWidth: 0,  // Remove border on top
      shadowColor: '#000',  // Add shadow effect
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 5,  // Elevation for Android shadow
  },
  tabBarLabelStyle: {
      fontSize: 12,  // Smaller label text
      fontWeight: 'bold',  // Make label text bold
  },
  icon: {
      marginBottom: -3,  // Adjust icon position
  },
  loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});

export default App;