"use client";
import CardQuizWithoutLink from "@/src/components/card/CardQuiz/CardQuizWithoutLink";
import { Processing } from "@/src/components/elements/Icon";
import { useSingleMcqs } from "@/src/hooks/useSingleMcqs";

const SingleMcqsList = ({ slug }: { slug: string }) => {
  const { data, error, isLoading } = useSingleMcqs(slug);

  if (isLoading)
    return (
      <div className="mx-auto flex h-40 items-center justify-center">
        <Processing />
      </div>
    );
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="my-5">
      <CardQuizWithoutLink
        key={data.id}
        title={data.name}
        option={data.options}
        correctOption={""}
      />
    </div>
  );
};

export default SingleMcqsList;
