import { ImagePipe } from '../../../src/app/shared/pipe/image.pipe';

describe('ImagePipe', () => {
  const pipe = new ImagePipe();
  test('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  test('debe de retornar la ruta de los assets', () => {
    const value = pipe.transform('close');
    expect(value).toBe('../../../assets/icons/close.svg');
  });
});
