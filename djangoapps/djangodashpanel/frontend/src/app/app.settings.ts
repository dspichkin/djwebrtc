export class AppSettings {

	public static baseUrl = '/dash/api/';
	public static userUrl = AppSettings.baseUrl + 'user/';

	public static perfCpuUrl = AppSettings.baseUrl + 'perf/cpu/';
	public static perfMemoryUrl = AppSettings.baseUrl + 'perf/memory/';
	public static perfDiskUrl = AppSettings.baseUrl + 'perf/disk/';
	public static perfNetworkUrl = AppSettings.baseUrl + 'perf/network/';

	public static bootTimeUrl = AppSettings.baseUrl + 'perf/boottime/';
	public static usersUrl = AppSettings.baseUrl + 'perf/users/';
	public static dashUrl = AppSettings.baseUrl + 'perf/dash/';

	public static processesUrl = AppSettings.baseUrl + 'processes/';
	public static processesAvarageNumberUrl =  AppSettings.baseUrl + 'processes/hours/';
	public static processesLastUrl =  AppSettings.baseUrl + 'processes/last/';

	public static secCorrectLoginUrl =  AppSettings.baseUrl + 'security/correctlogins/';
	public static secIncorrectLoginUrl =  AppSettings.baseUrl + 'security/incorrectlogins/';

	public static backupMakeUrl =  AppSettings.baseUrl + 'backups/make/';
	public static backupMakeMediaUrl =  AppSettings.baseUrl + 'backups/make/media/';
	public static backupsUrl =  AppSettings.baseUrl + 'backups/';
	public static backupsEnableUrl =  AppSettings.baseUrl + 'backups/stoprun/';
	public static backupsSetTimeUrl =  AppSettings.baseUrl + 'backups/time/';
	public static backupsPathDirUrl =  AppSettings.baseUrl + 'backups/dirs/';
	public static backupGetMediaUrl = AppSettings.baseUrl + 'backups/file/';

	public static urlStatUrl = AppSettings.baseUrl + 'urlstat/';

	public static urlNginxLoggersUrl = AppSettings.baseUrl + 'nginx/loggers/';
	public static urlNginxAccessUrl = AppSettings.baseUrl + 'nginx/access/';
	public static urlNginxAccessIpAddrUrl = AppSettings.baseUrl + 'nginx/access/ipaddr/';
	public static urlNginxAccessHttpRefUrl = AppSettings.baseUrl + 'nginx/access/href/';
	public static urlNginxAccessAgentUrl = AppSettings.baseUrl + 'nginx/access/agent/';

	public static urlNginxNaxsiConfigUrl = AppSettings.baseUrl + 'nginx/naxsi/config/';
	public static urlNginxNaxsiConfigsUrl = AppSettings.baseUrl + 'nginx/naxsi/configs/';
	public static urlNginxNaxsiMessageUrl = AppSettings.baseUrl + 'nginx/naxsi/messages/';
	public static urlNginxNaxsiIdsUrl = AppSettings.baseUrl + 'nginx/naxsi/ids/';


}
