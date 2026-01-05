import UseGetApi from "../../hooks/useGet";

function Error() {
  const { error } = UseGetApi();
  return (
    <div className="w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-white">
      <h4 className="text-2xl text-red-500">xato</h4>
    </div>
  );
}

export default Error;
