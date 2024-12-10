import cfClient from "~/lib/cf-client"
import { useLoaderData } from "@remix-run/react";
import { Sincap } from "~/types"
import { LoaderFunctionArgs } from "@remix-run/node";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ArrowUpRight } from "lucide-react"

export const loader = ({ params }: LoaderFunctionArgs) => {
    const slug = params["slug"]
    return  cfClient.getEntries<Sincap>({
        content_type: "sincaps",
        "fields.slug[match]": slug,
        limit: 1
    })
}

export default function(){
    const data = useLoaderData<typeof loader>()
    const sincap = data.items[0]

    return (
        <div className="w-full flex flex-col items-center justify-center gap-10">
            <section className="w-[500px]">
                    <img src={sincap.fields.image.fields.file.url} alt={sincap.fields.name} className="w-auto max-h-[400px] object-contain" />
            </section>
            <aside className="flex-1">
                <div className="flex gap-6 items-center mb-5">
                    <h1 className="text-3xl font-bold">{sincap.fields.name}</h1>
                    <a href={sincap.fields.referenceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        Reference Link <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
                <div className="sincap-content">
                    {documentToReactComponents(sincap.fields.about)}
                </div>
            </aside>
        </div>
    )
}