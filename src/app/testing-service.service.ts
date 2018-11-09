import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingServiceService {

  fetchMessage(){
    return of('Message')
  }

  constructor() { }
}
