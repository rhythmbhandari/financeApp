import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TransactionsList from '../Components/Transactions/TransactionsList'
import TransactionDetail from '../Components/Detail/TransactionDetail'

const TransactionStack = createNativeStackNavigator()

export const commonHeaderOptions = {
    headerStyle: {
      backgroundColor: '#4A90E2',
    },
    headerTintColor: '#ffffff', 
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

export default function Transactions({ transactions }) {
    return (
        <TransactionStack.Navigator>
            <TransactionStack.Screen
                name="TransactionsList"
                options={{ ...commonHeaderOptions, title: 'Transactions' }}
            >
                {() => <TransactionsList transactions={transactions} />}
            </TransactionStack.Screen>
            <TransactionStack.Screen
                name="TransactionDetail"
                component={TransactionDetail}
                options={commonHeaderOptions}
            />
        </TransactionStack.Navigator>
    )
}
