/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { g as getPortfolioData, $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { S as SkillChart } from '../chunks/SkillChart_C7GroY3-.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                  */
import { $ as $$TechStackBlock, a as $$CertificatesBlock } from '../chunks/TechStackBlock_kVXNkUzg.mjs';
import { $ as $$ToolsList, P as ProcessFlowDiagram } from '../chunks/Beams_1SK19uLn.mjs';
import { $ as $$PageHero } from '../chunks/PageHero_BRL44077.mjs';
import { H as Heading } from '../chunks/Heading_BhHgbaaz.mjs';
import CalendarHeatmap from 'react-calendar-heatmap';
export { renderers } from '../renderers.mjs';

const RankTimeline = () => {
  const portfolioData = getPortfolioData();
  const timelineData = portfolioData.timeline;
  const colorClasses = [
    "bg-teal-300",
    "bg-indigo-300",
    "bg-blue-500",
    "bg-violet-300",
    "bg-purple-300"
  ];
  const fromDate = (item) => parseInt(item.split("-")[0]);
  const toDate = (item) => parseInt(item.split("-")[1]);
  return /* @__PURE__ */ jsx("div", { className: "ranktimeline", children: /* @__PURE__ */ jsxs("div", { className: "ranktimeline-wrap", children: [
    /* @__PURE__ */ jsx("div", { className: "ranktimeline-year-lines", children: [...Array(15)].map((_, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "ranktimeline-year-line",
        style: { left: `calc(var(--col-width) * ${index * 12})` }
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "ranktimeline-years", children: [...Array(15)].map((_, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "ranktimeline-year !text-xl",
        style: { width: `calc(var(--col-width) * 12)` },
        children: /* @__PURE__ */ jsx("span", { children: 2010 + index })
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "ranktimeline-chart", style: { height: "calc(var(--row-height) * 15)" }, children: calculateRowPositions(timelineData).map((item, itemIndex) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "ranktimeline-item-wrap",
        style: {
          left: `calc(var(--col-width) * ${(parseInt(item.duration.split("-")[0]) - 2010) * 12})`,
          width: `calc(var(--col-width) * ${(parseInt(item.duration.split("-")[1]) - parseInt(item.duration.split("-")[0])) * 12})`,
          height: "var(--row-height)",
          top: `calc(var(--row-height) * ${item.adjustedRowIndex})`
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `ranktimeline-item group text-black ${colorClasses[itemIndex % colorClasses.length]}`,
            "data-id": item.id,
            children: /* @__PURE__ */ jsxs("span", { children: [
              item.icon && /* @__PURE__ */ jsx("img", { src: item.icon, alt: item.name }),
              item.name,
              " ",
              /* @__PURE__ */ jsxs("p", { className: "hidden group-hover:inline", children: [
                "- ",
                fromDate(item.duration),
                fromDate(item.duration) + 1 === toDate(item.duration) ? "" : ` - ${toDate(item.duration) - 1}`
              ] })
            ] })
          }
        )
      },
      itemIndex
    )) })
  ] }) });
};
const calculateRowPositions = (items) => {
  let occupied = [];
  return items.map((item) => {
    let start = parseInt(item.duration.split("-")[0]) - 2010;
    let end = parseInt(item.duration.split("-")[1]) - 2010;
    let adjustedRowIndex = 0;
    while (occupied.some(([s, e, r]) => start < e && end > s && adjustedRowIndex === r)) {
      adjustedRowIndex++;
    }
    occupied.push([start, end, adjustedRowIndex]);
    return { ...item, adjustedRowIndex };
  });
};

const GitHubContributions = ({
  username = "ehsanpo",
  defaultYear = (/* @__PURE__ */ new Date()).getFullYear(),
  className = ""
}) => {
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchContributions = async (year) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch contributions: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchContributions(selectedYear);
  }, [selectedYear, username]);
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const yearOptions = [];
  for (let year = 2008; year <= currentYear; year++) {
    yearOptions.push(year);
  }
  const heatMapData = data?.contributions.map((day) => ({
    date: day.date,
    count: day.count
  })) || [];
  const totalContributions = data?.total[selectedYear.toString()] || 0;
  return /* @__PURE__ */ jsxs("div", { className: `github-contributions min-h-60 ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: "GitHub Contributions" }),
        data && !loading && /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
          totalContributions,
          " contributions in ",
          selectedYear
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "year-select",
            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
            children: "Year:"
          }
        ),
        /* @__PURE__ */ jsx(
          "select",
          {
            id: "year-select",
            value: selectedYear,
            onChange: handleYearChange,
            disabled: loading,
            className: "rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",
            children: yearOptions.reverse().map((year) => /* @__PURE__ */ jsx("option", { value: year, children: year }, year))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      loading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white/50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-600 dark:text-gray-400", children: [
        /* @__PURE__ */ jsxs("svg", { className: "h-5 w-5 animate-spin", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx(
            "circle",
            {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4",
              fill: "none"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }
          )
        ] }),
        "Loading..."
      ] }) }),
      error && /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-700 dark:bg-red-900/20", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-red-600 dark:text-red-400", children: [
        "Error loading contributions: ",
        error
      ] }) }),
      data && !loading && !error && /* @__PURE__ */ jsxs("div", { className: "w-full overflow-x-auto", children: [
        /* @__PURE__ */ jsx("style", { children: `
							.react-calendar-heatmap {
								width: 100% !important;
								min-width: 700px;
							}
							.react-calendar-heatmap .react-calendar-heatmap-month-label {
								font-size: 12px;
								fill: #666;
							}
							.react-calendar-heatmap .react-calendar-heatmap-weekday-label {
								font-size: 10px;
								fill: #666;
							}
							.react-calendar-heatmap .color-empty {
								fill: #ebedf0;
							}
							.react-calendar-heatmap .color-scale-1 {
								fill: #a3d5e8;
							}
							.react-calendar-heatmap .color-scale-2 {
								fill: #6bc4e0;
							}
							.react-calendar-heatmap .color-scale-3 {
								fill: #03aad7;
							}
							.react-calendar-heatmap .color-scale-4 {
								fill: #027ba1;
							}
							@media (prefers-color-scheme: dark) {
								.react-calendar-heatmap .react-calendar-heatmap-month-label {
									fill: #ccc;
								}
								.react-calendar-heatmap .react-calendar-heatmap-weekday-label {
									fill: #ccc;
								}
								.react-calendar-heatmap .color-empty {
									fill: #374151;
								}
							}
						` }),
        /* @__PURE__ */ jsx(
          CalendarHeatmap,
          {
            startDate: /* @__PURE__ */ new Date(`${selectedYear}-01-01`),
            endDate: /* @__PURE__ */ new Date(`${selectedYear}-12-31`),
            values: heatMapData,
            classForValue: (value) => {
              if (!value || value.count === 0) {
                return "color-empty";
              }
              if (value.count >= 1 && value.count <= 3) return "color-scale-1";
              if (value.count >= 4 && value.count <= 6) return "color-scale-2";
              if (value.count >= 7 && value.count <= 9) return "color-scale-3";
              return "color-scale-4";
            },
            showWeekdayLabels: true,
            onClick: (value) => {
              if (value) {
                console.log(`${value.count} contributions on ${value.date}`);
              }
            }
          }
        )
      ] })
    ] })
  ] });
};

const $$GitHubContributionsBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-16 dark:bg-gray-900"> <div class="container mx-auto px-4"> <div class="mb-12 text-center"> ${renderComponent($$result, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ui/heading/Heading", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`GitHub Activity` })} <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
A visual representation of my coding activity and contributions over time.
</p> </div> <div class="mx-auto max-w-6xl"> ${renderComponent($$result, "GitHubContributions", GitHubContributions, { "username": "ehsanpo", "className": "rounded-lg bg-gray-50 px-6 pb-2 pt-6 shadow-sm dark:bg-gray-800", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/GitHubContributions", "client:component-export": "default" })} </div> </div> </section>`;
}, "C:/Users/Ehsan/dev/astro-template/src/blocks/GitHubContributionsBlock.astro", void 0);

const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const { stacks, charts } = await getPortfolioData();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Skills - Developer Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Skills & Tools", "subtitle": "My technical expertise and proficiency across different technologies" })} ${renderComponent($$result2, "TechStackBlock", $$TechStackBlock, { "stacks": stacks })} ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Skills Chart` })} ${renderComponent($$result2, "SkillChart", SkillChart, { "data": stacks, "chartData": charts[0], "client:load": true, "showButtons": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/SkillChart", "client:component-export": "default" })} ${maybeRenderHead()}<section class=""> <div class="container mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Tech Timeline ` })} ${renderComponent($$result2, "RankTimeline", RankTimeline, {})} </div> </section> ${renderComponent($$result2, "ToolsList", $$ToolsList, {})} ${renderComponent($$result2, "GitHubContributionsBlock", $$GitHubContributionsBlock, {})} ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Development Process` })} ${renderComponent($$result2, "ProcessFlowDiagram", ProcessFlowDiagram, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Beams", "client:component-export": "ProcessFlowDiagram" })} ${renderComponent($$result2, "Certificates", $$CertificatesBlock, { "showAll": true })} ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/skills.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/skills.astro";
const $$url = "/skills";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Skills,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
