export interface Domain {
  createdAt: string
  name: string
  active: boolean
  owner: {
    id: string
    email: string
  }
}
