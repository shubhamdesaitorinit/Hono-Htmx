import { html } from "hono/html";
import { LayoutProps } from "./types";

export const AppLayout = ({ children, description, title }: LayoutProps) => {
  return html` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
        <script async src="/htmx.min.js"></script>
        <style>
          a,
          hr {
            color: inherit;
          }
          progress,
          sub,
          sup {
            vertical-align: baseline;
          }
          .m-0,
          blockquote,
          body,
          dd,
          dl,
          fieldset,
          figure,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          menu,
          ol,
          p,
          pre,
          ul {
            margin: 0;
          }
          .p-0,
          dialog,
          fieldset,
          legend,
          menu,
          ol,
          ul {
            padding: 0;
          }
          .border-collapse,
          table {
            border-collapse: collapse;
          }
          .bg-blue-700,
          .bg-gray-200,
          .bg-gray-50,
          .bg-gray-800,
          .bg-slate-500 {
            --tw-bg-opacity: 1;
          }
          *,
          ::after,
          ::before {
            box-sizing: border-box;
            border: 0 solid #e5e7eb;
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-gradient-from-position: ;
            --tw-gradient-via-position: ;
            --tw-gradient-to-position: ;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 0px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: rgb(59 130 246 / 0.5);
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia: ;
          }
          ::after,
          ::before {
            --tw-content: "";
          }
          html {
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;
            font-family: ui-sans-serif, system-ui, -apple-system,
              BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
              "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
              "Segoe UI Symbol", "Noto Color Emoji";
            font-feature-settings: normal;
            font-variation-settings: normal;
          }
          body {
            line-height: inherit;
          }
          hr {
            height: 0;
            border-top-width: 1px;
          }
          abbr:where([title]) {
            -webkit-text-decoration: underline dotted;
            text-decoration: underline dotted;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: inherit;
            font-weight: inherit;
          }
          a {
            text-decoration: inherit;
          }
          b,
          strong {
            font-weight: bolder;
          }
          code,
          kbd,
          pre,
          samp {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            font-size: 1em;
          }
          small {
            font-size: 80%;
          }
          sub,
          sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
          }
          sub {
            bottom: -0.25em;
          }
          sup {
            top: -0.5em;
          }
          table {
            text-indent: 0;
            border-color: inherit;
          }
          button,
          input,
          optgroup,
          select,
          textarea {
            font-family: inherit;
            font-feature-settings: inherit;
            font-variation-settings: inherit;
            font-size: 100%;
            font-weight: inherit;
            line-height: inherit;
            color: inherit;
            margin: 0;
            padding: 0;
          }
          button,
          select {
            text-transform: none;
          }
          [type="button"],
          [type="reset"],
          [type="submit"],
          button {
            -webkit-appearance: button;
            background-color: transparent;
            background-image: none;
          }
          :-moz-focusring {
            outline: auto;
          }
          :-moz-ui-invalid {
            box-shadow: none;
          }
          ::-webkit-inner-spin-button,
          ::-webkit-outer-spin-button {
            height: auto;
          }
          [type="search"] {
            -webkit-appearance: textfield;
            outline-offset: -2px;
          }
          ::-webkit-search-decoration {
            -webkit-appearance: none;
          }
          ::-webkit-file-upload-button {
            -webkit-appearance: button;
            font: inherit;
          }
          summary {
            display: list-item;
          }
          menu,
          ol,
          ul {
            list-style: none;
          }
          textarea {
            resize: vertical;
          }
          input::-moz-placeholder,
          textarea::-moz-placeholder {
            opacity: 1;
            color: #9ca3af;
          }
          input::placeholder,
          textarea::placeholder {
            opacity: 1;
            color: #9ca3af;
          }
          [role="button"],
          button {
            cursor: pointer;
          }
          :disabled {
            cursor: default;
          }
          audio,
          canvas,
          embed,
          iframe,
          img,
          object,
          svg,
          video {
            display: block;
          }
          img,
          video {
            max-width: 100%;
            height: auto;
          }
          .hidden,
          [hidden] {
            display: none;
          }
          ::backdrop {
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-gradient-from-position: ;
            --tw-gradient-via-position: ;
            --tw-gradient-to-position: ;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 0px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: rgb(59 130 246 / 0.5);
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia: ;
          }
          .visible {
            visibility: visible;
          }
          .collapse {
            visibility: collapse;
          }
          .fixed {
            position: fixed;
          }
          .relative {
            position: relative;
          }
          .top-0 {
            top: 0;
          }
          .z-50 {
            z-index: 50;
          }
          .p-1 {
            padding: 0.25rem /* 4px */;
          }
          .m-4px {
            margin: 4px;
          }
          .block {
            display: block;
          }
          .flex {
            display: flex;
          }
          .table {
            display: table;
          }
          .contents {
            display: contents;
          }
          .h-12 {
            height: 3rem;
          }
          .w-1 {
            width: 0.25rem;
          }
          .w-50 {
            width: 50%;
          }
          .w-2 {
            width: 0.5rem;
          }
          .w-40 {
            width: 40%;
          }
          .w-3 {
            width: 0.75rem;
          }
          .w-60 {
            width: 60%;
          }
          .w-4 {
            width: 1rem;
          }
          .w-80 {
            width: 80%;
          }
          .w-full {
            width: 100%;
          }
          .transform {
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
              skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
              scaleY(var(--tw-scale-y));
          }
          .resize {
            resize: both;
          }
          .flex-col {
            flex-direction: column;
          }
          .items-center {
            align-items: center;
          }
          .justify-center {
            justify-content: center;
          }
          .justify-between {
            justify-content: space-between;
          }
          .gap-2 {
            gap: 0.5rem;
          }
          .gap-3 {
            gap: 0.75rem;
          }
          .self-start {
            align-self: flex-start;
          }
          .rounded-lg {
            border-radius: 0.5rem;
          }
          .rounded-sm {
            border-radius: 0.125rem;
          }
          .border {
            border-width: 1px;
          }
          .border-gray-300 {
            --tw-border-opacity: 1;
            border-color: rgb(209 213 219 / var(--tw-border-opacity));
          }
          .bg-blue-700 {
            background-color: rgb(29 78 216 / var(--tw-bg-opacity));
          }
          .bg-gray-200 {
            background-color: rgb(229 231 235 / var(--tw-bg-opacity));
          }
          .bg-gray-50 {
            background-color: rgb(249 250 251 / var(--tw-bg-opacity));
          }
          .bg-gray-800 {
            background-color: rgb(31 41 55 / var(--tw-bg-opacity));
          }
          .bg-slate-500 {
            background-color: rgb(100 116 139 / var(--tw-bg-opacity));
          }
          .p-2 {
            padding: 0.5rem;
          }
          .p-3 {
            padding: 0.75rem;
          }
          .px-2 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .t-56px {
            top: 56px;
          }
          .abosolute {
            position: absolute;
          }
          .text-center {
            text-align: center;
          }
          .text-base {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .text-gray-900 {
            --tw-text-opacity: 1;
            color: rgb(17 24 39 / var(--tw-text-opacity));
          }
          .text-white {
            --tw-text-opacity: 1;
            color: rgb(255 255 255 / var(--tw-text-opacity));
          }
          .underline {
            text-decoration-line: underline;
          }
          .decoration-white {
            text-decoration-color: #fff;
          }
          .outline {
            outline-style: solid;
          }
          .filter {
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
              var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
              var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
          }
          .transition {
            transition-property: color, background-color, border-color,
              text-decoration-color, fill, stroke, opacity, box-shadow,
              transform, filter, backdrop-filter, -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
          .hover:bg-blue-800:hover {
            --tw-bg-opacity: 1;
            background-color: rgb(30 64 175 / var(--tw-bg-opacity));
          }
        </style>
      </head>
      <body>
        <turbo-frame id="main"> ${children} </turbo-frame>
      </body>
    </html>`;
};
