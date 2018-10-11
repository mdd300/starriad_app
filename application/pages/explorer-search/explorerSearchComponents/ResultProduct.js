import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "../explorer-search-styles";
import ResultHeaderBrand from "./ResultHeaderBrand";

export default class ResultProduct extends React.Component{
    
    /* Função construtora do componente */
    constructor( props ){
        super( props );
        
        this.state = {};

    }/* Fim da função construtora do componente */


    /** Função para renderizar as thumbs dos produtos na viewport */
    __render_products(){
        
        const products = [
            { image: 'http://www.recipesmasks.org/images/category_27/Ropa%20De%20Moda%20%20Banana%20Republic%20LOREN%20FLORAL%20%20Vestido%20largo%20negro%20BJ721C04CQ11%20AWTHPKS.jpg', },
            { image: 'https://i.pinimg.com/originals/0e/fa/53/0efa535374f0ced37ca761fcbbc4e2fc.jpg', },
            { image: 'https://assets.vogue.com/photos/55f5da4ccf926603465851f2/master/pass/banana-republic-rtw-spring-2016-031.jpg', },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtyuY_ytGVWJVcXYRWgiFd5Do_RcmXJbeFt2Flq8HvTWtqKe-', },
        ];
        
        /* Mapeia todos os produtos para serem renderizados */
        const render = products.map(function( prod, key ){

            const margin_class = ( ( key === ( products.length - 1 ) ) ? {} : styles.margin_thumb );

            return(
                <View key={key} style={[ styles.explorer_search_result_product_thumb_content, margin_class ]}>
                    <Image style={[ styles.explorer_search_result_product_thumb_image ]} resizeMode="cover" source={{ uri: prod.image }}/>
                </View>
            );

        }); /*  Fim do map dos produtos */

        /* Retorna os elementos para serem renderizados */
        return render;
        
    }/* Fim da função utilizada para renderizar as thumbs dos produtos da viewport */


    /* Função responsável por renderizar o componente */
    render(){
        return(
            <View style={[ styles.explorer_search_results_product ]}>
                <View style={[ styles.explorer_search_results_products_header ]}>
                    <ResultHeaderBrand border={false}/>
                </View>
                <View style={[ styles.explorer_search_results_products_list_content ]}>
                    <View style={[ styles.explorer_search_results_products_list_wrapper ]}>
                        <ScrollView style={[ styles.explorer_search_results_products_viewport ]} horizontal={true} showsHorizontalScrollIndicator={false}>
                            { this.__render_products() }
                        </ScrollView>
                    </View>

                </View>

            </View>
        );
    }/* Fim da função render do componente */
    
}