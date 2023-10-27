import { Blogfetch } from "@/hooks/queryfetchblogs";

export default function Featurecards() {
  const { isLoading, error, data } = Blogfetch();

  if (isLoading) return <p className="text-white h-56">Loading....</p>;

  if (error) return <p className="text-white">Error {error.message} </p>;
  return (
    <>
    <h1>hi</h1>
    </>
  );
}
