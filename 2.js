
class Speed {
    constructor() {
        this.wolfSpeed = 25; 
        this.rabbitSpeed = 18;
    }

    timeToCatch(distance) {
        const timeInMinutes = (distance / (this.wolfSpeed - this.rabbitSpeed)) * 60;
        return timeInMinutes;
    }
}
