import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryStatistics = ({ statistics }) => (
    <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Summary Statistics</Text>
        <Text style={styles.summaryText}>Highest Spending: ${statistics.highestSpending.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Lowest Spending: ${statistics.lowestSpending.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Total Transactions: {statistics.totalTransactions}</Text>
        <Text style={styles.summaryText}>Total Expenses: ${statistics.totalExpenses.toFixed(2)}</Text>
    </View>
);

const styles = StyleSheet.create({
    summaryContainer: {
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        width: '100%',
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    summaryText: {
        fontSize: 16,
        color: '#333',
        marginVertical: 4,
    },
});

export default SummaryStatistics;
