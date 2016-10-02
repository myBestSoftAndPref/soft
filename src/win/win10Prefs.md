# Установка

## Скачивание

* ссылка на 32 бит
* 64 бит
* ключ восстановление

## создание установочного диска

* под ubuntu

# Сервисы

* отключить dns кэш
```отключить службу DNSCache```
* отключить геолокацию
* отключить службу windows firewall
* коммандой отключить defender
``` Win + R > gpedit.msc > Computer Configuration > Administrative Tamplates > Windows Components > Windows Defender > Turn off Windows Defender > Enable```

# Функции

* на странице приватность отключить кучу функций
* на странице обновлений тоже есть некоторые
* полное отключение UAC (контроль учетных записей)

* отключить автосинхронизацию с календарем
* отключить полупрозрачность меню в настройках тем
* включить режим разработчика на панели обновление
* отключит фаервол
```Control Panel\System and Security\System```
* отключить обновление через p2p
```в дополнительных настройках обновлений, отключить отдачу обновление```
* отключить авто установку драйверов (если нужно)
```Win + R > комманда: rundll32 newdev.dll,DeviceInternetSettingUi```
* отключить авто установку обновлений
* отключить Система - удаленный осистент
* отключить сбор дампа (он уменьшает производительность)
```Сисема > загрузка и восстановление > установить в "не собирать"```
* отключить автозагрузку флэшек
``` Win + R > gpedit.msc > Computer Configuration > Administrative Tamplates > Windows Components > AutoPlay Policies > Turn off AutoPlay > Enable (For All drives)```
* отключение OneDrive
``` Win + R > gpedit.msc > Computer Configuration > Administrative Tamplates > Windows Components > OneDrive > Prevent the usage of OneDrive > Enable```
* изменение ассоциированных приложений http://windowstips.ru/notes/22357
* вернуть просмотр изображений: сохранит файл как ```my.reg``` и запустить его
```
Windows Registry Editor Version 5.00

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.jpg]
@="PhotoViewer.FileAssoc.Tiff"

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.jpeg]
@="PhotoViewer.FileAssoc.Tiff"

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.jpe]
@="PhotoViewer.FileAssoc.Tiff"

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.jfif]
@="PhotoViewer.FileAssoc.Tiff"

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.jxr]
@="PhotoViewer.FileAssoc.Tiff"

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.gif]
@="PhotoViewer.FileAssoc.Tiff"

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.png]
@="PhotoViewer.FileAssoc.Tiff"

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.bmp]
@="PhotoViewer.FileAssoc.Tiff"

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.tiff]
@="PhotoViewer.FileAssoc.Tiff"

; Change Extension's File Type
[HKEY_CURRENT_USER\Software\Classes\.ico]
@="PhotoViewer.FileAssoc.Tiff"
```
* (могут быть проблемы) полное отключение Cortana переименованием каталога ```C:\Windows\SystemApps\Microsoft.Windows.Cortana_cw5n1h2txyewy.bak```
* отключить в настройках персонализации авто выбор цвета темы - иначе запускается лишний процесс и жрет память
* отключить быструю загрузку в настройках питания (чтобы диски ntfs в Linux понтировались правильно)
* отключить гибернацию ```от админа выполнить: powercfg -h off```
* отключить ```Setting > System > Offline Map обновление``` (галочка возвращается сама)
* отключить ```Setting > Privacy > Other Device``` (галочка возвращается сама)
* Отключение Cortana: Press Win + R keyboard accelerator to open Run dialog box.
	* Type GPedit.msc and hit Enter or OK to open Local Group Policy Editor. Navigate to Local Computer Policy -> Computer Configuration -> Administrative Templates -> Windows Components -> Search -> Allow Cortana
* в GPedit.msc найти пункт Map и отключить всё
* Устройства (Devices) > Typing - отключить орфографию
* в GPedit.msc
	* Computer Configuration — Administrative Templates — Windows Components — Data Collection - off
* в GPedit.msc
	* Computer Configuration — Administrative Templates — Windows Components — Windows Error Reporting — Disable Windows Error Reporting
* Отключить сервисы Diagnostics Tracking Service (в версии Threshold 2 — Connected User Experiences and Telemetry) и dmwappushsvc в services.msc.
* сборник чего отключать http://techne.alaya.net/?p=12499
	
# Автообновление

* полное отключение
```Win + R > regedit > перейти в: HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows > создать в разделе Windows подраздел WindowsUpdate > создать в разделе WindowsUpdate подраздел AU > теперь настройки можно менять в ветке реейства, в нём ключ AUOptions (числовой) HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU\AUOptions```
```
1 - отключить обновление полностью
2 - уведомлять о обновлениях и загрузке
```
	* Если настройки не примутся, то нажать "Проверить обновление" в меню обновлений после их изменения
* дополнительные настройки обновления, вроде времени проверки, в политиках (но отключить совсем в этом меню нельзя)
```Win + R > gpedit.msc > Computer Configuration > Administrative Tamplates > Windows Components > Windows Update > Configure Automatic Update > значение 2 и можно выбрать время проверки```
* Control Panel\System and Security\Administrative Tools - в настройках дефрагментации отключить расписание, чтобы не загружало комп
* В дополнительный настройках клавиатуры > поставить "не собирать данные для обучения ввода"

* А можно просто временно отключать службу обновлений

# Доп.настройки

* Сервисы ```* Win + R > services.msc```
* Политики ```Win + R > gpedit.msc```
* Панель контроля ```Win + R > Control```
* Полная перезагрузку (выключение) (настоящая, а не мнимай) ```Ctrl (или Shift?) + клик по кнопке Restart или Shutdown```
* Режим Бога (доплнительное меню настроек) ```Создать на Рабочем столе каталог с именем: Название.{ED7BA470-8E54-465E-825C-99712043E01C}```
	* ```Название``` - любое имя
* чтобы зайти в дополнительные настройки можно набрать в поиске обычных настроек admin и дальше уже лазать по менюшкам

# Проблемы

* Если не сделать "полное выключение" Windows, то разделы ntfs в Linux монтироваться не будут
