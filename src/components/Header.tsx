import LinkCommon from "./LinkCommon";

const Header = () => {
  return (
    <div className="flex gap-4 p-4 bg-gray-200">
      <LinkCommon href={"/"}>main</LinkCommon>
      <LinkCommon href={"/is-done"}>is-done</LinkCommon>
    </div>
  );
};

export default Header;
