'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()} aria-label='Try again Later!'>
          Try again Later!
        </button>
      </body>
    </html>
  );
}
