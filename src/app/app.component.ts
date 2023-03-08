import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ensemble OMDB';
  search = "";
  movie:any;
  spinner:boolean = false;
  constructor(private api:ApiService){}
  searchOmdb(){
    console.log(this.search);
    this.spinner = true;
    this.api.searchStr(this.search).subscribe((res)=>{
      this.spinner = false;
      this.movie = res;
    })
  }
}
