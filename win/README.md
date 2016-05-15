# Читай меня

Список программ и ссылок под Windows и wine.
Преимущество отдано свободному, проверенному, популярному софту.
Программы только бесплатные или с пробными периодами.
Это личные заметки.

## Среды выполнения и библиотеки

Программы нужные для выполнения других программ.

#### Среды

* JDK и JRE от ORACLE.
http://www.oracle.com/technetwork/java/javase/downloads/index.html
	* Для нормальной установки добавить переменные среды:
	```
		В конец Path добавить: %JAVA_HOME%\bin;%JDK_HOME%\bin;%JRE_HOME%\bin
		
		Создать новые переменные среды:
		JAVA_HOME = c:\Program Files\Java\jdk1.8.0_77
		JDK_HOME = c:\Program Files\Java\jdk1.8.0_77
		JRE_HOME = c:\Program Files\Java\jre1.8.0_77
	```
* python 2.7 https://www.python.org/download/releases/2.7/
	* библиотека, для графических http://www.wxpython.org/
* vcredit (Visual Studio Runtime)
	* Microsoft Visual C++ 2008 Redistributable Package (x86) https://www.microsoft.com/en-us/download/details.aspx?id=29
	* Microsoft Visual C++ 2008 Redistributable Package (x64) https://www.microsoft.com/ru-ru/download/details.aspx?id=15336
	* Visual C++ для Visual Studio 2013  https://www.microsoft.com/ru-RU/download/details.aspx?id=40784

#### Кодеки

* K-Lite Codec Pack - сборка кодеков http://www.codecguide.com/download_kl.htm

## Программирование

#### IDE

* Eclipse IDE универсальная среда, преимущественно для Java https://www.eclipse.org/downloads/
* Spring Tool Suite - IDE на основе Eclipse от проекта Spring https://spring.io/tools/sts
* NetBeans IDE универсальная, преимущественно для Java https://netbeans.org/downloads/
* Android SDK - IDE и утилиты для разработки под Android https://developer.android.com/sdk/index.html
* MySQL Workbench - разработка SQL баз данных для MySQL http://dev.mysql.com/downloads/workbench/
* HeidiSQL - разработка SQL баз данных http://www.heidisql.com/download.php
* Qt Creator - среда программирования на C/C++ и Qt,
в поставку входят библиотеки и компиляторы gcc или VS
https://www.qt.io/download-open-source/
* http://x64dbg.com - open source дебагер, отладчик программ в ассемблере?
* IntelliJ IDEA - среды для Java, код открыт только для версии без поддержки Java EE
https://www.jetbrains.com/idea/

#### Контроль версий

* git - клиент для git, внутри также есть консольный ssh https://git-scm.com/downloads
* TortoiseSVN - GUI под SVN для Windows (в контекстном меню) https://tortoisesvn.net/downloads.html
* TortoiseGit - GUI под Git для Windows (в контекстном меню)  https://tortoisegit.org/

#### Сборщики

* maven - сборщик и репозиторий библиотек для java https://archive.apache.org/dist/maven/binaries/
	* Для нормальной установки добавить переменные среды:
	```
		В переменную Path в конец добавить: %M2_HOME%\bin
	
		Создать переменные среды:
		M2_HOME = d:\apache-maven-3.2.2
		MAVEN_HOME = d:\apache-maven-3.2.2
	```
* ant - сборщик с уклоном в Java https://archive.apache.org/dist/ant/binaries/
	* Для нормальной установки добавить переменные среды:
	```
		В переменную Path в конец добавить: %ANT_HOME%\bin
		
		Создать переменные среды:
		ANT_HOME = C:\apache-ant-1.9.4
	```

#### Локальные сервера

* XAMPP - сборка apache/mysql/perl https://www.apachefriends.org/download.html
* tomcat - контэйнер сервлетов http://tomcat.apache.org/
* GlassFish (ставится с NetBeans)

