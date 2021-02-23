import { AlcoholFilterPipe } from './alcohol-filter.pipe';

describe('AlcoholFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new AlcoholFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
