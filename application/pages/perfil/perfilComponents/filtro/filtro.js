import React from "react";
import {
    ActivityIndicator,
    View,
    TextInput,
    Text,
    ScrollView,
    Animated,
    UIManager,
    LayoutAnimation,
    Platform,
    Image,
    TouchableOpacity,
    Dimensions,
    Slider,
} from "react-native";

export default class Filtro extends React.Component {

    constructor(props) {
        super(props);

        let { height, width } = Dimensions.get('window');

        this.state = {
            perfil_categorias: props.categorias,
            perfil_produtos: props.produtos,
            animation_filtro: new Animated.Value(0),
            opened: props.opened,

            screen_height: height,
            screen_width: width,

            /* progresso de animação do componente */
            animation_progress: new Animated.Value( 0 ),
            elements_animation_progress: new Animated.Value( 0 ),


            /* Definição do transform do componente ( usado para a animação ) */
            transform_definition: width,
        };
    }

    /** Executada quando o componente é montado */
    componentDidMount(){
        Dimensions.addEventListener('change', (( dimensions ) => {
            this.setState({ screen_height: dimensions.window.height });
            this.setState({ screen_width: dimensions.window.width });
            this.setState({ transform_definition: dimensions.window.width });
        }));
    }

    /** Função utilizada sempre que o componente receber alguma alteração em suas propriedades */
    componentWillReceiveProps( props ){

        this.setState({ opened: props.opened });

        if( props.opened ){

            Animated.stagger(100, [

                Animated.spring( this.state.animation_progress, {
                    toValue: 100,
                    bounciness: 7,
                    velocity: 400
                }),

                Animated.spring( this.state.elements_animation_progress, {
                    toValue: 100,
                    bounciness: 3,
                    duration: 200
                })

            ]).start();

            this.setState ({ transform_definition: this.state.animation_progress.interpolate({
                    inputRange: [ 0, 100 ],
                    outputRange: [ this.state.screen_width, 0 ]
                })
            });

        }

    }

    _closeFiltro = (() => {

        /* Anima o sideMenu para sair, animação timing */
        Animated.timing(this.state.animation_progress, {
            toValue: 0,
            duration: 150
        }).start( (() => {
            this.props.onclose();
            this.state.elements_animation_progress.setValue( 0 );
        }));

        /* Seta o state de transition do content do sideMenu */
        this.setState ({ transform_definition: this.state.animation_progress.interpolate({
                inputRange: [ 0, 100 ],
                outputRange: [ ( this.state.screen_width * -1 ), 0  ]
            })
        });/* Fim da definição do state de transform */

    });

    renderFiltro(){

        return(
            <Animated.View style={{backgroundColor: '#fff',
                flex:1,
                width: '100%',
                position: 'absolute',
                left: 0,
                top: 84,
                display: 'flex',
                zIndex: 99,
                transform: [{ translateX: this.state.transform_definition }], height: '81%' }
            }>

                <ScrollView style={{paddingBottom: 20, paddingRight: 30, paddingLeft: 30}}>

                    <View style={{ width: '100%',
                        paddingRight: 20,
                        top: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end',}}>
                        <TouchableOpacity onPress={this._closeFiltro}>
                            <Text style={{fontSize: 40,
                                color: '#d2d5dc',}}>X</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{width: '100%', paddingTop: 20, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
                            CARRINHO
                        </Text>

                        <Text style={{fontSize: 16, color: '#d2d5dc', fontStyle: 'italic'}}>
                            Sem itens no carrinho
                        </Text>
                    </View>

                    <View style={{width: '100%', paddingTop: 20, alignItems: 'flex-start', justifyContent: 'center', marginBottom: 10}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
                            CATEGORIAS
                        </Text>

                        {this.props.categorias.map((cat, index) => (

                            <View key={index} style={{width: '100%', flexDirection: 'row', marginTop: 10}}>

                                <TouchableOpacity style={{width: 20, height: 20, borderColor: '#d2d5dc', borderWidth: 1, marginRight: 40, marginTop: 2}}>

                                </TouchableOpacity>

                                <Text style={{fontSize: 16}}>
                                    {cat.style_name}
                                </Text>
                            </View>
                            ))
                        }

                    </View>

                    <View style={{width: '100%', paddingTop: 10, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
                            VARIANTES
                        </Text>

                        <View style={{width: '100%', flexWrap: 'wrap', flexDirection: 'row', marginTop: 10, alignItems: 'stretch'}}>

                            {this.props.produtos.map((prod) => (

                                prod.cores.map((cor, index) => (

                            <TouchableOpacity key={index} style={{width: '50%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', marginBottom: 10}}>

                                {cor.cor_valor !== '' &&
                                <Text style={{width: 20, height: 20, borderRadius: 50, borderWidth: 1, borderColor: '#c2c2c2', marginRight: 5, marginTop: 2, backgroundColor: cor.cor_valor}}/>
                                }

                                {cor.img_cor !== '' &&
                                <Image style={{width: 20, height: 20, borderRadius: 50, borderWidth: 1, borderColor: '#c2c2c2', marginRight: 5, marginTop: 2}} source={{uri: cor.img_cor}}/>
                                }

                                <Text style={{fontSize: 16}}>
                                    {cor.cor_nome}
                                </Text>

                            </TouchableOpacity>

                                ))
                            ))}

                        </View>

                    </View>

                    <View style={{width: '100%', paddingTop: 10, alignItems: 'flex-start', justifyContent: 'center', marginBottom: 10}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
                            GRADES
                        </Text>

                        {this.props.produtos.map((prod) => (

                            prod.grades.map((grade, index) => (

                                <View key={index} style={{width: '100%', flexDirection: 'row', marginTop: 10}}>

                                    <TouchableOpacity style={{width: 20, height: 20, borderColor: '#d2d5dc', borderWidth: 1, marginRight: 40, marginTop: 2}}>

                                    </TouchableOpacity>

                                    <Text style={{fontSize: 16}}>
                                        {grade.tamanho_nome}
                                    </Text>
                                </View>

                            ))
                        ))
                        }

                    </View>

                    <View style={{width: '100%', paddingTop: 10, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
                            FAIXA DE PREÇO
                        </Text>

                        <Slider style={{width: '100%'}} step={1} maximumValue={350} minimumValue={50} thumbTintColor={'#7417fb'} />

                    </View>

                </ScrollView>

            </Animated.View>
        );
    }

    render(){
        return(
            this.renderFiltro()
        );
    }
}