#### CMS

* Joomla http://www.joomla.org/
* WordPress https://wordpress.org/

#### JavaScript библиотеки, фреймворки, библиотеки CSS

* CSS
	* Bootstrap http://getbootstrap.com/

* jQuery https://jquery.com/

* unit тесты для js
	* QUnit http://qunitjs.com/
	* jqunit https://code.google.com/archive/p/jqunit/

* шаблонизаторы
	* Underscore.js http://underscorejs.org
	* lodash https://lodash.com/

* полифилы (реализация новых стандартов js для старых браузеров)
	* https://github.com/inexorabletash/polyfill
	* сборник полифилов https://cdn.polyfill.io/v1/docs/examples

* фрэймворки для построения страниц (M + VC)
	* Backbone.js http://backbonejs.org/
	* AngularJS https://angularjs.org/
	* ReactJS - V из MVC
		* https://facebook.github.io/react/downloads.html
	
* оптимизаторы и минимизаторы для javascript
	* jar программа для оптимизации js https://developers.google.com/closure/
		* есть и веб версия https://closure-compiler.appspot.com/home
	* TinyMCE - WYSIWYG редактор на страницу с возможностью выбора доступных пользователю тегов в настройках https://www.tinymce.com/download/
	
#### Java библиотеки, фреймворки

* Hibernate (можно использовать Criteria API) http://hibernate.org/orm/
* Hibernate Validator http://hibernate.org/validator/
* log4j - логирование http://logging.apache.org/log4j/
* тестирование
	* JUnit http://junit.org/
	* Mockito https://github.com/mockito/mockito
* Thymeleaf - более красивые наборы тэгов для построения страниц
* Project Lombok - библиотека дающая аннотации, которые автогенерирует getters и setters
* хороший список фрэймворков с рассуждением что и как https://habrahabr.ru/post/244531/

* Spring
	* Spring http://repo.spring.io/release/org/springframework/spring/
	* Spring MVC http://repo.spring.io/release/org/springframework/spring-webmvc/
	* Spring Security http://maven.springframework.org/release/org/springframework/security/spring-security/
	* Spring Data JPA - реализация стандартных функций DAO, дополнительные можно добавлять самому http://docs.spring.io/spring-data/data-jpa/docs/current/reference/html/
	* spring-test-mvc - фрэймворк для тестов, в том числе UI (страниц)?
	* Spring Loaded - можно изменять классы без перезагрзки сервера
		* https://github.com/spring-projects/spring-loaded
		* инструкция Eclipse + Spring Loaded https://www.youtube.com/watch?v=GTrNkhVnJBU
	* Spring Boot - каркас для веб-приложений уже содержащий нужные библиотеки и втроенный tomcat
http://spring-projects.ru/projects/spring-boot/
		* Также можно составить свою конфигурацию для Boot онлайн на start.spring.io
		* HikariCP - быстрый пулл соединений, глянуть если что
		* инструкция по настройке https://habrahabr.ru/post/257223/
	* Spring Data REST - пример использования https://spring.io/guides/tutorials/react-and-spring-data-rest/
		
## Видео/Аудио

#### Плеера

* VLC - аудио/видео плеер, играет сетевые источники, умеет вещать видео в том числе изображение рабочего стола (в том числе в локальную сеть)
http://www.videolan.org/vlc/download-windows.html
* SMPlayer - более быстрый и стабильный чем VLC, но с менее удобным интерфейсом
* PotPlayer - код закрыт, но работает гораздо быстрее и стабильнее VLC, а интерфейс удобнее
http://potplayer.daum.net/

#### Видео редакторы и конверторы

* Shotcut видеоредактор
http://www.shotcut.org/bin/view/Shotcut/Download

## Графика

#### Редакторы

