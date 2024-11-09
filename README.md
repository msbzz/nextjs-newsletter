# nextjs-newsletter

- Este projeto é fruto do curso de 'Next.JS: full stack com lambdas' da plataforma ALURA

## Introdução

   - Este projeto demonstra a criação de uma aplicação simples de newsletter utilizando funcionalidades full stack, com Next.js, Supabase e SendGrid. O objetivo é criar uma aplicação completa que permita o cadastro de e-mails em uma newsletter, armazenamento em um banco de dados e envio de confirmações via e-mail.

 <img src="/public/img/projeto.png" alt="white board" width="500"/>

 
## 📋 Objetivos do Projeto

1. **Introdução ao desenvolvimento full stack com Next.js**: Integrar o front-end e o back-end dentro de uma mesma aplicação, usando API Routes do Next.js para manipulação de dados e operações com HTTP.

2. **Planejamento do Projeto**: Utilizar o conceito de **whiteboard** (quadro branco) para definir o escopo e fluxo do projeto antes de iniciar o desenvolvimento. Este método é comumente usado em grandes empresas para organizar e visualizar as funcionalidades desejadas.

3. **Criação de uma API REST com Next.js**: Implementar rotas de API para lidar com requisições HTTP e gerenciar as operações de cadastro e validação de e-mails.

4. **Integração com o Supabase**: Usar o Supabase como banco de dados e back-end para armazenar informações dos usuários da newsletter.

5. **Validação e Sanitização de Dados**: Implementar validações no front-end e back-end para garantir que o e-mail informado seja válido e seguro, evitando possíveis vulnerabilidades.

6. **Envio de E-mails de Confirmação**: Configurar o envio de e-mails utilizando o SendGrid, que fornece uma API para envio de e-mails de forma confiável, evitando que as mensagens sejam marcadas como spam.

## 🚀 Funcionalidades

1. **Cadastro de E-mail**: Um campo para que os usuários possam inserir seu e-mail e se inscrever na newsletter. Validação de e-mail no front-end e back-end para garantir que o formato esteja correto.

2. **Armazenamento de Dados**: Salvamento dos e-mails no Supabase, com uma estrutura de tabela dedicada para guardar as informações dos inscritos na newsletter.

3. **Envio de E-mail de Boas-vindas**: Após a inscrição, o usuário recebe um e-mail de confirmação, implementado via SendGrid.

4. **Estrutura Modular e Organizada**: Separação das responsabilidades no código, como validação de dados, configuração de API e uso de variáveis de ambiente para garantir segurança e escalabilidade.

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e criação de APIs.
- **Supabase**: Banco de dados e back-end como serviço, uma alternativa open-source ao Firebase.
- **SendGrid**: Serviço para envio de e-mails transacionais, utilizado para confirmação de inscrição na newsletter.
- **TypeScript**: Tipagem estática para maior segurança e previsibilidade do código.

## ⚙️ Estrutura do Projeto

```
.
├── pages
│   ├── index.tsx                 # Página principal da aplicação
│   ├── newsletter.tsx            # Página para cadastro na newsletter
│   └── api
│       └── newsletter
│           └── optin.ts          # API para manipular o cadastro na newsletter
├── .env                          # Variáveis de ambiente (não versionado)
└── README.md                     # Documentação do projeto
```

## 📝 Pré-requisitos

1. **Node.js** e **Yarn** ou **npm** instalados em sua máquina.
2. Conta no **Supabase** e **SendGrid** para configurar o banco de dados e o envio de e-mails.

### Observação Importante

- **Supabase**: É necessário criar uma conta no Supabase para configurar o banco de dados que armazenará os e-mails dos usuários.

https://supabase.com/

**obs** : Para acessar dados em uma tabela do Supabase quando o Row Level Security (RLS) está ativado, você precisa de uma chave que tenha permissões para acessar as tabelas protegidas, como a chave de serviço (service_role). A chave pública (anon) tem permissões limitadas e não pode acessar dados protegidos quando o RLS está habilitado.

- **SendGrid**: É necessário criar uma conta no SendGrid para configurar o envio de e-mails de confirmação. O SendGrid facilita o envio de e-mails, pois evita que eles caiam na pasta de spam, oferece uma API simplificada e dispensa a configuração manual de servidores de e-mail.

https://sendgrid.com/en-us

 Além do SendGrid, você pode optar por outros serviços gratuitos de envio de e-mail, como Mailgun,Amazon SES ou mesmo EmailJS ou Nodemailer com uma conta gratuita do Gmail..


 <img src="/public/img/email.png" alt="servidor de email" width="500"/>

 
## Instalação do Projeto

### 1. Clonar o Repositório

Primeiramente, faça o download do código fonte deste repositório no GitHub utilizando o comando:

```bash
git clone https://github.com/msbzz/nextjs-newsletter.git
```

### 2. Instalar as Dependências

Navegue até a pasta do projeto e instale todas as dependências necessárias utilizando o **npm** (que é instalado junto com o Node.js):

```bash
cd nextjs-newsletter
npm install ou yarn install
```

## Aplicativos de Interface de Usuário (IU)

Neste projeto utilizei o **vscode** mas é compatível com qualquer editor de código

- **Visual Studio Code**: Um editor leve e poderoso para desenvolvimento de aplicações web. Você pode baixá-lo [aqui](https://code.visualstudio.com/).


### Executando o Projeto

Estando com seu projeto pronto, você pode iniciar o servidor de desenvolvimento do Next.js com o comando:

```bash
npm run dev ou yarn dev
```

O projeto estará acessível em `http://localhost:3000/newsletter`  


  <img src="/public/img/devdog2.gif" alt="servidor de email" width="500"/>
