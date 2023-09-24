import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent";
import { HistoryCard, CardTitle } from "./card.style";

interface CardProps{
  title: string
  subtitle?: string
}

export default function Card({title, subtitle}: CardProps){
  return(
    <HistoryCard>
      <CardTitle>{title}</CardTitle>
    </HistoryCard>
      // <HistoryCardTitle title={title} />
  )
}