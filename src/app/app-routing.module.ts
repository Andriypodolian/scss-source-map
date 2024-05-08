import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestSourceMapComponent} from './test-source-map/test-source-map.component';

const routes: Routes = [
  {
    path: 'first-level',
    component: TestSourceMapComponent,
  },
  {
    path: 'first-level/second-level',
    component: TestSourceMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
