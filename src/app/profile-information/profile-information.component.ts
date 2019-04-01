import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { ProfileService } from '../profile.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css'],
  providers:[ProfileService]
})
export class ProfileInformationComponent implements OnInit {
  profile: any = [];
  repos: any = [];
  username: string;

  constructor(private detailspageServe: ProfileService) { }

  ngOnInit() {

  }

  findprofile() {
   this.detailspageServe.updateprofile(this.username);
   this.detailspageServe.getprofileInfo(this.username).subscribe(profile => {
     console.log(profile);
     this.profile = profile;
  });
   this.detailspageServe.getprofileRepos().subscribe(repos => {
     console.log(repos);
     this.repos = repos;
   });

  }
  }
