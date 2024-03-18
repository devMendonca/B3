import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/Tarefa';
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = `${environment.apiUrl}/api/tarefas`
  

  constructor(private http : HttpClient) { }

      GetTarefas() : Observable<Tarefa[]>{
        return this.http.get<Tarefa[]>(this.apiUrl);
      }

      CreateTarefa(tarefa : Tarefa) : Observable<Tarefa>{
        return this.http.post<Tarefa>(this.apiUrl, tarefa);
      }

      GetTarefa(id : number) : Observable<Tarefa>{
        return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
      }

      EditarTarefa(tarefa : Tarefa, id : number) : Observable<Tarefa>{
        return this.http.put<Tarefa>(`${this.apiUrl}/${id}`, tarefa);
      }

      ExluirTarefa(id: number): Observable<Tarefa> {
        return this.http.delete<Tarefa>(`${this.apiUrl}/${id}`);
    }

    
}
