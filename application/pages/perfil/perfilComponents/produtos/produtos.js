import React from "react";
import {
    ActivityIndicator,
    View,
    TextInput,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Animated,
    Dimensions
} from "react-native";
import styles from "../../Perfil-style";

export default class Produto extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            perfil_marca: props.perfil,
            infos_produtos: false,
            fotos_produtos: false,
            indice_ativo: '',
            foto_ativo: '',
            animation_produto: new Animated.Value(0),
            animation_fotos_produto: new Animated.Value(0),
            deviceWidth: Dimensions.get('window').width,
        };

        // Verifica o tamanho da tela atual e guarda o valor na variavel deviceWidth
        Dimensions.addEventListener("change", () => {
            this.setState({deviceWidth: Dimensions.get('window').width});
        });
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

    showFotosProdutos(indexProduto){
        this.state.perfil_marca.map((perfil) => {

            perfil.produtos.map((prod, indice) => {

                if(indexProduto === indice){
                    this.setState({
                        fotos_produtos: true,
                        foto_ativo: indexProduto
                    });

                    Animated.spring( this.state.animation_fotos_produto, {
                        toValue: 100,
                        velocity: 400,
                    }).start();
                }
            });
        });
    }

    hideFotosProdutos(){

        this.setState({
            fotos_produtos: false,
        });

        Animated.spring( this.state.animation_fotos_produto, {
            toValue: 0,
            velocity: 400,
        }).start();
    }

    renderOverlayProduto(indexProduto){

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

                <TouchableOpacity onPress={() => this.showFotosProdutos(indexProduto)}
                    style={{width: 200, padding: 10, marginTop: 10, borderWidth: 2, borderColor: '#FFF', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
                        + FOTOS
                    </Text>
                </TouchableOpacity>

            </Animated.View>

        );
    }

    renderSlideProduto(){
        return(

            <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>

                <View style={{width: '100%', paddingRight: 20, position: 'absolute', top: 10, zIndex: 999999999, justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => this.hideFotosProdutos()}>
                        <Text style={{fontSize: 50, color: '#d2d5dc'}}>X</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} style={{flex: 1, width: '100%', flexDirection: 'row',}}>

                    {this.state.perfil_marca.map((perfil) => (
                        perfil.produtos.map((prod, indexProd) => (
                            prod.images.map((img, index) => (

                                this.state.foto_ativo === indexProd &&

                                <View key={index}>

                                    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', width: this.state.deviceWidth}}>
                                        <ImageBackground source={{uri: img.image}}
                                                         style={{width: '100%', height: '100%',}} />
                                    </View>

                                </View>
                            ))
                        ))
                    ))}

                </ScrollView>

                <View style={{width: '100%', paddingLeft: 20, position: 'absolute', zIndex: 999999999, justifyContent: 'center', alignItems: 'flex-start'}}>
                    <TouchableOpacity style={{width: 30, height: 30}}>
                        <Image resizeMode={'contain'} source={require ("../../../../assets/imgs/png/icons/seta-left-black.png")} style={{width: '100%', height: '100%'}} />
                    </TouchableOpacity>
                </View>

                <View style={{width: '100%', paddingRight: 20, position: 'absolute', zIndex: 999999999, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <TouchableOpacity style={{width: 30, height: 30}}>
                        <Image resizeMode={'contain'} source={require ("../../../../assets/imgs/png/icons/seta-left-black.png")} style={{width: '100%', height: '100%', transform: [{rotateY: '180deg'}]}} />
                    </TouchableOpacity>
                </View>

            </View>

        )
    }

    renderProduto(){

        let infos_produtos = this.state.animation_produto.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ (29 * -1), 86.7 ]
        });

        let fotos_produtos = this.state.animation_fotos_produto.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ '0deg', '360deg' ]
        });

        return this.state.perfil_marca.map((perfil) => {

            return perfil.produtos.map((prod, indexProduto) => {

                return(
                    <Animated.View key={indexProduto} style={[
                        this.state.fotos_produtos && this.state.foto_ativo === indexProduto ? {width: '100%', height: 400, marginTop: 20, marginLeft: 5,
                                marginRight: 5, alignItems: 'center', justifyContent: 'center',
                                borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 5, transform: [{rotateY: fotos_produtos}]} :
                            {
                                width: '100%', height: 400, marginTop: 20, marginLeft: 5,
                                marginRight: 5, alignItems: 'center', justifyContent: 'center',
                                borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 5}]}>

                        {
                            this.state.fotos_produtos === true && this.state.foto_ativo === indexProduto &&

                                this.renderSlideProduto()
                        }

                        {
                            this.state.fotos_produtos === false &&
                            <TouchableOpacity activeOpacity={1}
                                              onPress={() => this.showOpcoesProdutos(indexProduto)}
                                              style={{
                                                  width: '100%',
                                                  height: '100%',
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                              }}>

                                <View style={{
                                    width: '100%',
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image style={[
                                        this.state.infos_produtos === true && this.state.indice_ativo === indexProduto ?
                                            {width: '100%', height: '100%', top: 86} :

                                            {width: '100%', height: '100%', top: 0}

                                    ]} resizeMode={'contain'} source={{uri: prod.imgProduto}}/>

                                    {this.state.infos_produtos === true && this.state.indice_ativo === indexProduto &&
                                    this.renderOverlayProduto(indexProduto)
                                    }

                                </View>

                                <Animated.View style={[
                                    this.state.infos_produtos === true && this.state.indice_ativo === indexProduto ?
                                        {
                                            bottom: infos_produtos,
                                            backgroundColor: '#FFF',
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderBottomEndRadius: 5,
                                            borderBottomStartRadius: 5
                                        } :
                                        {
                                            width: '100%',
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'absolute',
                                            bottom: -115,
                                            backgroundColor: '#FFF'
                                        }
                                ]}>

                                    <View style={{flexDirection: 'row'}}>

                                        <View style={{
                                            width: '60%',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            paddingLeft: 20
                                        }}>

                                            <Text numberOfLines={1} ellipsizeMode="tail"
                                                  style={{color: '#000', width: 200, marginTop: 10, fontSize: 18}}>
                                                {prod.descricao}
                                            </Text>

                                            <Text style={{color: '#b5b6bd', marginTop: 5, fontSize: 15}}>
                                                {prod.categoria}
                                            </Text>

                                        </View>

                                        <View style={{
                                            width: '40%',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            paddingRight: 20
                                        }}>

                                            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 25}}>
                                                {prod.preco}
                                            </Text>

                                        </View>

                                    </View>


                                    <View style={{width: '100%', alignItems: 'flex-start', justifyContent: 'center'}}>

                                        <View style={{
                                            width: '100%',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            paddingLeft: 20,
                                            marginTop: 10
                                        }}>

                                            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
                                                GRADES
                                            </Text>

                                            <View style={{width: '100%', flexDirection: 'row'}}>
                                                {prod.variantes.map((variante) => (
                                                    variante.grades.map((grade, indexGrade) => (
                                                        <Text key={indexGrade}
                                                              style={{color: '#b5b6bd', fontSize: 15, marginRight: 5}}>
                                                            {grade.nome},
                                                        </Text>
                                                    ))
                                                ))}
                                            </View>

                                        </View>

                                        <View style={{
                                            width: '100%',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            paddingLeft: 20,
                                            marginTop: 10,
                                            marginBottom: 10
                                        }}>

                                            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
                                                VARIANTES
                                            </Text>

                                            <View style={{width: '100%', flexDirection: 'row'}}>

                                                {prod.variantes.map((variante, index) => (

                                                    <TouchableOpacity key={index} style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: 20,
                                                        height: 20,
                                                        borderRadius: 50,
                                                        marginRight: 5,
                                                        borderWidth: 1,
                                                        borderColor: '#c2c2c2'
                                                    }}>
                                                        <Text style={{
                                                            width: '95%',
                                                            height: '95%',
                                                            backgroundColor: variante.cor_valor,
                                                            borderRadius: 50,
                                                            borderWidth: 1,
                                                            borderColor: '#c2c2c2'
                                                        }}/>
                                                    </TouchableOpacity>
                                                ))}

                                            </View>

                                        </View>

                                    </View>

                                </Animated.View>

                            </TouchableOpacity>
                        }
                    </Animated.View>
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