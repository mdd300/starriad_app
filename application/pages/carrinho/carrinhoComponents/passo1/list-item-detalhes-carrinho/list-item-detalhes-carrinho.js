import React from 'react';
import {Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import styles from './list-item-detalhes-carrinho-styles';
import HeaderPassosCarrinho from "../../header-passos-carrinho/header-passos-carrinho";

const ListItemDetalhesCarrinho = props => {

    const { pedidos, navigateToPedidoDetail } = props;

    return (
        <View style={styles.containerListItem}>

            <HeaderPassosCarrinho actived={1} />

            <View style={styles.containerDetalhesPedido}>

                <View style={styles.containerTitleDetalhes}>
                    <Text style={styles.textTitleDetalhes}>Detalhes do seu pedido</Text>
                </View>

                <View style={styles.containerTotaisPedido}>

                    <View style={styles.itensPedidos}>
                        <Text style={styles.labelPedidos}>Total de produtos:</Text>
                        <Text style={styles.textPedidos}>{pedidos.totalProdutos}</Text>
                    </View>

                    <View style={styles.itensPedidos}>
                        <Text style={styles.labelPedidos}>Total de peças:</Text>
                        <Text style={styles.textPedidos}>{pedidos.totalPecas}</Text>
                    </View>

                    <View style={styles.itensPedidos}>
                        <Text style={styles.labelPedidos}>Total de marcas:</Text>
                        <Text style={styles.textPedidos}>{pedidos.totalMarcas}</Text>
                    </View>

                    <View style={styles.itensPedidos}>
                        <Text style={styles.labelPedidos}>Total pedido:</Text>
                        <Text style={styles.textPedidos}>{pedidos.totalPedido}</Text>
                    </View>

                </View>

            </View>

            <View style={styles.containerListItens}>

                {pedidos.itens.map(item => (

                    <View key={item.id} style={styles.lineListItens}>

                        <TouchableOpacity activeOpacity={0.8} style={styles.containerImgMarca}>
                            <Image style={styles.imgMarca} source={{ uri: item.imgMarca }} />
                        </TouchableOpacity>

                        <View style={styles.containerNomePreco}>

                            <Text style={styles.nameMarca}>
                                {item.nameMarca}
                            </Text>

                            <Text style={styles.precoTotal}>
                                {item.precoTotal}
                            </Text>

                        </View>

                        <TouchableOpacity activeOpacity={0.6} style={styles.btnVerPedido} onPress={() => navigateToPedidoDetail( item ) }>

                            <Text style={styles.textVerPedido}>
                                VER PEDIDO
                            </Text>

                        </TouchableOpacity>
                    </View>
                ))}
            </View>

        </View>
    );
};

export default ListItemDetalhesCarrinho;