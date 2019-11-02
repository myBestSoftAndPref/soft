user_pref("layout.word_select.eat_space_to_next_word", false); //Отключить выделение пробела за словом по двойному клику на слове
user_pref("pdfjs.disabled", true); //Отключение медленного просмотра pdf в браузере
user_pref("ui.scrollToClick", 1); //Отвечает за переход к позиции на странице при клике по scroll бару (полосе прокрутки) левой кнопкой мыши. Ставим моментальный переход
user_pref("dom.disable_beforeunload", true); //Отключить предупреждение сайтом о закрытии вкладки с важной информацией. Сообщение "Вы действительно хотите уйти с этого сайта?"
user_pref("intl.locale.matchOS", false); //Использовать локаль из general.useragent.locale, а не установленную в ОС
user_pref("browser.link.open_newwindow.restriction", 0); //Открывать попапы во вкладках вместо отдельных окон
user_pref("browser.tabs.closeWindowWithLastTab", false); //Не закрывать Firefox при закрытии последней вкладки
user_pref("browser.xul.error_pages.expert_bad_cert", true); // Более информативная страница показа ошибок в сертификатах сайтов.
user_pref("browser.fixup.alternate.enabled", false); //отключаем автоподстановку TLD и www, иногда мешает вводу
user_pref("browser.urlbar.trimURLs", false); // показывать протоколы в адресах сайтов
user_pref("layout.spellcheckDefault", 2); // включить проверку орфографии во всех полях ввода
user_pref("devtools.screenshot.audio.enabled", false); //Отключает звук затвора фотоаппарата при снятии скриншота в через Developer Tools.
user_pref("browser.sessionstore.max_tabs_undo", 25); //Устанавливаем максимальное количество истории закрытых табов в 25
user_pref("devtools.aboutdebugging.showSystemAddons", true); //разрешаем показывать системные аддоны на странице about:debugging до 67 версии
user_pref("devtools.aboutdebugging.showHiddenAddons", true); // для 68+

// отключаем надоедливые уведомления
user_pref("dom.webnotifications.enabled", false); //отключаем надоедливые окошки с предложением включить уведомления
user_pref("dom.webnotifications.serviceworker.enabled", false); //без этого не работает
user_pref("dom.pushconnection.enabled", false); //без этого не работает
user_pref("dom.push.enabled", false); //без этого не работает

user_pref("browser.aboutHomeSnippets.updateUrl", ""); // отключаем рекламу на странице about:home
user_pref("browser.startup.homepage_override.mstone", "ignore"); // отключаем пока страницы "What's new" после обновления

user_pref("network.allow-experiments", false); //отключаем эксперименты Mozilla над пользователями
user_pref("app.normandy.enabled", false); //отключаем статистику https://wiki.mozilla.org/Firefox/Shield/Heartbeat
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false); //отключаем статистику https://wiki.mozilla.org/Firefox/Shield/Shield_Studies

user_pref("geo.wifi.uri", ""); //пытаемся отключить использование wifi для geo location

// Отключает обнаружение captive portal - подмены всех запрашиваемых пользователем страниц на страницы провайдера
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("captivedetect.maxRetryCount", 0);

user_pref("browser.library.activity-stream.enabled", false); //отключаем статистику с нового таба https://wiki.mozilla.org/Firefox/Activity_Stream
user_pref("browser.onboarding.enabled", false); //отключаем надоедливый тур по возможностям Firefox который еще и собирает статистику

// ссылки на русском будут копироваться как есть, без кодирования
user_pref("browser.urlbar.decodeURLsOnCopy", true);

//отдельно отключаем отправку хэшей загружаемых файлов в гугл для проверки на вредоносность
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

// в будущем отключить DoH (DNS over HTTPS) и сервис, который 2 раза в сутки проверяет скорость соединения на сторонних ресурсах чтобы решить включать или нет DoH
// тут написано что значение 5 отключает это, но не ясно 0 или 5 правильнее для отключения https://wiki.mozilla.org/Trusted_Recursive_Resolver
user_pref("network.trr.mode", 0);

// включаем разные фичи разработчика, например в консоле по ctrl + shift + j появятся не только сообщения, но и поле ввода команд в консоль, которые влияют на сам Firefox
user_pref("devtools.chrome.enabled", true);

// отключаем проверку подписей расширений (работает не для всех систем, обходное решение тут: https://forum.mozilla-russia.org/viewtopic.php?pid=769320#p769320 )
user_pref("xpinstall.signatures.required", false);

// отключаем самовольную выгрузку вкладок при нехватке памяти
user_pref("browser.tabs.unloadOnLowMemory", false);

// отключение рекомендации дополнений (НЕ ПРОВЕРЕНО!)
// browser.newtabpage.activity-stream.asrouter.providers.cfr

// отключаем некрасивые рекомендации расширений в менеджере расширений (функция показа рекомендаций будет добавлена в новых версиях firefox)
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// включаем пользовательские стили интерфеса самого Firefox (которые отключены по умолчанию в новых версиях)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
