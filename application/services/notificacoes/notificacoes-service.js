import axios from "axios";
import {API_URL_HOUPA} from "../../configs/api/current";
import firebase from "firebase";

const NotificacoesService = {

    getAtividades(data, restkey){

        return axios.post(API_URL_HOUPA + 'notificacoes/get_atividades', data, {
            headers: {
                "x-api-key": restkey
            }
        });
    },

    lerAtividadesSql(data, restkey) {
        return axios.post(API_URL_HOUPA + 'Notificacoes/ler_atividades_sql', data, {
            headers: {
                "x-api-key": restkey
            }
        });
    },

    lerAtividadesFirestore(data) {

        console.log('ESTAMOS AQUI: ', data);

        return firebase.firestore().collection('empresas').doc(data.toString()).set({ unreaded_notify: 0 }, { merge: true });
    },

    getDadosUser(data) {
        return firebase.firestore().collection('users').doc(data.uid.toString()).get();
    },

    getAtividadesFirestore(user, user_logged) {

        user_logged = JSON.parse(user_logged);
        let idUserLogged = user_logged.empresa_id_fk;

        return firebase.firestore().collection('empresas').doc(idUserLogged.toString());
    }
};

export default NotificacoesService;