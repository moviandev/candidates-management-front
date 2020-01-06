import { Pipe, PipeTransform } from '@angular/core';
import { Candidates } from './candidates';

@Pipe({
  name: 'filterCandidate'
})
export class FilterCandidatePipe implements PipeTransform {
  transform(candidate: Candidates[], filterQuery: string) {
    if (filterQuery) {
      filterQuery = filterQuery.trim().toLowerCase();
      return candidate.filter(
        c =>
          c.tech.toLowerCase().includes(filterQuery) ||
          c.name.toLowerCase().includes(filterQuery)
      );
    } else {
      return candidate;
    }
  }
}
