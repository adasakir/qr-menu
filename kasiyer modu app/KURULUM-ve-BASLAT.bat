@echo off
REM Kahvebahane Kasiyer - ilk kurulum + baslatma
cd /d "%~dp0"
echo ==========================================
echo  Kahvebahane Kasiyer Kurulum
echo ==========================================
where node >nul 2>nul
if errorlevel 1 (
  echo [HATA] Node.js bulunamadi. Lutfen https://nodejs.org adresinden Node.js LTS kurun, sonra bu dosyayi tekrar calistirin.
  pause
  exit /b 1
)
if not exist "node_modules\electron\dist\electron.exe" (
  echo Bagimliliklar kuruluyor, ilk seferde biraz surer...
  call "C:\Program Files\nodejs\npm.cmd" install
  if errorlevel 1 (
    echo [HATA] npm install basarisiz. Internete bagli oldugundan emin ol.
    pause
    exit /b 1
  )
)
if not exist "kahvebahane-server.json" (
  echo {"apiBase": "https://kahvebahane-eight.vercel.app"}> kahvebahane-server.json
  echo Sunucu ayari olusturuldu. Kafe ici sunucu kullanacaksan kahvebahane-server.json icindeki apiBase adresini degistir.
  echo Ornek: http://192.168.1.50:3000
)
echo Sunucu adresi:
type kahvebahane-server.json
echo.
echo Kasiyer baslatiliyor...
call "C:\Program Files\nodejs\npm.cmd" start
pause
