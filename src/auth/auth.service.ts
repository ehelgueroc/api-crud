import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signIn() {
    return { message: 'You were successfully signed in!' };
  }

  signUp() {
    return { message: 'Welcome to Bookly.com' };
  }
}
