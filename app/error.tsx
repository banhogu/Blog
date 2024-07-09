'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="text-center min-h-screen flex flex-col justify-center">
          <div>
            <h2 className="text-2xl font-naverBold text-rest-700">Error.tsx Page</h2>
            <p className="text-gray-500 mt-4 font-naverSemi">
              해당 페이지를 가져오던 중 문제가 발생했습니다
            </p>
            <p className="mt-2 text-gray-500 text-sm">{error?.message}</p>
            <div className="mt-8">
              <button onClick={() => reset()} className="bg-rose-700">
                Reset
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
