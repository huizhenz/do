// src/pages/HomePage.tsx

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="intro">
        <p>Frontend Developer</p>
        <h1>장혜진</h1>
        <p>
          React와 TypeScript로 사용자 문제를 해결하는 프론트엔드 개발자입니다.
          IoT 하드웨어 연동 서비스와 웹 서비스를 기획부터 배포까지 경험했습니다.
        </p>
      </section>

      <section id="projects">
        <div className="projects">

          {/* 여기 */}
          <Link to="/projects/billisan" className="project">
            <span>MAIN PROJECT</span>
            <h3>Billisan</h3>
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