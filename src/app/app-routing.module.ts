import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EmpComponent } from './emp-list/emp/emp.component';


const routes: Routes = [
  {
    path: 'emp', component: EmpListComponent,
    children: [
      { path: ':id', component: EmpComponent }
    ]
  },
  {
    path: 'contactus', component: ContactUsComponent
  },
  {
    path: 'aboutme', component: AboutmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'ignore' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
