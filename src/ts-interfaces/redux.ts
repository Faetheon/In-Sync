export interface Item {
  id: number,
  description: string
}

export interface ReduxStore {
  items: Array<Item>,
  aboutNathan: Nathan
}

export interface Nathan {
  name: string,
  age: number,
}