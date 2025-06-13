import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("jira", "./jira/JiraSuggestions.tsx"),
] satisfies RouteConfig;
