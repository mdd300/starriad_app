import React from "react";
import { View, Image, Animated } from "react-native";
import styles from "../image-picker-styles";

/* Escopo da classe de ImageThumbs */
export default class ImageThumb extends React.Component{

    /* Função construtora do componente */
    constructor( props ){
        super( props );

        this.state = {
            animation_progress: new Animated.Value( 0 ),
        };

    }/* Fim da função construtora do componente */

    /* Função trigger de quando o componente for montado */
    componentDidMount = (() => {

        /* Aguarda um tempo ( passado como parâmetro ) para exibir a thumb da imagem */
        setTimeout(() => {

            Animated.spring( this.state.animation_progress, {
                toValue: 100,
            }).start();

        }, this.props.timeout );/* Fim do timeout de exibição do componente */

    }); /* Fim da função trigger de quando o componente for montado */

    /** Função que renderiza a visualização de imagem selecionada */
    __render_selected = (() => {

        if( this.props.selected ){
            return (
                <View style={[ styles.selected_thumb_image ]}>
                    <View style={[ styles.selected_thumb_image_badge]} >
                        <Image style={{ width: 8, height: 8 }} source={ require("../../../assets/imgs/png/icons/check-white.png") }/>
                    </View>
                </View>
            );
        }

    });

    /** Função render, responsável por renderizar o componente */
    render = (() => {

        /* Interpolação da animação */
        const scale = this.state.animation_progress.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ 0, 1 ],
        });

        const scale_style = { opacity: scale, transform: [{ scale: scale }] };

        return(
            <Animated.View style={[ styles.image_picker_image_item_view, scale_style, { width: this.props.width, height: this.props.height } ]} >
                <Image
                    style={{ width: this.props.width, height: this.props.height }}
                    defaultSource={ require("../../../assets/imgs/png/icons/broken-image.png") }
                    source={{ uri: this.props.image }}/>
                { this.__render_selected() }
            </Animated.View>
        );

    });/* Fim da função render do componente */
    
    
}/* Fim do escopo da classe de ImageThumb */