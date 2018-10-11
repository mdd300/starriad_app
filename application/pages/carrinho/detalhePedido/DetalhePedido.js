import React from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Text
} from 'react-native';
import styles from './Detalhe-pedido-styles';
import HeaderCarrinho from "../carrinhoComponents/header-carrinho/header-carrinho";
import ListProdutos from "../carrinhoComponents/detalhePedido/produtos/list-produtos/list-produtos";

export default class DetalhePedido extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: props.navigation.state.params,
            qtdMax: 0,
            indice_variante: null
        };
    }

    componentDidMount(){
        this.state.item.produto.map((prod) => {
            prod.variantes.map((variante, index) => {
                this.state.indice_variante = index;
            });
        });

        this.setState({indice_variante: this.state.indice_variante});
    }

    renderPage(){

        if( this.state.item.produto.length > 0){

            return  (
                <ListProdutos produtosCarrinho={this.state.item}
                              toutIndex={this.state.indice_variante}
                              handleLayout={this.handleLayout}
                              handlePressTout={this.handlePressTout} />
            )

        }else if( this.state.item.produto.length === 0){
            return (
                <View style={styles.msgProdutoVazio}>
                    <Text style={styles.textProdutoVazio}>Não há produtos neste pedido</Text>
                </View>
            )
        }
    }

    measurements = [];

    handlePressTout = (toutIndex) => {
        this.scrollViewRef.scrollTo({
            y: this.measurements[toutIndex].pageY - 50,
        })
    };

    setScrollRef = node => {
        if (node) {
            this.scrollViewRef = node
        }
    };

    handleLayout = (measurements, toutIndex) => {
        if (!this.measurements[toutIndex]) {
            this.measurements[toutIndex] = measurements
        }
    };

    render() {

        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>

                <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>

                    <View style={[styles.headerNotificationBar]}/>

                        <HeaderCarrinho title={'Carrinho ' + this.state.item.nameMarca}
                                        subtitle={'Total ' + this.state.item.precoTotal}
                                        imagemMarca={this.state.item.imgMarca}
                                        onPressItem={() => {
                                            this.props.navigation.goBack(null);
                                        }}/>

                            <ScrollView scrollEventThrottle={20} ref={this.setScrollRef}>
                                { this.renderPage() }
                            </ScrollView>

                </KeyboardAvoidingView>
            </View>
        )
    }
}