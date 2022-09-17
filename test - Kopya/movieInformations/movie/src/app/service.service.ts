import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {MovieData} from './models/movie.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient){}

  getMovieData(start_year:number,end_year:number,min_imdb:number,max_imdb:number,genre:string,language:string,type:string):Observable<MovieData>{
    return this.http.get<MovieData>(environment.baseUrl,{
      headers: new HttpHeaders().set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHedarValue),
      params:new HttpParams().set('start_year',start_year).set('end_year',end_year)
      .set('min_imdb',min_imdb).set('max_imdb',max_imdb)
      .set('genre',genre).set('language',language)
      .set('type',type)
    })
  }
}
