import React from "react";
import {ActivityIndicator, View, TextInput, Text, ScrollView, ImageBackground, Image, TouchableOpacity, Animated} from "react-native";
import styles from "../../Perfil-style";

export default class Produto extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            perfil_marca: props.perfil,
            infos_produtos: false,
            indice_ativo: '',
            animation_produto: new Animated.Value(0),
        };
    }

    showOpcoesProdutos(indexProduto){

        if(this.state.infos_produtos){

            Animated.timing( this.state.animation_produto, {
                toValue: 0,
                duration: 500
            }).start(()=> {
                this.setState({
                    infos_produtos: false
                });
            });

        }else{

            this.state.perfil_marca.map((perfil) => {

                perfil.produtos.map((prod, indice) => {

                    if(indexProduto === indice){
                        this.setState({
                            infos_produtos: true,
                            indice_ativo: indexProduto
                        });

                        Animated.timing( this.state.animation_produto, {
                            toValue: 100,
                            duration: 500
                        }).start();
                    }
                });
            });
        }
    }

    renderOverlayProduto(){

        let overlay_produto = this.state.animation_produto.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ ( 400 * -1 ), 0 ]
        });

        return(

            <Animated.View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', transform: [{ translateY: overlay_produto }]}} >

                <TouchableOpacity style={{width: 200, padding: 10, borderWidth: 2, borderColor: '#FFF', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
                        VER PRODUTO
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width: 200, padding: 10, marginTop: 10, borderWidth: 2, borderColor: '#FFF', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
                        + FOTOS
                    </Text>
                </TouchableOpacity>

            </Animated.View>

        );
    }

    renderProduto(){

        let infos_produtos = this.state.animation_produto.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ (29 * -1), 86.7 ]
        });

        return this.state.perfil_marca.map((perfil) => {

            return perfil.produtos.map((prod, indexProduto) => {

                return(
                    <TouchableOpacity activeOpacity={1}
                                      onPress={() => this.showOpcoesProdutos(indexProduto)}
                                      key={indexProduto} style={{width: '100%', height: 400, marginTop: 20, marginLeft: 5, marginRight: 5, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 5}}>

                        <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            <Image style={[
                                this.state.infos_produtos === true && this.state.indice_ativo === indexProduto ?
                                    {width: '100%', height: '100%', top: 86} :

                                    {width: '100%', height: '100%', top: 0}

                            ]} resizeMode={'contain'} source={{uri: prod.imgProduto}} />

                            { this.state.infos_produtos === true && this.state.indice_ativo === indexProduto &&
                                this.renderOverlayProduto()
                            }

                        </View>

                        <Animated.View style={[
                            this.state.infos_produtos === true && this.state.indice_ativo === indexProduto ?
                                {bottom: infos_produtos, backgroundColor: '#FFF', width: '100%', alignItems: 'center', justifyContent: 'center', borderBottomEndRadius: 5, borderBottomStartRadius: 5} :
                                {width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: -115, backgroundColor: '#FFF'}
                        ]}>

                            <View style={{flexDirection: 'row'}}>

                                <View style={{width: '60%', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 20}}>

                                    <Text numberOfLines={1} ellipsizeMode="tail" style={{color: '#000', width: 200, marginTop: 10, fontSize: 18}}>
                                        {prod.descricao}
                                    </Text>

                                    <Text style={{color: '#b5b6bd', marginTop: 5, fontSize: 15}}>
                                        {prod.categoria}
                                    </Text>

                                </View>

                                <View style={{width: '40%', alignItems: 'flex-end', justifyContent: 'center', paddingRight: 20}}>

                                    <Text style={{color: '#000', fontWeight: 'bold', fontSize: 25}}>
                                        {prod.preco}
                                    </Text>

                                </View>

                            </View>



                            <View style={{width: '100%', alignItems: 'flex-start', justifyContent: 'center'}}>

                                <View style={{width: '100%', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 20, marginTop: 10}}>

                                    <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
                                        GRADES
                                    </Text>

                                    <View style={{width: '100%', flexDirection: 'row'}}>
                                        {prod.variantes.map((variante) => (
                                            variante.grades.map((grade, indexGrade) => (
                                                <Text key={indexGrade} style={{color: '#b5b6bd', fontSize: 15, marginRight: 5}}>
                                                    {grade.nome},
                                                </Text>
                                            ))
                                        ))}
                                    </View>

                                </View>

                                <View style={{width: '100%', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 20, marginTop: 10, marginBottom: 10}}>

                                    <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
                                        VARIANTES
                                    </Text>

                                    <View style={{width: '100%', flexDirection: 'row'}}>

                                        {prod.variantes.map((variante, index) => (

                                            <TouchableOpacity key={index} style={{justifyContent: 'center', alignItems: 'center', width: 20, height: 20, borderRadius: 50, marginRight: 5, borderWidth: 1, borderColor: '#c2c2c2'}}>
                                                <Text style={{width: '95%', height: '95%', backgroundColor: variante.cor_valor, borderRadius: 50, borderWidth: 1, borderColor: '#c2c2c2'}} />
                                            </TouchableOpacity>
                                        ))}

                                    </View>

                                </View>

                            </View>

                        </Animated.View>

                    </TouchableOpacity>
                )

            });
        });
    }

    render() {
        return (

            this.renderProduto()

        );
    }
}