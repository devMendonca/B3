import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit{

  inputData : any;
  tarefa! : Tarefa;

  constructor(private tarefaService : TarefaService, 
              private router : Router,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private ref: MatDialogRef<ExcluirComponent>) {}


  ngOnInit(): void {

    this.inputData = this.data;
    this.tarefaService.GetTarefa(this.inputData.id).subscribe(data => {
      this.tarefa = data;

    });
  }

  Excluir(){
    console.log(this.inputData.id)
      this.tarefaService.ExluirTarefa(this.inputData.id).subscribe();
      this.ref.close();
      window.location.reload();

  }

  Cancelar(){
    this.ref.close();
  }


}
