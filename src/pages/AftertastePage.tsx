// AftertastePage.tsx

export default function AftertastePage() {
  return (
    <main>
      <section className="project-hero">
        <p>MAIN PROJECT · Web Service</p>

        <h1>Aftertaste | 여운</h1>

        <p>
          서비스의 기획부터 UI 설계,
          프론트엔드 구현과 배포까지 경험했습니다.
        </p>

        <div>
          React · TypeScript · Django · Kakao Maps
        </div>

        <div className="links">
          <a href="https://aftertaste-kkie.onrender.com/" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M13 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V2.707l-7.146 7.147a.5.5 0 0 1-.708-.708L11.793 2H9a.5.5 0 0 1 0-1h4z"
              />
              <path
                fill="currentColor"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2H7a.5.5 0 0 1 0 1H3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V10a.5.5 0 0 1 1 0v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5v-9z"
              />
            </svg>
            배포 사이트
          </a>

          <a href="https://github.com/wjdalswl-airair/aftertaste" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            GitHub
          </a>
        </div>
      </section>

      <section>
        <h2>Overview</h2>

        <div className="overview">
          <div>
            <h4>개요</h4>
            <p>
              K-컬처 촬영지 정보와 주변 여행 코스를 함께 제공하는
              관광 서비스로, 기획부터 UI 설계, 프론트엔드 구현, 배포까지
              담당했습니다.
            </p>
          </div>

          <div>
            <h4>역할</h4>
            <p>
              프론트엔드 개발 및 서비스 기획
            </p>
          </div>

          <div>
            <h4>기여도</h4>
            <p>
              지도 기반 검색 UI 설계, 백엔드와의 API 명세 협의,
              Progressive Rendering 등 성능 개선을 주도했습니다.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Tech Stack</h2>

        <dl className="stack-list">
          <div>
            <dt>React</dt>
            <dd>촬영지 검색부터 코스 상세까지 컴포넌트 기반 UI 구현</dd>
          </div>

          <div>
            <dt>TypeScript</dt>
            <dd>API 응답 타입을 명시해 프론트-백엔드 간 계약을 명확히 관리</dd>
          </div>

          <div>
            <dt>Django</dt>
            <dd>백엔드 팀과 REST API 명세를 함께 설계하고 연동</dd>
          </div>

          <div>
            <dt>Kakao Maps</dt>
            <dd>촬영지 위치 시각화 및 주변 코스 경로 안내 구현</dd>
          </div>
        </dl>
      </section>

      <section>
        <h2>Problem Solving</h2>

        <article>
          <span>01</span>

          <div>
            <h3>
              느린 API 하나 때문에
              Hero 전체 렌더링이 지연되는 문제
            </h3>

            <p>
              약 1.3초가 소요되는 상세 API 때문에 이미 확보된 데이터까지
              화면에 늦게 나타나는 문제를 확인했습니다.
            </p>

            <p>
              준비된 데이터부터 우선 렌더링하고,
              느린 데이터는 도착한 뒤 채우는 Progressive Rendering으로 변경했습니다.
            </p>
          </div>
        </article>

        <article>
          <span>02</span>

          <div>
            <h3>
              작품 필터가
              명소 검색 결과까지 제거하는 문제
            </h3>

            <p>
              API 계약을 확인한 결과 필터 요청 시
              명소 데이터가 빈 배열로 반환되는 구조였습니다.
            </p>

            <p>
              통합 검색은 한 번만 수행하고
              작품 필터링은 클라이언트에서 처리하도록 변경했습니다.
            </p>
          </div>
        </article>

        <article>
          <span>03</span>

          <div>
            <h3>
              이미지가 한 번에 몰려 로드되며
              초기 진입이 느려지는 문제
            </h3>

            <p>
              목록 화면의 모든 촬영지 이미지를 즉시 요청해
              초기 로딩이 지연되는 것을 확인했습니다.
            </p>

            <p>
              IntersectionObserver로 화면에 보이는 이미지부터
              순차 로드하도록 변경해 초기 진입 속도를 개선했습니다.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
