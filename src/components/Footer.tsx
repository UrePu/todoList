import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 flex justify-center mt-auto">
      <div className=" flex flex-col justify-center items-center py-2 text-sm text-gray-600">
        <a
          href="https://github.com/UrePu/todoList"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex flex-col justify-center items-center"
        >
          <FaGithub className="w-12 h-12" />
          GitHub: @UrePu
        </a>
      </div>
    </footer>
  );
};

export default Footer;
