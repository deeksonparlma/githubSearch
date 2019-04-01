import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css'],
  providers:[ProfileService]
})
export class ProfileInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
