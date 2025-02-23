module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': () => [2, 'always', 50],
    'body-max-line-length': [2, 'always', 72],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
    'subject-max-length': [2, 'always', 50],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'wip', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'],
    ],
  },
  parserPreset: 'conventional-changelog-conventionalcommits',
  prompt: {
    settings: {},
    messages: {
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: '필수 값 입니다.',
      upperLimitWarning: '최대 길이 초과',
      lowerLimitWarning: 'below limit',
    },
    questions: {
      type: {
        description: '커밋 유형(type)을 선택해주세요. (필수)',
        enum: {
          feat: {
            description: '새로운 기능 개발을 했어요',
            title: 'Features',
            emoji: '✨',
          },
          wip: {
            description: '기능 개발 중',
            title: 'WIP',
            emoji: '🚧',
          },
          fix: {
            description: '버그를 수정했어요!',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: '문서 업데이트를 했어요',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description:
              '코드의 의미에 영향을 주지 않는 변경을 했어요. (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: '버그 수정 또는 기능 추가 하지 않은 코드 리펙터링을 했어요',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: '성능을 향상시켰어요',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: '누락된 테스트 추가 또는 기존 테스트 수정을 했어요',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: '빌드 시스템 또는 외부 종속성에 영향을 미치는 변경을 했어요(예: vite, npm 등)',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: 'CI 구성 파일 및 스크립트를 변경했어요. (예: github actions)',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: '소스(src) 또는 테스트 파일을 수정하지 않는 기타 코드를 수정했어요',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: '이전 커밋을 리버트 합니다.',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description:
          '변경 범위 (scope)를 기록해주세요 (옵션) - ex) token, component, config, deploy, docs, lib, logs, models, scripts, tests, utils 등',
      },
      subject: {
        description: '커밋 제목을 짧게 기록해주세요 (필수)',
      },
      body: {
        description: '변경에 대한 자세한 설명을 기록해주세요',
      },
      isBreaking: {
        description: 'Breaking changes 가 있나요? (있다면 MAJOR 버전이 올라갑니다)',
      },
      breakingBody: {
        description: 'Breaking change 커밋은 설명이 필요합니다. 커밋에 대한 자세한 설명을 기록해주세요',
      },
      breaking: {
        description: 'Breaking change 에 대한 설명 (ex. BREAKING CHANGE: API 변경)',
      },
      isIssueAffected: {
        description: '연관된 JIRA 작업이 있나요?',
      },
      issues: {
        description: '작업 번호를 기재해주세요',
      },
    },
  },
}
