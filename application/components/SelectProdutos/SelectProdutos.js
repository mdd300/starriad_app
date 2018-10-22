import React from "react";
import { View, ScrollView, TouchableOpacity, Image, Text, Modal, Platform } from "react-native";
import styles from "./select-produtos-styles";
import ProductThumb from "./SelectProdutosComponents/ProductThumb";

/* Cria o escopo da classe de seleção de produtos */
export default class SelectProdutos extends React.Component{
    
    /* Função construtora do componente */
    constructor( props ){
        super( props );

        this.state = {

            selected_products: [],

            products: [
                {
                    product_cover: 'https://cdn.wccftech.com/wp-content/uploads/2018/04/WCCFgodofwar7.jpg',
                    product_price: 100,
                    product_name: 'GOD OF WAR - 2018',
                    product_variables: [{ variable_colors: [{ color: '#499ab5' },{ color: '#c53034' }] }, { variable_colors: [{ color: '#c59e73' }] }],
                },
                {
                    product_cover: 'https://pbs.twimg.com/media/DZTO1cxX4AAEKyA.jpg',
                    product_price: 150,
                    product_name: 'DEKU - MIDORYA - All MIGHT SIDEKICK',
                    product_variables: [{ variable_colors: [{ color: '#31847c' },{ color: '#000' }] }]
                },
                {
                    product_cover: 'https://static.zerochan.net/All.Might.full.2339607.jpg',
                    product_price: 999,
                    product_name: 'All MIGHT',
                    product_variables: [{ variable_colors: [{ color: '#dab159' },{ color: '#35fdfa' }] }, { variable_colors: [{ color: '#bf1d1b' }] }]
                },
                {
                    product_cover: 'https://jovemnerd.com.br/wp-content/uploads/2018/08/fairytail.jpg',
                    product_price: 50,
                    product_name: 'NATSU - FAIRY TAIL',
                    product_variables: [{ variable_colors: [{ color: '#fcec58' },{ color: '#89140a' }] }]
                }
            ]

        }

    }/* Fim da função construtorada do componente */

    /* Função executada quando o componente for montado */
    componenteDidMount(){}


    __select_product = (( product ) => {
       
        /* Primeiro, retorna o index do produto, no array de registro de produtos selecionados */
        let product_index = this.state.selected_products.indexOf( product );
        let selected_products = this.state.selected_products;

        /* Verifica se o produto NÃO existe no array de selecionados */
        if( product_index < 0 ){
            /* Se de fato o produto não existir, registra-o */
            selected_products.push( product );
        }else{
            /* Caso o produto JÁ exista no array de selecionados, remove-o */
            selected_products.splice( product_index, 1 );
        }

        this.setState({ selected_products: selected_products });
        
    });


    __confirm_selection = (()=> {
        this.props.onSelect( this.state.selected_products );
    });

    __cancel_selection = (()=> {
        this.props.onCancel();
    });


    /* Função que renderiza o componente do modal */
    render(){
        const header_padding = (Platform.OS === "ios" ?24 : 0);

        return(
            <Modal
                onRequestClose={() => {}}
                animationType="slide"
                transparent={false}
                visible={this.props.show} >
                <View style={[ styles.modal_select_products_content, { paddingTop: header_padding } ]}>


                    { /* Header os products select */ }
                    <View style={[ styles.modal_select_products_header ]}>

                        <View style={[ styles.select_products_header_back_content ]}>
                            <View style={[ styles.select_products_header_back_icon ]}>
                                <TouchableOpacity
                                    onPress={() => { this.__cancel_selection(); }}
                                    style={[ styles.select_products_header_back_touchable ]}>
                                    <Image style={[ styles.select_products_header_back_ico ]} source={require("../../assets/imgs/png/icons/caret-left-white.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[ styles.select_products_header_label ]}>
                            <Text style={[ styles.select_products_header_label_txt ]}> Escolha seus produtos </Text>
                        </View>

                        <View style={[ styles.select_products_header_confirm_content ]}>
                            <TouchableOpacity onPress={()=>{ this.__confirm_selection() }}>
                                <Text style={[ styles.select_products_header_confirm_label ]}> Confirmar </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    { /* Fim do header do modal */ }

                    { /* ScrollView do content do modal */ }
                    <ScrollView style={[ styles.modal_select_products_scrollview ]}>
                        <View style={[ styles.modal_select_products_scrollview_content ]}>

                            { this.__render_products() }

                        </View>
                    </ScrollView>
                    { /* Fim do ScrollView do content do modal */ }

                </View>
            </Modal>
        );
    }/* Fim da função render do componente */


    __render_products = (() => {

        const render = this.state.products.map( (( product, index) => {

            let selected = this.state.selected_products.indexOf( product );
            selected = ( selected < 0 ? false : true );

            return(
                <TouchableOpacity 
                    activeOpacity={ .7 } 
                    onPress={()=>{ this.__select_product( product ); }}
                    style={[ styles.product_thumb_content_touchable ]} key={ index }>

                    <ProductThumb
                        selected={ selected }
                        product={ product } />

                </TouchableOpacity>
            );
        }));

        return render;
    });


}/* Fim do escopo da classe de seleção dos produtos */