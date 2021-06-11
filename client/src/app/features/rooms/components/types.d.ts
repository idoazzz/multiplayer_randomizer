export interface Point {
    x: number
    y: number
}

export interface User { 
  name: string
  color: string
  location: Point
}

export interface RoomState {
  id: string,
  winner: string,
  users: User[]
}