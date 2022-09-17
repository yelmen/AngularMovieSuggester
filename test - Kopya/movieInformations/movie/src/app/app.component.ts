import { Component ,OnInit} from '@angular/core';
import { MovieData } from './models/movie.model';
import { ServiceService } from './service.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private movieService:ServiceService){}
  myForm=new FormGroup({
    start_year:new FormControl(null,[Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.min(1980), Validators.max(2022)]),
    end_year:new FormControl(null,[Validators.required,Validators.minLength(4), Validators.maxLength(4), Validators.min(1980), Validators.max(2022)]),
    min_imdb:new FormControl(null,[Validators.required, Validators.min(1),Validators.max(10)]),
    max_imdb:new FormControl(null,[Validators.required, Validators.max(10),Validators.min(1)]),
    genre:new FormControl(null,[Validators.required]),
    language:new FormControl(null,[Validators.required]),
    type:new FormControl(null,[Validators.required])

  })
  start_year:number=2000;
  end_year:number=2022;
  min_imdb:number=1;
  max_imdb:number=9;
  genre:string="action";
  language:string="english";
  type:string="movie";
  movieData?:MovieData;


  ngOnInit(): void {
    this.onSubmit(this.start_year,this.end_year,this.min_imdb,this.max_imdb,this.genre,this.language,this.type);
    this.start_year=1981;
    this.end_year=2022;
    this.min_imdb=1;
    this.max_imdb=10;
    this.genre="action";
    this.language="english";
    this.type="movie";
  }
  onSubmit(start_year:number,end_year:number,min_imdb:number,max_imdb:number,genre:string,language:string,type:string){
    this.movieService.getMovieData(start_year,end_year,min_imdb,max_imdb,genre,language,type).subscribe({
      next:(response)=>{
        this.movieData=response;
        console.log(response);
      }
    });
  }
}


//   ngOnInit(): void {
//     this.getMovieDatas(this.start_year,this.end_year,this.min_imdb,this.max_imdb,this.genre,this.language,this.type);
//     this.start_year=0;
//     this.end_year=0;
//     this.min_imdb=0;
//     this.max_imdb=0;
//     this.genre="";
//     this.language="";
//     this.type="";
//   }
//   onSubmit(){
//     this.getMovieDatas(this.start_year,this.end_year,this.min_imdb,this.max_imdb,this.genre,this.language,this.type);

//   }
//   private getMovieDatas(start_year:number,end_year:number,min_imdb:number,max_imdb:number,genre:string,language:string,type:string){
//     this.movieService.getMovieData(start_year,end_year,min_imdb,max_imdb,genre,language,type).subscribe({
//       next:(response)=>{
//         this.movieData=response;
//         console.log(response);
//       }
//     });
//   }
// }



