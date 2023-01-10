# language: pt
Funcionalidade: Checkout

Contexto:
Dado que acesso a loja virtual
E informo credencias validas para autenticacao na plataforma

Cenário: Realizar um novo pedido
Quando adicionar "4" produtos no carrinho
E remover "1" produtos do carrinho
E acessar o carrinho
E prosseguir para o checkout e informar as dados solicitados
E finalizar o pedido
Então verifico que o pedido foi gerado com sucesso

