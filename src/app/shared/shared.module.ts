import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchCompanyComponent } from './search-company/search-company.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SearchCompanyComponent
  ],
  exports:[
    SidebarComponent,
    SearchCompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
