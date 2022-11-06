describe('Example', () => {
  await act(async () => {
    await device.reloadReactNative();
  });

  it('should have Home screen', await act(async () => {
    await expect(element(by.id('home'))).toBeVisible();
  }));

  it('should show detail screen after tap', await act(async () => {
    await element(by.id('details_button')).tap();
    await expect(element(by.text('Details!'))).toBeVisible();
  }));
});
