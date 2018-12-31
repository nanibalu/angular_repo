import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class DataService {

  body={
    "queryName":"",
    "dbName":""
  };

  constructor(private _http:HttpClient) { }

 downloadURL="http://localhost:2019/download/file"
  getData(){
     this._http.post(this.downloadURL,this.body,httpOptions);
  }


}
