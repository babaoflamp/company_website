# Playwright MCP Setup Guide

이 프로젝트는 Playwright를 사용한 E2E 테스팅이 설정되어 있습니다.

## 설치 완료된 항목

- ✅ @playwright/test
- ✅ Playwright 브라우저 (Chromium, Firefox, WebKit)
- ✅ Playwright 설정 파일 (`playwright.config.ts`)
- ✅ 예제 테스트 (`tests/example.spec.ts`)

## 사용 가능한 테스트 명령어

```bash
# 헤드리스 모드로 모든 테스트 실행
npm test

# 브라우저를 보면서 테스트 실행
npm run test:headed

# UI 모드로 테스트 실행 (인터랙티브)
npm run test:ui

# 테스트 리포트 보기
npm run test:report
```

## Playwright MCP 서버 설정 (선택사항)

Playwright MCP 서버를 Claude Desktop과 연동하려면:

### 1. Playwright MCP 서버 설치

```bash
npx @executeautomation/playwright-mcp-server
```

### 2. Claude Desktop 설정 파일 수정

**MacOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%/Claude/claude_desktop_config.json`
**Linux**: `~/.config/Claude/claude_desktop_config.json`

설정 파일에 다음 내용 추가:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@executeautomation/playwright-mcp-server"
      ]
    }
  }
}
```

### 3. Claude Desktop 재시작

설정을 저장한 후 Claude Desktop을 완전히 종료하고 다시 시작하세요.

## MCP를 통해 사용 가능한 기능

MCP 서버가 설정되면 Claude에게 다음과 같은 작업을 요청할 수 있습니다:

- 웹페이지 방문 및 스크린샷 캡처
- 폼 작성 및 제출
- 버튼 클릭 및 네비게이션
- 요소 검색 및 검증
- 브라우저 자동화 작업
- E2E 테스트 작성 및 실행

## 테스트 작성 예시

```typescript
import { test, expect } from '@playwright/test';

test('homepage test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Portfolio/);
});
```

## 유용한 리소스

- [Playwright 공식 문서](https://playwright.dev/)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [Best Practices](https://playwright.dev/docs/best-practices)
