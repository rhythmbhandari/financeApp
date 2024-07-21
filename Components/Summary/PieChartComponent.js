import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { G } from 'react-native-svg';
import categoryIcons from '../../data/categoryIcons.json';
import { StyleSheet, View } from 'react-native';

const PieChartComponent = ({ data }) => {
    const chartData = data.map(item => ({
        value: item.amount,
        svg: { fill: categoryIcons[item.category]?.color || '#d3d3d3' },
        key: item.category,
    }));

    return (
        <View style={styles.chartContainer}>
            <PieChart
                style={styles.pieChart}
                data={chartData}
                innerRadius={80}
                outerRadius={120}
                padAngle={0.02}
                valueAccessor={({ item }) => item.value}
            >
                <G />
            </PieChart>
        </View>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        alignItems: 'center',
        width: '100%',
    },
    pieChart: {
        height: 250,
        width: 250,
    },
});

export default PieChartComponent;
