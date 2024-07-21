import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import categoryIcons from '../../data/categoryIcons.json';

const TransactionItem = ({ item, onPress }) => {
    const category = categoryIcons[item.category] || { icon: 'help-outline', color: '#7f8c8d' };

    return (
        <TouchableOpacity style={styles.transactionItem} onPress={onPress}>
            <View style={styles.transactionDetails}>
                <Icon
                    name={category.icon}
                    size={24}
                    color={category.color}
                    style={styles.icon}
                />
                <View style={styles.transactionInfo}>
                    <Text style={styles.transactionName}>{item.name}</Text>
                    <View style={styles.transactionMeta}>
                        <Text style={styles.transactionDate}>{item.date}</Text>
                        <Text style={styles.transactionAmount}>${item.amount}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    transactionItem: {
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    transactionDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 12,
    },
    transactionInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    transactionName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    transactionMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: '500',
        color: '#27ae60',
    },
    transactionDate: {
        fontSize: 14,
        color: '#777',
    },
});

export default TransactionItem;
