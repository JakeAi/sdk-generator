import { Payload } from '@appwrite/common';

export function flatten(data: Payload, prefix: string = ''): Payload {
  let output: Payload = {};

  for (const key in data) {
    const value = data[key];
    if (!value) { continue; }
    const finalKey = prefix ? `${prefix}[${key}]` : key;

    if (Array.isArray(value)) {
      output = Object.assign(output, flatten(value, finalKey));
    } else {
      output[finalKey] = value;
    }
  }

  return output;
}
