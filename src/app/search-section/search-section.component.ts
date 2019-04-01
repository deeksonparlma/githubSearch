import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css'],
  providers:[ ProfileService],
})
export class SearchSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
