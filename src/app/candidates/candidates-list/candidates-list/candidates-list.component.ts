import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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
  candidates: Candidates[] = [];
  filter: string;
  candidatesArrayLength: number;
  debounce: Subject<string> = new Subject<string>();

  constructor(private candidatesService: CandidatesListService) {}

  ngOnInit() {
    this.candidatesService.listAllCandidates().subscribe((cn: Candidates) => {
      for (const cd of cn.data) {
        this.candidates.push(cd);
        this.candidatesArrayLength = this.candidates.length;
      }
    });
    this.debounce.pipe(debounceTime(300)).subscribe(f => (this.filter = f));
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
