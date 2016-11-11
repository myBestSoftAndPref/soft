###### Установка

Последнюю версию Firefox можно было бы найти тут, на официальном FTP: <br>
[android-api-9](https://ftp.mozilla.org/pub/mozilla.org/mobile/releases/latest/android-api-9/) - для Android 2.3 <br>
[android-api-11](https://ftp.mozilla.org/pub/mozilla.org/mobile/releases/latest/android-api-11/) - для Android 3.0 и выше. <br>
[android-x86](https://ftp.mozilla.org/pub/mozilla.org/mobile/releases/latest/android-x86/) - для Android устройств с процессором x86 <br>
Но к сожалению Mozilla во время выкладывает новые версии только в Google Play Market, с FTP как повезет. Поэтому свежие версии можно взять из каталога на FTP куда выкладывают сборки в процессе разработки [tinderbox-builds](https://ftp.mozilla.org/pub/mobile/tinderbox-builds/): <br>
(выбирайте версию с большим номером) <br>
[android-api-9](https://ftp.mozilla.org/pub/mobile/tinderbox-builds/mozilla-release-android-api-9/) - для Android 2.3 <br>
[android-api-11](https://ftp.mozilla.org/pub/mobile/tinderbox-builds/mozilla-release-android-api-11/) - для Android 3.0 и выше. <br>
[android-x86](https://ftp.mozilla.org/pub/mobile/tinderbox-builds/mozilla-release-android-x86/) - для Android устройств с процессором x86

###### Обязательные

1. [uBlock Origin](https://addons.mozilla.org/ru/android/addon/ublock-origin)<sub>(лучшая замена для AdBlock Plus)</sub> - блокировка рекламы и сбора статистики. <sub>В связи с тем, что подписки по умолчанию блокируют некоторые сайты используемые многими пользователями далее идет описание правильной настройки _uBlock Origin_. <em>**Настройка подписок:**</em> В настройках дополнения ```отключить подписки```: **1) uBlock filters – Badware risks**, **2) Peter Lowe’s Ad server list‎**, **3) Malware Domain List‎**, **4) Malware domains‎**. ```Включить подписки```: **1) Anti-Adblock Killer | Reek‎**, **2) Basic tracking list by Disconnect‎**, __3) RUS: RU AdList__. Остальные подписки по умолчанию. ```Отключите встроенные функции Firefox```, который дублируют подписки _uBlock Origin_: **1) В настройках Firefox на вкладке "Защита" (Security) снять галочки с "Блокировать опасные сайты/загрузки", "Защита от мошенничества"**, **2) В настройках Firefox на вкладке "Приватность" (Privacy) снять галочку "Защита от отслеживания в приватном окне".**</sub><br>
2. [UnMHT](https://addons.mozilla.org/ru/android/addon/unmht/) - сохранение страницы одним файлом в формате .mht. Сохраняются и скрипты. На выбор: можно отключить диалоги во время сохранения, отключить сохранение Flash и video/audio. <br>
3. [Smarter Scrolling](https://addons.mozilla.org/ru/android/addon/smarter-scrolling/) - часто страницы бывают длинными и прокручивать очень долго. Это дополнение при прокрутке одним свайпом определённого расстояния показывает кнопку быстрого перехода вверх/вниз (в зависимости от того куда крутили). И кнопку возврата к предыдущему месту, если вдруг ошиблись. В настройках можно устанавливать шаг через который появится меню. <br>
4. [Decentraleyes](https://addons.mozilla.org/ru/android/addon/decentraleyes/) - встраивает набор некоторых популярных javascript библиотек в Firefox, так что при открытии страниц библиотеки не загружаются снова из интернета и не происходит проверки на их актуальность (нету лишних запросов в интернет). Экономит трафик, защищает от отслеживания, ускоряет загрузку страниц.

###### Дополнительные

2. [Save Link Menus](https://addons.mozilla.org/ru/android/addon/save-link-menus/) - добавляет функции "сохранить ссылку", "сохранить выбранную ссылку", "сохранить страницу" (как .html). Сохраняет по умолчанию в стандартную папку загрузок. <br>
4. [Toggle animated GIF's](https://addons.mozilla.org/ru/android/addon/toggle-animated-gifs/) - старт/стоп gif анимации по клику на них, отключение анимации или перезапуск. <br>
5. [Click-to-Play Manager](https://addons.mozilla.org/ru/android/addon/click-to-play-manager/) - менеджер списка сайтов разрешённых для "клик для воспроизведения". <br>
6. [Self-Destructing Cookies](https://addons.mozilla.org/ru/android/addon/self-destructing-cookies/) - авто-удаление куков и содержимого html5 хранилища по закрытию вкладки (сайт "забывает" вас после закрытия). <br>
7. [Stylish](https://addons.mozilla.org/ru/android/addon/stylish/) - менеджер пользовательских стилей. <br>
8. [Show Title and URL for Android](https://addons.mozilla.org/ru/android/addon/show-title-and-url-for-android/) - добавляет кнопку показа в всплывающем окошке одновременно заголовка и адреса и кнопки для их копирования. <br>
9. [Copy Past Location](https://addons.mozilla.org/ru/android/addon/copy-paste-location/) - добавляет в адрес кнопку "вставить и перейти" и "вставить и перейти (в новой вкладке)", "копировать адрес страницы". <br>
10. [Phony](https://addons.mozilla.org/ru/android/addon/phony/) - набор user agent, браузер представляется сайту iPhone, iPad, Chrome и другими. Бывает сайты показывают html5 видео только для iPhone и др. случаи. <br>
11. [Desktop by Default](https://addons.mozilla.org/ru/android/addon/desktop-by-default/) - показ полной версии сайта по умолчанию (той которую сайт показывает настольному Firefox). <br>
13. [Full Screen mobile](https://addons.mozilla.org/ru/android/addon/full-screen-252573/) - добавляет кнопку перехода в полно-экранный режим, долгий тап по пустому месту показывает кнопку возврата в обычный режим. <br>
14. [Fennec Screenshot](https://addons.mozilla.org/ru/android/addon/fennec-screenshot/) - создание скриншотов страницы (в том числе всей, а не только видимой в данный момент области). В настройках можно поставить JPEG формат для сохранения, по умолчанию формат PNG. <br>
15. [PageInfo Viewer](https://addons.mozilla.org/ru/android/addon/pageinfo-viewer/) - показ информации о странице (аналог клика по значку до адреса сайта и "подробнее"). <br>
16. [Save As TXT](https://addons.mozilla.org/ru/android/addon/save-as-txt/) - сохранение страницы, как текста. <br>
19. [Console](https://addons.mozilla.org/ru/android/addon/console/) - консоль ошибок. <br>
20. [Desktop Mode Add-on](https://addons.mozilla.org/ru/android/addon/desktop-mode-add-on/) - при включении режима отображения версии сайта для настольной версии Firefox сайт отображается один-в-один как на настольной версии (стандартный режим использует другой способ и параметры отрисовки). Полезно для сайтов, которые криво отображаются на мобильой версии. <br>

###### Настройки

Настройки из статьи о минимальной настройки Firefox актуальны и для мобильной версии Firefox. Дополнительные описаны здесь.

**0. Отключаем наглый сбор статистики:** <br>
1. **dom.battery.enabled** > **false** <br>
2. **browser.safebrowsing.enabled** > **false** <br>
3. **browser.safebrowsing.malware.enabled** > **false** <br>
4. **browser.safebrowsing.downloads.enabled** > **false** <br>

**1. Чтобы изменить каталог сохранения по умолчанию на мобильном [firefox]:** <br>
1. Установить в **browser.download.folderList** значение **2** <br>
2. Установить в **browser.download.dir** (создать, тип - строка) путь для сохранения (например ```/sdcard/my```). Чтобы подействовала нужно перезапустить Firefox из меню - выйти-зайти (пункт "Выход", а затем включить). <br>
Если играть методом тыка с настройками, то Firefox может сохранять файлы в разные места. Например, у меня при экспериментах во внутренней памяти телефона создался каталог Pages куда сохранялись страницы. Для Android это важно, так как размер внутренней памяти телефона обычно мал, после экспериментов нужно проверять наличие такого мусора.

**2. Настройка прокси (в том числе Tor):** <br>

Настройки на странице ```about:config```. Для Tor адрес вводить только в поле SOCKS ```127.0.0.1```, порт ```9050```. Для некоторых версий Tor нужно ввести http порт 8118.

Начальные:  
```network.proxy.type > 1```  
```network.proxy.socks_remote_dns > true```  
```network.proxy.no_proxies_on > "localhost, 127.0.0.1"``` - список адресов для которых прокси не используется <sub>(по умолчанию "localhost, 127.0.0.1", кавычки не нужны, это тип "строка")</sub>

Для SOCKS прокси можно устновить только две настройки ниже:  
```network.proxy.socks > 127.0.0.1```  
```network.proxy.socks_port > 9050```

Для http:  
```network.proxy.http > 127.0.0.1```  
```network.proxy.http_port > 9050```

Для ssl (https):  
```network.proxy.ssl > 127.0.0.1```  
```network.proxy.ssl_port > 9050```

Для ftp:  
```network.proxy.ftp > 127.0.0.1```  
```network.proxy.ftp_port > 9050```

```signon.autologin.proxy > true``` - если пароль для входа через прокси сохранен, то повторного запроса не будет  
```network.proxy.share_proxy_settings > true``` - использовать настройки из ```network.proxy.http``` и ```network.proxy.http_port``` для и для всех протоколов.
```network.proxy.type > 0``` - для быстрого отключения прокси. Затем можно его включить поставив вместо 0 значение 1. Можно поставить значение 5 (по умолчанию) чтобы настройки прокси в Firefox зависели от настроек системы, и некоторые программы могли перенаправлять прокси Firefox.

###### Другое

**1. Просмотр файлов в файловой системе через Firefox (в том числе архивов .zip и .jar)** <br>
Чтобы увидеть всю файловую систему наберите в адресной строке
```
file:///
```

**2. Для того, чтобы открыть архив .zip или .jar в Firefox можно набрать в строке адреса:** <br>
```
jar:file:///mnt/sdcard/blabla.zip!/
```
