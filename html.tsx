import { html } from "hono/html";
import { JSXNode } from "hono/jsx";
import { HtmlEscapedString } from "hono/utils/html";
import { LayoutProps } from "./src/layouts/types";
import { ContextType } from "./src/types";

export const view = (
  viewToRender: (context: any) => Promise<HtmlEscapedString>
) => {
  return async (c: any) => {
    const newBody = await viewToRender(c);
    return c.html(newBody);
  };
};

export const rootLayout = (
  layoutToApply: ({
    children,
    description,
    title,
  }: LayoutProps) => HtmlEscapedString
) => {
  return async (c: ContextType, next: () => Promise<void>) => {
    await next();
    if (c.req.header("HX-Request") !== "true") {
      const curBody = (await c.res.text()) as unknown as TemplateStringsArray;
      c.res = undefined;
      const newBody = layoutToApply({
        children: html(curBody),
        description: "Hono",
        title: "Hono",
      });
      c.res = c.html(newBody);
    }
  };
};

export const layout = (
  layoutToApply: ({
    context,
    children,
  }: {
    context: ContextType;
    children: HtmlEscapedString;
  }) => HtmlEscapedString
) => {
  return async (c: ContextType, next: () => Promise<void>) => {
    await next();
    if (
      (c.req.header("HX-Request") === "true" &&
        (c.req.header("HX-Boosted") === "true" ||
          !c.req.header("HX-Target"))) ||
      c.req.header("HX-Request") !== "true"
    ) {
      const curBody = (await c.res.text()) as unknown as TemplateStringsArray;
      c.res = undefined;
      const newBody = await layoutToApply({
        context: c,
        children: html(curBody),
      });
      c.res = c.html(newBody);
    }
  };
};

export const Link = ({
  to,
  "hx-target": hxTarget,
  class: className,
  children,
}: {
  to: string;
  "hx-target": string;
  class: string;
  children: JSXNode;
}) => {
  if (hxTarget) {
    return html`<a
      href="${to}"
      class="${className}"
      hx-get="${to}"
      hx-target="${hxTarget}"
      hx-push-url="true"
      hx-swap="morph"
      >${children}</a
    >`;
  } else {
    return html`<a href="${to}" class="${className}" hx-boost="true"
      >${children}</a
    >`;
  }
};
