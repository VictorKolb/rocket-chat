###Для запуска:
#####Установка зависимостей:
```
yarn
```
---
#####Сборка для разработки. Запустится на http://localhost:7000
```
yarn dev
```
---
#####Сборка для прода:
```
yarn prod
```
---
#####Продакшн сервер можно запускать с помощью PM2 (если есть):
```
pm2 start build/app.js
```
#####Либо просто нодой:
```
node build/app.js
```
