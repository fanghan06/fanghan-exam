import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgramsService } from './programs.service';

import { HomePageComponent } from './home-page/home-page.component';
import { ProgramsComponent } from './programs-list/programs.component';
import { ProgramsDetailComponent } from './programs-detail/programs-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'programs-detail/:sid', component: ProgramsDetailComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [HomePageComponent, ProgramsComponent, ProgramsDetailComponent],
  providers: [ProgramsService]
})
export class HomeModule { }
