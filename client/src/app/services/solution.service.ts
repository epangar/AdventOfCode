import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../classes/Request';
import { Solution } from '../classes/Solution';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  BASE_URL_2015: string = 'http://localhost:3000/solutions/';
  solution : Solution;
  emitSolution : Subject<Solution> = new Subject<Solution>();


  constructor(private http : HttpClient, private router: Router) { }

  getSolution(year: number, day: number){
    const URL : string = `http://localhost:3000/${year}/${day}`

    return this.http.get<Solution>(URL).pipe(map((data: Solution) =>{
      this.solution = data;
      this.emitSolution.next(this.solution)
    }))
  }
}
