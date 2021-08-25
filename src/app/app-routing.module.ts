import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LettermovementComponent } from './components/lettermovement/lettermovement.component';
import { LettercutupsComponent } from './components/lettercutups/lettercutups.component';

const routes: Routes = [
  {path: 'lettermovement', component: LettermovementComponent},
  {path: 'lettercutups', component: LettercutupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
