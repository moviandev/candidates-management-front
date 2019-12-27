import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

import { Candidates } from './candidates';

@Component({
  selector: 'cm-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input() candidates: MatTableDataSource<Candidates>;
  displayedColumns: string[] = [
    'name',
    'email',
    'mobile',
    'tech',
    'lastSalary',
    'createdBy',
    'star'
  ];

  constructor() {}

  ngOnInit() {}
}
