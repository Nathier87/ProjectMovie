import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../shared/models/movie';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  constructor() {}
  @Input()
  public movie: Movie;
  public thumbnail: string;
  public thumbnailUrl: string;

  @Output()
  public delete = new EventEmitter<Movie>();

  public onDeleteClick() {
    this.delete.emit(this.movie);
  }
  playMovie(thumbnail: string) {
    this.thumbnail = thumbnail;
    this.thumbnailUrl = 'https://www.youtube.com/embed/${this.thumbnail}';
  }
}
