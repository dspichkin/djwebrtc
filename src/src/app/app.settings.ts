export class AppSettings {
    static base_url = 'https://' + document.location.hostname + ':8000';
    
    public static URL_STATUS = AppSettings.base_url + "/dialogs/api/status/";
    public static URL_DIALOGS = AppSettings.base_url + "/dialogs/api/dialogs/";
    public static URL_ACTIVEDIALOGS = AppSettings.base_url + "/dialogs/api/activedialogs/";
    public static URL_DIALOG_RUN = AppSettings.base_url + "/dialogs/api/run/";
    public static URL_DIALOG_RUNINTO = AppSettings.base_url + "/dialogs/api/runinto/";
    public static URL_DIALOG_ACTIVESTOP = AppSettings.base_url + "/dialogs/api/stop/";
    public static URL_DIALOG_STOP = AppSettings.base_url + "/dialogs/api/stop/";
    public static URL_WEBSOKET = "wss://" + document.location.hostname + ':8000';
    public static URL_WEBSOKET_PEER = document.location.hostname;


    public static CALLING_TIME_INTERVAL = 3000;

    public static MODE_LIST = 'mode_list';
    public static MODE_WAIT_PUPIL = 'mode_wait_pupil';
    public static MODE_CALLING = 'mode_calling';
    public static MODE_DIALOG_MASTER = 'mode_dialog_master';
    public static MODE_DIALOG_PUPIL = 'mode_dialog_pupil';

}