import { render, screen, fireEvent } from '@testing-library/react';
import type { CompanyOutput } from '@application/use-cases/ListAllCompaniesUseCase';
import type { ListCompanySkillsOutput } from '@application/use-cases/ListCompanySkillsUseCase';
import { jest } from '@jest/globals';

const CompanyListWrapper = ({
  companies = [],
  selectedCompany = null,
  loading = false,
  selectCompany = jest.fn()
}: {
  companies?: CompanyOutput[];
  selectedCompany?: ListCompanySkillsOutput | null;
  loading?: boolean;
  error?: string | null;
  selectCompany?: (id: string) => void;
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
      <ul className="company-items">
        {companies.map(company => (
          <li
            key={company.id}
            className={`company-item ${selectedCompany?.companyId === company.id ? 'selected' : ''}`}
            onClick={() => selectCompany(company.id)}
            tabIndex={0}
          >
            <div className="company-logo">
              {company.logoUrl ? (
                <img src={company.logoUrl} alt={company.name} />
              ) : (
                <div className="company-logo-placeholder">{company.name.charAt(0) || '?'}</div>
              )}
            </div>
            <div className="company-info">
              <h3>{company.name}</h3>
              <div className="company-position">{company.position}</div>
              <div className="company-date">{company.dateRange}</div>
              <div className="company-duration">{company.duration}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

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

const mockSelectedCompany: ListCompanySkillsOutput = {
  companyId: '1',
  companyName: 'Company A',
  position: 'Developer',
  dateRange: '2020-2022',
  skills: []
};

describe('CompanyListWrapper', () => {
  const mockSelectCompany = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('shows loading message when loading is true and no companies', () => {
    render(
      <CompanyListWrapper 
        companies={[]} 
        loading={true} 
        selectCompany={mockSelectCompany} 
      />
    );
    
    expect(screen.getByText('Loading companies...')).toBeInTheDocument();
  });

  test('shows "No companies found" when no companies and not loading', () => {
    render(
      <CompanyListWrapper 
        companies={[]} 
        loading={false} 
        selectCompany={mockSelectCompany} 
      />
    );
    
    expect(screen.getByText('No companies found')).toBeInTheDocument();
  });

  test('renders the list of companies correctly', () => {
    render(
      <CompanyListWrapper 
        companies={mockCompanies} 
        selectedCompany={mockSelectedCompany} 
        loading={false} 
        selectCompany={mockSelectCompany} 
      />
    );
    
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Company A')).toBeInTheDocument();
    expect(screen.getByText('Company B')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
    expect(screen.getByText('2020-2022')).toBeInTheDocument();
    expect(screen.getByText('2022-Present')).toBeInTheDocument();
    expect(screen.getByText('2 years')).toBeInTheDocument();
    expect(screen.getByText('1 year')).toBeInTheDocument();
  });

  test('applies "selected" class to the selected company', () => {
    render(
      <CompanyListWrapper 
        companies={mockCompanies} 
        selectedCompany={mockSelectedCompany} 
        loading={false} 
        selectCompany={mockSelectCompany} 
      />
    );
    
    const companyAItem = screen.getByText('Company A').closest('.company-item');
    const companyBItem = screen.getByText('Company B').closest('.company-item');
    
    expect(companyAItem).toHaveClass('selected');
    expect(companyBItem).not.toHaveClass('selected');
  });

  test('calls selectCompany when a company is clicked', () => {
    render(
      <CompanyListWrapper 
        companies={mockCompanies} 
        selectedCompany={null} 
        loading={false} 
        selectCompany={mockSelectCompany} 
      />
    );
    
    const companyAItem = screen.getByText('Company A').closest('.company-item');
    fireEvent.click(companyAItem!);
    
    expect(mockSelectCompany).toHaveBeenCalledWith('1');
  });

  test('renders logo image when logoUrl is present', () => {
    render(
      <CompanyListWrapper 
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

  test('renders logo placeholder when logoUrl is undefined', () => {
    render(
      <CompanyListWrapper 
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

  test('handles company with empty name for placeholder', () => {
    const companiesWithEmptyName = [
      ...mockCompanies,
      {
        id: '3',
        name: '',
        position: 'Consultant',
        description: 'Empty name company',
        dateRange: '2019-2020',
        duration: '1 year',
        logoUrl: undefined
      }
    ];
    
    render(
      <CompanyListWrapper 
        companies={companiesWithEmptyName} 
        selectedCompany={null} 
        loading={false} 
        selectCompany={mockSelectCompany} 
      />
    );
    
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  test('has proper ARIA attributes for accessibility', () => {
    render(
      <CompanyListWrapper 
        companies={mockCompanies} 
        selectedCompany={mockSelectedCompany} 
        loading={false} 
        selectCompany={mockSelectCompany} 
      />
    );
    
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(mockCompanies.length);
    
    listItems.forEach(item => {
      expect(item).toHaveAttribute('tabindex', '0');
    });
  });
}); 