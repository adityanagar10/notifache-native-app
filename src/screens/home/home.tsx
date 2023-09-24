import TimePicker from "../../components/timePicker/timePicker";
import { View, Text } from "react-native";
import { HomeContainer, HomeText, HomeSubText } from "./home.style";
import History from "../../components/History/history";

export default function Home() {
  return (
    <HomeContainer> 
      <HomeText>Mindful Phone Use</HomeText>
      <HomeSubText>How long do you intend to use your phone for?</HomeSubText>
      <TimePicker />
      <HomeText>History</HomeText>
      <History />
    </HomeContainer>
  );
}