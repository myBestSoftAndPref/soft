Инфа о интегрированной карте
glxinfo | grep OpenGL 

Инфа о дискретной карте
DRI_PRIME=1 glxinfo | grep OpenGL

Список доступных видеокарт
xrandr --listproviders

Установка видео карте
xrandr --setprovideroffloadsink radeon Intel
или
xrandr --setprovideroffloadsink 1 0

Чтобы установить дискретную карту по умолчанию, нужно создать файл конфигов
https://wiki.archlinux.org/index.php/PRIME
