const sarah = {
  name: 'Sarah',
  idade: 26,
  casado: true,
  trabalho: 'Engenheira' 
}

const vania = { 
  name: 'Vania',
  idade: 23,
  casado: false,
  trabalho: 'engenheira' 
}


enum Profissao{
  Educador,
  Engenheiro,
  Pintor,
  Porteiro
}


type Pessoas = {
  name: string,
  idade: number,
  casado: boolean,
  trabalho: Profissao 
}

const gabriel: Pessoas = {
  name: 'Gabriel',
  idade: 26,
  casado: false,
  trabalho: Profissao.Engenheiro 
}

const mario: Pessoas = {
  name: 'Mario',
  idade: 26,
  casado: false,
  trabalho: Profissao.Engenheiro
}