import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usdRate: number | undefined;
  eurRate: number | undefined;
  
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.currencyExchange('USD','UAH', 1)
      .subscribe(resp => {
        this.usdRate = resp;
      })
    this.currencyService.currencyExchange('EUR','UAH', 1)
      .subscribe(resp => {
        this.eurRate = resp;
      })
  }

  exchangeRight(e: {amount: number, currencyFrom: string, currencyTo: string}) {
    this.currencyService.currencyExchange(e.currencyFrom, e.currencyTo, e.amount)
    .subscribe(result => {
      this.rightItem = result;
      result.toFixed(2);
    })
  }

  exchangeLeft(e: {amount: number, currencyFrom: string, currencyTo: string}) {
    this.currencyService.currencyExchange(e.currencyFrom, e.currencyTo, e.amount)
    .subscribe(result => {
      this.leftItem = result;
      result.toFixed(2);
    })
  }

  rightItem: number = 0;
  leftItem:number = 0;;

  
}
