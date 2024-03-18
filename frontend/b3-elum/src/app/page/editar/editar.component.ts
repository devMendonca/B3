import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit  {

  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar Tarefa'
  tarefa! : Tarefa;

  constructor(private tarefaService : TarefaService, private route : ActivatedRoute, private router: Router ){}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tarefaService.GetTarefa(id).subscribe((data) =>{
      this.tarefa = data;
    });
  }

  EditarTarefa(tarefa: Tarefa) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.tarefaService.EditarTarefa(tarefa, id).subscribe();
      this.router.navigate(['/']);
    
  }
  
}


