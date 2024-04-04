import { Fragment } from "react";
export const XSSVulWeb = ({ url }) => {
  let _url = new URL(url);
  let rawHTML = `${_url.searchParams.get("name")}`;
  return (
    <div>
      <h1>
        Hi
        <span dangerouslySetInnerHTML={{ __html: rawHTML }}></span>
      </h1>
    </div>
  );
};
