import { useState, useEffect } from 'react';
import { DependencyConfig } from '@infrastructure/config/DependencyConfig';
import type { PrivacyPolicyOutput } from '@application/use-cases/GetPrivacyPolicyUseCase';

interface UsePrivacyPolicyResult {
  privacyPolicy: PrivacyPolicyOutput | null;
  isLoading: boolean;
  error: string | null;
}

export const usePrivacyPolicy = (): UsePrivacyPolicyResult => {
  const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicyOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPrivacyPolicy = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const dependencies = DependencyConfig.getInstance();
        const getPrivacyPolicyUseCase = dependencies.getPrivacyPolicyUseCase();
        const policy = await getPrivacyPolicyUseCase.execute();
        
        setPrivacyPolicy(policy);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load privacy policy';
        setError(errorMessage);
        console.error('Error loading privacy policy:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPrivacyPolicy();
  }, []);

  return {
    privacyPolicy,
    isLoading,
    error
  };
}; 