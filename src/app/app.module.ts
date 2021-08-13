import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { EditbookComponent } from './books/editbook/editbook.component';
import { LoginService } from './services/login.service';
import { BooksService } from './services/books.service';
import { RegisterUserService } from './services/register-user.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    HeaderComponent, NavigationComponent, HomeComponent, AboutusComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    ToastrModule.forRoot(),
    NgxPaginationModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
  ],
  providers: [LoginService, BooksService,RegisterUserService],
  bootstrap: [AppComponent],
  entryComponents: [EditbookComponent]
})
export class AppModule { }
