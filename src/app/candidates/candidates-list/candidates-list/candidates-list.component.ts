import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CandidatesListService } from '../../candidate/candidate.service';
import { Candidates } from '../../candidate/candidates';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'cm-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit, OnDestroy {
  candidates: MatTableDataSource<Candidates[]>;
  candidatesArray: Candidates[] = [];
  candidatesArrayLength: number;
  debounce: Subject<string> = new Subject<string>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private candidatesService: CandidatesListService) {}

  ngOnInit() {
    this.candidatesService.listAllCandidates().subscribe((cn: Candidates) => {
      this.candidates = new MatTableDataSource<Candidates[]>(cn.data);
      for (const cd of cn.data) {
        this.candidatesArray.push(cd);
        this.candidatesArrayLength = this.candidatesArray.length;
      }
      this.candidates.sort = this.sort;
      this.candidates.paginator = this.paginator;
    });
    this.debounce.pipe(debounceTime(300)).subscribe(f => this.filter(f));
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

  filter(filterValue: string) {
    this.candidates.filter = filterValue.trim().toLowerCase();
    if (this.candidates.paginator) {
      this.candidates.paginator.firstPage();
    }
  }
}
