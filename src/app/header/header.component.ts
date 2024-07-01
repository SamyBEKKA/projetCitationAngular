import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FilterPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
