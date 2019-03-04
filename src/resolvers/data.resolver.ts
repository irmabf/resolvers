import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataResolver implements Resolve<String[]> {
  constructor( private httpClient: HttpClient) {}
  resolve(): Observable<string[]> {
    console.log('In resolver');

    return this.httpClient.get<string[]>('../assets/48MB_DATA.json');
  }
}

