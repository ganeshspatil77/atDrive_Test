import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyRateComponent } from './components/currency-rate/currency-rate.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyRateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AtDrive_task';
}
