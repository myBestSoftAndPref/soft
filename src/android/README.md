**Note.** Здесь только бесплатные программы. В том числе могут содержать рекламу или отправку статистики, о чем указано отдельно в описании каждой программы.

**Предупреждение.** Если программа с открытым кодом все равно зайдите в ее настройки и проверьте отключена ли отправка статистики.

Если по ссылке программа не доступна (ссылка сломана), то ищите программу сами. <sub>особенно в **F-Droid** любят менять ссылки</sub>

- [Почему ссылки на F-Droid в последнюю очередь?](#Почему-ссылки-на-f-droid-в-последнюю-очередь)
- [Чего не хватает в этом списке](#Чего-не-хватает-в-этом-списке)
- [Почему может не работать авто синхронизация в некоторых программах?](#Почему-может-не-работать-авто-синхронизация-в-некоторых-программах)
- [Почему могут не работать сторонние будильники и таймеры?](#Почему-могут-не-работать-сторонние-будильники-и-таймеры)
- [Почему может не работать вход в почту (например Gmail) через K9 Mail и другие?](#Почему-может-не-работать-вход-в-почту-например-gmail-через-k9-mail-и-другие)
- [Программы с открытым кодом](#Программы-с-открытым-кодом)
	- [Источники программ (магазины, репозиторий)](#Источники-программ-магазины-репозиторий)
	- [Медиа](#Медиа)
	- [Навигация](#Навигация)
	- [Органайзер](#Органайзер)
	- [Интернет](#Интернет)
	- [Справочники](#Справочники)
	- [Файлы](#Файлы)
	- [Документы](#Документы)
	- [Приватность](#Приватность)
	- [Игры](#Игры)
	- [Система](#Система)
- [Программы с закрытым кодом](#Программы-с-закрытым-кодом)
	- [Предупреждение](#Предупреждение)
	- [Источники программ (магазины, репозиторий)](#Источники-программ-магазины-репозиторий-1)
	- [Медиа](#Медиа-1)
	- [Навигация](#Навигация-1)
	- [Интернет](#Интернет-1)
	- [Справочники](#Справочники-1)
	- [Файлы](#Файлы-1)
	- [Документы](#Документы-1)
	- [Система](#Система-1)
	- [Стандартные приложения Android от Google (в том числе если производитель телефона заменил их своими)](#Стандартные-приложения-android-от-google-в-том-числе-если-производитель-телефона-заменил-их-своими)

# Почему ссылки на F-Droid в последнюю очередь?
Ссылки даны на официальные сайты. Если прямых ссылок на ```.apk``` на официальном сайте нет, то ссылка на [Google Play](https://play.google.com/store). Если в [Google Play](https://play.google.com/store) нету, то ссылка на [F-Droid](https://f-droid.org). Если на официальном сайте ссылка на ```.apk``` ведет на другой сторонний источник (магазин), то ссылка на него.

Почему приоритет у **Google Play**, а не у **F-Droid**? Потому что в **F-Droid** обновления задерживаются, а программы бывает пересобираются с ошибками. И потому что из **Google Play** можно выкачать программу напрямую через программу [Yalp Store](https://f-droid.org/en/packages/com.github.yeriomin.yalpstore/)

# Чего не хватает в этом списке
1. Нормального текстового редактора с подсветкой кода
2. Таймера с большим количеством настроек
3. Словаря с поддержкой словарей Lingvo, но без ограничений на количество словарей
4. Нормального калькулятора с большим количеством возможностей (серьезные математические среды есть)

# Почему может не работать авто синхронизация в некоторых программах?
Некоторые программы, например [K-9 Mail](https://github.com/k9mail/k-9/releases) и его **авто синхронизация**, включают синхронизацию только если синхронизация включена в настройках сети Android. Чтобы все работало **авто синхронизацию** нужно включить в настройках Android, и в пункте **Учетные записи** отключить синхронизации для каждой ненужной программы **отдельно**.

Пункт в настройках Android под названием `Счетчик данных > Ограничить фоновые данные` тоже может заблокировать синхронизацию.

**Note:** в разных версиях Android названия пунктов меню и настройки могут отличаться.

# Почему могут не работать сторонние будильники и таймеры?
**Внимательно** проверяйте работу сторонних таймеров, будильников etc, случаи когда производитель меняет настройки системы так, что они иногда не срабатывают были и есть! 

Доверяйте только **родным** будильнику и таймеру!

В основном причина их неправильной работы в том, что Android в целях экономии заряда может завершать или замедлять фоновые процессы. И видимо неродные программы не добавлены в список исключений. Поэтому неродные будильники и таймеры могут работать неправильно.

# Почему может не работать вход в почту (например Gmail) через K9 Mail и другие?
Google может запросить подтверждение телефона при входе, если посчитает, что это нужно для безопасности даже если вы отключили **2-Step Verification**. Для подтверждение телефона нужно войти в аккаунт через браузер.

# Программы с открытым кодом

## Источники программ (магазины, репозиторий)
* [F-Droid](https://f-droid.org/) - репозиторий программ с открытым кодом (часто версии программ в нём устаревшие, зато проверенные). В настройках программы можно включить дополнительный источник программ от [Guardian Project](https://guardianproject.info/) (Tor, приватные мессенджеры и так далее).
	* **Предупреждение:** [F-Droid](https://f-droid.org) перекомпилирует приложения, бывает с ошибками. Если программа не работает - пробуйте установить её из других источников, оригинально скомпилированную. Некоторые open source программы могут туда не попасть - у владельцев [F-Droid](https://f-droid.org) просто не хватает знаний на компилирование. Если open source программа использует какую-то несвободную библиотеку, то она тоже может туда не попасть, из-за политики [F-Droid](https://f-droid.org) использовать только open source программы.
* [Aptoide](https://www.aptoide.com/) - формально код открыт, но на деле приложения хранятся онлайн на сайте aptoide.com, каждый пользователь может создать свой репозиторий. В результате - много поддельных вредоносных приложений, что-то стоящее найти очень трудно. **Не рекомендуется**, если вы не хотите сделать свой собственный репозиторий.
* [Yalp Store](https://f-droid.org/repository/browse/?fdfilter=store&fdid=com.github.yeriomin.yalpstore) - программа может напрямую качать .apk из Google Play, обновлять и т.д.

## Медиа
* [VLC](http://download.videolan.org/pub/videolan/vlc-android/) - универсальный плеер для аудио и видео, играет почти все существующие форматы. В нем иногда встречаются баги, и CPU может нагружать.
* [Odyssey Music Player](https://github.com/gateship-one/odyssey) - музыкальный плеер требующий мало ресурсов.
* [Audio Recorder](https://play.google.com/store/apps/details?id=com.github.axet.audiorecorder) - диктофон, пишет в форматах .ogg, .wav, .flac, .m4a, .mka, .mp3. Есть настройка качества записи, паузы во время разговора по телефону, выбор каталога.
* [Open Camera](https://sourceforge.net/projects/opencamera/files/) - альтернативная камера для видео и фото с множеством настроек и функций, автоопределением лиц
* [Call recorder for Android](https://github.com/riul88/call-recorder-for-android) - автоматическая запись телефонных разговоров
* [CosyDVR](http://cosydvr.esy.es/doku.php) - делает из камеры телефона видеорегистратор, пишет видео в фоне. Версия на [F-Droid](https://f-droid.org/repository/browse/?fdfilter=CosyDVR&fdid=es.esy.CosyDVR), версия для старых Android на [F-Droid](https://f-droid.org/repository/browse/?fdid=com.example.CosyDVR)

## Навигация
* [OsmAnd~](https://f-droid.org/packages/net.osmand.plus/) (OsmAnd+) - показывает карты OpenStreetMap без интернета (не путать с версией из Google Play в которой есть **ограничение** на количество используемых карт, версия F-Droid пересобрана **без этих ограничений**). <sub>Вы должны понимать, что не смотря на все плюсы данные карты **не заменят** ```Google Maps``` или ```Yandex Maps```, которые сделаны более профессионально</sub>
* [SatStat](https://f-droid.org/repository/browse/?fdfilter=satstat&fdid=com.vonglasow.michael.satstat) - показывает найденные спутники, полезно чтобы знать в какой местности какая точность позиционирования

## Органайзер
* [Search Light](https://f-droid.org/repository/browse/?fdfilter=search&fdid=com.scottmain.android.searchlight&fdpage=4) - вспышка в качестве фонарика
* [Torchie](https://f-droid.org/repository/browse/?fdid=in.blogspot.anselmbros.torchie) - **не рекомендуется**, вспышка в качестве фонарика. Очень удобное включение удерживанием кнопок громкости только в режиме когда телефон блокирован и не работает датчик приближения (телефон в кармане). Поиграйтесь с настройками (**ОСТОРОЖНО** может вызвать такие проблемы, что телефоном вы сможете пользоваться только после удаления этой программы)
* [Omni Notes](https://github.com/federicoiosue/Omni-Notes) - развитое приложение для to do заметок разных типов (текст, аудио и прочее)

## Интернет
* [K-9 Mail](https://github.com/k9mail/k-9/releases) - почтовый клиент. Для работы с GMail и некоторыми другими сервисами нужно зайти в сервис с браузера и включить возможность доступа программам к почте.
  * **Прим.** чтобы работать с gmail нужно в настройках аккаунта google в разделе "Безопасность" (Security) разрешить подключение "небезопасных приложений" (less security application); на самом деле никакой опасности тут нет. (если ссылка не изменилась, то менять [тут](https://myaccount.google.com/lesssecureapps))
* [Firefox](https://ftp.mozilla.org/pub/mobile/releases/) - браузер, может блокировать рекламу и сохранять/открывать страницы одним файлом формата etc. Больше о его настройке по [ссылке](https://github.com/myBestSoftAndPref/soft/blob/master/src/firefox/android.md)
* [Chromium](https://download-chromium.appspot.com/?platform=Android&type=snapshots) - браузер на основе которого делается Chrome
* [Tor Browser](https://play.google.com/store/apps/details?id=org.torproject.torbrowser) - анонимный браузер от проекта Tor.
* [Orbot](https://play.google.com/store/apps/details?id=org.torproject.android) - программа для подключения к цепочке анонимных прокси от проекта Tor.
* [Download Navi - Download Manager](https://github.com/TachibanaGeneralLaboratories/download-navi) или [GigaGet Download Manager](https://f-droid.org/repository/browse/?fdfilter=GigaGet&fdid=us.shandian.giga) - менеджер загрузок, может качать в несколько потоков, можно выбрать каталог сохранения и прочее. **Note:** _GigaGet Download Manager_ таинственно исчезла со всех ресурсов.
* [Conversations](https://f-droid.org/repository/browse/?fdfilter=conversation&fdid=eu.siacs.conversations) - обмен сообщениями по протоколу XMPP (Jabber), поддерживает стойкое к взлому шифрование OTR на стороне клиента. То есть через него можно абсолютно приватно общаться с другом (для работы нужно зарегистрироваться на любом XMPP сервере)
* [LibreTorrent](https://f-droid.org/repository/browse/?fdfilter=torrent&fdid=org.proninyaroslav.libretorrent) или [Torrent Client](https://f-droid.org/packages/com.github.axet.torrentclient/) - торрент клиент

## Справочники
* [QuickDic restored](https://github.com/rdoeffinger/Dictionary/releases) - словарь иностранных слов, работает без интернета
* [QDict](https://github.com/madmanteam/QDict) - словарь, поддерживает формат ```StarDict``` в котором существует очень много словарей
* [Barcode Scanner](https://github.com/zxing/zxing/releases) - сканер штрих кодов, QR кодов и их создание с поиском информации по ним через интернет браузер
* [Moon Phase](https://f-droid.org/repository/browse/?fdfilter=Moon+Phase&fdid=akk.astro.droid.moonphase) - показывает фазу луны
* [Bubble](https://f-droid.org/repository/browse/?fdid=net.androgames.level) - строительный уровень, показывает угол наклона поверхностей на основе датчика гироскоп. Есть [новая версия](https://play.google.com/store/apps/details?id=net.androgames.level) этой программ на **Google Play**, но она содержит рекламу.
* [Unit Converter Ultimate](https://f-droid.org/repository/browse/?fdfilter=converter&fdid=com.physphil.android.unitconverterultimate) - конвертер величин (граммы в пинты, килограммы, футы в метры и так далее)
* [Ruler](https://f-droid.org/repository/browse/?fdfilter=ruler&fdid=org.secuso.privacyfriendlyruler) - на дисплее отображается транспортир и линейка
* [Suntimes](https://f-droid.org/packages/com.forrestguice.suntimeswidget/) - показывает время восхода и заката для разных часовых поясов и разных типов, состояние луны и другую подобную информацию.
* [Sky Map](https://play.google.com/store/apps/details?id=com.google.android.stardroid) - карта звездного неба (созвездия, астрономические данные и т.д.)

## Файлы
* [Ghost Commander](https://sourceforge.net/projects/ghostcommander/files/Releases/) - двух панельный файловый менеджер, есть поддержка zip, WebDav, Box, SFTP, Samba, Google Drive, Dropbox (дополнительные функции устанавливаются через плагины). Плагины в Google Play можно найти по [этой](https://play.google.com/store/apps/developer?id=Ghost+Squared) ссылке, плагину на сайте разработчика по [этой](https://sourceforge.net/projects/ghostcommander/files/Releases/) (в F-Droid ограниченный набор плагинов).

## Документы
* [920 Text Editor](https://github.com/jecelyin/920-Text-Editor-old/tree/master/apk) - **Осторожно.** Некоторые моменты вроде того что автор не позаботился даже о нормальном переводе на английский выглядят сомнительно, но удалять из списка пока не буду. Удобный блокнот, просмотр и редактирование множества форматов, подсветка синтаксисов
* [Cool Reader](https://sourceforge.net/projects/crengine/files/) - удобная читалка для fb2, epub, chm, rtf, doc, html и других форматов, поддерживает множество форматов и opds онлайн каталоги
* [FBReader](https://fbreader.org/FBReaderJ) - не такая удобная, как ```Cool Reader```, но имеет возможность подключать плагины, читать с некоторым трудом .mht файлы и другие уникальные функции
* [Document Viewer](https://f-droid.org/repository/browse/?fdid=org.sufficientlysecure.viewer) - просмотр множества типов документов. [Document Viewer Font Pack](https://f-droid.org/repository/browse/?fdfilter=Document+Viewer&fdid=org.sufficientlysecure.viewer.fontpack) - шрифты для неё
* [VIMTouch](https://f-droid.org/repository/browse/?fdfilter=vim&fdid=net.momodalo.app.vimtouch) - текстовый редактор, подсветка синтаксисов, старается в некоторой степени следовать стилю компьютерного редактора VIM
* [LibreOffice](https://www.libreoffice.org/download/android-viewer/) - аналог Microsoft Office, пока еще нестабильный, но уже может работать с многими форматами

## Приватность
* [KeePassDroid](https://github.com/bpellin/keepassdroid/releases) - менеджер паролей KeePass
* [Orbot](https://guardianproject.info/apps/orbot/) - клиент Tor, бесплатная цепочка анонимных прокси

## Игры

* [RetroArch](http://buildbot.libretro.com/stable/) - эмулятор множества консолей (SEGA, PlayStation и других). Если будут проблемы с интерфейсом - пробуйте старые версии. У этого эмулятора неочевидная настройка джойстика, нужно зайти в настройках в пункт Overlays и выбрать определенный под вашу консоль.
* [PPSSPP](http://www.ppsspp.org/downloads.html) - эмулятор консоли PlayStation Portable

## Система
* [Rotation Lock + Landscape](https://f-droid.org/repository/browse/?fdfilter=search&fdid=org.cmotc.tools.rotationlockpp&fdpage=4) - кнопка в шторку для блокировки переворота экрана
* [Rotation Manager](https://f-droid.org/repository/browse/?fdfilter=rotate&fdid=com.spydiko.rotationmanager_foss) - управление авто поворотом для каждой программы отдельно
* [Twisted Home Manager](https://f-droid.org/repository/browse/?fdfilter=twisted+home&fdid=com.twsitedapps.homemanager) - менеджер рабочих столов (launcher)
* [ADW.Launcher](https://f-droid.org/repository/browse/?fdfilter=launcher&fdid=org.adw.launcher) - альтернативный легкий рабочий стол (launcher)
* [OS Monitor](https://f-droid.org/repository/browse/?fdfilter=OS+Monitor&fdid=com.eolwral.osmonitor) - показывает информацию о процессах, соединениях, использовании памяти, процессоре и т. д.
* [Hacker's Keyboard](https://github.com/klausw/hackerskeyboard/releases) - полноценная клавиатура с ctrl, стрелками, отображением английских символов на русских клавишах и т.д. Словари языков почему-то есть только в Google Play.
* [DiskUsage](https://f-droid.org/repository/browse/?fdfilter=diskusage&fdid=com.google.android.diskusage) - удобное отображение занимаемого файлами пространства, для удаления ненужных файлов
* [SD Scanner](https://f-droid.org/en/packages/com.gmail.jerickson314.sdscanner/) - для многих относительно старых систем Android список файлов не обновляется при подключении к компьютеру и новые файлы не видны сразу. Эта программа обновляет состояние.
* [androidVNC](https://f-droid.org/packages/android.androidVNC/) - удаленное управление (например компьютером) по vnc
* [Save For Offline](https://f-droid.org/packages/jonas.tool.saveForOffline/) - добавляет в меню "поделиться" (share) возможность сохранить файл, например так можно сохранять файлы в Mozilla Firefox
* [KDE Connect](https://f-droid.org/packages/org.kde.kdeconnect_tp/) - позволяют интегрироваться с KDE (Kubuntu и другими linux системами с KDE) или Gnome (Ubuntu GNOME и др.) с установленным расширением GSConnect. Пересылать файлы, управлять телефоном и прочее по USB кабелю и Wi-Fi сети.
* [KISS Launcher](https://github.com/Neamar/KISS) - легкий launcher, помогает экономить батарею.
* [OpenLauncher](https://github.com/OpenLauncherTeam/openlauncher) - еще один open source launcher.

# Программы с закрытым кодом
## Предупреждение
О [Yandex.Store](https://store.yandex.by/). Был случай когда одно из его приложений записывало все окружающие разговоры. С осторожностью относитесь к его программам. После [Google Play](https://play.google.com/store) на сегодня самый большой **официальный** источник программ для Android - это [Amazon Appstore](https://www.amazon.com/getappstore)

## Источники программ (магазины, репозиторий)
* [Google Play](https://play.google.com/store) - самый большой магазин. Код проходит некоторую автоматическую проверку.
* [Yandex.Store](https://store.yandex.by/) - попытка Yandex сделать аналог [Google Play](https://play.google.com/store). Приложений мало, много поддельных, проверка на вредоносность хуже. Достоверно обновляются и надежны только программы от самого Yandex. Прямая ссылка [тут](https://m.soft.yandex.ru/download/appstore/appstore-android.apk)
* [Amazon Appstore](https://www.amazon.com/getappstore) - магазин от [amazon.com](http://amazon.com), много поддельных программ. Трудно искать оригинальные.
* [1Mobile Market](http://market.1mobile.com/) - **не рекомендуется**. Магазин бесплатных .apk, в магазин загружаются и приложения с Google Play (они отмечены специальным значком). В этом магазине бывают косяки, загруженные программы могут работать с ошибками. Сам магазин доверия не внушает, репутации не имеет. Есть шанс, что он вредоносный или может распостранять вредоносные программы.
* [APKMirror](http://www.apkmirror.com) - **не рекомендуется**. Онлайн сервис через который можно скачать .apk загруженные в него с Google Play. Не имеет репутации, может быть опасен.

## Медиа
* [PhotoScan](https://play.google.com/store/apps/details?id=com.google.android.apps.photos.scanner) - позволяет использовать фотоаппарат как фото сканер.
* [Google Photos](https://play.google.com/store/apps/details?id=com.google.android.apps.photos) - управление и редактирование фотографий.
* [Cardboard Camera](https://play.google.com/store/apps/details?id=com.google.vr.cyclops) - от Google, позволяет снять VR-фотографии.

## Навигация
* [Yandex.Metro](https://play.google.com/store/apps/details?id=ru.yandex.metro) - навигация по веткам метро для: Москвы, Санкт-Петербурга, Киева, Харькова, Минска и Стамбула.
* [Yandex.Maps](https://play.google.com/store/apps/details?id=ru.yandex.yandexmaps) - карты от yandex.
* [Google Maps](https://play.google.com/store/apps/details?id=com.google.android.apps.maps) - карты от Google с возможностью скачивать области для offline навигации.

## Интернет
* [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome) - браузер от Google.
* [Yandex.Browser](https://browser.yandex.by/mobile) - браузер на основе Chromium, сжимает трафик.
* [Yandex.Browser Lite](https://play.google.com/store/apps/details?id=com.yandex.browser.lite) - браузер, легковесный вариант Yandex.Browser экономящий батарею и ресурсы.
* [Skype](https://play.google.com/store/apps/details?id=com.skype.raider) - видео звонки и чат
* [Viber](https://play.google.com/store/apps/details?id=com.viber.voip) - видео звонки и чат
* [Telegram](https://play.google.com/store/apps/details?id=org.telegram.messenger) - популярный чат, обмен сообщениями
* [WhatsApp Messenger](https://play.google.com/store/apps/details?id=com.whatsapp) - популярный чат, обмен сообщениями
* [Google Duo](https://play.google.com/store/apps/details?id=com.google.android.apps.tachyon) - видео чат от Google.
* [Hangouts](https://play.google.com/store/apps/details?id=com.google.android.talk) - мессенджер от Google.

## Справочники
* [GoldenDict](https://play.google.com/store/apps/details?id=mobi.goldendict.android.free) - словарь, бесплатная версия имеет ограничение по количеству подключенных словарей. Полностью поддерживает словари форматов Lingvo, Babylon, StarDict, Lingoes и Dictd. Существует одноименная версия с открытым кодом для обычных компьютеров, но для Android версии код закрыт.
	* Подборка словарей Lingvo для русского (перевод с Fr, De, It, Es) **включая** озвучивание слов и толковый словарь (для установки в GoldenDict просто указать каталог словарей в настройках) https://yadi.sk/d/R9KYaEYJ7utB2
* [Sound Meter](https://play.google.com/store/apps/details?id=kr.sira.sound&hl=en) - шумометр, меряет уровень шума. Из-за встроенных фильтров Android подавляющих шум может работать неточно. Таблицу вредности шумов можно найти в интернете, например [тут](http://chchearing.org/noise/common-environmental-noise-levels/)
* [Measure - Quick Everyday Measurements](https://play.google.com/store/apps/details?id=com.google.tango.measure) - от Google, для измерение длинны и прочего с помощью камеры.

## Файлы
* [7Zipper](https://play.google.com/store/apps/details?id=org.joa.zipperplus7) или [7Zipper 2.0](https://play.google.com/store/apps/details?id=org.joa.zipperplus7v2) - архиватор. Распаковка zip, alz, egg, tar, tar.gz, tar.bz2, gz, bz2, rar, jar, 7z, lzh поддержка разделенных ZIP архивов (Z01, Z02 ..., zip.001, zip.002 .. ). Работа с архивами 7z, ZIP. Hex-Viewer. FTP-клиент и сервер.
* [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) - архиватор. Создавать архивы: 7z (7zip), zip, bzip2 (bz2), gzip (gz), XZ, tar; Распаковывать архивы: 7z (7zip), zip, rar, rar5, bzip2, gzip, xz, iso, tar, arj, cab, lzh, lha, lzma, xar, tgz, tbz, Z, deb, rpm, zipx, mtz, chm, dmg, cpio, cramfs, img (fat, ntfs, ubf), wim, ecm, arc (freearc); Просматривать содержимое архивов: 7z (7zip), zip, rar, rar5, bzip2, gzip, xz, iso, tar, arj, cab, lzh, lha, lzma, xar, tgz, tbz, Z, deb, rpm, zipx, mtz, chm, dmg, cpio, cramfs, img (fat, ntfs, ubf), wim, ecm, arc (freearc);
* [Total Commander](https://play.google.com/store/apps/details?id=com.ghisler.android.TotalCommander) - двух панельный файловый менеджер. Может открывать и архивировать zip.

## Документы
* [WPS Office + PDF](https://play.google.com/store/apps/details?id=cn.wps.moffice_eng) - офис, для .docx, .xls и других форматов
* [Microsoft Office](https://play.google.com/store/apps/dev?id=6720847872553662727) - набор стандартных офисных программ от Microsoft, для .docx, .xls, презентаций и других форматов по аналогии с офисом для обычных компьютеров.
* [Docs](https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.docs), [Slides](https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.slides), [Sheets](https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.sheets) - набор офисных программ от Google

## Система
* [Volume control - Vollynx](https://play.google.com/store/apps/details?id=com.loadlynx_jp.vollynx.free) - очень удобный регулятор громкости для всех типов звука (будильник, оповещение, bluetooth, наушники, звонок и т.д.).
* [Rotation Control](https://play.google.com/store/apps/details?id=org.crape.rotationcontrol) - удобное управление вращением экрана и запретами вращения из шторки телефона.
* [Chrome Remote Desktop](https://play.google.com/store/apps/details?id=com.google.chromeremotedesktop) - пара к такой же программе установленной на компьютере, позволяет через интернет управлять телефоном удаленно.
* [Google Cloud Print](https://play.google.com/store/apps/details?id=com.google.android.apps.cloudprint) - управление виртуальными принтерами, в том числе подключенным к облачным сервисам в сети.
* [Quick Settings](https://play.google.com/store/apps/details?id=it.simonesestito.ntiles) - дополнительный набор иконок для шторки в Android (они называются tile). Кроме иконок на настройки и приложения есть встроенные приложения и иконки для них: **Coffeine** (запрет на засыпание телефона), **Rotate** (режимы поворота), **Internet Speed** (статистика по скорости интернета), **Music Volume** (для быстрого отключения звука медиа приложений) и другие.

## Стандартные приложения Android от Google (в том числе если производитель телефона заменил их своими)
Часто производители телефонов заменяют стандартные приложения Google своими, не всегда лучшими аналогами. Можно установить стандартные версии с Google Play по [этой](https://play.google.com/store/apps/dev?id=5700313618786177705) ссылке.

Чтобы эти приложения работали как нужно Google в стандартном Android дает им необходимые права. Установка вручную на измененную производителем телефона систему не всегда позволяет использовать эти приложения нормально. Например будильник (набор программ: будильник, таймер, секундомер) может быть завершен системой для экономии заряда и не сработать.

* [Gboard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin) - стандартная клавиатура, есть возможность ввода свайпом (swipe) не отрывая пальца.
* [Calculator](https://play.google.com/store/apps/details?id=com.google.android.calculator) - стандартный калькулятор.
* [Google Calendar](https://play.google.com/store/apps/details?id=com.google.android.calendar) - стандартный календарь.
* [Contacts](https://play.google.com/store/apps/details?id=com.google.android.contacts) - стандартная программа для управления списком контактов.
* [Синтезатор речи Google](https://play.google.com/store/apps/details?id=com.google.android.tts) (tts) - стандартный синтезатор речи.
* [Clock](https://play.google.com/store/apps/details?id=com.google.android.deskclock) - стандартный набор программ будильника: будильник, таймер, секундомер. **Осторожно,** может не всегда срабатывать, лучше используйте родной будильник системы!
* [Google Рукописный ввод](https://play.google.com/store/apps/details?id=com.google.android.apps.handwriting.ime) (handwriting) - стандартная клавиатура для рукописного ввода.
* [Dialer](https://play.google.com/store/apps/details?id=com.google.android.dialer) (Телефон) - стандартная программа для телефонных звонков.