let data = localStorage.getItem('data');
data = (JSON.parse(data));
function calcTotalPrice(input) {
    const rentArr = [];
    let overlapPeriods = [];
    for (const line in input) {
        let { price_per_day, from, to, added } = input[line];
        overlapPeriods.map(x => {
            if (x.added == added) {
                x.price_per_day = price_per_day
            }
            if (!added) {
                price_per_day = 5;
            }
        })
        overlapPeriods.push({
            price_per_day,
            from,
            to,
            added: added || 'No info'
        });
    }

    for (const key in overlapPeriods) {
        let { price_per_day, from, to, added } = overlapPeriods[key];
        let dayTo = new Date(to);
        let dayFrom = new Date(from);
        let diffDays = Math.floor((dayTo - dayFrom) / (1000 * 3600 * 24));

        let totalPrice = diffDays * price_per_day;
        rentArr.push({
            startDay: from.trim(),
            endDay: to.trim(),
            totalPrice,
            added: added || 'noInfo'
        })
    }
    return rentArr;
}
export default calcTotalPrice(data);
