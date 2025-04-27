import { usePortfolio } from '@presentation/contexts/PortfolioContext';
import './CompanyList.css';

export function CompanyList() {
  const { companies, selectedCompany, loading, selectCompany } = usePortfolio();

  if (loading && companies.length === 0) {
    return <div className="company-list-loading">Loading companies...</div>;
  }

  if (companies.length === 0) {
    return <div className="company-list-empty">No companies found</div>;
  }

  return (
    <div className="company-list">
      <h2>Experience</h2>
      <div className="company-items">
        {companies.map(company => (
          <div
            key={company.id}
            className={`company-item ${selectedCompany?.companyId === company.id ? 'selected' : ''}`}
            onClick={() => selectCompany(company.id)}
          >
            <div className="company-logo">
              {company.logoUrl ? (
                <img src={company.logoUrl} alt={company.name} />
              ) : (
                <div className="company-logo-placeholder">{company.name.charAt(0)}</div>
              )}
            </div>
            <div className="company-info">
              <h3>{company.name}</h3>
              <div className="company-position">{company.position}</div>
              <div className="company-date">{company.dateRange}</div>
              <div className="company-duration">{company.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 