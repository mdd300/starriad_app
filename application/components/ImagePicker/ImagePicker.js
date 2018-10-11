import React from "react";
import {
    View,
    Modal,
    Text,
    ActivityIndicator,
    CameraRoll,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import styles from "./image-picker-styles";

export default class ImagePicker extends React.Component{

    /** Função construtora do componente de imagePicker */
    constructor( props ){
        super( props );

        /* State inicial do componente */
        this.state = {
            opened: true, /* State de se o modal está aberto ou nao */
            loading_images: true,/* State de se o componente está carregando as imagens ou não */

            images: [], /* array com as imagens da camera */
        };

    }/* Fim da função constructor do  */

    /** Função executada sempre que o componente for montado */
    componentDidMount(){

        /* Configurações para retorno das imagens da galeria */
        const params = {
            first: 52,
            assetType: 'Photos'
        };

        /* Retorna as imagens encontradas na galeria */
        CameraRoll.getPhotos(params)
            .then(( response ) => {

                let photos = response.edges;
                this.setState({ loading_images: false, images: photos });
            })
            .catch(( error ) => { 
                console.log( 'error: ', error );
            });/* Fim do catch/then da função de get das imagens da galeria  */


    }/* Fim da função executada quando o componente for montado */


    /** Função responsável por aplicar o loading de carregamento de imagens */
    __render_loading(){
        /* Verifica se o state do componente de loading é verdadeiro */
        if( this.state.loading_images ){
            return(
                <View style={[ styles.viewport_loading_images ]}>
                    <ActivityIndicator size="large" color="#7417fb" />
                    <Text style={[ styles.viewport_loading_images_label ]}> Carregando Imagens... </Text>
                </View>
            );
        }
    }/* Fim da função __render_loading */


    __render_images(){

        const render = this.state.images.map(function( image, index ){
            
            const image_uri = image.node.image.uri.replace('content://', 'file:////');

            console.log( image_uri );
            
            return(
                <View style={[ styles.image_picker_image_item ]} key={index}>
                    <View style={[ styles.image_picker_image_item_view ]}>
                        <TouchableOpacity style={[ styles.image_picker_image_item_touchable ]}>

                            <Image resizeMode="cover" style={[ styles.image_picker_image_item_img ]} source={{ uri: image_uri }}/>

                        </TouchableOpacity>
                    </View>
                </View>
            );
        });

        return render;

    }


    /** Função render do componente, que renderiza o ImagePicker */
    render(){

        return(
            <Modal
                onRequestClose={() => {}}
                animationType="slide"
                transparent={false}
                visible={this.state.opened} >
                <View style={[ styles.viewport_modal_image_picker ]}>

                    { /* View completa do componente */ }
                    <View style={[ styles.viewport_modal_image_picker_component ]}>

                        <View style={[ styles.image_picker_viewer_image_content ]}>
                            <View style={[ styles.image_picker_viewer_image ]}></View>
                        </View>

                        <View style={[ styles.image_picker_viewer_images_list_content ]}>
                            <ScrollView style={[ styles.image_picker_images_list_scrollview ]}>
                                <View style={[ styles.image_picker_images_list_view ]}>

                                    { this.__render_images() }

                                </View>
                            </ScrollView>
                        </View>

                    </View>
                    
                    { /* view de loading */ }
                    { this.__render_loading() }

                </View>
            </Modal>
        );

    }/* Fim da função render do componente */


};