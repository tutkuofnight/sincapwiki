import type * as Contentful from "contentful"

export type Sincap = {
    contentTypeId: "sincaps",
    fields: {
        name: Contentful.EntryFieldTypes.Text
        referenceLink: Contentful.EntryFieldTypes.Text
        about: Contentful.EntryFieldTypes.RichText,
        slug: Contentful.EntryFieldTypes.Text,
        image: Contentful.EntryFields.AssetLink
        summary: Contentful.EntryFieldTypes.Text
    }
}