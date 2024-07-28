# 아토믹 컴포넌트 만들기

- 바닐라 프로젝트 결과물 중 일부를, 리액트를 사용해 아토믹 컴포넌트로 구현하는 실습을 진행합니다.

## 피그마 디자인 링크

[피그마 디자인](https://www.figma.com/design/2ZJxGsWzEa8Ydmq0GFLEF1/%5B%EA%B3%BC%EC%A0%9C%5D-%EC%95%84%ED%86%A0%EB%AF%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0?node-id=0-1&t=3vSp7E4BkBUsNoXd-1)

## 수행 조건

과제는 아래 조건을 충족해야 합니다.

- 모두가 접근 가능
- 의미있는 구조 설계
- 체계적인 표현 설계

## 결과물

![atomic-component](https://github.com/user-attachments/assets/0cf743dc-91dc-423e-b6bd-c1f8ee82211f)

## react developer tools로 확인한 구조

![react-developer-tools](https://github.com/user-attachments/assets/e5010472-a57c-4922-af12-154679147903)

## 폴더 구조

![folder](https://github.com/user-attachments/assets/3a18088d-50aa-433a-aee2-7d21858a8492)

- public
  - 정적요소를 분리하였습니다. (파비콘)
- src
  - 스타일링을 위한 `css` 파일과 컴포넌트를 구현한 `main.js`파일이 있습니다.

## 서버 구동하는 방법

```bash
# 순서대로 터미널에 입력

git clone https://github.com/happyhye/react-homework.git  #1
cd 02-atomic                                              #2
pnpm i                                                    #3
pnpm dev                                                  #4
```

## 느낀 점

피그마.. 어떻게 쓰는 건지 아직 잘 모르겠습니다. 검색해서 계속 알아볼 예정입니다. ㅠ^ㅠ

리액트 또한 처음 다뤄보는지라 컴포넌트 만들어보는 실습을 많이 해야겠다는 생각을 했습니다.

바닐라 프로젝트 때와 다르게 컴포넌트 생성 방법이 확실히 편해서 좋았습니다.
