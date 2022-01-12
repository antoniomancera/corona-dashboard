import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoronaDataServiceService {
  constructor(private http: HttpClient) {}

  getCoronaDaily(): Observable<any> {
    return this.http.get<any>(environment.covidTrackerUrl + '/us/daily.json');
  }
}
