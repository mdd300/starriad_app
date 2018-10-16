import React from "react";
import {ActivityIndicator, View, TextInput, Text, ScrollView, Animated, UIManager, LayoutAnimation, Platform} from "react-native";
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
            animation_filtro: new Animated.Value(0)
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

        // Animated.timing( this.state.animation_filtro, {
        //     toValue: 100,
        //     duration: 100
        // }).start();

        const CustomLayoutLinear = {
            duration: 200,
            create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
            update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
            delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
        };

        const currentOffset = event.nativeEvent.contentOffset.y;
        const direction = (currentOffset > 0 && currentOffset > this._listViewOffset)
            ? 'down'
            : 'up';

        const filtroVisible = direction === 'up';

        if (filtroVisible !== this.state.system_tabs) {
            LayoutAnimation.configureNext(CustomLayoutLinear);
            this.setState({ system_tabs: !this.state.system_tabs });

        }

        this._listViewOffset = currentOffset
    };

    renderFiltro(){

        // let filtro = this.state.animation_filtro.interpolate({
        //     inputRange: [ 0, 100 ],
        //     outputRange: [ 50, 0 ]
        // });

        return(

            <Animated.View style={{
                // transform: [{translateY: filtro}],
                alignItems: 'center', justifyContent: 'space-between', padding: 15, bottom: 0, flexDirection: 'row', width: '100%', height: 50, backgroundColor: '#000'}}>

                <Text style={{textAlign: 'center', color: '#FFF', fontSize: 12, fontWeight: 'bold'}}>
                    TODOS
                </Text>

                <Text style={{textAlign: 'center', color: '#FFF', fontSize: 12, fontWeight: 'bold'}}>
                    VITRINE
                </Text>

                <Text style={{textAlign: 'center', color: '#FFF', fontSize: 12, fontWeight: 'bold'}}>
                    LANÇAMENTOS
                </Text>

                <Text style={{textAlign: 'center', color: '#FFF', fontSize: 12, fontWeight: 'bold'}}>
                    PROMOÇÕES
                </Text>

            </Animated.View>

        )
    }

    render() {
        return (
            <View style={styles.containerPerfil}>
                <SystemHeader />

                <ScrollView onScroll={this._onScroll}>
                    { this.renderPage() }
                </ScrollView>

                {this.state.system_tabs ?
                    <SystemTabs navigation={this.props.navigation} selectedTab='profile'/>
                    :
                    this.renderFiltro()
                }
            </View>
        );
    }
}