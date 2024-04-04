import { useState } from "react";
import { Fragment } from "react";
import { XSSVulWeb } from "./XSSVulWeb";

export const Interactor = () => {
  const [Component, setComponent] = useState(null);
  function gotowebsite(url) {
    if (url.startsWith("http://grassfield")) {
      setComponent(() => () => (
        <Fragment>
          <XSSVulWeb url={url} />
        </Fragment>
      ));
    }
  }
  const url = "http://grassfield";
  const xss = "?name=<image src/onerror=prompt(8)>";
  const bold = "?name=<b>alert(1)</b>";
  return (
    <div className="flex">
      <div>{Component && <Component />}</div>
      <div>
        <button
          className="block"
          onClick={() => gotowebsite(url + "?name=duy")}
        >
          Normal
        </button>
        <button className="block" onClick={() => gotowebsite(url + xss)}>
          Xss
        </button>
        <button className="block" onClick={() => gotowebsite(url + bold)}>
          bold
        </button>
      </div>
    </div>
  );
};
