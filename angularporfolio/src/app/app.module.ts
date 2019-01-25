import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component'; // <== add the imports!


const Routes = [
    {
		path: '',
		component: HomeComponent,
	},
	{
		path: '',
		redirectTo: 'posts',
		pathMatch:  'full',
		
	},
	{
		path: 'posts',
		component: PostsComponent,
		
	},
	{
		path: 'login',
		component: LoginComponent,
		
	},
	{
		path: 'administrator',
		component: AdministratorComponent
	}
	,
	{
		path: 'register',
		component: RegisterComponent
	}
];

@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
    PostsComponent,
	LoginComponent,
	AdministratorComponent,
	RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	RouterModule.forRoot(Routes),
	HttpClientModule,
	BrowserModule, 
	FormsModule //<<<< and here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
