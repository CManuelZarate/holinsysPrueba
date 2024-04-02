import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDataComponent } from './company/components/show-data/show-data.component';
import { CreationFormComponent } from './company/components/creation-form/creation-form.component';
import { UpdateFormComponent } from './company/components/update-form/update-form.component';
import { CompanysingleComponent } from './company/components/companysingle/companysingle.component';

const routes: Routes = [
  /* {
    path: '', component: ShowDataComponent, pathMatch: 'full'
  }, */
  {
    path: 'list',
    component:ShowDataComponent,
  },
  {
    path: 'listById',
    component: CompanysingleComponent,
  },
  {
    path: 'create',
    component: CreationFormComponent
  },
  {
    path: 'update',
    component: UpdateFormComponent 
  },
  {
    path: '**',
    redirectTo: 'list'
    /**component: 404component**/

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
