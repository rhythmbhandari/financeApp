import React from 'react';
import { View, StyleSheet } from 'react-native';
import { aggregateByCategory, calculateStatistics } from '../../utils/transactionUtils';
import PieChartComponent from './PieChartComponent';
import Legend from './Legend';
import SummaryStatistics from './SummaryStatistics';

const SummaryTab = ({ transactions }) => {
    const aggregatedData = aggregateByCategory(transactions);
    const statistics = calculateStatistics(transactions);

    return (
        <View style={styles.container}>
            <PieChartComponent data={aggregatedData} />
            <Legend data={aggregatedData} />
            <SummaryStatistics statistics={statistics} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
});

export default SummaryTab;
