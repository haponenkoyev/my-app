import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface currency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'] 
})
export class ConverterComponent implements OnInit {
  selectedValue: string = "";
  selectedCurrency: string = "";
  @Input() amountFrom: number = 0;
  @Input() amountTo: number = 0;
  currencyFrom: string = "";
  currencyTo: string = ""
  
  @Output() exchangeRight = new EventEmitter<{
    amount: number, currencyFrom: string, currencyTo: string;
  }>();

  @Output() exchangeLeft = new EventEmitter<{
    amount: number,
    currencyFrom: string,
    currencyTo: string;
  }>();

  constructor() { }
  currencies: currency[] = [
    { value: 'USD', viewValue: 'USD'},
    { value: 'EUR', viewValue: 'EUR'},
    { value: 'UAH', viewValue: 'UAH'},
  ];

  ngOnInit(): void {
  }

}
