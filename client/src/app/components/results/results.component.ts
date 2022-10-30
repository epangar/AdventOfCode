import { SolutionCache, Solutions } from './../../classes/SolutionCache';
import { ActivatedRoute,  NavigationStart, Router } from '@angular/router';
import { SolutionService } from 'src/app/services/solution.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Request } from 'src/app/classes/Request';
import { Solution } from 'src/app/classes/Solution';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})



export class ResultsComponent implements OnInit {
  year: number = 0;
  day: number = 0;
  part1: string = '0';
  part2: string = '0';
  cache :  SolutionCache = new SolutionCache;
  dummyCache = {
    2015: {
      1: {
        part1: "138",
        part2: "1771"
      }
    }
  }


  constructor(private solutionService : SolutionService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.detectURLChanges();

  }

  getSolution(year: number, day: number){

//TODO: add cache, if exercise exists in cache return cached result

    console.log(this.cache)
      this.solutionService.getSolution(year, day).subscribe((data)=>{
        const mySolution : Solution = this.solutionService.solution;
        this.year = mySolution.year;
        this.day = mySolution.day;
        this.part1 = mySolution.part1;
        this.part2 = mySolution.part2;

        this.fillCache(mySolution)

      })
    //}
  }

  detectURLChanges(){
    this.router.events.subscribe(event => {

      if(event instanceof NavigationStart){
        debugger

        if(event.url !== '/'){
          const URLArray : string[]= event.url.split("/"),
                year = parseInt(URLArray[1]),
                day = parseInt(URLArray[2]);

          this.getSolution(year, day);
        }
      }
    })
  }

  fillCache(mySolution: Solution){
    debugger

    /*
    2015{
      1{
        1,
        2},
      2{
        1,
        2}
    } */


    if(!this.cache || !this.cache.solutions.has(mySolution.year)){
      debugger
      const SOLUTIONS : Solutions = {
        part1: mySolution.part1,
        part2: mySolution.part2
      }

      const DAY : Map<number, Solutions> = new Map<number, Solutions>();
      DAY.set(mySolution.day, SOLUTIONS)
      this.cache.solutions.set(mySolution.year, DAY)

      console.log(this.cache);


    } else {

    }
    this.cache//[year][part1] = this.part1;
    //this.cache[year][part2] = this.part2;
  }


}
