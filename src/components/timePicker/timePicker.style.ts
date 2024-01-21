import styled from 'styled-components/native';
import { Button, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { List, Text } from 'react-native-paper';

export const TimePickerContainer = styled(View)`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
`;
export const CurrTimeText = styled(Text)`
  font-size: 56px;
  font-weight: bold;
  margin-top: 10%;
  text-align: center;
`;

export const HistoryTimeText = styled(List.Item)`
  font-size: 36px;
  font-weight: bold;
  margin-top: 10%;
  text-align: center;
`;

export const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center; /* Vertically center the buttons */
`;

export const OutlineButton = styled(TouchableOpacity)`
  border-color: black;
  border-width: 2px;
  border-radius: 5px;
  background-color: black;
  margin: 0 10px; /* Add margin to create space between buttons */
  padding: 10px;
`;

export const ButtonText = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;
