import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CandidatesListComponent],
  imports: [CommonModule, MatTableModule],
  exports: [CandidatesListComponent]
})
export class CandidatesListModule {}
