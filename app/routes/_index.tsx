import type { MetaFunction } from "@remix-run/node"
import type { Sincap } from "~/types"

import { Link, useLoaderData } from "@remix-run/react"
import cfClient from "lib/cf-client"
import { ArrowRight } from "lucide-react"
import SincapCard from "~/components/SincapCard"
import Banner from "~/components/Banner"

export const meta: MetaFunction = () => {
  return [
    { title: "SincapWiki | A wiki for squirrels" },
    { name: "description", content: "Welcome to SincapWiki" },
  ]
}
export const loader = () => {
  return cfClient.getEntries<Sincap>({
    content_type: "sincaps",
    limit: 2
  })
}
// bg-[#1a1a1a]
export default function Index() {
  const sincaps = useLoaderData<typeof loader>()

  return (
    <main className="w-full">
      <Banner />
      <h1 className="font-bold my-3">LAST ADDED</h1>
      {sincaps.items.map((data, key) => (
        <SincapCard key={key} sincap={data} />
      ))}
      <div className="flex justify-end">
        <Link to="/sincaps" className="font-normal text-xl inline-flex items-center gap-3 my-5 border-b border-text">See other squirrels <ArrowRight className="w-5 h-5" /></Link>
      </div>
    </main>
  )
}