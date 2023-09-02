import { create } from 'zustand'
import { State } from 'utils/models/store'
import { Time } from 'utils/models/time'

const useStore = create<State>((set) => ({
  time: [],
  increase: (by: Time) => set((state) => ({ time: state.time.concat(by)})),
  clear: () => set((state) => ({
    time: []
  }))
}))

export default useStore