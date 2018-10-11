import React from 'react';
import {ActivityIndicator, Animated, Text, TouchableOpacity, View} from 'react-native';
import styles from './Carrinho-styles';
import HeaderCarrinho from '../carrinhoComponents/header-carrinho/header-carrinho';
import ListDetalhesCarrinho from '../carrinhoComponents/passo1/list-detalhes-carrinho/list-detalhes-carrinho'

export default class Carrinho extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: false,
            pedidos: [],
            opened: props.opened,
        };
    }

    componentWillReceiveProps( props ){

        this.setState({ opened: props.opened });

        if( props.opened ){

            console.log(props.opened);

        }

    }

    _closeMenu = (() => {

         this.props.onclose();

    });

    componentDidMount() {
        this.setState({loading: true});

        setTimeout(() => {
            this.setState({
                pedido: [{
                    key: '1',
                    totalProdutos: 16,
                    totalPecas: 146,
                    totalMarcas: 3,
                    totalPedido: 'R$ 4.585,90',

                    itens: [
                        {
                        id: 1,
                        nameMarca: 'Miia',
                        imgMarca: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                        precoTotal: 'R$ 1.100,00',

                        produto: [{ id: 1,
                            descricao: 'Macacão Social',
                            preco: 'R$ 685,90',
                            imagemProduto: 'https://dafitistatic-a.akamaihd.net/p/Jogabe-Macac%C3%A3o-Jogabe-Pantalona-Vermelho-5144-6887533-1-zoom.jpg',

                            variantes: [
                                {
                                    id: 1,
                                    cor: 'Colorido',
                                    imagem: 'https://cdn-images-1.medium.com/max/1600/0*QyNNgU6haiN23wxn.jpg',
                                    cor_valor: '',
                                    quantidade: 20,
                                    subTotal: 'R$ 600,00',

                                    tamanhos: [
                                        { id: 1, nome: 'P', quantidade: 0, tamanho_quant: 40},
                                        { id: 2, nome: 'M', quantidade: 0, tamanho_quant: 10},
                                        { id: 3, nome: 'G', quantidade: 0, tamanho_quant: 5},
                                        { id: 4, nome: 'GG', quantidade: 0, tamanho_quant: 3},
                                        { id: 5, nome: 'UNICO', quantidade: 0, tamanho_quant: 1}
                                    ]
                                },
                                {
                                    id: 2,
                                    cor: 'Roxo',
                                    imagem: 'https://image.freepik.com/vetores-gratis/fundo-do-mosaico-roxo-e-cor-de-rosa_1164-916.jpg',
                                    cor_valor: '',
                                    quantidade: 10,
                                    subTotal: 'R$ 500,00',

                                    tamanhos: [
                                        { id: 1, nome: 'P', quantidade: 0, tamanho_quant: 40},
                                        { id: 2, nome: 'M', quantidade: 0, tamanho_quant: 10},
                                        { id: 3, nome: 'G', quantidade: 0, tamanho_quant: 5},
                                        { id: 4, nome: 'GG', quantidade: 0, tamanho_quant: 3},
                                        { id: 5, nome: 'UNICO', quantidade: 0, tamanho_quant: 1}
                                    ]
                                },
                                {
                                    id: 3,
                                    cor: 'Amarelo',
                                    imagem: '',
                                    cor_valor: '#ffff3a',
                                    quantidade: 10,
                                    subTotal: 'R$ 500,00',

                                    tamanhos: [
                                        { id: 1, nome: 'P', quantidade: 0, tamanho_quant: 40},
                                        { id: 2, nome: 'M', quantidade: 0, tamanho_quant: 10},
                                        { id: 3, nome: 'G', quantidade: 0, tamanho_quant: 5},
                                        { id: 4, nome: 'GG', quantidade: 0, tamanho_quant: 3},
                                        { id: 5, nome: 'UNICO', quantidade: 0, tamanho_quant: 1}
                                    ]
                                },
                                {
                                    id: 4,
                                    cor: 'Rosa',
                                    imagem: '',
                                    cor_valor: '#ff32ea',
                                    quantidade: 10,
                                    subTotal: 'R$ 500,00',

                                    tamanhos: [
                                        { id: 1, nome: 'P', quantidade: 0, tamanho_quant: 40},
                                        { id: 2, nome: 'M', quantidade: 0, tamanho_quant: 10},
                                        { id: 3, nome: 'G', quantidade: 0, tamanho_quant: 5},
                                        { id: 4, nome: 'GG', quantidade: 0, tamanho_quant: 3},
                                        { id: 5, nome: 'UNICO', quantidade: 0, tamanho_quant: 1}
                                    ]
                                },]
                        }]
                    }, {
                        id: 2,
                        nameMarca: 'Papaya',
                        imgMarca: 'data:image/jpeg;base64,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\'',
                        precoTotal: 'R$ 1.500,00',

                        produto: [{
                            id: 1,
                            descricao: 'Macacão',
                            preco: 'R$ 685,90',
                            imagemProduto: 'https://dafitistatic-a.akamaihd.net/p/Jogabe-Macac%C3%A3o-Jogabe-Pantalona-Vermelho-5144-6887533-1-zoom.jpg',

                            variantes: [
                                {
                                    id: 1,
                                    cor: 'Colorido',
                                    imagem: 'https://cdn-images-1.medium.com/max/1600/0*QyNNgU6haiN23wxn.jpg',
                                    cor_valor: '',
                                    quantidade: 20,
                                    subTotal: 'R$ 600,00',

                                    tamanhos: [
                                        {id: 1, nome: 'G', quantidade: 0, tamanho_quant: 10},
                                        {id: 2, nome: 'GG', quantidade: 0, tamanho_quant: 10}
                                    ]
                                },
                                {
                                    id: 2,
                                    cor: 'Roxo',
                                    imagem: 'https://image.freepik.com/vetores-gratis/fundo-do-mosaico-roxo-e-cor-de-rosa_1164-916.jpg',
                                    cor_valor: '',
                                    quantidade: 10,
                                    subTotal: 'R$ 500,00',

                                    tamanhos: [
                                        {id: 1, nome: 'G', quantidade: 0, tamanho_quant: 5},
                                        {id: 2, nome: 'GG', quantidade: 0, tamanho_quant: 5}
                                    ]
                                },]
                        },
                            {
                                id: 2,
                                descricao: 'Macacão Liso',
                                preco: 'R$ 685,90',
                                imagemProduto: 'https://www.extra-imagens.com.br/Moda/RoupasFemininas/macacaofeminino/8172997/946725994/macacao-moda-feminina-em-viscolycra-com-renda-italiana-8173211.jpg',

                                variantes: [
                                    {
                                        id: 1,
                                        cor: 'Rosa',
                                        imagem: '',
                                        cor_valor: '#ec27cf',
                                        quantidade: 20,
                                        subTotal: 'R$ 600,00',

                                        tamanhos: [
                                            {id: 1, nome: 'G', quantidade: 0, tamanho_quant: 10},
                                            {id: 2, nome: 'GG', quantidade: 0, tamanho_quant: 10}
                                        ]
                                    },
                                    {
                                        id: 2,
                                        cor: 'Azul',
                                        imagem: '',
                                        cor_valor: '#307fec',
                                        quantidade: 10,
                                        subTotal: 'R$ 500,00',

                                        tamanhos: [
                                            {id: 1, nome: 'G', quantidade: 0, tamanho_quant: 5},
                                            {id: 2, nome: 'GG', quantidade: 0, tamanho_quant: 5}
                                        ]
                                    },]
                            }]

                    }, {
                        id: 3,
                        nameMarca: 'Unique Chic',
                        imgMarca: 'https://scontent-lax3-2.cdninstagram.com/vp/7e62dc20ca11ca981854655007ef2553/5C2F2F5B/t51.2885-19/s150x150/20837257_149479915635315_6908195071569428480_a.jpg',
                        precoTotal: 'R$ 1.150,00',

                        produto: [{
                            id: 1,
                            descricao: 'Macacão Social',
                            preco: 'R$ 685,90',
                            imagemProduto: 'https://dafitistatic-a.akamaihd.net/p/Jogabe-Macac%C3%A3o-Jogabe-Pantalona-Vermelho-5144-6887533-1-zoom.jpg',

                            variantes: [
                                {
                                    id: 1,
                                    cor: 'Preta',
                                    imagem: '',
                                    cor_valor: '#000',
                                    quantidade: 20,
                                    subTotal: 'R$ 600,00',

                                    tamanhos: [
                                        {id: 1, nome: 'G', quantidade: 0, tamanho_quant: 10},
                                        {id: 2, nome: 'GG', quantidade: 0, tamanho_quant: 10}
                                    ]
                                },
                                {
                                    id: 2,
                                    cor: 'Roxo',
                                    imagem: 'https://image.freepik.com/vetores-gratis/fundo-do-mosaico-roxo-e-cor-de-rosa_1164-916.jpg',
                                    cor_valor: '',
                                    quantidade: 10,
                                    subTotal: 'R$ 500,00',

                                    tamanhos: [
                                        {id: 1, nome: 'G', quantidade: 0, tamanho_quant: 5},
                                        {id: 2, nome: 'GG', quantidade: 0, tamanho_quant: 5}
                                    ]
                                },]
                        }]
                    }]

                }],
                loading: false,
            });
        }, 500);
    }

    renderPage() {
        if (this.state.loading) {
            return <ActivityIndicator style={styles.loadingPager} size="large" color="#7417fb"/>;
        }
        if (this.state.error) {
            return <Text style={style.error}>Ops... Algo deu errado =(</Text>
        }

        return (
            <ListDetalhesCarrinho pedido={this.state.pedido} onPressItem={pageParams => {
                this.props.navigation.navigate('DetalhePedido', pageParams);
            }}/>
        );
    }

    renderButtonAvancar() {
        return (
            <View style={styles.footerCarrinho}>

                <TouchableOpacity activeOpacity={0.6} style={styles.containerBtnAvancar} onPress={() => {
                    this.props.navigation.navigate('FinalizarPedido', this.state.pedido);
                }}>
                    <Text style={styles.textBtnAvancar}>
                        AVANÇAR
                    </Text>
                </TouchableOpacity>

                <View style={styles.containerMessageFooter}>
                    <Text style={styles.textMessageFooter}>No próximo passo você irá confirmar seus dados de entrega e
                        cobrança</Text>
                </View>

            </View>

        );
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={[styles.headerNotificationBar]} />
                <HeaderCarrinho title={'Carrinho Multimarcas'} subtitle={'Aqui você pode conferir todos os detalhes do seu pedido'} onPressItem={() => {
                    this.props.navigation.goBack(null);
                }} />
                {this.renderPage()}
                {this.renderButtonAvancar()}

            </View>
        );
    }
}