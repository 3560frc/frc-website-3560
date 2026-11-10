import { Link } from "react-router";

export function WolfButton({
  title,
  href,
  callback,
  hollow,
}: {
  title: string;
  href?: string;
  callback?: () => void;
  hollow?: boolean;
}) {
  hollow = hollow ? hollow : false;

  const className = `rounded-sm ${
        hollow
          ? "border-2 px-3 py-2 border-white hover:bg-white hover:text-wolf-black"
          : "px-4 py-3 bg-wolf-blue text-white hover:bg-blue-500"
      } font-[Passion_One] hover:-translate-y-1 transition-all duration-300 cursor-pointer text-xl uppercase`;

  return callback ? (
    <button onClick={callback} className={className}>
      {title}
    </button>
  ) : (
    <Link to={href ?? "/"} className={className}>
      {title}
    </Link>
  );
}
