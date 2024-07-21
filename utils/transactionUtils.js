export const aggregateByCategory = (transactions) => {
    const categoryMap = transactions.reduce((acc, transaction) => {
        const { category, amount } = transaction;
        acc[category] = (acc[category] || 0) + amount;
        return acc;
    }, {});

    return Object.keys(categoryMap).map(category => ({
        category,
        amount: categoryMap[category]
    }));
};

export const calculateStatistics = (transactions) => {
    const amounts = transactions.map(t => t.amount);
    const highestSpending = Math.max(...amounts);
    const lowestSpending = Math.min(...amounts);
    const totalTransactions = transactions.length;
    const totalExpenses = amounts.reduce((sum, amount) => sum + amount, 0);

    return {
        highestSpending,
        lowestSpending,
        totalTransactions,
        totalExpenses
    };
};
