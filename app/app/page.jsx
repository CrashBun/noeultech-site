'use client';
import { useState } from 'react';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = `mailto:contact@noeultech.co.kr?subject=%5B홈페이지문의%5D%20${
    encodeURIComponent(name || '문의')
  }&body=${encodeURIComponent(`이름: ${name}\n이메일: ${email}\n내용: ${message}`)}`;

  const navItems = [
    { id: 'services', label: '서비스' },
    { id: 'industries', label: '적용 산업' },
    { id: 'products', label: '표준 제품' },
    { id: 'process', label: '진행 절차' },
    { id: 'work', label: '레퍼런스' },
    { id: 'contact', label: '문의' },
  ];

  return (
    <div className="min-h-screen text-neutral-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600 shadow-sm" />
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight">NoeulTech</div>
                <div className="text-xs text-neutral-500">Automation · Vision · Robotics</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="hover:text-violet-600 transition-colors">
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 text-white hover:opacity-90"
              >
                견적 문의
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-neutral-200"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">menu</span>
              <div className="w-5 h-[2px] bg-neutral-800" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-neutral-200">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 text-white"
              >
                견적 문의
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-orange-200 via-pink-200 to-violet-200" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                생산 라인을 바꾸는 <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-600 to-violet-700">현장형 자동화 파트너</span>
              </h1>
              <p className="mt-5 text-neutral-600 text-lg leading-relaxed">
                NoeulTech은 설계 → 제작 → 설치 → 시운전 → A/S까지 한 번에 제공하는 소규모 정예 엔지니어링 팀입니다.
                파이프 가공, 검사·이송, 로봇 스프레이 및 터널 건조 컨베이어 등 맞춤 자동화에 특화되어 있습니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#work" className="rounded-xl px-5 py-3 font-semibold bg-white border border-neutral-200 shadow-sm hover:shadow transition">납품 사례 보기</a>
                <a href="#contact" className="rounded-xl px-5 py-3 font-semibold text-white shadow-sm bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 hover:opacity-90">견적/상담 요청</a>
              </div>
              <div className="mt-6 text-sm text-neutral-500">
                * 중소벤처부/스마트공장 등 정부 지원과제 연계 상담 가능
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/10] rounded-2xl bg-neutral-100 border border-neutral-200 shadow-inner" />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-3xl blur-2xl opacity-50 bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">우리가 잘하는 일</h2>
          <p className="mt-3 text-neutral-600">설계부터 설치까지, 필요한 만큼 모듈형으로 제공합니다.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "컨베이어·이송 시스템", desc: "프리플로우어 체인/롤러/벨트/터널건조 등 라인 최적화" },
              { title: "비전검사·로봇 핸들링", desc: "CCD/3D비전·디버링·협동로봇 픽&플레이스" },
              { title: "파이프 가공 자동화", desc: "그루빙/외경 교정/절단·버링 제거" },
              { title: "HMI·서보 제어", desc: "미쓰비시 HMI/서보 기반 속도·방향 제어" },
              { title: "맞춤 장비 설계", desc: "고객 공정에 최적화된 원오프 장비" },
              { title: "설치·시운전·A/S", desc: "현장 밀착형 대응, 연간 유지보수" },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-6 shadow-sm bg-white">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600 opacity-90" />
                <h3 className="mt-4 font-semibold text-lg">{card.title}</h3>
                <p className="mt-1 text-neutral-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">적용 산업 & 주요 고객 공정</h2>
              <p className="mt-3 text-neutral-600">자동차/2차전지/식품포장/전자부품 분야 현장 적용 경험 보유</p>
            </div>
            <a href="#contact" className="mt-4 md:mt-0 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-white border border-neutral-200 hover:shadow">상담 요청</a>
          </div>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              "자동차 부품 조립라인",
              "2차전지 캔/파이프 가공",
              "식품 포장 & 검수",
              "전자부품 트레이 이송",
              "도장/건조 공정",
              "치수/외관 비전검사",
              "로봇 스프레이",
              "특수 목적 맞춤장비",
            ].map((t, i) => (
              <div key={i} className="rounded-2xl p-6 border border-dashed border-neutral-200 bg-white">
                <div className="text-sm text-neutral-700">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Products */}
      <section id="products" className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">표준/모듈형 제품 (반복 납품 가능)</h2>
          <p className="mt-3 text-neutral-600">커스터마이즈 옵션은 상담 후 반영됩니다.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: "파이프 자동 그루빙 장비", spec: "OD 1" - 8" 옵션 / 자동 공급 / 외경 교정 모듈 연동" },
              { name: "터널형 건조 컨베이어 (250°C)", spec: "단열 설계 / PID 온도제어 / 수분·VOC 배기" },
              { name: "비전검사 로봇 셀", spec: "협동로봇(TM20) + 2D/3D 비전 + 디버링/마킹" },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
                <div className="aspect-[16/10] rounded-xl bg-neutral-100 border border-neutral-200" />
                <h3 className="mt-4 font-semibold">{p.name}</h3>
                <p className="text-sm text-neutral-600 mt-1">{p.spec}</p>
                <a href="#contact" className="mt-4 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 text-white">도면/사양 요청</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">진행 절차</h2>
          <p className="mt-3 text-neutral-600">요구사항 정의부터 설치·A/S까지 책임 대응</p>
          <ol className="mt-10 grid md:grid-cols-5 gap-6">
            {["요구사항 미팅", "개념설계/견적", "제작/조립", "설치/시운전", "A/S·유지보수"].map((step, i) => (
              <li key={i} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600">
                  {i + 1}
                </div>
                <div className="mt-3 font-semibold">{step}</div>
                <p className="mt-1 text-sm text-neutral-600">
                  {["공정/품질/예산/납기 파악","3D/2D 컨셉 제안 및 견적 제출","가공·구매·전장·제어 일괄 진행","현장 설치 및 성능 검증","월/분기 점검, 긴급 출동"][i]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">레퍼런스 스냅샷</h2>
              <p className="mt-3 text-neutral-600">사진·영상은 상담 시 상세 포트폴리오로 제공됩니다.</p>
            </div>
            <a href="#contact" className="mt-4 md:mt-0 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-white border border-neutral-200 hover:shadow">자료 요청</a>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {["라인 통합", "비전검사", "파이프 가공", "로봇 스프레이", "건조 컨베이어", "특수 목적"].map((tag, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
                <div className="aspect-[16/10] bg-neutral-100" />
                <div className="p-5">
                  <div className="text-sm text-neutral-500">{tag}</div>
                  <div className="mt-1 font-semibold">프로젝트 #{i + 1}</div>
                  <p className="mt-1 text-sm text-neutral-600">핵심 성과: 택타임 단축, 불량률 감소, 작업자 안전성 향상 등</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">견적/상담 문의</h2>
              <p className="mt-3 text-neutral-600">
                아래 양식을 작성하시면 빠르게 연락드립니다. 메일이 더 편하시면 <a className="underline" href="mailto:contact@noeultech.co.kr">contact@noeultech.co.kr</a> 로 보내주세요.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
                <div>
                  <label className="text-sm font-medium">이름/회사</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="홍길동 / (주)노을테크"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">이메일</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">문의 내용</label>
                  <textarea
                    rows={5}
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="필요 장비/공정, 예산, 납기, 설비 설치 장소 등을 알려주세요."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <a href={mailtoHref} className="rounded-xl px-5 py-3 font-semibold text-white shadow-sm bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 hover:opacity-90">메일로 보내기</a>
                  <a href="#top" className="rounded-xl px-5 py-3 font-semibold bg-white border border-neutral-200 shadow-sm">맨 위로</a>
                </div>
                <p className="text-xs text-neutral-500">제출 버튼은 메일 클라이언트를 엽니다. 서버 연동형 폼은 추후 추가 가능합니다.</p>
              </form>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-neutral-500">회사 정보</div>
              <h3 className="mt-1 font-semibold">NoeulTech (노을테크)</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>업종: 자동화 장비 설계·제작·납품</li>
                <li>인원: 4명(대표 포함)</li>
                <li>주소: (추가 예정)</li>
                <li>사업자등록: (추가 예정)</li>
              </ul>
              <div className="mt-6 rounded-2xl bg-neutral-50 border border-neutral-200 p-4 text-sm">
                <div className="font-medium">빠른 상담</div>
                <div className="mt-2">전화: 010-0000-0000</div>
                <div>이메일: contact@noeultech.co.kr</div>
                <div className="mt-2">운영시간: 평일 09:00 ~ 18:00</div>
              </div>
              <div className="mt-6 text-xs text-neutral-500">
                * 레퍼런스 상세 자료(도면/사양/영상)는 보안상 요청 시에만 제공됩니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 md:p-12 border border-neutral-200 bg-gradient-to-br from-orange-100 via-pink-100 to-violet-100">
            <h3 className="text-xl md:text-2xl font-bold">프로세스를 단순하게, 생산성을 노을처럼 환하게.</h3>
            <p className="mt-2 text-neutral-700">개념 설계부터 시운전까지, 한 팀이 책임집니다.</p>
            <a href="#contact" className="mt-5 inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow-sm bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 hover:opacity-90">지금 상담하기</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-lg font-bold">NoeulTech</div>
            <p className="mt-2 text-sm text-neutral-600">맡은 일은 끝까지 책임지는 자동화 파트너</p>
          </div>
          <div>
            <div className="font-semibold">바로가기</div>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.map((n) => (
                <li key={n.id}><a className="hover:text-violet-600" href={`#${n.id}`}>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold">연락처</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>이메일: contact@noeultech.co.kr</li>
              <li>전화: 010-0000-0000</li>
              <li>주소: (추가 예정)</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">법적 고지</div>
            <p className="mt-3 text-sm text-neutral-600">© {new Date().getFullYear()} NoeulTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
