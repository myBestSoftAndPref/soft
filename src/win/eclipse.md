#### Плагины

В меню ```Help > Eclipse Marketplace```, набирать название плагинов в поиске и устанавливать

FindBugs - поиск багов, в настройках Eclipse > Java передвинуть ползунок до конца, чтобы искало все баги  
Checkstyle - проверка стиля кода  
JD-Eclipse - дизассемблер Java  
Ant Visualizer - визуализация Ant файла сборки  
WindowBuilder - рисование окошек с помощью редактора  
Spring Boot плагины https://spring.io/tools/sts/all  
JRebel - изменение класса без перезагрузки сервера  
Eclipse Color Themes - цветовые схемы кода, лучшая: Sunburst
Eclipse Moonrise UI Theme - темная тема для UI и подсветки кода (можно не ставить Eclipse Color Themes)

#### Настройка Eclipse

###### Настройка Eclipse на виртуальном диске в оперативной памяти

1. **Создать виртуальный диск** в оперативной памяти и переместить туда Eclipse
	* [ImDisk Virtual Disk Driver](http://www.ltr-data.se/opencode.html/) - программа с открытым кодом для создание дисков в оперативной памяти с синхронизацией данных в каталог на жестком диске.
2. Переместить репозиторий maven на диск в оперативной памяти
	1. Копировать на диск локальный репозиторий maven ```c:\Users\user\.m2\``` на диск в оперативной памяти
	2. Скачать образец конфигурации maven [settings.xml](https://github.com/apache/maven/blob/master/apache-maven/src/conf/settings.xml) и копировать его в ```.m2``` на виртуальном диске
	3. Добавить в ```settings.xml``` строку с путем к репозиторию на виртуальном диске: ```<localRepository>r:\.m2\repository\</localRepository>``` (заменив путь на свой)
	
###### Ускоряем Eclipse

* Моя текущая команда для запуска Eclipse: ```sts.exe -Xmn256M -XX:SharedReadOnlySize=128M -XX:+AggressiveOpts -XX:+UseFastAccessorMethods -XX:+UseStringCache -XX:+RewriteFrequentPairs -vm "c:\Program Files\Java\jdk1.8.0_102\jre\bin\server\jvm.dll"```

* Ставим лимит на количество открытых вкладок: Window > Preferences > General > Editor > Number of opened editors
* Отключаем авто появление тормозящих авто подсказок. В поиске настроек набрать ```Assist```, в пункта ```Content Assist``` снять где надо галочку ```Enable auto activation``
* Запускаем Eclipse командой: ```eclipse.exe -vm r:\Java\jdk1.8.0_102\jre\bin\server\jvm.dll``` (может требовать чуть больше оперативной памяти)
* Отключить автоматическое обновления report ошибок (отправка статистики): 1) Window->Prefrences->General->Error Reporting > Never Send, 2) PReferences-> Startup and Shutdown -> Uncheck Eclipse Automated Error Reporting
* Отключить декорации темы: General > Appearence > Enable theming > Снять галочку
* Набрать: anomation в поиске настроек и проверить, чтобы галочек не стояло

#### Управление Eclipse

* Запуск с указанием workspace: ```eclipse –data c:\myworkspace –showlocation```
* Можно исключить некоторые классы из автоподсказок, если надо: Window -> Preferences -> Java -> Appearance -> Type Filters

* Авто форматирование: ctrl-shift-F
* Авто подсказки при вводе (Code Assist): ctrl + space
* Авто удаление неиспользуемых импортов библиотек: ctrl-shift-O
* Поиск класса по имени для просмотра его содержимого: ctrl-shift-T
* Поиск файлов ресурсов (txt, property etc) по его имени: Ctrl-Shift-R
* Перемещение к классу кликом мыши: клик левой кнопкой по переменной или имени с зажатым ctrl
* Поиск всех ссылок на переменную или класс в других классах проекта: кликнуть на переменную или класс и нажать ctrl-shift-G
* ctrl-o: outline всплывающим окном – очень удобно для быстрого перехода к методу в большом классе. 
* F4: показывает окно просмотра иерархии классов (ctrl-T – похожую информацию во всплывающем окне) 
* ctrl-m: переключатель режима растягивания на весь экран для текущего экрана или вида. 
* ctrl-F11: запускает последнюю выполненную конфигурацию
