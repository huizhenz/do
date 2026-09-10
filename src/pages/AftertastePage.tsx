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
      </section>
    </main>
  );
}