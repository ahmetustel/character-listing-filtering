"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams as any);
    params.set(e.target.name, e.target.value);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex space-x-4">
      <select
        name="status"
        onChange={handleFilterChange}
        className="border p-2"
      >
        <option value="">Status Seçin</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="gender"
        onChange={handleFilterChange}
        className="border p-2"
      >
        <option value="">Gender Seçin</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}
