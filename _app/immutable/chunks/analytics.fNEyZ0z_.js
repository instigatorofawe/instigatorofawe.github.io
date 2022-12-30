function e(n, t) {
  window.gtag && window.gtag("event", n, t);
}
function i(n, t) {
  window.gtag && window.gtag("event", "page_view", { page_path: n, page_title: t });
}
function o(n, t) {
  e("navigation_click", { link_text: n, destination: t });
}
function c(n, t) {
  e("outbound_click", { link_text: n, link_url: t, link_domain: new URL(t).hostname });
}
function s(n, t) {
  e("scroll_depth", { scroll_depth: n, page: t });
}
function g(n, t, a) {
  e("essay_engagement", { essay_id: n, time_spent_seconds: t, scroll_depth: a });
}
function r(n, t) {
  e("demo_interaction", { demo_name: n, action: t });
}
export {
  c as a,
  o as b,
  s as c,
  g as d,
  r as e,
  i as t
};
