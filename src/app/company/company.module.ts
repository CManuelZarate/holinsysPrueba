import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationFormComponent } from './components/creation-form/creation-form.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { CompanysingleComponent } from './components/companysingle/companysingle.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CreationFormComponent, ShowDataComponent, CompanysingleComponent, UpdateFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CompanyModule { }
