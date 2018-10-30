import axios from "axios";
import {API_URL_HOUPA} from "../../configs/api/current";
import firebase from "firebase";

const ConexoesService = {

    setConectar(idSolicitado, restkey){

        let body = {
            empresa_id: idSolicitado
        };

        return axios.post(API_URL_HOUPA + 'conexoes/setConectar', body, {
            headers: {
                "x-api-key": restkey
            }
        });
    },

    deleteConexao(params, restkey) {

        console.log(params);

        var body = {
            empresa_id: params.idSolicitado,
            motivo: params.motivoExclusao,
            bloqueio: params.tempoBloqueio
        };

        return axios.post(API_URL_HOUPA + 'conexoes/deleteConexao', body, {
            headers: {
                "x-api-key": restkey
            }
        });
    },

    insertIntoFirebase(idSolicitado, idUserLogged, sendToFirebase, dataAceite, restkey) {

        if (dataAceite) {
            firebase.database().ref('conexoes').child(idSolicitado).child(idUserLogged).update({ data_aceitacao: dataAceite });
            firebase.database().ref('conexoes').child(idUserLogged).child(idSolicitado).update({ data_aceitacao: dataAceite });
        } else {
            firebase.database().ref('conexoes').child(idSolicitado).child(idUserLogged).update({
                data_solicitacao: sendToFirebase.data_solicitacao,
                solicitante: sendToFirebase.solicitante,
                status: sendToFirebase.status
            }).then((res) => {

                sendToFirebase.solicitante = 0;
                firebase.database().ref('conexoes').child(idUserLogged).child(idSolicitado).update({
                    data_solicitacao: sendToFirebase.data_solicitacao,
                    solicitante: sendToFirebase.solicitante,
                    status: sendToFirebase.status
                });
            }, (error) => {
                firebase.firestore().collection('conexoes').doc(idSolicitado).collection(idUserLogged).doc('info').delete();
                this.deleteConexao(idSolicitado, restkey);
            });
        }
    },

    insertIntoFirestore(idSolicitado, idUserLogged, sendToFirestore, restkey) {

        let dataAceite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        if (dataAceite) {
            firebase.firestore().collection('conexoes').doc(idSolicitado).collection(idUserLogged).doc('info').update({ data_aceitacao: dataAceite });
            firebase.firestore().collection('conexoes').doc(idUserLogged).collection(idSolicitado).doc('info').update({ data_aceitacao: dataAceite });

            this.insertIntoFirebase(idSolicitado, idUserLogged, sendToFirestore, dataAceite);
        } else {
            firebase.firestore().collection('conexoes').doc(idSolicitado).collection(idUserLogged).doc('info').set(sendToFirestore, { merge: false }).then((res) => {

                sendToFirestore.solicitante = 0;

                firebase.firestore().collection('conexoes').doc(idUserLogged).collection(idSolicitado).doc('info').set(sendToFirestore, { merge: false }).then(() => {
                    sendToFirestore.solicitante = 1;
                    this.insertIntoFirebase(idSolicitado, idUserLogged, sendToFirestore, restkey);
                }, (e) => {});
            }, (error) => {
                this.deleteConexao(idSolicitado, restkey);
            });
        }
    }
};

export default ConexoesService;