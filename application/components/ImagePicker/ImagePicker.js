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
import ImageThumb from "./ImagePickerComponents/ImageThumb";
import ImagePickerHeader from "./ImagePickerComponents/ImagePickerHeader";
import ImagePickerPreview from "./ImagePickerComponents/ImagePickerPreview";

export default class ImagePicker extends React.Component{

    /** Função construtora do componente de imagePicker */
    constructor( props ){
        super( props );

        /* State inicial do componente */
        this.state = {
            opened: true, /* State de se o modal está aberto ou nao */
            loading_images: true,/* State de se o componente está carregando as imagens ou não */

            images_content_layout_width: 0,
            images: [], /* array com as imagens da camera */

            last_image: '.', /* ultima imagem selecionada */
            selected_images: [], /* Array com todas as imagens selecionadas */

            multiple: false,

        };

    }/* Fim da função constructor do  */

    /** Função executada sempre que o componente for montado */
    componentDidMount(){
        
        this.setState({ multiple: ( this.props.multiple !== "undefined" ? this.props.multiple : false ) });
        
        /* Configurações para retorno das imagens da galeria */
        const params = {
            first: 52,
            assetType: 'Photos',
        };

        /* Retorna as imagens encontradas na galeria */
        CameraRoll.getPhotos(params)
            .then(( response ) => {

                let photos = response.edges;
                this.setState({ loading_images: false, images: photos });

                this.__select_image( photos[0] );

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


    /** Função que registra o tamanho total do content que lista as imagens do celular */
    __setImagesContentWidth( layout_sizes ){
        /* Verifica se o valor novo é diferente do valor ja registrado  */
        if( this.state.images_content_layout_width !== layout_sizes.nativeEvent.layout.width ){
            this.setState({ images_content_layout_width: layout_sizes.nativeEvent.layout.width });
        }
    }/* fim da função __setImagesContentWidth */


    /** Função utilizada para renderizar as imagens encontradas na galeria */
    __render_images =(() => {

        const content_width = ( this.state.images_content_layout_width / 4 );
        const selected_images = this.state.selected_images;

        const select_function = this.__select_image;

        const render = this.state.images.map(function( image, index ){
            
            /* Verifica se a imagem está registrada como selecionada */
            let selected = selected_images.indexOf( image );
            selected = ( selected >= 0 );

            /* Retorna o render da View */
            return(
                <TouchableOpacity
                    key={index}
                    style={{ width: content_width, height: content_width }}
                    onPress={ () => { select_function( image ) } }
                    activeOpacity={ .6 }>

                    <ImageThumb
                        selected={ selected }
                        timeout={ (index * 50) }
                        image={image.node.image.uri}
                        width={content_width}
                        height={content_width} />

                </TouchableOpacity>
            );
        });

        return render;

    })/* fim da função __render_images */

    /**
     * Função utilizada para selecionar uma imagem do ImagePicker 
     * @type {Function}
     * @private
     */
    __select_image = (( image ) => {

        /* Verifica se a imagem clicada já está selecionada */
        let already_selected = this.state.selected_images.indexOf( image );
        already_selected = ( already_selected >= 0 );

        /* Verifica se a propriedade multiple é falsa ( ! ) */
        if( !this.state.multiple ){
            /* Verifica se a imagem clicada não está registrada como selecionada, se estiver, não faz nada */
            if( !already_selected ){
    
                this.setState({ selected_images: [ image ], last_image: image.node.image.uri });
    
            }/* Fim da verificação de se a imagem já está selecionada */
            
        }/* fim da verificação da propriedade multiple */
        
                
    });/* Fim do escopo da função utilizada para selecionar uma imagem */
    

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

                        <ImagePickerHeader />

                        <ImagePickerPreview image={this.state.last_image} />

                        <View style={[ styles.image_picker_viewer_images_list_content ]}>
                            <ScrollView style={[ styles.image_picker_images_list_scrollview ]}>
                                <View onLayout={( layout ) => { this.__setImagesContentWidth( layout ) }} style={[ styles.image_picker_images_list_view ]}>

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