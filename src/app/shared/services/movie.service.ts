import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly serverUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.serverUrl}/api/movie`;
  constructor(private readonly http: HttpClient) { }

  public addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
  public deleteMovie(movie: Movie): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${movie.id}`);
  }
  public getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
  public updateMovie(movie: Movie): Observable<void> {
    return this.http.put<void>(this.apiUrl, movie);
  }
}
