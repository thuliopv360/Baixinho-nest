# Modulo de usuarios (users)

Precisamos criar:
    - users.module.ts
    - users.controller.ts
    - users.services.ts


- users.module.ts:
  x  - definir a classe do modulo
  x  -  exportar a classe
  x  - colocar o decorator de modulo
  x  - colocar as informações que o decorador deve receber(inicialmente vazias)

      - Relacionar controller
      - Relacionar provider(service)


- users.controller.ts:
    - definir a classe do controller
    - exportar nossa classe
    - colocar o decorator do controller
    - definir a rota do controller
    - criar o construtor, relacionando o service que ainda nao existe
    - definir as nossas rotas(create e readAll)
    - colocar a chamada das funções do service nas rotas



- users.services.ts:
    - definir a classe do service
    - exportar nossa classe
    - colocar o decorator de service(Injectable)
    - definir os metodos que estao sendo utilizados pelo controller
