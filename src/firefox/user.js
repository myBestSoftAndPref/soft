user_pref("layout.word_select.eat_space_to_next_word", false); //Отключить выделение пробела за словом по двойному клику на слове
user_pref("pdfjs.disabled", true); //Отключение медленный просмотра pdf в браузере
user_pref("ui.scrollToClick", 1); //Отвечает за переход к позиции на странице при клике по scroll бару (полосе прокрутки) левой кнопкой мыши. Ставим моментальный переход
user_pref("dom.disable_beforeunload", true); //Отключить предупреждение сайтом о закрытии вкладки с важной информацией. Сообщение "Вы действительно хотите уйти с этого сайта?"
user_pref("intl.locale.matchOS", false); //Использовать локаль из general.useragent.locale, а не установленную в ОС
user_pref("ui.submenuDelay", 0); //Этот параметр отвечает за задержку перед открытием подменю. Убираем задержку
user_pref("browser.link.open_newwindow.restriction", 0); //Открывать попапы во вкладках вместо отдельных окон
user_pref("browser.tabs.closeWindowWithLastTab", false); //Не закрывать Firefox при закрытии последней вкладки
user_pref("browser.tabs.animate", false); // Отключает притормаживающую на окнах с многими вкладками анимацию открытия и закрытия табов.
user_pref("dom.webnotifications.enabled", false); //отключаем надоедливые окошки с предложением включить уведомления
user_pref("dom.webnotifications.serviceworker.enabled", false); //без этого не работает
user_pref("browser.xul.error_pages.expert_bad_cert", true); // Более информативная страница показа ошибок в сертификатах сайтов.
user_pref("browser.fixup.alternate.enabled", false); //отключаем автоподстановку TLD и www, иногда мешает вводу

user_pref("extensions.stylish.updatesEnabled", 0); //Отключить АВТО обновления стилей дополнения Stylish

/* Отключаем несколько совсем уж наглых для приватности опций */
user_pref("dom.battery.enabled", false); //сайт больше не видит уровень заряда батареи
user_pref("device.sensors.enabled", false); //сайт больше не видит сенсоры вашего устройства
user_pref("dom.netinfo.enabled", false); //сайт больше не сможет легко получить инфу о вашем соединении с интернетом
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false); //отключаем отправку хэш суммы каждого загружаемого файла в google
user_pref("network.prefetch-next", false); // Отключает предзагрузку ссылок, на которые по мнению браузера вы собираетесь кликнуть.
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false); // Отключает Predictor (бывший Seer)
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("extensions.getAddons.cache.enabled", false); // Отключает посылку статистики при обновлении аддонов.
user_pref("security.ssl.errorReporting.automatic", false); // Отключает автоматическую отправку отчетов в Mozilla об ошибках в сертификатах сайтов.
user_pref("browser.selfsupport.url", ""); // Отключает предложения оценить работу Firefox и отправить пожертвования Mozilla. heartbeat
user_pref("lightweightThemes.recommendedThemes", ""); // Отключает список рекомендуемых тем в Customize -> Themes.

// Запрещает попапам отключать элементы окон браузера.
user_pref("dom.popup_maximum", 5);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.allow_scripts_to_close_windows", false);
// http://kb.mozillazine.org/JavaScript#JavaScript_settings_in_Firefox_23_and_above
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_status_change", true);
// http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.scrollbars", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);

/* Отключаем официальную, теоретически безобидную, телеметрию */
user_pref("dom.enable_performance", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.firstRun", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.unified", false);

/* Ломает Firefox Hello и некоторые сайты. На ваш выбор. (раскоментируйте строки) */
//user_pref("media.peerconnection.enabled", false); //сайт больше не сможет легко делать p2p сеть (обмена данными, как torrent) и ваш трафик не сможет быстро утечь
//user_pref("media.block-play-until-visible", true); // Запрещает проигрывание HTML5-медиа в фоновой вкладке до первого переключения на нее. Может сэкономить трафик

/* Пробуем немного ускорить Firefox: */
user_pref("network.http.pipelining", true); // Использовать HTTP/1.1 для передачи нескольких файлов, не реконнектясь после каждого.
user_pref("network.http.pipelining.aggressive", true);
user_pref("network.http.pipelining.ssl", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.max-optimistic-requests", 8);
user_pref("network.http.max-connections", 512); //(если по умолчанию меньше) если увеличить количество соединений скорость загрузки обычно увеличивается (особенно у плохих провайдеров)


/* Пробуем ускорить отрисовку, может поломать Firefox */
//стандартное включение ускорения https://wiki.mozilla.org/Blocklisting/Blocked_Graphics_Drivers

/* официальные */
user_pref("webgl.force-enabled", true);
user_pref("webgl.msaa-force", true);
user_pref("layers.acceleration.force-enabled", true);
user_pref("gfx.direct2d.force-enabled", true); //только для Windows

/* дальше идут найденные гуглом */
user_pref("gfx.font_rendering.directwrite.force-enabled", true); //только для Windows, не рекомендуется, на шрифтах могут появиться артефакты

//должны принудительно включать аппаратное ускорение видео, но не работает (см. ниже)
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.hardware-video-decoding.failed", true);

//По умолчанию Firefox рисует интерфейс не через OpenGL, а через Angle. Принудительно включает DirectX 11 для Angle. Я эффекта не заметил.
user_pref("webgl.angle.force-d3d11", true); //только для Windows

//Удаляют черный список видео карт и драйверов. После этого принудительное включение ускорения работает.
user_pref("media.wmf.skip-blacklist", true); //не работает без опций ниже, для Linux возможно что-то другое надо искать
user_pref("media.wmf.disable-d3d11-for-dlls", ""); //только для Windows
user_pref("media.wmf.disable-d3d9-for-dlls", ""); //только для Windows

/* дальше просто занятные настройки */

//принудительно рисует интерфейс через DirectX 11, если у вас было что-то другое (ломает DirectX 11 и его Direct2d, DirectWrite)
//user_pref("layers.prefer-d3d9", true); //только для Windows
//user_pref("layers.prefer-opengl", true); //принудительно включает отрисовку через OpenGL, у меня вызвало артефакты