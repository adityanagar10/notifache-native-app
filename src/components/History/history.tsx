import { ScrollView, View } from "react-native";
import useStore from "../../../store/store";
import Card from "../Card/card";

export default function History(){
  const state = useStore()
  return(
    <View>
      <ScrollView>
      {state.time.map((timeItem, index) => (
      <Card title={`${timeItem.hours}:${timeItem.minutes}`} />
    ))}
      </ScrollView>
    </View>
  )
}