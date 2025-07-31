import { i18n } from "../../i18n";
import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../types";

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
  const baseDir = url.pathname;

  return (
    <article class="popover-hint">
      <h1>Uh oh!</h1>
      <p>
        If you are seeing this, it means I <em>intend</em>{" "}
        to create this page, I just haven't yet. Please try again later or nag
        me on my contact form at <a href="/hello">/hello</a>
      </p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  );
};

export default (() => NotFound) satisfies QuartzComponentConstructor;
