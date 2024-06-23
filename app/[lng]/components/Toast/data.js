export const ALERT_TYPES = {
  info: "info",
  success: "success",
  warn: "warn",
  error: "error",
};

export const MESSAGES = {
  partial_data: {
    type: ALERT_TYPES.error,
    text: "partial_data",
  },
  miss_query: {
    type: ALERT_TYPES.error,
    text: "miss_query",
  },
};
