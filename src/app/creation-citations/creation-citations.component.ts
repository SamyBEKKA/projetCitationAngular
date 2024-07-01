import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgForm, NgModel, NgModelGroup, ValidationErrors, Validators } from '@angular/forms';
import { CitationListComponent } from '../citation-list/citation-list.component';
import { CitationService } from '../citation.service';

export const motsInterdit= ( control:AbstractControl):
ValidationErrors | null => {
  const mots  = ["lol","caca"]
  return mots.includes(control.value) ? { interdit : "Ce mot est interdit"} : null
}
@Component({
  selector: 'app-creation-citations',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, CitationListComponent],
  templateUrl: './creation-citations.component.html',
  styleUrl: './creation-citations.component.css',
  providers:[DatePipe],
})
export class CreationCitationsComponent {
  // citations: citation[] = [];
  

  constructor(private datePipe: DatePipe) {}

  service = inject(CitationService)
  // id:number = 0;
  name: string = '';
  texte: string = "";
  date : string = "";

  public form:FormGroup = new FormGroup ({
    name: new FormControl('', {validators:[Validators.required, Validators.minLength(8), motsInterdit]}),
    texte : new FormControl("", {validators: [Validators.required, Validators.minLength(4), motsInterdit]})
  })

  onSubmit(form:NgForm){
    if(form.valid){
      this.service.postCitation(form.value);
      form.reset();
    }
  }
}
