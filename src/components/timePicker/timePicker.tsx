import React, { useEffect, useState, useCallback } from 'react';
import { TimePickerModal } from 'react-native-paper-dates';
import scheduleLogAtTime, { formatTime } from '../../../utils/helpers/time';
import { Time } from 'utils/models/time';
import useStore from '../../../store/store';
import {
  ButtonContainer,
  CurrTimeText,
  OutlineButton,
  TimePickerContainer,
  ButtonText,
} from './timePicker.style';

export default function TimePicker() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = React.useState<Time>({ hours: 0, minutes: 0, seconds: 0 });
  const state = useStore();
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
  }, []);

  const onConfirm = useCallback(
    ({ hours, minutes, seconds }: Time) => {
      state.increase({
        hours,
        minutes,
        seconds,
      });
      scheduleLogAtTime({ hours, minutes, seconds });
      setVisible(false);
    },
    [setVisible]
  );

  const clearHistory = () => {
    state.clear();
  };

  return (
    <TimePickerContainer>
      <ButtonContainer>
        <OutlineButton onPress={() => setVisible(true)}>
          <ButtonText>Set Time</ButtonText>
        </OutlineButton>
        <OutlineButton onPress={() => clearHistory()}>
          <ButtonText>Clear Time</ButtonText>
        </OutlineButton>
      </ButtonContainer>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={time.hours}
        minutes={time.minutes}
      />
      {time.hours !== 0 && time.minutes !== 0 && <CurrTimeText>{formatTime(time)}</CurrTimeText>}
    </TimePickerContainer>
  );
}
