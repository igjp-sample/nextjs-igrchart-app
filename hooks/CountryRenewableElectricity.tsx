export class CountryRenewableElectricityItem {
  public constructor(init: Partial<CountryRenewableElectricityItem>) {
      Object.assign(this, init);
  }

  public X: number;
  public USA: number;
  public China: number;
  public Russia: number;
  public Switch: number;


}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
  public constructor() {
      super();
      this.push(new CountryRenewableElectricityItem(
      {
          X: 0,
          USA: 34,
          China: 21,
          Russia: 19,
          Switch: 0,
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          X: 5,
          USA: 43,
          China: 26,
          Russia: 24,
          Switch: 0,
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          X: 10,
          USA: 66,
          China: 29,
          Russia: 28,
          Switch: -1,
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          X: 15,
          USA: 69,
          China: 32,
          Russia: 26,
          Switch: 0
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          X: 20,
          USA: 58,
          China: 47,
          Russia: 38,
          Switch: 0,
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          X: 25,
          USA: 40,
          China: 46,
          Russia: 31,
          Switch: 0,
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          X: 30,
          USA: 78,
          China: 50,
          Russia: 19,
          Switch: 0,
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          X: 35,
          USA: 13,
          China: 90,
          Russia: 52,
          Switch: 0,
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          X: 40,
          USA: 78,
          China: 132,
          Russia: 50,
          Switch: 1
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          X: 45,
          USA: 40,
          China: 134,
          Russia: 34,
          Switch: 0,
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          X: 50,
          USA: 80,
          China: 96,
          Russia: 38,
          Switch: 0,
      }));
  }
}
