Khởi tạo project 
    npm init -y

Cài đặt các dependeccy
    npm i express dotenv cors helmet --save
    npm i --save-dev @types/node @types/express @types/dotenv @types/cors @types/helmet typescript

Cài đặt ts-node : 
    npm i -D ts-node

Cài đặt nodemon :
    npm i --save-dev nodemon

Khởi tạo TypeScript với Node.js :
    npx tsc --init
    tạo folder src
    tạo file index.ts trong src

lắng nghe thay đổi ts và build ra file js trong folder dist :
    npm run watch-ts

khi folder dist mà được build thì nhờ nodemon chạy hot reload:

    npm run server 

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dangtung006/typescript_nodejs.git
git push -u origin main
