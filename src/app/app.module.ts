import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PostListComponent } from './post-list/post-list.component';
import { DetailPostComponent } from './post-list/detail-post/detail-post.component';
import { PostFormComponent } from './post-list/post-form/post-form.component';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './services/auth.service';
import {PostsService} from './services/posts.service';
import {AuthGuardService} from './services/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
const appRoutes: Routes = [
  {path: 'auth/sigup', component: SignupComponent},
  {path: 'auth/sigin', component: SigninComponent},
  {path: 'posts', canActivate:  [AuthGuardService], component: PostListComponent},
  {path: 'posts/new', canActivate:  [AuthGuardService],  component: PostFormComponent},
  {path: 'posts/view/: id', component: DetailPostComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '**', redirectTo: 'posts'}
  ]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PostListComponent,
    DetailPostComponent,
    PostFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    PostsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
