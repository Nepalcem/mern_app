import { Link } from "react-router";
import { ContactIcon, MailIcon, PlusIcon, Send, } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-stone-900 border-b border-primary">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            NotesBoard
          </h1>
          <p
            style={{ color: "aliceblue" }}
            className="text-xl font-bold text-primary font-mono tracking-tight hidden md:block"
          >
            by Mykhailo Lykhovyd
          </p>
          <div className="hidden md:flex gap-3">
            <a
              href="https://www.linkedin.com/in/michael-lykhovyd/"
              className="text-[aliceblue] hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactIcon size={24} />
            </a>
            <a
              href="mailto:mark.emaitest@gmail.com"
              className="text-[aliceblue] hover:text-red-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailIcon size={24} />
            </a>
            <a
              href="https://t.me/MarkWds"
              className="text-[aliceblue] hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={24} />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
