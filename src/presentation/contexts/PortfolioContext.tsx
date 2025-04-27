import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DependencyConfig } from '@infrastructure/config/DependencyConfig';
import type { CompanyOutput } from '@application/use-cases/ListAllCompaniesUseCase';
import type { ListCompanySkillsOutput } from '@application/use-cases/ListCompanySkillsUseCase';

interface PortfolioContextType {
  companies: CompanyOutput[];
  selectedCompany: ListCompanySkillsOutput | null;
  loading: boolean;
  error: string | null;
  selectCompany: (companyId: string) => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

interface PortfolioProviderProps {
  children: ReactNode;
}

export function PortfolioProvider({ children }: PortfolioProviderProps) {
  const [companies, setCompanies] = useState<CompanyOutput[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<ListCompanySkillsOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const dependencies = DependencyConfig.getInstance();
        await dependencies.initialize();

        const listAllCompaniesUseCase = dependencies.getListAllCompaniesUseCase();
        const companiesData = await listAllCompaniesUseCase.execute();
        
        setCompanies(companiesData);
        
        if (companiesData.length > 0) {
          await selectCompany(companiesData[0].id);
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to initialize portfolio data');
        setLoading(false);
        console.error(err);
      }
    };

    initializeData();
  }, []);

  const selectCompany = async (companyId: string) => {
    try {
      setLoading(true);
      const dependencies = DependencyConfig.getInstance();
      const listCompanySkillsUseCase = dependencies.getListCompanySkillsUseCase();
      
      const companyData = await listCompanySkillsUseCase.execute(companyId);
      
      if (companyData) {
        setSelectedCompany(companyData);
      } else {
        setError(`Company with id ${companyId} not found`);
      }
      
      setLoading(false);
    } catch (err) {
      setError('Failed to load company details');
      setLoading(false);
      console.error(err);
    }
  };

  const value = {
    companies,
    selectedCompany,
    loading,
    error,
    selectCompany
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  
  return context;
} 