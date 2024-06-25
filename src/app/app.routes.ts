import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { CitationListComponent } from './citation-list/citation-list.component';
import { CreationCitationsComponent } from './creation-citations/creation-citations.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'citationList', component: CitationListComponent },
    { path:'creationCitation', component: CreationCitationsComponent },
    { path:'**', component: Error404Component }
];
