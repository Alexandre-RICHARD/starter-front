export class ExistHelper {
  static isNotNullorUndefined(value: unknown): boolean {
    if (value !== null && value !== undefined) {
      return true;
    }
    return false;
  }
}
