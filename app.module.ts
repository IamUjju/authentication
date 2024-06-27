import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { DataService } from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthguardService } from './services/authguard.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';

const appRoute : Routes =[
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'welcome', component:WelcomeComponent, canActivate:[AuthguardService]},
  {path: 'userList', component:UserListComponent, canActivate:[AuthguardService]},
  {path: '**', redirectTo: 'login'}
]
@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    UserListComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [DataService,LoginService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule {}