import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';

import { CandidatesListComponent } from './candidates-list/candidates-list/candidates-list.component';
import { CandidateComponent } from './candidate/candidate.component';
import { FilterCandidatePipe } from './candidate/filterCandidate.pipe';

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
    MatIconModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [CandidatesListComponent]
})
export class CandidatesModule {}
