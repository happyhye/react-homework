# 컴포넌트 속성 검사

- 아토믹(atomic) 또는 몰레큘(molecule) 컴포넌트를 작성합니다.
- 작성된 컴포넌트는 속성(props) 검사를 포함해야 합니다.
- 속성 검사는 prop-types, TypeScript 중 선택하세요.

<br />

## 결과물

![prop-types](https://github.com/user-attachments/assets/71e7e817-39af-4e1f-98c2-7e5730e7756b)

<br />

## 코드

```jsx
import { string, func, oneOf } from "prop-types";

function Button({ className, type, onClick, label }) {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
}

// 속성 검사
Button.propTypes = {
  className: string.isRequired,
  type: oneOf(["button", "reset", "submit"]).isRequired,
  onClick: func.isRequired,
  label: string.isRequired,
};

export default Button;
```
- `<button>` 태그로 마크업한 로그인 버튼

<br />

```jsx
import { string } from "prop-types";

function LinkButton({ className, href, label }) {
  return (
    <a className={`button ${className}`} href={href}>
      {label}
    </a>
  );
}

// 속성 검사
LinkButton.propTypes = {
  className: string.isRequired,
  href: string.isRequired,
  label: string.isRequired,
};

export default LinkButton;
```
- `<a>` 태그로 마크업한 회원가입 버튼

<br />

## 속성 검사

```bash
pnpm add prop-types -D
```
- prop-types 패키지를 설치하여 속성 검사를 하였습니다.

<br />

## 느낀 점

패키지를 사용하여 속성을 검사하니 편리했습니다.

속성 검사하는 것보다 컴포넌트 만드는 게 더 어려워서 연습을 많이 해야겠다고 생각했습니다. ㅠ_ㅠ
