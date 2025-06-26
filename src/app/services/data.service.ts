import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string =  'http://localhost:8081/'

  constructor(private http: HttpClient) { }

  getDataByGender(year: number): Observable<any>{
    return this.http.get<any>(`${this.url}getByGender/${year}`)
  }

  getDataByAge(year: number): Observable<any>{
    return this.http.get<any>(`${this.url}getByAge/${year}`)
  }

  getDataByCareer(year: number): Observable<any>{
    return this.http.get<any>(`${this.url}getByCareer/${year}`)
  }

  getDataByHighSchool(year: number): Observable<any>{
    return this.http.get<any>(`${this.url}getByHighSchool/${year}`)
  }

   getDataByCity(year: number): Observable<any>{
    return this.http.get<any>(`${this.url}getByCity/${year}`)
  }

  getDataByGrades(year: number): Observable<any>{
    return this.http.get<any>(`${this.url}getByGrades/${year}`)
  }

  getDataByStatus(year: number): Observable<any>{
    return this.http.get<any>(`${this.url}getByStatus/${year}`)
  }

  getDataByAvgAge(year: number): Observable<any>{
    return this.http.get<any>(`${this.url}getByAvgAge/${year}`)
  }



}
