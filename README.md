# Deliverize

Projeto simulando uma página de uma plataforma de pedidos de comida para delivery. A página conta com uma navbar, uma seção contendo o item escolhido pelo cliente com suas informações, como descrição e preço promocional, e com uma seção para adicionar itens extras e finalizar o pedido.

## Tecnologias utilizadas
- Vite
- React JS (com JSX, ou, HTML in JS)
- JavaScript
- CSS com BEM
- Git

## Extras
- Responsividade
- Consumo de API REST
- React Icons
- Material UI

## Como criar e rodar o projeto
No terminal:
```
npm create vite@latest Deliverize -- --template react
```
```
cd Deliverize
```
```
npm install
```
```
npm run dev
```

## Pacotes instalados
Font Roboto:
```
npm install --save typeface-roboto
```
React Icons:
```
npm install react-icons --save
```
Material UI:
```
npm install @mui/material @emotion/react @emotion/styled
```
- Utilizei para criar o Popover de "Adicionado com Sucesso" ao clicar no botão "Adicionar"

## Uso
- Clique nos ícones de "+" para adicionar um item extra específico e em "-" para retirar o que foi adicionado
- Quando a quantidade do ítem for igual a zero, o ícone de retirar estará desabilitado
- Na seção final, clique nos ícones de "+" para adicionar mais unidades do produto e em "-" para retirar o que foi adicionado
- Quando a quantidade do ítem for igual a um, o ícone de retirar estará desabilitado
- Ao clicar no botão "Adicionar" um Popover aparecerá no canto superior direito durante 3 segundos com a mensagem "Adicionado com sucesso"

## Estrutura do projeto
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx

- Os components estão organizados em diretórios, cada um contendo o arquivo principal, "index.jsx" e seu respectivo arquivo .css

## Imagens
- Dispositivos Mobile
- ![image](https://github.com/AdsonVilla/Deliverize/assets/105760278/38d94d25-8532-45ee-a210-e41f5022859d)
- ![image](https://github.com/AdsonVilla/Deliverize/assets/105760278/1c20962f-ed58-45e2-8d08-a654dcaf0aa6)
- Ao clicar no botão "Adicionar":
- ![image](https://github.com/AdsonVilla/Deliverize/assets/105760278/54183448-fd81-423d-9fd1-145cff25050d)


- Dispositivos Desktop
- ![image](https://github.com/AdsonVilla/Deliverize/assets/105760278/e97c2922-8fb2-46b9-8fb8-4732608a817f)
- ![image](https://github.com/AdsonVilla/Deliverize/assets/105760278/2167bafc-7f3d-4f13-86af-3346c7beb1f3)
- Ao clicar no botão "Adicionar"
- ![image](https://github.com/AdsonVilla/Deliverize/assets/105760278/f2b68ebe-2dc8-458b-8305-3b6e98b48c17)

 
