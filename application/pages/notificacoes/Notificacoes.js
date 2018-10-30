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
import Template from "../../components/Template/Template";


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

            this.loadActivities();

        }, 1500);
    }

    loadActivities = async () =>  {

        const restkey = await AsyncStorage.getItem('restkey');
        let params = {dados: 'OK'};

        NotificacoesService.getAtividades(params, restkey).then((res) => {

            if (!res.data.atividades.length == 0) {
                this.state.notificacoes = res.data.atividades;
                this.state.badgeNovas = res.data.badge;
                this.setState({
                    notificacoes: this.state.notificacoes,
                    badgeNovas: this.state.badgeNovas,
                    loading: false,
                });
            }else{
                console.log('AQUI');
            }
        }, (error) => {

            this.setState({
                loading: false,
            });

            Alert.alert(
                'Atividades não encontradas',
                'Ops! Parece que ocorreu um erro. Verifique sua conexão. ' + error,
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );
        });
    };

    // Faz o refresh da pagina
    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.loadActivities();
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

    render_page() {
        return (

            <View style={styles.containerNotificacoes}>
                { this.renderPage() }
            </View>
        );
    }

    render(){
        return(
            <Template
                navigation={ this.props.navigation }
                render={ this.render_page() }/>
        );
    }

}