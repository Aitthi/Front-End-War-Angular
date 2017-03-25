import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService {

  constructor(private _http:Http) { }

  getData(Repo){
    let url = "https://api.github.com/repos/"+Repo
    return this._http.get(url).map(res => res.json())
  }

  getDataUser(Repo){
    if(Repo == "angular"){
      Repo = "angular/angular"
    }else if(Repo == "react"){
      Repo = "facebook/react"
    }else if(Repo == "vue"){
      Repo = "vuejs/vue"
    }
    let url = "https://api.github.com/repos/"+Repo+'/stargazers?per_page=100'
    return this._http.get(url).map(res => res.json())
  }

}
