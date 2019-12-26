import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesListComponent } from './candidates-list/candidates-list/candidates-list.component';
import { CandidateComponent } from './candidate/candidate.component';

@NgModule({
  declarations: [CandidatesListComponent, CandidateComponent],
  imports: [CommonModule],
  exports: [CandidatesListComponent]
})
export class CandidatesModule {}
