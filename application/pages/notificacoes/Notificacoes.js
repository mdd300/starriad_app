import React from "react";
import {
    ActivityIndicator,
    Alert,
    RefreshControl,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    AsyncStorage
} from "react-native";
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import styles from "../notificacoes/Notificacoes-styles";
import SystemTabs from "../../components/tabs/SystemTabs";
import ListNotificacoes from './notificacoesComponents/list-notificacoes/list-notificacoes';
import axios from "axios";
import {API_URL_HOUPA} from "../../configs/api/current";
import NotificacoesService from "../../services/notificacoes/notificacoes-service";


export default class Notificacoes extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            notificacoes: [],
            atividades: [],
            loading: false,
            error: false,
            refreshing: false,
        };
    }

    componentDidMount(){
        this.setState({ loading: true });
        setTimeout(() => {

            // this.loadActivities();

            this.setState({
                // notificacoes: [{
                //     key: '1',
                //
                //     novas: [
                //      {
                //         id: 1,
                //         tipo: 1,
                //         status: 1,
                //         nameProfile: 'Miia',
                //         imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //         descricao: 'enviou uma solicitação de conexão',
                //     },
                //     {
                //         id: 2,
                //         tipo: 2,
                //         status: 0,
                //         nameProfile: 'Miia',
                //         imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //         descricao: 'Confira nossa nova coleção',
                //     },
                //     {
                //         id: 3,
                //         tipo: 3,
                //         status: 1,
                //         nameProfile: 'Miia',
                //         imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //         descricao: 'Lançamento Saia Linda',
                //     }],
                //
                //      passadas: [
                //       {
                //         id: 1,
                //         tipo: 3,
                //         status: 0,
                //         nameProfile: 'Miia',
                //         imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //         descricao: 'Lançamento Vestido Lindo',
                //         conexaoStatus: 0,
                //        },
                //        {
                //         id: 2,
                //         tipo: 4,
                //         status: 0,
                //         nameProfile: 'Miia',
                //         imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //         descricao: 'Seu pedido está separado',
                //        },{
                //              id: 3,
                //              tipo: 3,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Lançamento Vestido Lindo',
                //              conexaoStatus: 0,
                //          },
                //          {
                //              id: 4,
                //              tipo: 4,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Seu pedido está separado',
                //          },{
                //              id: 5,
                //              tipo: 3,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Lançamento Vestido Lindo',
                //              conexaoStatus: 0,
                //          },
                //          {
                //              id: 6,
                //              tipo: 4,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Seu pedido está separado',
                //          },{
                //              id: 7,
                //              tipo: 3,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Lançamento Vestido Lindo',
                //              conexaoStatus: 0,
                //          },
                //          {
                //              id: 8,
                //              tipo: 4,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Seu pedido está separado',
                //          },{
                //              id: 9,
                //              tipo: 3,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Lançamento Vestido Lindo',
                //              conexaoStatus: 0,
                //          },
                //          {
                //              id: 10,
                //              tipo: 4,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Seu pedido está separado',
                //          },{
                //              id: 11,
                //              tipo: 3,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Lançamento Vestido Lindo',
                //              conexaoStatus: 0,
                //          },
                //          {
                //              id: 12,
                //              tipo: 4,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Seu pedido está separado',
                //          },{
                //              id: 13,
                //              tipo: 3,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Lançamento Vestido Lindo',
                //              conexaoStatus: 0,
                //          },
                //          {
                //              id: 14,
                //              tipo: 4,
                //              status: 0,
                //              nameProfile: 'Miia',
                //              imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                //              descricao: 'Seu pedido está separado',
                //          },]
                //     },
                //
                // ],
                loading: false,
            });

        }, 500);
    }

    loadActivities = async () =>  {

        const restkey = await AsyncStorage.getItem('restkey');

        let params = {dados: 'OK'};

        NotificacoesService.getAtividades(params, restkey).then((res) => {

            console.log(res);

            // if (!res.data.atividades.length == 0) {
            //     this.state.notificacoes = res.data.atividades;
            //     this.state.badgeNovas = res.data.badge;
            //     this.setState({
            //         notificacoes: this.state.notificacoes,
            //         badgeNovas: this.state.badgeNovas
            //     });
            //
            //     console.log(this.state.notificacoes);
            // }else{
            //     console.log('AQUI');
            // }
        }, (error) => {

            Alert.alert(
                'Atividades não encontradas',
                'Ops! Parece que ocorreu um erro. Verifique sua conexão.',
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );
        });

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

                <TouchableOpacity onPress={() => this.loadActivities()}>
                    <Text>
                        AQUI
                    </Text>
                </TouchableOpacity>

                {/*<ListNotificacoes notificacoes={this.state.notificacoes} />*/}

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