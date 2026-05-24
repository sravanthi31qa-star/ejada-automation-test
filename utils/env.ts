import 'dotenv/config';

type EnvironmentName = 'dev' | 'staging' | 'prod';

export function getConfig() {
  const envName = (process.env.ENV as EnvironmentName | undefined) ?? 'dev';
  const baseURL =
    process.env[`${envName.toUpperCase()}_BASE_URL`] ??
    process.env.BASE_URL ??
    'https://www.saucedemo.com';

  return {
    envName,
    baseURL,
    headless: process.env.HEADLESS !== 'false',
  };
}
