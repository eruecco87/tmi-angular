import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS
import { Observable } from 'rxjs';

// Environment
import { environment } from '@env/environment';

// Models
import { ThingiverseThing } from '@core/services/thingiverse/models';

@Injectable({
  providedIn: 'root'
})
export class ThingiverseService {

  public api = 'https://api.thingiverse.com'

  constructor(
    private httpClient: HttpClient
  ) { }

  private static getAuthHeaders(): any {

    return {
      accept: 'application/json',
      authorization: `Bearer ${ environment.thingiverse.appToken }`,
    };

  }

  public getThing(id: string): Observable<ThingiverseThing> {

    return this.httpClient.get<ThingiverseThing>(`${ this.api }/things/${ id }`, { headers: ThingiverseService.getAuthHeaders() });

  }

  public getFiles(id: string): Observable<any> {

    return this.httpClient.get<any>(`${ this.api }/things/${ id }/files`, { headers: ThingiverseService.getAuthHeaders() });

  }

  public getFileDetails(id: string): Observable<any> {

    return this.httpClient.get<any>(`${ this.api }/files/${ id }`, { headers: ThingiverseService.getAuthHeaders() });

  }
}
