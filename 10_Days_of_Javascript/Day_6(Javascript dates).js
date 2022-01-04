function getDayName(dateString) {
    let dayName;
    let allDayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    let date = new Date(dateString);
    dayName = allDayNames[date.getDay()];
    return dayName;
}