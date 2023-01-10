# language: pt
Funcionalidade: Produtos

Contexto:
Dado que acesso a loja virtual
E informo credencias validas para autenticacao na plataforma

Cenário: Adicionar multiplos produtos no carrinho
Quando adicionar "4" produtos no carrinho
Então verifico que a quantidade de produtos no carrinho é igual a "4"

Cenário: Adicionar multiplos produtos no carrinho
Quando adicionar "4" produtos no carrinho
E remover "1" produtos do carrinho
Então verifico que a quantidade de produtos no carrinho é igual a "3"
