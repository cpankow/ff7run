import { from } from 'rxjs';

const data = from([]);

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data),
};

const docStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data),
};

export const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub),
  doc: jasmine.createSpy('doc').and.returnValue(docStub),
};

const userStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data),
};

export const angularFireAuthStub = {
  user: from([]),
};

export const angularFireFunctionsStub = {};
