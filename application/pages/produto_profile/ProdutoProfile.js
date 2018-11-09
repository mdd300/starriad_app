import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';
import {style} from './ProdutoProfile-styles';
import SystemTabs from '../../components/tabs/SystemTabs'
import HeaderProduto from './produtoProfileComponents/headerProduto/HeaderProduto'
import SlideProduto from './produtoProfileComponents/slideProduto/SlideProduto'
import GradeProduto from './produtoProfileComponents/gradeProduto/GradeProduto'
import ProdutosService from "../../services/produto/produto-service";
import {withNavigation} from "react-navigation";
import Perfil from "../perfil/Perfil";

class ProdutoProfile extends React.Component {

    constructor(props) {
        super(props);

        let {height} = Dimensions.get('window');

        this.state = {
            productInfo: [],
            relatedProducts: '',
            produtoVitrine: false,
            dados_carregados: false,
            relacionados_carregados: false,
            productSlug: this.props.navigation.getParam('produto_slug'),
            profileUrl: this.props.navigation.getParam('profile_url'),
            img_produto: this.props.navigation.getParam('img_produto'),

            /* Barra de avaliação do usuário */
            ratingBar: [
                {pos: 1, active: false},
                {pos: 2, active: false},
                {pos: 3, active: false},
                {pos: 4, active: false},
                {pos: 5, active: false}
            ],

            /* Barra de avaliação do produto*/
            ratingMedia: [
                {pos: 1, active: false},
                {pos: 2, active: false},
                {pos: 3, active: false},
                {pos: 4, active: false},
                {pos: 5, active: false}
            ],

            screenHeight: height,
            produto: produto_object,
        }
    }

    componentDidMount(){
        this.getProductInfo();
    }

    params = {};

    /* Função responsável por trazer as informações do produto */
    getProductInfo(relacionados, product_relacionado) {

        if(relacionados){

            if (!this.state.produtoVitrine) {
                console.log('product_relacionado: ', product_relacionado);
                this.params = {
                    produto_slug: product_relacionado,
                    profileUrl: this.state.profileUrl
                };
            } else {
                this.params = this.state.produtoVitrine;
            }

        }else{
            if (!this.state.produtoVitrine) {
                this.params = {
                    produto_slug: this.state.productSlug,
                    profileUrl: this.state.profileUrl
                };
            } else {
                this.params = this.state.produtoVitrine;
            }
        }

        ProdutosService.getProduct(this.params).then((res) => {

            console.log('res: ', res);

            if (res.data.success === true) {
                /* Obtem os resultados do produto */
                this.state.productInfo = res.data.produto;
                this.state.productInfo.profileUrl = this.params.profileUrl;
                this.setState({
                    productInfo: this.state.productInfo,
                    dados_carregados: true
                });

                console.log('AQUI: ', this.state.productInfo);

                //Verifica as se a variante possui uma imagem
                // var varianteImagemDestaque = 0;
                //
                // while (this.state.productInfo.cores[varianteImagemDestaque].imgs.length <= 0) {
                //     varianteImagemDestaque++;
                // }
                // $scope.destaqueImg = $scope.productInfo.cores[varianteImagemDestaque].imgs[0].image_url;

                this.state.productInfo.cores.forEach((value) => {
                    value.nomes_grades = [];
                    value.grade.forEach((grade) => {
                        value.nomes_grades.push(grade.tamanho_nome);
                    });
                });

                this.setState({
                    productInfo: this.state.productInfo
                });

                // /* Obtém produtos relacionados */
                this.getRelated(this.state.productInfo.categorias);

                // /* Obtém os valores das notas */
                this.state.productInfo.avaliado ? this.state.ratingBar.set = this.state.productInfo.avaliado.status : this.state.ratingBar.set = false;
                this.state.productInfo.avaliacao ? this.loadRate(false, this.state.productInfo.avaliacao.media) : '';
                this.state.productInfo.avaliado ? this.loadRate(this.state.productInfo.avaliado.nota) : '';

                this.setState({
                    ratingBar: this.state.ratingBar
                });

                // var tamanhos = [];
                // $scope.productInfo.cores.forEach(function (cor) {
                //     cor.grade.forEach(function (item) {
                //         tamanhos.push(item.tamanho_nome);
                //     });
                // });
                // tamanhos = new Set(tamanhos);
                // tamanhos.forEach(function (item) {
                //     $scope.tamanhos.push({nome: item});
                // });
                //
                // $(document).ready(function () {
                //     new SmartPhoto('.img-slide');
                // });
                //
                // setTimeout(function () {
                //     $scope.carregando = false;
                //     $('.zoomContainer').css({'display': 'block'});
                //     $scope.$apply();
                // }, 1000);

            } else {
                this.state.productInfo = false;
                // setTimeout(function () {
                //     $scope.carregando = false;
                //     $scope.$apply();
                // }, 1000);
            }
        }, (err) => {
            console.log('AQUI: ', err);
            // alerta('Houve um problema, verifique sua conexão.');
            // setTimeout(function () {
            //     $scope.carregando = false;
            //     $scope.$apply();
            // }, 1000);
        });
    };

