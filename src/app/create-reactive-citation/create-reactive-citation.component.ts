import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-reactive-citation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-reactive-citation.component.html',
  styleUrl: './create-reactive-citation.component.css'
})
export class CreateReactiveCitationComponent {
  public form:FormGroup = new FormGroup ({
    name: new FormControl(''),
    date: new FormControl(''),
    texte: new FormControl('')
  })


  onSubmit(){
    console.log(this.form.get('name')?.value);
  }
}
