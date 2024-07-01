import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { citation } from '../entities';
import { BehaviorSubject } from 'rxjs';
import { CitationService } from '../citation.service';

@Component({
  selector: 'app-citation-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './citation-list.component.html',
  styleUrl: './citation-list.component.css',
  providers:[DatePipe],
})
export class CitationListComponent implements OnInit {
  
  citations:citation [] = [];
  service = inject(CitationService)

ngOnInit(): void {
    this.getCitations();
}
getCitations(){
  this.citations =   this.service.fetchAll();
}
deleteCitation(index:number):void {
  this.citations.splice(index, 1);
}
 
 
 
  // private citationsSubject = new BehaviorSubject<Citation[]>([
  //   // Exemple de données
  //     {
  //       texte: 'La vie est belle.',
  //       name: 'Auteur Inconnu',
  //       date: new Date('2023-06-19')
  //     },
  //     {
  //       texte: 'Le savoir est le pouvoir.',
  //       name: 'Francis Bacon',
  //       date: new Date('2023-06-20')
  //     },
  //     {
  //       texte: 'Le seul véritable échec est de ne pas essayer.',
  //       name: 'George Clooney',
  //       date: new Date('2023-07-01')
  //     },
  //     {
  //       texte: 'La seule limite à notre épanouissement de demain sera nos doutes d’aujourd’hui.',
  //       name: 'Franklin D. Roosevelt',
  //       date: new Date('2023-07-02')
  //     },
  //     {
  //       texte: 'Faites de votre vie un rêve, et d\'un rêve, une réalité.',
  //       name: 'Antoine de Saint-Exupéry',
  //       date: new Date('2023-07-03')
  //     },
  //     {
  //       texte: 'La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute.',
  //       name: 'Confucius',
  //       date: new Date('2023-07-04')
  //     },
  //     {
  //       texte: 'Le bonheur n\'est pas quelque chose de prêt à l\'emploi. Il vient de vos propres actions.',
  //       name: 'Dalai Lama',
  //       date: new Date('2023-07-05')
  //     },
  //     {
  //       texte: 'Ne pleurez pas parce que c\'est fini, souriez parce que c\'est arrivé.',
  //       name: 'Dr. Seuss',
  //       date: new Date('2023-07-06')
  //     },
  //     {
  //       texte: 'Le succès n\'est pas final, l\'échec n\'est pas fatal : c\'est le courage de continuer qui compte.',
  //       name: 'Winston Churchill',
  //       date: new Date('2023-07-07')
  //     }
  //   ]);
    
    // constructor(private datePipe: DatePipe) {}

    
}
