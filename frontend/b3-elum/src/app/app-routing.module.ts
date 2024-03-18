import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { HomeComponent } from './page/home/home.component';
import { EditarComponent } from './page/editar/editar.component';

const routes: Routes = [
    {path: 'cadastro' , component: CadastroComponent},
    {path: '' , component: HomeComponent},
    {path: 'editar/:id' , component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
