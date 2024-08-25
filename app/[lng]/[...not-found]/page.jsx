import { useTranslation } from "@/app/i18n";
import Link from "next/link";

const NotFound = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "common");
  return (
    <div className="hero min-h-full bg-base-200">
      <div className="flex max-w-full flex-col gap-5 md:max-w-screen-sm">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("not_found_title")}
          </h1>
          <p className="text-muted-foreground mt-4">{t("not_found_desc")}</p>
          <div className="mt-6">
            <Link href="/" className="btn btn-primary" prefetch={false}>
              {t("not_found_btn")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
