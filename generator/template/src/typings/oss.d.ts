declare namespace OSS {
  declare class Wrapper {
    constructor({
      accessKeyId: string,
      accessKeySecret: string,
      stsToken: string,
      endpoint: string,
      bucket: string,
    })

    put(name: string, buffer: Buffer): Promise<any>
  }
}