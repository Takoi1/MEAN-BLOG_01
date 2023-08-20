import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  id:any;
  author:any;
  articles : any;
  constructor( private act: ActivatedRoute , private _auth: AuthService , private data: DataService){}



  ngOnInit(): void {
    this.id =this.act.snapshot.paramMap.get('id');
    this._auth.getById(this.id)
      .subscribe(
        res=>{
          this.author = res;
          console.log(this.author);
        }
      );
      this.data.getArticleByIdAuthor(this.id)
        .subscribe(
          (          res: any)=>{
            this.articles = res;
          },
          (          err: any)=>{
            console.log(err);
          }
        )




      
  }

}
