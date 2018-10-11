import React from 'react';
import {ActivityIndicator, ScrollView, View, RefreshControl, Text, TouchableOpacity} from 'react-native';
import {style} from './finalizarPedido-styles';
import SystemTabs from "../../../components/tabs/SystemTabs";
import HeaderCarrinho from '../carrinhoComponents/header-carrinho/header-carrinho';
import Checkbox from '../../../components/checkBox/CheckBox';
import HeaderPassosCarrinho from '../carrinhoComponents/header-passos-carrinho/header-passos-carrinho'
import styles from "../passo1/Carrinho-styles";

export default class FinalizarPedido extends React.Component {

    constructor(props) {
        super(props);


        let entregas = [
            {name: 'Sedex', actived: true},
            {name: 'Sedex10', actived: false},
            {name: 'Transportadora', actived: false},
            {name: 'Retirada na loja', actived: false},
        ];

        let pagamentos = [
            {name: 'Houpa Pago', actived: true},
            {name: 'PagSeguro', actived: false},
            {name: 'Cheque', actived: false},
            {name: 'Boleto', actived: false},
            {name: 'Depósito', actived: false},
        ];

        this.state = {
            actived: true,
            pagamentos: pagamentos,
            entregas: entregas

        };

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={style.containerDetalhes}>

                    <View style={[styles.headerNotificationBar]} />
                    <HeaderCarrinho title={'Finalizar Pedido'} subtitle={'Aqui você pode conferir todos os detalhes do seu pedido'} onPressItem={() => {
                        this.props.navigation.goBack(null);
                    }} />

                    <HeaderPassosCarrinho actived={2}/>
                    <View style={style.container}>
                        <View style={style.containerTitle}>
                            <Text style={style.title}>Detalhes do seu pedido</Text>
                        </View>

                        <View style={style.containerContent}>
                            <Text style={style.contentTitle}>Total de produtos:</Text>
                            <Text style={style.contentResult}>15</Text>
                        </View>

                        <View style={style.containerContent}>
                            <Text style={style.contentTitle}>Total de peças:</Text>
                            <Text style={style.contentResult}>152</Text>
                        </View>

                        <View style={style.containerContent}>
                            <Text style={style.contentTitle}>Total de marcas:</Text>
                            <Text style={style.contentResult}>3</Text>
                        </View>


                        <View style={style.containerContent}>
                            <Text style={style.contentTitle}>Total pedido:</Text>
                            <Text style={style.contentResult}>R$ 4.585,90</Text>
                        </View>
                    </View>
                    <View style={style.line}></View>

                    <View style={style.container}>
                        <View style={style.containerTitle}>
                            <Text style={style.title}>Endereço para Entrega</Text>
                        </View>
                        <View style={style.containerEndereco}>
                            <View style={style.areaEndereco}>
                                <Text style={style.textPadrao}>R. Aimores, 300</Text>
                                <Text style={style.textPadrao}>Bom Retiro</Text>
                                <Text style={style.textPadrao}>São Paulo-SP</Text>
                                <Text style={style.textPadrao}>Cep 01122-021</Text>
                            </View>
                        </View>
                        <View style={style.containerButton}>
                            <TouchableOpacity activeOpacity={0.6}>
                                <View style={style.btnAlterar}>
                                    <Text style={style.btnText}>ALTERAR ENDEREÇO DE ENTREGA</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.line}></View>


                    <View style={style.container}>
                        <View style={style.containerTitle}>
                            <Text style={style.title}>Forma de Entrega</Text>
                            {this.endereco_entrega()}

                        </View>
                    </View>
                    <View style={style.line}></View>

                    <View style={style.container}>
                        <View style={style.containerTitle}>
                            <Text style={style.title}>Forma de Pagamento</Text>
                            {this.forma_pagamento()}
                        </View>
                    </View>

                    <View style={style.line}></View>


                    <View style={style.container}>
                        <View style={style.containerTitle}>
                            <View style={style.containerButton}>
                                <TouchableOpacity activeOpacity={0.6}>
                                    <View style={style.btnFinalizar}>
                                        <Text style={style.btnTextFinalizar}>FINALIZAR PEDIDO</Text>
                                    </View>
                                </TouchableOpacity>
                                <Text style={style.textFinal}>No próximo passo você verá o PDF e a nota fiscal do pedido!</Text>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </View>
        );
    }

    endereco_entrega() {
        return this.state.entregas.map((value, index) => {
            return (
                <TouchableOpacity key={index} onPress={() => {
                    this.change_endereco(index)
                }}>
                    <View style={style.containerForma}>
                        <View style={style.contentBox}>
                            <Checkbox actived={value.actived}></Checkbox>
                        </View>

                        <Text style={style.textEntrega}>{value.name}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }

    change_endereco(index) {
        this.state.entregas.forEach((value, indice) => {
            if (index == indice) {
                value.actived = true
            } else {
                value.actived = false;
            }
        });
        this.setState({entregas: this.state.entregas})
    }

    forma_pagamento() {
        return this.state.pagamentos.map((value, index) => {
            return (
                <TouchableOpacity key={index} onPress={() => {
                    this.change_pagamento(index)
                }}>
                    <View style={style.containerForma}>
                        <View style={style.contentBox}>
                            <Checkbox actived={value.actived}></Checkbox>
                        </View>
                        <Text style={style.textEntrega}>{value.name}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }

    change_pagamento(index) {
        this.state.pagamentos.forEach((value, indice) => {
            if (index == indice) {
                value.actived = true
            } else {
                value.actived = false;
            }
        });
        this.setState({pagamentos: this.state.pagamentos})
    }

}


