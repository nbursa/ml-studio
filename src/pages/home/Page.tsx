import Link from "next/link";
import PageContainer from "@/components/container/PageContainer";

export default function HomePage() {
  return (
      <PageContainer title="Homepage">
        <h1>Welcome to ML Studio</h1>
        <Link href="/studio">
          Go to ML Studio
        </Link>
      </PageContainer>
  )
}
