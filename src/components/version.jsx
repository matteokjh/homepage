import { useTranslation } from "next-i18next";

export default function Version() {
  const { i18n } = useTranslation();

  const buildTime = process.env.NEXT_PUBLIC_BUILDTIME?.length
    ? process.env.NEXT_PUBLIC_BUILDTIME
    : new Date().toISOString();
  const version = process.env.version ?? "dev";

  // use Intl.DateTimeFormat to format the date
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return new Intl.DateTimeFormat(i18n.language, options).format(new Date(date));
  };

  return (
    <div id="version" className="flex flex-row items-center">
      <span className="text-xs text-theme-500 dark:text-theme-400">
        {version} ({formatDate(buildTime)})
      </span>
    </div>
  );
}
