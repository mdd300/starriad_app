import React from 'react';
import {Text, View} from 'react-native';
import styles from './header-passos-carrinho-styles';


const HeaderPassosCarrinho = props => (

    <View style={styles.containerHeaderPassosCarrinho}>

        <View style={styles.contentHeaderPassosCarrinho}>

            <View style={[
                styles.containerPassoUm,
                props.actived == 1? styles.actived: null
                ]}>

                <Text>
                    1
                </Text>
            </View>

            <View style={styles.containerLine}>
                <View style={styles.line} />
            </View>

            <View style={[
                styles.containerPassoUm,
                props.actived == 2? styles.actived: null
                ]} >

                <Text>
                    2
                </Text>
            </View>
        </View>

        <View style={styles.contentMessage}>

            <View style={styles.containerMessageCarrinho}>
                <Text style={styles.textMessageCarrinho}>
                    Carrinho
                </Text>
            </View>

            <View style={{flex: 1}} />

            <View style={styles.containerMessagePedido}>
                <Text style={styles.textMessagePedido}>
                    Finalizar Pedido
                </Text>
            </View>
        </View>
    </View>
);

export default HeaderPassosCarrinho;