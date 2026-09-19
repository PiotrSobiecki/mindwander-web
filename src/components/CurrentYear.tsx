"use client";

import { useSyncExternalStore } from "react";

// Strona jest generowana statycznie, więc rok policzony w renderze zamarza na
// dacie builda. Serwer oddaje rok startowy, klient podmienia go po hydratacji.
const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

export default function CurrentYear({ since }: { since: number }) {
  const year = useSyncExternalStore(subscribe, getYear, () => since);
  return <>{year}</>;
}
