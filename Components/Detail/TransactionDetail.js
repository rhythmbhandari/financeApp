import React from 'react';
import { View, StyleSheet } from 'react-native';
import DetailRow from './DetailRow'; 

const TransactionDetail = ({ route }) => {
    const { transaction } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <DetailRow 
                    icon="person-outline"
                    label="Name"
                    value={transaction.name}
                />
                <DetailRow 
                    icon="cash-outline"
                    label="Amount"
                    value={`$${transaction.amount}`}
                />
                <DetailRow 
                    icon="calendar-outline"
                    label="Date"
                    value={transaction.date}
                />
                <DetailRow 
                    icon="pricetag-outline"
                    label="Category"
                    value={transaction.category}
                />
                <DetailRow 
                    icon="document-text-outline"
                    label="Notes"
                    value={transaction.notes}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    details: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default TransactionDetail;
