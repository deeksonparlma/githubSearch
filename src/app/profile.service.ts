import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProfileService {

  private username: string;

  constructor(private http: HttpClient) {
      this.username = 'deeksonparlma';
 }
 getprofileInfo(username) {
   console.log(this.username);

   return this.http.get(environment.apiUrl+ this.username + environment.token);

 }
 getprofileRepos() {

return this.http.get(environment.apiUrl+ this.username );


   }

 updateprofile(username: string) {
   this.username = username;
 }

}
