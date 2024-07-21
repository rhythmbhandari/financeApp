import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TransactionItem from './TransactionItem';

const TransactionTab = ({ transactions }) => {
    const navigation = useNavigation();

    const handlePress = (item) => {
        navigation.navigate('TransactionDetail', { transaction: item });
    };

    const renderItem = ({ item }) => (
        <TransactionItem item={item} onPress={() => handlePress(item)} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 10,
    },
});

export default TransactionTab;
