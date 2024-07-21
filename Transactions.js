import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TransactionList from '../Components/TransactionList'
import TransactionDetail from '../Components/TransactionDetail'

const TransactionStack = createNativeStackNavigator()

const commonHeaderOptions = {
    headerStyle: {
      backgroundColor: '#4A90E2', // More subtle blue for a professional look
    },
    headerTintColor: '#ffffff', // White color for text
    headerTitleAlign: 'center', // Center title for a clean appearance
    headerTitleStyle: {
      fontWeight: 'bold', // Bold title for emphasis
    },
  };

export default function Transactions({ transactions }) {
    return (
        <TransactionStack.Navigator>
            <TransactionStack.Screen
                name="TransactionList"
                options={{ ...commonHeaderOptions, title: 'Summary' }}
            >
                {() => <TransactionList transactions={transactions} />}
            </TransactionStack.Screen>
            <TransactionStack.Screen
                name="TransactionDetail"
                component={TransactionDetail}
                options={commonHeaderOptions}
            />
        </TransactionStack.Navigator>
    )
}
