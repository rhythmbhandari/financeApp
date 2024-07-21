import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import categoryIcons from '../../data/categoryIcons.json';

const Legend = ({ data }) => (
    <View style={styles.legendContainer}>
        {data.map((item, index) => (
            <View key={index} style={styles.legendItem}>
                <MaterialIcons
                    name={categoryIcons[item.category]?.icon || 'help'}
                    size={20}
                    color={categoryIcons[item.category]?.color || '#d3d3d3'}
                    style={styles.legendIcon}
                />
                <Text style={styles.legendText}>{item.category}</Text>
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    legendContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        marginBottom: 10,
    },
    legendIcon: {
        marginRight: 8,
    },
    legendText: {
        fontSize: 14,
        color: '#333',
    },
});

export default Legend;
