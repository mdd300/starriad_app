import React from "react";
import {ActivityIndicator, View, TextInput, Text, ScrollView, Animated, UIManager, LayoutAnimation, Platform, Image, TouchableOpacity} from "react-native";
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import SystemTabs from "../../components/tabs/SystemTabs";
import styles from "../perfil/Perfil-style";
import Capa from './perfilComponents/capa/capa';
import Produto from "./perfilComponents/produtos/produtos";

export default class Perfil extends React.Component {

    constructor(props) {
        super(props);

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        this.state = {
            perfil: [],
            loading: false,
            error: false,
            system_tabs: true,
            animation_filtro: new Animated.Value(0),
            animation_ordenar: new Animated.Value(0),
        };
    }

    componentDidMount(){
        this.setState({ loading: true });

        setTimeout(() => {
            this.setState({

                perfil: [{
                    id: 1,
                    nameMarca: 'UNIQUECHIC',
                    imgMarca: 'https://scontent-lax3-2.cdninstagram.com/vp/7e62dc20ca11ca981854655007ef2553/5C2F2F5B/t51.2885-19/s150x150/20837257_149479915635315_6908195071569428480_a.jpg',

                    produtos: [
                        {
                            id: '1',
                            imgProduto: 'https://assets.xtechcommerce.com/uploads/images/medium/63ac443d3dc902676a0d26d0428ad76b.png',
                            descricao: 'Camiseta Basic',
                            preco: 'R$ 150,00',
                            categoria: 'Feminino',

                            images: [
                                {
                                    image: 'https://camisariacolombov2.vteximg.com.br/arquivos/ids/332957-1000-1000/11325010002_2.jpg?v=635896815176130000'
                                },
                                {
                                    image: 'https://camisariacolombov2.vteximg.com.br/arquivos/ids/321516-1000-1000/11340160001_1.jpg?v=635711880117530000'
                                },
                                {
                                    image: 'http://www.irisgoya.com.br/6265/blusa-baby-look-listrada-manga-curta-de-cirre.jpg'
                                }
                            ],

                            variantes: [
                                {
                                    id: '1',
                                    cor_valor: '#58ffcc',
                                    image_url: '',

                                    grades: [
                                        {
                                            id: '1',
                                            nome: 'P'
                                        },
                                        {
                                            id: '2',
                                            nome: 'M'
                                        },
                                        {
                                            id: '3',
                                            nome: 'G'
                                        }
                                    ],
                                }
                            ]
                        },
                        {
                            id: '2',
                            imgProduto: 'https://assets.xtechcommerce.com/uploads/images/medium/b6114f988b3e77641916bc8986df60ed.png',
                            descricao: 'Calça Basic Alfaiate',
                            preco: 'R$ 120,00',
                            categoria: 'Feminino',

                            images: [
                                {
                                    image: 'https://camisariacolombov2.vteximg.com.br/arquivos/ids/332957-1000-1000/11325010002_2.jpg?v=635896815176130000'
                                },
                                {
                                    image: 'https://camisariacolombov2.vteximg.com.br/arquivos/ids/321516-1000-1000/11340160001_1.jpg?v=635711880117530000'
                                },
                                {
                                    image: 'http://www.irisgoya.com.br/6265/blusa-baby-look-listrada-manga-curta-de-cirre.jpg'
                                }
                            ],

                            variantes: [
                                {
                                    id: '1',
                                    cor_valor: '#ff3c55',
                                    image_url: '',

                                    grades: [
                                        {
                                            id: '1',
                                            nome: 'P'
                                        },
                                        {
                                            id: '2',
                                            nome: 'M'
                                        },
                                        {
                                            id: '3',
                                            nome: 'G'
                                        }
                                    ],
                                }
                            ]
                        }
                    ]
                }],
                loading: false,
            });
        }, 500);
    }

    renderRota(){
        return(
            <View style={styles.containerRotas}>

                <Text style={styles.textRota}>
                    houpa! >
                </Text>

                <Text style={styles.textRota}>
                    Vitrines >
                </Text>

                <Text style={{color: '#000'}}>
                    UniqueChic
                </Text>

            </View>
        )
    }

