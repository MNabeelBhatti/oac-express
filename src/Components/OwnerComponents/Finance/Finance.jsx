import React from 'react'
import { useTranslation } from 'react-i18next';
export default function Finance() {
   const { t } = useTranslation();
  return (
    <div>
      <div>
        <h3>{t("routes.finance")}</h3>
      </div>
    </div>
  );
}
