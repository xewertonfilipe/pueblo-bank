import { ApplicationsInterface } from '@/interfaces/aplications';

interface ApiResponse {
  success: boolean;
  data: {
    applications: ApplicationsInterface[];
  };
}

export async function fetchApplications(): Promise<ApiResponse['data']> {
  try {
    const response = await fetch('http://localhost:3000/api/applications', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar lista de aplicações');
    }

    const result: ApiResponse = await response.json();

    if (!result.success) {
      throw new Error('Erro na resposta da API');
    }

    return result.data;
  } catch (error) {
    const { applications } = await import('@/data/applications');

    return {
      applications,
    };
  }
}
