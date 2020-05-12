import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { MovieComponent } from './movie/movie.component';
import { ConfirmationModalComponent } from './modal/confirmation-modal.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { YoutubeComponent } from './youtube/youtube.component';
import { SafePipe } from './pipe/safe.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieFormComponent,
    MovieListComponent,
    AddMovieComponent,
    AdminComponent,
    LoginComponent,
    MovieUpdateComponent,
    MovieComponent,
    ConfirmationModalComponent,
    MovieSearchComponent,
    NavComponent,
    // YoutubeComponent,
    SafePipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
