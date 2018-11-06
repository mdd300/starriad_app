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
            <View style={style.containerPage}>

                <View style={[style.headerNotificationBar]} />

                <HeaderProduto callBack={this.toBack.bind(this)} image={this.state.produto.empresa_img} name={this.state.produto.nome} />

                <ScrollView ref="scrollPage" style={style.containerProdutos}>

                    <SlideProduto height={400} images={this.state.produto.imgs} />

                    <View style={style.containerInfo}>

                        <View style={style.headerInfo}>
                            <View style={style.titleContainer}>
                                <Text style={style.title}>{this.state.produto.nome}</Text>
                            </View>

                            <View style={style.desc}>
                                <Text style={style.textDesc}>
                                    Marca:
                                </Text>

                                <TouchableOpacity>
                                    <Text style={[style.textDesc, {fontWeight: 'bold', marginLeft: 5, textDecorationLine: 'underline'}]}>
                                        {this.state.produto.nome_marca}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={style.desc}>
                                <Text style={[style.textDesc, {color: '#9f9f9f'}]}>
                                    Ref.:
                                </Text>

                                <Text style={[style.textDesc, {color: '#9f9f9f', marginLeft: 5}]}>
                                    {this.state.produto.referencia}
                                </Text>
                            </View>

                            <View style={style.desc}>
                                <Text style={[style.textDesc, {fontWeight: 'bold', fontSize: 18}]}>
                                    {this.state.produto.preco}
                                </Text>
                            </View>

                            <View style={style.desc}>
                                <View style={style.containerIcon}>
                                    <Image style={style.imageContainer}
                                           resizeMode={'contain'}
                                           source={require('../../assets/imgs/png/icons/star.png')}/>
                                </View>

                                <View style={style.containerIcon}>
                                    <Image style={style.imageContainer}
                                           resizeMode={'contain'}
                                           source={require('../../assets/imgs/png/icons/star.png')}/>
                                </View>

                                <View style={style.containerIcon}>
                                    <Image style={style.imageContainer}
                                           resizeMode={'contain'}
                                           source={require('../../assets/imgs/png/icons/star.png')}/>
                                </View>

                                <View style={style.containerIcon}>
                                    <Image style={style.imageContainer}
                                           resizeMode={'contain'}
                                           source={require('../../assets/imgs/png/icons/star.png')}/>
                                </View>

                                <View style={style.containerIcon}>
                                    <Image style={style.imageContainer}
                                           resizeMode={'contain'}
                                           source={require('../../assets/imgs/png/icons/star.png')}/>
                                </View>
                            </View>
                        </View>
                    </View>

                    <GradeProduto grade={this.state.produto.grade} variantes={this.state.produto.variantes} />

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
                        {this.state.produto.descricao}
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

    renderBotoesCompartilhar(){
        return(
            <View style={style.containerDetalhesProduto}>
                <View style={style.contentDetalhesProduto}>
                    <Text style={style.titleDetalhesProduto}>
                        Compartilhar
                    </Text>

                    <View style={style.containerBotoesCompartilhar}>
                        <TouchableOpacity style={style.touchBotoes}>
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

    renderIconsAvaliacao(){
        return(
            <View style={style.containerDetalhesProduto}>
                <View style={[style.contentDetalhesProduto, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={style.titleDetalhesProduto}>
                        Avalie este produto
                    </Text>

                    <View style={style.containerIconsAvaliar}>
                        <TouchableOpacity style={style.containerIcon}>
                            <Image style={style.iconsAvaliar}
                                   resizeMode={'contain'}
                                   source={require('../../assets/imgs/png/icons/star.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.containerIcon}>
                            <Image style={style.iconsAvaliar}
                                   resizeMode={'contain'}
                                   source={require('../../assets/imgs/png/icons/star.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.containerIcon}>
                            <Image style={style.iconsAvaliar}
                                   resizeMode={'contain'}
                                   source={require('../../assets/imgs/png/icons/star.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.containerIcon}>
                            <Image style={style.iconsAvaliar}
                                   resizeMode={'contain'}
                                   source={require('../../assets/imgs/png/icons/star.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.containerIcon}>
                            <Image style={style.iconsAvaliar}
                                   resizeMode={'contain'}
                                   source={require('../../assets/imgs/png/icons/star.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    renderProdutosRelacionados(){
        return(
            <View style={style.containerDetalhesProduto}>
                <View style={[style.contentDetalhesProduto, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text style={style.titleDetalhesProduto}>
                        Produtos Relacionados
                    </Text>

                    <View style={style.containerProdutosRelacionados}>
                        <ScrollView style={style.scrollProdutosRelacionados} horizontal={true} showsHorizontalScrollIndicator={false}>

                            {slides.map((produtos, index) => (
                                <TouchableOpacity activeOpacity={0.9} key={index} style={style.touchProdutosRelacionados}>
                                    <Image style={style.imgProdutosRelacionados} source={{uri: produtos.imagem}} />

                                    <Text style={style.descProdutosRelacionados} numberOfLines={1} ellipsizeMode="tail">
                                        {produtos.descricao}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
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