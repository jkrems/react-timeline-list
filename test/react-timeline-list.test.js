import assert from 'assertive';

import ReactTimeList from '../';

describe('ReactTimeList', function () {
  it('has a render method', function () {
    const list = new ReactTimeList();
    assert.hasType(Function, list.render);
  });
});
