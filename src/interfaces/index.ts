export interface PostI {
  userId: number,
  id: number,
  title: string,
  body: string,
  userName?: string,
  userNick?: string
}

export interface StateI {
  filter?: string,
  posts?: PostI[]
}

export interface ActionI {
  posts?: PostI[],
  value?: string
}
