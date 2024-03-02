export interface IAuthForm {
  email: string
  password: string
}

export enum AUTH_ERRORS {
  invalid_email = 'auth/invalid-email',
  auth_invalid_credential = 'auth/invalid-credential'
}