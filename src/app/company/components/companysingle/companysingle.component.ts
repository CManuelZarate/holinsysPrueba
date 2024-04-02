import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'app-companysingle',
  templateUrl: './companysingle.component.html',
  styleUrls: ['./companysingle.component.css']
})
export class CompanysingleComponent implements OnInit {

  company!:Company;
  constructor(private companyService : CompanyService) { }

  ngOnInit(): void {
  }

  searchCompany(id:string){
    this.companyService.listCompanyById(id)
      .subscribe( (company) => {
        if(!company) alert("no se encuentra una compañia para ese id");
        this.company = company;
      } )
  }

}
