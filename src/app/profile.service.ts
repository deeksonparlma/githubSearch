import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { User } from './user';
import{Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import{environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  username:string="";
  baseUrl:string="https://api.github.com/"
    constructor(private http:HttpClient) { }
    getRepos(UserName:string): Observable<Repository[]>{
      return this.http.get<Repository[]>(environment.apiUrl+this.username+environment.token)
    }
    OnInit(){
      this.username="deeksonparlma"
    }
  }
