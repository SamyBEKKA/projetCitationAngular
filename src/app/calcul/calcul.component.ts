import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { TvaPipe } from '../tva.pipe';

@Component({
  selector: 'app-calcul',
  standalone: true,
  imports: [TvaPipe,FormsModule],
  templateUrl: './calcul.component.html',
  styleUrl: './calcul.component.css'
})
export class CalculComponent {
  price: number = 0
}
