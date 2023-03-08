import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  searchStr(search:string){
    let url: string = `https://www.omdbapi.com/?t=${search}&apikey=5439e0fc`
    return this.http.get(url);
  }
}
