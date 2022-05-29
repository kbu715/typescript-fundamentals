import axios, { AxiosResponse } from 'axios';
import {
  CountrySummaryResponse,
  CovidStatus,
  CovidSummaryResponse,
} from '../covid';
// api
function fetchCovidSummary(): Promise<AxiosResponse<CovidSummaryResponse>> {
  const url = 'https://api.covid19api.com/summary';
  return axios.get(url);
}

function fetchCountryInfo(
  countryCode: string | undefined,
  status: CovidStatus
): Promise<AxiosResponse<CountrySummaryResponse>> {
  // status params: confirmed, recovered, deaths
  const url = `https://api.covid19api.com/country/${countryCode}/status/${status}`;
  return axios.get(url);
}

export { fetchCovidSummary, fetchCountryInfo };
