import { addDays, set, isBefore, differenceInSeconds, getTime } from 'date-fns';
import { utcToZonedTime, format } from 'date-fns-tz';

export interface Time {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export function formatTime(time: Partial<Time>) {
  const formattedHours = (time.hours ?? 0) < 10 ? '0' + time.hours : time.hours;
  const formattedMinutes = (time.minutes ?? 0) < 10 ? '0' + time.minutes : time.minutes;

  return `${formattedHours}:${formattedMinutes}`;
}

export default function scheduleLogAtTime(targetTime: Time): void {
  const timeZone = 'Asia/Calcutta';

  const currentDate: Date = new Date();

  // Create a Date object for targetTime
  const targetDate: Date = new Date(currentDate);
  targetDate.setHours(targetTime.hours || 0, targetTime.minutes || 0, targetTime.seconds || 0, 0);

  // Format currentDate and targetDate to match the desired output format
  const formattedCurrentDate: string = currentDate.toLocaleString('en-US', { timeZone });
  const formattedTargetDate: string = targetDate.toLocaleString('en-US', { timeZone });

  // Format time portion only for time zone comparison
  const currentTimeInTimeZone = utcToZonedTime(currentDate, timeZone);
  const targetTimeInTimeZone = utcToZonedTime(targetDate, timeZone);

  // Calculate the time difference in milliseconds
  const timeDifference: number = targetTimeInTimeZone.getTime() - currentTimeInTimeZone.getTime();

  const timeoutId: NodeJS.Timeout = setTimeout(() => {
    console.log('Notification sent');
  }, timeDifference);
}
