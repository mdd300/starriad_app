/**
 * Lista de endereços de apis disponíveis
 */
export const api_list = {
    development: {
        localhost: 'http://localhost/ws_houpa/ws',
        devserver: 'http://192.168.0.251/fashon/qrgo/',
        ec2: 'http://dev.ws.houpa.com.br/ws/'
    },
    testing: {
        ec2: 'http://dev.qrgo.com.br/qrgo/'
    },
    production: {
        ec2: 'https://www.qrgo.com.br/qrgo/'
    }
};