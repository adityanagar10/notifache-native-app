import styled from "styled-components/native";
import { View, Text } from "react-native";

export const HomeContainer = styled(View)`
  flex: 1;
  justify-content: flex-start;
  padding: 0 10px;
  flex-direction: column;
`;

export const HomeText = styled(Text)`
  font-size: 36px;
  font-weight: bold;
  margin-top: 10%;
  text-align: left;
`;

export const HomeSubText = styled(Text)`
  font-size: 24px;
  font-weight: normal;
  margin-top: 10%;
`;