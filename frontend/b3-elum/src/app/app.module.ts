import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { TarefaFormComponent } from './componentes/tarefa-form/tarefa-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './page/editar/editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ExcluirComponent } from './componentes/excluir/excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    TarefaFormComponent,
    EditarComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
