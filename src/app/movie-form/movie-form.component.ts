import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/models/movie';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit, OnDestroy {
  public movieTitle: string;
  public movieYear: number;
  public movieRating: number;
  public movieThumbnail: string;
  public movieGenre: string;

  public subscription: Subscription;

  public addMovie(): void {
    const newMovie: Movie = {
      rating: this.movieRating,
      title: this.movieTitle,
      year: this.movieYear,
      thumbnail: this.movieThumbnail,
      genre: this.movieGenre,
    };
    this.subscription = this.movieService
      .addMovie(newMovie)
      .subscribe((movie) => {
        alert('We Add Movie With id ${movie.id}!');
      });
  }
  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

