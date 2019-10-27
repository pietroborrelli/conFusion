import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }

  public handleError(error: HttpErrorResponse | any){
    let errMsg : string;

    if (error.error instanceof ErrorEvent){
      errMsg = error.error.message;
    }else{//means that this is coming from the server side
      //extracting the status information. And error.statusText, if the statusText exists, or that'll be an empty string
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }
    return throwError(errMsg);
  }
}
