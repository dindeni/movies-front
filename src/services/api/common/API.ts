import { instance } from '../axiosConfig';

class API<T> {
  private urlPrefix: string;

  constructor(urlPrefix: string) {
    this.urlPrefix = urlPrefix;
  }

  public getData(): Promise<T> {
    return instance.get(this.urlPrefix).then((response) => response.data);
  }
}

export { API };
