# Elianflix
Uma aplicação Frontend feita com ReactJs inpirada na Netflix. Esta aplicação desenvolvida durante a semana Imersão React da Alura.

<img alt="Imagem 1" src="imgs/img.png" width="80%" />
<img alt="Imagem 2" src="imgs/img2.png" width="80%" />

### Backend
O Backend da aplicação foi feito utilizando a dependência json-server, que possibilita uma interface restful através de um arquivo
json que representa o banco de dados. Conforme novos dados são adicionados, o json de dados é atualizado.

### Frontend
O Frontend foi todo feito através do ReactJS, e utilizando algumas dependências para melhor desenvolvimento dos componentes,
como o **styled-components**, e **slick-slider**.

### Desafios
O desafio de aumento do componente *VideoCard* foi realizado utilizando uma pseudo-classe do
*css* chamada *hover* quando o mouse passa em cima do elemento, realizando uma anomação de
5 segundos. Outro desafio realizado, foi o conserto de um *Bug* do componente *FormField*,
o qual o seu input apresentava uma animação errada quando estava preenchido. Para consertar
esse erro, foi necessário utilizar a pseudo-classe *not* do *css* quando o elemento span
não estava com o foco, para que esse elemento diminuíse seu tamanho e o texto fosse
apresentado.
