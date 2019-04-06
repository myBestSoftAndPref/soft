0. **Перед** записью программой ```GParted``` может быть нужно отформатировать флэшку или поставить флаг раздела на который будет записана система в ```boot``` (для загрузки системы с него).  
Установка: ```sudo apt-get install gparted```  
**Примечание:** не используйте ```KDE Parted Manager``` и др. если не хотите проблем.  
**После** всех действий: можно посмотреть командой ```sudo fdisk -l``` сообщения об ошибках, если что.

1. (не работает с ```Windows```)  
Набираем: ```sudo fdisk -l``` и угадываем путь к флэшке (пример: ```/dev/sdb```)  
Записываем: ```sudo dd if=/usr/home/ubuntu.iso of=/dev/sdb status=progress bs=8M oflag=sync```

2. (не работает с ```Windows```)  
Программой ```Unetbootin```
Установка `sudo apt-get install unetbootin`

3. Инструкций как вручную сделать USB Flash с ```Windows``` под ```ubuntu``` [тут](http://onetransistor.blogspot.com.by/2014/09/make-bootable-windows-usb-from-ubuntu.html)

4. Linux через grub (/media/user/MY_FLASH_DRIVE/ - путь к флэшке, /dev/sdc - флэшка из вывода команды: sudo fdisk -l):
    1. sudo grub-install --removable --force --boot-directory=/media/user/MY_FLASH_DRIVE/boot /dev/sdc
    2. sudo touch /media/user/MY_FLASH_DRIVE/boot/grub.cfg
    3. sudo geany /media/user/MY_FLASH_DRIVE/boot/grub.cfg
    4. Вставить текст в grub.cfg
        ```
        default=1
        timeout=15
        color_normal=light-cyan/dark-gray
        menu_color_normal=black/light-cyan
        menu_color_highlight=white/black

        menuentry "Linux Mint 18.2 Cinnamon 32-bit" {
            set isofile="/openSUSE-Leap-15.0-DVD-x86_64.iso"
            loopback loop $isofile
            linux (loop)/casper/vmlinuz boot=casper file=/preseed/linuxmint.seed iso-scan/filename=$isofile noeject noprompt splash --
            initrd (loop)/casper/initrd.lz
        }

        menuentry "Boot from the first hard drive" {
            insmod ntfs
            insmod chain
            insmod part_msdos
            insmod part_gpt
            set root=(hd1)
            chainloader +1
            boot
        }
        ```
