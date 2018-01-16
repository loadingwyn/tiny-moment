import tinyMoment from '../dist/bundle.esm.js';

describe('tinyMoment', () => {
  describe('tinyMoment.format', () => {
    it('throw Invalid format', () => {
      expect(() => tinyMoment.format('sdf')).toThrowError('Invalid date');
    });

    it('handle Date Object', () => {
      expect(
        tinyMoment.format(new Date('1995-12-17T03:24:00'), 'yyyy.MM.dd'),
      ).toBe('1995.12.17');
    });
    it('throw Invalid format', function() {
      expect(() => tinyMoment.format('1995-12-17T03:24:00', 1234)).toThrowError(
        'Invalid format',
      );
    });

    it('yyyy.MM.dd', () => {
      expect(tinyMoment.format('1995/2/7', 'yyyy.MM.dd')).toBe('1995.02.07');
    });

    it('yy.M.dd', () => {
      expect(tinyMoment.format('1995/2/7', 'yy:M:dd')).toBe('95:2:07');
    });

    it('yy.M.dd, HH', () => {
      expect(tinyMoment.format('1995/2/7', 'yy:M:dd, HH')).toBe('95:2:07, 00');
    });

    it('yy.M.dd, HH:mm:s', () => {
      expect(
        tinyMoment.format('December 25, 1995 23:15:00', 'yy:M:dd, HH:mm:s'),
      ).toBe('95:12:25, 23:15:0');
    });
  });
  describe('tinyMoment.parse', () => {
    it('throw not match', () => {
      expect(() =>
        tinyMoment.parse('2016-08-18', 'MM-dd', 'MM-yyyy-dd, hh'),
      ).toThrowError('Not match');
    });

    it('return unvalid', () => {
      expect(() =>
        tinyMoment.parse('08-18', 'MM-dd', 'MM-yyyy-dd, hh'),
      ).toThrowError('Invalid Date');
    });

    it('convert yyyy-MM-dd to MM-yyyy-dd', () => {
      expect(tinyMoment.parse('2016-08-18', 'yyyy-MM-dd', 'MM-yyyy-dd, hh')).toBe(
        '09-2016-18, 00',
      );
    });
  });
});
