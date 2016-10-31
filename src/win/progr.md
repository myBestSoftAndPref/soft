##### Atom
Редактор на основе Chrome. Много плагинов с которыми он становится почти IDE.

**Плагины:**  
Внимательно смотрите в настройках плагинов отключение телеметрии.

* Общие
	1. [atom-beautify](https://atom.io/packages/atom-beautify) - авто форматирование кода HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, Coldfusion, SQL, и т.д.
		* Требует для работы программу [Uncrustify Code Beautifier](https://sourceforge.net/projects/uncrustify/files/uncrustify/). Программу нужно добавить в переменную среды ```PATH```.
	2. [minimap](https://atom.io/packages/minimap) - мини карта документа
		* [minimap-highlight-selected](https://atom.io/packages/minimap-highlight-selected) - подсвечивает выделенный текст на мини карте
		* [minimap-cursorline](https://atom.io/packages/minimap-cursorline) - показывает на мини карте строку на которой курсор
		* [minimap-selection](https://atom.io/packages/minimap-selection) - показывает на мини карте выделенные области
* Java
	1. [autocomplete-java](https://atom.io/packages/autocomplete-java) - авто завершение при вводе Java кода, авто добавление import в файл, сворачивание import строк. Указание classpath для поиска jar используемых в import.
	2. [java-generator](https://atom.io/packages/java-generator) - создает get, set, construct, toString, builder методы для Java.
	3. [java-plus](https://atom.io/packages/java-plus) - аналог ```autocomplete-java```, **не совместим с ним**.

* Markdown
	* [Markdown Preview Plus (MPP)](https://atom.io/packages/markdown-preview-plus) - дополнительные функции редактирования markdown: поддержка стороннего парсера pandoc, отоброжение изменений при редактировании, редактирование математических формул и другие.
	* [Markdown TOC](https://atom.io/packages/markdown-toc) - авто генерация TOC, ссылок в содержании вверху домента.
	* [markdown-scroll-sync](https://atom.io/packages/markdown-scroll-sync) - авто scroll прокрутка предпросмотра при редактировании markdown