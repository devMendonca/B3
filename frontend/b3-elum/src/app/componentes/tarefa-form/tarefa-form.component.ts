import { FormatWidth } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Tarefa>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosTarefa: Tarefa | null = null;

  
  tarefaForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {

    console.log(this.dadosTarefa);
    this.tarefaForm = new FormGroup({
      id : new FormControl(this.dadosTarefa ? this.dadosTarefa.id : null),
      descricao: new FormControl(this.dadosTarefa ? this.dadosTarefa.descricao : '', Validators.required),
      responsavel: new FormControl(this.dadosTarefa ? this.dadosTarefa.responsavel : '', Validators.required),
      celular: new FormControl(this.dadosTarefa ? this.dadosTarefa.celular : '', Validators.required),
      cpf: new FormControl(this.dadosTarefa ? this.dadosTarefa.cpf : '', Validators.required),
      data: new FormControl(this.dadosTarefa ? this.dadosTarefa.data : ''),
      status: new FormControl(this.dadosTarefa ? this.dadosTarefa.status : true)
    })
  }

  submit(){
    console.log(this.tarefaForm.value);
     this.onSubmit.emit(this.tarefaForm.value);
  }

}
