import styled from "styled-components/native";
import {View} from "react-native"
import { Button, List, Text } from "react-native-paper";

export const TimePickerContainer = styled(View)`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
`
export const CurrTimeText = styled(Text)`
  font-size: 56px;
  font-weight: bold;
  margin-top: 10%;
  text-align: center;
`

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
`

export const OutlineButton = styled(Button)`
  color: black !important;
  border-color: black;
  font-size: 36px;
  border-radius: 5px;
  margin: 0 10px; /* Add margin to create space between buttons */
`
