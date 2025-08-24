import { Suspense } from "react";
import SearchResults from "./searchresults";
export default function SearchPage() {
  return (
    <Suspense fallback={<p>Loading search results...</p>}>
      <SearchResults />
    </Suspense>
  );
}
