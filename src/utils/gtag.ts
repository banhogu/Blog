const GA_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const pageview = (url: URL | string) => {
  window.gtag('config', GA_ID as string, {
    page_path: url,
  });
};

type gtagEvent = {
  action: string;
  category: string;
  label: string;
  value: string;
};

export const event = ({ action, category, label, value }: gtagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
