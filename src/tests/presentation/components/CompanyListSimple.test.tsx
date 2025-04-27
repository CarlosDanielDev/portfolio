import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import type { CompanyOutput } from '@application/use-cases/ListAllCompaniesUseCase';

const CompanyListSimple = ({
  companies,
  selectedCompany,
  loading,
  selectCompany
}: {
  companies: CompanyOutput[];
  selectedCompany: { companyId: string } | null;
  loading: boolean;
  selectCompany: (id: string) => void;
}) => {
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
};

describe('CompanyListSimple', () => {
  const mockSelectCompany = jest.fn();

  const mockCompanies: CompanyOutput[] = [
    {
      id: '1',
      name: 'Company A',
      position: 'Developer',
      description: 'Company A description',
      dateRange: '2020-2022',
      duration: '2 years',
      logoUrl: 'https://example.com/logo-a.png'
    },
    {
      id: '2',
      name: 'Company B',
      position: 'Senior Developer',
      description: 'Company B description',
      dateRange: '2022-Present',
      duration: '1 year',
      logoUrl: undefined
    }
  ];

  beforeEach(() => {
    // Reset mock before each test
    mockSelectCompany.mockClear();
  });

  test('should show loading message when loading=true and no companies', () => {
    render(
      <CompanyListSimple
        companies={[]}
        selectedCompany={null}
        loading={true}
        selectCompany={mockSelectCompany}
      />
    );
    
    expect(screen.getByText('Loading companies...')).toBeInTheDocument();
  });

  test('should show "No companies found" message when no companies and loading=false', () => {
    render(
      <CompanyListSimple
        companies={[]}
        selectedCompany={null}
        loading={false}
        selectCompany={mockSelectCompany}
      />
    );
    
    expect(screen.getByText('No companies found')).toBeInTheDocument();
  });

  test('should render the list of companies correctly', () => {
    render(
      <CompanyListSimple
        companies={mockCompanies}
        selectedCompany={{ companyId: '1' }}
        loading={false}
        selectCompany={mockSelectCompany}
      />
    );
    
    expect(screen.getByText('Company A')).toBeInTheDocument();
    expect(screen.getByText('Company B')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
    expect(screen.getByText('2 years')).toBeInTheDocument();
    expect(screen.getByText('1 year')).toBeInTheDocument();
  });

  test('should apply "selected" class to the selected company', () => {
    render(
      <CompanyListSimple
        companies={mockCompanies}
        selectedCompany={{ companyId: '1' }}
        loading={false}
        selectCompany={mockSelectCompany}
      />
    );
    
    const companyElements = screen.getAllByRole('heading', { level: 3 });
    const companyAContainer = companyElements[0].closest('.company-item');
    const companyBContainer = companyElements[1].closest('.company-item');
    
    expect(companyAContainer).toHaveClass('selected');
    expect(companyBContainer).not.toHaveClass('selected');
  });

  test('should call selectCompany when a company is clicked', () => {
    render(
      <CompanyListSimple
        companies={mockCompanies}
        selectedCompany={null}
        loading={false}
        selectCompany={mockSelectCompany}
      />
    );
    
    fireEvent.click(screen.getByText('Company A'));
    
    expect(mockSelectCompany).toHaveBeenCalledWith('1');
  });

  test('should render logo image when logoUrl is present', () => {
    render(
      <CompanyListSimple
        companies={mockCompanies}
        selectedCompany={null}
        loading={false}
        selectCompany={mockSelectCompany}
      />
    );
    
    const logoImage = screen.getByAltText('Company A');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.getAttribute('src')).toBe('https://example.com/logo-a.png');
  });

  test('should render logo placeholder when logoUrl is undefined', () => {
    render(
      <CompanyListSimple
        companies={mockCompanies}
        selectedCompany={null}
        loading={false}
        selectCompany={mockSelectCompany}
      />
    );
    
    const placeholder = screen.getByText('C');
    expect(placeholder).toBeInTheDocument();
    expect(placeholder.closest('.company-logo-placeholder')).toBeInTheDocument();
  });
}); 