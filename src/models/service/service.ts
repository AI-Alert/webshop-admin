export interface ILoginUser {
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
}

export interface IReturnPromise {
  data: {
    status: boolean,
    value: ILoginUser
    accessToken: string,
    refreshToken: string,
    statusCode: number,
  }
}
