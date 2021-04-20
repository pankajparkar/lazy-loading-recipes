import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

/* start */

const IPDATA_API_ENDPOINT = 'https://api.ipdata.co/1.1.1.1?api-key=150731c1daac573655cad56e9fce2f193d9e5f66a0954e400b465277';
const FALLBACK_CITY = 'Mumbai';
const FALLBACK_COUNTRY = 'IN';
/* end */

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private ipData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  ipData: any;

  constructor(private httpClient: HttpClient) { }

  ipDataGetter() {
    return this.ipData$.asObservable();
  }

  ipDataSetter(changedIpData: any) {
    this.ipData$.next(changedIpData);
  }

  getIPData() {
    if (this.ipData) {
      return of(this.ipData);
    } else {
      return this.httpClient.jsonp(IPDATA_API_ENDPOINT, 'callback')
        .pipe(
          tap((ipData: any) => {
            // TODO fallback to be removed
            if (!ipData.city || ipData.city === 'Ghatkopar') {
              ipData.city = FALLBACK_CITY;
              ipData.country_code = FALLBACK_COUNTRY;
            }
            this.ipData$.next(ipData);
            this.ipData = ipData;
          })
        )
    }
  }

}
