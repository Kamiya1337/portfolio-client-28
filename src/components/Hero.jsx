import { ArrowRight, FileCheck2 } from 'lucide-react';

export default function Hero({ student, setActiveTab }) {
  return (
    <section className="section-anchor overflow-hidden px-5 pb-16 pt-12 sm:px-8 md:pt-16 xl:px-16 xl:pb-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="reveal min-w-0 lg:col-span-8">
            <p className="editorial-label mb-7">Overview / Tổng quan</p>
            <h1 className="max-w-full break-words font-display text-[clamp(2.65rem,12vw,5.3rem)] font-bold leading-[1.03] text-rose lg:max-w-4xl">
              English Language &amp; Culture Learning Portfolio
            </h1>
            <div className="paper-texture mt-10 w-full max-w-[calc(100vw-2.5rem)] rounded-lg bg-obsidian p-8 text-muted-light shadow-[0_4px_20px_rgba(53,42,56,0.05)] sm:max-w-3xl sm:p-10">
              <p className="max-w-[17rem] break-words [overflow-wrap:anywhere] font-display text-lg font-semibold leading-relaxed text-ivory sm:max-w-full sm:text-3xl">Portfolio môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => setActiveTab('projects')} className="button-light w-full sm:w-auto">Mục bài tập <ArrowRight size={16} /></button>
                <button type="button" onClick={() => setActiveTab('evidence')} className="button-dark-outline min-h-12 w-full rounded sm:w-auto">Minh chứng <FileCheck2 size={16} /></button>
              </div>
            </div>
          </div>

          <aside className="editorial-card soft-peach-glow reveal min-w-0 max-w-full p-5 lg:sticky lg:top-28 lg:col-span-4 lg:mt-8">
            <img
              src="/avatar-dinh-thai-son.jpg"
              alt="Dương Thị Minh Hằng portfolio owner"
              className="aspect-square w-full max-w-full rounded object-cover object-center grayscale-[20%] transition duration-700 hover:grayscale-0"
            />
            <p className="editorial-label mt-8">Portfolio Owner</p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight">{student.name}</h2>
            <dl className="mt-8 space-y-6">
              <div><dt className="editorial-label">Major</dt><dd className="mt-2 text-sm font-bold leading-6">{student.major}</dd></div>
              <div><dt className="editorial-label">Institution</dt><dd className="mt-2 text-sm font-bold">{student.shortUniversity}</dd><dd className="mt-1 text-xs leading-5 text-muted-dark">{student.university}</dd></div>
              <div className="border-t border-border-light pt-5"><span className="rounded bg-peach/40 px-3 py-1 text-xs font-bold text-rose">Batch {student.academicYear}</span></div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
