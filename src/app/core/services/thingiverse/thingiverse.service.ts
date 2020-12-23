import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS
import { Observable } from 'rxjs';

// Environment
import { environment } from '@env/environment';

// Models
import { ThingiverseThing, ThingiverseFile } from '@core/services/thingiverse/models';

@Injectable({
  providedIn: 'root'
})
export class ThingiverseService {

  public things_endpoint = `${ environment.thingiverse.api }/things`;

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

    return this.httpClient.get<ThingiverseThing>(`${ this.things_endpoint }/${ id }`, { headers: ThingiverseService.getAuthHeaders() });

  }

  public getFiles(id: string): Observable<ThingiverseFile[]> {

    return this.httpClient.get<ThingiverseFile[]>(`${ this.things_endpoint }/${ id }/files`, { headers: ThingiverseService.getAuthHeaders() });

  }
}
