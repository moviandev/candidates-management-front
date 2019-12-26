import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:3333/';
@Injectable({
  providedIn: 'root'
})
export class CandidatesListService {
  constructor(private http: HttpClient) {}

  listAllCandidates() {
    return this.http.get(`${API}api/v1/candidates/`);
  }
}
