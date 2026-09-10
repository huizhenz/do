// BillisanPage.tsx

export default function BillisanPage() {
  return (
    <main>
      <section className="project-hero">
        <p>MAIN PROJECT · IoT / Real-time</p>

        <h1>Billisan | 빌리산</h1>

        <p>
          하드웨어의 실시간 상태를
          사용자가 이해할 수 있는 인터페이스로 연결했습니다.
        </p>

        <div>
          React · TypeScript · React Native · WebSocket · Zustand
        </div>
      </section>

      <section>
        <h2>Overview</h2>

        <div className="overview">
          <div>
            <h4>개요</h4>
            <p>
              IoT 기반 스마트 우산 대여・반납 서비스로,
              라즈베리파이 우산함의 상태를 실시간으로 시각화하는
              프론트엔드를 담당했습니다.
            </p>
          </div>

          <div>
            <h4>역할</h4>
            <p>
              프론트엔드 개발
              (React Native 사용자 앱 · React 관리자 웹)
            </p>
          </div>

          <div>
            <h4>기여도</h4>
            <p>
              실시간 상태 동기화 로직 설계, WebSocket 이벤트 처리,
              하드웨어-앱 간 데이터 모델 정의를 주도했습니다.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Tech Stack</h2>

        <dl className="stack-list">
          <div>
            <dt>React</dt>
            <dd>우산함 상태를 모니터링하는 관리자 웹 대시보드 UI 구현</dd>
          </div>

          <div>
            <dt>TypeScript</dt>
            <dd>하드웨어-앱 간 데이터 계약을 타입으로 명시해 런타임 오류를 사전에 차단</dd>
          </div>

          <div>
            <dt>React Native</dt>
            <dd>대여・반납 흐름을 처리하는 사용자용 모바일 앱 개발</dd>
          </div>

          <div>
            <dt>WebSocket</dt>
            <dd>우산함의 대여・반납・고장 상태를 지연 없이 실시간 반영</dd>
          </div>

          <div>
            <dt>Zustand</dt>
            <dd>여러 화면에서 공유되는 우산함 상태를 가볍게 전역 관리</dd>
          </div>
        </dl>
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

        <article>
          <span>03</span>

          <div>
            <h3>
              재연결 시 이전 상태로
              화면이 되돌아가는 문제
            </h3>

            <p>
              네트워크가 끊겼다 재연결되는 동안 놓친 이벤트가 있으면
              화면이 실제보다 오래된 상태를 보여주는 문제를 확인했습니다.
            </p>

            <p>
              재연결 시점에 스냅샷 API로 최신 상태를 한 번 동기화한 뒤
              WebSocket 이벤트를 이어받도록 처리해 상태 유실을 해결했습니다.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
