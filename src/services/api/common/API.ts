import { instance } from '../axiosConfig';
import { Query } from './types';

class API<T> {
  private urlPrefix: string;

  constructor(urlPrefix: string) {
    this.urlPrefix = urlPrefix;
  }

  public getDataWithHeader({ key, value }: { key: string; value: string }): Promise<T> {
    return instance
      .get(this.urlPrefix, {
        headers: { [key]: value },
      })
      .then((response) => response.data);
  }

  public getDataWithQuery(params: Query): Promise<T> {
    return instance
      .get(this.urlPrefix, {
        params,
      })
      .then((response) => response.data);
  }

  public async sentData(values: { [key: string]: string }): Promise<T> {
    return instance
      .post<FormData, { data: T }>(this.urlPrefix, values)
      .then((response) => response.data);
  }

  public async sentDataWithHeader(
    header: { key: string; value: string },
    values?: { [key: string]: string },
  ) {
    return instance
      .post<FormData, { data: T }>(this.urlPrefix, values, {
        headers: { [header.key]: header.value },
      })
      .then((response) => response.data);
  }
}

export { API };
