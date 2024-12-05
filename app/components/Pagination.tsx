"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ info }: { info: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams as any);
    params.set("page", newPage.toString());
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={!info.prev}
        className="p-2 border"
      >
        Önceki
      </button>
      <span>Sayfa {page}</span>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={!info.next}
        className="p-2 border"
      >
        Sonraki
      </button>
    </div>
  );
}
