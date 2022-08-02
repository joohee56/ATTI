# node 설치 후 yarn 도 설치
FROM node:16.16.0 as builder

RUN mkdir /app
WORKDIR /app

RUN npm install yarn
# root 에 app 폴더를 생성

# work dir 고정
# package.json 에 있는 것들 install 
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn install --silent
RUN yarn global add react-scripts@5.0.1 -g --silent

# 소스를 작업폴더로 복사하고 빌드
COPY . /app
RUN yarn run build



# 3001 포트 오픈
EXPOSE 3001

# container 실행 시 자동으로 실행할 
CMD ["yarn",  "start"]



# # nginx 이미지를 사용합니다. 뒤에 tag가 없으면 latest 를 사용합니다.
# FROM nginx
# # work dir 에 build 폴더 생성 /app/build
# RUN mkdir ./build

# # host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
# ADD ./build ./build

# # nginx 의 default.conf 를 삭제
# RUN rm /etc/nginx/conf.d/default.conf

# # host pc 의 nginx.conf 를 아래 경로에 복사
# COPY ./nginx.conf /etc/nginx/conf.d