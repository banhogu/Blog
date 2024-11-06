'use client';

export default function Finish() {
  return (
    <div className="relative mt-8 space-y-2">
      <svg className="w-full h-12" viewBox="0 0 100 10" preserveAspectRatio="none">
        {/* 반복되는 빗살무늬 패턴 */}
        {[...Array(22)].map((_, lineIndex) => (
          <line
            key={lineIndex}
            x1={lineIndex * 5} // 각 선의 시작 x 좌표
            y1="0"
            x2={lineIndex * 5 - 5} // 각 선의 끝 x 좌표
            y2="10"
            className="stroke-current text-gray-300"
            strokeWidth="1" // 선 굵기
          />
        ))}
      </svg>
    </div>
  );
}
