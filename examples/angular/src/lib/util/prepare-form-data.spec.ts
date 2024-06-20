import { prepareFormData } from './prepare-form-data';

const endpoint = 'http://localhost/v1';
const project = '888888888';

class FormDataMock implements Partial<FormData> {
  append = jest.fn();
}

// @ts-ignore
global.FormData = FormDataMock;

describe(prepareFormData.name, () => {
  it('should flatten an object or array for multipart form data', () => {
    const formData = new FormData();
    const payload = { a: 1, b: 2, permissions: ['read("any")', 'write("team:60e5a3455380c")'] };
    prepareFormData(formData, payload);
    expect(formData.append).toHaveBeenCalled();
    // expect(formData.append).toEqual(`${endpoint}?a=1&b=2`);
  });
});
