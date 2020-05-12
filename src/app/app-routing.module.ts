import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { LoginGuard } from './shared/services/login.guard';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
// import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'nav', component: NavComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies/add', component: MovieFormComponent },
  { path: 'movies/edit/:id', component: MovieUpdateComponent },
  { path: 'login', component: LoginComponent },
  // {path: 'youtube', component : YoutubeComponent},
  { path: 'admin', component: AdminComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
