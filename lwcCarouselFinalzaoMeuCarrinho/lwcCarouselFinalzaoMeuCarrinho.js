import { LightningElement } from 'lwc';
//importar as imagens dos static resource( recursos estáticos no Salesforce)
import imagemBanner from '@salesforce/resourceUrl/LogoMeuCarrinho';
import imagemBanner2 from '@salesforce/resourceUrl/LogoMeuCarrinho2';
import imagemBanner3 from '@salesforce/resourceUrl/LogoMeuCarrinho3';

export default class LwcCarouselFinalzaoMeuCarrinho extends LightningElement {
    //começo variavel
    controladorImg = 0; //a aqui vai ser o controlado aonde vai ser incrementado e a cada incrementação muda a imagem
    imagemIndice; // aqui vai receber o valor do indice incrementado por um set interval
    //fim variavel

    //começo das funções

    //connect callback vai iniciar ao carregamento da página
    connectedCallback() {
        this.iniciarCarousel();
      }
    //disconect callback vai interromper o funcionamento devido alguma falha do carregamento da página
      disconnectedCallback() {
        this.paraCarousel();
      }
    //fazer uma função para inserir um style na div do carousel - como estão todas uma ao lado da outra vai aplicar um efeito de mudar a img
    atualizaCarousel() {
        const banner = this.template.querySelector('.containerCarousel');//lembrar que é uma classe não esquecer o bendito ponto(.)!!
        banner.style.transform = `translateX(-${this.controladorImg * 100}%)`;//aplica o style na minha classe inserida na var banner
    }
    //iniciar o carousel vamos usar u set interval para que depois de alguns segundos seja passado a imagem
    iniciarCarousel() {
        this.imagemIndice = setInterval(() => {
            this.controladorImg = (this.controladorImg + 1) % 3;
            this.atualizaCarousel();
        }, 5000);
    }
    //para o carousel para poder usar na função do botão de voltar ima imagem e reinicicar o intervalo
    paraCarousel(){
        clearInterval(this.imagemIndice);//reseta o set interval no caso a contagem que está a cada 5s
    }
    //função dos botões
    imagemAnterior(){
        this.controladorImg = (this.controladorImg - 1 + 3) % 3;
        this.atualizaCarousel();
        this.paraCarousel();
    }

    imagemProxima(){
        this.controladorImg = (this.controladorImg + 1) % 3;
        this.atualizaCarousel();
        this.paraCarousel();
    }
    //fim das funções
    //pegar as iagens importadas
    get imagem1() {
        return imagemBanner;
    }

    get imagem2() {
        return imagemBanner2;
    }

    get imagem3() {
        return imagemBanner3;
    }

}