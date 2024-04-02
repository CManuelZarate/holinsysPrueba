import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  companyList : Company[] = [];

  constructor( private companyService :CompanyService ) { }

  ngOnInit(): void {
    this.companyService.listCompanies()
    .subscribe( 
      companyList => {
        this.companyList=companyList
      }
    );

  }

}
