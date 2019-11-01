import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpComponent } from './emp-list/emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutmeComponent,
    EmpListComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
