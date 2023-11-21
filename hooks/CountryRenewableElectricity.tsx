export class CountryRenewableElectricityItem {
  public constructor(init: Partial<CountryRenewableElectricityItem>) {
      Object.assign(this, init);
  }

  public x: string;
  public A: number;
  public B: number;
  public C: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
  public constructor() {
      super();
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:00`,
          A: 34,
          B: 21,
          C: 19
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:05`,
          A: 43,
          B: 26,
          C: 24
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:10`,
          A: 66,
          B: 29,
          C: 28
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:15`,
          A: 69,
          B: 32,
          C: 26
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:20`,
          A: 58,
          B: 47,
          C: 38
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:25`,
          A: 40,
          B: 46,
          C: 31
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:30`,
          A: 78,
          B: 50,
          C: 19
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:35`,
          A: 13,
          B: 90,
          C: 52
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:40`,
          A: 78,
          B: 132,
          C: 50
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:45`,
          A: 40,
          B: 134,
          C: 34
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          x: `00:00:50`,
          A: 80,
          B: 96,
          C: 38
      }));
  }
}
