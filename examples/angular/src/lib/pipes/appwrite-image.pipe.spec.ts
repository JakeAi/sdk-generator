import { waitForAsync } from '@angular/core/testing';
import { AppwriteAngularModule, AppwriteImagePipe, AppwriteStorageService } from '@appwrite/angular';
import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';

describe(AppwriteImagePipe.name, () => {
  const pipe = 'appwriteImage';
  const mockDocumentId = 'mockDocumentId';
  const mockCollectionId = 'mockCollectionId';
  const mockValue = 'https://test.com/true/';

  const mockFn = jest.fn((fileId: string) => mockValue + fileId);

  beforeEach(() => MockBuilder(AppwriteImagePipe, AppwriteAngularModule.forRoot({})));

  beforeAll(() =>
    MockInstance(AppwriteStorageService, {
      init: (instance) => {
        instance.getFilePreview = mockFn;
      },
    })
  );

  it('should get more than one document', waitForAsync(async () => {
    const template = `{{ value | ${pipe} }}`;
    const fixture = MockRender(template, { value: mockDocumentId });
    fixture.detectChanges();
    const response = fixture.nativeElement.innerHTML;
    expect(response).toEqual(mockValue + mockDocumentId);
  }));

  it('should pass correct params', waitForAsync(async () => {
    mockFn.mockClear();
    const template = `{{ value | ${pipe}:{width:200} }}`;
    const fixture = MockRender(template, { value: mockDocumentId });
    fixture.detectChanges();
    expect(mockFn.mock.calls[0].some((value) => value === mockDocumentId)).toEqual(true);
    expect(mockFn.mock.calls[0].some((value: any) => value === 200)).toEqual(true);
    expect(mockFn).toHaveBeenCalledTimes(1);
  }));
});
