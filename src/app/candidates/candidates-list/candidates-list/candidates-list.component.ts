import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidatesListService } from '../../candidate/candidate.service';
import { Candidates } from '../../candidate/candidates';
import { Subject } from 'rxjs';

@Component({
  selector: 'cm-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {
  candidates: Candidates[] = [];
  filter: string;
  debounce: Subject<string> = new Subject<string>();

  constructor(private candidatesService: CandidatesListService) {}

  ngOnInit() {
    this.candidatesService.listAllCandidates().subscribe((cn: Candidates) => {
      for (const t of cn.data) {
        this.candidates.push(t);
      }
    });
  }
}
