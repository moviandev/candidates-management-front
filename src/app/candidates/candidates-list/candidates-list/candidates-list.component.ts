import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

import { CandidatesListService } from '../../candidate/candidate.service';
import { Candidates } from '../../candidate/candidates';

@Component({
  selector: 'cm-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {
  candidates: MatTableDataSource<Candidates[]>;
  displayedColumns: string[] = ['name', 'email', 'mobile', 'createdBy'];

  constructor(private candidatesService: CandidatesListService) {}

  ngOnInit() {
    this.candidatesService.listAllCandidates().subscribe((cn: Candidates) => {
      this.candidates = new MatTableDataSource<Candidates[]>(cn.data);
    });
  }

  applyFilter(filterValue: string) {
    this.candidates.filter = filterValue.trim().toLowerCase();
  }
}
