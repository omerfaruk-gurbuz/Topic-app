import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-indigo-600 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Omer Gurbuz{"&#39"}s
      </Link>
      <Link href={"/addTopic"}>
      <button className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-md hover:bg-purple-100">
          Add Topic
      </button>
      </Link>
    </nav>
  );
}
