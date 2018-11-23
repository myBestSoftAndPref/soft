## Что это?

Минимальны набор дополнений, стилей и настроек для **release** версии **Firefox**.

**ПРЕДУПРЕЖДЕНИЕ!** Я не проверяю код дополнений на сбор статистики и показ рекламы. Дополнения не добавляются на страницу только если они собирают статистику или показывают рекламу слишком нагло. Часть дополнений может открывать свою домашнюю страницу при первом запуске или обновлении.

**Старую версию** этой статьи для старых дополнений на [XUL](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL) для **Firefox 52** [ESR](https://www.mozilla.org/en-US/firefox/organizations/) можно найти [тут](https://github.com/myBestSoftAndPref/soft/blob/54662c153e424389866e991c4946b0fa9f210858/src/firefox/desktop.md) <sub>ссылка пока не будет удалена</sub>
<br>
**Архив некоторых дополнений на xul** для Firefox 52, которые Mozilla видимо удалит со своего сайта [тут](https://github.com/myBestSoftAndPref/soft/tree/master/src/firefox/xul_addon_arch)
<br>
Подборку дополнений для программистов можно найти [тут](https://github.com/myBestSoftAndPref/soft/blob/master/src/firefox/desktop-dev.md)

## Дополнения

[Web ScrapBook](https://addons.mozilla.org/en-US/firefox/addon/web-scrapbook/) - сохраняет страницу одним файлом (изображения, скрипты etc). Для того чтобы это дополнение сохраняло и скрипты JavaScript внутри страниц нужно включить сохранение скриптов в настройках <sub>Скрипты на некоторых сайтах сохраняются не правильно</sub>. Поддерживает формат ```.maff```<sub>С некоторыми ограничениями</sub>. Может сохранять файл с ресурсами как ```.html``` и его можно открыть в других браузерах. Не поддерживает ```.mht``` <sub>в планах разработчика дополнения есть поддержка чтения ```.mht``` файлов</sub>
<br>
[Save Page WE](https://addons.mozilla.org/en-US/firefox/addon/save-page-we/) - сохраняет страницу одним файлом (изображения, скрипты etc). В отличии от [Web ScrapBook](https://addons.mozilla.org/en-US/firefox/addon/web-scrapbook/) ресурсы хранятся в виде base64, поэтому JavaScript внутри страницы (динамические элементы) сохраняет хуже. В некоторых случаях может сработать лучше чем [Web ScrapBook](https://addons.mozilla.org/en-US/firefox/addon/web-scrapbook/).
<br>
[SingleFile](https://addons.mozilla.org/en-US/firefox/addon/single-file/) - сохраняет страницу одним файлом (изображения, скрипты etc)
<br>
[Tile Tabs WE](https://addons.mozilla.org/en-US/firefox/addon/tile-tabs-we/) - может делить окно браузера на несколько частей, чтобы просматривать несколько сайтов одновременно. На деле новое API не позволяет дополнениям разграничивать окно, поэтому открываются новые окна, что очень неудобно.
<br>
[Tree Style Tab](https://addons.mozilla.org/ru/firefox/addon/tree-style-tab) - вкладки вертикально в виде дерева.
<br>
[Tree Tabs](https://addons.mozilla.org/en-US/firefox/addon/tree-tabs/) - древовидный вид вкладок и группы вкладок. Из отличий от других подобных дополнений - очень удобное встроенное управление группами вкладок.
<br>
[Drag-Select Link Text](https://addons.mozilla.org/en-US/firefox/addon/drag-select-link-text/) - позволяет выделять текст ссылок без зажатия ```Alt```
<br>
[Grab Any Media](https://addons.mozilla.org/en-US/firefox/addon/grab-any-media/) - поиск ссылок на audio и video файлы на странице (слабый аналог FlashGot)
<br>
[uBlock Origin](https://addons.mozilla.org/ru/firefox/addon/ublock-origin) <sub>(лучшая замена для AdBlock Plus)</sub> - блокировка рекламы и сбора статистики
<br>
[Greasemonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey) или [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) - менеджер пользовательских скриптов javascript.
<br>
[Google search link fix](https://addons.mozilla.org/en-US/firefox/addon/google-search-link-fix/) - чистит ссылки в поисковиках Google, Yandex от переадресации. На деле приватность не защищает, но убирает раздражающую переадресацию и переход по ссылке станет быстрее.
<br>
[MuteTab](https://addons.mozilla.org/en-US/firefox/addon/mutetab/) - можно отключить звук во всех вкладках по умолчанию и включать только вручную
<br>
[Iridium](https://addons.mozilla.org/ru/firefox/addon/particle-iridium/) - настройка youtube, установка качества по умолчанию, отключение авто воспроизведения и другое
<br>
[Decentraleyes](https://addons.mozilla.org/ru/firefox/addon/decentraleyes/) - встраивает набор некоторых популярных javascript библиотек в Firefox, так что при открытии страниц библиотеки не загружаются снова из интернета и не происходит проверки на их актуальность (нету лишних запросов в интернет). Экономит трафик, защищает от отслеживания, ускоряет загрузку страниц.
<br>
[NoSquint Plus](https://addons.mozilla.org/ru/firefox/addon/nosquint-plus) или [Zoom Page WE](https://addons.mozilla.org/en-US/firefox/addon/zoom-page-we/) - удобное управление масштабом страницы и отдельно масштабом текста. Умеет подгонять страницу по ширине окна (ужимать).
<br>
[Double-click Image Downloader](https://addons.mozilla.org/en-US/firefox/addon/double-click-image-download/) - быстрое сохранение изображений (по клику, перетаскиванию, сочетанием клавиш). Можно сохранить все изображения на странице.
<br>
[NoScript](https://addons.mozilla.org/ru/firefox/addon/noscript) и [uMatrix](https://addons.mozilla.org/en-US/firefox/addon/umatrix/) <sub>не рекомендуется обычным пользователям, излишне сложно</sub> - можно отключить видео/аудио на сайтах, полезно например в дороге при дорогом и медленном трафике сотовых операторов.
<br>
[Chrome Store Foxified](https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/) - можно устанавливать некоторые расширения для Chrome в Firefox (из Chrome Store)<br>
[Foxy Gestures](https://addons.mozilla.org/en-US/firefox/addon/foxy-gestures/) и [Gesturefy](https://addons.mozilla.org/en-US/firefox/addon/gesturefy/) - можно вешать действия на жесты.
<br>
[Print Edit WE](https://addons.mozilla.org/en-US/firefox/addon/print-edit-we/) - сохранение страницы как .PDF, редактирование перед печатью и настройки параметров печати.
<br>
[Snap Links Plus](https://addons.mozilla.org/en-US/firefox/addon/snaplinksplus/) - можно прямоугольником выделить ссылки и так открыть, копировать, добавить в закладки группу ссылок.
<br>
[Minimap Scroller](https://addons.mozilla.org/en-US/firefox/addon/minimap-scroller-sidebar/) - отображает сайт в виде mini map (уменьшенной копии), так что его можно увидеть целиком не прокручивая страницу.
<br>
[SiteDelta Watch](https://addons.mozilla.org/en-US/firefox/addon/sitedelta-watch/) и [SiteDelta Highlight](https://addons.mozilla.org/en-US/firefox/addon/sitedelta-highlight/) - мониторинг сайтов на изменения, подсветка измененных областей и др. функции.
<br>
[Temporary Containers](https://addons.mozilla.org/ru/firefox/addon/temporary-containers/)
или [Firefox Multi-Account Containers](https://addons.mozilla.org/ru/firefox/addon/multi-account-containers/) - создает изолированные контейнеры для вкладок. Можно в каждом из контейнеров войти на один и тот же сайт под разными именами. Дополнение имеет ограничение, история посещений (отпечаток браузера) не полностью изолированна, как это сделано в "приватный режим", но и этого должно быть достаточно <sub>каждая будет иметь свою копию **cookies** и **localStorage**</sub>
<br>
[FoxyProxy Standard](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/) - удобное управление настройками proxy
<br>
[Domain in Title](https://addons.mozilla.org/en-US/firefox/addon/domain-in-title/) - добавляет адрес страницы в заголовок окна и всплывающую подсказку с заголовком окна
<br>
[View Page Archive & Cache](https://addons.mozilla.org/ru/firefox/addon/view-page-archive)
или [Resurrect Pages](https://addons.mozilla.org/ru/firefox/addon/resurrect-pages) - можно получить ссылки на страницу в веб архиве и кэше поисковиков (например если страница удалена, то она может быть просмотрена из архива или кэша).
<br>
[Parent Path](https://addons.mozilla.org/en-US/firefox/addon/parent-path/) - быстрый переход по частям ссылки в адресной строке. Удобно для перехода на главную страницу
<br>
[Tab Reloader (page auto refresh)](https://addons.mozilla.org/en-US/firefox/addon/tab-reloader/)
или [ReloadMatic: Automatic Tab Refresh](https://addons.mozilla.org/en-US/firefox/addon/reloadmatic/)
или [Auto Reload Tab](https://addons.mozilla.org/en-US/firefox/addon/auto-reload-tab) - позволяет установить вкладкам таймер по которому они будут перезагружаться
<br>
[Page Hacker](https://addons.mozilla.org/en-US/firefox/addon/page-hacker/) - позволяет редактировать страницу прямо в Firefox
<br>
[Copy Link Text](https://addons.mozilla.org/ru/firefox/addon/copy-link-text-webextension/) - можно копировать текст ссылки
<br>
[Screengrab!](https://addons.mozilla.org/en-US/firefox/addon/screengrab-fix-version/) - более функциональное создание скриншотов, чем встроенный инструмент. Может создавать скриншоты в форматах ```png```, ```jpeg``` (с указанием качества), ```bmp```; может автоматически загружать их на различные ресурсы, именовать по шаблону, имеет свой собственный алгоритм получения скриншота с какими-то преимуществами
<br>
[Swift Selection Search](https://addons.mozilla.org/en-US/firefox/addon/swift-selection-search/) - при выделении текста на странице появляется всплывающая подсказка через которую можно искать выделенный текст в разных поисковых системах (google, yandex, ...). Внутрь дополнения можно добавлять свои поисковые системы или загружать из файла профиля (настроек) Firefox: файл search.json.mozlz4
<br>
[Save In…](https://addons.mozilla.org/en-US/firefox/addon/save-in/) - пункт контекстного меню (по правой кнопке мыши) который позволяет сохранять сразу в предопределенный каталог
<br>
[Open in Browser](https://addons.mozilla.org/en-US/firefox/addon/open-in-browser/) - дополнительное меню при сохранении файлов, позволяет открывать файлы внутри браузера (например можно проиграть видео внутри браузера встроенным плеером вместо его скачивания)
<br>
[mozlz4-edit](https://addons.mozilla.org/ru/firefox/addon/mozlz4-edit/) - позволяет добавлять поисковые системы Firefox вручную. Сам список поисковых систем в каталоге профиля Firefox, файл: search.json.mozlz4. <sub>После редактирования нужно перезапустить Firefox</sub>. Может просматривать файлы оканчивающиеся на "lz4" (backup закладок, сессий, отчетов об ошибках и др.)
<br>
[Awesome RSS](https://addons.mozilla.org/en-US/firefox/addon/awesome-rss/) - иконка RSS и Atom в адресной строке
<br>
[Exodify](https://addons.mozilla.org/en-US/firefox/addon/exodify/) - для сайта Google Play, показывает сервисы которым отправляет статистику конкретное приложение
<br>
[Ageless for YouTube](https://addons.mozilla.org/en-US/firefox/addon/ageless/) - снимает ограничение роликов youtube по возрасту
<br>
[Bookmark Tab Here](https://addons.mozilla.org/en-US/firefox/addon/bookmark-tab-here/) - удобное добавление закладок через меню по правой кнопке мыши на или в каталоге закладок
<br>
[View Image](https://addons.mozilla.org/ru/firefox/addon/view-image/) - для сайта Google, добавляем в просмотр картинок на странице поиска картинок кнопку по которой можно посмотреть полную версию картинки
<br>
[InlineDisposition Reloaded ](https://addons.mozilla.org/ru/firefox/addon/inlinedisposition-reloaded/) - делает все файлы вместо скачиваемых просматриваемыми, например текст или видео вместо скачивания будут или попытаются открыты в браузере
<br>
[Video Speed Controller](https://addons.mozilla.org/ru/firefox/addon/videospeed/) - добавляет дополнительные горячие клавиши (hot keys) для управление воспроизведением видео на сайтах
<br>
[Session Boss](https://addons.mozilla.org/ru/firefox/addon/session-boss/) - сохранение и восстановление сессий (вкладок)
<br>
[Panorama View](https://addons.mozilla.org/en-US/firefox/addon/panorama-view/) - визуальные группы вкладок, для работы на странице ```about:config``` установить ```extensions.webextensions.tabhide.enabled = true```, это временное решение, с выходом новых версий браузеров это опция будет включена по умолчанию.
<br>
[FoxyTab](https://addons.mozilla.org/en-US/firefox/addon/foxytab/) - набор операций для вкладок, доступных через меню вкладок: закрыть дубли, закрыть слев, перезагрузить каждые N сек, переместить, сортировать по параметру и т.д.
<br>
[Undo Close Tab](https://addons.mozilla.org/en-US/firefox/addon/undoclosetabbutton/) - кнопка открытие недавно закрытых вкладок и список недавно закрытых вкладок по клику правой кнопкой мыши
<br>
[Change Timezone (Time Shift)](https://addons.mozilla.org/en-US/firefox/addon/change-timezone-time-shift/)
или
[Spoof Timezone](https://addons.mozilla.org/en-US/firefox/addon/spoof-timezone/) - смена часового пояса браузера, который видят сайты
<br>
[Floating Player](https://addons.mozilla.org/en-US/firefox/addon/floating-player/) - по нажатию кнопки видео со страницы открывается в отдельном окне браузера
<br>
[Video DownloadHelper](https://addons.mozilla.org/en-US/firefox/addon/video-downloadhelper/) - популярное дополнение для скачивание видео с различных сайтов. Возможна подгрузка рекламы или сбор статистики <sub>упоминаю их потому что дополнение популярно</sub>. Но как вариант может понадобиться.
<br>
[Default Bookmark Folder](https://addons.mozilla.org/ru/firefox/addon/default-bookmark-folder) - можно установить каталог для закладок по умолчанию, добавление закладок в адресную строку, позицию закладки при добавлении (верх/низ каталога) etc
<br>
[Copy PlainText](https://addons.mozilla.org/en-US/firefox/addon/copy-plaintext) - добавляет в контекстное меню пункт для копирования текста без форматирования
<br>
[Discard Tab](https://addons.mozilla.org/en-US/firefox/addon/discard-tab/) - добавляет пункт меню в контекстное меню вкладки для выгрузки вкладки из памяти
<br>
[Tab Unloader](https://addons.mozilla.org/en-US/firefox/addon/tab-unloader-we/) - добавляет подпункт в контекстное меню вкладки для групповых действий с выгрузкой вкладок
<br>
[Close Tabs to the Left](https://addons.mozilla.org/en-US/firefox/addon/close-tabs-left/) - добавляет в контекстное меню вкладок пункт "закрыть все вкладки слева"

## Дополнения для которых НЕТ аналога в Firefox 57+ (с переходом на WebExtensions API)

1. [FindBar Tweak](https://addons.mozilla.org/ru/firefox/addon/findbar-tweak) - удобный поиск по странице с отметками найденного на полосе прокрутки.
2. [DownThemAll!](https://addons.mozilla.org/en-US/firefox/addon/downthemall/) - менеджер загрузок, хорошо интегрирован с Firefox и может качать файлы доступные только авторизованным пользователям. Может качать в несколько потоков. Дополнение к нему [DownThemAll! AntiContainer](https://addons.mozilla.org/ru/firefox/addon/downthemall-anticontainer/) позволяет скачивать файлы с сайтов, которые не дают прямых ссылок и скачиваются только браузером.
3. [Dictionary Switcher](https://addons.mozilla.org/en-uS/firefox/addon/dictionary-switcher/) - индикатор текущего словаря, переключение (автоматическое или нет) и другие параметры.
4. [FlashGot Mass Downloader](https://addons.mozilla.org/ru/firefox/addon/flashgot/) - поиск ссылок на видео, файлы и интеграция с любым менеджером загрузок

## Словари и локализации

[Dictionaries and Language Packs](https://addons.mozilla.org/en-US/firefox/language-tools/) - официальные словари и локализации <sub>Для старых версий Firefox на странице есть кнопка "просмотреть все версии"</sub>
<br>
[Объединённый словарь русской орфографии](https://addons.mozilla.org/en-US/firefox/addon/unified-russian-english-spell/) - совмещенный словарь англ. + рус. <sub>При выборе словаря (клик правой кнопкой мыши на поле ввода) этот словарь имеет название "русский" хотя проверяет на двух языках сразу.</sub>

## Программы (замена дополнений, которые невозможно реализовать на WebExtensions API)

* [ShareX](https://getsharex.com/downloads/) (Windows) - скриншоты, запись экрана (в том числе в gif), линейка, выбор цвета, встроенный редактор скриншотов и д.р.
* [Spectacle](https://www.kde.org/applications/graphics/spectacle/) (Kubuntu) - скриншоты <sub>чтобы сделать скриншот всплывающих окон нужно поставить задержку в настройках и во время задержки вывести всплывающее окно</sub>
* [Flameshot](https://github.com/lupoDharkael/flameshot) (Ubuntu) - скриншоты, с встроенными инструментами для редактирования
    * Для интеграции **flameshot** в систему в настройках клавиш нужно удалить связь клавиши **print** с встроенной программой скриншотов. И назначить команду **flameshot gui** для скришота области экрана, и команду **flameshot full** для скришота всего экрана.
* [peek](https://github.com/phw/peek) (ubuntu) - запись экрана в виде gif
* [SimpleScreenRecorder](http://www.maartenbaert.be/simplescreenrecorder/) (ubuntu) - запись экрана
* [KRuler](https://www.kde.org/applications/graphics/kruler/) (Kubuntu) - линейка
* [Color Picker](https://userbase.kde.org/Plasma/ColorPicker) и [KColorChooser](https://www.kde.org/applications/graphics/kcolorchooser/) (Kubuntu) - выбор цвета
* [qBittorrent](https://www.qbittorrent.org) - торрент клиент
* [HTTrack](https://www.httrack.com) - копирование сайтов целиком
* [FileZilla](https://filezilla-project.org) - клиент FTP
* [Pidgin](https://pidgin.im) - мессенджер, поддерживает многие протоколы, особенно с [плагинами](https://developer.pidgin.im/wiki/ThirdPartyPlugins) <sub>(Skype чат, шифрование на стороне пользователей [OTR](https://en.wikipedia.org/wiki/Off-the-Record_Messaging), Facebook Chat, WhatsApp etc)</sub>
* [Thunderbird](https://www.thunderbird.net) - почтовый клиент
* [uGet](http://ugetdm.com/downloads) <sub>(не путать с неудобной kGet, uGet свободно работает и в KDE)</sub> - менеджер загрузок

## Bookmarklets

Это закладка с JavaScript внедряющимся на страницу и выполняющимся в момент нажатия на закладку.
Для создания bookmarklet нужно создать закладку со скриптом в строке адреса (поле location):
```javascript
javascript:void((function () {
	alert('test');
})());
```
Во время создания код bookmarklet преобразуется в [URI Encoding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI). Различные функции JavaScript связанные с переадресацией страницы могут быть запрещены политиками сайта, так что заменить расширения в этом плане не получится, так как подобные функции будут работать только на части сайтов.

[marklets.com](http://marklets.com/) - репозитории готовых bookmarklets, код не проверяет никто.

## Официальные и сторонние сборки Firefox

* [Firefox](https://ftp.mozilla.org/pub/firefox/) - **официальная**, обычный Firefox
* [Firefox EME](https://ftp.mozilla.org/pub/firefox/) - **официальная**, без автозагрузки плагинов с закрытым кодом (например, встроенных кодеков для видео, может не играть некоторое видео)
* [Firefox ESR](https://ftp.mozilla.org/pub/firefox/) - **официальная**, стабильная версия, обновляется почти раз в год
* [Tor Browser](https://www.torproject.org/projects/torbrowser.html.en) - **официальная** (совместно с Mozilla), максимально анонимная сборка с встроенным постоянным подключением через анонимные прокси
* [Pale Moon](https://www.palemoon.org/) - по утверждению разработчика вырезан сбор статистики, сборка собрана с дополнительными оптимизациями, есть оптимизации для CPU Intel Atom. Имеет странности в лицензии. Проект планирует сохранить поддержку XUL (то есть старых дополнений с богатым функционалом) и развивать ее дальше.
* [Waterfox](https://www.waterfoxproject.org/) - аналогично Pale Moon, со своими оптимизациями
* [IceCat](http://ftp.gnu.org/gnu/gnuzilla/) - **официальная** (от проекта gnu), с удаленными следящими опциями, на деле не очень качественная, лучше использовать TorBrowser
* [Firefox Developer Edition](https://www.mozilla.org/ru/firefox/developer/) - **официальная**, альфа версия Firefox с дополнительными инструментами для разработчика и багами
* [Firefox Unbranded Builds](https://wiki.mozilla.org/Add-ons/Extension_Signing#Unbranded_Builds) - **официальная**, сборка Firefox без фирменных знаков Mozilla в которую можно устанавливать неподписанные дополнения, нету авто обновления.
* [SeaMonkey](https://www.seamonkey-project.org/) - **официальная**, имеет старомодный интерфейс и дополнительные настройки, медленно развивается и отстает от Firefox.

## Настройки для удобства

**Note 1:** Если вы ищите настройки Firefox и находите серьезно выглядящие списки на ```github``` (в том числе по ссылкам из этой статьи), то **НЕ ОТНОСИТЕСЬ К НИМ С ДОВЕРИЕМ**. Доверять описанию опций можно только с сайтов ```mozilla.com``` и ```bugzilla.mozilla.org```. Нужно помнить, что смотреть нужно ```английские``` версии этих статей, потому что русские версии дополняются хуже.

**Note 2:** Вам следует знать, что настройки по умолчанию для ```release``` версии Firefox и для ```Beta/Alpha/Developer``` версий различаются. Например, в ```Developer``` версии Firefox настройка ```toolkit.telemetry.enabled``` заблокирована от изменений и изменить ее можно только через [AutoConfig](https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig). Эта настройка включает в Firefox сбор дополнительной статистики **только если сбор телеметрии включен** в стандартных настройках и тут дана как пример.

**Note 3:** Вам следует знать, что в Firefox есть специальные файлы и каталоги настройки это **общие настройки** для всех запущенных версий Firefox. Для **linux** систем это каталоги ```/usr/lib/firefox```, ```/usr/lib/firefox-addons```; для **Windows** систем это реестр. Подробное описание этих настроек вы можете найти в документации Mozilla по ссылка на списки настроек ниже.

Скопировать файл [user.js](user.js) с моими настройками для удобства в **каталог профиля Firefox** ```profile/user.js``` и перезапустить Firefox. В нем отключены некоторые опции, что может сломать некоторые сайты, но ничего особо критичного.
<br>
Для Firefox **для Android** можно менять только вручную или получить [root права](https://4pda.ru/2013/05/11/99836/).

Скопировать файл [policies.json](policies.json) с настройками политик по пути ```distribution/policies.json``` в **каталог установленного Firefox**<sub>(не профиля)</sub> и перезапустить Firefox. Этот вариант настроек отключает авто проверку обновлений. Чтоб обновить Firefox файл на вермя обновления нужно удалять и перезапускать Firefox.
<br>
```policies.json``` это просто еще один вид настроек, начиная с **Firefox 63** только через них можно отключить проверку обновлений. В этих настройках проверка обновлений отключена, если хотите сгенерировать свои настройки используйте [Enterprise Policy Generator](https://addons.mozilla.org/firefox/addon/enterprise-policy-generator/). Обновляемый список опций политик можно найти [тут](https://github.com/mozilla/policy-templates/blob/master/README.md)

[Custom CSS tweaks for Firefox 57+](https://github.com/Aris-t2/CustomCSSforFx) - набор стилей и настроек Firefox, некая замена старым дополнения для настройки, новое API не позволяет дополнениям менять настройки, поэтому копировать стили и настройки придется вручную.

Если хотите больше настроек:
1. Неофициальная подборка настроек - [pyllyukko/user.js](https://github.com/pyllyukko/user.js)
2. Неофициальная подборка настроек, развивается быстрее всего [ghacks-user.js](https://github.com/ghacksuserjs/ghacks-user.js) и [ghacks-user.js/wiki](https://github.com/ghacksuserjs/ghacks-user.js/wiki)
3. Еще один тип настроек Firefox, которые не меняется ни через ```user.js```, ни через ```distribution/policies.json``` это [AutoConfig](https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig)
4. Статья со списком некоторых опция сбора телеметрии - [Telemetry](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/index.html)
и отдельно [Telemetry » Internals](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/index.html)
5. Еще одна статья о телеметрии - [How to stop Firefox from making automatic connections](https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections)
6. [Список русского mozilla-russia форума](https://forum.mozilla-russia.org/viewtopic.php?id=36226)
7. [mozillazine.org](http://kb.mozillazine.org/Firefox_:_FAQs_:_About:config_Entries) - **огромный** сборник настроек в виде wiki

## Что нужно знать о приватности (сборе статистики компанией Mozilla)

В **Mozilla Firefox** встроены функции для сбора статистики. Она собирается и явно, и неявно. Собираются данные о окружающих Wi-Fi точках вокруг, гео данные и многие другие. Искать информацию о них долго и составлять инструкцию по их отключению долго. Универсального решения нет. Поэтому в данном блоге они не описаны. Самый простой вариант это использовать **Tor Browser**, но в нем отключена часть функций двойного назначения, они и могут собирать статистику, и нужны для работы некоторых функций сайтов. Поэтому использовать его обычным образом трудно.<br>
**Google Chrome** собирает намного больше статистики, и присваивает каждому пользователю уникальный номер. Тоже касается и Chromium, но в меньшей степени. Если нужно использовать Chromium можете оценить неофициальный проект [ungoogled-chromium](https://github.com/Eloston/ungoogled-chromium) делающий сборки Chromium с вырезанным сбором статистики.

## Управление

**Обратите внимание на эту подборку!** Некоторые сочетания клавиш заменяют функции дополнений [официальной странице справки для Hot Keys](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly?redirectlocale=en-US&as=u&redirectslug=Keyboard+shortcuts&utm_source=inproduct)
<br>
**Note!** Некоторые дополнения могут блокировать или менять стандартные сочетания клавиш.

## FAQ

**Q** Почему в английской версии Firefox видны английские сайты? Почему я вижу англо язычные версии сайтов?  
**Q** Как сделать русские сайты в английской версии Firefox?  
**A** При загрузке Firefox передает серверу список языков вашей версии Firefox. На ее основе делается выбор версии языка сайта. Изменить язык можно на странице ```about:config```. Для русского языка на сайтах установить: ```intl.accept_languages``` > ```ru-RU, ru, en-US, en```. Для английского языка: ```en-US, en```

**Q** Как запустить отдельный профиль Firefox  
**A** Командой ```"c:\firefox.exe" -no-remote -profile "d:\<путь_к_профилю>\myProfile"```

**Q** (**для Ubuntu 18.04**) Как изменить иконку Firefox на панели? Как назначить каждому профилю Firefox свой ярлык?
<br>
**A** Для этого нужно создать пару файлов ```ярлык``` и ```иконка```.
После этого все ярлыки указывающие в поле ```Icon``` имя ```иконки``` созданного ```ярлыка``` будут иметь свою иконку не только на ярлыке, но и на панели.
<br>
1. Возьмите иконку которую хотите в формате ```svg```, ```png```, ```xmp``` <sub>(это как минимум, возможно поддерживаются и другие)</sub>. Поместите эту иконку в ```/usr/share/pixmaps/```. В имени этой иконки не используйте заглавных букв <sub>(возможно с заглавными буквами все ОК)</sub>. **Для примера** пусть имя иконки будет ```firefoxsocial.svg```.
2. Создать ярлык (текстовый файл) и поместить в каталог ```/usr/share/applications/```. **Для примера** пусть имя ярлыка будет ```firefoxsocial.desktop```. Содержимое ярлыка будет примерно таким:
    *   ```
            [Desktop Entry]
            Version=1.0
            Name=firefoxSocial
            Exec=firefox -no-remote -profile /home/user/firefoxSocialProfile
            Terminal=false
            Type=Application
            Icon=firefoxsocial
            Categories=Application
            StartupNotify=true
        ```
    * Поле ```Icon=``` в ярлыке содержит имя без расширения файла после точки иконки из каталога ```/usr/share/pixmaps/``` (не путь, а имя!)
    * Поле ```Type=Application``` обязательно
    * Поле ```Exec=``` в случае с Firefox содержит параметры ```-no-remote -profile /home/user/firefoxSocialProfile``` после команды на запуск программы, эти параметры указывают путь к профилю Firefox ```/home/user/firefoxSocialProfile```
3. Теперь создайте на ```Рабочем столе``` любой ярлык, откройте его текстовым редактором (```клик правой кнопкой мыши на ярлыке``` => ```Открыть с``` => ```выберите текстовый редактор```). В параметре ```Exec=``` укажите путь к профилю ```Exec=firefox -no-remote -profile /home/user/firefoxSocialProfile```
4. Вообще в пункте ```3``` можно просто в свойствах ярлыка из каталога ```/usr/share/applications/``` (не ярлыка рабочего стола!) указать путь к иконке в виде имени этой иконки из каталога ```/usr/share/pixmaps/```. Пример с полем ```Exec``` дан для наглядности.
5. **NOTE!** В ```Ubuntu``` есть кэш иконок. Если у вас **не сработал** этот метод, то дело в кэше иконок и нужно разбираться с ним. Если вы назначили способом описанным выше одну иконку, а потом поменяли ее изменения могут не отобразиться потому что иконка закэширована. Проще всего переименовать иконку. Простого способа очистить кэш иконок я не нашел. **Заметьте!** Хотя без ярлыка в ```/usr/share/applications/``` иконка отображаться не будет ярлык всеравно может иметь любое имя. А в поле ```Icon=``` ярлыка рабочего стола указывается имя иконки (не ярлыка из ```/usr/share/applications/``` !!!). В том числе актуально для ярлыка рабочего стола.
6. **NOTE!** Права на доступ для файлов в каталогах ```/usr/share/pixmaps/``` и ```/usr/share/applications/``` нужно установить аналогично другим файлам в тех же каталогах (владелец и группа ```root```, права на запись и запуск только у владельца, у остальных пользователей и групп права только на чтение, права на запуск иконки нет)

**Q** **(для Ubuntu)** Установка и обновление Firefox не из репозитория Ubuntu, а с сайта Mozilla <br>
**A** Это рекомендуется пользователям Ubuntu. На данный момент обновления в Ubuntu могут задерживаться на несколько дней. Не устанавливайте Firefox из snap в Ubuntu, snap имеет проблемы с отображением курсора и отключением неконтролируемого авто обновления. <br>
1. Названия ```my_firefox``` и ```my_firefox_profile``` можно заменить на что угодно. Имя пользователя ```<user_name>``` заменить на свое.
2. [Качаем Firefox](https://www.mozilla.org/en-US/firefox/new/)
3. Распаковываем в
    ```
    /opt/my_firefox
    ```
4. Создаем ссылку
    ```
    sudo ln -s /opt/my_firefox/firefox /usr/bin/my_firefox
    ```
5. Создаем каталог профиля
    ```
    /home/<user_name>/my_firefox_profile
    ```
6. Запускаем и указываем профиль (чтобы не затереть стандартный):
    ```
    my_firefox -no-remote -profile /home/<user_name>/my_firefox_profile
    ```
7. Чтобы обновить из меню "О программе", а не скачиванием и заменой Firefox целиком запускаем firefox через sudo:
    1. Возможно это менее безопасный способ чем замена файлов вручную или обновление через системные инструменты!
    2. Скачайте [скрипт](https://github.com/myBestSoftAndPref/soft/tree/master/src/firefox/update-firefox-as-sudo.sh)
    3. Закройте запущенный Firefox
    4. В свойствах файла в любом файловом менеджере поставьте право на запуск. <sub>(при этом скрипт должен быть сохранен на диск с файловой системой поддерживающей права доступа, например ```ext4```)</sub>.
    5. Запустите командой: <sub>(скрипт работает и для Thunderbird)</sub>
        * ```/home/<user_name>/update-firefox-as-sudo.sh /opt/my_firefox/firefox```
    6. Теперь зайдите в меню ```О программе``` и обновите. Для обновления Firefox будет создан временный профиль, который авто удалится после закрытия Firefox. Если вы используете файл политик ```distribution/policies.json```, то он будет временно отключен <sub>(его имя будет изменено)</sub> чтобы обновить Firefox в случае, если политика запрещает обновление.

**Q** Как добавить в Firefox открытие ```magnet``` ссылок на торренты.
<br>
**A** Иногда Firefox не добавляет связи программ с ```magnet``` ссылками. Нужно добавить вручную:
<br>
1. Открыть страницу ```about:config```
2. Создать опцию ```network.protocol-handler.expose.magnet``` типа ```boolean``` (```логическое```) с значением ```false```

**Q** Дополнения не работают на страницах сайта [https://mozilla.com](https://mozilla.com). Как заставить их работать на этих сайтах?
<br>
**A** Работа дополнений на этих сайтах отключена в целях безопасности. Для включения работы дополнений на этих сайтах:
<br>
1. Открыть страницу ```about:config```
2. Создать опцию ```privacy.resistFingerprinting.block_mozAddonManager``` типа ```boolean``` (```логическое```) с значением ```true```
3. Открыть страницу ```about:config?filter=extensions.webextensions.restrictedDomains``` удалить все значения данной опции (оставить пустую строку)

**Note!** В некоторых дополнениях есть проверка на активацию дополнения для сайт [https://mozilla.com](https://mozilla.com). Даже с опцией выше такие дополнения могут отказаться работать на [https://mozilla.com](https://mozilla.com), в этом случае нужно писать разработчику дополнения, чтобы он исправил это и позволил дополнению работать на [https://mozilla.com](https://mozilla.com)

**Q** Как сменить локализацию Firefox? Как изменить язык интерфейса Firefox?
<br>
**A**
Установите со страницы [Dictionaries and Language Packs](https://addons.mozilla.org/en-US/firefox/language-tools/) нужную локализацию <sub>Для старых версий Firefox на странице есть кнопка "просмотреть все версии"</sub>
<br>
На странице ```about:config``` изменить значение ```general.useragent.locale``` поставить значение 1) ```en-US``` - для английского языка или
2) ```ru-RU``` - для русского языка.
<br>
При этом параметр ```intl.locale.matchOS``` должен стоять в ```false```

**Q** Команда ```-no-remote``` не работает. Команда ```-profile``` не работает. Появляется сообщение ошибки, что ```Firefox``` или ```Thunderbird``` уже запущен. Английский вариант: ```Firefox is already running, but is not responding...```.
<br>
**A** Причина в старом [баге Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=382477). Возможно баг воспроизводится только для Linux систем. Есть [обходное решение](https://bugzilla.mozilla.org/show_bug.cgi?id=382477#c2) (я его пока не пробовал)

**Q** **(Для Ubuntu 18.04)** Как удалить Firefox? Это может быть нужно, если вы хотите заменить Firefox из репозитория Ubuntu на версию из другого репозитория, snap, flatpak или AppImage.
<br>
**A** Выполните команды для удаления:
```
sudo apt purge firefox xul-ext-ubufox firefox-locale-en
sudo rm -rf /usr/lib/firefox
sudo rm -rf /usr/lib/firefox-addons
```
Если у вас кроме английского установлен и другой язык, то кроме ```firefox-locale-en``` вам придется удалить и пакет для вашего языка.
