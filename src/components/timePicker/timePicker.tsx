import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Button, List } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { useState, useCallback } from "react";
import scheduleLogAtTime from "../../../utils/helpers/time";
import { Time } from "utils/models/time";
import useStore from "../../../store/store"; 
 
export default function TimePicker() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = React.useState<Time>({ hours: 0, minutes: 0, seconds: 0 });
  const state = useStore()
  const onDismiss = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  useEffect(() => {
    const updateCurrentTime = () => {
      const currTime = new Date();
      const hours = currTime.getHours();
      const minutes = currTime.getMinutes();
      const seconds = currTime.getSeconds();
      setTime({ hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCurrentTime, 1000);

    updateCurrentTime();

    return () => clearInterval(intervalId);
  }, []);


  const onConfirm = useCallback(
    ({ hours, minutes, seconds }: Time) => {
      console.log({ hours, minutes, seconds }) 
      state.increase({
        hours,
        minutes,
        seconds
      })
      scheduleLogAtTime(time);
      setVisible(false);
    },
    [setVisible]
  );

  const clearHistory = () => {
    state.clear()
  }


  console.log(state)
  return (
<View>
  <Button onPress={() => setVisible(true)} uppercase={false} mode="outlined">
    Pick time
  </Button>
  <Button onPress={() => clearHistory()} uppercase={false} mode="outlined">
    Clear time
  </Button>
  <TimePickerModal
    visible={visible}
    onDismiss={onDismiss}
    onConfirm={onConfirm}
    hours={time.hours}
    minutes={time.minutes}
  />
  {time.hours !== 0 && time.minutes !== 0 && (
    <Text>{time.hours}:{time.minutes}</Text>
  )}
  {state.time.map((timeItem, index) => (
    <List.Item key={index} title={`${timeItem.hours}:${timeItem.minutes}`} />
  ))}
</View>
  );
}