// src/pages/HomePage.tsx

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="intro">
        <p className="eyebrow">다우기술 금융・증권 IT 개발 지원 · Software Developer</p>
        <h1>장혜진</h1>
        <p className="tagline">
          실시간 데이터와 시스템의 상태를
          <br />
          신뢰할 수 있는 사용자 경험으로 연결하는 개발자
        </p>
        <p>
          WebSocket과 하드웨어가 연결된 실시간 서비스에서 시스템의 속도와
          사용자의 인지 차이를 해결하고, 관광 서비스를 기획·UI 설계부터
          프론트엔드 구현과 실제 배포까지 리드했습니다.
        </p>
        <p>
          화면을 구현하는 데서 끝나지 않고,
          데이터가 어떻게 흐르고 사용자가 그 상태를 어떻게 경험하는지까지
          고민하며 개발합니다.
        </p>

        <div className="links">
          <a href="https://github.com/huizhenz" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            github.com/huizhenz
          </a>

          <a href="mailto:hyeee513@naver.com">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M1.75 3A1.75 1.75 0 0 0 0 4.75v6.5C0 12.216.784 13 1.75 13h12.5A1.75 1.75 0 0 0 16 11.25v-6.5A1.75 1.75 0 0 0 14.25 3H1.75ZM1.5 4.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v.11l-6.5 4.06-6.5-4.06v-.11Zm0 1.4v5.1c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-5.1l-6.11 3.82a.75.75 0 0 1-.78 0L1.5 6.15Z"
              />
            </svg>
            hyeee513@naver.com
          </a>
        </div>
      </section>

      <section id="projects">
        <div className="projects">

          <Link to="/projects/billisan" className="project">
            <span>MAIN PROJECT</span>
            <h3>Billisan | 빌리산</h3>
            <p>IoT 기반 스마트 우산 대여·반납 서비스</p>
            <span>View Case Study →</span>
          </Link>

          <Link to="/projects/aftertaste" className="project">
            <span>MAIN PROJECT</span>
            <h3>Aftertaste | 여운</h3>
            <p>K-컬처 촬영지 기반 관광 서비스</p>
            <span>View Case Study →</span>
          </Link>

        </div>
      </section>
    </>
  );
}