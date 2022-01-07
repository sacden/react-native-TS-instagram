export class HistoryHelper {
  static getHistory = (history: any[]) => {
    return history.sort((a, b) => Number(b.active) - Number(a.active));
  };
}
