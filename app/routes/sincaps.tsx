import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import type { Sincap } from "~/types";

import { useLoaderData } from "@remix-run/react";
import cfClient from "lib/cf-client";
import SincapCard from "~/components/SincapCard";

export const meta: MetaFunction = () => {
  return [
    { title: "All Squirrels" },
    { name: "description", content: "All squirrels in our wiki is here!" },
  ];
};

export const loader = () => {
  return cfClient.getEntries<Sincap>({
    content_type: "sincaps",
  });
};

export default function () {
  const sincaps = useLoaderData<typeof loader>();
  return (
    <main className="w-full">
      <h1 className="font-bold my-3">ALL SQUIRRELS</h1>
      {sincaps.items.map((data, key) => (
        <SincapCard key={key} sincap={data} />
      ))}
    </main>
  );
}
