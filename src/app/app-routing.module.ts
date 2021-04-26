import { Client } from './entity/Client';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';


const routes: Routes = [

  { path: 'create', component: CreateComponent },
  { path: '', component: ListeClientComponent },
  { path: 'update/:id', component: UpdateClientComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
