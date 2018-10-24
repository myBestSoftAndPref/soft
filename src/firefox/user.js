user_pref("layout.word_select.eat_space_to_next_word", false); //Отключить выделение пробела за словом по двойному клику на слове
user_pref("pdfjs.disabled", true); //Отключение медленного просмотра pdf в браузере
user_pref("ui.scrollToClick", 1); //Отвечает за переход к позиции на странице при клике по scroll бару (полосе прокрутки) левой кнопкой мыши. Ставим моментальный переход
user_pref("dom.disable_beforeunload", true); //Отключить предупреждение сайтом о закрытии вкладки с важной информацией. Сообщение "Вы действительно хотите уйти с этого сайта?"
user_pref("intl.locale.matchOS", false); //Использовать локаль из general.useragent.locale, а не установленную в ОС
user_pref("browser.link.open_newwindow.restriction", 0); //Открывать попапы во вкладках вместо отдельных окон
user_pref("browser.tabs.closeWindowWithLastTab", false); //Не закрывать Firefox при закрытии последней вкладки
user_pref("dom.webnotifications.enabled", false); //отключаем надоедливые окошки с предложением включить уведомления
user_pref("dom.webnotifications.serviceworker.enabled", false); //без этого не работает
user_pref("browser.xul.error_pages.expert_bad_cert", true); // Более информативная страница показа ошибок в сертификатах сайтов.
user_pref("browser.fixup.alternate.enabled", false); //отключаем автоподстановку TLD и www, иногда мешает вводу
user_pref("layout.spellcheckDefault", 2); // включить проверку орфографии во всех полях ввода
user_pref("devtools.screenshot.audio.enabled", false); //Отключает звук затвора фотоаппарата при снятии скриншота в через Developer Tools.
user_pref("browser.sessionstore.max_tabs_undo", 25); //Устанавливаем максимальное количество истории закрытых табов в 25
user_pref("devtools.aboutdebugging.showSystemAddons", true); //разрешаем показывать системные аддоны на странице about:debugging

user_pref("browser.aboutHomeSnippets.updateUrl", ""); // отключаем рекламу на странице about:home
user_pref("browser.startup.homepage_override.mstone", "ignore"); // отключаем пока страницы "What's new" после обновления

// TODO: отключить https://wiki.mozilla.org/Firefox/Shield/Shield_Studies и https://wiki.mozilla.org/Firefox/Shield/Heartbeat

// Отключает обнаружение captive portal - подмены всех запрашиваемых пользователем страниц на страницы провайдера
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("captivedetect.maxRetryCount", 0);

// ссылки на русском будут копироваться как есть, без кодирования
user_pref("browser.urlbar.decodeURLsOnCopy", true);

//отдельно отключаем отправку хэшей загружаемых файлов
//хотя по идеи она и так должна быть отключена при отключении browser.safebrowsing через стандартные настройки
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

// Отключает посылку статистики при обновлении аддонов.
user_pref("extensions.getAddons.cache.enabled", false);

user_pref("network.proxy.socks_remote_dns", true); // dns через прокси

user_pref("toolkit.telemetry.coverage.opt-out", true); // отключаем особый вид телеметрии, который не зависит от обычных настроек
user_pref("extensions.fxmonitor.enabled", false); // отключаем отправку хэшей почты для проверки на взломанность в разные сервисы

// отключение различных авто обновлений
user_pref("app.update.auto", false);
user_pref("lightweightThemes.update.enabled", false);
user_pref("lightweightThemes.getMoreURL", "");
user_pref("lightweightThemes.recommendedThemes", "");
user_pref("extensions.update.enabled", false);
user_pref("browser.search.update", false);
