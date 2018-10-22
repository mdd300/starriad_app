import React from "react";
import { View, Image, Text, Animated } from "react-native";
import styles from "../select-produtos-styles";

/** Escopo da classe de thumb do produto */
export default class ProductThumb extends React.Component{

    /** Função construtora do componente */
    constructor( props ){
        super( props );

        this.state = {
            thumb_size: 0,
            selected: this.props.selected,

            animation_progress: new Animated.Value( 0 )

        };

    }/* Fim da função construtora do componente */


    componentDidMount = (()=> {});

    /* Função trigger executada toda vez que o componente for atualizado */
    componentWillUpdate = (( nextProps, nextState ) => {

        /* Verifica se o valor das proximas propriedades é diferente da atual  */
        if( this.props.selected !== nextProps.selected ){
            this.setState({ selected: nextProps.selected });

            let to_value = ( nextProps.selected ? 100 : 0 ); /* Valor do value, caso a seleção do produto seja true ou false */

            Animated.spring( this.state.animation_progress, {
                toValue: to_value,
                bounciness: 10
            }).start();

        }/* Fim da verificação de diferença nos valores das propriedades */

    });/* Fim da função trigger do componentWilUpdate */


    __setThumbSize = (( layout ) => {
        let thumbSize = (layout.nativeEvent.layout.width);
        this.setState({ thumb_size: thumbSize });
    });


    /** Função utilizada para retornar a altura da thumb do produto */
    __getThumbHeight = (()=> {

        let thumbSize = this.state.thumb_size;
        return (( thumbSize * 130 ) / 100);

    });/* Fim da função de retorno da altura da thumb */


    /** Função de render do componente */
    render(){

        this.__getThumbHeight();

        return(
            <View style={[ styles.product_thumb_content ]}>
                <View style={[ styles.product_thumb_content_inn ]}>
                    <View style={[ styles.product_thumb_content_viewport ]}>


                        <View style={[ styles.product_thumb_content_cover ]} onLayout={( layout ) => { this.__setThumbSize( layout ) }} >
                            <View style={[ styles.product_thumb_content_cover_content, { height: this.__getThumbHeight() } ]}>

                                <Image resizeMode="cover" style={[ styles.product_thumb_content_cover_image ]} source={{ uri: this.props.product.product_cover }} />

                                <View style={[ styles.product_thumb_select_badge ]}>
                                    { this.__render_checked() }
                                </View>

                            </View>
                        </View>

                        <View style={[ styles.product_thumb_content_product_name ]}>
                            <Text style={[ styles.product_thumb_product_name_label ]} numberOfLines={1} ellipsizeMode="tail" >
                                { this.props.product.product_name }
                            </Text>
                        </View>

                        <View style={[ styles.product_thumb_content_product_price ]}>
                            <Text style={[ styles.product_thumb_content_product_price_label ]}>
                                R$ { this.props.product.product_price }
                            </Text>
                        </View>

                        <View style={[ styles.product_thumb_content_variables ]}>
                            { this.__render_variable() }
                        </View>


                    </View>
                </View>
            </View>
        );
    }/* Fim do escopo do render do componente */


    /** Função utilizada para renderizar a badge de checked */
    __render_checked = (() => {

        const style = {
            transform: [{ scale: this.state.animation_progress.interpolate({ inputRange: [0, 100], outputRange: [0, 1] }) }]
        };

        return(
            <Animated.View style={[ styles.product_thumb_selected_badge, style ]}>
                <Image style={[ styles.product_thumb_select_badge_ico ]} source={ require("../../../assets/imgs/png/icons/check-black.png") } />
            </Animated.View>
        )


    });/* Fim da função que renderiza a badge de checked  */


    /** Função utilizada para  */
    __render_variable =(() => {
        const render = this.props.product.product_variables.map(( variable, index ) => {
            return(
                <View style={[ styles.product_thumb_variable ]} key={index}>
                    { this.__render_variable_inn( variable.variable_colors ) }
                </View>
            );
        });
        return render;
    });

    __render_variable_inn = (( variable ) => {

        const render = variable.map( (( var_inn, index ) => {

            return(
                <View key={ index } style={[ styles.product_thumb_variable_inn, { backgroundColor: var_inn.color }]} />
            );

        }) );

        return render;

    });

}/* Fim do escopo da classe de thumb do produto */