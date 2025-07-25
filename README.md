# _Minimal-API-Formula1_
Uma minimal Api que possui o objetivo de listar os pilotos e as equipes que estão correndo na fórmula. 

### _Primeiro passos_

Definir dois endpoints para essa simples api que serão os de pilotos e o outro das equipes.

### _Uso do Boilerplate_

Para facilitar e aumentar a velocidade de produção da Api vamos usar o boilerplate **Node Boilerpalte - Blue Edition** que já vem com um tempalte base de confugurações para começarmos a desenvolver a nossa aplicação.

#### **Boilerplate link:** https://github.com/felipeAguiarCode/node-blue-boilerplate  

### Configuração de um server com o framework Fastify

```ts
//Criação e configuração do servidor
import Fastify from "fastify";

const server = Fastify({
    logger: true
})

server.listen({port:8000}, (err,address)=>{
    console.log('Server is Activated')
    if(err){
        server.log.error(err)
        process.exit(1)
    }
})

export default server

```

### O database será um arquivo TypeScript que a api irá consumir
**Serão dois arquivos uma para os drivers(pilotos) e os teams(equipes)**

- drivers.ts
```ts

export interface Driver {
  id: number;
  name: string;
  age: number;
  nationality: string;
  teamId: number; 
}

export const drivers: Driver[] = [
  {
    id: 1,
    name: "Lewis Hamilton",
    age: 39,
    nationality: "British",
    teamId: 1,
  },
  {
    id: 2,
    name: "Max Verstappen",
    age: 27,
    nationality: "Dutch",
    teamId: 2,
  },
  {
    id: 3,
    name: "Charles Leclerc",
    age: 26,
    nationality: "Monegasque",
    teamId: 3,
  },
  {
    id: 4,
    name: "Sergio Pérez",
    age: 34,
    nationality: "Mexican",
    teamId: 2,
  },
];

```
- teams.ts
```ts
export interface Team {
  id: number;
  name: string;
  country: string;
}

export const teams: Team[] = [
  {
    id: 1,
    name: "Mercedes-AMG Petronas",
    country: "Germany",
  },
  {
    id: 2,
    name: "Red Bull Racing",
    country: "Austria",
  },
  {
    id: 3,
    name: "Scuderia Ferrari",
    country: "Italy",
  },
  {
    id: 4,
    name: "McLaren F1 Team",
    country: "United Kingdom",
  },
  {
    id: 5,
    name: "Alpine F1 Team",
    country: "France",
  },
  {
    id: 6,
    name: "Aston Martin Aramco",
    country: "United Kingdom",
  },
  {
    id: 7,
    name: "Williams Racing",
    country: "United Kingdom",
  },
  {
    id: 8,
    name: "Stake F1 Team Kick Sauber",
    country: "Switzerland",
  },
  {
    id: 9,
    name: "Visa Cash App RB",
    country: "Italy",
  },
  {
    id: 10,
    name: "Haas F1 Team",
    country: "United States",
  },
];

```

### Criação das rotas uma para o endpoint drivers (pilotos) e outras para os teams (equipe)
### Driver list router
```ts
server.get('/drivers', (req,res)=>{
    return {drivers}
})
```

### Driver find router
```ts
interface Driverparams{
    id:string
}

server.get<{Params:Driverparams}>('/drivers/:id', async (req,res)=>{
    const id = Number(req.params.id)
    const driver = drivers.find((d)=> d.id === id)

    if(!driver){
        res.type('application/json');
        return {message: "Driver is not found"}
    }else{
        res.type('application/json');
        return{driver}
    }
})
```

### Teams route
```ts
server.get('/teams',(req,res)=>{
    res.type('application/json');
    return {teams}
})
```
### It's finish api

### **Você pode deixar sugestões ou até melhorar ela quem sabe usar em um projetinho...**

### O que foi aprendido?

- Usar a fastify api
- Como um boilerplate pode te poupar tempo na criação de um projeto
- Routes
- Como fazer o server rodar
- E como consumir dados de um pequeno arquivo local

## Um projeto bem simples, mas para você trabalhar vários assuntos importantes de uma api e também introdução a um framework... ##

