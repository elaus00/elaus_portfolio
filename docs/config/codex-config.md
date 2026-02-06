# Codex MCP 리뷰 프리셋

Codex CLI MCP를 통해 코드 리뷰를 수행할 때 사용하는 프리셋 정의.

## 프리셋

### quick

- **용도**: 빠른 스타일/린트 수준 리뷰, 단순 변경사항 확인
- **모델**: `gpt-5.1-codex-mini`
- **reasoning**: `low`

### standard (기본값)

- **용도**: 일반적인 코드 리뷰, PR 리뷰
- **모델**: `gpt-5.2-codex`
- **reasoning**: `medium`

### deep

- **용도**: 아키텍처/로직 심층 리뷰, 복잡한 변경사항 분석
- **모델**: `gpt-5.3-codex`
- **reasoning**: `high`

### max

- **용도**: 복잡한 문제에 대한 최고 수준 분석, 성능/보안 집중 리뷰
- **모델**: `gpt-5.1-codex-max`
- **reasoning**: `xhigh`

## 사용 예시

| 요청 | 적용 프리셋 |
|---|---|
| "리뷰 해줘", "코드 리뷰" | standard |
| "quick review", "간단히 봐줘" | quick |
| "꼼꼼히 리뷰 해줘", "deep review" | deep |
| "최대한 깊게 분석해줘" | max |

## 참고

- 프리셋을 명시하지 않으면 **standard**가 기본 적용됨
- 사용자가 직접 모델이나 reasoning을 지정하면 프리셋보다 우선 적용
