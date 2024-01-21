import { ScrollView, View } from 'react-native';
import useStore from '../../../store/store';
import Card from '../Card/card';
import { formatTime } from '../../../utils/helpers/time';

export default function History() {
  const state = useStore();
  return (
    <View>
      <ScrollView>
        {state.time.map((timeItem, index) => (
          <Card key={index} title={formatTime(timeItem)} />
        ))}
      </ScrollView>
    </View>
  );
}
