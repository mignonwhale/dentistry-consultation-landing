'use client'

import Image from 'next/image'
import { Link2, MapPin, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  { q: '임플란트, 비용이 얼마나 드나요?', a: '개인의 상태와 필요한 치료 범위에 따라 달라집니다. 정확한 본인부담금은 진단 후 안내드립니다.', meta: '비용', answer: '예시 1개 기준 90~150만원' },
  { q: '치료가 많이 아픈가요?', a: '치료 전 충분한 설명과 마취, 회복 단계별 안내를 통해 부담을 줄이는 방향으로 계획합니다.', meta: '통증', answer: '개인차 있음 · 단계별 안내' },
  { q: '치료 기간은 얼마나 걸리나요?', a: '발치 여부, 뼈 상태, 골이식 필요 여부에 따라 달라집니다. 첫 상담에서 3D CT를 바탕으로 예상 단계를 설명드립니다.', meta: '기간', answer: '상태에 따라 상이' },
  { q: '저도 건강보험 적용을 받을 수 있나요?', a: '만 65세 이상 어르신 중 조건을 충족하는 경우 건강보험 적용이 가능합니다.', meta: '대상', answer: '만 65세 이상 · 조건 확인' },
]

const credentials = [
  ['치과보철과 전문의', '대한치과보철학회', '2016'],
  ['임플란트학회 정회원', '대한임플란트치과학회', '2014'],
  ['구강악안면외과 인증의', '대한구강악안면외과학회', '2019'],
]

