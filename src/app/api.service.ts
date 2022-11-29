import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchPassnger=()=>{
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }

  fetchUsPublic=()=>{
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
  }
  fetchUserInfo=()=>{
    return this.http.get("https://reqres.in/api/users?page=1");
  }
}
