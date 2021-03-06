import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Candidates } from './candidates';

@Component({
  selector: 'cm-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input() candidates: Candidates[];

  constructor() {}

  ngOnInit() {}
}
