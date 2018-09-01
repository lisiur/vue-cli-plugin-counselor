type CustomError = Error | Definitions.BaseResponse | Boolean
type AsyncResponse = Promise<[CustomError, any]>
