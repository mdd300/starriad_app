import React from 'react';
import { FlatList, View } from 'react-native';
import ListItemDetalhesCarrinho from "../list-item-detalhes-carrinho/list-item-detalhes-carrinho";

const ListDetalhesCarrinho = props => {

    const { pedido, onPressItem } = props;

    return (
        <FlatList data={pedido} renderItem={({ item }) => (

            <ListItemDetalhesCarrinho
                pedidos={item}
                navigateToPedidoDetail={onPressItem}/>

        )}
            keyExtractor={item => item.key} />
    );
};

export default ListDetalhesCarrinho;