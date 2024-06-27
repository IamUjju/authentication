import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http:HttpClient) { 
    console.log('Dat service connected...')
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(map((res:any)=>res));
  }
}
