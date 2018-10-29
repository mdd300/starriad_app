import axios from "axios";
import {API_URL_HOUPA} from "../../configs/api/current";

const NotificacoesService = {

    getAtividades(data, restkey){

       // return fetch(API_URL_HOUPA + 'notificacoes/get_atividades', data, {
       //      method: 'POST',
       //      headers: {
       //          'X-API-KEY': restkey,
       //      },
       //  });

        return axios.post(API_URL_HOUPA + 'notificacoes/get_atividades', data, {
            headers: {
                'X-API-KEY': restkey,
            }
        });
    },

};

export default NotificacoesService;