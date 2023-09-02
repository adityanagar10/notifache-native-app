import { Time } from "./time"

export interface State {
  time: Time[]
  increase: (by: Time) => void
  clear: () => void
}