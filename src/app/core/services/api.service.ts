import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { RequestOptions } from '../models/request';
import { catchError } from 'rxjs/operators';

const BASE_URL = env.baseHref;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public get<T>(path: string, requestOptions: RequestOptions = { headers: new HttpHeaders() }): Observable<T> {
    return this.httpClient.get<T>(BASE_URL + path, requestOptions).pipe(catchError(this.handleError));
  }

  public post<T>(path: string, body: object = {}, options?: RequestOptions): Observable<T> {
    return this.httpClient.post<T>(BASE_URL + path, JSON.stringify(body), options).pipe(catchError(this.handleError));
  }

  // TODO: Rest

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      return throwError(`Error: ${errorResponse.error.message}`);
    } else {
      const errorMessage = {
        errorCode: errorResponse.status,
        errorData: errorResponse.error ? errorResponse.error.error : null
      };
      return throwError(errorMessage);
    }
  }
}
