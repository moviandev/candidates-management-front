import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesListComponent } from './candidates/candidates-list/candidates-list/candidates-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'candidates',
    component: CandidatesListComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
