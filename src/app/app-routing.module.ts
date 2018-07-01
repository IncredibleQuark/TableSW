import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListViewComponent} from './components/list-view/list-view.component';
import {CharacterFormComponent} from './components/characterForm/character-form.component';

const routes: Routes = [
  {
    path: '',
    component: ListViewComponent
  },
  {
    path: 'new',
    component: CharacterFormComponent
  },
  {
    path: 'edit/:id',
    component: CharacterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
