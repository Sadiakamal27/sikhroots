import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="font-bold">{text}</strong>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-white">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">
        {children}
      </h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="text-zinc-600 dark:text-zinc-400">{children}</li>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const fields = node.data.target?.fields;
      if (!fields || !fields.file) return null;

      const { title, file } = fields;
      return (
        <div className="my-10 relative h-[400px] w-full rounded-2xl overflow-hidden">
          <Image
            src={`https:${file.url}`}
            alt={title || "Blog Image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
};

export function RichText({ content }: { content: any }) {
  return (
    <div className="rich-text">
      {documentToReactComponents(content, options)}
    </div>
  );
}
