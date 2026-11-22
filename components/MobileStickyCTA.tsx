import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 glass border-x-0 border-b-0 px-4 md:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))", paddingTop: "0.75rem" }}
    >
      <div className="mx-auto flex w-full max-w-6xl gap-2">
        <Link href="/books" className="btn-primary min-h-11 flex-1 justify-center text-sm">
          Books
        </Link>
        <Link href="/newsletter" className="btn-outline min-h-11 flex-1 justify-center text-sm">
          Newsletter
        </Link>
      </div>
    </div>
  );
}
