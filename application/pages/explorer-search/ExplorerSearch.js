import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "./explorer-search-styles";

import SystemHeader from "../../components/SystemHeader/SystemHeader";
import SystemTabs from "../../components/tabs/SystemTabs";
import ResultHeaderBrand from "./explorerSearchComponents/ResultHeaderBrand";
import ResultProduct from "./explorerSearchComponents/ResultProduct";
import PostSimple from "../feed/feedComponents/PostSimple";

export default class ExplorerSearch extends React.Component{

    /** Função construtora do componente */
    constructor( props ){
        super( props );
        
        this.state = {};
        
    }/* Fim da função construtora do componente */



    /** Função utilizada para renderizar o header de search da pagina */
    __render_searcher(){
        return(
            <View style={[ styles.explorer_search_searcher ]}>
                <View style={[ styles.explorer_search_searcher_wrapper ]}>

                    <View style={[ styles.explorer_search_searcher_elements ]}>
                        <View style={[ styles.explorer_search_input_content ]}>
                            <TextInput style={[ styles.explorer_search_input ]} underlineColorAndroid="transparent" placeholder="Busque algo..." />
                        </View>
                        <View style={[ styles.explorer_search_action_content ]}>
                            <TouchableOpacity style={[ styles.explorer_search_action_touchable ]} activeOpacity={0.6}>
                                <Image style={[ styles.explorer_search_action_icon ]} source={ require("../../assets/imgs/png/icons/search.png") }/>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        );
    }/* Fim da função __render_searcher  */


    /** Função utilizada para renderizar o menu de filtros da pagina */
    __render_filter(){
        return(

            <View style={[ styles.explorer_search_filter_content ]}>
                <View style={[ styles.explorer_search_filter ]}>

                    <View style={[ styles.explorer_search_filter_item ]}>
                        <TouchableOpacity>
                            <Text style={[ styles.explorer_search_filter_text, styles.explorer_search_filter_text_actived ]}> TODOS </Text>
                        </TouchableOpacity>
                        <View style={[ styles.explorer_search_actived_filter_bar ]}/>
                    </View>

                    <View style={[ styles.explorer_search_filter_item ]}>
                        <TouchableOpacity>
                            <Text style={[ styles.explorer_search_filter_text ]}> MARCAS </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.explorer_search_filter_item ]}>
                        <TouchableOpacity>
                            <Text style={[ styles.explorer_search_filter_text ]}> PRODUTOS </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.explorer_search_filter_item ]}>
                        <TouchableOpacity>
                            <Text style={[ styles.explorer_search_filter_text ]}> PUBLICAÇÕES </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        );
    }/* Fim da função __render_filter */


    /** Função utilizda para renderizar os resultados de busca de LOJAS  */
    __render_results_brands(){

        /* Variável de valores e objetos a serem renderizados */
        let results = [{},{},{}];

        /* Map dos elementos que devem ser renderizados  */
        const render_results = results.map(function( element, key ){
            return(
                <ResultHeaderBrand key={key} />
            );
        });/* Fim da função Map para renderizar os resultados  */

        /* Retorna a renderização */
        return render_results;

    }/* Fim da função __render_results_stores */

    /** Função utilizada para renderizar os resultados de busca de Produtos */
    __render_results_products(){

        let results = [{}, {}, {}];
        
        /* Mapeia os elementos do resultado */
        const render_results = results.map( function( element, key ){
            return(
                <ResultProduct key={key} />
            );
        });/* Fim do Map dos resultados */
        
        return render_results;

    }/* Fim da função de render dos resultados de busca de produtos */

    /** Função utilizada para renderizar as publicações */
    __render_results_publish(){

        let results = [{},{}];

        const render_results = results.map( function( element, key ){
            return( <PostSimple key={key} /> );
        });/* Fim do Map dos resultados */

        return render_results;

    }/* __render_results_publish */
    
    
    /* Função utilizada para renderizar o componente */
    render(){
        
        /* Retorna os elementos que devem ser renderizados */
        return(
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <SystemHeader />
                <ScrollView style={[ styles.scrollview_content ]}>

                    <View style={[ styles.explorer_search_content ]}>
                        
                        { this.__render_searcher() /* renderiza o header (input de busca) */}
                        { this.__render_filter() /* renderiza o menu de filtros de busca */ }


                        { /* RENDER DE RESULTADOS DE MARCAS */ }
                        <View style={[ styles.explorer_search_results_content ]}>
                            <View style={[ styles.explorer_search_result_content_title ]}>
                                <Text style={[ styles.explorer_search_result_content_title_label ]}> MARCAS </Text>
                            </View>
                            <View style={[ styles.explorer_search_results_content_list ]}>
                                { this.__render_results_brands() /* Renderiza os resultados das buscas de lojas */ }
                            </View>
                        </View>

                        { /* RENDER DE RESULTADOS DE PRODUTOS */ }
                        <View style={[ styles.explorer_search_results_content, styles.content_margin ]}>
                            <View style={[ styles.explorer_search_result_content_title ]}>
                                <Text style={[ styles.explorer_search_result_content_title_label ]}> PRODUTOS </Text>
                            </View>
                            <View style={[ styles.explorer_search_results_content_list ]}>
                                { this.__render_results_products() /* Renderiza os resultados das buscas de lojas */ }
                            </View>
                        </View>

                        { /* RENDER DE RESULTADOS DE PUBLICAÇÕES */ }
                        <View style={[ styles.explorer_search_results_content, styles.content_margin ]}>
                            <View style={[ styles.explorer_search_result_content_title ]}>
                                <Text style={[ styles.explorer_search_result_content_title_label, styles.label_margin ]}> PUBLICAÇÕES </Text>
                            </View>
                            <View style={[ styles.explorer_search_results_content_list ]}>
                                { this.__render_results_publish() /* Renderiza os resultados das publicações */ }
                            </View>
                        </View>

                    </View>

                </ScrollView>
                <SystemTabs navigation={ this.props.navigation } selectedTab='explorer' />
            </View>
        );
        
    }/* Fim da função de render do componente */

}