class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (time && callback) {
            if (this.alarmCollection.find((element) => element.time === time)) {
                console.warn('Уже присутствует звонок на это время');  
            } 
                this.alarmCollection.push({callback: callback, time: time, canCall: true })
            
        } else {
            throw new Error('Отсутствуют обязательные аргументы')
        }
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter((element) => element.time !== time)
    }

    getCurrentFormattedTime() {
        const currentTime = new Date;
        let hours = currentTime.getHours();
        let minute = currentTime.getMinutes();
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }

        return `${hours}:${minute}`;
    }

    start() {
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((element) => { 
                if (element.time === this.getCurrentFormattedTime() && element.canCall) {
                   element.canCall = false;
                   element.callback(); 
                }
            })  
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => element.canCall = true)
    }

    clearAlarms() { 
        this.stop();
        this.alarmCollection = [];
    }
}