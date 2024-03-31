import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h2>Not Found</h2>

        <p>Could not find requested resource</p>
        <Link className="text-blue-700 font-bold" href="/">Return Home</Link>
      </div>
    </div>
  );
}
