import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { AlunoModel } from './aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: AlunoModel = new AlunoModel();
  alunos: Array<any> = new Array();

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.listaAlunos();
  }

  cadastrar(){
     console.log(this.aluno)
     this.alunosService.cadastrarAluno(this.aluno).subscribe(aluno => 
      {
        this.aluno = new AlunoModel
        this.listaAlunos();
      }, 
      err => 
      {
        console.log("Erro ao cadastrar o aluno", err)
    
      })
  }

  atualizar(id: number)
  {
    this.alunosService.atualizarAluno(id, this.aluno).subscribe(aluno => 
     {
       this.aluno = new AlunoModel
       this.listaAlunos();
     }, 
     err => 
     {
       console.log("Erro ao atualizar o aluno", err)
   
     })
  }

  remover(id: number)
  {
    this.alunosService.removerAluno(id).subscribe(aluno => 
      {
        this.aluno = new AlunoModel
        this.listaAlunos();
      }, 
      err => 
      {
        console.log("Erro ao remover o aluno", err)
    
      })
  }

  listaAlunos()
  {
    this.alunosService.listaAlunos().subscribe(alunos=> {
      this.alunos = alunos;
    }, err => {
      console.log('Erro ao listar os alunos', err)
    })
  }

}
