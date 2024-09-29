import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
// import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './Services/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SignupComponent } from './Components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { CertificationsComponent } from './Components/certifications/certifications.component';
import { ExamdetailsComponent } from './Components/examdetails/examdetails.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { BookingComponent } from './Components/booking/booking.component';
import { StatusComponent } from './Components/status/status.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    LoginComponent,
    ForbiddenComponent,
    SignupComponent,
    ContactusComponent,
    AboutusComponent,
    CertificationsComponent,
    ExamdetailsComponent,
    AdminDashboardComponent,
    BookingComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    AuthGuard,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
