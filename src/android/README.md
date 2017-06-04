Здесь только бесплатные программы. Ссылки даны на официальные сайты. Если прямых ссылок на .apk на официальном сайте нет, то ссылка на [F-Droid](https://f-droid.org). Если в [F-Droid](https://f-droid.org) нету, то ссылка на [Google Play](https://play.google.com/store). Если на официальном сайте ссылка на .apk ведет на другой сторонний источник (магазин), то ссылка на него.  
Если по ссылке программа не доступна (ссылка сломана), то ищите программу в [F-Droid](https://f-droid.org).

##### Программы с открытым кодом

###### Источники программ (магазины, репозиторий)
* [F-Droid](https://f-droid.org/) - репозиторий программ с открытым кодом (часто версии программ в нём устаревшие, зато проверенные). В настройках программы можно включить дополнительный источник программ от [Guardian Project](https://guardianproject.info/) (Tor, приватные мессенджеры и так далее).
	* **Предупреждени:** [F-Droid](https://f-droid.org) перекомпилирует приложения, бывает с ошибками. Если программа не работает - пробуйте установить её из других источников, оригинально скомпилированную. Некоторые open source программы могут туда не попасть - у владельцев [F-Droid](https://f-droid.org) просто не хватает знаний на компилирование. Если open source программа использует какую-то несвободную библиотеку, то она тоже может туда не попасть, из-за политики [F-Droid](https://f-droid.org) использовать только open source прогрммы.
* [Aptoide](https://www.aptoide.com/) - формально код открыт, но на деле приложения хранятся онлайн на сайте aptoide.com, каждый пользователь может создать свой репозиторий. В результате - много поддельных вредоносных приложений, что-то стоящее найти очень трудно. **Не рекомендуется**, если вы не хотите сделать свой собственный репозиторий.
* [Yalp Store](https://f-droid.org/repository/browse/?fdfilter=store&fdid=com.github.yeriomin.yalpstore) - программа может напрямую качать .apk из Google Play, обновлять и т.д.

###### Медиа
* [VLC](http://download.videolan.org/pub/videolan/vlc-android/) - плеер
* [Audio Recorder](https://f-droid.org/repository/browse/?fdfilter=Audio+Recorder&fdid=com.github.axet.audiorecorder) - диктофон, пишет в форматах .ogg, .wav, .flac, .m4a, .mka, .mp3. Есть настройка качества записи, паузы во время разговора по телефоны, выбор каталога.
* [Open Camera](https://sourceforge.net/projects/opencamera/files/) - альтернативная камера для видео и фото с множеством настроек и функций, автоопределением лиц
* [Call recorder for Android](https://github.com/riul88/call-recorder-for-android) - автоматическая запись телефонных разговоров
* [CosyDVR](http://cosydvr.esy.es/doku.php) - делает из камеры телефона видеорегистратор, пишет видео в фоне. Версия на [F-Droid](https://f-droid.org/repository/browse/?fdfilter=CosyDVR&fdid=es.esy.CosyDVR), версия для старых Android на [F-Droid](https://f-droid.org/repository/browse/?fdid=com.example.CosyDVR)

###### Навигация
* [OsmAnd](http://download.osmand.net/releases/) - показывает карты OpenStreetMap без интернета
* [SatStat](https://f-droid.org/repository/browse/?fdfilter=satstat&fdid=com.vonglasow.michael.satstat) - показывает найденные спутники, полезно чтобы знать в какой местности какая точность позиционирования

###### Органайзер
* [Timer](https://f-droid.org/repository/browse/?fdfilter=timer&fdid=org.dpadgett.timer) - таймер, много дополнительных функций
* [PalmCalc](https://f-droid.org/repository/browse/?fdfilter=palmcalc&fdid=com.cybrosys.palmcalc) - продвинутый калькулятор, имеет функцию перевода величин в другие, небольшую справку по величинам. Версия на Google Play намного новее: [тут](http://palmcalc.com)
* [Search Light](https://f-droid.org/repository/browse/?fdfilter=search&fdid=com.scottmain.android.searchlight&fdpage=4) - вспышка в качестве фонарика
* [Torchie](https://f-droid.org/repository/browse/?fdid=in.blogspot.anselmbros.torchie) - вспышка в качестве фонарика. Очень удобное включение удерживанием кнопок громкости только в режиме когда телефон блокирован и не работает датчик приближения (телефон в кармане). Поиграйтесь с настройками (**ОСТОРОЖНО** может вызвать такие проблемы, что телефоном вы сможете пользоваться только после удаления этой программы)

###### Интернет
* [K-9 Mail](https://github.com/k9mail/k-9/releases) - почтовый клиент. Для работы с GMail и некоторыми другими сервисами нужно зайти в сервис с браузера и включить возможность доступа программам к почте
* [Firefox](https://ftp.mozilla.org/pub/mobile/releases/) - браузер, может блокировать рекламу и сохранять/открывать страницы одним файлом формата ```.mht```. Больше о его настройке по [ссылке](https://github.com/myBestSoftAndPref/soft/blob/master/src/firefox/android.md)
* [Chromium](https://download-chromium.appspot.com/?platform=Android&type=snapshots) - браузер на основе которого делается Chrome
* [GigaGet Download Manager](https://f-droid.org/repository/browse/?fdfilter=GigaGet&fdid=us.shandian.giga) - менеджер загрузок, может качать в несколько потоков, можно выбрать каталог сохранения
* [Conversations](https://f-droid.org/repository/browse/?fdfilter=conversation&fdid=eu.siacs.conversations) - обмен сообщениями по протоколу XMPP (Jabber), поддерживает стойкое к взлому шифрование OTR на стороне клиента. То есть через него можно абсолютно приватно общаться с другом (для работы нужно зарегистрироваться на любом XMPP сервере)
* [LibreTorrent](https://f-droid.org/repository/browse/?fdfilter=torrent&fdid=org.proninyaroslav.libretorrent) - торрент клиент

###### Справочники
* [QuickDic restored](https://github.com/rdoeffinger/Dictionary/releases) - словарь иностранных слов, работает без интернета
* [QDict](https://github.com/madmanteam/QDict) - словарь, поддерживает формат ```StarDict``` в котором существует очень много словарей
* [Barcode Scanner](https://github.com/zxing/zxing/releases) - сканер штрих кодов, QR кодов и их создание с поиском информации по ним через интернет браузер
* [Moon Phase](https://f-droid.org/repository/browse/?fdfilter=Moon+Phase&fdid=akk.astro.droid.moonphase) - показывает фазу луны
* [Bubble](https://f-droid.org/repository/browse/?fdid=net.androgames.level) - строительный уровень, показывает угол наклона поверхностей на основе датчика гироскоп
* [Unit Converter Ultimate](https://f-droid.org/repository/browse/?fdfilter=converter&fdid=com.physphil.android.unitconverterultimate) - конвертер величин (грамму в пинты, килограммы, футы в метры и так далее)
* [Ruler](https://f-droid.org/repository/browse/?fdfilter=ruler&fdid=org.secuso.privacyfriendlyruler) - на дисплее отображается транспортир и линейка

###### Файлы
* [Ghost Commander](https://sourceforge.net/projects/ghostcommander/files/Releases/) - двух панельный файловый менеджер, есть поддержка zip, WebDav, Box, SFTP, Samba, Google Drive, Dropbox

###### Документы
* [920 Text Editor](https://github.com/jecelyin/920-Text-Editor-old/tree/master/apk) - удобный блокнот, просмотр и редактирование множества форматов, подсветка синтаксисов
* [Cool Reader](https://sourceforge.net/projects/crengine/files/) - удобная читалка для fb2, epub, chm, rtf, doc, html и других форматов, поддерживает множество форматов и opds онлайн каталоги
* [FBReader](https://fbreader.org/FBReaderJ) - не такая удобная, как ```Cool Reader```, но имеет возможность подключать плагины, читать с некоторым трудом .mht файлы и другие уникальные функции
* [Document Viewer](https://f-droid.org/repository/browse/?fdid=org.sufficientlysecure.viewer) - просмотр множества типов документов. [Document Viewer Font Pack](https://f-droid.org/repository/browse/?fdfilter=Document+Viewer&fdid=org.sufficientlysecure.viewer.fontpack) - шрифты для неё
* [VIMTouch](https://f-droid.org/repository/browse/?fdfilter=vim&fdid=net.momodalo.app.vimtouch) - текстовый редактор, подсветка синтаксисов, старается в некоторой степени следовать стилю компьютерного редактора VIM

###### Приватность
* [KeePassDroid](https://github.com/bpellin/keepassdroid/releases) - менеджер паролей KeePass
* [Orbot](https://guardianproject.info/apps/orbot/) - клиент Tor, бесплатная цепочка анонимных прокси

###### Игры

* [RetroArch](http://buildbot.libretro.com/stable/) - эмулятор множества консолей (SEGA, PlayStation и других). Если будут проблемы с интерфейсом - пробуйте старые версии. У этого эмулятора неочевидная настройка джойстика, нужно зайти в настройках в пункт Overlays и выбрать определенный под вашу консоль.
* [PPSSPP](http://www.ppsspp.org/downloads.html) - эмулятор консоли PlayStation Portable

###### Система
* [Rotation Lock + Landscape](https://f-droid.org/repository/browse/?fdfilter=search&fdid=org.cmotc.tools.rotationlockpp&fdpage=4) - кнопка в шторку для блокировки переворота экрана
* [Rotation Manager](https://f-droid.org/repository/browse/?fdfilter=rotate&fdid=com.spydiko.rotationmanager_foss) - управление авто поворотом для каждой программы отдельно
* [Twisted Home Manager](https://f-droid.org/repository/browse/?fdfilter=twisted+home&fdid=com.twsitedapps.homemanager) - менеджер рабочих столов (launcher)
* [ADW.Launcher](https://f-droid.org/repository/browse/?fdfilter=launcher&fdid=org.adw.launcher) - альтернативный легкий рабочий стол (launcher)
* [OS Monitor](https://f-droid.org/repository/browse/?fdfilter=OS+Monitor&fdid=com.eolwral.osmonitor) - показывает информацию о процессах, соединениях, использовании памяти, процессоре и т. д.
* [Hacker's Keyboard](https://github.com/klausw/hackerskeyboard/releases) - полноценная клавиатура с ctrl, стрелками, отображением английских символов на русских клавишах и т.д. Словари языков почему-то есть только в Google Play.
* [DiskUsage](https://f-droid.org/repository/browse/?fdfilter=diskusage&fdid=com.google.android.diskusage) - удобное отображение занимаемого файлами пространства, для удаления ненужных файлов

##### Программы с закрытым кодом

**Предупреждение:** О [Yandex.Store](https://store.yandex.by/). Был случай когда одно из его приложений записывало все окружающие разговоры. С осторожностью относитесь к его программам. После [Google Play](https://play.google.com/store) на сегодня самый большой **официальный** источник программ для Android - это [Amazon Appstore](https://www.amazon.com/getappstore)

###### Источники программ (магазины, репозиторий)
* [Google Play](https://play.google.com/store) - самый большой магазин. Код проходит некоторую автоматическую проверку.
* [Yandex.Store](https://store.yandex.by/) - попытка Yandex сделать аналог [Google Play](https://play.google.com/store). Приложений мало, много поддельных, проверка на вредоносность хуже. Достоверно обновляются и надежны только программы от самого Yandex. Прямая ссылка [тут](https://m.soft.yandex.ru/download/appstore/appstore-android.apk)
* [Amazon Appstore](https://www.amazon.com/getappstore) - магазин от [amazon.com](http://amazon.com), много поддельных программ. Трудно искать оригинальные.
* [1Mobile Market](http://market.1mobile.com/) - **не рекомендуется**. Магазин бесплатных .apk, в магазин загружаются и приложения с Google Play (они отмечены специальным значком). В этом магазине бывают косяки, загруженные программы могут работать с ошибками. Сам магазин доверия не внушает, репутации не имеет. Есть шанс, что он вредоносный или может распостранять вредоносные программы.
* [APKMirror](http://www.apkmirror.com) - **не рекомендуется**. Онлайн сервис через который можно скачать .apk загруженные в него с Google Play. Не имеет репутации, может быть опасен.

###### Интернет
* [Opera](http://www.opera.com/ru/mobile/operabrowser/android) - браузер на основе Chromium, умеет сжимать трафик, есть встроенная слабая встроенная блокировка рекламы, умеет сохранять страницы одним файлов в формате .mht (.mhtml)
* [Yandex.Browser](https://browser.yandex.by/mobile) - браузер на основе Chromium, сжимает трафик
* [Skype](https://play.google.com/store/apps/details?id=com.skype.raider) - видео звонки и чат
* [Viber](https://play.google.com/store/apps/details?id=com.viber.voip) - видео звонки и чат
* [Telegram](https://play.google.com/store/apps/details?id=org.telegram.messenger) - популярный чат, обмен сообщениями
* [WhatsApp Messenger](https://play.google.com/store/apps/details?id=com.whatsapp) - популярный чат, обмен сообщениями

###### Справочники
* [GoldenDict](https://play.google.com/store/apps/details?id=mobi.goldendict.android.free) - словарь. Полностью поддерживает словари форматов Lingvo, Babylon, StarDict, Lingoes и Dictd. Существует одноименная версия с открытым кодом для обычных компьютеров, но для Android версии код закрыт.
	* Подборка словарей Lingvo для русского (перевод с Fr, De, It, Es) **включая** озвучивание слов и толковый словарь (для установки в GoldenDict просто указать каталог словарей в настройках) https://yadi.sk/d/R9KYaEYJ7utB2
* [Sound Meter](https://play.google.com/store/apps/details?id=kr.sira.sound&hl=en) - шумометр, меряет уровень шума. Из-за встроенных фильтров Android подавляющих шум может работать неточно. Таблицу вредности шумов можно найти в интернете, например [тут](http://chchearing.org/noise/common-environmental-noise-levels/)

###### Файлы
* [7Zipper](https://play.google.com/store/apps/details?id=org.joa.zipperplus7) или [7Zipper 2.0](https://play.google.com/store/apps/details?id=org.joa.zipperplus7v2) - архиватор. Распаковка zip, alz, egg, tar, tar.gz, tar.bz2, gz, bz2, rar, jar, 7z, lzh поддержка разделенных ZIP архивов (Z01, Z02 ..., zip.001, zip.002 .. ). Работа с архивами 7z, ZIP. Hex-Viewer. FTP-клиент и сервер.
* [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) - архиватор. Создавать архивы: 7z (7zip), zip, bzip2 (bz2), gzip (gz), XZ, tar; Распаковывать архивы: 7z (7zip), zip, rar, rar5, bzip2, gzip, xz, iso, tar, arj, cab, lzh, lha, lzma, xar, tgz, tbz, Z, deb, rpm, zipx, mtz, chm, dmg, cpio, cramfs, img (fat, ntfs, ubf), wim, ecm, arc (freearc); Просматривать содержимое архивов: 7z (7zip), zip, rar, rar5, bzip2, gzip, xz, iso, tar, arj, cab, lzh, lha, lzma, xar, tgz, tbz, Z, deb, rpm, zipx, mtz, chm, dmg, cpio, cramfs, img (fat, ntfs, ubf), wim, ecm, arc (freearc);
* [Total Commander](https://play.google.com/store/apps/details?id=com.ghisler.android.TotalCommander) - двух панельный файловый менеджер. Может открывать и архивировать zip.

###### Документы
* [WPS Office + PDF](https://play.google.com/store/apps/details?id=cn.wps.moffice_eng) - офис, для .docx, .xls и других форматов
* [Microsoft Office Mobile](https://play.google.com/store/apps/details?id=com.microsoft.office.officehub) - офис, для .docx, .xls и других форматов. Список самих программ от Microsoft (Word, Excel, PowerPoint) есть по этой [ссылке](https://play.google.com/store/apps/dev?id=6720847872553662727)
