import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesListComponent } from './candidates-list/candidates-list/candidates-list.component';
import { CandidateComponent } from './candidate/candidate.component';
import { FilterCandidatePipe } from './candidate/filterCandidate.pipe';

@NgModule({
  declarations: [
    CandidatesListComponent,
    CandidateComponent,
    FilterCandidatePipe
  ],
  imports: [CommonModule],
  exports: [CandidatesListComponent]
})
export class CandidatesModule {}
