import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient){}
  userName="";
  githubData:any="";
  avatarUrl="./assets/avatar.png";


userLookup(){
this.http.get("https://api.github.com/users/"+this.userName+"?access_token="+environment.access_token)
// .subscribe(
//   (response:Response)=>{
//     const userData=response.json();
//     this.githubData=userData;
//
//     this.avatarUrl=userData.avatar_url;
//     console.log(userData);
//   }
// )




}
}
