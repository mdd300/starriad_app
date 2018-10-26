import axios from "axios";
import {API_URL_HOUPA} from "../../configs/api/current";


const LoginService = {

    reativarConta(data){
        return axios.post(API_URL_HOUPA + 'perfil/reativarConta', data);
    },

    signin(data){
        return axios.post(API_URL_HOUPA + 'login/signin', data);
    },

    cadastrar(data) {
        let body = {
            user_data: data.user,
            empresa_data: data.empresa,
            endereco_data: data.endereco,
            favoritos: data.favoritos
        };
        return axios.post(API_URL_HOUPA + 'cadastro/setCadastro', body);
    },

    buscarCnpj(data) {
        let body = {
            cnpj: data
        };
        return axios.post(API_URL_HOUPA + 'cadastro/getCNPJ', body);
    },

    buscarCaptcha() {
        return axios.get(API_URL_HOUPA + 'cadastro/getCNPJSecundario');
    },

    enviarCaptcha(data) {
        let body = {
            cnpj: data.cnpj,
            captcha: data.captcha,
            cookie: data.cookie
        };
        return axios.post(API_URL_HOUPA + 'cadastro/sendCaptcha', body);
    },

    checkUserRecoverService(data) {
        return axios.post(API_URL_HOUPA + 'login/check_user_recover', data);
    },

    startRecoverService(data) {
        return axios.post(API_URL_HOUPA + 'login/start_recover', data);
    },

    checkCodeService(data) {
        return axios.post(API_URL_HOUPA + 'login/check_code_recover', data);
    },

    recoverPasswordService(data) {
        return axios.post(API_URL_HOUPA + 'login/recover_password', data);
    },

    signout(){
        return axios.post(API_URL_HOUPA + 'routes/signout');
    }

};

export default LoginService;