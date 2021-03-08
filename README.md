# EXPRESS-TEST
---
Для того, что бы запустить проект вам нужно:
1) Установить все условия для [Neon.js](https://neon-bindings.com/docs/getting-started/)
2) Установить и запустить [MongoDB](https://docs.mongodb.com/manual/installation/)
3) Зайти в папку addons и ввести `npm install`
4) Перети в папку проетка и ввести `npm install` (отдельно от 3 пункта)
5) Установить ts-node (`npm install -g ts-node`)
6) Провести миграцию постов (`ts-node src/migrations/post-migration-1.ts`)
7) Выполнить команду `npm run build:prod` или `npm run build:dev`
