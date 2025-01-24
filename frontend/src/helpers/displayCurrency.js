const displayLKRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-LK', { // Use 'en-LK' for Sri Lanka locale
        style: 'currency',
        currency: 'LKR', // Set the currency to Sri Lankan Rupees
        minimumFractionDigits: 2 // Ensures two decimal places
    });

    return formatter.format(num);
};

export default displayLKRCurrency;
