import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { OnePagerComponent } from './one-pager/one-pager.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    pathMatch: 'full'
  },
  {
    path: 'vision',
    loadChildren: () => import('mfe1/Module').then(m => m.VisionModule)
  },
  {
    path: 'one-pager',
    component: OnePagerComponent,
    children: [
        {
            path: '',
            component: ContentComponent,
            outlet: 'shell'
        },
        {
            path: '',
            loadChildren: () => import('mfe1/Module').then(m => m.VisionModule),
            outlet: 'mfe1'
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