* Gimp - аналог Photoshop http://www.gimp.org/downloads/
портативная версия http://portableapps.com/apps/graphics_pictures/gimp_portable
* Blender - 3d анимация https://www.blender.org/
портативная версия http://portableapps.com/apps/graphics_pictures/blender_portable
* Adobe CS6 (в том числе Photoshop CS6) можно скачать свободно и бесплатно,
но законно использовать их могут только те кто купил ключи
https://helpx.adobe.com/x-productkb/policy-pricing/cs6-product-downloads.html
* LibreCAD - свободная программа для создание чертежей
http://librecad.org/cms/home.html
портативная версия http://portableapps.com/apps/graphics_pictures/librecad-portable

#### Просмотр и конвертация

* XnView - удобна, код закрыт просмотр и конвертация http://www.xnview.com
портативная версия http://portableapps.com/apps/graphics_pictures/xnview_portable

## Сети

#### Браузеры

* Firefox https://www.mozilla.org/en-US/firefox/new/
и ESR версия https://www.mozilla.org/en-US/firefox/organizations/faq/
и портативная версия http://portableapps.com/apps/internet/firefox_portable
* Firefox Developer Edition - для разработчиков https://www.mozilla.org/ru/firefox/developer/
* TorBrowser - обход блокировок, выход в сеть через прокси, отключен сборк статистики
https://www.torproject.org/
* google chrome, код частично закрыт http://portableapps.com/apps/internet/google_chrome_portable
* Opera - код частично закрыт, зато сжимает трафик, что при тарифах по трафику незаменимо, можно выбрать при установке "установить на USB" и получить портативную версию
http://www.opera.com

#### Менеджеры загрузок

* Free Download Manager - свободный менеджер загрузок
http://www.freedownloadmanager.org/
* uGet - менеджер загрузок
http://ugetdm.com/downloads
* aria2 - консольная утилита с множеством опций для загрузки
https://aria2.github.io/

#### Торренты

* qbittorrent http://www.qbittorrent.org/

#### Обмен сообщениями

