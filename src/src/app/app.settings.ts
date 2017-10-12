export class AppSettings {
    static host = document.location.hostname;
    static protocol = document.location.protocol;
    
    public static base_url;// = AppSettings.protocol + '//' + AppSettings.host + ':8000';
    
    public static URL_STATUS;
    public static URL_DIALOGS;
    public static URL_ACTIVEDIALOGS;
    public static URL_MYACTIVEDIALOGS;
    public static URL_DIALOG_RUN;
    public static URL_DIALOG_RUNINTO;
    public static URL_DIALOG_ACTIVESTOP;
    public static URL_DIALOG_STOP;
    public static URL_CHANGE_ACCEPT_CALL;
    public static URL_MESSAGE;
    public static URL_CHECK_USER;
    public static URL_USER_SETTING;
    public static URL_WEBSOKET;
    public static URL_WEBSOKET_PEER;


    public static CALLING_TIME_INTERVAL = 5000;
    public static HEARTBEAT_DIALOG_TIMEOUT = 10000;

    public static MODE_LIST = 'mode_list';
    public static MODE_WAIT_PUPIL = 'mode_wait_pupil';
    public static MODE_CALLING = 'mode_calling';
    public static MODE_DIALOG_MASTER = 'mode_dialog_master';
    public static MODE_DIALOG_PUPIL = 'mode_dialog_pupil';

    static initialized() {



        if (AppSettings.host.indexOf('localhost') > -1 || AppSettings.host.indexOf('127.0.0.1') > -1) {
            AppSettings.base_url = AppSettings.protocol + '//' + AppSettings.host + ':8000';
            if (AppSettings.protocol.indexOf('https') > -1) {
                AppSettings.URL_WEBSOKET = "wss://" + document.location.hostname + ':8000/peerjs';
            } else {
                AppSettings.URL_WEBSOKET = "wss://" + document.location.hostname + ':8000/peerjs';
            }
            
        } else {
            AppSettings.base_url = AppSettings.protocol + '//' + AppSettings.host;
            if (AppSettings.protocol.indexOf('https') > -1) {
                AppSettings.URL_WEBSOKET = "wss://" + document.location.hostname + '/peerjs';
            } else {
                AppSettings.URL_WEBSOKET = "wss://" + document.location.hostname + '/peerjs';
            }
        }


        AppSettings.URL_STATUS = AppSettings.base_url + "/dialogs/api/status/";
        AppSettings.URL_DIALOGS = AppSettings.base_url + "/dialogs/api/dialogs/";
        AppSettings.URL_ACTIVEDIALOGS = AppSettings.base_url + "/dialogs/api/activedialogs/";
        AppSettings.URL_MYACTIVEDIALOGS = AppSettings.base_url + "/dialogs/api/myactivedialogs/";
        AppSettings.URL_DIALOG_RUN = AppSettings.base_url + "/dialogs/api/run/";
        AppSettings.URL_DIALOG_RUNINTO = AppSettings.base_url + "/dialogs/api/runinto/";
        AppSettings.URL_DIALOG_ACTIVESTOP = AppSettings.base_url + "/dialogs/api/stop/";
        AppSettings.URL_DIALOG_STOP = AppSettings.base_url + "/dialogs/api/stop/";
        AppSettings.URL_CHANGE_ACCEPT_CALL = AppSettings.base_url + "/accounts/accept_call/";
        AppSettings.URL_MESSAGE = AppSettings.base_url + "/accounts/message/";
        AppSettings.URL_CHECK_USER  = AppSettings.base_url + "/accounts/check_user/";
        AppSettings.URL_USER_SETTING = AppSettings.base_url + "/accounts/user/";
        
        AppSettings.URL_WEBSOKET_PEER = document.location.hostname;

    }


}