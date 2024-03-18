import { Component, OnInit } from '@angular/core';
import { MatDialog, matDialogAnimations } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    tarefas : Tarefa[] = [];
    tarefasGeral : Tarefa[] = [];
    colunas  = ['Status','Descricao','Responsavel','Celular','Cpf','Data','Ações']

    constructor(private tarefaService : TarefaService, public dialog: MatDialog){}

    ngOnInit(): void {

        this.tarefaService.GetTarefas().subscribe(data =>{

          const dados = data;

          dados.map((item) => {
              item.data = new Date(item.data!).toLocaleDateString('pt-BR');
          })

          this.tarefas = data;
          this.tarefasGeral = data;

        });
    }

    search(event : Event){

      const target = event.target as HTMLInputElement
      const value = target.value.toLowerCase()

      this.tarefas = this.tarefasGeral.filter(tarefas => {
        return tarefas.descricao.toLowerCase().includes(value) 
               || tarefas.data.includes(value)
               || tarefas.status.toString().includes(value);

      })

    }

    OpenDialog(id : number){
      this.dialog.open(ExcluirComponent, {
        width:'400px',
        height: '200px',
        data:{
          id:id
        }
      });
    }
}
