import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { CompanyService } from './company.service';

@Injectable({providedIn: 'root'})
export class ValidatorsService implements AsyncValidator {

  constructor(private companyService : CompanyService) { }

  /*validate(control: AbstractControl): Observable<ValidationErrors | null> */
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const companyName= control.value;
    
    const httpCallObservable = new Observable<ValidationErrors|null>( (subscriber) => {

      console.log({ companyName });
      this.companyService.checkName(companyName)
      .subscribe( (response) => {
        if (response) {
          subscriber.next({ nameTaken: true });
        } else {
          subscriber.next(null);
        }
        subscriber.complete();
      } );

    }).pipe(
      delay( 3000 )
    );

    return httpCallObservable;
  
  }


  
}