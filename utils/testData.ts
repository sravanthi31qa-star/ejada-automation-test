import fs from 'fs';
import path from 'path';

export function loadTestData() {
  const filePath = path.resolve(process.cwd(), 'fixtures', 'testData.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as {
    users: {
      valid: { username: string; password: string };
      invalid: { username: string; password: string };
      locked: { username: string; password: string };
    };
    checkout: {
      firstName: string;
      lastName: string;
      postalCode: string;
    };
    products: {
      backpack: string;
      bikeLight: string;
    };
  };
}
