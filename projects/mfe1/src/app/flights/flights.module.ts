import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlightsSearchComponent } from "./flights-search.component";

const FLIGHTS_ROUTES: Routes = [ { 
    path: 'flights-search',
    component: FlightsSearchComponent
}];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(FLIGHTS_ROUTES)
    ],
    declarations: [
      FlightsSearchComponent
    ]
  })
  export class FlightsModule { }