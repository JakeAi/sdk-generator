import { prepareSearchParams } from './prepare-search-params';

const endpoint = 'http://localhost/v1';
const project = '888888888';

describe(prepareSearchParams.name, () => {
  it('should flatten an object or array to search parameters', () => {
    const url = new URL(endpoint);
    prepareSearchParams(url, { a: 1, b: 2 });
    expect(url.toString()).toEqual(`${endpoint}?a=1&b=2`);
  });
});
