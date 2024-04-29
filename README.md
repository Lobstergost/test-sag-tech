<p align="center">
  Тестовое задание для Node.js разработчика (Nest.js + Prisma)
</p>

### Устновка

Для запуска проекта необходимо на IDE установить nest.js, prisma и JWT модули. Также создать пустую базу данных в Postgre, данные которой (имя пользоваателя, пароль, порт, имя базы данных) прописать в файле .nev (DATABASE_URL="postgresql://NAME:PASSWORD@localhost:5432/NAMEbd?schema=public"). Все команды выполняются в консоле в катологе проекта.

```bash
npm i -g @nestjs/cli
npm install -g prisma
npm install @prisma/cli prisma pg
npm install --save @nestjs/passport
npm install --save @nestjs/jwt
npm install jsonwebtoken
```
после этого, cледующей командой создать необходимые поля в пустой базе данных 

```bash
npx prisma generate
```

## Запуск

```bash
$ npm run start
$ npm run start:dev
$ npm run start:prod
```

#### На этом мое описание заканчивается, потомучто мой код по реализации API эндпоинтов не работает - его нужно долго ровнять, если не переписывать 


