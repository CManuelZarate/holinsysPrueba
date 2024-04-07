import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';
import { Company, CompanyRequestDTO } from '../../interfaces/company.interface';
import { ValidatorsService } from '../../services/Validators.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit,OnChanges {

  @Input() dataCompany!:Company;
  currentPath: string;
  isDisabled: boolean = false;

  myForm :FormGroup = this.fb.group( {
    company_name: [ ,{
      validators:[Validators.required],
      asyncValidators:[this.getAsyncValidator()],
      updateOn:'blur'//que se ejecute cuando salga del control 
    }],
    ruc: [ ,[Validators.required,Validators.pattern(/^\d{10,11}$/)] ],
    contact_number: [,[Validators.required,Validators.pattern(/^\d{7,15}$/)]],
    corporate_mail: [,[Validators.required,Validators.email]],
    web_page: [,[Validators.required]],
  } );

  constructor( private fb : FormBuilder,
    private router:Router,
    private companyService:CompanyService,
    private validatorsService:ValidatorsService ) {
      this.currentPath = this.router.url;
  }

  ngOnInit(): void {
    
    if(this.dataCompany){
      this.myForm.reset(this.dataCompany);
    }
    this.updateDisabledState();
  }

  ngOnChanges(changes: SimpleChanges) {
    
    if (changes.dataCompany.currentValue) {
      this.myForm.reset(this.dataCompany);
    }else if(!changes.dataCompany.firstChange){
      this.myForm.reset();
      alert("la compañia con ese id no existe");
    }
    this.updateDisabledState();
  }

  getAsyncValidator() {
    return (control:FormControl) => {
      return this.validatorsService.validate(control);
    };
  }

  updateDisabledState() {
    this.isDisabled = this.currentPath == "/update" && (this.dataCompany === undefined || this.dataCompany === null);
    if(this.isDisabled){
      this.myForm.disable();
    } else{
      this.myForm.enable();
    }
  }

  validateInput(input : string){
    return this.myForm.controls[input].errors && this.myForm.controls[input].touched;
  }


  createOrUpdate(){
    const { company_name,ruc,contact_number,corporate_mail,web_page } = this.myForm.value;

    this.currentPath !== "/update"?'Create':'Update'

    let companytoCreate:CompanyRequestDTO = {
      company_name,
      contact_number,
      corporate_mail,
      ruc,
      web_page
    }

    if(this.currentPath == "/create"){
      this.companyService.createCompany(companytoCreate)
        .subscribe( companyResponse => {
          this.router.navigateByUrl('/list');
        } )
    }else{
      this.companyService.updateCompany(companytoCreate,this.dataCompany.id.toString())
        .subscribe( response => {
          this.router.navigateByUrl('/list');
        } )
    }

  }

}
