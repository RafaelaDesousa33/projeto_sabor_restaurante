

/*selecionando elementos*/
const containerCardapioItens = document.querySelector("#container_cardapio_itens");

const itens_cardapio = [
    { nome: "Burger Artesanal", price: 29.90, img: "imagens/imagem_hambuguer_cardapio.jpg", descricao: "Blend especial, queijo cheddar, Bacon crocante e molho de casa." },
    { nome: "Massa ao Pesto", price: 24.90, img: "imagens/imagem_massa_ao_pesto.jpg", descricao: "Penne artesanal com pesto genovés e tomate cereja." },
    { nome: "Salmão Grelhado", price: 39.90, img: "imagens/imagem_salmao_grelhado.jpg", descricao: "Salmão fresco com legumes grelhados e molho especial." },
    { nome: "Petit Gateau", price: 16.90, img: "imagens/imagem_petit_gateau.jpg", descricao: "Bolo de chocolate com recheios cremosos e sorvete de creme" },
];

const exibir_pedidos = () => {

    itens_cardapio.forEach((item) => {

        // crição de elementos
        const boxCardapio = document.createElement("div")
        const btn_pedir = document.createElement("button");
        const paragrafo_descricao = document.createElement("p");
        const imagem = document.createElement("img");
        const boxCardapioText = document.createElement("div");
        const paragrafo_preco = document.createElement("p");
        const paragrafo_titulo = document.createElement("p");

        // classes
        imagem.classList.add("box_cardapio_img")
        boxCardapioText.classList.add("box_cardapio_text");
        boxCardapio.classList.add("box_cardapio");
        paragrafo_preco.classList.add("p_price");
        btn_pedir.classList.add("btn_pedir");
        paragrafo_titulo.classList.add("p_title");


        // html
        btn_pedir.textContent = "Pedir"
        paragrafo_descricao.textContent = item.descricao;
        paragrafo_descricao.style.color = "#fff";
        imagem.src = item.img;
        paragrafo_preco.textContent = item.price;
        paragrafo_titulo.textContent = item.nome;

        // adicionanado no elemento
        boxCardapio.appendChild(imagem);
        boxCardapioText.appendChild(paragrafo_descricao);
        boxCardapioText.appendChild(paragrafo_preco);
        boxCardapioText.appendChild(btn_pedir);
        boxCardapio.appendChild(paragrafo_titulo);


        boxCardapio.appendChild(boxCardapioText);
        containerCardapioItens.appendChild(boxCardapio);

    });

};

exibir_pedidos();




