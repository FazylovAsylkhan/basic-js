const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
        let monthNumber = new Date(date).getMonth()
        let arrMonths = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall','winter',];

        if (date == undefined) return 'Unable to determine the time of year!';
        if (isNaN(date.getTime())) {
            throw new Error('Error');
        }

        return arrMonths[monthNumber];
};
