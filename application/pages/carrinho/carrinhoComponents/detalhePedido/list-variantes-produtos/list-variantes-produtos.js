import React from 'react';
import {Animated, Image, Text, TouchableOpacity, View, Alert, Easing} from 'react-native';
import styles from "./list-variantes-produtos-styles";
import ListGradeTamanhos from "../list-grade-tamanhos/list-grade-tamanhos";

export default class ListVariantesProdutos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            animation_icon: new Animated.Value(0),
            animation_container_tamanhos: new Animated.Value(0),
            indice_ativo: '',
            indice_produto: props.indice,
            variante_produto: props.variantesProduto,
            todosProdutos: props.objProduto,
            refreshing: false,
            tamanhosLength: 0,
            tamanhosContainerHeight: 0,
        };
    }

    measurements = {};

    measureToutRef = () => {
        this.toutRef.measure((x, y, width, height, pageX, pageY) => {
            this.measurements.pageY = pageY;
            this.measurements.height = height;
            this.props.handleLayout(this.measurements, this.props.toutIndex);
        })
    };

    // Função que verifica se a variante está com o subMenu aberto ou fechado e chama os respectivos metodos
    handlePressTout = (index) => {

        this.state.variante_produto.variantes.map((variante, indice) => {
            if(index === indice){
                this.state.tamanhosLength = variante.tamanhos.length;
            }
        });

        this.state.indice_ativo = index;
        this.setState({
            indice_ativo: this.state.indice_ativo
        });

        // Renderiza o tamanho do container que contem os tamanhos e quantidades de acordo com a quantidade de tamanhos
        if(this.state.tamanhosLength >= 7){
            this.state.tamanhosContainerHeight = this.state.tamanhosLength * 52;
        }
        else if(this.state.tamanhosLength >= 4){
            this.state.tamanhosContainerHeight = this.state.tamanhosLength * 55;
        }
        else if(this.state.tamanhosLength === 3){
            this.state.tamanhosContainerHeight = this.state.tamanhosLength * 60;
        }
        else{
            this.state.tamanhosContainerHeight = this.state.tamanhosLength * 65;
        }

        if (this.state.variante_produto.variantes && this.state.variante_produto.variantes.length) {

            if (this.state.variante_produto.variantes[index].ativo) {
                this.hideVariantes(index);
            }
            else {
                this.showVariantes(index);
            }
        }
    };

    // Abre a variante que foi clicada, exibe os tamanhos e as quantidades
    showVariantes = (index) => {

        this.state.variante_produto.variantes[index].ativo = true;
        this.setState({
            variante_produto: this.state.variante_produto
        });

        this.showAnimacaoIconVariantes();
        this.showAnimacaoContainerTamanhos();
    };

    // Fecha a variante que foi clicada, esconde os tamanhos e as quantidades
    hideVariantes = (index) => {
        this.hideAnimacaoIconVariantes();
        this.hideAnimacaoContainerTamanhos(index);
    };

    // Inicia a animação do icone das variantes
    showAnimacaoIconVariantes(){

        Animated.timing(this.state.animation_icon, {
            toValue: 1,
            duration: 400,
            easing: Easing.inOut(Easing.quad),
        }).start();
    }

    // Volta a animação do icone das variantes
    hideAnimacaoIconVariantes(){

        Animated.timing(this.state.animation_icon, {
            toValue: 0,
            duration: 400,
            easing: Easing.inOut(Easing.quad),
        }).start();
    }

    // Faz a animação de mostrar os tamanhos e quantidades das variantes
    showAnimacaoContainerTamanhos(){

        Animated.timing(this.state.animation_container_tamanhos, {
            toValue: 1,
            duration: 400,
            easing: Easing.inOut(Easing.quad),
        }).start(() => {
            this.props.handlePressTout(this.props.toutIndex);
        });
    }

    // Faz a animação de esconder os tamanhos e quantidades das variantes
    hideAnimacaoContainerTamanhos(index){

        Animated.timing(this.state.animation_container_tamanhos, {
            toValue: 0,
            duration: 400,
            easing: Easing.inOut(Easing.quad),
        }).start(() => {
            this.state.variante_produto.variantes[index].ativo = false;
        });

        this.setState({
            variante_produto: this.state.variante_produto
        });
    }

    setToutRef = node => {
        if (node) {
            this.toutRef = node;
        }
    };

    // Excluí a variante selecionada e caso só tenha uma variante, também excluí o produto do carrinho
    excluir = (index) => {
        this.setState({refreshing: true});

        if(this.state.variante_produto.variantes.length <= 1){
            this.state.variante_produto.variantes.splice(index, 1);

            this.state.todosProdutos.produto.map((prod, indexProd) => {
                if(indexProd === this.state.indice_produto){
                    this.state.todosProdutos.produto.splice(indexProd, 1);
                }
            })

        }else{
            this.state.variante_produto.variantes.splice(index, 1);
        }

        setTimeout(() => {
            this.setState({refreshing: false});
        }, 500);

        this.setState({
            variante_produto: this.state.variante_produto,
            todosProdutos: this.state.todosProdutos
        });
    };

    // Alerta de exclusão de variantes
    _deleteVariante(index){

        this.state.variante_produto.variantes.map((variante, indice) => {
            if(index === indice) {

                if (this.state.variante_produto.variantes.length <= 1) {
                    Alert.alert(
                        'Atenção',
                        'Este produto possuí apenas esta variante. Se você exclui-la automaticamente o produto será removido do carrinho. Deseja prosseguir?',
                        [
                            {text: 'Não', onPress: () => null},
                            {text: 'Sim', onPress: () => this.excluir(index)}
                        ],
                        {cancelable: false}
                    )
                }
                else{
                    Alert.alert(
                        'Excluir',
                        'Tem certeza que deseja excluir esta variante?',
                        [
                            {text: 'Não', onPress: () => null},
                            {text: 'Sim', onPress: () => this.excluir(index)}
                        ],
                        {cancelable: false}
                    )
                }
            }
        });
    }

    render () {

        // Animação do icone das variantes
        let icon_rotate = this.state.animation_icon.interpolate({
            inputRange: [ 0, 1 ],
            outputRange: [ '0deg', '180deg' ]
        });

        // Animação do container de tamanhos e quantidades
        let animateTamanhosHeight = this.state.animation_container_tamanhos.interpolate({
            inputRange: [0, 1],
            outputRange: [0, this.state.tamanhosContainerHeight],
        });

        return(

            <View>

                {this.state.todosProdutos.produto.length > 0 && this.state.variante_produto.variantes.length > 0 && this.state.variante_produto.variantes.map((variante, index) => (

                    <View key={index} style={styles.containerCor} onLayout={!this.measurements.pageY ? this.measureToutRef : () => null}>

                        <View style={[styles.containerDetalheCor]}>
                            <View style={styles.detalheCor}>
                                <View style={styles.containerImgCor}>

                                    {variante.cor_valor !== '' &&
                                        <View style={{backgroundColor: variante.cor_valor, flex: 1, borderRadius: 2}}/>
                                    }

                                    {variante.imagem !== '' &&
                                        <Image style={styles.imgCor} source={{uri: variante.imagem}}/>
                                    }

                                </View>

                                <View style={styles.infosCor}>

                                    <Text style={styles.descricaoCor}>{variante.cor}</Text>

                                    <View style={styles.containerQtd}>
                                        <View style={styles.qtd}>
                                            <Text style={styles.labelQtd}>Qtd</Text>
                                            <Text style={styles.textQtd}>{variante.quantidade}</Text>
                                        </View>

                                        <View>
                                            <Text style={styles.labelSubTotal}>Sub-total</Text>
                                            <Text style={styles.textSubTotal}>{variante.subTotal}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.containerIconLixeira}>
                                    <TouchableOpacity style={styles.touchIconLixeira} onPress={() => this._deleteVariante(index)}>
                                        <Image resizeMode={'contain'} style={styles.icon}
                                               source={require('../../../../../../application/assets/imgs/png/icons/lixeira.png')}/>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.containerIconSeta}>
                                    <TouchableOpacity style={styles.touchIconSeta} ref={this.setToutRef} onPress={() => this.handlePressTout(index)}>

                                        <Animated.Image resizeMode={'contain'} style={[
                                            styles.icon,
                                            variante.ativo ?
                                                { transform: [{rotateZ: icon_rotate}] }
                                            : null
                                        ]}
                                            source={require('../../../../../../application/assets/imgs/png/icons/seta-down.png')} />

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        { this.state.variante_produto.variantes && this.state.variante_produto.variantes.length && variante.ativo &&

                            <Animated.View style={[ this.state.indice_ativo === index ? {height: animateTamanhosHeight} : null ]}>

                                <ListGradeTamanhos varianteTamanhos={variante} />

                            </Animated.View>
                        }

                    </View>
                ))}

                { this.state.variante_produto.variantes.length <= 0 &&
                    <View style={styles.msgProdutoVazio}>
                        <Text style={styles.textProdutoVazio}>Não há varientes neste produto</Text>
                    </View>
                }
            </View>
        )
    }
}