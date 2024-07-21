import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailRow = ({ icon, label, value }) => (
    <View style={styles.row}>
        <Ionicons name={icon} size={24} color="#5749a8" />
        <Text style={styles.detailText}>{label}: {value}</Text>
    </View>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    detailText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#333',
    },
});

export default DetailRow;
