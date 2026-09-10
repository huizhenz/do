// BillisanPage.tsx

export default function BillisanPage() {
  return (
    <main>
      <section className="project-hero">
        <p>MAIN PROJECT · IoT / Real-time</p>

        <h1>Billisan</h1>

        <p>
          하드웨어의 실시간 상태를
          사용자가 이해할 수 있는 인터페이스로 연결했습니다.
        </p>

        <div>
          React · TypeScript · React Native · WebSocket · Zustand
        </div>
      </section>

      <section>
        <h2>Problem Solving</h2>

        <article>
          <span>01</span>

          <div>
            <h3>
              후속 이벤트가 사용자 확인 화면을
              덮어쓰는 레이스 컨디션
            </h3>

            <p>
              연속으로 발생하는 WebSocket 이벤트가 사용자 확인 화면을
              즉시 다음 상태로 전환시키는 문제를 발견했습니다.
            </p>

            <p>
              사용자 결정이 필요한 동안 자동 상태 전이를 차단하고,
              대기 중인 결과를 확인 이후 반영하도록 상태 흐름을 재설계했습니다.
            </p>
          </div>
        </article>

        <article>
          <span>02</span>

          <div>
            <h3>
              Mock에서는 정상인데
              실제 Pi에서만 발생한 데이터 오류
            </h3>

            <p>
              Mock과 실제 장비 payload의 필드명 차이를 확인했습니다.
            </p>

            <p>
              실제 wire spec을 기준으로 타입을 수정하고,
              외부 프로토콜과 앱 내부 모델을 분리했습니다.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}