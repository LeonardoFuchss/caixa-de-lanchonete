class CaixaDaLanchonete {
    constructor() { // Construtor que inicializa os itens.
        this.itens= {
            cafe: { descricao: "Cafe", valor: 3.00 },
            sucoNatural: { descricao: "Suco natural", valor: 6.20 },
            sanduiche: { descricao: "Sanduiche", valor: 6.50 },
            salgado: { descricao: "Salgado", valor: 7.25 },
            chantily: { descricao: "chantily (extra do cafe)", valor: 1.50 },
            queijo: { descricao: "Queijo (extra do sanduiche)", valor: 2.00 },
            combo1: { descricao: "1 suco e 1 sanduiche", valor: 9.50 },
            combo2: { descricao: "1 cafe e 1 sanduiche", valor: 7.50 }
        }
        this.formaDePagamento = ["debito", "credito", "dinheiro"];
    }


validarPedido(itens) {
           
    if(itens.length === 0) {
     return "Não há itens no carrinho de compra!";
 }

  let principal = false
  let extras = false
  let combos = false
            
          // Validações dos itens.

        for (const itemQuantidade of itens) {
            const [item, quantidade] = itemQuantidade.split(',');

            if (!this.itens[item]) { // Verifica se o item passado é válido.
                return "Item inválido!";
            }

            if (quantidade == 0) { // Verifica se o item é vazio ou não.
                return "Quantidade inválida!";
            }

            if(this.itens[item].descricao.includes("extra")) { // Verifica se a palavra "extra" está incluida no item selecionado
           extras = true
            } else {
           principal = true
            }

            if(!principal & extras) { // Verifica se o item extra está sendo passado sem o item principal.
             return "Item extra não pode ser pedido sem o principal";
            }

            if(this.itens[item].descricao.includes("1 suco e 1 sanduiche" || "1 cafe e 1 sanduiche")) { 
                combos = true
                 } else {
             principal = true
                 }

            if(!principal & combos & extras) { // Verifica se os itens passados forem um combo e um extra, não poderá ser pedido sem um item principal.
                  return "Item extra não pode ser pedido sem o principal";
                 }

            if(item === "cafe" || item === "queijo") {
                    if (principal = false) {
                        return "Item extra não pode ser pedido sem o principal"
                    }
                 }

                }
    }

    calcularValorDaCompra(formaDePagamento, itens) {

        const validacao = this.validarPedido(itens);

        if (validacao) {
            return validacao;
        }

        let valorTotal = 0;


        for (const itemQuantidade of itens) {
            const [item, quantidade] = itemQuantidade.split(',');

            valorTotal += this.itens[item].valor * parseInt(quantidade); // Faz o cálculo total do pedido.
        }

       // Verificações para as formas de pagamentos terem seus respectivos descontos ou acréscimos selecionados.

        if (this.formaDePagamento.includes(formaDePagamento)) {
            if (formaDePagamento == "dinheiro") {
                valorTotal *= 0.95; // Desconto de 5% para pagamento em dinheiro
            } else if (formaDePagamento == "debito") {
                // Não faz nada para pagamento em débito valorTotal 
            } else if (formaDePagamento == "credito") {
                valorTotal *= 1.03; // Acréscimo de 3% para pagamento em crédito
            }
        } else {
            return "Forma de pagamento inválida!";
        }

        valorTotal = Number(valorTotal.toFixed(2));

        // Formata do valor total para a moeda Brasileira. (BR)

         const formatterValorTotal = valorTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        })
        
        return formatterValorTotal;
   
    }
}

const caixa = new CaixaDaLanchonete(); // Instância da classe
console.log(caixa.calcularValorDaCompra("debito", ["cafe, 1", "queijo, 1"]));

export { CaixaDaLanchonete };