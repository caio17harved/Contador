import { Injectable } from '@angular/core';

interface Disciplina {
  title: string;
  dia: string;
  hora: string;
}
@Injectable()
export class DisciplinaService {
  lista: Array<Disciplina> = [
    { title: 'Desenvolvimento para moveis', dia: 'segunda', hora: '19:30' },
    { title: 'Marketing', dia: 'quarta', hora: '19:30' },
    { title: 'Desenvolvimento para servidores', dia: 'quinta', hora: '19:30' },
    {
      title: 'Topicos especias em sistema para internet',
      dia: 'sexta',
      hora: '19:30',
    },
    { title: 'Projeto de Prototipagem', dia: 'sábado', hora: '08:00' },
    { title: 'PG SI', dia: 'sábado', hora: '11:30' },
  ];
  constructor() {}
  getTable() {
    return this.lista;
  }
  AdicioTable(title: string, dia: string, hora: string) {
    this.lista.push({ title, dia, hora });
  }
  RemoveTable(index: number) {
    this.lista.splice(index, 1);
  }
}
