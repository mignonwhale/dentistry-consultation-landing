import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 | 정도치과',
  description: '정도치과 상담 신청 페이지의 이용약관입니다.',
}

export default function TermsPage() {
  return (
    <main className="jd-page jd-legal-page">
      <div className="jd-container">
        <a className="jd-legal-back" href="/">← 정도치과로 돌아가기</a>
        <p className="jd-overline">TERMS OF SERVICE</p>
        <h1>이용약관</h1>
        <p className="jd-legal-updated">최종 수정일: 2026년 8월 11일</p>

        <section>
          <h2>1. 목적</h2>
          <p>이 약관은 정도치과 웹페이지(이하 "사이트")를 통한 상담 신청 서비스 이용과 관련해 이용자와 정도치과 간의 권리·의무를 정합니다.</p>
        </section>

        <section>
          <h2>2. 상담 신청의 성격</h2>
          <p>사이트를 통한 상담 신청은 진료 예약이 아니라 상담 일정 조율을 위한 접수입니다. 담당자가 영업일 1일 이내 연락드리며, 실제 진료 일정은 유선 통화로 확정합니다.</p>
        </section>

        <section>
          <h2>3. 정보 제공의 한계</h2>
          <p>사이트에 기재된 비용, 기간, 건강보험 적용 여부는 일반적인 안내이며 개인의 구강 상태에 따라 달라질 수 있습니다. 정확한 진단과 비용은 내원 후 확인됩니다.</p>
        </section>

        <section>
          <h2>4. 이용자의 의무</h2>
          <p>이용자는 상담 신청 시 정확한 연락처와 정보를 제공해야 합니다. 허위 정보로 인한 상담 지연에 대해 정도치과는 책임지지 않습니다.</p>
        </section>

        <section>
          <h2>5. 약관의 변경</h2>
          <p>이 약관은 관련 법령 또는 서비스 내용 변경에 따라 개정될 수 있으며, 개정 시 사이트를 통해 공지합니다.</p>
        </section>

        <section>
          <h2>6. 문의</h2>
          <p>약관에 대한 문의는 02-521-7981로 연락 주시기 바랍니다.</p>
        </section>
      </div>
    </main>
  )
}
