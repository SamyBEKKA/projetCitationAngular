import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { CitationListComponent } from '../citation-list/citation-list.component';
import { citation } from '../entities';

@Component({
  selector: 'app-creation-citations',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, CitationListComponent],
  templateUrl: './creation-citations.component.html',
  styleUrl: './creation-citations.component.css',
  providers:[DatePipe],
})
export class CreationCitationsComponent {
  citations: citation[] = [];
  name: string = '';
  texte: string = "";
  date : string = "";

  constructor(private datePipe: DatePipe) {}

  onSubmit():void{
    const formattedDate = this.datePipe.transform(this.date, 'dd/MM/yyyy');
    const newCitation = {
      name: this.name,
      texte: this.texte,
      date: formattedDate 
    };
    this.citations.push(newCitation); 
    console.log('Nouvelle citation ajoutée:', newCitation);
    this.resetForm();
  }
  resetForm(): void {
    this.name = '';
    this.texte = '';
    this.date = '';
  }
}
