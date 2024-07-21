import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SummaryTab from '../Components/Summary/SummaryTab';
import { commonHeaderOptions } from './Transactions';

const SummaryStack = createNativeStackNavigator();

export default function Summary({ transactions }) {
  return (
    <SummaryStack.Navigator>
      <SummaryStack.Screen
        name="SummaryTab"
        options={{ ...commonHeaderOptions, title: 'Summary' }}
      >
        {() => <SummaryTab transactions={transactions} />}
      </SummaryStack.Screen>
    </SummaryStack.Navigator>
  );
}