* Pidgin - свободный мессенджер с поддержкой множества форматов,
с плагином OTR устойчив к прослушиванию https://pidgin.im/download/
и плагин для OTR https://otr.cypherpunks.ca/index.php#downloads
(ссылка с этой страницы https://developer.pidgin.im/wiki/ThirdPartyPlugins#OfficialPlugins)
* Skype - код закрыт, но распостранен очень широко
http://www.skype.com/en/download-skype/skype-for-computer/
портативная версия http://portableapps.com/apps/internet/skype_portable
как вариант можно использовать веб версию
(в том числе на смартфонах включив "полную версию сайта")
https://web.skype.com/
* Viber - код закрыт, аналог Skype http://www.viber.com/en/
* LINE - код закрыт, аналог Skype http://line.me/ru/
* Tox - видеосвязь, код открыт, шифрование данных https://tox.im/
	* Antox - его мобильный вариант для Android https://github.com/Antox/Antox
* Wire - код частично открыт (тот что шифрует). Имеет end-to-end шифрование https://wire.com/
* jitsi - клиент XMPP, SIP, видеосвязь, написан на Java https://jitsi.org/
* Linphone - SIP клиент http://www.linphone.org/

#### Почтовые клиенты

* Thunderbird https://www.mozilla.org/en-US/thunderbird/
портативная верси http://portableapps.com/apps/internet/thunderbird_portable
* Claws Mail - легкий почтовый клиент
http://www.claws-mail.org/downloads.php?section=downloads

#### FTP Клиенты

* FileZilla клиент и сервер для FTP
https://filezilla-project.org/

#### Удаленное управление

* UltraVNC - подключение удаленного управления по VNC http://www.uvnc.com/downloads/ultravnc.html
	* Mirror Driver - драйвер который должен улучшить передачу (так и не помог) http://www.uvnc.com/downloads/mirror-driver.html
* TeamViewer - код закрыт, удаленное управление, удобная программа https://www.teamviewer.com/ru/
* Steam In-Home Streaming - встроенное в Steam удаленное управление для игр (можно свернуть игру и управлять) http://store.steampowered.com/
* Удаленный рабочий стол Chrome  - (может работать по локалке, но входить нужно через интернет), задержки но видео показывает сносное
https://chrome.google.com/webstore/detail/chrome-remote-desktop/gbchcmhmhahfdphkhkmpfmihenigjmpp?hl=ru
	* дополнительно устанавливается программа на сервер
* PuTTY - SSH клиент с расширенными возможностями
http://www.putty.org/


#### Другое

* youtube-dl - скачивание с youtube.com файлов, файлов плейлистов в различных форматах
и множеств других возможностей https://rg3.github.io/youtube-dl/download.html
(как качать https://forum.mozilla-russia.org/viewtopic.php?id=58848)
* HTTrack Website Copier - скачивание сайтов целиком https://www.httrack.com/
* Wireshark - снифер https://www.wireshark.org/download.html
* Open Broadcaster Software - открытая программа для интернет вещания https://obsproject.com/
	* MonoServer - можно направить поток вещания на него, а к нему подключить множество пользователей (организовать вещание)

## Оффис

#### Текстовые редакторы

* Notepad++ универсальный блокнот, удобен и для программирования https://notepad-plus-plus.org/ <br>
  Плагины:
  * dspellcheck (установить словари, включить проверку одновременно нескольких языков)
  * TextFx - набор инструментов для преобразования текста в кучу форматов и кодировок, просмотр статистики (количества слов и тд), валидации, вырезания и вставки спец символов, лишних пробелов.
  * цветовая схема для markdown https://github.com/Edditoria/markdown_npp_zenburn
* Atom - редактор кода от github, множество языков и плагинов https://atom.io/ <br>
  Плагины:
  * minimap - карта документа
  * sync-scroll - синхронизация прокрутки окон
* Geany http://www.geany.org/Download/Releases
	Плагины:
	* http://plugins.geany.org/downloads.html
* Vim - текстовый редактор для программистов с удобными сочетаниями клавиш
http://www.vim.org/download.php
	
#### Разные

* Sumatra PDF - быстрый просмотрщик PDF, ePub, MOBI, CHM, XPS, DjVu, CBZ, CBR
http://www.sumatrapdfreader.org/free-pdf-reader.html
* WinDjView - быстрый просмотрщик djvu http://windjview.sourceforge.net/
* WinMerge - сравнение документов в двух панельном окне http://winmerge.org/
* CoolReader - чтение книг, версия 2 имеет более удобный интерфейс http://www.coolreader.org/
* FBReader - читалка книг https://ru.fbreader.org/

#### Оффисные пакеты

* Microsoft Office Trial пробная версия, код закрыт, но замены нету
https://www.microsoft.com/en-us/evalcenter/evaluate-office-professional-plus-2013
* LibreOffice - свободный оффисный пакет, но многие формата отображает плохо
https://www.libreoffice.org/download/libreoffice-fresh/
портативная версия http://portableapps.com/apps/office/libreoffice_portable

## Диски и файлы

#### Архиваторы

* 7zip - архиватор 7z, zip, tar и др. http://www.7-zip.org/
* Universal Extractor - поддерживает множество форматов http://legroom.net/software/uniextract
* PeaZip - свободный архиватор, множество форматов http://www.peazip.org/

#### Файловые менеджеры

* Total Commander - двухпанельный менеджер, код закрыт, но с хорошей репутацией http://www.ghisler.com/
	* Тут плагины http://www.ghisler.com/plugins.htm#filesys
	* WebDAV - плагин для работы с webdav
	* Cloud - плагин для работы с яндекс.диск, гугл.диск, box, dropbox, OneDrive
* Double Commander - двухпанельный менеджер, имеется некоторая поддержка плагинов от Total Commander (много нереализованных функций)
http://doublecmd.sourceforge.net/

#### LiveCD/USB

* UNetbootin создание LiveUSB из Linux образа диска для флэшки  https://unetbootin.github.io/
* официальная утилита для создания LiveUSB из Win7 http://www.microsoft.com/en-us/download/windows-usb-dvd-download-tool
* Rufus может создавать установочные LiveUSB в том числе с WinXP
https://rufus.akeo.ie/

#### Восстановление информации

* TestDisk - консольная утилита восстановления удаленых файлов, фактически единственная свободная
http://www.cgsecurity.org/wiki/TestDisk

#### Эмуляторы

* DAEMON Tools Lite - код закрыт, лучший из бесплатных эмуляторов
http://www.daemon-tools.cc/rus/downloads

#### Работа с cd и образами

* InfraRecorder - запись дисков http://infrarecorder.org/?page_id=5
портативная версия http://portableapps.com/apps/utilities/infrarecorder_portable

#### Другое

* Ant Renamer - групповое переименование файлов
http://www.antp.be/software/renamer

## Шифрование

#### Менеджеры паролей

* KeePassX https://www.keepassx.org/

#### Шифрование дисков

* VeraCrypt - форк TrueCrypt, конвертирует контейнеры TrueCrypt в свой формат, более защищен https://veracrypt.codeplex.com/
* CipherShed форк TrueCrypt, полностью совместим с TrueCrypt https://ciphershed.org/
* о TrueCrypt и форках http://www.opennet.ru/cgi-bin/opennet/ks.cgi?mask=truecrypt
* верифицированные код, проектом проводившим аудит TrueCrypt https://github.com/AuditProject/truecrypt-verified-mirror

## Эмуляторы компьютеров и систем

* VirtualBox - эмулятор компьютера https://www.virtualbox.org/wiki/Downloads
* дополнение для Google Chrome через которое можно запускать программы от Android (.apk) https://developer.chrome.com/apps/getstarted_arc
* qemu - эмулятор, который эмулирует железо, разные архитектуры CPU и т.д.

## Справочники, навигация, энциклопедии, Словари

* GoldenDict - просмотр множества форматов словарей в том числе с произношением
(подходят словари и от lingvo, на сегодня лучшие для русскоязычных)
http://goldendict.org/download.php
портативная версия http://portableapps.com/apps/education/goldendict_portable

* SAS.Planet - просмотр карты из разных источников с возможностью загрузки
областей и просмотром только кэшированного (оффлайн)
плюс множество возможностей http://www.sasgis.org/download/ <br>
Авторы сначало не хотели открывать код, но сам код доступен под GPL v3 (не проверялось) https://bitbucket.org/sas_team/
* Stellarium планетарий, который создаёт реалистичное трёхмерное небо http://www.stellarium.org/ru/
* Celestia - 3D модель космоса, спутников, звезд, планет, комет, галактик http://www.shatters.net/celestia/

## Система

* Process Explorer - менеджер процессов, код закрыт, официальный
https://technet.microsoft.com/en-us/sysinternals/bb896653.aspx?f=255&MSPPError=-2147217396
* Process Hacker свободная альтернатива Process Explorer
http://processhacker.sourceforge.net/downloads.php
* Autoruns - код закрыт, менеджер автозагрузки программ и служб
https://technet.microsoft.com/en-us/sysinternals/bb963902.aspx
* HWiNFO - код закрыт, информация о оборудовании http://www.hwinfo.com/download.php
* CPU-Z - код закрыт, информация о процессоре и смежном обарудовании
http://www.cpuid.com/softwares/cpu-z.html
портативная версия http://portableapps.com/apps/utilities/ant_renamer_portable
* GPU-Z - код закрыт, инфа о видеокарте https://www.techpowerup.com/gpuz/
* ext2fsd - драйвер для работы с ext2/3/4 под Windows http://www.ext2fsd.com/
* отключение сбора статистики в Win7-10:
	* https://github.com/10se1ucgo/DisableWinTracking
	* https://github.com/Nummer/Destroy-Windows-10-Spying
* Для запуска программ с правами и скриптов администратора http://www.microsoft.com/en-us/download/details.aspx?id=7352
* DNSCrypt - шифруем DNS чтобы провайдер не вмешивался https://dnscrypt.org/#dnscrypt-windows

## Компоненты операционных систем

* DirectX (в Win7 и выше устанавливать через систему обновлений)
https://www.microsoft.com/ru-ru/download/details.aspx?id=34429
* исправлениие долгого обновления Win7
	* для x32 https://www.microsoft.com/en-us/download/details.aspx?id=49542
	* для x64 https://www.microsoft.com/en-us/download/details.aspx?id=49540

* сглаживание шрифтов для Win XP https://www.microsoft.com/typography/ClearTypePowerToy.mspx
* драйвер файловой системы exFAT для Win XP https://www.microsoft.com/ru-RU/download/details.aspx?id=19364

## Операционные системы

* Tails - максимально анонимная система с установленными программами
для анонимного общения и работы с сетями https://tails.boum.org/
запускать рекомендуется в эмуляторах (например VirtualBox)
или с загрузочных дисков.
* Whonix - дистр. для анонимности специально подготовленный для запуска в виртуалке https://www.whonix.org/

* Linux - в linux есть утилита gparted для разметки дисков (никогда не пользуйте разметку в windows!), утилита testdisk для восстановления файлов и систем, fdisk может исправить некоторые ошибки и изменить порядок нумерации разделов при проблемах с ними. Утилитой dd можно забэкапить диски с ошибками (имеют команду игнорирования ошибочных секторов).
	* Kubuntu - самый удобный, но чуть глючный и чуть медленнее http://www.kubuntu.org/getkubuntu
	* xubuntu x86 - лучшее для LiveCD, запускается хорошо на старых компах
	* xubuntu x64 - быстрее всех для десктопа
	* LinuxMint x64 (есть редакции xfce, kde) - тоже самое что ubuntu, но больше предуастановленного софта
* Windows
	* Пробные версии Windows <br>
	http://www.microsoft.com/en-us/evalcenter/evaluate-windows-enterprise-insider-preview <br>
	пробная версия Win7 <br>
	http://care.dlservice.microsoft.com/dl/download/evalx/win7/x86/EN/7600.16385.090713-1255_x86fre_enterprise_en-us_EVAL_Eval_Enterprise-GRMCENEVAL_EN_DVD.iso <br>
	http://care.dlservice.microsoft.com/dl/download/evalx/win7/x64/EN/7600.16385.090713-1255_x64fre_enterprise_en-us_EVAL_Eval_Enterprise-GRMCENXEVAL_EN_DVD.iso
	* сравнить хэш суммы Windows из этого списка https://msdn.microsoft.com/ru-ru/subscriptions/downloads/default.aspx
	* Официальные бесплатные версии Windows для VirtualBox
	http://dev.modern.ie/tools/vms/windows/
	* Windows 10 Enterprise LTSB *Evaluation* x86
	http://care.dlservice.microsoft.com/dl/download/6/2/4/624ECF83-38A6-4D64-8758-FABC099503DC/10240.16384.150709-1700.TH1_CLIENTENTERPRISE_S_EVAL_X86FRE_EN-US.ISO
	* Windows 10 Enterprise LTSB *Evaluation* x64
	http://care.dlservice.microsoft.com/dl/download/6/2/4/624ECF83-38A6-4D64-8758-FABC099503DC/10240.16384.150709-1700.TH1_CLIENTENTERPRISE_S_EVAL_X64FRE_EN-US.ISO
	* для восстановление Wi10 Eval может понадобиться оффициальный ключ VTNMT-2FMYP-QCY43-QR9VK-WTVCK
