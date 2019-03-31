import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// import { Observable} from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';

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
    // Observable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
