import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CandidatesListService } from '../../candidate/candidate.service';
import { Candidates } from '../../candidate/candidates';

@Component({
  selector: 'cm-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit, OnDestroy {
  candidates: MatTableDataSource<Candidates[]>;
  debounce: Subject<string> = new Subject<string>();

  constructor(private candidatesService: CandidatesListService) {}

  ngOnInit() {
    this.candidatesService.listAllCandidates().subscribe((cn: Candidates) => {
      this.candidates = new MatTableDataSource<Candidates[]>(cn.data);
    });
    this.debounce.pipe(debounceTime(300)).subscribe(f => this.filter(f));
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

  filter(filterValue: string) {
    this.candidates.filter = filterValue.trim().toLowerCase();
  }
}
