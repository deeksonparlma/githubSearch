import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// import { Observable} from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { ProfileService } from './profile.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchSectionComponent,
    ProfileSectionComponent,
    ProfileInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // Observable
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
