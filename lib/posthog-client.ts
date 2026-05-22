type PostHogBrowser = {
  capture: (event: string, properties?: Record<string, unknown>) => void;
  identify: (distinctId?: string, properties?: Record<string, unknown>) => void;
  get_distinct_id: () => string;
  get_session_id: () => string | undefined;
  captureException: (error: unknown, properties?: Record<string, unknown>) => void;
};

type PostHogGlobal = Partial<PostHogBrowser>;

function getPostHogClient(): PostHogGlobal | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  return (window as Window & { posthog?: PostHogGlobal }).posthog;
}

export const posthog: PostHogBrowser = {
  capture(event, properties) {
    getPostHogClient()?.capture?.(event, properties);
  },
  identify(distinctId, properties) {
    getPostHogClient()?.identify?.(distinctId, properties);
  },
  get_distinct_id() {
    return getPostHogClient()?.get_distinct_id?.() ?? "";
  },
  get_session_id() {
    return getPostHogClient()?.get_session_id?.();
  },
  captureException(error, properties) {
    getPostHogClient()?.captureException?.(error, properties);
  },
};
