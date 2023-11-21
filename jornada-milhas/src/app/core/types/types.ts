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

export interface BotaoConfig {
  titulo: string;
  styles: { };
}
