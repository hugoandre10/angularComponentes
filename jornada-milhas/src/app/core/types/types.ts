export interface Promocao {
  id: number
  destino: string
  imagem: string
  preco: number
}

export interface UnidadeFederativa {
  id: number
  nome: string
  sigla: string
}



export interface Botoes {
  primary: BotaoConfig;
  secondary: BotaoConfig;
  success: BotaoConfig;
  danger: BotaoConfig;
}

export interface Depoimento {
  id: number
  texto: string
  autor: string
  avatar: string
}

export interface BotaoConfig {
  titulo: string;
  styles: { };
}

export interface pessoaUsuaria {
  nome: string,
  nascimento: string,
  cpf: string,
  telefone: string,
  email: string,
  senha: string,
  genero: string,
  cidade: string,
  estado: UnidadeFederativa
}


