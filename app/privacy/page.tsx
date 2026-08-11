import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보처리방침 | 정도치과',
  description: '정도치과 상담 신청 페이지의 개인정보처리방침입니다.',
}

export default function PrivacyPage() {
  return (
    <main className="jd-page jd-legal-page">
      <div className="jd-container">
        <a className="jd-legal-back" href="/">← 정도치과로 돌아가기</a>
        <p className="jd-overline">PRIVACY POLICY</p>
        <h1>개인정보처리방침</h1>
        <p className="jd-legal-updated">최종 수정일: 2026년 8월 11일</p>

        <section>
          <h2>1. 수집하는 개인정보 항목</h2>
          <p>정도치과는 상담 신청 시 아래 항목을 수집합니다.</p>
          <ul>
            <li>필수: 이름, 연락처, 관심 치료 항목, 희망 상담 시간</li>
            <li>자동 수집: 접속 일시, 접속 기기 정보</li>
          </ul>
        </section>

        <section>
          <h2>2. 수집 및 이용 목적</h2>
          <p>수집한 정보는 상담 예약 확인, 상담 결과 안내, 재문의 대응 목적으로만 사용합니다. 별도 동의 없이 광고성 정보를 발송하지 않습니다.</p>
        </section>

        <section>
          <h2>3. 보유 및 이용 기간</h2>
          <p>상담 신청일로부터 1년간 보관 후 파기합니다. 진료가 실제로 이루어진 경우 의료법에 따른 진료기록 보존 기간을 따릅니다.</p>
        </section>

        <section>
          <h2>4. 제3자 제공</h2>
          <p>정도치과는 이용자의 개인정보를 외부에 제공하지 않습니다. 법령에 근거가 있거나 수사기관이 적법한 절차에 따라 요청하는 경우는 예외로 합니다.</p>
        </section>

        <section>
          <h2>5. 이용자의 권리</h2>
          <p>이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제를 요청할 수 있습니다. 아래 연락처로 문의해 주세요.</p>
          <p>전화: 02-521-7981 · 이메일: privacy@jeongdo-dental.example</p>
        </section>
      </div>
    </main>
  )
}
