import { waitForAsync } from '@angular/core/testing';
import { AppwriteAngularModule, AppwriteContentPipe, AppwriteDatabasesService } from '@appwrite/angular';
import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';

describe(AppwriteContentPipe.name, () => {
  const collectionId = 'testCollectionId';
  const documentId = 'testdocumentId';

  const mockFn = jest.fn();
  mockFn.mockReturnValue({ test: true });

  beforeEach(() => MockBuilder(AppwriteContentPipe, AppwriteAngularModule.forRoot({})));

  beforeAll(() =>
    MockInstance(AppwriteDatabasesService, {
      init: (instance) => {
        instance.getDocument = mockFn;
      },
    })
  );

  it('should get one document', waitForAsync(async () => {
    const fixture = MockRender(`{{ value | contentPipe:"${collectionId}" | async | json}}`, {
      value: documentId,
    });
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const response = JSON.parse(fixture.nativeElement.innerHTML);
    expect(response.length).toBe(1);
    expect(response).toEqual([{ test: true }]);
  }));

  it('should get multiple documents', waitForAsync(async () => {
    const fixture = MockRender(`{{ value | contentPipe:"${collectionId}" | async | json}}`, {
      value: [documentId, documentId],
    });

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const response = JSON.parse(fixture.nativeElement.innerHTML);
    expect(response.length).toBe(2);
    expect(response).toEqual([{ test: true }, { test: true }]);
  }));

  it('should pass correct params', waitForAsync(async () => {
    const fixture = MockRender(`{{ value | contentPipe:"${collectionId}" | async | json}}`, {
      value: documentId,
    });
    expect(mockFn).toHaveBeenCalledWith(collectionId, documentId);
  }));
});
