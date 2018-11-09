import React from "react";
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Animated,
    Dimensions,
} from "react-native";
import styles from "./produtos-styles";
import {withNavigation} from "react-navigation";

class Produto extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            perfil_produto: props.produtos,
            user_logged: props.user_logged,
            // infos_produtos: false,
            // fotos_produtos: false,
            indice_ativo: '',
            foto_ativo: '',
            animation_produto: new Animated.Value(0),
            animation_fotos_produto: new Animated.Value(0),
            deviceWidth: Dimensions.get('window').width,
            indice_img: 0,
        };

        // Verifica o tamanho da tela atual e guarda o valor na variavel deviceWidth
        Dimensions.addEventListener("change", () => {
            this.setState({deviceWidth: Dimensions.get('window').width});
        });
    }

    touchOpcoesProdutos(indexProduto){

        if(this.state.indice_ativo === indexProduto){
            if(this.state.perfil_produto[indexProduto].ativo === true){
                Animated.timing( this.state.animation_produto, {
                    toValue: 0,
                    duration: 300
                }).start(()=> {
                    this.state.perfil_produto[this.state.indice_ativo].ativo = false;
                });
            }else{
                this.state.perfil_produto[indexProduto].ativo = true;
                Animated.timing( this.state.animation_produto, {
                    toValue: 100,
                    duration: 300
                }).start();
            }
        }else{
            this.state.perfil_produto.map((prod, $index)=>{
                if($index !== indexProduto){
                    Animated.timing( this.state.animation_produto, {
                        toValue: 0,
                        duration: 300
                    }).start(()=> {
                        prod.ativo = false;
                    });
                }
            });

            this.state.perfil_produto[indexProduto].ativo = true;
            Animated.timing( this.state.animation_produto, {
                toValue: 100,
                duration: 300
            }).start();

            this.state.indice_ativo = indexProduto;
            this.setState({
                indice_ativo: this.state.indice_ativo,
                perfil_produto: this.state.perfil_produto
            });
        }
    }

    showFotosProdutos(indexProduto){

        this.state.perfil_produto[indexProduto].fotos_ativa = true;
        Animated.spring( this.state.animation_fotos_produto, {
            toValue: 100,
            tension: 10,
        }).start();

        this.state.foto_ativo = indexProduto;
        this.setState({
            foto_ativo: this.state.foto_ativo,
            perfil_produto: this.state.perfil_produto
        });
    }

    hideFotosProdutos(indexProduto){

        Animated.spring( this.state.animation_fotos_produto, {
            toValue: 0,
            tension: 10,
        }).start(()=> {
            this.state.perfil_produto[indexProduto].fotos_ativa = false;
            this.setState({
                perfil_produto: this.state.perfil_produto
            });
        });
    }

    // Muda a foto do produto de acordo com a variante escolhida
    mudaVarianteEscolhida(prod, indexVariante, indexProd){
        if (prod.variantes[indexVariante].imgs[0].medium != null && prod.variantes[indexVariante].imgs[0].medium != ""){
            this.state.perfil_produto[indexProd].image_url.medium = prod.variantes[indexVariante].imgs[0].medium;

            this.setState({
               perfil_produto: this.state.perfil_produto
            });
        }
    };

    renderOverlayProduto(indexProduto){

        let overlay_produto = this.state.animation_produto.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ ( 400 * -1 ), 0 ]
        });

        return(
            <Animated.View style={[styles.containerOverlay,{ transform: [{ translateY: overlay_produto }]}]} >
                <TouchableOpacity onPress={() => {
                    let user_logged = JSON.parse(this.state.user_logged);
                    let profile_url = user_logged.profile_url;
                    let produto_slug = this.state.perfil_produto[indexProduto].produto_slug;
                    let img_produto = this.state.perfil_produto[indexProduto].images;
                    this.props.navigation.navigate('ProdutoProfile', {produto_slug, profile_url, img_produto});
                }} style={styles.buttonOverlay}>
                    <Text style={styles.textButtonOverlay}>
                        VER PRODUTO
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.showFotosProdutos(indexProduto)}
                                  style={[styles.buttonOverlay, {marginTop: 10}]}>
                    <Text style={styles.textButtonOverlay}>
                        + FOTOS
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }

    nextFoto(){
        let imgLenght;

        this.state.perfil_produto.map((prod) => {
            imgLenght = prod.images.length
        });

        if(this.state.indice_img <= imgLenght){
            this.state.indice_img = this.state.indice_img + 1;
            let scroll = this.refs.scroll;
            this.refs.scroll.scrollTo({x: this.state.deviceWidth * this.state.indice_img});
        }
    }

    previousFoto(){
        if(this.state.indice_img > 0){
            this.state.indice_img = this.state.indice_img - 1;
            let scroll = this.refs.scroll;
            this.refs.scroll.scrollTo({x: this.state.deviceWidth * this.state.indice_img});
        }
    }

    renderSlideProduto(indexProduto){
        return(
            <View style={styles.containerSliderProduto}>
                <View style={styles.containerIconFechar}>
                    <TouchableOpacity onPress={() => this.hideFotosProdutos(indexProduto)}>
                        <Text style={styles.iconFechar}>X</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} ref="scroll" style={styles.scrollSlider}>
                    {this.state.perfil_produto.map((prod, indexProd) => (
                        prod.images.map((img, index) => {

                            if (this.state.foto_ativo === indexProd) {

                                return(
                                    <View key={index}>
                                        <View style={[styles.containerImgProdutoSlider, {width: this.state.deviceWidth}]}>
                                            <ImageBackground source={{uri: img}} style={styles.imgProdutoSlider}/>
                                        </View>
                                    </View>
                                )
                            }
                        })
                    ))}
                </ScrollView>

                <View style={[styles.buttonLeftRight, styles.buttonLeft]}>
                    <TouchableOpacity onPress={() => this.previousFoto()} style={styles.buttonsSlider}>

                        <Image resizeMode={'contain'} source={require ("../../../../assets/imgs/png/icons/caret-left.png")} style={styles.iconSlider} />

                    </TouchableOpacity>
                </View>

                <View style={[styles.buttonLeftRight, styles.buttonRight]}>


                    <TouchableOpacity onPress={() => this.nextFoto()} style={styles.buttonsSlider}>
                        <Image resizeMode={'contain'} source={require ("../../../../assets/imgs/png/icons/caret-left.png")} style={[styles.iconSlider, { transform: [{rotateY: '180deg'}]}]} />
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    renderProduto(){

        let infos_produtos = this.state.animation_produto.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ (20 * -1), 78 ]
        });

        let fotos_produtos = this.state.animation_fotos_produto.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ '180deg', '0deg' ]
        });

        return this.state.perfil_produto.map((prod, indexProduto) => {

            return(
                <Animated.View key={indexProduto} style={[styles.containerProduto,
                    prod.fotos_ativa ? {transform: [{rotateY: fotos_produtos}]} : null]}>

                    {prod.fotos_ativa &&
                    this.renderSlideProduto(indexProduto)
                    }

                    {!prod.fotos_ativa &&
                    <TouchableOpacity activeOpacity={1} onPress={() => this.touchOpcoesProdutos(indexProduto)} style={styles.touchContainerImgProduto}>

                        <View style={styles.containerImgProduto}>

                            <Image style={[styles.imgProduto,
                                prod.ativo && !prod.fotos_ativa ? {top: 86} : null]}
                                   resizeMode={'cover'} source={{uri: prod.image_url.medium}}/>

                            { prod.ativo && !prod.fotos_ativa &&
                            // this.state.infos_produtos === true && this.state.indice_ativo === indexProduto && this.state.fotos_produtos === false &&
                            this.renderOverlayProduto(indexProduto)
                            }

                        </View>

                        <Animated.View style={[prod.ativo && !prod.fotos_ativa ? {bottom: infos_produtos, backgroundColor: '#FFF',
                            width: '100%', borderBottomEndRadius: 5, borderBottomStartRadius: 5} : styles.infosProdutos]}>

                            <View style={styles.controleInfosProduto}>
                                <View style={styles.containerDescricaoCategoria}>
                                    <Text numberOfLines={1} ellipsizeMode="tail"
                                          style={styles.textDescricao}>
                                        {prod.produto_descricao}
                                    </Text>

                                    { !prod.style_name ?
                                        <Text style={[styles.textCategoria, {color: '#fff'}]}>
                                            Não há estilos
                                        </Text> :

                                        <Text style={styles.textCategoria}>
                                            {prod.style_name}
                                        </Text>
                                    }

                                </View>

                                <View style={styles.containerPreco}>
                                    <Text style={styles.textPreco}>
                                        {prod.produto_preco_atacado}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.containerGradesVariantes}>
                                <View style={styles.containerGrade}>
                                    <Text style={styles.labelTitle}>
                                        GRADES
                                    </Text>

                                    <View style={styles.controleInfos}>
                                        {prod.grades.map((grade, indexGrade) => (
                                            <Text key={indexGrade} style={styles.textGrade}>
                                                {grade.tamanho_nome},
                                            </Text>
                                        ))}
                                    </View>
                                </View>

                                <View style={styles.containerVariantes}>
                                    <Text style={styles.labelTitle}>
                                        VARIANTES
                                    </Text>

                                    <View style={styles.controleInfos}>
                                        {prod.cores.map((cor, index) => (
                                            <TouchableOpacity key={index} onPress={() => this.mudaVarianteEscolhida(prod, index, indexProduto)} style={styles.touchVariantes}>

                                                {cor.indexOf('http') < 0 &&
                                                <Text style={[styles.varianteCor, {backgroundColor: cor}]}/>
                                                }

                                                {cor.indexOf('http') >= 0 &&
                                                <Image style={styles.varianteCor} source={{uri: cor}}/>
                                                }

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
    }

    render() {
        return (
            this.renderProduto()
        );
    }
}

export default withNavigation(Produto)