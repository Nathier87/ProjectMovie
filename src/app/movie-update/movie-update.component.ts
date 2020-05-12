import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/models/movie';


@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css'],
})
export class MovieUpdateComponent implements OnInit {
  public movieTitle: string;
  public movieYear: number;
  public movieRating: number;
  public movieThumbnail: string;
  public movieGenre: string;
  public movieId: number;

  constructor(
    private readonly movieservice: MovieService,
    private readonly activeatedRoute: ActivatedRoute
  ) {}

  public updateMovie(): void {
    const newMovie: Movie = {
      rating: this.movieRating,
      title: this.movieTitle,
      year: this.movieYear,
      thumbnail: this.movieThumbnail,
      genre:this.movieGenre,
      id: this.movieId,
    };
    this.movieservice.updateMovie(newMovie).subscribe(() => {
      alert(`We update a movie with id ${this.movieId}!`);
    });
  }

  ngOnInit(): void {
    this.movieId = Number(this.activeatedRoute.snapshot.paramMap.get('id'));
    this.movieservice.getMovie(this.movieId).subscribe(
      (movie) => {
        this.movieTitle = movie.title;
        this.movieYear = movie.year;
        this.movieRating = movie.rating;
        this.movieThumbnail = movie.thumbnail;
        this.movieGenre = movie.genre;
      },
      ( error ) => {
        alert(
          'we couldnt find the movie you are looking for!The erroris: ${ error }'
        );
      }
    );
  }
}
