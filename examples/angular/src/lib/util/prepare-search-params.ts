/**
 * Modifies the search parameters of a URL by adding key-value pairs from a payload object.
 *
 * @param {URL} url - The URL to modify.
 * @param {Payload} payload - The payload object containing the key-value pairs to add to the URL's search parameters.
 * @return {URL} The modified URL.
 */
import { Payload } from '@appwrite/common';
import { flatten } from './';

export function prepareSearchParams(url: URL, payload: Payload): URL {
  for (const [key, value] of Object.entries(flatten(payload))) {
    url.searchParams.append(key, value);
  }
  return url;
}
