const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', function () {
  it('shoud generate correct message object', function () {
    const from = 'Kevin';
    const text = 'some message here';
    const message = generateMessage(from, text);

    expect(message).toMatchObject({
      from,
      text
    });
    expect(typeof message.createdAt).toBe('number');
  });

  describe('generateLocationMessage', function () {
    it('should generate correct location object', function () {
      const from = 'Admin';
      const latitude = 38;
      const longitude = -121;
      const url = 'https://www.google.com/maps?q=38,-121';

      const locationMessage = generateLocationMessage(from, latitude, longitude);

      expect(locationMessage).toMatchObject({
        from,
        url
      });
      expect(typeof locationMessage.createdAt).toBe('number');
    });
  });
});
