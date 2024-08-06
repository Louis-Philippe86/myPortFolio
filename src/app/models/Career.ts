export class Career{
  constructor(
    public title : string,
    public date : string,
    public imageUrl : string,
    public tasks : string[],
    public company : {
      name : string,
      city : string,

    },
  ) {
  }
}
