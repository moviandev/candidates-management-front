import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { CandidatesListComponent } from './candidates-list/candidates-list/candidates-list.component';
import { CandidateComponent } from './candidate/candidate.component';
import { FilterCandidatePipe } from './candidate/filterCandidate.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CandidatesListComponent,
    CandidateComponent,
    FilterCandidatePipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [CandidatesListComponent]
})
export class CandidatesModule {}
