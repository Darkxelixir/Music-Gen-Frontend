import { AccountView } from "@daveyplate/better-auth-ui"
import { accountViewPaths } from "@daveyplate/better-auth-ui/server"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "~/components/ui/button"

export const dynamicParams = false

export function generateStaticParams() {
    return Object.values(accountViewPaths).map((path) => ({ path }))
}

export default async function AccountPage({ params }: { params: Promise<{ path: string }> }) {
    const { path } = await params

    return (
        <main className="container p-4 md:p-6">
            <AccountView path={path} />
            <Button><Link href="/">Back to Home</Link></Button>
        </main>
    )
}