import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {style} from './ProdutoProfile-styles';
import SystemTabs from '../../components/tabs/SystemTabs'
import HeaderProduto from './produtoProfileComponents/headerProduto/HeaderProduto'
import SlideProduto from './produtoProfileComponents/slideProduto/SlideProduto'
import GradeProduto from './produtoProfileComponents/gradeProduto/GradeProduto'

export default class ProdutoProfile extends React.Component {
    constructor(props) {
        super(props);
        let {height} = Dimensions.get('window');
        this.state = {
            screenHeight: height,
            produto: produto_object,

        }

    }
    render() {
        return (

            <View style={{flex: 1, marginTop: 24, backgroundColor: '#fff'}}>
                <ScrollView ref="scrollPage" style={style.containerProdutos} onContentSizeChange={() => {
                    this.refs.scrollPage.scrollToEnd({animated: true});
                }}>

                    <HeaderProduto  callBack={this.toBack.bind(this)} image={this.state.produto.empresa_img} name={this.state.produto.nome}/>

                    <SlideProduto height={400} images={this.state.produto.imgs}/>

                    <View style={style.containerInfo}>

                        <View style={style.headerInfo}>
                            <View style={style.titleContainer}>
                                <Text style={style.title}>{this.state.produto.nome}</Text>
                                <Text style={style.title}>{this.state.produto.preco}</Text>
                            </View>
                            <View>
                                <Text style={style.desc}>
                                    {this.state.produto.descricao}
                                </Text>
                            </View>
                        </View>

                        <View style={style.iconsContainer}>
                            <View style={style.iconsArea}>
                                <TouchableOpacity>
                                    <Image style={style.imageContainer}
                                           resizeMode={'contain'}
                                           source={require('../../assets/imgs/png/icons/like.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={style.imageContainer}
                                           resizeMode={'contain'}
                                           source={require('../../assets/imgs/png/icons/star.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={style.imageContainer}
                                           resizeMode={'contain'}
                                           source={require('../../assets/imgs/png/icons/talk.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Image style={style.imageContainer}
                                           resizeMode={'contain'}
                                           source={require('../../assets/imgs/png/icons/dots-menu.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <GradeProduto variantes={this.state.produto.variantes} />

                    <View style={style.finalizarContainer}>
                        <View>
                            <View style={style.leftContainer}>
                                <Text>Peça:</Text>
                                <Text>17</Text>
                            </View>
                            <View style={style.leftContainer}>
                                <Text style={style.textTotal}>Total:</Text>
                                <Text style={style.textTotal}>R$ 1039,00</Text>
                            </View>
                        </View>

                        <View>
                            <TouchableOpacity>


                                <View style={style.btnCarrinhno}>
                                    <Image style={style.imageBtn}
                                           resizeMode={'contain'}
                                           source={require('../../assets/imgs/png/icons/kart.png')}/>
                                <Text style={style.textBtn}>Adicionar ao Carrinho</Text>
                                </View>


                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <SystemTabs navigation={this.props.navigation}/>

            </View>


        )

    }

    getResponse(result) {
        let scroll = this.refs.scrollPage;
        this.refs.scrollPage.scrollToEnd();
    }

   toBack() {
       this.props.navigation.goBack(null)
    }

}


const slides = [
    {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/210-e1385035301691.jpg"},
    {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/17-e1385035748428.jpg"},
    {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/82-e1385036169747.jpg"},
    {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/46-e1385035727190.jpg"},
    {imagem: "http://www.caroltognon.com.br/wp-content/uploads/2013/11/55-e1385035776806.jpg"},
];


const produto_object =
    {
        nome: 'Vestido Florido Papaya',
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
        variantes: [
            {
                cor_nome: 'Vinho',
                actived: false,
                obs: 'pano liso',
                cor_valor: '',
                image_valor: 'https://blog.maximustecidos.com.br/clube/wp-content/uploads/2017/10/tecido-zibeline-diagonal-marsala.jpg',
                grade: [
                    {tamanho_nome: 'GG', tamanho_quant: 25, quantidade: 0},
                    {tamanho_nome: 'G', tamanho_quant: 5, quantidade: 0},
                    {tamanho_nome: 'P', tamanho_quant: 0, quantidade: 0},
                    {tamanho_nome: 'PP', tamanho_quant: 21, quantidade: 0},
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
                    {tamanho_nome: 'GG', tamanho_quant: 25, quantidade: 0},
                    {tamanho_nome: 'G', tamanho_quant: 5, quantidade: 0},
                    {tamanho_nome: 'P', tamanho_quant: 0, quantidade: 0},
                ]
            },

            {
                cor_nome: 'Laranja',
                obs: 'pano de laranja',
                actived: false,
                cor_valor: '#FFA500',
                image_valor: '',
                grade: [
                    {tamanho_nome: 'GG', tamanho_quant: 25, quantidade: 0},
                    {tamanho_nome: 'G', tamanho_quant: 5, quantidade: 0},
                    {tamanho_nome: 'P', tamanho_quant: 0, quantidade: 0},
                ]
            }
        ]
    }



