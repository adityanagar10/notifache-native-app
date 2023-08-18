export interface Time {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export default function scheduleLogAtTime(targetTime: Time): void {
    const currentDate: Date = new Date();
    
    const targetDate: Date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        targetTime.hours || 0,
        targetTime.minutes || 0,
        targetTime.seconds || 0
    );
    
    if (targetDate <= currentDate) {
        targetDate.setDate(targetDate.getDate() + 1);
    }
    
    const timeDiff: number = targetDate.getTime() - currentDate.getTime();

    console.log(timeDiff)
    
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
        console.log("Notification sent");
    }, timeDiff);
}