function ArchDivider() {
  const ticks: [number, number][] = [[40, 24.8], [80, 19.2], [120, 15.2], [160, 12.8], [200, 12], [240, 12.8], [280, 15.2], [320, 19.2], [360, 24.8]]
  return (
    <svg className="jd-arch-divider" viewBox="0 0 400 40" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path d="M0,32 Q200,-8 400,32" fill="none" stroke="currentColor" strokeWidth="1" />
      {ticks.map(([x, y]) => <line key={x} x1={x} y1={y - 5} x2={x} y2={y + 5} stroke="currentColor" strokeWidth="1" />)}
    </svg>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number[]>([])
  const [status, setStatus] = useState('')
  const [consultOpen, setConsultOpen] = useState(false)
  const toggleFaq = (i: number) => setOpenFaq((v) => v.includes(i) ? v.filter((x) => x !== i) : [...v, i])
  const copyLink = async () => { try { await navigator.clipboard.writeText(window.location.href); setStatus('링크가 복사되었습니다.') } catch { setStatus('주소창의 링크를 복사해 주세요.') } setTimeout(() => setStatus(''), 2500) }

  return <main className="jd-page">
    <a href="#top" className="jd-skip-link">본문 바로가기</a>
    <header className="jd-header"><div className="jd-container jd-header-inner"><a className="jd-logo" href="#top"><Image src="/images/logo-mark.png" alt="" aria-hidden="true" width={36} height={36} className="jd-logo-mark" />정도치과</a><nav><a href="#doctor">의료진</a><a href="#faq">자주 묻는 질문</a><a href="#location">오시는 길</a></nav><a className="jd-header-cta" href="tel:02-521-7981">전화 상담</a></div></header>
    <section id="top" className="jd-hero"><div className="jd-hero-image"><Image src="/images/jeongdo-hero-2.png" alt="정도치과에서 어르신 환자와 상담 중인 모습" fill priority sizes="(max-width: 767px) 100vw, 52vw" style={{ objectFit: 'cover', objectPosition: 'center' }} /></div><div className="jd-hero-overlay" /><div className="jd-container jd-hero-content"><p className="jd-overline">JEONGDO DENTAL CLINIC · IMPLANT</p><h1>임플란트 <em>비용과 통증</em>,<br />먼저 상담해 보세요.</h1><p className="jd-hero-copy">3D CT로 잇몸뼈 상태를 확인한 뒤 치료 계획을 안내드립니다.<br />건강보험 적용 여부는 상담 전에 먼저 확인할 수 있습니다.</p><a className="jd-button jd-button-outline" href="#faq">건강보험 적용 조건 보기</a></div></section>
    <div className="jd-paper jd-signature"><ArchDivider /></div>
    <section className="jd-paper jd-audience"><div className="jd-container"><div className="jd-section-intro"><h2>치료보다 먼저, 알아야 할 것들</h2><p>임플란트는 서두를수록 좋은 치료가 아닙니다.<br />현재 상태와 적용 조건을 먼저 확인하세요.</p></div><div className="jd-insurance-grid"><article><span className="jd-audience-tag">틀니 대안</span><strong>틀니가 불편해 대안을 찾는 경우</strong><p>오래 쓰는 것을 기준으로 방식을 안내드리고, 관리 주기도 함께 설명 드립니다.</p></article><article><span className="jd-audience-tag">건강보험</span><strong>건강보험 대상 여부가 궁금한 경우</strong><p>만 65세 이상, 부분 무치악 등 급여 요건을 먼저 확인합니다.</p></article><article><span className="jd-audience-tag">가족 상담</span><strong>가족이 대신 정보를 찾아보는 경우</strong><p>상담 내용을 정리해 가족에게 전달할 수 있도록 페이지를 공유하는 기능을 제공합니다.</p></article></div></div></section>
    <section id="doctor" className="jd-dark jd-doctor"><div className="jd-container jd-doctor-grid"><div className="jd-doctor-photo"><img src="/images/jeongdo-doctor.png" alt="정도치과 대표원장 예시 사진" /></div><div className="jd-doctor-copy"><p className="jd-overline">THE PERSON WHO EXPLAINS</p><h2>치료를 권하기 전에 <em>이해시키는 사람</em></h2><p>정도치과는 환자분이 궁금해하시는 것부터 듣습니다. 필요한 치료와 기다려도 되는 치료를 구분해 설명합니다.</p><div className="jd-credentials"><div><b>대표원장</b><span>정도현 · 치의학박사</span></div><div><b>진료 분야</b><span>임플란트 · 보철 · 보존</span></div></div><div className="jd-director-bio"><p className="jd-bio-label">DIRECTOR PROFILE</p><ul><li>서울대학교 치의학과 졸업 · 치의학대학원 석사</li><li>서울대학교 치의학대학원 박사 수료</li><li>서울대학교 치과병원 치과보철과 수련</li><li>보건복지부 인증 통합치의학전문의</li><li>하버드대학교 임플란트 과정 및 치주학 연수</li><li>대한치과보철학회 · 대한치과마취학회 정회원</li><li>대한통합치의학회 · 아시아턱관절학회 정회원</li></ul></div></div></div><div className="jd-container jd-credential-grid">{credentials.map(([title, org, year]) => <div className="jd-credential-card" key={title}><svg className="jd-credential-seal" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="1" /><path d="M16 25l5 5 11-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg><div className="jd-credential-text"><b>{title}</b><span>{org}</span><small>{year}</small></div></div>)}</div></section>
    <section id="faq" className="jd-paper jd-faq"><div className="jd-container"><div className="jd-section-intro"><h2>가장 많이 물어보시는 네 가지</h2><p>상담 전에 궁금한 점을 먼저 확인해 보세요.</p></div><div className="jd-faq-list">{faqs.map((item, i) => <article className={`jd-faq-item ${openFaq.includes(i) ? 'is-open' : ''}`} key={item.q}><button onClick={() => toggleFaq(i)} aria-expanded={openFaq.includes(i)}><span className="jd-faq-meta">{item.meta}</span><span className="jd-faq-question">{item.q}</span><span className="jd-chevron" aria-hidden="true">∨</span></button><div className="jd-faq-answer"><p>{item.a}</p><strong>{item.answer}</strong></div></article>)}</div></div></section>
    <section className="jd-mid"><div className="jd-container"><div className="jd-section-intro jd-light-intro"><h2>보이지 않는 곳까지 기준을 세웁니다.</h2><p>장비는 진단을 위해, 시스템은 안전을 위해.<br />치료를 시작하기 전부터 준비합니다.</p></div><div className="jd-equipment-grid"><article className="jd-equipment"><img src="/images/jeongdo-ct.png" alt="치과용 3D CT 장비" /><div className="jd-equipment-body"><span>진단의 기준</span><h3>3D CT 정밀 진단</h3><p>잇몸뼈의 높이와 폭, 신경 위치까지 입체적으로 확인합니다.</p></div></article><article className="jd-equipment"><img src="/images/jeongdo-scanner.png" alt="구강 스캐너 장비" /><div className="jd-equipment-body"><span>디지털 진료의 기준</span><h3>구강 스캐너</h3><p>구강 상태를 정밀하게 스캔해 맞춤 보철과 치료 계획을 설계합니다.</p></div></article><article className="jd-equipment"><img src="/images/jeongdo-microscope.png" alt="치과용 수술 현미경 장비" /><div className="jd-equipment-body"><span>정밀 치료의 기준</span><h3>수술 현미경</h3><p>확대된 시야로 작은 차이까지 확인하며 섬세한 치료를 돕습니다.</p></div></article></div></div></section>
    <section id="location" className="jd-paper jd-location"><div className="jd-container jd-location-grid"><div><h2>편하게 오세요. 가까운 곳에서 기다리겠습니다.</h2></div><dl><div><dt>주소</dt><dd>서울시 강남구 테헤란로 419, 8층</dd></div><div><dt>교통</dt><dd>2호선 강남역 3번 출구에서 도보 4분&nbsp;건물 엘리베이터 · 주차 가능</dd></div><div><dt>진료시간</dt><dd>평일 09:30-18:30<br />토요일 09:30-14:00 · 일요일 휴진</dd></div></dl></div></section>
    <div className="jd-paper jd-signature"><ArchDivider /></div>
    <footer className="jd-footer"><div className="jd-container jd-footer-grid"><div className="jd-footer-brand"><a className="jd-logo" href="#top"><Image src="/images/logo-mark.png" alt="" aria-hidden="true" width={36} height={36} className="jd-logo-mark" />정도치과</a><p>치료를 권하기 전에<br />정확히 설명하는 치과</p></div><div className="jd-footer-column"><b>정도치과</b><a href="#doctor">의료진 소개</a><a href="#faq">자주 묻는 질문</a><a href="#location">오시는 길</a></div><div className="jd-footer-column"><b>진료 안내</b><span>임플란트 · 보철 · 보존</span><span>평일 09:30-18:30</span><span>토요일 09:30-14:00</span><span>일요일 휴진</span></div><div className="jd-footer-contact"><b>상담 문의</b><a href="tel:02-521-7981">02-521-7981</a><span>서울시 강남구 테헤란로 419, 8층</span></div></div><div className="jd-container jd-legal"><span>© 2026 정도치과. All rights reserved.</span><span><a href="/privacy">개인정보처리방침</a> · <a href="/terms">이용약관</a></span></div></footer>
    <div className={`jd-floating${consultOpen ? ' jd-floating-hidden' : ''}`} aria-label="빠른 상담 메뉴"><button onClick={() => setStatus('카카오톡 공유는 실제 연동 전 데모입니다.')}><MessageCircle aria-hidden="true" className="jd-floating-icon" />카톡 공유</button><button onClick={copyLink}><Link2 aria-hidden="true" className="jd-floating-icon" />링크 공유</button><a href="#location"><MapPin aria-hidden="true" className="jd-floating-icon" />오시는 길</a></div><div id="consult" className={`jd-fixed-bar${consultOpen ? ' jd-fixed-bar-open' : ''}`}><form id="consult-form" className="jd-fixed-form" onSubmit={(e) => { e.preventDefault(); setStatus('상담 신청이 접수되었습니다. 영업일 1일 이내 담당자가 연락드립니다.'); setConsultOpen(false) }}><label><span className="jd-field-label">이름</span><input required name="name" placeholder="이름" /></label><label><span className="jd-field-label">연락처</span><input required name="phone" inputMode="tel" placeholder="연락처" /></label><label><span className="jd-field-label">관심 치료</span><select name="treatment" defaultValue="임플란트"><option>임플란트</option><option>교정</option><option>기타</option></select></label><label><span className="jd-field-label">희망 시간</span><select name="time" defaultValue="오전"><option>오전</option><option>오후</option><option>저녁</option></select></label><label className="jd-fixed-consent"><input required type="checkbox" /> 개인정보 동의</label><button type="submit" className="jd-fixed-submit"><span className="jd-fixed-submit-full">상담 신청 <span aria-hidden="true">→</span></span><span className="jd-fixed-submit-compact">신청완료</span></button></form><button type="button" className="jd-fixed-toggle" onClick={() => setConsultOpen((v) => !v)} aria-expanded={consultOpen} aria-controls="consult-form">상담 신청</button><a className="jd-fixed-phone" href="tel:02-521-7981">전화 상담<br /><small>02-521-7981</small></a></div>{status && <p className="jd-status" role="status">{status}</p>}
  </main>
}
