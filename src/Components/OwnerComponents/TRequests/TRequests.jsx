import React from 'react'
import { useTranslation } from 'react-i18next';
import OwnerRequestTable from '../../Tables/OwnerRequestsTable';
export default function TRequests() {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <h3>{t('routes.transportation_request')}</h3>
      </div>
      <div>
        <OwnerRequestTable/>
      </div>
    </div>
  );
}
