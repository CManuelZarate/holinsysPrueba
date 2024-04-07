import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Company, CompanyRequestDTO, CompanyResponseDTO } from '../interfaces/company.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiBaseUrl:string = 'https://storiesbe.koala.pe/api/postula';

  constructor( private http: HttpClient ) { }

  listCompanies():Observable<Company[]>{
    const url = `${this.apiBaseUrl}/list/companies`;
    return this.http.get<Company[]>( url )
    .pipe(
      catchError( err => {
        console.log("ocurrio un error listCompanies");
        console.log(err);
        return of([]);
      } )
    );
  }

  listCompanyById(id:string):Observable<Company>{
    const url = `${this.apiBaseUrl}/find/company/${id}`;
    let company!:Company;
    return this.http.get<Company>( url )
    .pipe(
      catchError( err => {
        console.log("ocurrio un error listCompanyById");
        console.log(err);
        return of(company);
      } )
    );

  }

  createCompany(company:CompanyRequestDTO):Observable<CompanyResponseDTO>{
    const url = `${this.apiBaseUrl}/company`;
    let companyResponseDTO!:CompanyResponseDTO;
    return this.http.post<CompanyResponseDTO>( url , company)
    .pipe(
      catchError( err => {
        console.log("ocurrio un error createCompany");
        console.log(err);
        alert(err.error.errors[0].msg);
        return of(companyResponseDTO);
      } )
    );
  }

  updateCompany(company:CompanyRequestDTO,id:string): Observable<any>{
    const url = `${this.apiBaseUrl}/update/company/${id}`;
    return this.http.put<any>( url , company)
    .pipe(
      catchError( errorMessage => {
        console.log("ocurrio un error createCompany");
        console.log(errorMessage);
        return of(errorMessage);
      } )
    );
  }


  checkName(companyName :string,route:string,firstValueControl:string ):Observable<boolean>{

    return this.listCompanies().pipe(
      map(companiesResponse => {
        for (let i = 0; i < companiesResponse.length; i++) {
          if (companiesResponse[i].company_name === companyName && route === '/create') {
            return true;
          }else if(companiesResponse[i].company_name === companyName && route === '/update' && 
          companiesResponse[i].company_name !== firstValueControl){
            return true;
          }
        }
        return false;
      }),
      catchError(error => {
        console.error("Error al verificar el nombre de la compañía:", error);
        return of(false);
      })
    );
    

  }

}
