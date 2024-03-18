export interface Tarefa{
    id : number | null | undefined;
    descricao : string;
    data : string;
    responsavel : string;
    celular : string;
    cpf : string;
    status : boolean
}