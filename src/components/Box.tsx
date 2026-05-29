export default function Box({
  title,
  body,
  link,
}: {
  title: string;
  body: string;
  link?: string;
}) {
  const className =
    "bg-wolf-blue min-h-32 md:min-h-40 h-auto flex-grow text-wolf-black rounded-lg p-4 md:p-7 justify-center gap-1 flex flex-col hover:-translate-y-1 transition-all duration-300";

  if (!link) {
    return (
      <div className={className}>
        <h1 className="uppercase text-2xl font-[Passion_One]">{title}</h1>
        <p>{body}</p>
      </div>
    );
  }

  const externalLink = link.startsWith("http");

  return (
    <a
      href={link}
      className={className}
      target={externalLink ? "_blank" : undefined}
      rel={externalLink ? "noreferrer noopener" : undefined}
    >
      <h1 className="uppercase text-2xl font-[Passion_One]">{title}</h1>
      <p>{body}</p>
    </a>
  );
}
