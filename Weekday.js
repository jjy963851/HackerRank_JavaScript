function weekdayText(weekdays){


    return function getText(num){
        if(Number(num) > weekdays.length){
            throw new Error('Invalid weekday number')
        }
        return weekdays[Number(num)]

    }
}