"use client";

import { useEffect } from "react";
import { useTranslation } from "@/app/i18n/client";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "./toastSlice";
import { ALERT_TYPES } from "./data";
import { InfoIcon, SuccessIcon, WarnIcon, ErrorIcon } from "./Icon";
import clsx from "clsx";

const Toast = ({ lng }) => {
  const { t } = useTranslation(lng, "toast");

  const dispatch = useDispatch();
  const { visible, message, type } = useSelector((state) => state.toast);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const getIcon = (type) => {
    const iconMap = {
      info: InfoIcon,
      success: SuccessIcon,
      warn: WarnIcon,
      error: ErrorIcon,
    };

    const IconComponent = iconMap[type];
    return IconComponent ? <IconComponent /> : null;
  };

  const alertClass = clsx("alert", {
    "alert-info": type === ALERT_TYPES.info,
    "alert-success": type === ALERT_TYPES.success,
    "alert-warn": type === ALERT_TYPES.warn,
    "alert-error": type === ALERT_TYPES.error,
  });

  if (!visible) return null;

  return (
    <div className="toast toast-center toast-bottom">
      <div className={alertClass}>
        {getIcon(type)}
        <span className="text-sm" aria-label="alert-message">
          {t(message)}
        </span>
        <button onClick={() => dispatch(hideToast())} className="btn btn-ghost btn-sm ml-2">
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;
