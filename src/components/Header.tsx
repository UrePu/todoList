import LinkCommon from "./common/LinkCommon";

const Header = () => {
  return (
    <header className="w-full bg-gray-200 flex justify-center">
      <nav
        className="flex w-[95%] gap-4 p-4 md:w-[80%]"
        aria-label="메인 내비게이션"
      >
        <LinkCommon href={"/"}>main</LinkCommon>
        <LinkCommon href={"/is-done"}>is-done</LinkCommon>
      </nav>
    </header>
  );
};

export default Header;
