import { useRouteError, useNavigate } from "react-router-dom";
import LinkArrow from "./LinkArrow";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="group">
        <button
          className="mt-3 flex group-hover:text-primary cursor-pointer text-slate-200 font-semibold"
          type="button"
          onClick={() => navigate("/")}
        >
          Back to home
          <LinkArrow />
        </button>
      </div>
    </div>
  );
}
