export interface IRequestUser {
  id: string
}

export interface IQuery {
  take?: number
  skip?: number
  order?: 'module' | 'county'
  county_id?: string
  user_id?: string
}
