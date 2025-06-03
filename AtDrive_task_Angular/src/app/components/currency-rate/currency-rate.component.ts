import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../../services/apiservices.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-rate',
  imports: [CommonModule, FormsModule],
  templateUrl: './currency-rate.component.html',
  styleUrl: './currency-rate.component.scss'
})
export class CurrencyRateComponent implements OnInit {

  base: string = 'USD';
  availableBases: string[] = ['USD', 'EUR', 'INR', 'GBP', 'JPY', 'AUD', 'CAD'];
  rates: any = {};

  constructor(private apiService: ApiservicesService) { }
  ngOnInit(): void {
    this.fetchRates();
  }

  fetchRates() {
    this.apiService.getRates(this.base).subscribe((data: any) => {
      this.rates = data.conversion_rates;
    });
  }

  onBaseChange() {
    this.fetchRates();
  }

}
