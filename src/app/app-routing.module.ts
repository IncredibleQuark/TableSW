import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListViewComponent} from './components/list-view/list-view.component';
import {NewCharacterComponent} from './components/new-character/new-character.component';

const routes: Routes = [
  {
    path: '',
    component: ListViewComponent
  },
  {
    path: 'new',
    component: NewCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
