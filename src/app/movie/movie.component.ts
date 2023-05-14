import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

constructor(private http: HttpClient, private router: Router) {}
ngOnInit(): void {
  this.getTrendingMovies();
}
getTrendingMovies(){
  this.http.get('http://localhost:4200/assets/trending-movies.json').subscribe((movies) =>{
  this.trendingMovies= movies;
  console.log(this.trendingMovies)
  });
}
}