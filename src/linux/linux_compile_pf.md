Установка в Ubuntu ядра с pf патчами убирающими глюки при копировании.
И ускоряющими систему.

0. Для компиляции установить:
	sudo apt-get install libssl-dev
	
При запуске компиляции может попросить что-то доустановить.
Если компиляция прервется с сообщением ошибки в .h файле,
то значит требуется доустановить еще что-то.

Вот так можно найти зависимости, которые нужно доустановить:
	dpkg -S opensslv.h
	dpkg-query: no path found matching pattern *opensslv.h*
	$ apt-cache search openssl

1. Смотрим какая версия ядра.
uname -a

2. Качаем такую же версию исходников ядра с
https://www.kernel.org/pub/linux/kernel/

Качать нужно исходный код ядер без стабилизационных
патчей без обновлений, т.е. название не 4.4.12, а 4.4 или 4.4.0.
pf патч содержит нужные обновления (хотя по факту обновляется медленнее)

Пример название файла: linux-4.4.tar.xz

3. Качаем патч
https://pf.natalenko.name/news/
качать послюднюю версию для своего ядра (с большим номером после pf)

Пример названия файла: patch-4.9-pf5.xz

4. Распаковываем архив с ядром inux-4.4.tar.xz
Распаковываем архив с патчем patch-4.9-pf5.xz
Переписываем патч в распакованные каталог ядра

5. В консоли переходим в каталог ядра.
Копируем старые настройки ядра из ubuntu в наше новое
	cp /boot/config-`uname -r` .config
	
Если появится сообщение об ошибке при команде
make oldconfig
значит этот файл не подходит к этой версии
(разрыв между подверсиями 2.3.0 и 2.3.34 слишком большой, к примеру)

6. Загружаем старые настройки.
Дополнительные настройки появившиеся после патча вам будет предложено
включить при этом
	make oldconfig

6.1. Что выбирать в настройках:
BFS
BFQ
MuQSS
TuxOnIce
buffered writeback throttling patchset
graysky's kernel GCC patch
и все что есть или появится в списке фич на странице
	https://pf.natalenko.name/

6.2 Будет предложено выбрать CPU под который скомпилировать.
При этом можно выбрать auto GCC config или что-то подобное.
Так что все настройки установятся автоматически.

7. Чистим исходники от мусора
	make-kpkg clean

При этом может потребоваться установить пакет размером около 1 Гб

7. Патчим ядро, зайдя в его каталог
patch -p1 < patch-3.12.4-pf

8. Собираем ядро командой
	CONCURRENCY_LEVEL=`getconf _NPROCESSORS_ONLN` fakeroot make-kpkg --initrd kernel_image kernel_headers

	или
	fakeroot make deb-pkg -j 3 --initrd --append-to-version=-custom1 kernel_image kernel_headers

fakeroot make-kpkg --initrd --append-to-version=-custom kernel_image kernel_headers  -j `getconf _NPROCESSORS_ONLN`

Just run make deb-pkg instead.

9. Если выйти из каталога ядра там будут .deb пакеты которые
надо установить, это и есть ядро

	sudo  dpkg -i linux-*

(делать sudo update-grub вконце не нужно)


------------
Посмотреть планировщик
cat /sys/block/sda/queue/scheduler

Переключиться
echo bfq > /sys/block/sda/queue/scheduler

На старых ядрах можно отключить поддержку
sysctl kernel.unprivileged_userns_clone=0   (????)
чтобы не было уязвимости
