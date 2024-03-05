FROM node:18.4

# 设置工作目录
RUN mkdir /app
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 将当前目录的所有文件复制到工作目录
COPY . .

# 暴露应用程序的端口
EXPOSE 5000

# 运行应用程序
CMD [ "npm", "start" ]
