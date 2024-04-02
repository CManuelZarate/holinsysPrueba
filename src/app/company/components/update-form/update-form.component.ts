import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  company!:Company;

  constructor(private companyService : CompanyService) { }

  ngOnInit(): void {
  }

  searchCompany(id:string){
    
    this.companyService.listCompanyById(id)
      .subscribe( (company) => {
        this.company = company;
      } )
  }

}
