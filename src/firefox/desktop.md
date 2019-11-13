# Что это?

Это минимальны набор расширений (дополнений), стилей и настроек для **release** версии **Firefox**.

Подборку расширений для программистов можно найти [тут](https://github.com/myBestSoftAndPref/soft/blob/master/src/firefox/desktop-dev.md)

- [Что это?](#%d0%a7%d1%82%d0%be-%d1%8d%d1%82%d0%be)
- [Extensions (addons, расширения, дополнения)](#extensions-addons-%d1%80%d0%b0%d1%81%d1%88%d0%b8%d1%80%d0%b5%d0%bd%d0%b8%d1%8f-%d0%b4%d0%be%d0%bf%d0%be%d0%bb%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f)
  - [Сохранение страниц сайтов](#%d0%a1%d0%be%d1%85%d1%80%d0%b0%d0%bd%d0%b5%d0%bd%d0%b8%d0%b5-%d1%81%d1%82%d1%80%d0%b0%d0%bd%d0%b8%d1%86-%d1%81%d0%b0%d0%b9%d1%82%d0%be%d0%b2)
  - [Вкладки (табы), их внешний вид (вертикально, разделение табов etc) и поведение](#%d0%92%d0%ba%d0%bb%d0%b0%d0%b4%d0%ba%d0%b8-%d1%82%d0%b0%d0%b1%d1%8b-%d0%b8%d1%85-%d0%b2%d0%bd%d0%b5%d1%88%d0%bd%d0%b8%d0%b9-%d0%b2%d0%b8%d0%b4-%d0%b2%d0%b5%d1%80%d1%82%d0%b8%d0%ba%d0%b0%d0%bb%d1%8c%d0%bd%d0%be-%d1%80%d0%b0%d0%b7%d0%b4%d0%b5%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d1%82%d0%b0%d0%b1%d0%be%d0%b2-etc-%d0%b8-%d0%bf%d0%be%d0%b2%d0%b5%d0%b4%d0%b5%d0%bd%d0%b8%d0%b5)
  - [Работа с сессиями, группами вкладок и контейнерами (изоляцией сайтов друг от друга)](#%d0%a0%d0%b0%d0%b1%d0%be%d1%82%d0%b0-%d1%81-%d1%81%d0%b5%d1%81%d1%81%d0%b8%d1%8f%d0%bc%d0%b8-%d0%b3%d1%80%d1%83%d0%bf%d0%bf%d0%b0%d0%bc%d0%b8-%d0%b2%d0%ba%d0%bb%d0%b0%d0%b4%d0%be%d0%ba-%d0%b8-%d0%ba%d0%be%d0%bd%d1%82%d0%b5%d0%b9%d0%bd%d0%b5%d1%80%d0%b0%d0%bc%d0%b8-%d0%b8%d0%b7%d0%be%d0%bb%d1%8f%d1%86%d0%b8%d0%b5%d0%b9-%d1%81%d0%b0%d0%b9%d1%82%d0%be%d0%b2-%d0%b4%d1%80%d1%83%d0%b3-%d0%be%d1%82-%d0%b4%d1%80%d1%83%d0%b3%d0%b0)
  - [Скачивание (grubbing) видео, аудио, картинок и других ресурсов](#%d0%a1%d0%ba%d0%b0%d1%87%d0%b8%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5-grubbing-%d0%b2%d0%b8%d0%b4%d0%b5%d0%be-%d0%b0%d1%83%d0%b4%d0%b8%d0%be-%d0%ba%d0%b0%d1%80%d1%82%d0%b8%d0%bd%d0%be%d0%ba-%d0%b8-%d0%b4%d1%80%d1%83%d0%b3%d0%b8%d1%85-%d1%80%d0%b5%d1%81%d1%83%d1%80%d1%81%d0%be%d0%b2)
  - [Пользовательские скрипты (user scripts)](#%d0%9f%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d1%81%d0%ba%d0%b8%d0%b5-%d1%81%d0%ba%d1%80%d0%b8%d0%bf%d1%82%d1%8b-user-scripts)
  - [Пользовательские стили (CSS user styles)](#%d0%9f%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d1%81%d0%ba%d0%b8%d0%b5-%d1%81%d1%82%d0%b8%d0%bb%d0%b8-css-user-styles)
  - [Блокировка рекламы](#%d0%91%d0%bb%d0%be%d0%ba%d0%b8%d1%80%d0%be%d0%b2%d0%ba%d0%b0-%d1%80%d0%b5%d0%ba%d0%bb%d0%b0%d0%bc%d1%8b)
  - [Изменение и управление поведения отдельных сайтов и сервисов](#%d0%98%d0%b7%d0%bc%d0%b5%d0%bd%d0%b5%d0%bd%d0%b8%d0%b5-%d0%b8-%d1%83%d0%bf%d1%80%d0%b0%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bf%d0%be%d0%b2%d0%b5%d0%b4%d0%b5%d0%bd%d0%b8%d1%8f-%d0%be%d1%82%d0%b4%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d1%85-%d1%81%d0%b0%d0%b9%d1%82%d0%be%d0%b2-%d0%b8-%d1%81%d0%b5%d1%80%d0%b2%d0%b8%d1%81%d0%be%d0%b2)
  - [Для закладок, работы с ними и дополнительные функции](#%d0%94%d0%bb%d1%8f-%d0%b7%d0%b0%d0%ba%d0%bb%d0%b0%d0%b4%d0%be%d0%ba-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%8b-%d1%81-%d0%bd%d0%b8%d0%bc%d0%b8-%d0%b8-%d0%b4%d0%be%d0%bf%d0%be%d0%bb%d0%bd%d0%b8%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d1%84%d1%83%d0%bd%d0%ba%d1%86%d0%b8%d0%b8)
  - [Работающие как отдельные программы](#%d0%a0%d0%b0%d0%b1%d0%be%d1%82%d0%b0%d1%8e%d1%89%d0%b8%d0%b5-%d0%ba%d0%b0%d0%ba-%d0%be%d1%82%d0%b4%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d1%8b)
  - [Добавляющие новый функционал](#%d0%94%d0%be%d0%b1%d0%b0%d0%b2%d0%bb%d1%8f%d1%8e%d1%89%d0%b8%d0%b5-%d0%bd%d0%be%d0%b2%d1%8b%d0%b9-%d1%84%d1%83%d0%bd%d0%ba%d1%86%d0%b8%d0%be%d0%bd%d0%b0%d0%bb)
  - [Управление видео и аудио](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%b2%d0%b8%d0%b4%d0%b5%d0%be-%d0%b8-%d0%b0%d1%83%d0%b4%d0%b8%d0%be)
  - [Работа с поисковыми движками, их функционалом и интерфейсом](#%d0%a0%d0%b0%d0%b1%d0%be%d1%82%d0%b0-%d1%81-%d0%bf%d0%be%d0%b8%d1%81%d0%ba%d0%be%d0%b2%d1%8b%d0%bc%d0%b8-%d0%b4%d0%b2%d0%b8%d0%b6%d0%ba%d0%b0%d0%bc%d0%b8-%d0%b8%d1%85-%d1%84%d1%83%d0%bd%d0%ba%d1%86%d0%b8%d0%be%d0%bd%d0%b0%d0%bb%d0%be%d0%bc-%d0%b8-%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d1%84%d0%b5%d0%b9%d1%81%d0%be%d0%bc)
  - [Гиковские, для продвинутых пользователей](#%d0%93%d0%b8%d0%ba%d0%be%d0%b2%d1%81%d0%ba%d0%b8%d0%b5-%d0%b4%d0%bb%d1%8f-%d0%bf%d1%80%d0%be%d0%b4%d0%b2%d0%b8%d0%bd%d1%83%d1%82%d1%8b%d1%85-%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d0%b5%d0%b9)
  - [Словари и локализации](#%d0%a1%d0%bb%d0%be%d0%b2%d0%b0%d1%80%d0%b8-%d0%b8-%d0%bb%d0%be%d0%ba%d0%b0%d0%bb%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d0%b8)
  - [Разное](#%d0%a0%d0%b0%d0%b7%d0%bd%d0%be%d0%b5)
- [Расширения для которых НЕТ аналога в Firefox 57+ (с переходом на WebExtensions API)](#%d0%a0%d0%b0%d1%81%d1%88%d0%b8%d1%80%d0%b5%d0%bd%d0%b8%d1%8f-%d0%b4%d0%bb%d1%8f-%d0%ba%d0%be%d1%82%d0%be%d1%80%d1%8b%d1%85-%d0%9d%d0%95%d0%a2-%d0%b0%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%b0-%d0%b2-firefox-57-%d1%81-%d0%bf%d0%b5%d1%80%d0%b5%d1%85%d0%be%d0%b4%d0%be%d0%bc-%d0%bd%d0%b0-webextensions-api)
- [Программы (замена расширений, которые невозможно реализовать на WebExtensions API)](#%d0%9f%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d1%8b-%d0%b7%d0%b0%d0%bc%d0%b5%d0%bd%d0%b0-%d1%80%d0%b0%d1%81%d1%88%d0%b8%d1%80%d0%b5%d0%bd%d0%b8%d0%b9-%d0%ba%d0%be%d1%82%d0%be%d1%80%d1%8b%d0%b5-%d0%bd%d0%b5%d0%b2%d0%be%d0%b7%d0%bc%d0%be%d0%b6%d0%bd%d0%be-%d1%80%d0%b5%d0%b0%d0%bb%d0%b8%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d1%8c-%d0%bd%d0%b0-webextensions-api)
- [Bookmarklets](#bookmarklets)
- [Официальные и сторонние сборки Firefox](#%d0%9e%d1%84%d0%b8%d1%86%d0%b8%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%b8-%d1%81%d1%82%d0%be%d1%80%d0%be%d0%bd%d0%bd%d0%b8%d0%b5-%d1%81%d0%b1%d0%be%d1%80%d0%ba%d0%b8-firefox)
- [Настройки для удобства](#%d0%9d%d0%b0%d1%81%d1%82%d1%80%d0%be%d0%b9%d0%ba%d0%b8-%d0%b4%d0%bb%d1%8f-%d1%83%d0%b4%d0%be%d0%b1%d1%81%d1%82%d0%b2%d0%b0)
- [Что нужно знать о приватности (сборе статистики компанией Mozilla)](#%d0%a7%d1%82%d0%be-%d0%bd%d1%83%d0%b6%d0%bd%d0%be-%d0%b7%d0%bd%d0%b0%d1%82%d1%8c-%d0%be-%d0%bf%d1%80%d0%b8%d0%b2%d0%b0%d1%82%d0%bd%d0%be%d1%81%d1%82%d0%b8-%d1%81%d0%b1%d0%be%d1%80%d0%b5-%d1%81%d1%82%d0%b0%d1%82%d0%b8%d1%81%d1%82%d0%b8%d0%ba%d0%b8-%d0%ba%d0%be%d0%bc%d0%bf%d0%b0%d0%bd%d0%b8%d0%b5%d0%b9-mozilla)
- [Что нужно знать о XUL (старой системе расширений Firefox)](#%d0%a7%d1%82%d0%be-%d0%bd%d1%83%d0%b6%d0%bd%d0%be-%d0%b7%d0%bd%d0%b0%d1%82%d1%8c-%d0%be-xul-%d1%81%d1%82%d0%b0%d1%80%d0%be%d0%b9-%d1%81%d0%b8%d1%81%d1%82%d0%b5%d0%bc%d0%b5-%d1%80%d0%b0%d1%81%d1%88%d0%b8%d1%80%d0%b5%d0%bd%d0%b8%d0%b9-firefox)
- [Управление](#%d0%a3%d0%bf%d1%80%d0%b0%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5)
- [FAQ](#faq)
  - [Почему в английской версии Firefox видны английские сайты? Почему я вижу англо язычные версии сайтов? Как сделать русские сайты в английской версии Firefox?](#%d0%9f%d0%be%d1%87%d0%b5%d0%bc%d1%83-%d0%b2-%d0%b0%d0%bd%d0%b3%d0%bb%d0%b8%d0%b9%d1%81%d0%ba%d0%be%d0%b9-%d0%b2%d0%b5%d1%80%d1%81%d0%b8%d0%b8-firefox-%d0%b2%d0%b8%d0%b4%d0%bd%d1%8b-%d0%b0%d0%bd%d0%b3%d0%bb%d0%b8%d0%b9%d1%81%d0%ba%d0%b8%d0%b5-%d1%81%d0%b0%d0%b9%d1%82%d1%8b-%d0%9f%d0%be%d1%87%d0%b5%d0%bc%d1%83-%d1%8f-%d0%b2%d0%b8%d0%b6%d1%83-%d0%b0%d0%bd%d0%b3%d0%bb%d0%be-%d1%8f%d0%b7%d1%8b%d1%87%d0%bd%d1%8b%d0%b5-%d0%b2%d0%b5%d1%80%d1%81%d0%b8%d0%b8-%d1%81%d0%b0%d0%b9%d1%82%d0%be%d0%b2-%d0%9a%d0%b0%d0%ba-%d1%81%d0%b4%d0%b5%d0%bb%d0%b0%d1%82%d1%8c-%d1%80%d1%83%d1%81%d1%81%d0%ba%d0%b8%d0%b5-%d1%81%d0%b0%d0%b9%d1%82%d1%8b-%d0%b2-%d0%b0%d0%bd%d0%b3%d0%bb%d0%b8%d0%b9%d1%81%d0%ba%d0%be%d0%b9-%d0%b2%d0%b5%d1%80%d1%81%d0%b8%d0%b8-firefox)
  - [Как запустить отдельный профиль Firefox](#%d0%9a%d0%b0%d0%ba-%d0%b7%d0%b0%d0%bf%d1%83%d1%81%d1%82%d0%b8%d1%82%d1%8c-%d0%be%d1%82%d0%b4%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bf%d1%80%d0%be%d1%84%d0%b8%d0%bb%d1%8c-firefox)
  - [(Ubuntu) Как изменить иконку Firefox на панели? Как назначить каждому профилю Firefox свой ярлык со своей иконкой?](#ubuntu-%d0%9a%d0%b0%d0%ba-%d0%b8%d0%b7%d0%bc%d0%b5%d0%bd%d0%b8%d1%82%d1%8c-%d0%b8%d0%ba%d0%be%d0%bd%d0%ba%d1%83-firefox-%d0%bd%d0%b0-%d0%bf%d0%b0%d0%bd%d0%b5%d0%bb%d0%b8-%d0%9a%d0%b0%d0%ba-%d0%bd%d0%b0%d0%b7%d0%bd%d0%b0%d1%87%d0%b8%d1%82%d1%8c-%d0%ba%d0%b0%d0%b6%d0%b4%d0%be%d0%bc%d1%83-%d0%bf%d1%80%d0%be%d1%84%d0%b8%d0%bb%d1%8e-firefox-%d1%81%d0%b2%d0%be%d0%b9-%d1%8f%d1%80%d0%bb%d1%8b%d0%ba-%d1%81%d0%be-%d1%81%d0%b2%d0%be%d0%b5%d0%b9-%d0%b8%d0%ba%d0%be%d0%bd%d0%ba%d0%be%d0%b9)
  - [(Ubuntu) Установка и обновление Firefox не из репозитория Ubuntu, а с сайта Mozilla](#ubuntu-%d0%a3%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%ba%d0%b0-%d0%b8-%d0%be%d0%b1%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-firefox-%d0%bd%d0%b5-%d0%b8%d0%b7-%d1%80%d0%b5%d0%bf%d0%be%d0%b7%d0%b8%d1%82%d0%be%d1%80%d0%b8%d1%8f-ubuntu-%d0%b0-%d1%81-%d1%81%d0%b0%d0%b9%d1%82%d0%b0-mozilla)
  - [Как добавить в Firefox открытие `magnet` ссылок на торренты](#%d0%9a%d0%b0%d0%ba-%d0%b4%d0%be%d0%b1%d0%b0%d0%b2%d0%b8%d1%82%d1%8c-%d0%b2-firefox-%d0%be%d1%82%d0%ba%d1%80%d1%8b%d1%82%d0%b8%d0%b5-magnet-%d1%81%d1%81%d1%8b%d0%bb%d0%be%d0%ba-%d0%bd%d0%b0-%d1%82%d0%be%d1%80%d1%80%d0%b5%d0%bd%d1%82%d1%8b)
  - [Расширения не работают на страницах сайта mozilla.com. Как заставить их работать на этих сайтах?](#%d0%a0%d0%b0%d1%81%d1%88%d0%b8%d1%80%d0%b5%d0%bd%d0%b8%d1%8f-%d0%bd%d0%b5-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%b0%d1%8e%d1%82-%d0%bd%d0%b0-%d1%81%d1%82%d1%80%d0%b0%d0%bd%d0%b8%d1%86%d0%b0%d1%85-%d1%81%d0%b0%d0%b9%d1%82%d0%b0-mozillacom-%d0%9a%d0%b0%d0%ba-%d0%b7%d0%b0%d1%81%d1%82%d0%b0%d0%b2%d0%b8%d1%82%d1%8c-%d0%b8%d1%85-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%b0%d1%82%d1%8c-%d0%bd%d0%b0-%d1%8d%d1%82%d0%b8%d1%85-%d1%81%d0%b0%d0%b9%d1%82%d0%b0%d1%85)
  - [Как сменить локализацию Firefox? Как изменить язык интерфейса Firefox?](#%d0%9a%d0%b0%d0%ba-%d1%81%d0%bc%d0%b5%d0%bd%d0%b8%d1%82%d1%8c-%d0%bb%d0%be%d0%ba%d0%b0%d0%bb%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8e-firefox-%d0%9a%d0%b0%d0%ba-%d0%b8%d0%b7%d0%bc%d0%b5%d0%bd%d0%b8%d1%82%d1%8c-%d1%8f%d0%b7%d1%8b%d0%ba-%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d1%84%d0%b5%d0%b9%d1%81%d0%b0-firefox)
  - [(Ubuntu) Установка или обновление Firefox одной командой с сайта Mozilla (т.е. версии от Mozilla, а не от разработчиков Ubuntu)](#ubuntu-%d0%a3%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%ba%d0%b0-%d0%b8%d0%bb%d0%b8-%d0%be%d0%b1%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-firefox-%d0%be%d0%b4%d0%bd%d0%be%d0%b9-%d0%ba%d0%be%d0%bc%d0%b0%d0%bd%d0%b4%d0%be%d0%b9-%d1%81-%d1%81%d0%b0%d0%b9%d1%82%d0%b0-mozilla-%d1%82%d0%b5-%d0%b2%d0%b5%d1%80%d1%81%d0%b8%d0%b8-%d0%be%d1%82-mozilla-%d0%b0-%d0%bd%d0%b5-%d0%be%d1%82-%d1%80%d0%b0%d0%b7%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%87%d0%b8%d0%ba%d0%be%d0%b2-ubuntu)
  - [Команда `-no-remote` не работает. Команда `-profile` не работает. Появляется сообщение ошибки, что `Firefox` или `Thunderbird` уже запущен. Английский вариант: `Firefox is already running, but is not responding...`](#%d0%9a%d0%be%d0%bc%d0%b0%d0%bd%d0%b4%d0%b0--no-remote-%d0%bd%d0%b5-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%b0%d0%b5%d1%82-%d0%9a%d0%be%d0%bc%d0%b0%d0%bd%d0%b4%d0%b0--profile-%d0%bd%d0%b5-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%b0%d0%b5%d1%82-%d0%9f%d0%be%d1%8f%d0%b2%d0%bb%d1%8f%d0%b5%d1%82%d1%81%d1%8f-%d1%81%d0%be%d0%be%d0%b1%d1%89%d0%b5%d0%bd%d0%b8%d0%b5-%d0%be%d1%88%d0%b8%d0%b1%d0%ba%d0%b8-%d1%87%d1%82%d0%be-firefox-%d0%b8%d0%bb%d0%b8-thunderbird-%d1%83%d0%b6%d0%b5-%d0%b7%d0%b0%d0%bf%d1%83%d1%89%d0%b5%d0%bd-%d0%90%d0%bd%d0%b3%d0%bb%d0%b8%d0%b9%d1%81%d0%ba%d0%b8%d0%b9-%d0%b2%d0%b0%d1%80%d0%b8%d0%b0%d0%bd%d1%82-firefox-is-already-running-but-is-not-responding)
  - [(Ubuntu) Как полностью удалить Firefox (или thunderbird)? Это может быть нужно, если вы хотите заменить Firefox из репозитория Ubuntu на версию из другого репозитория, PPA, snap, flatpak или AppImage](#ubuntu-%d0%9a%d0%b0%d0%ba-%d0%bf%d0%be%d0%bb%d0%bd%d0%be%d1%81%d1%82%d1%8c%d1%8e-%d1%83%d0%b4%d0%b0%d0%bb%d0%b8%d1%82%d1%8c-firefox-%d0%b8%d0%bb%d0%b8-thunderbird-%d0%ad%d1%82%d0%be-%d0%bc%d0%be%d0%b6%d0%b5%d1%82-%d0%b1%d1%8b%d1%82%d1%8c-%d0%bd%d1%83%d0%b6%d0%bd%d0%be-%d0%b5%d1%81%d0%bb%d0%b8-%d0%b2%d1%8b-%d1%85%d0%be%d1%82%d0%b8%d1%82%d0%b5-%d0%b7%d0%b0%d0%bc%d0%b5%d0%bd%d0%b8%d1%82%d1%8c-firefox-%d0%b8%d0%b7-%d1%80%d0%b5%d0%bf%d0%be%d0%b7%d0%b8%d1%82%d0%be%d1%80%d0%b8%d1%8f-ubuntu-%d0%bd%d0%b0-%d0%b2%d0%b5%d1%80%d1%81%d0%b8%d1%8e-%d0%b8%d0%b7-%d0%b4%d1%80%d1%83%d0%b3%d0%be%d0%b3%d0%be-%d1%80%d0%b5%d0%bf%d0%be%d0%b7%d0%b8%d1%82%d0%be%d1%80%d0%b8%d1%8f-ppa-snap-flatpak-%d0%b8%d0%bb%d0%b8-appimage)
  - [(Ubuntu) Как использовать файловый диалог KDE в Firefox](#ubuntu-%d0%9a%d0%b0%d0%ba-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d1%8c-%d1%84%d0%b0%d0%b9%d0%bb%d0%be%d0%b2%d1%8b%d0%b9-%d0%b4%d0%b8%d0%b0%d0%bb%d0%be%d0%b3-kde-%d0%b2-firefox)
  - [Как удалить английский или другой словарь Firefox по умолчанию (предустановленный)? Как оставить только установленные пользователем словари?](#%d0%9a%d0%b0%d0%ba-%d1%83%d0%b4%d0%b0%d0%bb%d0%b8%d1%82%d1%8c-%d0%b0%d0%bd%d0%b3%d0%bb%d0%b8%d0%b9%d1%81%d0%ba%d0%b8%d0%b9-%d0%b8%d0%bb%d0%b8-%d0%b4%d1%80%d1%83%d0%b3%d0%be%d0%b9-%d1%81%d0%bb%d0%be%d0%b2%d0%b0%d1%80%d1%8c-firefox-%d0%bf%d0%be-%d1%83%d0%bc%d0%be%d0%bb%d1%87%d0%b0%d0%bd%d0%b8%d1%8e-%d0%bf%d1%80%d0%b5%d0%b4%d1%83%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd%d0%bd%d1%8b%d0%b9-%d0%9a%d0%b0%d0%ba-%d0%be%d1%81%d1%82%d0%b0%d0%b2%d0%b8%d1%82%d1%8c-%d1%82%d0%be%d0%bb%d1%8c%d0%ba%d0%be-%d1%83%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd%d0%bd%d1%8b%d0%b5-%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d0%b5%d0%bc-%d1%81%d0%bb%d0%be%d0%b2%d0%b0%d1%80%d0%b8)
  - [Что такое файл **omni.ja** в Firefox, для чего и как работает? Как распаковать или упаковать **omni.ja**? Подробнее можно почитать тут)](#%d0%a7%d1%82%d0%be-%d1%82%d0%b0%d0%ba%d0%be%d0%b5-%d1%84%d0%b0%d0%b9%d0%bb-omnija-%d0%b2-firefox-%d0%b4%d0%bb%d1%8f-%d1%87%d0%b5%d0%b3%d0%be-%d0%b8-%d0%ba%d0%b0%d0%ba-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%b0%d0%b5%d1%82-%d0%9a%d0%b0%d0%ba-%d1%80%d0%b0%d1%81%d0%bf%d0%b0%d0%ba%d0%be%d0%b2%d0%b0%d1%82%d1%8c-%d0%b8%d0%bb%d0%b8-%d1%83%d0%bf%d0%b0%d0%ba%d0%be%d0%b2%d0%b0%d1%82%d1%8c-omnija-%d0%9f%d0%be%d0%b4%d1%80%d0%be%d0%b1%d0%bd%d0%b5%d0%b5-%d0%bc%d0%be%d0%b6%d0%bd%d0%be-%d0%bf%d0%be%d1%87%d0%b8%d1%82%d0%b0%d1%82%d1%8c-%d1%82%d1%83%d1%82)
  - [Почему даже после закрытия сайта мне приходят уведомления?](#%d0%9f%d0%be%d1%87%d0%b5%d0%bc%d1%83-%d0%b4%d0%b0%d0%b6%d0%b5-%d0%bf%d0%be%d1%81%d0%bb%d0%b5-%d0%b7%d0%b0%d0%ba%d1%80%d1%8b%d1%82%d0%b8%d1%8f-%d1%81%d0%b0%d0%b9%d1%82%d0%b0-%d0%bc%d0%bd%d0%b5-%d0%bf%d1%80%d0%b8%d1%85%d0%be%d0%b4%d1%8f%d1%82-%d1%83%d0%b2%d0%b5%d0%b4%d0%be%d0%bc%d0%bb%d0%b5%d0%bd%d0%b8%d1%8f)
  - [Как сделать скриншот страницы в Firefox с высоким разрешением (качеством)](#%d0%9a%d0%b0%d0%ba-%d1%81%d0%b4%d0%b5%d0%bb%d0%b0%d1%82%d1%8c-%d1%81%d0%ba%d1%80%d0%b8%d0%bd%d1%88%d0%be%d1%82-%d1%81%d1%82%d1%80%d0%b0%d0%bd%d0%b8%d1%86%d1%8b-%d0%b2-firefox-%d1%81-%d0%b2%d1%8b%d1%81%d0%be%d0%ba%d0%b8%d0%bc-%d1%80%d0%b0%d0%b7%d1%80%d0%b5%d1%88%d0%b5%d0%bd%d0%b8%d0%b5%d0%bc-%d0%ba%d0%b0%d1%87%d0%b5%d1%81%d1%82%d0%b2%d0%be%d0%bc)

# Extensions (addons, расширения, дополнения)
## Сохранение страниц сайтов

[WebScrapBook](https://addons.mozilla.org/en-US/firefox/addon/webscrapbook/) - сохраняет страницу одним файлом (изображения, скрипты etc). Для того чтобы это расширение сохраняло и скрипты JavaScript внутри страниц нужно включить сохранение скриптов в настройках <sub>Скрипты на некоторых сайтах сохраняются не правильно</sub>. Поддерживает формат ```.maff```<sub>С некоторыми ограничениями</sub>. Может сохранять файл с ресурсами как ```.html``` и его можно открыть в других браузерах. Не поддерживает ```.mht``` <sub>в планах разработчика расширения есть поддержка чтения ```.mht``` файлов. Чтобы открыть `maff` или `htz` файл в браузере одним кликом смотрите [эту](https://github.com/danny0838/webscrapbook/wiki/View) инструкцию. Чтобы сконвертировать большое количество `mht` файлов в `maff` используйте [это](http://maf.mozdev.org/installation.html) расширение и [Firefox 52 ESR](https://ftp.mozilla.org/pub/firefox/releases/52.9.0esr/) для его работы</sub>
<br>
[Save Page WE](https://addons.mozilla.org/en-US/firefox/addon/save-page-we/) - сохраняет страницу одним файлом (изображения, скрипты etc). В отличии от [WebScrapBook](https://addons.mozilla.org/en-US/firefox/addon/webscrapbook/) ресурсы хранятся в виде base64, поэтому JavaScript внутри страницы (динамические элементы) сохраняет хуже. В некоторых случаях может сработать лучше чем [WebScrapBook](https://addons.mozilla.org/en-US/firefox/addon/webscrapbook/)
<br>
[SingleFile](https://addons.mozilla.org/en-US/firefox/addon/single-file/) - сохраняет страницу одним файлом (изображения, скрипты etc)

## Вкладки (табы), их внешний вид (вертикально, разделение табов etc) и поведение

[Tile Tabs WE](https://addons.mozilla.org/en-US/firefox/addon/tile-tabs-we/) - может делить окно браузера на несколько частей, чтобы просматривать несколько сайтов одновременно. На деле новое API не позволяет расширениям разграничивать окно, поэтому открываются новые окна, что очень неудобно.
<br>
[Tree Style Tab](https://addons.mozilla.org/ru/firefox/addon/tree-style-tab) - вкладки вертикально в виде дерева.
<br>
[Tree Tabs](https://addons.mozilla.org/en-US/firefox/addon/tree-tabs/) - древовидный вид вкладок и группы вкладок. Из отличий от других подобных расширений - очень удобное встроенное управление группами вкладок. <sub>К сожалению **у расширения есть баги**, лучшая и более надежная альтернатива это: расширения **Tree Style Tab** + **Simple Tab Groups**</sub>
<br>
[Tab Reloader (page auto refresh)](https://addons.mozilla.org/en-US/firefox/addon/tab-reloader/) или [ReloadMatic: Automatic Tab Refresh](https://addons.mozilla.org/en-US/firefox/addon/reloadmatic/) или [Auto Reload Tab](https://addons.mozilla.org/en-US/firefox/addon/auto-reload-tab) - позволяет установить вкладкам таймер по которому они будут перезагружаться
<br>
[Simple Tab Groups](https://addons.mozilla.org/en-US/firefox/addon/simple-tab-groups/) - создает группы вкладок между которыми можно переключаться. Совместимо с **Tree Style Tab**. Может работать как своеобразный меннеджер сессий, если в настройках выбрать "создание новой группы" для открытых окон.  <sub>(для удобной работы с **Tree Style Tab** нужно отключить авто создание пустой "групповой" вкладки в **Tree Style Tab**, если вкладка открыта меньше чем N сек. назад)</sub>
<br>
[FoxyTab](https://addons.mozilla.org/en-US/firefox/addon/foxytab/) - набор операций для вкладок, доступных через меню вкладок: закрыть дубли, закрыть слев, перезагрузить каждые N сек, переместить, сортировать по параметру и т.д.
<br>
[Undo Close Tab](https://addons.mozilla.org/en-US/firefox/addon/undoclosetabbutton/) - кнопка открытие недавно закрытых вкладок и список недавно закрытых вкладок по клику правой кнопкой мыши
<br>
[Discard Tab](https://addons.mozilla.org/en-US/firefox/addon/discard-tab/) - добавляет пункт меню в контекстное меню вкладки для выгрузки вкладки из памяти
<br>
[Tab Unloader](https://addons.mozilla.org/en-US/firefox/addon/tab-unloader-we/) - добавляет подпункт в контекстное меню вкладки для групповых действий с выгрузкой вкладок
<br>
[Close Tabs to the Left](https://addons.mozilla.org/en-US/firefox/addon/close-tabs-left/) - добавляет в контекстное меню вкладок пункт "закрыть все вкладки слева"

## Работа с сессиями, группами вкладок и контейнерами (изоляцией сайтов друг от друга)
[Session Boss](https://addons.mozilla.org/en-US/firefox/addon/session-boss/), [Tab Session Manager](https://addons.mozilla.org/en-US/firefox/addon/tab-session-manager), [MySessions](https://addons.mozilla.org/en-US/firefox/addon/my-sessions/) - расширения для работы с сессиями, сохранение, восстанановление и др. В современном Firefox права расширений ограничены, поэтому нормально **сохранить ссылки на открытые локальные файлы и подобное невозможно**. **Совет:** использовать [Simple Tab Groups](https://addons.mozilla.org/en-US/firefox/addon/simple-tab-groups/) для таких задач, оно не хуже.
<br>
[Temporary Containers](https://addons.mozilla.org/ru/firefox/addon/temporary-containers/) или [Firefox Multi-Account Containers](https://addons.mozilla.org/ru/firefox/addon/multi-account-containers/) - создает изолированные контейнеры для вкладок. Можно в каждом из контейнеров войти на один и тот же сайт под разными именами. Расширение имеет ограничение, история посещений (отпечаток браузера) не полностью изолированна, как это сделано в "приватный режим", но и этого должно быть достаточно <sub>каждая будет иметь свою копию **cookies** и **localStorage**</sub>
<br>
[Conex](https://addons.mozilla.org/en-US/firefox/addon/conex/) - группировка табов, каждая группа в отдельном контейнере со своей копией куков и др. инфой (т.е. можно в каждой группе войти на один и тот же сайт под разными никами). К сожалению расширение **недостаточно удобно**.

## Скачивание (grubbing) видео, аудио, картинок и других ресурсов
[Grab Any Media](https://addons.mozilla.org/en-US/firefox/addon/grab-any-media/) - поиск ссылок на audio и video файлы на странице (слабый аналог FlashGot)
<br>
[Double-click Image Downloader](https://addons.mozilla.org/en-US/firefox/addon/double-click-image-download/) - быстрое сохранение изображений (по клику, перетаскиванию, сочетанием клавиш). Можно сохранить все изображения на странице.
<br>
[Video DownloadHelper](https://addons.mozilla.org/en-US/firefox/addon/video-downloadhelper/) - популярное расширение для скачивание видео с различных сайтов. Возможна подгрузка рекламы или сбор статистики <sub>упоминаю их потому что расширение популярно</sub>. Но как вариант может понадобиться.
<br>
[DownThemAll!](https://addons.mozilla.org/firefox/addon/downthemall/) - для удобного управление загрузками с дополнительными фильтрами и опциями, многопоточная загрузка не поддерживается. Не путать со старым расширением **DownThemAll!** на XUL который имел намного больший функционал.

## Пользовательские скрипты (user scripts) 
[Greasemonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey) или [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) - менеджер пользовательских скриптов javascript.

## Пользовательские стили (CSS user styles)
[Stylus](https://addons.mozilla.org/firefox/addon/styl-us/) - можно применять CSS стили к отдельным сайтам меняя их оформление, и подключать готовые стили написанные другими пользователями с сайтов репозиториев таких стилей.

## Блокировка рекламы
[uBlock Origin](https://addons.mozilla.org/ru/firefox/addon/ublock-origin) <sub>(лучшая замена для AdBlock Plus)</sub> - блокировка рекламы и сбора статистики
<br>
[Google search link fix](https://addons.mozilla.org/en-US/firefox/addon/google-search-link-fix/) - чистит ссылки в поисковиках Google, Yandex от переадресации. На деле приватность не защищает, но убирает раздражающую переадресацию и переход по ссылке станет быстрее.
<br>
[Decentraleyes](https://addons.mozilla.org/ru/firefox/addon/decentraleyes/) - встраивает набор некоторых популярных javascript библиотек в Firefox, так что при открытии страниц библиотеки не загружаются снова из интернета и не происходит проверки на их актуальность (нету лишних запросов в интернет). Экономит трафик, защищает от отслеживания, ускоряет загрузку страниц.

## Изменение и управление поведения отдельных сайтов и сервисов
[Ageless for YouTube](https://addons.mozilla.org/en-US/firefox/addon/ageless/) - снимает ограничение роликов youtube по возрасту
<br>
[View Image](https://addons.mozilla.org/ru/firefox/addon/view-image/) - для сайта Google, добавляем в просмотр картинок на странице поиска картинок кнопку по которой можно посмотреть полную версию картинки
<br>
[Exodify](https://addons.mozilla.org/en-US/firefox/addon/exodify/) - для сайта Google Play, показывает сервисы которым отправляет статистику конкретное приложение
<br>
[Iridium](https://addons.mozilla.org/ru/firefox/addon/particle-iridium/) - настройка youtube, установка качества по умолчанию, отключение авто воспроизведения и другое
<br>
[Enhancer for YouTube](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/) - настройки для youtube

## Для закладок, работы с ними и дополнительные функции
[Bookmark Tab Here](https://addons.mozilla.org/en-US/firefox/addon/bookmark-tab-here/) - удобное добавление закладок через меню по правой кнопке мыши на или в каталоге закладок
<br>
[Default Bookmark Folder](https://addons.mozilla.org/ru/firefox/addon/default-bookmark-folder) - можно установить каталог для закладок по умолчанию, добавление закладок в адресную строку, позицию закладки при добавлении (верх/низ каталога) etc
<br>
[Checkmarks](https://addons.mozilla.org/firefox/addon/checkmarks-web-ext) - проверяет закладки на существование страницы, импорты, синхронизацию, может восстановить иконки закладок.

## Работающие как отдельные программы

## Добавляющие новый функционал
[NoSquint Plus](https://addons.mozilla.org/ru/firefox/addon/nosquint-plus) или [Zoom Page WE](https://addons.mozilla.org/en-US/firefox/addon/zoom-page-we/) - удобное управление масштабом страницы и отдельно масштабом текста. Умеет подгонять страницу по ширине окна (ужимать).
<br>
[Foxy Gestures](https://addons.mozilla.org/en-US/firefox/addon/foxy-gestures/) и [Gesturefy](https://addons.mozilla.org/en-US/firefox/addon/gesturefy/) - можно вешать действия на жесты.
<br>
[Print Edit WE](https://addons.mozilla.org/en-US/firefox/addon/print-edit-we/) - сохранение страницы как .PDF, редактирование перед печатью и настройки параметров печати.
<br>
[FoxyProxy Standard](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/) - удобное управление настройками proxy
<br>
[Awesome RSS](https://addons.mozilla.org/en-US/firefox/addon/awesome-rss/) - иконка RSS и Atom в адресной строке, по нажатию на иконку может открываться отдельная программа для чтения RSS и Atom лент, **если** эта программа установлена в системе отдельно и назначена **в системе** по умолчанию для чтения RSS и Atom лент.
<br>
[Snap Links Plus](https://addons.mozilla.org/en-US/firefox/addon/snaplinksplus/) - можно прямоугольником выделить ссылки и так открыть, копировать, добавить в закладки группу ссылок.
<br>
[View Page Archive & Cache](https://addons.mozilla.org/ru/firefox/addon/view-page-archive) или [Resurrect Pages](https://addons.mozilla.org/ru/firefox/addon/resurrect-pages) - можно получить ссылки на страницу в веб архиве и кэше поисковиков (например если страница удалена, то она может быть просмотрена из архива или кэша).
<br>
[Copy Link Text](https://addons.mozilla.org/ru/firefox/addon/copy-link-text-webextension/) - можно копировать текст ссылки
<br>
[Copy PlainText](https://addons.mozilla.org/en-US/firefox/addon/copy-plaintext) - добавляет в контекстное меню пункт для копирования текста без форматирования
<br>
[InlineDisposition Reloaded](https://addons.mozilla.org/ru/firefox/addon/inlinedisposition-reloaded/) - делает все файлы вместо скачиваемых просматриваемыми, например текст или видео вместо скачивания будут или попытаются открыты в браузере
<br>
[Minimap Scroller](https://addons.mozilla.org/en-US/firefox/addon/minimap-scroller-sidebar/) - отображает сайт в виде mini map (уменьшенной копии), так что его можно увидеть целиком не прокручивая страницу.
<br>
[Domain in Title](https://addons.mozilla.org/en-US/firefox/addon/domain-in-title/) - добавляет адрес страницы в заголовок окна и всплывающую подсказку с заголовком окна
<br>
[Parent Path](https://addons.mozilla.org/en-US/firefox/addon/parent-path/) - быстрый переход по частям ссылки в адресной строке. Удобно для перехода на главную страницу
<br>
[Link Properties Plus WE](https://addons.mozilla.org/ru/firefox/addon/link-properties-plus/) - предоставляет расширенные свойства для ссылок: размер файла по ссылке, дату последнего изменения и т.п.
<br>
[Save In…](https://addons.mozilla.org/en-US/firefox/addon/save-in/) - пункт контекстного меню (по правой кнопке мыши) который позволяет сохранять сразу в предопределенный каталог
<br>
[Open in Browser](https://addons.mozilla.org/en-US/firefox/addon/open-in-browser/) - дополнительное меню при сохранении файлов, позволяет открывать файлы внутри браузера (например можно проиграть видео внутри браузера встроенным плеером вместо его скачивания)
<br>
[HighlightAll](https://addons.mozilla.org/en-US/firefox/addon/highlightall/) - продвинутый поиск по странице с отметками положения найденного. Некоторая замена нерабочему устаревшему **FindBar Tweak**. К сожалению **у расширения много багов**.
<br>
[Find in Page with Preview](https://addons.mozilla.org/firefox/addon/find-in-page-with-preview/) - поиск по странице с предпросмотром и подсветкой найденного.
<br>
[Shortkeys (Custom Keyboard Shortcuts) for Firefox](https://addons.mozilla.org/firefox/addon/shortkeys/) - управление сочетаниями клавишь (hot keys)
<br>
[Drag-Select Link Text](https://addons.mozilla.org/en-US/firefox/addon/drag-select-link-text/) - позволяет выделять текст ссылок без зажатия ```Alt```

## Управление видео и аудио
[MuteTab](https://addons.mozilla.org/en-US/firefox/addon/mutetab/) - можно отключить звук во всех вкладках по умолчанию и включать только вручную
<br>
[Video Speed Controller](https://addons.mozilla.org/ru/firefox/addon/videospeed/) - добавляет дополнительные горячие клавиши (hot keys) для управление воспроизведением видео на сайтах
<br>
[Floating Player](https://addons.mozilla.org/en-US/firefox/addon/floating-player/) - по нажатию кнопки видео со страницы открывается в отдельном окне браузера
<br>
[Video Background Play Fix](https://addons.mozilla.org/en-US/firefox/addon/video-background-play-fix/) - блокирует функции через который сайт может определить перешел пользователь на другую вкладку, минимизировал окна, включил полноэкранный режим и прочее, так например youtube не сможет определить это и не будет останавливать видео при уходе пользователя со страницы (особенно на Android системах)

## Работа с поисковыми движками, их функционалом и интерфейсом
[Swift Selection Search](https://addons.mozilla.org/en-US/firefox/addon/swift-selection-search/) - при выделении текста на странице появляется всплывающая подсказка через которую можно искать выделенный текст в разных поисковых системах (google, yandex, ...). Внутрь расширения можно добавлять свои поисковые системы или загружать из файла профиля (настроек) Firefox: файл `search.json.mozlz4` в профиле Firefox.
<br>
[mozlz4-edit](https://addons.mozilla.org/ru/firefox/addon/mozlz4-edit/) - позволяет добавлять поисковые системы Firefox вручную. Сам список поисковых систем в каталоге профиля Firefox, файл: `search.json.mozlz4` в профиле Firefox. <sub>После редактирования нужно перезапустить Firefox</sub>. Может просматривать файлы оканчивающиеся на "lz4" (backup закладок, сессий, отчетов об ошибках и др.)

## Гиковские, для продвинутых пользователей
[NoScript](https://addons.mozilla.org/ru/firefox/addon/noscript) и [uMatrix](https://addons.mozilla.org/en-US/firefox/addon/umatrix/) <sub>не рекомендуется обычным пользователям, излишне сложно</sub> - можно отключить видео/аудио на сайтах, полезно например в дороге при дорогом и медленном трафике сотовых операторов.
<br>
[Change Timezone (Time Shift)](https://addons.mozilla.org/en-US/firefox/addon/change-timezone-time-shift/) или [Spoof Timezone](https://addons.mozilla.org/en-US/firefox/addon/spoof-timezone/) - смена часового пояса браузера, который видят сайты
<br>
[AdNauseam](https://addons.mozilla.org/firefox/addon/adnauseam/) - блокирует рекламу и может кликать по скрытым банерам, таким образом обманывая рекламодателей посылая ложную статистику. На самом деле в нем есть баги и использовать его как основной блокировщик рекламы трудно. На сегодня это расширение является ответвлением от **uBlock Origin**.

## Словари и локализации
[Dictionaries and Language Packs](https://addons.mozilla.org/en-US/firefox/language-tools/) - официальные словари и локализации <sub>Для старых версий Firefox на странице есть кнопка "просмотреть все версии"</sub>
<br>
[Объединённый словарь русской орфографии](https://addons.mozilla.org/en-US/firefox/addon/unified-russian-english-spell/) - совмещенный словарь англ. + рус. <sub>При выборе словаря (клик правой кнопкой мыши на поле ввода) этот словарь имеет название "русский" хотя проверяет на двух языках сразу.</sub>

## Разное
[Page Hacker](https://addons.mozilla.org/en-US/firefox/addon/page-hacker/) - позволяет редактировать страницу прямо в Firefox
<br>
[SiteDelta Watch](https://addons.mozilla.org/en-US/firefox/addon/sitedelta-watch/) и [SiteDelta Highlight](https://addons.mozilla.org/en-US/firefox/addon/sitedelta-highlight/) или [Update Scanner](https://addons.mozilla.org/en-US/firefox/addon/update-scanner) - мониторинг сайтов на изменения, подсветка измененных областей и др. функции.
<br>
[Chrome Store Foxified](https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/) - можно устанавливать некоторые расширения для Chrome в Firefox (из Chrome Store)
<br>
[Plasma Integration](https://addons.mozilla.org/firefox/addon/plasma-integration/) - для интеграции с KDE (системами Kubuntu, OpenSUSE KDE, Manjaro KDE и прочими с KDE)
<br>
[Saka Key](https://addons.mozilla.org/firefox/addon/saka-key/) - привязывает сочетания клавиш (hot keys) к стандартным действиям со страницей такими как scroll, zoom, обновление страницы и прочее.

# Расширения для которых НЕТ аналога в Firefox 57+ (с переходом на WebExtensions API)

1. [FindBar Tweak](https://addons.mozilla.org/ru/firefox/addon/findbar-tweak) - удобный поиск по странице с отметками найденного на полосе прокрутки.
2. [DownThemAll!](https://addons.mozilla.org/en-US/firefox/addon/downthemall/) - менеджер загрузок, хорошо интегрирован с Firefox и может качать файлы доступные только авторизованным пользователям. Может качать в несколько потоков. Расширение к нему [DownThemAll! AntiContainer](https://addons.mozilla.org/ru/firefox/addon/downthemall-anticontainer/) позволяет скачивать файлы с сайтов, которые не дают прямых ссылок и скачиваются только браузером. Не путать с новой версией **DownThemAll!** которая не на XUL и имеет меньший функционал.
3. [Dictionary Switcher](https://addons.mozilla.org/en-uS/firefox/addon/dictionary-switcher/) - индикатор текущего словаря, переключение (автоматическое или нет) и другие параметры.
4. [FlashGot Mass Downloader](https://addons.mozilla.org/ru/firefox/addon/flashgot/) - поиск ссылок на видео, файлы и интеграция с любым менеджером загрузок

# Программы (замена расширений, которые невозможно реализовать на WebExtensions API)

* [ShareX](https://getsharex.com/downloads/) (Windows) - скриншоты, запись экрана (в том числе в gif), линейка, выбор цвета, встроенный редактор скриншотов и д.р. В настройках этой программы можно установить рашсирение для интеграции с Firefox. Имеет расширение для интеграции с Firefox (включение в настройках программы).
* [Spectacle](https://www.kde.org/applications/graphics/spectacle/) (Kubuntu) - скриншоты <sub>чтобы сделать скриншот всплывающих окон нужно поставить задержку в настройках и во время задержки вывести всплывающее окно</sub>
* [Flameshot](https://github.com/lupoDharkael/flameshot) (linux) - скриншоты, с встроенными инструментами для редактирования
  * <sub>Для интеграции **Flameshot** в систему в настройках клавиш нужно удалить связь клавиши `print` с встроенной программой скриншотов. И назначить команду `flameshot gui` для скришота области экрана, и команду `flameshot full` для скришота всего экрана.</sub>
* [peek](https://github.com/phw/peek) (linux) - запись экрана в виде gif
  * <sub>Можно назначить например на `ctrl + print` команду `peek` для записи области экрана</sub>
* [SimpleScreenRecorder](http://www.maartenbaert.be/simplescreenrecorder/) (linux) - запись экрана как видео
* [KRuler](https://www.kde.org/applications/graphics/kruler/) (Kubuntu) - на экраная линейка
* [Color Picker](https://userbase.kde.org/Plasma/ColorPicker) и [KColorChooser](https://www.kde.org/applications/graphics/kcolorchooser/) (Kubuntu) - выбор цвета
* [qBittorrent](https://www.qbittorrent.org) - торрент клиент
* [HTTrack](https://www.httrack.com) - копирование сайтов целиком
* [FileZilla](https://filezilla-project.org) - клиент FTP
* [Pidgin](https://pidgin.im) - мессенджер, поддерживает многие протоколы, особенно с [плагинами](https://developer.pidgin.im/wiki/ThirdPartyPlugins) <sub>(Skype чат, шифрование на стороне пользователей [OTR](https://en.wikipedia.org/wiki/Off-the-Record_Messaging), Facebook Chat, WhatsApp etc)</sub>
* [Thunderbird](https://www.thunderbird.net) - почтовый клиент
* [uGet](http://ugetdm.com/downloads) <sub>(не путать с неудобной kGet, uGet свободно работает и в KDE)</sub> - менеджер загрузок
* [KeePassXC](https://keepassxc.org/) - менеджер паролей. Имеет расширение для интеграции с Firefox (включение расширения в настройках программы).

# Bookmarklets

Это закладка с JavaScript внедряющимся на страницу и выполняющимся в момент нажатия на закладку.
Для создания bookmarklet нужно создать закладку со скриптом в строке адреса (поле location):
```javascript
javascript:void((async () => {
	alert('test');
})());
```
Во время создания код bookmarklet преобразуется в [URI Encoding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI). Различные функции JavaScript связанные с переадресацией страницы могут быть запрещены политиками сайта, так что заменить расширения в этом плане не получится, так как подобные функции будут работать только на части сайтов. Также существуют [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) теги, которые в режиме **closed** делают содержимое недоступным для изменения скриптами (и bookmarklet'ами).

В новых версиях Firefox сайты могут блокировать `inline` скрипты через [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) (**CSP**), на таких сайтах bookmarklets могут не сработать совсем. Если создатели браузеров не изменят обработку bookmarklets, то **со временем bookmarklets перестанут работать совсем**, потому что внедрение **CSP** повышает безопасность и считается хорошей практикой.

[marklets.com](http://marklets.com/) - репозитории готовых bookmarklets, код не проверяет никто.

# Официальные и сторонние сборки Firefox

**Note:** версии для мобильных устройств можно запускать в эмуляторах систем.

* [Firefox](https://ftp.mozilla.org/pub/firefox/) - **официальная**, обычный Firefox
* [Firefox EME](https://ftp.mozilla.org/pub/firefox/) - **официальная**, без автозагрузки плагинов с закрытым кодом (например, встроенных кодеков для видео, может не играть некоторое видео)
* [Firefox ESR](https://ftp.mozilla.org/pub/firefox/) - **официальная**, стабильная версия, обновляется почти раз в год
* [Tor Browser](https://www.torproject.org/projects/torbrowser.html.en) - **официальная** (совместно с Mozilla), максимально анонимная сборка с встроенным постоянным подключением через анонимные прокси
* [Pale Moon](https://www.palemoon.org/) - по утверждению разработчика вырезан сбор статистики, сборка собрана с дополнительными оптимизациями, есть оптимизации для CPU Intel Atom. Имеет странности в лицензии. Проект планирует сохранить поддержку XUL (то есть старых расширений с богатым функционалом) и развивать ее дальше.
* [Waterfox](https://www.waterfoxproject.org/) - аналогично Pale Moon, но со своими особенностями
* [IceCat](http://ftp.gnu.org/gnu/gnuzilla/) - **официальная** (от проекта gnu), с удаленными следящими опциями, на деле не очень качественная, лучше использовать TorBrowser
* [Firefox Developer Edition](https://www.mozilla.org/ru/firefox/developer/) - **официальная**, альфа версия Firefox с дополнительными инструментами для разработчика и багами
* [Firefox Unbranded Builds](https://wiki.mozilla.org/Add-ons/Extension_Signing#Unbranded_Builds) - **официальная**, сборка Firefox без фирменных знаков Mozilla в которую можно устанавливать неподписанные расширения, нету авто обновления.
* [SeaMonkey](https://www.seamonkey-project.org/) - **официальная**, имеет старомодный интерфейс и дополнительные настройки, медленно развивается и отстает от Firefox.
* [Librefox](https://github.com/intika/Librefox) - **устарела и не обновляется**, это настроенный Firefox с вырезанными или отключенными опциями телеметрии, с патчами приватности и подобное.
* [LibreWolf](https://gitlab.com/librewolf-community/browser/linux) - ответвление от [Librefox](https://github.com/intika/Librefox), это настроенный Firefox с вырезанными или отключенными опциями телеметрии, с патчами приватности и подобное.
* [Firefox for Android (Fennec)](https://www.mozilla.org/en-US/firefox/android/all/) - **официальная мобильная,** Firefox для Android, мобильная версия с урезанными и измененными функциями. Есть для ARM и Intel процессоров. Поддерживает расширения, но не так полно (по крайней мере пока).
* [Firefox for Android версии 70 и выше](https://github.com/mozilla-mobile/fenix/releases) (он же **fenix**, он же назывался **Firefox Preview** во время разработки) - **официальная мобильная,** это тот же **Firefox for Android**, но интерфейс отрисовывается не с помощью средств самого Firefox, а с помощью Mozilla Android Components, что должно сделать браузер более быстрым.
* [Firefox for iOS](https://www.mozilla.org/en-US/firefox/ios/16.0/releasenotes/) - **официальная мобильная,** версия для iOS на движке WebKit, т.к. iOS не поддерживает родной движок Firefox. Не поддерживает расширения, по сути это другой браузер.
* [Firefox Focus](https://github.com/mozilla-mobile/focus-android#firefox-focus-for-android) - **официальная мобильная,** урезанная версия Firefox, в теории работает быстрее. Есть дополнительные функции, которых может не быть в обычном **Firefox for Android.** Для систем не поддерживающих родной движок Firefox использует другие движки (например в iOS).
* [Firefox Klar](https://github.com/mozilla-mobile/focus-android#firefox-focus-for-android) - **официальная мобильная,** это **Firefox Focus** с другим именем и отключенной по умолчанию телеметрией (в **Firefox Focus** она включена по умолчанию). Эта сборка для Германии, т.к. слово в названии "focus" уже занято другой торговой маркой.
* [Firefox Lite](https://support.mozilla.org/en-US/kb/get-started-firefox-lite) - **официальная мобильная,** похож на **Firefox Focus** тем, что использует движок из Android, а не родной для Firefox. Фактически это другой браузер. Некоторые из особенностей: встроенная возможность сохранять скриншот всей страницы и блокировка рекламы по умолчанию. Из Google Play загрузка доступна для Азиатских стран.
* [Firefox Preview (Fenix)](https://github.com/mozilla-mobile/fenix) - **официальная мобильная,** это тестовая версия Firefox, не для обычного использования, на ней Mozilla тестирует новые разработки. Можно сказать, что это Alpha версия Firefox. Архитектура **Firefox Preview** может сильно отличаться от текущей версии Firefox.

# Настройки для удобства

**Note 1:** Если вы ищите настройки Firefox и находите серьезно выглядящие списки на ```github``` (в том числе по ссылкам из этой статьи), то **НЕ ОТНОСИТЕСЬ К НИМ С ДОВЕРИЕМ**. Доверять описанию опций можно только с сайтов ```mozilla.com``` и ```bugzilla.mozilla.org```. Нужно помнить, что смотреть нужно ```английские``` версии этих статей, потому что русские версии неполные.

**Note 2:** Вам следует знать, что настройки по умолчанию для ```release``` версии Firefox и для ```Beta/Alpha/Developer``` версий различаются. Например, в ```Developer``` версии Firefox настройка ```toolkit.telemetry.enabled``` заблокирована от изменений и изменить ее можно только через [AutoConfig](https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig). Эта настройка включает в Firefox сбор дополнительной статистики **только если сбор телеметрии включен** в стандартных настройках и тут дана как пример.

**Note 3:** Вам следует знать, что в Firefox есть специальные файлы и каталоги настройки это **общие настройки** для всех запущенных версий Firefox. Для **linux** систем это каталоги ```/usr/lib/firefox```, ```/usr/lib/firefox-addons```; для **Windows** систем это реестр. Подробное описание этих настроек вы можете найти в документации Mozilla по ссылка на списки настроек ниже.

**Скрытые настройки Firefox:**
1. `profile/user.js`: Это аналог страницы `about:config`, но имеет больший приоритет. Просто скрытые настроек.
    * Скопировать файл [user.js](user.js) с моими настройками для удобства в **каталог профиля Firefox** ```profile/user.js``` и перезапустить Firefox. В нем отключены некоторые опции, что может сломать некоторые сайты, но ничего особо критичного.
    * <sub>Для Firefox **для Android** можно менять только вручную или получить [root права](https://4pda.ru/2013/05/11/99836/).</sub>
2. `firefox/policies.json`: файл ```policies.json``` это просто еще один вид настроек, начиная с **Firefox 63** только через них можно отключить проверку обновлений. В этих настройках проверка обновлений отключена, если хотите сгенерировать свои настройки используйте [Enterprise Policy Generator](https://addons.mozilla.org/firefox/addon/enterprise-policy-generator/). Обновляемый список опций политик можно найти [тут](https://github.com/mozilla/policy-templates/blob/master/README.md)
    * Скопировать файл [policies.json](policies.json) с настройками политик по пути ```distribution/policies.json``` в **каталог установленного Firefox**<sub>(не профиля)</sub> и перезапустить Firefox. Этот вариант настроек отключает авто проверку обновлений. Чтоб обновить Firefox файл на вермя обновления нужно удалять и перезапускать Firefox.
3. `profile/chrome/userChrome.css`: Это файл стилей, который действует на интерфейс Firefox. Через него можно менять оформление кнопок, строки адреса, боковую панель и т.д.
    * [Custom CSS tweaks for Firefox 57+](https://github.com/Aris-t2/CustomCSSforFx) - набор стилей и настроек от [Aris-t2](https://github.com/Aris-t2) для Firefox, некая замена старым расширениям для настройки, новое API не позволяет расширениям менять настройки, поэтому копировать стили и настройки придется вручную.

**Если хотите больше настроек:**
1. Неофициальная подборка настроек - [pyllyukko/user.js](https://github.com/pyllyukko/user.js)
2. Неофициальная подборка настроек, развивается быстрее всего [ghacks-user.js](https://github.com/ghacksuserjs/ghacks-user.js) и [ghacks-user.js/wiki](https://github.com/ghacksuserjs/ghacks-user.js/wiki)
3. Еще один тип настроек Firefox, которые не меняется ни через ```user.js```, ни через ```distribution/policies.json``` это [AutoConfig](https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig)
4. Статья со списком некоторых опция сбора телеметрии - [Telemetry](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/index.html)
и отдельно [Telemetry » Internals](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/index.html)
5. Еще одна статья о телеметрии - [How to stop Firefox from making automatic connections](https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections)
6. [Список русского mozilla-russia форума](https://forum.mozilla-russia.org/viewtopic.php?id=36226)
7. [mozillazine.org](http://kb.mozillazine.org/Firefox_:_FAQs_:_About:config_Entries) - **огромный** сборник настроек в виде wiki

# Что нужно знать о приватности (сборе статистики компанией Mozilla)

В **Mozilla Firefox** встроены функции для сбора статистики. Она собирается и явно, и неявно. Собираются данные о окружающих Wi-Fi точках вокруг, гео данные и многие другие. Искать информацию о них долго и составлять инструкцию по их отключению долго. Универсального решения нет. Поэтому в данном блоге они не описаны. Самый простой вариант это использовать **Tor Browser**, но в нем отключена часть функций двойного назначения, они и могут собирать статистику, и нужны для работы некоторых функций сайтов. Поэтому использовать его обычным образом трудно. Существует **неофициальная** сборка **Firefox** с отключенным сбором статистики, это [LibreWolf](https://gitlab.com/librewolf-community/browser/linux).

**Note.** Mozilla сделала множество настроек в Firefox. Но не сделала универсальной опции отключения сбора телеметрии целиком. Другими словами, нужно изменить значения буквально сотен параметров чтобы действительно отключить телеметрию и с каждой новой версией Firefox любой из этих параметров может быть замене на другой или могут быть добавлены новые параметры. Поэтому для людей следящих за опциями Firefox это превращается в сложную работу.

**Google Chrome** собирает намного больше статистики, и присваивает каждому пользователю уникальный номер. Тоже касается и **Chromium** (свободной версии **Google Chrome**), но в меньшей степени. Если нужно использовать **Google Chrome** можете оценить [Chromium](https://www.chromium.org/Home) с меньшим сбором статистики или **неофициальный** проект [ungoogled-chromium](https://github.com/Eloston/ungoogled-chromium) делающий сборки **Chromium** с вырезанным сбором статистики.

# Что нужно знать о XUL (старой системе расширений Firefox)

Когда-то Firefox поддерживал XUL и расширения не имели ограничений. Разработчики могли реализовать любой функционал. Сейчас Mozilla заменила XUL на Web Extensions API, систему совместимую с Google Chrome. В Firefox функционал Web Extensions API больше, чем в Google Chrome.

Сейчас все XUL расширения удалены с сайта Mozilla.

По поводу замены API высказались негативно многие разработчики расширений. Многие старые расширения перестали работать и их никто не переписывает. Часть расширений невозможно реализовать без использования внешних программ общающихся с расширениями через "сообщения" (см. [Native messaging](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)).

На сегодня **Firefox for Android** едиснтвенный браузер для Android поддерживающий расширения.

**Старую версию** этой статьи для старых расширений на [XUL](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL) для **Firefox 52** [ESR](https://www.mozilla.org/en-US/firefox/organizations/) можно найти [тут](https://github.com/myBestSoftAndPref/soft/blob/54662c153e424389866e991c4946b0fa9f210858/src/firefox/desktop.md)

**Архив некоторых расширений на xul** для Firefox 52, которые Mozilla удалила со своего сайта [тут](https://github.com/myBestSoftAndPref/soft/tree/master/src/firefox/xul_addon_arch)

# Управление
**Обратите внимание на эту подборку!** Некоторые сочетания клавиш заменяют функции расширений [официальной странице справки для Hot Keys](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly?redirectlocale=en-US&as=u&redirectslug=Keyboard+shortcuts&utm_source=inproduct)

**Note!** Некоторые **расширения или сайты** могут блокировать или менять стандартные сочетания клавиш Firefox.

# FAQ
## Почему в английской версии Firefox видны английские сайты? Почему я вижу англо язычные версии сайтов? Как сделать русские сайты в английской версии Firefox?
При загрузке Firefox передает серверу список языков вашей версии Firefox. На ее основе делается выбор версии языка сайта. Изменить язык можно на странице ```about:config```.
<br>
Для русского языка на сайтах установить: ```intl.accept_languages``` > ```ru-RU, ru, en-US, en```. Для английского языка: ```en-US, en```

## Как запустить отдельный профиль Firefox
Командой, при этом на некоторых системах каталог профиля должен быть заранее создан и не создается автоматически. Для linux систем каталог профиля рекомендуется создать в файловой системе поддерживающей права доступа (например ext4), например можно создать в `/home` каталоге.
<br>
```
"c:\firefox.exe" -no-remote -profile "d:\<путь_к_профилю>\myProfile"
```

## (Ubuntu) Как изменить иконку Firefox на панели? Как назначить каждому профилю Firefox свой ярлык со своей иконкой?
Для этого нужно создать пару файлов ```ярлык``` и ```иконка```.
После этого все ярлыки указывающие в поле ```Icon``` имя ```иконки``` созданного ```ярлыка``` будут иметь свою иконку не только на ярлыке, но и на панели.
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

## (Ubuntu) Установка и обновление Firefox не из репозитория Ubuntu, а с сайта Mozilla
Это рекомендуется пользователям Ubuntu. На данный момент обновления Firefox в Ubuntu могут задерживаться на несколько дней. Не устанавливайте Firefox из snap в Ubuntu, snap имеет проблемы с отображением курсора, не все типы локальных дисков видны в файловом диалоге Firefox из-за неудобной политики безопасности и есть неотключаемые неконтролируемые авто обновления snap пакетов.
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

**Note:** После отключения обновления через `distribution/policies.json` невозможно узнать о выходе обновления Firefox. Смотреть информацию об обновлениях можно вручную [тут](https://www.mozilla.org/en-US/firefox/releases/)

## Как добавить в Firefox открытие `magnet` ссылок на торренты
Иногда Firefox не добавляет связи программ с `magnet` ссылками. Нужно добавить вручную:
1. Открыть страницу `about:config`
2. Создать опцию `network.protocol-handler.expose.magnet` типа ```boolean``` (`логическое`) с значением `false`

## Расширения не работают на страницах сайта [mozilla.com](https://mozilla.com). Как заставить их работать на этих сайтах?
Работа расширений на этих сайтах отключена в целях безопасности. Для включения работы расширений на этих сайтах:
1. Открыть страницу `about:config`
2. Создать опцию `privacy.resistFingerprinting.block_mozAddonManager` типа `boolean` (`логическое`) с значением `true`
3. Открыть страницу `about:config?filter=extensions.webextensions.restrictedDomains` удалить все значения данной опции (оставить пустую строку)

**Note!** В некоторых расширениях есть проверка на активацию расширения для сайт [https://mozilla.com](https://mozilla.com). Даже с опцией выше такие расширения могут отказаться работать на [https://mozilla.com](https://mozilla.com), в этом случае нужно писать разработчику расширения, чтобы он исправил это и позволил расширению работать на [https://mozilla.com](https://mozilla.com)

**Note.** Отключение блокировки расширений на этих сайтах **снизит безопасность** (даст больше прав расширениям). Включайте работу расширений для сайтов Mozilla по инструкции выше только если доверяете всем установленным в Firefox расширениям.

## Как сменить локализацию Firefox? Как изменить язык интерфейса Firefox?
Установите со страницы [Dictionaries and Language Packs](https://addons.mozilla.org/en-US/firefox/language-tools/) нужную локализацию <sub>Для старых версий Firefox (например Firefox **ESR**) на странице есть кнопка "просмотреть все версии"</sub>
После этого зайти в **Настройки** Firefox, найти пункт **Языки** и сменить язык на нужный.

**Note.** При этом параметр `intl.locale.matchOS` должен стоять в `false`

**Note.** В старой версии Firefox нужно было менять опцию `general.useragent.locale` на странице `about:config` и ставить ей значения, например: `en-US` для английского языка или `ru-RU` для русского языка.

**Note.** При смене языка список отправляемых страницам сайтов языков сбрасывается на выбранный язык локализации, это значит что вы Firefox начнет по умолчанию открывать сайты на выбранном языке, чтобы поставить нужный язык смотрите [этот раздел](#Почему-в-английской-версии-firefox-видны-английские-сайты-Почему-я-вижу-англо-язычные-версии-сайтов-Как-сделать-русские-сайты-в-английской-версии-firefox)


## (Ubuntu) Установка или обновление Firefox и Thunderbird одной командой с сайта Mozilla (т.е. это установка версий Firefox и Thunderbird от Mozilla, а не от разработчиков Ubuntu)
Сборки от Mozilla **самые новые** с своевременно закрытыми уязвимостями, вовремя обновленные и без изменений от разработчиков Ubuntu, поэтому **рекомендуется** ставить их, а не из репозитория Ubuntu. Для Ubuntu самый простой способ установить или установить или обновить Firefox с сайта Mozilla это полностью скачать архив с Firefox, распаковать его и создать ссылку на Firefox в каталоге где система может его найти (в classpth).


**Note.** Имя firefox (или thunderbird) не должно быть занято, если занято, то переименовать его в команде. Ссылку на firefox скопировать с сайта Mozilla. Рекомендуется **удалить** Firefox из Ubuntu перед этой командой. Старая версия firefox (или thunderbird) этой командой будет **затерта**.
```sh
## Установка Firefox в /opt одной командой
## ссылку на архив найти и заменить на актуальную
sudo rm -rf /opt/firefox && sudo wget https://download-installer.cdn.mozilla.net/pub/firefox/releases/70.0.1/linux-x86_64/ru/firefox-70.0.1.tar.bz2 -O /opt/firefox.tar.bz2 && cd /opt/ && sudo tar xjf firefox.tar.bz2 && sudo rm -rf firefox.tar.bz2 && sudo ln -s /opt/firefox/firefox /usr/bin/firefox

## Установка Thunderbird в /opt одной командой
## вариант для thunderbird такой же
sudo rm -rf /opt/thunderbird && sudo wget https://download-installer.cdn.mozilla.net/pub/thunderbird/releases/68.2.1/linux-x86_64/ru/thunderbird-68.2.1.tar.bz2 -O /opt/thunderbird.tar.bz2 && cd /opt/ && sudo tar xjf thunderbird.tar.bz2 && sudo rm -rf thunderbird.tar.bz2 && sudo ln -s /opt/thunderbird/thunderbird /usr/bin/thunderbird
```

После выполнения этих команд на рабочем столе **создайте ярлыки** с командой на запуск `firefox` и/или `thunderbird`. Иконки для ярлыков можно найти в `/opt/firefox` и `/opt/thunderbird`

## Команда `-no-remote` не работает. Команда `-profile` не работает. Появляется сообщение ошибки, что `Firefox` или `Thunderbird` уже запущен. Английский вариант: `Firefox is already running, but is not responding...`
Причина в старом [баге Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=382477). Возможно баг воспроизводится только для Linux систем. Есть [обходное решение](https://bugzilla.mozilla.org/show_bug.cgi?id=382477#c2) (я его пока не пробовал)

## (Ubuntu) Как полностью удалить Firefox (или thunderbird)? Это может быть нужно, если вы хотите заменить Firefox из репозитория Ubuntu на версию из другого репозитория, PPA, snap, flatpak или AppImage
Выполните команды для удаления:
```
sudo apt purge firefox xul-ext-ubufox firefox-locale-en
sudo rm -rf /usr/lib/firefox
sudo rm -rf /usr/lib/firefox-addons
```
Если у вас кроме английского установлен и другой язык, то кроме ```firefox-locale-en``` вам придется удалить и пакет для вашего языка.

Аналогично удалить **thunderbird** можно одной командой
```sh
sudo apt purge thunderbird && sudo rm -rf /usr/lib/thunderbird && sudo rm -rf /usr/lib/thunderbird-addons
```

## (Ubuntu) Как использовать файловый диалог KDE в Firefox
Установить пакеты командой `sudo apt install xdg-desktop-portal xdg-desktop-portal-kde` и запустить firefox командой `GTK_USE_PORTAL=1 firefox`
<br>
**Note:** это функция пока что с багами, не используйте!

## Как удалить английский или другой словарь Firefox по умолчанию (предустановленный)? Как оставить только установленные пользователем словари?
**Это может быть нужно**, если используется двуязычный (или мультиязычный) словарь, который проверяет сразу на нескольких языках и нет необходимости переключаться между ними. А сам Firefox в этом случае может сбиваться и автоматически переключаться на одноязычный словарь.

**Как это сделать.** Нужно подменить список предустановленных расширений, которым считается и словарь на свой. Содержимое этого списка оставить таким же, только удалить строку загружающую ненужный вам словарь.

**По шагам:**
1. Распаковываем `firefox/browser/omni.ja` и достаем оттуда chrome/`browser/content/browser/built_in_addons.json` (о том как **распаковать или упаковать omni.ja** инструкция ниже)
2. В `chrome/browser/content/browser/built_in_addons.json` будет **примерно** такой код:
    ```json
    {
        "dictionaries": {
            "en-US": "dictionaries/en-US.dic"
        },
        "system": [
            "formautofill@mozilla.org",
            "screenshots@mozilla.org",
            "webcompat-reporter@mozilla.org",
            "webcompat@mozilla.org"
        ]
    }
    ```
3. Из него удаляем строку `"en-US": "dictionaries/en-US.dic"` (у вас словарь может иметь другое имя, особенно если предустановленный словарь у вас не английский, например `"ru-RU": "dictionaries/ru-RU.dic"` для русского словаря). Получится **примерно** такой код (просто с удаленной строка или строка**ми**):
    ```json
    {
        "dictionaries": {
            
        },
        "system": [
            "formautofill@mozilla.org",
            "screenshots@mozilla.org",
            "webcompat-reporter@mozilla.org",
            "webcompat@mozilla.org"
        ]
    }
    ```
4. Кладем этот отредактированный файл по любому пути, например `C:\built_in_addons.json` или любому другому. **В Linux** лучше всего положить этот файл в каталог с правами доступа на запись только для суперпользователя (**sudo**), например: `/opt/built_in_addons.json`
5. Редактируем файл `firefox/chrome.manifest` из каталога установленного Firefox (не профиля!), добавляем туда строку (новый путь к файлу `built_in_addons.json`). Код будет таким:
    ```
    override chrome://browser/content/built_in_addons.json C:\built_in_addons.json
    ```
6. Перезапустить Firefox, готово

 > **Важно о безопасности этого способа!** <br> Ниже словаря есть список установленных расширений. Если для новой версии Firefox этот **список изменится**, а ваш измененный файл, которым вы подменили исходный останется тем же, то может быть ошибка. Хуже всего, что Firefox может работать даже с неправильной версией файла `built_in_addons.json`, так что при обновлении Firefox вы можете и не понять, что что-то не так. Firefox может использовать такие "системные" (system) расширения для закрытия дыр в безопасности. Если в списке такого расширения не будет, то **Firefox может остаться уязвим**. <br> **Поэтому:** нужно **при любом обновлении Firefox** распаковывать `firefox/browser/omni.ja` и проверять изменился файл `chrome/browser/content/browser/built_in_addons.json` или нет. Если изменился, то **использовать новую версию**.

## Что такое файл `omni.ja` в Firefox, для чего и как работает? Как распаковать или упаковать `omni.ja`? Подробнее можно почитать [тут](https://developer.mozilla.org/en-US/docs/Mozilla/About_omni.ja_(formerly_omni.jar))
Это файл содержащий файлы Firefox упакованный в один архив для быстрейшей загрузки в память и ускорения запуска Firefox. Этот файл расположен в каталоге Firefox (не профиля, Firefox, а дистрибутива!) и делится на 2 вида: **firefox/browser/omni.ja** и **firefox/omni.ja**.

Архив **firefox/browser/omni.ja** содержит файлы и настройки **по умолчанию** default (предустановленные, default).

Архив **firefox/omni.ja** содержит файлы и настройки **перезаписывающие** такие же (чьи имена совпали) из **firefox/browser/omni.ja**. Он меньше размером, потому что неперезаписанные файлы и настройки Firefox читает из **firefox/browser/omni.ja**.

**Как распаковать `omni.ja`:**
1. Переименовываем **omni.ja** в **omni.jar**
2. Распаковываем любым архиватором. Для Windows есть специальных архиватор [тут](https://developer.mozilla.org/en-US/docs/Mozilla/About_omni.ja_(formerly_omni.jar))

**Как упаковать `omni.ja`**. Нужно запаковать все файлы, а не сам распакованный omni.ja **выделив эти файлы** и нажав "запаковать" в вашем архиваторе. Паковать **в zip с максимальным сжатием** и переименовать в `omni.ja`. Потом перенести в свое место в каталоге Firefox и перезапустить Firefox.

**Note:** Итоговый перепакованный omni.ja будет отличаться размером и вроде бы даже форматом, но так советуют паковать на официальной странице Mozilla?

**Note:** Если в **omni.ja** будет с ошибками, то Firefox не запустится, поэтому **делайте копию** перед экспериментами.

## Почему даже после закрытия сайта мне приходят уведомления?
**Уведомления** (Notification) устанавливаются в Firefox. Даже после закрытия сайта Firefox подгружает **уведомления** с него. Удалить установленные **Уведомления** можно из настроек в разделе **Приватность и ...** в пункте **Уведомления**.

## Как сделать скриншот страницы в Firefox с высоким разрешением (качеством)
Нужно открыть инструменты разработчика и добавить CSS стиль (**4** после слова `zoom` означает **400%**, например **72dpi** станут **72dpi * 4 = 288dpi**):
```css
body {
  zoom: 4;
  -moz-transform: scale(4);
  -moz-transform-origin: 0 0;
}
```