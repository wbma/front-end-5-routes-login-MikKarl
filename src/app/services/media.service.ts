import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {

  username: string;
  password: string;

  constructor() { }

  login() {
    console.log('uname: ' + this.username);
    console.log('pwd: ' + this.password);
  }

}
