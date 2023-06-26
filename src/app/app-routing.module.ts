import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-thought',
    pathMatch: 'full'
  },
  {
    path: 'new-thought',
    component: CreateThoughtComponent
  },
  {
    path: 'list-thought',
    component: ListThoughtComponent
  },
  {
    path: 'thoughts/deleteThought/:id',
    component: DeleteThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
