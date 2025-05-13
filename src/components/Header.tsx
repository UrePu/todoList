import LinkCommon from "./common/LinkCommon";

const Header = () => {
  return (
    <div className="w-full flex bg-gray-200 justify-center">
      <div className="flex w-[80%] gap-4 p-4">
        <LinkCommon href={"/"}>main</LinkCommon>
        <LinkCommon href={"/is-done"}>is-done</LinkCommon>
      </div>
    </div>
  );
};

export default Header;
