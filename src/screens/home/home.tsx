import TimePicker from "../../components/timePicker/timePicker";
import { View, Text } from "react-native";
import { HomeContainer, HomeText } from "./home.style";

export default function Home() {
  return (
    <HomeContainer>
      <HomeText>How long do you intend to use you're phone?</HomeText>
      <TimePicker />
    </HomeContainer>
  );
}