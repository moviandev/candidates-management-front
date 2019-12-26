import { Component, OnInit, Input } from '@angular/core';
import { Candidates } from './candidates';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input() candidates: Candidates[];

  constructor() {}

  ngOnInit() {}
}
