import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CitationListComponent } from '../citation-list/citation-list.component';
import { CreationCitationsComponent } from '../creation-citations/creation-citations.component';
import { CitationService } from '../citation.service';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { citation } from '../entities';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CitationListComponent, CreationCitationsComponent, FilterPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  citations: citation[]= [];
  name = '';
  terms='';


  constructor( private service:CitationService) {
    // Exemple de données
  }
  ngOnInit(): void {
    this.fetchAll();
  }
  fetchAll(){
    this.citations = this.service.fetchAll();
  }
}
