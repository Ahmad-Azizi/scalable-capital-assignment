const mapDate = ({ t, mu, sigma, fee, initialSum, monthlySum }) => {
    const yearlyReturn = mu - fee;
    const monthlyReturn = yearlyReturn / 12;
    const month = t * 12;
    const median = initialSum * Math.exp(yearlyReturn * t) + monthlySum * Math.exp(monthlyReturn * (month - Math.floor(month))) * (Math.exp(monthlyReturn * Math.floor(month)) - 1.0) / (Math.exp(monthlyReturn) - 1.0);

    return {
        median: median,
        upper95: Math.exp(Math.log(median) + Math.sqrt(t) * sigma * 1.645),
        lower05: Math.exp(Math.log(median) - Math.sqrt(t) * sigma * 1.645)
    };
};

const calculateTimeSeries = ({ years, mu, sigma, fee, initialSum, monthlySum }) => {
    const series = [];

    for (let i = 0; i <= 12 * years; i++) {
        series.push(mapDate({ t: i / 12, mu, sigma, fee, initialSum, monthlySum }));
    }

    return series;
};

export { calculateTimeSeries };