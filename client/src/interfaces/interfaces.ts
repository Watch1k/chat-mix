import { rootReducer } from '../store/reducers'

export type IState = ReturnType<typeof rootReducer>

export interface IMessage {
  name: string,
  message: string,
  time: string
}