    /* Função responsável por carregar os dados da barra de avaliação */
    loadRate(rate, media){
        if (this.state.ratingBar.set) {
            for (let i = 0; i < rate.nota; i++) {
                this.state.ratingBar[i].active = true;
                this.setState({
                    ratingBar: this.state.ratingBar
                });
            }
        }
        for (let _i = 0; _i < media; _i++) {
            this.state.ratingMedia[_i].active = true;
            this.setState({
                ratingMedia: this.state.ratingMedia
            });
        }
    };

    /* Função responsavel por alterar a barra do usuário de acordo com o mouse*/
    changeRating(rating){
        if (!this.state.ratingBar.set) {
            for (let i = 0; i < rating.pos; i++) {
                this.state.ratingBar[i].active = true;
                this.setState({
                    ratingBar: this.state.ratingBar
                });
            }
        }
    };

    /* Função responsável por resetar a barra do usuário */
    resetBar(){
        if (!this.state.ratingBar.set) {
            this.state.ratingBar = [
                {pos: 1, active: false},
                {pos: 2, active: false},
                {pos: 3, active: false},
                {pos: 4, active: false},
                {pos: 5, active: false}];
            this.setState({
                ratingBar: this.state.ratingBar
            });
        }
    };

    /* Função responsável por enviar ou excluir uma avaliaçao */
    setRating(rate, rating){

        if (!this.state.ratingBar.set) {
            this.state.ratingBar.set = true;
            this.setState({
                ratingBar: this.state.ratingBar
            });

            let params = {
                nota: rate + 1,
                produto_id: this.state.productInfo.produto_id
            };

            ProdutosService.sendRating(params).then((res) => {
                console.log('res: ', res);

            }, (err) => {
                console.log('Verifique sua conexão.', err);
            });
        } else {
            let _params = {
                remove: true
            };

            this.state.ratingBar.set = false;
            this.setState({
                ratingBar: this.state.ratingBar
            });

            ProdutosService.sendRating(_params).then((res) => {
                console.log('ressss: ', res);
            }, (err) => {
                console.log('Verifique sua conexão.', err);
            });
        }
        this.changeRating(rating);

        console.log('this.state.ratingBar DEPOIS: ', this.state.ratingBar);
    };

    getRelated(categorias){

        let itens = []; // Array com as tags que serão enviadas

        /*Conversão do objeto das tags */
        categorias.map((cat) => {
            itens.push(cat.tag);
        });

        let params = {
            categorias: itens
        };

        ProdutosService.getRelated(params).then((res) => {
            this.state.relatedProducts = res.data;
            this.setState({
                relatedProducts: this.state.relatedProducts,
                relacionados_carregados: true
            });
        }).catch((e) => {
            console.log('ERROR: ', e);
        });

    }

