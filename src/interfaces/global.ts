export interface IRequestUser {
  id: string
  is_super: boolean
}

export interface IQuery {
  take?: number
  skip?: number
  order?: 'module' | 'county'
  county_id?: string
  user_id?: string
}
