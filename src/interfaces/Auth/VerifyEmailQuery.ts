// Generated by https://quicktype.io

export interface VerifyEmailQuery {
    data: Data;
}

interface Data {
    msg: Msg;
}

interface Msg {
    idCliente: number;
    status:    string;
}
