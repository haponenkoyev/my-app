import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(
    private http: HttpClient
  ) { }
  
  public currencyExchange(
    currencyFrom: string,
    currencyExchange: string,
    amount: number
  ): Observable<number> {
    return this.http.get<{ result: number }>('https://api.exchangerate.host/convert', {
      params: {
        from: currencyFrom,
        to: currencyExchange,
        amount: amount
      }
    })
    .pipe(
      map(resp => resp.result)
    );
  }
}
