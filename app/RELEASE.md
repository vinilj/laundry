signed apk

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore coinLaundry.keystore CoinLaundry-unalign.apk coinLaundry
password: password

zipalign

Windows
C:\Users\Smruti Ranjan Mishra\AppData\Local\Android\Sdk\build-tools\29.0.3>
zipalign -v 4 D:\Projects\laundry\app\CoinLaundry-unalign.apk D:\Projects\laundry\app\CoinLaundry.apk


MAC
zipalign -v 4 CoinLaundry-unalign.apk CoinLaundry.apk