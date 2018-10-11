import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from "../../../../detalhePedido/Detalhe-pedido-styles";
import ListVariantesProdutos from '../../list-variantes-produtos/list-variantes-produtos';

const ListProdutos = props => {

    const { produtosCarrinho, handleLayout, handlePressTout, toutIndex } = props;

    return (
        <View style={styles.containerDetalhePedido}>

            {produtosCarrinho.produto.map((prod, index) => (

                produtosCarrinho.produto.length > 0 && prod.variantes.length > 0 &&

                <View key={prod.id} style={[styles.contentDetalhePedido]}>

                    <View style={styles.containerInfosProduto}>

                        <View style={styles.containerImgProduto}>
                            <Image style={styles.imgProduto} source={{uri: prod.imagemProduto}}/>
                        </View>

                        <View style={styles.descricaoProduto}>
                            <Text style={styles.produtoNome}>{prod.descricao}</Text>
                            <Text style={styles.produtoPrecoTotal}>{prod.preco}</Text>
                        </View>

                    </View>

                    <ListVariantesProdutos
                        toutIndex={toutIndex}
                        handleLayout={handleLayout}
                        handlePressTout={handlePressTout}
                        variantesProduto={prod}
                        indice={index}
                        objProduto={produtosCarrinho}
                    />

                </View>
            ))}
        </View>
    );
};

export default ListProdutos;