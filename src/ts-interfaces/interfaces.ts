export interface Item {
  id: number,
  description: string
}

export interface ReduxStore {
  items: Array<Item>,
  aboutNathan: Nathan
}

export interface Skill {
  name: string,
  parent?: string
}

export interface Nathan {
  name: string,
  age: number,
  skills: Array<Skill>
}