import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestnewsService {

  constructor(public httpClient : HttpClient) { }
  getEgyptNews(){
    try{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=806796e0d26744d5bde91543c2f9d7ae")
    }catch(err:any){
      return err.message;

    }
    }
  }

