import { Component, OnInit, Input } from '@angular/core';
import { GitService } from '../services/git.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  
  @Input() Repo:string;

  info:any;

  constructor(private _git:GitService) {
    
   }

  ngOnInit() {
    this._git.getData(this.Repo).subscribe(data =>{
      this.info = data
    })
    
  }

}