import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Client_inferface } from './../Interface/Client_interface';
import { Client } from './../entity/Client';

@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {

  constructor(private http: HttpClient) { }
  url : string = 'http://localhost:8080'
  liste_all(){
    return this.http.get<[Client_inferface]>(this.url)
  }

  get_client_By_id(id){

    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(id);
    return this.http.post<Client_inferface>(this.url+'/get_by_id', body,{'headers':headers})

  }

  update(client){

    const headers = { 'content-type': 'application/json'}
    const body = client;
    return this.http.post(this.url+'/update_client',body,{'headers':headers})

  }

  create_client(client){

    const headers = { 'content-type': 'application/json'};
    const body = client;
    return this.http.post(this.url+'/create_client',body,{'headers':headers})

  }

  delete_client_by_id(id){
    let httpParams = new HttpParams().set('id', id);
    let options = { params: httpParams };
    return this.http.delete(this.url+'/delete',options);

  }


    liste_pour_table() {
      return this.http.get<[Client_inferface]>(this.url+'/liste');
    }

  /* private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  } */
}
