export interface Item {
  id: number,
  description: string
}

export interface ReduxStore {
  items: Array<Item>,
  aboutNathan: Array<string>
}