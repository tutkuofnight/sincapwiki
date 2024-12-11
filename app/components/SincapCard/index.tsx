import { Link } from "@remix-run/react";

export default function ({ sincap } : { sincap: any }) {
  return (
    <Link to={`/sincap/${sincap.fields.slug}`}>
      <div className="flex flex-col sm:flex-row gap-10 mb-5 items-center">
        <div className="flex items-center gap-2">
          <img
            src={sincap.fields.image.fields.file.url}
            alt={sincap.fields.name}
            className="w-[400px] max-h-[400px] rounded"
          />
        </div>
        <div className="mb-10">
          <h1 className="text-2xl font-bold mb-3">{sincap.fields.name}</h1>
          <p>{sincap.fields.summary}</p>
        </div>
      </div>
    </Link>
  )
}
