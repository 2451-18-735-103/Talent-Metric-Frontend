import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './Components/admin/admin.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { UserComponent } from './Components/user/user.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { CertificationsComponent } from './Components/certifications/certifications.component';
import { ExamdetailsComponent } from './Components/examdetails/examdetails.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'user',component:UserComponent,canActivate:[AuthGuard],data:{roles:['User']}},
  {path:'login',component:LoginComponent},
  {path: 'forbidden',component:ForbiddenComponent},
  {path:'signup',component:SignupComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'certifications', component:CertificationsComponent},
  {path: 'examdetails', component:ExamdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
