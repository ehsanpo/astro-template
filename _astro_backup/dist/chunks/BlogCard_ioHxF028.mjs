import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import 'react';
import { c as cn } from './Layout_CiCYOMq9.mjs';

const BlogCard = ({ post, featured = false, className }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return /* @__PURE__ */ jsx(
    "article",
    {
      className: cn(
        "clip group relative overflow-hidden rounded bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-800",
        featured && "md:col-span-1",
        className
      ),
      children: /* @__PURE__ */ jsxs("a", { href: `/blog/${post.slug}`, className: "block", children: [
        post.cover ? /* @__PURE__ */ jsxs("div", { className: cn("relative overflow-hidden", featured ? "h-64" : "h-48"), children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: post.cover.src,
              alt: post.title,
              className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" })
        ] }) : /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "relative bg-gradient-to-br from-primary-500 to-primary-700",
              featured ? "h-64" : "h-48"
            ),
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-center text-white", children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "mx-auto mb-4 h-16 w-16 opacity-50",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1",
                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  }
                )
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsx("time", { dateTime: post.date, className: "text-sm text-gray-500 dark:text-gray-400", children: formatDate(post.date) }),
            post.category && post.category.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-300 dark:text-gray-600", children: "•" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1", children: [
                post.category.slice(0, 2).map((cat) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "clip2 rounded bg-primary-100 px-2 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200",
                    children: cat
                  },
                  cat
                )),
                post.category.length > 2 && /* @__PURE__ */ jsxs("span", { className: "clip2 text-xs text-gray-500 dark:text-gray-400", children: [
                  "+",
                  post.category.length - 2
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: cn(
                "mb-3 font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-secondary-100 dark:group-hover:text-primary-400",
                featured ? "text-2xl" : "text-xl"
              ),
              children: post.title.length > 60 ? `${post.title.substring(0, 60)}...` : post.title
            }
          ),
          post.description && /* @__PURE__ */ jsx("p", { className: "mb-4 text-gray-600 dark:text-secondary-200", children: post.description.length > 120 ? `${post.description.substring(0, 120)}...` : post.description }),
          post.author && /* @__PURE__ */ jsx("div", { className: "flex items-center text-sm text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ jsxs("span", { children: [
            "By ",
            post.author
          ] }) })
        ] }),
        featured && /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-4", children: /* @__PURE__ */ jsx("span", { className: "rounded-full bg-primary-600 px-3 py-1 text-xs font-medium text-white", children: "Featured" }) })
      ] })
    }
  );
};

export { BlogCard as B };
