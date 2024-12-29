import cfClient from "~/lib/cf-client"
import { useLoaderData } from "@remix-run/react";
import { Sincap } from "~/types"
import { LoaderFunctionArgs } from "@remix-run/node";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ArrowUpRight } from "lucide-react"
import type { MetaFunction } from "@remix-run/node"

export const loader = ({ params }: LoaderFunctionArgs) => {
    const slug = params["slug"]
    return cfClient.getEntries<Sincap>({
        content_type: "sincaps",
        "fields.slug[match]": slug,
        limit: 1
    })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [{ title: data?.items[0].fields.name + " | SincapWiki" }]
}

export default function(){
    const data = useLoaderData<typeof loader>()
    const sincap = data.items[0]

    return (
        <div className="w-full flex flex-col items-center  justify-center lg:flex-row lg:items-start gap-10">
            <section className="w-full md:w-[500px] flex justify-center">
                    <img src={sincap.fields.image.fields.file.url} alt={sincap.fields.name} className="w-auto max-h-[400px]" />
            </section>
            <aside className="flex-1">
                <div className="mb-5">
                    <h1 className="text-3xl font-bold">{sincap.fields.name}</h1>
                </div>
                <div className="sincap-content">
                    {documentToReactComponents(sincap.fields.about)}
                </div>
                <a href={sincap.fields.referenceLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-text rounded-md text-white p-1 px-3">
                    Reference Link <ArrowUpRight className="w-4 h-4" />
                </a>
            </aside>
        </div>
    )
}