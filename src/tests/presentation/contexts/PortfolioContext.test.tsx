import { render, screen, waitFor, act } from '@testing-library/react';
import { PortfolioProvider, usePortfolio } from '@presentation/contexts/PortfolioContext';
import { DependencyConfig } from '@infrastructure/config/DependencyConfig';
import { jest } from '@jest/globals';
import type { CompanyOutput } from '@application/use-cases/ListAllCompaniesUseCase';
import type { ListCompanySkillsOutput } from '@application/use-cases/ListCompanySkillsUseCase';

jest.mock('@infrastructure/config/DependencyConfig');

const TestComponent = () => {
  const portfolio = usePortfolio();
  return (
    <div>
      <div data-testid="loading">{portfolio.loading.toString()}</div>
      <div data-testid="error">{portfolio.error || 'no-error'}</div>
      <div data-testid="companies-count">{portfolio.companies.length}</div>
      <div data-testid="selected-company">
        {portfolio.selectedCompany ? portfolio.selectedCompany.companyName : 'none'}
      </div>
      <button 
        data-testid="select-company" 
        onClick={() => portfolio.selectCompany('2')}
      >
        Select Company
      </button>
    </div>
  );
};

const mockCompanies: CompanyOutput[] = [
  {
    id: '1',
    name: 'Test Company',
    position: 'Developer',
    description: 'Test Description',
    dateRange: '2020-2022',
    duration: '2 years',
    logoUrl: 'test-logo.png'
  }
];

const mockCompanySkills: ListCompanySkillsOutput = {
  companyId: '1',
  companyName: 'Test Company',
  position: 'Developer',
  dateRange: '2020-2022',
  skills: []
};

describe('PortfolioContext', () => {
  let mockInitialize: jest.Mock;
  let mockListAllCompaniesExecute: jest.Mock;
  let mockListCompanySkillsExecute: jest.Mock;
  
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    
    mockInitialize = jest.fn().mockResolvedValue(undefined as never);
    mockListAllCompaniesExecute = jest.fn().mockResolvedValue(mockCompanies as never);
    mockListCompanySkillsExecute = jest.fn().mockResolvedValue(mockCompanySkills as never);
    
    jest.spyOn(DependencyConfig, 'getInstance').mockImplementation(() => ({
      initialize: mockInitialize,
      getListAllCompaniesUseCase: () => ({
        execute: mockListAllCompaniesExecute
      }),
      getListCompanySkillsUseCase: () => ({
        execute: mockListCompanySkillsExecute
      })
    } as unknown as DependencyConfig));
  });

  test('initializes with companies data and selects first company', async () => {
    render(
      <PortfolioProvider>
        <TestComponent />
      </PortfolioProvider>
    );

    expect(screen.getByTestId('loading').textContent).toBe('true');

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });
    
    expect(screen.getByTestId('companies-count').textContent).toBe('1');
    expect(screen.getByTestId('selected-company').textContent).toBe('Test Company');
    expect(screen.getByTestId('error').textContent).toBe('no-error');
    
    expect(mockInitialize).toHaveBeenCalled();
    expect(mockListAllCompaniesExecute).toHaveBeenCalled();
    expect(mockListCompanySkillsExecute).toHaveBeenCalledWith('1');
  });

  test('handles selectCompany function', async () => {
    const secondCompanyData: ListCompanySkillsOutput = {
      companyId: '2',
      companyName: 'Second Company',
      position: 'Senior Developer',
      dateRange: '2022-Present',
      skills: []
    };
    
    mockListCompanySkillsExecute
      .mockResolvedValueOnce(mockCompanySkills as never)
      .mockResolvedValueOnce(secondCompanyData as never);

    render(
      <PortfolioProvider>
        <TestComponent />
      </PortfolioProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });
    
    expect(screen.getByTestId('selected-company').textContent).toBe('Test Company');

    mockListCompanySkillsExecute.mockClear();
    
    const selectButton = screen.getByTestId('select-company');
    await act(async () => {
      selectButton.click();
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('selected-company').textContent).toBe('Second Company');
    });
    
    expect(mockListCompanySkillsExecute).toHaveBeenCalledWith('2');
  });

  test('handles error when initializing', async () => {
    const originalConsoleError = console.error;
    console.error = jest.fn();
    
    mockInitialize.mockRejectedValue('Initialization error' as never);

    render(
      <PortfolioProvider>
        <TestComponent />
      </PortfolioProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
      expect(screen.getByTestId('error').textContent).toBe('Failed to initialize portfolio data');
    });
    
    console.error = originalConsoleError;
  });

  test('handles error when company not found', async () => {
    mockListCompanySkillsExecute
      .mockResolvedValueOnce(mockCompanySkills as never)
      .mockResolvedValueOnce(null as never);

    render(
      <PortfolioProvider>
        <TestComponent />
      </PortfolioProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });

    const selectButton = screen.getByTestId('select-company');
    await act(async () => {
      selectButton.click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('error').textContent).toBe('Company with id 2 not found');
    });
  });

  test('handles error when selecting company fails', async () => {
    const originalConsoleError = console.error;
    console.error = jest.fn();
    
    mockListCompanySkillsExecute
      .mockResolvedValueOnce(mockCompanySkills as never)
      .mockRejectedValueOnce(new Error('Selection error') as never);

    render(
      <PortfolioProvider>
        <TestComponent />
      </PortfolioProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });

    const selectButton = screen.getByTestId('select-company');
    await act(async () => {
      selectButton.click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('error').textContent).toBe('Failed to load company details');
    });
    
    console.error = originalConsoleError;
  });

  test('usePortfolio throws error when used outside of PortfolioProvider', () => {
    const originalError = console.error;
    console.error = jest.fn();
    
    expect(() => {
      render(<TestComponent />);
    }).toThrow('usePortfolio must be used within a PortfolioProvider');
    
    console.error = originalError;
  });
}); 