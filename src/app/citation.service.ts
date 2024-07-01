import { Injectable } from '@angular/core';
import { citationMock } from './citation-mock';
import { citation } from './entities';

@Injectable({
  providedIn: 'root'
})
export class CitationService {

  constructor() { }

  fetchAll(){
    return citationMock;
  }

  postCitation(citation:citation){
    citationMock.push(citation);
  
  }
}
