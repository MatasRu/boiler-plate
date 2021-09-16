import * as React from "react";
import { Button } from "../components";
import { useRouter } from "../apis/history";

// markup
const IndexPage = () => {
  const { goBack } = useRouter();

  return (
    <div>
      hello world
      <Button color="black" onClick={goBack}>
        GO BACK
      </Button>
    </div>
  );
};

export default IndexPage;
