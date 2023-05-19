# 드림코딩 React 강의 (2023-05-19 update)

이 저장소는 드림코딩 리액트 강의를 들으면서 학습한 내용을 정리하고 실습 내용을 기록하기 위한 공간입니다.

## 강의 정보

- 강의명: 드림코딩 - 리액트 개념정리 · 클론코딩
- 강사: 엘리
- 강의 링크: [https://academy.dream-coding.com/courses/react](https://academy.dream-coding.com/courses/react)

## 학습 내용

- 리액트를 쓰는 이유, 개념
- 상태 관리, 생애 주기 (useState, useEffect)
- 중첩 객체 상태 관리, 배열 상태 관리
- Reducer, Immer
- 컴포넌트의 재사용
- Context API
- 성능 개선(useMemo, useCallback)
- 로딩,에러 상태 추가
- 커스텀 훅
- 클래스 컴포넌트

## 실습 내용

1. ToDo (todo branch)

## 프로젝트 생성

1. yarn create react-app my-app
2. cd my-app
3. .gitignore

```
.yarn/*

```

4. create .yarnrc.yml

```
packageExtensions:
  react-scripts@*:
    peerDependencies:
      eslint-config-react-app: '*'
```

5. yarn start


## 프로젝트 다운 받아 시작할 때

1. yarn -v 
<br/>1.1 버전이 1.x 이면 : yarn set version stable (node.js 폴더에서) [참고](https://yarnpkg.com/getting-started/install)
<br/>1.2 버전이 3.x 이면 : OK
2. cd 원하는폴더
2. yarn install 

