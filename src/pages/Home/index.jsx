import { Card, Error, Loader } from "../../components";
import UseGetApi from "../../hooks/useGet";

function Home() {
  const { data, loading, error } = UseGetApi();
  if (error) {
    return <Error />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {loading
        ? Array.from({ length: data?.length > 0 ? data.length : 8 }).map(
            (_, index) => <Loader key={index} />
          )
        : data &&
          data.map((product) => <Card key={product.id} product={product} />)}
    </div>
  );
}

export default Home;
