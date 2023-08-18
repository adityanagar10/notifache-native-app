import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { useState, useCallback } from "react";
import scheduleLogAtTime from "../../../utils/helpers/time";
import { Time } from "utils/models/time";

export default function TimePicker() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = React.useState<Time>({ hours: 0, minutes: 0, seconds: 0 });
  const onDismiss = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = useCallback(
    ({ hours, minutes, seconds }: Time) => {
      console.log({ hours, minutes, seconds })
      setTime({ hours, minutes, seconds });
      scheduleLogAtTime(time);
      setVisible(false);
    },
    [setVisible]
  );

  return (
    <View>
      <Button onPress={() => setVisible(true)} uppercase={false} mode="outlined">
        Pick time
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
    </View>
  );
}