    render() {
        return (
            <View style={style.containerPage}>

                <View style={[style.headerNotificationBar]} />

                <HeaderProduto callBack={this.toBack.bind(this)} image={this.state.productInfo.img_url_big} name={this.state.productInfo.produto_descricao} />

                <ScrollView ref={(scroller) => {this.scroller = scroller}} style={style.containerProdutos}>

                    <SlideProduto height={400} images={this.state.img_produto} />

                    <View style={style.containerInfo}>

                        <View style={style.headerInfo}>
                            <View style={style.titleContainer}>
                                <Text style={style.title}>{this.state.productInfo.produto_descricao}</Text>
                            </View>

                            <View style={style.desc}>
                                <Text style={style.textDesc}>
                                    Marca:
                                </Text>

                                <TouchableOpacity onPress={() => {
                                    let profile_url = this.state.productInfo.profile_url;
                                    let perfil_nome = this.state.productInfo.perfil_nome;
                                    this.props.navigation.navigate('Perfil', {profile_url, perfil_nome});
                                }}>
                                    <Text style={[style.textDesc, {fontWeight: 'bold', marginLeft: 5, textDecorationLine: 'underline'}]}>
                                        {this.state.productInfo.perfil_nome}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={style.desc}>
                                <Text style={[style.textDesc, {color: '#9f9f9f'}]}>
                                    Ref.:
                                </Text>

                                <Text style={[style.textDesc, {color: '#9f9f9f', marginLeft: 5}]}>
                                    {this.state.productInfo.produto_cod_venda}
                                </Text>
                            </View>

                            <View style={style.desc}>
                                <Text style={[style.textDesc, {fontWeight: 'bold', fontSize: 18}]}>
                                    {this.state.productInfo.produto_preco_atacado}
                                </Text>
                            </View>

                            <View style={style.desc}>
                                {this.state.ratingMedia.map((rating, index) => (
                                    <View key={index} style={style.containerIcon}>
                                        {rating.active == false ?
                                            <Image style={style.imageContainer}
                                                resizeMode={'contain'}
                                                source={require('../../assets/imgs/png/icons/star.png')}/> :

                                            rating.active ?

                                            <Image style={[style.imageContainer, {tintColor: '#000'}]}
                                                   resizeMode={'contain'}
                                                   source={require('../../assets/imgs/png/icons/star.png')}/> :

                                                null
                                        }
                                    </View>
                                ))}

                                <View style={{marginLeft: 5, marginTop: 5}}>
                                    <Text style={{fontSize: 12}}>
                                        {/*{this.state.productInfo.avaliacao.qtd}*/}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {this.state.dados_carregados &&
                        <GradeProduto productInfo={this.state.productInfo} qtd={this.state.productInfo.qtdTotal} grade={this.state.productInfo.grades} variantes={this.state.productInfo.cores} />
                    }

                    {this.renderDetalhesProduto()}
                    {this.renderComposicao()}
                    {this.renderBotoesCompartilhar()}
                    {this.renderIconsAvaliacao()}
                    {this.renderProdutosRelacionados()}

                </ScrollView>
            </View>
        )
    }

    renderDetalhesProduto(){
        return(
            <View style={style.containerDetalhesProduto}>
                <View style={style.contentDetalhesProduto}>
                    <Text style={style.titleDetalhesProduto}>
                        Detalhes do produto
                    </Text>

                    <Text style={style.descDetalhesProduto}>
                        {this.state.productInfo.produto_descricao}
                    </Text>
                </View>
            </View>
        );
    }

    renderComposicao(){
        return(
            <View style={style.containerDetalhesProduto}>
                <View style={style.contentDetalhesProduto}>
                    <Text style={style.titleDetalhesProduto}>
                        Composição
                    </Text>

                    <Text style={style.descDetalhesProduto}>
                        Material Principal:
                    </Text>
                </View>
            </View>
        );
    }

    shareToWhatsApp = () => {
        Linking.openURL(`whatsapp://send?text=${'http://ws.houpa.com.br/produto/' + this.state.productInfo.profile_url + '/' + this.state.productInfo.produto_slug}`);
    };

    renderBotoesCompartilhar(){

        return(
            <View style={style.containerDetalhesProduto}>
                <View style={style.contentDetalhesProduto}>
                    <Text style={style.titleDetalhesProduto}>
                        Compartilhar
                    </Text>

                    <View style={style.containerBotoesCompartilhar}>
                        <TouchableOpacity onPress={() => this.shareToWhatsApp()} style={style.touchBotoes}>
                            <Text style={style.labelBotoes}>
                                Whatsapp
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.touchBotoes}>
                            <Text style={style.labelBotoes}>
                                Facebook
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.touchBotoes}>
                            <Text style={style.labelBotoes}>
                                Copiar Link
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    scrollToTop = () => {
        this.scroller.scrollTo({x: 0, y: 0});
    };

