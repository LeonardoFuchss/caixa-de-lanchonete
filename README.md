# Caixa da Lanchonete - Sistema de Pedidos, Pagamentos e Testes


Este é um projeto simples de uma classe CaixaDaLanchonete que simula um sistema de pedidos e pagamentos para uma lanchonete. A classe oferece funcionalidades para calcular o valor total da compra, aplicando descontos ou acréscimos baseados na forma de pagamento escolhida, e também valida os pedidos para garantir que sejam feitos corretamente.

## Funcionalidades

A classe CaixaDaLanchonete oferece as seguintes funcionalidades:

Inicialização de Itens e Formas de Pagamento: A classe é inicializada com um conjunto de itens disponíveis para compra na lanchonete, juntamente com suas descrições e valores. Além disso, ela possui uma lista de formas de pagamento aceitas.


Validação de Pedidos: A função validarPedido valida os pedidos feitos, verificando se os itens e quantidades passados são válidos. Ela também faz verificações específicas para garantir que os pedidos estejam corretos, como a validação de pedidos extras em relação aos itens principais e a validação de combos.


Cálculo do Valor da Compra: A função calcularValorDaCompra calcula o valor total da compra com base nos itens selecionados e na forma de pagamento escolhida. Ela aplica descontos ou acréscimos de acordo com a forma de pagamento e retorna o valor formatado em moeda brasileira (BRL).

### Formas de pagamento

A classe aceita as seguintes formas de pagamento:

Débito: Sem acréscimos ou descontos.
Crédito: Acréscimo de 3% no valor total.
Dinheiro: Desconto de 5% no valor total.
Itens Disponíveis
A lanchonete oferece os seguintes itens para compra:

Café
Suco Natural
Sanduíche
Salgado
Chantilly (extra do café)
Queijo (extra do sanduíche)
Combo 1 (1 suco e 1 sanduíche)
Combo 2 (1 café e 1 sanduíche)
Contribuição
Contribuições são bem-vindas! Se você encontrar bugs, melhorias ou novas funcionalidades para adicionar, fique à vontade para abrir um issue ou enviar um pull request.

#### TESTES

Testes Automatizados: O projeto inclui uma suíte de testes automatizados para validar as funcionalidades da classe. Os testes abrangem diversos cenários, incluindo validação de pedidos vazios, cálculos de valores para diferentes itens e formas de pagamento, validações de pedidos inválidos e mais.

##### Como Executar os Testes
Para executar os testes automatizados incluídos no projeto, siga os passos abaixo:

Certifique-se de ter o Node.js instalado em sua máquina.

Clone este repositório para o seu ambiente local.

Abra o terminal e navegue até o diretório raiz do projeto.

Execute o seguinte comando para instalar as dependências necessárias:

Copy code
npm install
Depois de instalar as dependências, execute o seguinte comando para executar os testes:

bash
Copy code
npm test
