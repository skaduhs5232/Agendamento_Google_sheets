# Projeto de Agendamento

Este é um projeto de agendamento desenvolvido com Angular e Node.js. Ele permite que os usuários marquem consultas com psicólogos.

## Funcionalidades

- **Login e Cadastro**: Os usuários podem se cadastrar e fazer login no sistema.
- **Marcar Agendamento**: Os usuários podem marcar consultas com psicólogos disponíveis.
- **Listagem de Psicólogos**: O sistema carrega e exibe uma lista de psicólogos disponíveis.
- **Seleção de Horários**: Os usuários podem selecionar horários disponíveis para suas consultas.

## Tecnologias Utilizadas

- **Frontend**: Angular
- **Backend**: Node.js com Express
- **Estilo**: SCSS e Bootstrap

## Estrutura do Projeto

- **src/app**: Contém os componentes do Angular, incluindo login, agendamento e serviços.
- **src/server.ts**: Configuração do servidor Node.js com Express para servir a aplicação Angular e lidar com requisições.

## Configuração e Execução

### Pré-requisitos

- Node.js instalado
- Angular CLI instalado

### Passos para Configuração

1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd Agendamento
   ```

2. Instale as dependências do projeto:
   ```sh
   npm install
   ```

### Executando o Backend

Para iniciar o servidor Node.js, execute o seguinte comando:
```sh
npm run dev
```
O servidor estará rodando na porta definida pela variável de ambiente `PORT` (padrão: 3333).

### Executando o Frontend

Para iniciar o servidor de desenvolvimento do Angular, execute o seguinte comando:
```sh
ng serve
```
O frontend estará disponível em `http://localhost:4200`.

### Variáveis de Ambiente

- **PORT**: Porta em que o servidor Node.js irá rodar (padrão: 3333).

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
