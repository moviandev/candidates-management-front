import { Pipe, PipeTransform } from '@angular/core';
import { Candidates } from './candidates';

@Pipe({
  name: 'filterCandidate'
})
export class FilterCandidatePipe implements PipeTransform {
  transform(candidate: Candidates, filterDescription: string) {}
}
