import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { CompanyService } from './company.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class ValidatorsService implements AsyncValidator {

  firstValueControl!:string;
  firstValueFlag:boolean = true;

  constructor(private companyService : CompanyService,
    private router:Router
  ) { }

  /*validate(control: AbstractControl): Observable<ValidationErrors | null> */
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const companyName= control.value;
    
    if(this.firstValueFlag){
      this.firstValueControl = control.value;
      this.firstValueFlag = false;
    }
    
    const httpCallObservable = new Observable<ValidationErrors|null>( (subscriber) => {
      
      this.companyService.checkName(companyName,this.router.url,this.firstValueControl)
      .subscribe( (response) => {
        if (response) {
          subscriber.next({ nameTaken: true });
        } else {
          subscriber.next(null);
        }
        subscriber.complete();
      } );

    })/* .pipe(
      delay( 3000 )
    ) */;

    return httpCallObservable;
  
  }


  
}