    renderIconsAvaliacao(){
        return(
            <View style={style.containerDetalhesProduto}>
                <View style={[style.contentDetalhesProduto, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={style.titleDetalhesProduto}>
                        Avalie este produto
                    </Text>

                    <View style={style.containerIconsAvaliar}>

                        {this.state.ratingBar.map((rating, index) => (

                            rating.active == false ?

                            <TouchableOpacity key={index} onPress={() => this.setRating(index, rating)} style={style.containerIcon}>
                                <Image style={style.iconsAvaliar}
                                       resizeMode={'contain'}
                                       source={require('../../assets/imgs/png/icons/star.png')}/>
                            </TouchableOpacity> :

                                rating.active ?

                                    <TouchableOpacity key={index} onPress={() => this.resetBar()} style={style.containerIcon}>
                                        <Image style={[style.iconsAvaliar, {tintColor: '#ff1824'}]}
                                               resizeMode={'contain'}
                                               source={require('../../assets/imgs/png/icons/star.png')}/>
                                    </TouchableOpacity> :

                                    null

                        ))}
                    </View>
                </View>

                {this.state.ratingBar.set &&
                    <Text>
                        Obrigado pela sua avaliação!
                    </Text>
                }
                <View>

                </View>
            </View>
        );
    }

    renderProdutosRelacionados(){
        if(this.state.relacionados_carregados && this.state.relatedProducts.status !== false) {
            return (
                <View style={style.containerDetalhesProduto}>
                    <View style={[style.contentDetalhesProduto, {alignItems: 'center', justifyContent: 'center'}]}>
                        <Text style={style.titleDetalhesProduto}>
                            Produtos Relacionados
                        </Text>

                        <View style={style.containerProdutosRelacionados}>
                            <ScrollView style={style.scrollProdutosRelacionados} horizontal={true}
                                        showsHorizontalScrollIndicator={false}>

                                {this.state.relatedProducts.map((produtos, index) => (
                                    <TouchableOpacity onPress={() => {
                                        this.getProductInfo(true, produtos.produto_slug);
                                        this.scrollToTop();
                                    }} activeOpacity={0.9} key={index}
                                                      style={style.touchProdutosRelacionados}>
                                        <Image style={style.imgProdutosRelacionados}
                                               source={{uri: produtos.product_image.medium}}/>

                                        <Text style={style.descProdutosRelacionados} numberOfLines={1} ellipsizeMode="tail">
                                            {produtos.produto_descricao}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            );
        }else{
            return(
              <View>
                  <Text>
                      Não há produtos relacionados
                  </Text>
              </View>
            );
        }

    }

   toBack() {
       this.props.navigation.goBack(null)
    }
}

const slides = [
    {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/210-e1385035301691.jpg", descricao: 'BLUSA C/ DECOTE'},
    {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/17-e1385035748428.jpg", descricao: 'BLUSA C/ DECOTE'},
    {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/82-e1385036169747.jpg", descricao: 'BLUSA C/ DECOTE'},
    {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/46-e1385035727190.jpg", descricao: 'BLUSA C/ DECOTE'},
    {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/55-e1385035776806.jpg", descricao: 'BLUSA C/ DECOTE'},
];

const produto_object = {
    nome: 'Vestido Florido Papaya',
    nome_marca: 'Papaya',
    referencia: 'CR1212151BR',
    empresa_img: 'https://i.pinimg.com/originals/c1/23/62/c12362108daf70d232087d08cefe3ed2.jpg',
    preco: 'R$ 39,90',
    descricao: "Mussum Ipsum, cacilds vidis litro abertis.A ordem dos tratores não altera opão duris. In elementis mé pra quem é amistosis quis leo.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.",
    imgs: [
        {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/210-e1385035301691.jpg"},
        {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/17-e1385035748428.jpg"},
        {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/82-e1385036169747.jpg"},
        {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/46-e1385035727190.jpg"},
        {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/55-e1385035776806.jpg"},
    ],

    grade: [
        {tamanho_nome: 'PP'},
        {tamanho_nome: 'P'},
        {tamanho_nome: 'M'},
    ],

    variantes: [
        {
            cor_nome: 'Vinho',
            actived: false,
            obs: 'pano liso',
            cor_valor: '',
            image_valor: 'https://blog.maximustecidos.com.br/clube/wp-content/uploads/2017/10/tecido-zibeline-diagonal-marsala.jpg',
            grade: [
                {tamanho_nome: 'PP', tamanho_quant: 21, quantidade: 0},
                {tamanho_nome: 'P', tamanho_quant: 0, quantidade: 0},
                {tamanho_nome: 'M', tamanho_quant: 15, quantidade: 0}
            ]
        },
        {
            cor_nome: 'Laranja',
            obs: 'pano de laranja',
            actived: false,
            cor_valor: '#FFA500',
            image_valor: '',
            grade: [
                {tamanho_nome: 'PP', tamanho_quant: 21, quantidade: 0},
                {tamanho_nome: 'P', tamanho_quant: 0, quantidade: 0},
                {tamanho_nome: 'M', tamanho_quant: 15, quantidade: 0}
            ]
        },
    ]
};

export default withNavigation(ProdutoProfile)