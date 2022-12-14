import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VisionComponent } from "./vision.component";

const FLIGHTS_ROUTES: Routes = [ { 
    path: '',
    component: VisionComponent
}];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(FLIGHTS_ROUTES)
    ],
    declarations: [
      VisionComponent
    ]
  })
  export class VisionModule { }