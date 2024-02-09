export type IResponse<T = any> = T & {
  status: {
    type?: IResponseEnum
    title?: string
    message?: any
  }
  data?: any
}

export enum IResponseEnum {
  'success' = 'success',
  'error' = 'error',
  'warning' = 'warning',
  'info' = 'info',
}
