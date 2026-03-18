# Chan's Study Log

이 레포지토리는 개발 및 알고리즘 공부 기록을 저장하는 GitHub Pages 블로그입니다.
복잡한 빌드 과정 없이, 순수 HTML과 CSS만으로 깔끔하게(Notion 스타일) 관리되도록 구성되었습니다.

## 새로운 공부 기록 추가하는 방법 (예시)

1. 새로운 HTML 파일(예: `blog/my-new-post.html`)을 만듭니다. 
   - (또는 기존에 있는 `first.html` 양식을 복사해서 사용하세요.)
2. `index.html` 파일을 열고, 원하는 카테고리(예: 백준 Gold)의 `<ul>` 태그 안에 아래와 같이 <li> 태그를 추가합니다.

```html
<li><a href="blog/my-new-post.html">새로운 공부 기록 제목</a></li>
```

## 구조

- `index.html`: 메인 페이지 (카테고리 및 링크 모음)
- `style.css`: 메인 페이지 스타일 (라이트/다크모드 자동 지원)
- `blog/`: 실제 공부 기록(HTML이나 Markdown 파일)을 모아두는 폴더
- `first.html`: 기존 백준 문제풀이 템플릿 파일

## 테마
- 사용자의 OS 설정에 따라 **자동으로 라이트/다크 모드**가 전환됩니다.
- 수정이 필요하다면 `style.css`의 `:root` 변수들을 변경하여 쉽게 커스텀할 수 있습니다.