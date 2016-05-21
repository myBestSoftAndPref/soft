0. Перед записью программой GParted может быть нужно отформатировать флэшку или поставить флаг раздела на который будет записана система в "boot" (для загрузки системы с него).
Установка: sudo apt-get install gparted
Примечание: не используйте KDE Parted Manager и др. если не хотите проблем.  
После всех действий: можно посмотреть командой sudo fdisk -l сообщения об ошибках, если что.

1. (не работает с Windows)
набираем sudo fdisk -l и угадываем путь к флэшке (пример: /dev/sdb)
sudo dd if=/usr/home/ubuntu.iso of=/dev/sdb bs=8MB;sync

2. (не работает с Windows)
Программой Unetbootin
Установка sudo apt-get install unetbootin

3. Инструкций как вручную сделать USB Flash с Windows под ubuntu:
http://onetransistor.blogspot.com.by/2014/09/make-bootable-windows-usb-from-ubuntu.html