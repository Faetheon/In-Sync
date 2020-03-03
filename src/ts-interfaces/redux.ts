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
  mission: string,
  likes: Array<string>,
  dream: string,
  education: Array<string>,
  aboutMe: string
}