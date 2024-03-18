import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Criar Tarefa"

  constructor(private tarefaService : TarefaService, private router : Router ){}

  CreateTarefa(tarefa: Tarefa){

    tarefa.id = null;
    this.tarefaService.CreateTarefa(tarefa).subscribe()
    this.router.navigate(['/']);
  }

}
