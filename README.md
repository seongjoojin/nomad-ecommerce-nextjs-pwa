# [NextJS] PWA로 온라인 쇼핑몰 클론코딩

https://academy.nomadcoders.co/courses/360557

## Introduction

next js : 리액트 프레임워크 (넷플릭스,깃허브,NASA,Binance 등등)

GraphCMS : 백엔드를 위한 워드프레스인 셈. 블로그, 이커머스를 작업할때 어드민에서 상품을 빠르고 편하게 업로드하고, 그 데이터를 프론트엔드에 올릴 수 있도록 해줌.

CMS (Content Management System) : 컨텐츠 관리 시스템

## 1.2 Difference between NextJS and CRA

next는 프론트엔드를 위한 서버가 존재함.

## 1.3 What is SSR and why do we need it 

Server Side Rendering(SSR)은 앱을 렌더링하는 방법.

다른 하나는 Client Side Rendering(CSR).

SSR은 로딩에 대한 룰이 없음. 서버가 HTML을 미리 렌더링 해서 보내줌.

CSR은 로딩에 대한 룰이 있음. javascript에서 모든 내용을 생성함.

먼저 서버가 시작되고 나서 클라이언트가 상호 작용을 받음.

## 2.1 Introduction to GraphCMS 

어떤 때 GraphCMS을 사용할까?

웹사이트가 있는데 유저가 아무런 컨텐츠를 만들지않고 컨텐츠를 받기만 하는 blog등.

양방향으로 커뮤니케이션이 있고 사용자가 인증해야하고 그럴 때는 GraphCMS는 좋은 선택이 아님

## 2.2 Creating the Schemas on GraphCMS

https://docs.graphcms.com/developers/schema

## 2.3 Finishing Schemas and Testing

https://docs.graphcms.com/developers/api

## 3.6 Products on Sale Query

스키마를 정한 후 바꾸지 않는 것이 좋음.

너무 많이 바꾸면 데이터를 잃어버릴 수 있음.

## 4.1 Introduction to PWA

https://developers.google.com/web/progressive-web-apps/


특징

1. 오프라인을 지원함.

2. 더 빠르고, 알림 제공 및 홈 스크린에 관여


많은 기업이 이용함 (인스타그램, 우버, 틴더 등)

위치기능 지원, 알림, 홈스크린에서 실행 가능 (웹사이트에 갈 필요가 없음)

## 4.3 Auditing with Light House part Two

pwa : manifest를 얻을 수 있는 브라우저를 의미함.

manifest는 브라우저에게 application에 대한 정보 알려줌.

https://developers.google.com/web/fundamentals/web-app-manifest/

name은 유저가 application을 열었을때 먼저 보는 것.
``
short_name은 사용자 홈 화면의 텍스트로 사용

192px의 아이콘은 홈스크린의 아이콘으로 나오고 512px 아이콘은 application을 열었을때 볼 수 있음.

둘 다 추가해야 홈스크린에 추가하겠냐는 메세지 나옴.

## 4.5 Service Workers part One

serviceworker는 유저가 웹사이트에서 벗어나도 동작하도록 도와주는 파일

serviceworker는 웹사이트가 작동 중이지 않아도 실행되는 자바스크립트 파일임.

다룰 것 : 오프라인 캐시& 푸쉬 알림

오프라인 캐싱이란 해당 웹사이트로 오는 모든 경로들을 캐치해줌.

## 4.9 Push Notification on a Web App part One 

https://web-push-codelab.glitch.me/

## 4.13 Payment API

https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API

https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API