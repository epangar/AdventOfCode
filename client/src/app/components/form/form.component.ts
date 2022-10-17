import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SolutionService } from 'src/app/services/solution.service';
import { NgForm } from '@angular/forms';
import { Request } from 'src/app/classes/Request';
import { Solution } from 'src/app/classes/Solution';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() myRequest: Request;
  years : number[] = [];
  days : number[] = new Array(25).fill(1).map((day, position)=> day+position);
  defaultYear : string;
  defaultDay : string;
  solution : Solution;
  solutionReceived : Subscription = new Subscription;
  requestEmitter :  EventEmitter<Request> = new EventEmitter<Request>()


  constructor(private solutionService : SolutionService,
              private router: Router,
              private route : ActivatedRoute){}

  ngOnInit(): void {
    this.fillYears();
  }

  fillYears(){
    const date : Date = new Date(),
          currentYear : number = date.getFullYear(),
          currentMonth : number = date.getMonth(),
          numberOfYears : number = currentMonth === 11 ? currentYear - 2015 + 1 : currentYear - 2015;

    this.years = new Array(numberOfYears).fill(2015).map((year, position) => year+position);
    this.defaultYear = this.years[0].toString();
    this.defaultDay = this.days[0].toString();
  }



  onSubmit(form : NgForm){

    const value = form.value;
    this.myRequest = new Request(value.year, value.day);
    this.requestEmitter.emit(this.myRequest);
    this.router.navigate([`${value.year}/${value.day}`], {relativeTo: this.route})

  }

  ngOnDestroy() : void {
    this.years = [];
  }

}
