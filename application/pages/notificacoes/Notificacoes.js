import React from "react";
import {ActivityIndicator, RefreshControl, ScrollView, View} from "react-native";
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import styles from "../notificacoes/Notificacoes-styles";
import SystemTabs from "../../components/tabs/SystemTabs";
import ListNotificacoes from './notificacoesComponents/list-notificacoes/list-notificacoes';

export default class Notificacoes extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            notificacoes: [],
            loading: false,
            error: false,
            refreshing: false,
        };
    }

    componentDidMount(){
        this.setState({ loading: true });
        setTimeout(() => {

            this.setState({
                notificacoes: [{
                    key: '1',

                    novas: [
                     {
                        id: 1,
                        tipo: 1,
                        status: 1,
                        nameProfile: 'Miia',
                        imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                        descricao: 'enviou uma solicitação de conexão',
                    },
                    {
                        id: 2,
                        tipo: 2,
                        status: 0,
                        nameProfile: 'Miia',
                        imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                        descricao: 'Confira nossa nova coleção',
                    },
                    {
                        id: 3,
                        tipo: 3,
                        status: 1,
                        nameProfile: 'Miia',
                        imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                        descricao: 'Lançamento Saia Linda',
                    }],

                     passadas: [
                      {
                        id: 1,
                        tipo: 3,
                        status: 0,
                        nameProfile: 'Miia',
                        imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                        descricao: 'Lançamento Vestido Lindo',
                        conexaoStatus: 0,
                       },
                       {
                        id: 2,
                        tipo: 4,
                        status: 0,
                        nameProfile: 'Miia',
                        imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                        descricao: 'Seu pedido está separado',
                       },{
                             id: 3,
                             tipo: 3,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Lançamento Vestido Lindo',
                             conexaoStatus: 0,
                         },
                         {
                             id: 4,
                             tipo: 4,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Seu pedido está separado',
                         },{
                             id: 5,
                             tipo: 3,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Lançamento Vestido Lindo',
                             conexaoStatus: 0,
                         },
                         {
                             id: 6,
                             tipo: 4,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Seu pedido está separado',
                         },{
                             id: 7,
                             tipo: 3,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Lançamento Vestido Lindo',
                             conexaoStatus: 0,
                         },
                         {
                             id: 8,
                             tipo: 4,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Seu pedido está separado',
                         },{
                             id: 9,
                             tipo: 3,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Lançamento Vestido Lindo',
                             conexaoStatus: 0,
                         },
                         {
                             id: 10,
                             tipo: 4,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Seu pedido está separado',
                         },{
                             id: 11,
                             tipo: 3,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Lançamento Vestido Lindo',
                             conexaoStatus: 0,
                         },
                         {
                             id: 12,
                             tipo: 4,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Seu pedido está separado',
                         },{
                             id: 13,
                             tipo: 3,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Lançamento Vestido Lindo',
                             conexaoStatus: 0,
                         },
                         {
                             id: 14,
                             tipo: 4,
                             status: 0,
                             nameProfile: 'Miia',
                             imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                             descricao: 'Seu pedido está separado',
                         },]
                    },

                ],
                loading: false,
            });

        }, 500);
    }

    // Faz o refresh da pagina
    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.componentDidMount();
            this.setState({refreshing: false});
        }, 500);
    };

    renderPage(){
        if(this.state.loading){
            return <ActivityIndicator style={styles.loadingPager} size="large" color="#7417fb" />;
        }
        if(this.state.error){
            return <Text style={style.error}>Ops... Algo deu errado =(</Text>
        }

        return (

            // Faz o refresh da pagina
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        colors={['#7417fb']}
                    />
                }>

                <ListNotificacoes notificacoes={this.state.notificacoes} />

            </ScrollView>
        );
    }

    render() {
        return (

            <View style={styles.containerNotificacoes}>
                <SystemHeader/>

                { this.renderPage() }

                <SystemTabs navigation={this.props.navigation} selectedTab='notifications'/>
            </View>
        );
    }
}