    renderInput(){
        return(
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.inputSearch}
                    underlineColorAndroid='#FFF'
                    placeholder={'Busca'}
                />
            </View>
        )
    }

    renderPage(){

        if(this.state.loading){
            return <ActivityIndicator style={{flex: 1,
                alignItems: 'center',
                justifyContent: 'center',}} size="large" color="#7417fb" />;
        }
        if(this.state.error){
            return <Text style={style.error}>Ops... Algo deu errado =(</Text>
        }

        return (

            <View style={styles.containerPage}>
                {this.renderRota()}
                {this.renderInput()}

                <Capa perfil={this.state.perfil} />
                <Produto perfil={this.state.perfil} />

            </View>

        );

    }

    _listViewOffset = 0;

    _onScroll = (event) => {

        // const CustomLayoutLinear = {
        //     duration: 200,
        //     create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
        //     update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
        //     delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
        // };

        const currentOffset = event.nativeEvent.contentOffset.y;
        const direction = (currentOffset > 0 && currentOffset > this._listViewOffset)
            ? 'down'
            : 'up';

        const filtroVisible = direction === 'up';

        if (filtroVisible) {

            Animated.timing( this.state.animation_filtro, {
                toValue: 0,
                duration: 200
            }).start();

            Animated.timing( this.state.animation_ordenar, {
                toValue: 0,
                duration: 200
            }).start();

        }else{

            Animated.timing(this.state.animation_filtro, {
                toValue: 100,
                duration: 200
            }).start();

            Animated.timing( this.state.animation_ordenar, {
                toValue: 100,
                duration: 200
            }).start();

        }

        // if (filtroVisible !== this.state.system_tabs) {
        //
        //     LayoutAnimation.configureNext(CustomLayoutLinear);
        //     this.setState({ system_tabs: !this.state.system_tabs });
        //
        // }



        this._listViewOffset = currentOffset
    };

    renderOrdenar(){

        let ordenar = this.state.animation_filtro.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ (60 * -1), 24 ]
        });

        return(

            <Animated.View style={{
                top: ordenar,
                borderBottomWidth: 1,
                borderBottomColor: '#c2c2c2',
                alignItems: 'center', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, position: 'absolute', zIndex: 999999, flexDirection: 'row', width: '100%', height: 60, backgroundColor: '#fff'}}>

                    { this.state.perfil.map((perfil, index) => (

                        <View key={index} style={{width: '49%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>

                            <View style={{height: '100%', width: 50, borderWidth: 1, borderColor: '#c2c2c2', borderRadius: 2}}>
                                <Image style={{width: '100%', height: '100%'}} source={{uri: perfil.imgMarca}} />
                            </View>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={{width: 100, marginLeft: 10, color: '#000', fontSize: 16, fontWeight: 'bold'}}>
                                {perfil.nameMarca}
                            </Text>

                        </View>

                    ))}

                    <View style={{height: '100%', borderLeftColor: '#c2c2c2', borderLeftWidth: 1}} />

                <View style={{width: '49%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>

                        <TouchableOpacity style={{height: '80%', width: 40, borderWidth: 1, borderColor: '#000', marginRight: 10, alignItems: 'center', justifyContent: 'center'}}>

                            <View style={{height: 20, width: 20}}>
                                <Image resizeMode={'contain'} style={{width: '100%', height: '100%'}} source={ require('../../assets/imgs/png/icons/filtro.png')} />
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={{height: '80%', width: 100, borderWidth: 1, borderColor: '#000', flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'center'}}>

                            <View style={{height: 15, width: 15, alignItems: 'center', justifyContent: 'center'}}>
                                <Image resizeMode={'contain'} style={{width: '50%', height: '50%', transform: [{rotateX: '180deg'}]}} source={ require('../../assets/imgs/png/arrow-down.png')} />
                                <Image resizeMode={'contain'} style={{width: '50%', height: '50%'}} source={ require('../../assets/imgs/png/arrow-down.png')} />
                            </View>

                            <Text style={{marginLeft: 5, color: '#000', fontSize: 12}}>
                                ORDENAR
                            </Text>

                        </TouchableOpacity>

                </View>



            </Animated.View>

        )
    }

    renderFiltro(){

        let filtro = this.state.animation_filtro.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ (50 * -1), 0 ]
        });

        return(
            <Animated.View style={[styles.containerFiltro, {bottom: filtro,
                // bottom: 0,
                }]}>

                <TouchableOpacity>
                    <Text style={styles.textFiltro}>
                        TODOS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textFiltro}>
                        VITRINE
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textFiltro}>
                        LANÇAMENTOS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textFiltro}>
                        PROMOÇÕES
                    </Text>
                </TouchableOpacity>

            </Animated.View>
        )
    }

    render() {
        return (
            <View style={styles.containerPerfil}>

                <SystemHeader />

                {this.renderOrdenar()}

                <ScrollView onScroll={this._onScroll}>
                    { this.renderPage() }
                </ScrollView>

                    <SystemTabs navigation={this.props.navigation} selectedTab='profile'/>

                {/*{!this.state.system_tabs &&*/}
                {this.renderFiltro()}
                {/*}*/}
            </View>
        );
    }
}